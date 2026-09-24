// accessibility-page.js - Comprehensive Inclusive & Barrier-Free Tourism Platform
document.addEventListener('DOMContentLoaded', async () => {
  await renderAccessibilityPage();
});

function getAccessibilityImage(name, defaultImg) {
  if (name) {
    if (name.includes('Kudala Sangama')) return '/images/destinations/kudalasangama.png';
    if (name.includes('Almatti') || name.includes('Alamatti')) return '/images/destinations/Almatti.png';
    if (name.includes('Pattadakal')) return '/images/destinations/Pattadakal.png';
    if (name.includes('Aihole')) return '/images/destinations/aihole.png';
    if (name.includes('Ilkal')) return '/images/destinations/Ilkal.png';
  }
  return defaultImg || '/images/destinations/Pattadakal.png';
}

async function renderAccessibilityPage() {
  const container = document.getElementById('accPageContainer');
  if (!container) return;

  container.innerHTML = `
    <div style="text-align:center;padding:3rem 0;color:#64748B;">
      <div style="font-size:3rem;margin-bottom:1rem;animation:pulse 1.5s infinite;">♿</div>
      <p style="font-size:1.1rem;font-weight:600;">Loading verified district accessibility intelligence...</p>
    </div>
  `;

  let responseData = null;
  try {
    const res = await fetch('/api/accessibility');
    responseData = await res.json();
  } catch (err) {
    console.warn('Error fetching accessibility data from API, using fallback:', err);
  }

  // Safe extraction of monument profiles and category features
  const monuments = (responseData && Array.isArray(responseData.data)) 
    ? responseData.data 
    : (Array.isArray(responseData) ? responseData : []);

  let features = (responseData && responseData.features) ? responseData.features : null;

  // If features not in API response, try dedicated endpoint or fallback
  if (!features) {
    try {
      const featRes = await fetch('/api/accessibility/features');
      if (featRes.ok) features = await featRes.json();
    } catch (e) {}
  }

  // Fallback defaults if features unavailable
  const wfa = (features && features.wheelchair_friendly_attractions) || [];
  const lowWalk = (features && features.low_walking_itinerary) || { timeline: [] };
  const toilets = (features && features.accessible_toilets) || [];
  const restAreas = (features && features.rest_areas) || [];
  const seniors = (features && features.senior_citizen_recommendations) || [];
  const children = (features && features.child_friendly_locations) || [];
  const babyCare = (features && features.baby_care_facilities) || [];

  container.innerHTML = `
    <!-- Top Bar: Directory Title -->
    <div style="margin-bottom:2rem;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:12px;padding:1.15rem 1.5rem;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <span style="font-size:0.8rem;font-weight:700;color:#C85A32;letter-spacing:0.05em;text-transform:uppercase;">BAGALKOTE ACCESSIBILITY DIRECTORY</span>
      <div style="font-size:1.15rem;font-weight:800;color:#0D1B2A;margin-top:0.2rem;">Universal Access, Senior Comfort & Family Care</div>
    </div>

    <!-- Quick Navigation Pills Filter Bar -->
    <div class="access-filter-nav" id="accessFilterNav">
      <button class="access-nav-btn active" data-target="all">
        <span>✨</span> <span>All Features</span>
      </button>
      <button class="access-nav-btn" data-target="wheelchairSection">
        <span>♿</span> <span>Wheelchair-Friendly (${wfa.length})</span>
      </button>
      <button class="access-nav-btn" data-target="lowWalkingSection">
        <span>🚶</span> <span>Low-Walking Itinerary</span>
      </button>
      <button class="access-nav-btn" data-target="toiletsSection">
        <span>🚻</span> <span>Accessible Toilets (${toilets.length})</span>
      </button>
      <button class="access-nav-btn" data-target="restSection">
        <span>🪑</span> <span>Rest Areas (${restAreas.length})</span>
      </button>
      <button class="access-nav-btn" data-target="seniorSection">
        <span>👴</span> <span>Senior Guide</span>
      </button>
      <button class="access-nav-btn" data-target="childrenSection">
        <span>👶</span> <span>Child-Friendly (${children.length})</span>
      </button>
      <button class="access-nav-btn" data-target="babyCareSection">
        <span>🍼</span> <span>Baby-Care Facilities</span>
      </button>
      <button class="access-nav-btn" data-target="monumentsTableSection">
        <span>📋</span> <span>Staircase Assessments</span>
      </button>
    </div>

    <!-- 1. WHEELCHAIR-FRIENDLY ATTRACTIONS -->
    <section class="access-section" id="wheelchairSection">
      <div class="access-section-title-wrap">
        <div>
          <h2 class="access-section-title">
            <span>♿</span> <span>Wheelchair-Friendly Attractions</span>
          </h2>
          <p style="font-size:0.88rem;color:#64748B;margin:0.25rem 0 0 0;">
            Verified monuments and cultural sites equipped with dedicated ramps, smooth perimeter paths, and wheelchair loan services.
          </p>
        </div>
        <span style="font-size:0.8rem;background:#DCFCE7;color:#15803D;padding:0.3rem 0.75rem;border-radius:99px;font-weight:700;">
          ${wfa.length} Verified Step-Free Sites
        </span>
      </div>

      <div class="access-card-grid">
        ${wfa.map(item => `
          <div class="access-feature-card">
            <div class="access-card-media">
              <img src="${getAccessibilityImage(item.name, item.image)}" alt="${item.name}" onerror="this.onerror=null; this.src='${item.name && item.name.includes('Kudala') ? '/images/destinations/Kudala_Sangama.png' : (item.name && item.name.includes('Almatti') ? '/images/destinations/Alamatti.png' : '/images/destinations/Pattadakal.png')}';">
              <span class="access-card-badge badge-green">${item.badge || 'Wheelchair Verified ✓'}</span>
            </div>
            <div class="access-card-body">
              <div class="access-card-title">${item.name}</div>
              <div class="access-card-meta">📍 ${item.taluk} · <strong style="color:#C85A32;">${item.category}</strong></div>
              
              <ul class="access-card-checklist">
                ${(item.facilities || []).map(f => `<li>${f}</li>`).join('')}
              </ul>

              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:0.75rem;font-size:0.8rem;margin-bottom:1rem;">
                <div style="margin-bottom:0.35rem;"><strong style="color:#0D1B2A;">🅿️ Parking:</strong> <span style="color:#475569;">${item.parking}</span></div>
                <div><strong style="color:#0D1B2A;">🌿 Terrain:</strong> <span style="color:#475569;">${item.terrain}</span></div>
              </div>

              <div style="margin-top:auto;display:flex;gap:0.5rem;">
                <a href="/explore.html" class="btn btn-sm btn-outline" style="flex:1;text-align:center;font-size:0.8rem;text-decoration:none;">View Site Details</a>
                <button onclick="window.addDestinationToTrip ? window.addDestinationToTrip('${item.monument_ref}') : alert('Added to trip!')" class="btn btn-sm btn-primary" style="flex:1;font-size:0.8rem;">+ Add to Trip</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- 2. LOW-WALKING ITINERARY -->
    <section class="access-section" id="lowWalkingSection">
      <div class="access-section-title-wrap">
        <div>
          <h2 class="access-section-title">
            <span>🚶</span> <span>Low-Walking Itinerary</span>
          </h2>
          <p style="font-size:0.88rem;color:#64748B;margin:0.25rem 0 0 0;">
            ${lowWalk.subtitle || 'Specially curated for seniors, travelers recovering from injury, and anyone preferring gentle strolling.'}
          </p>
        </div>
        <span style="font-size:0.8rem;background:#FEF3C7;color:#92400E;padding:0.3rem 0.75rem;border-radius:99px;font-weight:700;">
          ${lowWalk.total_walking_distance || 'Under 900m Total Walking'}
        </span>
      </div>

      <!-- Highlights Banner -->
      <div style="background:linear-gradient(135deg, #0D1B2A, #1A2F45);border-radius:12px;padding:1.5rem 1.75rem;color:#FFFFFF;margin-bottom:1.5rem;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
          <div>
            <span style="font-size:0.75rem;font-weight:700;color:#F4A261;letter-spacing:0.05em;text-transform:uppercase;">FULL DAY ACCESSIBLE TOUR</span>
            <h3 style="font-size:1.35rem;font-weight:800;color:#FFFFFF;margin:0.2rem 0 0.5rem 0;">${lowWalk.title || 'The Gentle Heritage Tour'}</h3>
            <p style="font-size:0.85rem;color:#CBD5E1;margin:0;max-width:650px;">
              Designed with vehicle drop-offs within 30–50 meters of every stop, electric buggy campus transfers, zero rock climbing, and frequent shade stops.
            </p>
          </div>
          <div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:0.85rem 1.25rem;text-align:center;">
            <div style="font-size:1.6rem;font-weight:900;color:#F4A261;">${lowWalk.step_count_estimate || '< 1,200 Steps'}</div>
            <div style="font-size:0.75rem;color:#E2E8F0;text-transform:uppercase;font-weight:600;">Daily Step Count</div>
          </div>
        </div>
      </div>

      <!-- Timeline Steps -->
      <div class="itinerary-timeline">
        ${(lowWalk.timeline || []).map((step, idx) => `
          <div class="itinerary-step-card">
            <div class="itinerary-step-node"></div>
            <div class="itinerary-step-header">
              <span class="itinerary-time-badge">⏰ ${step.time}</span>
              <span style="font-size:0.78rem;font-weight:700;color:#16a34a;">${step.accessible_washroom}</span>
            </div>
            <h4 style="font-size:1.15rem;font-weight:800;color:#0D1B2A;margin:0 0 0.4rem 0;">
              ${idx + 1}. ${step.destination}
            </h4>
            <p style="font-size:0.88rem;color:#475569;margin:0 0 0.75rem 0;line-height:1.45;">
              ${step.highlights}
            </p>
            
            <div class="itinerary-specs">
              <div class="itinerary-specs-item">
                <span>🚶 Walking:</span> <strong>${step.walking_distance}</strong>
              </div>
              <div class="itinerary-specs-item">
                <span>🪜 Stairs:</span> <strong>${step.step_count}</strong>
              </div>
              <div class="itinerary-specs-item" style="color:#C85A32;">
                <span>💡 Comfort Tip:</span> <em>${step.comfort_tip}</em>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- 3. ACCESSIBLE TOILETS -->
    <section class="access-section" id="toiletsSection">
      <div class="access-section-title-wrap">
        <div>
          <h2 class="access-section-title">
            <span>🚻</span> <span>Accessible Restrooms &amp; Sanitation Blocks</span>
          </h2>
          <p style="font-size:0.88rem;color:#64748B;margin:0.25rem 0 0 0;">
            Exact locations, door clearance widths, grab-bar installations, and cleanliness ratings across Bagalkote.
          </p>
        </div>
        <span style="font-size:0.8rem;background:#EFF6FF;color:#1D4ED8;padding:0.3rem 0.75rem;border-radius:99px;font-weight:700;">
          ${toilets.length} Verified Facilities
        </span>
      </div>

      <div class="access-card-grid">
        ${toilets.map(t => `
          <div class="access-feature-card">
            <div class="access-card-body">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">🚻</span>
                <span class="access-card-badge badge-green" style="position:static;">${t.badge || 'Accessible ♿'}</span>
              </div>
              <h3 class="access-card-title" style="font-size:1.1rem;">${t.location_name}</h3>
              <div class="access-card-meta">📍 ${t.site} · <strong>${t.distance}</strong></div>

              <ul class="access-card-checklist">
                ${(t.features || []).map(f => `<li>${f}</li>`).join('')}
              </ul>

              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:0.65rem 0.85rem;font-size:0.8rem;margin-top:auto;display:flex;justify-content:space-between;align-items:center;">
                <span>🕒 <strong>${t.operating_hours}</strong></span>
                <span style="color:#C85A32;font-weight:700;">⭐ ${t.cleanliness_rating}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- 4. REST AREAS & SHADED SEATING -->
    <section class="access-section" id="restSection">
      <div class="access-section-title-wrap">
        <div>
          <h2 class="access-section-title">
            <span>🪑</span> <span>Shaded Rest Areas &amp; Pavilions</span>
          </h2>
          <p style="font-size:0.88rem;color:#64748B;margin:0.25rem 0 0 0;">
            Where to pause, sit comfortably in shade, and drink clean water during your heritage visits.
          </p>
        </div>
        <span style="font-size:0.8rem;background:#F3E8FF;color:#7E22CE;padding:0.3rem 0.75rem;border-radius:99px;font-weight:700;">
          ${restAreas.length} Shaded Parks &amp; Pavilions
        </span>
      </div>

      <div class="access-card-grid">
        ${restAreas.map(r => `
          <div class="access-feature-card">
            <div class="access-card-body">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.5rem;">
                <span style="font-size:1.6rem;">🌳</span>
                <span class="access-card-badge badge-gold" style="position:static;">${r.badge || 'Rest Area'}</span>
              </div>
              <h3 class="access-card-title">${r.name}</h3>
              <div class="access-card-meta">📍 ${r.location} · <strong>${r.capacity}</strong></div>
              <p style="font-size:0.85rem;color:#475569;margin-bottom:0.85rem;line-height:1.45;">
                ${r.description}
              </p>

              <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:auto;">
                ${(r.amenities || []).map(a => `
                  <span style="background:#F1F5F9;border:1px solid #CBD5E1;border-radius:6px;padding:0.2rem 0.55rem;font-size:0.75rem;color:#334155;font-weight:600;">
                    ✓ ${a}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- 5. SENIOR CITIZEN RECOMMENDATIONS -->
    <section class="access-section" id="seniorSection">
      <div class="access-section-title-wrap">
        <div>
          <h2 class="access-section-title">
            <span>👴</span> <span>Senior Citizen Travel Recommendations</span>
          </h2>
          <p style="font-size:0.88rem;color:#64748B;margin:0.25rem 0 0 0;">
            Expert advice, sun safety tips, climbing alternatives, dietary adjustments, and emergency medical contacts.
          </p>
        </div>
        <span style="font-size:0.8rem;background:#FEF3C7;color:#B45309;padding:0.3rem 0.75rem;border-radius:99px;font-weight:700;">
          Elderly Care Advisory
        </span>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:1.25rem;margin-bottom:1.5rem;">
        ${seniors.map(s => `
          <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-left:4px solid #C85A32;border-radius:10px;padding:1.25rem;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.6rem;">
              <span style="font-size:1.4rem;">${s.icon || 'ℹ️'}</span>
              <h4 style="margin:0;font-size:1rem;color:#0D1B2A;font-weight:700;">${s.category}</h4>
            </div>
            <p style="font-size:0.85rem;color:#475569;margin:0;line-height:1.5;">
              ${s.advice}
            </p>
          </div>
        `).join('')}
      </div>

      <!-- Emergency Medical Callout Bar -->
      <div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:10px;padding:1.25rem 1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
        <div>
          <div style="font-weight:800;color:#991B1B;font-size:1rem;display:flex;align-items:center;gap:0.4rem;">
            <span>🚨</span> <span>24x7 Emergency Assistance Hotline Numbers:</span>
          </div>
          <div style="font-size:0.82rem;color:#7F1D1D;margin-top:0.25rem;">
            Medical Ambulance: <strong>108</strong> · Police Tourist Helpline: <strong>112</strong> · Bagalkote DC Helpline: <strong>1077</strong>
          </div>
        </div>
        <div style="display:flex;gap:0.5rem;">
          <a href="tel:108" class="btn btn-sm btn-primary" style="background:#DC2626;border-color:#DC2626;text-decoration:none;">Call Ambulance (108)</a>
          <a href="tel:112" class="btn btn-sm btn-outline" style="color:#DC2626;border-color:#DC2626;text-decoration:none;">Call Police (112)</a>
        </div>
      </div>
    </section>

    <!-- 6 & 7. CHILD-FRIENDLY LOCATIONS & BABY-CARE FACILITIES -->
    <section class="access-section" id="childrenSection">
      <div class="access-section-title-wrap">
        <div>
          <h2 class="access-section-title">
            <span>👶</span> <span>Child-Friendly Attractions &amp; Family Play Spaces</span>
          </h2>
          <p style="font-size:0.88rem;color:#64748B;margin:0.25rem 0 0 0;">
            Safe, engaging, and spacious outdoor environments where children can play, learn, and explore without heavy crowds.
          </p>
        </div>
        <span style="font-size:0.8rem;background:#E0F2FE;color:#0369A1;padding:0.3rem 0.75rem;border-radius:99px;font-weight:700;">
          Family Destinations
        </span>
      </div>

      <div class="access-card-grid" style="margin-bottom:2.5rem;">
        ${children.map(c => `
          <div class="access-feature-card">
            <div class="access-card-media">
              <img src="${getAccessibilityImage(c.name, c.image)}" alt="${c.name}" onerror="this.onerror=null; this.src='${c.name && c.name.includes('Kudala') ? '/images/destinations/Kudala_Sangama.png' : '/images/destinations/Almatti.png'}';">
              <span class="access-card-badge badge-gold">${c.highlight}</span>
            </div>
            <div class="access-card-body">
              <div class="access-card-title">${c.name}</div>
              <div class="access-card-meta">📍 ${c.taluk} · Suitable for: <strong>${c.ideal_age}</strong></div>

              <ul class="access-card-checklist">
                ${(c.features || []).map(f => `<li>${f}</li>`).join('')}
              </ul>

              <div style="background:#F0FDF4;border:1px solid #DCFCE7;border-radius:8px;padding:0.5rem 0.75rem;font-size:0.8rem;color:#166534;margin-top:auto;display:flex;align-items:center;gap:0.4rem;">
                <span>🚼 Stroller Readiness:</span> <strong>${c.stroller_friendly}</strong>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- 7. BABY-CARE FACILITIES -->
      <div id="babyCareSection" style="scroll-margin-top:130px;">
        <div class="access-section-title-wrap">
          <div>
            <h3 class="access-section-title" style="font-size:1.35rem;">
              <span>🍼</span> <span>Baby-Care &amp; Nursing Facilities</span>
            </h3>
            <p style="font-size:0.85rem;color:#64748B;margin:0.25rem 0 0 0;">
              Diaper changing counters, private nursing areas, stroller-friendly avenues, and warm milk assistance.
            </p>
          </div>
          <span style="font-size:0.75rem;background:#FDF2F8;color:#BE185D;padding:0.25rem 0.65rem;border-radius:99px;font-weight:700;">
            Parent Comfort
          </span>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;">
          ${babyCare.map(b => `
            <div style="background:#FFFFFF;border:1px solid #FCE7F3;border-radius:10px;padding:1.25rem;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                <span style="font-size:1.6rem;">${b.icon || '🍼'}</span>
                <span style="font-size:0.75rem;font-weight:700;background:#FDF2F8;color:#BE185D;padding:0.2rem 0.55rem;border-radius:6px;">${b.rating}</span>
              </div>
              <h4 style="margin:0 0 0.35rem 0;font-size:1rem;color:#0D1B2A;">${b.facility}</h4>
              <div style="font-size:0.78rem;color:#BE185D;font-weight:600;margin-bottom:0.5rem;">📍 ${b.locations}</div>
              <p style="font-size:0.82rem;color:#475569;margin:0;line-height:1.45;">
                ${b.details}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 8. FULL MONUMENT ACCESSIBILITY PROFILE TABLE -->
    <section class="access-section" id="monumentsTableSection">
      <div class="access-section-title-wrap">
        <div>
          <h2 class="access-section-title">
            <span>📋</span> <span>Heritage Monument Mobility &amp; Staircase Assessments</span>
          </h2>
          <p style="font-size:0.88rem;color:#64748B;margin:0.25rem 0 0 0;">
            Source-verified step counts, terrain slopes, handrail presence, and wheelchair status for all key district monuments.
          </p>
        </div>
        <span style="font-size:0.8rem;background:#F1F5F9;color:#334155;padding:0.3rem 0.75rem;border-radius:99px;font-weight:700;">
          ${monuments.length} ASI &amp; NIC Assessed Sites
        </span>
      </div>

      <div class="accessibility-table-wrapper" style="overflow-x:auto;">
        <table class="accessibility-table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Wheelchair Status</th>
              <th>Senior Friendly</th>
              <th>Staircase &amp; Steps Count</th>
              <th>Terrain Character</th>
              <th>Rest Areas &amp; Washrooms</th>
              <th>Verification</th>
            </tr>
          </thead>
          <tbody>
            ${monuments.map(item => `
              <tr>
                <td>
                  <strong>${item.name.replace(' Accessibility Profile', '')}</strong>
                  <div style="font-size:0.75rem;color:#64748B;margin-top:0.2rem;">📍 ${item.location || 'Bagalkote'}</div>
                </td>
                <td>
                  <span class="dest-access-pill ${item.wheelchair_accessible === true ? 'access-yes' : 'access-no'}">
                    ${item.wheelchair_accessible === true ? '♿ Step-Free' : (item.wheelchair_accessible === 'Partial' ? '⚠️ Partial' : '❌ Stairs Only')}
                  </span>
                </td>
                <td>
                  <span style="font-weight:700;color:${item.elderly_friendly === 'Excellent' ? '#15803D' : (item.elderly_friendly === 'Good' ? '#0369A1' : (item.elderly_friendly === 'Moderate' ? '#B45309' : '#B91C1C'))}">
                    ${item.elderly_friendly}
                  </span>
                </td>
                <td>
                  ${item.stairs_details ? `<strong>${item.stairs_details.total_steps_estimate} steps</strong><br><span style="font-size:0.75rem;color:#64748B;">${item.stairs_details.step_character}</span>` : 'Varies'}
                </td>
                <td>
                  <span style="font-size:0.8rem;color:#475569;">${item.terrain || 'Natural sandstone'}</span>
                </td>
                <td>
                  <span style="font-size:0.8rem;color:#334155;">${item.rest_areas || 'Shaded resting areas available'}</span>
                </td>
                <td>
                  <span class="verified-badge" style="font-size:0.75rem;">✓ ${item.accessibility_status || 'SOURCE_VERIFIED'}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;

  // Attach smooth-scrolling filter navigation listeners
  document.querySelectorAll('.access-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.access-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-target');
      if (targetId === 'all') {
        window.scrollTo({ top: 200, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}
