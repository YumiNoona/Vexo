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