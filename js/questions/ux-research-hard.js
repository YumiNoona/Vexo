// UX Research (10 questions, Hard)
const UX_UX_RESEARCH_HARD = [
{
    id: 53,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is a 'Heuristic Evaluation' and who performs it?",
    options: [
      "An automated accessibility scan run by a browser plugin",
      "An expert review of a UI where evaluators judge it against a set of usability principles (heuristics)",
      "A survey sent to real end-users to rate the interface quality",
      "A visual design critique session between designers on the team"
    ],
    answerIndex: 1,
    explanation: "Heuristic Evaluation is typically performed by 3–5 usability experts who inspect a UI against established heuristics (e.g. Nielsen's 10) to find violations.",
    example: "A UX expert noting that the settings page has no 'Back' button, violating the 'User Control and Freedom' heuristic."
  },
{
    id: 63,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is the difference between a 'Current State' and 'Future State' Journey Map?",
    options: [
      "Current State maps desktop journeys; Future State maps mobile journeys",
      "Current State visualizes the existing experience to identify problems; Future State visualizes the ideal redesigned experience",
      "Current State uses real user data; Future State uses hypothetical competitor data",
      "Current State is for B2C products; Future State is for B2B products"
    ],
    answerIndex: 1,
    explanation: "Current State maps reveal pain points in today's experience; Future State maps are design artifacts that propose how the journey should feel after redesign.",
    example: "Mapping the painful multi-step current flight booking process (current state) vs. a one-screen redesigned version (future state)."
  },
{
    id: 67,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is a 'SWOT Analysis' and how is it used in UX competitive research?",
    options: [
      "A diagram used to map information architecture for large websites",
      "An analysis of Strengths, Weaknesses, Opportunities, and Threats to understand a competitor's strategic position",
      "A survey methodology using Semantic Weighted Observation Technique",
      "A design critique framework using Stop, Watch, Observe, and Test phases"
    ],
    answerIndex: 1,
    explanation: "SWOT analysis helps UX teams understand both internal product capabilities and external market dynamics to position their design strategy.",
    example: "Noting that a competitor has strength in onboarding (S) but weakness in mobile UX (W), creating an opportunity (O) to win mobile users."
  },
{
    id: 70,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is the 'Worst Possible Idea' technique in ideation?",
    options: [
      "Asking stakeholders to list all the features they want to cut from the product",
      "Generating deliberately terrible ideas first, then reversing them to spark genuinely good solutions",
      "Identifying the weakest design in a portfolio review",
      "A technique for identifying system failure points before launch"
    ],
    answerIndex: 1,
    explanation: "Reverse thinking breaks mental blocks — once you list the worst ideas, inverting them often produces surprisingly effective, unconventional solutions.",
    example: "'Worst idea: make the loading screen 5 minutes long.' → Reversed: 'What if we entertain users during loading with a mini-game?'"
  },
{
    id: 100,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is 'Triangulation' in UX research methodology?",
    options: [
      "A geometric approach to laying out UI components in a triangular grid",
      "Using multiple research methods or data sources to cross-validate findings and increase confidence in conclusions",
      "Testing a design across three screen sizes: mobile, tablet, and desktop",
      "A technique where three user researchers independently analyze the same raw data"
    ],
    answerIndex: 1,
    explanation: "Triangulation strengthens research validity — if interviews, surveys, and analytics all point to the same problem, you can confidently prioritize it.",
    example: "Combining user interview findings (qualitative) with heatmap data (behavioral) and drop-off analytics (quantitative) to confirm a checkout problem."
  },
{
    id: 121,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is Multivariate Testing (MVT)?",
    options: [
      "Testing users across multiple geographical timezones",
      "Testing multiple combinations of different variables (like heading, image, and button color) simultaneously to see which combination performs best",
      "Running the exact same A/B test multiple times to prove statistical significance",
      "A survey with multiple choice questions"
    ],
    answerIndex: 1,
    explanation: "While A/B tests compare distinct versions, MVT breaks a page into elements and tests all possible combinations to find the optimal mix.",
    example: "Testing 2 headlines, 2 hero images, and 2 button colors to find the best of the 8 possible page combinations."
  },
{
    id: 127,
    category: "UX Research",
    difficulty: "Hard",
    question: "What does 'Dual-Track Agile' mean for a UX designer?",
    options: [
      "Designing for both iOS and Android at the same time",
      "Running 'Discovery' (research/design) and 'Delivery' (development) tracks simultaneously, with discovery staying slightly ahead",
      "Using two different project management tools at once",
      "Creating two completely different UI themes for A/B testing"
    ],
    answerIndex: 1,
    explanation: "In dual-track agile, the UX team researches and designs solutions in the discovery track, feeding validated ideas directly into the developers' delivery track.",
    example: "Designers testing prototypes for Sprint 4 while developers are writing code for the approved designs of Sprint 3."
  },
{
    id: 157,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is 'Ethnographic Research' in UX?",
    options: [
      "Researching different ethnic font styles",
      "An in-depth observational study of users in their natural environment to understand their culture, behaviors, and context",
      "A quantitative survey analyzing demographics",
      "Translating a website into multiple languages"
    ],
    answerIndex: 1,
    explanation: "Rooted in anthropology, ethnographic UX research involves immersing yourself in the user's world to see how they actually live and work.",
    example: "Spending two days riding along with delivery drivers to observe how they use a logistics app in heavy traffic and bad weather."
  },
{
    id: 175,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is 'First Click Testing'?",
    options: [
      "Measuring the latency of the mouse button hardware",
      "A research method that measures what a user clicks first when given a specific task, as it heavily predicts their ultimate success",
      "Testing if the primary button works on the first try",
      "A QA test to ensure the site loads on the first click"
    ],
    answerIndex: 1,
    explanation: "Research shows that if a user's first click is down the correct path, their chance of completing the task is 87%; if wrong, it drops to 46%.",
    example: "Showing users a homepage and asking 'Where would you click to return an item?' and tracking if their first instinct is correct."
  },
{
    id: 200,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is the difference between 'Generative' and 'Evaluative' research?",
    options: [
      "Generative creates code; Evaluative creates designs",
      "Generative helps define the problem and discover what to build; Evaluative tests a proposed solution to see if it works",
      "Generative uses AI; Evaluative uses humans",
      "Generative is quantitative; Evaluative is qualitative"
    ],
    answerIndex: 1,
    explanation: "Generative research (like interviews and diary studies) happens at the very beginning of a project. Evaluative research (like usability testing) happens once you have a prototype.",
    example: "Generative: Interviewing doctors to understand their workflow. Evaluative: Testing a prototype of a new medical dashboard with those doctors."
  }
];