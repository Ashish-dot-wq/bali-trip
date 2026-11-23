// Bali 2026 - Shared Navigation & Drawer Component
// Manages the overflow menu, page navigation, device mode, and global modals across all pages.

(function() {
  // Determine current page from URL
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // Device mode state (persisted in localStorage)
  let deviceMode = localStorage.getItem("bali2026_device_mode") || "mobile";

  function applyDeviceMode(mode) {
    deviceMode = mode;
    const appContainer = document.getElementById("appContainer");
    const modeIcon = document.getElementById("deviceModeIcon");
    const modeText = document.getElementById("deviceModeText");

    if (appContainer) {
      if (mode === "web") {
        appContainer.classList.add("fullscreen-mode");
        if (modeIcon) modeIcon.textContent = "📱";
        if (modeText) modeText.textContent = "Switch to Mobile Phone View";
      } else {
        appContainer.classList.remove("fullscreen-mode");
        if (modeIcon) modeIcon.textContent = "💻";
        if (modeText) modeText.textContent = "Switch to Expanded Web View";
      }
    }
    try {
      localStorage.setItem("bali2026_device_mode", mode);
    } catch (e) {}
  }

  // Toast Notification
  function showToast(message, icon = "✨") {
    let toast = document.getElementById("toastNotice");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toastNotice";
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  // ---------- Trip at a Glance modal ----------
  // India (IST) is UTC+5:30, Bali (WITA) is UTC+8:00 → Bali is 2h 30m ahead. Neither observes DST.
  function buildFlightModal() {
    document.querySelectorAll("#flightModal").forEach(el => el.remove()); // drop old per-page copies

    const meta = (typeof TRIP_DATA !== "undefined" && TRIP_DATA.meta) || {};
    const pnr = meta.pnr || "[removed]";
    const bag = (meta.flights && meta.flights.baggage) || { cabin: "7 Kgs / adult", checkIn: "20 Kgs / adult" };

    const days = [
      { dow: "Fri", d: 18, kind: "half", note: "Land 10:15" },
      { dow: "Sat", d: 19, kind: "full" }, { dow: "Sun", d: 20, kind: "full" },
      { dow: "Mon", d: 21, kind: "full" }, { dow: "Tue", d: 22, kind: "full" },
      { dow: "Wed", d: 23, kind: "full" }, { dow: "Thu", d: 24, kind: "full" },
      { dow: "Fri", d: 25, kind: "full" }, { dow: "Sat", d: 26, kind: "full" },
      { dow: "Sun", d: 27, kind: "fly", note: "Fly 11:15" }
    ];
    const dayCells = days.map(x => `
      <div class="tg-day tg-day-${x.kind}">
        <span class="tg-dow">${x.dow}</span>
        <span class="tg-date">${x.d}</span>
        <span class="tg-bar"></span>
      </div>`).join("");

    // Bali hour → India hour pairs for the converter ruler
    const pairs = [["6 AM", "3:30 AM"], ["9 AM", "6:30 AM"], ["12 PM", "9:30 AM"], ["3 PM", "12:30 PM"], ["6 PM", "3:30 PM"], ["10 PM", "7:30 PM"]];
    const ruler = pairs.map(([b, i]) => `
      <div class="tg-pair"><span class="tg-pair-bali">${b}</span><span class="tg-pair-arrow">↓</span><span class="tg-pair-india">${i}</span></div>`).join("");

    const modal = document.createElement("div");
    modal.className = "tg-overlay";
    modal.id = "flightModal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "tgTitle");
    modal.innerHTML = `
      <div class="tg-dialog">
        <div class="tg-header">
          <div class="tg-title" id="tgTitle">✈️ Trip at a Glance</div>
          <button type="button" class="tg-close" aria-label="Close">✕</button>
        </div>
        <div class="tg-body">

          <section class="tg-hero">
            <div class="tg-stat"><span class="tg-num">9</span><span class="tg-lbl">Nights</span></div>
            <div class="tg-stat tg-stat-main"><span class="tg-num">8½</span><span class="tg-lbl">Usable days</span></div>
            <div class="tg-stat"><span class="tg-num">217h</span><span class="tg-lbl">On the ground</span></div>
          </section>
          <div class="tg-days">${dayCells}</div>
          <div class="tg-legend">
            <span><i class="tg-key tg-key-half"></i>Arrival afternoon</span>
            <span><i class="tg-key tg-key-full"></i>8 full days</span>
            <span><i class="tg-key tg-key-fly"></i>Fly home (no time)</span>
          </div>

          <section class="tg-card">
            <div class="tg-card-title">🕑 Time difference</div>
            <div class="tg-clocks">
              <div class="tg-clock">
                <span class="tg-flag">🇮🇳 India · IST</span>
                <span class="tg-time" data-tz="Asia/Kolkata">--:--</span>
                <span class="tg-utc">UTC +5:30</span>
              </div>
              <div class="tg-diff"><span>+2h 30m</span><small>Bali ahead</small></div>
              <div class="tg-clock tg-clock-bali">
                <span class="tg-flag">🇮🇩 Bali · WITA</span>
                <span class="tg-time" data-tz="Asia/Makassar">--:--</span>
                <span class="tg-utc">UTC +8:00</span>
              </div>
            </div>
            <div class="tg-ruler-head"><span class="tg-pair-bali">Bali time</span> → <span class="tg-pair-india">India time</span></div>
            <div class="tg-ruler">${ruler}</div>
            <p class="tg-tip">Your body clock runs 2½ h behind. An 8 AM Bali start feels like 5:30 AM. Calling home at 9 PM in Bali reaches India at 6:30 PM.</p>
          </section>

          <section class="tg-card tg-flight">
            <div class="tg-flight-head">
              <span class="tg-chip tg-chip-out">OUTBOUND</span>
              <span class="tg-fno">IndiGo 6E 1605 · 6h 50m</span>
            </div>
            <div class="tg-leg">
              <div class="tg-end">
                <span class="tg-code">BLR</span>
                <span class="tg-big">00:55</span>
                <span class="tg-sub">Fri 18 Dec · IST</span>
                <span class="tg-alt">= 03:25 Bali</span>
              </div>
              <div class="tg-path"><span>✈</span></div>
              <div class="tg-end tg-end-r">
                <span class="tg-code">DPS</span>
                <span class="tg-big">10:15</span>
                <span class="tg-sub">Fri 18 Dec · Bali</span>
                <span class="tg-alt">= 07:45 India</span>
              </div>
            </div>
            <p class="tg-warn">🌙 Red-eye: you leave home on the night of <b>Thu 17 Dec</b>. Be at BLR T2 by ~10 PM.</p>
          </section>

          <section class="tg-card tg-flight">
            <div class="tg-flight-head">
              <span class="tg-chip tg-chip-ret">RETURN</span>
              <span class="tg-fno">IndiGo 6E 1606 · 6h 30m</span>
            </div>
            <div class="tg-leg">
              <div class="tg-end">
                <span class="tg-code">DPS</span>
                <span class="tg-big">11:15</span>
                <span class="tg-sub">Sun 27 Dec · Bali</span>
                <span class="tg-alt">= 08:45 India</span>
              </div>
              <div class="tg-path"><span>✈</span></div>
              <div class="tg-end tg-end-r">
                <span class="tg-code">BLR</span>
                <span class="tg-big">15:15</span>
                <span class="tg-sub">Sun 27 Dec · IST</span>
                <span class="tg-alt">= 17:45 Bali</span>
              </div>
            </div>
            <p class="tg-warn">⏰ Be at DPS by ~8:15 AM. From Ubud (both options end there), leave by ~6 AM.</p>
          </section>

          <div class="tg-booking">
            <span>PNR <b>${pnr}</b></span>
            <span>🧳 ${bag.checkIn} check-in · ${bag.cabin} cabin</span>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    return modal;
  }

  function updateClocks() {
    document.querySelectorAll(".tg-time[data-tz]").forEach(el => {
      try {
        el.textContent = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit", minute: "2-digit", hour12: false, timeZone: el.dataset.tz
        }).format(new Date());
      } catch (e) {}
    });
  }

  // Initialize navigation after DOM loads
  window.addEventListener("DOMContentLoaded", () => {
    applyDeviceMode(deviceMode);

    const btnOverflow = document.getElementById("btnOverflowMenu");
    const drawerOverlay = document.getElementById("navDrawerOverlay");
    const btnDrawerClose = document.getElementById("btnDrawerClose");
    const btnToggleDeviceMode = document.getElementById("btnToggleDeviceMode");
    const btnDrawerShare = document.getElementById("btnDrawerShare");
    const drawerFlightBanner = document.getElementById("drawerFlightBanner");
    const flightBannerBtn = document.getElementById("flightBannerBtn");

    // Open drawer
    function openDrawer() {
      if (drawerOverlay) {
        drawerOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    }

    // Close drawer
    function closeDrawer() {
      if (drawerOverlay) {
        drawerOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    }

    if (btnOverflow) btnOverflow.addEventListener("click", openDrawer);
    if (btnDrawerClose) btnDrawerClose.addEventListener("click", closeDrawer);

    if (drawerOverlay) {
      drawerOverlay.addEventListener("click", (e) => {
        if (e.target === drawerOverlay) closeDrawer();
      });
    }

    // Keydown ESC closes drawer & modals
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDrawer();
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
      }
    });

    // Toggle Device Mode
    if (btnToggleDeviceMode) {
      btnToggleDeviceMode.addEventListener("click", () => {
        const next = deviceMode === "mobile" ? "web" : "mobile";
        applyDeviceMode(next);
        showToast(next === "web" ? "Switched to Full Web View" : "Switched to Phone Frame", next === "web" ? "💻" : "📱");
      });
    }

    // Share Link Action
    if (btnDrawerShare) {
      btnDrawerShare.addEventListener("click", () => {
        const url = window.location.origin + window.location.pathname;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(() => {
            showToast("Public link copied to clipboard!", "📋");
          }).catch(() => {
            prompt("Copy this public link:", url);
          });
        } else {
          prompt("Copy this public link:", url);
        }
      });
    }

    // Trip-at-a-glance / Flight Info Modal (shared by every page)
    const flightModal = buildFlightModal();
    let clockTimer = null;

    function showFlightModal() {
      closeDrawer();
      updateClocks();
      clearInterval(clockTimer);
      clockTimer = setInterval(updateClocks, 15000);
      flightModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function hideFlightModal() {
      if (!flightModal.classList.contains("active")) return;
      flightModal.classList.remove("active");
      clearInterval(clockTimer);
      document.body.style.overflow = "";
    }

    flightModal.addEventListener("click", (e) => {
      if (e.target === flightModal || e.target.closest(".tg-close")) hideFlightModal();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") hideFlightModal();
    });

    if (flightBannerBtn) flightBannerBtn.addEventListener("click", showFlightModal);
    if (drawerFlightBanner) drawerFlightBanner.addEventListener("click", showFlightModal);

    // Generic close for the other in-page sheets (some pages had no close wiring)
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest(".modal-close-trigger");
      if (trigger) trigger.closest(".modal-overlay")?.classList.remove("active");
    });

    // Highlight active link in drawer
    document.querySelectorAll(".drawer-nav-item").forEach(item => {
      const href = item.getAttribute("href");
      if (href && href.startsWith(currentPath)) {
        item.classList.add("active");
      }
    });
  });

  // Export helpers to window
  window.BaliNav = {
    showToast,
    applyDeviceMode,
    getDeviceMode: () => deviceMode
  };
})();
