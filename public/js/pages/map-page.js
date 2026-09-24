// map-page.js — Map page controller
document.addEventListener('DOMContentLoaded', () => {
  const c = document.getElementById('mapPageContainer');
  if (!c) return;
  c.innerHTML = `
    <div class="map-controls-bar">
      <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <span class="control-label">Active Layers:</span>
        <div class="layer-toggles">
          <label class="layer-btn active"><input type="checkbox" id="layerHeritage" checked> 🏛️ Heritage</label>
          <label class="layer-btn active"><input type="checkbox" id="layerArtisans" checked> 🎨 Artisans</label>
          <label class="layer-btn active"><input type="checkbox" id="layerCulturalFood" checked> 🍛 Cultural Food</label>
          <label class="layer-btn active"><input type="checkbox" id="layerFood" checked> 🍲 Dining</label>
          <label class="layer-btn active"><input type="checkbox" id="layerLodging" checked> 🏠 Stays</label>
          <label class="layer-btn active"><input type="checkbox" id="layerEmergency" checked> 🚨 Safety</label>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <label for="mapTalukSelect" style="font-weight:700;font-size:0.85rem;color:#0D1B2A;">Taluk:</label>
        <select id="mapTalukSelect" class="select-dropdown" style="padding:0.4rem 0.85rem;border-radius:8px;border:1.5px solid #CBD5E1;font-size:0.85rem;font-family:'Outfit',sans-serif;background:#FFF;color:#0D1B2A;font-weight:600;cursor:pointer;">
          <option value="All">All 9 Taluks</option>
          <option value="Badami">Badami Taluk</option>
          <option value="Bagalkote">Bagalkote Taluk</option>
          <option value="Hunagund">Hunagund Taluk</option>
          <option value="Ilkal">Ilkal Taluk</option>
          <option value="Guledagudda">Guledagudda Taluk</option>
          <option value="Mudhol">Mudhol Taluk</option>
          <option value="Jamkhandi">Jamkhandi Taluk</option>
          <option value="Bilagi">Bilagi Taluk</option>
          <option value="Banhatti">Rabkavi Banhatti Taluk</option>
        </select>
        <button class="btn btn-sm btn-outline" id="resetMapBtn">Reset View</button>
      </div>
    </div>
    <div id="interactiveMap" class="map-canvas"></div>
    <div class="map-footer-bar">
      <div class="map-legend">
        <span class="legend-item"><span class="legend-dot dot-heritage"></span> Heritage & Caves</span>
        <span class="legend-item"><span class="legend-dot dot-artisan"></span> GI Handlooms & Artisans</span>
        <span class="legend-item"><span class="legend-dot dot-cultural"></span> Cultural Food & Sweets</span>
        <span class="legend-item"><span class="legend-dot dot-food"></span> Restaurants & Dining</span>
        <span class="legend-item"><span class="legend-dot dot-lodging"></span> Certified Stays</span>
        <span class="legend-item"><span class="legend-dot dot-safety"></span> 24x7 Safety & Hospitals</span>
      </div>
    </div>
  `;
  if (typeof initMap === 'function') initMap();
});
