// UX Laws (17 questions)
const UX_UX_LAWS = [
{
    id: 6,
    category: "UX Laws",
    difficulty: "Easy",
    question: "What is the primary design takeaway from Hick's Law?",
    options: [
      "Make touch targets large and place them close to each other",
      "Keep options minimal to reduce decision-making time and cognitive load",
      "Always group similar elements in the same color block",
      "Organize navigation elements strictly alphabetically"
    ],
    answerIndex: 1,
    explanation: "Hick's Law states that decision-making time grows with the number and complexity of choices.",
    example: "Reducing a massive navigation menu of 12 items down to 5 categorized categories improves user decision speeds."
  },
{
    id: 7,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What does Fitts's Law recommend for designing interactive elements?",
    options: [
      "Important actions should be small and hidden to avoid accidental clicks",
      "The time to acquire a target depends on the distance to and size of the target; make actions large and close",
      "Every page must load in less than 400 milliseconds",
      "Elements that are physically close are perceived as a single group"
    ],
    answerIndex: 1,
    explanation: "Fitts's Law states that larger and closer targets are faster and easier to acquire/click.",
    example: "Placing a massive Primary CTA button near the bottom of a mobile screen within easy thumb reach."
  },
{
    id: 31,
    category: "UX Laws",
    difficulty: "Easy",
    question: "What does Jakob's Law state about user expectations?",
    options: [
      "Users prefer websites that look unique and unlike anything they've seen before",
      "Users spend most of their time on other sites and expect your site to work the same way",
      "Users always read every word on a page before clicking",
      "Users prefer mobile apps over desktop websites in all contexts"
    ],
    answerIndex: 1,
    explanation: "Jakob's Law says that users build expectations from their experiences with other products, so following familiar design conventions reduces cognitive friction.",
    example: "Placing a shopping cart icon in the top-right corner, as users expect from Amazon, eBay, and most e-commerce sites."
  },
{
    id: 32,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What does Miller's Law state about short-term memory in UX design?",
    options: [
      "Users can hold unlimited items in working memory if the design is clean",
      "The average person can hold about 7 (plus or minus 2) items in working memory at one time",
      "Users process images 10x faster than text",
      "Navigation menus should have exactly 5 links for optimal scanning"
    ],
    answerIndex: 1,
    explanation: "Miller's Law informs chunking: group related information into clusters of 5–9 items to avoid overwhelming working memory.",
    example: "Displaying a phone number as '(022) 4567-8901' instead of '02245678901' uses chunking to improve recall."
  },
{
    id: 33,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What is the key idea behind the 'Peak-End Rule' in UX design?",
    options: [
      "Users judge a product mainly by its loading performance peak speeds",
      "Users judge an experience based on how it felt at its most intense moment and at its end",
      "Users value the beginning of an experience above everything else",
      "Users prefer a medium level of intensity throughout an interaction"
    ],
    answerIndex: 1,
    explanation: "The Peak-End Rule (Kahneman) says users remember and judge experiences by the emotional peak and how they ended, not the average.",
    example: "Duolingo ends lessons with a celebratory animation — ensuring the experience ends on a positive note."
  },
{
    id: 34,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What is the Doherty Threshold in UX performance?",
    options: [
      "A visual design rule stating contrast must exceed 4.5:1",
      "The principle that system feedback under 400ms keeps users engaged and in flow",
      "The maximum number of colors allowed in a design system palette",
      "The minimum font size required for accessible body text"
    ],
    answerIndex: 1,
    explanation: "The Doherty Threshold states that productivity and engagement soar when systems respond in under 400 milliseconds.",
    example: "Google Search delivers results in under 200ms to keep users engaged and prevent them from losing their train of thought."
  },
{
    id: 35,
    category: "UX Laws",
    difficulty: "Easy",
    question: "What does the Law of Proximity (Gestalt) say about how users perceive groups?",
    options: [
      "Objects that look similar are grouped mentally by users",
      "Objects that are close together in space are perceived as related or belonging to the same group",
      "The largest element on the screen is always the most important",
      "Users read left-to-right then top-to-bottom without exception"
    ],
    answerIndex: 1,
    explanation: "Proximity creates visual groupings without borders or containers — elements placed near each other are seen as a unit.",
    example: "Placing a label directly above or beside its input field so users understand they are linked."
  },
{
    id: 36,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What is the Zeigarnik Effect and how does it apply to UX design?",
    options: [
      "Users forget completed tasks almost instantly; use confirmation messages to reinforce",
      "People remember uncompleted or interrupted tasks better than completed ones",
      "Users are more likely to click on red buttons over blue ones",
      "Cognitive load decreases as screen brightness increases"
    ],
    answerIndex: 1,
    explanation: "The Zeigarnik Effect is exploited by progress bars and streaks — showing an incomplete state motivates users to finish.",
    example: "LinkedIn's profile completion bar ('Your profile is 70% complete') drives users to fill in missing sections."
  },
{
    id: 37,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What does Tesler's Law (Law of Conservation of Complexity) state?",
    options: [
      "Every design has a maximum number of colors allowed",
      "Complexity cannot be destroyed — it can only be moved from one place to another (from user to system)",
      "Simple designs always outperform complex ones in all user tests",
      "Fewer pages in a web app always improves the user experience"
    ],
    answerIndex: 1,
    explanation: "Tesler's Law says that every system has an inherent complexity — good design moves that complexity from the user to the system.",
    example: "One-click ordering (Amazon) hides the complex billing, address, and payment confirmation from the user — the system handles it."
  },
{
    id: 101,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What does the Aesthetic-Usability Effect state?",
    options: [
      "Users always prefer complex, detailed interfaces over simple ones",
      "Users often perceive aesthetically pleasing design as design that's more usable",
      "Functionality must always be sacrificed for visual beauty",
      "Beautiful designs are harder to develop and maintain"
    ],
    answerIndex: 1,
    explanation: "A visually pleasing interface makes users more tolerant of minor usability issues, because they perceive it as better and easier to use.",
    example: "Users rating a beautiful but slightly clunky app as 'highly usable' while heavily criticizing a perfectly functional but ugly app."
  },
{
    id: 102,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What is Postel's Law (The Robustness Principle)?",
    options: [
      "Always design for the most robust, high-end devices",
      "Be conservative in what you do, be liberal in what you accept from others",
      "Interfaces should break if users enter invalid data",
      "Every feature must be tested by at least five users"
    ],
    answerIndex: 1,
    explanation: "In UX, this means accepting diverse input formats from users (like different date formats or phone numbers with/without dashes) while providing clear, standardized output.",
    example: "A form field that accepts both '555-1234' and '5551234' but always displays it cleanly formatted to the user."
  },
{
    id: 103,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What does the Serial Position Effect describe?",
    options: [
      "Users always interact with items in the exact center of a screen",
      "Users have a propensity to best remember the first and last items in a series",
      "Users read text exclusively in an F-shaped pattern",
      "Navigation links must be alphabetized for usability"
    ],
    answerIndex: 1,
    explanation: "Because of the primacy (first) and recency (last) effects, users recall items at the beginning and end of a list better than items in the middle.",
    example: "Placing the most important navigation links (like 'Home' and 'Profile') at the extreme left and right ends of a tab bar."
  },
{
    id: 104,
    category: "UX Laws",
    difficulty: "Easy",
    question: "What is the Von Restorff Effect (Isolation Effect)?",
    options: [
      "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered",
      "Users ignore content that looks like an advertisement",
      "Isolating users in a quiet room yields better research results",
      "Text in isolation is harder to read than text in blocks"
    ],
    answerIndex: 1,
    explanation: "Making an element visually distinct (like changing its color or size) draws attention and makes it memorable.",
    example: "Making a pricing page's 'Pro' plan larger and giving it a distinct background color so it stands out from the 'Basic' and 'Enterprise' plans."
  },
{
    id: 105,
    category: "UX Laws",
    difficulty: "Medium",
    question: "How does the Pareto Principle (80/20 rule) apply to UX?",
    options: [
      "80% of users will abandon a site within 20 seconds",
      "80% of effects come from 20% of the causes (e.g., 80% of users only use 20% of features)",
      "Design should consist of 80% white space and 20% content",
      "Developers should spend 80% of time coding and 20% planning"
    ],
    answerIndex: 1,
    explanation: "The 80/20 rule suggests focusing optimization and design efforts on the 20% of features or flows that users rely on the most.",
    example: "Hiding advanced, rarely-used settings under an 'Advanced' menu while keeping the top 20% of critical actions always visible."
  },
{
    id: 106,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What does Parkinson's Law state in relation to user behavior?",
    options: [
      "Work expands so as to fill the time available for its completion",
      "Interfaces that load slowly are perceived as higher quality",
      "Users will always choose the path of most resistance",
      "More features inevitably lead to lower user satisfaction"
    ],
    answerIndex: 1,
    explanation: "If you give users too much time or space to complete a task, they will take it. Constraints can actually improve focus and speed.",
    example: "Autofilling an OTP code from SMS so users don't have to spend time opening their messages app, speeding up login."
  },
{
    id: 171,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What is 'Conway's Law'?",
    options: [
      "Design systems must be updated weekly",
      "Organizations design systems that mirror their own internal communication structures",
      "Every app eventually expands to include messaging",
      "Users prefer the first design they see"
    ],
    answerIndex: 1,
    explanation: "If a company operates in silos, their software will feel fragmented. Fixing a disjointed UX often requires fixing the company's internal organization.",
    example: "A website having four completely different navigation menus because it was built by four different internal departments that don't talk to each other."
  },
{
    id: 179,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What is 'Hofstadter's Law' (often applied to UX/Dev estimation)?",
    options: [
      "Tasks always take less time than you expect",
      "It always takes longer than you expect, even when you take into account Hofstadter's Law",
      "Design quality degrades over time",
      "Users prefer the first solution they find"
    ],
    answerIndex: 1,
    explanation: "This self-referential adage highlights the difficulty of estimating complex creative and technical work.",
    example: "Estimating a UI redesign will take 2 weeks, padding it to 3 weeks just in case, and it still ends up taking 4 weeks."
  }
];
