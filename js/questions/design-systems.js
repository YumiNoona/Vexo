// Design Systems (6 questions)
const UX_DESIGN_SYSTEMS = [
{
    id: 87,
    category: "Design Systems",
    difficulty: "Medium",
    question: "What is an 'Atomic Design' system?",
    options: [
      "A design approach developed using nuclear physics principles for data visualization",
      "A methodology by Brad Frost that builds interfaces from Atoms → Molecules → Organisms → Templates → Pages",
      "A CSS naming convention that uses atomic class utilities like TailwindCSS",
      "A system of design tokens stored in JSON and synced to code automatically"
    ],
    answerIndex: 1,
    explanation: "Atomic Design creates a shared language between design and development by breaking interfaces into reusable, compositional layers.",
    example: "A Button (atom) + Label (atom) = Form Field (molecule) → Login Form (organism) → Login Page Template."
  },
{
    id: 88,
    category: "Design Systems",
    difficulty: "Easy",
    question: "What is a 'Design Token' in a design system?",
    options: [
      "A physical token given to designers when they access the Figma organization",
      "A named variable that stores a design decision (color, spacing, font size) and can be shared across design and code",
      "A payment method used to purchase premium UI component libraries",
      "A code review checklist for front-end developers"
    ],
    answerIndex: 1,
    explanation: "Design tokens are the bridge between design and engineering — they ensure that changing one token updates the value across all platforms.",
    example: "'--color-primary: #6C63FF' is a design token. Changing it from purple to blue instantly updates all primary buttons, links, and headers."
  },
{
    id: 89,
    category: "Design Systems",
    difficulty: "Hard",
    question: "What is the main benefit of a 'Component Library' in a design system?",
    options: [
      "It reduces the project budget by removing the need for UX research",
      "It ensures consistency and speeds up design and development by providing reusable, tested, and documented UI components",
      "It automatically generates code from Figma designs with no developer input",
      "It replaces the need for a visual designer on product teams"
    ],
    answerIndex: 1,
    explanation: "Component libraries prevent teams from rebuilding the same buttons, forms, and cards repeatedly — ensuring visual and behavioral consistency at scale.",
    example: "Using a shared button component means every team's button looks, behaves, and is accessible in the same way."
  },
{
    id: 151,
    category: "Design Systems",
    difficulty: "Hard",
    question: "In Atomic Design, what is a 'Molecule'?",
    options: [
      "The smallest possible UI element, like a single color code",
      "A group of UI atoms bonded together to form a relatively simple, functional unit",
      "A fully designed page template",
      "A complex widget like a data table with pagination"
    ],
    answerIndex: 1,
    explanation: "Molecules take simple atoms (labels, inputs, buttons) and combine them into a reusable component with a specific purpose.",
    example: "Combining a text input (atom), a label (atom), and a search icon (atom) to create a 'Search Bar' (molecule)."
  },
{
    id: 160,
    category: "Design Systems",
    difficulty: "Medium",
    question: "What is 'Storybook' typically used for in UI development?",
    options: [
      "Writing children's books",
      "A tool used to build, document, and test UI components in isolation from the main application",
      "A plugin for Figma that animates transitions",
      "A database for storing user personas"
    ],
    answerIndex: 1,
    explanation: "Storybook serves as an interactive component library where developers and designers can view and test components independently.",
    example: "Opening Storybook to test how the 'Primary Button' component looks in light mode, dark mode, and when disabled, without spinning up the whole app."
  },
{
    id: 186,
    category: "Design Systems",
    difficulty: "Medium",
    question: "What is the difference between a UI Kit and a Design System?",
    options: [
      "They are the exact same thing",
      "A UI Kit is just a collection of visual assets/components; a Design System includes those plus code, guidelines, principles, and governance rules",
      "A UI Kit is for developers; a Design System is for designers",
      "A UI kit is only used for mobile apps"
    ],
    answerIndex: 1,
    explanation: "A Design System is a complete product, encompassing the 'how' and 'why' elements are used, not just a Figma file full of buttons (UI Kit).",
    example: "Material Design by Google is a design system because it provides code, principles on motion, accessibility rules, and component specs."
  }
];
