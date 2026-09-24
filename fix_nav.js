const fs = require('fs');
const files = [
  'public/accessibility.html',
  'public/businesses.html',
  'public/dc-dashboard.html',
  'public/map.html',
  'public/safety.html'
];
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // Replace artisans nav link with merged meet-the-people link
  c = c.split('href="/artisans.html" class="gov-nav-link  ">Artisans').join('href="/meet-the-people.html" class="gov-nav-link">Meet People &amp; Artisans');
  // Also remove old "Meet the People" if it still points separately
  c = c.split('href="/meet-the-people.html" class="gov-nav-link  ">Meet the People').join('href="/meet-the-people.html" class="gov-nav-link">Meet People &amp; Artisans');
  fs.writeFileSync(f, c);
  console.log('Updated:', f);
});
