/**
 * Modules 24 & 25: Provider Portal & Dashboard
 * Local Community Empowerment System
 */

function initProviderPortal() {
  const navBtn = document.getElementById('navProviderBtn');
  const modal = document.getElementById('providerPortalModal');
  const closeBtn = document.getElementById('closeProviderModalBtn');

  if (navBtn) navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openProviderModal();
  });

  if (closeBtn) closeBtn.addEventListener('click', () => {
    if (modal) modal.classList.remove('active');
  });
}

function openProviderModal() {
  const modal = document.getElementById('providerPortalModal');
  const body = document.getElementById('providerBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="provider-dashboard-view">
      <!-- Top Profile Overview -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1.25rem 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
        <div>
          <span style="font-size: 0.75rem; font-weight: 800; color: #0F766E; text-transform: uppercase;">REGISTERED COOPERATIVE PROVIDER</span>
          <h3 style="font-size: 1.3rem; color: #0D1B2A; margin: 0.2rem 0;">Ilkal Saree Weavers' Co-operative Production Society</h3>
          <p style="font-size: 0.85rem; color: #64748B;">Category: Handloom Weaving | Taluk: Ilkal | Authorized GI User</p>
        </div>
        <div>
          <span class="verified-badge" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">✓ VERIFIED PROVIDER</span>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 8px; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 900; color: #C85A32;">88%</div>
          <div style="font-size: 0.75rem; color: #64748B; font-weight: 600;">Profile Health</div>
        </div>
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 8px; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 900; color: #0D1B2A;">420</div>
          <div style="font-size: 0.75rem; color: #64748B; font-weight: 600;">Monthly Views</div>
        </div>
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 8px; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 900; color: #10B981;">18</div>
          <div style="font-size: 0.75rem; color: #64748B; font-weight: 600;">Tourist Inquiries</div>
        </div>
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 8px; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 900; color: #D4AF37;">96/100</div>
          <div style="font-size: 0.75rem; color: #64748B; font-weight: 600;">AI Match Score</div>
        </div>
      </div>

      <!-- AI-Generated Growth Suggestions -->
      <div style="background: #FEF3C7; border: 1px solid #FCD34D; border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 800; color: #92400E; font-size: 0.85rem; margin-bottom: 0.5rem;">
          <span>✨ AI-GENERATED SUGGESTIONS FOR YOUR LISTING</span>
        </div>
        <ul style="list-style: none; font-size: 0.85rem; color: #78350F; display: flex; flex-direction: column; gap: 0.35rem;">
          <li>💡 <strong>Add Experience Duration:</strong> Specify that your pit-loom weaving demonstration lasts 45 minutes to improve match accuracy.</li>
          <li>💡 <strong>Add Kannada Audio Clips:</strong> 52% of tourists prefer Kannada descriptions for local loom techniques.</li>
          <li>💡 <strong>Upload Weaving Video:</strong> Listings with live loom video experience 3.4x higher tourist inquiries.</li>
        </ul>
      </div>

      <!-- Registered Products & Services -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: #0D1B2A; margin-bottom: 0.75rem;">Verified Services & Experiences</h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; background: #FFFFFF; border: 1px solid #E2E8F0; padding: 0.85rem 1rem; border-radius: 8px;">
            <div>
              <strong>Ilkal Saree Pit-Loom Weaving Demonstration</strong>
              <div style="font-size: 0.775rem; color: #64748B;">Duration: 1 Hour | Languages: Kannada, English, Hindi</div>
            </div>
            <span class="verified-badge">ACTIVE</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; background: #FFFFFF; border: 1px solid #E2E8F0; padding: 0.85rem 1rem; border-radius: 8px;">
            <div>
              <strong>Authentic GI Saree Sales Counter</strong>
              <div style="font-size: 0.775rem; color: #64748B;">Silk Mark & Handloom Mark Certified Products</div>
            </div>
            <span class="verified-badge">ACTIVE</span>
          </div>
        </div>
      </div>

      <!-- Onboard New Provider Action -->
      <div style="border-top: 1px solid #E2E8F0; padding-top: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.85rem; color: #64748B;">Want to register a new local artisan guild or homestay?</span>
        <button class="btn btn-sm btn-primary" onclick="alert('Provider Onboarding Form: Please submit your society registration and Gram Panchayat NOC to the District Handloom Committee.')">+ Register New Provider</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}
