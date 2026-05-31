/* ═══════════════════════════════════════════════
   START TIME TRACKING
   ═══════════════════════════════════════════════ */
let taskStartTimes = {};
function loadTaskStartTimes(){
  try{const r=localStorage.getItem('sp-start-times-'+dkey(0));taskStartTimes=r?JSON.parse(r):{};}catch(e){taskStartTimes={};}
}
