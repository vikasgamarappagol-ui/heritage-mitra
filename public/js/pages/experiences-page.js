/**
 * experiences-page.js
 * AI Experience Finder — merged Meet the People & Artisans
 * Renders: interest picker, budget/duration/language inputs, AI matching engine, provider cards
 */

// ── Provider Database ─────────────────────────────────────────────────────────
const PROVIDERS_DB = [
  {
    id: "prov_ravi_jolada",
    name: "Ravi Kumar Hiremath",
    avatar: "R",
    skill: "Traditional Jolada Rotti Cooking",
    category: "Food",
    interests: ["Food", "Culture"],
    location: "Badami, Bagalkote",
    price: 500,
    duration: 2,
    language: ["Kannada", "Hindi", "English"],
    availability: "Mon–Sat, 10:00 AM – 6:00 PM",
    rating: 4.9,
    reviews: 142,
    verified: true,
    verificationStatus: "Government Verified ✓",
    providerId: "BGK-FOOD-0012",
    description: "Master home-chef with 22 years of experience teaching the art of authentic North Karnataka cuisine. Guests learn to hand-pat Jolada Rotti, prepare Yennegayi Badanekayi, Shenga Chutney Pudi, and classic Jolada Kichdi in a real village hearth setting.",
    tags: ["Hands-on Cooking", "Village Kitchen", "North Karnataka Cuisine", "Cultural Immersion"],
    heroScore: 97
  },
  {
    id: "prov_suresh_story",
    name: "Suresh Gaddigoudar",
    avatar: "S",
    skill: "Chalukyan Heritage Storytelling",
    category: "History",
    interests: ["History", "Culture", "Art"],
    location: "Badami, Bagalkote",
    price: 400,
    duration: 2,
    language: ["Kannada", "English"],
    availability: "Daily, 7:00 AM – 7:00 PM",
    rating: 4.8,
    reviews: 218,
    verified: true,
    verificationStatus: "ASI Licensed Heritage Guide ✓",
    providerId: "BGK-GUIDE-0003",
    description: "ASI-licensed heritage interpreter with 18 years specialising in Chalukyan history. Delivers immersive storytelling walks through Badami Caves, Pattadakal, and Aihole explaining iconography, construction techniques, and royal lineages.",
    tags: ["Heritage Walks", "Mythology", "ASI Licensed", "Archaeology"],
    heroScore: 94
  },
  {
    id: "prov_lakshmi_weave",
    name: "Lakshmi Walikar",
    avatar: "L",
    skill: "Ilkal Saree Weaving Demonstration",
    category: "Crafts",
    interests: ["Crafts", "Art", "Culture"],
    location: "Ilkal, Bagalkote",
    price: 600,
    duration: 3,
    language: ["Kannada"],
    availability: "Mon–Sat, 9:00 AM – 5:00 PM",
    rating: 4.9,
    reviews: 87,
    verified: true,
    verificationStatus: "GI Craft Artisan Certified ✓",
    providerId: "BGK-ART-0021",
    description: "Master weaver from the GI-tagged Ilkal Saree tradition with 30+ years experience. Guides tourists through the complete weaving process on traditional pit looms — from warp-setting and bobbin-winding to the iconic Kondi loop-joining technique that gives Ilkal sarees their distinctive red pallu.",
    tags: ["GI Certified", "Handloom", "Pit Loom", "Ilkal Saree", "Kondi Technique"],
    heroScore: 92
  },
  {
    id: "prov_basappa_khana",
    name: "Basappa Handigund",
    avatar: "B",
    skill: "Guledgudda Khana Weaving & Kasuti",
    category: "Crafts",
    interests: ["Crafts", "Art"],
    location: "Guledagudda, Bagalkote",
    price: 550,
    duration: 3,
    language: ["Kannada", "Hindi"],
    availability: "Tue–Sun, 9:30 AM – 5:30 PM",
    rating: 4.7,
    reviews: 63,
    verified: true,
    verificationStatus: "GI Craft Artisan Certified ✓",
    providerId: "BGK-ART-0034",
    description: "4th-generation weaver of the rare Guledgudda Khana fabric — India's only GI-tagged dobby-woven blouse piece. Also teaches traditional Kasuti needle embroidery with ancient geometric patterns symbolizing temples and peacocks.",
    tags: ["GI Certified", "Dobby Weaving", "Kasuti Embroidery", "Handloom"],
    heroScore: 89
  },
  {
    id: "prov_savaji_cook",
    name: "Mallikarjun Hurakadli",
    avatar: "M",
    skill: "Traditional Savaji Non-Veg Cooking",
    category: "Food",
    interests: ["Food", "Culture"],
    location: "Bagalkote Town",
    price: 700,
    duration: 3,
    language: ["Kannada", "Marathi"],
    availability: "Daily (Except Mon), 11:00 AM – 3:00 PM",
    rating: 4.8,
    reviews: 109,
    verified: true,
    verificationStatus: "Government Verified ✓",
    providerId: "BGK-FOOD-0025",
    description: "Custodian of authentic Savaji culinary heritage spanning 5 generations. Teaches stone-grinding spice masalas, slow-cooking mutton rassa, preparing Keema Unde, and the art of Savaji thali presentation. Cooking sessions held in a traditional Gadi (fortified home) kitchen.",
    tags: ["Savaji Cuisine", "Traditional Spices", "Non-Veg", "Heritage Kitchen"],
    heroScore: 91
  },
  {
    id: "prov_parvati_yoga",
    name: "Parvati Desai",
    avatar: "P",
    skill: "Vachana Philosophy & Veerashaiva Culture",
    category: "Culture",
    interests: ["Culture", "History"],
    location: "Kudala Sangama, Hunagund",
    price: 300,
    duration: 2,
    language: ["Kannada", "English"],
    availability: "Daily, 6:00 AM – 12:00 PM",
    rating: 4.9,
    reviews: 194,
    verified: true,
    verificationStatus: "Basaveshwara Trust Certified ✓",
    providerId: "BGK-CULT-0007",
    description: "Certified Vachana scholar and cultural educator at Kudalasangama. Conducts sessions on the revolutionary 12th-century Basaveshwara movement, recitation of Vachanas (lyric poems), Lingayat traditions, and guided meditation at the sacred river confluence.",
    tags: ["Vachana Literature", "Basaveshwara", "Lingayat Culture", "Meditation"],
    heroScore: 95
  },
  {
    id: "prov_anand_kardant",
    name: "Anand Singi",
    avatar: "A",
    skill: "Amingad Kardant Sweet Making",
    category: "Food",
    interests: ["Food", "Crafts"],
    location: "Amingad, Hunagund",
    price: 450,
    duration: 2,
    language: ["Kannada", "Hindi"],
    availability: "Daily, 8:00 AM – 12:00 PM",
    rating: 4.8,
    reviews: 76,
    verified: true,
    verificationStatus: "Heritage Craft Artisan ✓",
    providerId: "BGK-FOOD-0031",
    description: "5th-generation Kardant maker from the legendary C.R. Singi family (Est. 1907). Guides visitors through the authentic process of sourcing edible gum (dink), slow-roasting with jaggery and pure cow ghee, dry-fruit blending, and hand-pressing the iconic Amingad Kardant sweet.",
    tags: ["Heritage Sweet", "Amingad Kardant", "Traditional Recipe", "GI Product"],
    heroScore: 88
  },
  {
    id: "prov_gowri_folk",
    name: "Gowri Kumbargi",
    avatar: "G",
    skill: "Dollu Kunitha & Karnataka Folk Arts",
    category: "Art",
    interests: ["Art", "Culture"],
    location: "Mudhol, Bagalkote",
    price: 350,
    duration: 2,
    language: ["Kannada"],
    availability: "Fri–Sun, 4:00 PM – 8:00 PM",
    rating: 4.6,
    reviews: 52,
    verified: true,
    verificationStatus: "Karnataka Folklore Academy ✓",
    providerId: "BGK-ART-0045",
    description: "Folk artist and cultural educator specialising in Dollu Kunitha (drum dance), Veeragase, and Lamani tribal art forms. Leads participatory sessions where tourists learn basic Dollu rhythm patterns, traditional face painting, and folk song recitation.",
    tags: ["Folk Dance", "Dollu Kunitha", "Tribal Art", "Participatory"],
    heroScore: 84
  },
  {
    id: "prov_vithal_pottery",
    name: "Vithal Kumbhar",
    avatar: "V",
    skill: "Traditional Clay Pottery & Terracotta",
    category: "Crafts",
    interests: ["Crafts", "Art"],
    location: "Bagalkote Town",
    price: 400,
    duration: 2.5,
    language: ["Kannada", "English"],
    availability: "Mon–Sat, 9:00 AM – 5:00 PM",
    rating: 4.7,
    reviews: 91,
    verified: true,
    verificationStatus: "Government Verified ✓",
    providerId: "BGK-ART-0058",
    description: "Master potter from a 12-generation Kumbhar family. Teaches hand-throwing on traditional kick-wheel, coiling, pinch-pot techniques, and natural clay painting using mineral pigments. Visitors create and take home their own handcrafted pot.",
    tags: ["Clay Pottery", "Kick Wheel", "Terracotta", "Take-home Craft"],
    heroScore: 86
  },
  {
    id: "prov_sheetal_holige",
    name: "Sheetal Honnapur",
    avatar: "S",
    skill: "Shenga Holige & Traditional Sweet Making",
    category: "Food",
    interests: ["Food", "Culture"],
    location: "Guledagudda, Bagalkote",
    price: 350,
    duration: 1.5,
    language: ["Kannada"],
    availability: "Daily, 9:00 AM – 1:00 PM",
    rating: 4.8,
    reviews: 68,
    verified: true,
    verificationStatus: "Government Verified ✓",
    providerId: "BGK-FOOD-0038",
    description: "Traditional sweet-maker renowned for Shenga Holige (peanut-jaggery flatbread), Coconut Holige, and Obbattu. Teaches the full process from peanut roasting, filling preparation, careful rolling to the perfect tawa finish with ghee basting.",
    tags: ["Shenga Holige", "Traditional Sweets", "Hands-on", "Village Kitchen"],
    heroScore: 87
  },
  {
    id: "prov_ramesh_mudhol",
    name: "Ramesh Ghorpade",
    avatar: "R",
    skill: "Mudhol Hound Dog Heritage Walk",
    category: "History",
    interests: ["History", "Culture"],
    location: "Mudhol, Bagalkote",
    price: 600,
    duration: 2.5,
    language: ["Kannada", "English"],
    availability: "Tue–Sun, 7:00 AM – 11:00 AM",
    rating: 4.7,
    reviews: 44,
    verified: true,
    verificationStatus: "Karnataka Tourism Registered ✓",
    providerId: "BGK-GUIDE-0019",
    description: "Licensed heritage guide and Mudhol Hound breeder from the Ghorpade royal family lineage. Conducts exclusive tours of the Canine Research Center, the Mudhol Fort, Ranna Smaraka, and stories of how these dogs served in the Indian Army.",
    tags: ["Mudhol Hound", "Royal Heritage", "Wildlife", "Fort History"],
    heroScore: 83
  },
  {
    id: "prov_meenakshi_rangoli",
    name: "Meenakshi Patil",
    avatar: "M",
    skill: "Rangoli & Kolam Traditional Art",
    category: "Art",
    interests: ["Art", "Culture", "Crafts"],
    location: "Jamkhandi, Bagalkote",
    price: 300,
    duration: 2,
    language: ["Kannada", "Hindi", "English"],
    availability: "Daily, 8:00 AM – 12:00 PM",
    rating: 4.6,
    reviews: 79,
    verified: true,
    verificationStatus: "Government Verified ✓",
    providerId: "BGK-ART-0062",
    description: "Award-winning Rangoli artist who teaches traditional Karnataka floor art using natural materials — rice powder, flower petals, turmeric, and kumkum. Sessions cover geometric Kolam patterns, festive Rangoli designs, and the symbolism behind each motif.",
    tags: ["Rangoli", "Kolam", "Traditional Art", "Natural Materials"],
    heroScore: 81
  }
];

