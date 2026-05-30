/* ═══════════════════════════════════════════════
   QUESTIONS — Interactive MCQ Questions from Class PDFs
   buildFlashcardsHTML() returns HTML string
   (called by renderLearn in main.js)
   ═══════════════════════════════════════════════ */

const UX_QUESTIONS = [
  // ── 2. Understanding of UX-UI ─────────────────
  {
    id: 1,
    category: "UX Research",
    difficulty: "Easy",
    question: "What are the three core aspects balanced by User Experience (UX) design?",
    options: [
      "Visceral aesthetics, code performance, database design",
      "Intuitive/visual design, user satisfaction, and business financial/strategic goals",
      "Typography scales, color harmony, and CSS grid frameworks",
      "Social media sharing, page load speed, and SEO meta tags"
    ],
    answerIndex: 1,
    explanation: "UX balances visually appealing design, user satisfaction, and the business's financial and strategic goals.",
    example: "Without solid UX, even a visually stunning design (UI) or a profitable business model can fail if it doesn't resonate with users."
  },
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

  // ── 3. Emotional Design ───────────────────────
  {
    id: 3,
    category: "Emotional Design",
    difficulty: "Medium",
    question: "According to Don Norman's levels of Emotional Design, what is 'Visceral Design'?",
    options: [
      "The level focusing on usability, functionality, and how a product works",
      "The level focusing on long-term self-image, personal values, and status",
      "The level of immediate, instinctive reactions to the look and feel of a product",
      "The level of logical and mathematical problem solving"
    ],
    answerIndex: 2,
    explanation: "Visceral design targets immediate, subconscious reactions to visual appeal and initial sensory feel.",
    example: "A sleek, premium-feeling smartphone design triggers a positive visceral reaction at first glance."
  },
  {
    id: 4,
    category: "Emotional Design",
    difficulty: "Medium",
    question: "Which level of Emotional Design is concerned with usability, performance, and functionality?",
    options: [
      "Visceral Design",
      "Behavioral Design",
      "Reflective Design",
      "Aesthetic Design"
    ],
    answerIndex: 1,
    explanation: "Behavioral design is all about usability, performance, ease of use, and how effectively a product helps users complete tasks.",
    example: "A car with a clean, intuitive dashboard layout that enhances driving comfort is an example of strong behavioral design."
  },
  {
    id: 5,
    category: "Emotional Design",
    difficulty: "Hard",
    question: "Which level of Don Norman's Emotional Design model focuses on personal meaning, self-image, and nostalgia?",
    options: [
      "Visceral Design",
      "Behavioral Design",
      "Reflective Design",
      "Cognitive Design"
    ],
    answerIndex: 2,
    explanation: "Reflective design is about self-identity, memories, personal pride, and how a product represents the user in society.",
    example: "Owning a limited-edition watch or wearing an Apple Watch because it aligns with a modern, tech-savvy lifestyle."
  },

  // ── 4. UX Psychology in Design ────────────────
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

  // ── 5. Project Topic Selection ────────────────
  {
    id: 8,
    category: "UX Research",
    difficulty: "Easy",
    question: "When selecting a project topic for a UX portfolio, what is a key recommendation from class slides?",
    options: [
      "Pick a topic solely because it requires the most complex code",
      "Aim for a diverse range of projects to showcase versatility across industries and platforms",
      "Always select topics with no direct competitors to avoid comparisons",
      "Focus exclusively on redesigning large established platforms like Google or Amazon"
    ],
    answerIndex: 1,
    explanation: "Diverse portfolio projects demonstrate versatility, adaptability, and the ability to solve problems across various contexts.",
    example: "Having a mix of mobile apps, responsive B2B web portals, and local service designs in your portfolio."
  },

  // ── 5.1 Requirement Gathering ─────────────────
  {
    id: 9,
    category: "UX Research",
    difficulty: "Medium",
    question: "Which of the following is NOT one of Peter Morville's 7 key UX Hive factors that influence user experience?",
    options: [
      "Desirable",
      "Credible",
      "Scalable",
      "Findable"
    ],
    answerIndex: 2,
    explanation: "The 7 factors are: Usable, Useful, Desirable, Findable, Accessible, Credible, and Valuable.",
    example: "Making a site 'Findable' ensures users can easily find content, whereas 'Credible' ensures they trust the data presented."
  },
  {
    id: 10,
    category: "UX Research",
    difficulty: "Easy",
    question: "Why is aligning User Goals with Business Goals critical in Requirement Gathering?",
    options: [
      "It allows developers to skip wireframing and start coding immediately",
      "It balances user satisfaction with measurable business outcomes (e.g. conversions or retention)",
      "It ensures the app works without a database backend",
      "It eliminates the need to perform accessibility audits"
    ],
    answerIndex: 1,
    explanation: "Proper alignment ensures the product is functional, user-centric, and profitable for the business.",
    example: "Designing a checkout form that is incredibly easy to fill out (user goal) which directly increases checkout conversions (business KPI)."
  },

  // ── 6. Planning and Strategy in UX Design ─────
  {
    id: 11,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is the primary role of a UX Business Strategy?",
    options: [
      "Defining the visual spacing system in CSS files",
      "A plan that bridges user goals and business objectives, ensuring design decisions support revenue or brand metrics",
      "Conducting usability testing exclusively on mobile devices",
      "Writing technical user guides for system administrators"
    ],
    answerIndex: 1,
    explanation: "A UX Business Strategy connects user needs with business goals, reducing product risk and creating a structured plan.",
    example: "Setting a clear objective to reduce shopping cart bounce rate by 20% by simplifying checkout navigation."
  },

  // ── 7. Interviews ─────────────────────────────
  {
    id: 12,
    category: "UX Research",
    difficulty: "Easy",
    question: "When conducting a user interview, what is the best practice for asking questions?",
    options: [
      "Ask leading questions that guide the user to say they like your design",
      "Prepare open-ended questions that allow participants to explain their behaviors and challenges in detail",
      "Ask closed Yes/No questions to speed up the interview process",
      "Critique and correct the user's opinions during the session"
    ],
    answerIndex: 1,
    explanation: "Open-ended questions prevent bias and encourage rich, qualitative feedback about a user's actual habits.",
    example: "Asking 'Can you walk me through your typical online shopping workflow?' instead of 'Do you like our online shopping app?'"
  },
  {
    id: 13,
    category: "UX Research",
    difficulty: "Easy",
    question: "Why is building rapport with participants crucial at the start of a UX interview?",
    options: [
      "To convince them to sign up for a paid plan during the interview",
      "To make them feel comfortable and secure so they open up and share honest feedback",
      "To test their memory of the brand logo",
      "To show them that you are the design expert"
    ],
    answerIndex: 1,
    explanation: "Participants who feel comfortable are more likely to share genuine pain points and frustration without feeling judged.",
    example: "Introducing yourself, explaining that there are no wrong answers, and thanking them for their time."
  },

  // ── 9. User Research Methods ──────────────────
  {
    id: 14,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is the main distinction between Qualitative and Quantitative user research?",
    options: [
      "Qualitative uses code libraries; Quantitative is done manually on paper",
      "Qualitative explores Behaviors/Emotions (Why & How); Quantitative measures numerical data and patterns (What & How Many)",
      "Qualitative is fast and cheap; Quantitative is slow and expensive",
      "Qualitative is done on web browsers; Quantitative is done on mobile apps"
    ],
    answerIndex: 1,
    explanation: "Qualitative research uses interviews or usability tests to explore motivations. Quantitative research uses surveys or web analytics to track numbers.",
    example: "Interviews reveal why users find checkout confusing; database analytics show that 60% of users leave at that step."
  },
  {
    id: 15,
    category: "UX Research",
    difficulty: "Medium",
    question: "Which of the following is considered a Qualitative user research method?",
    options: [
      "Web traffic analytics reporting exit pages",
      "A/B testing two layout colors",
      "Contextual Inquiry (observing users in their natural environment)",
      "Google Form surveys answered by 500 respondents"
    ],
    answerIndex: 2,
    explanation: "Contextual inquiries are qualitative because they focus on observing user behavior and gathering deep context.",
    example: "Watching a warehouse manager use shipping software in their actual warehouse to see environmental distractions."
  },

  // ── 10. User Persona ──────────────────────────
  {
    id: 16,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is a User Persona in UX design?",
    options: [
      "An actual profile of a specific client who is funding the project",
      "A semi-fictional representation of your target user, based on real data and research",
      "An assembly of standard demographic icons used on landing pages",
      "A list of programming technologies the user must install"
    ],
    answerIndex: 1,
    explanation: "User Personas are created from user research to keep design decisions grounded in real user habits and needs rather than assumptions.",
    example: "A persona named 'Maya, 28, Freelance designer' who needs quick invoice files on mobile."
  },

  // ── 11. Empathy Map ───────────────────────────
  {
    id: 17,
    category: "UX Research",
    difficulty: "Easy",
    question: "What are the four quadrants of a standard UX Empathy Map?",
    options: [
      "Usable, Desirable, Accessible, Credible",
      "Say, Think, Do, Feel",
      "Visceral, Behavioral, Reflective, Aesthetic",
      "Direct, Indirect, Replacement, Focus"
    ],
    answerIndex: 1,
    explanation: "An Empathy Map segments research findings into four categories: Say (what they verbalize), Think (unsaid beliefs), Do (actions), and Feel (emotions).",
    example: "Mapping a user's frustration under 'Feel' to design a calming, simpler signup process."
  },

  // ── 12. Customer Journey Map ──────────────────
  {
    id: 18,
    category: "UX Research",
    difficulty: "Medium",
    question: "In a Customer Journey Map (CJM), what is the purpose of documenting 'Opportunities'?",
    options: [
      "Listing potential direct competitors to acquire",
      "Identifying areas for improvement in the user experience by optimizing weak touchpoints",
      "Calculating the development cost of specific frontend features",
      "Writing promotional offers to display in email newsletters"
    ],
    answerIndex: 1,
    explanation: "Opportunities represent design ideas that address users' negative emotional scores or high friction at specific touchpoints.",
    example: "Seeing users feel anxious waiting for a ride (pain point), and adding a live map tracker (opportunity)."
  },

  // ── 13. Define ────────────────────────────────
  {
    id: 19,
    category: "UX Research",
    difficulty: "Medium",
    question: "What are the three components of a Point of View (POV) statement in the Define Phase?",
    options: [
      "Grid, Font, Accent Color",
      "User, Need, Insight",
      "Competitor, Strengths, Weaknesses",
      "Task, Decision, Outcome"
    ],
    answerIndex: 1,
    explanation: "A Point of View statement frames the problem as: [User] needs [Need] because of [Insight].",
    example: "Busy professionals (User) need a fast payment setup (Need) because they abandon shopping checkouts during lengthy steps (Insight)."
  },

  // ── 14. Competitive Analysis ──────────────────
  {
    id: 20,
    category: "UX Research",
    difficulty: "Medium",
    question: "In Competitive Analysis, what is an 'Indirect Competitor'?",
    options: [
      "A competitor offering identical products to the same target audience",
      "A competitor offering different solutions but fulfilling the same user need",
      "An alternative way of solving a problem that does not use technology",
      "A developer building a cloning product of your software"
    ],
    answerIndex: 1,
    explanation: "Indirect competitors solve the same core problem/need for the user but through a different product format.",
    example: "Uber (ride-hailing) vs. Public Transport (buses/trains) are indirect competitors for moving people."
  },

  // ── 15. Ideation ──────────────────────────────
  {
    id: 21,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is the primary goal in the initial stages of a brainstorming session?",
    options: [
      "Critically evaluate each idea immediately to eliminate bad ones",
      "Generate a high quantity of ideas without criticism or judgment",
      "Create high-fidelity screens for the best solution",
      "Calculate budget limits and project deadlines"
    ],
    answerIndex: 1,
    explanation: "Initial brainstorming focuses on quantity over quality, avoiding criticism to stimulate creative thinking and discover innovative answers.",
    example: "Setting a timer and doing 'Crazy Eights' (sketching 8 ideas in 8 minutes) to explore multiple layouts."
  },

  // ── 16. User Scenario ─────────────────────────
  {
    id: 22,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is a User Scenario in UX design?",
    options: [
      "A flowchart outlining all functional code conditionals",
      "A narrative describing how a user interacts with a product in a real-life situation to achieve a goal",
      "A contractual agreement specifying software warranties",
      "A design review performed by usability auditors"
    ],
    answerIndex: 1,
    explanation: "A user scenario places the user persona in a contextual narrative, focusing on motivations, settings, and final outcomes.",
    example: "Writing: 'Amit needs to book a cab quickly because it has started raining, and he is carrying fragile files.'"
  },

  // ── 17. User Flow and Task Flow ───────────────
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

  // ── 18. Information Architecture ──────────────
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

  // ── 19. Accessibility ─────────────────────────
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

  // ── Gestalt Principles ────────────────────────
  {
    id: 27,
    category: "Gestalt",
    difficulty: "Easy",
    question: "What does the Gestalt principle of 'Closure' describe?",
    options: [
      "Closing an application returns users to the desktop environment",
      "The mind automatically fills in missing parts of a shape to perceive a complete whole",
      "Placing boundaries around elements to group them together",
      "Structuring websites with a header and footer grid"
    ],
    answerIndex: 1,
    explanation: "The human brain hates incomplete figures and will mentally fill in gaps to recognize a full shape.",
    example: "A circular loader with missing gaps that the brain still interprets as a single rotating ring."
  },

  // ── Heuristics ────────────────────────────────
  {
    id: 28,
    category: "Heuristics",
    difficulty: "Medium",
    question: "In Jakob Nielsen's Usability Heuristics, what does 'Recognition over Recall' mean?",
    options: [
      "Users should recognize the brand logo immediately on every page",
      "Minimize the user's memory load by making options, actions, and elements visible rather than making them remember information",
      "System alerts should only be visible for 3 seconds",
      "Experts should recognize shortcut options without reading descriptions"
    ],
    answerIndex: 1,
    explanation: "It is much easier for a user to choose from visible options than to recall items from memory.",
    example: "Displaying a list of 'Recent Files' or search suggestions instead of forcing users to type full filenames."
  },
  {
    id: 29,
    category: "Heuristics",
    difficulty: "Medium",
    question: "What is an example of the 'Visibility of System Status' heuristic?",
    options: [
      "Showing the company's annual financial report on the landing page",
      "Providing a progress bar and loading spinner when a user uploads a large PDF",
      "Ensuring all buttons have custom colorful hover states",
      "Allowing users to edit their profile details without saving"
    ],
    answerIndex: 1,
    explanation: "Systems should always communicate what is happening in the background through appropriate, timely feedback.",
    example: "Displaying 'Uploading files (45%)...' let's users know the system is active and responsive."
  },
  {
    id: 30,
    category: "Heuristics",
    difficulty: "Medium",
    question: "What does the heuristic 'Error Prevention' recommend?",
    options: [
      "Writing extremely friendly error screens with cute illustrations after a failure",
      "Designing interfaces carefully to prevent errors from happening in the first place",
      "Automatically deleting incorrect data entered by the user",
      "Locking accounts after a single failed login attempt"
    ],
    answerIndex: 1,
    explanation: "Preventing errors before they occur is much better than presenting users with helpful error messages later.",
    example: "Disabling a 'Submit' button until all required form fields have valid characters."
  },

  // ── UX Laws (continued) ───────────────────────
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

  // ── Gestalt Principles (continued) ────────────
  {
    id: 38,
    category: "Gestalt",
    difficulty: "Easy",
    question: "What does the Gestalt principle of 'Similarity' state?",
    options: [
      "Elements that are close together are grouped as related",
      "Elements that share visual characteristics (color, shape, size) are perceived as related",
      "The mind completes incomplete shapes automatically",
      "Users always look at the largest element first"
    ],
    answerIndex: 1,
    explanation: "Similarity makes it easy to group related items visually — matching color or shape implies a shared relationship or function.",
    example: "All navigation links sharing the same font weight and color signal they are in the same category."
  },
  {
    id: 39,
    category: "Gestalt",
    difficulty: "Medium",
    question: "What does the Gestalt principle of 'Figure-Ground' describe?",
    options: [
      "The ability to distinguish between foreground content and its background",
      "The rule that foreground text must be white on dark backgrounds",
      "Placing the most important button at the bottom of a mobile screen",
      "Using a grid to align all elements to a baseline"
    ],
    answerIndex: 1,
    explanation: "Figure-ground perception is the visual ability to separate an object (figure) from its surroundings (ground). Good design keeps the two distinct.",
    example: "A modal dialog darkens the page behind it to clearly separate the foreground modal from the background content."
  },
  {
    id: 40,
    category: "Gestalt",
    difficulty: "Medium",
    question: "What is the Gestalt principle of 'Continuity'?",
    options: [
      "Users will scroll endlessly on infinite-scroll pages",
      "The eye naturally follows paths, curves, and lines, tending to prefer continuous smooth paths over abrupt changes",
      "Design elements should repeat across every page for brand consistency",
      "Visual hierarchy should be maintained from desktop to mobile"
    ],
    answerIndex: 1,
    explanation: "Continuity guides users' eyes along a visual path — lines and curves naturally lead attention from one element to the next.",
    example: "A progress indicator with a connecting line guides users through a multi-step checkout process sequentially."
  },
  {
    id: 41,
    category: "Gestalt",
    difficulty: "Hard",
    question: "What does the Gestalt principle of 'Common Fate' describe?",
    options: [
      "Elements that share the same color are perceived to serve the same purpose",
      "Elements moving in the same direction at the same time are perceived as a group",
      "All elements on a page should animate at the same speed",
      "Users prefer predictable outcomes in interactive designs"
    ],
    answerIndex: 1,
    explanation: "Common Fate groups elements by their shared motion or direction — often used in animation and interactive components.",
    example: "A row of icons that all shift left together when a sidebar opens signals they are all part of the same group."
  },

  // ── Heuristics (continued) ────────────────────
  {
    id: 42,
    category: "Heuristics",
    difficulty: "Easy",
    question: "What does Nielsen's heuristic 'User Control and Freedom' mean?",
    options: [
      "Users should be given administrator privileges in all systems",
      "Users should be able to undo or exit unintended states easily without going through a long process",
      "Users must confirm every action before the system processes it",
      "The design should prevent users from accessing advanced settings"
    ],
    answerIndex: 1,
    explanation: "Providing undo, redo, cancel, and back controls gives users a feeling of control and safety, preventing frustration.",
    example: "Gmail's 'Undo Send' feature lets users cancel a sent email within 5–30 seconds."
  },
  {
    id: 43,
    category: "Heuristics",
    difficulty: "Medium",
    question: "What does the heuristic 'Consistency and Standards' address?",
    options: [
      "All UI components must use identical hex color codes",
      "Users should not have to wonder whether different words, situations, or actions mean the same thing — follow platform conventions",
      "Every page must have the same grid layout and spacing",
      "Design systems must be documented in Figma at all times"
    ],
    answerIndex: 1,
    explanation: "Consistent use of language, layout, and interactions reduces cognitive load and learning time across the product.",
    example: "Using 'Save' everywhere instead of alternating between 'Save', 'Submit', and 'Confirm' on different screens."
  },
  {
    id: 44,
    category: "Heuristics",
    difficulty: "Medium",
    question: "What does 'Aesthetic and Minimalist Design' mean as a usability heuristic?",
    options: [
      "Only use one font and one color in the entire application",
      "Interfaces should not contain information that is irrelevant or rarely needed, as it competes with relevant content",
      "The product should win design awards to be considered minimal",
      "Remove all text from interfaces and use only icons"
    ],
    answerIndex: 1,
    explanation: "Every unit of irrelevant information competes with relevant information and dilutes the relative visibility of key content.",
    example: "Removing promotional banners, legal disclaimers, and unused menu items from a product configuration screen."
  },
  {
    id: 45,
    category: "Heuristics",
    difficulty: "Hard",
    question: "What does the heuristic 'Flexibility and Efficiency of Use' promote?",
    options: [
      "The app should run equally fast on all devices regardless of processing power",
      "Accelerators (hidden from novices) that allow expert users to speed up interactions",
      "All users must receive the same onboarding experience irrespective of skill level",
      "All API calls should be batched to avoid network overhead"
    ],
    answerIndex: 1,
    explanation: "Design for both novices and experts: novices use guided flows while experts use keyboard shortcuts, gestures, and saved presets.",
    example: "Photoshop showing keyboard shortcut labels next to menu items so experts can memorize them over time."
  },
  {
    id: 46,
    category: "Heuristics",
    difficulty: "Medium",
    question: "Which Nielsen heuristic is violated when a button disappears during a long upload process?",
    options: [
      "Match Between System and the Real World",
      "Visibility of System Status",
      "Help and Documentation",
      "Flexibility and Efficiency of Use"
    ],
    answerIndex: 1,
    explanation: "Users need to know what the system is doing at all times — disappearing UI with no feedback violates the Visibility of System Status heuristic.",
    example: "Showing a progress bar with percentage complete while a file uploads instead of freezing the interface."
  },

  // ── Emotional Design (continued) ──────────────
  {
    id: 47,
    category: "Emotional Design",
    difficulty: "Medium",
    question: "What is 'Microinteraction' and why does it contribute to emotional design?",
    options: [
      "Small database transactions that speed up server responses",
      "Tiny, single-purpose animations or feedback moments that make an interface feel alive and delightful",
      "Micro-sized UI components used only on wearable devices",
      "Code snippets that run inside a web worker thread"
    ],
    answerIndex: 1,
    explanation: "Microinteractions create a sense of responsiveness and personality — they reinforce the behavioral and visceral design levels.",
    example: "Twitter's heart icon 'bursting' into particles when you like a tweet is a microinteraction that triggers a positive visceral reaction."
  },
  {
    id: 48,
    category: "Emotional Design",
    difficulty: "Easy",
    question: "What is 'Delight' in the context of UX and Emotional Design?",
    options: [
      "Making the product load faster than the competition",
      "Positive emotional experiences beyond user expectations that create loyalty and word-of-mouth",
      "Following all legal accessibility requirements above WCAG 2.1 AA",
      "Reducing the number of clicks required for a checkout flow"
    ],
    answerIndex: 1,
    explanation: "Delight goes beyond usability — it surprises and exceeds expectations, creating an emotional bond between the user and the product.",
    example: "Slack's loading messages ('You look great today!') are playful surprises that create brand affection."
  },
  {
    id: 49,
    category: "Emotional Design",
    difficulty: "Hard",
    question: "What is 'Emotional Contagion' and how does it influence interface design?",
    options: [
      "A virus that spreads through shared design files in Figma",
      "The tendency for users to unconsciously mirror and be influenced by the emotions expressed by the product's personality",
      "A design anti-pattern where error states spread across multiple screens",
      "The negative emotion users feel when a webpage takes more than 3 seconds to load"
    ],
    answerIndex: 1,
    explanation: "Products with a personality (tone of voice, illustrations, animations) that express warmth or playfulness influence users to feel similarly.",
    example: "Mailchimp's friendly, humorous copy ('You did it! High five!') creates a fun emotional tone that users adopt and share."
  },

  // ── UX Research Methods (continued) ───────────
  {
    id: 50,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is 'Card Sorting' used for in UX research?",
    options: [
      "A technique to shuffle flashcards for daily study sessions",
      "A research method where users organize topics into groups to reveal their mental models for information architecture",
      "A data visualization technique using Kanban columns",
      "A method to rank competitor products against your own"
    ],
    answerIndex: 1,
    explanation: "Card Sorting reveals how users naturally categorize information, helping designers build navigation systems and IA that align with user expectations.",
    example: "Asking 20 users to sort 40 website topics into groups to determine the best menu structure for a hospital website."
  },
  {
    id: 51,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'Think Aloud' protocol in usability testing?",
    options: [
      "Asking users to brainstorm new feature ideas during testing",
      "Asking participants to verbalize their thoughts, feelings, and decisions continuously as they use a product",
      "A method of recording a screen without the user knowing",
      "A technique for developers to explain their code to testers"
    ],
    answerIndex: 1,
    explanation: "Think Aloud testing surfaces hidden cognitive processes — you discover what confuses users that they would never report in a survey.",
    example: "A user thinking aloud during a checkout: 'Hmm, I'm not sure if 'Proceed' means I'm placing the order or just going to the next step.'"
  },
  {
    id: 52,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is a 'Usability Test' designed to measure?",
    options: [
      "The visual aesthetic quality of the interface",
      "How easily real users can accomplish specific tasks on a product",
      "The technical performance and server response speed",
      "Market demand for a new product category"
    ],
    answerIndex: 1,
    explanation: "Usability tests reveal task completion rates, time-on-task, error rates, and user satisfaction — all key measures of a product's usability.",
    example: "Asking 5 users to 'find and book a flight from Mumbai to Delhi' and observing where they struggle."
  },
  {
    id: 53,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is a 'Heuristic Evaluation' and who performs it?",
    options: [
      "An automated accessibility scan run by a browser plugin",
      "An expert review of a UI where evaluators judge it against a set of usability principles (heuristics)",
      "A survey sent to real end-users to rate the interface quality",
      "A visual design critique session between designers on the team"
    ],
    answerIndex: 1,
    explanation: "Heuristic Evaluation is typically performed by 3–5 usability experts who inspect a UI against established heuristics (e.g. Nielsen's 10) to find violations.",
    example: "A UX expert noting that the settings page has no 'Back' button, violating the 'User Control and Freedom' heuristic."
  },
  {
    id: 54,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is the purpose of an 'Affinity Diagram' after user research?",
    options: [
      "To create visual brand mood boards using collected user photos",
      "To cluster and organize raw research notes into themes, patterns, and insights",
      "To map all API dependencies in a product's backend architecture",
      "To schedule interviews with participants across time zones"
    ],
    answerIndex: 1,
    explanation: "Affinity Diagrams (or Affinity Maps) help teams synthesize large volumes of qualitative data into actionable insight themes.",
    example: "After 10 user interviews, placing each observation on a sticky note and grouping them into clusters like 'Navigation Confusion' and 'Missing Search'."
  },
  {
    id: 55,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is 'Desk Research' (Secondary Research) in UX?",
    options: [
      "Conducting research while sitting at a desk instead of in the field",
      "Gathering existing information (articles, reports, competitor analysis) before conducting primary research",
      "Designing wireframes directly on paper before using digital tools",
      "Reviewing code written by previous developers before adding new features"
    ],
    answerIndex: 1,
    explanation: "Secondary research provides context, benchmarks, and domain knowledge before you invest time talking to users.",
    example: "Reviewing Nielsen Norman Group reports on e-commerce checkout trends before designing a new payment flow."
  },
  {
    id: 56,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is the key difference between 'Formative' and 'Summative' usability evaluation?",
    options: [
      "Formative uses surveys; summative uses interviews",
      "Formative is done during design to improve it; summative is done after completion to measure it",
      "Formative tests mobile; summative tests desktop interfaces",
      "Formative is run by developers; summative is run by marketing teams"
    ],
    answerIndex: 1,
    explanation: "Formative evaluations catch issues early while there's still time to fix them; summative evaluations measure the quality of a finished product.",
    example: "Testing paper wireframes with 3 users to spot navigation flaws (formative) vs. running a post-launch satisfaction survey (summative)."
  },
  {
    id: 57,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is 'Survey Research' best suited for in UX?",
    options: [
      "Deep, contextual exploration of individual user motivations",
      "Collecting quantitative data from a large number of users quickly to identify patterns and attitudes",
      "Observing users in their natural environment to document behavior",
      "Generating design ideas using creative brainstorming techniques"
    ],
    answerIndex: 1,
    explanation: "Surveys are ideal for measuring attitudes, preferences, and satisfaction at scale — but they can't explain the 'why' behind the data.",
    example: "Sending a 5-question NPS survey to 2,000 active users to measure overall satisfaction and identify detractors."
  },

  // ── User Persona (continued) ──────────────────
  {
    id: 58,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is the risk of creating 'Assumption Personas' without real user research?",
    options: [
      "They take too long to create and delay the project timeline",
      "They reflect designer biases rather than real users, leading to products built for imaginary people",
      "They cannot be added to design presentations or client decks",
      "They require expensive design software to produce"
    ],
    answerIndex: 1,
    explanation: "Assumption personas (built from guesses rather than data) can mislead design decisions and result in products that fail to serve real users.",
    example: "Assuming all elderly users struggle with technology without interviewing them, then adding unnecessary tutorials they don't need."
  },
  {
    id: 59,
    category: "UX Research",
    difficulty: "Easy",
    question: "What key component typically appears in a User Persona document?",
    options: [
      "The persona's hardware specifications and RAM usage",
      "Name, photo, goals, frustrations, behaviors, and relevant demographic information",
      "A full transcript of all their social media conversations",
      "A wireframe showing how the persona would redesign the homepage"
    ],
    answerIndex: 1,
    explanation: "A rich persona document humanizes research data and keeps the team empathetic and aligned on who they are designing for.",
    example: "A persona named 'Priya, 32, Marketing Manager' with goals like 'schedule posts efficiently' and frustrations like 'too many app notifications'."
  },

  // ── Empathy Map (continued) ───────────────────
  {
    id: 60,
    category: "UX Research",
    difficulty: "Medium",
    question: "In an Empathy Map, what goes in the 'Think & Feel' quadrant?",
    options: [
      "Exact quotes the user said during an interview",
      "The user's unstated beliefs, concerns, aspirations, and internal emotions",
      "Behavioral observations logged in a research diary",
      "A list of tasks the user completed during usability testing"
    ],
    answerIndex: 1,
    explanation: "The 'Think & Feel' quadrant captures what matters to the user internally — things they wouldn't say out loud but that drive behavior.",
    example: "A user may not say they're anxious about data privacy but their hesitation during sign-up reveals this internal concern."
  },
  {
    id: 61,
    category: "UX Research",
    difficulty: "Easy",
    question: "What are 'Pains' and 'Gains' in the context of an extended Empathy Map?",
    options: [
      "Physical discomfort and rewards from exercising during UX workshops",
      "Pains are frustrations, obstacles, and risks; Gains are desired outcomes and success criteria the user wants",
      "Server errors (pains) and performance improvements (gains) from a technical audit",
      "Negative reviews (pains) and 5-star ratings (gains) collected from app stores"
    ],
    answerIndex: 1,
    explanation: "Pains and Gains extend the empathy map to align directly with Value Proposition Design — understanding what users struggle with and want to achieve.",
    example: "Pain: 'I always forget to track my daily calories.' Gain: 'I want a quick way to log meals before I forget.'"
  },

  // ── Customer Journey Map (continued) ──────────
  {
    id: 62,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'Touchpoint' in a Customer Journey Map?",
    options: [
      "A physical button on a touch-screen device",
      "Any moment of direct interaction between the user and the product, service, or brand",
      "A data point recorded by an analytics tracking tool",
      "A UI component that responds to touch gestures"
    ],
    answerIndex: 1,
    explanation: "Touchpoints span digital and physical — including ads, app screens, emails, packaging, support calls, and more.",
    example: "The moment a user clicks a search ad, lands on a product page, adds an item to cart, and calls customer support are all touchpoints."
  },
  {
    id: 63,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is the difference between a 'Current State' and 'Future State' Journey Map?",
    options: [
      "Current State maps desktop journeys; Future State maps mobile journeys",
      "Current State visualizes the existing experience to identify problems; Future State visualizes the ideal redesigned experience",
      "Current State uses real user data; Future State uses hypothetical competitor data",
      "Current State is for B2C products; Future State is for B2B products"
    ],
    answerIndex: 1,
    explanation: "Current State maps reveal pain points in today's experience; Future State maps are design artifacts that propose how the journey should feel after redesign.",
    example: "Mapping the painful multi-step current flight booking process (current state) vs. a one-screen redesigned version (future state)."
  },

  // ── Define Phase (continued) ──────────────────
  {
    id: 64,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'How Might We' (HMW) question in UX design?",
    options: [
      "A technical question about how the developer might implement a feature",
      "A reframed problem statement that opens up space for ideation and creative solutions",
      "A client proposal for a new budget allocation",
      "A question asked during user interviews to explore behavior"
    ],
    answerIndex: 1,
    explanation: "HMW questions turn POV statements into springboards for brainstorming — they're open enough to inspire many solutions but specific enough to be focused.",
    example: "From 'Users abandon checkout because it's too slow' → 'How might we reduce checkout steps to under 60 seconds?'"
  },
  {
    id: 65,
    category: "UX Research",
    difficulty: "Easy",
    question: "In the Design Thinking process, which phase immediately follows the 'Define' phase?",
    options: [
      "Prototype",
      "Test",
      "Ideate",
      "Empathize"
    ],
    answerIndex: 2,
    explanation: "Design Thinking follows: Empathize → Define → Ideate → Prototype → Test. After defining the problem clearly, teams ideate solutions.",
    example: "After defining 'Users need a faster way to track spending,' teams brainstorm apps, widgets, notifications, and voice commands."
  },

  // ── Competitive Analysis (continued) ──────────
  {
    id: 66,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'Feature Matrix' used for in Competitive Analysis?",
    options: [
      "A CSS grid system that organizes UI components in a matrix layout",
      "A table comparing features across multiple competitors to identify gaps and opportunities",
      "A mathematical model that predicts user retention rates",
      "A technical specification document for backend API endpoints"
    ],
    answerIndex: 1,
    explanation: "A feature matrix helps teams identify what competitors offer, what they're missing, and where there's an opportunity to differentiate.",
    example: "A table listing Notion, Evernote, and Bear across rows, with features like 'Tags', 'Offline mode', and 'Collaboration' as columns."
  },
  {
    id: 67,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is a 'SWOT Analysis' and how is it used in UX competitive research?",
    options: [
      "A diagram used to map information architecture for large websites",
      "An analysis of Strengths, Weaknesses, Opportunities, and Threats to understand a competitor's strategic position",
      "A survey methodology using Semantic Weighted Observation Technique",
      "A design critique framework using Stop, Watch, Observe, and Test phases"
    ],
    answerIndex: 1,
    explanation: "SWOT analysis helps UX teams understand both internal product capabilities and external market dynamics to position their design strategy.",
    example: "Noting that a competitor has strength in onboarding (S) but weakness in mobile UX (W), creating an opportunity (O) to win mobile users."
  },

  // ── Ideation (continued) ──────────────────────
  {
    id: 68,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is the 'Crazy Eights' ideation technique?",
    options: [
      "A research method where 8 users are interviewed simultaneously",
      "A sketching exercise where participants rapidly draw 8 distinct ideas in 8 minutes",
      "A Kanban board with 8 swimlanes for different design stages",
      "A design critique format where 8 designers provide feedback on one design"
    ],
    answerIndex: 1,
    explanation: "Crazy Eights forces rapid sketching to break past the obvious first idea and explore a diverse range of solutions quickly.",
    example: "A team folding A4 paper into 8 panels, then sketching 8 different app home screen layouts in 8 minutes."
  },
  {
    id: 69,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is 'SCAMPER' used for in UX ideation?",
    options: [
      "A sprint planning method for agile UX teams",
      "A creative thinking checklist (Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse) to generate new ideas",
      "A CSS animation framework for micro-interactions",
      "A security audit methodology for design systems"
    ],
    answerIndex: 1,
    explanation: "SCAMPER is an ideation technique that prompts designers to look at an existing product from 7 different creative angles to discover innovations.",
    example: "Applying 'Eliminate' to a sign-up form: what happens if we remove all optional fields? Users complete it faster → higher conversion."
  },
  {
    id: 70,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is the 'Worst Possible Idea' technique in ideation?",
    options: [
      "Asking stakeholders to list all the features they want to cut from the product",
      "Generating deliberately terrible ideas first, then reversing them to spark genuinely good solutions",
      "Identifying the weakest design in a portfolio review",
      "A technique for identifying system failure points before launch"
    ],
    answerIndex: 1,
    explanation: "Reverse thinking breaks mental blocks — once you list the worst ideas, inverting them often produces surprisingly effective, unconventional solutions.",
    example: "'Worst idea: make the loading screen 5 minutes long.' → Reversed: 'What if we entertain users during loading with a mini-game?'"
  },

  // ── Information Architecture (continued) ──────
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

  // ── Prototyping ───────────────────────────────
  {
    id: 73,
    category: "Prototyping",
    difficulty: "Easy",
    question: "What is the key difference between a 'Low-Fidelity' and 'High-Fidelity' prototype?",
    options: [
      "Low-fi uses paper; high-fi must always use Figma",
      "Low-fi prototypes are rough sketches focused on structure/concept; high-fi prototypes are polished, close to the final product",
      "Low-fi is for mobile; high-fi is exclusively for desktop screens",
      "Low-fi requires a UX developer; high-fi only requires a visual designer"
    ],
    answerIndex: 1,
    explanation: "Low-fi prototypes test concepts cheaply; high-fi prototypes test near-final design details, interactions, and content.",
    example: "Sketching checkout flows on paper (low-fi) vs. building a fully interactive clickable Figma prototype with real data (high-fi)."
  },
  {
    id: 74,
    category: "Prototyping",
    difficulty: "Medium",
    question: "What is a 'Wizard of Oz' prototype?",
    options: [
      "A prototype that only works during presentations and crashes otherwise",
      "A technique where a human manually simulates system responses behind the scenes, making the prototype appear fully functional to the user",
      "An advanced AI-powered prototype that responds to natural language",
      "A prototype built using a paid Figma plugin called Wizard"
    ],
    answerIndex: 1,
    explanation: "Wizard of Oz tests are useful for AI, voice, or complex system prototypes — a human 'Wizard' provides responses, making it feel real without building the actual system.",
    example: "Testing a voice assistant prototype by having a researcher type responses in a hidden window while the user speaks commands."
  },
  {
    id: 75,
    category: "Prototyping",
    difficulty: "Easy",
    question: "What is 'Paper Prototyping' primarily used for?",
    options: [
      "Creating final deliverables to hand off to the development team",
      "Quickly exploring and testing layout and navigation ideas before committing to digital tools",
      "Generating technical documentation for API integrations",
      "Printing design specs for client presentations"
    ],
    answerIndex: 1,
    explanation: "Paper prototyping is fast, cheap, and encourages creative risk-taking — users interact with hand-drawn screens and testers manually flip pages to simulate transitions.",
    example: "Drawing 10 screens on index cards, asking a user to 'tap' them, and manually switching cards to simulate an app flow."
  },

  // ── Interaction Design ────────────────────────
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

  // ── Accessibility (continued) ─────────────────
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

  // ── Visual Design ─────────────────────────────
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

  // ── Design Systems ────────────────────────────
  {
    id: 87,
    category: "Design Systems",
    difficulty: "Medium",
    question: "What is an 'Atomic Design' system?",
    options: [
      "A design approach developed using nuclear physics principles for data visualization",
      "A methodology by Brad Frost that builds interfaces from Atoms → Molecules → Organisms → Templates → Pages",
      "A CSS naming convention that uses atomic class utilities like TailwindCSS",
      "A system of design tokens stored in JSON and synced to code automatically"
    ],
    answerIndex: 1,
    explanation: "Atomic Design creates a shared language between design and development by breaking interfaces into reusable, compositional layers.",
    example: "A Button (atom) + Label (atom) = Form Field (molecule) → Login Form (organism) → Login Page Template."
  },
  {
    id: 88,
    category: "Design Systems",
    difficulty: "Easy",
    question: "What is a 'Design Token' in a design system?",
    options: [
      "A physical token given to designers when they access the Figma organization",
      "A named variable that stores a design decision (color, spacing, font size) and can be shared across design and code",
      "A payment method used to purchase premium UI component libraries",
      "A code review checklist for front-end developers"
    ],
    answerIndex: 1,
    explanation: "Design tokens are the bridge between design and engineering — they ensure that changing one token updates the value across all platforms.",
    example: "'--color-primary: #6C63FF' is a design token. Changing it from purple to blue instantly updates all primary buttons, links, and headers."
  },
  {
    id: 89,
    category: "Design Systems",
    difficulty: "Hard",
    question: "What is the main benefit of a 'Component Library' in a design system?",
    options: [
      "It reduces the project budget by removing the need for UX research",
      "It ensures consistency and speeds up design and development by providing reusable, tested, and documented UI components",
      "It automatically generates code from Figma designs with no developer input",
      "It replaces the need for a visual designer on product teams"
    ],
    answerIndex: 1,
    explanation: "Component libraries prevent teams from rebuilding the same buttons, forms, and cards repeatedly — ensuring visual and behavioral consistency at scale.",
    example: "Using a shared button component means every team's button looks, behaves, and is accessible in the same way."
  },

  // ── UX Research (continued) ───────────────────
  {
    id: 90,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is 'Cognitive Walkthrough' in UX evaluation?",
    options: [
      "A technique where developers read through all code comments to understand user intent",
      "A structured usability evaluation method where evaluators simulate a new user's problem-solving process step-by-step",
      "A process where users describe their daily cognitive habits during an interview",
      "A brain-mapping study used to measure user engagement biometrically"
    ],
    answerIndex: 1,
    explanation: "Cognitive Walkthroughs focus specifically on learnability — can a new user figure out how to use the product without instruction?",
    example: "An evaluator asking 'Would a first-time user know to click this icon to save their work?' at every step of the flow."
  },
  {
    id: 91,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is 'Guerrilla Usability Testing'?",
    options: [
      "A secret usability test conducted without the client's knowledge",
      "A quick, informal usability testing method done in public places with random participants for rapid feedback",
      "A competitive testing method that compares two rival apps simultaneously",
      "A development testing technique that bypasses QA review"
    ],
    answerIndex: 1,
    explanation: "Guerrilla testing is low-cost and fast — approach people in coffee shops, libraries, or public spaces, show them a prototype, and gather quick feedback.",
    example: "Taking a paper prototype to a coffee shop and asking 5 strangers to find the checkout button in exchange for a free coffee."
  },
  {
    id: 92,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'Five Second Test' in UX research?",
    options: [
      "Measuring if a webpage loads in under 5 seconds using Lighthouse",
      "Showing users a design for exactly 5 seconds, then asking what they remember to evaluate first impressions and clarity",
      "A speed-reading exercise to measure user reading comprehension",
      "Testing 5 users in 5 minutes using guerrilla methods"
    ],
    answerIndex: 1,
    explanation: "Five Second Tests reveal whether users immediately understand the purpose of a screen, the CTA, and the key message within the first glance.",
    example: "Showing a landing page for 5 seconds, then asking 'What does this company do?' and 'What would you click first?'"
  },

  // ── Psychology ────────────────────────────────
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

  // ── Ethics & Dark Patterns ────────────────────
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
    id: 100,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is 'Triangulation' in UX research methodology?",
    options: [
      "A geometric approach to laying out UI components in a triangular grid",
      "Using multiple research methods or data sources to cross-validate findings and increase confidence in conclusions",
      "Testing a design across three screen sizes: mobile, tablet, and desktop",
      "A technique where three user researchers independently analyze the same raw data"
    ],
    answerIndex: 1,
    explanation: "Triangulation strengthens research validity — if interviews, surveys, and analytics all point to the same problem, you can confidently prioritize it.",
    example: "Combining user interview findings (qualitative) with heatmap data (behavioral) and drop-off analytics (quantitative) to confirm a checkout problem."
  },

  // ── Advanced UX Laws ──────────────────────────
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

  // ── Typography ────────────────────────────────
  {
    id: 107,
    category: "Typography",
    difficulty: "Medium",
    question: "What is 'Leading' (line-height) in typography?",
    options: [
      "The space between individual characters",
      "The vertical space between baselines of successive lines of text",
      "The horizontal width of a text column",
      "The first large letter in a paragraph"
    ],
    answerIndex: 1,
    explanation: "Proper leading improves readability. Too tight and lines blur together; too loose and lines feel disconnected.",
    example: "Setting CSS `line-height: 1.5;` for body text to make paragraphs comfortable to read."
  },
  {
    id: 108,
    category: "Typography",
    difficulty: "Medium",
    question: "What is the difference between 'Kerning' and 'Tracking'?",
    options: [
      "Kerning applies to web fonts, tracking applies to print",
      "Kerning adjusts space between two specific characters; tracking adjusts uniform spacing across a block of text",
      "Kerning is vertical spacing, tracking is horizontal spacing",
      "There is no difference; they are synonyms"
    ],
    answerIndex: 1,
    explanation: "Kerning fixes awkward gaps between specific pairs (like A and V). Tracking adjusts the overall spacing (letter-spacing) across words or lines.",
    example: "Increasing the tracking (letter-spacing) on uppercase headings to make them look more elegant and legible."
  },
  {
    id: 109,
    category: "Typography",
    difficulty: "Easy",
    question: "What is the main visual difference between Serif and Sans-Serif fonts?",
    options: [
      "Serif fonts are bold; Sans-Serif fonts are light",
      "Serif fonts have small strokes or 'feet' at the ends of letters; Sans-Serif fonts do not",
      "Serif fonts are exclusively for headings; Sans-Serif for body",
      "Serif fonts are monospaced; Sans-Serif are proportional"
    ],
    answerIndex: 1,
    explanation: "'Sans' means 'without' in French. Sans-serif fonts lack the decorative strokes (serifs) found in fonts like Times New Roman.",
    example: "Using a clean sans-serif font like Inter for a modern app UI, and a serif font like Merriweather for a long-form editorial blog."
  },
  {
    id: 110,
    category: "Typography",
    difficulty: "Hard",
    question: "What is 'x-height' in typography?",
    options: [
      "The height of the tallest capital letter",
      "The height of lowercase letters (specifically the letter 'x') excluding ascenders and descenders",
      "The total height of the font file measured in pixels",
      "The space between the baseline and the bottom of the page"
    ],
    answerIndex: 1,
    explanation: "Fonts with a large x-height generally appear larger and are more legible at small sizes, making them popular for UI design.",
    example: "Choosing a font with a generous x-height for a mobile app's 12px caption text to ensure it remains readable."
  },
  {
    id: 111,
    category: "Typography",
    difficulty: "Easy",
    question: "What is the recommended maximum line length (measure) for readable body text on desktop?",
    options: [
      "30-40 characters",
      "50-75 characters",
      "100-120 characters",
      "As wide as the screen allows"
    ],
    answerIndex: 1,
    explanation: "Lines that are too long tire the eyes as they scan back to the start; lines too short break rhythm. 50-75 characters is the sweet spot.",
    example: "Constraining a blog post container to a `max-width: 680px` to keep character count per line readable."
  },

  // ── Color Theory ──────────────────────────────
  {
    id: 112,
    category: "Color Theory",
    difficulty: "Medium",
    question: "What is a 'Complementary' color scheme?",
    options: [
      "Using colors that sit next to each other on the color wheel",
      "Using two colors that are directly opposite each other on the color wheel",
      "Using three colors evenly spaced on the color wheel",
      "Using various shades of a single color"
    ],
    answerIndex: 1,
    explanation: "Complementary colors create high contrast and high impact, useful for making specific elements like buttons stand out.",
    example: "Using a deep blue background with a vibrant orange call-to-action button."
  },
  {
    id: 113,
    category: "Color Theory",
    difficulty: "Easy",
    question: "In the HSL color model, what does 'Saturation' refer to?",
    options: [
      "The lightness or darkness of a color",
      "The intensity or purity of a color (from gray to full color)",
      "The type of color (red, blue, green)",
      "The opacity (transparency) of a color"
    ],
    answerIndex: 1,
    explanation: "High saturation means the color is vivid and intense; 0% saturation means the color is completely gray.",
    example: "Desaturating a disabled button to 0% so it looks gray and inactive."
  },
  {
    id: 114,
    category: "Color Theory",
    difficulty: "Medium",
    question: "What is an 'Analogous' color palette?",
    options: [
      "Colors opposite each other on the wheel",
      "Colors that are adjacent (next to each other) on the color wheel",
      "A palette made exclusively of blacks, whites, and grays",
      "A completely randomized set of colors"
    ],
    answerIndex: 1,
    explanation: "Analogous palettes create rich, monochromatic-like harmony because the colors share common undertones.",
    example: "A calm, nature-inspired UI using blue, blue-green, and green."
  },
  {
    id: 115,
    category: "Color Theory",
    difficulty: "Hard",
    question: "What is a 'Tint' in color terminology?",
    options: [
      "A hue mixed with black",
      "A hue mixed with white, making it lighter",
      "A hue mixed with gray, making it muted",
      "The base pure pigment of a color"
    ],
    answerIndex: 1,
    explanation: "Adding white creates a tint, adding black creates a shade, and adding gray creates a tone.",
    example: "Using a light pink (a tint of red) for the background of a destructive warning message."
  },

  // ── Advanced Accessibility ────────────────────
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

  // ── Research & Metrics ────────────────────────
  {
    id: 120,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is A/B Testing in UX?",
    options: [
      "Testing an app on Apple and Android simultaneously",
      "Serving two different versions (A and B) of a design to users to measure which performs better based on metrics",
      "A methodology for alphabetizing UI components",
      "Asking users to grade an experience from A to B"
    ],
    answerIndex: 1,
    explanation: "A/B testing provides quantitative data on design decisions by comparing live performance.",
    example: "Showing half your users a green 'Buy' button and half a red one, then checking which led to more sales."
  },
  {
    id: 121,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is Multivariate Testing (MVT)?",
    options: [
      "Testing users across multiple geographical timezones",
      "Testing multiple combinations of different variables (like heading, image, and button color) simultaneously to see which combination performs best",
      "Running the exact same A/B test multiple times to prove statistical significance",
      "A survey with multiple choice questions"
    ],
    answerIndex: 1,
    explanation: "While A/B tests compare distinct versions, MVT breaks a page into elements and tests all possible combinations to find the optimal mix.",
    example: "Testing 2 headlines, 2 hero images, and 2 button colors to find the best of the 8 possible page combinations."
  },
  {
    id: 122,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is the SUS (System Usability Scale)?",
    options: [
      "A 10-item questionnaire that gives a global view of subjective assessments of usability",
      "A tool used by developers to measure server uptime",
      "A visual scale in Figma used to align icons",
      "A legal framework for accessible design compliance"
    ],
    answerIndex: 1,
    explanation: "The SUS is a highly reliable, standardized questionnaire used after a usability test to calculate an overall usability score (0-100).",
    example: "Users rate statements like 'I found the system unnecessarily complex' on a 5-point scale from Strongly Agree to Strongly Disagree."
  },
  {
    id: 123,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'Diary Study' in user research?",
    options: [
      "A researcher's personal log of their workday",
      "A longitudinal method where participants record their thoughts, behaviors, and interactions over a period of time",
      "A one-off survey sent at the end of the year",
      "Analyzing a user's calendar data to predict behavior"
    ],
    answerIndex: 1,
    explanation: "Diary studies are great for understanding long-term habits, contextual usage, and how experiences change over time.",
    example: "Asking users to take a photo and write a short note every time they use their smart thermostat over a two-week period."
  },
  {
    id: 124,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is 'Eye Tracking' used for?",
    options: [
      "Forcing users to look at advertisements before they can proceed",
      "Measuring where users look, how long they look, and the path their eyes follow on a screen",
      "A security feature to unlock apps with iris scanning",
      "A CSS technique to make elements follow the mouse cursor"
    ],
    answerIndex: 1,
    explanation: "Eye tracking generates heatmaps that objectively reveal what elements draw attention and what gets ignored.",
    example: "Discovering via a heatmap that users completely ignore a banner because it looks like an ad (Banner Blindness)."
  },

  // ── Agile & Product Strategy ──────────────────
  {
    id: 125,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'Minimum Viable Product' (MVP)?",
    options: [
      "The cheapest possible design created in under a day",
      "A version of a new product with just enough features to satisfy early customers and provide feedback for future development",
      "The most visually polished prototype",
      "A product designed exclusively for a single VIP user"
    ],
    answerIndex: 1,
    explanation: "An MVP focuses on core value. It prevents teams from building complex features that nobody actually wants by getting a working version to market quickly.",
    example: "Launching a ride-sharing app that only handles point-to-point booking, saving complex carpooling features for later versions."
  },
  {
    id: 126,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is 'Lean UX'?",
    options: [
      "A design process using only grayscale to save time",
      "A collaborative process that focuses on outcomes over deliverables, emphasizing rapid experimentation and iteration",
      "A method of shrinking file sizes for web images",
      "A solo design approach without developer involvement"
    ],
    answerIndex: 1,
    explanation: "Lean UX minimizes waste. Instead of spending months on a massive specification document, teams build quick prototypes, test, and iterate.",
    example: "Testing a hypothesis with a quick coded prototype instead of spending weeks finalizing pixel-perfect mockups."
  },
  {
    id: 127,
    category: "UX Research",
    difficulty: "Hard",
    question: "What does 'Dual-Track Agile' mean for a UX designer?",
    options: [
      "Designing for both iOS and Android at the same time",
      "Running 'Discovery' (research/design) and 'Delivery' (development) tracks simultaneously, with discovery staying slightly ahead",
      "Using two different project management tools at once",
      "Creating two completely different UI themes for A/B testing"
    ],
    answerIndex: 1,
    explanation: "In dual-track agile, the UX team researches and designs solutions in the discovery track, feeding validated ideas directly into the developers' delivery track.",
    example: "Designers testing prototypes for Sprint 4 while developers are writing code for the approved designs of Sprint 3."
  },

  // ── Specific Deliverables ─────────────────────
  {
    id: 128,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'Service Blueprint'?",
    options: [
      "A CAD drawing of server hardware layouts",
      "An extension of a customer journey map that shows the front-stage user experience and the back-stage processes/systems that support it",
      "The color theme documentation for a brand",
      "A legal document outlining Terms of Service"
    ],
    answerIndex: 1,
    explanation: "While journey maps focus on the user, service blueprints map out what the business (staff, software, policies) is doing behind the scenes at every step.",
    example: "Mapping out not just a user ordering a coffee on an app, but the barista's ticketing system and the inventory database updating."
  },
  {
    id: 129,
    category: "Prototyping",
    difficulty: "Easy",
    question: "What is a 'Wireflow'?",
    options: [
      "A tangled mess of cables on a designer's desk",
      "A combination of wireframes and flowcharts, showing UI screen designs connected by arrows to illustrate a user flow",
      "An automated tool that builds apps from sketches",
      "The electrical diagram of a mobile device"
    ],
    answerIndex: 1,
    explanation: "Wireflows provide more context than a simple flowchart and more interaction detail than static wireframes.",
    example: "A document showing 5 wireframe screens connected by arrows detailing the login process."
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

  // ── Mobile UX ─────────────────────────────────
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

  // ── Cognitive Psychology ──────────────────────
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

  // ── Advanced Dark Patterns ────────────────────
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
  
  // ── Even More General UX ──────────────────────
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
    id: 150,
    category: "Prototyping",
    difficulty: "Medium",
    question: "What is a 'Click-Through Rate (CTR)' in the context of UX evaluation?",
    options: [
      "The speed at which a user can double-click",
      "The percentage of users who click on a specific link or element compared to the total number of users who view the page",
      "A metric indicating how many bugs a prototype has",
      "The ratio of mouse clicks to keyboard taps"
    ],
    answerIndex: 1,
    explanation: "CTR is a key quantitative metric to evaluate the effectiveness of a call-to-action (CTA) or navigation element.",
    example: "If 100 people visit a page and 5 click the 'Sign Up' button, the CTR for that button is 5%."
  },
  
  // ── Extra Mixed Topics ────────────────────────
  {
    id: 151,
    category: "Design Systems",
    difficulty: "Hard",
    question: "In Atomic Design, what is a 'Molecule'?",
    options: [
      "The smallest possible UI element, like a single color code",
      "A group of UI atoms bonded together to form a relatively simple, functional unit",
      "A fully designed page template",
      "A complex widget like a data table with pagination"
    ],
    answerIndex: 1,
    explanation: "Molecules take simple atoms (labels, inputs, buttons) and combine them into a reusable component with a specific purpose.",
    example: "Combining a text input (atom), a label (atom), and a search icon (atom) to create a 'Search Bar' (molecule)."
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
    id: 154,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is an 'Edge Case' in product design?",
    options: [
      "The physical bezel around a mobile phone screen",
      "A problem or situation that occurs only at an extreme operating parameter or rare scenario",
      "A cutting-edge UI design trend",
      "The final step of a user journey"
    ],
    answerIndex: 1,
    explanation: "While designers focus on the 'happy path' (the standard successful flow), they must also design for edge cases to ensure the product doesn't break.",
    example: "Designing what a profile page looks like for a user with a 60-character long name, or a user with absolutely no posts."
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
    id: 157,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is 'Ethnographic Research' in UX?",
    options: [
      "Researching different ethnic font styles",
      "An in-depth observational study of users in their natural environment to understand their culture, behaviors, and context",
      "A quantitative survey analyzing demographics",
      "Translating a website into multiple languages"
    ],
    answerIndex: 1,
    explanation: "Rooted in anthropology, ethnographic UX research involves immersing yourself in the user's world to see how they actually live and work.",
    example: "Spending two days riding along with delivery drivers to observe how they use a logistics app in heavy traffic and bad weather."
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
    id: 160,
    category: "Design Systems",
    difficulty: "Medium",
    question: "What is 'Storybook' typically used for in UI development?",
    options: [
      "Writing children's books",
      "A tool used to build, document, and test UI components in isolation from the main application",
      "A plugin for Figma that animates transitions",
      "A database for storing user personas"
    ],
    answerIndex: 1,
    explanation: "Storybook serves as an interactive component library where developers and designers can view and test components independently.",
    example: "Opening Storybook to test how the 'Primary Button' component looks in light mode, dark mode, and when disabled, without spinning up the whole app."
  },
  {
    id: 161,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is 'Net Promoter Score (NPS)'?",
    options: [
      "A score indicating how fast a network loads a page",
      "A metric measuring user loyalty by asking how likely they are to recommend a product on a scale of 0 to 10",
      "A developer's performance rating",
      "The ranking of an app in the App Store"
    ],
    answerIndex: 1,
    explanation: "NPS is calculated by subtracting the percentage of Detractors (0-6) from Promoters (9-10). It's a high-level gauge of customer satisfaction.",
    example: "Asking users: 'On a scale of 0-10, how likely are you to recommend our app to a friend or colleague?'"
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
    id: 166,
    category: "Prototyping",
    difficulty: "Medium",
    question: "What is a 'Prototype' meant to simulate?",
    options: [
      "The database architecture",
      "The final interaction and experience of a product to validate ideas before engineering",
      "The marketing campaign performance",
      "The server load capacity"
    ],
    answerIndex: 1,
    explanation: "Prototypes bring static designs to life, allowing users and stakeholders to click through flows and find issues early.",
    example: "Linking Figma frames together so a user can click 'Login' and see the dashboard transition in."
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
    id: 168,
    category: "UX Research",
    difficulty: "Easy",
    question: "What does 'Quantitative Data' answer?",
    options: [
      "Why users feel a certain way",
      "How many, how much, or how often something happens (numerical data)",
      "What color the CEO prefers",
      "How to write better code"
    ],
    answerIndex: 1,
    explanation: "Quantitative data gives you the 'what' and 'how many' (metrics), while qualitative data gives you the 'why' (motivations).",
    example: "Analytics showing that '45% of users drop off at the password creation step' is quantitative data."
  },
  {
    id: 169,
    category: "Typography",
    difficulty: "Hard",
    question: "What is a 'Ligature' in typography?",
    options: [
      "The space between paragraphs",
      "Two or more intersecting characters fused into a single glyph to prevent awkward spacing or overlapping",
      "The bold weight of a font",
      "A type of CSS animation for text"
    ],
    answerIndex: 1,
    explanation: "Ligatures improve the aesthetic flow of text. A common example is combining 'f' and 'i' so the dot of the 'i' merges with the hood of the 'f'.",
    example: "The letters 'f' and 'i' combining into a single typographic character 'ﬁ'."
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
    id: 175,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is 'First Click Testing'?",
    options: [
      "Measuring the latency of the mouse button hardware",
      "A research method that measures what a user clicks first when given a specific task, as it heavily predicts their ultimate success",
      "Testing if the primary button works on the first try",
      "A QA test to ensure the site loads on the first click"
    ],
    answerIndex: 1,
    explanation: "Research shows that if a user's first click is down the correct path, their chance of completing the task is 87%; if wrong, it drops to 46%.",
    example: "Showing users a homepage and asking 'Where would you click to return an item?' and tracking if their first instinct is correct."
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
    id: 177,
    category: "Typography",
    difficulty: "Easy",
    question: "What is 'Justified' text?",
    options: [
      "Text that is morally correct",
      "Text that is aligned to both the left and right margins, creating clean vertical edges on both sides by stretching spacing",
      "Text aligned only to the right margin",
      "Text centered perfectly in the middle of a screen"
    ],
    answerIndex: 1,
    explanation: "While justified text looks neat in print columns, it often creates awkward 'rivers of white space' on the web and reduces readability.",
    example: "Newspapers often use justified text, but web articles typically use left-aligned (ragged right) text for better legibility."
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
    id: 183,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is 'Contextual Inquiry'?",
    options: [
      "Asking users questions about a website's text context",
      "A semi-structured interview method where researchers observe and question users while they perform tasks in their actual environment",
      "Analyzing the context of customer support tickets",
      "An automated survey triggered by a specific context"
    ],
    answerIndex: 1,
    explanation: "Contextual inquiry bridges the gap between observation and interviewing. You watch them work and ask 'Why did you just do that?' in real-time.",
    example: "Sitting next to an accountant in their office and watching them use your tax software, asking questions as they hit friction points."
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
    id: 186,
    category: "Design Systems",
    difficulty: "Medium",
    question: "What is the difference between a UI Kit and a Design System?",
    options: [
      "They are the exact same thing",
      "A UI Kit is just a collection of visual assets/components; a Design System includes those plus code, guidelines, principles, and governance rules",
      "A UI Kit is for developers; a Design System is for designers",
      "A UI kit is only used for mobile apps"
    ],
    answerIndex: 1,
    explanation: "A Design System is a complete product, encompassing the 'how' and 'why' elements are used, not just a Figma file full of buttons (UI Kit).",
    example: "Material Design by Google is a design system because it provides code, principles on motion, accessibility rules, and component specs."
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
  },
  {
    id: 189,
    category: "UX Research",
    difficulty: "Easy",
    question: "What is a 'User Flow'?",
    options: [
      "The rate at which a user types",
      "A visual representation of the path a user takes through an application to complete a specific task",
      "The liquid animation effect on buttons",
      "The transition animation between pages"
    ],
    answerIndex: 1,
    explanation: "User flows map out screens and decisions, ensuring that the journey from point A (entry) to point B (success) is logical and seamless.",
    example: "Mapping the steps: Homepage → Search Results → Product Detail Page → Cart → Checkout → Success Screen."
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
    id: 193,
    category: "Typography",
    difficulty: "Easy",
    question: "What is a 'Typeface' vs a 'Font'?",
    options: [
      "They are identical terms",
      "A Typeface is the design family (e.g., Helvetica); a Font is the specific digital file/weight (e.g., Helvetica Bold 12pt)",
      "Typeface is for print; Font is for web",
      "Typeface refers to icons; Font refers to letters"
    ],
    answerIndex: 1,
    explanation: "Historically, the typeface is the creative design of the letters, while the font is the physical metal block (or digital file) used to render it.",
    example: "'Roboto' is the typeface. 'Roboto Light Italic at 14px' is the specific font."
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
  },
  {
    id: 198,
    category: "UX Research",
    difficulty: "Medium",
    question: "What is a 'Persona' meant to represent?",
    options: [
      "The CEO's personal preferences",
      "An archetype representing a cluster of users with similar behaviors, goals, and motivations, derived from research",
      "A fictional character created entirely from imagination",
      "The marketing team's ideal demographic target"
    ],
    answerIndex: 1,
    explanation: "Personas build empathy and keep teams focused. They represent real data gathered from multiple users rolled into one relatable character.",
    example: "Instead of saying 'The 18-24 demographic', saying 'Alex, a busy college student who needs cheap, fast food delivery late at night.'"
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
  },
  {
    id: 200,
    category: "UX Research",
    difficulty: "Hard",
    question: "What is the difference between 'Generative' and 'Evaluative' research?",
    options: [
      "Generative creates code; Evaluative creates designs",
      "Generative helps define the problem and discover what to build; Evaluative tests a proposed solution to see if it works",
      "Generative uses AI; Evaluative uses humans",
      "Generative is quantitative; Evaluative is qualitative"
    ],
    answerIndex: 1,
    explanation: "Generative research (like interviews and diary studies) happens at the very beginning of a project. Evaluative research (like usability testing) happens once you have a prototype.",
    example: "Generative: Interviewing doctors to understand their workflow. Evaluative: Testing a prototype of a new medical dashboard with those doctors."
  }
];


