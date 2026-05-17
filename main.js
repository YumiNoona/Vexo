/* ═══════════════════════════════════════════════
   ROADMAP — fully editable
═══════════════════════════════════════════════ */
function buildRoadmapHTML(){
  const phases=getPhases();
  let h=`<div class="sched-header-bar">
    <p class="sched-header-title">Your learning roadmap</p>
    <div style="display:flex;gap:6px;">
      <button class="act-btn" onclick="addPhase()">+ Add phase</button>
      <button class="act-btn" onclick="resetRoadmap()" style="color:var(--muted)">Reset</button>
    </div>
  </div>`;
  phases.forEach((p,pi)=>{
    h+=`<div class="phase"><div class="phase-header">
      <div class="phase-dot" style="background:${p.c}"></div>
      <span class="phase-meta">${escHtml(p.n)}</span>
      <span class="phase-title">&nbsp;${escHtml(p.title)}</span>
      <div class="sched-actions" style="margin-left:auto;display:flex;gap:4px;">
        <button class="act-btn" onclick="editPhase(${pi})">Edit</button>
        <button class="act-btn" onclick="addWeek(${pi})">+ Week</button>
        <button class="act-btn del" onclick="deletePhase(${pi})">✕</button>
      </div>
    </div>`;
    p.weeks.forEach((w,wi)=>{
      h+=`<div class="week-block" style="border-left-color:${p.c}">
        <div style="display:flex;align-items:flex-start;gap:8px;">
          <div style="flex:1;">
            <p class="week-label">${escHtml(w.w)}</p>
            <p class="week-text">${escHtml(w.t)}</p>
          </div>
          <div style="display:flex;gap:4px;flex-shrink:0;">
            <button class="act-btn" onclick="editWeek(${pi},${wi})">Edit</button>
            <button class="act-btn del" onclick="deleteWeek(${pi},${wi})">✕</button>
          </div>
        </div>
      </div>`;
    });
    h+='</div>';
  });
  h+=`<div class="tips-box"><p class="tips-title">→ Tips for success</p>
    ${TIPS.map(t=>`<div class="tip-row"><span class="tip-arrow">→</span><span class="tip-text">${t}</span></div>`).join('')}</div>`;
  return h;
}
function renderRoadmap(){
  renderPlan('roadmap');
}

function phaseModal(pi){
  const phases=getPhases();
  const isEdit=pi!==-1;
  const p=isEdit?phases[pi]:{n:'',title:'',c:'#4a9eff',weeks:[]};
  showModal(`<p class="modal-title">${isEdit?'Edit':'Add'} Phase</p>
    <div class="modal-row"><span class="modal-label">Label</span><input class="modal-input" id="ph-n" value="${escHtml(p.n)}" placeholder="Month 1"></div>
    <div class="modal-row"><span class="modal-label">Title</span><input class="modal-input" id="ph-title" value="${escHtml(p.title)}" placeholder="Foundations"></div>
    <div class="modal-row"><span class="modal-label">Colour</span>
      <select class="modal-input" id="ph-c">
        ${ACCENT_COLORS.map(c=>`<option value="${c}"${p.c===c?' selected':''}>${c}</option>`).join('')}
      </select>
    </div>
    <div class="modal-btns">
      <button class="modal-btn" onclick="closeModal()">Cancel</button>
      <button class="modal-btn primary" onclick="savePhaseModal(${pi})">Save</button>
    </div>`);
}
function addPhase(){phaseModal(-1);}
function editPhase(pi){phaseModal(pi);}
function savePhaseModal(pi){
  const n=document.getElementById('ph-n')?.value.trim();
  const title=document.getElementById('ph-title')?.value.trim();
  const c=document.getElementById('ph-c')?.value||'#4a9eff';
  if(!n||!title){alert('Label and title are required');return;}
  const phases=getPhases();
  if(pi===-1){phases.push({n,title,c,weeks:[]});}
  else{phases[pi]={...phases[pi],n,title,c};}
  savePhases(phases);closeModal();renderRoadmap();
}
function deletePhase(pi){
  if(!confirm('Delete this phase?'))return;
  const phases=getPhases();phases.splice(pi,1);savePhases(phases);renderRoadmap();
}

