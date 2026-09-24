// artisans-page.js — Artisans sub-page controller
document.addEventListener('DOMContentLoaded', async () => {
  const c = document.getElementById('artisansPageContainer');
  if (!c) return;

  c.innerHTML = `
    <div class="section-header-row" style="margin-bottom:1.5rem;">
      <div>
        <span class="section-kicker">MODULE 8: LOCAL ARTISANS</span>
        <h2 class="section-title">DISCOVER LOCAL CRAFTS &amp; ARTISANS</h2>
        <p class="section-subtitle">Verified handloom cooperatives and GI-tagged craft practitioners.</p>
      </div>
      <div class="artisan-badge-note">
        <span class="verified-badge">✓ SOURCE VERIFIED</span>
        <span class="demo-badge">DEMO DATA LABELED</span>
      </div>
    </div>
    <div class="artisans-grid" id="artisansGrid">
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    </div>
  `;

  const res = await API.getArtisans();
  const artisans = res.data || [];

  document.getElementById('artisansGrid').innerHTML = artisans.map(a => {
    const isDemo = a.verification_status === 'DEMO_DATA';
    const badge = isDemo
      ? `<span class="demo-badge">DEMO PROVIDER — NOT REAL</span>`
      : `<span class="verified-badge">✓ SOURCE VERIFIED</span>`;

    const contactSafe = (a.contact_info || '').replace(/'/g, "\\'");
    const nameSafe = (a.name || '').replace(/'/g, "\\'");

    return `
      <div class="artisan-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.75rem;">
          <span style="font-size:0.75rem;font-weight:800;color:#C85A32;letter-spacing:0.08em;text-transform:uppercase;">${a.category}</span>
          ${badge}
        </div>
        <h3 style="font-family:'Cinzel',serif;font-size:1.2rem;color:#0D1B2A;margin-bottom:0.35rem;">${a.name}</h3>
        <p style="font-size:0.85rem;color:#64748B;margin-bottom:0.75rem;">📍 ${a.location}</p>
        <p style="font-size:0.9rem;color:#334155;margin-bottom:1rem;line-height:1.5;">${a.description}</p>
        <div style="background:#F8FAFC;padding:0.85rem;border-radius:8px;margin-bottom:1rem;font-size:0.825rem;">
          <div><strong>Primary Craft:</strong> ${a.craft}</div>
          <div><strong>Products:</strong> ${(a.products_offered || []).join(', ')}</div>
        </div>
        <div style="display:flex;gap:0.5rem;">
          <button class="btn btn-sm btn-primary" onclick="alert('Connecting with ${nameSafe}. Contact: ${contactSafe}')" style="flex:1;">Inquire / Visit</button>
        </div>
      </div>
    `;
  }).join('');
});