/* ═══════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════ */
let flashcardState = {
  todayDate: "",
  todayCards: [],
  currentIndex: 0,
  revealed: false,
  correct: 0,
  wrong: 0,
  wrongCards: [],          // stores full card objects that were answered wrong
  selectedAnswerIndex: null, // index of option selected by user for current card
  history: []
};

/* ═══════════════════════════════════════════════
   DAILY CARD SETUP
   ═══════════════════════════════════════════════ */
function setupDailyCards() {
  const today = new Date().toDateString();
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("sp-flashcards-mcq-v1")); } catch(e) {}

  if (saved && saved.todayDate === today && saved.todayCards && saved.todayCards.length > 0) {
    if (!saved.wrongCards) saved.wrongCards = [];
    flashcardState = saved;
    return;
  }

  const history = (saved && saved.history) ? saved.history : [];
  let available = UX_QUESTIONS.filter(q => !history.includes(q.id));
  if (available.length < 5) available = [...UX_QUESTIONS]; // refresh pool if low

  const shuffled = [...available].sort(() => Math.random() - 0.5);
  const todayCards = shuffled.slice(0, 5).map(q => {
    const opts = q.options.map((text, idx) => ({ text, isCorrect: idx === q.answerIndex }));
    opts.sort(() => Math.random() - 0.5);
    return {
      ...q,
      options: opts.map(o => o.text),
      answerIndex: opts.findIndex(o => o.isCorrect)
    };
  });
  const newHistory = [...history, ...todayCards.map(c => c.id)].slice(-180);

  flashcardState = {
    todayDate: today,
    todayCards,
    currentIndex: 0,
    revealed: false,
    correct: 0,
    wrong: 0,
    wrongCards: [],
    selectedAnswerIndex: null,
    history: newHistory
  };
  saveFlashcards();
}

function fcHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; }
  return h;
}

function saveFlashcards() {
  try { localStorage.setItem("sp-flashcards-mcq-v1", JSON.stringify(flashcardState)); } catch(e) {}
}

/* ═══════════════════════════════════════════════
   BADGE HELPERS
   ═══════════════════════════════════════════════ */
const FC_CAT_COLORS = {
  "UX Laws": "#d4960a",
  "Gestalt": "#4a9eff",
  "Heuristics": "#2ecf8c",
  "Typography": "#e55bdb",
  "Color Theory": "#ff7857",
  "Accessibility": "#64b4ff",
  "UX Research": "#a78bfa",
  "Interaction Design": "#fdb365",
  "Design Systems": "#34d399",
  "Information Architecture": "#f87171",
  "Psychology": "#c4b5fd",
  "Prototyping": "#67e8f9",
  "Visual Design": "#f9a8d4",
  "Ethics & Patterns": "#fca5a5",
  "Emotional Design": "#ff75b5"
};
const FC_DIFF_COLORS = { "Easy": "#2ecf8c", "Medium": "#d4960a", "Hard": "#ff5050" };

function fcBadge(label, color) {
  return `<span style="font-size:10px;padding:3px 10px;border-radius:99px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;background:${color}22;color:${color}">${escHtml(label)}</span>`;
}

