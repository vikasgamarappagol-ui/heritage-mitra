/**
 * Heritage ಮಿತ್ರ - Native Mobile App & PWA Logic
 * Handles ServiceWorker, APK Install Prompt, Bottom Navigation, & Native App Shell
 */

(function () {
  'use strict';

  let deferredInstallPrompt = null;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

  // Add mobile-app-mode class to body
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('mobile-app-mode');
    initServiceWorker();
    injectMobileAppShell();
    initInstallPrompt();
    initNetworkMonitor();
  });

  /* ----------------------------------------------------
     1. Service Worker Registration
  ---------------------------------------------------- */
  function initServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((reg) => {
            console.log('[Heritage ಮಿತ್ರ PWA] Service Worker registered with scope:', reg.scope);
          })
          .catch((err) => {
            console.warn('[Heritage ಮಿತ್ರ PWA] Service Worker registration failed:', err);
          });
      });
    }
  }

  /* ----------------------------------------------------
     2. Inject Native Mobile Top Bar & Bottom Navigation
  ---------------------------------------------------- */
  function injectMobileAppShell() {
    // Current page path
    const path = window.location.pathname.toLowerCase();

    // 2A. Top Mobile Header
    if (!document.querySelector('.mobile-app-header')) {
      const header = document.createElement('header');
      header.className = 'mobile-app-header';
      header.innerHTML = `
        <a href="/" class="mobile-app-brand">
          <img src="/images/app-icon.svg" alt="Heritage ಮಿತ್ರ" class="mobile-app-icon-img" />
          <div class="mobile-app-brand-titles">
            <div class="mobile-app-brand-name">
              Heritage <span class="kn-part">ಮಿತ್ರ</span>
            </div>
            <div class="mobile-app-brand-sub" id="mobileOnlineStatus">Bagalkote Tourism • Online</div>
          </div>
        </a>

        <div class="mobile-app-actions">
          <button class="mobile-action-btn install-quick-btn" id="mobileQuickInstallBtn" title="Install APK / App">
            <span>📥</span> <span>APK</span>
          </button>
          <a href="/safety.html" class="mobile-action-btn sos-btn" title="Emergency SOS">
            <span>🚨</span> <span>112</span>
          </a>
          <button class="mobile-action-btn" id="mobileLangToggleBtn" title="Change Language">
            <span>🌐</span>
          </button>
        </div>
      `;
      document.body.prepend(header);
    }

    // 2B. Bottom Navigation Bar
    if (!document.querySelector('.mobile-bottom-nav')) {
      const nav = document.createElement('nav');
      nav.className = 'mobile-bottom-nav';

      const isHome = path === '/' || path.endsWith('/index.html') || path === '';
      const isExplore = path.includes('explore.html');
      const isArtisans = path.includes('artisans.html') || path.includes('businesses.html');
      const isMap = path.includes('map.html');
      const isMore = path.includes('safety.html') || path.includes('dc-dashboard.html') || path.includes('complaints.html') || path.includes('accessibility.html') || path.includes('provider-portal.html') || path.includes('my-profile.html');

      nav.innerHTML = `
        <div class="mobile-bottom-nav-inner">
          <a href="/explore.html" class="mobile-nav-item ${isExplore ? 'active' : ''}" data-nav="explore">
            <span class="mobile-nav-icon">🏛️</span>
            <span>Explore</span>
          </a>

          <a href="/artisans.html" class="mobile-nav-item ${isArtisans ? 'active' : ''}" data-nav="artisans">
            <span class="mobile-nav-icon">🛍️</span>
            <span>Artisans</span>
          </a>

          <a href="javascript:void(0)" class="mobile-nav-center-item" id="mobileMitrAIFab">
            <div class="mobile-nav-fab" title="Ask Heritage Mitr AI">
              <span>✨</span>
            </div>
            <span class="mobile-nav-center-label">Mitr AI</span>
          </a>

          <a href="/map.html" class="mobile-nav-item ${isMap ? 'active' : ''}" data-nav="map">
            <span class="mobile-nav-icon">🗺️</span>
            <span>Live Map</span>
          </a>

          <a href="javascript:void(0)" class="mobile-nav-item ${isMore ? 'active' : ''}" id="mobileMoreBtn" data-nav="more">
            <span class="mobile-nav-icon">☰</span>
            <span>More</span>
          </a>
        </div>
      `;
      document.body.appendChild(nav);
    }

    // 2C. Install APK Banner
    if (!document.querySelector('.apk-install-banner') && !isStandalone) {
      const banner = document.createElement('div');
      banner.className = 'apk-install-banner';
      banner.id = 'apkInstallBanner';
      banner.innerHTML = `
        <div class="apk-banner-inner">
          <img src="/images/app-icon.svg" alt="App Icon" class="apk-banner-icon" />
          <div class="apk-banner-text">
            <div class="apk-banner-title">
              Heritage ಮಿತ್ರ <span class="apk-badge">Official APK</span>
            </div>
            <div class="apk-banner-sub">Install on mobile for offline guides & instant AI</div>
          </div>
          <div class="apk-banner-actions">
            <button class="btn-apk-install" id="btnTriggerInstall">INSTALL</button>
            <button class="btn-apk-close" id="btnCloseBanner">✕</button>
          </div>
        </div>
      `;
      document.body.appendChild(banner);
    }

    // 2D. Full Install Modal Sheet
    if (!document.querySelector('.apk-modal-overlay')) {
      const modal = document.createElement('div');
      modal.className = 'apk-modal-overlay';
      modal.id = 'apkModalOverlay';
      modal.innerHTML = `
        <div class="apk-modal-content">
          <div class="apk-modal-handle"></div>
          <div class="apk-modal-header">
            <img src="/images/app-icon.svg" alt="Heritage Mitra" class="apk-modal-icon" />
            <div>
              <div class="apk-modal-title">Heritage ಮಿತ್ರ Mobile</div>
              <div class="apk-modal-meta">
                <span>Version 2.4.0 (Official)</span>
                <span>•</span>
                <span>4.8 MB</span>
                <span>•</span>
                <span>Free</span>
              </div>
            </div>
          </div>

          <div class="apk-features-list">
            <div class="apk-feature-item">
              <span class="icon">✨</span>
              <span>Trilingual AI Assistant (English, ಕನ್ನಡ, हिन्दी)</span>
            </div>
            <div class="apk-feature-item">
              <span class="icon">📷</span>
              <span>Instant AI Monument Camera Recognition</span>
            </div>
            <div class="apk-feature-item">
              <span class="icon">📶</span>
              <span>100% Offline Access to Emergency SOS & Maps</span>
            </div>
            <div class="apk-feature-item">
              <span class="icon">🧵</span>
              <span>Direct Connect with Ilkal GI Handloom Weavers</span>
            </div>
          </div>

          <button class="apk-install-primary-btn" id="btnModalInstallAction">
            <span>📥</span> <span>INSTALL HERITAGE ಮಿತ್ರ APP</span>
          </button>

          <div class="apk-ios-instructions" id="apkIOSInstructions" style="display: none;">
            <strong>iOS (Apple iPhone/iPad) Installation:</strong><br>
            1. Tap the <strong>Share</strong> button (⎋) in Safari.<br>
            2. Scroll down and tap <strong>"Add to Home Screen"</strong> (⊞).<br>
            3. Tap <strong>Add</strong> to launch Heritage ಮಿತ್ರ as a native full-screen app!
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    // 2E. "More" Slide-up Menu Sheet
    if (!document.querySelector('.mobile-more-sheet')) {
      const moreSheet = document.createElement('div');
      moreSheet.className = 'mobile-more-sheet';
      moreSheet.id = 'mobileMoreSheet';
      moreSheet.innerHTML = `
        <div class="mobile-more-content">
          <div class="apk-modal-handle"></div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="font-family:'Cinzel', serif; font-size:1.15rem; color:#FFFFFF; margin:0;">
              Heritage ಮಿತ್ರ Services
            </h3>
            <button id="btnCloseMoreSheet" style="background:transparent; border:none; color:#94A3B8; font-size:1.4rem; cursor:pointer;">✕</button>
          </div>

          <div class="mobile-grid-menu">
            <a href="/safety.html" class="mobile-menu-card">
              <div class="mobile-menu-icon" style="color:#EF4444; background:rgba(239, 68, 68, 0.15);">🚨</div>
              <div>
                <div class="mobile-menu-label">Emergency SOS</div>
                <div class="mobile-menu-sub">112, 1077, 104, Police</div>
              </div>
            </a>

            <a href="/accessibility.html" class="mobile-menu-card">
              <div class="mobile-menu-icon" style="color:#3B82F6; background:rgba(59, 130, 246, 0.15);">♿</div>
              <div>
                <div class="mobile-menu-label">Accessibility</div>
                <div class="mobile-menu-sub">Step counts & ramps</div>
              </div>
            </a>

            <a href="/complaints.html" class="mobile-menu-card">
              <div class="mobile-menu-icon" style="color:#F59E0B; background:rgba(245, 158, 11, 0.15);">⚖️</div>
              <div>
                <div class="mobile-menu-label">Grievance Cell</div>
                <div class="mobile-menu-sub">File DC complaint</div>
              </div>
            </a>

            <a href="/dc-dashboard.html" class="mobile-menu-card">
              <div class="mobile-menu-icon" style="color:#10B981; background:rgba(16, 185, 129, 0.15);">📊</div>
              <div>
                <div class="mobile-menu-label">DC Dashboard</div>
                <div class="mobile-menu-sub">Tourism analytics</div>
              </div>
            </a>

            <a href="/provider-portal.html" class="mobile-menu-card">
              <div class="mobile-menu-icon" style="color:#8B5CF6; background:rgba(139, 92, 246, 0.15);">🤝</div>
              <div>
                <div class="mobile-menu-label">Provider KYC</div>
                <div class="mobile-menu-sub">Artisan / Guide onboard</div>
              </div>
            </a>

            <a href="/my-profile.html" class="mobile-menu-card">
              <div class="mobile-menu-icon" style="color:#EC4899; background:rgba(236, 72, 153, 0.15);">👤</div>
              <div>
                <div class="mobile-menu-label">My Profile</div>
                <div class="mobile-menu-sub">Trips & preferences</div>
              </div>
            </a>
          </div>

          <div style="margin-top:16px; padding-top:14px; border-top:1px solid rgba(255,255,255,0.1);">
            <button id="btnMoreInstallAPK" class="apk-install-primary-btn" style="padding:10px; font-size:0.88rem;">
              <span>📥</span> <span>Install Heritage ಮಿತ್ರ APK / App</span>
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(moreSheet);
    }

    attachEvents();
  }

  /* ----------------------------------------------------
     3. Install Prompt Handling
  ---------------------------------------------------- */
  function initInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent automatic mini-infobar on mobile Chrome
      e.preventDefault();
      deferredInstallPrompt = e;
      console.log('[PWA] beforeinstallprompt event captured');

      // Show banner after 2 seconds
      setTimeout(() => {
        const banner = document.getElementById('apkInstallBanner');
        if (banner && !sessionStorage.getItem('apk_banner_dismissed')) {
          banner.style.display = 'block';
        }
      }, 1500);
    });

    window.addEventListener('appinstalled', () => {
      console.log('[PWA] Heritage ಮಿತ್ರ successfully installed!');
      deferredInstallPrompt = null;
      const banner = document.getElementById('apkInstallBanner');
      if (banner) banner.style.display = 'none';
      const quickBtn = document.getElementById('mobileQuickInstallBtn');
      if (quickBtn) quickBtn.style.display = 'none';
    });
  }

  function triggerInstallFlow() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('[PWA] User accepted APK install prompt');
        } else {
          console.log('[PWA] User dismissed APK install prompt');
        }
        deferredInstallPrompt = null;
        const banner = document.getElementById('apkInstallBanner');
        if (banner) banner.style.display = 'none';
        const modal = document.getElementById('apkModalOverlay');
        if (modal) modal.classList.remove('active');
      });
    } else if (isIOS) {
      // Show iOS guided sheet
      const modal = document.getElementById('apkModalOverlay');
      if (modal) {
        modal.classList.add('active');
        const iosBox = document.getElementById('apkIOSInstructions');
        if (iosBox) iosBox.style.display = 'block';
        const primaryBtn = document.getElementById('btnModalInstallAction');
        if (primaryBtn) primaryBtn.style.display = 'none';
      }
    } else {
      // Generic install modal
      const modal = document.getElementById('apkModalOverlay');
      if (modal) modal.classList.add('active');
    }
  }

  /* ----------------------------------------------------
     4. Network Status Monitoring
  ---------------------------------------------------- */
  function initNetworkMonitor() {
    const updateStatus = () => {
      const statusEl = document.getElementById('mobileOnlineStatus');
      if (statusEl) {
        if (navigator.onLine) {
          statusEl.textContent = 'Bagalkote Tourism • Online';
          statusEl.style.color = '#94A3B8';
        } else {
          statusEl.textContent = 'Offline Mode • Cached Active';
          statusEl.style.color = '#F59E0B';
        }
      }
    };

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
  }

  /* ----------------------------------------------------
     5. Event Listeners
  ---------------------------------------------------- */
  function attachEvents() {
    // Haptic feedback helper
    const haptic = () => {
      if (navigator.vibrate) navigator.vibrate(15);
    };

    // FAB Button (Mitr AI)
    const mitrFab = document.getElementById('mobileMitrAIFab');
    if (mitrFab) {
      mitrFab.addEventListener('click', () => {
        haptic();
        // Check if on home page with AI chat
        const openAIChatBtn = document.getElementById('openAIChatBtn');
        if (openAIChatBtn) {
          openAIChatBtn.click();
        } else {
          window.location.href = '/?open=ai#ai-companion';
        }
      });
    }

    // Quick Install button in header
    const quickInstallBtn = document.getElementById('mobileQuickInstallBtn');
    if (quickInstallBtn) {
      quickInstallBtn.addEventListener('click', () => {
        haptic();
        triggerInstallFlow();
      });
    }

    // Banner buttons
    const btnTriggerInstall = document.getElementById('btnTriggerInstall');
    if (btnTriggerInstall) {
      btnTriggerInstall.addEventListener('click', () => {
        haptic();
        triggerInstallFlow();
      });
    }

    const btnCloseBanner = document.getElementById('btnCloseBanner');
    if (btnCloseBanner) {
      btnCloseBanner.addEventListener('click', () => {
        const banner = document.getElementById('apkInstallBanner');
        if (banner) banner.style.display = 'none';
        sessionStorage.setItem('apk_banner_dismissed', 'true');
      });
    }

    // Modal buttons
    const btnModalInstallAction = document.getElementById('btnModalInstallAction');
    if (btnModalInstallAction) {
      btnModalInstallAction.addEventListener('click', () => {
        haptic();
        triggerInstallFlow();
      });
    }

    const modalOverlay = document.getElementById('apkModalOverlay');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          modalOverlay.classList.remove('active');
        }
      });
    }

    // "More" Sheet
    const moreBtn = document.getElementById('mobileMoreBtn');
    const moreSheet = document.getElementById('mobileMoreSheet');
    const closeMoreSheet = document.getElementById('btnCloseMoreSheet');
    const btnMoreInstallAPK = document.getElementById('btnMoreInstallAPK');

    if (moreBtn && moreSheet) {
      moreBtn.addEventListener('click', () => {
        haptic();
        moreSheet.classList.add('active');
      });
    }

    if (closeMoreSheet && moreSheet) {
      closeMoreSheet.addEventListener('click', () => {
        moreSheet.classList.remove('active');
      });
    }

    if (moreSheet) {
      moreSheet.addEventListener('click', (e) => {
        if (e.target === moreSheet) {
          moreSheet.classList.remove('active');
        }
      });
    }

    if (btnMoreInstallAPK) {
      btnMoreInstallAPK.addEventListener('click', () => {
        haptic();
        if (moreSheet) moreSheet.classList.remove('active');
        triggerInstallFlow();
      });
    }

    // Language Toggle Button in Header
    const langBtn = document.getElementById('mobileLangToggleBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        haptic();
        // Cycle between en -> kn -> hi
        const currentLang = document.body.getAttribute('data-lang') || 'en';
        let nextLang = 'kn';
        if (currentLang === 'kn') nextLang = 'hi';
        else if (currentLang === 'hi') nextLang = 'en';

        // Trigger existing translation framework
        const targetBtn = document.querySelector(`.gov-lang-btn[data-lang-code="${nextLang}"]`) ||
                          document.querySelector(`.lang-btn[data-lang-code="${nextLang}"]`);
        if (targetBtn) {
          targetBtn.click();
        } else if (window.switchLanguage) {
          window.switchLanguage(nextLang);
        } else {
          document.body.setAttribute('data-lang', nextLang);
        }

        langBtn.setAttribute('title', `Active: ${nextLang.toUpperCase()}`);
      });
    }

    // Check URL parameters for instant actions (?open=ai or ?open=scanner)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('open') === 'ai') {
      setTimeout(() => {
        const aiBtn = document.getElementById('openAIChatBtn');
        if (aiBtn) aiBtn.click();
      }, 500);
    }
  }

})();
