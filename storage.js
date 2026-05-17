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
  try{const s=localStorage.getItem('sp-streak');
    if(s){const sd=JSON.parse(s);const yk=dkey(-1);
      if(sd.lastDay===dkey(0)||sd.lastDay===yk)streak=sd.streak||0;else streak=0;}}catch(e){}
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
  if(viewOffset===0){
    const tot=tasks.length,n=doneCount();
    if(n===tot&&tot>0){
      try{const s=localStorage.getItem('sp-streak');let sd=s?JSON.parse(s):{streak:0,lastDay:''};
        if(sd.lastDay!==dkey(0)){sd.streak=sd.lastDay===dkey(-1)?sd.streak+1:1;
          sd.lastDay=dkey(0);streak=sd.streak;
          localStorage.setItem('sp-streak',JSON.stringify(sd));
          document.getElementById('streakEl').textContent=streak;}}catch(e){}
    }
  }
}