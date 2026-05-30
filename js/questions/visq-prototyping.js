// Prototyping (4 visual questions)
const VISQ_PROTOTYPING = [
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
  }
];