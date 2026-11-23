// Bali 2026 — renders the itinerary page from data.js (TRIP)
(function () {
  const $ = (id) => document.getElementById(id);

  // {{🏖️ Label}} or {{🏖️ Label|search query}} → Google Maps link
  function linkify(text) {
    return text.replace(/\{\{([^}|]+)(?:\|([^}]+))?\}\}/g, (_, label, query) => {
      const clean = label.replace(/^[^\p{L}\p{N}]+/u, "").trim(); // drop leading emoji
      const q = encodeURIComponent((query || clean + " Bali").trim());
      return `<a class="place" href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">${label.trim()}</a>`;
    });
  }

  // Day strip (links to each day in the table)
  $("dayStrip").innerHTML = TRIP.days.map((d) => {
    const kind = d.day === 1 ? "half" : d.day === TRIP.days.length ? "fly" : "full";
    const [dow, rest] = d.date.split(", ");
    return `<a class="day ${kind}" href="#day-${d.day}" title="Day ${d.day}: ${d.date} · ${d.base}">
      <span class="dow">${dow}</span><span class="dnum">${rest.replace("Dec ", "")}</span><span class="bar"></span>
    </a>`;
  }).join("");

  // Stays
  $("stays").innerHTML = TRIP.stays.map((s) =>
    `<span class="stay"><b>${s.place}</b> ${s.nights}N <small>${s.dates}</small></span>`
  ).join('<span class="arrow">→</span>');

  // Itinerary table: one <tbody> per day
  const table = document.querySelector("table.itin");
  TRIP.days.forEach((d) => {
    const hasNote = d.tip || d.extras;
    const span = d.rows.length + (hasNote ? 1 : 0);
    const tb = document.createElement("tbody");
    tb.id = `day-${d.day}`;
    tb.className = "day-block";

    tb.innerHTML = d.rows.map(([time, act, log], i) => `
      <tr>
        ${i === 0 ? `<td class="c-day" rowspan="${span}"><b>Day ${d.day}: ${d.date}</b><span class="base">🏨 ${d.base}</span></td>` : ""}
        <td class="c-time">${time}</td>
        <td class="c-act">${linkify(act)}</td>
        <td class="c-log">${linkify(log)}</td>
      </tr>`).join("") + (hasNote ? `
      <tr class="note-row">
        <td colspan="3">
          ${d.tip ? `<div><b>💡 Pro tip:</b> ${linkify(d.tip)}</div>` : ""}
          ${d.extras ? `<div><b>➕ Optional:</b> ${linkify(d.extras)}</div>` : ""}
        </td>
      </tr>` : "");
    table.appendChild(tb);
  });

  // Title + dive note
  $("itinTitle").textContent = "📅 " + TRIP.title;
  if (TRIP.diveNote) {
    $("diveNote").innerHTML = `<h3>${TRIP.diveNote.title}</h3><ul>${TRIP.diveNote.points.map((p) => `<li>${p}</li>`).join("")}</ul>`;
  } else {
    $("diveNote").remove();
  }

  // Checklist
  $("checkList").innerHTML = TRIP.checklist.map((c) =>
    `<li><span class="ic">${c.icon}</span><div><b>${c.title}</b><p>${c.text}</p></div></li>`
  ).join("");

  // Live India / Bali clocks
  function tick() {
    document.querySelectorAll(".time[data-tz]").forEach((el) => {
      try {
        el.textContent = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit", minute: "2-digit", hour12: false, timeZone: el.dataset.tz
        }).format(new Date());
      } catch (e) { /* leave placeholder */ }
    });
  }
  tick();
  setInterval(tick, 15000);
})();
