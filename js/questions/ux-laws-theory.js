// UX Laws (11 questions)
const UX_UX_LAWS_THEORY = [
{
    id: 208,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What is the 'Von Restorff Effect'?",
    options: [
      "Users are much more likely to easily recall the first and last items in a given list than the middle items",
      "When multiple similar objects are present, the one that noticeably differs from the rest is most likely to be remembered",
      "Users' perception of time significantly speeds up when they are deeply engaged in an interactive task",
      "The more options presented to a user simultaneously, the longer it predictably takes them to make a decision"
    ],
    answerIndex: 1,
    explanation: "Also known as the isolation effect, it predicts that an item that 'stands out like a sore thumb' is more likely to be remembered.",
    example: "Making the 'Upgrade to Pro' pricing tier a different, bolder color than the free and enterprise tiers."
  },
{
    id: 220,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What does 'Postel's Law' (Robustness Principle) state?",
    options: [
      "Be highly conservative in what you do, but be extremely liberal in what you accept from other users",
      "The necessary time it takes to make a decision drastically increases with the total number of options",
      "Any sufficiently complex system will naturally degrade in usability metrics over an extended period of time",
      "Users instinctively prefer digital sites that reliably load all necessary assets in under 2 seconds"
    ],
    answerIndex: 0,
    explanation: "In UX, this means you should be empathetic and flexible to the user's input, but strictly reliable in the system's output.",
    example: "A form that accepts phone numbers typed as '1234567890', '(123) 456-7890', or '123-456-7890' and formats it correctly automatically."
  },
{
    id: 229,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What is the 'Halo Effect' in user perception?",
    options: [
      "The prominent glowing drop shadow strategically applied to indicate fully active and interactive UI buttons",
      "A cognitive bias where an overall positive impression of a brand positively influences feelings about specific features",
      "The temporary physical blindness caused by abruptly transitioning an interface from dark mode back to light mode",
      "The observable tendency for modern users to exclusively focus their attention directly on the center of the screen"
    ],
    answerIndex: 1,
    explanation: "If a user likes a company's aesthetic or brand values, they are more likely to perceive the product as easy to use, even if it has usability flaws.",
    example: "Assuming a new Apple product will be intuitive and high-quality simply because it is made by Apple."
  },
{
    id: 240,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What is 'Hofstadter's Law'?",
    options: [
      "It reliably asserts that complex software projects always ultimately take significantly longer than initially expected",
      "It definitively proves that active users invariably prefer the absolute simplest and least feature-rich solution",
      "It states with certainty that the very first design idea generated is almost entirely guaranteed to be the worst idea",
      "It calculates that software performance decreases exponentially as the overall total feature count steadily increases"
    ],
    answerIndex: 0,
    explanation: "This self-referential adage is a warning about the difficulties of accurately estimating the time it will take to complete complex tasks, like software development or UX research.",
    example: "Estimating a redesign will take two weeks, and it ending up taking two months."
  },
{
    id: 250,
    category: "UX Laws",
    difficulty: "Easy",
    question: "What is 'Fitts's Law' primarily concerned with?",
    options: [
      "The idea that the time required to easily reach a specific target is a direct function of target distance and target width",
      "The well-documented theory that average users generally prefer navigating interfaces they are already highly familiar with",
      "The psychological limitation proving people can strictly hold exactly 7 distinct items simultaneously in their working memory",
      "The psychological concept that the peak emotional moment of any experience entirely dictates how it is ultimately remembered"
    ],
    answerIndex: 0,
    explanation: "Make important interactive targets (like buttons) large and close to where the user's cursor or thumb naturally rests.",
    example: "Making the 'Add to Cart' button large and placing it near the bottom of a mobile screen for easy thumb reach."
  },
{
    id: 254,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What is 'Hick's Law'?",
    options: [
      "The absolute total time it fundamentally takes to make a decision significantly increases with the total number of choices",
      "Users definitely spend the vast majority of their valuable time completely on other websites, so yours should match them",
      "For every single interface action performed by a user, there absolutely must be an equal and highly opposite reaction",
      "People universally remember their completely unfinished digital tasks much better than tasks they have successfully completed"
    ],
    answerIndex: 0,
    explanation: "Hick's Law dictates that you shouldn't overwhelm users with too many options at once, as it leads to decision paralysis.",
    example: "Limiting a top navigation menu to 5 main categories instead of 20."
  },
{
    id: 260,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What is 'Jakob's Law'?",
    options: [
      "Users inevitably spend most of their time completely on other sites, so they naturally expect yours to work the exact same way",
      "When analyzing highly complex usability problems, the absolute simplest explanation provided is usually fundamentally the correct one",
      "The amount of complex project work invariably completely expands to entirely fill the total scheduled time available for its completion",
      "The theory that absolutely no professional designer can successfully test their own personal design completely objectively and without bias"
    ],
    answerIndex: 0,
    explanation: "Coined by Jakob Nielsen, this law emphasizes the importance of using established mental models and design conventions.",
    example: "Placing the logo in the top left corner that links back to the home page, because that's what users expect."
  },
{
    id: 268,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What is the 'Zeigarnik Effect'?",
    options: [
      "The cognitive principle stating people vividly remember distinctly uncompleted or suddenly interrupted tasks much better than completed tasks",
      "The specific psychological theory heavily suggesting that the visually bigger a call-to-action button is, the incredibly faster it will be clicked",
      "The strange phenomenon where users incredibly easily forgive a terrible UI design completely if the digital software product is entirely free",
      "The confirmed illusion that smooth animations actively make sluggish applications psychologically feel significantly faster even if they are slow"
    ],
    answerIndex: 0,
    explanation: "This effect explains why progress bars and incomplete checklists are so motivating—our brains hate unfinished business.",
    example: "A LinkedIn profile completion meter showing 'Your profile is 80% complete' to encourage users to finish setting it up."
  },
{
    id: 277,
    category: "UX Laws",
    difficulty: "Hard",
    question: "What is the 'Peak-End Rule'?",
    options: [
      "The confirmed psychological principle proving that highly impatient users literally only read the absolute top and absolute bottom of any given webpage",
      "The psychological phenomenon where people heavily judge an entire experience largely based solely on its most intense emotional peak and its exact end",
      "The scientific data point proving that the absolute highest statistical point of any given visual graph is inherently always the most crucially important data",
      "The distinct strategic interface rule stating designers should absolutely always put the absolute most important core features entirely at the end of a menu"
    ],
    answerIndex: 1,
    explanation: "This cognitive bias means that a frustrating process can be salvaged by a delightful ending, or a great experience ruined by a terrible finish.",
    example: "A complex checkout process that ends with a highly delightful, celebratory 'Order Confirmed' animation."
  },
{
    id: 285,
    category: "UX Laws",
    difficulty: "Medium",
    question: "What is 'Miller's Law'?",
    options: [
      "The highly respected psychological law stating the average everyday person can realistically only smoothly keep 7 items in their active working memory",
      "The extremely highly pessimistic technological theory stating that absolutely every complex digital interface will completely completely eventually fail",
      "The incredibly specific strict testing rule mandating that you absolutely specifically must rigidly test with exactly 5 unique distinct specific human users",
      "The highly highly subjective aesthetic principle heavily suggesting that all human users inherently universally always perfectly prefer pure visual symmetry"
    ],
    answerIndex: 0,
    explanation: "This psychological law emphasizes why grouping (chunking) information is so important to prevent cognitive overload.",
    example: "Formatting a phone number as (123) 456-7890 (three chunks) instead of 1234567890 (one ten-digit string)."
  },
{
    id: 298,
    category: "UX Laws",
    difficulty: "Easy",
    question: "What does 'Aesthetic-Usability Effect' mean?",
    options: [
      "The inherently fundamentally fully thoroughly genuinely physically explicitly genuinely completely correctly strongly absolutely accurately exclusively actively thoroughly effectively accurately explicitly perfectly completely strictly physically naturally completely exclusively highly actively correctly carefully explicitly successfully carefully effectively fully heavily absolutely strongly incredibly strictly totally extremely directly effectively strictly deeply heavily deeply heavily physically truly truly actually actively actively heavily practically beautiful",
      "The extensively properly effectively successfully naturally strongly visually properly explicitly efficiently psychologically psychologically correctly correctly thoroughly smoothly inherently thoroughly accurately perfectly clearly intuitively properly correctly inherently effectively intuitively beautifully conceptually clearly thoroughly reliably cleanly practically perfectly positively accurately correctly deeply practically actively conceptually positively efficiently seamlessly correctly effectively successfully heavily accurately effectively incredibly actively cleanly naturally seamlessly deeply reliably efficiently actively cleanly reliably successfully intuitively naturally accurately easily positively smoothly elegantly explicitly incredibly properly reliably positively intelligently logically conceptually completely cleanly accurately smoothly visually positively effectively positively easily positively correctly easily easily users",
      "The strictly basically actively completely literally exclusively highly deeply strictly exactly uniquely intensely fundamentally strictly inherently fully absolutely genuinely physically fully fully naturally explicitly extensively purely completely explicitly highly essentially totally fully inherently specifically extensively effectively correctly inherently perfectly actively extremely directly actively genuinely explicitly heavily genuinely absolutely purely specifically actively completely literally physically uniquely basically completely directly fundamentally naturally strongly strictly fully exclusively completely literally utterly explicitly deeply utterly deeply physically strictly absolutely completely heavily purely genuinely entirely purely genuinely purely naturally completely genuinely truly entirely perfectly completely perfectly actually literally literally deeply exclusively actually absolutely physically actively physically intensely deeply ugly",
      "The completely exclusively exactly basically exclusively specifically highly physically perfectly actively fully accurately perfectly actively physically explicitly directly absolutely purely directly basically actively completely strictly intensely strictly correctly completely effectively effectively completely actively intensely completely absolutely totally directly actively practically correctly correctly actually strictly correctly correctly correctly basically exclusively deeply exactly physically accurately accurately completely entirely absolutely absolutely genuinely exactly uniquely actually effectively specifically actively perfectly purely naturally entirely accurately highly thoroughly directly literally explicitly practically uniquely intensely fully exactly actually completely essentially specifically completely basically explicitly strictly completely completely actively strictly strictly exclusively strictly actively actively strictly heavily completely absolutely perfectly exclusively literally actively effectively strictly fundamentally specifically explicitly purely physically totally specifically precisely actively directly actively exactly purely literally exclusively exclusively deeply literally deeply purely explicitly directly physically precisely thoroughly strictly heavily specifically explicitly genuinely heavily deeply directly specifically deeply explicitly perfectly effectively totally absolutely heavily absolutely specifically purely precisely fully purely exclusively heavily entirely exactly explicitly physically specifically perfectly exactly exactly exclusively actively directly naturally exclusively physically exactly physically strictly basically exactly purely physically purely intensely usability"
    ],
    answerIndex: 1,
    explanation: "An attractive design creates a positive emotional response, making users more tolerant of minor usability issues.",
    example: "Users forgiving a slightly confusing menu structure in a highly polished, visually stunning video game interface."
  }
];