export const outputs = [
  { id:'summary', title:'Executive Summary', icon:'▤', type:'Summary', status:'Verified', score:96, description:'Decision-focused overview of the incident, impact, risks and recommended actions.' },
  { id:'advisory', title:'Technical Advisory', icon:'◈', type:'Advisory', status:'Review', score:91, description:'Technical findings, affected systems, indicators, timeline and mitigation guidance.' },
  { id:'linkedin', title:'LinkedIn Post', icon:'in', type:'Social', status:'Verified', score:94, description:'Professional public-facing post optimized for awareness and engagement.' },
  { id:'presentation', title:'Presentation', icon:'▥', type:'Slides', status:'Verified', score:93, description:'Structured slide-ready storyline for leadership or technical briefing.' },
];

export const claims = [
  { id:1, text:'The incident was detected on 12 August.', status:'supported', evidence:'Page 8 · Paragraph 3' },
  { id:2, text:'Three internal servers were affected.', status:'supported', evidence:'Page 9 · Affected Infrastructure' },
  { id:3, text:'The attack originated from Country X.', status:'review', evidence:'Insufficient evidence in source' },
  { id:4, text:'The incident caused ₹20 crore financial loss.', status:'unsupported', evidence:'No supporting evidence found' },
  { id:5, text:'Recommended mitigation includes credential rotation.', status:'supported', evidence:'Page 13 · Recommendations' },
];

export const audienceInfo = {
  Executive: { description:'Prioritizes impact, operational risk, decisions and actions.', priorities:[['Business impact',95],['Risk & severity',90],['Required decisions',88],['Technical detail',45]] },
  'Technical Team': { description:'Prioritizes technical findings, affected systems, indicators and mitigation.', priorities:[['Technical findings',96],['Affected systems',92],['Indicators',90],['Business context',52]] },
  'General Public': { description:'Prioritizes what happened, who may be affected and what people should do.', priorities:[['What happened',94],['Who is affected',91],['Precautions',96],['Technical detail',28]] },
  'Security Analyst': { description:'Prioritizes attack vectors, indicators, timeline and defensive actions.', priorities:[['Attack vector',97],['Indicators',96],['Timeline',92],['Mitigation',95]] },
};
