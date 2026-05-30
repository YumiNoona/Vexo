/* ═══════════════════════════════════════════════
   SUPABASE — Auth + Real-time Cloud Sync  v2
   ───────────────────────────────────────────────
   Improvements over v1:
   • Debounced batch upserts — N rapid saves = 1
     round-trip per 800 ms burst (not N requests)
   • Offline retry queue — failed writes re-queued
     and flushed automatically when back online
   • Real-time cross-device subscription — changes
     on phone instantly appear on laptop
   • Fixed date format — pushAllToCloud now uses
     the same non-padded format as dkey() so keys
     actually match what's stored in localStorage
   • sp-mood- keys included in initial push
     (were silently skipped before)
   • Safer JSON handling — parse errors no longer
     silently drop writes
   • Pending writes win — real-time update for a
     key you're mid-editing is safely ignored
═══════════════════════════════════════════════ */

// Injected by build.js from Vercel env vars:
//   SUPABASE_URL      → window.SUPABASE_URL
//   SUPABASE_ANON_KEY → window.SUPABASE_ANON

/* ── Init client ─────────────────────────────── */
const url = window.SUPABASE_URL || '';
const anon = window.SUPABASE_ANON || '';
const hasSupabase = url && anon && !url.includes('YOUR_PROJECT_ID') && !anon.includes('YOUR_ANON_PUBLIC_KEY');

let sb = null;
if (hasSupabase) {
  try {
    const { createClient } = window.supabase;
    sb = createClient(url, anon, {
      auth: { persistSession: true, autoRefreshToken: true }
    });
    window.SUPABASE_ENABLED = true;
  } catch (err) {
    console.error("Failed to initialize Supabase:", err);
    window.SUPABASE_ENABLED = false;
  }
} else {
  window.SUPABASE_ENABLED = false;
}

let _syncEnabled = false; // only enabled after initial pull

/* ══════════════════════════════════════════════
   AUTH HELPERS
══════════════════════════════════════════════ */
async function sbGetSession() {
  const { data: { session } } = await sb.auth.getSession();
  return session;
}
async function sbSignIn(email, password) {
  return await sb.auth.signInWithPassword({ email, password });
}
async function sbSignUp(email, password) {
  return await sb.auth.signUp({ email, password });
}
async function sbSignOut() {
  _syncEnabled = false;
  if (sb) {
    flushBatch(); // attempt to save any pending writes before sign out
    try { await sb.auth.signOut(); } catch(e) {}
  }
  localStorage.clear();
  location.href = 'login.html';
}

/* ══════════════════════════════════════════════
   DEBOUNCED BATCH SYNC
   Collects all writes within an 800ms window
   then sends them as a single upsert.
   Old v1 sent one request per localStorage write
   — rapid task-checking caused 10+ parallel
   requests; now it's always just 1.
══════════════════════════════════════════════ */
const _pendingWrites = new Map(); // key → parsed value
let _batchTimer     = null;
let _retryTimer     = null;
const BATCH_DELAY   = 800;  // ms — tune if needed
const RETRY_DELAY   = 5000; // ms

function queueSync(key, rawValue) {
  if (!_syncEnabled) return;
  try {
    const value = typeof rawValue === 'string' ? JSON.parse(rawValue) : rawValue;
    _pendingWrites.set(key, value);
    clearTimeout(_batchTimer);
    _batchTimer = setTimeout(flushBatch, BATCH_DELAY);
  } catch (e) {
    // rawValue wasn't valid JSON — store as-is (shouldn't happen in this app)
    _pendingWrites.set(key, rawValue);
    clearTimeout(_batchTimer);
    _batchTimer = setTimeout(flushBatch, BATCH_DELAY);
  }
}

