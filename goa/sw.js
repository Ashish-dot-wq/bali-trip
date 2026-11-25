// Goa 2026: offline support, limited to this app's own folder (its scope).
// Site files: network first, cached copy when offline. Photos: cached after first view.
const CACHE = "goa2026-v1";
const SCOPE = self.registration.scope; // e.g. https://…/goa/
const CORE = ["./", "index.html", "manifest.json", "icon-192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  // only clear this app's own old caches
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("goa2026-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.hostname === "thumb.wikimedia.org" || url.hostname === "upload.wikimedia.org") {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }))
    );
    return;
  }

  if (req.url.startsWith(SCOPE)) {
    e.respondWith(
      fetch(req, { cache: "no-cache" }).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("index.html")))
    );
  }
});
