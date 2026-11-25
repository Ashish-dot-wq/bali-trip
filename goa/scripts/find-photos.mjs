// One-off helper: looks up freely licensed Goa photos on Wikimedia Commons
// (run by .github/workflows/goa-photo-lookup.yml; the results are reviewed by hand).
import { writeFileSync } from "node:fs";
const QUERIES = [
  "Candolim beach Goa", "Fort Aguada Goa", "Sinquerim beach", "Chapora Fort", "Vagator beach", "Anjuna beach",
  "Baga beach Goa", "Calangute beach", "Morjim beach", "Ashwem beach", "Mandrem beach", "Arambol beach",
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
for (const q of QUERIES) {
  try {
    const r = await fetch(api(q), { headers: { "User-Agent": "trip-itinerary-app/1.0 (photo lookup)" } });
    const j = await r.json();
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
