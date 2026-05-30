// Heuristics (8 questions)
const UX_HEURISTICS = [
{
    id: 28,
    category: "Heuristics",
    difficulty: "Medium",
    question: "In Jakob Nielsen's Usability Heuristics, what does 'Recognition over Recall' mean?",
    options: [
      "Users should recognize the brand logo immediately on every page",
      "Minimize the user's memory load by making options, actions, and elements visible rather than making them remember information",
      "System alerts should only be visible for 3 seconds",
      "Experts should recognize shortcut options without reading descriptions"
    ],
    answerIndex: 1,
    explanation: "It is much easier for a user to choose from visible options than to recall items from memory.",
    example: "Displaying a list of 'Recent Files' or search suggestions instead of forcing users to type full filenames."
  },
{
    id: 29,
    category: "Heuristics",
    difficulty: "Medium",
    question: "What is an example of the 'Visibility of System Status' heuristic?",
    options: [
      "Showing the company's annual financial report on the landing page",
      "Providing a progress bar and loading spinner when a user uploads a large PDF",
      "Ensuring all buttons have custom colorful hover states",
      "Allowing users to edit their profile details without saving"
    ],
    answerIndex: 1,
    explanation: "Systems should always communicate what is happening in the background through appropriate, timely feedback.",
    example: "Displaying 'Uploading files (45%)...' let's users know the system is active and responsive."
  },
{
    id: 30,
    category: "Heuristics",
    difficulty: "Medium",
    question: "What does the heuristic 'Error Prevention' recommend?",
    options: [
      "Writing extremely friendly error screens with cute illustrations after a failure",
      "Designing interfaces carefully to prevent errors from happening in the first place",
      "Automatically deleting incorrect data entered by the user",
      "Locking accounts after a single failed login attempt"
    ],
    answerIndex: 1,
    explanation: "Preventing errors before they occur is much better than presenting users with helpful error messages later.",
    example: "Disabling a 'Submit' button until all required form fields have valid characters."
  },
{
    id: 42,
    category: "Heuristics",
    difficulty: "Easy",
    question: "What does Nielsen's heuristic 'User Control and Freedom' mean?",
    options: [
      "Users should be given administrator privileges in all systems",
      "Users should be able to undo or exit unintended states easily without going through a long process",
      "Users must confirm every action before the system processes it",
      "The design should prevent users from accessing advanced settings"
    ],
    answerIndex: 1,
    explanation: "Providing undo, redo, cancel, and back controls gives users a feeling of control and safety, preventing frustration.",
    example: "Gmail's 'Undo Send' feature lets users cancel a sent email within 5–30 seconds."
  },
{
    id: 43,
    category: "Heuristics",
    difficulty: "Medium",
    question: "What does the heuristic 'Consistency and Standards' address?",
    options: [
      "All UI components must use identical hex color codes",
      "Users should not have to wonder whether different words, situations, or actions mean the same thing — follow platform conventions",
      "Every page must have the same grid layout and spacing",
      "Design systems must be documented in Figma at all times"
    ],
    answerIndex: 1,
    explanation: "Consistent use of language, layout, and interactions reduces cognitive load and learning time across the product.",
    example: "Using 'Save' everywhere instead of alternating between 'Save', 'Submit', and 'Confirm' on different screens."
  },
{
    id: 44,
    category: "Heuristics",
    difficulty: "Medium",
    question: "What does 'Aesthetic and Minimalist Design' mean as a usability heuristic?",
    options: [
      "Only use one font and one color in the entire application",
      "Interfaces should not contain information that is irrelevant or rarely needed, as it competes with relevant content",
      "The product should win design awards to be considered minimal",
      "Remove all text from interfaces and use only icons"
    ],
    answerIndex: 1,
    explanation: "Every unit of irrelevant information competes with relevant information and dilutes the relative visibility of key content.",
    example: "Removing promotional banners, legal disclaimers, and unused menu items from a product configuration screen."
  },
{
    id: 45,
    category: "Heuristics",
    difficulty: "Hard",
    question: "What does the heuristic 'Flexibility and Efficiency of Use' promote?",
    options: [
      "The app should run equally fast on all devices regardless of processing power",
      "Accelerators (hidden from novices) that allow expert users to speed up interactions",
      "All users must receive the same onboarding experience irrespective of skill level",
      "All API calls should be batched to avoid network overhead"
    ],
    answerIndex: 1,
    explanation: "Design for both novices and experts: novices use guided flows while experts use keyboard shortcuts, gestures, and saved presets.",
    example: "Photoshop showing keyboard shortcut labels next to menu items so experts can memorize them over time."
  },
{
    id: 46,
    category: "Heuristics",
    difficulty: "Medium",
    question: "Which Nielsen heuristic is violated when a button disappears during a long upload process?",
    options: [
      "Match Between System and the Real World",
      "Visibility of System Status",
      "Help and Documentation",
      "Flexibility and Efficiency of Use"
    ],
    answerIndex: 1,
    explanation: "Users need to know what the system is doing at all times — disappearing UI with no feedback violates the Visibility of System Status heuristic.",
    example: "Showing a progress bar with percentage complete while a file uploads instead of freezing the interface."
  }
];
