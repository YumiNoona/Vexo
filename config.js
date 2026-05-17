/* ═══════════════════════════════════════════════
   CONSTANTS & DEFAULTS
═══════════════════════════════════════════════ */
const DEFAULT_TASKS=[
  {id:'shower',cat:'Morning',label:'Shower & morning routine',mins:30},
  {id:'exercise',cat:'Morning',label:'Exercise – 1 hour',mins:60},
  {id:'breakfast',cat:'Morning',label:'Breakfast',mins:30},
  {id:'class',cat:'Study',label:'IRL class prep / review notes',mins:60},
  {id:'udemy1',cat:'Study',label:'Udemy – lesson 1',mins:45},
  {id:'udemy2',cat:'Study',label:'Udemy – lesson 2',mins:45},
  {id:'practice',cat:'Study',label:'Design practice (recreate a real UI)',mins:90},
  {id:'portfolio',cat:'Study',label:'Portfolio work session',mins:60},
  {id:'explore',cat:'Study',label:'Exploration / Dribbble / Behance',mins:30},
  {id:'cook',cat:'Evening',label:'Cook & eat dinner',mins:60},
  {id:'review',cat:'Evening',label:'Review today\'s learnings',mins:20},
  {id:'plan',cat:'Evening',label:'Plan tomorrow\'s tasks',mins:10},
];
const DEFAULT_SCHED=[
  {id:'s1',t:'7:00 AM',l:'Wake up & shower',type:'r'},
  {id:'s2',t:'8:00 AM',l:'Breakfast',type:'r'},
  {id:'s3',t:'8:30 AM',l:'Exercise',dur:'1 hr',type:'h'},
  {id:'s4',t:'9:30 AM',l:'Study Block 1 — IRL class prep & theory',dur:'2.5 hrs',type:'s'},
  {id:'s5',t:'12:00 PM',l:'Cook & lunch',dur:'1 hr',type:'r'},
  {id:'s6',t:'1:00 PM',l:'Study Block 2 — Udemy lessons',dur:'2 hrs',type:'s'},
  {id:'s7',t:'3:00 PM',l:'Break',dur:'30 min',type:'b'},
  {id:'s8',t:'3:30 PM',l:'Study Block 3 — Design practice & projects',dur:'2 hrs',type:'s'},
  {id:'s9',t:'5:30 PM',l:'Break / stretch / walk',dur:'30 min',type:'b'},
  {id:'s10',t:'6:00 PM',l:'Study Block 4 — Portfolio & exploration',dur:'1.5 hrs',type:'s'},
  {id:'s11',t:'7:30 PM',l:'Dinner',type:'r'},
  {id:'s12',t:'8:30 PM',l:'Review + plan tomorrow',dur:'45 min',type:'s'},
  {id:'s13',t:'9:15 PM',l:'Wind down & sleep',type:'r'},
];
const PHASES=[
  {n:'Month 1',title:'Foundations',c:'#d4960a',weeks:[
    {w:'Week 1–2',t:'Design principles, colour theory, typography, Gestalt laws'},
    {w:'Week 3–4',t:'Figma basics, components, auto-layout, design systems'},
  ]},
  {n:'Month 2',title:'UX Skills',c:'#4a9eff',weeks:[
    {w:'Week 5–6',t:'User research, personas, empathy maps, user flows'},
    {w:'Week 7–8',t:'Wireframing, prototyping, usability testing'},
  ]},
  {n:'Month 3',title:'Portfolio & Job Ready',c:'#2ecf8c',weeks:[
    {w:'Week 9–10',t:'Case studies, portfolio site, UI polishing'},
    {w:'Week 11–12',t:'Job applications, interview prep, design challenges'},
  ]},
];
const TIPS=[
  'Recreate real UIs from scratch in Figma — don\'t just follow tutorials',
  'Join Dribbble & Behance early, comment on others\' work daily',
  'Document your process, not just final designs — recruiters want your thinking',
  'Start applying from Week 9, even before portfolio feels perfect',
];
const ACCENT_COLORS=['#d4960a','#4a9eff','#2ecf8c','#ff5757','#a78bfa','#f97316','#3dd6b5','#e85d99'];
const STUDY_CATS=['Study'];
const CHK=`<svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0c0c0e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let viewOffset=0,tasks=[],done={},timeLogs={},streak=0,settings={};
let timerTaskId=null,timerInterval=null,timerSeconds=0,timerRunning=false,timerTotal=0;
let pomodoroMode=false,pomoPhase='work',pomoCount=0,pomoInterval=null;
let audioCtx=null;
let activeNotesId=null;