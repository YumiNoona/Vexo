
/* ═══════════════════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════════════════ */
function initKeyboardShortcuts(){
  document.addEventListener('keydown',e=>{
    const tag=document.activeElement?.tagName;
    const inInput=tag==='INPUT'||tag==='TEXTAREA'||document.activeElement?.contentEditable==='true';
    // Always-on shortcuts
    if(e.key==='Escape'){
      if(document.getElementById('cmd-palette'))closePalette();
      else closeModal();
      hideCtxMenu();
      return;
    }
    if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();openPalette();return;}
    if((e.ctrlKey||e.metaKey)&&e.key==='z'){e.preventDefault();doUndo();return;}
    // Skip if typing
    if(inInput)return;
    // Tab switching — number keys
    const tabMap={'1':'today','2':'goals','3':'learn','4':'portfolio','5':'plan','6':'hub'};
    if(tabMap[e.key]){switchTab(tabMap[e.key]);return;}
    // Letter shortcuts
    switch(e.key.toLowerCase()){
      case 't':switchTab('today');break;
      case 'g':switchTab('goals');break;
      case 'l':switchTab('learn');break;
      case 'p':switchTab('portfolio');break;
      case 'r':switchTab('plan');break;
      case 'h':switchTab('hub');break;
      case 'n':
        if(activeTab==='today'){
          const firstCat=cats()[0];if(firstCat)addTaskInCat(firstCat);
        }break;
      case '?':showKbHelp();break;
      // Question shortcuts
      case ' ':
        if(activeTab==='learn'&&learnSub==='flashcards'){
          e.preventDefault();
          const flipBtn=document.getElementById('fc-flip');if(flipBtn)flipBtn.click();
        }break;
      case 'arrowright':
        if(activeTab==='learn'&&learnSub==='flashcards'){
          const nextBtn=document.getElementById('fc-next');if(nextBtn)nextBtn.click();
        }break;
      case 'arrowleft':
        if(activeTab==='learn'&&learnSub==='flashcards'){
          const prevBtn=document.getElementById('fc-prev');if(prevBtn)prevBtn.click();
        }break;
    }
  });
}
function showKbHelp(){
  showModal(`<p class="modal-title">Keyboard shortcuts</p>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:8px 16px;font-size:13px;margin-bottom:16px;">
      <kbd style="font-family:var(--mono);background:var(--surface2);padding:2px 8px;border-radius:4px;border:1px solid var(--border2)">1–6</kbd><span style="color:var(--muted)">Switch tabs</span>
      <kbd style="font-family:var(--mono);background:var(--surface2);padding:2px 8px;border-radius:4px;border:1px solid var(--border2)">N</kbd><span style="color:var(--muted)">New task (Today tab)</span>
      <kbd style="font-family:var(--mono);background:var(--surface2);padding:2px 8px;border-radius:4px;border:1px solid var(--border2)">Space</kbd><span style="color:var(--muted)">Reveal answer</span>
      <kbd style="font-family:var(--mono);background:var(--surface2);padding:2px 8px;border-radius:4px;border:1px solid var(--border2)">← →</kbd><span style="color:var(--muted)">Prev / next question</span>
      <kbd style="font-family:var(--mono);background:var(--surface2);padding:2px 8px;border-radius:4px;border:1px solid var(--border2)">Ctrl+K</kbd><span style="color:var(--muted)">Open search palette</span>
      <kbd style="font-family:var(--mono);background:var(--surface2);padding:2px 8px;border-radius:4px;border:1px solid var(--border2)">Ctrl+Z</kbd><span style="color:var(--muted)">Undo last delete</span>
      <kbd style="font-family:var(--mono);background:var(--surface2);padding:2px 8px;border-radius:4px;border:1px solid var(--border2)">Esc</kbd><span style="color:var(--muted)">Close modal / palette</span>
      <kbd style="font-family:var(--mono);background:var(--surface2);padding:2px 8px;border-radius:4px;border:1px solid var(--border2)">?</kbd><span style="color:var(--muted)">Show this help</span>
    </div>
    <div class="modal-btns"><button class="modal-btn primary" onclick="closeModal()">Got it</button></div>`);
}