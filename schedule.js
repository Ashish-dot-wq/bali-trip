// Bali 2026 - Schedule Tables Engine
// Renders clean, dedicated single-option tables for Option 2 and Option 3.

(function() {
  const container = document.getElementById("scheduleContent");
  const tabOpt2 = document.getElementById("tabOpt2");
  const tabOpt3 = document.getElementById("tabOpt3");
  const tabBoth = document.getElementById("tabBoth");

  // Read URL param or default to opt2
  const urlParams = new URLSearchParams(window.location.search);
  let activeTab = urlParams.get("opt") || "opt2";
  if (!["opt2", "opt3", "both"].includes(activeTab)) activeTab = "opt2";

  function setTab(tab) {
    activeTab = tab;
    [tabOpt2, tabOpt3, tabBoth].forEach(btn => btn?.classList.remove("active"));
    if (tab === "opt2") tabOpt2?.classList.add("active");
    else if (tab === "opt3") tabOpt3?.classList.add("active");
    else if (tab === "both") tabBoth?.classList.add("active");

    // Update URL query without page reload
    const newUrl = `${window.location.pathname}?opt=${tab}`;
    window.history.replaceState({ tab }, "", newUrl);

    render();
  }

  // Generate Table HTML for a single option
  function generateSingleTableHtml(optKey) {
    const isOpt2 = optKey === "opt2";
    const optData = TRIP_DATA.options[optKey];
    const days = optData.days;
    const masterSchedule = TRIP_DATA.masterScheduleTable || [];

    const optTitle = isOpt2 ? "🏝️ Option 2: Gili T Island Explorer" : "🤿 Option 3: Reef, Culture & Coast Loop";
    const optColor = isOpt2 ? "var(--opt2-color)" : "var(--opt3-color)";
    const optBadge = isOpt2 ? "Island Hopping & Turtle Snorkeling" : "Shipwreck Diving & 100% Road Transit";
    const optRoute = isOpt2 ? "Seminyak (3N) ➔ Gili Trawangan (3N) ➔ Ubud (3N)" : "Seminyak (3N) ➔ Amed (2N) ➔ Ubud (4N)";
    const optSummary = isOpt2
      ? "Features a Nusa Penida day-trip from Seminyak (light packs, bags stay in hotel), fast boat to car-free Gili T for wild turtles and lively sunset swings, finishing in the cultural highlands of Ubud."
      : "Features a Nusa Penida day-trip from Seminyak, then a 100% road-based scenic highway drive to tranquil Amed for USAT Liberty shipwreck snorkeling and Mount Agung sunsets, finishing with 4 serene nights in Ubud.";

    const rowsHtml = days.map((day, idx) => {
      const scheduleRow = masterSchedule[idx] || {};
      const transitText = isOpt2 ? scheduleRow.opt2Transit : scheduleRow.opt3Transit;
      const stayText = isOpt2 ? scheduleRow.opt2Stay : scheduleRow.opt3Stay;

      // Attractions pills
      const attractionsHtml = (day.attractions || []).map(att => `
        <a href="${att.url}" target="_blank" rel="noopener noreferrer" class="schedule-pill-link" title="Open ${att.name} in Google Maps">
          <span>📍</span> ${att.name} <span class="ext-arrow">↗</span>
        </a>
      `).join("");

      // Party / Alternative preview
      const topAlt = (day.alternatives && day.alternatives.length > 0) ? day.alternatives[0] : null;
      const altHtml = topAlt ? `
        <div class="schedule-alt-badge-row">
          <span class="schedule-alt-tag">${topAlt.badge}</span>
          <span class="schedule-alt-name"><strong>${topAlt.name}</strong></span>
          <a href="${topAlt.url}" target="_blank" rel="noopener noreferrer" class="schedule-alt-map" title="Open in Maps">
            📍 Maps ↗
          </a>
        </div>
      ` : "";

      // Detailed Timed Schedule steps
      const timedStepsHtml = day.schedule.map(step => `
        <div class="timed-step-item">
          <div class="timed-step-time">${step.time}</div>
          <div class="timed-step-content">
            <div class="timed-step-title">${step.activity}</div>
            <div class="timed-step-details">${step.details}</div>
          </div>
        </div>
      `).join("");

      return `
        <div class="single-day-card" id="day-${optKey}-${day.dayNum}">
          <!-- Day Header -->
          <div class="single-day-header">
            <div class="day-header-left">
              <span class="day-number-badge" style="background: ${isOpt2 ? 'rgba(56, 189, 248, 0.2)' : 'rgba(52, 211, 153, 0.2)'}; color: ${isOpt2 ? '#38bdf8' : '#34d399'};">
                Day ${day.dayNum}
              </span>
              <span class="day-date-str">${day.date}</span>
            </div>
            <div class="day-stay-badge">
              🏨 <strong>${stayText}</strong>
            </div>
          </div>

          <!-- Day Main Title & Vibe -->
          <div class="single-day-headline">
            <h3 class="single-day-title">${day.title}</h3>
            <span class="single-day-vibe">✨ ${day.vibe}</span>
          </div>

          <!-- Transit Info Box -->
          <div class="single-day-transit">
            <span class="transit-icon">🚗</span>
            <div class="transit-text">
              <strong>Transit:</strong> ${transitText}
            </div>
          </div>

          <!-- Key Attractions & Maps -->
          <div class="single-day-attractions">
            <div class="attractions-label">
              <span>🗺️ Key Spots:</span>
              <a href="${day.mapUrl}" target="_blank" rel="noopener noreferrer" class="map-link-btn">
                Open Area Map ↗
              </a>
            </div>
            <div class="schedule-pills-row">
              ${attractionsHtml}
            </div>
          </div>

          <!-- Party / Alternative Highlight -->
          ${altHtml ? `
            <div class="single-day-alt-box">
              <span class="alt-lead">🎉 Nightlife / Alternative:</span>
              ${altHtml}
            </div>
          ` : ""}

          <!-- Pro-Tip -->
          <div class="single-day-tip">
            <strong>💡 Pro-Tip:</strong> ${day.tips}
          </div>

          <!-- Accordion for Hour-by-Hour Timed Schedule -->
          <div class="timed-accordion">
            <button class="timed-accordion-btn" data-target="timed-${optKey}-${day.dayNum}">
              <span>⏱️ Full Timed Schedule (${day.schedule.length} steps)</span>
              <span class="accordion-arrow">▾</span>
            </button>
            <div class="timed-accordion-body" id="timed-${optKey}-${day.dayNum}">
              <div class="timed-steps-list">
                ${timedStepsHtml}
              </div>
            </div>
          </div>

          <!-- Card Footer Action -->
          <div class="single-day-footer">
            <a href="index.html?opt=${optKey}&day=${day.dayNum}" class="open-in-cards-btn" title="View with photos in Swipe Deck">
              <span>🃏</span> View Photos & Swipe Card ➔
            </a>
          </div>
        </div>
      `;
    }).join("");

    return `
      <section class="single-option-table-section ${optKey}-section">
        <!-- Option Summary Banner -->
        <div class="option-hero-banner" style="border-left: 4px solid ${optColor};">
          <div class="option-hero-badge" style="background: ${isOpt2 ? 'rgba(56, 189, 248, 0.15)' : 'rgba(52, 211, 153, 0.15)'}; color: ${optColor};">
            ${optBadge}
          </div>
          <h2 class="option-hero-title">${optTitle}</h2>
          <div class="option-hero-route">🗺️ <strong>Route:</strong> ${optRoute}</div>
          <p class="option-hero-desc">${optSummary}</p>
        </div>

        <!-- Schedule Days Cards/Table -->
        <div class="schedule-days-container">
          ${rowsHtml}
        </div>
      </section>
    `;
  }

  function render() {
    if (activeTab === "opt2") {
      container.innerHTML = generateSingleTableHtml("opt2");
    } else if (activeTab === "opt3") {
      container.innerHTML = generateSingleTableHtml("opt3");
    } else {
      // Both stacked
      container.innerHTML = `
        <div class="stacked-schedule-view">
          ${generateSingleTableHtml("opt2")}
          <div style="margin: 40px 0; border-top: 2px dashed rgba(255,255,255,0.15); position: relative; text-align: center;">
            <span style="background: var(--bg-dark); padding: 4px 16px; border-radius: 999px; font-size: 12px; font-weight: 800; color: #94a3b8; border: 1px solid rgba(255,255,255,0.1); position: relative; top: -12px;">
              END OF OPTION 2 • START OF OPTION 3 BELOW
            </span>
          </div>
          ${generateSingleTableHtml("opt3")}
        </div>
      `;
    }

    // Bind Accordion Toggles
    container.querySelectorAll(".timed-accordion-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const targetBody = document.getElementById(targetId);
        const arrow = btn.querySelector(".accordion-arrow");
        if (targetBody) {
          const isOpen = targetBody.classList.contains("open");
          if (isOpen) {
            targetBody.classList.remove("open");
            if (arrow) arrow.textContent = "▾";
          } else {
            targetBody.classList.add("open");
            if (arrow) arrow.textContent = "▴";
          }
        }
      });
    });
  }

  // Bind Tab Buttons
  tabOpt2?.addEventListener("click", () => setTab("opt2"));
  tabOpt3?.addEventListener("click", () => setTab("opt3"));
  tabBoth?.addEventListener("click", () => setTab("both"));

  // Initial Render
  setTab(activeTab);
})();
