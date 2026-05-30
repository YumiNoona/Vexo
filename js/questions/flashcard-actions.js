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