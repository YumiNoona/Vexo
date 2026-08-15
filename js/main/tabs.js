
/* ═══════════════════════════════════════════════
   TABS
═══════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════
   TABS — 6 merged tabs
═══════════════════════════════════════════════ */
const MAIN_TABS=['today','goals','learn','portfolio','plan','hub'];
let learnSub='journal', planSub='roadmap', hubSub='stats';

const TAB_TITLES={today:'Today',goals:'Goals',learn:'Reflect',portfolio:'Projects',plan:'Plan',hub:'Hub'};
let activeTab='today';
function switchTab(name){
  activeTab=name;
  document.title='Vexo — '+TAB_TITLES[name];
  MAIN_TABS.forEach(n=>{
    document.getElementById('v-'+n).style.display=n===name?'block':'none';
    const tb=document.getElementById('t-'+n);if(tb)tb.className='tab'+(n===name?' on':'');
    const mb=document.getElementById('mn-'+n);if(mb)mb.className='mnav-btn'+(n===name?' active':'');
  });
  const appEl=document.querySelector('.app');if(appEl)appEl.scrollTop=0;
  if(name==='today'){}
  if(name==='goals')renderGoals();
  if(name==='portfolio')renderPortfolio();
  if(name==='learn')renderLearn(learnSub);
  if(name==='plan')renderPlan();
  if(name==='hub')renderHub(hubSub);
}

function renderLearn(sub){
  learnSub=sub;
  const tabs=['journal','library'];
  const labels={journal:'Journal',library:'Library'};
  let h=`<div class="sub-tabs">`;
  tabs.forEach(t=>{h+=`<button class="sub-tab${sub===t?' on':''}" onclick="renderLearn('${t}')">${labels[t]}</button>`;});
  h+=`</div><div id="learn-content">`;
  if(sub==='journal'){h+=buildJournalHTML();}
  else if(sub==='library'){h+=buildLibraryHTML();}
  h+=`</div>`;
  document.getElementById('v-learn').innerHTML=h;
  if(sub==='journal')bindJournalEvents();
  if(sub==='library'&&activeResSearch&&typeof onResSearch==='function')onResSearch();
}

function renderPlan(sub){
  planSub=sub||planSub;
  const labels={roadmap:'Milestones',schedule:'Schedule'};
  let h='<div class="sub-tabs">';
  ['roadmap','schedule'].forEach(t=>{h+=`<button class="sub-tab${planSub===t?' on':''}" onclick="renderPlan('${t}')">${labels[t]}</button>`;});
  h+='</div><div id="plan-content">';
  h+=planSub==='schedule'?buildSchedHTML():buildRoadmapHTML();
  h+='</div>';
  document.getElementById('v-plan').innerHTML=h;
}

function renderHub(sub){
  hubSub=sub;
  const tabs=['stats','settings'];
  const labels={stats:'Stats',settings:'Settings'};
  let h=`<div class="sub-tabs">`;
  tabs.forEach(t=>{h+=`<button class="sub-tab${sub===t?' on':''}" onclick="renderHub('${t}')">${labels[t]}</button>`;});
  h+=`</div><div id="hub-content">`;
  if(sub==='stats'){h+=buildStatsHTML();}
  else if(sub==='settings'){h+=buildSettingsHTML();}
  h+=`</div>`;
  document.getElementById('v-hub').innerHTML=h;
  if(sub==='settings')bindSettingsEvents();
}
