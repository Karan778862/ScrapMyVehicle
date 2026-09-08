const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\91989\\.gemini\\antigravity-ide\\brain\\a06f390b-d4b7-4b9c-8dc8-b2613376891c\\.system_generated\\steps\\59\\content.md', 'utf-8');

const qs = [...content.matchAll(/class="faq-module-question.*?>(.*?)<\/div>/g)];
const as = [...content.matchAll(/class="faq-module-answer.*?>(.*?)<\/div>/g)];

let faqs = [];
for (let i = 0; i < qs.length && i < as.length; i++) {
    faqs.push({ question: qs[i][1].replace(/<[^>]+>/g, '').trim(), answer: as[i][1].replace(/<[^>]+>/g, '').trim() });
}

fs.writeFileSync('faq.json', JSON.stringify(faqs, null, 2));
