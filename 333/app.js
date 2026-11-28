// Bali 2026 — mobile itinerary app (renders from data.js → TRIP)
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const view = $("#view");
  const N = TRIP.days.length;

  // ---------- storage (optional; app works without it) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  // ---------- helpers ----------
  const PLACE_RE = /\{\{([^}|]+)(?:\|([^}]+))?\}\}/g;
  const stripEmoji = (s) => s.replace(/^[^\p{L}\p{N}]+/u, "").trim();
  const mapUrl = (label, query) =>
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent((query || stripEmoji(label) + " Bali").trim());

  function linkify(text) {
    return text.replace(PLACE_RE, (_, label, query) =>
      `<a class="place" href="${mapUrl(label, query)}" target="_blank" rel="noopener">${label.trim()}</a>`);
  }

  function placesOf(day) {
    const seen = new Set(), out = [];
    const all = day.rows.map((r) => r[1] + " " + r[2]).join(" ") + " " + (day.extras || "");
    all.replace(PLACE_RE, (_, label, query) => {
      const key = stripEmoji(label);
      if (!seen.has(key)) { seen.add(key); out.push({ label: label.trim(), url: mapUrl(label, query) }); }
      return "";
    });
    return out;
  }

  // "08:30 AM - 10:00 AM" → { start: "8:30 AM", end: "10:00 AM" }
  const trimZero = (s) => (s || "").replace(/^0(\d:)/, "$1");
  function splitTime(t) {
    const [a, b] = t.split(" - ");
    return { start: trimZero(a), end: trimZero(b) };
  }

  // ---------- Bali clock ----------
  // Preview any moment with ?now=2026-12-22T13:00 (Bali time) in the URL.
  const NOW_OVERRIDE = (() => {
    const v = new URLSearchParams(location.search).get("now");
    const m = v && /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/.exec(v);
    return m ? { ymd: `${m[1]}-${m[2]}-${m[3]}`, mins: Number(m[4]) * 60 + Number(m[5]) } : null;
  })();
  function baliNow() {
    if (NOW_OVERRIDE) return NOW_OVERRIDE;
    try {
      const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Makassar", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
      }).formatToParts(new Date()).map((x) => [x.type, x.value]));
      return { ymd: `${p.year}-${p.month}-${p.day}`, mins: Number(p.hour) * 60 + Number(p.minute) };
    } catch (e) { return null; }
  }
  // Trip day number for today in Bali, or null outside 18–27 Dec 2026
  function tripDayToday() {
    const now = baliNow();
    const m = now && /^2026-12-(\d\d)$/.exec(now.ymd);
    if (m) { const n = Number(m[1]) - 17; if (n >= 1 && n <= N) return n; }
    return null;
  }
  const todayIndex = () => tripDayToday() || 1;

  // "08:30 AM" → minutes after midnight
  function toMins(s) {
    const m = /(\d+):(\d+)\s*(AM|PM)/.exec(s || "");
    if (!m) return null;
    let h = Number(m[1]) % 12; if (m[3] === "PM") h += 12;
    return h * 60 + Number(m[2]);
  }
  // Index of the activity happening now and the next one (only on today's date)
  function nowNext(d) {
    if (tripDayToday() !== d.day) return { now: -1, next: -1 };
    const t = baliNow().mins;
    let now = -1, next = -1;
    d.rows.forEach(([time], i) => {
      const [a, b] = time.split(" - ");
      const s = toMins(a); let e = toMins(b); if (e !== null && e < s) e += 1440;
      if (now === -1 && s <= t && t < e) now = i;
      if (next === -1 && s > t) next = i;
    });
    return { now, next };
  }

  // ---------- local news (built every 2 h by .github/workflows/news.yml) ----------
  // Primary: GitHub API (cached ~60 s). Fallback: raw file (cached ~5 min; ignores ?t= cache-busting).
  const NEWS_API = "https://api.github.com/repos/Ashish-dot-wq/bali-trip/contents/news.json?ref=news-feed";
  const NEWS_URL = "https://raw.githubusercontent.com/Ashish-dot-wq/bali-trip/news-feed/news.json";
  async function fetchFeed(force) {
    try {
      const r = await fetch(NEWS_API, { headers: { Accept: "application/vnd.github.raw+json" }, cache: force ? "no-store" : "no-cache" });
      if (r.ok) return await r.json();
    } catch (e) { /* fall through to raw */ }
    const r = await fetch(NEWS_URL, { cache: force ? "no-store" : "no-cache" });
    if (!r.ok) throw new Error(r.status);
    return r.json();
  }
  const PLACE_LABEL = { seminyak: "Seminyak", penida: "Nusa Penida", gili: "Gili T", lombok: "Lombok", amed: "East Bali", ubud: "Ubud", airport: "Airport" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^https?:\/\//i.test(u || "") ? u : "#");
  function ago(iso) {
    const m = Math.round((Date.now() - Date.parse(iso)) / 60000);
    if (!isFinite(m)) return "";
    if (m < 1) return "just now";
    if (m < 60) return `${m} min ago`;
    const h = Math.round(m / 60); if (h < 24) return `${h} h ago`;
    const d = Math.round(h / 24); return `${d} day${d > 1 ? "s" : ""} ago`;
  }
  // A story only counts as an alert while it's recent (older ones show as normal news)
  const ALERT_HOURS = 72;
  const isAlert = (it) => !!it.alert && Date.now() - Date.parse(it.published) < ALERT_HOURS * 3600000;
  let news = store.get("bali333-news", null); // { data, fetchedAt }
  let newsTried = false;
  async function loadNews(force) {
    if (!force && news && Date.now() - news.fetchedAt < 15 * 60000) return news;
    try {
      const data = await fetchFeed(force);
      if (!data || !Array.isArray(data.items)) throw new Error("bad feed");
      news = { data, fetchedAt: Date.now() };
      store.set("bali333-news", news);
    } catch (e) {
      if (force) toast(news ? "Couldn't refresh. Showing saved news." : "Couldn't reach the news feed.");
    }
    newsTried = true;
    return news;
  }

  // Headline strip on the Days screen
  let tickerTimer = null;
  function fillTicker() {
    const el = $("#ticker", view);
    if (!el || !news || !news.data.items.length) return;
    const items = news.data.items;
    const alerts = items.filter(isAlert).slice(0, 3);
    const pick = [...alerts, ...items.filter((x) => !alerts.includes(x)).slice(0, 5)].map((x) => ({ ...x, alert: alerts.includes(x) }));
    let i = 0;
    const show = () => {
      const it = pick[i % pick.length];
      el.classList.toggle("alert", !!it.alert);
      el.innerHTML = `<span class="tk-ic" aria-hidden="true">${it.alert ? "⚠️" : "📰"}</span>
        <span class="tk-txt"><b>${it.alert ? "Alert" : "News"}</b> ${esc(it.title)}</span><span class="tk-go" aria-hidden="true">›</span>`;
      el.setAttribute("aria-label", `${it.alert ? "Alert" : "News"}: ${it.title}. Open local news`);
      i++;
    };
    el.hidden = false; show();
    clearInterval(tickerTimer);
    if (pick.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) tickerTimer = setInterval(show, 6000);
  }

  // ---------- views ----------
  const TITLES = { day: "Day by day", table: "Full table", glance: "Trip at a glance", dive: "Dive plan", checklist: "Before you go", party: "Party guide", faq: "FAQs", drive: "Driving permit", packing: "Packing list", news: "Local news", drone: "Drone (Avata 2)" };

  function chipBar(active) {
    const today = tripDayToday();
    return `<nav class="chips" aria-label="Choose a day">${TRIP.days.map((d) => {
      const kind = d.day === 1 ? "half" : d.day === N ? "fly" : "full";
      const [dow, md] = d.date.split(", ");
      return `<a class="chip ${kind}${d.day === active ? " on" : ""}${d.day === today ? " today" : ""}" href="#day-${d.day}"${d.day === active ? ' aria-current="page"' : ""} aria-label="Day ${d.day}, ${d.date}${d.day === today ? " (today)" : ""}">
        <span class="c-dow">${dow}</span><span class="c-num">${md.replace("Dec ", "")}</span><span class="c-bar"></span></a>`;
    }).join("")}</nav>`;
  }

  function dayView(n) {
    const d = TRIP.days[n - 1];
    const mode = store.get("bali333-mode", "photos");
    const places = placesOf(d);

    const seg = `<div class="seg" role="group" aria-label="View mode">
      <button type="button" data-mode="photos" aria-pressed="${mode === "photos"}">📷 Photos &amp; plan</button>
      <button type="button" data-mode="table" aria-pressed="${mode === "table"}">📋 Table</button>
    </div>`;

    const label = `Day ${d.day} of ${N} · ${d.date}`;
    const nn = nowNext(d);
    const rowCls = (i) => (i === nn.now ? "is-now" : i === nn.next ? "is-next" : "");
    const flag = (i) => (i === nn.now ? '<span class="flag now">Now</span>' : i === nn.next ? '<span class="flag next">Next</span>' : "");
    const strip = (s) => s.replace(/\{\{([^}|]+)(?:\|[^}]+)?\}\}/g, "$1").replace(/<[^>]+>/g, "");
    const nextRow = nn.next >= 0 ? d.rows[nn.next] : null;
    const banner = (nn.now >= 0 || nextRow) ? `<div class="nowbar" role="status">
        ${nn.now >= 0 ? `<div><span class="flag now">Now</span> ${strip(d.rows[nn.now][1])}</div>` : ""}
        ${nextRow ? `<div><span class="flag next">Next</span> ${splitTime(nextRow[0]).start} · ${strip(nextRow[1])}</div>` : ""}
      </div>` : "";

    let body;
    if (mode === "photos") {
      const slides = d.photos.map((p, i) => `
        <figure class="slide">
          <img src="${p.url}" alt="${p.caption}" ${i ? 'loading="lazy"' : ""} decoding="async" onerror="this.closest('.slide').classList.add('broken')">
          <figcaption>${p.caption}</figcaption>
        </figure>`).join("");
      body = `
        <div class="hero">
          <div class="slides" id="slides">${slides}</div>
          <div class="hero-top"><span class="pill">${label}</span></div>
          <div class="hero-bottom">
            <h1>${d.title}</h1>
            <span class="base">🏨 ${d.base}</span>
          </div>
          ${d.photos.length > 1 ? `<div class="dots" aria-hidden="true">${d.photos.map((_, i) => `<i${i ? "" : ' class="on"'}></i>`).join("")}</div>` : ""}
        </div>
        ${places.length ? `<div class="sec-t">Places today</div><div class="places">${places.map((p) =>
          `<a class="place-chip" href="${p.url}" target="_blank" rel="noopener">${p.label}</a>`).join("")}</div>` : ""}
        <div class="sec-t">Plan</div>
        ${banner}
        <ol class="timeline">${d.rows.map(([t, act, log], i) => {
          const { start, end } = splitTime(t);
          return `<li class="${rowCls(i)}">
            <div class="tl-time"><b>${start}</b><span>${end}</span>${flag(i)}</div>
            <div class="tl-body"><div class="tl-act">${linkify(act)}</div><div class="tl-det">${linkify(log)}</div></div>
          </li>`;
        }).join("")}</ol>`;
    } else {
      body = `
        <header class="day-hd">
          <span class="pill dark">${label}</span>
          <h1>${d.title}</h1>
          <span class="base">🏨 ${d.base}</span>
        </header>
        ${banner}
        <div class="tbl-card">
          <table class="daytable">
            <thead><tr><th scope="col">Time</th><th scope="col">Activity &amp; details</th></tr></thead>
            <tbody>${d.rows.map(([t, act, log], i) => {
              const { start, end } = splitTime(t);
              return `<tr class="${rowCls(i)}"><td class="t"><b>${start}</b><span>${end}</span>${flag(i)}</td>
                <td><div class="a">${linkify(act)}</div><div class="det">${linkify(log)}</div></td></tr>`;
            }).join("")}</tbody>
          </table>
        </div>`;
    }

    const notes = `
      ${d.tip ? `<div class="note tip"><b>💡 Pro tip</b><p>${linkify(d.tip)}</p></div>` : ""}
      ${d.extras ? `<div class="note opt"><b>➕ Optional</b><p>${linkify(d.extras)}</p></div>` : ""}
      ${d.day === 4 || d.day === 5 ? `<a class="note link" href="#dive"><b>🤿 Dive plan</b><p>Discover Scuba with Manta Dive on Gili T →</p></a>` : ""}`;

    const prev = n > 1 ? TRIP.days[n - 2] : null, next = n < N ? TRIP.days[n] : null;
    const pager = `<nav class="pager" aria-label="Previous and next day">
      ${prev ? `<a href="#day-${n - 1}"><small>‹ Previous</small><b>Day ${n - 1} · ${prev.title}</b></a>` : "<span></span>"}
      ${next ? `<a class="r" href="#day-${n + 1}"><small>Next ›</small><b>Day ${n + 1} · ${next.title}</b></a>` : "<span></span>"}
    </nav>`;

    view.innerHTML = `${chipBar(n)}<div class="pad"><a class="ticker" id="ticker" href="#news" hidden></a>${seg}<article class="day" data-day="${n}">${body}${notes}</article>${pager}</div>`;

    // segmented control
    view.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => {
      store.set("bali333-mode", b.dataset.mode);
      dayView(n);
    }));

    // carousel dots
    const slides = $("#slides", view);
    if (slides) {
      const dots = view.querySelectorAll(".dots i");
      slides.addEventListener("scroll", () => {
        const i = Math.round(slides.scrollLeft / slides.clientWidth);
        dots.forEach((dot, k) => dot.classList.toggle("on", k === i));
      }, { passive: true });
    }

    // news strip: show saved headlines now, refresh in the background
    fillTicker();
    loadNews(false).then(() => { if ($(".day", view)?.dataset.day == n) fillTicker(); });

    // keep the active day chip visible
    const on = $(".chip.on", view);
    if (on) on.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function tableView() {
    const bodies = TRIP.days.map((d) => {
      return `<tbody>
        <tr class="dayrow"><th colspan="3" scope="colgroup">
          <a href="#day-${d.day}">Day ${d.day} · ${d.date}</a><span>🏨 ${d.base}</span>
        </th></tr>
        ${d.rows.map(([t, act, log]) => {
          const { start, end } = splitTime(t);
          return `<tr>
            <td class="c-time"><b>${start}</b><span>${end}</span></td>
            <td class="c-act">${linkify(act)}</td>
            <td class="c-log">${linkify(log)}</td>
          </tr>`;
        }).join("")}
      </tbody>`;
    }).join("");

    view.innerHTML = `<div class="pad wide">
      <h1 class="h">Full itinerary</h1>
      <p class="hint">All 10 days. Tap a day's heading to open it with photos.</p>
      <div class="full-wrap">
        <table class="full">
          <colgroup><col class="w-time"><col class="w-act"><col class="w-log"></colgroup>
          <thead><tr><th>Time</th><th>Activity</th><th>Logistics &amp; details</th></tr></thead>
          ${bodies}
        </table>
      </div>
    </div>`;
  }

  function glanceView() {
    view.innerHTML = "";
    view.appendChild($("#tpl-glance").content.cloneNode(true));
    $("#dayStrip", view).innerHTML = TRIP.days.map((d) => {
      const kind = d.day === 1 ? "half" : d.day === N ? "fly" : "full";
      const [dow, md] = d.date.split(", ");
      return `<a class="ds ${kind}" href="#day-${d.day}" aria-label="Day ${d.day}, ${d.date}"><span>${dow}</span><b>${md.replace("Dec ", "")}</b><i></i></a>`;
    }).join("");
    // Countdown: departure is 00:55 IST on 18 Dec = 19:25 UTC on 17 Dec
    const dep = Date.UTC(2026, 11, 17, 19, 25);
    const today = tripDayToday();
    let cd;
    if (today) cd = `🌴 <b>Day ${today} of ${N}</b> · enjoy it!`;
    else if (NOW_OVERRIDE ? NOW_OVERRIDE.ymd > "2026-12-27" : Date.now() > Date.UTC(2026, 11, 27, 9, 45)) cd = "✅ Trip complete. Terima kasih, Bali!";
    else {
      // calendar days (India time) until the night of Thu 17 Dec
      let days;
      try {
        const ist = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date()).split("-").map(Number);
        days = Math.round((Date.UTC(2026, 11, 17) - Date.UTC(ist[0], ist[1] - 1, ist[2])) / 86400000);
      } catch (e) { days = Math.ceil((dep - Date.now()) / 86400000); }
      cd = days > 1 ? `⏳ <b>${days} days to go</b> · fly out Thu night, 17 Dec`
        : days === 1 ? "⏳ <b>Tomorrow night!</b> Be at BLR T2 by ~10 PM."
        : "✈️ <b>Flying tonight!</b> Be at BLR T2 by ~10 PM.";
    }
    $("#countdown", view).innerHTML = cd;
    $("#stays", view).innerHTML = TRIP.stays.map((s) =>
      `<li><span class="st-n">${s.nights}N</span><span><b>${s.place}</b><small>${s.dates}</small></span></li>`).join("");
    tick();
  }

  function diveView() {
    const n = TRIP.diveNote;
    view.innerHTML = `<div class="pad">
      <h1 class="h">${n.title.replace(/^🔑\s*/, "")}</h1>
      <ol class="steps">${n.points.map((p) => `<li>${linkify(p)}</li>`).join("")}</ol>
      <div class="two-btn">
        <a class="btn" href="#day-4">Day 4 · Sign up</a>
        <a class="btn" href="#day-5">Day 5 · Dive day</a>
      </div>
    </div>`;
  }

  function checklistView() {
    const done = new Set(store.get("bali333-check", []));
    const total = TRIP.checklist.length;
    const render = () => {
      const count = TRIP.checklist.filter((_, i) => done.has(i)).length;
      view.innerHTML = `<div class="pad">
        <h1 class="h">Before you go</h1>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${count}">
          <div class="pg-bar"><i style="width:${(count / total) * 100}%"></i></div>
          <span>${count} of ${total} done</span>
        </div>
        <ul class="checklist">${TRIP.checklist.map((c, i) => `
          <li><label class="${done.has(i) ? "done" : ""}">
            <input type="checkbox" data-i="${i}" ${done.has(i) ? "checked" : ""}>
            <span class="box" aria-hidden="true"></span>
            <span class="ci">${c.icon}</span>
            <span class="ct"><b>${c.title}</b><small>${c.text}</small></span>
          </label></li>`).join("")}</ul>
        <p class="fine">Ticks are saved on this phone only. Fees and rules change, so check the official sites before paying.</p>
        ${count ? `<button type="button" class="btn ghost" id="resetCheck">Clear all ticks</button>` : ""}
      </div>`;
      view.querySelectorAll("input[type=checkbox]").forEach((cb) => cb.addEventListener("change", () => {
        const i = Number(cb.dataset.i);
        cb.checked ? done.add(i) : done.delete(i);
        store.set("bali333-check", [...done]);
        const y = window.scrollY; render(); window.scrollTo(0, y);
      }));
      $("#resetCheck", view)?.addEventListener("click", () => { done.clear(); store.set("bali333-check", []); render(); });
    };
    render();
  }

  function partyView() {
    const p = TRIP.party;
    view.innerHTML = `<div class="pad">
      <h1 class="h">Party guide</h1>
      <p class="intro">${p.intro}</p>
      ${p.stops.map((st) => `
        <section class="pg">
          <div class="pg-head"><h2>${st.place}</h2><span>${st.when}</span></div>
          <p class="pg-vibe">${st.vibe}</p>
          <div class="pg-best">${st.best}</div>
          <ul class="venues">${st.venues.map((v) => `
            <li>
              <div class="v-top"><a class="place" href="${mapUrl(v.name, v.q)}" target="_blank" rel="noopener">${v.name}</a><span class="tag">${v.tag}</span></div>
              <p>${v.text}</p>
            </li>`).join("")}</ul>
          ${st.note ? `<p class="fine">${st.note}</p>` : ""}
        </section>`).join("")}
      <h2 class="h2">Stay safe</h2>
      <ul class="safety">${p.safety.map((x) => `<li>${x}</li>`).join("")}</ul>
    </div>`;
  }

  function driveView() {
    const d = TRIP.idp;
    view.innerHTML = `<div class="pad">
      <h1 class="h">International Driving Permit</h1>
      <p class="intro">${d.intro}</p>
      <div class="warn">⏰ ${d.deadline}</div>
      <h2 class="h2">What you need first</h2>
      <ul class="safety">${d.need.map((x) => `<li>${x}</li>`).join("")}</ul>
      <h2 class="h2">How to get it (India)</h2>
      <ol class="steps">${d.steps.map((x) => `<li><b>${x.t}.</b> ${x.d}</li>`).join("")}</ol>
      <h2 class="h2">Riding in Bali</h2>
      <ul class="safety">${d.bali.map((x) => `<li>${x}</li>`).join("")}</ul>
      <p class="fine">Fees, documents and steps vary by state and change over time. Confirm on parivahan.gov.in or with your RTO.</p>
    </div>`;
  }

  function packingView() {
    const done = new Set(store.get("bali333-pack", []));
    const all = TRIP.packing.flatMap((g) => g.items.map(([id]) => id));
    const render = () => {
      const count = all.filter((id) => done.has(id)).length;
      view.innerHTML = `<div class="pad">
        <h1 class="h">Packing list</h1>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${all.length}" aria-valuenow="${count}">
          <div class="pg-bar"><i style="width:${(count / all.length) * 100}%"></i></div>
          <span>${count} of ${all.length} packed</span>
        </div>
        ${TRIP.packing.map((g) => {
          const gDone = g.items.filter(([id]) => done.has(id)).length;
          return `<h2 class="h2">${g.group} <span class="g-count">${gDone}/${g.items.length}</span></h2>
          <ul class="checklist compact">${g.items.map(([id, text]) => `
            <li><label class="${done.has(id) ? "done" : ""}">
              <input type="checkbox" data-id="${id}" ${done.has(id) ? "checked" : ""}>
              <span class="box" aria-hidden="true"></span>
              <span class="ct"><b>${text}</b></span>
            </label></li>`).join("")}</ul>`;
        }).join("")}
        <p class="fine">Ticks are saved on this phone only.</p>
        ${count ? `<button type="button" class="btn ghost" id="resetPack">Clear all ticks</button>` : ""}
      </div>`;
      view.querySelectorAll("input[type=checkbox]").forEach((cb) => cb.addEventListener("change", () => {
        cb.checked ? done.add(cb.dataset.id) : done.delete(cb.dataset.id);
        store.set("bali333-pack", [...done]);
        const y = window.scrollY; render(); window.scrollTo(0, y);
      }));
      $("#resetPack", view)?.addEventListener("click", () => { done.clear(); store.set("bali333-pack", []); render(); });
    };
    render();
  }

  function newsView() {
    const filter = store.get("bali333-news-filter", "all");
    const FILTERS = [["all", "All"], ["alerts", "⚠️ Alerts"], ["seminyak", "Seminyak"], ["penida", "Nusa Penida"], ["gili", "Gili T & Lombok"], ["amed", "East Bali"], ["ubud", "Ubud"], ["airport", "Airport"]];
    const match = (it) => filter === "all" ? true : filter === "alerts" ? isAlert(it)
      : filter === "gili" ? it.places.some((p) => p === "gili" || p === "lombok") : it.places.includes(filter);
    const render = () => {
      const d = news && news.data;
      const items = d ? d.items.filter(match) : [];
      view.innerHTML = `<div class="pad">
        <div class="news-head"><h1 class="h">Local news</h1>
          <button type="button" class="btn sm" id="newsRefresh">↻ Refresh</button></div>
        <p class="fine news-meta">${d ? `Updated ${ago(d.updated)}${d.stale ? " (sources unreachable, showing last good copy)" : ""} · refreshes every 2 hours` : newsTried ? "Couldn't reach the news feed. Check your connection, then tap Refresh." : "Loading…"}</p>
        ${d && Date.now() - Date.parse(d.updated) > 5 * 3600000 ? `<div class="warn">⏳ The news feed is running late (GitHub's scheduler hasn't refreshed it for a while). Tap Refresh in a bit; for anything urgent, check BMKG/MAGMA below.</div>` : ""}
        <div class="filters" role="group" aria-label="Filter news">${FILTERS.map(([k, l]) =>
          `<button type="button" data-f="${k}" aria-pressed="${k === filter}">${l}</button>`).join("")}</div>
        ${!d ? `<div class="empty">The news feed is starting up. It refreshes every 2 hours, so check back soon.</div>`
          : !items.length ? `<div class="empty">Nothing in the last two weeks for this filter. That's usually good news.</div>`
          : `<ul class="news-list">${items.map((it) => `
            <li class="${isAlert(it) ? "alert" : ""}">
              <a href="${esc(safeUrl(it.link))}" target="_blank" rel="noopener">
                <span class="n-title">${isAlert(it) ? '<span class="flag alert">Alert</span> ' : ""}${esc(it.title)}</span>
                ${it.detail ? `<span class="n-detail">${esc(it.detail)}</span>` : ""}
                <span class="n-meta">${esc(it.source)} · ${ago(it.published)}${it.places.length ? " · " + it.places.map((p) => esc(PLACE_LABEL[p] || p)).join(", ") : ""}</span>
              </a>
            </li>`).join("")}</ul>`}
        <h2 class="h2">In an emergency</h2>
        <ul class="safety">
          <li><b>Call 112</b> from any phone in Indonesia (police, ambulance, fire).</li>
          <li><a class="place" href="https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan" target="_blank" rel="noopener">BMKG earthquakes &amp; tsunami warnings</a> (official)</li>
          <li><a class="place" href="https://magma.esdm.go.id/" target="_blank" rel="noopener">MAGMA Indonesia volcano status</a> (Agung, Batur, Rinjani)</li>
          <li><a class="place" href="${mapUrl("Consulate General of India", "Consulate General of India Denpasar Bali")}" target="_blank" rel="noopener">Consulate General of India, Bali</a> (lost passport, serious trouble)</li>
        </ul>
        <p class="fine">Headlines are pulled automatically from Google News, The Bali Sun and BMKG, then matched to your stops. They can miss things or be off-topic; for anything serious, check official sources and your hotel.</p>
      </div>`;
      view.querySelectorAll(".filters button").forEach((b) => b.addEventListener("click", () => {
        store.set("bali333-news-filter", b.dataset.f); newsView();
      }));
      $("#newsRefresh", view).addEventListener("click", async (e) => {
        e.currentTarget.disabled = true; e.currentTarget.textContent = "Refreshing…";
        await loadNews(true); if (document.body.dataset.view === "news") render();
      });
    };
    render();
    if (!news) loadNews(false).then(() => { if (document.body.dataset.view === "news") render(); });
  }

  function droneView() {
    const d = TRIP.drone;
    view.innerHTML = `<div class="pad">
      <h1 class="h">Drone: DJI Avata 2</h1>
      <p class="intro">${d.intro}</p>
      ${d.sections.map((s, i) => `
        <h2 class="h2">${s.title}</h2>
        <ul class="safety${i === 0 ? " primary" : ""}">${s.items.map((x) => `<li>${x}</li>`).join("")}</ul>`).join("")}
      <p class="fine">Rules here come from travel and drone guides plus airline/DJI guidance, and some points conflict between sources. Confirm with BLR Customs and the DGCA before you go, and check the DJI Fly app's GEO zones before every flight.</p>
    </div>`;
  }

  function faqView() {
    view.innerHTML = `<div class="pad">
      <h1 class="h">FAQs</h1>
      <div class="faq">${TRIP.faq.map((f) => `
        <details>
          <summary>${f.q}</summary>
          <p>${f.a}</p>
        </details>`).join("")}</div>
      <p class="fine">Fees, rates and rules change. Check official sources before paying.</p>
    </div>`;
  }

  // ---------- router ----------
  function route() {
    clearInterval(tickerTimer);
    if (typeof closeMenu === "function") closeMenu(false); // e.g. phone Back button while the menu is open
    const h = location.hash.replace("#", "");
    let name = "day", n = null;
    const m = /^day-(\d+)$/.exec(h);
    if (m) { n = Math.min(Math.max(Number(m[1]), 1), N); }
    else if (["table", "glance", "dive", "checklist", "party", "faq", "drive", "packing", "news", "drone"].includes(h)) name = h;
    else if (h === "day" || h === "") n = tripDayToday() || store.get("bali333-day", 1);
    else n = 1;

    if (name === "day") { store.set("bali333-day", n); dayView(n); }
    else if (name === "table") tableView();
    else if (name === "glance") glanceView();
    else if (name === "dive") diveView();
    else if (name === "party") partyView();
    else if (name === "faq") faqView();
    else if (name === "drive") driveView();
    else if (name === "packing") packingView();
    else if (name === "news") newsView();
    else if (name === "drone") droneView();
    else checklistView();

    $("#viewTitle").textContent = name === "day" ? `Day ${n} · ${TRIP.days[n - 1].base}` : TITLES[name];
    document.querySelectorAll("[data-tab]").forEach((a) => a.setAttribute("aria-current", a.dataset.tab === name ? "page" : "false"));
    document.querySelectorAll(".menu-list a").forEach((a) => a.setAttribute("aria-current", a.dataset.view === name ? "page" : "false"));
    document.body.dataset.view = name;
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  // ---------- swipe between days ----------
  let sx = 0, sy = 0, swipeOk = false;
  view.addEventListener("touchstart", (e) => {
    const t = e.touches[0]; sx = t.clientX; sy = t.clientY;
    swipeOk = document.body.dataset.view === "day" && !e.target.closest(".slides, .chips, .places, .seg");
  }, { passive: true });
  view.addEventListener("touchend", (e) => {
    if (!swipeOk) return;
    const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.8) return;
    const cur = Number($(".day", view)?.dataset.day || 1);
    const nxt = dx < 0 ? cur + 1 : cur - 1;
    if (nxt >= 1 && nxt <= N) location.hash = `#day-${nxt}`;
  }, { passive: true });

  // ---------- menu ----------
  const menu = $("#menu"), scrim = $("#scrim"), menuBtn = $("#menuBtn");
  function openMenu() {
    menu.classList.add("open"); scrim.classList.add("open");
    menu.removeAttribute("inert"); menu.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("lock");
    $("#menuClose").focus();
  }
  function closeMenu(focusBtn = true) {
    if (!menu.classList.contains("open")) return;
    menu.classList.remove("open"); scrim.classList.remove("open");
    menu.setAttribute("inert", ""); menu.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("lock");
    if (focusBtn) menuBtn.focus();
  }
  menu.setAttribute("inert", "");
  menuBtn.addEventListener("click", openMenu);
  $("#menuClose").addEventListener("click", () => closeMenu());
  scrim.addEventListener("click", () => closeMenu());
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(false); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  // Share
  $("#shareBtn").addEventListener("click", async () => {
    const url = location.href.split("#")[0];
    try {
      if (navigator.share) await navigator.share({ title: "Bali 2026 itinerary", url });
      else { await navigator.clipboard.writeText(url); toast("Link copied"); }
    } catch (e) { /* user cancelled */ }
  });

  $("#offlineBtn").addEventListener("click", async () => {
    const urls = [...new Set(TRIP.days.flatMap((d) => d.photos.map((p) => p.url)))];
    toast(`Saving ${urls.length} photos…`);
    const res = await Promise.allSettled(urls.map((u) => fetch(u, { mode: "no-cors" })));
    const ok = res.filter((r) => r.status === "fulfilled").length;
    toast(ok === urls.length ? `All ${ok} photos saved for offline` : `${ok} of ${urls.length} photos saved. Try again on Wi-Fi.`);
  });

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2000);
  }

  // ---------- light / dark theme (dark by default) ----------
  const themeBtn = $("#themeBtn");
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    themeBtn.setAttribute("aria-checked", String(t === "dark"));
    $("#themeLabel").textContent = t === "dark" ? "Dark mode" : "Light mode";
    $("#themeIcon").textContent = t === "dark" ? "🌙" : "☀️";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "dark" ? "#0e0f11" : "#ffffff");
  }
  applyTheme(store.get("bali333-theme", "dark"));
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    store.set("bali333-theme", next);
    applyTheme(next);
  });

  // ---------- live clocks (glance view) ----------
  function tick() {
    document.querySelectorAll(".time[data-tz]").forEach((el) => {
      try {
        el.textContent = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: el.dataset.tz }).format(new Date());
      } catch (e) {}
    });
  }
  setInterval(tick, 15000);

  // Version label in the menu footer (helps spot a stale cached copy)
  const BUILD = "3-3-3 plan · Updated 28 Nov, 11:51 UTC";
  $("#appVer").textContent = BUILD;

  // ---------- offline support ----------
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    // Pick up new versions of the app: check for an update whenever the app comes back to the foreground,
    // and reload once when the new version takes over (not on the very first install).
    let hadController = !!navigator.serviceWorker.controller, reloading = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!hadController) { hadController = true; return; }
      if (reloading) return;
      reloading = true;
      location.reload();
    });
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then((reg) => {
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") reg.update().catch(() => {});
      });
    }).catch(() => {});
  }

  route();
})();
