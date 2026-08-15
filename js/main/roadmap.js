/* ═══════════════════════════════════════════════
   ROADMAP — fully editable
═══════════════════════════════════════════════ */
function buildRoadmapHTML(){
  const phases=getPhases();
  let h=`<div class="sched-header-bar">
    <p class="sched-header-title">Your longer-term plan</p>
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
          <div class="roadmap-week-actions" style="display:flex;gap:4px;flex-shrink:0;">
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

function addPhase(){phaseModal(-1);}
function editPhase(pi){phaseModal(pi);}
function addWeek(pi){weekModal(pi,-1);}
function editWeek(pi,wi){weekModal(pi,wi);}
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
      <p class="big-modal-title">${isEdit?escHtml(p.n)+' — '+escHtml(p.title):'Add a plan phase'}</p>
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
        <textarea class="big-modal-textarea" id="wk-t" placeholder="Tasks, outcomes, checkpoints, or notes…" rows="4">${escHtml(w.t)}</textarea>
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
