/**
 * Generate sub-pages for nav sections
 * Run: node scripts/gen-pages.js
 */
const fs = require('fs');
const path = require('path');

const pages = [
  {
    file: 'map.html',
    activeNav: '/map.html',
    title: 'Karnataka Map | Bagalkote Tourism',
    hero: { kicker: 'GEOGRAPHIC HEARTLAND', heading: 'BAGALKOTE — HEART OF CHALUKYAN HERITAGE', sub: 'Interactive GIS map highlighting Bagalkote District within Karnataka state, showing verified monuments, artisan clusters, and safety nodes.' },
    bodyId: 'mapPage'
  },
  {
    file: 'meet-the-people.html',
    activeNav: '/meet-the-people.html',
    title: 'Meet the People | Bagalkote Tourism',
    hero: { kicker: 'INCLUSIVE GROWTH SIGNATURE MODULE', heading: 'MEET THE PEOPLE BEHIND BAGALKOTE', sub: 'AI-Based Tourist–Local Skill Matching: Connecting your interests directly to master weavers, artisans, and traditional home-chefs.' },
    bodyId: 'meetPage'
  },
  {
    file: 'artisans.html',
    activeNav: '/artisans.html',
    title: 'Local Artisans | Bagalkote Tourism',
    hero: { kicker: 'MODULE 8: LOCAL ARTISANS', heading: 'DISCOVER LOCAL CRAFTS & ARTISANS', sub: 'Verified handloom cooperatives and GI-tagged craft practitioners. Zero invented entities.' },
    bodyId: 'artisansPage'
  },
  {
    file: 'businesses.html',
    activeNav: '/businesses.html',
    title: 'Local Businesses | Bagalkote Tourism',
    hero: { kicker: 'MODULE 9: LOCAL BUSINESSES', heading: 'LOCAL BUSINESSES & TOURISM SERVICES', sub: 'Verified homestays, traditional Khanavalis, licensed guides, and handloom stores.' },
    bodyId: 'bizPage'
  },
  {
    file: 'accessibility.html',
    activeNav: '/accessibility.html',
    title: 'Accessible Tourism | Bagalkote',
    hero: { kicker: 'MODULE 10: INCLUSIVE ACCESS', heading: 'TRAVEL WITHOUT BARRIERS', sub: 'Verified mobility assessments, staircase counts, wheelchair ramp availability, and senior-friendly facilities.' },
    bodyId: 'accPage'
  },
  {
    file: 'safety.html',
    activeNav: '/safety.html',
    title: 'Safety Centre | Bagalkote Tourism',
    hero: { kicker: 'MODULE 13: TOURIST SECURITY', heading: 'BAGALKOTE TOURIST SAFETY CENTRE', sub: 'Verified 24x7 emergency contacts, police stations, multi-specialty trauma hospitals, and responsible travel advisories.' },
    bodyId: 'safetyPage'
  },
  {
    file: 'provider-portal.html',
    activeNav: '/provider-portal.html',
    title: 'Provider Portal | Bagalkote Tourism',
    hero: { kicker: 'LOCAL COMMUNITY EMPOWERMENT', heading: 'BAGALKOTE LOCAL PROVIDER PORTAL', sub: 'Register your business, cooperative, or service to connect directly with tourists visiting Bagalkote.' },
    bodyId: 'providerPage'
  },
  {
    file: 'dc-dashboard.html',
    activeNav: '/dc-dashboard.html',
    title: 'DC Dashboard | Bagalkote Tourism',
    hero: { kicker: 'DISTRICT ADMINISTRATION INTELLIGENCE', heading: 'BAGALKOTE TOURISM INTELLIGENCE DASHBOARD', sub: 'Real-time tourism metrics, demand analytics, and heritage conservation data for district administration.' },
    bodyId: 'adminPage'
  }
];

function navLinks(activeHref) {
  const links = [
    ['/', 'Home'],
    ['/explore.html', 'Explore'],
    ['/map.html', 'Karnataka Map'],
    ['/meet-the-people.html', 'Meet the People'],
    ['/artisans.html', 'Artisans'],
    ['/businesses.html', 'Businesses'],
    ['/accessibility.html', 'Accessible Tourism'],
    ['/safety.html', 'Safety Centre'],
    ['/provider-portal.html', 'Provider Portal', 'gov-nav-provider'],
    ['/complaints.html', 'Complaints & Feedback', 'gov-nav-complaints'],
    ['/dc-dashboard.html', 'DC Dashboard', 'gov-nav-admin'],
  ];
  return links.map(([href, label, extra = '']) => {
    const active = href === activeHref ? 'active' : '';
    return `<a href="${href}" class="gov-nav-link ${extra} ${active}">${label}</a>`;
  }).join('\n      ');
}