// ── AI Scoring Engine ─────────────────────────────────────────────────────────
function computeMatch(provider, interests, budget, duration, language) {
  let score = 0;

  // 1. Interest match (max 50 points)
  if (interests && interests.length > 0) {
    const matchingInterests = provider.interests.filter(i => 
      interests.some(sel => sel.toLowerCase() === i.toLowerCase() || (sel.toLowerCase() === 'food' && provider.category.toLowerCase() === 'food'))
    );
    const categoryMatch = interests.some(sel => sel.toLowerCase() === provider.category.toLowerCase());
    
    if (matchingInterests.length > 0 || categoryMatch) {
      const matchRatio = Math.max(matchingInterests.length / interests.length, categoryMatch ? 0.8 : 0.5);
      score += Math.round(matchRatio * 50);
    } else {
      // 0 points if category/interests do not match selected interests
      score += 0;
    }
  } else {
    // Baseline score if no interest filter is active
    score += 40;
  }

  // 2. Budget match (max 25 points)
  if (budget && !isNaN(Number(budget)) && Number(budget) > 0) {
    const b = Number(budget);
    if (provider.price <= b) {
      score += 25;
    } else if (provider.price <= b * 1.2) {
      score += 15;
    } else if (provider.price <= b * 1.5) {
      score += 5;
    } else {
      score += 0;
    }
  } else {
    score += 20; // Default budget fit
  }

  // 3. Duration match (max 15 points)
  if (duration && !isNaN(Number(duration)) && Number(duration) > 0) {
    const d = Number(duration);
    const diff = Math.abs(provider.duration - d);
    if (diff <= 0.5) score += 15;
    else if (diff <= 1.5) score += 10;
    else if (diff <= 2.5) score += 5;
    else score += 0;
  } else {
    score += 10; // Default duration fit
  }

  // 4. Language match (max 10 points)
  if (language && language.trim() !== '') {
    const lang = language.trim().toLowerCase();
    const hasLang = provider.language.some(l => l.toLowerCase().includes(lang));
    if (hasLang) score += 10;
    else score += 0;
  } else {
    score += 8; // Default language fit
  }

  return Math.min(99, Math.max(15, Math.round(score)));
}

