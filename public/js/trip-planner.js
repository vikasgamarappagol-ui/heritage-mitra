/**
 * Module 15: Personalized Trip Planner (8-Step Wizard)
 */

let currentStep = 1;
const totalSteps = 8;

function initTripPlanner() {
  const openBtn = document.getElementById('openTripPlannerBtn');
  const heroBtn = document.getElementById('heroPlanTripBtn');
  const modal = document.getElementById('tripPlannerModal');
  const closeBtn = document.getElementById('closeTripPlannerModal');
  const prevBtn = document.getElementById('wizardPrevBtn');
  const nextBtn = document.getElementById('wizardNextBtn');
  const genBtn = document.getElementById('wizardGenerateBtn');

  if (openBtn) openBtn.addEventListener('click', () => openWizard());
  if (heroBtn) heroBtn.addEventListener('click', () => openWizard());
  if (closeBtn) closeBtn.addEventListener('click', () => closeWizard());

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        goToStep(currentStep + 1);
      }
    });
  }

  if (genBtn) {
    genBtn.addEventListener('click', () => {
      generateItinerary();
    });
  }
}

function openWizard() {
  const modal = document.getElementById('tripPlannerModal');
  if (modal) {
    modal.classList.add('active');
    goToStep(1);
  }
}

function closeWizard() {
  const modal = document.getElementById('tripPlannerModal');
  if (modal) modal.classList.remove('active');
}

function goToStep(step) {
  currentStep = step;
  const steps = document.querySelectorAll('.wizard-step');
  const resultBox = document.getElementById('wizardResultBox');
  const prevBtn = document.getElementById('wizardPrevBtn');
  const nextBtn = document.getElementById('wizardNextBtn');
  const genBtn = document.getElementById('wizardGenerateBtn');
  const stepNum = document.getElementById('wizardStepNumber');
  const progressFill = document.getElementById('wizardProgressFill');

  if (resultBox) resultBox.style.display = 'none';

  steps.forEach(s => {
    if (parseInt(s.getAttribute('data-step')) === step) {
      s.classList.add('active');
      s.style.display = 'block';
    } else {
      s.classList.remove('active');
      s.style.display = 'none';
    }
  });

  if (stepNum) stepNum.textContent = `Step ${step} of ${totalSteps}`;
  if (progressFill) progressFill.style.width = `${(step / totalSteps) * 100}%`;

  if (prevBtn) prevBtn.style.display = step === 1 ? 'none' : 'block';

  if (step === totalSteps) {
    if (nextBtn) nextBtn.style.display = 'none';
    if (genBtn) genBtn.style.display = 'block';
  } else {
    if (nextBtn) nextBtn.style.display = 'block';
    if (genBtn) genBtn.style.display = 'none';
  }
}

