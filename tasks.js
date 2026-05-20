/* ═══════════════════════════════════════════════
   TOGGLE / EDIT / DELETE / ADD
═══════════════════════════════════════════════ */
function toggle(id){
  const wasDone=!!done[id];done[id]=!wasDone;
  const row=document.getElementById('row-'+id);const ck=document.getElementById('ck-'+id);
  if(done[id]){row.classList.add('done');ck.classList.add('checked');ck.innerHTML=CHK;playSoundProfile('complete');}
  else{row.classList.remove('done');ck.classList.remove('checked');ck.innerHTML='';}
  updateProg();saveDay();
  if(navigator.vibrate)navigator.vibrate(40);
}
function editTask(id){
  const lbl=document.getElementById('lbl-'+id);const row=document.getElementById('row-'+id);
  if(!lbl||row.classList.contains('editing'))return;
  row.classList.add('editing');const cur=lbl.textContent;
  lbl.outerHTML=`<input id="lbl-${id}" class="task-edit-input" value="${cur.replace(/"/g,'&quot;')}" onblur="finishEdit('${id}')" onkeydown="if(event.key==='Enter'){event.preventDefault();finishEdit('${id}');}if(event.key==='Escape')cancelEdit('${id}','${cur.replace(/\\/g,'\\\\').replace(/'/g,"\\'")}')">`;
  setTimeout(()=>{const i=document.getElementById('lbl-'+id);if(i){i.focus();i.select();}},10);
}
function finishEdit(id){
  const inp=document.getElementById('lbl-'+id);if(!inp||inp.tagName!=='INPUT')return;
  const val=inp.value.trim();
  const row=document.getElementById('row-'+id);if(row)row.classList.remove('editing');
  const t=tasks.find(t=>t.id===id);const finalLabel=val||(t?t.label:'Task');
  if(t&&val)t.label=val;saveGlobal();
  const isDone=done[id];
  inp.outerHTML=`<span id="lbl-${id}" class="task-text${isDone?' done':''}" ondblclick="event.stopPropagation();editTask('${id}')" onclick="event.stopPropagation();toggle('${id}')">${escHtml(finalLabel)}</span>`;
}
function cancelEdit(id,orig){
  const inp=document.getElementById('lbl-'+id);if(!inp)return;
  const row=document.getElementById('row-'+id);if(row)row.classList.remove('editing');
  inp.outerHTML=`<span id="lbl-${id}" class="task-text" ondblclick="event.stopPropagation();editTask('${id}')" onclick="event.stopPropagation();toggle('${id}')">${escHtml(orig)}</span>`;
}
function editCatName(oldName){
  showModal(`<p class="modal-title">Rename category</p>
    <div class="modal-row"><span class="modal-label">Name</span>
      <input class="modal-input" id="cat-name-inp" value="${escHtml(oldName)}" placeholder="Category name"
        onkeydown="if(event.key==='Enter')saveCatName('${escHtml(oldName)}');if(event.key==='Escape')closeModal();">
    </div>
    <div class="modal-btns">
      <button class="modal-btn" onclick="closeModal()">Cancel</button>
      <button class="modal-btn primary" onclick="saveCatName('${escHtml(oldName)}')">Rename</button>
    </div>`);
  setTimeout(()=>{const i=document.getElementById('cat-name-inp');if(i){i.focus();i.select();}},60);
}
function saveCatName(oldName){
  const inp=document.getElementById('cat-name-inp');
  const newName=inp?inp.value.trim():'';
  if(!newName||newName===oldName){closeModal();return;}
  tasks.forEach(t=>{if(t.cat===oldName)t.cat=newName;});
  saveGlobal();closeModal();renderToday();
}
function deleteTask(id){
  const t=tasks.find(t=>t.id===id);if(!t)return;
  // Snapshot everything needed for undo — including the note
  const snapNote=localStorage.getItem('sp-note-'+id)||'';
  const snap={task:{...t},wasDone:done[id],timeLog:timeLogs[id],note:snapNote,idx:tasks.findIndex(x=>x.id===id)};
  tasks=tasks.filter(t=>t.id!==id);
  delete done[id];delete timeLogs[id];
  // Clean up all per-task localStorage keys so nothing orphans
  try{localStorage.removeItem('sp-note-'+id);}catch(e){}
  saveGlobal();saveDay();renderToday();
  showUndoToast('Task deleted',()=>{
    tasks.splice(snap.idx,0,snap.task);
    if(snap.wasDone!==undefined)done[snap.task.id]=snap.wasDone;
    if(snap.timeLog!==undefined)timeLogs[snap.task.id]=snap.timeLog;
    // Restore note on undo
    if(snap.note)try{localStorage.setItem('sp-note-'+snap.task.id,snap.note);}catch(e){}
    saveGlobal();saveDay();renderToday();
  });
}
function addTaskInCat(cat){
  const existing=document.getElementById('addTaskRow');if(existing)existing.remove();
  const row=document.createElement('div');row.id='addTaskRow';row.className='add-task-row';
  row.innerHTML=`<span style="color:var(--subtle);font-size:14px">+</span>
    <input class="add-task-input" id="newTaskInp" placeholder="Task name…">
    <button class="add-task-btn" onclick="confirmAddTask('${escHtml(cat)}')">Add</button>`;
  const catTasks=tasks.filter(t=>t.cat===cat);
  const lastId=catTasks.length?catTasks[catTasks.length-1].id:null;
  const lastNotesEl=lastId?document.getElementById('notes-'+lastId):null;
  const lastRow=lastId?document.getElementById('row-'+lastId):null;
  const insertAfter=lastNotesEl||lastRow;
  if(insertAfter){insertAfter.insertAdjacentElement('afterend',row);}
  else{
    const placeholder=document.getElementById('cat-empty-'+cat);
    if(placeholder){placeholder.replaceWith(row);}
    else{
      const headers=[...document.querySelectorAll('.cat-header')];
      const hdr=headers.find(h=>h.querySelector('.cat-label-txt')?.textContent===cat);
      if(hdr)hdr.insertAdjacentElement('afterend',row);
      else document.getElementById('v-today').appendChild(row);
    }
  }
  setTimeout(()=>{const i=document.getElementById('newTaskInp');if(i)i.focus();},10);
  document.getElementById('newTaskInp').onkeydown=e=>{if(e.key==='Enter')confirmAddTask(cat);if(e.key==='Escape')row.remove();};
}
function confirmAddTask(cat){
  const inp=document.getElementById('newTaskInp');if(!inp)return;
  const val=inp.value.trim();if(!val)return;
  const t={id:uid(),cat,label:val,mins:30};
  const catTasks=tasks.filter(t=>t.cat===cat);
  const lastIdx=catTasks.length?tasks.lastIndexOf(catTasks[catTasks.length-1]):tasks.length-1;
  tasks.splice(lastIdx+1,0,t);saveGlobal();saveDay();renderToday();
}
function addCategory(){
  showModal(`<p class="modal-title">New category</p>
    <div class="modal-row"><span class="modal-label">Name</span>
      <input class="modal-input" id="new-cat-inp" placeholder="e.g. Evening Review"
        onkeydown="if(event.key==='Enter')confirmAddCategory();if(event.key==='Escape')closeModal();">
    </div>
    <div class="modal-btns">
      <button class="modal-btn" onclick="closeModal()">Cancel</button>
      <button class="modal-btn primary" onclick="confirmAddCategory()">Create</button>
    </div>`);
  setTimeout(()=>{const i=document.getElementById('new-cat-inp');if(i)i.focus();},60);
}
function confirmAddCategory(){
  const inp=document.getElementById('new-cat-inp');
  const name=inp?inp.value.trim():'';
  if(!name){closeModal();return;}
  const t={id:uid(),cat:name,label:'New task',mins:30};
  tasks.push(t);saveGlobal();saveDay();closeModal();renderToday();
  setTimeout(()=>editTask(t.id),80);
}

