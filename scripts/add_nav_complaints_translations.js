const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'public', 'js', 'translations.js');
let raw = fs.readFileSync(target, 'utf8');
const isCRLF = raw.includes('\r\n');
const lines = raw.split(/\r?\n/);

const langs = [
  { name: 'en', key: '    nav_complaints: "Complaints & Feedback",' },
  { name: 'kn', key: '    nav_complaints: "ದೂರುಗಳು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ",' },
  { name: 'hi', key: '    nav_complaints: "शिकायतें और प्रतिक्रिया",' },
  { name: 'ta', key: '    nav_complaints: "புகார்கள் மற்றும் பின்னூட்டம்",' },
  { name: 'te', key: '    nav_complaints: "ఫిర్యాదులు మరియు అభిప్రాయం",' },
  { name: 'mr', key: '    nav_complaints: "तक्रारी आणि अभिप्राय",' },
  { name: 'ml', key: '    nav_complaints: "പരാതികളും പ്രതികരണങ്ങളും",' }
];

let langIdx = 0;
for (let i = 0; i < lines.length && langIdx < langs.length; i++) {
  if (lines[i].includes('nav_admin:')) {
    if (i > 0 && !lines[i - 1].includes('nav_complaints:')) {
      lines.splice(i, 0, langs[langIdx].key);
      i++;
    }
    langIdx++;
  }
}

fs.writeFileSync(target, lines.join(isCRLF ? '\r\n' : '\n'), 'utf8');
console.log('Finished updating translations.js');
