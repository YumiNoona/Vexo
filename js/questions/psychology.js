// Psychology (16 questions)
const UX_PSYCHOLOGY = [
{
    id: 93,
    category: "Psychology",
    difficulty: "Medium",
    question: "What is 'Cognitive Load' in UX design?",
    options: [
      "The processing power required by the server to render a webpage",
      "The total mental effort required by users to understand and interact with an interface",
      "The number of JavaScript files that need to be loaded on a page",
      "A metric tracked by browser developer tools for performance audits"
    ],
    answerIndex: 1,
    explanation: "High cognitive load forces users to think harder — this increases errors, slows task completion, and causes frustration and abandonment.",
    example: "A checkout form with 15 fields, unclear labels, and no progress indicator creates high cognitive load."
  },
{
    id: 94,
    category: "Psychology",
    difficulty: "Hard",
    question: "What is the 'Paradox of Choice' and how does it affect UX design?",
    options: [
      "Users always choose the most expensive option when pricing is displayed",
      "Having too many choices overwhelms users, leading to decision paralysis and lower satisfaction even after choosing",
      "Users prefer custom options over pre-built defaults in all cases",
      "The trade-off between feature richness and interface simplicity in SaaS products"
    ],
    answerIndex: 1,
    explanation: "Barry Schwartz's Paradox of Choice shows that more options reduce decision speed and satisfaction — curating fewer, better options can increase conversions.",
    example: "Netflix reduced choice anxiety by introducing genre-based rows and 'Top 10 in Your Country' instead of showing all 10,000 titles at once."
  },
{
    id: 95,
    category: "Psychology",
    difficulty: "Medium",
    question: "What is 'Anchoring Bias' in the context of UX pricing and design?",
    options: [
      "A user's tendency to anchor their scroll position at the top of every page",
      "The tendency to rely heavily on the first piece of information encountered when making decisions",
      "A bias where users prefer fixed navigation headers over sticky sidebars",
      "The visual weight of a hero image anchoring users to the homepage"
    ],
    answerIndex: 1,
    explanation: "Anchoring is used in pricing UX — showing a premium tier first makes mid-tier prices feel like great value by comparison.",
    example: "Displaying a ₹5,000/month plan first makes the ₹1,500/month plan feel significantly cheaper and more attractive."
  },
{
    id: 96,
    category: "Psychology",
    difficulty: "Easy",
    question: "What is 'Social Proof' as a UX and persuasion principle?",
    options: [
      "A security verification system using social media login (OAuth)",
      "The tendency for users to look at others' actions or reviews as evidence of what is correct or trustworthy",
      "A design review approved by the social media marketing team",
      "A usability test conducted in a public social setting"
    ],
    answerIndex: 1,
    explanation: "Social proof reduces uncertainty — showing ratings, reviews, and user counts helps users feel confident in their decisions.",
    example: "Displaying '4.8★ from 12,400 reviews' and '50,000+ happy customers' on a product page to build trust."
  },
{
    id: 135,
    category: "Psychology",
    difficulty: "Medium",
    question: "What is the 'Halo Effect' in UX?",
    options: [
      "A glowing CSS shadow applied to focused buttons",
      "A cognitive bias where a positive impression of a brand or visual design influences users to assume the usability is also excellent",
      "A visual design technique using circular layouts",
      "A loading animation that spins like a halo"
    ],
    answerIndex: 1,
    explanation: "Users generalize their feelings. If an app looks highly professional and trustworthy, they assume the underlying functionality is also top-tier.",
    example: "Users trusting a clean, well-designed banking app with their money more than a cluttered one, even if the backend security is identical."
  },
{
    id: 136,
    category: "Psychology",
    difficulty: "Hard",
    question: "What is the 'Framing Effect'?",
    options: [
      "Putting borders around images to make them stand out",
      "A bias where users react differently to a choice depending on how it is presented (e.g., as a loss or as a gain)",
      "Designing interfaces specifically for iframe embeds",
      "The time it takes to render a single frame of animation"
    ],
    answerIndex: 1,
    explanation: "How information is framed drastically affects decision-making. People generally prefer avoiding losses to acquiring equivalent gains.",
    example: "Saying 'Save $50 by subscribing yearly' (gain) is less effective than 'Don't lose $50 by paying monthly' (loss aversion)."
  },
{
    id: 137,
    category: "Psychology",
    difficulty: "Medium",
    question: "What does the principle of 'Reciprocity' mean in UX design?",
    options: [
      "Users can undo and redo actions infinitely",
      "If a product provides value upfront without asking for much, users are more likely to give something back (like signing up)",
      "Swiping left and right on mobile screens",
      "The system returning the same data that was inputted"
    ],
    answerIndex: 1,
    explanation: "Reciprocity is a persuasion principle. Giving users something useful for free builds goodwill, making them more likely to reciprocate.",
    example: "Letting a user edit a photo completely for free, and only asking them to create an account when they want to download the final result."
  },
{
    id: 138,
    category: "Psychology",
    difficulty: "Easy",
    question: "What is the 'Scarcity' principle?",
    options: [
      "Designing minimal interfaces with very few elements",
      "People place higher value on things that are limited in quantity or time",
      "Using low-resolution images to save bandwidth",
      "Reducing the number of features in an MVP"
    ],
    answerIndex: 1,
    explanation: "Scarcity creates urgency and drives action, a common psychological trigger in e-commerce.",
    example: "Showing 'Only 2 seats left at this price!' on a flight booking page to encourage immediate purchase."
  },
{
    id: 139,
    category: "Psychology",
    difficulty: "Hard",
    question: "What is 'Hick's Law' primarily concerned with minimizing?",
    options: [
      "The physical distance a mouse must travel",
      "Cognitive load by reducing the number and complexity of choices",
      "The loading time of visual assets",
      "The number of colors in a palette"
    ],
    answerIndex: 1,
    explanation: "Hick's law dictates that the time it takes to make a decision increases with the number of choices. Good UX minimizes choices.",
    example: "Breaking a long 20-field form into a wizard with 4 steps containing 5 fields each."
  },
{
    id: 140,
    category: "Psychology",
    difficulty: "Medium",
    question: "What is 'Confirmation Bias' in UX research?",
    options: [
      "The need to add confirmation dialogs to every delete button",
      "The tendency for researchers to search for, interpret, or favor information that confirms their pre-existing beliefs or hypotheses",
      "A bug where users click 'Confirm' multiple times",
      "Users only reading text that confirms they are on the right page"
    ],
    answerIndex: 1,
    explanation: "Confirmation bias ruins research validity. Asking leading questions just to prove your design is 'good' yields useless data.",
    example: "Asking 'How much do you love this new feature?' instead of 'Can you describe your experience with this feature?'"
  },
{
    id: 155,
    category: "Psychology",
    difficulty: "Easy",
    question: "What is the 'F-Pattern' in reading digital content?",
    options: [
      "A design pattern used exclusively for forms",
      "The tendency for users to read in a pattern that looks like an F: horizontally across the top, then down the left side, reading less across as they go down",
      "A grading system for usability tests",
      "The layout of keys on a standard keyboard"
    ],
    answerIndex: 1,
    explanation: "Eye-tracking studies show users rarely read text thoroughly; they scan down the left edge and occasionally read across.",
    example: "Placing key information, bullet points, and important keywords on the left side of a text block to catch scanning eyes."
  },
{
    id: 164,
    category: "Psychology",
    difficulty: "Hard",
    question: "What is the 'IKEA Effect'?",
    options: [
      "Designing furniture using 3D software",
      "A cognitive bias where users place a disproportionately high value on products they partially created or customized themselves",
      "A minimalist, Scandinavian design aesthetic",
      "Getting lost in a massive, labyrinth-like website navigation"
    ],
    answerIndex: 1,
    explanation: "When users invest effort into setting up a product, they feel ownership and are less likely to abandon it.",
    example: "Users valuing their Twitter profile more highly because they spent time customizing the banner, avatar, and bio."
  },
{
    id: 174,
    category: "Psychology",
    difficulty: "Medium",
    question: "What is the 'Endowment Effect'?",
    options: [
      "Investors giving money to startups",
      "People assigning more value to things merely because they own them (or feel they own them)",
      "The effect of a large budget on design quality",
      "Users preferring the end of a video over the beginning"
    ],
    answerIndex: 1,
    explanation: "Once a user feels ownership over a profile or data, they are highly reluctant to give it up.",
    example: "Offering a 30-day free trial where the user builds out a complex dashboard; when the trial ends, they pay to keep it because they don't want to lose their creation."
  },
{
    id: 181,
    category: "Psychology",
    difficulty: "Medium",
    question: "What is 'Banner Blindness'?",
    options: [
      "A condition where users cannot see the color red",
      "A phenomenon where users subconsciously ignore elements on a page that resemble advertisements or are placed in typical ad locations",
      "When a website's header banner fails to load",
      "A type of targeted ad campaign"
    ],
    answerIndex: 1,
    explanation: "Over time, users have learned to tune out right-rail sidebars and top banners because they expect them to be useless ads.",
    example: "Placing an important system alert in a flashy box at the top right of the screen, only to find users completely ignore it."
  },
{
    id: 187,
    category: "Psychology",
    difficulty: "Hard",
    question: "What is the 'Ostrich Effect'?",
    options: [
      "Users hiding their screens from others",
      "A cognitive bias where people avoid negative information by 'burying their heads in the sand' (ignoring it)",
      "An animation technique for character design",
      "Users who type very quickly using only two fingers"
    ],
    answerIndex: 1,
    explanation: "Users might avoid checking their bank balance if they know they spent too much. UX can mitigate this by framing negative info gently.",
    example: "Instead of showing a massive red 'YOUR ACCOUNT IS OVERDRAWN', showing a softer 'Let's review your recent spending' message."
  },
{
    id: 195,
    category: "Psychology",
    difficulty: "Medium",
    question: "What is the 'Zeigarnik Effect' used for in UX?",
    options: [
      "To make users forget negative experiences",
      "To encourage task completion by showing users that a task is incomplete, creating a mental tension that they want to resolve",
      "To create complex puzzle games",
      "To reduce cognitive load on complex forms"
    ],
    answerIndex: 1,
    explanation: "People remember uncompleted tasks better than completed ones. Reminding them of the incompletion drives re-engagement.",
    example: "A persistent dashboard banner saying 'You are 2 steps away from completing your account setup!'"
  }
];
