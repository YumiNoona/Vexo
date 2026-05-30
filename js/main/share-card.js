/* ═══════════════════════════════════════════════
   SHARE CARD — Canvas → PNG download
═══════════════════════════════════════════════ */
function downloadDayCard(){
  const n=doneCount(),tot=tasks.length,sm=totalStudyMins(),pct=tot?Math.round(n/tot*100):0;
  const journal=getJournalEntry(0);
  const d=new Date();
  const dateStr=d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
  const msgs=[
    {min:100,emoji:'🏆',title:'Perfect day.'},
    {min:80, emoji:'🔥',title:'Strong finish.'},
    {min:60, emoji:'⭐',title:'Solid progress.'},
    {min:40, emoji:'📈',title:'Keep going.'},
    {min:0,  emoji:'🌱',title:'Day one is still a day.'},
  ];
  const msg=msgs.find(m=>pct>=m.min)||msgs[msgs.length-1];
  const accentHex=(settings.accentColor||'#d4960a');
  const ringColor=pct===100?'#2ecf8c':pct>=60?accentHex:'#4a9eff';
  const doneTasks=tasks.filter(t=>done[t.id]);

  const W=640,H=640+Math.min(doneTasks.length,6)*32+(journal.learned?80:0);
  const canvas=document.createElement('canvas');
  canvas.width=W*2;canvas.height=H*2;
  const cx=canvas.getContext('2d');
  cx.scale(2,2);

  // BG gradient
  const bg=cx.createLinearGradient(0,0,W,H);
  bg.addColorStop(0,'#111113');bg.addColorStop(1,'#0c0c0e');
  cx.fillStyle=bg;roundRect(cx,0,0,W,H,0);cx.fill();

  // Subtle grid dots
  cx.fillStyle='rgba(255,255,255,0.025)';
  for(let x=20;x<W;x+=30)for(let y=20;y<H;y+=30){cx.beginPath();cx.arc(x,y,1,0,Math.PI*2);cx.fill();}

  // Top accent bar
  const barGrad=cx.createLinearGradient(0,0,W,0);
  barGrad.addColorStop(0,accentHex);barGrad.addColorStop(1,'transparent');
  cx.fillStyle=barGrad;cx.fillRect(0,0,W,3);

  // Date
  cx.font='500 11px "DM Mono", monospace';
  cx.fillStyle='rgba(255,255,255,0.35)';
  cx.letterSpacing='2px';
  cx.textAlign='center';
  cx.fillText(dateStr.toUpperCase(),W/2,44);

  // Title
  cx.font='italic 700 34px Georgia, serif';
  cx.fillStyle='#ffffff';
  cx.fillText("Today's wrap-up",W/2,86);

  // Ring
  const cx0=W/2,cy0=148,rad=52;
  cx.beginPath();cx.arc(cx0,cy0,rad,0,Math.PI*2);
  cx.strokeStyle='rgba(255,255,255,0.08)';cx.lineWidth=7;cx.stroke();
  if(pct>0){
    cx.beginPath();
    cx.arc(cx0,cy0,rad,-Math.PI/2,-Math.PI/2+2*Math.PI*(pct/100));
    cx.strokeStyle=ringColor;cx.lineWidth=7;cx.lineCap='round';cx.stroke();
  }
  cx.font='700 26px "DM Mono",monospace';cx.fillStyle='#fff';cx.textAlign='center';
  cx.fillText(pct+'%',cx0,cy0+8);
  cx.font='500 10px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.4)';
  cx.fillText('DONE',cx0,cy0+22);

  // Emoji + message
  cx.font='28px serif';cx.fillText(msg.emoji,W/2,228);
  cx.font='700 18px "DM Sans",sans-serif';cx.fillStyle='#fff';
  cx.fillText(msg.title,W/2,256);

  // Divider
  cx.fillStyle='rgba(255,255,255,0.07)';cx.fillRect(40,272,W-80,1);

  // Stats row
  const statCols=[
    {label:'TASKS',val:n+'/'+tot},
    {label:'STUDY TIME',val:fmtTime(sm)},
    {label:'STREAK',val:streak+' 🔥'},
  ];
  statCols.forEach((s,i)=>{
    const sx=80+i*(W/3);
    cx.font='700 22px "DM Mono",monospace';cx.fillStyle=accentHex;
    cx.textAlign='center';cx.fillText(s.val,sx+W/6-80+40,310);
    cx.font='500 10px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.35)';
    cx.fillText(s.label,sx+W/6-80+40,326);
  });

  // Divider
  cx.fillStyle='rgba(255,255,255,0.07)';cx.fillRect(40,342,W-80,1);

  // Completed tasks
  let yy=366;
  if(doneTasks.length){
    cx.font='600 10px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.3)';
    cx.textAlign='left';cx.fillText('COMPLETED TODAY',40,yy);yy+=18;
    doneTasks.slice(0,6).forEach(t=>{
      cx.font='400 13px "DM Sans",sans-serif';cx.fillStyle='rgba(255,255,255,.85)';
      cx.fillText('✓  '+t.label,48,yy);
      if(timeLogs[t.id]){
        cx.font='400 11px "DM Mono",monospace';cx.fillStyle=accentHex;
        cx.textAlign='right';cx.fillText(fmtTime(timeLogs[t.id]),W-40,yy);cx.textAlign='left';
      }
      yy+=26;
    });
    if(doneTasks.length>6){cx.font='italic 11px sans-serif';cx.fillStyle='rgba(255,255,255,.3)';cx.fillText('  + '+(doneTasks.length-6)+' more…',48,yy);yy+=24;}
  }

  // Journal snippet
  if(journal.learned){
    cx.fillStyle='rgba(255,255,255,0.06)';roundRect(cx,40,yy,W-80,70,10);cx.fill();
    cx.font='600 10px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.35)';
    cx.textAlign='left';cx.fillText('💡  WHAT I LEARNED',52,yy+20);
    cx.font='italic 400 12px Georgia,serif';cx.fillStyle='rgba(255,255,255,.75)';
    const learned=journal.learned.length>80?journal.learned.slice(0,77)+'…':journal.learned;
    cx.fillText(learned,52,yy+44);yy+=82;
  }

  // Footer
  cx.textAlign='center';
  cx.font='500 11px "DM Mono",monospace';cx.fillStyle='rgba(255,255,255,.18)';
  cx.fillText('Study Planner  ·  '+dateStr,W/2,Math.max(yy+24,H-20));

  // Download
  const url=canvas.toDataURL('image/png');
  const a=document.createElement('a');
  a.href=url;a.download='study-day-'+d.toISOString().slice(0,10)+'.png';
  a.click();
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);
  ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
}