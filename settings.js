/* ═══════════════════════════════════════════════
   SETTINGS
═══════════════════════════════════════════════ */
function buildSettingsHTML(){
  const s=settings;
  const swatches=ACCENT_COLORS.map(c=>`<div class="swatch${(s.accentColor||'#d4960a')===c?' active':''}" style="background:${c}" onclick="setAccent('${c}')"></div>`).join('');
  const profiles=['soft','chime','lo-fi','minimal','retro'];
  const pOpts=profiles.map(p=>`<option value="${p}"${(s.soundProfile||'soft')===p?' selected':''}>${p.charAt(0).toUpperCase()+p.slice(1)}</option>`).join('');
  return `
  <div class="settings-section">
    <h2>Profile</h2>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Your name</p><p class="setting-desc">Shown as your study profile</p></div>
      <div class="setting-ctrl" style="display:flex;gap:6px;">
        <input class="profile-inp" id="profileInp" value="${escHtml(s.profile||'')}" placeholder="UI/UX Student">
        <button class="save-btn" onclick="saveProfile()">Save</button>
      </div>
    </div>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Planner name</p><p class="setting-desc">The heading title</p></div>
      <div class="setting-ctrl" style="display:flex;gap:6px;">
        <input class="profile-inp" id="plannerNameInp" value="${escHtml(s.plannerName||'Study Planner')}">
        <button class="save-btn" onclick="savePlannerName()">Save</button>
      </div>
    </div>
  </div>
  <div class="settings-section">
    <h2>Job Goal</h2>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Target job date</p><p class="setting-desc">Shows countdown in header</p></div>
      <div class="setting-ctrl">
        <input type="date" class="date-picker-inp" id="jobGoalInp" value="${s.jobGoalDate||''}" onchange="saveJobGoal()">
      </div>
    </div>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Plan start date</p><p class="setting-desc">Used for 3-month progress ring</p></div>
      <div class="setting-ctrl">
        <input type="date" class="date-picker-inp" id="planStartInp" value="${s.planStartDate||''}" onchange="savePlanStart()">
      </div>
    </div>
  </div>
  <div class="settings-section">
    <h2>Appearance</h2>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Accent colour</p><p class="setting-desc">Theme colour used across the app</p></div>
      <div class="setting-ctrl"><div class="accent-swatches">${swatches}</div></div>
    </div>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Font</p><p class="setting-desc">Body typeface across the planner</p></div>
      <div class="setting-ctrl">
        <div class="font-select-wrap" id="fontSelectWrap">
          <button class="font-select-btn" id="fontSelectBtn" onclick="toggleFontDropdown(event)">
            <span id="fontSelectLabel" style="font-family:${(FONT_OPTIONS.find(f=>f.id===(s.fontId||'dm-sans'))||FONT_OPTIONS[0]).family}">${(FONT_OPTIONS.find(f=>f.id===(s.fontId||'dm-sans'))||FONT_OPTIONS[0]).label}</span>
            <svg class="font-select-arrow" id="fontSelectArrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="font-dropdown" id="fontDropdown" style="display:none">
            ${FONT_OPTIONS.map(f=>`
              <button class="font-dropdown-item${(s.fontId||'dm-sans')===f.id?' active':''}"
                onclick="setFont('${f.id}')"
                style="font-family:${f.family}">
                <span class="font-dropdown-name">${f.label}</span>
                <span class="font-dropdown-preview">Aa</span>
                ${(s.fontId||'dm-sans')===f.id?'<svg class="font-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':''}
              </button>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="settings-section">
    <h2>Sound</h2>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Enable sounds</p><p class="setting-desc">Task complete, timer, breaks</p></div>
      <div class="setting-ctrl">
        <label class="toggle">
          <input type="checkbox" id="sndToggle" ${s.soundEnabled?'checked':''} onchange="toggleSound()">
          <div class="toggle-track"></div>
          <div class="toggle-thumb"></div>
        </label>
      </div>
    </div>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Sound profile</p><p class="setting-desc">Style of notification sounds</p></div>
      <div class="setting-ctrl" style="display:flex;gap:6px;">
        <select class="snd-select" id="sndProfile" onchange="changeSoundProfile(this.value)">${pOpts}</select>
        <button class="snd-test" onclick="testSound()">▶ Test</button>
      </div>
    </div>
  </div>
  <div class="settings-section">
    <h2>Data</h2>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Export data</p><p class="setting-desc">Download all history as Excel (.xlsx)</p></div>
      <div class="setting-ctrl" style="display:flex;gap:6px;">
        <button class="modal-btn" onclick="exportToExcel()">Export Excel</button>
        <button class="modal-btn" onclick="exportJSON()">Export JSON</button>
      </div>
    </div>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Import data</p><p class="setting-desc">Restore from a previous JSON export</p></div>
      <div class="setting-ctrl">
        <label class="import-btn" style="cursor:pointer;">
          Import JSON
          <input type="file" accept=".json" style="display:none" onchange="importJSON(event)">
        </label>
      </div>
    </div>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Reset tasks</p><p class="setting-desc">Restore default task list</p></div>
      <div class="setting-ctrl"><button class="danger-btn" onclick="resetTasks()">Reset</button></div>
    </div>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Clear all data</p><p class="setting-desc">Wipes everything including history</p></div>
      <div class="setting-ctrl"><button class="danger-btn" onclick="clearAll()">Clear all</button></div>
    </div>
    <div class="setting-row">
      <div class="setting-info"><p class="setting-label">Account</p><p class="setting-desc">${window._sbUserEmail||'Logged in'}</p></div>
      <div class="setting-ctrl"><button class="save-btn" onclick="typeof sbSignOut==='function'&&sbSignOut()" style="color:#d4960a;border-color:rgba(212,150,10,0.3)">Sign Out</button></div>
    </div>
  </div>`;
}
function bindSettingsEvents(){
  // re-attach any dynamic events if needed
}
function renderSettings(){
  renderHub('settings');
}
function saveProfile(){const v=document.getElementById('profileInp')?.value.trim();if(v){settings.profile=v;saveSettings();}}
function savePlannerName(){
  const v=document.getElementById('plannerNameInp')?.value.trim()||'Study Planner';
  settings.plannerName=v;saveSettings();
  const ti=document.getElementById('appTitle');if(ti)ti.textContent=v;
}
function toggleFontDropdown(e){
  e.stopPropagation();
  const dd=document.getElementById('fontDropdown');
  const arrow=document.getElementById('fontSelectArrow');
  const open=dd.style.display==='none';
  dd.style.display=open?'block':'none';
  arrow.style.transform=open?'rotate(180deg)':'rotate(0deg)';
  if(open){
    // close on outside click
    const close=()=>{dd.style.display='none';arrow.style.transform='rotate(0deg)';document.removeEventListener('click',close);};
    setTimeout(()=>document.addEventListener('click',close),0);
  }
}
function setFont(id){
  settings.fontId=id;applyFont(id);saveSettings();
  const f=FONT_OPTIONS.find(x=>x.id===id)||FONT_OPTIONS[0];
  // Update button label
  const lbl=document.getElementById('fontSelectLabel');
  if(lbl){lbl.textContent=f.label;lbl.style.fontFamily=f.family;}
  // Update dropdown items
  document.querySelectorAll('.font-dropdown-item').forEach(b=>{
    const isActive=b.getAttribute('onclick')===`setFont('${id}')`;
    b.classList.toggle('active',isActive);
    // remove old checkmark, add new
    b.querySelector('.font-check')?.remove();
    if(isActive){
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('class','font-check');svg.setAttribute('viewBox','0 0 24 24');
      svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');
      svg.setAttribute('stroke-width','2.5');svg.setAttribute('stroke-linecap','round');
      svg.setAttribute('stroke-linejoin','round');
      svg.innerHTML='<polyline points="20 6 9 17 4 12"/>';
      b.appendChild(svg);
    }
  });
  // Close dropdown
  const dd=document.getElementById('fontDropdown');
  const arrow=document.getElementById('fontSelectArrow');
  if(dd)dd.style.display='none';
  if(arrow)arrow.style.transform='rotate(0deg)';
}
function setAccent(c){
  settings.accentColor=c;applyAccent(c);saveSettings();
  document.querySelectorAll('.swatch').forEach(s=>{s.classList.toggle('active',s.style.background===c||s.style.backgroundColor===c);});
}
function toggleSound(){settings.soundEnabled=document.getElementById('sndToggle')?.checked;saveSettings();}
function changeSoundProfile(v){settings.soundProfile=v;saveSettings();}
function saveJobGoal(){settings.jobGoalDate=document.getElementById('jobGoalInp')?.value||'';saveSettings();updateHeader();}
function savePlanStart(){settings.planStartDate=document.getElementById('planStartInp')?.value||'';saveSettings();}
function resetTasks(){if(!confirm('Reset tasks to defaults?'))return;tasks=JSON.parse(JSON.stringify(DEFAULT_TASKS));saveGlobal();renderToday();}
function clearAll(){if(!confirm('Delete ALL data? Cannot be undone.'))return;localStorage.clear();location.reload();}