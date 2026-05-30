// Gestalt (5 visual questions)
const VISQ_GESTALT = [
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
  }
];