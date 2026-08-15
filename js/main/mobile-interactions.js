/* Touch-only interaction helpers. Desktop behavior remains unchanged. */
(function(){
  function isMobile(){return document.documentElement.dataset.vexoLayout==='mobile';}
  let holdTimer=null,heldRow=null,startX=0,startY=0;

  function clearHold(){
    clearTimeout(holdTimer);holdTimer=null;
    if(heldRow)heldRow.classList.remove('mobile-pressed');
    heldRow=null;
  }
  document.addEventListener('pointerdown',function(e){
    if(!isMobile()||e.pointerType==='mouse')return;
    const row=e.target.closest('.task-row');
    if(!row||e.target.closest('button,.checkbox,input,textarea'))return;
    heldRow=row;startX=e.clientX;startY=e.clientY;row.classList.add('mobile-pressed');
    holdTimer=setTimeout(function(){
      const id=row.id.replace('row-','');
      if(navigator.vibrate)navigator.vibrate(25);
      showTaskCtxMenu({preventDefault:function(){},clientX:Math.min(startX,innerWidth-180),clientY:Math.min(startY,innerHeight-230)},id);
      clearHold();
    },520);
  },{passive:true});
  document.addEventListener('pointermove',function(e){
    if(holdTimer&&(Math.abs(e.clientX-startX)>10||Math.abs(e.clientY-startY)>10))clearHold();
  },{passive:true});
  document.addEventListener('pointerup',clearHold,{passive:true});
  document.addEventListener('pointercancel',clearHold,{passive:true});

  window.addEventListener('popstate',function(){
    if(!isMobile())return;
    const overlay=document.getElementById('modalOverlay');
    if(overlay&&overlay.style.display!=='none')closeModal();
  });
})();
