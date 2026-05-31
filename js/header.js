/* ═══════════════════════════════════════════════
   DATE NAV & HEADER
═══════════════════════════════════════════════ */
function shiftDay(d){viewOffset=Math.min(7,viewOffset+d);loadDay();renderToday();updateHeader();}
function goToday(){viewOffset=0;loadDay();renderToday();updateHeader();}
function updateHeader(){
  const d=new Date();d.setDate(d.getDate()+viewOffset);
  const off=viewOffset;
  document.getElementById('dateLabel').textContent=off===0?'Today, '+d.toLocaleDateString('en-US',{month:'long',day:'numeric'}):d.toLocaleDateString('en-US',{weekday:'short',month:'long',day:'numeric'});
  document.getElementById('nextBtn').style.visibility=off<7?'visible':'hidden';
  document.getElementById('todayBtn').style.display=off!==0?'inline-block':'none';
  document.getElementById('streakEl').textContent=streak;
  document.getElementById('timeEl').textContent=fmtTime(totalStudyMins());
  updateXPDisplay();
  const badge=document.getElementById('countdownBadge');
  if(settings.jobGoalDate){
    const goal=new Date(settings.jobGoalDate);
    const today=new Date();today.setHours(0,0,0,0);
    const diff=Math.ceil((goal-today)/(1000*60*60*24));
    if(diff>0){badge.style.display='inline-flex';badge.textContent=diff+' days left';}
    else if(diff===0){badge.style.display='inline-flex';badge.textContent='🎯 Goal day!';}
    else{badge.style.display='none';}
  }else{badge.style.display='none';}
}
function editTitle(){
  const el=document.getElementById('appTitle');const cur=el.textContent;
  el.outerHTML=`<input class="edit-h1" id="appTitle" value="${cur}" onblur="finishTitle()" onkeydown="if(event.key==='Enter')finishTitle();if(event.key==='Escape'){document.getElementById('appTitle').value='${cur}';finishTitle();}">`;
  setTimeout(()=>{const i=document.getElementById('appTitle');if(i){i.focus();i.select();}},10);
}
function finishTitle(){
  const inp=document.getElementById('appTitle');if(!inp)return;
  const val=inp.value.trim()||'Vexo';
  settings.plannerName=val;saveSettings();
  inp.outerHTML=`<h1 id="appTitle" onclick="editTitle()" title="Click to rename">${escHtml(val)}</h1>`;
}