const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const NEW_LANG_BAR = `      <div class="gov-utility-right">
        <span class="gov-lang-label" data-i18n="lang_label">Language:</span>
        <button class="gov-lang-btn lang-btn active" data-lang-code="en">English</button>
        <span class="gov-lang-sep">|</span>
        <button class="gov-lang-btn lang-btn" data-lang-code="kn">ಕನ್ನಡ</button>
        <span class="gov-lang-sep">|</span>
        <button class="gov-lang-btn lang-btn" data-lang-code="hi">हिन्दी</button>
        <span class="gov-lang-sep">|</span>
        <button class="gov-lang-btn lang-btn" data-lang-code="ta">தமிழ்</button>
        <span class="gov-lang-sep">|</span>
        <button class="gov-lang-btn lang-btn" data-lang-code="te">తెలుగు</button>
        <span class="gov-lang-sep">|</span>
        <button class="gov-lang-btn lang-btn" data-lang-code="mr">मराठी</button>
        <span class="gov-lang-sep">|</span>
        <button class="gov-lang-btn lang-btn" data-lang-code="ml">മലയാളം</button>
      </div>`;

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Match existing <div class="gov-utility-right">...</div>
  const regex = /<div class="gov-utility-right">[\s\S]*?<\/div>/;
  if (regex.test(html)) {
    html = html.replace(regex, NEW_LANG_BAR.trim());
    console.log(`Updated language bar in ${file}`);
  } else if (file === 'my-profile.html') {
    // Insert after gov-utility-left
    const leftMarker = '</div>\n    </div>\n  </div>';
    const leftRegex = /(<div class="gov-utility-left">[\s\S]*?<\/div>)/;
    if (leftRegex.test(html)) {
      html = html.replace(leftRegex, `$1\n${NEW_LANG_BAR}`);
      console.log(`Inserted language bar in ${file}`);
    }
    // Add translations.js if missing
    if (!html.includes('/js/translations.js')) {
      html = html.replace('<script src="/js/api.js"></script>', '<script src="/js/api.js"></script>\n  <script src="/js/translations.js"></script>');
      console.log(`Added translations.js script to ${file}`);
    }
  }

  // Ensure nav links have data-i18n attributes across all files
  const navReplacements = [
    { from: /<a href="\/"\s+class="gov-nav-link([^"]*)">Home<\/a>/g, to: '<a href="/" class="gov-nav-link$1" data-i18n="nav_home">Home</a>' },
    { from: /<a href="\/explore\.html"\s+class="gov-nav-link([^"]*)">Explore<\/a>/g, to: '<a href="/explore.html" class="gov-nav-link$1" data-i18n="nav_explore">Explore</a>' },
    { from: /<a href="\/map\.html"\s+class="gov-nav-link([^"]*)">Karnataka Map<\/a>/g, to: '<a href="/map.html" class="gov-nav-link$1" data-i18n="nav_map">Karnataka Map</a>' },
    { from: /<a href="\/meet-the-people\.html"\s+class="gov-nav-link([^"]*)">Meet People &amp; Artisans<\/a>/g, to: '<a href="/meet-the-people.html" class="gov-nav-link$1" data-i18n="nav_skills">Meet People &amp; Artisans</a>' },
    { from: /<a href="\/businesses\.html"\s+class="gov-nav-link([^"]*)">Businesses<\/a>/g, to: '<a href="/businesses.html" class="gov-nav-link$1" data-i18n="nav_businesses">Businesses</a>' },
    { from: /<a href="\/accessibility\.html"\s+class="gov-nav-link([^"]*)">Accessible Tourism<\/a>/g, to: '<a href="/accessibility.html" class="gov-nav-link$1" data-i18n="nav_accessible">Accessible Tourism</a>' },
    { from: /<a href="\/safety\.html"\s+class="gov-nav-link([^"]*)">Safety Centre<\/a>/g, to: '<a href="/safety.html" class="gov-nav-link$1" data-i18n="nav_safety">Safety Centre</a>' },
    { from: /<a href="\/provider-portal\.html"\s+class="gov-nav-link gov-nav-provider([^"]*)">Provider Portal<\/a>/g, to: '<a href="/provider-portal.html" class="gov-nav-link gov-nav-provider$1" data-i18n="nav_provider">Provider Portal</a>' },
    { from: /<a href="\/dc-dashboard\.html"\s+class="gov-nav-link gov-nav-admin([^"]*)">DC Dashboard<\/a>/g, to: '<a href="/dc-dashboard.html" class="gov-nav-link gov-nav-admin$1" data-i18n="nav_admin">DC Dashboard</a>' }
  ];

  navReplacements.forEach(r => {
    html = html.replace(r.from, r.to);
  });

  fs.writeFileSync(filePath, html, 'utf8');
});

console.log("All HTML files processed!");
