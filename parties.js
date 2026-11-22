// Bali 2026 - Nightlife & Self-Exploration Page Script

(function() {
  const container = document.getElementById("partiesContent");
  if (!container) return;

  const guide = TRIP_DATA.meta.masterNightlifeGuide;
  if (!guide) return;

  const seminyak = guide.seminyak;
  const gili = guide.giliT;
  const ubud = guide.ubud;
  const quiet = guide.nusaPenidaAndAmed;

  function renderVenues(venues, defaultSearchSuffix) {
    return (venues || []).map(v => `
      <div class="nightlife-venue-card">
        <div class="venue-head">
          <span class="venue-name">${v.name}</span>
          <span class="venue-badge">${v.badge}</span>
        </div>
        <div class="venue-desc">${v.desc}</div>
        <div class="venue-footer">
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' ' + defaultSearchSuffix)}" target="_blank" rel="noopener noreferrer" class="venue-map-link">
            <span>📍</span> Open in Google Maps ↗
          </a>
        </div>
      </div>
    `).join("");
  }

  container.innerHTML = `
    <!-- Region 1: Seminyak -->
    <section class="nightlife-page-section">
      <div class="section-badge-pill" style="background: rgba(236, 72, 153, 0.15); color: #f472b6;">
        🍸 South Bali Nightlife
      </div>
      <h2 class="section-heading">${seminyak.title}</h2>
      <p class="section-vibe-text">✨ ${seminyak.vibe}</p>
      <div class="venues-grid-layout">
        ${renderVenues(seminyak.venues, "Seminyak Bali")}
      </div>
    </section>

    <!-- Region 2: Gili Trawangan -->
    <section class="nightlife-page-section" style="border-color: rgba(245, 158, 11, 0.4);">
      <div class="section-badge-pill" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24;">
        🏝️ The Party Island
      </div>
      <h2 class="section-heading" style="color: #fbbf24;">${gili.title}</h2>
      <p class="section-vibe-text">✨ ${gili.vibe}</p>

      <div class="rotating-schedule-banner">
        <div class="rotating-title">🔥 The Famous Official Rotating Party Schedule:</div>
        <p class="rotating-desc">${gili.rotatingSchedule}</p>
      </div>

      <div class="venues-grid-layout">
        ${renderVenues(gili.venues, "Gili Trawangan")}
      </div>
    </section>

    <!-- Region 3: Ubud -->
    <section class="nightlife-page-section">
      <div class="section-badge-pill" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">
        🎷 Highlands & Speakeasies
      </div>
      <h2 class="section-heading">${ubud.title}</h2>
      <p class="section-vibe-text">✨ ${ubud.vibe}</p>
      <div class="venues-grid-layout">
        ${renderVenues(ubud.venues, "Ubud Bali")}
      </div>
    </section>

    <!-- Region 4: Nusa Penida & Amed Reality Check -->
    <section class="nightlife-page-section" style="border-color: rgba(52, 211, 153, 0.3);">
      <div class="section-badge-pill" style="background: rgba(52, 211, 153, 0.15); color: #34d399;">
        🌅 Tranquil Escapes
      </div>
      <h2 class="section-heading" style="color: #34d399;">${quiet.title}</h2>
      <p class="section-vibe-text">✨ ${quiet.vibe}</p>
      <div style="background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 14px; border: 1px solid rgba(255, 255, 255, 0.08); margin-top: 10px;">
        <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5; margin: 0;">
          ${quiet.summary}
        </p>
      </div>
    </section>
  `;
})();
