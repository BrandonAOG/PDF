// KHZ PDF offline support. Change VERSION when you upload a new khz-pdf.html to refresh the saved copy sooner.
const VERSION = 'khz-pdf-v4';
// libraries keep their version in the address, so they live in their own cache that survives app updates
const LIBCACHE = 'khz-pdf-libs';
const SHELL = ['./', './khz-pdf.html', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
const LIBS = [
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',
  'https://cdn.jsdelivr.net/npm/@pdf-lib/fontkit@1.1.1/dist/fontkit.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
];
// tools that load only when used (OCR, spelling, signing, Excel/PowerPoint export) — saved in the background so they work offline too
const EXTRA = [
  'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js',
  'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js',
  'https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.1/tesseract-core-simd-lstm.wasm.js',
  'https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.1/tesseract-core-lstm.wasm.js',
  'https://cdn.jsdelivr.net/npm/@tesseract.js-data/eng/4.0.0_best_int/eng.traineddata.gz',
  'https://cdn.jsdelivr.net/npm/typo-js@1.3.2/typo.js',
  'https://cdn.jsdelivr.net/npm/typo-js@1.3.2/dictionaries/en_US/en_US.aff',
  'https://cdn.jsdelivr.net/npm/typo-js@1.3.2/dictionaries/en_US/en_US.dic',
  'https://cdnjs.cloudflare.com/ajax/libs/forge/1.3.1/forge.min.js',
  'https://cdn.jsdelivr.net/npm/node-forge@1.3.1/dist/forge.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js',
  'https://cdn.jsdelivr.net/npm/@neslinesli93/qpdf-wasm@0.3.0/dist/qpdf.js',
  'https://cdn.jsdelivr.net/npm/@neslinesli93/qpdf-wasm@0.3.0/dist/qpdf.wasm',
  'https://cdn.jsdelivr.net/npm/mammoth@1.13.0/mammoth.browser.min.js',
  'https://cdn.jsdelivr.net/npm/bwip-js@4.5.1/dist/bwip-js-min.js',
  'https://cdn.jsdelivr.net/npm/@fontsource/arimo@5.3.0/files/arimo-latin-400-normal.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/arimo@5.3.0/files/arimo-latin-400-italic.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/arimo@5.3.0/files/arimo-latin-700-normal.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/arimo@5.3.0/files/arimo-latin-700-italic.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/tinos@5.3.0/files/tinos-latin-400-normal.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/tinos@5.3.0/files/tinos-latin-400-italic.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/tinos@5.3.0/files/tinos-latin-700-normal.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/tinos@5.3.0/files/tinos-latin-700-italic.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/cousine@5.3.0/files/cousine-latin-400-normal.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/cousine@5.3.0/files/cousine-latin-400-italic.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/cousine@5.3.0/files/cousine-latin-700-normal.woff',
  'https://cdn.jsdelivr.net/npm/@fontsource/cousine@5.3.0/files/cousine-latin-700-italic.woff'
];
const saveMissing = (cache, urls) => caches.open(cache).then(c => Promise.all(urls.map(u => c.match(u).then(hit => hit || c.add(u).catch(() => {})))));
const CDN = /^https:\/\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|unpkg\.com)\//;

self.addEventListener('install', e => {
  e.waitUntil(Promise.all([
    caches.open(VERSION).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))),
    saveMissing(LIBCACHE, LIBS)
  ]).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== LIBCACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
    .then(() => saveMissing(LIBCACHE, EXTRA)));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = req.url;
  // libraries have the version in the address, so a saved copy is always right
  if (CDN.test(url)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(LIBCACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  if (new URL(url).origin !== location.origin) return;
  // the app itself: newest from the web when online, saved copy when offline
  e.respondWith(fetch(req).then(res => {
    if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || (req.mode === 'navigate' ? caches.match('./khz-pdf.html') : undefined))));
});
