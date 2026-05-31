/* ═══════════════════════════════════════════════
   END-OF-DAY SUMMARY
═══════════════════════════════════════════════ */
function renderEOD(){
  const n=doneCount(),tot=tasks.length,sm=totalStudyMins();
  const pct=tot?Math.round(n/tot*100):0;
  const journal=getJournalEntry(0);
  const d=new Date();
  const dateStr=d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'}).toUpperCase();

  // Motivational message
  const msgs=[
    {min:100,emoji:'🏆',title:'Perfect day.',sub:'Every single task done. That\'s rare. That\'s you.'},
    {min:80, emoji:'🔥',title:'Strong finish.',sub:'Almost everything ticked off. Keep this energy.'},
    {min:60, emoji:'⭐',title:'Solid progress.',sub:'More than half done — momentum is building.'},
    {min:40, emoji:'📈',title:'Keep going.',sub:'Every session compounds. Tomorrow, push a bit more.'},
    {min:0,  emoji:'🌱',title:'Day one is still a day.',sub:'Show up again tomorrow. That\'s all it takes.'},
  ];
  const msg=msgs.find(m=>pct>=m.min)||msgs[msgs.length-1];

  // Completed tasks
  const doneTasks=tasks.filter(t=>done[t.id]);
  const doneHTML=doneTasks.length
    ?doneTasks.map(t=>`
      <div class="eod-task-item">
        <span class="eod-task-check">✓</span>
        <span class="eod-task-name">${escHtml(t.label)}</span>
        ${timeLogs[t.id]?`<span class="eod-task-time">${fmtTime(timeLogs[t.id])}</span>`:''}
      </div>`).join('')
    :`<p style="font-size:12px;color:var(--muted);font-style:italic;padding:6px 0">No tasks completed yet</p>`;

  // SVG ring — fixed: proper track visibility + correct rotation
  const r=38, circ=2*Math.PI*r;
  const dash=circ*(pct/100);
  const gap=circ-dash;
  // Color: green=100%, amber=60%+, blue=below 60%
  const ringColor=pct===100?'var(--green)':pct>=60?'var(--accent)':'var(--blue)';
  // rotate(-90deg) on the fill circle = start from 12 o'clock
  const ringTransform='rotate(-90 50 50)';

  // Questions report (session stats from global questionState)
  const fcDone=(typeof questionState!=='undefined')?(questionState.correct+questionState.wrong):0;
  const fcRight=(typeof questionState!=='undefined')?questionState.correct:0;
  const fcWrong=(typeof questionState!=='undefined')?questionState.wrong:0;
  const fcTotal=(typeof questionState!=='undefined')?questionState.todayCards.length:5;
  const fcPct=fcDone>0?Math.round(fcRight/fcDone*100):0;
  const fcBarW=fcDone>0?Math.round(fcRight/fcTotal*100):0;
  const fcBarWrong=fcDone>0?Math.round(fcWrong/fcTotal*100):0;

  const fcSection=fcDone>0?`
    <div class="eod-section">
      <p class="eod-section-label">🧠 Questions</p>
      <div class="eod-fc-report">
        <div class="eod-fc-meta">
          <span class="eod-fc-stat correct">${fcRight} <span class="eod-fc-icon">✓</span> correct</span>
          <span class="eod-fc-sep">·</span>
          <span class="eod-fc-stat wrong">${fcWrong} <span class="eod-fc-icon">✕</span> wrong</span>
          <span class="eod-fc-sep">·</span>
          <span class="eod-fc-total">${fcDone}/${fcTotal} done</span>
        </div>
        <div class="eod-fc-bar-track">
          <div class="eod-fc-bar-fill correct" style="width:${fcBarW}%"></div>
          <div class="eod-fc-bar-fill wrong" style="width:${fcBarWrong}%"></div>
        </div>
        <p class="eod-fc-accuracy">${fcPct}% accuracy today</p>
      </div>
    </div>`
  :``;

  showModal(`<div class="eod-card">

    <div class="eod-header">
      <p class="eod-date">${dateStr}</p>
      <p class="eod-title">Today's wrap-up</p>
    </div>

    <div class="eod-hero">
      <div class="eod-ring-wrap">
        <svg class="eod-ring" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Track -->
          <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--surface3)" stroke-width="8"/>
          <!-- Progress fill — hidden at 0% to avoid dot artefact -->
          ${pct>0?`<circle cx="50" cy="50" r="${r}" fill="none" stroke="${ringColor}" stroke-width="8"
            stroke-dasharray="${dash} ${gap}"
            transform="${ringTransform}"
            stroke-linecap="round"/>`:''}
        </svg>
        <div class="eod-ring-inner">
          <span class="eod-ring-pct">${pct}<span style="font-size:13px;font-family:var(--font);font-weight:400">%</span></span>
          <span class="eod-ring-sub">done</span>
        </div>
      </div>
      <div class="eod-msg">
        <p class="eod-msg-title">${msg.emoji} ${msg.title}</p>
        <p class="eod-msg-sub">${msg.sub}</p>
      </div>
    </div>

    <div class="eod-stats-row">
      <div class="eod-stat2">
        <div class="eod-stat2-num">${n}<span>/${tot}</span></div>
        <div class="eod-stat2-label">Tasks done</div>
      </div>
      <div class="eod-stat2-div"></div>
      <div class="eod-stat2">
        <div class="eod-stat2-num">${fmtTime(sm)}</div>
        <div class="eod-stat2-label">Study time</div>
      </div>
      <div class="eod-stat2-div"></div>
      <div class="eod-stat2">
        <div class="eod-stat2-num">${streak}<span style="font-size:13px"> 🔥</span></div>
        <div class="eod-stat2-label">Day streak</div>
      </div>
      <div class="eod-stat2-div"></div>
      <div class="eod-stat2">
        <div class="eod-stat2-num">${xpLevel}<span style="font-size:13px;color:var(--accent)"> ⬆</span></div>
        <div class="eod-stat2-label">Level · ${xpTotal} XP</div>
      </div>
    </div>

    ${doneTasks.length?`<div class="eod-section">
      <p class="eod-section-label">Completed today</p>
      <div class="eod-tasks-list">${doneHTML}</div>
    </div>`:''}

    ${fcSection}

    ${(journal.learned||journal.confused||journal.differently)?`<div class="eod-section">
      <p class="eod-section-label">Reflection</p>
      ${journal.learned?`<div class="eod-ref-block">
        <span class="eod-ref-icon">💡</span>
        <div><p class="eod-ref-q">What I learned</p><p class="eod-ref-a">${escHtml(journal.learned)}</p></div>
      </div>`:''}
      ${journal.confused?`<div class="eod-ref-block">
        <span class="eod-ref-icon">🤔</span>
        <div><p class="eod-ref-q">What confused me</p><p class="eod-ref-a">${escHtml(journal.confused)}</p></div>
      </div>`:''}
      ${journal.differently?`<div class="eod-ref-block">
        <span class="eod-ref-icon">🎯</span>
        <div><p class="eod-ref-q">I'll do differently</p><p class="eod-ref-a">${escHtml(journal.differently)}</p></div>
      </div>`:''}
    </div>`:`<div class="eod-section">
      <div class="eod-no-journal" onclick="closeModal();switchTab('learn')">
        <span>📓</span>
        <p>Add today's reflection →</p>
      </div>
    </div>`}

    <div class="eod-actions">
      <button class="modal-btn" onclick="closeModal()">Close</button>
      <button class="modal-btn" onclick="downloadDayCard()">⬇ Save card</button>
      <button class="modal-btn primary" onclick="closeModal();switchTab('learn')">Write Reflection</button>
    </div>
  </div>`);}
