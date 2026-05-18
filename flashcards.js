/* ═══════════════════════════════════════════════
   FLASHCARDS — 80 UI/UX Questions
   buildFlashcardsHTML() returns HTML string
   (called by renderLearn in main.js line 335)
═══════════════════════════════════════════════ */

const UX_QUESTIONS = [
  // ── UX Laws ─────────────────────────────────
  { id:1,  category:"UX Laws",            difficulty:"Easy",
    question:"What does Hick's Law state?",
    answer:"The time to make a decision grows with the number and complexity of choices.",
    example:"Reducing a nav from 10 to 5 items speeds up wayfinding." },
  { id:2,  category:"UX Laws",            difficulty:"Easy",
    question:"What is Fitts's Law?",
    answer:"The time to acquire a target is a function of the distance to and size of the target.",
    example:"Large CTAs placed near the cursor are clicked faster." },
  { id:3,  category:"UX Laws",            difficulty:"Medium",
    question:"What does Jakob's Law state?",
    answer:"Users spend most of their time on other sites, so they expect your site to work the same way.",
    example:"Logo top-left that links home meets users' mental models." },
  { id:4,  category:"UX Laws",            difficulty:"Medium",
    question:"What is the Law of Proximity?",
    answer:"Objects near each other are perceived as related or grouped.",
    example:"Form labels placed directly above inputs feel connected to them." },
  { id:5,  category:"UX Laws",            difficulty:"Medium",
    question:"What is the Law of Similarity?",
    answer:"Elements that look alike are perceived as belonging to the same group.",
    example:"Consistent icon style across navigation signals they are related." },
  { id:6,  category:"UX Laws",            difficulty:"Hard",
    question:"What is Miller's Law?",
    answer:"The average person can hold about 7 plus or minus 2 items in working memory at once.",
    example:"Chunking a 10-digit phone number into 3-3-4 groups aids recall." },
  { id:7,  category:"UX Laws",            difficulty:"Medium",
    question:"What is the Law of Common Region?",
    answer:"Elements within a bounded area are perceived as a group.",
    example:"A card component groups title, image, and CTA as one visual unit." },
  { id:8,  category:"UX Laws",            difficulty:"Hard",
    question:"What is Tesler's Law (Conservation of Complexity)?",
    answer:"Every system has inherent complexity that cannot be removed — it can only be shifted between system and user.",
    example:"Smart defaults reduce user effort but require more developer logic." },
  { id:9,  category:"UX Laws",            difficulty:"Hard",
    question:"What is the Peak-End Rule?",
    answer:"People judge an experience based on how they felt at its most intense moment and at the very end.",
    example:"A delightful success screen at onboarding end creates a lasting positive memory." },
  { id:10, category:"UX Laws",            difficulty:"Medium",
    question:"What is the Aesthetic-Usability Effect?",
    answer:"Users perceive visually appealing designs as more usable, even when they are not.",
    example:"A polished UI earns more forgiveness for minor usability flaws." },
  { id:11, category:"UX Laws",            difficulty:"Hard",
    question:"What is the Von Restorff Effect?",
    answer:"An item that stands out from its peers is more likely to be remembered.",
    example:"Highlighting a recommended pricing tier draws attention and aids choice." },
  { id:12, category:"UX Laws",            difficulty:"Medium",
    question:"What is the Zeigarnik Effect?",
    answer:"People remember uncompleted or interrupted tasks better than completed ones.",
    example:"Progress bars keep users engaged by showing an unfinished state." },
  { id:13, category:"UX Laws",            difficulty:"Hard",
    question:"What is the Doherty Threshold?",
    answer:"Productivity soars when computer and user interact at under 400ms so neither has to wait on the other.",
    example:"Skeleton screens and optimistic UI maintain the illusion of speed." },
  { id:14, category:"UX Laws",            difficulty:"Medium",
    question:"What is the Law of Continuity?",
    answer:"Elements arranged on a line or curve are perceived as related and the eye follows the path.",
    example:"Carousels imply more content exists by guiding the eye left-to-right." },
  { id:15, category:"UX Laws",            difficulty:"Easy",
    question:"What is the Law of Figure/Ground?",
    answer:"Elements are perceived as either the main focus (figure) or the background (ground).",
    example:"A modal overlay dims the background so the dialog becomes the figure." },

  // ── Gestalt ─────────────────────────────────
  { id:16, category:"Gestalt",            difficulty:"Easy",
    question:"What does the Gestalt principle of Closure mean?",
    answer:"The mind fills in missing information to perceive a complete, whole shape.",
    example:"The WWF panda logo uses gaps that the brain completes into a full panda." },
  { id:17, category:"Gestalt",            difficulty:"Medium",
    question:"What is the Gestalt principle of Symmetry?",
    answer:"Symmetrical elements are perceived as belonging together and forming a coherent whole.",
    example:"A two-column layout with equal weight feels balanced and trustworthy." },
  { id:18, category:"Gestalt",            difficulty:"Medium",
    question:"What is Praegnanz (Law of Good Form)?",
    answer:"People perceive ambiguous shapes in the simplest, most orderly way possible.",
    example:"The Olympics rings are seen as five clean circles, not complex overlapping shapes." },

  // ── Heuristics ───────────────────────────────
  { id:19, category:"Heuristics",         difficulty:"Easy",
    question:"What does 'Visibility of System Status' mean?",
    answer:"The system should always keep users informed about what is going on through appropriate feedback.",
    example:"A loading spinner tells users the system is processing their request." },
  { id:20, category:"Heuristics",         difficulty:"Easy",
    question:"What does 'User Control and Freedom' mean?",
    answer:"Users often choose functions by mistake and need a clearly marked emergency exit.",
    example:"An undo button or Cancel option prevents users from feeling trapped." },
  { id:21, category:"Heuristics",         difficulty:"Medium",
    question:"What does 'Error Prevention' mean as a heuristic?",
    answer:"Design carefully to prevent problems from occurring, rather than relying on error messages after the fact.",
    example:"Disabling Submit until all required fields are filled prevents form errors." },
  { id:22, category:"Heuristics",         difficulty:"Medium",
    question:"What does 'Recognition over Recall' mean?",
    answer:"Minimise the user's memory load by making objects, actions, and options visible.",
    example:"Showing recently used files instead of making users remember filenames." },
  { id:23, category:"Heuristics",         difficulty:"Medium",
    question:"What does 'Consistency and Standards' mean?",
    answer:"Users should not wonder whether different words or actions mean the same thing.",
    example:"Always using Delete (not sometimes Remove) for the same destructive action." },
  { id:24, category:"Heuristics",         difficulty:"Hard",
    question:"What does 'Flexibility and Efficiency of Use' mean?",
    answer:"Accelerators allow experts to speed up interactions so the design serves both novices and power users.",
    example:"Keyboard shortcuts like Cmd+S serve power users without confusing beginners." },
  { id:25, category:"Heuristics",         difficulty:"Medium",
    question:"What does 'Aesthetic and Minimalist Design' mean?",
    answer:"Dialogues should not contain irrelevant information — every extra unit competes with relevant ones.",
    example:"Removing decorative banners from a checkout page improves conversion." },
  { id:26, category:"Heuristics",         difficulty:"Hard",
    question:"What does 'Help Users Recognize, Diagnose, and Recover from Errors' mean?",
    answer:"Error messages should use plain language, indicate the problem precisely, and suggest a solution.",
    example:"Password must be 8+ characters beats Invalid input." },
  { id:27, category:"Heuristics",         difficulty:"Easy",
    question:"What does 'Match Between System and Real World' mean?",
    answer:"The system should use words, phrases, and concepts familiar to the user.",
    example:"A shopping cart icon instead of Purchase queue uses a real-world metaphor." },

  // ── Typography ───────────────────────────────
  { id:28, category:"Typography",         difficulty:"Easy",
    question:"What is the ideal line length for body text?",
    answer:"Between 45 and 75 characters per line, including spaces.",
    example:"Lines too long make the eye lose its place when moving to the next line." },
  { id:29, category:"Typography",         difficulty:"Medium",
    question:"What is a typographic scale?",
    answer:"A set of harmonious font sizes based on a ratio, creating visual hierarchy.",
    example:"A 1.25 ratio gives: 12, 15, 19, 24, 30, 38px — a cohesive size system." },
  { id:30, category:"Typography",         difficulty:"Medium",
    question:"What is leading (line-height) and what is a good default?",
    answer:"Leading is vertical space between lines. A ratio of 1.4 to 1.6 times the font size is recommended for body text.",
    example:"16px font with 24px line-height (1.5 ratio) is comfortable to read." },
  { id:31, category:"Typography",         difficulty:"Hard",
    question:"What is the difference between kerning and tracking?",
    answer:"Kerning adjusts space between specific letter pairs; tracking adjusts spacing uniformly across a range of characters.",
    example:"Kerning fixes AV appearing too far apart; tracking opens up all-caps headings." },
  { id:32, category:"Typography",         difficulty:"Medium",
    question:"When are serif vs sans-serif fonts used?",
    answer:"Serifs have small strokes at letter ends (traditionally for print); sans-serifs lack them (better for screens and UI).",
    example:"Georgia for long-form editorial; system-ui for dashboard labels." },

  // ── Color Theory ─────────────────────────────
  { id:33, category:"Color Theory",       difficulty:"Easy",
    question:"What WCAG contrast ratio is required for normal text to pass AA?",
    answer:"A minimum contrast ratio of 4.5:1 between text and its background.",
    example:"Light grey text on white fails; dark grey on white passes." },
  { id:34, category:"Color Theory",       difficulty:"Medium",
    question:"What is a complementary color scheme?",
    answer:"Colors opposite each other on the color wheel, creating high contrast and visual energy.",
    example:"Blue and orange together in a CTA button set." },
  { id:35, category:"Color Theory",       difficulty:"Medium",
    question:"What is the 60-30-10 color rule?",
    answer:"60% dominant color, 30% secondary, 10% accent creates a balanced professional palette.",
    example:"60% white, 30% navy, 10% yellow in a dashboard layout." },
  { id:36, category:"Color Theory",       difficulty:"Hard",
    question:"What is simultaneous contrast?",
    answer:"The same color appears different depending on surrounding colors — lighter or darker based on context.",
    example:"A grey square looks darker on white and lighter on black." },
  { id:37, category:"Color Theory",       difficulty:"Medium",
    question:"What does HSL stand for and what does each value mean?",
    answer:"Hue (0-360 degree color type), Saturation (0% grey to 100% vivid), Lightness (0% black to 100% white).",
    example:"HSL 210, 80%, 50% is a vivid medium blue." },

  // ── Accessibility ─────────────────────────────
  { id:38, category:"Accessibility",      difficulty:"Easy",
    question:"What does WCAG stand for?",
    answer:"Web Content Accessibility Guidelines — international standards for making web content accessible.",
    example:"WCAG 2.1 AA is the most commonly required compliance level globally." },
  { id:39, category:"Accessibility",      difficulty:"Medium",
    question:"What are the four WCAG principles (POUR)?",
    answer:"Perceivable, Operable, Understandable, Robust — content must meet all four to be accessible.",
    example:"An image without alt text fails Perceivable for screen reader users." },
  { id:40, category:"Accessibility",      difficulty:"Medium",
    question:"What is a focus state and why is it critical?",
    answer:"A visible indicator showing which element has keyboard focus — essential for keyboard-only and motor-impaired users.",
    example:"Removing outline:none without a custom focus style breaks keyboard navigation." },
  { id:41, category:"Accessibility",      difficulty:"Hard",
    question:"What is ARIA and when should you use it?",
    answer:"Accessible Rich Internet Applications — attributes that add semantic meaning. Use only when native HTML semantics are insufficient.",
    example:"aria-label Close dialog on an icon-only button gives it an accessible name." },
  { id:42, category:"Accessibility",      difficulty:"Medium",
    question:"How should designers account for color blindness?",
    answer:"Color blindness affects about 8% of males. Never rely on color alone — add icons, text, or patterns.",
    example:"A red/green status indicator should also use X and checkmark icons." },

  // ── UX Research ──────────────────────────────
  { id:43, category:"UX Research",        difficulty:"Easy",
    question:"What is a user persona?",
    answer:"A fictional, research-based representation of a target user type, including goals, frustrations, and behaviours.",
    example:"Maya, 28, freelance designer — needs quick file exports on mobile." },
  { id:44, category:"UX Research",        difficulty:"Easy",
    question:"What is a user journey map?",
    answer:"A visual diagram of steps a user takes to accomplish a goal, including emotions, pain points, and opportunities.",
    example:"Mapping an e-commerce checkout from product discovery to delivery." },
  { id:45, category:"UX Research",        difficulty:"Medium",
    question:"What is the difference between qualitative and quantitative research?",
    answer:"Qualitative explores why users behave a certain way (interviews); quantitative measures how many or how much (analytics, surveys).",
    example:"Interviews reveal confusion; analytics show 70% drop off at that step." },
  { id:46, category:"UX Research",        difficulty:"Medium",
    question:"What is a usability test?",
    answer:"A technique where representative users attempt specific tasks while researchers observe and note difficulties.",
    example:"Watching 5 users try to find Settings reveals navigation problems." },
  { id:47, category:"UX Research",        difficulty:"Hard",
    question:"What is the difference between moderated and unmoderated usability testing?",
    answer:"Moderated has a facilitator who can probe and adapt; unmoderated runs remotely without a facilitator, scaling to more participants.",
    example:"Moderated: in-lab session. Unmoderated: UserTesting.com task recording." },
  { id:48, category:"UX Research",        difficulty:"Medium",
    question:"What is a heuristic evaluation?",
    answer:"An expert review of a UI against established usability principles to identify problems without user testing.",
    example:"A UX expert audits an app against Nielsen's 10 heuristics." },
  { id:49, category:"UX Research",        difficulty:"Hard",
    question:"What is an affinity diagram?",
    answer:"A method of organising large amounts of qualitative data into themed clusters to identify patterns.",
    example:"Post-interview sticky notes grouped into: navigation, trust, speed." },
  { id:50, category:"UX Research",        difficulty:"Medium",
    question:"What is a card sorting exercise?",
    answer:"Users organise topics into groups, revealing their mental models for navigation structures.",
    example:"Users sort 30 feature cards to help define a new information architecture." },

  // ── Interaction Design ───────────────────────
  { id:51, category:"Interaction Design", difficulty:"Easy",
    question:"What is an affordance in UX design?",
    answer:"A property of an object that signals how it should be used, making the interaction self-evident.",
    example:"A raised button affords pressing; a door handle affords pulling." },
  { id:52, category:"Interaction Design", difficulty:"Medium",
    question:"What is a signifier?",
    answer:"A design element that communicates where and how an action should be performed.",
    example:"A magnifying glass icon signals search here even before clicking." },
  { id:53, category:"Interaction Design", difficulty:"Medium",
    question:"What is feedback in interaction design?",
    answer:"A system response that confirms an action was received and shows the result or new state.",
    example:"A button briefly turning green after clicking Save confirms success." },
  { id:54, category:"Interaction Design", difficulty:"Hard",
    question:"What are the 5 dimensions of interaction design?",
    answer:"Words (1D), Visual representations (2D), Physical objects and space (3D), Time (4D), Behaviour (5D).",
    example:"An animation showing a file moving to trash uses time and behaviour." },
  { id:55, category:"Interaction Design", difficulty:"Medium",
    question:"What is progressive disclosure?",
    answer:"Showing only the most relevant information first and revealing detail only as the user needs it.",
    example:"An Advanced options accordion hides complexity until the user opts in." },
  { id:56, category:"Interaction Design", difficulty:"Medium",
    question:"What is a mental model in UX?",
    answer:"The user's internal understanding of how a system works, built from past experience and expectations.",
    example:"Users expect a trash icon to store deleted files, not permanently erase them immediately." },
  { id:57, category:"Interaction Design", difficulty:"Hard",
    question:"What is the Gulf of Evaluation vs Gulf of Execution?",
    answer:"Gulf of Execution: difficulty knowing how to operate a system. Gulf of Evaluation: difficulty understanding the system's current state.",
    example:"Unclear icons = Gulf of Execution. No confirmation message = Gulf of Evaluation." },

  // ── Design Systems ───────────────────────────
  { id:58, category:"Design Systems",     difficulty:"Easy",
    question:"What is a design system?",
    answer:"A collection of reusable components, guidelines, and standards ensuring consistency across a product.",
    example:"Google's Material Design provides components and principles used across all Google products." },
  { id:59, category:"Design Systems",     difficulty:"Medium",
    question:"What are design tokens?",
    answer:"Named variables that store design decisions (color, spacing, typography) in a format shared between design and code.",
    example:"Token color.primary.500 = #0052CC used in both Figma and CSS." },
  { id:60, category:"Design Systems",     difficulty:"Medium",
    question:"What is Atomic Design methodology?",
    answer:"A system by Brad Frost: Atoms to Molecules to Organisms to Templates to Pages.",
    example:"Button (atom) + label (atom) = form field (molecule) = login form (organism)." },
  { id:61, category:"Design Systems",     difficulty:"Hard",
    question:"What is the difference between a style guide and a component library?",
    answer:"Style guide documents visual language (colors, typography); component library provides reusable coded or design UI components.",
    example:"Figma color swatches = style guide. Storybook Button = component library." },

  // ── Information Architecture ──────────────────
  { id:62, category:"Information Architecture", difficulty:"Easy",
    question:"What is information architecture (IA)?",
    answer:"The practice of organising, structuring, and labelling content so users can find information and complete tasks.",
    example:"Deciding whether Settings lives under a profile menu or top navigation." },
  { id:63, category:"Information Architecture", difficulty:"Medium",
    question:"What is a sitemap in UX?",
    answer:"A hierarchical diagram showing all pages and screens in a product and how they relate to each other.",
    example:"Home to Products to Category to Product Detail Page." },
  { id:64, category:"Information Architecture", difficulty:"Medium",
    question:"What is the difference between navigation and wayfinding?",
    answer:"Navigation is the system of menus and links; wayfinding is the user's process of understanding where they are.",
    example:"Breadcrumbs help wayfinding; the nav bar provides the navigation system." },
  { id:65, category:"Information Architecture", difficulty:"Hard",
    question:"What are the three types of navigation in IA?",
    answer:"Global navigation (sitewide), local navigation (within a section), contextual navigation (links within content).",
    example:"Top nav bar (global), sidebar (local), Related articles links (contextual)." },

  // ── Psychology ───────────────────────────────
  { id:66, category:"Psychology",         difficulty:"Easy",
    question:"What is cognitive load in UX?",
    answer:"The total mental effort required to use a system — designers should minimise unnecessary cognitive load.",
    example:"A cluttered dashboard forces users to process too much information at once." },
  { id:67, category:"Psychology",         difficulty:"Medium",
    question:"What are the three types of cognitive load?",
    answer:"Intrinsic (inherent task complexity), Extraneous (caused by poor design), Germane (effort that builds learning).",
    example:"A confusing form layout adds extraneous load that good design can remove." },
  { id:68, category:"Psychology",         difficulty:"Medium",
    question:"What is the serial position effect?",
    answer:"Users remember items at the beginning (primacy) and end (recency) of a list better than those in the middle.",
    example:"Place the most important nav items first or last — not buried in the middle." },
  { id:69, category:"Psychology",         difficulty:"Hard",
    question:"What is confirmation bias and how does it affect UX research?",
    answer:"The tendency to favour information confirming existing beliefs — researchers must design studies to counteract it.",
    example:"A researcher who loves their own design unconsciously ignores users struggling with it." },
  { id:70, category:"Psychology",         difficulty:"Hard",
    question:"What is the IKEA Effect in UX?",
    answer:"Users place higher value on things they partially created themselves.",
    example:"Onboarding flows that let users customise their profile increase engagement and retention." },

  // ── Prototyping ───────────────────────────────
  { id:71, category:"Prototyping",        difficulty:"Easy",
    question:"What is the difference between a wireframe and a prototype?",
    answer:"A wireframe is a static, low-fidelity layout showing structure; a prototype is an interactive simulation.",
    example:"Grey-box Figma layout = wireframe. Clickable Figma file with transitions = prototype." },
  { id:72, category:"Prototyping",        difficulty:"Medium",
    question:"What are the fidelity levels in prototyping?",
    answer:"Low-fi (sketches), mid-fi (digital wireframes), high-fi (pixel-perfect interactive prototypes).",
    example:"A paper sketch is low-fi; a polished Figma prototype with real content is high-fi." },
  { id:73, category:"Prototyping",        difficulty:"Medium",
    question:"What is a paper prototype and when is it useful?",
    answer:"A hand-drawn interface sketch used for rapid, cheap usability testing before digital work begins.",
    example:"Sketching 3 navigation layouts and testing with 5 users to pick the best before Figma." },

  // ── Visual Design ─────────────────────────────
  { id:74, category:"Visual Design",      difficulty:"Easy",
    question:"What is visual hierarchy?",
    answer:"The arrangement of elements to guide the viewer's eye in order of importance using size, contrast, spacing, and color.",
    example:"Large bold headline, then subheading, then body text creates a clear reading order." },
  { id:75, category:"Visual Design",      difficulty:"Medium",
    question:"What is whitespace (negative space) and why is it important?",
    answer:"Empty space between and around elements — it improves readability, reduces cognitive load, and creates visual balance.",
    example:"Apple product pages use generous whitespace to make each element feel premium." },
  { id:76, category:"Visual Design",      difficulty:"Medium",
    question:"What is the F-pattern in reading behaviour?",
    answer:"Eye-tracking shows users read web pages in an F-shape: two horizontal sweeps at top, then scanning down the left side.",
    example:"Place key content and CTAs along the left edge and top of pages." },
  { id:77, category:"Visual Design",      difficulty:"Hard",
    question:"What is the Z-pattern in visual design?",
    answer:"On pages with little text, eyes move Z-shape: top-left to top-right, diagonal, then bottom-left to bottom-right.",
    example:"Landing pages use Z-layout: logo, nav, hero image, CTA." },

  // ── Ethics & Dark Patterns ────────────────────
  { id:78, category:"Ethics & Patterns",  difficulty:"Medium",
    question:"What is a dark pattern?",
    answer:"A user interface designed to trick users into doing something they did not intend, often at their expense.",
    example:"A pre-checked newsletter opt-in or a disguised unsubscribe link." },
  { id:79, category:"Ethics & Patterns",  difficulty:"Medium",
    question:"What is confirmshaming?",
    answer:"A dark pattern where the option to decline is phrased to make users feel guilty for saying no.",
    example:"No thanks, I do not want to save money as the dismiss option on a popup." },
  { id:80, category:"Ethics & Patterns",  difficulty:"Hard",
    question:"What is the roach motel dark pattern?",
    answer:"A design that is easy to get into but deliberately hard to get out of.",
    example:"A subscription that requires a phone call to cancel despite signing up online instantly." }
];