function phaseModal(pi){
  const phases=getPhases();
  const isEdit=pi!==-1;
  const p=isEdit?phases[pi]:{n:'',title:'',c:'#4a9eff',weeks:[]};
  const colorOpts=ACCENT_COLORS.map(c=>`
    <div class="color-swatch-opt${p.c===c?' active':''}" style="background:${c}" onclick="selectPhaseColor('${c}')" data-color="${c}"></div>`).join('');
  showModal(`
    <div class="big-modal-header">
      <p class="big-modal-label">${isEdit?'Edit':'New'} Phase</p>
      <p class="big-modal-title">${isEdit?escHtml(p.n)+' — '+escHtml(p.title):'Add a learning phase'}</p>
    </div>
    <div class="big-modal-body">
      <div class="big-modal-field">
        <label class="big-modal-field-label">Phase label <span class="big-modal-hint">e.g. Month 1</span></label>
        <input class="big-modal-input" id="ph-n" value="${escHtml(p.n)}" placeholder="Month 1" autocomplete="off">
      </div>
      <div class="big-modal-field">
        <label class="big-modal-field-label">Title <span class="big-modal-hint">e.g. Foundations</span></label>
        <input class="big-modal-input" id="ph-title" value="${escHtml(p.title)}" placeholder="Foundations" autocomplete="off">
      </div>
      <div class="big-modal-field">
        <label class="big-modal-field-label">Phase colour</label>
        <div class="color-swatch-row" id="phaseColorRow">${colorOpts}</div>
        <input type="hidden" id="ph-c" value="${escHtml(p.c)}">
      </div>
    </div>
    <div class="big-modal-actions">
      ${isEdit?`<button class="modal-btn del danger-btn" onclick="deletePhase(${pi})">Delete phase</button>`:''}
      <div style="display:flex;gap:8px;margin-left:auto">
        <button class="modal-btn" onclick="closeModal()">Cancel</button>
        <button class="modal-btn primary" onclick="savePhaseModal(${pi})">Save phase</button>
      </div>
    </div>`);
}
function selectPhaseColor(c){
  document.getElementById('ph-c').value=c;
  document.querySelectorAll('.color-swatch-opt').forEach(el=>{
    el.classList.toggle('active',el.dataset.color===c);
  });
}

function weekModal(pi,wi){
  const phases=getPhases();
  const isEdit=wi!==-1;
  const w=isEdit?phases[pi].weeks[wi]:{w:'',t:''};
  const phase=phases[pi];
  showModal(`
    <div class="big-modal-header" style="border-left:3px solid ${escHtml(phase?.c||'var(--accent)')};padding-left:16px;">
      <p class="big-modal-label">${escHtml(phase?.n||'')} · ${isEdit?'Edit week':'Add week'}</p>
      <p class="big-modal-title">${isEdit?escHtml(w.w):'New week block'}</p>
    </div>
    <div class="big-modal-body">
      <div class="big-modal-field">
        <label class="big-modal-field-label">Period <span class="big-modal-hint">e.g. Week 1–2</span></label>
        <input class="big-modal-input" id="wk-w" value="${escHtml(w.w)}" placeholder="Week 1–2" autocomplete="off">
      </div>
      <div class="big-modal-field">
        <label class="big-modal-field-label">What you'll cover <span class="big-modal-hint">topics, tools, skills</span></label>
        <textarea class="big-modal-textarea" id="wk-t" placeholder="Design principles, colour theory, typography, Gestalt laws…" rows="4">${escHtml(w.t)}</textarea>
      </div>
    </div>
    <div class="big-modal-actions">
      ${isEdit?`<button class="modal-btn del danger-btn" onclick="deleteWeek(${pi},${wi});closeModal()">Delete</button>`:''}
      <div style="display:flex;gap:8px;margin-left:auto">
        <button class="modal-btn" onclick="closeModal()">Cancel</button>
        <button class="modal-btn primary" onclick="saveWeekModal(${pi},${wi})">Save week</button>
      </div>
    </div>`);
  setTimeout(()=>{ const i=document.getElementById('wk-w'); if(i)i.focus(); },50);
}
function saveWeekModal(pi,wi){
  const wLabel=document.getElementById('wk-w')?.value.trim();
  const t=document.getElementById('wk-t')?.value.trim();
  if(!wLabel||!t){alert('Period and description are required');return;}
  const phases=getPhases();
  if(wi===-1){phases[pi].weeks.push({w:wLabel,t});}
  else{phases[pi].weeks[wi]={w:wLabel,t};}
  savePhases(phases);closeModal();renderRoadmap();
}
function deleteWeek(pi,wi){
  if(!confirm('Delete this week?'))return;
  const phases=getPhases();phases[pi].weeks.splice(wi,1);savePhases(phases);renderRoadmap();
}
function resetRoadmap(){
  if(!confirm('Reset roadmap to default?'))return;
  localStorage.removeItem('sp-phases');renderRoadmap();
}