async function flushBatch() {
  clearTimeout(_batchTimer);
  if (!_syncEnabled || _pendingWrites.size === 0) return;

  const session = await sbGetSession();
  if (!session) return;

  // Snapshot pending writes and clear the queue optimistically
  const snapshot = new Map(_pendingWrites);
  _pendingWrites.clear();

  const rows = [];
  snapshot.forEach((value, key) => {
    rows.push({ user_id: session.user.id, key, value,
                updated_at: new Date().toISOString() });
  });

  try {
    const { error } = await sb
      .from('planner_data')
      .upsert(rows, { onConflict: 'user_id,key' });

    if (error) throw error;
  } catch (e) {
    // Write failed — re-queue all rows and schedule a retry
    snapshot.forEach((value, key) => {
      if (!_pendingWrites.has(key)) _pendingWrites.set(key, value); // don't overwrite newer edits
    });
    scheduleRetry();
  }
}

function scheduleRetry() {
  clearTimeout(_retryTimer);
  _retryTimer = setTimeout(() => {
    if (navigator.onLine) flushBatch();
    else scheduleRetry(); // still offline — keep trying
  }, RETRY_DELAY);
}

// Flush automatically when the network comes back
window.addEventListener('online', () => {
  if (_pendingWrites.size > 0) flushBatch();
});

// Best-effort flush before the tab closes
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && _pendingWrites.size > 0) flushBatch();
});

/* ── Intercept localStorage to auto-sync all app writes ── */
(function () {
  const _orig = Storage.prototype.setItem;
  Storage.prototype.setItem = function (key, value) {
    _orig.call(this, key, value);
    if (this === localStorage && _syncEnabled &&
       (key.startsWith('sp-') || key.startsWith('wg-'))) {
      queueSync(key, value); // batched, non-blocking
    }
  };
})();

/* ══════════════════════════════════════════════
   REAL-TIME CROSS-DEVICE SYNC
   When another device saves data, this tab
   receives the change via Supabase Realtime
   and updates localStorage + refreshes the UI
   without a full page reload.
══════════════════════════════════════════════ */
function subscribeRealtime(userId) {
  sb.channel('vexo-planner-' + userId)
    .on('postgres_changes', {
      event:  'UPDATE',
      schema: 'public',
      table:  'planner_data',
      filter: `user_id=eq.${userId}`
    }, (payload) => {
      const { key, value } = payload.new || {};
      if (!key || !value || !_syncEnabled) return;
      // If we have a pending local write for this key, our version wins —
      // ignore the incoming change so we don't overwrite the user's typing.
      if (_pendingWrites.has(key)) return;

      // Apply incoming change to localStorage silently (no re-sync echo)
      _syncEnabled = false;
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
      _syncEnabled = true;

      // Refresh only the relevant part of the UI
      refreshUIForKey(key);
    })
    .subscribe();
}

function refreshUIForKey(key) {
  // Guard: these globals might not exist yet on first load
  if (typeof loadGlobal !== 'function') return;
  try {
    if (key === 'sp-tasks' || key === 'sp-settings') {
      loadGlobal();
      if (typeof updateHeader === 'function') updateHeader();
      if (typeof activeTab !== 'undefined' && activeTab === 'today' && typeof renderToday === 'function') renderToday();
    } else if (key === 'sp-streak') {
      loadGlobal();
      if (typeof updateHeader === 'function') updateHeader();
    } else if (key.startsWith('sp-d-')) {
      // Only re-render if it's the day currently on screen
      if (typeof viewKey === 'function' && key === 'sp-d-' + viewKey()) {
        if (typeof loadDay === 'function') loadDay();
        if (typeof activeTab !== 'undefined' && activeTab === 'today' && typeof renderToday === 'function') renderToday();
        if (typeof updateHeader === 'function') updateHeader();
      }
    } else if (key === 'sp-phases' || key === 'sp-sched') {
      if (typeof activeTab !== 'undefined' && activeTab === 'plan' && typeof renderPlan === 'function') renderPlan();
    } else if (key.startsWith('wg-')) {
      if (typeof activeTab !== 'undefined' && activeTab === 'goals' && typeof renderGoals === 'function') renderGoals();
    }
  } catch (e) { /* UI not ready yet — ignore */ }
}

