// Ethics & Patterns (11 questions)
const UX_ETHICS___PATTERNS = [
{
    id: 97,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What is a 'Dark Pattern' in UX design?",
    options: [
      "A color palette using only dark backgrounds and muted tones",
      "A deliberately deceptive UI design that tricks users into doing something they didn't intend",
      "A UI pattern for night mode that reduces eye strain",
      "A complex advanced interaction only visible to expert users"
    ],
    answerIndex: 1,
    explanation: "Dark patterns exploit user psychology against their interests — common examples include hidden subscription costs, roach motels, and confirmshaming.",
    example: "A 'free trial' that requires credit card details without clearly stating when charges begin is a dark pattern."
  },
{
    id: 98,
    category: "Ethics & Patterns",
    difficulty: "Hard",
    question: "What is 'Confirmshaming' as a dark UX pattern?",
    options: [
      "Asking users to confirm every single action they take on the app",
      "Writing opt-out button text that shames the user for declining (e.g. 'No thanks, I don't want to save money')",
      "Sending shame-based push notifications to re-engage inactive users",
      "Requiring email confirmation before users can delete their accounts"
    ],
    answerIndex: 1,
    explanation: "Confirmshaming uses emotional manipulation to guilt users into opting in — it's considered an unethical design practice.",
    example: "A popup saying 'Yes, improve my productivity!' vs. 'No thanks, I prefer to stay inefficient.'"
  },
{
    id: 99,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What does 'Inclusive Design' mean in the context of UX?",
    options: [
      "Including all stakeholders in every design review meeting",
      "Designing products that are accessible and usable by people with the widest possible range of abilities and circumstances",
      "Including all browsers and operating systems in the QA testing plan",
      "A design philosophy requiring open-source licensing for all UI components"
    ],
    answerIndex: 1,
    explanation: "Inclusive design considers the full spectrum of human diversity — including disability, age, language, culture, and situational limitations.",
    example: "Designing for one-handed mobile use, poor lighting conditions, low bandwidth, and screen readers simultaneously."
  },
{
    id: 141,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What is the 'Roach Motel' dark pattern?",
    options: [
      "An interface infested with software bugs",
      "A design that makes it very easy to get into a situation (like a subscription) but extremely hard to get out of",
      "A cheap, low-quality UI template",
      "Selling user data to third-party ad networks"
    ],
    answerIndex: 1,
    explanation: "Roach motels trap users. The entry path is smooth, but the exit path is hidden, confusing, or requires calling customer service.",
    example: "Signing up for a gym membership takes 1 click online, but canceling requires mailing a physical notarized letter."
  },
{
    id: 142,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What is 'Privacy Zuckering'?",
    options: [
      "A feature that auto-tags photos using AI",
      "Tricking users into publicly sharing more personal information about themselves than they intended to",
      "Creating a social network for a niche audience",
      "An algorithm that prioritizes controversial content"
    ],
    answerIndex: 1,
    explanation: "Named after Facebook's early privacy practices, this pattern uses confusing language or buried toggles to extract excessive data permissions.",
    example: "A complex privacy settings page where selecting 'Off' actually means 'Turn off privacy protections'."
  },
{
    id: 143,
    category: "Ethics & Patterns",
    difficulty: "Easy",
    question: "What is 'Forced Continuity'?",
    options: [
      "Making an animation loop infinitely",
      "Offering a 'free trial' that automatically starts charging the user's credit card without a reminder when the trial ends",
      "Forcing a user to scroll through a long Terms of Service document",
      "Requiring an internet connection to use a local app"
    ],
    answerIndex: 1,
    explanation: "This dark pattern relies on users forgetting they signed up. Ethical companies send a reminder email before the first charge hits.",
    example: "A 7-day free trial that requires a credit card upfront and silently bills $99 on day 8."
  },
{
    id: 144,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What is 'Price Drip' (or Drip Pricing)?",
    options: [
      "A UI animation showing coins dropping",
      "Showing a low initial price, but revealing unavoidable fees (taxes, service charges) only at the very final checkout step",
      "Gradually lowering the price of an item the longer the user stays on the page",
      "A subscription that charges a tiny amount every day"
    ],
    answerIndex: 1,
    explanation: "Drip pricing creates false expectations and frustration. Users invest time going through checkout only to find the real price is much higher.",
    example: "Booking a $50 flight that suddenly becomes $120 after adding 'mandatory processing and seat assignment fees' on the final screen."
  },
{
    id: 167,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What is 'Sneak into Basket'?",
    options: [
      "A gamification mechanic rewarding users for finding hidden items",
      "A dark pattern where extra items are automatically added to a user's shopping cart without their explicit consent",
      "A technique for optimizing database queries",
      "A marketing term for targeted ads"
    ],
    answerIndex: 1,
    explanation: "This deceptive practice relies on users not reviewing their cart carefully before paying.",
    example: "Buying a laptop online and finding a $50 'Extended Warranty' pre-checked and added to the total cost."
  },
{
    id: 176,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What is 'Misdirection' as a dark pattern?",
    options: [
      "A broken link that leads to a 404 page",
      "Using visual design (like bright colors) to focus the user's attention on one thing to distract them from another (like a hidden fee or opt-out button)",
      "Giving users driving directions that are incorrect",
      "A server redirect error"
    ],
    answerIndex: 1,
    explanation: "Misdirection uses standard UX principles (like visual hierarchy) maliciously, guiding the eye away from information the business wants to hide.",
    example: "Making the 'Accept All Cookies' button a massive, vibrant green, while 'Manage Preferences' is tiny, low-contrast gray text hidden in the corner."
  },
{
    id: 190,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What is the 'Bait and Switch' dark pattern?",
    options: [
      "Changing the app's color scheme at night",
      "The user sets out to do one thing, but a different, undesirable thing happens instead",
      "A phishing attack to steal passwords",
      "Switching a user's subscription to a cheaper tier"
    ],
    answerIndex: 1,
    explanation: "This pattern violates trust. The system promises a specific outcome for an action but executes a hidden agenda instead.",
    example: "Clicking the 'X' to close an aggressive popup ad, but the 'X' actually triggers a software download."
  },
{
    id: 199,
    category: "Ethics & Patterns",
    difficulty: "Medium",
    question: "What is 'Confirmshaming'?",
    options: [
      "Confirming an action twice",
      "A dark pattern that uses guilt-inducing language in the opt-out button to manipulate users into opting in",
      "Publicly shaming users who abandon carts",
      "An error state when a password is wrong"
    ],
    answerIndex: 1,
    explanation: "This pattern relies on emotional manipulation rather than offering genuine value, damaging brand trust over time.",
    example: "A newsletter popup where the decline button says: 'No thanks, I prefer to stay ignorant and poor.'"
  }
];