// ── Category colour map ───────────────────────────────────────────────────────
const CAT_ICONS = {
  Food: '🍲', Art: '🎨', Culture: '🎭', History: '🏛️', Crafts: '🧵'
};

// ── Render: AI Finder Panel ───────────────────────────────────────────────────
function renderFinderPanel() {
  return `
  <div class="exp-finder-section">
    <div class="container">
      <div class="exp-finder-card">
        <h2 class="exp-finder-heading">🤖 What Are You Interested In?</h2>
        <p class="exp-finder-sub">Tell us your preferences and our AI engine will match you with the best local experiences.</p>

        <span class="exp-finder-label">Select Your Interests</span>
        <div class="exp-interests-grid">
          ${['Food','Art','Culture','History','Crafts'].map(i => `
            <label class="exp-interest-pill" id="pill_${i}">
              <input type="checkbox" value="${i}" class="interest-cb" onchange="togglePill(this)">
              ${CAT_ICONS[i]} ${i}
            </label>
          `).join('')}
        </div>

        <div class="exp-finder-fields">
          <div class="exp-field-group">
            <span class="exp-finder-label">Budget (₹)</span>
            <input class="exp-field-input" id="finderBudget" type="number" placeholder="e.g. 500" min="100" max="5000" step="50">
          </div>
          <div class="exp-field-group">
            <span class="exp-finder-label">Duration (hours)</span>
            <input class="exp-field-input" id="finderDuration" type="number" placeholder="e.g. 2" min="0.5" max="8" step="0.5">
          </div>
          <div class="exp-field-group">
            <span class="exp-finder-label">Preferred Language</span>
            <input class="exp-field-input" id="finderLanguage" type="text" placeholder="Kannada / English / Hindi">
          </div>
        </div>

        <button class="exp-find-btn" id="findExpBtn" onclick="runAIMatching()">
          <span>🎯</span> Find Experiences
        </button>
      </div>
    </div>
  </div>`;
}

