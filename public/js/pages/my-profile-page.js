/**
 * Tourist Profile Page Controller (my-profile-page.js)
 * Displays tourist's saved destinations (+Trip) and planned itineraries (Plan My Trip)
 */

document.addEventListener('DOMContentLoaded', () => {
  renderProfileView();
});

let pendingRemoveType = null; // 'dest' or 'trip'
let pendingRemoveId = null;

function renderProfileView() {
  const layout = document.getElementById('profileLayout');
  const heroName = document.getElementById('profileHeroName');
  const heroEmail = document.getElementById('profileHeroEmail');

  if (!TouristProfile.isLoggedIn()) {
    renderNotLoggedIn(layout, heroName, heroEmail);
    return;
  }

  const profile = TouristProfile.getProfile();
  if (!profile) {
    renderNotLoggedIn(layout, heroName, heroEmail);
    return;
  }

  const savedCount = (profile.savedDestinations || []).length;
  const tripsCount = (profile.plannedTrips || []).length;
  const bookedExp = JSON.parse(localStorage.getItem('bagalkote_booked_experiences') || '[]');
  const expCount = bookedExp.length;
  const initial = (profile.name || profile.email || 'T')[0].toUpperCase();

  // Update hero
  if (heroName) heroName.textContent = `Welcome, ${profile.name || 'Traveller'}!`;
  if (heroEmail) {
    heroEmail.innerHTML = `
      <span style="color:#D4AF37;">✉ ${profile.email}</span> · Member since ${profile.joinedAt || '2026'}
    `;
  }

  // Build Hero stats and content layout
  layout.innerHTML = `
    <!-- Profile Action Controls -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
      <div style="display:flex;gap:1rem;align-items:center;">
        <div class="profile-avatar">${initial}</div>
        <div>
          <h2 style="font-family:'Cinzel',serif;font-size:1.5rem;color:#0D1B2A;margin:0 0 0.2rem 0;">${profile.name || 'Tourist Profile'}</h2>
          <div style="font-size:0.85rem;color:#64748B;">Registered Bagalkote Cultural Tourist</div>
        </div>
      </div>
      <div style="display:flex;gap:0.75rem;align-items:center;">
        <a href="/explore.html" class="btn btn-outline" style="text-decoration:none;font-size:0.875rem;">➕ Explore More</a>
        <a href="/?openTrip=1" class="btn btn-primary" style="text-decoration:none;font-size:0.875rem;">🧭 Plan New Trip</a>
        <button id="btnSignOutTourist" class="btn btn-outline" onclick="logoutTourist(event)" style="font-size:0.875rem;color:#E63946;border-color:#E63946;cursor:pointer;">Sign Out</button>
      </div>
    </div>

    <!-- Tabs -->
    <div class="profile-tabs-wrap" style="border-radius:12px;margin-bottom:2rem;">
      <div class="profile-tabs">
        <button class="profile-tab-btn active" id="tabBtnDest" onclick="switchProfileTab('dest')">
          <span>📍 Added Trips / Destinations</span>
          <span class="tab-counter" id="destCounterBadge">${savedCount}</span>
        </button>
        <button class="profile-tab-btn" id="tabBtnTrips" onclick="switchProfileTab('trips')">
          <span>🧭 Planned Itineraries</span>
          <span class="tab-counter" id="tripsCounterBadge">${tripsCount}</span>
        </button>
        <button class="profile-tab-btn" id="tabBtnExp" onclick="switchProfileTab('exp')">
          <span>🎯 Booked Experiences</span>
          <span class="tab-counter" id="expCounterBadge">${expCount}</span>
        </button>
      </div>
    </div>

    <!-- Tab Pane 1: Saved Destinations -->
    <div class="profile-tab-pane active" id="paneDest">
      ${renderSavedDestinations(profile.savedDestinations || [])}
    </div>

    <!-- Tab Pane 2: Planned Trips -->
    <div class="profile-tab-pane" id="paneTrips">
      ${renderPlannedTrips(profile.plannedTrips || [])}
    </div>

    <!-- Tab Pane 3: Booked Experiences -->
    <div class="profile-tab-pane" id="paneExp">
      ${renderBookedExperiences(bookedExp)}
    </div>
  `;
}

window.logoutTourist = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  
  // Clear all tourist session data
  try {
    if (window.TouristProfile && window.TouristProfile.logout) {
      window.TouristProfile.logout();
    }
  } catch (err) {
    console.warn('TouristProfile logout error:', err);
  }

  localStorage.removeItem('bgk_user_token');
  localStorage.removeItem('bgk_user_email');
  localStorage.removeItem('bgk_tourist_profile');
  localStorage.removeItem('authToken');
  localStorage.removeItem('tourist_email');
  sessionStorage.clear();

  // Reset top navigation profile indicators if any
  const navProfile = document.getElementById('navProfileLink');
  if (navProfile) navProfile.textContent = 'My Profile';

  // Render not-logged-in view immediately
  const layout = document.getElementById('profileLayout');
  const heroName = document.getElementById('profileHeroName');
  const heroEmail = document.getElementById('profileHeroEmail');

  if (layout) {
    renderNotLoggedIn(layout, heroName, heroEmail);
  } else {
    window.location.reload();
  }
};

