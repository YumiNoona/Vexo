/* ═══════════════════════════════════════════════
   WEEKLY GOALS
═══════════════════════════════════════════════ */
function getWeekKey(){
  const d=new Date();const day=d.getDay()||7;
  const mon=new Date(d);mon.setDate(d.getDate()-(day-1));
  return`wg-${mon.getFullYear()}-${mon.getMonth()+1}-${mon.getDate()}`;
}
function getWeekGoals(){try{const r=localStorage.getItem(getWeekKey());return r?JSON.parse(r):[];}catch(e){return[];}}
function saveWeekGoals(goals){try{localStorage.setItem(getWeekKey(),JSON.stringify(goals));}catch(e){}}
function toggleGoal(idx){
  const goals=getWeekGoals();if(!goals[idx])return;
  goals[idx].done=!goals[idx].done;saveWeekGoals(goals);
  if(document.getElementById('v-today').style.display!=='none')renderToday();
  if(document.getElementById('v-goals').style.display!=='none')renderGoals();
}
function renderGoals(){
  const goals=getWeekGoals();
  const d=new Date();const day=d.getDay()||7;
  const mon=new Date(d);mon.setDate(d.getDate()-(day-1));
  const sun=new Date(mon);sun.setDate(mon.getDate()+6);
  const fmtD=dd=>dd.toLocaleDateString('en-US',{month:'short',day:'numeric'});
  let h=`<div class="weekly-goals-header">
    <p class="week-label-big">Week of ${fmtD(mon)} – ${fmtD(sun)}</p>
    <button class="act-btn" onclick="addWeekGoal()">+ Add goal</button>
  </div>`;
  if(!goals.length){h+=`<div class="empty-state">No goals set this week.<br>Add up to 3 goals to keep your big picture in focus.</div>`;}
  goals.forEach((g,i)=>{
    h+=`<div class="goal-row${g.done?' done-goal':''}">
      <div id="gck-${i}" class="checkbox${g.done?' checked':''}" onclick="toggleGoal(${i})">${g.done?CHK:''}</div>
      <span class="goal-row-text">${escHtml(g.text)}</span>
      <span class="goal-row-num">${i+1}/3</span>
      <button class="act-btn del" onclick="deleteGoal(${i})">✕</button>
    </div>`;
  });
  if(goals.length<3){
    h+=`<button class="kanban-add-card" onclick="addWeekGoal()" style="margin-top:6px;">+ Set goal ${goals.length+1}</button>`;
  }
  if(settings.jobGoalDate){
    const goal=new Date(settings.jobGoalDate);
    const today=new Date();today.setHours(0,0,0,0);
    const totalDays=settings.planStartDate?Math.ceil((goal-new Date(settings.planStartDate))/(1000*60*60*24)):90;
    const elapsed=settings.planStartDate?Math.ceil((today-new Date(settings.planStartDate))/(1000*60*60*24)):0;
    const pct=Math.min(100,Math.round(elapsed/totalDays*100));
    h+=`<div class="divider"></div>
    <div class="stats-card" style="text-align:center;padding:20px;">
      <h3>3-Month Plan Progress</h3>
      <div class="big" style="margin:8px 0;">${pct}<span>%</span></div>
      <p>Day ${elapsed} of ${totalDays} · ${Math.ceil((goal-today)/(1000*60*60*24))} days to job goal</p>
    </div>`;
  }
  document.getElementById('v-goals').innerHTML=h;
}
function addWeekGoal(){
  const goals=getWeekGoals();if(goals.length>=3){alert('Max 3 weekly goals!');return;}
  const text=prompt('Weekly goal:');if(!text||!text.trim())return;
  goals.push({text:text.trim(),done:false});saveWeekGoals(goals);renderGoals();renderToday();
}
function deleteGoal(idx){
  const goals=getWeekGoals();goals.splice(idx,1);saveWeekGoals(goals);renderGoals();renderToday();
}