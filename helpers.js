/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function dkey(offset=0){const d=new Date();d.setDate(d.getDate()+offset);return`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;}
function viewKey(){return dkey(viewOffset);}
function doneCount(){return tasks.filter(t=>done[t.id]).length;}
function uid(){return'task-'+Math.random().toString(36).slice(2,8);}
function cats(){const fromTasks=[...new Set(tasks.map(t=>t.cat))];const base=DEFAULT_CATS||['Morning','Afternoon','Evening'];const merged=[...base];fromTasks.forEach(c=>{if(!merged.includes(c))merged.push(c);});return merged;}
function fmtTime(mins){if(!mins)return'0m';if(mins<60)return mins+'m';const h=Math.floor(mins/60),m=mins%60;return m?h+'h '+m+'m':h+'h';}
function fmtTimer(s){const m=Math.floor(Math.abs(s)/60),sec=Math.abs(s)%60;return`${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;}
function totalStudyMins(){
  // Fix: avoid double-counting — if a task has a timeLog use that (actual),
  // else fall back to estimated mins for done STUDY_CAT tasks only.
  let m=0;
  tasks.forEach(t=>{
    if(timeLogs[t.id]){
      m+=timeLogs[t.id]; // actual timer time wins
    } else if(STUDY_CATS.includes(t.cat)&&done[t.id]){
      m+=(t.mins||0); // no timer used — use estimate
    }
  });
  return m;
}
function toMin(ts){const[tp,ap]=ts.split(' ');const[h,m]=tp.split(':').map(Number);return(ap==='PM'&&h!==12?h+12:(ap==='AM'&&h===12?0:h))*60+m;}
function applyAccent(color){
  document.documentElement.style.setProperty('--accent',color);
  const r=parseInt(color.slice(1,3),16),g=parseInt(color.slice(3,5),16),b=parseInt(color.slice(5,7),16);
  document.documentElement.style.setProperty('--accent-dim',`rgba(${r},${g},${b},0.12)`);
  document.documentElement.style.setProperty('--accent-glow',`rgba(${r},${g},${b},0.25)`);
}

const FONT_OPTIONS=[
  {id:'dm-sans',   label:'DM Sans',          family:"'DM Sans', sans-serif",          google:'DM+Sans:wght@400;500;600'},
  {id:'inter',     label:'Inter',             family:"'Inter', sans-serif",             google:'Inter:wght@400;500;600'},
  {id:'outfit',    label:'Outfit',            family:"'Outfit', sans-serif",            google:'Outfit:wght@400;500;600'},
  {id:'nunito',    label:'Nunito',            family:"'Nunito', sans-serif",            google:'Nunito:wght@400;500;600;700'},
  {id:'jost',      label:'Jost',              family:"'Jost', sans-serif",              google:'Jost:wght@400;500;600'},
  {id:'ibm-plex',  label:'IBM Plex Sans',     family:"'IBM Plex Sans', sans-serif",     google:'IBM+Plex+Sans:wght@400;500;600'},
];

function applyFont(fontId){
  const f=FONT_OPTIONS.find(x=>x.id===fontId)||FONT_OPTIONS[0];
  // Load from Google Fonts if not already loaded
  const linkId='gfont-'+f.id;
  if(!document.getElementById(linkId)){
    const link=document.createElement('link');
    link.id=linkId;link.rel='stylesheet';
    link.href=`https://fonts.googleapis.com/css2?family=${f.google}&display=swap`;
    document.head.appendChild(link);
  }
  document.documentElement.style.setProperty('--font',f.family);
}
function escHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* ═══════════════════════════════════════════════
   MODAL HELPERS
═══════════════════════════════════════════════ */
function showModal(html){document.getElementById('modalBox').innerHTML=html;document.getElementById('modalOverlay').style.display='flex';}
function closeModal(){
  clearInterval(timerInterval);clearInterval(pomoInterval);timerRunning=false;
  if(typeof hideTimerBar==='function')hideTimerBar();
  if(timerTaskId){const t=tasks.find(t=>t.id===timerTaskId);
    if(t){const elapsed=Math.round((timerTotal-timerSeconds)/60);
      if(elapsed>0){timeLogs[timerTaskId]=(timeLogs[timerTaskId]||0)+elapsed;saveDay();updateProg();}}}
  timerTaskId=null;
  document.getElementById('modalOverlay').style.display='none';
}
function overlayClick(e){if(e.target===document.getElementById('modalOverlay'))closeModal();}