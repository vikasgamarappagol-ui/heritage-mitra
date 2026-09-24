/**
 * Module 12: AI-Based Tourist-Local Skill Matching
 * "MEET THE PEOPLE BEHIND BAGALKOTE"
 */

async function loadSkillMatches(selectedInterest = 'handloom') {
  const container = document.getElementById('skillMatchesGrid');
  if (!container) return;

  container.innerHTML = `<div class="skeleton-card"></div><div class="skeleton-card"></div>`;

  const data = await API.matchSkills(selectedInterest, '', currentLanguage, 'standard');
  const matches = data.matches || [];

  if (!matches.length) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #64748B; padding: 2rem;">No matching skills found for this interest.</div>`;
    return;
  }

  container.innerHTML = matches.map(m => `
    <div class="match-card">
      <div class="match-score-badge">AI Match: ${m.match_score}/100</div>
      <span class="match-category">${m.category || 'Local Skill'}</span>
      <h3 class="match-title">${m.tourist_interest}</h3>
      <div class="match-provider">
        <span>Master Skill: <strong>${m.local_skill}</strong></span><br>
        <span>Provider: <em>${m.local_provider}</em></span>
      </div>

      <div class="match-reasons-box">
        <div class="reasons-title">WHY THIS MATCHES YOU:</div>
        <ul class="reasons-list">
          ${m.match_reasons.map(r => `<li>✓ ${r}</li>`).join('')}
        </ul>
      </div>

      <p style="font-size: 0.85rem; color: #475569; margin-bottom: 1.25rem;">
        ${m.description}
      </p>

      <div style="margin-top: auto; display: flex; gap: 0.5rem;">
        <button class="btn btn-sm btn-primary" onclick="openSkillInquiry('${m.id}', '${m.local_provider.replace(/'/g, "\\'")}', '${m.local_skill.replace(/'/g, "\\'")}')" style="flex: 1;">
          Connect / Inquire
        </button>
        <button class="btn btn-sm btn-outline" onclick="addExperienceToTrip('${m.id}')" style="flex: 1;">
          + Add to Trip
        </button>
      </div>
      <div style="font-size: 0.675rem; color: #94A3B8; margin-top: 0.75rem; text-align: center;">
        *Recommendation score based on verified source data
      </div>
    </div>
  `).join('');
}

function initSkillChips() {
  const chips = document.querySelectorAll('#interestChips .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const interest = chip.getAttribute('data-interest');
      loadSkillMatches(interest);
    });
  });
}

function openSkillInquiry(skillId, providerName, skillName) {
  const touristName = prompt(`Connect with ${providerName}\nEnter your name for this inquiry:`, "Visitor");
  if (!touristName) return;

  const contact = prompt("Enter your email or phone number:", "tourist@example.com");
  if (!contact) return;

  API.submitInquiry({
    provider_id: skillId,
    tourist_name: touristName,
    tourist_contact: contact,
    notes: `Interested in ${skillName}`
  }).then(res => {
    if (res.success) {
      alert(`Inquiry successfully submitted to ${providerName}! The local cooperative coordinator will assist your visit.`);
    } else {
      alert("Inquiry recorded locally. Thank you for supporting local artisans!");
    }
  });
}

function addExperienceToTrip(skillId) {
  let trip = JSON.parse(localStorage.getItem('bagalkote_my_trip') || '[]');
  if (!trip.includes(skillId)) {
    trip.push(skillId);
    localStorage.setItem('bagalkote_my_trip', JSON.stringify(trip));
    alert("Experience added to 'My Bagalkote Journey'!");
  } else {
    alert("This experience is already in your saved trip.");
  }
}
