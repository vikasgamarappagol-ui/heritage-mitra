const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const files = [
  'index.html',
  'explore.html',
  'map.html',
  'meet-the-people.html',
  'artisans.html',
  'businesses.html',
  'accessibility.html',
  'safety.html',
  'provider-portal.html',
  'dc-dashboard.html',
  'my-profile.html'
];

let updatedCount = 0;

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('href="/complaints.html"')) {
    console.log(`Skipping ${file} (already contains complaints link)`);
    return;
  }

  // Regex to match DC dashboard link in nav
  // e.g. <a href="/dc-dashboard.html" class="gov-nav-link gov-nav-admin..." ...>DC Dashboard</a>
  const dcNavRegex = /([ \t]*)(<a\s+href="\/dc-dashboard\.html"[^>]*>DC Dashboard<\/a>)/i;
  
  if (dcNavRegex.test(content)) {
    content = content.replace(dcNavRegex, (match, indent, dcTag) => {
      const complaintsTag = `${indent}<a href="/complaints.html" class="gov-nav-link gov-nav-complaints" data-i18n="nav_complaints">Complaints &amp; Feedback</a>\n`;
      return complaintsTag + indent + dcTag;
    });

    // Also add to footer if <li><a href="/dc-dashboard.html"> is present
    const footerDcRegex = /([ \t]*)(<li><a\s+href="\/dc-dashboard\.html"[^>]*>.*?<\/a><\/li>)/i;
    if (footerDcRegex.test(content)) {
      content = content.replace(footerDcRegex, (match, indent, dcLi) => {
        const complaintsLi = `${indent}<li><a href="/complaints.html">Tourist Grievance Portal</a></li>\n`;
        return complaintsLi + indent + dcLi;
      });
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file} with Complaints & Feedback link before DC Dashboard`);
    updatedCount++;
  } else {
    console.warn(`Could not find DC Dashboard nav link in ${file}`);
  }
});

console.log(`Finished updating ${updatedCount} files.`);
