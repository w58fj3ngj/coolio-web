const CACHE_NAME = 'coolio-cache-v1';
const urlsToCache = [
  '/',
  '/main.html',
  '/static/iframe.html',
  '/static/manifest.json',
  '/static/style.css',
  '/static/index.js',
  // add other static files like UV and favicon loader
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});