/**
 * Module 26: Admin / District Commissioner Dashboard
 * "BAGALKOTE TOURISM INTELLIGENCE DASHBOARD"
 */

function initAdminDashboard() {
  const navBtn = document.getElementById('navAdminBtn');
  const modal = document.getElementById('adminDashboardModal');
  const closeBtn = document.getElementById('closeAdminModalBtn');

  if (navBtn) {
    navBtn.addEventListener('click', (e) => {
      // Direct navigation to dedicated scrollable DC Dashboard page
      window.location.href = '/dc-dashboard.html';
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => {
    if (modal) modal.classList.remove('active');
  });
}

async function openAdminModal() {
  const modal = document.getElementById('adminDashboardModal');
  const body = document.getElementById('adminBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <p style="color: #64748B;">Loading real-time tourism intelligence data...</p>
    </div>
  `;
  modal.classList.add('active');

  const analytics = await API.getAdminAnalytics();

  if (!analytics) {
    body.innerHTML = `<p style="color: #E63946;">Failed to load administrative analytics.</p>`;
    return;
  }

  body.innerHTML = `
    <div class="admin-dashboard-container">
      <!-- Simulated Data Disclaimer Banner -->
      <div style="background: #FEF3C7; border: 1px solid #FCD34D; border-radius: 8px; padding: 0.75rem 1.25rem; font-size: 0.8rem; font-weight: 700; color: #92400E; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; gap: 1rem; flex-wrap: wrap;">
        <span>⚠️ ${analytics.disclaimer}</span>
        <div style="display:flex;gap:0.5rem;align-items:center;">
          <span class="demo-badge">PROTOTYPE MODE</span>
          <a href="/dc-dashboard.html" class="btn btn-sm btn-primary" style="font-size:0.75rem;padding:0.3rem 0.75rem;text-decoration:none;">Open Full Page ↗</a>
        </div>
      </div>

      <!-- Key Administrative KPI Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1.25rem; border-radius: 12px;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #64748B; text-transform: uppercase;">Annual Tourist Flow</div>
          <div style="font-size: 1.75rem; font-weight: 900; color: #0D1B2A; margin: 0.2rem 0;">${analytics.metrics.total_tourists_projected_annual}</div>
          <div style="font-size: 0.7rem; color: #059669;">+14.2% YoY Growth</div>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1.25rem; border-radius: 12px;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #64748B; text-transform: uppercase;">Weaver Cooperatives</div>
          <div style="font-size: 1.75rem; font-weight: 900; color: #C85A32; margin: 0.2rem 0;">${analytics.metrics.active_weaver_cooperatives}</div>
          <div style="font-size: 0.7rem; color: #64748B;">Ilkal & Guledagudda</div>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1.25rem; border-radius: 12px;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #64748B; text-transform: uppercase;">AI Skill Matches</div>
          <div style="font-size: 1.75rem; font-weight: 900; color: #2A9D8F; margin: 0.2rem 0;">${analytics.metrics.ai_skill_matches_completed}</div>
          <div style="font-size: 0.7rem; color: #059669;">94% Positive Feedback</div>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1.25rem; border-radius: 12px;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #64748B; text-transform: uppercase;">Accessibility Requests</div>
          <div style="font-size: 1.75rem; font-weight: 900; color: #D4AF37; margin: 0.2rem 0;">${analytics.metrics.accessibility_inquiries_pct}</div>
          <div style="font-size: 0.7rem; color: #64748B;">Elderly & Wheelchair</div>
        </div>
      </div>

      <!-- Language & Taluk Demand Breakdown -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <!-- Language Demand -->
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.5rem;">
          <h4 style="font-size: 1rem; color: #0D1B2A; margin-bottom: 1rem;">Language Demand Share</h4>
          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>ಕನ್ನಡ (Kannada)</span>
                <span>${analytics.metrics.multilingual_queries.kannada_pct}</span>
              </div>
              <div style="height: 8px; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="width: 52%; height: 100%; background: #C85A32;"></div>
              </div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>English</span>
                <span>${analytics.metrics.multilingual_queries.english_pct}</span>
              </div>
              <div style="height: 8px; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="width: 31%; height: 100%; background: #D4AF37;"></div>
              </div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>हिन्दी (Hindi)</span>
                <span>${analytics.metrics.multilingual_queries.hindi_pct}</span>
              </div>
              <div style="height: 8px; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="width: 17%; height: 100%; background: #2A9D8F;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Destination Traffic Share -->
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.5rem;">
          <h4 style="font-size: 1rem; color: #0D1B2A; margin-bottom: 1rem;">Top Tourist Inquiries by Destination</h4>
          <ul style="list-style: none; font-size: 0.85rem; color: #334155; display: flex; flex-direction: column; gap: 0.5rem;">
            ${analytics.popular_destinations.map(d => `
              <li style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #E2E8F0; padding-bottom: 0.35rem;">
                <span><strong>${d.name}</strong></span>
                <span style="font-weight: 700; color: #C85A32;">${d.visitors_pct}%</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Verification Queue -->
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h4 style="font-size: 1rem; color: #0D1B2A;">Provider Verification Approval Queue</h4>
          <span style="font-size: 0.775rem; color: #64748B;">2 Pending District Verifications</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          ${analytics.verification_queue.map(q => `
            <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1rem 1.25rem; border-radius: 8px;">
              <div>
                <strong style="color: #0D1B2A;">${q.provider_name}</strong>
                <div style="font-size: 0.775rem; color: #64748B;">Category: ${q.category} | Taluk: ${q.taluk} | Docs: ${q.documents_submitted.join(', ')}</div>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button class="btn btn-sm btn-primary" onclick="alert('Provider ${q.provider_name} approved! Verified badge issued.')">Approve ✓</button>
                <button class="btn btn-sm btn-outline" onclick="alert('Inspection requested for ${q.provider_name} via Taluk Tahsildar.')">Inspect</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