// ── Not Logged In View ───────────────────────────────────────────────────────
function renderNotLoggedIn(layout, heroName, heroEmail) {
  if (heroName) heroName.textContent = 'Tourist Sign In';
  if (heroEmail) heroEmail.textContent = 'Sign in to access your saved destinations, planned itineraries, and profile.';

  layout.innerHTML = `
    <div class="profile-auth-prompt">
      <div class="auth-lock-icon">🔒</div>
      <h2 style="font-family:'Cinzel',serif;color:#0D1B2A;margin-bottom:0.5rem;font-size:1.6rem;">Sign In to Your Profile</h2>
      <p style="color:#64748B;font-size:0.9rem;margin-bottom:1.75rem;line-height:1.5;">
        Enter your email and password to create or access your personalized Bagalkote travel profile.
      </p>

      <form id="inlineLoginForm" style="text-align:left;display:flex;flex-direction:column;gap:1.1rem;">
        <div class="form-group" style="margin-bottom:0;">
          <label for="inlineEmail" style="display:block;font-size:0.85rem;font-weight:700;color:#334155;margin-bottom:0.35rem;">Email Address</label>
          <input type="email" id="inlineEmail" class="form-control" placeholder="tourist@example.com" required style="width:100%;padding:0.75rem 1rem;border:1px solid #CBD5E1;border-radius:8px;font-size:0.95rem;">
        </div>
        <div class="form-group" style="margin-bottom:0;">
          <label for="inlinePassword" style="display:block;font-size:0.85rem;font-weight:700;color:#334155;margin-bottom:0.35rem;">Password</label>
          <input type="password" id="inlinePassword" class="form-control" placeholder="Enter your password (min 4 chars)" required style="width:100%;padding:0.75rem 1rem;border:1px solid #CBD5E1;border-radius:8px;font-size:0.95rem;">
        </div>
        <div id="inlineLoginErr" style="display:none;color:#E63946;font-size:0.85rem;background:#FEE2E2;padding:0.6rem;border-radius:6px;"></div>
        <button type="submit" class="btn btn-primary" style="width:100%;padding:0.85rem;font-size:1rem;margin-top:0.5rem;">
          Sign In / Create Profile
        </button>
      </form>
    </div>
  `;

  document.getElementById('inlineLoginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('inlineEmail').value.trim();
    const password = document.getElementById('inlinePassword').value;
    const errEl = document.getElementById('inlineLoginErr');

    if (!email || !password || password.length < 4) {
      errEl.textContent = 'Please enter a valid email and password (minimum 4 characters).';
      errEl.style.display = 'block';
      return;
    }

    if (TouristProfile.login(email, password)) {
      renderProfileView();
    } else {
      errEl.textContent = 'Sign in failed. Please try again.';
      errEl.style.display = 'block';
    }
  });
}

// ── Tab Switching ───────────────────────────────────────────────────────────
window.switchProfileTab = function(tabName) {
  ['tabBtnDest','tabBtnTrips','tabBtnExp'].forEach(id => document.getElementById(id)?.classList.remove('active'));
  ['paneDest','paneTrips','paneExp'].forEach(id => document.getElementById(id)?.classList.remove('active'));
  if (tabName === 'dest') {
    document.getElementById('tabBtnDest')?.classList.add('active');
    document.getElementById('paneDest')?.classList.add('active');
  } else if (tabName === 'trips') {
    document.getElementById('tabBtnTrips')?.classList.add('active');
    document.getElementById('paneTrips')?.classList.add('active');
  } else {
    document.getElementById('tabBtnExp')?.classList.add('active');
    document.getElementById('paneExp')?.classList.add('active');
  }
};

