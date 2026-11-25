// Goa 2026 — mobile trip app (renders from data.js → TRIP)
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const view = $("#view");
  const N = TRIP.days.length;
  const KEY = (k) => `goa2026-${k}`; // every saved setting is prefixed, so nothing is shared with other apps on this site

  // ---------- storage (optional; app works without it) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(KEY(k)); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(KEY(k), JSON.stringify(v)); } catch (e) {} }
  };

  // ---------- helpers ----------
  const PLACE_RE = /\{\{([^}|]+)(?:\|([^}]+))?\}\}/g;
  const stripEmoji = (s) => s.replace(/^[^\p{L}\p{N}]+/u, "").trim();
  const mapUrl = (label, query) =>
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent((query || stripEmoji(label) + " Goa").trim());
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^https?:\/\//i.test(u || "") ? u : "#");

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

  // ---------- trip clock (India time) ----------
  // Preview any moment with ?now=2026-11-27T13:00 (India time) in the URL.
  const NOW_OVERRIDE = (() => {
    const v = new URLSearchParams(location.search).get("now");
    const m = v && /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/.exec(v);
    return m ? { ymd: `${m[1]}-${m[2]}-${m[3]}`, mins: Number(m[4]) * 60 + Number(m[5]) } : null;
  })();
  function localNow() {
    if (NOW_OVERRIDE) return NOW_OVERRIDE;
    try {
      const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
        timeZone: TRIP.tz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
      }).formatToParts(new Date()).map((x) => [x.type, x.value]));
      return { ymd: `${p.year}-${p.month}-${p.day}`, mins: Number(p.hour) * 60 + Number(p.minute) };
    } catch (e) { return null; }
  }
  const dayNumber = (ymd) => { // whole days from the trip start (Day 1 = 0)
    const [a, b, c] = ymd.split("-").map(Number), [x, y, z] = TRIP.start.split("-").map(Number);
    return Math.round((Date.UTC(a, b - 1, c) - Date.UTC(x, y - 1, z)) / 86400000);
  };
  // Trip day number for today, or null outside the trip
  function tripDayToday() {
    const now = localNow();
    if (!now) return null;
    const n = dayNumber(now.ymd) + 1;
    return n >= 1 && n <= N ? n : null;
  }

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
    const t = localNow().mins;
    let now = -1, next = -1;
    d.rows.forEach(([time], i) => {
      const [a, b] = time.split(" - ");
      const s = toMins(a); let e = toMins(b); if (e !== null && e < s) e += 1440;
      if (now === -1 && s <= t && t < e) now = i;
      if (next === -1 && s > t) next = i;
    });
    return { now, next };
  }
  const dayKind = (d) => (d.kind === "drive" ? "drive" : "full");
  const dayNum = (d) => d.date.split(" ").pop(); // "Thu, Nov 26" → "26"
  const dow = (d) => d.date.split(",")[0];

  // ---------- local news (built every 2 h by .github/workflows/news-goa.yml) ----------
  // Primary: GitHub API (cached ~60 s). Fallback: raw file (cached ~5 min).
  const NEWS_API = "https://api.github.com/repos/Ashish-dot-wq/bali-trip/contents/news.json?ref=news-feed-goa";
  const NEWS_URL = "https://raw.githubusercontent.com/Ashish-dot-wq/bali-trip/news-feed-goa/news.json";
  async function fetchFeed(force) {
    try {
      const r = await fetch(NEWS_API, { headers: { Accept: "application/vnd.github.raw+json" }, cache: force ? "no-store" : "no-cache" });
      if (r.ok) return await r.json();
    } catch (e) { /* fall through to raw */ }
    const r = await fetch(NEWS_URL, { cache: force ? "no-store" : "no-cache" });
    if (!r.ok) throw new Error(r.status);
    return r.json();
  }
  const PLACE_LABEL = { north: "North Goa", panaji: "Panaji & Old Goa", south: "South Goa", gokarna: "Gokarna", route: "On the route", airport: "Airports" };
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
  let news = store.get("news", null); // { data, fetchedAt }
  let newsTried = false;
  async function loadNews(force) {
    if (!force && news && Date.now() - news.fetchedAt < 15 * 60000) return news;
    try {
      const data = await fetchFeed(force);
      if (!data || !Array.isArray(data.items)) throw new Error("bad feed");
      news = { data, fetchedAt: Date.now() };
      store.set("news", news);
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
  const TITLES = { day: "Day by day", table: "Full table", glance: "Trip at a glance", road: "Road trip", checklist: "Before you go", party: "Party guide", faq: "FAQs", packing: "Packing list", news: "Local news" };

  function chipBar(active) {
    const today = tripDayToday();
    return `<nav class="chips" aria-label="Choose a day">${TRIP.days.map((d) => `
      <a class="chip ${dayKind(d)}${d.day === active ? " on" : ""}${d.day === today ? " today" : ""}" href="#day-${d.day}"${d.day === active ? ' aria-current="page"' : ""} aria-label="Day ${d.day}, ${d.date}${d.day === today ? " (today)" : ""}">
        <span class="c-dow">${dow(d)}</span><span class="c-num">${dayNum(d)}</span><span class="c-bar"></span></a>`).join("")}</nav>`;
  }

  function dayView(n) {
    const d = TRIP.days[n - 1];
    const mode = store.get("mode", "photos");
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
    const baseIcon = d.kind === "drive" && d.day === N ? "🚗" : "🏨";

    let body;
    if (mode === "photos") {
      const slides = d.photos.map((p, i) => `
        <figure class="slide">
          <img src="${esc(p.url)}" alt="${esc(p.caption)}" ${i ? 'loading="lazy"' : ""} decoding="async" onerror="this.closest('.slide').classList.add('broken')">
          <figcaption>${esc(p.caption)}${p.credit ? `<small>${esc(p.credit)}</small>` : ""}</figcaption>
        </figure>`).join("");
      body = `
        <div class="hero">
          <div class="slides" id="slides">${slides || '<figure class="slide broken"></figure>'}</div>
          <div class="hero-top"><span class="pill">${label}</span></div>
          <div class="hero-bottom">
            <h1>${d.title}</h1>
            <span class="base">${baseIcon} ${d.base}</span>
          </div>
          ${d.photos.length > 1 ? `<div class="dots" aria-hidden="true">${d.photos.map((_, i) => `<i${i ? "" : ' class="on"'}></i>`).join("")}</div>` : ""}
        </div>
        ${places.length ? `<div class="sec-t">Places today</div><div class="places">${places.map((p) =>
          `<a class="place-chip" href="${p.url}" target="_blank" rel="noopener">${p.label}</a>`).join("")}</div>` : ""}
        <div class="sec-t">Plan</div>
        ${banner}
        <ol class="timeline">${d.rows.map(([t, act, det], i) => {
          const { start, end } = splitTime(t);
          return `<li class="${rowCls(i)}">
            <div class="tl-time"><b>${start}</b><span>${end}</span>${flag(i)}</div>
            <div class="tl-body"><div class="tl-act">${linkify(act)}</div><div class="tl-det">${linkify(det)}</div></div>
          </li>`;
        }).join("")}</ol>`;
    } else {
      body = `
        <header class="day-hd">
          <span class="pill dark">${label}</span>
          <h1>${d.title}</h1>
          <span class="base">${baseIcon} ${d.base}</span>
        </header>
        ${banner}
        <div class="tbl-card">
          <table class="daytable">
            <thead><tr><th scope="col">Time</th><th scope="col">Activity &amp; details</th></tr></thead>
            <tbody>${d.rows.map(([t, act, det], i) => {
              const { start, end } = splitTime(t);
              return `<tr class="${rowCls(i)}"><td class="t"><b>${start}</b><span>${end}</span>${flag(i)}</td>
                <td><div class="a">${linkify(act)}</div><div class="det">${linkify(det)}</div></td></tr>`;
            }).join("")}</tbody>
          </table>
        </div>`;
    }

    const notes = `
      ${d.tip ? `<div class="note tip"><b>💡 Pro tip</b><p>${linkify(d.tip)}</p></div>` : ""}
      ${d.extras ? `<div class="note opt"><b>➕ Optional</b><p>${linkify(d.extras)}</p></div>` : ""}
      ${d.kind === "drive" ? `<a class="note link" href="#road"><b>🚗 Road trip</b><p>Routes, ghats, tolls and what to carry →</p></a>` : ""}`;

    const prev = n > 1 ? TRIP.days[n - 2] : null, next = n < N ? TRIP.days[n] : null;
    const pager = `<nav class="pager" aria-label="Previous and next day">
      ${prev ? `<a href="#day-${n - 1}"><small>‹ Previous</small><b>Day ${n - 1} · ${prev.title}</b></a>` : "<span></span>"}
      ${next ? `<a class="r" href="#day-${n + 1}"><small>Next ›</small><b>Day ${n + 1} · ${next.title}</b></a>` : "<span></span>"}
    </nav>`;

    view.innerHTML = `${chipBar(n)}<div class="pad"><a class="ticker" id="ticker" href="#news" hidden></a>${seg}<article class="day" data-day="${n}">${body}${notes}</article>${pager}</div>`;

    view.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => {
      store.set("mode", b.dataset.mode);
      dayView(n);
    }));

    const slides = $("#slides", view);
    if (slides) {
      const dots = view.querySelectorAll(".dots i");
      slides.addEventListener("scroll", () => {
        const i = Math.round(slides.scrollLeft / slides.clientWidth);
        dots.forEach((dot, k) => dot.classList.toggle("on", k === i));
      }, { passive: true });
    }

    fillTicker();
    loadNews(false).then(() => { if ($(".day", view)?.dataset.day == n) fillTicker(); });

    const on = $(".chip.on", view);
    if (on) on.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function tableView() {
    const bodies = TRIP.days.map((d) => `<tbody>
        <tr class="dayrow"><th colspan="3" scope="colgroup">
          <a href="#day-${d.day}">Day ${d.day} · ${d.date}</a><span>${d.kind === "drive" && d.day === N ? "🚗" : "🏨"} ${d.base}</span>
        </th></tr>
        ${d.rows.map(([t, act, det]) => {
          const { start, end } = splitTime(t);
          return `<tr>
            <td class="c-time"><b>${start}</b><span>${end}</span></td>
            <td class="c-act">${linkify(act)}</td>
            <td class="c-log">${linkify(det)}</td>
          </tr>`;
        }).join("")}
      </tbody>`).join("");

    view.innerHTML = `<div class="pad wide">
      <h1 class="h">Full itinerary</h1>
      <p class="hint">All ${N} days. Tap a day's heading to open it with photos.</p>
      ${TRIP.draft ? `<div class="draft" style="margin:0 16px 12px">📝 ${TRIP.draft}</div>` : ""}
      <div class="full-wrap">
        <table class="full">
          <colgroup><col class="w-time"><col class="w-act"><col class="w-log"></colgroup>
          <thead><tr><th>Time</th><th>Activity</th><th>Details</th></tr></thead>
          ${bodies}
        </table>
      </div>
    </div>`;
  }

  function glanceView() {
    view.innerHTML = "";
    view.appendChild($("#tpl-glance").content.cloneNode(true));
    $("#dayStrip", view).innerHTML = TRIP.days.map((d) =>
      `<a class="ds ${dayKind(d)}" href="#day-${d.day}" aria-label="Day ${d.day}, ${d.date}"><span>${dow(d)}</span><b>${dayNum(d)}</b><i></i></a>`).join("");
    const today = tripDayToday(), now = localNow();
    let cd;
    if (today) cd = `🏖️ <b>Day ${today} of ${N}</b> · enjoy Goa!`;
    else if (now && dayNumber(now.ymd) >= N) cd = "✅ Trip complete. Hope it was a great one!";
    else {
      const days = now ? -dayNumber(now.ymd) : null;
      cd = days > 1 ? `⏳ <b>${days} days to go</b> · leave ${TRIP.home} early on Thu 26 Nov`
        : days === 1 ? `⏳ <b>Tomorrow!</b> Leave ${TRIP.home} by ~5:30 AM.`
        : "🚗 <b>Road trip day!</b>";
    }
    $("#countdown", view).innerHTML = cd;
    $("#stays", view).innerHTML = TRIP.stays.map((s) =>
      `<li><span class="st-n">${s.nights}N</span><span><b>${s.place}</b><small>${s.dates} · ${s.note}</small></span></li>`).join("");
    $("#draftNote", view).textContent = TRIP.draft || "";
    if (!TRIP.draft) $("#draftNote", view).remove();
  }

  const routeCard = (o) => `<div class="route-opt"><h3>${o.name}</h3><div class="ro-meta">${o.km}</div><p>${o.text}</p><span class="ro-best">${o.best}</span></div>`;
  function roadView() {
    const r = TRIP.road;
    view.innerHTML = `<div class="pad">
      <h1 class="h">Road trip</h1>
      <p class="intro">${r.intro}</p>
      <h2 class="h2">Getting there from ${TRIP.home}</h2>
      ${r.routes.map(routeCard).join("")}
      ${r.homeRoutes ? `<h2 class="h2">Coming home</h2>${r.homeRoutes.map(routeCard).join("")}` : ""}
      ${r.sections.map((s, i) => `
        <h2 class="h2">${s.title}</h2>
        <ul class="safety${i === 0 ? " primary" : ""}">${s.items.map((x) => `<li>${x}</li>`).join("")}</ul>`).join("")}
      <p class="fine">Distances and times are approximate. Road conditions on ghat stretches change, so check Google Maps live traffic and Local news before you set off.</p>
    </div>`;
  }

  function tickList({ title, items, key, render: renderItem, unit }) {
    const done = new Set(store.get(key, []));
    const all = items.flatMap((g) => g.items.map(([id]) => id));
    const draw = () => {
      const count = all.filter((id) => done.has(id)).length;
      view.innerHTML = `<div class="pad">
        <h1 class="h">${title}</h1>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${all.length}" aria-valuenow="${count}">
          <div class="pg-bar"><i style="width:${(count / all.length) * 100}%"></i></div>
          <span>${count} of ${all.length} ${unit}</span>
        </div>
        ${items.map((g) => `${g.group ? `<h2 class="h2">${g.group} <span class="g-count">${g.items.filter(([id]) => done.has(id)).length}/${g.items.length}</span></h2>` : ""}
          <ul class="checklist${g.group ? " compact" : ""}">${g.items.map((it) => `
            <li><label class="${done.has(it[0]) ? "done" : ""}">
              <input type="checkbox" data-id="${it[0]}" ${done.has(it[0]) ? "checked" : ""}>
              <span class="box" aria-hidden="true"></span>
              ${renderItem(it)}
            </label></li>`).join("")}</ul>`).join("")}
        <p class="fine">Ticks are saved on this phone only.</p>
        ${count ? `<button type="button" class="btn ghost" id="resetTicks">Clear all ticks</button>` : ""}
      </div>`;
      view.querySelectorAll("input[type=checkbox]").forEach((cb) => cb.addEventListener("change", () => {
        cb.checked ? done.add(cb.dataset.id) : done.delete(cb.dataset.id);
        store.set(key, [...done]);
        const y = window.scrollY; draw(); window.scrollTo(0, y);
      }));
      $("#resetTicks", view)?.addEventListener("click", () => { done.clear(); store.set(key, []); draw(); });
    };
    draw();
  }

  function checklistView() {
    tickList({
      title: "Before you go", key: "check", unit: "done",
      items: [{ group: "", items: TRIP.checklist.map((c, i) => [`c${i}`, c]) }],
      render: ([, c]) => `<span class="ci">${c.icon}</span><span class="ct"><b>${c.title}</b><small>${c.text}</small></span>`
    });
  }

  function packingView() {
    tickList({
      title: "Packing list", key: "pack", unit: "packed", items: TRIP.packing,
      render: ([, text]) => `<span class="ct"><b>${text}</b></span>`
    });
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

  function newsView() {
    const filter = store.get("news-filter", "all");
    const FILTERS = [["all", "All"], ["alerts", "⚠️ Alerts"], ["north", "North Goa"], ["panaji", "Panaji & Old Goa"], ["south", "South Goa"], ["gokarna", "Gokarna"], ["route", "On the route"], ["airport", "Airports"]];
    const match = (it) => filter === "all" ? true : filter === "alerts" ? isAlert(it) : it.places.includes(filter);
    const render = () => {
      const d = news && news.data;
      const items = d ? d.items.filter(match) : [];
      view.innerHTML = `<div class="pad">
        <div class="news-head"><h1 class="h">Local news</h1>
          <button type="button" class="btn sm" id="newsRefresh">↻ Refresh</button></div>
        <p class="fine news-meta">${d ? `Updated ${ago(d.updated)}${d.stale ? " (sources unreachable, showing last good copy)" : ""} · refreshes every 2 hours` : newsTried ? "Couldn't reach the news feed. Check your connection, then tap Refresh." : "Loading…"}</p>
        ${d && Date.now() - Date.parse(d.updated) > 5 * 3600000 ? `<div class="warn">⏳ The news feed is running late. Tap Refresh in a bit; for anything urgent, call 112.</div>` : ""}
        <div class="filters" role="group" aria-label="Filter news">${FILTERS.map(([k, l]) =>
          `<button type="button" data-f="${k}" aria-pressed="${k === filter}">${l}</button>`).join("")}</div>
        ${!d ? `<div class="empty">The news feed is starting up. It refreshes every 2 hours, so check back soon.</div>`
          : !items.length ? `<div class="empty">Nothing recent for this filter. That's usually good news.</div>`
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
          <li><b>112</b>: any emergency (police, fire, ambulance).</li>
          <li><b>108</b>: ambulance.</li>
          <li><b>1033</b>: NHAI national highway helpline (breakdowns and accidents on the highway).</li>
          <li><a class="place" href="https://mausam.imd.gov.in/" target="_blank" rel="noopener">IMD weather warnings</a> (official)</li>
        </ul>
        <p class="fine">Headlines are pulled automatically from Google News and matched to Goa, Gokarna and the route. They can miss things or be off-topic; for anything serious, check official sources and your stay.</p>
      </div>`;
      view.querySelectorAll(".filters button").forEach((b) => b.addEventListener("click", () => {
        store.set("news-filter", b.dataset.f); newsView();
      }));
      $("#newsRefresh", view).addEventListener("click", async (e) => {
        e.currentTarget.disabled = true; e.currentTarget.textContent = "Refreshing…";
        await loadNews(true); if (document.body.dataset.view === "news") render();
      });
    };
    render();
    if (!news) loadNews(false).then(() => { if (document.body.dataset.view === "news") render(); });
  }

  function faqView() {
    view.innerHTML = `<div class="pad">
      <h1 class="h">FAQs</h1>
      <div class="faq">${TRIP.faq.map((f) => `
        <details>
          <summary>${f.q}</summary>
          <p>${f.a}</p>
        </details>`).join("")}</div>
      <p class="fine">Rules and prices change. Check locally when it matters.</p>
    </div>`;
  }

  // ---------- router ----------
  const VIEWS = { table: tableView, glance: glanceView, road: roadView, checklist: checklistView, party: partyView, faq: faqView, packing: packingView, news: newsView };
  function route() {
    clearInterval(tickerTimer);
    if (typeof closeMenu === "function") closeMenu(false);
    const h = location.hash.replace("#", "");
    let name = "day", n = null;
    const m = /^day-(\d+)$/.exec(h);
    if (m) n = Math.min(Math.max(Number(m[1]), 1), N);
    else if (VIEWS[h]) name = h;
    else n = tripDayToday() || store.get("day", 1);
    if (n > N || n < 1) n = 1;

    if (name === "day") { store.set("day", n); dayView(n); } else VIEWS[name]();

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

  $("#shareBtn").addEventListener("click", async () => {
    const url = location.href.split("#")[0].split("?")[0];
    try {
      if (navigator.share) await navigator.share({ title: `${TRIP.name} trip`, url });
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
  applyTheme(store.get("theme", "dark"));
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    store.set("theme", next);
    applyTheme(next);
  });

  // Version label in the menu footer (helps spot a stale cached copy)
  const BUILD = "Updated 25 Nov · separate install";
  $("#appVer").textContent = BUILD;

  // ---------- offline support + auto-update on resume ----------
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    let hadController = !!navigator.serviceWorker.controller, reloading = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!hadController) { hadController = true; return; }
      if (reloading) return;
      reloading = true;
      location.reload();
    });
    navigator.serviceWorker.register("sw.js", { scope: "./", updateViaCache: "none" }).then((reg) => {
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") reg.update().catch(() => {});
      });
    }).catch(() => {});
  }

  route();
})();
