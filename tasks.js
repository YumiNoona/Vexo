/* ═══════════════════════════════════════════════
   TOGGLE / EDIT / DELETE / ADD
═══════════════════════════════════════════════ */
function toggle(id){
  const wasDone=!!done[id];done[id]=!wasDone;
  const row=document.getElementById('row-'+id);const ck=document.getElementById('ck-'+id);
  if(done[id]){row.classList.add('done');ck.classList.add('checked');ck.innerHTML=CHK;playSoundProfile('complete');}
  else{row.classList.remove('done');ck.classList.remove('checked');ck.innerHTML='';}
  updateProg();saveDay();
}
function editTask(id){
  const lbl=document.getElementById('lbl-'+id);const row=document.getElementById('row-'+id);
  if(!lbl||row.classList.contains('editing'))return;
  row.classList.add('editing');const cur=lbl.textContent;
  lbl.outerHTML=`<input id="lbl-${id}" class="task-edit-input" value="${cur.replace(/"/g,'&quot;')}"
    onblur="finishEdit('${id}')" onkeydown="if(event.key==='Enter'){event.preventDefault();finishEdit('${id}');}if(event.key==='Escape'){cancelEdit('${id}','${cur.replace(/'/g,"\\'")}');}">`;
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
  const newName=prompt('Rename category:',oldName);
  if(!newName||!newName.trim()||newName.trim()===oldName)return;
  tasks.forEach(t=>{if(t.cat===oldName)t.cat=newName.trim();});
  saveGlobal();renderToday();
}
function deleteTask(id){
  if(!window.confirm('Delete this task?'))return;
  tasks=tasks.filter(t=>t.id!==id);delete done[id];delete timeLogs[id];
  saveGlobal();saveDay();renderToday();
}
function addTaskInCat(cat){
  const existing=document.getElementById('addTaskRow');if(existing)existing.remove();
  const row=document.createElement('div');row.id='addTaskRow';row.className='add-task-row';
  row.innerHTML=`<span style="color:var(--subtle);font-size:14px">+</span>
    <input class="add-task-input" id="newTaskInp" placeholder="Task name…">
    <button class="add-task-btn" onclick="confirmAddTask('${cat}')">Add</button>`;
  const catTasks=tasks.filter(t=>t.cat===cat);
  const lastId=catTasks.length?catTasks[catTasks.length-1].id:null;
  const lastNotesEl=lastId?document.getElementById('notes-'+lastId):null;
  const lastRow=lastId?document.getElementById('row-'+lastId):null;
  const insertAfter=lastNotesEl||lastRow;
  if(insertAfter)insertAfter.insertAdjacentElement('afterend',row);
  else document.getElementById('v-today').appendChild(row);
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
  const name=prompt('Category name:');if(!name||!name.trim())return;
  const t={id:uid(),cat:name.trim(),label:'New task',mins:30};
  tasks.push(t);saveGlobal();saveDay();renderToday();
  setTimeout(()=>editTask(t.id),60);
}

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