/* ═══════════════════════════════════════════════
   QUESTIONS — Interactive MCQ Questions from Class PDFs
   buildQuestionsHTML() returns HTML string
   (called by renderLearn in main.js)
   ═══════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════ */
let questionState = {
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

  questionState.mode = mode;
  questionState.startLessonIndex = sIndex;
  questionState.endLessonIndex = eIndex;
  
  fcStartNewSet();
}

// Session-level tracking to prevent repeats within a single browser session
let sessionSeenIds = new Set();

function setupDailyCards() {
  const today = new Date().toDateString();
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("sp-questions-mcq-v1")); } catch(e) {}

  if (saved && saved.todayDate === today && saved.todayCards && saved.todayCards.length > 0) {
    if (!saved.wrongCards) saved.wrongCards = [];
    questionState = saved;
    // Track these in the session set too
    saved.todayCards.forEach(c => sessionSeenIds.add(c.id));
    return;
  }

  // Merge history from both live state and localStorage (use whichever is longer/more complete)
  const savedHistory = (saved && saved.history) ? saved.history : [];
  const liveHistory = questionState.history || [];
  // Combine both and deduplicate
  const mergedHistory = [...new Set([...savedHistory, ...liveHistory])];
  
  let pool = [];
  if (questionState.mode === 'lesson') {
    for (let i = questionState.startLessonIndex; i <= questionState.endLessonIndex; i++) {
      pool = pool.concat(LESSON_MAP[i].questions);
    }
    if (pool.length === 0) pool = UX_QUESTIONS;
  } else if (questionState.mode === 'interview') {
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

  questionState = {
    ...questionState,
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
  saveQuestions();
}

function saveQuestions() {
  try { localStorage.setItem("sp-questions-mcq-v1", JSON.stringify(questionState)); } catch(e) {}
}