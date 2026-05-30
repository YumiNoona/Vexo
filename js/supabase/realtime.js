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