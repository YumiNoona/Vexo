// Interaction Design (16 questions)
const UX_INTERACTION_DESIGN = [
{
    id: 23,
    category: "Interaction Design",
    difficulty: "Hard",
    question: "How does a Task Flow differ from a User Flow?",
    options: [
      "Task flows represent databases; User flows represent templates",
      "Task flow focuses on a specific linear path for a single task; User flow shows branching paths and multiple decision points",
      "Task flow is for desktop; User flow is exclusively for mobile interfaces",
      "There is no difference; they are exact terms for flowcharts"
    ],
    answerIndex: 1,
    explanation: "Task flows focus on high-level linear tasks (e.g. adding an item to cart), while user flows show complex decisions and edge cases.",
    example: "A signup flow with email verification, social sign-in options, and retry states is represented as a branching User Flow."
  },
{
    id: 76,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "What are the '5 Dimensions of Interaction Design' (5Di) framework?",
    options: [
      "Color, Typography, Spacing, Motion, Sound",
      "Words (1D), Visual representations (2D), Physical objects/space (3D), Time (4D), Behavior (5D)",
      "Research, Define, Ideate, Prototype, Test",
      "Visceral, Behavioral, Reflective, Cognitive, Social"
    ],
    answerIndex: 1,
    explanation: "The 5Di framework defines the materials of interaction design — from text and images to physical devices, time-based animations, and behavior.",
    example: "An alarm clock's behavior (5D) unfolds over time (4D) through sound and screen animations (2D)."
  },
{
    id: 77,
    category: "Interaction Design",
    difficulty: "Easy",
    question: "What is a 'Mental Model' in UX design?",
    options: [
      "A 3D model of the brain used in medical app interfaces",
      "The internal belief or understanding a user has about how a system works, based on prior experience",
      "A cognitive biometric tool that tracks eye movements during testing",
      "A mental health app design template used in healthcare UX"
    ],
    answerIndex: 1,
    explanation: "Designs that match users' mental models are intuitive — when they don't match, users feel confused and lost.",
    example: "Users expect a 'shopping cart' icon to collect items because of their mental model from real-world shopping."
  },
{
    id: 78,
    category: "Interaction Design",
    difficulty: "Hard",
    question: "What does 'Affordance' mean in the context of UX design?",
    options: [
      "The financial cost of implementing a design feature",
      "A property of an object that signals to users how to interact with it based on its appearance",
      "The level of accessibility provided by a WCAG-compliant interface",
      "The time it takes for users to learn a new interface"
    ],
    answerIndex: 1,
    explanation: "Affordances signal usage without instruction — a door handle affords pulling; a button affords clicking because of its visual properties.",
    example: "A raised 3D button style affords clicking; a flat text-only link affords reading more than clicking unless styled distinctly."
  },
{
    id: 131,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "What is the 'Thumb Zone' in mobile UX design?",
    options: [
      "The biometric scanner used to unlock a phone",
      "The screen area that is easily reachable by a user's thumb when holding a smartphone with one hand",
      "A dark pattern where accidental clicks are encouraged",
      "The area at the very top of a tablet screen"
    ],
    answerIndex: 1,
    explanation: "Because most people use phones one-handed, critical actions (like primary buttons or navigation) should be placed in the easily reachable lower half.",
    example: "Moving a 'Compose Tweet' button to a floating action button in the bottom right corner, comfortably within the thumb zone."
  },
{
    id: 132,
    category: "Interaction Design",
    difficulty: "Easy",
    question: "Why is a 'Bottom Tab Bar' generally preferred over a 'Hamburger Menu' for core mobile navigation?",
    options: [
      "Tab bars use fewer code resources",
      "Tab bars keep primary navigation visible and instantly accessible with one tap, whereas hamburgers hide them",
      "Hamburger menus are banned by Apple's HIG",
      "Hamburger menus cannot contain icons"
    ],
    answerIndex: 1,
    explanation: "Out of sight is out of mind. Hiding primary navigation behind a hamburger menu reduces engagement; tab bars expose core sections immediately.",
    example: "Instagram uses a bottom tab bar so users can switch between Feed, Search, and Profile in a single tap."
  },
{
    id: 133,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "What is the recommended minimum touch target size for mobile interfaces (according to Apple/Google guidelines)?",
    options: [
      "12x12 pixels",
      "24x24 pixels",
      "44x44 (or 48x48) pixels",
      "100x100 pixels"
    ],
    answerIndex: 2,
    explanation: "Fingers are imprecise. Touch targets around 44-48px square ensure users can comfortably tap elements without accidentally hitting neighbors.",
    example: "Adding padding to a small 16px icon so its clickable area becomes 48x48px."
  },
{
    id: 145,
    category: "Interaction Design",
    difficulty: "Easy",
    question: "What is 'Progressive Disclosure'?",
    options: [
      "Gradually revealing a company's privacy policy",
      "An interaction pattern where only the most essential information is shown initially, with advanced options revealed upon request",
      "A loading bar that shows progress",
      "The process of handing off designs to developers"
    ],
    answerIndex: 1,
    explanation: "Progressive disclosure manages complexity by hiding secondary features until the user specifically needs them.",
    example: "Showing 'Basic Settings' first, with an 'Advanced Settings' button that expands to show more complex toggles."
  },
{
    id: 148,
    category: "Interaction Design",
    difficulty: "Easy",
    question: "What does 'Friction' refer to in UX?",
    options: [
      "The physical resistance of a mouse or trackpad",
      "Anything that prevents a user from seamlessly completing a task (extra steps, confusing text, slow loads)",
      "Conflict between designers and developers",
      "The drag effect applied to touch scrolling"
    ],
    answerIndex: 1,
    explanation: "Reducing friction is a core UX goal. Every extra click, required field, or confusing label is friction that lowers conversion.",
    example: "Forcing a user to create an account before they can see the price of a product creates massive friction."
  },
{
    id: 149,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "When is adding 'Positive Friction' a good UX decision?",
    options: [
      "To artificially increase the time a user spends on a page",
      "When a user is about to take a destructive or irreversible action, slowing them down prevents mistakes",
      "To prevent users from canceling subscriptions",
      "When you want to frustrate bots"
    ],
    answerIndex: 1,
    explanation: "Friction isn't always bad. When actions have severe consequences, forcing the user to stop and think is good design.",
    example: "Forcing a user to type 'DELETE' to confirm deleting an entire project workspace."
  },
{
    id: 158,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "What is a 'State Machine' concept as applied to UI components?",
    options: [
      "A government computer system",
      "A model that defines all possible distinct states a component can be in (e.g., default, hover, disabled) and how it transitions between them",
      "A hardware testing device",
      "A generative AI tool for UI creation"
    ],
    answerIndex: 1,
    explanation: "Mapping out component states ensures developers build resilient UIs that handle success, loading, errors, and empty states without breaking.",
    example: "Designing a button's Normal, Hover, Focused, Active (Pressed), Loading, and Disabled states before handoff."
  },
{
    id: 165,
    category: "Interaction Design",
    difficulty: "Easy",
    question: "What is 'Hover State'?",
    options: [
      "A drone delivery mechanism",
      "The visual change in an interactive element when a user places their mouse cursor over it",
      "A state of deep focus during work",
      "A CSS rule that makes elements float on the screen"
    ],
    answerIndex: 1,
    explanation: "Hover states provide critical feedback that an element is interactive and clickable, though they don't exist on touch screens.",
    example: "A button changing from light blue to dark blue when the mouse cursor rests on it."
  },
{
    id: 178,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "What is an 'Empty State' in UI design?",
    options: [
      "A screen that failed to load from the server",
      "What a user sees when there is no data to display in a specific view (e.g., a new account with no messages)",
      "A completely white, blank web page",
      "An input field that hasn't been filled out yet"
    ],
    answerIndex: 1,
    explanation: "Empty states are prime opportunities for onboarding. Instead of showing a blank screen, a good empty state explains what goes there and how to add it.",
    example: "An empty 'Favorites' tab showing an illustration of a star and a button saying 'Browse products to add favorites'."
  },
{
    id: 185,
    category: "Interaction Design",
    difficulty: "Medium",
    question: "What is a 'Call to Action (CTA)'?",
    options: [
      "A legal warning on a website",
      "An interactive element (usually a button or link) that prompts the user to take a specific, desired action",
      "A phone number listed on a contact page",
      "An automated customer support chatbot"
    ],
    answerIndex: 1,
    explanation: "CTAs are the primary drivers of conversion. They should be visually prominent and use action-oriented language.",
    example: "A large, high-contrast button that says 'Start your 14-day free trial' instead of a small link that says 'Click here'."
  },
{
    id: 192,
    category: "Interaction Design",
    difficulty: "Hard",
    question: "What is 'Direct Manipulation' in UI?",
    options: [
      "Editing code directly in production",
      "An interaction style where users interact with objects on the screen similar to how they would physical objects (dragging, pinching, rotating)",
      "A manager micro-managing a design team",
      "Using command-line interfaces"
    ],
    answerIndex: 1,
    explanation: "Direct manipulation feels intuitive and immediate, removing the need for complex menus or buttons to perform spatial actions.",
    example: "Pinch-to-zoom on a map or dragging a file into a folder, rather than clicking a 'Zoom In' button or selecting 'Move to' from a dropdown menu."
  },
{
    id: 196,
    category: "Interaction Design",
    difficulty: "Easy",
    question: "What is 'Infinite Scroll'?",
    options: [
      "A bug where the browser cannot stop scrolling",
      "A design pattern where content continuously loads as the user scrolls down, eliminating the need for pagination",
      "A scrolling marquee text banner",
      "A loop of the same 5 items repeating forever"
    ],
    answerIndex: 1,
    explanation: "Infinite scroll removes the friction of clicking 'Next Page' and keeps users engaged in discovery-heavy feeds.",
    example: "Scrolling through Instagram or TikTok feeds where new content loads automatically at the bottom."
  }
];