/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let flashcardState = {
  todayDate: "",
  todayCards: [],
  currentIndex: 0,
  revealed: false,
  correct: 0,
  wrong: 0,
  wrongCards: [],   // stores full card objects that were answered wrong
  history: []
};

/* ═══════════════════════════════════════════════
   DAILY CARD SETUP
═══════════════════════════════════════════════ */
function setupDailyCards() {
  const today = new Date().toDateString();
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("sp-flashcards-v2")); } catch(e) {}

  if (saved && saved.todayDate === today) {
    // Migrate old saves that lack wrongCards
    if (!saved.wrongCards) saved.wrongCards = [];
    flashcardState = saved;
    return;
  }

  const history = (saved && saved.history) ? saved.history : [];
  const available = UX_QUESTIONS.filter(q => !history.includes(q.id));
  const pool = available.length >= 5 ? available : [...UX_QUESTIONS];

  const seed = new Date().toDateString();
  const shuffled = [...pool].sort((a, b) => fcHash(seed + a.id) - fcHash(seed + b.id));
  const todayCards = shuffled.slice(0, 5);
  const newHistory = [...history, ...todayCards.map(c => c.id)].slice(-70);

  flashcardState = {
    todayDate: today,
    todayCards,
    currentIndex: 0,
    revealed: false,
    correct: 0,
    wrong: 0,
    wrongCards: [],
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
  try { localStorage.setItem("sp-flashcards-v2", JSON.stringify(flashcardState)); } catch(e) {}
}