function togglePill(cb) {
  const label = cb.closest('.exp-interest-pill');
  label.classList.toggle('selected', cb.checked);
}

// ── Render: Provider Card ─────────────────────────────────────────────────────
function renderProviderCard(provider, matchScore) {
  const starsStr = '⭐'.repeat(Math.round(provider.rating)) + ` ${provider.rating} (${provider.reviews})`;
  return `
  <div class="provider-card" id="card_${provider.id}">
    <div class="provider-card-top">
      <div class="provider-avatar">${provider.avatar}</div>
      <div class="provider-card-info">
        <p class="provider-card-name">${provider.name}</p>
        <p class="provider-card-skill">${CAT_ICONS[provider.category] || '🎯'} ${provider.skill}</p>
        <p class="provider-card-loc">📍 ${provider.location}</p>
      </div>
      <div class="provider-match-badge">🎯 ${matchScore}% Match</div>
    </div>

    <div class="provider-card-body">
      <div class="provider-meta-row">
        <div class="provider-meta-item">🕒 <strong>${provider.duration}h</strong></div>
        <div class="provider-meta-item">🗣️ <strong>${provider.language.join(', ')}</strong></div>
        <div class="provider-meta-item">${starsStr}</div>
      </div>
      <p class="provider-desc">${provider.description}</p>
      <div class="provider-tags">
        ${provider.tags.map(t => `<span class="provider-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="provider-card-footer">
      <div>
        <div class="provider-price">₹${provider.price} <span>/ person</span></div>
        <div class="provider-verified">🟢 ${provider.verificationStatus}</div>
      </div>
    </div>

    <div class="provider-card-actions">
      <button class="btn btn-primary" style="flex:1;font-size:0.85rem;" onclick="viewProviderDetail('${provider.id}')">
        View Details
      </button>
      <button class="btn btn-outline" style="flex:1;font-size:0.85rem;" onclick="bookProvider('${provider.id}')">
        📅 Book
      </button>
    </div>
  </div>`;
}

// ── Run AI Matching ───────────────────────────────────────────────────────────
function runAIMatching() {
  const btn = document.getElementById('findExpBtn');
  const interests = [...document.querySelectorAll('.interest-cb:checked')].map(c => c.value);
  const budget = document.getElementById('finderBudget').value;
  const duration = document.getElementById('finderDuration').value;
  const language = document.getElementById('finderLanguage').value;

  // Animate button
  btn.classList.add('loading');
  btn.textContent = '🤖 AI is matching...';

  setTimeout(async () => {
    btn.classList.remove('loading');
    btn.innerHTML = '<span>🎯</span> Find Experiences';

    // Load DC Approved Providers
    await loadDCApprovedProviders();

    // Score all providers
    const scored = PROVIDERS_DB.map(p => ({
      ...p,
      matchScore: computeMatch(p, interests, budget, duration, language)
    })).sort((a, b) => b.matchScore - a.matchScore);

    // Filter out poor matches only if interests/budget specified
    const hasFilters = interests.length > 0 || budget || duration || language;
    const results = hasFilters ? scored.filter(p => p.matchScore >= 50) : scored;

    renderResults(results, hasFilters);

    // Scroll to results
    document.getElementById('expResultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

// ── Render Results Section ────────────────────────────────────────────────────
function renderResults(results, hasFilters) {
  const section = document.getElementById('expResultsSection');
  if (!section) return;

  if (results.length === 0) {
    section.innerHTML = `
      <div class="container">
        <div class="exp-empty-state">
          <div class="exp-empty-icon">🔍</div>
          <h3 style="font-family:'Cinzel',serif;color:#0D1B2A;margin-bottom:0.5rem;">No exact matches found</h3>
          <p>Try adjusting your budget or removing some filters to see more experiences.</p>
          <button class="btn btn-primary" style="margin-top:1.5rem;" onclick="runAIMatchingAll()">Show All Experiences</button>
        </div>
      </div>`;
    return;
  }

  section.innerHTML = `
    <div class="container">
      <div class="exp-results-header">
        <div>
          <div class="exp-ai-badge">🤖 AI RECOMMENDATIONS</div>
          <h2 style="font-family:'Cinzel',serif;font-size:1.4rem;color:#0D1B2A;margin:0.5rem 0 0 0;">
            ${hasFilters ? 'Matched Experiences For You' : 'All Verified Local Experiences'}
          </h2>
        </div>
        <div class="exp-results-count">${results.length} experience${results.length !== 1 ? 's' : ''} found</div>
      </div>

      <div class="exp-category-tabs" id="expCatTabs">
        <button class="exp-cat-tab active" onclick="filterByCategory('All', this)">All</button>
        ${[...new Set(results.map(r => r.category))].map(cat =>
          `<button class="exp-cat-tab" onclick="filterByCategory('${cat}', this)">${CAT_ICONS[cat] || ''} ${cat}</button>`
        ).join('')}
      </div>

      <div class="exp-cards-grid" id="expCardsGrid">
        ${results.map(p => renderProviderCard(p, p.matchScore)).join('')}
      </div>
    </div>`;

  // Store results globally for category filtering
  window._currentResults = results;
}

function filterByCategory(cat, btn) {
  document.querySelectorAll('.exp-cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('expCardsGrid');
  if (!grid) return;
  const filtered = cat === 'All' ? window._currentResults : window._currentResults.filter(p => p.category === cat);
  grid.innerHTML = filtered.map(p => renderProviderCard(p, p.matchScore)).join('');
}

async function loadDCApprovedProviders() {
  const rejectedOrReviewIds = new Set();

  // 1. Gather rejected or under-review IDs from local storage queue to exclude
  try {
    const localVers = JSON.parse(localStorage.getItem('bgk_dc_verifications') || '[]');
    localVers.forEach(v => {
      if (v.status === 'REJECTED' || v.status === 'UNDER_REVIEW') {
        if (v.provider_id) rejectedOrReviewIds.add(v.provider_id);
        if (v.id) rejectedOrReviewIds.add(v.id);
        if (v.provider_name) rejectedOrReviewIds.add(v.provider_name.toLowerCase());
      }
    });
  } catch (e) {}

  // Helper to safely format and add a verified experience
  const addApprovedProvider = (v) => {
    const id = v.provider_id || v.id || `prov_${Date.now()}`;
    const name = v.provider_name || v.name;
    if (!name) return;

    if (rejectedOrReviewIds.has(id) || rejectedOrReviewIds.has(name.toLowerCase())) {
      // Remove if previously in list
      const idx = PROVIDERS_DB.findIndex(p => p.id === id || p.providerId === id || p.name.toLowerCase() === name.toLowerCase());
      if (idx >= 0) PROVIDERS_DB.splice(idx, 1);
      return;
    }

    const category = v.category || 'Crafts';
    const lang = Array.isArray(v.language) ? v.language : (v.language ? v.language.split(',').map(s => s.trim()) : ['Kannada', 'English']);
    const tags = Array.isArray(v.tags) && v.tags.length ? v.tags : ['Government Verified', 'DC Approved', category];

    const expObj = {
      id: id,
      providerId: v.providerId || v.provider_id || id,
      name: name,
      avatar: (name || 'P')[0].toUpperCase(),
      skill: v.skill || 'Local Heritage Experience',
      category: category,
      interests: Array.isArray(v.interests) && v.interests.length ? v.interests : [category, 'Culture', 'Local Living'],
      location: v.location || `${v.taluk || 'Bagalkote'}, Bagalkote`,
      price: Number(v.price) || 500,
      duration: Number(v.duration) || 2,
      language: lang,
      availability: v.availability || 'Daily, 9:00 AM – 6:00 PM',
      rating: Number(v.rating) || 5.0,
      reviews: Number(v.reviews) || 1,
      verified: true,
      verificationStatus: 'Government Verified ✓',
      description: v.description || 'Government verified local experience provider in Bagalkote.',
      tags: tags,
      heroScore: 99
    };

    const existingIdx = PROVIDERS_DB.findIndex(p => p.id === expObj.id || p.providerId === expObj.providerId || p.name.toLowerCase() === expObj.name.toLowerCase());
    if (existingIdx >= 0) {
      PROVIDERS_DB[existingIdx] = { ...PROVIDERS_DB[existingIdx], ...expObj };
    } else {
      PROVIDERS_DB.unshift(expObj);
    }
  };

  // 2. Fetch from backend analytics verification_queue and registered providers
  try {
    const analytics = await API.getAdminAnalytics();
    if (analytics && analytics.verification_queue) {
      analytics.verification_queue.forEach(v => {
        if (v.status === 'VERIFIED' || v.status === 'Government Verified ✓') {
          addApprovedProvider(v);
        } else if (v.status === 'REJECTED' || v.status === 'UNDER_REVIEW') {
          if (v.provider_id) rejectedOrReviewIds.add(v.provider_id);
          if (v.provider_name) rejectedOrReviewIds.add(v.provider_name.toLowerCase());
        }
      });
    }

    const regRes = await fetch('/api/providers/registered');
    if (regRes.ok) {
      const regData = await regRes.json();
      if (regData && regData.providers) {
        regData.providers.forEach(p => addApprovedProvider(p));
      }
    }
  } catch (e) {
    console.warn('Failed to fetch backend approved providers:', e);
  }

  // 3. Merge from client localStorage approved list
  try {
    const approvedList = JSON.parse(localStorage.getItem('bgk_approved_experiences') || localStorage.getItem('bagalkote_dc_approved_providers') || '[]');
    approvedList.forEach(ap => addApprovedProvider(ap));

    // Also check bgk_dc_verifications
    const localVers = JSON.parse(localStorage.getItem('bgk_dc_verifications') || '[]');
    localVers.forEach(v => {
      if (v.status === 'VERIFIED') {
        addApprovedProvider(v);
      }
    });

    // Also check provider profile if verified
    const localProf = JSON.parse(localStorage.getItem('bagalkote_provider_profile') || 'null');
    if (localProf && (localProf.verificationStatus === 'Government Verified ✓' || localProf.verificationStatus === 'VERIFIED')) {
      addApprovedProvider(localProf);
    }
  } catch (err) {
    console.warn('Failed to merge localStorage approved providers:', err);
  }
}

async function runAIMatchingAll() {
  await loadDCApprovedProviders();
  const scored = PROVIDERS_DB.map(p => ({ ...p, matchScore: p.heroScore || 90 }))
    .sort((a, b) => b.matchScore - a.matchScore);
  renderResults(scored, false);
}

// ── Provider Detail Modal ─────────────────────────────────────────────────────
window.viewProviderDetail = function(providerId) {
  const p = PROVIDERS_DB.find(x => x.id === providerId);
  if (!p) return;

  // Retrieve tourist ratings & feedback from local storage
  const storedReviews = JSON.parse(localStorage.getItem('bagalkote_provider_reviews') || '[]');
  const matchedReviews = storedReviews.filter(r => 
    r.provider_id === p.id || 
    r.provider_id === p.providerId || 
    (r.provider_name && r.provider_name.toLowerCase() === p.name.toLowerCase())
  );

  const defaultSampleReviews = [
    {
      id: 'def_1',
      tourist_name: 'Ananya Rao',
      rating: 5,
      feedback: `Incredible hands-on session! ${p.name} explained every step of ${p.skill} with genuine warmth.`,
      date: '18 Sep 2026'
    },
    {
      id: 'def_2',
      tourist_name: 'Vikramaditya S.',
      rating: 5,
      feedback: 'Truly authentic Bagalkote heritage experience. High quality work and great hospitality.',
      date: '04 Sep 2026'
    }
  ];

  const allReviewsList = matchedReviews.length > 0 ? [...matchedReviews, ...defaultSampleReviews] : defaultSampleReviews;
  const avgRatingVal = (allReviewsList.reduce((acc, r) => acc + (Number(r.rating) || 5), 0) / allReviewsList.length).toFixed(1);

  document.getElementById('providerModalCategory').textContent = `${CAT_ICONS[p.category]} ${p.category} · ${p.skill}`;
  document.getElementById('providerModalName').textContent = p.name;
  document.getElementById('providerModalLocation').textContent = `📍 ${p.location}`;

  document.getElementById('providerModalBody').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:1.25rem;padding:1.25rem;">

      <!-- Provider ID Card -->
      <div style="background:linear-gradient(135deg,#0D1B2A,#1e3558);border-radius:14px;padding:1.5rem;color:#fff;">
        <div style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#C85A32,#D4AF37);display:flex;align-items:center;justify-content:center;font-size:1.6rem;font-weight:700;font-family:'Cinzel',serif;border:3px solid rgba(255,255,255,0.3);">
            ${p.avatar}
          </div>
          <div>
            <div style="font-family:'Cinzel',serif;font-size:1.1rem;font-weight:700;">${p.name}</div>
            <div style="color:#D4AF37;font-size:0.82rem;font-weight:600;margin:0.2rem 0;">${p.skill}</div>
            <div style="font-size:0.75rem;color:rgba(255,255,255,0.6);">Provider ID: <strong style="color:#D4AF37;">${p.providerId}</strong></div>
          </div>
        </div>
      </div>

      <!-- Quick Stats Grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
        ${[
          ['Category', `${CAT_ICONS[p.category]} ${p.category}`],
          ['Location', `📍 ${p.location}`],
          ['Price', `₹${p.price} per person`],
          ['Duration', `${p.duration} hour${p.duration !== 1 ? 's' : ''}`],
          ['Languages', p.language.join(', ')],
          ['Rating', `⭐ ${avgRatingVal} (${allReviewsList.length} reviews)`],
          ['Availability', p.availability],
          ['Status', `🟢 ${p.verificationStatus}`]
        ].map(([k, v]) => `
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:0.85rem;">
            <div style="font-size:0.7rem;text-transform:uppercase;color:#C85A32;font-weight:700;letter-spacing:0.8px;margin-bottom:0.3rem;">${k}</div>
            <div style="font-size:0.88rem;color:#0D1B2A;font-weight:600;font-family:'Outfit',sans-serif;">${v}</div>
          </div>
        `).join('')}
      </div>

      <!-- Description -->
      <div style="background:#FFFBF6;border:1px solid #F3E8DC;border-radius:12px;padding:1.25rem;">
        <h4 style="font-size:0.85rem;color:#C85A32;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:0.6rem;">About This Experience</h4>
        <p style="font-size:0.9rem;color:#334155;line-height:1.7;margin:0;">${p.description}</p>
      </div>

      <!-- Tourist Ratings & Feedback Section -->
      <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:1.25rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
          <h4 style="font-size:0.9rem;color:#0D1B2A;text-transform:uppercase;letter-spacing:0.8px;margin:0;font-family:'Cinzel',serif;">
            ⭐ Tourist Ratings & Feedback (${allReviewsList.length})
          </h4>
          <span style="font-weight:700;color:#C85A32;font-size:0.9rem;background:#FEF3C7;padding:0.25rem 0.65rem;border-radius:99px;border:1px solid #FCD34D;">
            Avg Rating: ⭐ ${avgRatingVal} / 5
          </span>
        </div>

        <div style="display:flex;flex-direction:column;gap:0.75rem;max-height:240px;overflow-y:auto;padding-right:0.25rem;">
          ${allReviewsList.map(r => `
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;padding:0.85rem;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;">
                  <span style="font-weight:700;font-size:0.88rem;color:#0D1B2A;">👤 ${r.tourist_name || 'Verified Tourist'}</span>
                  <span style="background:#DCFCE7;color:#166534;font-size:0.68rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:50px;">Verified Visit</span>
                </div>
                <span style="font-size:0.75rem;color:#94A3B8;">${r.date || 'Recently'}</span>
              </div>
              <div style="font-size:0.88rem;color:#F59E0B;margin-bottom:0.3rem;">
                ${'⭐'.repeat(Math.max(1, Math.min(5, Number(r.rating) || 5)))} 
                <strong style="color:#0D1B2A;font-size:0.8rem;margin-left:0.25rem;">${r.rating}/5</strong>
              </div>
              <p style="font-size:0.85rem;color:#475569;margin:0;line-height:1.5;font-style:${r.feedback ? 'normal' : 'italic'};">
                ${r.feedback ? `"${r.feedback}"` : `<span style="color:#94A3B8;">Rating provided (No text feedback)</span>`}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tags -->
      <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">
        ${p.tags.map(t => `<span class="provider-tag">${t}</span>`).join('')}
      </div>
    </div>`;

  const bookBtn = document.getElementById('providerBookBtn');
  if (bookBtn) bookBtn.onclick = () => bookProvider(providerId);

  document.getElementById('providerDetailModal').classList.add('active');
};

// ── Book Experience (5-Minute Countdown Workflow) ──────────────────────────────
window.bookProvider = function(providerId) {
  const p = PROVIDERS_DB.find(x => x.id === providerId);
  if (!p) return;

  const detailModal = document.getElementById('providerDetailModal');
  if (detailModal) detailModal.classList.remove('active');

  const doBook = () => {
    if (window.BookingWorkflow) {
      window.BookingWorkflow.startBookingProcess(p);
    } else {
      alert(`Booking request for ${p.skill} sent to ${p.name}!`);
    }
  };

  if (window.TouristProfile && !window.TouristProfile.isLoggedIn()) {
    if (typeof window.showLoginModal === 'function') {
      window.showLoginModal(doBook);
    } else {
      doBook();
    }
  } else {
    doBook();
  }
};

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('experiencesContainer');
  if (!container) return;

  // Render the full page structure
  container.outerHTML = `
    <div id="expFinderWrap">${renderFinderPanel()}</div>
    <div class="exp-results-section" id="expResultsSection">
      <div class="container">
        <div class="exp-empty-state">
          <div class="exp-empty-icon">⏳</div>
          <h3 style="font-family:'Cinzel',serif;color:#0D1B2A;margin-bottom:0.5rem;">Loading Verified Local Experiences...</h3>
        </div>
      </div>
    </div>`;

  // Auto-render all experiences immediately on load
  runAIMatchingAll();
});
