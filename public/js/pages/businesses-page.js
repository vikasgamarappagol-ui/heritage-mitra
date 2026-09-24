// businesses-page.js — Local Businesses sub-page controller
document.addEventListener('DOMContentLoaded', () => {
  const c = document.getElementById('bizPageContainer');
  if (!c) return;

  c.innerHTML = `
    <div class="section-header-row" style="margin-bottom:1.5rem;">
      <div>
        <span class="section-kicker">MODULE 9: LOCAL BUSINESSES</span>
        <h2 class="section-title">LOCAL BUSINESSES &amp; TOURISM SERVICES</h2>
        <p class="section-subtitle">Verified homestays, traditional Khanavalis, licensed guides, and handloom stores.</p>
      </div>
      <div class="biz-filters">
        <button class="filter-btn active" data-biz-cat="All">All Businesses</button>
        <button class="filter-btn" data-biz-cat="Hospitality">🏨 Lodging</button>
        <button class="filter-btn" data-biz-cat="Food">🍲 Food / Khanavali</button>
        <button class="filter-btn" data-biz-cat="Guide">🧭 Guides</button>
        <button class="filter-btn" data-biz-cat="Retail">🛍️ Handloom Sales</button>
      </div>
    </div>
    <div class="businesses-grid" id="businessesGrid">
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    </div>
  `;

  async function loadBiz(cat = 'All') {
    const grid = document.getElementById('businessesGrid');
    if (!grid) return;
    grid.innerHTML = `<div class="skeleton-card"></div><div class="skeleton-card"></div>`;
    const res = await API.getBusinesses(cat);
    const list = res.data || [];
    grid.innerHTML = list.map(b => {
      const isDemo = b.verification_status === 'DEMO_DATA';
      const badge = isDemo
        ? `<span class="demo-badge">DEMO PROVIDER — NOT REAL</span>`
        : `<span class="verified-badge">✓ SOURCE VERIFIED</span>`;
      const contactSafe = (b.contact_information || '').replace(/'/g, "\\'");
      return `
        <div class="biz-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.75rem;">
            <span style="font-size:0.75rem;font-weight:800;color:#2A9D8F;letter-spacing:0.08em;text-transform:uppercase;">${b.category}</span>
            ${badge}
          </div>
          <h3 style="font-family:'Cinzel',serif;font-size:1.2rem;color:#0D1B2A;margin-bottom:0.35rem;">${b.name}</h3>
          <p style="font-size:0.85rem;color:#64748B;margin-bottom:0.75rem;">📍 ${b.location}</p>
          <p style="font-size:0.9rem;color:#334155;margin-bottom:1rem;line-height:1.5;">${b.description}</p>
          <div style="background:#F8FAFC;padding:0.85rem;border-radius:8px;margin-bottom:1rem;font-size:0.825rem;">
            <div><strong>Services:</strong> ${(b.services || []).join(', ')}</div>
            <div><strong>Languages:</strong> ${(b.languages || ['Kannada', 'English']).join(', ')}</div>
            ${b.price_information ? `<div><strong>Tariff:</strong> ${b.price_information}</div>` : ''}
          </div>
          <div style="display:flex;gap:0.5rem;">
            <button class="btn btn-sm btn-primary" onclick="alert('Contact details: ${contactSafe}')" style="flex:1;">View Contact</button>
          </div>
        </div>
      `;
    }).join('');
  }

  loadBiz();

  document.querySelectorAll('.biz-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.biz-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadBiz(btn.getAttribute('data-biz-cat'));
    });
  });
});
