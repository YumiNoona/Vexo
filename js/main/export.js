/* ═══════════════════════════════════════════════
   EXPORT — Excel (xlsx via CDN)
═══════════════════════════════════════════════ */
function exportToExcel(){
  // Load SheetJS if not loaded
  if(!window.XLSX){
    const script=document.createElement('script');
    script.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
    script.onload=()=>doExcelExport();
    document.head.appendChild(script);
  }else{doExcelExport();}
}
function doExcelExport(){
  const wb=XLSX.utils.book_new();

  // === Sheet 1: Daily Study Log ===
  const logRows=[['Date','Day','Tasks Done','Total Tasks','Completion %','Study Time (hrs)','Study Time (mins)']];
  for(let i=0;i<90;i++){
    const k=dkey(-i);
    const r=localStorage.getItem('sp-d-'+k);if(!r)continue;
    let dd={},tl={};
    try{const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}catch(e){}
    const n=Object.values(dd).filter(Boolean).length,tot=tasks.length;
    let sm=0;tasks.forEach(t=>{if(tl[t.id]){sm+=tl[t.id];}else if(STUDY_CATS.includes(t.cat)&&dd[t.id]){sm+=(t.mins||0);}});
    const pct=tot?Math.round(n/tot*100):0;
    const pts=k.split('-');const d=new Date(+pts[0],+pts[1]-1,+pts[2]);
    logRows.push([
      d.toLocaleDateString('en-US',{year:'numeric',month:'2-digit',day:'2-digit'}),
      d.toLocaleDateString('en-US',{weekday:'long'}),
      n,tot,pct,
      Math.round(sm/60*100)/100,
      sm
    ]);
  }
  const ws1=XLSX.utils.aoa_to_sheet(logRows);
  ws1['!cols']=[{wch:14},{wch:12},{wch:12},{wch:12},{wch:14},{wch:16},{wch:16}];
  XLSX.utils.book_append_sheet(wb,ws1,'Daily Log');

  // === Sheet 2: Weekly Summary ===
  const weekMap={};
  for(let i=0;i<90;i++){
    const k=dkey(-i);const r=localStorage.getItem('sp-d-'+k);if(!r)continue;
    let dd={},tl={};
    try{const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}catch(e){}
    let sm=0;tasks.forEach(t=>{if(tl[t.id]){sm+=tl[t.id];}else if(STUDY_CATS.includes(t.cat)&&dd[t.id]){sm+=(t.mins||0);}});
    const pts=k.split('-');const d=new Date(+pts[0],+pts[1]-1,+pts[2]);
    const day=d.getDay()||7;
    const mon=new Date(d);mon.setDate(d.getDate()-(day-1));
    const wk=`${mon.getFullYear()}-W${String(Math.ceil(mon.getDate()/7)).padStart(2,'0')}`;
    const wLabel=mon.toLocaleDateString('en-US',{month:'short',day:'numeric'});
    if(!weekMap[wk])weekMap[wk]={label:'Week of '+wLabel,study:0,days:0,tasks:0};
    weekMap[wk].study+=sm;
    weekMap[wk].days+=1;
    weekMap[wk].tasks+=Object.values(dd).filter(Boolean).length;
  }
  const weekRows=[['Week','Study Days','Total Study (hrs)','Total Study (mins)','Tasks Completed','Avg Daily Study (hrs)']];
  Object.values(weekMap).forEach(w=>{
    weekRows.push([w.label,w.days,Math.round(w.study/60*100)/100,w.study,w.tasks,Math.round(w.study/Math.max(w.days,1)/60*100)/100]);
  });
  const ws2=XLSX.utils.aoa_to_sheet(weekRows);
  ws2['!cols']=[{wch:18},{wch:12},{wch:18},{wch:18},{wch:18},{wch:20}];
  XLSX.utils.book_append_sheet(wb,ws2,'Weekly Summary');

  // === Sheet 3: Task List ===
  const taskRows=[['ID','Category','Task','Est. Minutes']];
  tasks.forEach(t=>taskRows.push([t.id,t.cat,t.label,t.mins||0]));
  const ws3=XLSX.utils.aoa_to_sheet(taskRows);
  ws3['!cols']=[{wch:14},{wch:14},{wch:40},{wch:14}];
  XLSX.utils.book_append_sheet(wb,ws3,'Tasks');

  // === Sheet 4: Journal Entries ===
  const jRows=[['Date','Learned','Confused','Do Differently']];
  for(let i=0;i<=90;i++){
    const k='sp-j-'+dkey(-i);const r=localStorage.getItem(k);if(!r)continue;
    try{const e=JSON.parse(r);if(!e.learned&&!e.confused&&!e.differently)continue;
      const pts=dkey(-i).split('-');const d=new Date(+pts[0],+pts[1]-1,+pts[2]);
      jRows.push([d.toLocaleDateString('en-US',{year:'numeric',month:'2-digit',day:'2-digit'}),e.learned||'',e.confused||'',e.differently||'']);
    }catch(e2){}
  }
  const ws4=XLSX.utils.aoa_to_sheet(jRows);
  ws4['!cols']=[{wch:14},{wch:40},{wch:40},{wch:40}];
  XLSX.utils.book_append_sheet(wb,ws4,'Journal');

  // === Sheet 5: Stats Overview ===
  let totalStudyAll=0,totalActiveDays=0;
  for(let i=0;i<90;i++){
    const k=dkey(-i);const r=localStorage.getItem('sp-d-'+k);if(!r)continue;
    let dd={},tl={};
    try{const p=JSON.parse(r);dd=p.done||{};tl=p.timeLogs||{};}catch(e){}
    let sm=0;tasks.forEach(t=>{if(tl[t.id]){sm+=tl[t.id];}else if(STUDY_CATS.includes(t.cat)&&dd[t.id]){sm+=(t.mins||0);}});
    if(Object.values(dd).filter(Boolean).length>0)totalActiveDays++;
    totalStudyAll+=sm;
  }
  const statsRows=[
    ['Metric','Value'],
    ['Export Date',new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})],
    ['Current Streak',streak+' days'],
    ['Total Active Days (90d)',totalActiveDays],
    ['Total Study Time (90d hrs)',Math.round(totalStudyAll/60*100)/100],
    ['Total Study Time (90d mins)',totalStudyAll],
    ['Total Tasks',tasks.length],
    ['Profile',settings.profile||''],
    ['Planner Name',settings.plannerName||'Study Planner'],
  ];
  const ws5=XLSX.utils.aoa_to_sheet(statsRows);
  ws5['!cols']=[{wch:28},{wch:30}];
  XLSX.utils.book_append_sheet(wb,ws5,'Overview');

  const today=new Date().toISOString().split('T')[0];
  XLSX.writeFile(wb,`study-planner-${today}.xlsx`);
  showToast('Exported to Excel ✓');
}

