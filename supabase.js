/* ═══════════════════════════════════════════════
   SUPABASE — Auth + Real-time Cloud Sync
   ───────────────────────────────────────────────
   Keys are injected at build time via build.js
   from Vercel Environment Variables — never
   commit real keys to Git.
═══════════════════════════════════════════════ */

// Injected by build.js from Vercel env vars:
//   SUPABASE_URL      → window.SUPABASE_URL
//   SUPABASE_ANON_KEY → window.SUPABASE_ANON

/* ── Init client ─────────────────────────────── */
const { createClient } = window.supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: { persistSession: true, autoRefreshToken: true }
});

/* ── Global flags ────────────────────────────── */
window.SUPABASE_ENABLED = true;
let _syncEnabled = false;   // only enabled after initial pull

/* ══════════════════════════════════════════════
   AUTH HELPERS (used by login.html & settings)
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
  await sb.auth.signOut();
  localStorage.clear();
  location.href = 'login.html';
}

/* ══════════════════════════════════════════════
   CLOUD SYNC  (fire-and-forget — never blocks UI)
══════════════════════════════════════════════ */
async function cloudSync(key, rawValue) {
  try {
    const session = await sbGetSession();
    if (!session) return;
    const value = typeof rawValue === 'string' ? JSON.parse(rawValue) : rawValue;
    await sb.from('planner_data').upsert(
      { user_id: session.user.id, key, value, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,key' }
    );
  } catch (e) {
    /* offline — local save is already done, will re-sync on next load */
  }
}

/* ── Intercept localStorage to auto-sync all app writes ── */
(function () {
  const _orig = Storage.prototype.setItem;
  Storage.prototype.setItem = function (key, value) {
    _orig.call(this, key, value);
    if (this === localStorage && _syncEnabled &&
       (key.startsWith('sp-') || key.startsWith('wg-'))) {
      cloudSync(key, value); // async, non-blocking
    }
  };
})();

/* ══════════════════════════════════════════════
   PULL ALL DATA  (cloud → localStorage on login)
══════════════════════════════════════════════ */
async function pullAllFromCloud(userId) {
  const { data, error } = await sb
    .from('planner_data')
    .select('key, value')
    .eq('user_id', userId);

  if (error || !data) return;

  // Disable sync proxy while restoring to avoid echo-writes
  _syncEnabled = false;
  data.forEach(({ key, value }) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  });
  _syncEnabled = true;
}

/* ══════════════════════════════════════════════
   PUSH ALL LOCAL DATA TO CLOUD
   (used after sign-up so first-device data is saved)
══════════════════════════════════════════════ */
async function pushAllToCloud(userId) {
  const rows = [];
  const ts   = new Date().toISOString();

  // Static keys
  ['sp-phases','sp-sched','sp-tasks','sp-streak','sp-settings',
   'sp-kanban','sp-resources','sp-flashcards-v2'].forEach(k => {
    const v = localStorage.getItem(k);
    if (v) try { rows.push({ user_id: userId, key: k, value: JSON.parse(v), updated_at: ts }); } catch(e){}
  });

  // Dynamic date keys – last 90 days
  for (let i = 0; i < 90; i++) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const dk = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    [['sp-d-'+dk], ['sp-j-'+dk], ['sp-start-times-'+dk]].forEach(([k]) => {
      const v = localStorage.getItem(k);
      if (v) try { rows.push({ user_id: userId, key: k, value: JSON.parse(v), updated_at: ts }); } catch(e){}
    });
  }

  // Weekly goal keys – last 12 weeks
  for (let i = 0; i < 12; i++) {
    const d = new Date(); d.setDate(d.getDate() - i * 7);
    const day = d.getDay() || 7;
    const mon = new Date(d); mon.setDate(d.getDate() - (day - 1));
    const wk = `wg-${mon.getFullYear()}-${mon.getMonth()+1}-${mon.getDate()}`;
    const v = localStorage.getItem(wk);
    if (v) try { rows.push({ user_id: userId, key: wk, value: JSON.parse(v), updated_at: ts }); } catch(e){}
  }

  if (rows.length > 0) {
    await sb.from('planner_data').upsert(rows, { onConflict: 'user_id,key' });
  }
}

/* ══════════════════════════════════════════════
   APP INIT GUARD  (runs immediately on page load)
══════════════════════════════════════════════ */
(async function () {
  const loadingEl = document.getElementById('sb-loading');

  const session = await sbGetSession();

  if (!session) {
    // No active session → redirect to login
    location.href = 'login.html';
    return;
  }

  // Session exists → pull latest cloud data into localStorage
  try {
    await pullAllFromCloud(session.user.id);
  } catch (e) {
    // Network down — proceed with cached local data
    _syncEnabled = true;
  }

  // Expose user email for settings display
  window._sbUserEmail = session.user.email;

  // Fade out loading screen
  if (loadingEl) {
    loadingEl.style.transition = 'opacity 0.4s';
    loadingEl.style.opacity = '0';
    setTimeout(() => loadingEl.remove(), 400);
  }

  // Hand off to app
  if (typeof window.__startApp === 'function') window.__startApp();
})();
