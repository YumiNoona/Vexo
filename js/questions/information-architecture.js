// Information Architecture (7 questions)
const UX_INFORMATION_ARCHITECTURE = [
{
    id: 24,
    category: "Information Architecture",
    difficulty: "Medium",
    question: "What are the four core components of Information Architecture (IA) in digital products?",
    options: [
      "HTML systems, CSS layout, JavaScript modules, SQL servers",
      "Organization systems, Labeling systems, Navigation systems, Search systems",
      "Visceral design, Behavioral design, Reflective design, Usability audits",
      "Perceivable, Operable, Understandable, Robust principles"
    ],
    answerIndex: 1,
    explanation: "These four systems govern how content is structured (organization), named (labeling), moved through (navigation), and queried (search).",
    example: "Determining that category links should be labeled 'Resources' and searchable via a global search bar."
  },
{
    id: 71,
    category: "Information Architecture",
    difficulty: "Medium",
    question: "What is a 'Site Map' in the context of IA?",
    options: [
      "A geographic map showing where server data centers are located",
      "A hierarchical diagram showing all pages and their relationships within a website",
      "A user flow diagram showing how a persona navigates to a goal",
      "A list of HTTP URLs crawled by Google Search bots"
    ],
    answerIndex: 1,
    explanation: "A site map is an IA planning tool that helps teams visualize the entire content structure before building navigation or prototypes.",
    example: "Drawing a tree diagram with 'Home' at the top, branching into 'Products', 'About', 'Blog', and 'Contact' pages."
  },
{
    id: 72,
    category: "Information Architecture",
    difficulty: "Hard",
    question: "What is a 'Tree Test' used for in IA evaluation?",
    options: [
      "Testing whether users can navigate a site's menu hierarchy to find specific content without any visual design cues",
      "An A/B test comparing two different navigation tree structures in production",
      "A performance test measuring how fast a website loads on a decision tree of devices",
      "A test where users draw a tree diagram of a website from memory"
    ],
    answerIndex: 1,
    explanation: "Tree tests validate information architecture by asking users to find items using only a text-based category tree — isolating navigation logic from visual design.",
    example: "Asking users to find 'Return Policy' in a text-only tree to check if they look under 'Help', 'Orders', or 'About Us'."
  },
{
    id: 146,
    category: "Information Architecture",
    difficulty: "Medium",
    question: "What is 'Breadcrumb Navigation'?",
    options: [
      "A trail of literal cookie icons used in a UI",
      "A secondary navigation scheme that reveals the user's location in a website or app hierarchy",
      "Tracking user clicks using cookies",
      "A map of a physical store layout"
    ],
    answerIndex: 1,
    explanation: "Breadcrumbs help users understand where they are in a deep hierarchy and provide one-click access to higher-level parent pages.",
    example: "Displaying 'Home > Electronics > Laptops > Apple MacBook' at the top of a product page."
  },
{
    id: 163,
    category: "Information Architecture",
    difficulty: "Medium",
    question: "What does the term 'Taxonomy' refer to in IA?",
    options: [
      "The financial cost of hosting a website",
      "The classification and naming structure used to organize content logically",
      "A method of user testing",
      "The CSS class naming convention"
    ],
    answerIndex: 1,
    explanation: "A good taxonomy ensures that content is categorized using language that makes sense to the user, not just internal company jargon.",
    example: "Classifying an e-commerce site into 'Men's', 'Women's', and 'Kids', then subdividing into 'Tops', 'Bottoms', and 'Shoes'."
  },
{
    id: 182,
    category: "Information Architecture",
    difficulty: "Hard",
    question: "What is 'Faceted Navigation' (Faceted Search)?",
    options: [
      "A 3D navigation menu with multiple faces",
      "A UI pattern allowing users to filter and narrow down a large set of results by selecting multiple attributes (facets) concurrently",
      "A navigation bar that changes color",
      "A search bar that uses AI to predict text"
    ],
    answerIndex: 1,
    explanation: "Faceted navigation is critical for e-commerce, allowing users to drill down into complex catalogs without reloading different pages.",
    example: "Filtering a list of laptops by 'Brand: Apple', 'RAM: 16GB', and 'Price: Under $1000' at the same time."
  },
{
    id: 194,
    category: "Information Architecture",
    difficulty: "Medium",
    question: "What is a 'Mega Menu'?",
    options: [
      "A restaurant menu with large text",
      "A large, expandable dropdown interface that shows many options, often grouped into categories, simultaneously",
      "A hamburger menu on desktop",
      "A menu that covers the entire screen on mobile"
    ],
    answerIndex: 1,
    explanation: "Mega menus are excellent for complex sites (like e-commerce or large corporate sites) because they reveal the depth of the IA without requiring multiple clicks.",
    example: "Hovering over 'Electronics' on Best Buy and seeing a massive panel drop down showing TVs, Laptops, and Cameras categorized logically."
  }
];
