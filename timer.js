/* ═══════════════════════════════════════════════
   TIMER / POMODORO MODAL
═══════════════════════════════════════════════ */
function openTaskModal(id){
  const t=tasks.find(t=>t.id===id);if(!t)return;
  loadTaskStartTimes();
  timerTaskId=id;timerSeconds=(t.mins||25)*60;timerTotal=(t.mins||25)*60;
  timerRunning=false;clearInterval(timerInterval);
  pomodoroMode=false;pomoPhase='work';pomoCount=0;clearInterval(pomoInterval);
  showModal(buildTimerModal(t));
}
function buildTimerModal(t){
  const logMin=timeLogs[t.id]||0;
  const now=new Date();
  const hh=String(now.getHours()).padStart(2,'0');
  const mm=String(now.getMinutes()).padStart(2,'0');
  const nowStr=`${hh}:${mm}`;
  const savedStart=taskStartTimes[t.id]||'';
  return`<p class="modal-title">Task Timer</p>
  <p class="modal-task">${escHtml(t.label)}</p>
  <div id="pomo-dots" class="pomo-indicator" style="display:none">${[0,1,2,3].map(i=>`<div class="pomo-dot" id="pd-${i}"></div>`).join('')}</div>
  <div id="pomo-mode" class="pomo-mode-badge work" style="display:none">WORK SESSION</div>
  <div class="timer-display" id="timerDisp">${fmtTimer(timerSeconds)}</div>
  <p class="timer-sub" id="timerSub">${logMin>0?'Logged: '+fmtTime(logMin):'Click start or use Pomodoro mode'}</p>
  <div class="modal-row" style="justify-content:center;margin-bottom:8px;gap:14px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:6px;">
      <span class="modal-label">Est. min</span>
      <input class="modal-input" id="taskMinsInp" type="number" min="1" max="300" value="${t.mins||25}" style="width:72px;text-align:center;">
      <button class="modal-btn" onclick="applyTaskMins('${t.id}')">Set</button>
    </div>
    <div style="display:flex;align-items:center;gap:6px;">
      <span class="modal-label" style="white-space:nowrap">🕐 Started at</span>
      <input class="modal-input" id="taskStartInp" type="time" value="${savedStart||nowStr}" style="width:100px;text-align:center;" onchange="saveTaskStartTime('${t.id}')">
    </div>
  </div>
  ${savedStart?`<p style="text-align:center;font-size:11px;color:var(--muted);margin-bottom:10px;">Started at <b style="color:var(--accent)">${savedStart}</b> · running ${getElapsedSince(savedStart)}</p>`:''}
  <div class="modal-btns">
    <button class="modal-btn" onclick="closeModal()">Close</button>
    <button class="modal-btn" onclick="resetTimer('${t.id}')">Reset</button>
    <button class="modal-btn" onclick="startPomodoro('${t.id}')">🍅 Pomo</button>
    <button class="modal-btn primary" id="timerStartBtn" onclick="toggleTimerWithStart('${t.id}')">Start</button>
  </div>`;
}
function applyTaskMins(id){
  const inp=document.getElementById('taskMinsInp');if(!inp)return;
  const v=parseInt(inp.value)||25;
  const t=tasks.find(t=>t.id===id);if(t)t.mins=v;
  timerSeconds=v*60;timerTotal=v*60;timerRunning=false;clearInterval(timerInterval);
  const d=document.getElementById('timerDisp');if(d)d.textContent=fmtTimer(timerSeconds);
  const btn=document.getElementById('timerStartBtn');if(btn)btn.textContent='Start';
  saveGlobal();
  const tb=document.querySelector(`#row-${id} .task-time-btn`);
  if(tb)tb.textContent='⏱ '+fmtTime(v);
}
function toggleTimer(id){
  if(timerRunning){
    clearInterval(timerInterval);timerRunning=false;
    const btn=document.getElementById('timerStartBtn');if(btn)btn.textContent='Resume';
  }else{
    timerRunning=true;
    const btn=document.getElementById('timerStartBtn');if(btn)btn.textContent='Pause';
    timerInterval=setInterval(()=>{
      timerSeconds--;
      const d=document.getElementById('timerDisp');if(d)d.textContent=fmtTimer(timerSeconds);
      if(timerSeconds<=0){
        clearInterval(timerInterval);timerRunning=false;
        const btn=document.getElementById('timerStartBtn');if(btn)btn.textContent='Done!';
        playSoundProfile('timer');
        const t=tasks.find(t=>t.id===id);
        if(t){timeLogs[id]=(timeLogs[id]||0)+(t.mins||25);saveDay();updateProg();}
        const sub=document.getElementById('timerSub');if(sub)sub.textContent='Session complete!';
      }
      if(timerSeconds>0&&timerSeconds%60===0)playSoundProfile('tick');
    },1000);
  }
}
function resetTimer(id){
  clearInterval(timerInterval);timerRunning=false;
  pomodoroMode=false;clearInterval(pomoInterval);
  const t=tasks.find(t=>t.id===id);
  timerSeconds=(t?t.mins||25:25)*60;timerTotal=timerSeconds;
  const d=document.getElementById('timerDisp');if(d)d.textContent=fmtTimer(timerSeconds);
  const btn=document.getElementById('timerStartBtn');if(btn)btn.textContent='Start';
  const pd=document.getElementById('pomo-dots');if(pd)pd.style.display='none';
  const pm=document.getElementById('pomo-mode');if(pm)pm.style.display='none';
  const sub=document.getElementById('timerSub');if(sub)sub.textContent='';
}
function startPomodoro(id){
  clearInterval(timerInterval);clearInterval(pomoInterval);timerRunning=false;
  pomodoroMode=true;pomoPhase='work';pomoCount=0;
  timerSeconds=25*60;timerTotal=25*60;
  const pd=document.getElementById('pomo-dots');if(pd)pd.style.display='flex';
  const pm=document.getElementById('pomo-mode');if(pm){pm.style.display='block';pm.textContent='WORK SESSION';pm.className='pomo-mode-badge work';}
  updatePomoDots();
  const d=document.getElementById('timerDisp');if(d)d.textContent=fmtTimer(timerSeconds);
  const btn=document.getElementById('timerStartBtn');if(btn)btn.textContent='Pause';
  timerRunning=true;
  timerInterval=setInterval(()=>{
    timerSeconds--;
    const d=document.getElementById('timerDisp');if(d)d.textContent=fmtTimer(timerSeconds);
    if(timerSeconds<=0){
      clearInterval(timerInterval);timerRunning=false;
      if(pomoPhase==='work'){
        pomoCount++;timeLogs[id]=(timeLogs[id]||0)+25;saveDay();updateProg();
        updatePomoDots();
        if(pomoCount>=4){const sub=document.getElementById('timerSub');if(sub)sub.textContent='4 pomodoros done! Take a long break.';playSoundProfile('timer');return;}
        playSoundProfile('break');
        const pm=document.getElementById('pomo-mode');if(pm){pm.textContent='BREAK TIME';pm.className='pomo-mode-badge brk';}
        const sub=document.getElementById('timerSub');if(sub)sub.textContent='Break! Pomodoro '+(pomoCount)+'/4 done.';
        pomoPhase='break';timerSeconds=5*60;
      }else{
        pomoPhase='work';timerSeconds=25*60;
        const pm=document.getElementById('pomo-mode');if(pm){pm.textContent='WORK SESSION';pm.className='pomo-mode-badge work';}
        playSoundProfile('complete');
      }
      const dd=document.getElementById('timerDisp');if(dd)dd.textContent=fmtTimer(timerSeconds);
      timerRunning=true;
      timerInterval=setInterval(arguments.callee,1000);
    }
    if(timerSeconds>0&&timerSeconds%60===0&&pomoPhase==='work')playSoundProfile('tick');
  },1000);
  const sub=document.getElementById('timerSub');if(sub)sub.textContent='Pomodoro running — 25 min work, 5 min break';
}
function updatePomoDots(){
  for(let i=0;i<4;i++){
    const dot=document.getElementById('pd-'+i);if(!dot)continue;
    if(i<pomoCount)dot.className='pomo-dot done';
    else if(i===pomoCount&&pomoPhase==='work')dot.className='pomo-dot current';
    else dot.className='pomo-dot';
  }
}
/* ═══════════════════════════════════════════════
   START TIME TRACKING
═══════════════════════════════════════════════ */
// persisted per-task start times for today
let taskStartTimes = {};
function loadTaskStartTimes(){
  try{const r=localStorage.getItem('sp-start-times-'+dkey(0));taskStartTimes=r?JSON.parse(r):{};}catch(e){taskStartTimes={};}
}
function saveTaskStartTime(id){
  const inp=document.getElementById('taskStartInp');if(!inp)return;
  taskStartTimes[id]=inp.value;
  try{localStorage.setItem('sp-start-times-'+dkey(0),JSON.stringify(taskStartTimes));}catch(e){}
  // update the live "running since" line if present
  const sub=document.getElementById('timerSub');
  if(sub&&!timerRunning)sub.textContent='Started at '+inp.value+' · running '+getElapsedSince(inp.value);
}
function getElapsedSince(timeStr){
  if(!timeStr)return'';
  try{
    const[h,m]=timeStr.split(':').map(Number);
    const now=new Date();const start=new Date();
    start.setHours(h,m,0,0);
    const diffMs=now-start;if(diffMs<0)return'';
    const diffMins=Math.floor(diffMs/60000);
    if(diffMins<60)return diffMins+'m ago';
    return Math.floor(diffMins/60)+'h '+(diffMins%60)+'m ago';
  }catch(e){return'';}
}
function toggleTimerWithStart(id){
  // Auto-stamp start time on first press
  if(!timerRunning){
    const inp=document.getElementById('taskStartInp');
    if(inp&&!taskStartTimes[id]){
      taskStartTimes[id]=inp.value;
      try{localStorage.setItem('sp-start-times-'+dkey(0),JSON.stringify(taskStartTimes));}catch(e){}
    }
  }
  toggleTimer(id);
}