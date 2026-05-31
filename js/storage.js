/* ═══════════════════════════════════════════════
   STORAGE
═══════════════════════════════════════════════ */
function getPhases(){
  try{const r=localStorage.getItem('sp-phases');return r?JSON.parse(r):JSON.parse(JSON.stringify(PHASES));}
  catch(e){return JSON.parse(JSON.stringify(PHASES));}
}
function savePhases(p){try{localStorage.setItem('sp-phases',JSON.stringify(p));}catch(e){}}

function getSched(){
  try{const r=localStorage.getItem('sp-sched');return r?JSON.parse(r):JSON.parse(JSON.stringify(DEFAULT_SCHED));}
  catch(e){return JSON.parse(JSON.stringify(DEFAULT_SCHED));}
}
function saveSched(s){try{localStorage.setItem('sp-sched',JSON.stringify(s));}catch(e){}}

function loadGlobal(){
  try{const t=localStorage.getItem('sp-tasks');tasks=t?JSON.parse(t):JSON.parse(JSON.stringify(DEFAULT_TASKS));}
  catch(e){tasks=JSON.parse(JSON.stringify(DEFAULT_TASKS));}

  // ── Streak load (Duolingo/Snapchat rules) ──────────────────────────────
  // Streak is valid if lastDay is today OR yesterday.
  // Any gap beyond yesterday = streak is broken (expired at midnight).
  try{
    const s=localStorage.getItem('sp-streak');
    if(s){
      const sd=JSON.parse(s);
      const today=dkey(0), yesterday=dkey(-1);
      if(sd.lastDay===today||sd.lastDay===yesterday){
        streak=sd.streak||0;
      } else {
        // Missed a day — streak is lost. Save the reset so it persists.
        streak=0;
        localStorage.setItem('sp-streak',JSON.stringify({streak:0,lastDay:''}));
      }
    }
  }catch(e){streak=0;}
  // ──────────────────────────────────────────────────────────────────────

  loadXP();

  try{const s=localStorage.getItem('sp-settings');
    settings=s?JSON.parse(s):{profile:'UI/UX Student',accentColor:'#d4960a',soundEnabled:true,soundProfile:'soft',jobGoalDate:''};}
  catch(e){settings={profile:'UI/UX Student',accentColor:'#d4960a',soundEnabled:true,soundProfile:'soft',jobGoalDate:''};}
  applyAccent(settings.accentColor||'#d4960a');
  if(settings.fontId)applyFont(settings.fontId);
  const ti=document.getElementById('appTitle');
  if(ti&&settings.plannerName)ti.textContent=settings.plannerName;
}
function saveGlobal(){try{localStorage.setItem('sp-tasks',JSON.stringify(tasks));}catch(e){}}
function saveSettings(){try{localStorage.setItem('sp-settings',JSON.stringify(settings));}catch(e){}}
function loadDay(){
  const k=viewKey();
  try{const r=localStorage.getItem('sp-d-'+k);
    if(r){const p=JSON.parse(r);done=p.done||{};timeLogs=p.timeLogs||{};}
    else{done={};timeLogs={};}}catch(e){done={};timeLogs={};}
}
function saveDay(){
  try{localStorage.setItem('sp-d-'+viewKey(),JSON.stringify({done,timeLogs}));}catch(e){}

  // ── Streak update (only for today, not past/future views) ─────────────
  // Rules (Duolingo / Snapchat style):
  //   • Complete at least 1 task today → streak is alive for today
  //   • First task of the day extends the streak (once per day only)
  //   • If lastDay was yesterday  → streak continues (+1)
  //   • If lastDay was not yesterday → fresh start (=1)
  //   • Unchecking tasks never reduces the streak once earned for the day
  if(viewOffset===0){
    const n=doneCount();
    if(n>0){
      try{
        const s=localStorage.getItem('sp-streak');
        let sd=s?JSON.parse(s):{streak:0,lastDay:''};
        const today=dkey(0), yesterday=dkey(-1);
        if(sd.lastDay!==today){
          // First completion of this day — extend or restart streak
          sd.streak = sd.lastDay===yesterday ? sd.streak+1 : 1;
          sd.lastDay = today;
          streak = sd.streak;
          localStorage.setItem('sp-streak',JSON.stringify(sd));
          const el=document.getElementById('streakEl');
          if(el)el.textContent=streak;
        }
        // If lastDay===today the streak was already counted for today — do nothing
      }catch(e){}
    }
  }
  // ──────────────────────────────────────────────────────────────────────
}