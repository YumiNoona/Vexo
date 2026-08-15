/* ═══════════════════════════════════════════════
   STATS — taller chart, activity heatmap
═══════════════════════════════════════════════ */
function buildStatsHTML(){
  const days=[];
  for(let i=6;i>=0;i--){
    const k=dkey(-i);let dd={},tl={};
    try{const r=localStorage.getItem('sp-d-'+k);if(r){const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}}catch(e){}
    const n=Object.values(dd).filter(Boolean).length,tot=tasks.length;
    let sm=0;tasks.forEach(t=>{if(tl[t.id]){sm+=tl[t.id];}else if(STUDY_CATS.includes(t.cat)&&dd[t.id]){sm+=(t.mins||0);}});
    const d=new Date();d.setDate(d.getDate()-i);
    days.push({k,n,tot,sm,label:d.toLocaleDateString('en-US',{weekday:'short'})});
  }
  const totalDays=days.filter(d=>d.n>0).length;
  const totalMins=days.reduce((a,d)=>a+d.sm,0);
  const avgPct=Math.round(days.reduce((a,d)=>a+(d.tot?d.n/d.tot*100:0),0)/days.length);
  const maxSm=Math.max(...days.map(d=>d.sm),1);

  // Taller bars — height is now % of container (CSS handles actual height)
  const bars=days.map(d=>{
    const pct=Math.max(4,Math.round(d.sm/maxSm*100));
    const hrs=d.sm>=60?Math.floor(d.sm/60)+'h '+(d.sm%60?d.sm%60+'m':''):d.sm+'m';
    return`<div class="week-bar-wrap">
      <span class="week-bar-val">${d.sm>0?hrs:''}</span>
      <div class="week-bar${d.sm===0?' empty':''}" style="height:${pct}%" title="${d.n}/${d.tot} tasks · ${fmtTime(d.sm)}"></div>
      <span class="week-day">${d.label}</span>
    </div>`;
  }).join('');

  // 30-day totals
  let totalStudy30=0,totalTasks30=0,activeDays30=0;
  for(let i=0;i<30;i++){
    const k=dkey(-i);let dd={},tl={};
    try{const r=localStorage.getItem('sp-d-'+k);if(r){const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}}catch(e){}
    let sm=0;tasks.forEach(t=>{if(tl[t.id]){sm+=tl[t.id];}else if(STUDY_CATS.includes(t.cat)&&dd[t.id]){sm+=(t.mins||0);}});
    const n=Object.values(dd).filter(Boolean).length;
    totalStudy30+=sm;totalTasks30+=n;if(n>0)activeDays30++;
  }

  // Heatmap — 365 days, 52 columns × 7 rows
  const heatmap=buildHeatmapHTML();

  let h=`<div class="stats-grid">
    <div class="stats-card"><h3>Active days (7d)</h3><div class="big">${totalDays}<span>/7</span></div><p>Days with tasks done</p></div>
    <div class="stats-card"><h3>Focus time (7d)</h3><div class="big">${fmtTime(totalMins)}</div><p>Total focus time this week</p></div>
    <div class="stats-card"><h3>Avg completion</h3><div class="big">${avgPct}<span>%</span></div><p>Daily task completion rate</p></div>
    <div class="stats-card"><h3>Current streak</h3><div class="big">${streak}<span> days</span></div><p>Complete all tasks to extend</p></div>
    <div class="stats-card"><h3>XP & Level</h3><div class="big">${xpTotal}<span> XP</span></div><p>Level ${xpLevel} · ${xpToNext - Math.round((xpToNext * xpProgress) / 100)} XP to next level</p></div>
    <div class="stats-card"><h3>Focus time (30d)</h3><div class="big">${fmtTime(totalStudy30)}</div><p>Total in last 30 days</p></div>
    <div class="stats-card"><h3>Active days (30d)</h3><div class="big">${activeDays30}<span>/30</span></div><p>Days with activity</p></div>
  </div>
  <div class="stats-card" style="margin-bottom:14px;">
    <h3>Focus time — last 7 days</h3>
    <div class="week-grid" style="margin-top:16px;align-items:flex-end;">${bars}</div>
  </div>
  <div class="stats-card" style="margin-bottom:14px;">
    <h3>Activity — last year</h3>
    ${heatmap}
  </div>`;

  h+=`<div class="divider"></div><p class="sec-label">Day Log</p><div class="log-list">`;
  const allKeys=[];
  for(let i=0;i<90;i++){const k=dkey(-i);if(localStorage.getItem('sp-d-'+k))allKeys.push(k);}
  if(allKeys.length){
    allKeys.forEach(k=>{
      let dd={},tl={};try{const r=localStorage.getItem('sp-d-'+k);if(r){const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}}catch(e){}
      const n=Object.values(dd).filter(Boolean).length,tot=tasks.length;
      let sm=0;tasks.forEach(t=>{if(tl[t.id]){sm+=tl[t.id];}else if(STUDY_CATS.includes(t.cat)&&dd[t.id]){sm+=(t.mins||0);}});
      const pct=tot?Math.round(n/tot*100):0;
      const pts=k.split('-');const d=new Date(+pts[0],+pts[1]-1,+pts[2]);
      // Mood indicator
      const mood=localStorage.getItem('sp-mood-'+k);
      const moodEmoji=mood?` ${mood}`:'';
      h+=`<div class="log-item">
        <span class="log-date">${d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})}${moodEmoji}</span>
        <div style="display:flex;gap:14px;align-items:center;">
          <span class="log-meta">${n}/${tot} tasks · ${fmtTime(sm)}</span>
          <span class="log-pct">${pct}%</span>
        </div>
      </div>`;
    });
  }else{h+=`<div class="empty-state">No history yet — complete some tasks to see your log.</div>`;}
  h+=`</div>`;
  return h;
}