/* ═══════════════════════════════════════════════
   SHARED CSS
   ═══════════════════════════════════════════════ */
const FC_CSS = `<style id="fc-styles">
  .fc-wrap{max-width:1000px;margin:0 auto}
  .fc-prog-bar{height:3px;background:var(--border);border-radius:99px;margin-bottom:18px;overflow:hidden;display:none}
  .fc-prog-fill{height:100%;background:var(--accent);border-radius:99px;transition:width .4s ease}
  .fc-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
  .fc-count{font-size:12px;color:var(--muted);font-family:'DM Mono',monospace;letter-spacing:.08em}
  .fc-score-row{display:flex;gap:7px}
  .fc-pill{font-size:11px;padding:3px 11px;border-radius:99px;font-weight:700}
  .fc-pill.c{background:rgba(46,207,140,.15);color:#2ecf8c}
  .fc-pill.w{background:rgba(255,80,80,.15);color:#ff5050}
  
  .fc-scene{perspective:1200px;height:510px;margin-bottom:18px}
  .fc-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,.2,.2,1);border-radius:16px}
  .fc-inner.flipped{transform:rotateY(180deg)}
  
  .fc-face{position:absolute;inset:0;border-radius:16px;backface-visibility:hidden;-webkit-backface-visibility:hidden;padding:22px;display:flex;flex-direction:column;border:1px solid var(--border);background:var(--surface);overflow-y:auto}
  .fc-face.back{transform:rotateY(180deg)}
  
  .fc-badges{display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap}
  .fc-question{font-size:16px;font-weight:600;line-height:1.45;color:var(--text);margin-bottom:16px;text-align:left}
  
  .fc-mcq-options { display: flex; flex-direction: column; gap: 8px; width: 100%; }
  .fc-option-btn {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 14px; border: 1.5px solid var(--border);
    background: var(--surface2); color: var(--text);
    border-radius: 10px; font-family: inherit; font-size: 13px;
    text-align: left; cursor: pointer; transition: all 0.16s ease;
    line-height: 1.4;
  }
  .fc-option-btn:hover:not(:disabled) {
    border-color: var(--accent); background: rgba(212,150,10,0.08); transform: translateY(-1px);
  }
  .fc-option-letter {
    display: flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; border-radius: 6px;
    background: var(--border); color: var(--text);
    font-weight: 700; font-size: 11px; flex-shrink: 0;
  }
  .fc-option-btn:hover .fc-option-letter {
    background: var(--accent); color: #0c0c0e;
  }
  
  /* MCQ states */
  .fc-mcq-options.disabled { pointer-events: none; }
  .fc-option-btn.correct {
    border-color: #2ecf8c !important; background: rgba(46,207,140,0.08) !important; color: #2ecf8c !important;
  }
  .fc-option-btn.correct .fc-option-letter {
    background: #2ecf8c !important; color: #0c0c0e !important;
  }
  .fc-option-btn.wrong {
    border-color: #ff5050 !important; background: rgba(255,80,80,0.08) !important; color: #ff5050 !important;
  }
  .fc-option-btn.wrong .fc-option-letter {
    background: #ff5050 !important; color: #fff !important;
  }

  .fc-feedback-header {
    display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 700; margin-bottom: 12px;
  }
  .fc-feedback-header.c { color: #2ecf8c; }
  .fc-feedback-header.w { color: #ff5050; }

  .fc-explanation{font-size:14.5px;color:var(--text);line-height:1.55;margin-bottom:12px;flex:1}
  .fc-explanation b{color:var(--accent)}
  .fc-example{font-size:14px;color:var(--muted);padding-top:10px;border-top:1px solid var(--border);line-height:1.5}
  .fc-example b{color:var(--accent)}
  
  .fc-actions{display:flex;gap:10px;justify-content:center;margin-bottom:14px;margin-top:10px}
  .fc-btn{flex:1;max-width:260px;padding:12px 0;border-radius:12px;border:1.5px solid var(--border);font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .16s ease}
  .fc-btn:hover{transform:translateY(-2px)}
  .fc-btn.reveal{background:var(--accent);color:#0c0c0e;border-color:var(--accent);max-width:100%;width:100%}
  .fc-btn.reveal:hover{opacity:.88}
  .fc-footer{text-align:center;font-size:11px;color:var(--muted);margin-top:4px}
  .fc-footer span{color:var(--accent);font-weight:600}
  
  /* Summary */
  .fc-sum{max-width:800px;margin:0 auto}
  .fc-sum-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px 24px;text-align:center;margin-bottom:14px}
  .fc-sum-emoji{font-size:44px;margin-bottom:10px}
  .fc-sum-title{font-size:20px;font-weight:700;color:var(--text);margin-bottom:6px}
  .fc-sum-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}
  .fc-sum-stat{background:var(--bg,#0c0c0e);border-radius:12px;padding:14px 8px}
  .fc-sum-num{font-size:26px;font-weight:700;margin-bottom:3px}
  .fc-sum-lbl{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
  .fc-sum-stat.c .fc-sum-num{color:#2ecf8c}
  .fc-sum-stat.w .fc-sum-num{color:#ff5050}
  .fc-sum-stat.a .fc-sum-num{color:var(--accent)}
  .fc-sum-note{font-size:12px;color:var(--muted);margin-top:12px}
  
  /* Wrong answer review */
  .fc-review-section{margin-top:16px}
  .fc-review-title{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-weight:600;margin-bottom:10px;display:flex;align-items:center;gap:6px}
  .fc-review-card{background:var(--surface);border:1px solid rgba(255,80,80,.3);border-radius:14px;padding:16px 18px;margin-bottom:10px;border-left:3px solid #ff5050}
  .fc-review-q{font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px;line-height:1.4}
  .fc-review-a-label{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#ff5050;font-weight:700;margin-bottom:4px}
  .fc-review-a{font-size:13px;color:var(--text);line-height:1.55;margin-bottom:8px}
  .fc-review-ex{font-size:11px;color:var(--muted);line-height:1.5;padding-top:8px;border-top:1px solid var(--border)}
  .fc-review-ex b{color:var(--accent)}
  .fc-cats{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px;margin-top:14px}
  .fc-cats-title{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-weight:600;margin-bottom:12px}
  .fc-cat-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;font-size:13px;color:var(--text)}
  .fc-cat-dot{width:8px;height:8px;border-radius:50%;margin-right:8px;display:inline-block}
</style>`;