/* ══════════════════════════════════════════════
   PULL ALL DATA  (cloud → localStorage on login)
══════════════════════════════════════════════ */
async function pullAllFromCloud(userId) {
  const { data, error } = await sb
    .from('planner_data')
    .select('key, value, updated_at')
    .eq('user_id', userId);

  if (error || !data) return;

  // Disable sync proxy while restoring to avoid echo-writes back to cloud
  _syncEnabled = false;
  data.forEach(({ key, value }) => {
    try {
      if (value !== null && value !== undefined) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {}
  });
  _syncEnabled = true;
}

/* ══════════════════════════════════════════════
   PUSH ALL LOCAL DATA TO CLOUD
   Used after sign-up so first-device data is
   saved. Uses dkey()-compatible date format.
══════════════════════════════════════════════ */
async function pushAllToCloud(userId) {
  const rows = [];
  const ts   = new Date().toISOString();

  // Static keys
  ['sp-phases','sp-sched','sp-tasks','sp-streak','sp-settings',
   'sp-kanban','sp-resources','sp-flashcards-v2'].forEach(k => {
    const v = localStorage.getItem(k);
    if (!v) return;
    try { rows.push({ user_id: userId, key: k, value: JSON.parse(v), updated_at: ts }); }
    catch (e) {}
  });

  // Dynamic date keys — last 90 days
  // IMPORTANT: use same non-padded format as dkey() in helpers.js
  // e.g. "2026-5-17" NOT "2026-05-17" — mismatch = duplicate keys in DB
  for (let i = 0; i < 90; i++) {
    const d  = new Date(); d.setDate(d.getDate() - i);
    const dk = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`; // matches dkey()
    ['sp-d-'+dk, 'sp-j-'+dk, 'sp-start-times-'+dk, 'sp-mood-'+dk].forEach(k => {
      const v = localStorage.getItem(k);
      if (!v) return;
      try {
        // sp-mood- is a plain emoji string, not JSON — wrap it
        const parsed = k.startsWith('sp-mood-') ? v : JSON.parse(v);
        rows.push({ user_id: userId, key: k, value: parsed, updated_at: ts });
      } catch (e) {}
    });
  }

  // Weekly goal keys — last 12 weeks
  for (let i = 0; i < 12; i++) {
    const d   = new Date(); d.setDate(d.getDate() - i * 7);
    const day = d.getDay() || 7;
    const mon = new Date(d); mon.setDate(d.getDate() - (day - 1));
    const wk  = `wg-${mon.getFullYear()}-${mon.getMonth()+1}-${mon.getDate()}`;
    const v   = localStorage.getItem(wk);
    if (!v) return;
    try { rows.push({ user_id: userId, key: wk, value: JSON.parse(v), updated_at: ts }); }
    catch (e) {}
  }

  // Batch in chunks of 50 to avoid request size limits
  const CHUNK = 50;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK);
    try {
      await sb.from('planner_data').upsert(chunk, { onConflict: 'user_id,key' });
    } catch (e) { /* non-fatal — ongoing sync will catch up */ }
  }
}

/* ══════════════════════════════════════════════
   APP INIT (runs immediately on page load)
══════════════════════════════════════════════ */
(async function () {
  const loadingEl = document.getElementById('sb-loading');

  if (!window.SUPABASE_ENABLED) {
    console.log("Supabase disabled/unconfigured. Falling back to local-only mode.");
    if (loadingEl) {
      loadingEl.style.transition = 'opacity 0.4s';
      loadingEl.style.opacity = '0';
      setTimeout(() => loadingEl.remove(), 400);
    }
    if (typeof window.__startApp === 'function') window.__startApp();
    return;
  }

  const session = await sbGetSession();

  if (!session) {
    location.href = 'login.html';
    return;
  }

  try {
    await pullAllFromCloud(session.user.id);
  } catch (e) {
    // Network down — proceed with cached local data
    _syncEnabled = true;
  }

  // Expose user email for settings display
  window._sbUserEmail = session.user.email;

  // Start real-time cross-device listener
  subscribeRealtime(session.user.id);

  // Fade out loading screen
  if (loadingEl) {
    loadingEl.style.transition = 'opacity 0.4s';
    loadingEl.style.opacity = '0';
    setTimeout(() => loadingEl.remove(), 400);
  }

  if (typeof window.__startApp === 'function') window.__startApp();
})();
