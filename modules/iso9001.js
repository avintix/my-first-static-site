// ISO 9001 Module

export const iso9001 = {
  name: "ISO 9001",

  weights: {
    "4":1.1,
    "5":1.3,
    "6":1.4,
    "7":1.0,
    "8":1.3,
    "9":1.2,
    "10":1.3
  },

  questions: [
    {
      clause:"4.1",
      title:"Context of Organization",
      question:"Has the organization identified internal and external issues?",
      evidence:"SWOT analysis, context register",
      example:"Documented context review updated annually"
    },
    {
      clause:"5.1",
      title:"Leadership Commitment",
      question:"Does top management demonstrate leadership and commitment?",
      evidence:"Management review minutes",
      example:"Signed quality policy"
    },
    {
      clause:"6.1",
      title:"Risk Planning",
      question:"Are risks and opportunities identified and addressed?",
      evidence:"Risk register",
      example:"Risk log with mitigation tracking"
    }
  ]
};