/* ═══════════════════════════════════════════════
   buildFlashcardsHTML
   ═══════════════════════════════════════════════ */
function buildFlashcardsHTML() {
  setupDailyCards();
  if (flashcardState.currentIndex >= flashcardState.todayCards.length) {
    return FC_CSS + buildFCSummaryHTML();
  }
  return FC_CSS + buildFCCardHTML();
}

/* ═══════════════════════════════════════════════
   CARD HTML
   ═══════════════════════════════════════════════ */
function buildFCCardHTML() {
  const s = flashcardState;
  const card = s.todayCards[s.currentIndex];
  const total = s.todayCards.length;
  const pct = Math.round((s.currentIndex / total) * 100);
  const catColor  = FC_CAT_COLORS[card.category]  || "#888";
  const diffColor = FC_DIFF_COLORS[card.difficulty] || "#888";

  // Front Options HTML (Interactive selection)
  let frontOptionsHTML = '<div class="fc-mcq-options">';
  card.options.forEach((opt, idx) => {
    frontOptionsHTML += `
      <button class="fc-option-btn" onclick="fcSelectOption(${idx})">
        <span class="fc-option-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="fc-option-text">${escHtml(opt)}</span>
      </button>`;
  });
  frontOptionsHTML += '</div>';

  // Back Options HTML (Disabled + Color Coded)
  let backOptionsHTML = '<div class="fc-mcq-options disabled" style="margin-bottom: 16px;">';
  card.options.forEach((opt, idx) => {
    let optClass = '';
    if (idx === card.answerIndex) {
      optClass = 'correct';
    } else if (idx === s.selectedAnswerIndex) {
      optClass = 'wrong';
    }
    backOptionsHTML += `
      <button class="fc-option-btn ${optClass}" disabled>
        <span class="fc-option-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="fc-option-text">${escHtml(opt)}</span>
      </button>`;
  });
  backOptionsHTML += '</div>';

  const isCorrect = (s.selectedAnswerIndex === card.answerIndex);

  return `<div class="fc-wrap">
    <div class="fc-meta">
      <span class="fc-count">QUESTION ${s.currentIndex + 1} / ${total}</span>
      <div class="fc-score-row">
        <span class="fc-pill c">&#10003; ${s.correct}</span>
        <span class="fc-pill w">&#10007; ${s.wrong}</span>
      </div>
    </div>

    <div class="fc-scene">
      <div class="fc-inner${s.revealed ? ' flipped' : ''}">

        <!-- FRONT: Question and Options -->
        <div class="fc-face front">
          <div class="fc-badges">
            ${fcBadge(card.category, catColor)}
            ${fcBadge(card.difficulty, diffColor)}
          </div>
          <div class="fc-question">${escHtml(card.question)}</div>
          ${frontOptionsHTML}
        </div>

        <!-- BACK: Question, Choices, Explanation & Example -->
        <div class="fc-face back">
          <div class="fc-badges">
            ${fcBadge(card.category, catColor)}
            ${fcBadge(card.difficulty, diffColor)}
          </div>
          <div class="fc-question">${escHtml(card.question)}</div>
          ${backOptionsHTML}
          <div class="fc-explanation"><b>Explanation:</b> ${escHtml(card.explanation)}</div>
          <div class="fc-example"><b>Example:</b> ${escHtml(card.example)}</div>
        </div>

      </div>
    </div>

    ${s.revealed
      ? `<div class="fc-actions">
           <button class="fc-btn reveal" onclick="fcNextCard()">Next Question &rarr;</button>
         </div>`
      : `<div class="fc-actions" style="visibility:hidden;pointer-events:none">
           <button class="fc-btn reveal">Next Question &rarr;</button>
         </div>`
    }

    <div class="fc-footer">${UX_QUESTIONS.length} questions in deck &middot; <span>5</span> new each day</div>
  </div>`;
}

