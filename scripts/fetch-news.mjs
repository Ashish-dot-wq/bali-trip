// Builds news.json for the app's Local news page.
// Runs in GitHub Actions (see .github/workflows/news.yml) every couple of hours.
// Usage: node scripts/fetch-news.mjs <previous.json> <output.json>
// No dependencies (Node 20+). Set FIXTURE_DIR to read saved responses instead of the network (for testing).

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const [, , PREV = "prev.json", OUT = "news.json"] = process.argv;
const FIXTURE_DIR = process.env.FIXTURE_DIR || "";
const MAX_AGE_DAYS = 14;
const MAX_ITEMS = 90;
const PER_PLACE = 8;      // keep up to this many stories for each stop
const MAX_GENERAL = 20;   // general Bali stories (no specific stop)

const gnews = (q) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-ID&gl=ID&ceid=ID:en`;

// id → source. "place" pre-tags everything from that query.
const FEEDS = [
  { id: "bali", url: gnews("Bali when:2d") },
  { id: "alerts-bali", url: gnews("Bali (earthquake OR tsunami OR volcano OR eruption OR flood OR landslide OR evacuation OR \"extreme weather\") when:7d"), alertish: true },
  { id: "alerts-lombok", url: gnews("Lombok (earthquake OR Rinjani OR tsunami OR flood OR landslide) when:7d"), alertish: true },
  { id: "seminyak", url: gnews("Seminyak OR Kuta OR Canggu OR Legian when:7d"), place: "seminyak" },
  { id: "penida", url: gnews("\"Nusa Penida\" OR Sanur when:10d"), place: "penida" },
  { id: "gili", url: gnews("\"Gili Trawangan\" OR \"Gili Islands\" OR \"Gili Air\" when:10d"), place: "gili" },
  { id: "amed", url: gnews("\"Amed Bali\" OR Tulamben OR Karangasem OR \"Padang Bai\" OR \"Mount Agung\" when:14d"), place: "amed" },
  { id: "ubud", url: gnews("Ubud when:7d"), place: "ubud" },
  { id: "airport", url: gnews("\"Ngurah Rai\" OR \"Bali airport\" when:7d"), place: "airport" },
  { id: "boats", url: gnews("\"fast boat\" (Bali OR Gili OR Lombok) when:14d") },
  { id: "balisun", url: "https://thebalisun.com/feed/" }
];
const BMKG = [
  { id: "bmkg-felt", url: "https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json" },
  { id: "bmkg-m5", url: "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json" }
];

const PLACES = {
  seminyak: /\b(seminyak|kuta|canggu|legian|petitenget|badung)\b/i,
  penida: /\b(nusa penida|kelingking|nusa lembongan|sanur)\b/i,
  gili: /\b(gilis?|trawangan)\b/i,
  lombok: /\b(lombok|rinjani|mataram|bangsal)\b/i,
  amed: /\b(amed (beach|bali|village)|tulamben|karangasem|mount agung|gunung agung|padang ?bai|amlapura|jemeluk)\b/i,
  ubud: /\b(ubud|gianyar|tegallalang)\b/i,
  airport: /\b(ngurah rai|bali airport|denpasar airport|i gusti ngurah)\b/i
};
const ALERT = /\b(earthquake|quake|tremor|tsunami|erupt\w*|volcan\w*|ash cloud|flood\w*|landslide\w*|evacuat\w*|warning|state of emergency|emergency|closed|closure|cancel\w*|suspend\w*|strike|protest|riot|outage|blackout|water crisis|without water|disrupt\w*|shortage|delay\w*|outbreak|rabies|dengue|methanol|poison\w*|drown\w*|rip current|storm|cyclone|high waves|extreme weather|missing|injur\w*|plunge\w*|killed|overturn\w*|toppl\w*|collaps\w*|stranded|rescued)\b/i;
// Must also be about one of our areas to count as an alert
const AREA = /\b(bali|lombok|gilis?|nusa penida|seminyak|kuta|canggu|ubud|amed (?:beach|bali|village)|tulamben|karangasem|agung|padang ?bai|sanur|denpasar|ngurah rai|rinjani)\b/i;

// Same word, different topic (e.g. Odisha's "Bali Yatra" festival, brands and people called Bali)
const NOISE = /\b(odisha|cuttack|kalinga|paradip|bali ?(yatra|jatra)|bali lawal|bali curls|amed (sk|sportif|spor)|rizespor|diyarbak\w*|kurdistan|amed\.du)\b/i;

// Words that make a story NOT an alert even if it mentions floods, protests etc. (drills, campaigns, events elsewhere)
const NOT_ALERT = /\b(mock drill|drills?|awareness|campaign|seminar|workshop|exhibition|jantar mantar|dining|restaurant|menu|chef|cocktails?)\b/i;

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
    if (!source) source = feed.id === "balisun" ? "The Bali Sun" : "News";
    const text = `${title} ${decode(tag(b, "description")).slice(0, 400)}`;
    out.push({ title, link, source, published: new Date(pub).toISOString(), text, feed });
  }
  return out;
}

function parseBmkg(json) {
  try {
    const data = JSON.parse(json);
    const list = [].concat(data?.Infogempa?.gempa || []);
    return list.map((g) => {
      const [lat, lon] = String(g.Coordinates || "").split(",").map(Number);
      return { ...g, lat, lon };
    }).filter((g) => g.lat <= -7.8 && g.lat >= -9.4 && g.lon >= 114.3 && g.lon <= 116.9); // Bali + Lombok box
  } catch { return []; }
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
      if (NOISE.test(text)) continue;
      // The headline itself must be about our area (search engines match loosely)
      const places = Object.entries(PLACES).filter(([, re]) => re.test(text)).map(([k]) => k);
      if (!places.length && !AREA.test(text)) continue;
      const alert = ALERT.test(text) && !NOT_ALERT.test(text);
      const natural = /\b(erupt\w*|volcan\w*|earthquake|quake|tsunami)\b/i.test(text);
      items.push({ title: it.title, link: it.link, source: it.source, published: it.published, places, alert, kind: "news",
        ...(alert && natural ? { detail: "News report: check BMKG / MAGMA for the current official status" } : {}) });
      kept++;
    }
    feedStats[feed.id] = kept;
  }

  for (const src of BMKG) {
    const json = await get(src.id, src.url);
    if (!json) continue;
    okFeeds++;
    for (const g of parseBmkg(json)) {
      const when = Date.parse(g.DateTime || "");
      if (!when || when < cutoff) continue;
      const mag = Number(g.Magnitude);
      const place = /lombok|ntb|mataram/i.test(g.Wilayah || "") ? "lombok" : (/karangasem/i.test(g.Wilayah || "") ? "amed" : null);
      items.push({
        title: `M${mag.toFixed(1)} earthquake: ${g.Wilayah || "Bali–Lombok region"}${g.Dirasakan ? ` (felt: ${g.Dirasakan})` : ""}`,
        link: "https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan",
        source: "BMKG (Indonesian earthquake agency)",
        published: new Date(when).toISOString(),
        places: place ? [place] : [],
        alert: mag >= 4.5 || /tsunami/i.test(g.Potensi || ""),
        kind: "quake",
        detail: [g.Kedalaman && `Depth ${g.Kedalaman}`, g.Potensi].filter(Boolean).join(" · ")
      });
    }
  }

  // Dedupe: exact title matches, then near-duplicates (the same story worded differently by
  // different outlets, e.g. "Fire guts four Calangute shacks" / "Aid for fire-hit Calangute shacks").
  const STOP = new Set("the a an and or of in on at to for from with by after as is are was were be this that its it new over amid into after says said".split(" "));
  const words = (t) => new Set(norm(t).split(" ").filter((w) => w.length > 3 && !STOP.has(w)).map((w) => (w.length > 4 ? w.replace(/s$/, "") : w)));
  // share at least 3 key words AND at least half of the shorter headline's key words
  const similar = (a, b) => { let n = 0; for (const w of a) if (b.has(w)) n++; return n >= 3 ? n / Math.min(a.size, b.size) : 0; };
  const seen = new Map();
  const kept = [];
  for (const it of items.sort((a, b) => Date.parse(b.published) - Date.parse(a.published))) {
    const k = norm(it.title);
    if (seen.has(k)) { seen.get(k).alert = seen.get(k).alert || it.alert; continue; }
    const w = words(it.title);
    const dup = kept.find((x) => Math.abs(Date.parse(x.published) - Date.parse(it.published)) < 4 * 86400000 && w.size >= 3 && x._w.size >= 3 && similar(w, x._w) >= 0.5);
    if (dup) { dup.alert = dup.alert || it.alert; dup.places = [...new Set([...dup.places, ...it.places])]; continue; }
    it._w = w; seen.set(k, it); kept.push(it);
  }
  kept.forEach((x) => delete x._w);
  // Balance: every alert, up to PER_PLACE stories per stop, then a few general Bali stories
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
