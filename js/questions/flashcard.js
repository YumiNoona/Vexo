/* ═══════════════════════════════════════════════
   QUESTIONS — Interactive MCQ Questions from Class PDFs
   buildFlashcardsHTML() returns HTML string
   (called by renderLearn in main.js)
   ═══════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════ */
let flashcardState = {
  mode: null, // "lesson", "normal", "interview", null (selector screen)
  startLessonIndex: 0,
  endLessonIndex: LESSON_MAP.length - 1,
  todayDate: "",
  todayCards: [],
  currentIndex: 0,
  revealed: false,
  correct: 0,
  wrong: 0,
  wrongCards: [],
  selectedAnswerIndex: null,
  history: []
};

function fcStartMode(mode) {
  const sLesson = document.getElementById("fc-start-lesson");
  const eLesson = document.getElementById("fc-end-lesson");
  let sIndex = 0, eIndex = LESSON_MAP.length - 1;
  
  if (mode === 'lesson' && sLesson && eLesson) {
    sIndex = parseInt(sLesson.value);
    eIndex = parseInt(eLesson.value);
    if (sIndex > eIndex) {
      const temp = sIndex; sIndex = eIndex; eIndex = temp;
    }
  }

  flashcardState.mode = mode;
  flashcardState.startLessonIndex = sIndex;
  flashcardState.endLessonIndex = eIndex;
  
  fcStartNewSet();
}

// Session-level tracking to prevent repeats within a single browser session
let sessionSeenIds = new Set();

function setupDailyCards() {
  const today = new Date().toDateString();
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("sp-flashcards-mcq-v1")); } catch(e) {}

  if (saved && saved.todayDate === today && saved.todayCards && saved.todayCards.length > 0) {
    if (!saved.wrongCards) saved.wrongCards = [];
    flashcardState = saved;
    // Track these in the session set too
    saved.todayCards.forEach(c => sessionSeenIds.add(c.id));
    return;
  }

  // Merge history from both live state and localStorage (use whichever is longer/more complete)
  const savedHistory = (saved && saved.history) ? saved.history : [];
  const liveHistory = flashcardState.history || [];
  // Combine both and deduplicate
  const mergedHistory = [...new Set([...savedHistory, ...liveHistory])];
  
  let pool = [];
  if (flashcardState.mode === 'lesson') {
    for (let i = flashcardState.startLessonIndex; i <= flashcardState.endLessonIndex; i++) {
      pool = pool.concat(LESSON_MAP[i].questions);
    }
    if (pool.length === 0) pool = UX_QUESTIONS;
  } else if (flashcardState.mode === 'interview') {
    pool = [...INTERVIEW_QUESTIONS];
  } else {
    pool = [...UX_QUESTIONS];
  }

  // Filter out questions seen in history AND in this session
  let available = pool.filter(q => !mergedHistory.includes(q.id) && !sessionSeenIds.has(q.id));
  if (available.length < 5) {
    // Pool exhausted — reset session tracking but keep history slim
    sessionSeenIds.clear();
    available = pool.filter(q => !sessionSeenIds.has(q.id));
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Pad shorter wrong options so all 4 options are similar length
  const fillers = [
    " in standard practice", " within modern design", " across all platforms",
    " for optimal results", " in typical workflows", " during active use",
    " in common scenarios", " for standard projects", " in most situations",
    " based on guidelines", " per design standards", " within the system",
    " as commonly applied", " in practical usage", " for general purposes",
    " according to experts", " in real-world cases", " for best outcomes"
  ];

  const balanceOptionLengths = (options, correctIdx) => {
    const correctLen = options[correctIdx].length;
    return options.map((opt, idx) => {
      if (idx === correctIdx) return opt;
      let padded = opt;
      let fillerIdx = Math.floor(Math.random() * fillers.length);
      let attempts = 0;
      while (padded.length < correctLen - 10 && attempts < 3) {
        const filler = fillers[(fillerIdx + attempts) % fillers.length];
        // Don't pad if it would make the wrong option longer than the correct one
        if (padded.length + filler.length > correctLen + 10) break;
        padded = padded.replace(/\.?$/, '') + filler;
        attempts++;
      }
      return padded;
    });
  };

  const shuffled = shuffleArray([...available]);
  const todayCards = shuffled.slice(0, 5).map(q => {
    // First balance lengths, then shuffle positions
    const balanced = balanceOptionLengths([...q.options], q.answerIndex);
    const opts = balanced.map((text, idx) => ({ text, isCorrect: idx === q.answerIndex }));
    shuffleArray(opts);
    return {
      ...q,
      options: opts.map(o => o.text),
      answerIndex: opts.findIndex(o => o.isCorrect)
    };
  });
  
  // Track in session AND in persistent history
  todayCards.forEach(c => sessionSeenIds.add(c.id));
  const newHistory = [...mergedHistory, ...todayCards.map(c => c.id)].slice(-300);

  flashcardState = {
    ...flashcardState,
    todayDate: today,
    todayCards,
    currentIndex: 0,
    revealed: false,
    correct: 0,
    wrong: 0,
    wrongCards: [],
    selectedAnswerIndex: null,
    history: newHistory
  };
  saveFlashcards();
}

function fcHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; }
  return h;
}

function saveFlashcards() {
  try { localStorage.setItem("sp-flashcards-mcq-v1", JSON.stringify(flashcardState)); } catch(e) {}
}

/* ═══════════════════════════════════════════════
   BADGE HELPERS
   ═══════════════════════════════════════════════ */
const FC_CAT_COLORS = {
  "UX Laws": "#d4960a",
  "Gestalt": "#4a9eff",
  "Heuristics": "#2ecf8c",
  "Typography": "#e55bdb",
  "Color Theory": "#ff7857",
  "Accessibility": "#64b4ff",
  "UX Research": "#a78bfa",
  "Interaction Design": "#fdb365",
  "Design Systems": "#34d399",
  "Information Architecture": "#f87171",
  "Psychology": "#c4b5fd",
  "Prototyping": "#67e8f9",
  "Visual Design": "#f9a8d4",
  "Ethics & Patterns": "#fca5a5",
  "Emotional Design": "#ff75b5"
};
const FC_DIFF_COLORS = { "Easy": "#2ecf8c", "Medium": "#d4960a", "Hard": "#ff5050" };

function fcBadge(label, color) {
  return `<span style="font-size:10px;padding:3px 10px;border-radius:99px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;background:${color}22;color:${color}">${escHtml(label)}</span>`;
}

/* ═══════════════════════════════════════════════
   SHARED CSS
   ═══════════════════════════════════════════════ */