/* ═══════════════════════════════════════════════
   END-OF-DAY SUMMARY
═══════════════════════════════════════════════ */
function renderEOD(){
  const n=doneCount(),tot=tasks.length,sm=totalStudyMins();
  const pct=tot?Math.round(n/tot*100):0;
  const journal=getJournalEntry(0);
  const d=new Date();
  const dateStr=d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'}).toUpperCase();

  // Motivational message
  const msgs=[
    {min:100,emoji:'🏆',title:'Perfect day.',sub:'Every single task done. That\'s rare. That\'s you.'},
    {min:80, emoji:'🔥',title:'Strong finish.',sub:'Almost everything ticked off. Keep this energy.'},
    {min:60, emoji:'⭐',title:'Solid progress.',sub:'More than half done — momentum is building.'},
    {min:40, emoji:'📈',title:'Keep going.',sub:'Every session compounds. Tomorrow, push a bit more.'},
    {min:0,  emoji:'🌱',title:'Day one is still a day.',sub:'Show up again tomorrow. That\'s all it takes.'},
  ];
  const msg=msgs.find(m=>pct>=m.min)||msgs[msgs.length-1];

  // Completed tasks
  const doneTasks=tasks.filter(t=>done[t.id]);
  const doneHTML=doneTasks.length
    ?doneTasks.map(t=>`
      <div class="eod-task-item">
        <span class="eod-task-check">✓</span>
        <span class="eod-task-name">${escHtml(t.label)}</span>
        ${timeLogs[t.id]?`<span class="eod-task-time">${fmtTime(timeLogs[t.id])}</span>`:''}
      </div>`).join('')
    :`<p style="font-size:12px;color:var(--muted);font-style:italic;padding:6px 0">No tasks completed yet</p>`;

  // SVG ring — fixed: proper track visibility + correct rotation
  const r=38, circ=2*Math.PI*r;
  const dash=circ*(pct/100);
  const gap=circ-dash;
  // Color: green=100%, amber=60%+, blue=below 60%
  const ringColor=pct===100?'var(--green)':pct>=60?'var(--accent)':'var(--blue)';
  // rotate(-90deg) on the fill circle = start from 12 o'clock
  const ringTransform='rotate(-90 50 50)';

  // Flashcard report (session stats from global flashcardState)
  const fcDone=(typeof flashcardState!=='undefined')?(flashcardState.correct+flashcardState.wrong):0;
  const fcRight=(typeof flashcardState!=='undefined')?flashcardState.correct:0;
  const fcWrong=(typeof flashcardState!=='undefined')?flashcardState.wrong:0;
  const fcTotal=(typeof flashcardState!=='undefined')?flashcardState.todayCards.length:5;
  const fcPct=fcDone>0?Math.round(fcRight/fcDone*100):0;
  const fcBarW=fcDone>0?Math.round(fcRight/fcTotal*100):0;
  const fcBarWrong=fcDone>0?Math.round(fcWrong/fcTotal*100):0;

  const fcSection=fcDone>0?`
    <div class="eod-section">
      <p class="eod-section-label">🧠 Flashcards</p>
      <div class="eod-fc-report">
        <div class="eod-fc-meta">
          <span class="eod-fc-stat correct">${fcRight} <span class="eod-fc-icon">✓</span> correct</span>
          <span class="eod-fc-sep">·</span>
          <span class="eod-fc-stat wrong">${fcWrong} <span class="eod-fc-icon">✕</span> wrong</span>
          <span class="eod-fc-sep">·</span>
          <span class="eod-fc-total">${fcDone}/${fcTotal} done</span>
        </div>
        <div class="eod-fc-bar-track">
          <div class="eod-fc-bar-fill correct" style="width:${fcBarW}%"></div>
          <div class="eod-fc-bar-fill wrong" style="width:${fcBarWrong}%"></div>
        </div>
        <p class="eod-fc-accuracy">${fcPct}% accuracy today</p>
      </div>
    </div>`
  :``;

  showModal(`<div class="eod-card">

    <div class="eod-header">
      <p class="eod-date">${dateStr}</p>
      <p class="eod-title">Today's wrap-up</p>
    </div>

    <div class="eod-hero">
      <div class="eod-ring-wrap">
        <svg class="eod-ring" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Track -->
          <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--surface3)" stroke-width="8"/>
          <!-- Progress fill — hidden at 0% to avoid dot artefact -->
          ${pct>0?`<circle cx="50" cy="50" r="${r}" fill="none" stroke="${ringColor}" stroke-width="8"
            stroke-dasharray="${dash} ${gap}"
            transform="${ringTransform}"
            stroke-linecap="round"/>`:''}
        </svg>
        <div class="eod-ring-inner">
          <span class="eod-ring-pct">${pct}<span style="font-size:13px;font-family:var(--font);font-weight:400">%</span></span>
          <span class="eod-ring-sub">done</span>
        </div>
      </div>
      <div class="eod-msg">
        <p class="eod-msg-title">${msg.emoji} ${msg.title}</p>
        <p class="eod-msg-sub">${msg.sub}</p>
      </div>
    </div>

    <div class="eod-stats-row">
      <div class="eod-stat2">
        <div class="eod-stat2-num">${n}<span>/${tot}</span></div>
        <div class="eod-stat2-label">Tasks done</div>
      </div>
      <div class="eod-stat2-div"></div>
      <div class="eod-stat2">
        <div class="eod-stat2-num">${fmtTime(sm)}</div>
        <div class="eod-stat2-label">Study time</div>
      </div>
      <div class="eod-stat2-div"></div>
      <div class="eod-stat2">
        <div class="eod-stat2-num">${streak}<span style="font-size:13px"> 🔥</span></div>
        <div class="eod-stat2-label">Day streak</div>
      </div>
    </div>

    ${doneTasks.length?`<div class="eod-section">
      <p class="eod-section-label">Completed today</p>
      <div class="eod-tasks-list">${doneHTML}</div>
    </div>`:''}

    ${fcSection}

    ${(journal.learned||journal.confused||journal.differently)?`<div class="eod-section">
      <p class="eod-section-label">Reflection</p>
      ${journal.learned?`<div class="eod-ref-block">
        <span class="eod-ref-icon">💡</span>
        <div><p class="eod-ref-q">What I learned</p><p class="eod-ref-a">${escHtml(journal.learned)}</p></div>
      </div>`:''}
      ${journal.confused?`<div class="eod-ref-block">
        <span class="eod-ref-icon">🤔</span>
        <div><p class="eod-ref-q">What confused me</p><p class="eod-ref-a">${escHtml(journal.confused)}</p></div>
      </div>`:''}
      ${journal.differently?`<div class="eod-ref-block">
        <span class="eod-ref-icon">🎯</span>
        <div><p class="eod-ref-q">I'll do differently</p><p class="eod-ref-a">${escHtml(journal.differently)}</p></div>
      </div>`:''}
    </div>`:`<div class="eod-section">
      <div class="eod-no-journal" onclick="closeModal();switchTab('learn')">
        <span>📓</span>
        <p>Add today's reflection →</p>
      </div>
    </div>`}

    <div class="eod-actions">
      <button class="modal-btn" onclick="closeModal()">Close</button>
      <button class="modal-btn" onclick="downloadDayCard()">⬇ Save card</button>
      <button class="modal-btn primary" onclick="closeModal();switchTab('learn')">Write Reflection</button>
    </div>
  </div>`);}

