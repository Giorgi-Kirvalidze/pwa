console.log(self, "self");

self.addEventListener("install", (e) => {
  console.log("[Service workder] Installing Service Worker...", e);
});

self.addEventListener("activate", (e) => {
  console.log("[Service workder] Activating Service Worker...", e);
  return self.clients.claim();
  // return claim ensures service worker loaded correctly.
});

// Important if you change you code in service worker , you need to close all existing tabs and reopen to avoid breaking changes
// thats why activate was not logged.
self.addEventListener("fetch", (e) => {
  console.log("[Service workder] Fetching...", e);
  e.respondWith(fetch(e.request));
});