/* ═══════════════════════════════════════════════
   BADGE HELPERS
═══════════════════════════════════════════════ */
const FC_CAT_COLORS = {
  "UX Laws":"#d4960a","Gestalt":"#4a9eff","Heuristics":"#2ecf8c",
  "Typography":"#e55bdb","Color Theory":"#ff7857","Accessibility":"#64b4ff",
  "UX Research":"#a78bfa","Interaction Design":"#fdb365","Design Systems":"#34d399",
  "Information Architecture":"#f87171","Psychology":"#c4b5fd",
  "Prototyping":"#67e8f9","Visual Design":"#f9a8d4","Ethics & Patterns":"#fca5a5"
};
const FC_DIFF_COLORS = { "Easy":"#2ecf8c", "Medium":"#d4960a", "Hard":"#ff5050" };

function fcBadge(label, color) {
  return `<span style="font-size:10px;padding:3px 10px;border-radius:99px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;background:${color}22;color:${color}">${escHtml(label)}</span>`;
}

/* ═══════════════════════════════════════════════
   SHARED CSS — injected once per render
═══════════════════════════════════════════════ */
const FC_CSS = `<style id="fc-styles">
  .fc-wrap{max-width:560px;margin:0 auto}
  .fc-prog-bar{height:3px;background:var(--border);border-radius:99px;margin-bottom:18px;overflow:hidden}
  .fc-prog-fill{height:100%;background:var(--accent);border-radius:99px;transition:width .4s ease}
  .fc-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
  .fc-count{font-size:12px;color:var(--muted);font-family:'DM Mono',monospace;letter-spacing:.08em}
  .fc-score-row{display:flex;gap:7px}
  .fc-pill{font-size:11px;padding:3px 11px;border-radius:99px;font-weight:700}
  .fc-pill.c{background:rgba(46,207,140,.15);color:#2ecf8c}
  .fc-pill.w{background:rgba(255,80,80,.15);color:#ff5050}
  .fc-scene{perspective:1200px;height:270px;margin-bottom:18px;cursor:pointer}
  .fc-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,.2,.2,1);border-radius:16px}
  .fc-inner.flipped{transform:rotateY(180deg)}
  .fc-face{position:absolute;inset:0;border-radius:16px;backface-visibility:hidden;-webkit-backface-visibility:hidden;padding:22px 22px 18px;display:flex;flex-direction:column;border:1px solid var(--border);background:var(--surface)}
  .fc-face.back{transform:rotateY(180deg);cursor:pointer}
  .fc-badges{display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap}
  .fc-question{font-size:18px;font-weight:600;line-height:1.45;color:var(--text);flex:1;display:flex;align-items:center;justify-content:center;text-align:center}
  .fc-tap{font-size:11px;color:var(--muted);text-align:center;margin-top:auto;display:flex;align-items:center;justify-content:center;gap:5px}
  .fc-tap-pulse{width:6px;height:6px;border-radius:50%;background:var(--accent);display:inline-block;animation:fcpulse 1.4s ease-in-out infinite}
  @keyframes fcpulse{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1.2)}}
  .fc-ans-lbl{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:8px}
  .fc-answer{font-size:15px;line-height:1.6;color:var(--text);flex:1}
  .fc-example{font-size:12px;color:var(--muted);margin-top:12px;padding-top:12px;border-top:1px solid var(--border);line-height:1.5}
  .fc-example b{color:var(--accent)}
  .fc-actions{display:flex;gap:10px;justify-content:center;margin-bottom:14px}
  .fc-btn{flex:1;max-width:200px;padding:13px 0;border-radius:12px;border:1.5px solid var(--border);font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .16s ease}
  .fc-btn:hover{transform:translateY(-2px)}
  .fc-btn:active{transform:translateY(0)}
  .fc-btn.reveal{background:var(--accent);color:#0c0c0e;border-color:var(--accent);max-width:100%;width:100%}
  .fc-btn.reveal:hover{opacity:.88}
  .fc-btn.wrong{background:rgba(255,80,80,.1);color:#ff5050;border-color:rgba(255,80,80,.3)}
  .fc-btn.wrong:hover{background:rgba(255,80,80,.2);border-color:#ff5050}
  .fc-btn.right{background:rgba(46,207,140,.1);color:#2ecf8c;border-color:rgba(46,207,140,.3)}
  .fc-btn.right:hover{background:rgba(46,207,140,.2);border-color:#2ecf8c}
  .fc-footer{text-align:center;font-size:11px;color:var(--muted);margin-top:4px}
  .fc-footer span{color:var(--accent);font-weight:600}

  /* Summary */
  .fc-sum{max-width:520px;margin:0 auto}
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
   buildFlashcardsHTML — called by main.js renderLearn()
═══════════════════════════════════════════════ */
function buildFlashcardsHTML() {
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

  return `<div class="fc-wrap">
    <div class="fc-prog-bar"><div class="fc-prog-fill" style="width:${pct}%"></div></div>
    <div class="fc-meta">
      <span class="fc-count">CARD ${s.currentIndex + 1} / ${total}</span>
      <div class="fc-score-row">
        <span class="fc-pill c">&#10003; ${s.correct}</span>
        <span class="fc-pill w">&#10007; ${s.wrong}</span>
      </div>
    </div>

    <div class="fc-scene" onclick="fcToggleFlip()">
      <div class="fc-inner${s.revealed ? ' flipped' : ''}">

        <div class="fc-face front">
          <div class="fc-badges">
            ${fcBadge(card.category, catColor)}
            ${fcBadge(card.difficulty, diffColor)}
          </div>
          <div class="fc-question">${escHtml(card.question)}</div>
          <div class="fc-tap"><span class="fc-tap-pulse"></span> Tap card to answer</div>
        </div>

        <div class="fc-face back">
          <div class="fc-ans-lbl">Answer <span style="font-size:9px;opacity:.5;margin-left:6px;">· tap to flip back</span></div>
          <div class="fc-answer">${escHtml(card.answer)}</div>
          <div class="fc-example"><b>Example:</b> ${escHtml(card.example)}</div>
        </div>

      </div>
    </div>

    ${s.revealed
      ? `<div class="fc-actions">
           <button class="fc-btn wrong" id="fc-prev" onclick="fcAnswer(false)">&#10007; Wrong</button>
           <button class="fc-btn right"  id="fc-next" onclick="fcAnswer(true)">&#10003; Right</button>
         </div>`
      : `<div class="fc-actions" style="visibility:hidden;pointer-events:none">
           <button class="fc-btn wrong">&#10007; Wrong</button>
           <button class="fc-btn right">&#10003; Right</button>
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
    accuracy >= 90 ? { label:"Excellent!",    emoji:"🏆", color:"#2ecf8c" } :
    accuracy >= 70 ? { label:"Good work",     emoji:"⭐", color:"#d4960a" } :
    accuracy >= 50 ? { label:"Keep going",    emoji:"📚", color:"#4a9eff" } :
                     { label:"Review needed", emoji:"🔁", color:"#ff5050" };

  // Wrong answer review cards
  let reviewHTML = '';
  if (wrongCards && wrongCards.length > 0) {
    const reviewItems = wrongCards.map(card => {
      const catColor = FC_CAT_COLORS[card.category] || "#888";
      const diffColor = FC_DIFF_COLORS[card.difficulty] || "#888";
      return `<div class="fc-review-card">
        <div class="fc-badges" style="margin-bottom:8px">${fcBadge(card.category, catColor)}${fcBadge(card.difficulty, diffColor)}</div>
        <div class="fc-review-q">${escHtml(card.question)}</div>
        <div class="fc-review-a-label">✕ Correct Answer</div>
        <div class="fc-review-a">${escHtml(card.answer)}</div>
        <div class="fc-review-ex"><b>Example:</b> ${escHtml(card.example)}</div>
      </div>`;
    }).join('');

    reviewHTML = `<div class="fc-review-section">
      <div class="fc-review-title">
        <span style="color:#ff5050">✕</span> Review — ${wrongCards.length} missed answer${wrongCards.length > 1 ? 's' : ''}
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
      <div class="fc-sum-note">5 new questions unlock tomorrow</div>
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
            ${wasWrong ? '<span style="font-size:10px;color:#ff5050;font-weight:700">✕ Missed</span>' : '<span style="font-size:10px;color:#2ecf8c;font-weight:700">✓ Got it</span>'}
            <span style="font-size:11px;color:var(--muted);font-family:\'DM Mono\',monospace">${escHtml(c.difficulty)}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════
   ACTIONS — re-render via renderLearn()
═══════════════════════════════════════════════ */
function fcToggleFlip() {
  flashcardState.revealed = !flashcardState.revealed;
  saveFlashcards();
  renderLearn('flashcards');
}

function fcReveal() {
  flashcardState.revealed = true;
  saveFlashcards();
  renderLearn('flashcards');
}

function fcAnswer(isCorrect) {
  if (isCorrect) {
    flashcardState.correct++;
  } else {
    flashcardState.wrong++;
    // Store the full card object so summary can show correct answer
    const missedCard = flashcardState.todayCards[flashcardState.currentIndex];
    if (!flashcardState.wrongCards) flashcardState.wrongCards = [];
    flashcardState.wrongCards.push(missedCard);
  }
  flashcardState.currentIndex++;
  flashcardState.revealed = false;
  saveFlashcards();
  renderLearn('flashcards');
}