/* ═══════════════════════════════════════════════
   SHARE CARD — Canvas → PNG download
═══════════════════════════════════════════════ */
function downloadDayCard(){
  const n=doneCount(),tot=tasks.length,sm=totalStudyMins(),pct=tot?Math.round(n/tot*100):0;
  const journal=getJournalEntry(0);
  const d=new Date();
  const dateStr=d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
  const msgs=[
    {min:100,emoji:'🏆',title:'Perfect day.'},
    {min:80, emoji:'🔥',title:'Strong finish.'},
    {min:60, emoji:'⭐',title:'Solid progress.'},
    {min:40, emoji:'📈',title:'Keep going.'},
    {min:0,  emoji:'🌱',title:'Day one is still a day.'},
  ];
  const msg=msgs.find(m=>pct>=m.min)||msgs[msgs.length-1];
  const accentHex=(settings.accentColor||'#d4960a');
  const ringColor=pct===100?'#2ecf8c':pct>=60?accentHex:'#4a9eff';
  const doneTasks=tasks.filter(t=>done[t.id]);

  const W=640,H=640+Math.min(doneTasks.length,6)*32+(journal.learned?80:0);
  const canvas=document.createElement('canvas');
  canvas.width=W*2;canvas.height=H*2;
  const cx=canvas.getContext('2d');
  cx.scale(2,2);

  // BG gradient
  const bg=cx.createLinearGradient(0,0,W,H);
  bg.addColorStop(0,'#111113');bg.addColorStop(1,'#0c0c0e');
  cx.fillStyle=bg;roundRect(cx,0,0,W,H,0);cx.fill();

  // Subtle grid dots
  cx.fillStyle='rgba(255,255,255,0.025)';
  for(let x=20;x<W;x+=30)for(let y=20;y<H;y+=30){cx.beginPath();cx.arc(x,y,1,0,Math.PI*2);cx.fill();}

  // Top accent bar
  const barGrad=cx.createLinearGradient(0,0,W,0);
  barGrad.addColorStop(0,accentHex);barGrad.addColorStop(1,'transparent');
  cx.fillStyle=barGrad;cx.fillRect(0,0,W,3);

  // Date
  cx.font='500 11px "DM Mono", monospace';
  cx.fillStyle='rgba(255,255,255,0.35)';
  cx.letterSpacing='2px';
  cx.textAlign='center';
  cx.fillText(dateStr.toUpperCase(),W/2,44);

  // Title
  cx.font='italic 700 34px Georgia, serif';
  cx.fillStyle='#ffffff';
  cx.fillText("Today's wrap-up",W/2,86);

  // Ring
  const cx0=W/2,cy0=148,rad=52;
  cx.beginPath();cx.arc(cx0,cy0,rad,0,Math.PI*2);
  cx.strokeStyle='rgba(255,255,255,0.08)';cx.lineWidth=7;cx.stroke();
  if(pct>0){
    cx.beginPath();
    cx.arc(cx0,cy0,rad,-Math.PI/2,-Math.PI/2+2*Math.PI*(pct/100));
    cx.strokeStyle=ringColor;cx.lineWidth=7;cx.lineCap='round';cx.stroke();
  }
  cx.font='700 26px "DM Mono",monospace';cx.fillStyle='#fff';cx.textAlign='center';
  cx.fillText(pct+'%',cx0,cy0+8);
  cx.font='500 10px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.4)';
  cx.fillText('DONE',cx0,cy0+22);

  // Emoji + message
  cx.font='28px serif';cx.fillText(msg.emoji,W/2,228);
  cx.font='700 18px "DM Sans",sans-serif';cx.fillStyle='#fff';
  cx.fillText(msg.title,W/2,256);

  // Divider
  cx.fillStyle='rgba(255,255,255,0.07)';cx.fillRect(40,272,W-80,1);

  // Stats row
  const statCols=[
    {label:'TASKS',val:n+'/'+tot},
    {label:'STUDY TIME',val:fmtTime(sm)},
    {label:'STREAK',val:streak+' 🔥'},
  ];
  statCols.forEach((s,i)=>{
    const sx=80+i*(W/3);
    cx.font='700 22px "DM Mono",monospace';cx.fillStyle=accentHex;
    cx.textAlign='center';cx.fillText(s.val,sx+W/6-80+40,310);
    cx.font='500 10px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.35)';
    cx.fillText(s.label,sx+W/6-80+40,326);
  });

  // Divider
  cx.fillStyle='rgba(255,255,255,0.07)';cx.fillRect(40,342,W-80,1);

  // Completed tasks
  let yy=366;
  if(doneTasks.length){
    cx.font='600 10px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.3)';
    cx.textAlign='left';cx.fillText('COMPLETED TODAY',40,yy);yy+=18;
    doneTasks.slice(0,6).forEach(t=>{
      cx.font='400 13px "DM Sans",sans-serif';cx.fillStyle='rgba(255,255,255,.85)';
      cx.fillText('✓  '+t.label,48,yy);
      if(timeLogs[t.id]){
        cx.font='400 11px "DM Mono",monospace';cx.fillStyle=accentHex;
        cx.textAlign='right';cx.fillText(fmtTime(timeLogs[t.id]),W-40,yy);cx.textAlign='left';
      }
      yy+=26;
    });
    if(doneTasks.length>6){cx.font='italic 11px sans-serif';cx.fillStyle='rgba(255,255,255,.3)';cx.fillText('  + '+(doneTasks.length-6)+' more…',48,yy);yy+=24;}
  }

  // Journal snippet
  if(journal.learned){
    cx.fillStyle='rgba(255,255,255,0.06)';roundRect(cx,40,yy,W-80,70,10);cx.fill();
    cx.font='600 10px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.35)';
    cx.textAlign='left';cx.fillText('💡  WHAT I LEARNED',52,yy+20);
    cx.font='italic 400 12px Georgia,serif';cx.fillStyle='rgba(255,255,255,.75)';
    const learned=journal.learned.length>80?journal.learned.slice(0,77)+'…':journal.learned;
    cx.fillText(learned,52,yy+44);yy+=82;
  }

  // Footer
  cx.textAlign='center';
  cx.font='500 11px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.18)';
  cx.fillText('Study Planner  ·  '+dateStr,W/2,Math.max(yy+24,H-20));

  // Download
  const url=canvas.toDataURL('image/png');
  const a=document.createElement('a');
  a.href=url;a.download='study-day-'+d.toISOString().slice(0,10)+'.png';
  a.click();
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);
  ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
}
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
    let sm=0;tasks.forEach(t=>{if(STUDY_CATS.includes(t.cat)&&dd[t.id])sm+=(t.mins||0);});
    Object.values(tl).forEach(v=>sm+=v);
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
    let sm=0;tasks.forEach(t=>{if(STUDY_CATS.includes(t.cat)&&dd[t.id])sm+=(t.mins||0);});
    Object.values(tl).forEach(v=>sm+=v);
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
    let sm=0;tasks.forEach(t=>{if(STUDY_CATS.includes(t.cat)&&dd[t.id])sm+=(t.mins||0);});
    Object.values(tl).forEach(v=>sm+=v);
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
  for(let i=0;i<90;i++){const k=dkey(-i);const r=localStorage.getItem('sp-d-'+k);if(r)data['day-'+k]=JSON.parse(r);}
  for(let i=0;i<=60;i++){const k='sp-j-'+dkey(-i);const r=localStorage.getItem(k);if(r)data['journal-'+dkey(-i)]=JSON.parse(r);}
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  const today=new Date().toISOString().split('T')[0];
  a.download=`study-planner-${today}.json`;a.click();
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
      if(data.tasks){localStorage.setItem('sp-tasks',JSON.stringify(data.tasks));}
      // restore settings
      if(data.settings){localStorage.setItem('sp-settings',JSON.stringify(data.settings));}
      // restore schedule
      if(data.schedule){localStorage.setItem('sp-sched',JSON.stringify(data.schedule));}
      // restore daily logs
      Object.keys(data).forEach(k=>{
        if(k.startsWith('day-')){localStorage.setItem('sp-d-'+k.slice(4),JSON.stringify(data[k]));}
        if(k.startsWith('journal-')){localStorage.setItem('sp-j-'+k.slice(8),JSON.stringify(data[k]));}
      });
      showToast('Import successful — reloading…');
      setTimeout(()=>location.reload(),800);
    }catch(err){alert('Failed to parse file: '+err.message);}
  };
  reader.readAsText(file);
  // reset input so same file can be re-selected
  event.target.value='';
}

