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
   UNDO TOAST SYSTEM
═══════════════════════════════════════════════ */
let _undoTimer=null;
function showUndoToast(msg,undoFn){
  let t=document.getElementById('sp-undo-toast');
  if(t)t.remove();
  t=document.createElement('div');t.id='sp-undo-toast';t.className='sp-undo-toast';
  t.innerHTML=`<span>${msg}</span><button class="undo-btn" onclick="doUndo()">Undo</button>`;
  document.body.appendChild(t);
  window._pendingUndo=undoFn;
  clearTimeout(_undoTimer);
  _undoTimer=setTimeout(()=>{const el=document.getElementById('sp-undo-toast');if(el)el.remove();window._pendingUndo=null;},5000);
}
function doUndo(){
  if(window._pendingUndo){window._pendingUndo();window._pendingUndo=null;}
  clearTimeout(_undoTimer);
  const el=document.getElementById('sp-undo-toast');if(el)el.remove();
}