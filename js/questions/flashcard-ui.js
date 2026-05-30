
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