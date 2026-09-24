/**
 * Master Application Controller
 * AI-Powered Inclusive Tourism Ecosystem for Bagalkote
 */

document.addEventListener('DOMContentLoaded', async () => {
  console.log('[Bagalkote Tourism] Initializing Inclusive Tourism Ecosystem...');

  // 1. Language Toggle Setup
  initLanguageToggles();

  // 2. Mobile Drawer Navigation
  initMobileDrawer();

  // 3. Initialize Interactive Map
  if (typeof initMap === 'function') initMap();

  // 4. Initialize Skill Matching (Module 12)
  if (typeof initSkillChips === 'function') initSkillChips();
  if (typeof loadSkillMatches === 'function') loadSkillMatches('handloom');

  // 5. Initialize Trip Planner (Module 15)
  if (typeof initTripPlanner === 'function') initTripPlanner();

  // 6. Initialize AI Assistant (Module 13)
  if (typeof initAIAssistant === 'function') initAIAssistant();

  // 7. Initialize Provider Portal & Admin Dashboard
  if (typeof initProviderPortal === 'function') initProviderPortal();
  if (typeof initAdminDashboard === 'function') initAdminDashboard();

  // 8. Load Core Content Sections
  await loadDestinations();
  await loadArtisans();
  await loadBusinesses();
  await loadAccessibilityTable();

  // 9. Setup Global Category Filter Pills
  initCategoryPills();

  // 10. Setup Taluk Dropdown Filter
  initTalukFilter();

  // 11. Setup Destination Detail Modal Listeners
  initDetailModal();
});

/* ============================================================
   1. LANGUAGE TOGGLES
   ============================================================ */
function initLanguageToggles() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-lang-code');
      if (typeof setLanguage === 'function') {
        setLanguage(code);
      }
    });
  });
}

/* ============================================================
   2. MOBILE DRAWER
   ============================================================ */
function initMobileDrawer() {
  const toggle = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const mobLinks = document.querySelectorAll('.mob-link');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => drawer.classList.add('active'));
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
  }
  mobLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) drawer.classList.remove('active');
    });
  });
}

/* ============================================================
   3. DESTINATIONS CARDS
   ============================================================ */
