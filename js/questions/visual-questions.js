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
,
{
    id: 411,
    category: "UI Components",
    difficulty: "Medium",
    question: "What UI component is this (a pop-up at the bottom of the screen)?",
    visual: `<svg viewBox="0 0 200 100"><rect x="10" y="10" width="180" height="80" fill="none" stroke="currentColor" rx="4"/><rect x="20" y="65" width="160" height="20" fill="currentColor" rx="4"/><text x="30" y="79" font-family="sans-serif" font-size="10" fill="var(--bg)">Item archived</text><text x="140" y="79" font-family="sans-serif" font-size="10" fill="#a78bfa" font-weight="bold">UNDO</text></svg>`,
    options: [
      "A Modal Dialog",
      "A Snackbar / Toast",
      "A Bottom Navigation",
      "A Tooltip"
],
    answerIndex: 1,
    explanation: "A Snackbar briefly informs users about a process that an app has performed.",
    example: "Seeing 'Message sent' at the bottom of the screen."
  },
  {
    id: 412,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is this sequential UI navigation element called?",
    visual: `<svg viewBox="0 0 200 50"><text x="10" y="30" font-family="sans-serif" font-size="14" fill="currentColor">Home</text><path d="M55 20 L62 25 L55 30" fill="none" stroke="currentColor"/><text x="70" y="30" font-family="sans-serif" font-size="14" fill="currentColor">Electronics</text><path d="M150 20 L157 25 L150 30" fill="none" stroke="currentColor"/><text x="165" y="30" font-family="sans-serif" font-size="14" fill="currentColor" font-weight="bold">TVs</text></svg>`,
    options: [
      "Breadcrumbs",
      "Stepper",
      "Pagination",
      "Carousel"
],
    answerIndex: 0,
    explanation: "Breadcrumbs indicate the current page's location within a navigational hierarchy.",
    example: "Navigating an e-commerce site: 'Clothing > Men > Shoes'."
  },
  {
    id: 413,
    category: "UI Components",
    difficulty: "Medium",
    question: "What does this interactive element represent?",
    visual: `<svg viewBox="0 0 100 50"><rect x="10" y="10" width="80" height="30" rx="15" fill="none" stroke="currentColor"/><rect x="50" y="14" width="36" height="22" rx="11" fill="currentColor"/></svg>`,
    options: [
      "A Slider",
      "A Pill Toggle / Switch",
      "A Progress Bar",
      "A Checkbox"
],
    answerIndex: 1,
    explanation: "A Switch toggles the state of a single setting on or off.",
    example: "Turning on 'Airplane Mode'."
  },
  {
    id: 414,
    category: "UI Components",
    difficulty: "Medium",
    question: "What is this UI component, typically used to select exactly one option from a visible list?",
    visual: `<svg viewBox="0 0 100 80"><circle cx="20" cy="20" r="8" fill="none" stroke="currentColor"/><line x1="40" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="4"/><circle cx="20" cy="60" r="8" fill="none" stroke="currentColor"/><circle cx="20" cy="60" r="4" fill="currentColor"/><line x1="40" y1="60" x2="80" y2="60" stroke="currentColor" stroke-width="4"/></svg>`,
    options: [
      "Checkboxes",
      "Radio Buttons",
      "A Dropdown menu",
      "A Toggle group"
],
    answerIndex: 1,
    explanation: "Radio buttons are used when there is a list of mutually exclusive options.",
    example: "Selecting your gender."
  },
  {
    id: 415,
    category: "UI Components",
    difficulty: "Hard",
    question: "What is this interactive UI pattern that condenses long content into expandable headers?",
    visual: `<svg viewBox="0 0 150 120"><rect x="10" y="10" width="130" height="25" fill="none" stroke="currentColor" rx="4"/><path d="M125 18 L130 25 L135 18" fill="none" stroke="currentColor"/><rect x="10" y="45" width="130" height="25" fill="currentColor" rx="4"/><path d="M125 62 L130 55 L135 62" fill="none" stroke="var(--bg)"/><rect x="10" y="70" width="130" height="40" fill="none" stroke="currentColor" stroke-dasharray="4" rx="4"/></svg>`,
    options: [
      "Breadcrumbs",
      "Accordion",
      "Dropdown Menu",
      "Segmented Control"
],
    answerIndex: 1,
    explanation: "An accordion is a vertically stacked list of headers that click to reveal associated content.",
    example: "A FAQ page."
  },
  {
    id: 416,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is this component, commonly used to represent a user profile?",
    visual: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor"/><circle cx="50" cy="40" r="15" fill="currentColor"/><path d="M25 80 C25 60, 75 60, 75 80" fill="currentColor"/></svg>`,
    options: [
      "A Badge",
      "An Avatar",
      "A FAB",
      "A Tooltip"
],
    answerIndex: 1,
    explanation: "An avatar is a graphical representation of a user.",
    example: "Profile picture on Twitter."
  },
  {
    id: 417,
    category: "UI Components",
    difficulty: "Medium",
    question: "In Material Design, what is this primary action component?",
    visual: `<svg viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor"/><circle cx="80" cy="80" r="16" fill="currentColor"/><path d="M72 80 L88 80 M80 72 L80 88" stroke="var(--bg)" stroke-width="4"/></svg>`,
    options: [
      "Badge",
      "Floating Action Button (FAB)",
      "Tooltip",
      "Stepper"
],
    answerIndex: 1,
    explanation: "A FAB performs the primary, or most common, action on a screen.",
    example: "The '+' button in Google Keep."
  },
  {
    id: 418,
    category: "UI Components",
    difficulty: "Medium",
    question: "What UI component is often used to display distinct filter attributes or categories?",
    visual: `<svg viewBox="0 0 150 50"><rect x="10" y="10" width="50" height="24" rx="12" fill="none" stroke="currentColor"/><text x="35" y="26" font-family="sans-serif" font-size="10" fill="currentColor" text-anchor="middle">Design</text><rect x="70" y="10" width="40" height="24" rx="12" fill="currentColor"/><text x="90" y="26" font-family="sans-serif" font-size="10" fill="var(--bg)" text-anchor="middle">UX</text></svg>`,
    options: [
      "Breadcrumbs",
      "Chips (Pills)",
      "Progress Bar",
      "Dropdown Menu"
],
    answerIndex: 1,
    explanation: "Chips are compact elements that represent an input, attribute, or action.",
    example: "Filtering by 'Vegan' and 'Gluten-Free'."
  },
  {
    id: 419,
    category: "UI Components",
    difficulty: "Hard",
    question: "What is this placeholder UI state called, typically displayed while data is loading?",
    visual: `<svg viewBox="0 0 150 100"><rect x="10" y="10" width="40" height="40" rx="4" fill="currentColor" opacity="0.2"/><rect x="60" y="15" width="80" height="10" rx="2" fill="currentColor" opacity="0.2"/><rect x="60" y="35" width="60" height="10" rx="2" fill="currentColor" opacity="0.2"/><rect x="10" y="65" width="130" height="10" rx="2" fill="currentColor" opacity="0.2"/></svg>`,
    options: [
      "Toggle Group",
      "Skeleton Screen",
      "Card Layout",
      "Data Table"
],
    answerIndex: 1,
    explanation: "Skeleton screens are blank versions of a page into which information is gradually loaded.",
    example: "Grey boxes on YouTube before videos load."
  },
  {
    id: 420,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is this UI control, used to select a precise value from a range?",
    visual: `<svg viewBox="0 0 150 50"><line x1="10" y1="25" x2="140" y2="25" stroke="currentColor" stroke-width="4" opacity="0.3"/><line x1="10" y1="25" x2="80" y2="25" stroke="currentColor" stroke-width="4"/><circle cx="80" cy="25" r="8" fill="currentColor"/></svg>`,
    options: [
      "Slider",
      "Toggle switch",
      "Progress Bar",
      "Stepper"
],
    answerIndex: 0,
    explanation: "Sliders allow users to make selections from a range of values.",
    example: "Adjusting the volume."
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
    id: 422,
    category: "Gestalt",
    difficulty: "Medium",
    question: "Which Gestalt principle is demonstrated here (our mind completing the triangle)?",
    visual: `<svg viewBox="0 0 100 100"><path d="M50 10 L80 40" stroke="currentColor" stroke-width="4" fill="none"/><path d="M20 40 L50 10" stroke="currentColor" stroke-width="4" fill="none"/><path d="M30 80 L70 80" stroke="currentColor" stroke-width="4" fill="none"/></svg>`,
    options: [
      "Proximity",
      "Closure",
      "Continuity",
      "Symmetry"
],
    answerIndex: 1,
    explanation: "Closure occurs when an object is incomplete but people intuitively perceive the whole.",
    example: "The WWF Panda logo."
  },
  {
    id: 423,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is this small circular indicator typically used for?",
    visual: `<svg viewBox="0 0 100 100"><path d="M20 70 L30 30 C 30 10, 70 10, 70 30 L80 70 Z" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="80" cy="20" r="15" fill="#ff5050"/><text x="80" y="25" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">3</text></svg>`,
    options: [
      "Floating Action Button",
      "Badge",
      "Tooltip",
      "Checkbox"
],
    answerIndex: 1,
    explanation: "A badge is a small visual indicator to draw attention to new items.",
    example: "A red '3' indicating unread notifications."
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
    id: 425,
    category: "UI Components",
    difficulty: "Medium",
    question: "What is this UI component, designed to guide users through a sequence of steps?",
    visual: `<svg viewBox="0 0 200 50"><circle cx="20" cy="25" r="10" fill="currentColor"/><line x1="30" y1="25" x2="90" y2="25" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="25" r="10" fill="none" stroke="currentColor" stroke-width="2"/><line x1="110" y1="25" x2="170" y2="25" stroke="currentColor" stroke-dasharray="4"/><circle cx="180" cy="25" r="10" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
    options: [
      "Slider",
      "Stepper",
      "Carousel",
      "Toggle switch"
],
    answerIndex: 1,
    explanation: "Steppers display progress through a sequence of logical steps.",
    example: "A checkout process."
  },
  {
    id: 426,
    category: "Gestalt",
    difficulty: "Medium",
    question: "Which Gestalt principle dictates that elements within the same boundary are perceived as a group?",
    visual: `<svg viewBox="0 0 150 100"><rect x="10" y="10" width="60" height="80" rx="8" fill="currentColor" opacity="0.1" stroke="currentColor"/><circle cx="40" cy="35" r="10" fill="currentColor"/><circle cx="40" cy="65" r="10" fill="currentColor"/></svg>`,
    options: [
      "Continuity",
      "Common Region",
      "Symmetry",
      "Focal Point"
],
    answerIndex: 1,
    explanation: "The Principle of Common Region says elements are grouped if they share a clearly defined boundary.",
    example: "Putting a border behind a 'Pricing Card'."
  },
  {
    id: 427,
    category: "UI Components",
    difficulty: "Medium",
    question: "What is this space-saving contextual menu known as?",
    visual: `<svg viewBox="0 0 100 100"><circle cx="50" cy="20" r="5" fill="currentColor"/><circle cx="50" cy="50" r="5" fill="currentColor"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`,
    options: [
      "'Hamburger' menu",
      "'Kebab' menu",
      "Slider",
      "Stepper"
],
    answerIndex: 1,
    explanation: "The three vertical dots (kebab menu) often open an overflow menu.",
    example: "Clicking three dots on Spotify to 'Add to Playlist'."
  },
  {
    id: 428,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is the primary function of a Tooltip?",
    visual: `<svg viewBox="0 0 150 100"><circle cx="75" cy="70" r="12" fill="none" stroke="currentColor"/><text x="75" y="75" font-family="sans-serif" font-size="14" fill="currentColor" text-anchor="middle" font-weight="bold">i</text><rect x="35" y="10" width="80" height="30" rx="4" fill="currentColor"/><polygon points="70,40 80,40 75,48" fill="currentColor"/><text x="75" y="28" font-family="sans-serif" font-size="10" fill="var(--bg)" text-anchor="middle">More info</text></svg>`,
    options: [
      "Interrupt the user with an error",
      "Provide a brief text label on hover",
      "Guide the user through checkout",
      "Replace standard menus"
],
    answerIndex: 1,
    explanation: "Tooltips display informative text when users hover over an element.",
    example: "Hovering over an icon and seeing 'Download PDF'."
  },
  {
    id: 429,
    category: "Prototyping",
    difficulty: "Easy",
    question: "In wireframing, what does a blank rectangle with a small triangle pointing down indicate?",
    visual: `<svg viewBox="0 0 100 50"><rect x="10" y="10" width="80" height="30" fill="none" stroke="currentColor"/><polygon points="75,20 85,20 80,28" fill="currentColor"/></svg>`,
    options: [
      "Checkbox",
      "Dropdown Menu",
      "Slider",
      "Stepper"
],
    answerIndex: 1,
    explanation: "A box with a downward caret is the universal wireframe symbol for a dropdown menu.",
    example: "A box labeled 'Country' with an arrow."
  },
  {
    id: 430,
    category: "UI Components",
    difficulty: "Medium",
    question: "What is this structural UI container called?",
    visual: `<svg viewBox="0 0 100 120"><rect x="10" y="10" width="80" height="100" rx="8" fill="none" stroke="currentColor"/><rect x="10" y="10" width="80" height="40" rx="8" fill="currentColor" opacity="0.2"/><circle cx="25" cy="65" r="8" fill="currentColor"/><line x1="40" y1="65" x2="80" y2="65" stroke="currentColor"/><line x1="15" y1="90" x2="60" y2="90" stroke="currentColor"/></svg>`,
    options: [
      "Carousel",
      "Card",
      "Stepper",
      "Toggle"
],
    answerIndex: 1,
    explanation: "Cards contain content and actions about a single subject.",
    example: "A recipe app where each recipe is inside a distinct white box."
  },
  {
    id: 431,
    category: "Gestalt",
    difficulty: "Medium",
    question: "Which Gestalt principle explains why we perceive continuous wavy paths?",
    visual: `<svg viewBox="0 0 150 50"><path d="M10 25 C 30 5, 50 45, 70 25" fill="none" stroke="currentColor" stroke-width="4"/><path d="M80 25 C 100 5, 120 45, 140 25" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
    options: [
      "Closure",
      "Continuity",
      "Similarity",
      "Proximity"
],
    answerIndex: 1,
    explanation: "Continuity states that elements arranged on a line or curve are perceived to be related.",
    example: "A curved dotted line."
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
    id: 433,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is this UI pattern used to group primary navigation items at the bottom of a screen?",
    visual: `<svg viewBox="0 0 200 50"><rect x="10" y="10" width="180" height="30" fill="currentColor" opacity="0.1" rx="4"/><circle cx="40" cy="25" r="8" fill="currentColor"/><circle cx="100" cy="25" r="8" fill="none" stroke="currentColor"/><circle cx="160" cy="25" r="8" fill="none" stroke="currentColor"/></svg>`,
    options: [
      "Carousel",
      "Bottom Navigation",
      "Accordion",
      "Slider"
],
    answerIndex: 1,
    explanation: "A Bottom Navigation bar allows movement between primary destinations.",
    example: "The bottom bar on Instagram."
  },
  {
    id: 434,
    category: "Prototyping",
    difficulty: "Medium",
    question: "In wireframes, what does a large box containing a smaller 'play' triangle typically represent?",
    visual: `<svg viewBox="0 0 100 80"><rect x="10" y="10" width="80" height="60" fill="none" stroke="currentColor"/><circle cx="50" cy="40" r="15" fill="none" stroke="currentColor"/><polygon points="45,32 45,48 58,40" fill="currentColor"/></svg>`,
    options: [
      "Image placeholder",
      "Video Player",
      "Map",
      "Error box"
],
    answerIndex: 1,
    explanation: "A box with a play button is the standard placeholder for video content.",
    example: "Wireframing a YouTube video."
  },
  {
    id: 435,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is this UI element, typically used to split content into separate views?",
    visual: `<svg viewBox="0 0 150 50"><text x="25" y="25" font-family="sans-serif" font-size="12" fill="currentColor" text-anchor="middle" font-weight="bold">Tab 1</text><text x="75" y="25" font-family="sans-serif" font-size="12" fill="var(--muted)" text-anchor="middle">Tab 2</text><text x="125" y="25" font-family="sans-serif" font-size="12" fill="var(--muted)" text-anchor="middle">Tab 3</text><line x1="10" y1="35" x2="140" y2="35" stroke="currentColor" opacity="0.3"/><line x1="10" y1="35" x2="40" y2="35" stroke="currentColor" stroke-width="3"/></svg>`,
    options: [
      "Stepper",
      "Breadcrumbs",
      "Navigation Tabs",
      "Carousel"
],
    answerIndex: 2,
    explanation: "Tabs switch between different views or functional aspects.",
    example: "Switching between 'Following' and 'For You' on X."
  },
  {
    id: 436,
    category: "Information Architecture",
    difficulty: "Medium",
    question: "In a site map, what does a structure that resembles a tree with branches indicate?",
    visual: `<svg viewBox="0 0 100 100"><rect x="35" y="10" width="30" height="20" fill="none" stroke="currentColor"/><line x1="50" y1="30" x2="50" y2="50" stroke="currentColor"/><line x1="20" y1="50" x2="80" y2="50" stroke="currentColor"/><line x1="20" y1="50" x2="20" y2="60" stroke="currentColor"/><line x1="50" y1="50" x2="50" y2="60" stroke="currentColor"/><line x1="80" y1="50" x2="80" y2="60" stroke="currentColor"/><rect x="10" y="60" width="20" height="15" fill="currentColor"/><rect x="40" y="60" width="20" height="15" fill="currentColor"/><rect x="70" y="60" width="20" height="15" fill="currentColor"/></svg>`,
    options: [
      "Sequential flow",
      "Database",
      "Hierarchical structure",
      "Matrix"
],
    answerIndex: 2,
    explanation: "A tree structure shows how sub-pages are grouped under parent pages.",
    example: "Home page branching down."
  },
  {
    id: 437,
    category: "Gestalt",
    difficulty: "Easy",
    question: "Which Gestalt principle explains why we view these lines as distinct vertical columns?",
    visual: `<svg viewBox="0 0 100 100"><circle cx="20" cy="20" r="4" fill="currentColor"/><circle cx="20" cy="50" r="4" fill="currentColor"/><circle cx="20" cy="80" r="4" fill="currentColor"/><circle cx="40" cy="20" r="4" fill="currentColor"/><circle cx="40" cy="50" r="4" fill="currentColor"/><circle cx="40" cy="80" r="4" fill="currentColor"/></svg>`,
    options: [
      "Closure",
      "Proximity",
      "Continuity",
      "Symmetry"
],
    answerIndex: 1,
    explanation: "Because the dots are grouped closer vertically, Proximity causes us to see vertical columns.",
    example: "Placing labels near inputs."
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
  },
  {
    id: 439,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is this graphical element called, used to provide a visual cue or selection?",
    visual: `<svg viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" stroke-width="4" rx="4"/><path d="M30 50 L45 65 L70 35" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
    options: [
      "Radio Button",
      "Toggle",
      "Checkbox",
      "Slider"
],
    answerIndex: 2,
    explanation: "A Checkbox allows the user to select one or more items from a set.",
    example: "Checking 'I agree'."
  },
  {
    id: 440,
    category: "UI Components",
    difficulty: "Medium",
    question: "What does this UI element represent (a box expanding downwards)?",
    visual: `<svg viewBox="0 0 150 100"><rect x="10" y="10" width="130" height="25" fill="none" stroke="currentColor" rx="2"/><polygon points="125,20 135,20 130,28" fill="currentColor"/><rect x="10" y="40" width="130" height="50" fill="none" stroke="currentColor" rx="2"/><line x1="10" y1="65" x2="140" y2="65" stroke="currentColor" opacity="0.5"/><text x="20" y="58" font-family="sans-serif" font-size="10" fill="currentColor">Option A</text><text x="20" y="82" font-family="sans-serif" font-size="10" fill="currentColor">Option B</text></svg>`,
    options: [
      "Tooltip",
      "Dropdown Menu",
      "Card",
      "Snackbar"
],
    answerIndex: 1,
    explanation: "A Dropdown Menu allows users to choose one value from a list.",
    example: "Selecting a country."
  }
];
