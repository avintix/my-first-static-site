export const iso27001 = {
  name: "ISO 27001:2023",

  questions: [
    {
      clause:"6.1.2",
      title:"Information Security Risk Assessment",
      question:"Is information security risk assessment performed?",
      evidence:"ISMS risk methodology document",
      example:"Likelihood × Impact scoring model"
    },
    {
      clause:"A.5.1",
      title:"Policies for Information Security",
      question:"Are information security policies established?",
      evidence:"Approved IS policy",
      example:"Board approved policy document"
    },
    {
      clause:"A.8.8",
      title:"Vulnerability Management",
      question:"Is vulnerability management implemented?",
      evidence:"Vulnerability scanning reports",
      example:"Monthly scan reports with remediation"
    }
  ]
};
