// Information Architecture (2 visual questions)
const VISQ_INFORMATION_ARCHITECTURE = [
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
  }
];