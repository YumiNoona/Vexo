
/* ═══════════════════════════════════════════════
   COMMAND PALETTE (Ctrl+K)
═══════════════════════════════════════════════ */
let paletteIdx=0;
function openPalette(){
  if(document.getElementById('cmd-palette'))return;
  const overlay=document.createElement('div');
  overlay.className='palette-overlay';overlay.id='cmd-palette';
  overlay.onclick=e=>{if(e.target===overlay)closePalette();};
  overlay.innerHTML=`<div class="palette-box">
    <div class="palette-input-wrap">
      <span class="palette-icon">🔍</span>
      <input class="palette-input" id="palette-q" placeholder="Search tasks, journal, resources…" oninput="searchPalette()" onkeydown="palKbd(event)" autocomplete="off">
      <span class="palette-kbd">Esc</span>
    </div>
    <div class="palette-results" id="palette-results"></div>
    <div class="palette-shortcuts">
      <span class="palette-hint"><kbd>↑↓</kbd> navigate</span>
      <span class="palette-hint"><kbd>Enter</kbd> select</span>
      <span class="palette-hint"><kbd>Esc</kbd> close</span>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  setTimeout(()=>{const i=document.getElementById('palette-q');if(i)i.focus();},30);
  searchPalette();
}
function closePalette(){const el=document.getElementById('cmd-palette');if(el)el.remove();}
function searchPalette(){
  const q=(document.getElementById('palette-q')?.value||'').toLowerCase().trim();
  const res=[];
  // Tasks
  tasks.forEach(t=>{
    if(!q||t.label.toLowerCase().includes(q)||t.cat.toLowerCase().includes(q)){
      res.push({icon:'✓',text:t.label,sub:t.cat+(done[t.id]?' · done':''),action:()=>{closePalette();switchTab('today');setTimeout(()=>{const el=document.getElementById('row-'+t.id);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});},200);}});
    }
  });
  // Journal (last 30 days)
  if(!q||'journal'.includes(q)||q.length>=3){
    for(let i=0;i<30;i++){
      const k='sp-j-'+dkey(-i);const r=localStorage.getItem(k);if(!r)continue;
      try{const e=JSON.parse(r);
        const text=e.learned||e.confused||e.differently||'';
        if(!q||text.toLowerCase().includes(q)||'journal'.includes(q)){
          const pts=dkey(-i).split('-');const d=new Date(+pts[0],+pts[1]-1,+pts[2]);
          const label=d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
          res.push({icon:'📓',text:'Journal — '+label,sub:(e.learned||'').slice(0,60),action:()=>{closePalette();switchTab('learn');setTimeout(()=>renderLearn('journal'),100);}});
          if(res.length>=12)break;
        }
      }catch(ex){}
    }
  }
  // Tab shortcuts
  const tabs2=[{n:'Today',t:'today',i:'📋'},{n:'Goals',t:'goals',i:'🎯'},{n:'Questions',t:'learn',i:'🧠'},{n:'Portfolio',t:'portfolio',i:'🗂'},{n:'Schedule',t:'plan',i:'📅'},{n:'Stats',t:'hub',i:'📊'},{n:'Settings',t:'hub',i:'⚙️'}];
  tabs2.forEach(tb=>{
    if(!q||tb.n.toLowerCase().includes(q)){
      res.push({icon:tb.i,text:'Go to '+tb.n,sub:'Navigation',action:()=>{closePalette();switchTab(tb.t);if(tb.n==='Questions')setTimeout(()=>renderLearn('questions'),100);if(tb.n==='Settings')setTimeout(()=>renderHub('settings'),100);}});
    }
  });
  paletteIdx=0;
  renderPaletteResults(res.slice(0,10));
}
function renderPaletteResults(items){
  const el=document.getElementById('palette-results');if(!el)return;
  window._paletteItems=items;
  if(!items.length){el.innerHTML=`<div class="palette-empty">No results</div>`;return;}
  el.innerHTML=items.map((it,i)=>`
    <div class="palette-item${i===paletteIdx?' active':''}" onclick="paletteSelect(${i})">
      <span class="palette-item-icon">${it.icon}</span>
      <div style="flex:1;min-width:0">
        <div class="palette-item-text">${escHtml(it.text)}</div>
        ${it.sub?`<div class="palette-item-sub">${escHtml(it.sub)}</div>`:''}
      </div>
    </div>`).join('');
}
function palKbd(e){
  const items=window._paletteItems||[];
  if(e.key==='ArrowDown'){e.preventDefault();paletteIdx=Math.min(paletteIdx+1,items.length-1);renderPaletteResults(items);}
  else if(e.key==='ArrowUp'){e.preventDefault();paletteIdx=Math.max(paletteIdx-1,0);renderPaletteResults(items);}
  else if(e.key==='Enter'){e.preventDefault();paletteSelect(paletteIdx);}
}
function paletteSelect(i){const items=window._paletteItems||[];if(items[i])items[i].action();}
