/* ═══════════════════════════════════════════════
   CONSTANTS & DEFAULTS
═══════════════════════════════════════════════ */
const DEFAULT_TASKS = [];
const DEFAULT_CATS  = ['Morning', 'Afternoon', 'Evening'];
const DEFAULT_SCHED=[
  {id:'s1',t:'7:00 AM',l:'Wake up & shower',type:'r'},
  {id:'s2',t:'8:00 AM',l:'Breakfast',type:'r'},
  {id:'s3',t:'8:30 AM',l:'Exercise',dur:'1 hr',type:'h'},
  {id:'s4',t:'9:30 AM',l:'Deep work block',dur:'2.5 hrs',type:'s'},
  {id:'s5',t:'12:00 PM',l:'Cook & lunch',dur:'1 hr',type:'r'},
  {id:'s6',t:'1:00 PM',l:'Projects and important work',dur:'2 hrs',type:'s'},
  {id:'s7',t:'3:00 PM',l:'Break',dur:'30 min',type:'b'},
  {id:'s8',t:'3:30 PM',l:'Focus block',dur:'2 hrs',type:'s'},
  {id:'s9',t:'5:30 PM',l:'Break / stretch / walk',dur:'30 min',type:'b'},
  {id:'s10',t:'6:00 PM',l:'Personal projects or learning',dur:'1.5 hrs',type:'s'},
  {id:'s11',t:'7:30 PM',l:'Dinner',type:'r'},
  {id:'s12',t:'8:30 PM',l:'Review + plan tomorrow',dur:'45 min',type:'s'},
  {id:'s13',t:'9:15 PM',l:'Wind down & sleep',type:'r'},
];
const PHASES=[
  {n:'Phase 1',title:'Start',c:'#d4960a',weeks:[
    {w:'Milestone 1',t:'Define the outcome and choose the first practical steps'},
    {w:'Milestone 2',t:'Build a sustainable routine and complete an early win'},
  ]},
  {n:'Phase 2',title:'Build momentum',c:'#4a9eff',weeks:[
    {w:'Milestone 3',t:'Work through the core tasks and review progress'},
    {w:'Milestone 4',t:'Remove blockers and improve the process'},
  ]},
  {n:'Phase 3',title:'Finish',c:'#2ecf8c',weeks:[
    {w:'Milestone 5',t:'Complete, test, and polish the outcome'},
    {w:'Milestone 6',t:'Reflect, share, archive, and decide what comes next'},
  ]},
];
const TIPS=[
  'Make the next action small enough to begin without negotiation',
  'Protect one focused block for the task that matters most',
  'Review unfinished work before adding more commitments',
  'Record decisions and lessons so future you can pick up quickly',
];
const ACCENT_COLORS=['#d4960a','#4a9eff','#2ecf8c','#ff5757','#a78bfa','#f97316','#3dd6b5','#e85d99'];
const APP_VERSION='5.0.0';
const STUDY_CATS=[];
const CHK=`<svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0c0c0e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let viewOffset=0,tasks=[],done={},timeLogs={},streak=0,settings={};
let timerTaskId=null,timerInterval=null,timerSeconds=0,timerRunning=false,timerTotal=0;
let audioCtx=null;
let activeNotesId=null;