/* ── Right-click context menu ── */
function showTaskCtxMenu(e,id){
  e.preventDefault();
  hideCtxMenu();
  const t=tasks.find(t=>t.id===id);if(!t)return;
  const isDone=!!done[id];
  const menu=document.createElement('div');
  menu.className='ctx-menu';menu.id='ctx-menu';
  menu.innerHTML=`
    <button class="ctx-item" onclick="hideCtxMenu();toggle('${id}')">${isDone?'↩ Mark incomplete':'✓ Mark complete'}</button>
    <button class="ctx-item" onclick="hideCtxMenu();editTask('${id}')">✏ Edit name</button>
    <button class="ctx-item" onclick="hideCtxMenu();openTaskModal('${id}')">⏱ Open timer</button>
    <button class="ctx-item" onclick="hideCtxMenu();toggleNotesDrawer('${id}')">📝 Notes</button>
    <div class="ctx-sep"></div>
    <button class="ctx-item danger" onclick="hideCtxMenu();deleteTask('${id}')">✕ Delete</button>`;
  const x=Math.min(e.clientX,window.innerWidth-175);
  const y=Math.min(e.clientY,window.innerHeight-210);
  menu.style.cssText=`left:${x}px;top:${y}px;`;
  document.body.appendChild(menu);
  setTimeout(()=>document.addEventListener('click',hideCtxMenu,{once:true}),0);
}
function hideCtxMenu(){const m=document.getElementById('ctx-menu');if(m)m.remove();}

/* ═══════════════════════════════════════════════
   DRAG & DROP
═══════════════════════════════════════════════ */
let dragId=null;
function dragStart(e,id){dragId=id;setTimeout(()=>{const r=document.getElementById('row-'+id);if(r)r.classList.add('dragging');},0);}
function dragOver(e,id){e.preventDefault();if(id!==dragId){const r=document.getElementById('row-'+id);if(r)r.classList.add('drag-over');}}
function dragLeave(e,id){const r=document.getElementById('row-'+id);if(r)r.classList.remove('drag-over');}
function dragDrop(e,id){
  e.preventDefault();const overR=document.getElementById('row-'+id);if(overR)overR.classList.remove('drag-over');
  if(!dragId||dragId===id){dragId=null;return;}
  const fromIdx=tasks.findIndex(t=>t.id===dragId),toIdx=tasks.findIndex(t=>t.id===id);
  if(fromIdx===-1||toIdx===-1){dragId=null;return;}
  const[item]=tasks.splice(fromIdx,1);tasks.splice(toIdx,0,item);
  dragId=null;saveGlobal();renderToday();
}