function exportJSON(){
  const data={tasks,settings,schedule:getSched()};
  // Phases / Roadmap
  try{const p=localStorage.getItem('sp-phases');if(p)data.phases=JSON.parse(p);}catch(e){}
  // Kanban
  try{const k=localStorage.getItem('sp-kanban');if(k)data.kanban=JSON.parse(k);}catch(e){}
  // Resources
  try{const r=localStorage.getItem('sp-resources');if(r)data.resources=JSON.parse(r);}catch(e){}
  // XP
  try{const x=localStorage.getItem('sp-xp');if(x)data.xp=JSON.parse(x);}catch(e){}
  // Questions progress
  try{const q=localStorage.getItem('sp-questions-mcq-v1');if(q)data.questions=JSON.parse(q);}catch(e){}
  // Daily logs + moods + start-times
  for(let i=0;i<90;i++){
    const k=dkey(-i);let added=false;
    const dr=localStorage.getItem('sp-d-'+k);if(dr){data['day-'+k]=JSON.parse(dr);added=true;}
    const mr=localStorage.getItem('sp-mood-'+k);if(mr){data['mood-'+k]=mr;added=true;}
    const sr=localStorage.getItem('sp-start-times-'+k);if(sr){data['startTimes-'+k]=JSON.parse(sr);added=true;}
  }
  // Journal entries
  for(let i=0;i<=90;i++){const k='sp-j-'+dkey(-i);const r=localStorage.getItem(k);if(r)data['journal-'+dkey(-i)]=JSON.parse(r);}
  // Task notes
  tasks.forEach(t=>{const n=localStorage.getItem('sp-note-'+t.id);if(n)data['note-'+t.id]=n;});
  // XP task records
  Object.keys(localStorage).filter(k=>k.startsWith('sp-xp-tasks-')).forEach(k=>{data[k]=localStorage.getItem(k);});
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  const today=new Date().toISOString().split('T')[0];
  a.download=`study-planner-${today}.json`;a.style.display='none';
  document.body.appendChild(a);a.click();setTimeout(()=>a.remove(),1000);
  showToast('JSON exported ✓');
}

function importJSON(event){
  const file=event.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const data=JSON.parse(e.target.result);
      if(!data.tasks&&!data.settings){alert('Invalid export file.');return;}
      if(!confirm('This will overwrite your current data. Continue?'))return;
      // restore tasks
      if(data.tasks){localStorage.setItem('sp-tasks',JSON.stringify(data.tasks));tasks=data.tasks;}
      // restore settings
      if(data.settings){localStorage.setItem('sp-settings',JSON.stringify(data.settings));}
      // restore schedule
      if(data.schedule){localStorage.setItem('sp-sched',JSON.stringify(data.schedule));}
      // restore phases
      if(data.phases){localStorage.setItem('sp-phases',JSON.stringify(data.phases));}
      // restore kanban
      if(data.kanban){localStorage.setItem('sp-kanban',JSON.stringify(data.kanban));}
      // restore resources
      if(data.resources){localStorage.setItem('sp-resources',JSON.stringify(data.resources));}
      // restore XP
      if(data.xp){localStorage.setItem('sp-xp',JSON.stringify(data.xp));}
      // restore questions
      if(data.questions){localStorage.setItem('sp-questions-mcq-v1',JSON.stringify(data.questions));}
      // restore daily logs + moods + start-times + journals + notes
      Object.keys(data).forEach(k=>{
        if(k.startsWith('day-')){localStorage.setItem('sp-d-'+k.slice(4),JSON.stringify(data[k]));}
        else if(k.startsWith('mood-')){localStorage.setItem('sp-mood-'+k.slice(5),data[k]);}
        else if(k.startsWith('startTimes-')){localStorage.setItem('sp-start-times-'+k.slice(11),JSON.stringify(data[k]));}
        else if(k.startsWith('journal-')){localStorage.setItem('sp-j-'+k.slice(8),JSON.stringify(data[k]));}
        else if(k.startsWith('note-')){localStorage.setItem('sp-note-'+k.slice(5),data[k]);}
        else if(k.startsWith('sp-xp-tasks-')){localStorage.setItem(k,data[k]);}
      });
      showToast('Import successful — reloading…');
      setTimeout(()=>location.reload(),800);
    }catch(err){alert('Failed to parse file: '+err.message);}
  };
  reader.readAsText(file);
  // reset input so same file can be re-selected
  event.target.value='';
}
