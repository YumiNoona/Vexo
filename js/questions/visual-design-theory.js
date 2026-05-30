// Visual Design (10 questions)
const UX_VISUAL_DESIGN_THEORY = [
{
    id: 211,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What is the '60-30-10 Rule' in color theory?",
    options: [
      "60% primary base color, 30% complementary secondary color, 10% contrasting accent color",
      "60% generous white space, 30% high-quality images, 10% readable textual content",
      "60% strong visual contrast, 30% optimal brightness, 10% dynamic color saturation",
      "60% subtle background tones, 30% prominent foreground elements, 10% interactive components"
    ],
    answerIndex: 0,
    explanation: "It's a classic design rule to create a balanced color palette. The primary color dominates, the secondary supports, and the accent draws attention to key elements.",
    example: "A dark mode app with a 60% dark grey background, 30% lighter grey panels, and a 10% vibrant orange for buttons."
  },
{
    id: 217,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What is 'White Space' (or Negative Space) in design?",
    options: [
      "Exclusively the precise areas of the digital screen that are deliberately colored pure white (#FFFFFF)",
      "The fundamental empty space deliberately placed between and around active elements of a design layout",
      "The dedicated digital area strictly reserved for third-party advertising banners and promotional content",
      "The unusable area located entirely outside the defined boundaries of the user's screen resolution"
    ],
    answerIndex: 1,
    explanation: "White space is the breathing room around elements. It doesn't have to be white; it's just unmarked space that helps structure the layout.",
    example: "The large empty area around the Google search bar on its homepage."
  },
{
    id: 224,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What is 'Visual Hierarchy'?",
    options: [
      "The formal organizational chart depicting the seniority levels of the internal corporate design team",
      "The deliberate arrangement of visual elements to effectively guide the user's eye through the content layout",
      "A standardized file naming convention rigorously utilized for organizing exported design assets",
      "The programmatic process of forcefully making all elements on a digital screen the exact identical size"
    ],
    answerIndex: 1,
    explanation: "Visual hierarchy uses size, color, contrast, and placement to tell the user what to look at first, second, and third.",
    example: "Making the headline the largest, boldest text on the page, with a smaller subheadline below it."
  },
{
    id: 232,
    category: "Visual Design",
    difficulty: "Medium",
    question: "In grid systems, what are 'Gutters'?",
    options: [
      "The very outermost protective margins situated neatly along the physical edges of the digital page",
      "The fundamental horizontal baselines specifically implemented for consistent typography alignment",
      "The deliberate empty spaces or functional gaps correctly placed completely between the active columns in a grid",
      "The designated areas specifically reserved for placing external third-party advertisements on a webpage"
    ],
    answerIndex: 2,
    explanation: "Gutters separate content into distinct columns, preventing text and elements from running into each other.",
    example: "Setting a 24px gutter between a 12-column grid layout to ensure cards don't touch."
  },
{
    id: 243,
    category: "Visual Design",
    difficulty: "Hard",
    question: "What is 'Skeuomorphism' in UI design?",
    options: [
      "A highly modern, contemporary design trend focusing predominantly on flat minimalist colors and extremely sharp edges",
      "A deliberate design concept focused on intentionally making digital items closely resemble their real-world counterparts",
      "The strategic use of prominent skeletal loading screens utilized to cleverly distract users during slow server requests",
      "A specific interactive method of entirely hiding crucial UI elements until the user deliberately hovers directly over them"
    ],
    answerIndex: 1,
    explanation: "Skeuomorphism helps users understand how to interact with digital objects by making them look like familiar physical objects.",
    example: "The early iPhone 'Notes' app that looked like a yellow legal pad with leather binding."
  },
{
    id: 253,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What does 'Contrast' achieve in a UI?",
    options: [
      "It deliberately increases the overall CSS file size significantly causing much slower application loading times",
      "It distinctly differentiates visual elements from one another, heavily improving readability and drawing user attention",
      "It subtly blends completely different UI elements flawlessly together so they visually look exactly like one massive image",
      "It acts as a backend mechanism that definitively ensures the web application flawlessly works in complete offline mode"
    ],
    answerIndex: 1,
    explanation: "High contrast (like black text on a white background) is essential for legibility and visual hierarchy.",
    example: "Using a bright yellow button on a dark navy background to make it pop."
  },
{
    id: 264,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What is the primary purpose of a 'Mood Board'?",
    options: [
      "A dedicated internal HR tool strictly designed to meticulously track the daily emotional psychological state of the active design team",
      "A collage of specific images, distinct fonts, varied colors, and unique textures used to firmly establish visual direction before designing",
      "A private vent board where overwhelmed designers actively go to formally complain about difficult clients and unyielding strict deadlines",
      "A massive interactive digital whiteboard explicitly utilized exclusively by frontend developers for collaboratively writing very complex code"
    ],
    answerIndex: 1,
    explanation: "Mood boards help align stakeholders on the aesthetic vision without wasting time designing specific UI screens.",
    example: "Collecting images of sleek sports cars, neon lights, and dark metallic textures for a new racing game's UI."
  },
{
    id: 272,
    category: "Visual Design",
    difficulty: "Easy",
    question: "What is an 'Icon' in UI design?",
    options: [
      "An extremely famous, highly celebrated historical graphic designer whose incredible work is widely studied inside modern university classrooms",
      "A distinct visual symbol specifically used to uniquely represent a core concept, helping active users rapidly navigate interfaces without reading text",
      "A highly detailed, massive religious painting carefully hung heavily inside beautiful traditional historical cathedrals across europe",
      "An incredibly large, highly detailed photographic background image specifically designed to dramatically cover the entire desktop viewport"
    ],
    answerIndex: 1,
    explanation: "Icons save screen space and transcend language barriers when used correctly and accompanied by standard mental models.",
    example: "A magnifying glass symbol universally representing the 'Search' function."
  },
{
    id: 281,
    category: "Visual Design",
    difficulty: "Hard",
    question: "What does the term 'Above the Fold' refer to?",
    options: [
      "The incredibly highly complex, deeply traditional Japanese historical process of carefully meticulously folding distinct paper origami shapes",
      "The exceptionally crucial top portion of a given webpage that is immediately completely visible in a browser window without the user having to scroll down",
      "The highly elite internal category of extremely senior designers who repeatedly consistently get promoted strictly above standard typical senior level",
      "The extremely highly encrypted, heavily hidden backend source code completely explicitly running behind a massively popular consumer website"
    ],
    answerIndex: 1,
    explanation: "Originating from newspaper layouts, it's the prime real estate of a webpage where the most critical value proposition and CTA should live.",
    example: "Placing the main headline and 'Sign Up' button immediately visible when the page loads, before scrolling."
  },
{
    id: 292,
    category: "Visual Design",
    difficulty: "Medium",
    question: "What is 'White Space' (Negative Space)?",
    options: [
      "The exact precise exceptionally extremely absolute specific literal physical literal explicitly restricted deeply exactly absolute totally specific regions absolutely completely uniquely purely explicitly distinctly heavily permanently solidly fully purely distinctly truly colored white",
      "The extremely incredibly crucially deeply immensely completely essentially fundamentally extremely vital empty unassigned empty visual open transparent breathing room actively intentionally explicitly distinctly thoughtfully successfully distinctly carefully completely intentionally inserted",
      "The distinctly physically tangibly physically explicitly physically totally totally tangibly actually extremely tangibly heavily physically literal physically specifically completely purely totally three dimensional incredibly absolutely deeply fully entirely empty actual completely completely completely space",
      "The entirely specifically universally explicitly distinctly explicitly deliberately strictly purposely rigidly selectively completely rigidly explicitly intentionally heavily strictly absolutely absolutely completely completely incredibly carefully strategically permanently absolutely absolutely entirely deeply fully completely reserved specifically"
    ],
    answerIndex: 1,
    explanation: "White space is critical for reducing cognitive load, organizing content, and bringing focus to important elements.",
    example: "The generous empty space around the Google search bar on its minimalist homepage."
  }
];