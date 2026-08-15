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
  let h=`<p style="font-size:13px;color:var(--muted);margin-bottom:16px;">Move any project, outcome, or larger piece of work from idea to done.</p>
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
  showModal(`<p class="modal-title">New project</p>
    <div class="modal-row"><span class="modal-label">Title</span>
      <input class="modal-input" id="kb-title-inp" placeholder="Project name…"
        onkeydown="if(event.key==='Enter')confirmAddKanban('${col}');if(event.key==='Escape')closeModal();">
    </div>
    <div class="modal-btns">
      <button class="modal-btn" onclick="closeModal()">Cancel</button>
      <button class="modal-btn primary" onclick="confirmAddKanban('${col}')">Add project</button>
    </div>`);
  setTimeout(()=>{const i=document.getElementById('kb-title-inp');if(i)i.focus();},60);
}
function confirmAddKanban(col){
  const inp=document.getElementById('kb-title-inp');
  const title=inp?inp.value.trim():'';if(!title)return;
  const kb=getKanban();
  kb[col].push({title,ready:false,polish:false,notes:''});
  saveKanban(kb);closeModal();renderPortfolio();
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
  const kb=getKanban();const snap={col,card:{...kb[col][idx]},idx};
  kb[col].splice(idx,1);saveKanban(kb);closeModal();renderPortfolio();
  showUndoToast('Project deleted',()=>{
    const kb2=getKanban();kb2[snap.col].splice(snap.idx,0,snap.card);
    saveKanban(kb2);renderPortfolio();
  });
}
