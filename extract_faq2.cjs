const fs = require('fs');
const content = fs.readFileSync('C:\\\\Users\\\\91989\\\\.gemini\\\\antigravity-ide\\\\brain\\\\a06f390b-d4b7-4b9c-8dc8-b2613376891c\\\\.system_generated\\\\steps\\\\59\\\\content.md', 'utf-8');
const matches = [...content.matchAll(/"@type":"Question","name":"(.*?)","acceptedAnswer":{"@type":"Answer","text":"(.*?)"/g)];
const faqs = matches.map((m, i) => ({ 
  id: i + 1, 
  question: m[1].replace(/\\u003C.*?\\u003E/g, '').replace(/<.*?>/g, ''), 
  answer: m[2].replace(/\\u003C.*?\\u003E/g, '').replace(/<.*?>/g, '').replace(/\\"/g, '"').replace(/\\n/g, ' ')
}));
fs.writeFileSync('faq.json', JSON.stringify(faqs, null, 2));
console.log('Extracted', faqs.length, 'FAQs');
