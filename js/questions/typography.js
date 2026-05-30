// Typography (8 questions)
const UX_TYPOGRAPHY = [
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
  }
];
