
/* ═══════════════════════════════════════════════
   PERSISTENT TIMER BAR
═══════════════════════════════════════════════ */
function initTimerBar(){
  // Inject timer bar before app content
  const app=document.querySelector('.app');
  if(!app||document.getElementById('timer-bar'))return;
  const bar=document.createElement('div');
  bar.id='timer-bar';bar.className='timer-bar';
  bar.innerHTML=`<span class="timer-bar-label">⏱ <span id="tb-task">Task</span></span>
    <span class="timer-bar-time" id="tb-time">00:00</span>
    <button class="timer-bar-btn" id="tb-pause" onclick="timerBarPause()">Pause</button>
    <button class="timer-bar-btn stop" onclick="timerBarStop()">Stop</button>`;
  app.prepend(bar);
}
function updateTimerBar(taskLabel,seconds){
  const bar=document.getElementById('timer-bar');if(!bar)return;
  const taskEl=document.getElementById('tb-task');
  const timeEl=document.getElementById('tb-time');
  if(taskEl)taskEl.textContent=taskLabel||'Task';
  if(timeEl)timeEl.textContent=fmtTimer(seconds);
  bar.classList.add('running');
}
function hideTimerBar(){
  const bar=document.getElementById('timer-bar');if(bar)bar.classList.remove('running');
}
function timerBarPause(){
  // Delegate to existing timer pause logic
  const pauseBtn=document.querySelector('.pomo-pause,.timer-pause');
  if(pauseBtn)pauseBtn.click();
  else{clearInterval(timerInterval);timerRunning=false;
    const tb=document.getElementById('tb-pause');if(tb)tb.textContent='Resume';}
}
function timerBarStop(){closeModal();}