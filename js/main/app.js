
/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
/* ── Supabase-compatible init wrapper ──────────────
   supabase.js calls window.__startApp() after pulling
   fresh cloud data. If Supabase isn't in use, the
   script below runs immediately as a fallback.
──────────────────────────────────────────────── */
let _appStarted = false;
window.__startApp = function () {
  if(_appStarted) return; // guard: never run twice — prevents duplicate event listeners
  _appStarted = true;
  loadGlobal();
  loadDay();
  updateHeader();
  renderToday();
  document.title='Vexo — Today';
  initMultiTabSync();
  initTimerBar();
  // Prune localStorage keys older than 90 days (local-only users, no Supabase cleanup)
  if(!window.SUPABASE_ENABLED) pruneOldLocalData();
};

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

/* ═══════════════════════════════════════════════
   LOCAL STORAGE PRUNING (no-Supabase path)
   Keeps last 90 days; removes older daily keys.
═══════════════════════════════════════════════ */
function pruneOldLocalData(){
  try{
    const cutoff=new Date();cutoff.setDate(cutoff.getDate()-90);
    const prefixes=['sp-d-','sp-j-','sp-start-times-','sp-mood-'];
    Object.keys(localStorage).forEach(key=>{
      const prefix=prefixes.find(p=>key.startsWith(p));
      if(!prefix)return;
      const datePart=key.slice(prefix.length); // e.g. "2024-3-5"
      const parts=datePart.split('-');
      if(parts.length!==3)return;
      const d=new Date(+parts[0],+parts[1]-1,+parts[2]);
      if(!isNaN(d)&&d<cutoff)localStorage.removeItem(key);
    });
  }catch(e){}
}

// Fallback: start immediately if Supabase isn't loaded
if (!window.SUPABASE_ENABLED) window.__startApp();