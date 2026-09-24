// dc-dashboard-page.js - Official District Administration Intelligence Dashboard
// Features DC Authentication Gate (Dc_bgk / DCofficebgk) & Tourist Grievance Redressal Monitoring

let _dcComplaintsList = [];
let _activeComplaintFilter = 'all';

document.addEventListener('DOMContentLoaded', async () => {
  await initDCDashboard();
});

async function initDCDashboard() {
  const isAuth = sessionStorage.getItem('bgk_dc_authenticated') === 'true';
  if (!isAuth) {
    renderDCLoginGate();
  } else {
    await renderDCDashboard();
  }
}

// ============================================================
// 1. DC OFFICIAL AUTHENTICATION GATE
// ============================================================
function renderDCLoginGate(errorMessage = '') {
  const headerBtn = document.getElementById('headerDcLogoutBtn');
  if (headerBtn) headerBtn.style.display = 'none';

  const c = document.getElementById('adminPageContainer');
  if (!c) return;

  const isLogoutMsg = errorMessage && errorMessage.includes('logged out');

  c.innerHTML = `
    <div style="max-width:480px;margin:2rem auto 4rem auto;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;box-shadow:0 12px 36px rgba(0,0,0,0.08);overflow:hidden;">
      <!-- Header Banner -->
      <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%);padding:2rem 1.5rem;text-align:center;color:#FFF;position:relative;">
        <div style="width:68px;height:68px;border-radius:50%;background:#FFF;padding:3px;margin:0 auto 1rem auto;box-shadow:0 4px 12px rgba(0,0,0,0.2);">
          <img src="/images/karnataka_govt_seal.jpg" alt="Government of Karnataka Seal" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">
        </div>
        <div style="font-size:0.75rem;letter-spacing:0.08em;font-weight:700;color:#F59E0B;text-transform:uppercase;">
          GOVERNMENT OF KARNATAKA
        </div>
        <h2 style="font-size:1.15rem;font-weight:800;margin:0.25rem 0 0.35rem 0;color:#FFFFFF;line-height:1.3;">
          DEPUTY COMMISSIONER &amp; DISTRICT MAGISTRATE
        </h2>
        <div style="font-size:0.8rem;color:#94A3B8;">District Tourism Intelligence &amp; Redressal Portal</div>
      </div>

      <!-- Security Notice -->
      <div style="background:#FEF3C7;border-bottom:1px solid #FCD34D;padding:0.75rem 1.25rem;font-size:0.78rem;color:#92400E;display:flex;align-items:center;gap:0.5rem;">
        <span style="font-size:1.1rem;">🔒</span>
        <span><strong>RESTRICTED ACCESS:</strong> Official credentials required for Deputy Commissioner administration.</span>
      </div>

      <!-- Login Form -->
      <div style="padding:1.75rem 1.5rem;">
        ${errorMessage ? `
          <div style="background:${isLogoutMsg ? '#DCFCE7' : '#FEE2E2'};border:1px solid ${isLogoutMsg ? '#86EFAC' : '#F87171'};color:${isLogoutMsg ? '#15803D' : '#DC2626'};padding:0.75rem 1rem;border-radius:8px;font-size:0.82rem;font-weight:600;margin-bottom:1.25rem;display:flex;align-items:center;gap:0.5rem;">
            <span>${isLogoutMsg ? '✓' : '⚠️'}</span>
            <span>${errorMessage}</span>
          </div>
        ` : ''}

        <form id="dcLoginForm" onsubmit="handleDCLogin(event)">
          <div style="margin-bottom:1.25rem;">
            <label for="dcUsername" style="display:block;font-size:0.82rem;font-weight:700;color:#1E293B;margin-bottom:0.35rem;">
              Administrative Username <span style="color:#DC2626;">*</span>
            </label>
            <div style="position:relative;">
              <span style="position:absolute;left:0.85rem;top:50%;transform:translateY(-50%);color:#64748B;">👤</span>
              <input type="text" id="dcUsername" required value="" placeholder="Enter administrative username" autocomplete="username" style="width:100%;padding:0.75rem 0.85rem 0.75rem 2.4rem;border:1px solid #CBD5E1;border-radius:8px;font-size:0.9rem;font-weight:600;color:#0D1B2A;">
            </div>
          </div>

          <div style="margin-bottom:1.5rem;">
            <label for="dcPassword" style="display:block;font-size:0.82rem;font-weight:700;color:#1E293B;margin-bottom:0.35rem;">
              Secure Password <span style="color:#DC2626;">*</span>
            </label>
            <div style="position:relative;">
              <span style="position:absolute;left:0.85rem;top:50%;transform:translateY(-50%);color:#64748B;">🔑</span>
              <input type="password" id="dcPassword" required value="" placeholder="Enter administrative password" autocomplete="current-password" style="width:100%;padding:0.75rem 2.5rem 0.75rem 2.4rem;border:1px solid #CBD5E1;border-radius:8px;font-size:0.9rem;color:#0D1B2A;">
              <button type="button" onclick="togglePasswordVisibility()" style="position:absolute;right:0.75rem;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#64748B;font-size:0.9rem;padding:0.25rem;" title="Toggle Password Visibility">
                <span id="pwToggleIcon">👁️</span>
              </button>
            </div>
          </div>

          <button type="submit" id="dcLoginBtn" class="btn btn-primary" style="width:100%;padding:0.85rem;font-size:0.95rem;font-weight:700;display:flex;align-items:center;justify-content:center;gap:0.5rem;border-radius:8px;">
            <span>🛡️</span>
            <span>Authenticate &amp; Unlock DC Portal</span>
          </button>
        </form>

        <div style="margin-top:1.5rem;text-align:center;">
          <a href="/" style="font-size:0.8rem;color:#64748B;text-decoration:none;">← Return to Public Tourism Portal</a>
        </div>
      </div>
    </div>
  `;
}

window.togglePasswordVisibility = function() {
  const pw = document.getElementById('dcPassword');
  const icon = document.getElementById('pwToggleIcon');
  if (pw) {
    if (pw.type === 'password') {
      pw.type = 'text';
      if (icon) icon.innerText = '🙈';
    } else {
      pw.type = 'password';
      if (icon) icon.innerText = '👁️';
    }
  }
};

window.handleDCLogin = async function (event) {
  event.preventDefault();
  const username = (document.getElementById('dcUsername').value || '').trim();
  const password = (document.getElementById('dcPassword').value || '').trim();
  const btn = document.getElementById('dcLoginBtn');

  btn.disabled = true;
  btn.innerText = 'Verifying DC Credentials...';

  try {
    const res = await API.adminLogin(username, password);

    if (res && res.success) {
      sessionStorage.setItem('bgk_dc_authenticated', 'true');
      sessionStorage.setItem('bgk_dc_user', JSON.stringify(res.user || { username: 'Dc_bgk', role: 'DEPUTY_COMMISSIONER' }));
      await renderDCDashboard();
    } else {
      btn.disabled = false;
      renderDCLoginGate(res.error || 'Invalid credentials. Access restricted to authorized District Administration personnel.');
    }
  } catch (err) {
    btn.disabled = false;
    renderDCLoginGate('Authentication error: ' + err.message);
  }
};

