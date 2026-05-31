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
  clearInterval(timerInterval);timerRunning=false;
  if(typeof hideTimerBar==='function')hideTimerBar();
  if(timerTaskId){
    const t=tasks.find(t=>t.id===timerTaskId);
    if(t){
      const elapsed=Math.round((timerTotal-timerSeconds)/60);
      if(elapsed>0){timeLogs[timerTaskId]=(timeLogs[timerTaskId]||0)+elapsed;saveDay();updateProg();}
    }
  }
  timerTaskId=null;
  document.getElementById('modalOverlay').style.display='none';
}
function overlayClick(e){if(e.target===document.getElementById('modalOverlay'))closeModal();}
function openDonate(){
  showModal(`<div style="text-align:center;padding:16px 8px;background:var(--surface);border-radius:12px;">
    <p style="font-size:24px;margin-bottom:8px;">💛</p>
    <p style="font-size:24px;font-weight:700;color:var(--text);margin-bottom:6px;">Support Vexo</p>
    <p style="font-size:14px;color:var(--muted);line-height:1.6;margin-bottom:20px;">
      If Vexo helps you study, please consider donating to keep it free forever.
    </p>
    <div style="display:flex;justify-content:center;margin-bottom:16px;">
      <img src="public/Donate.jpeg" alt="Donate QR Code" style="width:300px;height:300px;border-radius:14px;border:2px solid var(--border2);">
    </div>
    <p style="font-size:12px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:10px;">Direct UPI Payment</p>
    <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:18px;">
      <p id="donateUpi" style="font-family:var(--mono);font-size:16px;color:var(--accent);font-weight:600;word-break:break-all;">rushikeshingale2001@okicici</p>
      <button class="modal-btn" style="padding:5px 12px;font-size:12px;flex-shrink:0;" onclick="navigator.clipboard.writeText('rushikeshingale2001@okicici');this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',2000)">Copy</button>
    </div>
    <p style="font-size:13px;color:var(--muted);line-height:1.5;margin-bottom:20px;">Every donation, no matter how small, helps cover<br>hosting and AI API costs.</p>
    <p style="font-size:14px;color:var(--text);font-weight:500;">Thank you for your kindness!</p>
    <div class="modal-btns" style="justify-content:center;margin-top:20px;">
      <button class="modal-btn primary" onclick="closeModal()">Close</button>
    </div>
  </div>`);
}