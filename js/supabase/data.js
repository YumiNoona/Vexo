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
    // If user previously chose to skip login, proceed with local-only mode
    if (localStorage.getItem('sp-skip-login') === 'true') {
      console.log("Supabase configured but user skipped login. Running local-only.");
      if (loadingEl) {
        loadingEl.style.transition = 'opacity 0.4s';
        loadingEl.style.opacity = '0';
        setTimeout(() => loadingEl.remove(), 400);
      }
      if (typeof window.__startApp === 'function') window.__startApp();
      return;
    }
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