/**
 * shared-login.js — Shared login modal logic for all sub-pages
 */

function isLoggedIn() {
  return !!localStorage.getItem('bgk_user_token');
}

function fakeLogin(email, password) {
  if (email && password.length >= 4) {
    if (window.TouristProfile) {
      return window.TouristProfile.login(email, password);
    }
    localStorage.setItem('bgk_user_token', btoa(email));
    localStorage.setItem('bgk_user_email', email);
    const cleanName = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const profile = {
      email,
      name: cleanName,
      joinedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      savedDestinations: [],
      plannedTrips: []
    };
    localStorage.setItem('bgk_tourist_profile', JSON.stringify(profile));
    return true;
  }
  return false;
}

let _loginCallback = null;

window.showLoginModal = function(callback) {
  _loginCallback = callback;
  document.getElementById('loginModal').classList.add('active');
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginError').style.display = 'none';
};

function hideLoginModal() {
  document.getElementById('loginModal').classList.remove('active');
}

window.showToast = function(msg) {
  let t = document.getElementById('toastMsg');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toastMsg';
    t.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:#0D1B2A;color:#fff;padding:0.85rem 1.5rem;border-radius:10px;font-size:0.9rem;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.3);transition:opacity 0.3s;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2800);
};

document.getElementById('closeLoginModal')?.addEventListener('click', hideLoginModal);
document.getElementById('loginModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) hideLoginModal();
});

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl    = document.getElementById('loginError');

  if (!email || !password) {
    errEl.textContent = 'Please fill in all fields.';
    errEl.style.display = 'block';
    return;
  }

  if (fakeLogin(email, password)) {
    hideLoginModal();
    if (typeof _loginCallback === 'function') _loginCallback();
  } else {
    errEl.textContent = 'Invalid credentials. Password must be at least 4 characters.';
    errEl.style.display = 'block';
  }
});

// Plan My Trip (sub-pages only — index.html handles its own)
// Only attach on sub-pages (not index)
if (!document.getElementById('tripPlannerModal')) {
  document.getElementById('openTripPlannerBtn')?.addEventListener('click', () => {
    if (!isLoggedIn()) {
      showLoginModal(() => { window.location.href = '/?openTrip=1'; });
    } else {
      window.location.href = '/?openTrip=1';
    }
  });
}

// Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.active').forEach(el => el.classList.remove('active'));
  }
});
