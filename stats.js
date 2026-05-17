/* ═══════════════════════════════════════════════
   STATS — no skill sliders, clean view
═══════════════════════════════════════════════ */
function buildStatsHTML(){
  const days=[];
  for(let i=6;i>=0;i--){
    const k=dkey(-i);let dd={},tl={};
    try{const r=localStorage.getItem('sp-d-'+k);if(r){const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}}catch(e){}
    const n=Object.values(dd).filter(Boolean).length,tot=tasks.length;
    let sm=0;tasks.forEach(t=>{if(STUDY_CATS.includes(t.cat)&&dd[t.id])sm+=(t.mins||0);});
    Object.values(tl).forEach(v=>sm+=v);
    const d=new Date();d.setDate(d.getDate()-i);
    days.push({k,n,tot,sm,label:d.toLocaleDateString('en-US',{weekday:'short'})});
  }
  const totalDays=days.filter(d=>d.n>0).length;
  const totalMins=days.reduce((a,d)=>a+d.sm,0);
  const avgPct=Math.round(days.reduce((a,d)=>a+(d.tot?d.n/d.tot*100:0),0)/days.length);
  const maxSm=Math.max(...days.map(d=>d.sm),1);
  const bars=days.map(d=>{const hh=Math.max(4,Math.round(d.sm/maxSm*60));
    return`<div class="week-bar-wrap"><div class="week-bar${d.sm===0?' empty':''}" style="height:${hh}px" title="${d.n}/${d.tot} tasks, ${fmtTime(d.sm)}"></div><span class="week-day">${d.label}</span></div>`;}).join('');

  // 30-day totals
  let totalStudy30=0,totalTasks30=0,activeDays30=0;
  for(let i=0;i<30;i++){
    const k=dkey(-i);let dd={},tl={};
    try{const r=localStorage.getItem('sp-d-'+k);if(r){const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}}catch(e){}
    let sm=0;tasks.forEach(t=>{if(STUDY_CATS.includes(t.cat)&&dd[t.id])sm+=(t.mins||0);});
    Object.values(tl).forEach(v=>sm+=v);
    const n=Object.values(dd).filter(Boolean).length;
    totalStudy30+=sm;totalTasks30+=n;if(n>0)activeDays30++;
  }

  let h=`<div class="stats-grid">
    <div class="stats-card"><h3>Active days (7d)</h3><div class="big">${totalDays}<span>/7</span></div><p>Days with tasks done</p></div>
    <div class="stats-card"><h3>Study time (7d)</h3><div class="big">${fmtTime(totalMins)}</div><p>Total focus time this week</p></div>
    <div class="stats-card"><h3>Avg completion</h3><div class="big">${avgPct}<span>%</span></div><p>Daily task completion rate</p></div>
    <div class="stats-card"><h3>Current streak</h3><div class="big">${streak}<span> days</span></div><p>Complete all tasks to extend</p></div>
  </div>
  <div class="stats-grid">
    <div class="stats-card"><h3>Study time (30d)</h3><div class="big">${fmtTime(totalStudy30)}</div><p>Total in last 30 days</p></div>
    <div class="stats-card"><h3>Active days (30d)</h3><div class="big">${activeDays30}<span>/30</span></div><p>Days with activity</p></div>
  </div>
  <div class="stats-card" style="margin-bottom:14px;"><h3>Study time – last 7 days</h3><div class="week-grid" style="margin-top:12px;">${bars}</div></div>`;

  h+=`<div class="divider"></div><p class="sec-label">Day Log</p><div class="log-list">`;
  const allKeys=[];
  for(let i=0;i<90;i++){const k=dkey(-i);if(localStorage.getItem('sp-d-'+k))allKeys.push(k);}
  if(allKeys.length){
    allKeys.forEach(k=>{
      let dd={},tl={};try{const r=localStorage.getItem('sp-d-'+k);if(r){const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}}catch(e){}
      const n=Object.values(dd).filter(Boolean).length,tot=tasks.length;
      let sm=0;tasks.forEach(t=>{if(STUDY_CATS.includes(t.cat)&&dd[t.id])sm+=(t.mins||0);});
      Object.values(tl).forEach(v=>sm+=v);
      const pct=tot?Math.round(n/tot*100):0;
      const pts=k.split('-');const d=new Date(+pts[0],+pts[1]-1,+pts[2]);
      h+=`<div class="log-item"><span class="log-date">${d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})}</span>
        <div style="display:flex;gap:14px;align-items:center;"><span class="log-meta">${n}/${tot} tasks · ${fmtTime(sm)}</span><span class="log-pct">${pct}%</span></div></div>`;
    });
  }else{h+=`<div class="empty-state">No history yet — complete some tasks to see your log.</div>`;}
  h+=`</div>`;
  return h;
}
function renderStats(){
  renderHub('stats');
}