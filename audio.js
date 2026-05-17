/* ═══════════════════════════════════════════════
   AUDIO
═══════════════════════════════════════════════ */
function getAudioCtx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx;}
function playTone(freq,dur,type='sine',vol=0.3){
  try{const ctx=getAudioCtx();const o=ctx.createOscillator();const g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);o.type=type;o.frequency.value=freq;
    g.gain.setValueAtTime(vol,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);
    o.start();o.stop(ctx.currentTime+dur);}catch(e){}
}
function playSoundProfile(event){
  if(!settings.soundEnabled)return;
  const p=settings.soundProfile||'soft';
  if(event==='complete'){
    if(p==='soft'){playTone(523,.12);setTimeout(()=>playTone(659,.12),120);setTimeout(()=>playTone(784,.25),240);}
    else if(p==='chime'){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,.3,'sine',.25),i*120));}
    else if(p==='lo-fi'){playTone(200,.08,'square',.15);setTimeout(()=>playTone(300,.2,'square',.12),100);}
    else if(p==='minimal'){playTone(880,.08,'sine',.2);}
    else if(p==='retro'){[400,600,800].forEach((f,i)=>setTimeout(()=>playTone(f,.06,'square',.18),i*60));}
  }else if(event==='timer'){
    if(p==='soft'){[784,659,523].forEach((f,i)=>setTimeout(()=>playTone(f,.3),i*150));}
    else if(p==='chime'){[1047,784,659,523].forEach((f,i)=>setTimeout(()=>playTone(f,.35,'sine',.3),i*140));}
    else if(p==='minimal'){playTone(440,.4,'sine',.25);}
    else{playTone(784,.3);setTimeout(()=>playTone(523,.3),150);}
  }else if(event==='break'){
    playTone(392,.2);setTimeout(()=>playTone(523,.3),200);
  }else if(event==='tick'){playTone(1200,.03,'sine',.08);}
}
function testSound(){playSoundProfile('complete');}