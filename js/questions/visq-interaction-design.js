// Interaction Design (9 visual questions)
const VISQ_INTERACTION_DESIGN = [
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
  },
{
    id: 421,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "In a flowchart, what does a document shape (wavy bottom edge) represent?",
    visual: `<svg viewBox="0 0 100 100"><path d="M20 10 L80 10 L80 70 C 65 90, 35 50, 20 70 Z" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
    options: [
      "Decision point",
      "Document / Report",
      "Database",
      "Start/End"
],
    answerIndex: 1,
    explanation: "This represents a physical document or digital report.",
    example: "Pointing to a step labeled 'Print Receipt'."
  },
{
    id: 424,
    category: "Interaction Design",
    difficulty: "Hard",
    question: "In flowcharts, what does a small circle connecting arrows represent?",
    visual: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="35" y2="50" stroke="currentColor" stroke-width="4"/><polygon points="35,45 45,50 35,55" fill="currentColor"/><circle cx="55" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="4"/><line x1="65" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="4"/><polygon points="80,45 90,50 80,55" fill="currentColor"/></svg>`,
    options: [
      "Decision point",
      "On-page Connector",
      "Database",
      "Start/End"
],
    answerIndex: 1,
    explanation: "An 'On-Page Connector' shows that the flow jumps to another point on the same page.",
    example: "An arrow points to a circle labeled 'A'."
  },
{
    id: 432,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "In flowcharting, what does a cylinder represent?",
    visual: `<svg viewBox="0 0 100 100"><path d="M20 30 L20 70 C 20 90, 80 90, 80 70 L80 30 C 80 50, 20 50, 20 30 Z" fill="none" stroke="currentColor" stroke-width="4"/><path d="M20 30 C 20 10, 80 10, 80 30" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
    options: [
      "Document",
      "Decision point",
      "Database",
      "Start/End"
],
    answerIndex: 2,
    explanation: "A cylinder is the symbol for a database or persistent data storage.",
    example: "User data flowing into a 'Cloud Database'."
  },
{
    id: 438,
    category: "Interaction Design",
    difficulty: "Hard",
    question: "In task flows, what does a dashed-line box wrapping several steps represent?",
    visual: `<svg viewBox="0 0 150 100"><rect x="10" y="10" width="130" height="80" fill="none" stroke="currentColor" stroke-dasharray="4"/><rect x="25" y="30" width="40" height="40" fill="currentColor"/><line x1="75" y1="50" x2="95" y2="50" stroke="currentColor"/><rect x="105" y="30" width="20" height="40" fill="currentColor"/></svg>`,
    options: [
      "Database",
      "System Boundary",
      "User Decision",
      "Error State"
],
    answerIndex: 1,
    explanation: "A dashed box indicates a 'System Boundary', showing actions within a subsystem.",
    example: "Wrapping Stripe Gateway steps."
  }
];