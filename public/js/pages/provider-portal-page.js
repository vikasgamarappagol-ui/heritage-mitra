// provider-portal-page.js
document.addEventListener('DOMContentLoaded', () => {
  const c = document.getElementById('providerPageContainer');
  if (!c) return;

  // Inject the provider body div that provider-portal.js expects
  c.innerHTML = `<div id="providerBody"></div>`;

  if (typeof initProviderPortal === 'function') {
    initProviderPortal();
  } else {
    c.innerHTML = `
      <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:16px;padding:2.5rem;box-shadow:0 4px 30px rgba(0,0,0,0.08);">
        <span class="section-kicker">LOCAL COMMUNITY EMPOWERMENT</span>
        <h2 class="section-title" style="margin-bottom:1rem;">Register as a Local Provider</h2>
        <p style="color:#64748B;margin-bottom:2rem;">Join the verified Bagalkote Tourism Network as a homestay, khanavali, guide, weaving cooperative, or local business.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem;">
          <div style="background:#FDF8F0;border:1px solid #E2C9A0;border-radius:12px;padding:1.25rem;text-align:center;">
            <div style="font-size:2rem;margin-bottom:0.5rem;">🧵</div>
            <strong>Artisan / Cooperative</strong>
            <p style="font-size:0.82rem;color:#64748B;margin-top:0.35rem;">Weavers, embroidery groups, handicraft sellers</p>
          </div>
          <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:1.25rem;text-align:center;">
            <div style="font-size:2rem;margin-bottom:0.5rem;">🏠</div>
            <strong>Homestay / Lodge</strong>
            <p style="font-size:0.82rem;color:#64748B;margin-top:0.35rem;">Certified rural homestays and lodges</p>
          </div>
          <div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:12px;padding:1.25rem;text-align:center;">
            <div style="font-size:2rem;margin-bottom:0.5rem;">🧭</div>
            <strong>Local Guide</strong>
            <p style="font-size:0.82rem;color:#64748B;margin-top:0.35rem;">Licensed monument and cultural guides</p>
          </div>
          <div style="background:#FFF5F5;border:1px solid #FECACA;border-radius:12px;padding:1.25rem;text-align:center;">
            <div style="font-size:2rem;margin-bottom:0.5rem;">🍲</div>
            <strong>Khanavali / Restaurant</strong>
            <p style="font-size:0.82rem;color:#64748B;margin-top:0.35rem;">Traditional North Karnataka cuisine providers</p>
          </div>
        </div>
        <button class="btn btn-primary" style="width:100%;" onclick="alert('Provider registration form coming soon. Contact: tourism@bagalkote.nic.in')">
          Start Registration Process
        </button>
      </div>
    `;
  }
});
