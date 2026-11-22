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

    // Flight Info Modal
    function showFlightModal() {
      let modal = document.getElementById("flightModal");
      if (modal) {
        modal.classList.add("active");
      } else {
        alert("Flight Details:\nIndiGo 6E 1605 (BLR -> DPS) • 18 Dec (00:55 - 10:15)\nIndiGo 6E 1606 (DPS -> BLR) • 27 Dec (11:15 - 15:15)\nPNR: SFJ8RN | 20kg Check-in + 7kg Cabin");
      }
    }

    if (flightBannerBtn) flightBannerBtn.addEventListener("click", showFlightModal);
    if (drawerFlightBanner) drawerFlightBanner.addEventListener("click", showFlightModal);

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
