/* ═══════════════════════════════════════════════
   SCHEDULE — fully editable, type="time" inputs
═══════════════════════════════════════════════ */

/* Time format converters */
function to24h(t12){
  if(!t12||!t12.includes(' '))return t12||'09:00';
  const[tp,ap]=t12.split(' ');
  const[h,m]=tp.split(':').map(Number);
  let hh=h;
  if(ap==='PM'&&h!==12)hh=h+12;
  if(ap==='AM'&&h===12)hh=0;
  return String(hh).padStart(2,'0')+':'+String(m||0).padStart(2,'0');
}
function to12h(t24){
  if(!t24||!t24.includes(':'))return t24||'9:00 AM';
  const[h,m]=t24.split(':').map(Number);
  const ap=h>=12?'PM':'AM';
  const h12=h%12||12;
  return h12+':'+String(m).padStart(2,'0')+' '+ap;
}

function buildSchedHTML(){
  const SCHED=getSched();
  const now=new Date().getHours()*60+new Date().getMinutes();
  const tc={s:'study',h:'exercise',b:'break-type',r:''};
  let h=`<div class="sched-header-bar">
    <p class="sched-header-title">Your daily schedule</p>
    <div style="display:flex;gap:6px;">
      <button class="act-btn" onclick="addSchedBlock()">+ Add block</button>
      <button class="act-btn" onclick="resetSched()" style="color:var(--muted)">Reset</button>
    </div>
  </div>`;
  SCHED.forEach((s,i)=>{
    const sm=toMin(s.t),nm=i<SCHED.length-1?toMin(SCHED[i+1].t):24*60;
    const curr=sm<=now&&now<nm;
    h+=`<div class="sched-row">
      <div class="sched-time${curr?' now':''}"><span>${s.t}</span></div>
      <div class="sched-block${curr?' now':' '+(tc[s.type]||'')}">
        <div class="sched-inner">
          <span class="sched-name">${escHtml(s.l)}</span>
          ${s.dur?`<span class="sched-dur">${escHtml(s.dur)}</span>`:''}
          <div class="sched-actions">
            <button class="act-btn" onclick="editSchedBlock(${i})">Edit</button>
            <button class="act-btn del" onclick="deleteSchedBlock(${i})">✕</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  h+=`<div class="sched-legend">
    <div class="leg-item"><div class="leg-dot" style="background:var(--accent)"></div><span class="leg-label">Now</span></div>
    <div class="leg-item"><div class="leg-dot" style="background:#4a9eff"></div><span class="leg-label">Study</span></div>
    <div class="leg-item"><div class="leg-dot" style="background:#2ecf8c"></div><span class="leg-label">Exercise</span></div>
    <div class="leg-item"><div class="leg-dot" style="background:var(--purple)"></div><span class="leg-label">Break</span></div>
  </div>`;
  return h;
}
function renderSched(){
  const planEl=document.getElementById('v-plan');
  if(planEl&&planEl.style.display!=='none')renderPlan('schedule');
}
function schedModal(idx){
  const SCHED=getSched();
  const isEdit=idx!==-1;
  const s=isEdit?SCHED[idx]:{id:'s-'+uid(),t:'9:00 AM',l:'',dur:'',type:'r'};
  const t24=to24h(s.t);
  showModal(`
    <div class="big-modal-header">
      <p class="big-modal-label">${isEdit?'Edit':'New'} schedule block</p>
      <p class="big-modal-title">${isEdit?escHtml(s.l):'Add a time block'}</p>
    </div>
    <div class="big-modal-body">
      <div class="big-modal-field">
        <label class="big-modal-field-label">Time</label>
        <input class="big-modal-input" type="time" id="sc-t" value="${t24}">
      </div>
      <div class="big-modal-field">
        <label class="big-modal-field-label">Label</label>
        <input class="big-modal-input" id="sc-l" value="${escHtml(s.l)}" placeholder="Focus block, appointment, break…" autocomplete="off">
      </div>
      <div class="big-modal-field">
        <label class="big-modal-field-label">Duration <span class="big-modal-hint">optional, e.g. 2 hrs</span></label>
        <input class="big-modal-input" id="sc-dur" value="${escHtml(s.dur||'')}" placeholder="2 hrs" autocomplete="off">
      </div>
      <div class="big-modal-field">
        <label class="big-modal-field-label">Type</label>
        <select class="big-modal-input" id="sc-type">
          <option value="r"${s.type==='r'?' selected':''}>Routine</option>
          <option value="s"${s.type==='s'?' selected':''}>Study</option>
          <option value="h"${s.type==='h'?' selected':''}>Exercise</option>
          <option value="b"${s.type==='b'?' selected':''}>Break</option>
        </select>
      </div>
    </div>
    <div class="big-modal-actions">
      ${isEdit?`<button class="modal-btn del danger-btn" onclick="deleteSchedBlock(${idx})">Delete</button>`:''}
      <div style="display:flex;gap:8px;margin-left:auto">
        <button class="modal-btn" onclick="closeModal()">Cancel</button>
        <button class="modal-btn primary" onclick="saveSchedBlock(${idx})">Save block</button>
      </div>
    </div>`);
  setTimeout(()=>{const i=document.getElementById('sc-l');if(i)i.focus();},60);
}
function addSchedBlock(){schedModal(-1);}
function editSchedBlock(idx){schedModal(idx);}
function saveSchedBlock(idx){
  const t24=document.getElementById('sc-t')?.value;
  const l=document.getElementById('sc-l')?.value.trim();
  if(!t24||!l){showToast('Time and label required');return;}
  const t=to12h(t24);
  const dur=document.getElementById('sc-dur')?.value.trim();
  const type=document.getElementById('sc-type')?.value||'r';
  const SCHED=getSched();
  if(idx===-1){SCHED.push({id:'s-'+uid(),t,l,dur,type});}
  else{SCHED[idx]={...SCHED[idx],t,l,dur,type};}
  SCHED.sort((a,b)=>toMin(a.t)-toMin(b.t));
  saveSched(SCHED);closeModal();renderSched();
}
function deleteSchedBlock(idx){
  const SCHED=getSched();const snap={block:{...SCHED[idx]},idx};
  SCHED.splice(idx,1);saveSched(SCHED);closeModal();renderSched();
  showUndoToast('Block deleted',()=>{
    const S2=getSched();S2.splice(snap.idx,0,snap.block);
    saveSched(S2);renderSched();
  });
}
function resetSched(){
  if(!confirm('Reset schedule to default?'))return;
  saveSched(JSON.parse(JSON.stringify(DEFAULT_SCHED)));renderSched();
}
