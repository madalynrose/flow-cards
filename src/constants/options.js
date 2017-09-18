export const options = {
  stop: { 
    key: "stop",
    text: "STOP",
    outcomes: {'Continue': 6},
    type: 'outcome'
  },
  describe: {
    key: "describe",
    text: "Describe Emotions",
    type: 'outcome'
  },
  ltsc: {
    key: "ltsc",
    text: "Long-term Self Care",
    outcomes: {ABC: "abc", PLEASE: "please", HALT: "halt", Validation: "validation"},
    type: 'outcome'
  },
  abc: {
    key: "abc",
    text: "ABC",
    type: 'outcome'
  },
  please: {
    key: "please",
    text: "PLEASE",
    type: 'outcome'
  },
  halt: {
    key: "halt",
    text: "HALT",
    type: 'outcome'
  },
  validation: {
    key:"validation",
    text: "Validation",
    type: 'skill'
  },
  dearman: {
    key: "dearman",
    text: "DEAR MAN",
    type: 'skill'
  },
  give: {
    key: "give",
    text: "GIVE",
    type: 'outcome'
  },
  fast: {
    key: "fast",
    text: "FAST",
    type: 'outcome'
  },
  ctf: {
    key: "ctf",
    text: "Check the Facts",
    outcomes: {'Continue': 5},
    type: 'outcome'
  },
  ps: {
    key: "ps",
    text: "Problem Solving",
    type: 'outcome'
  },
  oa: {
    key:"oa",
    text: "Opposite Action",
    type: 'outcome'
  },
  ra: {
    key: "ra",
    text: "Radical Acceptance",
    type: 'outcome'
  },
  ca: {
    key: "ca",
    text: "Chain Analysis",
    type: 'outcome'
  },
  mot: { 
    key: "mot",
    text: "Mindfulness of Thoughts",
    type: 'outcome'
  },
  pc: {
    key: "pc",
    text: "Pros/Cons",
    type: 'outcome'
  },
  tip: {
    key: "tip",
    text: "TIP",
    type: 'outcome'
  },
  stsc: {
    key: "stsc",
    text: "Short-term Self Care",
    outcomes: {Distract: "distract", Soothe: "ss", Improve: "improve"},
    type: 'outcome' 
  },
  distract: {
    key: "distract",
    text: "Distract",
    type: 'outcome'
  },
  ss: {
    key: "ss",
    text: "Self-soothe",
    type: 'outcome'
  },
  improve: {
    key: "improve",
    text: "Improve the Moment",
    type: 'outcome'
  },
  willingness: {
    key: "willingness",
    text: "Willingness",
    type: 'outcome'
  },
  0:{ 
    key: 0,
    text: "Is this a crisis?", 
    description: "A crisis is highly stressful, short-term. It does not happen all the time, and acting on emotions won't help.", 
    outcomes: { Yes: "stop", No: 2 },
    type: 'question'
  },
  1:{ 
    key: 1,
    text: "Do you understand your emotions right now?", 
    outcomes:  { Yes: 2, No: "describe" },
    type: 'question'
  },
  2:{ 
    key: 2,
    text: "Do your actions have power to impact outcome?", 
    outcomes: { Yes: 3, No: "ltsc" },
    type: 'question'
  },
  3:{ 
    key: 3,
    text: "Does your situation influence others?", 
    outcomes: { Yes: 4, No: "ctf" },
    type: 'question' 
  },
  4:{ 
    key: 4,
    text: "What is most important in this situation?", 
    outcomes: { Objective: "dearman", Relationship: "give", Values: "fast" },
    type: 'question'
  },
  5:{ 
    key: 5,
    text: "Do your emotions fit the facts?", 
    outcomes: {Yes: "ps", No: "oa"},
    type: 'question' 
  },
  6:{ 
    key: 6,
    text: "Do you accept the situation?", 
    description: "You must accept that reality is as it is, everyone meets limitations in life, everything has a cause, and life can be worth willing even with pain.", 
    outcomes: {Yes: 7, No: "ra" },
    type: 'question' 
  },
  7:{ 
    key: 7,
    text: "Are you Willing or Willful?", 
    description: "Willing means doing exactly what is needed, not dragging your feet, acting with awareness, and listening and acting from your Wise Mind. Willful means giving up, insisting on being in control, refusing to make changes, and refusing to tolerate the moment.", 
    outcomes: { Willing: 8, Willful: "willingness"} ,
    type: 'question' 
  },
  8:{ 
    key: 8,
    text: "Do you understand what is causing your emotions?", 
    outcomes: { Yes: 9, No: "mot" },
    type: 'question'
  },
  9:{ 
    key: 9,
    text: "Do you understand what is causing your behavior?", 
    outcomes: { Yes: 10, No: "ca" },
    type: 'question' 
  },
  10:{ 
    key: 10,
    text: "Are you deciding between two courses of action?", 
    outcomes: { Yes: "pc", No: "stsc" },
    type: 'question' 
  }
}