/* ═══════════════════════════════════════════════
   SUMMARY HTML
   ═══════════════════════════════════════════════ */
function buildFCSummaryHTML() {
  const { correct, wrong, wrongCards, todayCards } = flashcardState;
  const total = correct + wrong;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const grade =
    accuracy >= 90 ? { label: "Excellent!",    emoji: "🏆", color: "#2ecf8c" } :
    accuracy >= 70 ? { label: "Good work",     emoji: "⭐", color: "#d4960a" } :
    accuracy >= 50 ? { label: "Keep going",    emoji: "📚", color: "#4a9eff" } :
                     { label: "Review needed", emoji: "🔁", color: "#ff5050" };

  // Wrong answer review cards
  let reviewHTML = '';
  if (wrongCards && wrongCards.length > 0) {
    const reviewItems = wrongCards.map(card => {
      const catColor = FC_CAT_COLORS[card.category] || "#888";
      const diffColor = FC_DIFF_COLORS[card.difficulty] || "#888";
      const correctOptionText = card.options[card.answerIndex];
      return `<div class="fc-review-card">
        <div class="fc-badges" style="margin-bottom:8px">${fcBadge(card.category, catColor)}${fcBadge(card.difficulty, diffColor)}</div>
        <div class="fc-review-q">${escHtml(card.question)}</div>
        <div class="fc-review-a-label">&#10003; Correct Choice</div>
        <div class="fc-review-a">${escHtml(correctOptionText)}</div>
        <div class="fc-review-ex"><b>Explanation:</b> ${escHtml(card.explanation)}</div>
      </div>`;
    }).join('');

    reviewHTML = `<div class="fc-review-section">
      <div class="fc-review-title">
        <span style="color:#ff5050">&#10007;</span> Review — ${wrongCards.length} missed answer${wrongCards.length > 1 ? 's' : ''}
      </div>
      ${reviewItems}
    </div>`;
  }

  return `<div class="fc-sum">
    <div class="fc-sum-card">
      <div class="fc-sum-emoji">${grade.emoji}</div>
      <div class="fc-sum-title">Daily Review Complete</div>
      <span style="font-size:12px;font-weight:600;padding:4px 14px;border-radius:99px;background:${grade.color}22;color:${grade.color};display:inline-block;margin-bottom:4px">${grade.label}</span>
      <div class="fc-sum-grid">
        <div class="fc-sum-stat c"><div class="fc-sum-num">${correct}</div><div class="fc-sum-lbl">Correct</div></div>
        <div class="fc-sum-stat w"><div class="fc-sum-num">${wrong}</div><div class="fc-sum-lbl">Wrong</div></div>
        <div class="fc-sum-stat a"><div class="fc-sum-num">${accuracy}%</div><div class="fc-sum-lbl">Accuracy</div></div>
      </div>
      <div style="margin-top:20px">
        <button class="fc-btn" style="margin: 0 auto; width: 100%;" onclick="fcStartNewSet()">Practice 5 More</button>
      </div>
    </div>

    ${reviewHTML}

    <div class="fc-cats">
      <div class="fc-cats-title">Today's categories covered</div>
      ${todayCards.map(c => {
        const col = FC_CAT_COLORS[c.category] || "#888";
        const wasWrong = wrongCards && wrongCards.some(w => w.id === c.id);
        return `<div class="fc-cat-row">
          <div><span class="fc-cat-dot" style="background:${col}"></span>${escHtml(c.category)}</div>
          <div style="display:flex;align-items:center;gap:8px;">
            ${wasWrong ? '<span style="font-size:10px;color:#ff5050;font-weight:700">&#10007; Missed</span>' : '<span style="font-size:10px;color:#2ecf8c;font-weight:700">&#10003; Got it</span>'}
            <span style="font-size:11px;color:var(--muted);font-family:\'DM Mono\',monospace">${escHtml(c.difficulty)}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════
   ACTIONS
   ═══════════════════════════════════════════════ */
function fcSelectOption(optionIndex) {
  if (flashcardState.selectedAnswerIndex !== null) return; // already answered

  const currentCard = flashcardState.todayCards[flashcardState.currentIndex];
  flashcardState.selectedAnswerIndex = optionIndex;

  const isCorrect = (optionIndex === currentCard.answerIndex);
  if (isCorrect) {
    flashcardState.correct++;
  } else {
    flashcardState.wrong++;
    if (!flashcardState.wrongCards) flashcardState.wrongCards = [];
    flashcardState.wrongCards.push(currentCard);
  }

  flashcardState.revealed = true; // flip the card to show back
  saveFlashcards();
  renderLearn('flashcards');
}

function fcNextCard() {
  flashcardState.currentIndex++;
  flashcardState.revealed = false;
  flashcardState.selectedAnswerIndex = null;
  saveFlashcards();
  renderLearn('flashcards');
}

function fcStartNewSet() {
  flashcardState.todayCards = []; // Force generation of new set
  flashcardState.todayDate = ""; 
  saveFlashcards();
  setupDailyCards();
  renderLearn('flashcards');
}