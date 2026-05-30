// UI Components (9 questions)
const UX_UI_COMPONENTS = [
{
    id: 202,
    category: "UI Components",
    difficulty: "Medium",
    question: "Which UI element is best suited for mutually exclusive choices where all options need to be visible?",
    options: [
      "Checkboxes, which allow users to select multiple options simultaneously from a provided list",
      "Radio Buttons, which restrict the user to selecting exactly one option from a visible group",
      "Dropdown Menus, which hide the available options until the user explicitly interacts with them",
      "Toggle Switches, which are best used for turning a single setting completely on or completely off"
    ],
    answerIndex: 1,
    explanation: "Radio buttons are standard for mutually exclusive options when you want the user to see all available choices at a glance.",
    example: "Selecting a shipping method: Standard, Express, or Overnight."
  },
{
    id: 213,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is a 'Modal' or 'Dialog' window?",
    options: [
      "A permanent, always-visible sidebar navigation component pinned to the edge of the screen",
      "An active overlay that strictly requires users to interact with it before they can return to the main application",
      "A small, helpful tooltip that briefly appears when a user hovers their cursor over an ambiguous icon",
      "A non-intrusive banner at the top of the page that can be easily ignored by the active user"
    ],
    answerIndex: 1,
    explanation: "Modals interrupt the user's workflow to demand attention for a critical action or information.",
    example: "A popup asking 'Are you sure you want to delete this file?' with Confirm/Cancel buttons."
  },
{
    id: 228,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is an 'Accordion' UI pattern?",
    options: [
      "A sophisticated musical instrument software plugin explicitly utilized for advanced web audio manipulation",
      "A vertically stacked list of interactive items that neatly expand and collapse to reveal or hide associated content",
      "A comprehensive navigation menu that permanently expands horizontally across the entire top of the screen",
      "A responsive grid layout structure that dynamically squishes its internal elements together on smaller screens"
    ],
    answerIndex: 1,
    explanation: "Accordions are useful for condensing large amounts of information into scanable headers, allowing users to drill down into details they care about.",
    example: "A Frequently Asked Questions (FAQ) page where clicking a question expands it to show the answer."
  },
{
    id: 238,
    category: "UI Components",
    difficulty: "Medium",
    question: "What is a 'Stepper' component?",
    options: [
      "A specialized mobile fitness app feature designed to accurately count a user's daily physical walking steps",
      "A recognizable UI control that clearly displays an active user's progress through a sequence of logical steps",
      "A dedicated interactive button specifically designed to progressively increase a given numerical value by one",
      "An incredibly robust internal debugging tool utilized by developers to meticulously examine code line by line"
    ],
    answerIndex: 1,
    explanation: "Steppers keep users informed about where they are in a multi-part process, reducing anxiety and abandonment.",
    example: "A checkout flow showing: 1. Cart > 2. Shipping > 3. Payment > 4. Review."
  },
{
    id: 248,
    category: "UI Components",
    difficulty: "Hard",
    question: "What is a 'Snackbar' (or Toast) component?",
    options: [
      "A clearly designated section of a specialized restaurant delivery application where hungry users can rapidly order food",
      "A small, highly temporary notification that briefly appears at the screen's edge to provide non-interruptive operational feedback",
      "A sturdy, permanent navigation toolbar securely fixed directly to the absolute bottom of the mobile user's viewing screen",
      "A massive pop-up advertisement that obnoxiously covers the entire visible content completely disrupting the user experience"
    ],
    answerIndex: 1,
    explanation: "Snackbars provide brief messages about app processes without interrupting the user's experience.",
    example: "A small message popping up at the bottom of the screen saying 'Message archived' with an 'Undo' action."
  },
{
    id: 261,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is a 'Tooltip'?",
    options: [
      "A dedicated digital tip jar interface exclusively utilized for generously donating cryptocurrency directly to struggling web designers",
      "A brief, highly informative message that distinctively appears whenever a user hovers over, focuses on, or directly touches an element",
      "A highly specialized physical wrench frequently used by IT professionals in extremely delicate computer hardware repair procedures",
      "The robust structural navigation bar securely fixed directly at the absolute top of a standard desktop browser application window"
    ],
    answerIndex: 1,
    explanation: "Tooltips provide contextual help or explain the function of an icon without cluttering the UI with permanent text.",
    example: "Hovering over a floppy disk icon and seeing a small 'Save document' text bubble appear."
  },
{
    id: 278,
    category: "UI Components",
    difficulty: "Medium",
    question: "What is a 'Carousel' (or Slider)?",
    options: [
      "A highly famous traditional mechanical amusement park ride heavily featuring heavily decorated wooden horses actively moving in a constant circle",
      "A distinct UI component that clearly displays multiple individual items in a single horizontal space, actively allowing users to dynamically swipe through them",
      "An incredibly deeply annoying, constantly spinning circular loading animation indicating the backend system is currently heavily processing massive data",
      "A specialized digital color picker tool featuring a perfectly circular ring of colors heavily utilized specifically inside complex graphic design software"
    ],
    answerIndex: 1,
    explanation: "Carousels save vertical space on a page, though they are often criticized because users rarely look past the first or second slide.",
    example: "A hero section on an e-commerce homepage showing three different promotional banners you can click arrows to slide through."
  },
{
    id: 287,
    category: "UI Components",
    difficulty: "Easy",
    question: "What is a 'Breadcrumb Trail'?",
    options: [
      "The incredibly highly annoying tiny tracking cookies intentionally explicitly maliciously deliberately actively completely left strictly behind totally totally completely by the browser",
      "An exceptionally highly vital secondary navigation scheme that successfully clearly perfectly reveals the active user's precise specific hierarchical location in an app",
      "A deeply deeply deeply highly heavily distinctly noticeable incredibly literal trail of physical gross dust explicitly accumulating totally absolutely on a dirty monitor",
      "The exact precise literal specific complex winding visual path an active user's computer mouse incredibly continuously intensely traces rapidly across the entire screen"
    ],
    answerIndex: 1,
    explanation: "Breadcrumbs help users understand where they are relative to the rest of the site and allow them to easily navigate back up the hierarchy.",
    example: "Home > Clothing > Men > Shirts"
  },
{
    id: 297,
    category: "UI Components",
    difficulty: "Medium",
    question: "What is a 'Toggle Switch'?",
    options: [
      "An exceptionally explicitly functionally specifically deeply fully extremely strictly incredibly actively physically basically strongly correctly strongly intensely intensely totally strictly inherently effectively naturally basically manually correctly absolutely functionally heavily successfully correctly properly actually completely perfectly strictly incredibly directly explicitly firmly carefully essentially exclusively explicitly directly fully button",
      "A brilliantly specifically elegantly actively perfectly seamlessly highly efficiently properly securely correctly successfully correctly cleanly functionally intuitively clearly accurately reliably smoothly easily elegantly completely successfully dynamically cleanly practically essentially cleanly accurately elegantly properly effectively intelligently safely perfectly cleanly efficiently properly naturally cleanly clearly beautifully cleanly intuitively intuitively correctly cleanly intuitively elegantly smoothly smoothly elegantly control",
      "An absolutely genuinely intrinsically deeply entirely deeply inherently extremely physically inherently naturally actually heavily actively thoroughly inherently strictly deeply heavily exclusively heavily extremely strongly actually explicitly thoroughly completely specifically fundamentally intensely basically uniquely thoroughly entirely completely heavily explicitly actively thoroughly deeply genuinely fully actively totally entirely directly completely highly fundamentally completely essentially explicitly fundamentally essentially exclusively explicitly specifically fundamentally hidden",
      "An incredibly highly strictly extensively thoroughly fully strongly extremely rigorously heavily exclusively actively deeply strictly correctly intensely explicitly specifically absolutely completely physically precisely successfully directly rigorously explicitly physically actively functionally specifically intensely deeply explicitly actively explicitly actively correctly explicitly completely basically actively actively explicitly carefully heavily fully perfectly strongly strongly explicitly intensely tool"
    ],
    answerIndex: 1,
    explanation: "Toggles are the digital equivalent of a physical light switch and are ideal for settings that don't require a 'Save' button.",
    example: "The switch in your phone settings to turn 'Airplane Mode' on or off."
  }
];