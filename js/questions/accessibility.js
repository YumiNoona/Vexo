// Accessibility (15 questions)
const UX_ACCESSIBILITY = [
{
    id: 25,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What does the POUR acronym stand for in the WCAG Accessibility Guidelines?",
    options: [
      "Product, Organization, Usability, Reliability",
      "Perceivable, Operable, Understandable, Robust",
      "Plan, Outline, Understand, Review",
      "Performance, Optimization, Usability, Responsiveness"
    ],
    answerIndex: 1,
    explanation: "POUR outlines the four pillars of web accessibility: users must be able to perceive information, operate interfaces, understand content, and run robust tools.",
    example: "Providing alt text for screen readers satisfies the 'Perceivable' principle for visually impaired users."
  },
{
    id: 26,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What WCAG contrast ratio is required for normal text to pass AA compliance?",
    options: [
      "3:1 contrast ratio",
      "4.5:1 contrast ratio",
      "7:1 contrast ratio",
      "10:1 contrast ratio"
    ],
    answerIndex: 1,
    explanation: "WCAG AA standards require a minimum contrast ratio of 4.5:1 for normal body text and 3:1 for large text.",
    example: "Light grey text on a white background usually fails compliance, while dark grey passes."
  },
{
    id: 79,
    category: "Accessibility",
    difficulty: "Easy",
    question: "What is the purpose of 'Alt Text' on images in web design?",
    options: [
      "To add a tooltip that displays when hovering over an image",
      "To provide a text description of images so screen readers can convey the content to visually impaired users",
      "To improve image loading speeds through text compression",
      "To add SEO keywords to images for better Google ranking"
    ],
    answerIndex: 1,
    explanation: "Alt text is a critical accessibility feature that makes visual content perceivable to users who cannot see the image.",
    example: "An image of a smiling person at a desk gets alt text: 'A person working happily at their desk with a laptop and coffee mug.'"
  },
{
    id: 80,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What does 'Keyboard Accessibility' require in interface design?",
    options: [
      "All text must be editable using the on-screen keyboard",
      "All interactive functionality must be operable using only a keyboard, with visible focus indicators",
      "Physical keyboards must be supported by Bluetooth on all devices",
      "The Tab key must jump between pages rather than between elements"
    ],
    answerIndex: 1,
    explanation: "Keyboard accessibility is essential for users with motor impairments who cannot use a mouse — focus order and keyboard traps are common failure points.",
    example: "A user navigating a form using only Tab, Shift+Tab, Enter, and Space keys without needing a mouse."
  },
{
    id: 81,
    category: "Accessibility",
    difficulty: "Hard",
    question: "What WCAG 2.1 success criterion addresses 'Focus Visible'?",
    options: [
      "1.1.1 Non-text Content",
      "1.4.3 Contrast (Minimum)",
      "2.4.7 Focus Visible",
      "3.2.1 On Focus"
    ],
    answerIndex: 2,
    explanation: "SC 2.4.7 (Level AA) requires that any keyboard-operable interface has a visible focus indicator so users always know where they are on the page.",
    example: "A blue outline appearing around a button when it is focused via the Tab key, making the focused element obvious."
  },
{
    id: 82,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What does 'Color Should Not Be the Only Indicator' mean as an accessibility principle?",
    options: [
      "Products should use at least 5 different colors to convey information",
      "Information conveyed by color alone must also be conveyed through text, icons, or patterns so colorblind users aren't excluded",
      "All UI must be designed in grayscale first before adding color",
      "Color contrast must be 7:1 for all text regardless of size"
    ],
    answerIndex: 1,
    explanation: "Approximately 8% of men have color vision deficiency — using only red/green to signal error/success excludes these users.",
    example: "Adding an ✕ icon to error fields and a ✓ icon to valid fields alongside red/green color coding."
  },
{
    id: 116,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What is the purpose of an 'aria-label' in HTML?",
    options: [
      "To style an element using a CSS aria class",
      "To provide an accessible text label for an interactive element that lacks visible text for screen readers",
      "To force a screen reader to read the text in a specific language",
      "To animate elements smoothly for users with vestibular disorders"
    ],
    answerIndex: 1,
    explanation: "When a button only contains an icon (like a magnifying glass), `aria-label=\"Search\"` tells screen readers what the button does.",
    example: "Adding `aria-label=\"Close dialog\"` to an 'X' icon button."
  },
{
    id: 117,
    category: "Accessibility",
    difficulty: "Hard",
    question: "What does WCAG level 'AAA' represent?",
    options: [
      "The minimum acceptable standard for accessibility",
      "The highest and strictest level of web accessibility compliance",
      "A security protocol for accessible APIs",
      "The automated accessibility testing tool built into Chrome"
    ],
    answerIndex: 1,
    explanation: "WCAG has three levels: A (minimum), AA (standard/target for most sites), and AAA (strictest, often difficult for entire sites to achieve).",
    example: "Achieving AAA requires a high 7:1 contrast ratio, whereas AA requires only 4.5:1."
  },
{
    id: 118,
    category: "Accessibility",
    difficulty: "Medium",
    question: "Why is 'Semantic HTML' critical for UX and Accessibility?",
    options: [
      "It reduces the file size of the HTML document",
      "It provides structural meaning to browsers and assistive technologies (like screen readers), helping them navigate the content correctly",
      "It automatically applies beautiful CSS styles to raw elements",
      "It encrypts the text content of a webpage for security"
    ],
    answerIndex: 1,
    explanation: "Using a `<button>` instead of a `<div class=\"btn\">` means screen readers know it's clickable and it automatically supports keyboard focus.",
    example: "Using `<header>`, `<main>`, and `<footer>` instead of just using generic `<div>` tags everywhere."
  },
{
    id: 119,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What is 'Reduced Motion' media query in CSS used for?",
    options: [
      "Making mobile sites load faster on slow networks",
      "Respecting a user's OS preference to minimize animations that might cause motion sickness or dizziness",
      "Reducing the framerate of embedded YouTube videos",
      "Disabling scrolling on single-page applications"
    ],
    answerIndex: 1,
    explanation: "Users with vestibular disorders can feel sick from heavy parallax, zooms, or sliding animations. `@media (prefers-reduced-motion)` allows developers to disable them.",
    example: "Turning off a bouncy entrance animation and replacing it with a simple fade-in for users who requested reduced motion."
  },
{
    id: 152,
    category: "Accessibility",
    difficulty: "Easy",
    question: "Why should you avoid using terms like 'Click here' for text links?",
    options: [
      "It makes the text look ugly",
      "It provides no context to screen reader users scanning links, and harms SEO",
      "It violates copyright laws",
      "It forces mobile users to tap instead of swipe"
    ],
    answerIndex: 1,
    explanation: "Link text should be descriptive. Screen reader users often pull up a list of all links on a page; a list of 10 'click here' links is useless.",
    example: "Instead of 'To view our pricing, click here', use 'View our pricing options'."
  },
{
    id: 159,
    category: "Accessibility",
    difficulty: "Easy",
    question: "Why should forms always have visible labels instead of just placeholder text?",
    options: [
      "Placeholder text makes the file size larger",
      "Placeholders disappear when a user starts typing, forcing them to rely on short-term memory to remember what the field was for",
      "It is impossible to style placeholder text with CSS",
      "Forms without labels cannot be submitted to a database"
    ],
    answerIndex: 1,
    explanation: "Relying only on placeholders causes cognitive strain and accessibility failures, as screen readers may not read them reliably and users forget what they're typing.",
    example: "Placing a permanent 'Email Address' label above an input, and using 'e.g. name@company.com' as the temporary placeholder."
  },
{
    id: 170,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What does 'Screen Reader' software do?",
    options: [
      "Adjusts the brightness of a monitor based on room light",
      "Converts digital text into synthesized speech or Braille to help visually impaired users navigate interfaces",
      "Scans the screen for viruses",
      "Records screen activity for usability testing"
    ],
    answerIndex: 1,
    explanation: "Screen readers (like VoiceOver or NVDA) are essential assistive technologies. Designing accessible HTML ensures they read content in a logical order.",
    example: "A blind user relying on VoiceOver to hear the content of a webpage and navigate through links using keyboard shortcuts."
  },
{
    id: 180,
    category: "Accessibility",
    difficulty: "Medium",
    question: "Why should you avoid specifying font sizes in fixed `px` (pixels) for web accessibility?",
    options: [
      "Pixels take up too much memory",
      "Fixed pixels do not scale if a visually impaired user changes their browser's default font size; relative units like `rem` do",
      "Pixels render differently on Mac vs Windows",
      "CSS does not support pixel values anymore"
    ],
    answerIndex: 1,
    explanation: "Using relative units (`rem` or `em`) respects the user's operating system and browser preferences for text size.",
    example: "Using `font-size: 1rem` instead of `16px` so that if a user sets their browser default to 20px, the text scales up accordingly."
  },
{
    id: 188,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What is the 'Curb Cut Effect'?",
    options: [
      "A visual design trend involving cutting corners off UI cards",
      "The phenomenon where designing for accessibility (like sidewalk curb cuts for wheelchairs) ends up benefiting everyone (like people with strollers or luggage)",
      "A strategy for cutting project costs",
      "The delay in audio processing for screen readers"
    ],
    answerIndex: 1,
    explanation: "Accessibility isn't just for people with permanent disabilities. Features built for accessibility inevitably improve the general user experience.",
    example: "Adding closed captions to videos for the deaf, which then benefits users watching videos on a loud train without headphones."
  }
];
