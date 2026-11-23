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

  // Which trip day is "today" in Bali (falls back to Day 1)
  function todayIndex() {
    try {
      const d = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Makassar" }).format(new Date()); // YYYY-MM-DD
      const m = /^2026-12-(\d\d)$/.exec(d);
      if (m) { const n = Number(m[1]) - 17; if (n >= 1 && n <= N) return n; }
    } catch (e) {}
    return 1;
  }

  // ---------- views ----------
  const TITLES = { day: "Day by day", table: "Full table", glance: "Trip at a glance", dive: "Two-dive plan", checklist: "Before you go", party: "Party guide", faq: "FAQs", drive: "Driving permit" };

  function chipBar(active) {
    return `<div class="chips" role="tablist" aria-label="Choose a day">${TRIP.days.map((d) => {
      const kind = d.day === 1 ? "half" : d.day === N ? "fly" : "full";
      const [dow, md] = d.date.split(", ");
      return `<a class="chip ${kind}${d.day === active ? " on" : ""}" href="#day-${d.day}" role="tab" aria-selected="${d.day === active}" aria-label="Day ${d.day}, ${d.date}">
        <span class="c-dow">${dow}</span><span class="c-num">${md.replace("Dec ", "")}</span><span class="c-bar"></span></a>`;
    }).join("")}</div>`;
  }

  function dayView(n) {
    const d = TRIP.days[n - 1];
    const mode = store.get("bali2026-mode", "photos");
    const places = placesOf(d);

    const seg = `<div class="seg" role="group" aria-label="View mode">
      <button type="button" data-mode="photos" aria-pressed="${mode === "photos"}">📷 Photos &amp; plan</button>
      <button type="button" data-mode="table" aria-pressed="${mode === "table"}">📋 Table</button>
    </div>`;

    const label = `Day ${d.day} of ${N} · ${d.date}`;

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
        <ol class="timeline">${d.rows.map(([t, act, log]) => {
          const { start, end } = splitTime(t);
          return `<li>
            <div class="tl-time"><b>${start}</b><span>${end}</span></div>
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
        <div class="tbl-card">
          <table class="daytable">
            <thead><tr><th scope="col">Time</th><th scope="col">Activity &amp; details</th></tr></thead>
            <tbody>${d.rows.map(([t, act, log]) => {
              const { start, end } = splitTime(t);
              return `<tr><td class="t"><b>${start}</b><span>${end}</span></td>
                <td><div class="a">${linkify(act)}</div><div class="det">${linkify(log)}</div></td></tr>`;
            }).join("")}</tbody>
          </table>
        </div>`;
    }

    const notes = `
      ${d.tip ? `<div class="note tip"><b>💡 Pro tip</b><p>${linkify(d.tip)}</p></div>` : ""}
      ${d.extras ? `<div class="note opt"><b>➕ Optional</b><p>${linkify(d.extras)}</p></div>` : ""}
      ${d.day === 5 || d.day === 7 ? `<a class="note link" href="#dive"><b>🤿 Two-dive plan</b><p>How the Gili T and Tulamben dives connect →</p></a>` : ""}`;

    const prev = n > 1 ? TRIP.days[n - 2] : null, next = n < N ? TRIP.days[n] : null;
    const pager = `<nav class="pager" aria-label="Previous and next day">
      ${prev ? `<a href="#day-${n - 1}"><small>‹ Previous</small><b>Day ${n - 1} · ${prev.title}</b></a>` : "<span></span>"}
      ${next ? `<a class="r" href="#day-${n + 1}"><small>Next ›</small><b>Day ${n + 1} · ${next.title}</b></a>` : "<span></span>"}
    </nav>`;

    view.innerHTML = `${chipBar(n)}<div class="pad">${seg}<article class="day" data-day="${n}">${body}${notes}</article>${pager}</div>`;

    // segmented control
    view.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => {
      store.set("bali2026-mode", b.dataset.mode);
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
    $("#stays", view).innerHTML = TRIP.stays.map((s) =>
      `<li><span class="st-n">${s.nights}N</span><span><b>${s.place}</b><small>${s.dates}</small></span></li>`).join("");
    tick();
  }

  function diveView() {
    const n = TRIP.diveNote;
    view.innerHTML = `<div class="pad">
      <h1 class="h">${n.title.replace(/^🔑\s*/, "")}</h1>
      <ol class="steps">${n.points.map((p) => `<li>${p}</li>`).join("")}</ol>
      <div class="two-btn">
        <a class="btn" href="#day-5">Day 5 · Gili T dive</a>
        <a class="btn" href="#day-7">Day 7 · Tulamben dive</a>
      </div>
    </div>`;
  }

  function checklistView() {
    const done = new Set(store.get("bali2026-check", []));
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
        store.set("bali2026-check", [...done]);
        const y = window.scrollY; render(); window.scrollTo(0, y);
      }));
      $("#resetCheck", view)?.addEventListener("click", () => { done.clear(); store.set("bali2026-check", []); render(); });
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
    const h = location.hash.replace("#", "");
    let name = "day", n = null;
    const m = /^day-(\d+)$/.exec(h);
    if (m) { n = Math.min(Math.max(Number(m[1]), 1), N); }
    else if (["table", "glance", "dive", "checklist", "party", "faq", "drive"].includes(h)) name = h;
    else if (h === "day" || h === "") n = store.get("bali2026-day", todayIndex());
    else n = 1;

    if (name === "day") { store.set("bali2026-day", n); dayView(n); }
    else if (name === "table") tableView();
    else if (name === "glance") glanceView();
    else if (name === "dive") diveView();
    else if (name === "party") partyView();
    else if (name === "faq") faqView();
    else if (name === "drive") driveView();
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
  applyTheme(store.get("bali2026-theme", "dark"));
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    store.set("bali2026-theme", next);
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

  // ---------- offline support ----------
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).catch(() => {});
  }

  route();
})();
