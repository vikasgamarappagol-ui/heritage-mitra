/**
 * Heritage ಮಿತ್ರ - Service Worker (PWA Offline & Caching Engine)
 * Bagalkote Inclusive Tourism Ecosystem
 */

const CACHE_NAME = 'heritage-mitra-v1.2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/explore.html',
  '/map.html',
  '/artisans.html',
  '/businesses.html',
  '/accessibility.html',
  '/safety.html',
  '/dc-dashboard.html',
  '/complaints.html',
  '/provider-portal.html',
  '/meet-the-people.html',
  '/my-profile.html',
  '/manifest.json',
  '/css/style.css',
  '/css/pages.css',
  '/css/mobile-app.css',
  '/js/translations.js',
  '/js/api.js',
  '/js/app.js',
  '/js/ai-assistant.js',
  '/js/mobile-app.js',
  '/images/app-icon.svg',
  '/images/app-icon.jpg',
  '/images/karnataka_govt_seal.jpg',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Noto+Sans+Kannada:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap'
];

// Precache essential assets on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching Heritage ಮಿತ್ರ App Shell');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[ServiceWorker] Some static assets failed to pre-cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Clean old caches on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event handler with smart caching strategies
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle API Requests: Network-First with Cache / Offline JSON Fallback
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const resClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
          }
          return response;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // Special fallback for offline emergencies
          if (url.pathname.includes('/safety')) {
            return new Response(JSON.stringify({
              offline: true,
              police: "112",
              district_helpline: "1077",
              health_helpline: "104",
              message: "Offline Emergency Helpline Cache Active"
            }), {
              headers: { 'Content-Type': 'application/json' }
            });
          }
          return new Response(JSON.stringify({ error: "Offline mode active. Check connection." }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          });
        })
    );
    return;
  }

  // Handle Static & Page Requests: Cache-First with Network Revalidation
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to update cache (stale-while-revalidate)
        fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const resClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
        return networkResponse;
      }).catch(async () => {
        // Fallback for navigation requests when totally offline
        if (request.mode === 'navigate') {
          const indexPage = await caches.match('/index.html');
          if (indexPage) return indexPage;
        }
      });
    })
  );
});
