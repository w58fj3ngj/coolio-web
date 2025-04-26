self.addEventListener('install', (event) => {
  console.log('Service worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated.');
});

self.addEventListener('fetch', (event) => {
  // Optional: respond with cache if you add caching
});