async function loadDestinations(category = 'All', taluk = 'All') {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;

  grid.innerHTML = `<div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>`;

  const data = await API.getDestinations(category, taluk);
  const destinations = data.data || [];

  if (!destinations.length) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #64748B; padding: 3rem;">No verified destinations found matching your filter.</div>`;
    return;
  }

  // Pre-mapped authentic local imagery of Bagalkote destinations & cultural foods
  const imageMap = {
    dest_badami:           "/images/destinations/badami.jpg",
    dest_pattadakal:       "/images/destinations/pattadakal.png",
    dest_aihole:           "/images/destinations/aihole.png",
    dest_mahakuta:         "/images/destinations/mahakuta.png",
    dest_banashankari:     "/images/destinations/banashankari.png",
    dest_kudala_sangama:   "/images/destinations/kudalasangama.png",
    dest_almatti_dam:      "/images/destinations/Alamatti.png",
    dest_muchakhandi_dam:  "/images/destinations/Muchkhandi dam.jfif",
    dest_ilkal:            "/images/destinations/Ilkal.png",
    dest_guledagudda:      "/images/destinations/Guledgudda.png",
    dest_mudhol:           "/images/destinations/Mudhol.png",
    dest_jamkhandi:        "/images/destinations/jamkhandi.png",
    dest_bilagi:           "/images/destinations/Bilagi.png",
    dest_shivayogamandira: "/images/destinations/shivayogamandir.png",

    // Cultural Food Places from Karnataka Map & Local Food Section
    dest_food_jolada_rotti_badami: "/images/food/jolada_rotti.jpg",
    dest_food_susla_badami:        "/images/food/susla_mirchi_bajji.jpg",
    dest_food_jalebi_badami:       "/images/food/jalebi_rabri.jpg",
    dest_food_jolada_rotti_bgk:    "/images/food/jolada_rotti.jpg",
    dest_food_susla_bgk:           "/images/food/susla_mirchi_bajji.jpg",
    dest_food_fakirappa_bgk:       "/images/food/fakirappa_sweets.jpg",
    dest_food_savaji_bgk:          "/images/food/savaji_nonveg.jpg",
    dest_food_jalebi_bgk:          "/images/food/jalebi_rabri.jpg",
    dest_food_kardant_singi:       "/images/food/amingad_kardant.jpg",
    dest_food_kardant_kamat:       "/images/food/amingad_kardant.jpg",
    dest_food_holige_ilkal:        "/images/food/shenga_holige.jpg",
    dest_food_holige_guledgudd:    "/images/food/shenga_holige.jpg",
    dest_food_jhunka_mudhol:       "/images/food/jolada_rotti.jpg",
    dest_food_peda_jamkhandi:      "/images/food/galgali_peda.jpg",
    dest_food_galgali_bilagi:      "/images/food/galgali_peda.jpg",
    dest_food_savaji_bilagi:       "/images/food/savaji_nonveg.jpg",
    dest_food_girmit_banhatti:     "/images/food/susla_mirchi_bajji.jpg"
  };

  // Smart Destination & Food Image Resolver
  function resolveDestinationImage(d) {
    if (!d) return "/images/destinations/badami.jpg";
    if (imageMap[d.id]) return imageMap[d.id];
    if (d.image) return d.image;

    const text = ((d.name || '') + ' ' + (d.category || '') + ' ' + (d.description || '')).toLowerCase();
    if (text.includes('kardant') || text.includes('karadantu')) return "/images/food/amingad_kardant.jpg";
    if (text.includes('peda')) return "/images/food/galgali_peda.jpg";
    if (text.includes('jalebi') || text.includes('rabri') || text.includes('rabdi')) return "/images/food/jalebi_rabri.jpg";
    if (text.includes('susla') || text.includes('mirchi') || text.includes('bajji') || text.includes('girmit')) return "/images/food/susla_mirchi_bajji.jpg";
    if (text.includes('holige')) return "/images/food/shenga_holige.jpg";
    if (text.includes('savaji') || text.includes('sauji')) return "/images/food/savaji_nonveg.jpg";
    if (text.includes('fakirappa') || text.includes('halwai')) return "/images/food/fakirappa_sweets.jpg";
    if (text.includes('rotti') || text.includes('khanavali') || text.includes('jhunka') || text.includes('ennegayi') || text.includes('food')) return "/images/food/jolada_rotti.jpg";
    if (text.includes('pattadakal')) return "/images/destinations/pattadakal.png";
    if (text.includes('aihole')) return "/images/destinations/aihole.png";
    if (text.includes('mahakuta')) return "/images/destinations/mahakuta.png";
    if (text.includes('banashankari')) return "/images/destinations/banashankari.png";
    if (text.includes('kudala') || text.includes('sangama')) return "/images/destinations/kudalasangama.png";
    if (text.includes('ilkal')) return "/images/destinations/Ilkal.png";
    if (text.includes('guledgudd')) return "/images/destinations/Guledgudda.png";
    if (text.includes('almatti') || text.includes('dam')) return "/images/destinations/Alamatti.png";
    if (text.includes('mudhol')) return "/images/destinations/Mudhol.png";
    if (text.includes('jamkhandi')) return "/images/destinations/jamkhandi.png";
    if (text.includes('bilagi')) return "/images/destinations/Bilagi.png";
    if (text.includes('shivayoga')) return "/images/destinations/shivayogamandir.png";

    return "/images/destinations/badami.jpg";
  }

  // Expose globally so viewDestinationDetail can also use it
  window.resolveDestinationImage = resolveDestinationImage;
  window.destImageMap = imageMap;

  grid.innerHTML = destinations.map(d => {
    const lang = localStorage.getItem('bgk_preferred_lang') || 'en';
    const t = (window.translations && window.translations[lang]) || (window.translations && window.translations.en) || {};
    const loc = window.getLocalizedDestination ? window.getLocalizedDestination(d, lang) : d;
    const imageUrl = resolveDestinationImage(d);
    const accessPillClass = d.accessibility_information && d.accessibility_information.wheelchair_accessible ? 'access-yes' : 'access-partial';
    const accessText = d.accessibility_information && d.accessibility_information.wheelchair_accessible ? (t.access_yes || '♿ Accessible') : (t.access_partial || '⚠️ Steps / Terrain');
    const talukSuffix = t.taluk_suffix || 'Taluk';
    const talukName = loc.taluk || d.taluk;
    const name = loc.name || d.name;
    const desc = (loc.description || d.description).substring(0, 140) + '...';
    const duration = loc.suggested_visit_duration || d.suggested_visit_duration || t.duration_default || '2-3 Hours';

    return `
      <div class="dest-card">
        <div class="dest-card-image" style="background-image: url('${imageUrl}');">
          <span class="dest-card-badge">${talukName} ${talukSuffix}</span>
        </div>
        <div class="dest-card-content">
          <span class="dest-kn-title">${d.alternate_names ? d.alternate_names[0] : name}</span>
          <h3 class="dest-en-title">${name}</h3>
          <p class="dest-desc">${desc}</p>

          <div class="dest-meta-row">
            <span>⏱️ ${duration}</span>
            <span class="dest-access-pill ${accessPillClass}">${accessText}</span>
          </div>

          <div class="dest-card-actions">
            <button class="btn btn-card-primary" onclick="window.viewDestinationDetail('${d.id}')">
              ${t.btn_explore_details || 'Explore Details'}
            </button>
            <button class="btn btn-card-outline" onclick="window.addDestinationToTrip('${d.id}')" title="Add to My Trip">
              ${t.btn_add_trip || '+ Trip'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ============================================================
   4. ARTISANS SECTION (MODULE 8)
   ============================================================ */
async function loadArtisans() {
  const container = document.getElementById('artisansGrid');
  if (!container) return;

  const res = await API.getArtisans();
  const artisans = res.data || [];

  container.innerHTML = artisans.map(a => {
    const isDemo = a.verification_status === 'DEMO_DATA';
    const badgeHtml = isDemo 
      ? `<span class="demo-badge">DEMO PROVIDER — NOT REAL</span>` 
      : `<span class="verified-badge">✓ SOURCE VERIFIED</span>`;

    return `
      <div class="artisan-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <span style="font-size: 0.75rem; font-weight: 800; color: #C85A32; letter-spacing: 0.08em; text-transform: uppercase;">${a.category}</span>
          ${badgeHtml}
        </div>
        <h3 style="font-family: 'Cinzel', serif; font-size: 1.25rem; color: #0D1B2A; margin-bottom: 0.35rem;">${a.name}</h3>
        <p style="font-size: 0.85rem; color: #64748B; margin-bottom: 0.85rem;">📍 ${a.location}</p>
        <p style="font-size: 0.9rem; color: #334155; margin-bottom: 1rem; line-height: 1.5;">${a.description}</p>
        
        <div style="background: #F8FAFC; padding: 0.85rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.825rem;">
          <div><strong>Primary Craft:</strong> ${a.craft}</div>
          <div><strong>Products:</strong> ${a.products_offered ? a.products_offered.join(', ') : 'GI Handlooms'}</div>
        </div>

        <div style="margin-top: auto; display: flex; gap: 0.5rem;">
          <button class="btn btn-sm btn-primary" onclick="alert('Connecting with ${a.name.replace(/'/g, "\\'")}. Contact: ${a.contact_info}')" style="flex: 1;">
            Inquire / Visit
          </button>
          <button class="btn btn-sm btn-outline" onclick="window.addDestinationToTrip('${a.id}')" style="flex: 1;">
            + Add to Trip
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* ============================================================
   5. LOCAL BUSINESSES (MODULE 9)
   ============================================================ */
async function loadBusinesses(category = 'All') {
  const container = document.getElementById('businessesGrid');
  if (!container) return;

  const res = await API.getBusinesses(category);
  const businesses = res.data || [];

  container.innerHTML = businesses.map(b => {
    const isDemo = b.verification_status === 'DEMO_DATA';
    const badgeHtml = isDemo 
      ? `<span class="demo-badge">DEMO PROVIDER — NOT REAL</span>` 
      : `<span class="verified-badge">✓ SOURCE VERIFIED</span>`;

    return `
      <div class="biz-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <span style="font-size: 0.75rem; font-weight: 800; color: #2A9D8F; letter-spacing: 0.08em; text-transform: uppercase;">${b.category}</span>
          ${badgeHtml}
        </div>
        <h3 style="font-family: 'Cinzel', serif; font-size: 1.25rem; color: #0D1B2A; margin-bottom: 0.35rem;">${b.name}</h3>
        <p style="font-size: 0.85rem; color: #64748B; margin-bottom: 0.85rem;">📍 ${b.location}</p>
        <p style="font-size: 0.9rem; color: #334155; margin-bottom: 1rem; line-height: 1.5;">${b.description}</p>
        
        <div style="background: #F8FAFC; padding: 0.85rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.825rem;">
          <div><strong>Services:</strong> ${b.services ? b.services.join(', ') : 'Tourism Services'}</div>
          <div><strong>Languages:</strong> ${b.languages ? b.languages.join(', ') : 'Kannada, English, Hindi'}</div>
          ${b.price_information ? `<div><strong>Tariff:</strong> ${b.price_information}</div>` : ''}
        </div>

        <div style="margin-top: auto; display: flex; gap: 0.5rem;">
          <button class="btn btn-sm btn-primary" onclick="alert('Contact details: ${b.contact_information}')" style="flex: 1;">
            View Contact
          </button>
          <button class="btn btn-sm btn-outline" onclick="window.addDestinationToTrip('${b.id}')" style="flex: 1;">
            + Trip
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* ============================================================
   6. ACCESSIBILITY TABLE (MODULE 10)
   ============================================================ */
async function loadAccessibilityTable() {
  const container = document.getElementById('accessibilityTableWrapper');
  if (!container) return;

  const data = await API.getAccessibility();
  const items = Array.isArray(data) ? data : (data && data.data ? data.data : []);

  container.innerHTML = `
    <table class="accessibility-table">
      <thead>
        <tr>
          <th>Destination</th>
          <th>Wheelchair Access</th>
          <th>Senior Friendly</th>
          <th>Staircase & Steps Profile</th>
          <th>Rest Areas & Washrooms</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(item => `
          <tr>
            <td><strong>${item.name.replace(' Accessibility Profile', '')}</strong></td>
            <td>
              <span class="dest-access-pill ${item.wheelchair_accessible ? 'access-yes' : 'access-no'}">
                ${item.wheelchair_accessible ? '♿ Accessible' : '❌ Not Step-Free'}
              </span>
            </td>
            <td><strong>${item.elderly_friendly}</strong></td>
            <td>${item.stairs_details ? `${item.stairs_details.total_steps_estimate} steps (${item.stairs_details.step_character})` : 'Terrain varies'}</td>
            <td>${item.rest_areas || 'Shaded resting areas available'}</td>
            <td><span class="verified-badge">✓ ${item.accessibility_status}</span></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

/* ============================================================
   7. CATEGORY PILLS & TALUK FILTER
   ============================================================ */
function initCategoryPills() {
  const pills = document.querySelectorAll('#categoryScroll .cat-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-cat');
      const taluk = document.getElementById('talukSelect')?.value || 'All';
      loadDestinations(cat, taluk);
    });
  });

  const bizFilters = document.querySelectorAll('.biz-filters .filter-btn');
  bizFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      bizFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-biz-cat');
      loadBusinesses(cat);
    });
  });
}

function initTalukFilter() {
  const select = document.getElementById('talukSelect');
  if (!select) return;
  select.addEventListener('change', () => {
    const taluk = select.value;
    const activePill = document.querySelector('#categoryScroll .cat-pill.active');
    const cat = activePill ? activePill.getAttribute('data-cat') : 'All';
    loadDestinations(cat, taluk);
  });
}

/* ============================================================
   8. DESTINATION DETAIL MODAL
   ============================================================ */
function initDetailModal() {
  const modal = document.getElementById('destinationDetailModal');
  const closeBtn = document.getElementById('closeDestModalBtn');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Global Escape key listener for all modals and drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof window.closeAIDrawer === 'function') {
        window.closeAIDrawer();
      }
      document.querySelectorAll('.modal-backdrop.active, .ai-drawer.active').forEach(el => {
        el.classList.remove('active');
      });
    }
  });
}

window.viewDestinationDetail = async function(destId) {
  const modal = document.getElementById('destinationDetailModal');
  const body = document.getElementById('modalDestBody');
  const title = document.getElementById('modalDestTitle');
  const knTitle = document.getElementById('modalDestKn');
  const cat = document.getElementById('modalDestCategory');
  const source = document.getElementById('modalDestSource');

  if (!modal || !body) return;

  body.innerHTML = `<p style="padding: 2rem; text-align: center;">Loading destination intelligence...</p>`;
  modal.classList.add('active');

  const dest = await API.getDestinationById(destId);
  if (!dest) {
    body.innerHTML = `<p style="color: #E63946;">Destination details could not be retrieved.</p>`;
    return;
  }

  const lang = localStorage.getItem('bgk_preferred_lang') || 'en';
  const t = (window.translations && window.translations[lang]) || (window.translations && window.translations.en) || {};
  const loc = window.getLocalizedDestination ? window.getLocalizedDestination(dest, lang) : dest;

  const destTitle = loc.name || dest.name;
  title.textContent = destTitle;
  knTitle.textContent = dest.alternate_names ? dest.alternate_names[0] : '';
  const talukSuffix = t.taluk_suffix || 'Taluk';
  cat.textContent = `${loc.category || dest.category} | ${loc.taluk || dest.taluk} ${talukSuffix}`;
  source.textContent = `${t.source_label || 'Information verified from'}: ${dest.source} (${dest.source_url})`;

  const destHeroImg = window.resolveDestinationImage ? window.resolveDestinationImage(dest) : ((window.destImageMap && window.destImageMap[dest.id]) || '/images/destinations/badami.jpg');

  body.innerHTML = `
    <div class="dest-detail-layout" style="display: flex; flex-direction: column; gap: 1.5rem; max-height: 70vh; overflow-y: auto; padding: 0.5rem;">
      <!-- Hero image of destination -->
      <div class="detail-hero-image" style="background-image:url('${destHeroImg}');height:200px;background-size:cover;background-position:center;border-radius:12px;"></div>

      <div style="font-size: 1.05rem; line-height: 1.7; color: #334155;">
        ${loc.description || dest.description}
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; background: #F8FAFC; padding: 1.25rem; border-radius: 12px; border: 1px solid #E2E8F0;">
        <div>
          <h4 style="font-size: 0.85rem; color: #C85A32; text-transform: uppercase; margin-bottom: 0.35rem;">${t.modal_historical_title || 'Historical Significance'}</h4>
          <p style="font-size: 0.875rem; color: #475569;">${loc.historical_significance || dest.historical_significance || 'Key Chalukyan royal site.'}</p>
        </div>
        <div>
          <h4 style="font-size: 0.85rem; color: #C85A32; text-transform: uppercase; margin-bottom: 0.35rem;">${t.modal_architecture_title || 'Architecture & Style'}</h4>
          <p style="font-size: 0.875rem; color: #475569;">${loc.architecture || dest.architecture || 'Dravida & Nagara stone architecture.'}</p>
        </div>
      </div>

      <!-- Major Attractions — strictly filtered: if image is present use it, otherwise remove the field -->
      ${(() => {
        const verified = (dest.major_attractions || []).filter(a => MAJOR_IMG_MAP[a]);
        if (!verified.length || (dest.category && dest.category.toLowerCase().includes('local food'))) return '';
        return `
        <div style="background:#FFFBF6;border:1px solid #F3E8DC;padding:1.25rem;border-radius:12px;">
          <h4 style="font-size: 1.05rem; color: #0D1B2A; margin-bottom: 0.35rem; font-family:'Cinzel',serif;">
            ${t.modal_attractions_title || '📍 Major Attractions — Click Any to View Photos & Notes:'}
          </h4>
          <p style="font-size:0.8rem;color:#64748B;margin-bottom:0.75rem;">
            ${t.modal_attractions_desc || 'Explore verified photographs from the Archaeological Survey of India and district archives.'}
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:0.55rem;">
            ${verified.map(a => {
              const locAtt = window.getLocalizedAttraction ? window.getLocalizedAttraction(a, lang) : { name: a, desc: '' };
              const displayName = locAtt.name || a;
              return `
              <button
                class="attraction-pill"
                onclick="window.showAttractionDetail('${a.replace(/'/g, "\\'")}', '${dest.id}')"
                title="Click to view photo & info for ${displayName.replace(/'/g, "\\'")}"
                style="cursor:pointer;"
              >
                📸 ${displayName}
              </button>
            `}).join('')}
          </div>
        </div>
        `;
      })()}

      ${dest.accessibility_details ? `
        <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 12px; padding: 1.25rem;">
          <h4 style="font-size: 0.95rem; color: #166534; margin-bottom: 0.35rem;">${t.modal_accessibility_title || '♿ Accessibility & Senior Assistance'}</h4>
          <p style="font-size: 0.85rem; color: #14532D;">
            <strong>${t.acc_wheelchair_label || 'Wheelchair'}:</strong> ${dest.accessibility_details.wheelchair_accessible ? (t.acc_wheelchair_yes || 'Yes (Accessible ramps)') : (t.acc_wheelchair_no || 'No (Steps required)')}<br>
            <strong>${t.acc_staircase_label || 'Staircase'}:</strong> ${dest.accessibility_details.stairs_details ? dest.accessibility_details.stairs_details.step_character : (t.acc_terrain_varies || 'Terrain varies')}<br>
            <strong>${t.acc_senior_label || 'Senior Friendly'}:</strong> ${dest.accessibility_details.elderly_friendly}
          </p>
        </div>
      ` : ''}

      <div style="background: #FEF3C7; border: 1px solid #FCD34D; border-radius: 12px; padding: 1rem; font-size: 0.825rem; color: #78350F;">
        <strong>${t.modal_reach_title || '🚌 How to Reach:'}</strong> ${(loc.transport_information && loc.transport_information.bus_connectivity) || (dest.transport_information && dest.transport_information.bus_connectivity) || t.transport_default || 'Regular KSRTC bus services from Bagalkote and Hubballi.'}
      </div>
    </div>
  `;

  const addBtn = document.getElementById('modalAddToTripBtn');
  if (addBtn) {
    addBtn.textContent = t.btn_add_trip || '+ Trip';
    addBtn.onclick = () => window.addDestinationToTrip(dest.id);
  }
};

// ── Master Major Attractions Photomap for index.html ────────────────────────
window.MAJOR_IMG_MAP = window.MAJOR_IMG_MAP || {
  // Badami
  "Badami Cave Temples (Caves 1-4)": "/images/major_attractions/BadamiCave temples.jpg",
  "Agastya Lake": "/images/major_attractions/bhutanatha group of temples.jpg",
  "Bhoothanatha Group of Temples": "/images/major_attractions/bhutanatha group of temples.jpg",
  "Badami North Fort & Upper Shivalaya": "/images/major_attractions/Badami North Fort & Upper Shivalaya.jpg",
  "Archaeological Museum Badami": "/images/major_attractions/archeological museum badami.jpg",
  "Malegitti Shivalaya": "/images/major_attractions/Malegitti Shivalaya.jpg",

  // Pattadakal
  "Virupaksha Temple (Lokeshwara)": "/images/major_attractions/Virupaksha Temple (Lokeshwara).jpg",
  "Mallikarjuna Temple (Trailokyeshwara)": "/images/major_attractions/Mallikarjuna Temple (Trailokyeshwara).jpg",
  "Sangameshwara Temple (Vijayeshwara)": "/images/major_attractions/Sangameshwara Temple (Vijayeshwara).jpg",
  "Galaganatha Temple (Curvilinear Nagara Shikhara)": "/images/major_attractions/Galaganatha Temple (Curvilinear Nagara Shikhara).jpg",
  "Papanatha Temple": "/images/major_attractions/Papanatha Temple.jpg",
  "Jain Narayana Temple (Rashtrakuta era)": "/images/major_attractions/Jain Narayana Temple (Rashtrakuta era).jpg",

  // Aihole
  "Durga Temple Complex (Apsidal sanctum with ambulatory peristyle)": "/images/major_attractions/Durga Temple Complex (Apsidal sanctum with ambulatory peristyle).jpg",
  "Lad Khan Temple (Panchayatana hall-style)": "/images/major_attractions/Lad Khan Temple (Panchayatana hall-style).jpg",
  "Meguti Jain Temple & Ravikirti Inscription": "/images/major_attractions/Meguti Jain Temple & Ravikirti Inscription.jpg",
  "Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja)": "/images/major_attractions/Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja).jpg",
  "Huchimalli Temple": "/images/major_attractions/Huchimalli Temple.jpg",
  "Konti Gudi Group": "/images/major_attractions/Konti Gudi Group.jpg",
  "ASI Archaeological Museum Aihole": "/images/major_attractions/ASI Archaeological Museum Aihole.jpg",

  // Mahakuta
  "Mahakuteshwara Temple": "/images/major_attractions/Mahakuteshwara Temple.jpg",
  "Mallikarjuna Temple": "/images/major_attractions/Mallikarjuna Temple.jpg",
  "Vishnu Pushkarini (Sacred Spring Pool)": "/images/major_attractions/Vishnu Pushkarini (Sacred Spring Pool).jpg",
  "Submerged Panchamukha Linga": "/images/major_attractions/Submerged Panchamukha Linga.jpg",
  "Mahakuta Pillar Inscription site": "/images/major_attractions/Mahakuta Pillar Inscription site.JPG",

  // Kudala Sangama
  "Sangameshwara Temple (Chalukyan style)": "/images/major_attractions/Sangameshwara Temple (Chalukyan style).jpg",
  "Museum of Basava Philosophy": "/images/major_attractions/Museum of Basava Philosophy.jpg",

  // Ilkal
  "Weaver Cluster Workshops (Pit loom demonstrations)": "/images/major_attractions/Weaver Cluster Workshops (Pit loom demonstrations).jpg",
  "Shri Vijaya Mahantesh Temple & Matha": "/images/major_attractions/Shri Vijaya Mahantesh Temple & Matha.jpg",
  "Kasuti Embroidery Artisans Guilds": "/images/major_attractions/Kasuti Embroidery Artisans Guilds.jpg",

  // Guledagudda
  "Traditional Khana Handloom Weaving Units": "/images/major_attractions/Traditional Khana Handloom Weaving Units.jpg",

  // Mudhol
  "Canine Research and Information Centre (CRIC Mudhol Hound Centre)": "/images/major_attractions/Canine Research and Information Centre (CRIC Mudhol Hound Centre).jpg",
  "Mudhol Royal Palace & Fort ruins": "/images/major_attractions/Mudhol Royal Palace & Fort ruins.jpg",

  // Jamkhandi
  "Jamkhandi Royal Palace (Ram Prasad Palace)": "/images/major_attractions/Jamkhandi Royal Palace (Ram Prasad Palace).jpg",
  "Pampa Sarovara Lake": "/images/major_attractions/Pampa_Sarovar_from_the_hill.jpg",

  // Bilagi
  "Siddheshwara Temple": "/images/major_attractions/01 Siddeshwara Devalaya Bilagi.jpg",
  "Ghataprabha backwaters viewpoint": "/images/major_attractions/Ghataprabha backwaters viewpoint.webp"
};
var MAJOR_IMG_MAP = window.MAJOR_IMG_MAP;

// ── Global Attraction Lightbox for index.html ───────────────────────────────
window.showAttractionDetail = function(attractionName, destId) {
  const lb = document.getElementById('attractionLightbox');
  const lbImg = document.getElementById('lightboxImage');
  const lbTitle = document.getElementById('lightboxTitle');
  const lbDesc = document.getElementById('lightboxDesc');
  const lbSource = document.getElementById('lightboxSource');

  if (!lb) return;

  const lang = localStorage.getItem('bgk_preferred_lang') || 'en';
  const t = (window.translations && window.translations[lang]) || (window.translations && window.translations.en) || {};
  const locAtt = window.getLocalizedAttraction ? window.getLocalizedAttraction(attractionName, lang) : null;
  const imgPath = MAJOR_IMG_MAP[attractionName] || (window.destImageMap && window.destImageMap[destId]) || '/images/destinations/badami.jpg';

  lbImg.src = imgPath;
  lbImg.alt = locAtt?.name || attractionName;
  lbTitle.textContent = locAtt?.name || attractionName;
  if (locAtt && locAtt.desc) {
    lbDesc.textContent = locAtt.desc;
  } else {
    lbDesc.textContent = `Verified monument of the Chalukyan heritage circuit at ${destId ? destId.replace('dest_', '').toUpperCase() : 'Bagalkote'}, documented by the Archaeological Survey of India (ASI) and Karnataka Tourism archives.`;
  }
  lbSource.textContent = t.lightbox_source_prefix || 'Source: Official Bagalkote District Portal & ASI Dharwad Circle';

  lb.classList.add('active');
};

// Re-render homepage destinations when language changes
window.addEventListener('languageChanged', (e) => {
  const activePill = document.querySelector('#categoryScroll .cat-pill.active');
  const cat = activePill ? activePill.getAttribute('data-cat') : 'All';
  const taluk = document.getElementById('talukSelect')?.value || 'All';
  if (typeof loadDestinations === 'function') {
    loadDestinations(cat, taluk);
  }
});
