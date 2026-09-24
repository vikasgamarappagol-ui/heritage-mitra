const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'major_attractions');
const files = fs.readdirSync(dir);

console.log('Total files in major_attractions:', files.length);

const p = path.join(dir, 'OIP.jpg');
const buf = fs.readFileSync(p);
console.log('OIP.jpg size:', buf.length);
// Check if OIP.jpg is identical to Sangameshwara Temple (Chalukyan style).jpg
const p2 = path.join(dir, 'Sangameshwara Temple (Chalukyan style).jpg');
const buf2 = fs.readFileSync(p2);
console.log('Is identical to Sangameshwara?', buf.equals(buf2));



