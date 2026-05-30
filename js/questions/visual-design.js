// Visual Design (16 questions)
const UX_VISUAL_DESIGN = [
{
    id: 2,
    category: "Visual Design",
    difficulty: "Easy",
    question: "How does UI (User Interface) design contrast with UX design according to class materials?",
    options: [
      "UI focuses on database speed; UX focuses on client-side routing",
      "UI focuses on the visual and interactive aspects (appeal/creativity); UX ensures it serves user needs (usability)",
      "UI is done by marketers; UX is done exclusively by software developers",
      "UI is print design; UX is only for mobile applications"
    ],
    answerIndex: 1,
    explanation: "UI adds the appeal and creativity that make a product engaging, while UX focuses on usability and user-centered solutions.",
    example: "A well-designed interface (UI) is not only aesthetically pleasing but also enhances the UX by making it intuitive."
  },
{
    id: 83,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What is 'Visual Hierarchy' in UI design?",
    options: [
      "The alphabetical ordering of elements in a design system component library",
      "The arrangement of design elements to guide the eye and communicate order of importance",
      "A corporate org chart embedded in the design documentation",
      "A CSS z-index system for stacking elements on a page"
    ],
    answerIndex: 1,
    explanation: "Visual hierarchy directs attention using size, color, contrast, and spacing — ensuring users see the most important information first.",
    example: "A newspaper headline is large and bold (primary); the subheadline is medium (secondary); the body text is small (tertiary)."
  },
{
    id: 84,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What is the '60-30-10 rule' in color theory for UI design?",
    options: [
      "60% of users prefer dark mode, 30% light mode, 10% auto mode",
      "Use 60% a dominant color, 30% a secondary color, and 10% an accent color to create a balanced palette",
      "60% of the screen is content, 30% navigation, and 10% footer",
      "60px grid, 30px gutter, and 10px baseline spacing system"
    ],
    answerIndex: 1,
    explanation: "The 60-30-10 rule creates color harmony — too many colors in equal proportions create visual noise; this ratio provides structure.",
    example: "A dark navy background (60%), soft white surfaces (30%), and a vibrant teal accent on CTAs (10%)."
  },
{
    id: 85,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What is the purpose of 'White Space' (negative space) in UI design?",
    options: [
      "To save ink when printing interface screenshots",
      "To improve readability, reduce cognitive load, and create a sense of elegance and clarity",
      "To fill empty areas cheaply without using images or icons",
      "To mark areas where future content will be added in the next sprint"
    ],
    answerIndex: 1,
    explanation: "White space is not wasted space — it is a strategic design tool that gives elements room to breathe and helps users focus.",
    example: "Apple's product pages use abundant white space to make products the hero and reduce visual clutter."
  },
{
    id: 86,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What does 'Typography Hierarchy' mean in UI design?",
    options: [
      "Listing all fonts used in alphabetical order in the style guide",
      "Using different font sizes, weights, and styles to differentiate content levels (heading, subheading, body, caption)",
      "Selecting only serif fonts for headings and sans-serif for navigation",
      "The order in which fonts load in a browser based on CSS specificity"
    ],
    answerIndex: 1,
    explanation: "Typography hierarchy guides reading order and communicates relative importance without the need for color or icons.",
    example: "H1 at 48px bold, H2 at 32px semi-bold, body at 16px regular, and captions at 12px light create clear reading levels."
  },
{
    id: 130,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What is the purpose of a 'Mood Board'?",
    options: [
      "To track the emotional state of employees during a project",
      "A collage of images, fonts, and colors used to establish the visual direction and feel of a project before designing",
      "An interactive prototype for testing animations",
      "A dashboard showing user satisfaction metrics"
    ],
    answerIndex: 1,
    explanation: "Mood boards align the team and client on a visual style (e.g., 'playful and energetic' vs 'corporate and trustworthy') early in the process.",
    example: "Gathering screenshots of other sleek, dark-mode apps to define the aesthetic direction for a new fitness tracker."
  },
{
    id: 134,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What are 'Safe Areas' in mobile design?",
    options: [
      "Areas of the app where users can't delete data",
      "Sections of the screen guaranteed not to be obscured by hardware features like notches, dynamic islands, or home indicators",
      "The secure login sections of an application",
      "Empty white space margins around text"
    ],
    answerIndex: 1,
    explanation: "Designers must respect safe areas to prevent critical UI elements from being cut off by rounded corners or camera cutouts.",
    example: "Adding extra bottom padding on iOS devices to prevent a button from overlapping with the swipe-up home indicator."
  },
{
    id: 147,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What is a 'Skeleton Screen'?",
    options: [
      "A wireframe showing only the bare bones of a design",
      "A blank version of a page with placeholder blocks that is displayed while content loads, giving the illusion of speed",
      "A dark-themed UI pattern",
      "A screen designed specifically for Halloween promotions"
    ],
    answerIndex: 1,
    explanation: "Skeleton screens improve perceived performance. They keep the user engaged better than a blank screen or a simple spinning wheel.",
    example: "YouTube showing gray pulsing boxes in the shape of video thumbnails while the actual videos load over the network."
  },
{
    id: 153,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What does the 'Law of Common Region' (Gestalt) state?",
    options: [
      "Users from the same geographic region prefer similar UI patterns",
      "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary",
      "All buttons must have a distinct border radius",
      "Text should always be aligned to the left in western cultures"
    ],
    answerIndex: 1,
    explanation: "Adding a border or a background color around a group of elements instantly creates a strong visual relationship between them.",
    example: "Placing a border around a pricing tier card clearly groups the price, features, and button together."
  },
{
    id: 156,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What is 'Grid System' in web design?",
    options: [
      "A power supply network for server farms",
      "A structure comprising a series of intersecting straight or curved lines used to structure content into proportions",
      "A spreadsheet used to track design tasks",
      "The pixel matrix on an LCD screen"
    ],
    answerIndex: 1,
    explanation: "Grids create rhythm, consistency, and alignment across pages, making responsive design much easier to manage.",
    example: "Using a 12-column CSS grid to divide a desktop layout into a 3-column sidebar and 9-column main content area."
  },
{
    id: 162,
    category: "Visual Design",
    difficulty: "Hard",
    question: "What is the difference between 'Raster' and 'Vector' graphics?",
    options: [
      "Raster is for print; Vector is for web",
      "Raster images are made of a grid of pixels (lose quality when scaled); Vector images are defined by mathematical equations (scale infinitely without blur)",
      "Raster images use CMYK; Vector uses RGB",
      "There is no difference; both are formats for animated GIFs"
    ],
    answerIndex: 1,
    explanation: "UI design heavily relies on vectors (like SVG) for icons and illustrations so they remain crisp on high-resolution (Retina) screens.",
    example: "Using a raster PNG for a photograph, but an SVG vector for a company logo."
  },
{
    id: 172,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What is 'Skeuomorphism' in UI design?",
    options: [
      "Designing completely flat, minimalist interfaces",
      "Designing digital elements to mimic the appearance and texture of their real-world physical counterparts",
      "Using only 3D geometric shapes",
      "A modern trend involving heavy glass blur effects"
    ],
    answerIndex: 1,
    explanation: "Skeuomorphism was heavily used in early digital interfaces (like early iOS) to help users understand how to use new tools by referencing physical objects.",
    example: "Designing a digital calendar app with fake leather textures, torn paper edges, and a realistic ring binder."
  },
{
    id: 173,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What replaced Skeuomorphism as the dominant UI trend in the 2010s?",
    options: [
      "Brutalism",
      "Flat Design",
      "Neumorphism",
      "Glassmorphism"
    ],
    answerIndex: 1,
    explanation: "Flat design stripped away shadows, gradients, and textures in favor of clean, solid colors, sharp edges, and digital-native minimalism.",
    example: "Microsoft's Metro UI and Apple's iOS 7 redesign, which moved from shiny glass buttons to flat, solid-color icons."
  },
{
    id: 184,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What does 'Below the Fold' refer to in digital design?",
    options: [
      "The footer of a website",
      "The portion of a web page that a user must scroll down to see (it is not visible on initial load)",
      "A physical crease on foldable phones",
      "Text hidden inside an accordion menu"
    ],
    answerIndex: 1,
    explanation: "Borrowed from newspaper terminology, the 'fold' is the bottom edge of the screen. Critical calls to action should generally be 'above the fold'.",
    example: "Ensuring the primary 'Sign Up' button is visible immediately when the page loads, without requiring the user to scroll."
  },
{
    id: 191,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What does 'Contrast Ratio' measure?",
    options: [
      "The ratio of images to text on a webpage",
      "The difference in luminance (brightness) between a foreground element (text) and its background",
      "The difference in size between an H1 and body text",
      "The ratio of new vs returning users"
    ],
    answerIndex: 1,
    explanation: "High contrast ensures text is legible. The WCAG requires a minimum ratio of 4.5:1 for standard text to ensure visually impaired users can read it.",
    example: "Dark gray text on a white background has a high contrast ratio (21:1); light gray text on a white background has a failing ratio (2:1)."
  },
{
    id: 197,
    category: "Visual Design",
    difficulty: "Hard",
    question: "What is the 'Rule of Thirds'?",
    options: [
      "A project management rule allocating 1/3 of time to design",
      "A compositional guideline that divides an image into a 3x3 grid, placing key elements along the lines or their intersections",
      "A rule stating websites must have exactly 3 columns",
      "A pricing strategy offering 3 distinct tiers"
    ],
    answerIndex: 1,
    explanation: "Borrowed from photography, placing visual subjects off-center using the rule of thirds creates a more dynamic, balanced, and interesting composition.",
    example: "Cropping a hero image so the main subject aligns with the right vertical third line, leaving the left two-thirds open for text."
  }
];
