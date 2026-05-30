const VISUAL_QUESTIONS = [
  {
    id: 401,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "In a User Flow or Task Flow diagram, what does this shape represent?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>`,
    options: [
      "A standard process or simple action step",
      "A decision point where the flow branches",
      "The definitive start or end of the process",
      "A database or secure data storage element"
    ],
    answerIndex: 1,
    explanation: "A diamond shape always represents a decision point in a flowchart, typically asking a Yes/No question that branches the flow into two different paths.",
    example: "A diamond asking 'Is user logged in?' with an arrow for 'Yes' pointing to the dashboard and 'No' to the login screen."
  },
  {
    id: 402,
    category: "Interaction Design",
    difficulty: "Easy",
    question: "In a User Flow diagram, what does this shape represent?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><rect x="15" y="30" width="70" height="40" fill="none" stroke="currentColor" stroke-width="4" rx="4"/></svg>`,
    options: [
      "A decision point where the flow branches",
      "A standard process or simple action step",
      "The definitive start or end of the process",
      "Manual input required from the active user"
    ],
    answerIndex: 1,
    explanation: "A rectangle represents a basic process, action, or operation step in the user's flow.",
    example: "A rectangle containing the text 'User clicks Add to Cart'."
  },
  {
    id: 403,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "In a flowchart or User Flow, what does this shape (oval/pill) typically represent?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><rect x="10" y="30" width="80" height="40" rx="20" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
    options: [
      "The definitive start or end of the process",
      "A standard process or simple action step",
      "A decision point where the flow branches",
      "A database or secure data storage element"
    ],
    answerIndex: 0,
    explanation: "An oval or pill shape (terminator) represents the start or end point of a flow or process.",
    example: "An oval at the very top of a diagram labeled 'Start' or 'User opens App'."
  },
  {
    id: 404,
    category: "Interaction Design",
    difficulty: "Hard",
    question: "What does this specific flowchart symbol (parallelogram) represent?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><path d="M30 30 L90 30 L70 70 L10 70 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>`,
    options: [
      "A printed physical document or report generation",
      "Data Input or Output (e.g., entering information)",
      "A decision point where the flow distinctly branches",
      "The definitive start or end of the entire process"
    ],
    answerIndex: 1,
    explanation: "A parallelogram represents data input or output operations.",
    example: "A parallelogram indicating 'User types in their email address' or 'System displays error message'."
  },
  {
    id: 405,
    category: "Information Architecture",
    difficulty: "Medium",
    question: "In system diagrams, what does this cylinder shape represent?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><path d="M20 30 C20 15, 80 15, 80 30 L80 70 C80 85, 20 85, 20 70 Z" fill="none" stroke="currentColor" stroke-width="4"/><path d="M20 30 C20 45, 80 45, 80 30" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
    options: [
      "A decision point where the flow distinctly branches",
      "Data Input or Output (e.g., entering information)",
      "A database, data storage, or server component",
      "A printed physical document or report generation"
    ],
    answerIndex: 2,
    explanation: "The cylinder is the universal symbol for a database or persistent data storage.",
    example: "A flow showing user registration ending with an arrow pointing to a cylinder labeled 'User DB'."
  },
  {
    id: 406,
    category: "Gestalt",
    difficulty: "Easy",
    question: "Which Gestalt principle is demonstrated by this arrangement of dots?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80">
      <circle cx="20" cy="20" r="5" fill="currentColor"/><circle cx="20" cy="50" r="5" fill="currentColor"/><circle cx="20" cy="80" r="5" fill="currentColor"/>
      <circle cx="50" cy="20" r="5" fill="currentColor"/><circle cx="50" cy="50" r="5" fill="currentColor"/><circle cx="50" cy="80" r="5" fill="currentColor"/>
      <circle cx="80" cy="20" r="5" fill="currentColor"/><circle cx="80" cy="50" r="5" fill="currentColor"/><circle cx="80" cy="80" r="5" fill="currentColor"/>
    </svg>`,
    options: [
      "The Principle of Closure (completing broken shapes)",
      "The Principle of Proximity (grouping close objects)",
      "The Principle of Continuity (following smooth lines)",
      "The Principle of Figure/Ground (background vs foreground)"
    ],
    answerIndex: 1,
    explanation: "Proximity states that objects that are near, or proximate to each other, tend to be grouped together.",
    example: "Placing a caption directly beneath an image so they are perceived as a single unit."
  },
  {
    id: 407,
    category: "Prototyping",
    difficulty: "Medium",
    question: "In a low-fidelity wireframe, what does a rectangle with a prominent 'X' drawn through it represent?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><rect x="10" y="20" width="80" height="60" fill="none" stroke="currentColor" stroke-width="4"/><line x1="10" y1="20" x2="90" y2="80" stroke="currentColor" stroke-width="4"/><line x1="90" y1="20" x2="10" y2="80" stroke="currentColor" stroke-width="4"/></svg>`,
    options: [
      "A critical system error or missing required data",
      "An image placeholder or graphical illustration",
      "A button that will specifically delete user data",
      "A disabled or currently unclickable UI element"
    ],
    answerIndex: 1,
    explanation: "In wireframing, an 'X' through a box is the standard convention for an image placeholder.",
    example: "Sketching a hero section and using a large crossed box to indicate where the background photo will go."
  },
  {
    id: 408,
    category: "Prototyping",
    difficulty: "Easy",
    question: "In a standard wireframe, what do multiple horizontal lines typically represent?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><line x1="10" y1="30" x2="90" y2="30" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="10" y1="70" x2="60" y2="70" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
    options: [
      "A placeholder for a block of readable text content",
      "A horizontal carousel or swipeable image gallery",
      "A complex data table with multiple rows and columns",
      "A series of distinct horizontal separator divider lines"
    ],
    answerIndex: 0,
    explanation: "Horizontal scribbles or lines are a quick way to indicate a paragraph of text in a low-fidelity wireframe.",
    example: "Drawing lines under a headline to represent the body copy of an article."
  },
  {
    id: 409,
    category: "UI Components",
    difficulty: "Easy",
    question: "What UI component is commonly represented by this icon (three horizontal lines)?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" stroke-width="8" stroke-linecap="round"/><line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="8" stroke-linecap="round"/><line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>`,
    options: [
      "A 'Hamburger' menu, typically opening a navigation drawer",
      "A 'Kebab' menu, typically opening additional specific options",
      "A 'Meatball' menu, typically opening additional specific options",
      "A sort or filter toggle, typically reordering list content"
    ],
    answerIndex: 0,
    explanation: "The hamburger icon is widely used to toggle a hidden navigation menu, especially on mobile devices.",
    example: "Tapping the three lines in the top left corner of an app to reveal the main navigation links."
  },
  {
    id: 410,
    category: "Interaction Design",
    difficulty: "Hard",
    question: "In a flow diagram, what does a dashed or dotted arrow usually imply (compared to a solid arrow)?",
    visual: `<svg viewBox="0 0 100 100" width="80" height="80"><line x1="10" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="4" stroke-dasharray="8 6"/><polygon points="80,40 100,50 80,60" fill="currentColor"/></svg>`,
    options: [
      "An asynchronous action, optional path, or background data transfer",
      "The primary, most frequently utilized 'happy path' for the active user",
      "A critical, mandatory step that absolutely must be completed perfectly",
      "A direct physical user interaction like forcefully clicking a mouse button"
    ],
    answerIndex: 0,
    explanation: "While solid lines usually show direct user progression, dashed lines often represent alternative flows, optional steps, system-level background processes, or returning data.",
    example: "A solid line shows a user submitting a form, and a dashed line shows the server returning a success message."
  }
];
