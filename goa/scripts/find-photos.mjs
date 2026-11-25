// One-off helper: looks up freely licensed photos on Wikimedia Commons (results reviewed by hand).
import { writeFileSync } from "node:fs";
const QUERIES = ["Om Beach Gokarna", "Kudle beach Gokarna", "Mahabaleshwar temple Gokarna", "Half Moon beach Gokarna", "Gokarna beach", "Yana rocks", "Mirjan fort", "Gokarna town"];
const api = (q) => "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
  action: "query", format: "json", generator: "search", gsrnamespace: "6", gsrsearch: `${q} filetype:bitmap`,
  gsrlimit: "4", prop: "imageinfo", iiprop: "url|extmetadata|size", iiurlwidth: "900",
  iiextmetadatafilter: "Artist|LicenseShortName"
});
const strip = (s = "") => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(url) {
  for (let a = 0; a < 4; a++) {
    const r = await fetch(url, { headers: { "User-Agent": "trip-itinerary-app/1.0 (one-off photo lookup; low volume)" } });
    const t = await r.text();
    try { return JSON.parse(t); } catch { await sleep(5000 * (a + 1)); }
  }
  throw new Error("rate limited");
}
const out = [];
for (const q of QUERIES) {
  await sleep(2000);
  try {
    const j = await getJson(api(q));
    const pages = Object.values(j.query?.pages || {}).sort((a, b) => a.index - b.index);
    out.push({ q, results: pages.map((p) => { const ii = p.imageinfo?.[0] || {}; const m = ii.extmetadata || {};
      return { title: p.title, thumb: ii.thumburl, w: ii.width, h: ii.height, page: ii.descriptionurl, artist: strip(m.Artist?.value).slice(0, 80), license: strip(m.LicenseShortName?.value) }; }) });
  } catch (e) { out.push({ q, error: e.message }); }
}
writeFileSync("photos.json", JSON.stringify(out, null, 1));
