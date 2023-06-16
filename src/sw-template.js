importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// const { registerRoute } = workbox.routing;
// const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
// const { CacheableResponsePlugin } = workbox.cacheableResponse;
// const { ExpirationPlugin } = workbox.expiration;

// // network only 
// // network first
// // stale while revalidate
// registerRoute(
//     new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'), // 
//     new CacheFirst() // puede limitar el tiempo de cache. 
// );

// registerRoute(
//     new RegExp('https://boostrap...', // 
//     new CacheFirst() // puede limitar el tiempo de cache. 
// );