async function generateItinerary() {
  const resultBox = document.getElementById('wizardResultBox');
  const steps = document.querySelectorAll('.wizard-step');
  const nextBtn = document.getElementById('wizardNextBtn');
  const genBtn = document.getElementById('wizardGenerateBtn');
  const prevBtn = document.getElementById('wizardPrevBtn');

  steps.forEach(s => s.style.display = 'none');
  if (nextBtn) nextBtn.style.display = 'none';
  if (genBtn) genBtn.style.display = 'none';
  if (prevBtn) prevBtn.style.display = 'block';

  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <div style="text-align: center; padding: 3rem 1rem;">
      <div class="spinner" style="font-size: 2.5rem; margin-bottom: 1rem;">✨</div>
      <h3 style="font-family: 'Cinzel', serif; color: #0D1B2A;">Crafting Your Inclusive Bagalkote Journey...</h3>
      <p style="color: #64748B;">Connecting heritage, accessible routes, verified local food, and artisan cooperatives.</p>
    </div>
  `;

  // Gather user choices
  const duration = document.querySelector('input[name="durationChoice"]:checked')?.value || '1 Day';
  const budget = document.querySelector('input[name="budgetChoice"]:checked')?.value || 'Moderate';
  const companions = document.querySelector('input[name="companionChoice"]:checked')?.value || 'Family with Seniors';
  const accessibility = document.querySelector('input[name="accessChoice"]:checked')?.value || 'Reduced Walking';
  const language = document.querySelector('input[name="langChoice"]:checked')?.value || 'en';

  const planData = { duration, budget, companions, accessibility, language };
  const itinerary = await API.generateTrip(planData);

  if (!itinerary) {
    resultBox.innerHTML = `<p style="color: #E63946; text-align: center;">Failed to generate itinerary. Please try again.</p>`;
    return;
  }

  window._lastGeneratedItinerary = {
    ...itinerary,
    duration,
    budget,
    companions,
    accessibility
  };

  // Auto-save to profile if logged in
  if (window.TouristProfile && window.TouristProfile.isLoggedIn()) {
    window.TouristProfile.saveTrip(window._lastGeneratedItinerary);
  }

  resultBox.innerHTML = `
    <div class="itinerary-output">
      <div class="itinerary-header" style="border-bottom: 2px solid #E2E8F0; padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <span style="font-size: 0.75rem; font-weight: 800; color: #C85A32; letter-spacing: 0.08em;">AI GENERATED INCLUSIVE ITINERARY</span>
        <h3 style="font-family: 'Cinzel', serif; font-size: 1.6rem; color: #0D1B2A; margin: 0.25rem 0;">${itinerary.trip_title}</h3>
        <p style="color: #475569; font-size: 0.95rem;">${itinerary.theme}</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.75rem;">
          <span class="dest-access-pill access-yes">♿ ${accessibility}</span>
          <span class="dest-access-pill access-partial">👥 ${companions}</span>
          <span class="dest-access-pill" style="background: #E0E7FF; color: #3730A3;">💰 ${budget}</span>
        </div>
      </div>

      <div class="timeline-wrapper" style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${itinerary.timeline.map((item, idx) => `
          <div class="timeline-card" style="display: flex; gap: 1rem; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.25rem;">
            <div class="time-col" style="min-width: 110px; font-weight: 700; color: #C85A32; font-size: 0.85rem;">
              ${item.time}
            </div>
            <div class="content-col" style="flex-grow: 1;">
              <span style="font-size: 0.7rem; font-weight: 800; color: #64748B; text-transform: uppercase;">${item.type}</span>
              <h4 style="font-size: 1.15rem; color: #0D1B2A; margin: 0.2rem 0;">${item.name} <span style="font-family: 'Noto Sans Kannada'; color: #D4AF37; font-size: 0.9rem;">${item.kn_name || ''}</span></h4>
              <p style="font-size: 0.875rem; color: #334155; margin-bottom: 0.5rem;">${item.description}</p>
              ${item.provider ? `<div style="font-size: 0.8rem; color: #0F766E; font-weight: 600; margin-bottom: 0.35rem;">Provider: ${item.provider}</div>` : ''}
              <div style="font-size: 0.775rem; color: #059669; font-weight: 600; margin-bottom: 0.25rem;">${item.accessibility_note}</div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748B; border-top: 1px dashed #CBD5E1; padding-top: 0.35rem; margin-top: 0.35rem;">
                <span>Source: ${item.verified_source}</span>
                <span>Est. Cost: ${item.estimated_cost}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="itinerary-footer-summary" style="background: #FFFBEB; border: 1px solid #FCD34D; border-radius: 12px; padding: 1.25rem; margin-top: 1.5rem;">
        <div style="font-size: 0.85rem; font-weight: 700; color: #92400E; margin-bottom: 0.25rem;">🚨 Safety & Budget Advisory</div>
        <p style="font-size: 0.825rem; color: #78350F; margin-bottom: 0.5rem;">${itinerary.safety_advisory}</p>
        <div style="font-size: 0.9rem; font-weight: 800; color: #0D1B2A;">Total Estimated Budget: ${itinerary.estimated_total_budget}</div>
      </div>

      <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: flex-end; flex-wrap: wrap;">
        <button class="btn btn-outline" onclick="window.print()">🖨️ Print Itinerary</button>
        <a href="/my-profile.html" class="btn btn-outline" style="text-decoration:none;">👤 View in My Profile</a>
        <button class="btn btn-primary" onclick="saveItineraryLocally()">💾 Saved to My Profile</button>
      </div>
    </div>
  `;
}

function saveItineraryLocally() {
  if (window.TouristProfile) {
    if (!window.TouristProfile.isLoggedIn()) {
      if (typeof window.showLoginModal === 'function') {
        window.showLoginModal(() => {
          if (window._lastGeneratedItinerary) {
            window.TouristProfile.saveTrip(window._lastGeneratedItinerary);
          }
          if (typeof window.showToast === 'function') {
            window.showToast("✅ Itinerary saved to your Tourist Profile!");
          } else {
            alert("Itinerary saved to your Tourist Profile! You can view it under My Profile.");
          }
          closeWizard();
        });
        return;
      }
    } else {
      if (window._lastGeneratedItinerary) {
        window.TouristProfile.saveTrip(window._lastGeneratedItinerary);
      }
    }
  }

  if (typeof window.showToast === 'function') {
    window.showToast("✅ Itinerary saved to your Tourist Profile!");
  } else {
    alert("Itinerary saved successfully to your Profile! View it anytime under My Profile.");
  }
  closeWizard();
}
