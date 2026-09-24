// meet-the-people-page.js
document.addEventListener('DOMContentLoaded', () => {
  const c = document.getElementById('meetPageContainer');
  if (!c) return;

  c.innerHTML = `
    <!-- 5-Node Relational Flow Diagram -->
    <div class="relational-flow-card" style="margin-bottom:2rem;">
      <div class="flow-node">
        <div class="flow-icon">🙋</div>
        <div class="flow-title">1. TOURIST INTEREST</div>
        <div class="flow-sub">Your travel curiosity</div>
      </div>
      <div class="flow-arrow">➔</div>
      <div class="flow-node">
        <div class="flow-icon">🧠</div>
        <div class="flow-title">2. AI MATCHING ENGINE</div>
        <div class="flow-sub">Hybrid recommendation</div>
      </div>
      <div class="flow-arrow">➔</div>
      <div class="flow-node">
        <div class="flow-icon">🧵</div>
        <div class="flow-title">3. LOCAL SKILL</div>
        <div class="flow-sub">Master craftsmanship</div>
      </div>
      <div class="flow-arrow">➔</div>
      <div class="flow-node">
        <div class="flow-icon">👥</div>
        <div class="flow-title">4. LOCAL PROVIDER</div>
        <div class="flow-sub">Verified cooperative</div>
      </div>
      <div class="flow-arrow">➔</div>
      <div class="flow-node">
        <div class="flow-icon">🌟</div>
        <div class="flow-title">5. LOCAL EXPERIENCE</div>
        <div class="flow-sub">Hands-on immersion</div>
      </div>
    </div>

    <!-- Interactive Interest Picker -->
    <div class="skill-interactive-box">
      <div class="interactive-prompt">
        <span class="prompt-label">Select what you love to explore:</span>
        <div class="interest-chips" id="interestChips">
          <button class="chip active" data-interest="handloom">Handloom Weaving (ಇಳಕಲ್ ಸೀರೆ)</button>
          <button class="chip" data-interest="embroidery">Kasuti Needlecraft (ಕಸೂತಿ ಕಲೆ)</button>
          <button class="chip" data-interest="food">Traditional Millet Food (ಜೋಳದ ರೊಟ್ಟಿ)</button>
          <button class="chip" data-interest="architecture">Chalukya Architecture &amp; Epigraphy</button>
          <button class="chip" data-interest="philosophy">Sharana Philosophy &amp; Dasoha</button>
        </div>
      </div>
      <div class="skill-matches-grid" id="skillMatchesGrid">
        <!-- Populated by skill-matching.js -->
      </div>
    </div>
  `;

  // Now initialize skill matching since the DOM is ready
  if (typeof initSkillChips === 'function') initSkillChips();
  if (typeof loadSkillMatches === 'function') loadSkillMatches('handloom');
});
