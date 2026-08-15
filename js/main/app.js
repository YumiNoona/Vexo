
/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
let _appStarted = false;
async function startApp() {
  if(_appStarted) return;
  _appStarted = true;
  if(typeof initLocalPersistence==='function') await initLocalPersistence();
  loadGlobal();
  loadDay();
  updateHeader();
  renderToday();
  document.title='Vexo — Today';
  initMultiTabSync();
  initTimerBar();
  // History is retained indefinitely. Users control deletion from Settings.
  // Save timer time on page unload (prevents data loss if timer running)
  window.addEventListener('beforeunload', function() {
    if (timerRunning && timerTaskId) {
      const elapsed = Math.round((timerTotal - timerSeconds) / 60);
      if (elapsed > 0) {
        timeLogs[timerTaskId] = (timeLogs[timerTaskId] || 0) + elapsed;
        try { localStorage.setItem('sp-d-' + viewKey(), JSON.stringify({ done, timeLogs })); } catch(e) {}
      }
    }
  });
  // Auto-check for updates on desktop (delayed so UI loads first)
  if(typeof window.__TAURI_INTERNALS__!=='undefined'){
    setTimeout(function(){
      var lastCheck = localStorage.getItem('sp-update-check');
      var today = new Date().toDateString();
      if(lastCheck !== today){
        localStorage.setItem('sp-update-check', today);
        checkForUpdates(true);
      }
    }, 3000);
  }
}

/* ═══════════════════════════════════════════════
   MULTI-TAB SYNC
═══════════════════════════════════════════════ */
function initMultiTabSync(){
  window.addEventListener('storage',e=>{
    if(!e.key||!e.key.startsWith('sp-'))return;
    loadGlobal();loadDay();
    if(activeTab==='today')renderToday();
    else if(activeTab==='goals')renderGoals();
    else if(activeTab==='hub')renderHub(hubSub);
  });
}

// Start app immediately (local-only mode)
startApp();
