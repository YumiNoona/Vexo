/* ═══════════════════════════════════════════════
   PORTFOLIO KANBAN
═══════════════════════════════════════════════ */
function getKanban(){
  try{const r=localStorage.getItem('sp-kanban');return r?JSON.parse(r):{todo:[],inprog:[],done:[]};}
  catch(e){return{todo:[],inprog:[],done:[]};}
}
function saveKanban(k){try{localStorage.setItem('sp-kanban',JSON.stringify(k));}catch(e){}}
function renderPortfolio(){
  const kb=getKanban();
  const colDefs=[
    {key:'todo',label:'To Do',cls:'kanban-todo'},
    {key:'inprog',label:'In Progress',cls:'kanban-inprog'},
    {key:'done',label:'Done',cls:'kanban-done'},
  ];
  let h=`<p style="font-size:13px;color:var(--muted);margin-bottom:16px;">Track your case study projects through to portfolio-ready.</p>
  <div class="kanban-board">`;
  colDefs.forEach(col=>{
    h+=`<div class="kanban-col ${col.cls}">
      <div class="kanban-col-header">
        <span class="kanban-col-title">${col.label}</span>
        <span class="kanban-col-count">${kb[col.key].length}</span>
      </div>`;
    kb[col.key].forEach((card,i)=>{
      const tagHtml=card.ready?`<span class="kanban-card-tag ready">Job-ready</span>`:card.polish?`<span class="kanban-card-tag polish">Polishing</span>`:'';
      h+=`<div class="kanban-card" onclick="openKanbanCard('${col.key}',${i})">
        <p class="kanban-card-title">${escHtml(card.title)}</p>
        ${tagHtml}
      </div>`;
    });
    h+=`<button class="kanban-add-card" onclick="addKanbanCard('${col.key}')">+ Add project</button>
    </div>`;
  });
  h+='</div>';
  document.getElementById('v-portfolio').innerHTML=h;
}
function addKanbanCard(col){
  const title=prompt('Project name:');if(!title||!title.trim())return;
  const kb=getKanban();
  kb[col].push({title:title.trim(),ready:false,polish:false,notes:''});
  saveKanban(kb);renderPortfolio();
}
function openKanbanCard(col,idx){
  const kb=getKanban();const card=kb[col][idx];
  const allCols=['todo','inprog','done'];
  const moveOpts=allCols.filter(c=>c!==col).map(c=>`<button class="modal-btn" onclick="moveKanbanCard('${col}',${idx},'${c}')">${c==='todo'?'← To Do':c==='inprog'?'In Progress →':'Done ✓'}</button>`).join('');
  showModal(`<p class="modal-title">Project</p>
    <p class="modal-task">${escHtml(card.title)}</p>
    <div class="modal-row"><span class="modal-label">Job-ready</span>
      <label class="toggle"><input type="checkbox" id="kc-ready" ${card.ready?'checked':''} onchange="updateKanbanFlags('${col}',${idx})"><div class="toggle-track"></div><div class="toggle-thumb"></div></label>
    </div>
    <div class="modal-row"><span class="modal-label">Polishing</span>
      <label class="toggle"><input type="checkbox" id="kc-polish" ${card.polish?'checked':''} onchange="updateKanbanFlags('${col}',${idx})"><div class="toggle-track"></div><div class="toggle-thumb"></div></label>
    </div>
    <div style="margin-bottom:14px;"><p style="font-size:12px;color:var(--muted);margin-bottom:6px;">Notes</p>
      <textarea class="modal-input" id="kc-notes" style="height:80px;resize:vertical;">${escHtml(card.notes||'')}</textarea></div>
    <p class="modal-section-title">Move to</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">${moveOpts}</div>
    <div class="modal-btns">
      <button class="modal-btn del danger-btn" onclick="deleteKanbanCard('${col}',${idx})">Delete</button>
      <button class="modal-btn" onclick="saveKanbanCard('${col}',${idx})">Save</button>
    </div>`);
}
function updateKanbanFlags(col,idx){
  const kb=getKanban();
  kb[col][idx].ready=document.getElementById('kc-ready')?.checked||false;
  kb[col][idx].polish=document.getElementById('kc-polish')?.checked||false;
  saveKanban(kb);
}
function saveKanbanCard(col,idx){
  const kb=getKanban();
  kb[col][idx].notes=document.getElementById('kc-notes')?.value||'';
  kb[col][idx].ready=document.getElementById('kc-ready')?.checked||false;
  kb[col][idx].polish=document.getElementById('kc-polish')?.checked||false;
  saveKanban(kb);closeModal();renderPortfolio();
}
function moveKanbanCard(fromCol,idx,toCol){
  const kb=getKanban();const[card]=kb[fromCol].splice(idx,1);
  kb[toCol].push(card);saveKanban(kb);closeModal();renderPortfolio();
}
function deleteKanbanCard(col,idx){
  if(!confirm('Delete this project?'))return;
  const kb=getKanban();kb[col].splice(idx,1);saveKanban(kb);closeModal();renderPortfolio();
}