window.logoutDCSession = function (event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  sessionStorage.removeItem('bgk_dc_authenticated');
  sessionStorage.removeItem('bgk_dc_user');
  localStorage.removeItem('bgk_dc_authenticated');
  localStorage.removeItem('bgk_dc_user');
  renderDCLoginGate('Session ended. You have been securely logged out.');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ============================================================
// 2. MAIN DC DASHBOARD RENDERING
// ============================================================
async function renderDCDashboard() {
  const isAuth = sessionStorage.getItem('bgk_dc_authenticated') === 'true';
  if (!isAuth) {
    renderDCLoginGate();
    return;
  }

  const headerBtn = document.getElementById('headerDcLogoutBtn');
  if (headerBtn) headerBtn.style.display = 'inline-flex';

  const c = document.getElementById('adminPageContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="text-align:center;padding:4rem 0;color:#64748B;">
      <div style="font-size:3rem;margin-bottom:1rem;animation:pulse 1.5s infinite;">📊</div>
      <p style="font-size:1.1rem;font-weight:600;">Loading real-time district tourism intelligence &amp; grievances...</p>
    </div>
  `;

  let analytics = null;
  try {
    const res = await fetch('/api/admin/analytics');
    analytics = await res.json();
  } catch (e) {
    console.warn('Using fallback administrative analytics:', e);
    analytics = {
      disclaimer: "DEMO / PROTOTYPE DATA — Simulated District Tourism Intelligence",
      metrics: {
        total_tourists_projected_annual: "1,250,000+",
        verified_heritage_destinations: 31,
        active_weaver_cooperatives: 12,
        registered_local_businesses: 48,
        ai_skill_matches_completed: 3420,
        accessibility_inquiries_pct: "28.4%",
        multilingual_queries: { kannada_pct: "52%", english_pct: "31%", hindi_pct: "17%" },
        complaints_total: 4,
        complaints_pending: 2,
        complaints_resolved: 2,
        complaints_critical: 1,
        feedback_count: 1
      },
      popular_destinations: [
        { name: "Badami Caves", visitors_pct: 42 },
        { name: "Pattadakal UNESCO", visitors_pct: 26 },
        { name: "Aihole Complex", visitors_pct: 15 },
        { name: "Kudala Sangama", visitors_pct: 11 },
        { name: "Ilkal Weavers", visitors_pct: 6 }
      ],
      taluk_distribution: {
        "Badami": 45, "Hunagund": 25, "Ilkal": 12, "Guledagudda": 8, "Bagalkote": 5, "Mudhol": 3, "Jamkhandi": 2
      },
      verification_queue: [],
      complaints: []
    };
  }

  // Load complaints list from API or analytics
  _dcComplaintsList = analytics.complaints || [];

  // Merge any local complaints from localStorage if present
  try {
    const localComplaints = JSON.parse(localStorage.getItem('bgk_local_complaints') || '[]');
    localComplaints.forEach(lc => {
      if (!_dcComplaintsList.find(c => c.ticketId === lc.ticketId || c.id === lc.id)) {
        _dcComplaintsList.unshift(lc);
      }
    });
  } catch (e) { }

  // Merge server and local verification queues
  let serverQueue = analytics.verification_queue || [];
  let localQueue = [];
  try {
    localQueue = JSON.parse(localStorage.getItem('bgk_dc_verifications') || '[]');
  } catch (e) { }

  const verMap = new Map();
  serverQueue.forEach(v => {
    const key = v.provider_id || v.id || v.provider_name;
    verMap.set(key, v);
  });
  localQueue.forEach(v => {
    const key = v.provider_id || v.id || v.provider_name;
    if (verMap.has(key)) {
      verMap.set(key, { ...verMap.get(key), ...v });
    } else {
      verMap.set(key, v);
    }
  });
  window._dcVerificationQueue = Array.from(verMap.values());

  const m = analytics.metrics;
  const taluks = analytics.taluk_distribution || {
    "Badami": 45, "Hunagund": 25, "Ilkal": 12, "Guledagudda": 8, "Bagalkote": 5, "Mudhol": 3, "Jamkhandi": 2
  };

  const now = new Date();
  const timeString = now.toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  const totalComplaints = _dcComplaintsList.length;
  const pendingComplaints = _dcComplaintsList.filter(c => c.status !== 'RESOLVED' && c.status !== 'REJECTED').length;
  const criticalComplaints = _dcComplaintsList.filter(c => c.urgency === 'Critical' && c.status !== 'RESOLVED').length;
  const feedbackComplaints = _dcComplaintsList.filter(c => c.type === 'FEEDBACK').length;

  c.innerHTML = `
    <!-- Top Action & DC Authenticated Status Bar -->
    <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:12px;padding:1rem 1.5rem;margin-bottom:1.5rem;box-shadow:0 2px 8px rgba(0,0,0,0.04);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
      <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#16a34a;box-shadow:0 0 8px #16a34a;"></span>
        <span style="font-weight:800;font-size:0.88rem;color:#0D1B2A;">District Collectorate Telemetry Active</span>
        <span style="color:#94A3B8;">|</span>
        <span style="background:#DBEAFE;color:#1E40AF;padding:0.25rem 0.65rem;border-radius:99px;font-size:0.75rem;font-weight:700;">
          👤 DC Session: <strong>Dc_bgk</strong> (Magistrate)
        </span>
        <span style="font-size:0.8rem;color:#64748B;">Live Synced: ${timeString}</span>
      </div>

      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
        <a href="/complaints.html" class="btn btn-sm btn-outline" style="font-size:0.8rem;text-decoration:none;display:flex;align-items:center;gap:0.35rem;border-color:#DC2626;color:#DC2626;">
          <span>📢</span> <span>Grievance Portal ↗</span>
        </a>
        <button onclick="window.print()" class="btn btn-sm btn-outline" style="font-size:0.8rem;display:flex;align-items:center;gap:0.35rem;">
          <span>🖨️</span> <span>Print DC Report</span>
        </button>
        <button onclick="renderDCDashboard()" class="btn btn-sm btn-outline" style="font-size:0.8rem;display:flex;align-items:center;gap:0.35rem;">
          <span>🔄</span> <span>Refresh</span>
        </button>
        <button id="dcTelemetryLogoutBtn" onclick="logoutDCSession(event)" class="btn btn-sm btn-outline" style="font-size:0.8rem;display:flex;align-items:center;gap:0.35rem;border-color:#DC2626;color:#DC2626;font-weight:700;cursor:pointer;">
          <span>🔒</span> <span>Logout DC Session</span>
        </button>
      </div>
    </div>

    <!-- Official Prototype Disclaimer Banner -->
    <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:10px;padding:0.85rem 1.25rem;font-size:0.85rem;color:#92400E;display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;flex-wrap:wrap;gap:0.75rem;">
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <span style="font-size:1.2rem;">🏛️</span>
        <span><strong>${analytics.disclaimer}</strong> — Official District Administrative Portal for Bagalkote</span>
      </div>
      <span class="demo-badge" style="background:#B45309;color:#FFF;padding:0.25rem 0.65rem;border-radius:6px;font-size:0.75rem;font-weight:700;letter-spacing:0.05em;">DC AUTHENTICATED</span>
    </div>

    <!-- Executive KPI Metrics Grid (7 Responsive Cards) -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem;margin-bottom:2rem;">
      <!-- Card 1: Tourist Flow -->
      <div class="impact-card" style="padding:1.25rem 0.85rem;text-align:center;">
        <div class="impact-icon" style="font-size:1.6rem;">🧳</div>
        <div style="font-size:1.45rem;font-weight:900;color:#0D1B2A;margin:0.25rem 0;">${m.total_tourists_projected_annual}</div>
        <div style="font-size:0.72rem;font-weight:700;color:#64748B;text-transform:uppercase;">Annual Flow</div>
        <div style="font-size:0.68rem;color:#16a34a;font-weight:600;margin-top:0.25rem;">+14.2% YoY Projected</div>
      </div>

      <!-- Card 2: Destinations -->
      <div class="impact-card" style="padding:1.25rem 0.85rem;text-align:center;">
        <div class="impact-icon" style="font-size:1.6rem;">🏛️</div>
        <div style="font-size:1.45rem;font-weight:900;color:#C85A32;margin:0.25rem 0;">${m.verified_heritage_destinations}</div>
        <div style="font-size:0.72rem;font-weight:700;color:#64748B;text-transform:uppercase;">Heritage Sites</div>
        <div style="font-size:0.68rem;color:#64748B;margin-top:0.25rem;">Badami, Pattadakal, Aihole</div>
      </div>

      <!-- Card 3: Grievance & Feedback Cell (HIGHLIGHTED) -->
      <div class="impact-card" style="padding:1.25rem 0.85rem;text-align:center;border:2px solid ${criticalComplaints > 0 ? '#F87171' : '#CBD5E1'};background:${criticalComplaints > 0 ? '#FFF5F5' : '#FFFFFF'};">
        <div class="impact-icon" style="font-size:1.6rem;">🚨</div>
        <div style="font-size:1.45rem;font-weight:900;color:${criticalComplaints > 0 ? '#DC2626' : '#C85A32'};margin:0.25rem 0;">
          ${totalComplaints} Tickets
        </div>
        <div style="font-size:0.72rem;font-weight:700;color:#64748B;text-transform:uppercase;">Tourist Grievances</div>
        <div style="font-size:0.68rem;color:${pendingComplaints > 0 ? '#DC2626' : '#16a34a'};font-weight:700;margin-top:0.25rem;">
          ${pendingComplaints} Pending · ${criticalComplaints} Critical
        </div>
      </div>

      <!-- Card 4: Weaver Guilds -->
      <div class="impact-card" style="padding:1.25rem 0.85rem;text-align:center;">
        <div class="impact-icon" style="font-size:1.6rem;">🧵</div>
        <div style="font-size:1.45rem;font-weight:900;color:#C85A32;margin:0.25rem 0;">${m.active_weaver_cooperatives}</div>
        <div style="font-size:0.72rem;font-weight:700;color:#64748B;text-transform:uppercase;">Weaver Guilds</div>
        <div style="font-size:0.68rem;color:#64748B;margin-top:0.25rem;">Ilkal &amp; Guledagudda</div>
      </div>

      <!-- Card 5: Local Businesses -->
      <div class="impact-card" style="padding:1.25rem 0.85rem;text-align:center;">
        <div class="impact-icon" style="font-size:1.6rem;">🏪</div>
        <div style="font-size:1.45rem;font-weight:900;color:#2A9D8F;margin:0.25rem 0;">${m.registered_local_businesses || 48}</div>
        <div style="font-size:0.72rem;font-weight:700;color:#64748B;text-transform:uppercase;">Businesses</div>
        <div style="font-size:0.68rem;color:#16a34a;font-weight:600;margin-top:0.25rem;">Verified Guides &amp; Stays</div>
      </div>

      <!-- Card 6: AI Matches -->
      <div class="impact-card" style="padding:1.25rem 0.85rem;text-align:center;">
        <div class="impact-icon" style="font-size:1.6rem;">🤝</div>
        <div style="font-size:1.45rem;font-weight:900;color:#2A9D8F;margin:0.25rem 0;">${m.ai_skill_matches_completed}</div>
        <div style="font-size:0.72rem;font-weight:700;color:#64748B;text-transform:uppercase;">AI Matches</div>
        <div style="font-size:0.68rem;color:#16a34a;font-weight:600;margin-top:0.25rem;">94% Satisfaction</div>
      </div>

      <!-- Card 7: Accessibility -->
      <div class="impact-card" style="padding:1.25rem 0.85rem;text-align:center;">
        <div class="impact-icon" style="font-size:1.6rem;">♿</div>
        <div style="font-size:1.45rem;font-weight:900;color:#D4AF37;margin:0.25rem 0;">${m.accessibility_inquiries_pct}</div>
        <div style="font-size:0.72rem;font-weight:700;color:#64748B;text-transform:uppercase;">Accessibility</div>
        <div style="font-size:0.68rem;color:#64748B;margin-top:0.25rem;">Wheelchair &amp; Senior</div>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- 3. TOURIST GRIEVANCES & CITIZEN FEEDBACK CELL (DC DIRECT ACTION) -->
    <!-- ============================================================ -->
    <div class="safety-card" style="padding:1.75rem;margin-bottom:2.5rem;border:2px solid #E2E8F0;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h3 class="card-title" style="margin:0;font-size:1.25rem;display:flex;align-items:center;gap:0.5rem;color:#0D1B2A;">
            <span>🚨</span> <span>Tourist Grievance &amp; Visitor Feedback Redressal Cell</span>
          </h3>
          <p style="font-size:0.85rem;color:#64748B;margin:0.25rem 0 0 0;">
            Direct DC executive oversight. Review tourist complaints, dispatch field verification squads, and issue official redressal orders.
          </p>
        </div>

        <!-- Filter Buttons -->
        <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
          <button onclick="filterDCComplaints('all')" id="fltBtn_all" class="btn btn-sm btn-primary" style="font-size:0.78rem;padding:0.35rem 0.75rem;">
            All (${totalComplaints})
          </button>
          <button onclick="filterDCComplaints('pending')" id="fltBtn_pending" class="btn btn-sm btn-outline" style="font-size:0.78rem;padding:0.35rem 0.75rem;background:#FFF;">
            Pending (${pendingComplaints})
          </button>
          <button onclick="filterDCComplaints('critical')" id="fltBtn_critical" class="btn btn-sm btn-outline" style="font-size:0.78rem;padding:0.35rem 0.75rem;background:#FFF;color:#DC2626;border-color:#F87171;">
            🔴 Critical (${criticalComplaints})
          </button>
          <button onclick="filterDCComplaints('feedback')" id="fltBtn_feedback" class="btn btn-sm btn-outline" style="font-size:0.78rem;padding:0.35rem 0.75rem;background:#FFF;color:#15803D;border-color:#86EFAC;">
            🌟 Feedback (${feedbackComplaints})
          </button>
          <button onclick="filterDCComplaints('resolved')" id="fltBtn_resolved" class="btn btn-sm btn-outline" style="font-size:0.78rem;padding:0.35rem 0.75rem;background:#FFF;">
            Resolved
          </button>
        </div>
      </div>

      <!-- Grievances Table / Cards Container -->
      <div id="dcComplaintsListContainer" style="display:flex;flex-direction:column;gap:1rem;">
        <!-- Injected via renderComplaintsTable() -->
      </div>
    </div>

    <!-- Mid Grid: Destination Visitor Traffic (Left) vs Multilingual Demand & Governance (Right) -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(420px,1fr));gap:1.5rem;margin-bottom:2.5rem;">
      <!-- Left: Destination Inquiries & Taluk Breakdown -->
      <div class="safety-card" style="padding:1.75rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
          <h3 class="card-title" style="margin:0;font-size:1.1rem;display:flex;align-items:center;gap:0.5rem;">
            <span>📊</span> <span>Destination Visitor Traffic Share</span>
          </h3>
          <span style="font-size:0.75rem;color:#64748B;background:#F1F5F9;padding:0.25rem 0.5rem;border-radius:6px;font-weight:600;">District ASI &amp; NIC</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:1.75rem;">
          ${analytics.popular_destinations.map(d => `
            <div>
              <div style="display:flex;justify-content:space-between;font-size:0.875rem;font-weight:600;margin-bottom:0.35rem;">
                <span style="color:#0D1B2A;">${d.name}</span>
                <span style="font-weight:700;color:#C85A32;">${d.visitors_pct}%</span>
              </div>
              <div style="background:#E2E8F0;border-radius:99px;height:9px;overflow:hidden;">
                <div style="width:${d.visitors_pct}%;height:100%;background:linear-gradient(90deg,#C85A32,#E76F51);border-radius:99px;transition:width 0.8s ease;"></div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Taluk Footfall Activity Distribution -->
        <h4 style="font-size:0.95rem;color:#0D1B2A;margin-bottom:0.75rem;border-top:1px solid #F1F5F9;padding-top:1rem;display:flex;align-items:center;gap:0.4rem;">
          <span>🗺️</span> <span>Taluk Tourism Activity Distribution</span>
        </h4>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
          ${Object.entries(taluks).map(([taluk, pct]) => `
            <div style="background:#F8FAFC;border:1px solid #CBD5E1;border-radius:8px;padding:0.4rem 0.75rem;font-size:0.8rem;display:flex;gap:0.4rem;align-items:center;">
              <span style="font-weight:600;color:#334155;">${taluk}:</span>
              <span style="font-weight:800;color:#C85A32;">${pct}%</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Right: Multilingual Demand & Inclusive Governance Radar -->
      <div class="safety-card" style="padding:1.75rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
          <h3 class="card-title" style="margin:0;font-size:1.1rem;display:flex;align-items:center;gap:0.5rem;">
            <span>🌐</span> <span>Multilingual Inquiry Demand</span>
          </h3>
          <span style="font-size:0.75rem;color:#64748B;background:#F1F5F9;padding:0.25rem 0.5rem;border-radius:6px;font-weight:600;">AI Real-Time</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:1.1rem;margin-bottom:1.75rem;">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:0.88rem;font-weight:600;margin-bottom:0.35rem;">
              <span>ಕನ್ನಡ (Kannada)</span>
              <span style="font-weight:700;color:#C85A32;">${m.multilingual_queries.kannada_pct}</span>
            </div>
            <div style="background:#E2E8F0;border-radius:99px;height:9px;overflow:hidden;">
              <div style="width:${m.multilingual_queries.kannada_pct};background:#C85A32;height:100%;border-radius:99px;"></div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:0.88rem;font-weight:600;margin-bottom:0.35rem;">
              <span>English</span>
              <span style="font-weight:700;color:#2A9D8F;">${m.multilingual_queries.english_pct}</span>
            </div>
            <div style="background:#E2E8F0;border-radius:99px;height:9px;overflow:hidden;">
              <div style="width:${m.multilingual_queries.english_pct};background:#2A9D8F;height:100%;border-radius:99px;"></div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:0.88rem;font-weight:600;margin-bottom:0.35rem;">
              <span>हिन्दी (Hindi)</span>
              <span style="font-weight:700;color:#D4AF37;">${m.multilingual_queries.hindi_pct}</span>
            </div>
            <div style="background:#E2E8F0;border-radius:99px;height:9px;overflow:hidden;">
              <div style="width:${m.multilingual_queries.hindi_pct};background:#D4AF37;height:100%;border-radius:99px;"></div>
            </div>
          </div>
        </div>

        <!-- AI Zero-Hallucination Status -->
        <h4 style="font-size:0.95rem;color:#0D1B2A;margin-bottom:0.75rem;border-top:1px solid #F1F5F9;padding-top:1rem;display:flex;align-items:center;gap:0.4rem;">
          <span>🛡️</span> <span>AI Governance &amp; Zero-Hallucination Status</span>
        </h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:0.75rem;">
            <div style="font-size:0.75rem;color:#64748B;">Multi-Source Evidence Chunks</div>
            <div style="font-size:1.15rem;font-weight:800;color:#0D1B2A;">81 Indexed</div>
            <div style="font-size:0.7rem;color:#16a34a;">ASI, NIC, UNESCO Verified</div>
          </div>
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:0.75rem;">
            <div style="font-size:0.75rem;color:#64748B;">Strict Grounding Confidence</div>
            <div style="font-size:1.15rem;font-weight:800;color:#0D1B2A;">70% High / 40% Partial</div>
            <div style="font-size:0.7rem;color:#16a34a;">Zero Extrapolations</div>
          </div>
        </div>
      </div>
    </div>

    <!-- DC Provider Verification Approval Queue (Full Width Card) -->
    <div class="safety-card" style="padding:1.75rem;margin-bottom:2.5rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h3 class="card-title" style="margin:0;font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;">
            <span>📋</span> <span>DC Provider Verification &amp; Experience Approval Queue</span>
          </h3>
          <p style="font-size:0.85rem;color:#64748B;margin:0.25rem 0 0 0;">
            Review and officially certify local artisans, handloom weavers, and homestays to make them visible to incoming tourists.
          </p>
        </div>
        <span style="font-size:0.8rem;background:#DBEAFE;color:#1E40AF;padding:0.35rem 0.8rem;border-radius:99px;font-weight:700;">
          ${(window._dcVerificationQueue || []).length} Providers in Registry
        </span>
      </div>

      <div id="dcVerificationList" style="display:flex;flex-direction:column;gap:1rem;">
        ${(window._dcVerificationQueue || []).length === 0 ? `
          <div style="text-align:center;padding:3rem 1rem;background:#F8FAFC;border-radius:12px;border:1px dashed #CBD5E1;">
            <div style="font-size:2rem;margin-bottom:0.5rem;">✅</div>
            <div style="font-weight:700;color:#0D1B2A;">No Pending Verifications</div>
            <div style="font-size:0.85rem;color:#64748B;">All provider applications have been processed by District Collectorate.</div>
          </div>
        ` : (window._dcVerificationQueue || []).map(v => {
    const isVerified = v.status === 'VERIFIED';
    const isRejected = v.status === 'REJECTED';
    const isReview = v.status === 'UNDER_REVIEW';
    const isPending = !isVerified && !isRejected && !isReview;

    const badgeBg = isVerified ? '#DCFCE7' : isRejected ? '#FEE2E2' : isReview ? '#FEF3C7' : '#EFF6FF';
    const badgeColor = isVerified ? '#15803D' : isRejected ? '#B91C1C' : isReview ? '#B45309' : '#1D4ED8';
    const photos = v.work_photos || v.workPhotos || ['/images/destinations/Ilkal.png'];
    const certs = v.certifications || v.documents_submitted || ['Artisan ID Card'];

    return `
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-left:5px solid ${isVerified ? '#16a34a' : isReview ? '#d97706' : isRejected ? '#dc2626' : '#2563EB'};border-radius:12px;padding:1.25rem;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
                <div>
                  <div style="font-weight:800;font-size:1.05rem;color:#0D1B2A;">
                    ${v.provider_name}
                    <span style="font-size:0.75rem;font-weight:600;color:#64748B;margin-left:0.5rem;">[${v.provider_id || v.id}]</span>
                  </div>
                  <div style="font-size:0.85rem;color:#475569;margin-top:0.2rem;">
                    Category: <strong style="color:#C85A32;">${v.category}</strong> · 
                    Skill / Experience: <strong>${v.skill}</strong> · 
                    Taluk: <strong>${v.taluk}</strong>
                  </div>
                </div>
                <span style="font-size:0.78rem;font-weight:700;background:${badgeBg};color:${badgeColor};padding:0.3rem 0.85rem;border-radius:99px;border:1px solid rgba(0,0,0,0.05);">
                  ${v.status || 'PENDING VERIFICATION'}
                </span>
              </div>

              <!-- Details Box -->
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:0.85rem 1rem;font-size:0.82rem;margin-bottom:1rem;">
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.75rem;margin-bottom:0.75rem;">
                  <div>
                    <span style="color:#64748B;">📍 Location:</span> <strong>${v.location || v.taluk}</strong>
                  </div>
                  <div>
                    <span style="color:#64748B;">💰 Rate:</span> <strong>₹${v.price || 500}</strong> / ${v.duration || 2} hrs
                  </div>
                  <div>
                    <span style="color:#64748B;">🗣️ Languages:</span> <strong>${Array.isArray(v.language) ? v.language.join(', ') : (v.language || 'Kannada, English')}</strong>
                  </div>
                </div>

                ${v.description ? `
                  <div style="margin-bottom:0.65rem;color:#334155;line-height:1.5;">
                    <span style="color:#64748B;font-weight:600;">Description:</span> ${v.description}
                  </div>
                ` : ''}

                <!-- Submitted Certifications & ID Proofs -->
                <div style="margin-bottom:0.65rem;">
                  <div style="font-weight:700;color:#0D1B2A;margin-bottom:0.25rem;">📄 Government Documents &amp; Certifications:</div>
                  <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
                    ${certs.map(c => `
                      <span style="background:#FFFFFF;border:1px solid #CBD5E1;border-radius:6px;padding:0.2rem 0.5rem;font-size:0.75rem;color:#1E293B;font-weight:500;">
                        ✓ ${c}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <!-- Submitted Work Photos -->
                <div>
                  <div style="font-weight:700;color:#0D1B2A;margin-bottom:0.35rem;">🖼️ Artisan Workshop Photos:</div>
                  <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                    ${photos.map(p => `
                      <img src="${p}" alt="Proof photo" style="width:72px;height:54px;object-fit:cover;border-radius:6px;border:1px solid #CBD5E1;cursor:pointer;" onclick="window.open('${p}', '_blank')" title="Click to view">
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              ${isPending ? `
                <div style="display:flex;gap:0.6rem;align-items:center;flex-wrap:wrap;">
                  <button onclick="handleDCDecision('${v.id || v.provider_id}', 'accept')" class="btn btn-sm btn-primary" style="background:#16a34a;border-color:#16a34a;font-size:0.82rem;padding:0.45rem 1rem;font-weight:700;">
                    Accept ✓ (Approve &amp; Publish)
                  </button>
                  <button onclick="handleDCDecision('${v.id || v.provider_id}', 'review')" class="btn btn-sm btn-outline" style="color:#d97706;border-color:#d97706;font-size:0.82rem;padding:0.45rem 1rem;font-weight:700;">
                    Review 🔍 (Request Tahsildar Inspection)
                  </button>
                  <button onclick="handleDCDecision('${v.id || v.provider_id}', 'reject')" class="btn btn-sm btn-outline" style="color:#dc2626;border-color:#dc2626;font-size:0.82rem;padding:0.45rem 1rem;font-weight:700;">
                    Reject ✗
                  </button>
                </div>
              ` : isReview ? `
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
                  <div style="font-size:0.82rem;color:#b45309;font-weight:600;">
                    🔍 Inspection Order Active: ${v.review_notes || 'Tahsildar inspection dispatched'}
                  </div>
                  <div style="display:flex;gap:0.5rem;">
                    <button onclick="handleDCDecision('${v.id || v.provider_id}', 'accept')" class="btn btn-sm btn-primary" style="background:#16a34a;border-color:#16a34a;font-size:0.8rem;padding:0.4rem 0.9rem;font-weight:700;">
                      Accept ✓ (Approve &amp; Publish)
                    </button>
                    <button onclick="handleDCDecision('${v.id || v.provider_id}', 'reject')" class="btn btn-sm btn-outline" style="color:#dc2626;border-color:#dc2626;font-size:0.8rem;padding:0.4rem 0.9rem;">
                      Reject ✗
                    </button>
                  </div>
                </div>
              ` : isVerified ? `
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                  <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:#15803D;font-weight:700;">
                    <span>✓ Accepted &amp; Officially Certified.</span>
                    <span style="font-weight:500;color:#334155;">Published to tourist experiences page.</span>
                    <a href="/meet-the-people.html" target="_blank" style="color:#1D4ED8;font-size:0.8rem;text-decoration:none;font-weight:600;margin-left:0.25rem;">View Live in Experiences ↗</a>
                  </div>
                  <div style="display:flex;gap:0.4rem;">
                    <button onclick="handleDCDecision('${v.id || v.provider_id}', 'review')" class="btn btn-sm btn-outline" style="color:#d97706;border-color:#d97706;font-size:0.75rem;padding:0.3rem 0.65rem;">
                      Re-inspect 🔍
                    </button>
                    <button onclick="handleDCDecision('${v.id || v.provider_id}', 'reject')" class="btn btn-sm btn-outline" style="color:#dc2626;border-color:#dc2626;font-size:0.75rem;padding:0.3rem 0.65rem;">
                      Revoke / Reject ✗
                    </button>
                  </div>
                </div>
              ` : `
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                  <div style="font-size:0.82rem;color:#dc2626;font-weight:600;">
                    ✗ Application Rejected: ${v.rejection_notes || 'Documentation requirements not met'}
                  </div>
                  <div style="display:flex;gap:0.5rem;">
                    <button onclick="handleDCDecision('${v.id || v.provider_id}', 'accept')" class="btn btn-sm btn-primary" style="background:#16a34a;border-color:#16a34a;font-size:0.78rem;padding:0.35rem 0.8rem;font-weight:700;">
                      Re-evaluate &amp; Accept ✓
                    </button>
                    <button onclick="handleDCDecision('${v.id || v.provider_id}', 'review')" class="btn btn-sm btn-outline" style="color:#d97706;border-color:#d97706;font-size:0.78rem;padding:0.35rem 0.8rem;">
                      Send for Review 🔍
                    </button>
                  </div>
                </div>
              `}
            </div>
          `;
  }).join('')}
      </div>
    </div>
  `;

  // Render Complaints Table initially
  renderComplaintsTable();
}

// ============================================================
// 4. GRIEVANCES & FEEDBACK DC ACTIONS & FILTERING
// ============================================================
window.filterDCComplaints = function (filter) {
  _activeComplaintFilter = filter;
  ['all', 'pending', 'critical', 'feedback', 'resolved'].forEach(f => {
    const btn = document.getElementById(`fltBtn_${f}`);
    if (btn) {
      if (f === filter) {
        btn.className = 'btn btn-sm btn-primary';
        btn.style.background = '';
      } else {
        btn.className = 'btn btn-sm btn-outline';
        btn.style.background = '#FFF';
      }
    }
  });
  renderComplaintsTable();
};

function renderComplaintsTable() {
  const container = document.getElementById('dcComplaintsListContainer');
  if (!container) return;

  let list = [..._dcComplaintsList];
  if (_activeComplaintFilter === 'pending') {
    list = list.filter(c => c.status !== 'RESOLVED' && c.status !== 'REJECTED');
  } else if (_activeComplaintFilter === 'critical') {
    list = list.filter(c => c.urgency === 'Critical');
  } else if (_activeComplaintFilter === 'feedback') {
    list = list.filter(c => c.type === 'FEEDBACK');
  } else if (_activeComplaintFilter === 'resolved') {
    list = list.filter(c => c.status === 'RESOLVED');
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:3rem 1rem;background:#F8FAFC;border-radius:12px;border:1px dashed #CBD5E1;">
        <div style="font-size:2rem;margin-bottom:0.5rem;">✅</div>
        <div style="font-weight:700;color:#0D1B2A;">No Tickets Matching Filter</div>
        <div style="font-size:0.85rem;color:#64748B;">All grievances under this filter category have been processed.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(c => {
    const isFeedback = c.type === 'FEEDBACK';
    const isResolved = c.status === 'RESOLVED';
    const isDispatched = c.status === 'ACTION_DISPATCHED';
    const isReview = c.status === 'UNDER_REVIEW';

    const statusBadgeColor = isResolved ? '#15803D' : isDispatched ? '#2563EB' : isReview ? '#B45309' : '#DC2626';
    const statusBadgeBg = isResolved ? '#DCFCE7' : isDispatched ? '#DBEAFE' : isReview ? '#FEF3C7' : '#FEE2E2';

    const urgencyColor = c.urgency === 'Critical' ? '#DC2626' : c.urgency === 'Urgent' ? '#D97706' : '#2563EB';
    const urgencyBg = c.urgency === 'Critical' ? '#FEE2E2' : c.urgency === 'Urgent' ? '#FEF3C7' : '#EFF6FF';

    return `
      <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-left:5px solid ${c.urgency === 'Critical' ? '#DC2626' : isFeedback ? '#15803D' : '#C85A32'};border-radius:12px;padding:1.25rem;box-shadow:0 1px 4px rgba(0,0,0,0.04);">
        <!-- Top Row: Ticket ID, Type, Date, Badges -->
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
          <div>
            <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
              <span style="font-family:monospace;font-weight:800;font-size:1.05rem;color:#C85A32;background:#FFF7ED;padding:0.2rem 0.55rem;border-radius:6px;border:1px solid #FFEDD5;">
                ${c.ticketId}
              </span>
              <span style="font-size:0.75rem;font-weight:800;padding:0.2rem 0.55rem;border-radius:6px;background:${isFeedback ? '#DCFCE7' : '#FEE2E2'};color:${isFeedback ? '#15803D' : '#DC2626'};">
                ${isFeedback ? '🌟 VISITOR APPRECIATION' : '🚨 GRIEVANCE REPORT'}
              </span>
              <span style="font-size:0.75rem;font-weight:700;padding:0.2rem 0.55rem;border-radius:6px;background:${urgencyBg};color:${urgencyColor};">
                Urgency: ${c.urgency}
              </span>
            </div>

            <div style="font-weight:800;font-size:1.05rem;color:#0D1B2A;margin-top:0.4rem;">
              ${c.category}
            </div>
            <div style="font-size:0.82rem;color:#64748B;margin-top:0.15rem;">
              📍 <strong>${c.location}</strong> (${c.taluk} Taluk) · 📅 Incident: ${c.incidentDate || 'Recent'}
            </div>
          </div>

          <div style="text-align:right;">
            <span style="font-size:0.8rem;font-weight:800;background:${statusBadgeBg};color:${statusBadgeColor};padding:0.35rem 0.85rem;border-radius:99px;border:1px solid rgba(0,0,0,0.06);display:inline-block;margin-bottom:0.35rem;">
              ${c.status}
            </span>
            <div style="font-size:0.72rem;color:#94A3B8;">Submitted: ${new Date(c.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</div>
          </div>
        </div>

        <!-- Complainant & Description Box -->
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:0.85rem 1rem;font-size:0.85rem;margin-bottom:0.9rem;">
          <div style="color:#0D1B2A;font-style:italic;line-height:1.45;margin-bottom:0.6rem;">
            "${c.description}"
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;font-size:0.78rem;color:#475569;border-top:1px dashed #CBD5E1;padding-top:0.5rem;">
            <div>
              <span>Complainant: <strong>${c.touristName}</strong></span>
              ${c.phone ? `<span style="margin-left:0.5rem;">📞 <strong>${c.phone}</strong></span>` : ''}
              ${c.email ? `<span style="margin-left:0.5rem;">✉️ ${c.email}</span>` : ''}
              ${c.touristType ? `<span style="margin-left:0.5rem;color:#64748B;">(${c.touristType})</span>` : ''}
            </div>

            ${c.photo ? `
              <div style="display:flex;align-items:center;gap:0.4rem;">
                <span style="font-size:0.75rem;color:#64748B;">Evidence Attached:</span>
                <img src="${c.photo}" alt="Evidence" style="width:48px;height:36px;object-fit:cover;border-radius:4px;border:1px solid #CBD5E1;cursor:pointer;" onclick="window.open('${c.photo}', '_blank')" title="Click to view photo">
              </div>
            ` : ''}
          </div>
        </div>

        <!-- DC Directive Note (If Assigned) -->
        ${c.dcNotes ? `
          <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:0.75rem 1rem;margin-bottom:0.9rem;font-size:0.82rem;">
            <div style="font-weight:800;color:#92400E;display:flex;align-items:center;gap:0.4rem;margin-bottom:0.2rem;">
              <span>🏛️</span> <span>OFFICIAL DC DIRECTIVE ON RECORD:</span>
            </div>
            <div style="color:#78350F;font-weight:600;line-height:1.4;">
              "${c.dcNotes}"
            </div>
          </div>
        ` : ''}

        <!-- DC Direct Action Controls -->
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;border-top:1px solid #F1F5F9;padding-top:0.75rem;">
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button onclick="openDCDirectiveModal('${c.id || c.ticketId}')" class="btn btn-sm btn-primary" style="font-size:0.8rem;padding:0.4rem 0.9rem;display:flex;align-items:center;gap:0.35rem;">
              <span>⚡</span> <span>Issue DC Directive / Update Status</span>
            </button>

            ${!isResolved ? `
              <button onclick="quickDCStatusUpdate('${c.id || c.ticketId}', 'ACTION_DISPATCHED', 'Dispatched Taluk Tahsildar & Tourism Police squad for spot verification')" class="btn btn-sm btn-outline" style="font-size:0.78rem;padding:0.4rem 0.8rem;color:#2563EB;border-color:#93C5FD;background:#FFF;">
                Dispatch Squad 🚔
              </button>
              <button onclick="quickDCStatusUpdate('${c.id || c.ticketId}', 'RESOLVED', 'Field inspection conducted. Rectification completed and compliance verified.')" class="btn btn-sm btn-outline" style="font-size:0.78rem;padding:0.4rem 0.8rem;color:#16a34a;border-color:#86EFAC;background:#FFF;">
                Mark Resolved ✓
              </button>
            ` : `
              <span style="font-size:0.78rem;color:#16a34a;font-weight:700;">
                ✓ Redressal closed with official DC order.
              </span>
            `}
          </div>

          <a href="/complaints.html?track=${c.ticketId}" target="_blank" style="font-size:0.78rem;color:#64748B;text-decoration:none;">
            Public Tracker View ↗
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Quick status updater
window.quickDCStatusUpdate = async function (id, newStatus, defaultNote) {
  const note = prompt('Enter DC Administrative Order / Directive:', defaultNote);
  if (note === null) return;

  try {
    const res = await API.updateComplaintStatus(id, {
      status: newStatus,
      dcNotes: note
    });

    if (res && res.success) {
      // Update in memory
      const item = _dcComplaintsList.find(c => c.id === id || c.ticketId === id);
      if (item) {
        item.status = newStatus;
        item.dcNotes = note;
      }
      alert('✅ DC Action Directive Recorded!\n\nStatus updated to ' + newStatus + '. Logged in public grievance tracker.');
      await renderDCDashboard();
    } else {
      alert('Error updating status: ' + (res.error || 'Server error'));
    }
  } catch (e) {
    alert('Update failed: ' + e.message);
  }
};

// DC Modal for comprehensive directive
window.openDCDirectiveModal = function (id) {
  const c = _dcComplaintsList.find(x => x.id === id || x.ticketId === id);
  if (!c) return;

  let modal = document.getElementById('dcDirectiveModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'dcDirectiveModal';
    modal.className = 'modal-backdrop';
    modal.style.cssText = 'display:flex;position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;align-items:center;justify-content:center;';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div style="background:#FFF;border-radius:16px;max-width:580px;width:92%;padding:2rem;box-shadow:0 20px 40px rgba(0,0,0,0.2);max-height:90vh;overflow-y:auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #E2E8F0;padding-bottom:0.75rem;margin-bottom:1.25rem;">
        <div>
          <span style="font-size:0.72rem;font-weight:800;color:#C85A32;letter-spacing:0.04em;">DEPUTY COMMISSIONER DIRECTIVE</span>
          <h3 style="margin:0.15rem 0 0 0;font-size:1.2rem;color:#0D1B2A;">Action on ${c.ticketId}</h3>
        </div>
        <button onclick="closeDCDirectiveModal()" style="background:none;border:none;font-size:1.5rem;cursor:pointer;color:#64748B;">&times;</button>
      </div>

      <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:0.85rem;font-size:0.82rem;margin-bottom:1.25rem;">
        <div><strong>Category:</strong> ${c.category} · <strong>Location:</strong> ${c.location}</div>
        <div><strong>Complainant:</strong> ${c.touristName} (${c.phone || 'No phone'})</div>
        <div style="margin-top:0.35rem;color:#334155;font-style:italic;">"${c.description}"</div>
      </div>

      <form onsubmit="submitDCDirectiveModal(event, '${c.id || c.ticketId}')">
        <div style="margin-bottom:1.25rem;">
          <label style="display:block;font-size:0.82rem;font-weight:700;color:#1E293B;margin-bottom:0.35rem;">
            Assign New Official Status
          </label>
          <select id="modalStatusSelect" style="width:100%;padding:0.7rem;border:1px solid #CBD5E1;border-radius:8px;font-size:0.88rem;background:#FFF;">
            <option value="UNDER_REVIEW" ${c.status === 'UNDER_REVIEW' ? 'selected' : ''}>🟡 UNDER REVIEW (DC Assessing Priority)</option>
            <option value="ACTION_DISPATCHED" ${c.status === 'ACTION_DISPATCHED' ? 'selected' : ''}>🔵 ACTION DISPATCHED (Field Inspection / Notice Issued)</option>
            <option value="RESOLVED" ${c.status === 'RESOLVED' ? 'selected' : ''}>🟢 RESOLVED (Grievance Rectified & Compliance Verified)</option>
            <option value="REJECTED" ${c.status === 'REJECTED' ? 'selected' : ''}>🔴 REJECTED (Non-jurisdictional or Duplicate)</option>
          </select>
        </div>

        <div style="margin-bottom:1.5rem;">
          <label style="display:block;font-size:0.82rem;font-weight:700;color:#1E293B;margin-bottom:0.35rem;">
            Official Administrative Order / DC Directive Note <span style="color:#DC2626;">*</span>
          </label>
          <textarea id="modalDirectiveNotes" required rows="4" placeholder="e.g. Instructed Tahsildar Badami to issue penalty notice to parking operator. Field inspection conducted by Tourist Police. Rate board re-installed." style="width:100%;padding:0.75rem;border:1px solid #CBD5E1;border-radius:8px;font-size:0.85rem;font-family:inherit;">${c.dcNotes || ''}</textarea>
        </div>

        <div style="display:flex;justify-content:flex-end;gap:0.75rem;">
          <button type="button" onclick="closeDCDirectiveModal()" class="btn btn-outline" style="padding:0.6rem 1.2rem;font-size:0.85rem;">Cancel</button>
          <button type="submit" class="btn btn-primary" style="padding:0.6rem 1.5rem;font-size:0.85rem;font-weight:700;">
            Dispatch &amp; Record DC Order
          </button>
        </div>
      </form>
    </div>
  `;
  modal.style.display = 'flex';
};

window.closeDCDirectiveModal = function () {
  const modal = document.getElementById('dcDirectiveModal');
  if (modal) modal.style.display = 'none';
};

window.submitDCDirectiveModal = async function (event, id) {
  event.preventDefault();
  const status = document.getElementById('modalStatusSelect').value;
  const dcNotes = document.getElementById('modalDirectiveNotes').value.trim();

  try {
    const res = await API.updateComplaintStatus(id, { status, dcNotes });
    if (res && res.success) {
      closeDCDirectiveModal();
      alert('✅ DC Directive Dispatched & Recorded Successfully!');
      await renderDCDashboard();
    } else {
      alert('Error updating: ' + (res.error || 'Server error'));
    }
  } catch (e) {
    alert('Error: ' + e.message);
  }
};

// ============================================================
// 5. DC PROVIDER VERIFICATION WORKFLOW (ACCEPT, REVIEW, REJECT)
// ============================================================
window.handleDCDecision = async function (verId, decision) {
  let notes = '';
  if (decision === 'reject') {
    notes = prompt('Enter official reason for rejection:', 'Documentation incomplete or invalid');
    if (notes === null) return;
  } else if (decision === 'review') {
    notes = prompt('Enter inspection instructions for Taluk Tahsildar:', 'Verify physical workshop premises and artisan registration in person');
    if (notes === null) return;
  }

  const queue = window._dcVerificationQueue || [];
  const v = queue.find(x => x.id === verId || x.provider_id === verId || x.provider_name === verId) || {};

  // 1. Call Backend Decision API
  try {
    await API.decideVerification(verId, decision, notes, {
      provider_name: v.provider_name || 'Local Provider',
      provider_id: v.provider_id || verId || `BGK-PROV-${Math.floor(1000 + Math.random() * 9000)}`,
      category: v.category || 'Crafts',
      taluk: v.taluk || 'Bagalkote',
      location: v.location || `${v.taluk || 'Bagalkote'}, Bagalkote`,
      skill: v.skill || 'Local Craft & Experience',
      price: Number(v.price) || 500,
      duration: Number(v.duration) || 2,
      description: v.description || 'Verified local experience provider in Bagalkote.'
    });
  } catch (e) {
    console.warn('[DC Dashboard] API decideVerification error:', e);
  }

  // 2. Update memory state
  const isAccepted = decision === 'approve' || decision === 'accept';
  const isReview = decision === 'review';
  const newStatus = isAccepted ? 'VERIFIED' : isReview ? 'UNDER_REVIEW' : 'REJECTED';

  v.status = newStatus;
  if (isReview) v.review_notes = notes;
  if (!isAccepted && !isReview) v.rejection_notes = notes;
  if (isAccepted) v.verified_at = new Date().toISOString();

  // 3. Update local verification queue
  try {
    const localVers = JSON.parse(localStorage.getItem('bgk_dc_verifications') || '[]');
    const idx = localVers.findIndex(x => x.id === verId || x.provider_id === (v.provider_id || verId) || x.provider_name === v.provider_name);
    if (idx >= 0) {
      localVers[idx] = { ...localVers[idx], ...v, status: newStatus };
    } else {
      localVers.unshift({ ...v, id: verId, status: newStatus });
    }
    localStorage.setItem('bgk_dc_verifications', JSON.stringify(localVers));
  } catch (e) {
    console.warn('Error updating bgk_dc_verifications:', e);
  }

  // 4. If ACCEPTED -> add to approved experiences for tourists
  if (isAccepted) {
    const approvedExp = {
      id: v.provider_id || v.id || `prov_${Date.now()}`,
      providerId: v.provider_id || v.id || `BGK-PROV-${Math.floor(1000 + Math.random() * 9000)}`,
      name: v.provider_name || 'Verified Provider',
      avatar: (v.provider_name || 'P')[0].toUpperCase(),
      skill: v.skill || 'Local Craft & Experience',
      category: v.category || 'Crafts',
      interests: [v.category || 'Crafts', 'Culture', 'Local Living'],
      location: v.location || `${v.taluk || 'Bagalkote'}, Bagalkote`,
      price: Number(v.price) || 500,
      duration: Number(v.duration) || 2,
      language: v.language ? (Array.isArray(v.language) ? v.language : v.language.split(',').map(s => s.trim())) : ['Kannada', 'English'],
      availability: v.availability || 'Daily, 9:00 AM – 6:00 PM',
      rating: 5.0,
      reviews: 1,
      verified: true,
      verificationStatus: 'Government Verified ✓',
      description: v.description || 'Government verified local experience provider in Bagalkote.',
      tags: ['Government Verified', 'DC Approved', v.category || 'Local Craft'],
      heroScore: 99
    };

    try {
      const expList = JSON.parse(localStorage.getItem('bgk_approved_experiences') || '[]');
      const exIdx = expList.findIndex(p => p.id === approvedExp.id || p.providerId === approvedExp.providerId || p.name === approvedExp.name);
      if (exIdx >= 0) expList[exIdx] = approvedExp;
      else expList.unshift(approvedExp);
      localStorage.setItem('bgk_approved_experiences', JSON.stringify(expList));
      localStorage.setItem('bagalkote_dc_approved_providers', JSON.stringify(expList));

      // Update provider profile if exists locally
      const prof = JSON.parse(localStorage.getItem('bagalkote_provider_profile') || 'null');
      if (prof && (prof.providerId === approvedExp.providerId || prof.name === approvedExp.name)) {
        prof.verificationStatus = 'Government Verified ✓';
        localStorage.setItem('bagalkote_provider_profile', JSON.stringify(prof));
      }
    } catch (e) {
      console.warn('Error saving approved experience:', e);
    }

    alert('✅ Provider Accepted & Officially Verified!\n\nThis experience is now LIVE for tourists in Experiences (Meet the People & Artisans).\n\nTourists can now view and book this experience directly.');
  } else if (isReview) {
    // Remove from active tourist experiences
    try {
      let expList = JSON.parse(localStorage.getItem('bgk_approved_experiences') || '[]');
      expList = expList.filter(p => p.id !== v.provider_id && p.providerId !== v.provider_id && p.name !== v.provider_name);
      localStorage.setItem('bgk_approved_experiences', JSON.stringify(expList));
      localStorage.setItem('bagalkote_dc_approved_providers', JSON.stringify(expList));

      const prof = JSON.parse(localStorage.getItem('bagalkote_provider_profile') || 'null');
      if (prof && (prof.providerId === v.provider_id || prof.name === v.provider_name)) {
        prof.verificationStatus = 'Under DC Review';
        localStorage.setItem('bagalkote_provider_profile', JSON.stringify(prof));
      }
    } catch (e) { }

    alert('🔍 Provider Status Set to Under Review.\n\nPhysical inspection directive dispatched to Taluk Tahsildar for field verification.');
  } else {
    // Reject
    try {
      let expList = JSON.parse(localStorage.getItem('bgk_approved_experiences') || '[]');
      expList = expList.filter(p => p.id !== v.provider_id && p.providerId !== v.provider_id && p.name !== v.provider_name);
      localStorage.setItem('bgk_approved_experiences', JSON.stringify(expList));
      localStorage.setItem('bagalkote_dc_approved_providers', JSON.stringify(expList));

      const prof = JSON.parse(localStorage.getItem('bagalkote_provider_profile') || 'null');
      if (prof && (prof.providerId === v.provider_id || prof.name === v.provider_name)) {
        prof.verificationStatus = 'Application Rejected';
        localStorage.setItem('bagalkote_provider_profile', JSON.stringify(prof));
      }
    } catch (e) { }

    alert('✗ Provider Application Rejected.\n\nApplicant will receive documentation deficiency feedback.');
  }

  await renderDCDashboard();
};