const FC_CSS = `<style id="fc-styles">
  .fc-wrap{max-width:1000px;margin:0 auto}
  .fc-prog-bar{height:3px;background:var(--border);border-radius:99px;margin-bottom:18px;overflow:hidden;display:none}
  .fc-prog-fill{height:100%;background:var(--accent);border-radius:99px;transition:width .4s ease}
  .fc-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
  .fc-count{font-size:12px;color:var(--muted);font-family:'DM Mono',monospace;letter-spacing:.08em}
  .fc-score-row{display:flex;gap:7px}
  .fc-pill{font-size:11px;padding:3px 11px;border-radius:99px;font-weight:700}
  .fc-pill.c{background:rgba(46,207,140,.15);color:#2ecf8c}
  .fc-pill.w{background:rgba(255,80,80,.15);color:#ff5050}
  
  .fc-scene{perspective:1200px;height:510px;margin-bottom:18px}
  .fc-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,.2,.2,1);border-radius:16px}
  .fc-inner.flipped{transform:rotateY(180deg)}
  
  .fc-face{position:absolute;inset:0;border-radius:16px;backface-visibility:hidden;-webkit-backface-visibility:hidden;padding:22px;display:flex;flex-direction:column;border:1px solid var(--border);background:var(--surface);overflow-y:auto}
  .fc-face.back{transform:rotateY(180deg)}
  
  .fc-badges{display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap}
  .fc-question{font-size:16px;font-weight:600;line-height:1.45;color:var(--text);margin-bottom:16px;text-align:left}
  
  .fc-mcq-options { display: flex; flex-direction: column; gap: 8px; width: 100%; }
  .fc-option-btn {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 14px; border: 1.5px solid var(--border);
    background: var(--surface2); color: var(--text);
    border-radius: 10px; font-family: inherit; font-size: 13px;
    text-align: left; cursor: pointer; transition: all 0.16s ease;
    line-height: 1.4;
  }
  .fc-option-btn:hover:not(:disabled) {
    border-color: var(--accent); background: rgba(212,150,10,0.08); transform: translateY(-1px);
  }
  .fc-option-letter {
    display: flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; border-radius: 6px;
    background: var(--border); color: var(--text);
    font-weight: 700; font-size: 11px; flex-shrink: 0;
  }
  .fc-option-btn:hover .fc-option-letter {
    background: var(--accent); color: #0c0c0e;
  }
  
  /* MCQ states */
  .fc-mcq-options.disabled { pointer-events: none; }
  .fc-option-btn.correct {
    border-color: #2ecf8c !important; background: rgba(46,207,140,0.08) !important; color: #2ecf8c !important;
  }
  .fc-option-btn.correct .fc-option-letter {
    background: #2ecf8c !important; color: #0c0c0e !important;
  }
  .fc-option-btn.wrong {
    border-color: #ff5050 !important; background: rgba(255,80,80,0.08) !important; color: #ff5050 !important;
  }
  .fc-option-btn.wrong .fc-option-letter {
    background: #ff5050 !important; color: #fff !important;
  }

  .fc-feedback-header {
    display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 700; margin-bottom: 12px;
  }
  .fc-feedback-header.c { color: #2ecf8c; }
  .fc-feedback-header.w { color: #ff5050; }

  .fc-explanation{font-size:14.5px;color:var(--text);line-height:1.55;margin-bottom:12px;flex:1}
  .fc-explanation b{color:var(--accent)}
  .fc-example{font-size:14px;color:var(--muted);padding-top:10px;border-top:1px solid var(--border);line-height:1.5}
  .fc-example b{color:var(--accent)}
  
  .fc-actions{display:flex;gap:10px;justify-content:center;margin-bottom:14px;margin-top:10px}
  .fc-btn{flex:1;max-width:260px;padding:12px 0;border-radius:12px;border:1.5px solid var(--border);font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .16s ease}
  .fc-btn:hover{transform:translateY(-2px)}
  .fc-btn.reveal{background:var(--accent);color:#0c0c0e;border-color:var(--accent);max-width:100%;width:100%}
  .fc-btn.reveal:hover{opacity:.88}
  .fc-footer{text-align:center;font-size:11px;color:var(--muted);margin-top:4px}
  .fc-footer span{color:var(--accent);font-weight:600}
  
  /* Summary */
  .fc-sum{max-width:800px;margin:0 auto}
  .fc-sum-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px 24px;text-align:center;margin-bottom:14px}
  .fc-sum-emoji{font-size:44px;margin-bottom:10px}
  .fc-sum-title{font-size:20px;font-weight:700;color:var(--text);margin-bottom:6px}
  .fc-sum-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}
  .fc-sum-stat{background:var(--bg,#0c0c0e);border-radius:12px;padding:14px 8px}
  .fc-sum-num{font-size:26px;font-weight:700;margin-bottom:3px}
  .fc-sum-lbl{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
  .fc-sum-stat.c .fc-sum-num{color:#2ecf8c}
  .fc-sum-stat.w .fc-sum-num{color:#ff5050}
  .fc-sum-stat.a .fc-sum-num{color:var(--accent)}
  .fc-sum-note{font-size:12px;color:var(--muted);margin-top:12px}
  
  /* Wrong answer review */
  .fc-review-section{margin-top:16px}
  .fc-review-title{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-weight:600;margin-bottom:10px;display:flex;align-items:center;gap:6px}
  .fc-review-card{background:var(--surface);border:1px solid rgba(255,80,80,.3);border-radius:14px;padding:16px 18px;margin-bottom:10px;border-left:3px solid #ff5050}
  .fc-review-q{font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px;line-height:1.4}
  .fc-review-a-label{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#ff5050;font-weight:700;margin-bottom:4px}
  .fc-review-a{font-size:13px;color:var(--text);line-height:1.55;margin-bottom:8px}
  .fc-review-ex{font-size:11px;color:var(--muted);line-height:1.5;padding-top:8px;border-top:1px solid var(--border)}
  .fc-review-ex b{color:var(--accent)}
  .fc-cats{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px;margin-top:14px}
  .fc-cats-title{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-weight:600;margin-bottom:12px}
  .fc-cat-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;font-size:13px;color:var(--text)}
  .fc-cat-dot{width:8px;height:8px;border-radius:50%;margin-right:8px;display:inline-block}
</style>`;

