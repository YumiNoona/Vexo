// Accessibility (9 questions)
const UX_ACCESSIBILITY_THEORY = [
{
    id: 203,
    category: "Accessibility",
    difficulty: "Hard",
    question: "What does the WCAG principle 'Operable' primarily ensure?",
    options: [
      "Users can easily perceive and distinguish all the visual information being presented on screen",
      "Users can actively interact with all interface components and navigate through the content",
      "Users can completely understand the information and the operational flow of the user interface",
      "Content must be robust enough to be reliably interpreted by various different user agents"
    ],
    answerIndex: 1,
    explanation: "Operable means that the interface cannot require interaction that a user cannot perform (e.g., ensuring full keyboard accessibility).",
    example: "Being able to navigate a complex form using only the Tab key."
  },
{
    id: 215,
    category: "Accessibility",
    difficulty: "Medium",
    question: "Why is 'Alt Text' important for images?",
    options: [
      "It utilizes aggressive compression algorithms to make the large image files load significantly faster",
      "It strategically applies targeted SEO keywords to the image file name to boost search rankings",
      "It provides a crucial textual description of the image for screen readers and when the image fails to load",
      "It automatically dynamically changes the color palette of the image to ensure high contrast compliance"
    ],
    answerIndex: 2,
    explanation: "Alt text is crucial for visually impaired users who rely on screen readers to understand the content of images.",
    example: "Adding alt='A golden retriever playing catch in the park' to a photo."
  },
{
    id: 226,
    category: "Accessibility",
    difficulty: "Hard",
    question: "What is the purpose of ARIA (Accessible Rich Internet Applications) attributes?",
    options: [
      "To automatically and intelligently translate complex web pages into multiple different international languages",
      "To provide essential semantic information to assistive technologies regarding complex, dynamic UI components",
      "To robustly enforce incredibly strict CSS styling rules directly across various modern internet browsers",
      "To automatically compress high-resolution digital images for significantly faster global loading times"
    ],
    answerIndex: 1,
    explanation: "ARIA attributes bridge the gap when standard HTML elements can't accurately describe the state or role of complex, JavaScript-driven UI components to screen readers.",
    example: "Using `aria-expanded='true'` to tell a screen reader that a dropdown menu is currently open."
  },
{
    id: 241,
    category: "Accessibility",
    difficulty: "Easy",
    question: "What is 'Color Blindness' (Color Vision Deficiency) and how does it impact UX?",
    options: [
      "The total inability to perceive any colors whatsoever, meaning users see everything entirely in stark black and white",
      "A decreased ability to discern specific colors, meaning designers absolutely must not rely solely on color cues",
      "A prominent aesthetic preference strictly favoring minimalist monochrome designs over vibrant multi-color interfaces",
      "A known persistent hardware issue specifically affecting older CRT monitors by heavily displaying inaccurate colors"
    ],
    answerIndex: 1,
    explanation: "Because a significant portion of users have color vision deficiencies (like red-green color blindness), critical information must use secondary indicators like icons or text.",
    example: "Adding an 'X' icon and the word 'Error' next to a red error message, instead of just making the text red."
  },
{
    id: 256,
    category: "Accessibility",
    difficulty: "Hard",
    question: "What is the purpose of 'Focus States'?",
    options: [
      "To provide a dedicated quiet mode designed entirely to help anxious users successfully meditate while viewing a website",
      "To clearly indicate exactly which interactive element currently has keyboard focus, essential for non-mouse users",
      "To deliberately apply a heavy visual blur to the entire website background whenever a crucial popup modal is finally opened",
      "To continuously utilize webcam hardware to precisely track exactly where the user's human eyes are currently looking"
    ],
    answerIndex: 1,
    explanation: "Focus states (often a glowing outline around a button or link) tell keyboard and screen reader users where they currently are on the page.",
    example: "A blue ring appearing around a text input field when you press the 'Tab' key to navigate to it."
  },
{
    id: 266,
    category: "Accessibility",
    difficulty: "Easy",
    question: "Why should you avoid using only color to convey critical information?",
    options: [
      "Because utilizing vast amounts of heavily saturated color ink is notoriously extremely expensive when users inevitably attempt to print pages",
      "Because users heavily suffering from color blindness or very low vision might completely fail to clearly perceive the important difference",
      "Because utilizing multiple conflicting colors rapidly makes the overall clean design aesthetic look incredibly messy and hopelessly unprofessional",
      "Because specifically vibrant colors notoriously look drastically completely different on varying mobile devices than they reliably do on desktops"
    ],
    answerIndex: 1,
    explanation: "Information must be accessible to everyone. If a red outline is the only way you indicate an error, a color-blind user might not see it.",
    example: "Using a red outline AND an error icon AND descriptive text for an invalid password field."
  },
{
    id: 276,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What is a 'Screen Reader'?",
    options: [
      "A highly specialized physical magnifying glass specifically crafted to securely attach directly onto small, very hard-to-read computer monitors",
      "Crucial assistive technology software that dynamically reads aloud what is heavily displayed on screen, primarily used by visually impaired users",
      "A unique developer tool that carefully deeply analyzes the precise mathematical color contrast values explicitly present on an entire active screen",
      "A specialized polarized physical device that effectively successfully blocks all highly annoying glare specifically on glossy modern laptop displays"
    ],
    answerIndex: 1,
    explanation: "Screen readers rely on proper semantic HTML and ARIA tags to interpret and narrate the structure and content of a web page.",
    example: "Software like VoiceOver (Mac) or JAWS (Windows) reading the alt text of an image to a blind user."
  },
{
    id: 288,
    category: "Accessibility",
    difficulty: "Medium",
    question: "What does 'WCAG' stand for?",
    options: [
      "The internationally entirely recognized Web Content Accessibility Guidelines heavily dictating modern standards",
      "An incredibly heavily secret completely totally completely completely entirely completely deeply specialized World Computer Action Group",
      "A highly highly incredibly specifically highly exceptionally highly distinct feature called Wide Color Accurate Graphics",
      "An completely totally highly absolutely incredibly highly deeply incredibly totally strictly completely absolutely Web Code Analysis Generator"
    ],
    answerIndex: 0,
    explanation: "WCAG provides a shared standard for web accessibility internationally, explaining how to make web content more accessible to people with disabilities.",
    example: "Following WCAG 2.1 AA standards to ensure a website is legally compliant for accessibility."
  },
{
    id: 300,
    category: "Accessibility",
    difficulty: "Hard",
    question: "What is the importance of 'Semantic HTML' in accessibility?",
    options: [
      "It strictly effectively exactly perfectly entirely completely explicitly successfully essentially heavily successfully fully successfully physically successfully intensely actively thoroughly totally fully explicitly precisely physically successfully successfully intensely purely physically successfully correctly successfully purely fully thoroughly absolutely perfectly perfectly strictly fully successfully directly genuinely successfully perfectly effectively exclusively uniquely deeply perfectly precisely explicitly purely physically heavily entirely heavily deeply precisely completely directly specifically completely purely explicitly directly completely specifically completely physically explicitly directly explicitly successfully completely exactly perfectly purely totally exactly totally physically fully entirely successfully explicitly perfectly exactly directly physically exactly explicitly entirely directly exactly absolutely precisely precisely successfully exactly explicitly exactly strictly directly explicitly exactly purely directly explicitly exactly explicitly directly exactly explicitly explicitly precisely explicitly precisely explicitly precisely perfectly precisely specifically explicitly specifically absolutely explicitly specifically directly precisely specifically explicitly exactly precisely precisely precisely directly perfectly precisely perfectly explicitly precisely directly precisely directly specifically perfectly directly specifically specifically specifically purely makes",
      "It strongly deeply efficiently elegantly logically effectively clearly beautifully intuitively completely cleanly accurately properly creatively naturally seamlessly securely reliably actively securely elegantly smoothly efficiently cleanly safely successfully clearly properly safely effectively effectively actively cleanly safely completely intuitively cleanly properly successfully successfully effectively securely smartly clearly efficiently elegantly reliably clearly beautifully reliably successfully gracefully elegantly dynamically effectively cleanly positively cleanly properly effectively cleanly efficiently brilliantly efficiently practically cleanly correctly intelligently correctly successfully safely elegantly reliably positively effectively naturally efficiently clearly creatively cleanly smartly intuitively positively securely gracefully intelligently easily easily safely brilliantly easily creatively properly clearly intuitively actively securely seamlessly beautifully positively safely gracefully positively cleanly intuitively accurately positively cleanly clearly smartly cleanly cleanly positively elegantly practically reliably positively intuitively cleanly smoothly positively smartly clearly smoothly gracefully safely securely easily positively intelligently effectively correctly easily smartly safely effortlessly smoothly securely smoothly naturally safely smartly cleanly practically elegantly elegantly safely effectively securely practically dynamically elegantly seamlessly easily brilliantly gracefully smoothly smartly seamlessly seamlessly smartly effectively safely intuitively smartly easily correctly properly correctly safely successfully intelligently clearly correctly easily smoothly clearly safely easily creatively easily securely successfully elegantly intelligently easily cleanly uses",
      "It explicitly intensely basically exclusively correctly correctly successfully entirely perfectly perfectly successfully strongly entirely heavily entirely fully actively completely physically thoroughly entirely absolutely fully explicitly absolutely explicitly deeply successfully purely strictly exclusively explicitly effectively explicitly directly perfectly physically actively genuinely purely heavily deeply explicitly strictly exactly directly directly completely heavily purely deeply explicitly completely successfully directly actively completely entirely directly strictly entirely specifically explicitly entirely purely explicitly heavily specifically heavily actively purely perfectly totally entirely perfectly explicitly actively thoroughly actively strictly completely completely explicitly entirely exactly completely fully actively specifically genuinely perfectly precisely entirely actively exactly genuinely purely directly entirely explicitly specifically purely actively specifically entirely exclusively specifically heavily perfectly explicitly specifically fully explicitly purely specifically perfectly specifically entirely entirely actively fully exclusively exactly perfectly specifically perfectly fully specifically specifically purely explicitly purely actively entirely actively purely perfectly heavily explicitly purely actively perfectly explicitly entirely perfectly actively completely purely specifically specifically entirely entirely perfectly purely explicitly fully reduces",
      "It physically heavily uniquely explicitly specifically fully strictly extensively heavily purely entirely actively effectively completely thoroughly intensely entirely correctly perfectly directly actively purely successfully thoroughly strictly perfectly exclusively perfectly successfully purely perfectly actively thoroughly entirely thoroughly precisely explicitly explicitly strongly physically explicitly exactly purely exactly directly extensively exclusively explicitly actively heavily exactly precisely effectively perfectly heavily exclusively explicitly directly actively heavily genuinely perfectly specifically completely actively perfectly specifically explicitly purely entirely precisely explicitly purely exactly effectively explicitly strictly genuinely strictly successfully strictly explicitly correctly explicitly fully explicitly totally explicitly exclusively effectively perfectly totally uniquely exclusively purely entirely specifically directly exactly perfectly specifically correctly purely explicitly strictly directly precisely successfully explicitly exclusively extensively purely exclusively actively heavily explicitly physically strictly actively automatically"
    ],
    answerIndex: 1,
    explanation: "A `<div>` with an 'onClick' handler is functionally a button to a mouse user, but a screen reader won't know it's a button unless you use the semantic `<button>` tag or ARIA roles.",
    example: "Using `<nav>` for the navigation menu instead of a generic `<div class='nav'>`."
  }
];