// ── Render Saved Destinations ───────────────────────────────────────────────
function renderSavedDestinations(destinations) {
  if (!destinations || destinations.length === 0) {
    return `
      <div class="profile-empty-state">
        <div class="empty-state-icon">🏛️</div>
        <h3 class="empty-state-title">No Destinations Added Yet</h3>
        <p class="empty-state-sub">
          When exploring Bagalkote destinations, click <strong>+Trip</strong> on any destination card to save it to your journey profile!
        </p>
        <a href="/explore.html" class="btn btn-primary" style="text-decoration:none;">
          ✨ Explore Destinations
        </a>
      </div>
    `;
  }

  return `
    <div class="saved-dest-grid">
      ${destinations.map(d => {
        const dest = TouristProfile.enrichDestination(d);
        return `
          <div class="saved-dest-card" id="destCard_${dest.id}">
            <div class="saved-dest-thumb" style="background-image:url('${dest.imageUrl || '/images/destinations/badami.jpg'}');">
              <span class="saved-dest-badge">${dest.taluk} Taluk</span>
            </div>
            <div class="saved-dest-body">
              <span class="saved-dest-cat">${dest.category}</span>
              <h3 class="saved-dest-title">${dest.name}</h3>
              <p class="saved-dest-desc">${dest.description || 'Verified heritage destination in Bagalkote district.'}</p>
              
              <div class="saved-dest-meta">
                <span>⏱️ ${dest.duration || '2-3 Hours'}</span>
                <span>Added: ${dest.addedAt || 'Recent'}</span>
              </div>

              <div class="saved-dest-actions">
                <a href="/explore.html?dest=${dest.id}" class="btn btn-outline" style="text-decoration:none;">
                  Explore Details
                </a>
                <button class="btn btn-outline" style="color:#E63946;border-color:#E63946;" onclick="promptRemoveDestination('${dest.id}', '${dest.name.replace(/'/g, "\\'")}')">
                  Remove
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ── Render Planned Trips ────────────────────────────────────────────────────
function renderPlannedTrips(trips) {
  if (!trips || trips.length === 0) {
    return `
      <div class="profile-empty-state">
        <div class="empty-state-icon">🧭</div>
        <h3 class="empty-state-title">No Planned Itineraries Yet</h3>
        <p class="empty-state-sub">
          Use the AI-powered <strong>Plan My Trip</strong> wizard to craft custom itineraries connecting heritage, accessible routes, and artisan cooperatives!
        </p>
        <a href="/?openTrip=1" class="btn btn-primary" style="text-decoration:none;">
          🗺️ Plan a Trip Now
        </a>
      </div>
    `;
  }

  return `
    <div class="planned-trips-list">
      ${trips.map((trip, idx) => `
        <div class="planned-trip-card" id="tripCard_${trip.id}">
          <div class="planned-trip-header">
            <div class="planned-trip-title-box">
              <span style="font-size:0.75rem;font-weight:800;color:#D4AF37;text-transform:uppercase;letter-spacing:0.05em;">AI GENERATED TRIP ITINERARY</span>
              <h3>${trip.trip_title}</h3>
              <p class="planned-trip-theme">${trip.theme}</p>
              
              <div class="planned-trip-tags">
                <span class="planned-trip-tag">💰 ${trip.budget}</span>
                <span class="planned-trip-tag">👥 ${trip.companions}</span>
                <span class="planned-trip-tag">♿ ${trip.accessibility}</span>
                <span class="planned-trip-tag" style="background:rgba(212,175,55,0.25);color:#FDE68A;">📅 Saved on ${trip.savedAt || 'Recent'}</span>
              </div>
            </div>

            <div class="planned-trip-actions">
              <button class="btn btn-outline" style="color:#FFFFFF;border-color:rgba(255,255,255,0.4);font-size:0.8rem;" onclick="window.print()">
                🖨️ Print
              </button>
              <button class="btn btn-outline" style="color:#FCA5A5;border-color:rgba(239,68,68,0.4);font-size:0.8rem;" onclick="promptRemoveTrip('${trip.id}', '${trip.trip_title.replace(/'/g, "\\'")}')">
                🗑️ Delete Trip
              </button>
            </div>
          </div>

          <div class="planned-trip-body">
            <h4 style="font-family:'Cinzel',serif;color:#0D1B2A;margin-bottom:1.25rem;font-size:1.1rem;">Scheduled Journey Timeline</h4>
            
            <div class="trip-timeline">
              ${(trip.timeline || []).map(item => `
                <div class="trip-timeline-item">
                  <div class="trip-time-badge">${item.time}</div>
                  <div class="trip-timeline-content">
                    <span class="trip-stop-type">${item.type}</span>
                    <h5 class="trip-stop-title">${item.name} ${item.kn_name ? `<span style="font-family:'Noto Sans Kannada';color:#D4AF37;font-size:0.85rem;">(${item.kn_name})</span>` : ''}</h5>
                    <p class="trip-stop-desc">${item.description}</p>
                    ${item.provider ? `<div style="font-size:0.8rem;color:#0F766E;font-weight:600;margin-bottom:0.25rem;">Provider: ${item.provider}</div>` : ''}
                    <div style="font-size:0.775rem;color:#059669;font-weight:600;margin-bottom:0.25rem;">${item.accessibility_note}</div>
                    
                    <div class="trip-stop-footer">
                      <span>Source: ${item.verified_source || 'Verified District Portal'}</span>
                      <span>Est. Cost: ${item.estimated_cost || 'Included'}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="trip-summary-box">
              <div>
                <div style="font-weight:700;color:#92400E;font-size:0.85rem;margin-bottom:0.2rem;">🚨 Safety & Route Advisory</div>
                <div style="color:#78350F;font-size:0.825rem;">${trip.safety_advisory}</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:0.75rem;color:#64748B;text-transform:uppercase;">Total Estimated Budget</div>
                <div style="font-weight:800;color:#0D1B2A;font-size:1.1rem;">${trip.estimated_total_budget}</div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ── Render Booked Experiences ────────────────────────────────────────────────
function renderBookedExperiences(experiences) {
  if (!experiences || experiences.length === 0) {
    return `
      <div class="profile-empty-state">
        <div class="empty-state-icon">🎯</div>
        <h3 class="empty-state-title">No Experiences Booked Yet</h3>
        <p class="empty-state-sub">
          Visit <strong>Meet People & Artisans</strong> to discover and book local cooking classes, heritage walks, weaving demonstrations, and more!
        </p>
        <a href="/meet-the-people.html" class="btn btn-primary" style="text-decoration:none;">
          🎯 Discover Experiences
        </a>
      </div>
    `;
  }

  const CAT_ICONS = { Food:'🍲', Art:'🎨', Culture:'🎭', History:'🏛️', Crafts:'🧵' };

  return `
    <div class="saved-dest-grid">
      ${experiences.map(exp => `
        <div class="saved-dest-card" id="expCard_${exp.id}">
          <div class="saved-dest-thumb" style="background:linear-gradient(135deg,#0D1B2A,#1e3558);display:flex;align-items:center;justify-content:center;">
            <div style="text-align:center;color:#FFFFFF;">
              <div style="font-size:2.5rem;margin-bottom:0.5rem;">${CAT_ICONS[exp.category] || '🎯'}</div>
              <span style="font-size:0.75rem;color:rgba(255,255,255,0.7);font-family:'Outfit',sans-serif;">${exp.category || 'Experience'}</span>
            </div>
          </div>
          <div class="saved-dest-body">
            <span class="saved-dest-cat">🎯 Local Experience</span>
            <h3 class="saved-dest-title">${exp.skill}</h3>
            <p class="saved-dest-desc">with <strong>${exp.name}</strong></p>
            <div class="saved-dest-meta">
              <span>💰 ₹${exp.price}/person</span>
              <span>⏱️ ${exp.duration}h</span>
            </div>
            <div class="saved-dest-meta" style="margin-top:0.4rem;">
              <span style="font-size:0.75rem;color:#94A3B8;">Booked: ${exp.bookedAt ? new Date(exp.bookedAt).toLocaleDateString('en-IN') : 'Recent'}</span>
            </div>
            <div class="saved-dest-actions">
              <a href="/meet-the-people.html" class="btn btn-outline" style="text-decoration:none;font-size:0.82rem;">View More</a>
              <button class="btn btn-outline" style="color:#E63946;border-color:#E63946;font-size:0.82rem;" onclick="removeBookedExp('${exp.id}')">
                Remove
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.removeBookedExp = function(expId) {
  const key = 'bagalkote_booked_experiences';
  const list = JSON.parse(localStorage.getItem(key) || '[]').filter(e => e.id !== expId);
  localStorage.setItem(key, JSON.stringify(list));
  renderProfileView();
};

window.promptRemoveDestination = function(destId, destName) {
  pendingRemoveType = 'dest';
  pendingRemoveId = destId;
  const modal = document.getElementById('confirmDeleteModal');
  const msg = document.getElementById('confirmDeleteMsg');
  if (msg) msg.textContent = `Remove "${destName}" from your saved destinations?`;
  if (modal) modal.classList.add('active');
};

window.promptRemoveTrip = function(tripId, tripTitle) {
  pendingRemoveType = 'trip';
  pendingRemoveId = tripId;
  const modal = document.getElementById('confirmDeleteModal');
  const msg = document.getElementById('confirmDeleteMsg');
  if (msg) msg.textContent = `Delete itinerary "${tripTitle}" from your planned trips?`;
  if (modal) modal.classList.add('active');
};

document.getElementById('confirmDeleteBtn')?.addEventListener('click', () => {
  const modal = document.getElementById('confirmDeleteModal');
  if (modal) modal.classList.remove('active');

  if (pendingRemoveType === 'dest' && pendingRemoveId) {
    TouristProfile.removeDestination(pendingRemoveId);
    renderProfileView();
  } else if (pendingRemoveType === 'trip' && pendingRemoveId) {
    TouristProfile.removeTrip(pendingRemoveId);
    renderProfileView();
  }
  pendingRemoveType = null;
  pendingRemoveId = null;
});
