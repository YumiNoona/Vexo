/* ═══════════════════════════════════════════════
   TODAY VIEW
═══════════════════════════════════════════════ */
function renderToday(){
  if(typeof loadTaskStartTimes==='function')loadTaskStartTimes();
  const isPast=viewOffset<0;
  const tot=tasks.length,n=doneCount(),pct=tot?Math.round(n/tot*100):0;
  const sm=totalStudyMins();
  let h='';
  if(isPast)h+=`<div class="past-banner">Viewing a past day — you can still edit completions.</div>`;

  const weekGoals=getWeekGoals();
  if(weekGoals.length){
    h+=`<div class="goals-banner"><div style="flex:1"><p class="goals-banner-label">This Week's Goals</p><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:2px;">`;
    weekGoals.forEach((g,i)=>{
      h+=`<span class="goal-pill${g.done?' done':''}" onclick="toggleGoal(${i})">${g.done?'✓ ':''} ${escHtml(g.text)}</span>`;
    });
    h+=`</div></div></div>`;
  }

  h+=`<div class="prog-wrap">
    <div class="prog-header"><span class="prog-label">Daily Progress</span><span class="prog-count" id="progCount">${n}/${tot} · ${pct}%</span></div>
    <div class="prog-track"><div class="prog-fill" id="progFill" style="width:${pct}%"></div></div>
    <div class="prog-stats"><span class="prog-stat">Study time: <span id="progTime">${fmtTime(sm)}</span></span></div>
  </div>`;

  cats().forEach(cat=>{
    h+=`<div class="cat-header">
      <span class="cat-label-txt" ondblclick="editCatName('${escHtml(cat)}')" title="Double-click to rename">${escHtml(cat)}</span>
      <button class="cat-add" onclick="addTaskInCat('${escHtml(cat)}')" title="Add task">+</button>
    </div>`;
    const catTasks=tasks.filter(t=>t.cat===cat);if(!catTasks.length){h+=\`<div class="cat-empty" onclick="addTaskInCat('"+escHtml(cat)+"')">＋ Add a task</div>\`;}catTasks.forEach(t=>{
      const d=!!done[t.id];
      const logMin=timeLogs[t.id]||0;
      const dispMin=logMin>0?logMin:(t.mins||0);
      const hasNote=!!(getTaskNote(t.id));
      const startT=taskStartTimes&&taskStartTimes[t.id]?taskStartTimes[t.id]:'';
      const timeBtnLabel=startT?`⏱ ${startT} · ${fmtTime(dispMin)}`:`⏱ ${fmtTime(dispMin)}`;
      h+=`<div id="row-${t.id}" class="task-row${d?' done':''}" draggable="true"
          ondragstart="dragStart(event,'${t.id}')" ondragover="dragOver(event,'${t.id}')" ondrop="dragDrop(event,'${t.id}')" ondragleave="dragLeave(event,'${t.id}')">
        <span class="drag-handle" title="Drag to reorder">⠿</span>
        <div id="ck-${t.id}" class="checkbox${d?' checked':''}" onclick="event.stopPropagation();toggle('${t.id}')">${d?CHK:''}</div>
        <span id="lbl-${t.id}" class="task-text" ondblclick="event.stopPropagation();editTask('${t.id}')" onclick="event.stopPropagation();toggle('${t.id}')" title="Double-click to rename">${escHtml(t.label)}</span>
        <button class="task-start-btn${startT?' has-start':''}" onclick="event.stopPropagation();setTaskStartTime('${t.id}')" title="Set start time">${startT?'🕐 '+startT:'🕐'}</button>
        <button class="task-note-btn${hasNote?' has-note':''}" onclick="event.stopPropagation();toggleNotesDrawer('${t.id}')" title="Notes">📝</button>
        <button class="task-time-btn" onclick="event.stopPropagation();openTaskModal('${t.id}')" title="Timer">⏱ ${fmtTime(dispMin)}</button>
        <div class="task-actions">
          <button class="act-btn" onclick="event.stopPropagation();editTask('${t.id}')">Edit</button>
          <button class="act-btn del" onclick="event.stopPropagation();deleteTask('${t.id}')">✕</button>
        </div>
      </div>
      <div id="notes-${t.id}" class="task-notes-drawer" style="display:none">
        <textarea class="notes-textarea" id="note-ta-${t.id}" placeholder="Paste notes, links, what you learned…" onblur="saveTaskNote('${t.id}')">${escHtml(getTaskNote(t.id)||'')}</textarea>
        <div class="notes-drawer-footer"><span class="notes-hint">Auto-saves on blur</span><button class="act-btn" onclick="saveTaskNote('${t.id}');toggleNotesDrawer('${t.id}')">Done</button></div>
      </div>`;
    });
  });

  h+=`<div style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap;">
    <button class="act-btn" onclick="addCategory()" style="font-size:12px;padding:6px 14px;">+ Add category</button>
  </div>`;

  h+=`<div class="divider"></div>
  <div class="eod-trigger" onclick="renderEOD()">
    <div><p class="eod-trigger-text">🌙 End-of-Day Summary</p><p class="eod-trigger-hint">Generate your daily wrap-up card</p></div>
    <span style="color:var(--muted)">→</span>
  </div>`;

  document.getElementById('v-today').innerHTML=h;
  if(activeNotesId){
    const el=document.getElementById('notes-'+activeNotesId);
    if(el)el.style.display='block';
  }
}

function updateProg(){
  const tot=tasks.length,n=doneCount(),pct=tot?Math.round(n/tot*100):0,sm=totalStudyMins();
  const pb=document.getElementById('progFill');if(pb)pb.style.width=pct+'%';
  const pc=document.getElementById('progCount');if(pc)pc.textContent=n+'/'+tot+' · '+pct+'%';
  const pt=document.getElementById('progTime');if(pt)pt.textContent=fmtTime(sm);
  document.getElementById('timeEl').textContent=fmtTime(sm);
}

/* ═══════════════════════════════════════════════
   TASK NOTES
═══════════════════════════════════════════════ */
function getTaskNote(id){try{return localStorage.getItem('sp-note-'+id)||'';}catch(e){return'';}}
function saveTaskNote(id){
  const ta=document.getElementById('note-ta-'+id);if(!ta)return;
  try{localStorage.setItem('sp-note-'+id,ta.value);}catch(e){}
}
function toggleNotesDrawer(id){
  const drawer=document.getElementById('notes-'+id);if(!drawer)return;
  const isOpen=drawer.style.display!=='none';
  document.querySelectorAll('.task-notes-drawer').forEach(d=>{d.style.display='none';});
  activeNotesId=null;
  if(!isOpen){drawer.style.display='block';activeNotesId=id;setTimeout(()=>{const ta=document.getElementById('note-ta-'+id);if(ta)ta.focus();},50);}
}
/* ═══════════════════════════════════════════════
   TASK START TIME (set from Today row)
═══════════════════════════════════════════════ */
function setTaskStartTime(id) {
  if(typeof loadTaskStartTimes==='function') loadTaskStartTimes();
  const current = taskStartTimes[id] || '';
  // Build a tiny inline time-picker popover via modal
  const t = tasks.find(t=>t.id===id);
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  const defaultVal = current || hh+':'+mm;
  showModal(`<p class="modal-title">Set Start Time</p>
    <p class="modal-task">${escHtml(t?t.label:'Task')}</p>
    <p style="font-size:12px;color:var(--muted);margin-bottom:14px;">What time will you start (or did you start) this activity?</p>
    <div style="display:flex;justify-content:center;margin-bottom:18px;">
      <input class="modal-input" id="startTimeInp" type="time" value="${escHtml(defaultVal)}" style="font-size:22px;font-weight:700;text-align:center;width:160px;padding:10px;letter-spacing:.05em;">
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:16px;">
      ${['6:00','7:00','8:00','9:00','9:30','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'].map(q=>{
        const [qh,qm]=q.split(':');
        const val=String(qh).padStart(2,'0')+':'+qm;
        const label=formatTimeTo12(val);
        return `<button class="modal-btn" style="font-size:11px;padding:5px 10px;" onclick="document.getElementById('startTimeInp').value='${val}'">${label}</button>`;
      }).join('')}
    </div>
    <div class="modal-btns">
      <button class="modal-btn" onclick="closeModal()">Cancel</button>
      ${current?`<button class="modal-btn del" onclick="clearTaskStartTime('${id}')">Clear</button>`:''}
      <button class="modal-btn primary" onclick="confirmTaskStartTime('${id}')">Save</button>
    </div>`);
  setTimeout(()=>{ const i=document.getElementById('startTimeInp'); if(i)i.focus(); },50);
}

function formatTimeTo12(val) {
  try {
    const [h,m] = val.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return h12 + (m ? ':'+String(m).padStart(2,'0') : '') + ' ' + ampm;
  } catch(e) { return val; }
}

function confirmTaskStartTime(id) {
  const inp = document.getElementById('startTimeInp');
  if(!inp) return;
  if(typeof loadTaskStartTimes==='function') loadTaskStartTimes();
  taskStartTimes[id] = inp.value;
  try { localStorage.setItem('sp-start-times-'+dkey(0), JSON.stringify(taskStartTimes)); } catch(e) {}
  closeModal();
  renderToday();
}

function clearTaskStartTime(id) {
  if(typeof loadTaskStartTimes==='function') loadTaskStartTimes();
  delete taskStartTimes[id];
  try { localStorage.setItem('sp-start-times-'+dkey(0), JSON.stringify(taskStartTimes)); } catch(e) {}
  closeModal();
  renderToday();
}