function buildHeatmapHTML(){
  // Build 52 weeks × 7 days grid
  const today=new Date();today.setHours(0,0,0,0);
  // Find the Sunday 364 days ago to align grid
  const startDate=new Date(today);
  startDate.setDate(today.getDate()-363);
  // Rewind to the nearest Sunday
  startDate.setDate(startDate.getDate()-startDate.getDay());

  // Gather data
  const dataMap={};
  for(let i=0;i<365;i++){
    const d=new Date(today);d.setDate(today.getDate()-i);
    const k=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    let sm=0;
    try{const r=localStorage.getItem('sp-d-'+k);if(r){const p=JSON.parse(r);const tl=p.timeLogs||{};
      tasks.forEach(t=>{if(STUDY_CATS.includes(t.cat)&&(p.done||{})[t.id])sm+=(t.mins||0);});
      Object.values(tl).forEach(v=>sm+=v);}}catch(e){}
    dataMap[k]=sm;
  }

  // Generate columns (weeks)
  const weeks=[];
  let cur=new Date(startDate);
  const monthLabels=[];
  let lastMonth=-1;

  while(cur<=today){
    const col=[];
    for(let d=0;d<7;d++){
      const dd=new Date(cur);dd.setDate(cur.getDate()+d);
      if(dd.getMonth()!==lastMonth&&d===0){
        monthLabels.push({week:weeks.length,label:dd.toLocaleDateString('en-US',{month:'short'})});
        lastMonth=dd.getMonth();
      }
      const k=`${dd.getFullYear()}-${dd.getMonth()+1}-${dd.getDate()}`;
      const sm=dataMap[k]||0;
      const isFuture=dd>today;
      let lvl=0;
      if(!isFuture&&sm>0){if(sm<30)lvl=1;else if(sm<60)lvl=2;else if(sm<120)lvl=3;else lvl=4;}
      col.push({k,sm,lvl,isFuture,date:new Date(dd)});
    }
    weeks.push(col);
    cur.setDate(cur.getDate()+7);
  }

  // Month label row
  let monthRow='<div class="heatmap-months" style="margin-bottom:4px;">';
  monthLabels.forEach((ml,i)=>{
    const nextWeek=monthLabels[i+1]?monthLabels[i+1].week:weeks.length;
    const span=nextWeek-ml.week;
    monthRow+=`<span class="heatmap-month-label" style="width:${span*15}px">${ml.label}</span>`;
  });
  monthRow+='</div>';

  let gridH='<div class="heatmap-wrap"><div class="heatmap-grid">';
  weeks.forEach(col=>{
    gridH+='<div class="heatmap-col">';
    col.forEach(cell=>{
      const title=cell.isFuture?'':
        `${cell.date.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})}: ${fmtTime(cell.sm)}`;
      gridH+=`<div class="heatmap-cell${cell.isFuture?'':cell.lvl>0?' l'+cell.lvl:''}" title="${title}"></div>`;
    });
    gridH+='</div>';
  });
  gridH+='</div></div>';

  const legend=`<div class="heatmap-legend">
    <span>Less</span>
    <div class="heatmap-legend-cells">
      <div class="heatmap-swatch" style="background:var(--surface2)"></div>
      <div class="heatmap-swatch heatmap-cell l1"></div>
      <div class="heatmap-swatch heatmap-cell l2"></div>
      <div class="heatmap-swatch heatmap-cell l3"></div>
      <div class="heatmap-swatch heatmap-cell l4"></div>
    </div>
    <span>More</span>
  </div>`;

  return monthRow+gridH+legend;
}
