// sw.js
self.addEventListener('install', event => {
    self.skipWaiting();
    console.log('Service Worker installed');
  });
  
  self.addEventListener('activate', event => {
    self.clients.claim();
    console.log('Service Worker activated');
  });
  
  self.addEventListener('fetch', event => {
    console.log('fetch:', event.request.url);
    // Use self.location instead of window.location
    console.log(self.location);
    event.respondWith(fetch(event.request));
  });