/* ═══════════════════════════════════════════════
   MODE SELECTOR HTML
   ═══════════════════════════════════════════════ */
function buildModeSelectorHTML() {
  let lessonOptions = '';
  LESSON_MAP.forEach((lesson, i) => {
    lessonOptions += `<option value="${i}">Lesson ${lesson.id}: ${escHtml(lesson.title)}</option>`;
  });

  return `
  <div class="fc-wrap">
    <div style="text-align:center;margin-bottom:24px;">
      <h2 style="font-size:24px;font-weight:700;margin-bottom:8px;">Choose Practice Mode</h2>
      <p style="color:var(--muted);font-size:14px;">Select how you want to practice your UX/UI knowledge today.</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-bottom:24px;">
      
      <!-- Lesson Focus -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="font-size:32px;">📚</div>
        <div style="font-size:18px;font-weight:700;">Lesson Focus</div>
        <p style="font-size:13px;color:var(--muted);flex:1;">Target specific PDF lessons to test your knowledge on a particular topic.</p>
        
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;">
          <select id="fc-start-lesson" style="width:100%;padding:8px;border-radius:8px;background:var(--bg);border:1px solid var(--border);color:var(--text);font-size:13px;">
            ${lessonOptions}
          </select>
          <div style="text-align:center;color:var(--muted);font-size:12px;">to</div>
          <select id="fc-end-lesson" style="width:100%;padding:8px;border-radius:8px;background:var(--bg);border:1px solid var(--border);color:var(--text);font-size:13px;">
            ${lessonOptions}
          </select>
        </div>
        
        <button class="fc-btn reveal" style="margin-top:auto; align-self:center; padding:12px 32px; width:auto; flex:none;" onclick="fcStartMode('lesson')">Start Lesson Practice</button>
      </div>

      <!-- Normal -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="font-size:32px;">🔀</div>
        <div style="font-size:18px;font-weight:700;">Normal</div>
        <p style="font-size:13px;color:var(--muted);flex:1;">A random shuffle of all 300+ questions from across the entire curriculum.</p>
        <button class="fc-btn reveal" style="margin-top:auto; align-self:center; padding:12px 32px; width:auto; flex:none;" onclick="fcStartMode('normal')">Start Normal Practice</button>
      </div>

      <!-- Interview Prep -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;right:0;background:var(--accent);color:#0c0c0e;font-size:10px;font-weight:700;padding:4px 12px;border-bottom-left-radius:12px;">RECOMMENDED</div>
        <div style="font-size:32px;">💼</div>
        <div style="font-size:18px;font-weight:700;">Interview Prep</div>
        <p style="font-size:13px;color:var(--muted);flex:1;">Focus on general UI/UX theory, principles, and visual diagram identification to prep for job interviews.</p>
        <button class="fc-btn reveal" style="margin-top:auto; align-self:center; padding:12px 32px; width:auto; flex:none;" onclick="fcStartMode('interview')">Start Interview Prep</button>
      </div>

    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════
   buildFlashcardsHTML
   ═══════════════════════════════════════════════ */
function buildFlashcardsHTML() {
  if (flashcardState.mode === null) {
    return FC_CSS + buildModeSelectorHTML();
  }
  
  setupDailyCards();
  if (flashcardState.currentIndex >= flashcardState.todayCards.length) {
    return FC_CSS + buildFCSummaryHTML();
  }
  return FC_CSS + buildFCCardHTML();
}

/* ═══════════════════════════════════════════════
   CARD HTML
   ═══════════════════════════════════════════════ */
function buildFCCardHTML() {
  const s = flashcardState;
  const card = s.todayCards[s.currentIndex];
  const total = s.todayCards.length;
  const pct = Math.round((s.currentIndex / total) * 100);
  const catColor  = FC_CAT_COLORS[card.category]  || "#888";
  const diffColor = FC_DIFF_COLORS[card.difficulty] || "#888";

  let visualHTML = '';
  if (card.visual) {
    visualHTML = `<div style="display:flex;justify-content:center;margin:16px 0;padding:20px;background:var(--bg);border-radius:12px;border:1px solid var(--border);color:var(--text);">${card.visual}</div>`;
  }

  // Front Options HTML (Interactive selection)
  let frontOptionsHTML = '<div class="fc-mcq-options">';
  card.options.forEach((opt, idx) => {
    frontOptionsHTML += `
      <button class="fc-option-btn" onclick="fcSelectOption(${idx})">
        <span class="fc-option-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="fc-option-text">${escHtml(opt)}</span>
      </button>`;
  });
  frontOptionsHTML += '</div>';

  // Back Options HTML (Disabled + Color Coded)
  let backOptionsHTML = '<div class="fc-mcq-options disabled" style="margin-bottom: 16px;">';
  card.options.forEach((opt, idx) => {
    let optClass = '';
    if (idx === card.answerIndex) {
      optClass = 'correct';
    } else if (idx === s.selectedAnswerIndex) {
      optClass = 'wrong';
    }
    backOptionsHTML += `
      <button class="fc-option-btn ${optClass}" disabled>
        <span class="fc-option-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="fc-option-text">${escHtml(opt)}</span>
      </button>`;
  });
  backOptionsHTML += '</div>';

  const isCorrect = (s.selectedAnswerIndex === card.answerIndex);

  return `<div class="fc-wrap">
    <div class="fc-meta">
      <span class="fc-count">QUESTION ${s.currentIndex + 1} / ${total}</span>
      <div class="fc-score-row">
        <span class="fc-pill c">&#10003; ${s.correct}</span>
        <span class="fc-pill w">&#10007; ${s.wrong}</span>
      </div>
    </div>

    <div class="fc-scene">
      <div class="fc-inner${s.revealed ? ' flipped' : ''}">

        <!-- FRONT: Question and Options -->
        <div class="fc-face front">
          <div class="fc-badges">
            ${fcBadge(card.category, catColor)}
            ${fcBadge(card.difficulty, diffColor)}
          </div>
          <div class="fc-question">${escHtml(card.question)}</div>
          ${visualHTML}
          ${frontOptionsHTML}
        </div>

        <!-- BACK: Question, Choices, Explanation & Example -->
        <div class="fc-face back">
          <div class="fc-badges">
            ${fcBadge(card.category, catColor)}
            ${fcBadge(card.difficulty, diffColor)}
          </div>
          <div class="fc-question">${escHtml(card.question)}</div>
          ${visualHTML}
          ${backOptionsHTML}
          <div class="fc-explanation"><b>Explanation:</b> ${escHtml(card.explanation)}</div>
          <div class="fc-example"><b>Example:</b> ${escHtml(card.example)}</div>
        </div>

      </div>
    </div>

    ${s.revealed
      ? `<div class="fc-actions">
           <button class="fc-btn reveal" onclick="fcNextCard()">Next Question &rarr;</button>
         </div>`
      : `<div class="fc-actions" style="visibility:hidden;pointer-events:none">
           <button class="fc-btn reveal">Next Question &rarr;</button>
         </div>`
    }

    <div class="fc-footer">${UX_QUESTIONS.length} questions in deck &middot; <span>5</span> new each day</div>
  </div>`;
}

/* ═══════════════════════════════════════════════
   SUMMARY HTML
   ═══════════════════════════════════════════════ */
function buildFCSummaryHTML() {
  const { correct, wrong, wrongCards, todayCards } = flashcardState;
  const total = correct + wrong;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const grade =
    accuracy >= 90 ? { label: "Excellent!",    emoji: "🏆", color: "#2ecf8c" } :
    accuracy >= 70 ? { label: "Good work",     emoji: "⭐", color: "#d4960a" } :
    accuracy >= 50 ? { label: "Keep going",    emoji: "📚", color: "#4a9eff" } :
                     { label: "Review needed", emoji: "🔁", color: "#ff5050" };

  // Wrong answer review cards
  let reviewHTML = '';
  if (wrongCards && wrongCards.length > 0) {
    const reviewItems = wrongCards.map(card => {
      const catColor = FC_CAT_COLORS[card.category] || "#888";
      const diffColor = FC_DIFF_COLORS[card.difficulty] || "#888";
      const correctOptionText = card.options[card.answerIndex];
      return `<div class="fc-review-card">
        <div class="fc-badges" style="margin-bottom:8px">${fcBadge(card.category, catColor)}${fcBadge(card.difficulty, diffColor)}</div>
        <div class="fc-review-q">${escHtml(card.question)}</div>
        <div class="fc-review-a-label">&#10003; Correct Choice</div>
        <div class="fc-review-a">${escHtml(correctOptionText)}</div>
        <div class="fc-review-ex"><b>Explanation:</b> ${escHtml(card.explanation)}</div>
      </div>`;
    }).join('');

    reviewHTML = `<div class="fc-review-section">
      <div class="fc-review-title">
        <span style="color:#ff5050">&#10007;</span> Review — ${wrongCards.length} missed answer${wrongCards.length > 1 ? 's' : ''}
      </div>
      ${reviewItems}
    </div>`;
  }

  return `<div class="fc-sum">
    <div class="fc-sum-card">
      <div class="fc-sum-emoji">${grade.emoji}</div>
      <div class="fc-sum-title">Daily Review Complete</div>
      <span style="font-size:12px;font-weight:600;padding:4px 14px;border-radius:99px;background:${grade.color}22;color:${grade.color};display:inline-block;margin-bottom:4px">${grade.label}</span>
      <div class="fc-sum-grid">
        <div class="fc-sum-stat c"><div class="fc-sum-num">${correct}</div><div class="fc-sum-lbl">Correct</div></div>
        <div class="fc-sum-stat w"><div class="fc-sum-num">${wrong}</div><div class="fc-sum-lbl">Wrong</div></div>
        <div class="fc-sum-stat a"><div class="fc-sum-num">${accuracy}%</div><div class="fc-sum-lbl">Accuracy</div></div>
      </div>
      <div style="margin-top:20px; display:flex; gap:16px; justify-content:center;">
        <button class="fc-btn reveal" style="padding:12px 32px; width:auto; flex:none;" onclick="fcStartNewSet()">Practice 5 More</button>
        <button class="fc-btn" style="padding:12px 32px; width:auto; flex:none; background:var(--bg); border-color:var(--border);" onclick="fcBackToModes()">Change Mode</button>
      </div>
    </div>

    ${reviewHTML}

    <div class="fc-cats">
      <div class="fc-cats-title">Today's categories covered</div>
      ${todayCards.map(c => {
        const col = FC_CAT_COLORS[c.category] || "#888";
        const wasWrong = wrongCards && wrongCards.some(w => w.id === c.id);
        return `<div class="fc-cat-row">
          <div><span class="fc-cat-dot" style="background:${col}"></span>${escHtml(c.category)}</div>
          <div style="display:flex;align-items:center;gap:8px;">
            ${wasWrong ? '<span style="font-size:10px;color:#ff5050;font-weight:700">&#10007; Missed</span>' : '<span style="font-size:10px;color:#2ecf8c;font-weight:700">&#10003; Got it</span>'}
            <span style="font-size:11px;color:var(--muted);font-family:\'DM Mono\',monospace">${escHtml(c.difficulty)}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════
   ACTIONS
   ═══════════════════════════════════════════════ */
function fcSelectOption(optionIndex) {
  if (flashcardState.selectedAnswerIndex !== null) return; // already answered

  const currentCard = flashcardState.todayCards[flashcardState.currentIndex];
  flashcardState.selectedAnswerIndex = optionIndex;

  const isCorrect = (optionIndex === currentCard.answerIndex);
  if (isCorrect) {
    flashcardState.correct++;
  } else {
    flashcardState.wrong++;
    if (!flashcardState.wrongCards) flashcardState.wrongCards = [];
    flashcardState.wrongCards.push(currentCard);
  }

  flashcardState.revealed = true; // flip the card to show back
  saveFlashcards();
  renderLearn('flashcards');
}

function fcNextCard() {
  flashcardState.currentIndex++;
  flashcardState.revealed = false;
  flashcardState.selectedAnswerIndex = null;
  saveFlashcards();
  renderLearn('flashcards');
}

function fcStartNewSet() {
  flashcardState.todayCards = []; // Force generation of new set
  flashcardState.todayDate = ""; 
  saveFlashcards();
  setupDailyCards();
  renderLearn('flashcards');
}

function fcBackToModes() {
  flashcardState.mode = null;
  saveFlashcards();
  renderLearn('flashcards');
}