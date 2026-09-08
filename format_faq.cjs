const fs = require('fs');
let faqs = JSON.parse(fs.readFileSync('faq.json', 'utf-8'));
faqs = faqs.map(f => ({
  id: f.id,
  question: f.question.replace(/^Q\.\s*/, ''),
  answer: f.answer.replace(/Spinny/g, 'ScrapMyVehicle').replace(/Spinny’s/g, 'ScrapMyVehicle’s')
}));

const dataContent = `export const faqList = ${JSON.stringify(faqs, null, 2)};`;
fs.writeFileSync('src/data/faqData.js', dataContent);
