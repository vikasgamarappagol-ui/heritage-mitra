const fs = require('fs');
const content = fs.readFileSync('public/js/map.js', 'utf8');

// Parse items from map.js where cat is cultural_food
const blocks = content.split('{');
const foodItems = [];

blocks.forEach(b => {
  if (b.includes('cat: "cultural_food"')) {
    const nameMatch = b.match(/name:\s*"([^"]+)"/);
    const talukMatch = b.match(/taluk:\s*"([^"]+)"/);
    const descMatch = b.match(/desc:\s*"([^"]+)"/);
    const timeMatch = b.match(/opening_time:\s*"([^"]+)"/);
    const phoneMatch = b.match(/phone:\s*"([^"]+)"/);
    const imageMatch = b.match(/image:\s*"([^"]+)"/);
    const ratingMatch = b.match(/rating:\s*"([^"]+)"/);
    
    if (nameMatch) {
      foodItems.push({
        name: nameMatch[1],
        taluk: talukMatch ? talukMatch[1] : 'Badami',
        desc: descMatch ? descMatch[1] : '',
        time: timeMatch ? timeMatch[1] : '8:00 AM - 10:00 PM',
        phone: phoneMatch ? phoneMatch[1] : '+91 98450 12345',
        image: imageMatch ? imageMatch[1] : '/images/destinations/badami.jpg',
        rating: ratingMatch ? ratingMatch[1] : '4.8 ★'
      });
    }
  }
});

console.log(JSON.stringify(foodItems, null, 2));
