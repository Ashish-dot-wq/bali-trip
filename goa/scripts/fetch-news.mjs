// Builds news.json for the Goa app's Local news page.
// Runs in GitHub Actions (see .github/workflows/news-goa.yml) every couple of hours.
// Usage: node goa/scripts/fetch-news.mjs <previous.json> <output.json>
// No dependencies (Node 20+). Set FIXTURE_DIR to read saved responses instead of the network (for testing).

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const [, , PREV = "prev.json", OUT = "news.json"] = process.argv;
const FIXTURE_DIR = process.env.FIXTURE_DIR || "";
const MAX_AGE_DAYS = 10;
const MAX_ITEMS = 80;
const PER_PLACE = 10;     // keep up to this many stories for each area
const MAX_GENERAL = 20;   // general Goa stories (no specific area)

const gnews = (q) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-IN&gl=IN&ceid=IN:en`;

// id → source. requireRoad: only keep road/traffic stories from this feed.
const FEEDS = [
  { id: "goa", url: gnews("Goa when:2d") },
  { id: "alerts-goa", url: gnews("Goa (flood OR landslide OR drowning OR drowned OR accident OR \"red alert\" OR \"orange alert\" OR cyclone OR \"rough sea\" OR curfew OR bandh OR \"power cut\" OR \"water cut\") when:7d") },
  { id: "north", url: gnews("\"North Goa\" OR Calangute OR Baga OR Candolim OR Anjuna OR Vagator OR Arpora OR Morjim when:7d") },
  { id: "panaji", url: gnews("Panaji OR Panjim OR \"Old Goa\" when:7d") },
  { id: "south", url: gnews("Palolem OR Agonda OR Canacona OR Colva OR Benaulim OR Margao OR \"South Goa\" when:10d") },
  { id: "route", url: gnews("(Hubballi OR Dharwad OR Belagavi OR Karwar OR Yellapur OR \"Anmod ghat\" OR \"Chorla ghat\" OR NH48 OR NH66) (road OR highway OR traffic OR accident OR closed OR ghat OR landslide) when:7d"), requireRoad: true },
  { id: "airport", url: gnews("\"Goa airport\" OR Mopa OR Dabolim when:7d") }
];

const PLACES = {
  north: /\b(north goa|calangute|baga|candolim|sinquerim|anjuna|vagator|chapora|arpora|morjim|ashwem|mandrem|arambol|siolim|mapusa|nerul)\b/i,
  panaji: /\b(panaji|panjim|old goa|fontainhas|miramar|dona paula|porvorim|ribandar)\b/i,
  south: /\b(south goa|palolem|agonda|patnem|canacona|colva|benaulim|varca|cavelossim|margao|madgaon|cabo de rama|vasco)\b/i,
  route: /\b(hubballi|hubli|dharwad|belagavi|belgaum|anmod|chorla|karwar|ankola|yellapur|mollem|ponda|nh ?48|nh ?66|ramnagar)\b/i,
  airport: /\b(goa airport|dabolim|mopa|manohar international)\b/i
};
const ROAD = /\b(road|roads|highway|nh ?\d+|ghat|traffic|accident|crash|closed|closure|diversion|toll|landslide|bridge|potholes?)\b/i;
const ALERT = /\b(flood\w*|landslide\w*|cyclone|storm|red alert|orange alert|yellow alert|heavy rain|rough sea|high waves|drown\w*|rip current|accident|crash|road closed|closure|diversion|traffic jam|bandh|strike|curfew|section 144|protest|power cut|outage|blackout|water cut|water shortage|outbreak|dengue|fire|evacuat\w*|warning|emergency|cancel\w*|delay\w*|missing)\b/i;
const AREA = /\b(goa|goan|panaji|panjim|calangute|baga|candolim|anjuna|vagator|palolem|agonda|canacona|margao|madgaon|mapusa|mopa|dabolim|karwar|anmod|chorla)\b/i;

// Same word, different topic: FC Goa / cricket fixtures, and Indonesian "goa" (cave) place names
const NOISE = /\b(fc goa|isl|indian super league|ranji|vijay hazare|syed mushtaq|batting|century|innings|wickets?|goa (gajah|lawah|pindul|jomblang|maria)|gua|gold rate|gold price)\b/i;
// All-caps acronyms that aren't the place (e.g. a "GOA report", "BAGA" organisations) — case-sensitive
const NOISE_CAPS = /\b(GOA|BAGA)\b/;

const UA = { "User-Agent": "Mozilla/5.0 (compatible; trip-news-bot/1.0)" };

async function get(id, url) {
  if (FIXTURE_DIR) {
    const f = join(FIXTURE_DIR, id);
    return existsSync(f) ? readFileSync(f, "utf8") : null;
  }
  try {
    const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(15000) });
    if (!res.ok) { console.warn(`${id}: HTTP ${res.status}`); return null; }
    return await res.text();
  } catch (e) {
    console.warn(`${id}: ${e.message}`);
    return null;
  }
}

const decode = (s = "") => s
  .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
  .replace(/<[^>]+>/g, "")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
  .replace(/\s+/g, " ").trim();
const tag = (block, name) => { const m = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i").exec(block); return m ? m[1] : ""; };

function parseRss(xml, feed) {
  const out = [];
  for (const m of xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)) {
    const b = m[0];
    let title = decode(tag(b, "title"));
    let source = decode(tag(b, "source"));
    const link = decode(tag(b, "link")) || decode(tag(b, "guid"));
    const pub = Date.parse(decode(tag(b, "pubDate")));
    if (!title || !/^https?:\/\//.test(link) || !pub) continue;
    // Google News titles end with " - Source"
    const dash = title.lastIndexOf(" - ");
    if (dash > 20 && (feed.url.includes("news.google.com") || (source && title.endsWith(source)))) { source = source || title.slice(dash + 3); title = title.slice(0, dash); }
    if (!source) source = "News";
    const text = `${title} ${decode(tag(b, "description")).slice(0, 400)}`;
    out.push({ title, link, source, published: new Date(pub).toISOString(), text, feed });
  }
  return out;
}

const norm = (t) => t.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").slice(0, 90);

async function main() {
  const now = Date.now();
  const cutoff = now - MAX_AGE_DAYS * 86400000;
  const items = [];
  let okFeeds = 0;
  const feedStats = {};

  for (const feed of FEEDS) {
    const xml = await get(feed.id, feed.url);
    if (!xml) continue;
    okFeeds++;
    let kept = 0;
    // Google News descriptions list *other* headlines, so judge Google items by their title only
    const isGoogle = feed.url.includes("news.google.com");
    for (const it of parseRss(xml, feed)) {
      if (Date.parse(it.published) < cutoff) continue;
      const text = isGoogle ? it.title : it.text;
      if (NOISE.test(text) || NOISE_CAPS.test(it.title)) continue;
      if (feed.requireRoad && !ROAD.test(text)) continue;
      // The headline itself must be about our area (search engines match loosely)
      const places = Object.entries(PLACES).filter(([, re]) => re.test(text)).map(([k]) => k);
      if (!places.length && !AREA.test(text)) continue;
      const alert = ALERT.test(text);
      items.push({ title: it.title, link: it.link, source: it.source, published: it.published, places, alert, kind: "news" });
      kept++;
    }
    feedStats[feed.id] = kept;
  }

  // Dedupe by normalised title, keep the earliest-published copy's source
  const seen = new Map();
  for (const it of items) {
    const k = norm(it.title);
    const prev = seen.get(k);
    if (!prev) seen.set(k, it);
    else prev.alert = prev.alert || it.alert;
  }
  // Balance: every alert, up to PER_PLACE stories per area, then a few general Goa stories
  const byDate = (a, b) => Date.parse(b.published) - Date.parse(a.published);
  const all = [...seen.values()].sort(byDate);
  const pick = new Set(all.filter((x) => x.alert));
  for (const p of Object.keys(PLACES)) all.filter((x) => x.places.includes(p)).slice(0, PER_PLACE).forEach((x) => pick.add(x));
  all.filter((x) => !x.places.length && !x.alert).slice(0, MAX_GENERAL).forEach((x) => pick.add(x));
  let list = [...pick].sort(byDate).slice(0, MAX_ITEMS).map((it, i) => ({ id: i + 1, ...it }));

  // If every source failed, keep the previous file rather than publishing an empty feed
  if (okFeeds === 0 && existsSync(PREV)) {
    try {
      const prev = JSON.parse(readFileSync(PREV, "utf8"));
      if (prev.items?.length) { prev.stale = true; writeFileSync(OUT, JSON.stringify(prev, null, 1)); console.log("All sources failed; kept previous feed"); return; }
    } catch {}
  }

  const out = { updated: new Date(now).toISOString(), sources: okFeeds, alerts: list.filter((x) => x.alert).length, feeds: feedStats, items: list };
  writeFileSync(OUT, JSON.stringify(out, null, 1));
  console.log(`Wrote ${list.length} items (${out.alerts} alerts) from ${okFeeds} sources`, JSON.stringify(feedStats));
}

main().catch((e) => { console.error(e); process.exit(1); });
