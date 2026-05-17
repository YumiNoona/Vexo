/* ═══════════════════════════════════════════════
   SCHEDULE — fully editable
═══════════════════════════════════════════════ */
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
  const el=document.getElementById('v-plan');
  if(el)renderPlan('schedule');
}
function schedModal(idx){
  const SCHED=getSched();
  const isEdit=idx!==-1;
  const s=isEdit?SCHED[idx]:{id:'s-'+uid(),t:'9:00 AM',l:'',dur:'',type:'r'};
  showModal(`<p class="modal-title">${isEdit?'Edit':'Add'} Schedule Block</p>
    <div class="modal-row"><span class="modal-label">Time</span><input class="modal-input" id="sc-t" value="${escHtml(s.t)}" placeholder="9:00 AM"></div>
    <div class="modal-row"><span class="modal-label">Label</span><input class="modal-input" id="sc-l" value="${escHtml(s.l)}" placeholder="Study Block…"></div>
    <div class="modal-row"><span class="modal-label">Duration</span><input class="modal-input" id="sc-dur" value="${escHtml(s.dur||'')}" placeholder="2 hrs (optional)"></div>
    <div class="modal-row"><span class="modal-label">Type</span>
      <select class="modal-input" id="sc-type">
        <option value="r"${s.type==='r'?' selected':''}>Routine</option>
        <option value="s"${s.type==='s'?' selected':''}>Study</option>
        <option value="h"${s.type==='h'?' selected':''}>Exercise</option>
        <option value="b"${s.type==='b'?' selected':''}>Break</option>
      </select>
    </div>
    <div class="modal-btns">
      <button class="modal-btn" onclick="closeModal()">Cancel</button>
      <button class="modal-btn primary" onclick="saveSchedBlock(${idx})">Save</button>
    </div>`);
}
function addSchedBlock(){schedModal(-1);}
function editSchedBlock(idx){schedModal(idx);}
function saveSchedBlock(idx){
  const t=document.getElementById('sc-t')?.value.trim();
  const l=document.getElementById('sc-l')?.value.trim();
  if(!t||!l){alert('Time and label required');return;}
  const dur=document.getElementById('sc-dur')?.value.trim();
  const type=document.getElementById('sc-type')?.value||'r';
  const SCHED=getSched();
  if(idx===-1){SCHED.push({id:'s-'+uid(),t,l,dur,type});}
  else{SCHED[idx]={...SCHED[idx],t,l,dur,type};}
  // sort by time
  SCHED.sort((a,b)=>toMin(a.t)-toMin(b.t));
  saveSched(SCHED);closeModal();renderSched();
}
function deleteSchedBlock(idx){
  if(!confirm('Delete this block?'))return;
  const SCHED=getSched();SCHED.splice(idx,1);saveSched(SCHED);renderSched();
}
function resetSched(){
  if(!confirm('Reset schedule to default?'))return;
  saveSched(JSON.parse(JSON.stringify(DEFAULT_SCHED)));renderSched();
}