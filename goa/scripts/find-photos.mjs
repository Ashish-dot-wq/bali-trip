// One-off helper: looks up freely licensed Goa photos on Wikimedia Commons
// (run by .github/workflows/goa-photo-lookup.yml; the results are reviewed by hand).
import { writeFileSync } from "node:fs";
const QUERIES = [
  "Mandrem beach", "Arambol beach",
  "Fontainhas Panaji", "Basilica of Bom Jesus", "Se Cathedral Old Goa", "Panaji church Immaculate Conception",
  "Palolem beach", "Agonda beach", "Cabo de Rama fort", "Butterfly beach Goa", "Patnem beach",
  "Anmod ghat", "Karwar beach", "Kali river bridge Karwar", "Western Ghats road Karnataka", "Goa fish thali",
  "Mandovi river Panaji", "Dona Paula Goa", "Goa beach shack", "Goa sunset beach"
];
const api = (q) => "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
  action: "query", format: "json", generator: "search", gsrnamespace: "6", gsrsearch: `${q} filetype:bitmap`,
  gsrlimit: "4", prop: "imageinfo", iiprop: "url|extmetadata|size", iiurlwidth: "900",
  iiextmetadatafilter: "Artist|LicenseShortName|ImageDescription"
});
const strip = (s = "") => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const out = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const r = await fetch(url, { headers: { "User-Agent": "trip-itinerary-app/1.0 (one-off photo lookup; low volume)" } });
    const t = await r.text();
    try { return JSON.parse(t); } catch { await sleep(5000 * (attempt + 1)); } // rate-limited: back off
  }
  throw new Error("rate limited");
}
for (const q of QUERIES) {
  await sleep(2000);
  try {
    const j = await getJson(api(q));
    const pages = Object.values(j.query?.pages || {}).sort((a, b) => a.index - b.index);
    out.push({ q, results: pages.map((p) => {
      const ii = p.imageinfo?.[0] || {}; const m = ii.extmetadata || {};
      return { title: p.title, thumb: ii.thumburl, w: ii.width, h: ii.height, page: ii.descriptionurl,
        artist: strip(m.Artist?.value).slice(0, 80), license: strip(m.LicenseShortName?.value), desc: strip(m.ImageDescription?.value).slice(0, 140) };
    }) });
  } catch (e) { out.push({ q, error: e.message }); }
}
writeFileSync("photos.json", JSON.stringify(out, null, 1));
console.log(`Looked up ${out.length} queries`);
