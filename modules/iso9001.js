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

  // Clause 4 – Context
  {clause:"4.1",title:"Context of Organization",question:"Has the organization identified internal issues?",evidence:"SWOT, risk register",example:"Documented internal analysis"},
  {clause:"4.1",title:"Context of Organization",question:"Has the organization identified external issues?",evidence:"PESTLE analysis",example:"External factors register"},
  {clause:"4.2",title:"Interested Parties",question:"Have relevant interested parties been identified?",evidence:"Stakeholder list",example:"Stakeholder register"},
  {clause:"4.3",title:"Scope of QMS",question:"Is the QMS scope documented?",evidence:"Scope statement",example:"Approved QMS scope"},
  {clause:"4.4",title:"QMS Processes",question:"Are QMS processes defined?",evidence:"Process maps",example:"Process interaction diagram"},

  // Clause 5 – Leadership
  {clause:"5.1",title:"Leadership Commitment",question:"Does top management demonstrate commitment?",evidence:"Management review minutes",example:"Signed quality policy"},
  {clause:"5.1.2",title:"Customer Focus",question:"Is customer focus promoted?",evidence:"Customer satisfaction reports",example:"Customer KPI dashboard"},
  {clause:"5.2",title:"Quality Policy",question:"Is quality policy documented and communicated?",evidence:"Policy document",example:"Displayed quality policy"},
  {clause:"5.3",title:"Roles & Responsibilities",question:"Are roles and responsibilities defined?",evidence:"Org chart",example:"Job descriptions"},

  // Clause 6 – Planning
  {clause:"6.1",title:"Risk & Opportunities",question:"Are risks identified?",evidence:"Risk register",example:"Risk mitigation plan"},
  {clause:"6.1",title:"Risk & Opportunities",question:"Are opportunities identified?",evidence:"Opportunity register",example:"Improvement log"},
  {clause:"6.2",title:"Quality Objectives",question:"Are measurable objectives established?",evidence:"KPI list",example:"SMART objectives"},
  {clause:"6.3",title:"Planning Changes",question:"Are changes planned systematically?",evidence:"Change records",example:"Change approval log"},

  // Clause 7 – Support
  {clause:"7.1",title:"Resources",question:"Are adequate resources provided?",evidence:"Resource plan",example:"Budget allocation"},
  {clause:"7.2",title:"Competence",question:"Is employee competence ensured?",evidence:"Training records",example:"Competency matrix"},
  {clause:"7.3",title:"Awareness",question:"Are employees aware of QMS?",evidence:"Awareness sessions",example:"Training attendance"},
  {clause:"7.4",title:"Communication",question:"Is communication process defined?",evidence:"Communication plan",example:"Meeting records"},
  {clause:"7.5",title:"Documented Information",question:"Are documents controlled?",evidence:"Document register",example:"Version control list"},

  // Clause 8 – Operations
  {clause:"8.1",title:"Operational Planning",question:"Is operational planning established?",evidence:"Operational procedures",example:"Production planning doc"},
  {clause:"8.2",title:"Customer Requirements",question:"Are customer requirements reviewed?",evidence:"Contract review records",example:"Requirement checklist"},
  {clause:"8.3",title:"Design & Development",question:"Is design process controlled?",evidence:"Design records",example:"Design validation report"},
  {clause:"8.4",title:"External Providers",question:"Are suppliers evaluated?",evidence:"Supplier evaluation records",example:"Approved supplier list"},
  {clause:"8.5",title:"Production Control",question:"Is production controlled?",evidence:"Production SOP",example:"Work instructions"},
  {clause:"8.6",title:"Release of Products",question:"Is release authorized?",evidence:"Inspection reports",example:"Release approval record"},
  {clause:"8.7",title:"Nonconforming Outputs",question:"Are nonconformities controlled?",evidence:"NCR log",example:"Corrective action report"},

  // Clause 9 – Performance Evaluation
  {clause:"9.1",title:"Monitoring & Measurement",question:"Is performance monitored?",evidence:"KPI reports",example:"Performance dashboard"},
  {clause:"9.1.2",title:"Customer Satisfaction",question:"Is customer satisfaction measured?",evidence:"Survey results",example:"CSAT analysis"},
  {clause:"9.2",title:"Internal Audit",question:"Are internal audits conducted?",evidence:"Audit plan",example:"Audit reports"},
  {clause:"9.3",title:"Management Review",question:"Is management review conducted?",evidence:"Review minutes",example:"Review action plan"},

  // Clause 10 – Improvement
  {clause:"10.1",title:"Improvement",question:"Are improvement opportunities identified?",evidence:"Improvement log",example:"Kaizen register"},
  {clause:"10.2",title:"Corrective Action",question:"Are corrective actions implemented?",evidence:"CAPA log",example:"Root cause analysis"},
  {clause:"10.3",title:"Continual Improvement",question:"Is continual improvement demonstrated?",evidence:"Improvement metrics",example:"Trend analysis"}

  ]
};
