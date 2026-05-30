// Gestalt (5 questions)
const UX_GESTALT = [
{
    id: 27,
    category: "Gestalt",
    difficulty: "Easy",
    question: "What does the Gestalt principle of 'Closure' describe?",
    options: [
      "Closing an application returns users to the desktop environment",
      "The mind automatically fills in missing parts of a shape to perceive a complete whole",
      "Placing boundaries around elements to group them together",
      "Structuring websites with a header and footer grid"
    ],
    answerIndex: 1,
    explanation: "The human brain hates incomplete figures and will mentally fill in gaps to recognize a full shape.",
    example: "A circular loader with missing gaps that the brain still interprets as a single rotating ring."
  },
{
    id: 38,
    category: "Gestalt",
    difficulty: "Easy",
    question: "What does the Gestalt principle of 'Similarity' state?",
    options: [
      "Elements that are close together are grouped as related",
      "Elements that share visual characteristics (color, shape, size) are perceived as related",
      "The mind completes incomplete shapes automatically",
      "Users always look at the largest element first"
    ],
    answerIndex: 1,
    explanation: "Similarity makes it easy to group related items visually — matching color or shape implies a shared relationship or function.",
    example: "All navigation links sharing the same font weight and color signal they are in the same category."
  },
{
    id: 39,
    category: "Gestalt",
    difficulty: "Medium",
    question: "What does the Gestalt principle of 'Figure-Ground' describe?",
    options: [
      "The ability to distinguish between foreground content and its background",
      "The rule that foreground text must be white on dark backgrounds",
      "Placing the most important button at the bottom of a mobile screen",
      "Using a grid to align all elements to a baseline"
    ],
    answerIndex: 1,
    explanation: "Figure-ground perception is the visual ability to separate an object (figure) from its surroundings (ground). Good design keeps the two distinct.",
    example: "A modal dialog darkens the page behind it to clearly separate the foreground modal from the background content."
  },
{
    id: 40,
    category: "Gestalt",
    difficulty: "Medium",
    question: "What is the Gestalt principle of 'Continuity'?",
    options: [
      "Users will scroll endlessly on infinite-scroll pages",
      "The eye naturally follows paths, curves, and lines, tending to prefer continuous smooth paths over abrupt changes",
      "Design elements should repeat across every page for brand consistency",
      "Visual hierarchy should be maintained from desktop to mobile"
    ],
    answerIndex: 1,
    explanation: "Continuity guides users' eyes along a visual path — lines and curves naturally lead attention from one element to the next.",
    example: "A progress indicator with a connecting line guides users through a multi-step checkout process sequentially."
  },
{
    id: 41,
    category: "Gestalt",
    difficulty: "Hard",
    question: "What does the Gestalt principle of 'Common Fate' describe?",
    options: [
      "Elements that share the same color are perceived to serve the same purpose",
      "Elements moving in the same direction at the same time are perceived as a group",
      "All elements on a page should animate at the same speed",
      "Users prefer predictable outcomes in interactive designs"
    ],
    answerIndex: 1,
    explanation: "Common Fate groups elements by their shared motion or direction — often used in animation and interactive components.",
    example: "A row of icons that all shift left together when a sidebar opens signals they are all part of the same group."
  }
];
