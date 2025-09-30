const CACHE_NAME = 'cs-motos-v3';
const urlsToCache = [
  '/',
  '/lovable-uploads/6d509b8d-0dfe-491a-bad2-b57f6c3ea2ee.png',
  '/lovable-uploads/9cf420ff-b473-49f4-9208-429e0f0a7ca9.png',
  '/lovable-uploads/43a686dc-67c1-4c98-9eba-7813a4fbc2a7.png',
  '/lovable-uploads/1abed2dc-a2e0-4617-b4bd-059d2e7c68c4.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Cache images with a cache-first strategy with longer expiration
  if (event.request.destination === 'image' || event.request.url.includes('/lovable-uploads/')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            // Add cache headers for better performance
            const newResponse = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: {
                ...Object.fromEntries(response.headers.entries()),
                'Cache-Control': 'public, max-age=31536000, immutable'
              }
            });
            return newResponse;
          }
          return fetch(event.request).then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
        })
    );
    return;
  }
  
  // For other requests, use network-first strategy with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});