/* ═══════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════ */
function showToast(msg){
  let t=document.getElementById('sp-toast');
  if(!t){t=document.createElement('div');t.id='sp-toast';
    t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--surface2);border:1px solid var(--border2);border-radius:20px;padding:8px 18px;font-size:13px;color:var(--text);z-index:999;transition:opacity .3s;pointer-events:none;';
    document.body.appendChild(t);}
  t.textContent=msg;t.style.opacity='1';
  clearTimeout(t._t);t._t=setTimeout(()=>{t.style.opacity='0';},2200);
}

/* ═══════════════════════════════════════════════
   TABS
═══════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════
   TABS — 6 merged tabs
═══════════════════════════════════════════════ */
const MAIN_TABS=['today','goals','learn','portfolio','plan','hub'];
let learnSub='journal', planSub='schedule', hubSub='stats';

function switchTab(name){
  MAIN_TABS.forEach(n=>{
    document.getElementById('v-'+n).style.display=n===name?'block':'none';
    const tb=document.getElementById('t-'+n);if(tb)tb.className='tab'+(n===name?' on':'');
    // Sync mobile bottom nav
    const mb=document.getElementById('mn-'+n);if(mb)mb.className='mnav-btn'+(n===name?' active':'');
  });
  // Scroll to top when switching tabs on mobile
  const appEl=document.querySelector('.app');if(appEl)appEl.scrollTop=0;
  if(name==='today'){}
  if(name==='goals')renderGoals();
  if(name==='portfolio')renderPortfolio();
  if(name==='learn')renderLearn(learnSub);
  if(name==='plan')renderPlan(planSub);
  if(name==='hub')renderHub(hubSub);
}

