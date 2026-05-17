/* ═══════════════════════════════════════════════
   REFLECTION JOURNAL
═══════════════════════════════════════════════ */
function getJournalKey(offset=viewOffset){return'sp-j-'+dkey(offset);}
function getJournalEntry(offset=viewOffset){
  try{const r=localStorage.getItem(getJournalKey(offset));return r?JSON.parse(r):{learned:'',confused:'',differently:''};}
  catch(e){return{learned:'',confused:'',differently:''};}
}
function saveJournal(){
  const entry={
    learned:document.getElementById('j-learned')?.value||'',
    confused:document.getElementById('j-confused')?.value||'',
    differently:document.getElementById('j-differently')?.value||'',
  };
  try{localStorage.setItem(getJournalKey(0),JSON.stringify(entry));}catch(e){}
  renderJournalHistory();
  showToast('Journal saved ✓');
}
function buildJournalHTML(){
  const today=getJournalEntry(0);
  return `<p style="font-size:13px;color:var(--muted);margin-bottom:16px;">Three quick prompts to lock in today's learning.</p>
  <div class="journal-prompts">
    <div class="journal-prompt">
      <p class="prompt-label"><span class="prompt-icon">💡</span> What did I learn today?</p>
      <textarea class="prompt-textarea" id="j-learned" placeholder="Key concepts, tools, insights…">${escHtml(today.learned)}</textarea>
    </div>
    <div class="journal-prompt">
      <p class="prompt-label"><span class="prompt-icon">🤔</span> What confused me?</p>
      <textarea class="prompt-textarea" id="j-confused" placeholder="Concepts to revisit or ask about…">${escHtml(today.confused)}</textarea>
    </div>
    <div class="journal-prompt">
      <p class="prompt-label"><span class="prompt-icon">🎯</span> What will I do differently?</p>
      <textarea class="prompt-textarea" id="j-differently" placeholder="Adjustments, experiments, intentions…">${escHtml(today.differently)}</textarea>
    </div>
  </div>
  <div class="journal-save-bar">
    <button class="modal-btn primary" onclick="saveJournal()">Save Today's Reflection</button>
  </div>
  <div class="divider"></div>
  <p class="sec-label">Past Entries</p>
  <input class="journal-search" id="jSearch" placeholder="Search journal…" oninput="renderJournalHistory()">
  <div id="j-history"></div>`;
}
function bindJournalEvents(){renderJournalHistory();}
function renderJournal(){
  const el=document.getElementById('v-learn')||document.getElementById('v-journal');
  if(el)renderLearn('journal');
}
function renderJournalHistory(){
  const q=(document.getElementById('jSearch')?.value||'').toLowerCase();
  let h='';
  for(let i=1;i<=60;i++){
    const k='sp-j-'+dkey(-i);
    try{
      const r=localStorage.getItem(k);if(!r)continue;
      const e=JSON.parse(r);
      if(!e.learned&&!e.confused&&!e.differently)continue;
      const text=(e.learned+e.confused+e.differently).toLowerCase();
      if(q&&!text.includes(q))continue;
      const d=new Date();d.setDate(d.getDate()-i);
      const dateStr=d.toLocaleDateString('en-US',{weekday:'short',month:'long',day:'numeric'});
      h+=`<div class="journal-entry"><p class="journal-entry-date">${dateStr}</p>`;
      if(e.learned){h+=`<p class="journal-q">💡 Learned</p><p class="journal-a">${escHtml(e.learned)}</p>`;}
      if(e.confused){h+=`<p class="journal-q">🤔 Confused</p><p class="journal-a">${escHtml(e.confused)}</p>`;}
      if(e.differently){h+=`<p class="journal-q">🎯 Differently</p><p class="journal-a">${escHtml(e.differently)}</p>`;}
      h+=`</div>`;
    }catch(e2){}
  }
  const el=document.getElementById('j-history');
  if(el)el.innerHTML=h||`<div class="empty-state">No past entries yet — start reflecting today.</div>`;
}