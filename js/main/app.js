
/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
let _appStarted = false;
function startApp() {
  if(_appStarted) return;
  _appStarted = true;
  loadGlobal();
  loadDay();
  updateHeader();
  renderToday();
  document.title='Vexo — Today';
  initMultiTabSync();
  initTimerBar();
  pruneOldLocalData();
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

// Start app immediately (local-only mode)
startApp();