function buildPage(p) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Noto+Sans+Kannada:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  ${p.file === 'map.html' ? '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin=""/>' : ''}
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/pages.css">
</head>
<body data-lang="en">

  <div class="gov-utility-bar">
    <div class="gov-container gov-utility-inner">
      <div class="gov-utility-left">
        <span class="gov-dept-label">Government of Karnataka</span>
        <span class="gov-divider">|</span>
        <span class="gov-dept-label">District Administration, Bagalkote</span>
      </div>
      <div class="gov-utility-right">
        <span class="gov-lang-label">Language:</span>
        <button class="gov-lang-btn lang-btn active" data-lang-code="en">English</button>
        <span class="gov-lang-sep">|</span>
        <button class="gov-lang-btn lang-btn" data-lang-code="kn">ಕನ್ನಡ</button>
        <span class="gov-lang-sep">|</span>
        <button class="gov-lang-btn lang-btn" data-lang-code="hi">हिन्दी</button>
      </div>
    </div>
  </div>

  <div class="gov-brand-band">
    <div class="gov-container gov-brand-inner">
      <a href="/" class="gov-ka-logo-block">
        <div class="gov-ka-emblem">
          <img src="/images/karnataka_govt_seal.jpg" alt="Government of Karnataka Official Seal" class="ka-emblem-img" />
        </div>
        <div class="gov-ka-text">
          <span class="gov-ka-script">Karnataka</span>
          <span class="gov-ka-tagline">One state. Many worlds.</span>
          <span class="gov-ka-dept">Department of Tourism</span>
        </div>
      </a>
      <div class="gov-site-center">
        <span class="gov-site-title-kn">ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಪ್ರವಾಸೋದ್ಯಮ</span>
        <span class="gov-site-title-en">DEPARTMENT OF TOURISM</span>
        <span class="gov-site-district">BAGALKOTE DISTRICT</span>
        <span class="gov-site-sub">AI-Powered Inclusive Tourism Ecosystem</span>
      </div>
      <div class="gov-brand-actions">
        <button class="btn btn-primary" id="openTripPlannerBtn">
          <span class="btn-icon">🧭</span>
          <span>PLAN MY TRIP</span>
        </button>
      </div>
    </div>
  </div>

  <nav class="gov-nav-bar" id="siteHeader">
    <div class="gov-container gov-nav-inner">
      ${navLinks(p.activeNav)}
    </div>
  </nav>

  <div class="page-hero">
    <div class="page-hero-content container">
      <span class="section-kicker">${p.hero.kicker}</span>
      <h1 class="page-hero-title">${p.hero.heading}</h1>
      <p class="page-hero-sub">${p.hero.sub}</p>
    </div>
  </div>

  <main>
    <section class="section-padding" id="${p.bodyId}">
      <div class="container" id="${p.bodyId}Container">
        <div style="text-align:center;padding:4rem 0;color:#64748B;">
          <div style="font-size:3rem;margin-bottom:1rem;">⏳</div>
          <p>Loading content...</p>
        </div>
      </div>
    </section>
  </main>

  <!-- LOGIN MODAL (shared) -->
  <div class="modal-backdrop" id="loginModal">
    <div class="modal-dialog login-dialog">
      <div class="modal-header">
        <div>
          <span class="section-kicker" style="font-size:0.7rem;">BAGALKOTE TOURISM PORTAL</span>
          <h3 class="modal-title">Sign In to Continue</h3>
          <p style="font-size:0.85rem;color:#64748B;margin-top:0.25rem;">Login to plan and save your Bagalkote trip</p>
        </div>
        <button class="modal-close" id="closeLoginModal">&times;</button>
      </div>
      <div class="login-body">
        <form id="loginForm" class="login-form">
          <div class="form-group">
            <label for="loginEmail">Email Address</label>
            <input type="email" id="loginEmail" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <input type="password" id="loginPassword" placeholder="Enter your password" required>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary" style="width:100%;">Sign In & Continue</button>
          </div>
          <div class="login-footer-links">
            <a href="#" onclick="return false;">Forgot Password?</a>
            <span>·</span>
            <a href="#" onclick="return false;">Create Account</a>
          </div>
        </form>
        <div id="loginError" class="login-error" style="display:none;"></div>
      </div>
    </div>
  </div>

  <script src="/js/translations.js"></script>
  <script src="/js/api.js"></script>
  ${p.file === 'map.html' ? '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script><script src="/js/map.js"></script>' : ''}
  ${p.file === 'meet-the-people.html' ? '<script src="/js/skill-matching.js"></script>' : ''}
  ${p.file === 'provider-portal.html' ? '<script src="/js/provider-portal.js"></script>' : ''}
  ${p.file === 'dc-dashboard.html' ? '<script src="/js/admin-dashboard.js"></script>' : ''}
  <script src="/js/pages/shared-login.js"></script>
  <script src="/js/pages/${p.file.replace('.html','-page')}.js"></script>
</body>
</html>`;
}

const publicDir = path.join(__dirname, '..', 'public');
pages.forEach(p => {
  const html = buildPage(p);
  fs.writeFileSync(path.join(publicDir, p.file), html);
  console.log(`✓ Generated ${p.file}`);
});
console.log('All pages generated!');
