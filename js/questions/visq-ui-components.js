// UI Components (20 visual questions)
const VISQ_UI_COMPONENTS = [
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