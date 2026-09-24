// safety-page.js
document.addEventListener('DOMContentLoaded', () => {
  const c = document.getElementById('safetyPageContainer');
  if (!c) return;

  c.innerHTML = `
    <div class="safety-grid">
      <!-- 24x7 Helplines -->
      <div class="safety-card emergency-helpline-card">
        <div class="card-icon">🚨</div>
        <h3 class="card-title">24x7 Emergency Helplines</h3>
        <p class="card-desc">Toll-free emergency contacts managed by Bagalkote District Administration &amp; Government of Karnataka.</p>
        <ul class="helpline-list">
          <li><strong>1077</strong>: District Disaster &amp; Emergency (Toll-Free)</li>
          <li><strong>112</strong>: Universal Emergency &amp; Police Response</li>
          <li><strong>08354-236240</strong>: District Control Room (DC Office)</li>
          <li><strong>08354-235077</strong>: Superintendent of Police (SP) Office</li>
          <li><strong>104</strong>: Karnataka Health Helpline &amp; Medical Advice</li>
          <li><strong>1033</strong>: NHAI Highway Emergency (NH-50)</li>
          <li><strong>1091</strong>: Women Helpline / Emergency Assistance</li>
        </ul>
        <div class="safety-note">✓ Verified against official district directory</div>
      </div>

      <!-- Hospitals -->
      <div class="safety-card hospital-card">
        <div class="card-icon">🏥</div>
        <h3 class="card-title">Multi-Specialty Trauma Hospitals</h3>
        <p class="card-desc">Major hospital facilities with 24x7 emergency departments and ambulance fleets.</p>
        <div class="hospital-item">
          <h4>Hangal Sri Kumareshwara Hospital</h4>
          <p class="hosp-loc">Navanagar, Bagalkote — Ph: <strong>08354-235360</strong></p>
          <span class="hosp-tag">Tertiary Trauma Care</span>
        </div>
        <div class="hospital-item">
          <h4>Kerudi Hospital &amp; Research Centre</h4>
          <p class="hosp-loc">Bagalkote Town — Ph: <strong>08354-221233</strong></p>
          <span class="hosp-tag">24x7 Emergency Unit</span>
        </div>
        <div class="safety-note">✓ Verified against Bagalkote Health Directory</div>
      </div>

      <!-- Safety Advisory -->
      <div class="safety-card advisory-card">
        <div class="card-icon">🛡️</div>
        <h3 class="card-title">Travel Advisories (Women &amp; Seniors)</h3>
        <ul class="advisories-list">
          <li><strong>Visiting Hours</strong>: Tour ASI monuments between sunrise and sunset; avoid isolated cliff tracks after dark.</li>
          <li><strong>Monkey Alert</strong>: Exercise caution around Badami caves; do not carry visible open food packets.</li>
          <li><strong>Hydration</strong>: High daytime temperatures from March to June; carry electrolyte packets and hats.</li>
          <li><strong>Footwear</strong>: Rock-cut steps can be slippery; use shoes with sturdy rubber grip.</li>
          <li><strong>No Route Guaranteed 100% Safe</strong>: Travel using authorized KSRTC buses and licensed taxis.</li>
        </ul>
        <div class="safety-note">Source: Karnataka Tourism &amp; Police Advisories</div>
      </div>
    </div>
  `;
});