function renderLearn(sub){
  learnSub=sub;
  const tabs=['journal','flashcards','library'];
  const labels={journal:'Journal',flashcards:'Flashcards',library:'Library'};
  let h=`<div class="sub-tabs">`;
  tabs.forEach(t=>{h+=`<button class="sub-tab${sub===t?' on':''}" onclick="renderLearn('${t}')">${labels[t]}</button>`;});
  h+=`</div><div id="learn-content">`;
  if(sub==='journal'){h+=buildJournalHTML();}
  else if(sub==='flashcards'){h+=buildFlashcardsHTML();}
  else if(sub==='library'){h+=buildLibraryHTML();}
  h+=`</div>`;
  document.getElementById('v-learn').innerHTML=h;
  if(sub==='journal')bindJournalEvents();
}

function renderPlan(sub){
  planSub=sub;
  const tabs=['schedule','roadmap'];
  const labels={schedule:'Schedule',roadmap:'Roadmap'};
  let h=`<div class="sub-tabs">`;
  tabs.forEach(t=>{h+=`<button class="sub-tab${sub===t?' on':''}" onclick="renderPlan('${t}')">${labels[t]}</button>`;});
  h+=`</div><div id="plan-content">`;
  if(sub==='schedule'){h+=buildSchedHTML();}
  else if(sub==='roadmap'){h+=buildRoadmapHTML();}
  h+=`</div>`;
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

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
/* ── Supabase-compatible init wrapper ──────────────
   supabase.js calls window.__startApp() after pulling
   fresh cloud data. If Supabase isn't in use, the
   script below runs immediately as a fallback.
──────────────────────────────────────────────── */
window.__startApp = function () {
  loadGlobal();
  loadDay();
  updateHeader();
  renderToday();
};

// Fallback: start immediately if Supabase isn't loaded
if (!window.SUPABASE_ENABLED) window.__startApp();