// Bali 2026 - Mobile Swipe & Decision Engine
document.addEventListener("DOMContentLoaded", () => {
  // Public URL for sharing with friends
  // On localhost, share the live GitHub Pages link; otherwise share the current site's folder
  // (window.location.origin alone would drop the /bali-trip/ path on GitHub Pages).
  const PAGES_URL = "https://ashish-dot-wq.github.io/bali-trip/";
  const PUBLIC_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? PAGES_URL
    : window.location.origin + window.location.pathname.replace(/[^/]*$/, "");

  // Application State
  const state = {
    currentOption: "opt2", // 'opt2' or 'opt3'
    currentDayIndex: 0,    // 0 to 9 (Day 1 to 10)
    currentPhotoIndex: 0,
    viewMode: "cards",     // 'cards' or 'table'
    deviceMode: "mobile",  // 'mobile' or 'web'
    tableFilter: "all",    // 'all', 'divergent', 'ubud'
    likedDays: new Set(),
    activeFriendId: 1,
    friends: [
      { id: 1, name: "Ashish", vote: "opt2", reason: "Can't miss wild sea turtles & sunset swings!" },
      { id: 2, name: "Friend 2", vote: null, reason: "" },
      { id: 3, name: "Friend 3", vote: null, reason: "" },
      { id: 4, name: "Friend 4", vote: null, reason: "" },
      { id: 5, name: "Friend 5", vote: null, reason: "" }
    ],
    isDesktopFullscreen: false
  };

  // URL query params
  try {
    const initParams = new URLSearchParams(window.location.search);
    const initOpt = initParams.get("opt");
    if (initOpt === "opt2" || initOpt === "opt3") {
      state.currentOption = initOpt;
    }
    const initDay = parseInt(initParams.get("day"));
    if (initDay >= 1 && initDay <= 10) {
      state.currentDayIndex = initDay - 1;
    }
  } catch (e) {}

  // Load persisted votes from localStorage if available
  try {
    const savedVotes = localStorage.getItem("bali2026_friends_votes");
    if (savedVotes) {
      state.friends = JSON.parse(savedVotes);
    }
    const savedLikes = localStorage.getItem("bali2026_liked_days");
    if (savedLikes) {
      state.likedDays = new Set(JSON.parse(savedLikes));
    }
    const savedDevice = localStorage.getItem("bali2026_device_mode");
    if (savedDevice) {
      state.deviceMode = savedDevice;
    }
  } catch (e) {
    console.warn("Local storage unavailable:", e);
  }

  // DOM Elements
  const appContainer = document.getElementById("appContainer");
  const cardStage = document.getElementById("cardStage");
  const tableStage = document.getElementById("tableStage");
  const actionControls = document.querySelector(".action-controls");
  const segmentOpt2 = document.getElementById("segmentOpt2");
  const segmentOpt3 = document.getElementById("segmentOpt3");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnHeart = document.getElementById("btnHeart");
  const btnSchedule = document.getElementById("btnSchedule");
  const toastNotice = document.getElementById("toastNotice");

  // View & Device Mode Controls
  const tabViewCards = document.getElementById("tabViewCards");
  const tabViewTable = document.getElementById("tabViewTable");
  const btnTableToggleHeader = document.getElementById("btnTableToggleHeader");
  const btnDeviceMobile = document.getElementById("btnDeviceMobile");
  const btnDeviceWeb = document.getElementById("btnDeviceWeb");
  const btnSharePublicTop = document.getElementById("btnSharePublicTop");
  const toggleFrameBtn = document.getElementById("toggleFrameBtn");

  // Modals
  const problemModal = document.getElementById("problemModal");
  const scheduleModal = document.getElementById("scheduleModal");
  const votingModal = document.getElementById("votingModal");
  const matrixModal = document.getElementById("matrixModal");
  const shareModal = document.getElementById("shareModal");
  const shareSheetContent = document.getElementById("shareSheetContent");
  const nightlifeModal = document.getElementById("nightlifeModal");

  // Show Toast
  function showToast(message, icon = "✨") {
    toastNotice.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastNotice.classList.add("show");
    setTimeout(() => {
      toastNotice.classList.remove("show");
    }, 2400);
  }

  // Set Device Mode (Mobile Frame vs Web Expanded)
  function setDeviceMode(mode) {
    state.deviceMode = mode;
    state.isDesktopFullscreen = (mode === "web");

    if (mode === "web") {
      appContainer.classList.add("fullscreen-mode");
      btnDeviceWeb?.classList.add("active");
      btnDeviceMobile?.classList.remove("active");
      if (toggleFrameBtn) toggleFrameBtn.innerHTML = "📱 Phone View";
      showToast("Switched to Full Web View", "💻");
    } else {
      appContainer.classList.remove("fullscreen-mode");
      btnDeviceMobile?.classList.add("active");
      btnDeviceWeb?.classList.remove("active");
      if (toggleFrameBtn) toggleFrameBtn.innerHTML = "🖥️ Expanded View";
      showToast("Switched to Mobile Phone Frame", "📱");
    }

    try {
      localStorage.setItem("bali2026_device_mode", mode);
    } catch (e) {}
  }

  // Set View Mode (Cards vs Table)
  function setViewMode(mode) {
    state.viewMode = mode;

    if (mode === "table") {
      cardStage.style.display = "none";
      tableStage.classList.add("active");
      if (actionControls) actionControls.style.display = "none";
      tabViewTable?.classList.add("active");
      tabViewCards?.classList.remove("active");
      renderMasterTable();
      showToast("Switched to Master Itinerary Table", "📅");
    } else {
      cardStage.style.display = "flex";
      tableStage.classList.remove("active");
      if (actionControls) actionControls.style.display = "flex";
      tabViewCards?.classList.add("active");
      tabViewTable?.classList.remove("active");
      renderCard();
      showToast("Switched to Swipe Cards View", "🃏");
    }
  }

  // Get current day data
  function getCurrentDay() {
    const option = TRIP_DATA.options[state.currentOption];
    return option.days[state.currentDayIndex];
  }

  // Render the active card
  function renderCard() {
    const day = getCurrentDay();
    const isLiked = state.likedDays.has(`${state.currentOption}_${day.dayNum}`);
    
    // Reset photo index if out of bounds
    if (state.currentPhotoIndex >= day.photos.length) {
      state.currentPhotoIndex = 0;
    }

    // Generate story dashes
    const storyDashesHtml = day.photos.map((p, idx) => `
      <div class="story-dash ${idx === state.currentPhotoIndex ? 'active' : ''}"></div>
    `).join("");

    const currentPhoto = day.photos[state.currentPhotoIndex] || day.photos[0];

    // Key Attractions Google Maps pills
    const attractionsHtml = (day.attractions || []).map(att => `
      <a href="${att.url}" target="_blank" rel="noopener noreferrer" class="attraction-pill-link" title="Open ${att.name} in Google Maps">
        <span>📍</span> ${att.name} <span class="pill-ext">↗</span>
      </a>
    `).join("");

    // Party & Self-Exploration Alternatives
    const alternativesHtml = (day.alternatives || []).map(alt => `
      <div class="alt-item">
        <div class="alt-top">
          <div class="alt-badge-group">
            <span class="alt-badge">${alt.badge}</span>
            <span class="alt-category">${alt.category}</span>
          </div>
          <a href="${alt.url}" target="_blank" rel="noopener noreferrer" class="alt-maps-link" title="Open ${alt.name} in Google Maps">
            <span>📍</span> Maps ↗
          </a>
        </div>
        <div class="alt-name">${alt.name}</div>
        <div class="alt-desc">${alt.desc}</div>
      </div>
    `).join("");

    // Mini activity previews
    const miniActivitiesHtml = day.schedule.slice(0, 4).map(item => `
      <div class="activity-mini-item">
        <div class="activity-mini-time">${item.time.split(" - ")[0]}</div>
        <div class="activity-mini-text">${item.activity}</div>
      </div>
    `).join("");

    cardStage.innerHTML = `
      <div class="swipe-card" id="activeSwipeCard">
        <div class="card-media">
          <div class="story-dashes">${storyDashesHtml}</div>
          <div class="card-badges">
            <div class="badge-day">Day ${day.dayNum} of 10 • ${day.date.split(",")[0]}</div>
            <a href="${day.mapUrl}" target="_blank" rel="noopener noreferrer" class="badge-location-btn" title="Open ${day.location} in Google Maps with key attractions marked">
              📍 ${day.location} <span class="map-link-hint">Maps ↗</span>
            </a>
          </div>
          <img src="${currentPhoto.url}" alt="${currentPhoto.caption}" class="card-image" id="cardImg" loading="eager" />
          <div class="card-media-overlay"></div>
          <div class="photo-tap-left" id="photoTapLeft" title="Previous photo"></div>
          <div class="photo-tap-right" id="photoTapRight" title="Next photo"></div>
          <div class="photo-caption-pill">
            <span>📷</span> ${currentPhoto.caption} (${state.currentPhotoIndex + 1}/${day.photos.length})
          </div>
        </div>

        <div class="card-body">
          <div class="card-title-row">
            <h2 class="card-title">${day.title}</h2>
          </div>
          <div class="card-vibe-pill">✨ ${day.vibe}</div>

          <!-- Key Attractions Google Maps Integration -->
          <div class="attractions-box">
            <div class="attractions-header">
              <span style="display:flex; align-items:center; gap:5px;">
                <span>🗺️</span>
                <span style="font-size: 11px; font-weight:700; color: #fff;">Key Attractions (Google Maps):</span>
              </span>
              <a href="${day.mapUrl}" target="_blank" rel="noopener noreferrer" class="open-all-maps-link">
                Open Area Map ↗
              </a>
            </div>
            <div class="attractions-pills">
              ${attractionsHtml}
            </div>
          </div>

          <!-- Party & Self-Exploration Alternatives -->
          ${day.alternatives && day.alternatives.length > 0 ? `
          <div class="alternatives-box">
            <div class="alternatives-header">
              <span style="display:flex; align-items:center; gap:5px;">
                <span>🎉</span>
                <span style="font-size: 11px; font-weight:800; color: #fbbf24;">Party & Self-Exploration:</span>
              </span>
              <button class="open-nightlife-guide-btn" id="btnCardNightlifeGuide" title="Explore all nightlife & party spots across Bali & Gili">
                Parties Guide ➔
              </button>
            </div>
            <div class="alternatives-list">
              ${alternativesHtml}
            </div>
          </div>
          ` : ''}

          <div class="activity-mini-list">
            ${miniActivitiesHtml}
          </div>

          <div class="card-pro-tip" style="margin-top: 10px;">
            <strong>💡 Pro-Tip:</strong> ${day.tips}
          </div>
        </div>
      </div>
    `;

    // Update Heart Button state
    btnHeart.classList.toggle("liked", isLiked);
    btnHeart.innerHTML = isLiked ? "❤️" : "🤍";

    // Bind Photo Taps
    document.getElementById("photoTapLeft").addEventListener("click", (e) => {
      e.stopPropagation();
      navigatePhoto(-1);
    });
    document.getElementById("photoTapRight").addEventListener("click", (e) => {
      e.stopPropagation();
      navigatePhoto(1);
    });

    // Bind Card Nightlife Guide Button
    document.getElementById("btnCardNightlifeGuide")?.addEventListener("click", (e) => {
      e.stopPropagation();
      openNightlifeModal();
    });

    // Attach Swipe / Drag handlers
    attachDragGestures(document.getElementById("activeSwipeCard"));
  }

  // Render Master Itinerary Table
  function renderMasterTable(filter = state.tableFilter) {
    state.tableFilter = filter;
    const tableData = TRIP_DATA.masterScheduleTable || [];

    const filteredRows = tableData.filter(row => {
      if (filter === "divergent") return row.divergence;
      if (filter === "ubud") return row.dayNum >= 7;
      return true;
    });

    const rowsHtml = filteredRows.map(row => {
      const divergenceBadge = row.divergence
        ? `<div class="divergence-badge">⚠️ ITINERARY DIVERGENCE</div>`
        : `<div class="identical-badge">🤝 IDENTICAL BASE</div>`;

      return `
        <div class="itinerary-table-card ${row.divergence ? 'is-divergent' : ''}" data-day="${row.dayNum}">
          <div class="itinerary-card-header">
            <div class="card-header-left">
              <span class="day-badge-pill">Day ${row.dayNum}</span>
              <span class="card-date-text">${row.date}</span>
              <a href="${row.mapUrl}" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: none; font-size: 11px; font-weight: 700; margin-left: 6px; display: inline-flex; align-items: center; gap: 3px;" title="Open in Google Maps">
                <span>📍</span> Maps ↗
              </a>
            </div>
            ${divergenceBadge}
          </div>

          <div class="itinerary-table-grid">
            <!-- Option 2 Column -->
            <div class="grid-option-col opt2-col">
              <span class="grid-opt-tag">🏝️ OPTION 2: GILI T</span>
              <div class="grid-stay-info">🏨 Base: <strong>${row.opt2Stay}</strong></div>
              <div class="grid-transit-info"><strong>Transit:</strong> ${row.opt2Transit}</div>
              <div class="grid-activity-info">${row.opt2Activity}</div>
            </div>

            <!-- Option 3 Column -->
            <div class="grid-option-col opt3-col">
              <span class="grid-opt-tag">🤿 OPTION 3: AMED LOOP</span>
              <div class="grid-stay-info">🏨 Base: <strong>${row.opt3Stay}</strong></div>
              <div class="grid-transit-info"><strong>Transit:</strong> ${row.opt3Transit}</div>
              <div class="grid-activity-info">${row.opt3Activity}</div>
            </div>
          </div>

          <div style="padding: 8px 12px; background: rgba(0,0,0,0.25); display: flex; justify-content: space-between; align-items: center; gap: 8px;">
            <button class="table-nightlife-btn" style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); color: #fbbf24; padding: 4px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px;">
              <span>🎉</span> Party Spots
            </button>
            <button class="jump-to-day-btn" data-day="${row.dayNum}" style="background: rgba(255,255,255,0.08); border: 1px solid var(--border-subtle); color: #38bdf8; padding: 4px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer;">
              Open in Swipe Cards ➔
            </button>
          </div>
        </div>
      `;
    }).join("");

    tableStage.innerHTML = `
      <div class="table-intro-card">
        <div class="table-intro-title">
          <span>🗺️</span> Master Schedule Comparison (10 Days)
        </div>
        <p style="font-size: 12px; color: var(--text-muted); line-height: 1.4;">
          Side-by-side location movements, transit windows, check-ins, and daily activities for all 5 friends.
        </p>

        <div class="table-filter-chips">
          <button class="filter-chip ${filter === 'all' ? 'active' : ''}" data-filter="all">
            All 10 Days (18–27 Dec)
          </button>
          <button class="filter-chip ${filter === 'divergent' ? 'active' : ''}" data-filter="divergent">
            ⚠️ The Split Days (Dec 21–24)
          </button>
          <button class="filter-chip ${filter === 'ubud' ? 'active' : ''}" data-filter="ubud">
            🌲 Ubud Finale (Dec 24–27)
          </button>
        </div>
      </div>

      <div class="itinerary-cards-container">
        ${rowsHtml}
      </div>
    `;

    // Filter chip clicks
    tableStage.querySelectorAll(".filter-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        renderMasterTable(btn.dataset.filter);
      });
    });

    // Jump to Day button clicks
    tableStage.querySelectorAll(".jump-to-day-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const day = parseInt(btn.dataset.day);
        state.currentDayIndex = day - 1;
        state.currentPhotoIndex = 0;
        setViewMode("cards");
      });
    });

    // Table Nightlife button clicks
    tableStage.querySelectorAll(".table-nightlife-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        openNightlifeModal();
      });
    });
  }

  // Open Public Share Link Modal
  function openShareModal() {
    shareSheetContent.innerHTML = `
      <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 14px; padding: 14px; margin-bottom: 14px;">
        <div style="font-size: 13px; font-weight: 800; color: #60a5fa; margin-bottom: 4px;">
          🌐 Public Web Link Live
        </div>
        <div style="font-size: 12px; color: #cbd5e1; line-height: 1.4;">
          Share this live link with your friends so they can open it on their phones, swipe through both options, and submit their votes!
        </div>
      </div>

      <div class="share-link-input-box">
        <input type="text" class="share-link-text" id="publicLinkInput" value="${PUBLIC_URL}" readonly />
        <button class="copy-link-btn" id="btnCopyLinkModal">📋 Copy Link</button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;">
        <button class="whatsapp-share-btn" id="btnShareWhatsAppDirect">
          <span>📲</span> Share on WhatsApp Group
        </button>
      </div>

      <div style="text-align: center; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 16px;">
        <div style="font-size: 12px; font-weight: 700; color: #94a3b8; margin-bottom: 8px;">Scan with Phone Camera:</div>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(PUBLIC_URL)}" 
          alt="QR Code to open app on phone" 
          style="width: 160px; height: 160px; border-radius: 10px; background: #fff; padding: 6px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" />
        <div style="font-size: 11px; color: #64748b; margin-top: 8px;">Opens immediately in mobile Safari or Chrome</div>
      </div>
    `;

    document.getElementById("btnCopyLinkModal")?.addEventListener("click", () => {
      navigator.clipboard.writeText(PUBLIC_URL).then(() => {
        showToast("Public link copied to clipboard!", "📋");
      });
    });

    document.getElementById("btnShareWhatsAppDirect")?.addEventListener("click", () => {
      const msg = `Hey folks! Here is the visual mobile app to choose between our 2 Bali trip options (Dec 18-27): ${PUBLIC_URL}`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, "_blank");
    });

    shareModal.classList.add("active");
  }

  // Navigate photos within a card
  function navigatePhoto(direction) {
    const day = getCurrentDay();
    const totalPhotos = day.photos.length;
    let newIndex = state.currentPhotoIndex + direction;

    if (newIndex >= totalPhotos) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalPhotos - 1;
    }

    state.currentPhotoIndex = newIndex;
    const photo = day.photos[newIndex];
    const cardImg = document.getElementById("cardImg");
    const dashes = document.querySelectorAll(".story-dash");
    const captionPill = document.querySelector(".photo-caption-pill");

    if (cardImg && photo) {
      cardImg.style.opacity = "0.7";
      setTimeout(() => {
        cardImg.src = photo.url;
        cardImg.alt = photo.caption;
        cardImg.style.opacity = "1";
      }, 100);

      dashes.forEach((dash, idx) => {
        dash.classList.toggle("active", idx === newIndex);
      });

      if (captionPill) {
        captionPill.innerHTML = `<span>📷</span> ${photo.caption} (${newIndex + 1}/${totalPhotos})`;
      }
    }
  }

  // Navigate Days
  function navigateDay(direction) {
    const totalDays = 10;
    let nextIndex = state.currentDayIndex + direction;

    if (nextIndex < 0) {
      showToast("You're on Day 1 (Arrival)!", "✈️");
      return;
    }
    if (nextIndex >= totalDays) {
      showToast("Completed Day 10! Time to cast your vote!", "🗳️");
      openVotingModal();
      return;
    }

    state.currentDayIndex = nextIndex;
    state.currentPhotoIndex = 0;
    renderCard();
  }

  // Switch between Option 2 and Option 3
  function switchOption(optKey) {
    if (state.currentOption === optKey) return;
    state.currentOption = optKey;
    state.currentPhotoIndex = 0;

    segmentOpt2.classList.toggle("active", optKey === "opt2");
    segmentOpt2.classList.toggle("opt2-active", optKey === "opt2");
    segmentOpt3.classList.toggle("active", optKey === "opt3");
    segmentOpt3.classList.toggle("opt3-active", optKey === "opt3");

    if (state.viewMode === "cards") {
      renderCard();
    }
    showToast(`Switched to ${TRIP_DATA.options[optKey].name}`, optKey === "opt2" ? "🏝️" : "🤿");
  }

  // Toggle Heart / Favorite
  function toggleHeart() {
    const day = getCurrentDay();
    const key = `${state.currentOption}_${day.dayNum}`;
    if (state.likedDays.has(key)) {
      state.likedDays.delete(key);
      showToast(`Removed Day ${day.dayNum} from favorites`);
    } else {
      state.likedDays.add(key);
      showToast(`Loved Day ${day.dayNum}! Added to favorites ❤️`, "❤️");
    }
    try {
      localStorage.setItem("bali2026_liked_days", JSON.stringify([...state.likedDays]));
    } catch (e) {}
    renderCard();
  }

  // Touch & Mouse Drag Physics (Directional detection: never blocks vertical scrolling)
  function attachDragGestures(cardEl) {
    let startX = 0, startY = 0;
    let currentX = 0, currentY = 0;
    let isDragging = false;
    let isHorizontalGesture = false;

    function handleStart(e) {
      if (e.target.closest("#photoTapLeft") || e.target.closest("#photoTapRight") || e.target.closest("a") || e.target.closest("button")) return;
      isDragging = true;
      isHorizontalGesture = false;
      startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      startY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
      cardEl.style.transition = "none";
    }

    function handleMove(e) {
      if (!isDragging) return;
      currentX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      currentY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
      const diffX = currentX - startX;
      const diffY = currentY - startY;

      // If vertical scroll dominates, let page scroll naturally
      if (!isHorizontalGesture) {
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 6) {
          isDragging = false;
          cardEl.style.transform = "translateX(0) rotate(0)";
          return;
        }
        if (Math.abs(diffX) > Math.abs(diffY) * 1.3 && Math.abs(diffX) > 10) {
          isHorizontalGesture = true;
        }
      }

      if (isHorizontalGesture) {
        const rotate = diffX * 0.04;
        cardEl.style.transform = `translateX(${diffX}px) rotate(${rotate}deg)`;
      }
    }

    function handleEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      const diffX = currentX - startX;
      cardEl.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";

      if (isHorizontalGesture && diffX < -65) {
        cardEl.style.transform = `translateX(-120%) rotate(-15deg)`;
        setTimeout(() => {
          navigateDay(1);
        }, 200);
      } else if (isHorizontalGesture && diffX > 65) {
        cardEl.style.transform = `translateX(120%) rotate(15deg)`;
        setTimeout(() => {
          navigateDay(-1);
        }, 200);
      } else {
        cardEl.style.transform = "translateX(0) rotate(0)";
      }
      startX = 0;
      startY = 0;
      currentX = 0;
      currentY = 0;
      isHorizontalGesture = false;
    }

    cardEl.addEventListener("touchstart", handleStart, { passive: true });
    cardEl.addEventListener("touchmove", handleMove, { passive: true });
    cardEl.addEventListener("touchend", handleEnd);

    cardEl.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
  }

  // Full Schedule Modal Rendering
  function openScheduleModal() {
    const day = getCurrentDay();
    const rowsHtml = day.schedule.map(item => `
      <tr class="schedule-row">
        <td class="sched-time">${item.time}</td>
        <td class="sched-details">
          <div class="sched-act">${item.activity}</div>
          <div class="sched-desc">${item.details}</div>
        </td>
      </tr>
    `).join("");

    document.getElementById("scheduleSheetContent").innerHTML = `
      <div style="margin-bottom: 12px;">
        <span class="card-vibe-pill">${TRIP_DATA.options[state.currentOption].badge}</span>
        <h3 style="font-size: 17px; font-weight: 800; color: #fff; margin-top: 4px;">${day.title}</h3>
        <p style="font-size: 12px; color: #94a3b8;">${day.date} • Base: <strong>${day.location}</strong></p>
      </div>
      <table class="schedule-table">
        <tbody>${rowsHtml}</tbody>
      </table>
      <div class="card-pro-tip" style="margin-top: 14px;">
        <strong>💡 Key Insight:</strong> ${day.tips}
      </div>
    `;

    scheduleModal.classList.add("active");
  }

  // Problem Modal Rendering
  function openProblemModal() {
    const meta = TRIP_DATA.meta.problemStatement;
    const issuesHtml = meta.keyIssues.map(issue => `
      <div class="problem-grid-item">
        <div class="problem-item-icon">${issue.icon}</div>
        <div>
          <div class="problem-item-title">${issue.title}</div>
          <div class="problem-item-desc">${issue.description}</div>
        </div>
      </div>
    `).join("");

    document.getElementById("problemSheetContent").innerHTML = `
      <div class="problem-card-box">
        <div class="problem-card-title">🚨 The 48-Hour Transit Trap Explained</div>
        <div class="problem-card-text">${meta.summary}</div>
      </div>
      <div class="problem-pill-grid">${issuesHtml}</div>
      <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 12px; margin-top: 10px;">
        <div style="font-size: 13px; font-weight: 700; color: #34d399; margin-bottom: 4px;">✅ How Both Options Fix This</div>
        <p style="font-size: 12px; color: #e2e8f0; line-height: 1.4;">
          Both Option 2 and Option 3 keep Seminyak for 3 nights (Dec 18–21). We take an easy day-trip to Nusa Penida on Dec 20 from Sanur (35m away) with light packs, keeping all main bags in Seminyak!
        </p>
      </div>
    `;
    problemModal.classList.add("active");
  }

  // Voting Modal Rendering & Consensus Engine
  function openVotingModal() {
    renderVotingSheet();
    votingModal.classList.add("active");
  }

  function renderVotingSheet() {
    const currentFriend = state.friends.find(f => f.id === state.activeFriendId) || state.friends[0];

    const chipsHtml = state.friends.map(f => `
      <div class="friend-chip ${f.id === state.activeFriendId ? 'selected' : ''}" data-friend-id="${f.id}">
        <div class="friend-avatar">${f.name.slice(0, 2).toUpperCase()}</div>
        <input type="text" class="friend-name-input" data-friend-id="${f.id}" value="${f.name}" placeholder="Name" maxlength="10" />
        <div style="font-size: 9px; color: ${f.vote === 'opt2' ? 'var(--opt2-color)' : f.vote === 'opt3' ? 'var(--opt3-color)' : '#94a3b8'}; margin-top: 2px; font-weight: 700;">
          ${f.vote === 'opt2' ? 'Opt 2 🏝️' : f.vote === 'opt3' ? 'Opt 3 🤿' : 'Unvoted'}
        </div>
      </div>
    `).join("");

    const opt2Votes = state.friends.filter(f => f.vote === 'opt2').length;
    const opt3Votes = state.friends.filter(f => f.vote === 'opt3').length;
    const totalVotes = opt2Votes + opt3Votes;
    const opt2Pct = totalVotes > 0 ? (opt2Votes / 5) * 100 : 0;
    const opt3Pct = totalVotes > 0 ? (opt3Votes / 5) * 100 : 0;

    document.getElementById("votingSheetContent").innerHTML = `
      <div class="vote-section-title">Select Who You Are (Group of 5):</div>
      <div class="friends-selector-list">${chipsHtml}</div>

      <div class="vote-section-title">Cast Vote for <strong style="color: #38bdf8;">${currentFriend.name}</strong>:</div>
      <div class="vote-choices-grid">
        <div class="vote-option-card ${currentFriend.vote === 'opt2' ? 'chosen-opt2' : ''}" id="voteOpt2Btn">
          <span class="vote-opt-badge">OPTION 2</span>
          <div class="vote-opt-title">🏝️ Gili T Island Explorer</div>
          <div class="vote-opt-sub">Seminyak (3N) → Gili T (3N) → Ubud (3N). Wild turtles, sunset swings & party island!</div>
        </div>
        <div class="vote-option-card ${currentFriend.vote === 'opt3' ? 'chosen-opt3' : ''}" id="voteOpt3Btn">
          <span class="vote-opt-badge">OPTION 3</span>
          <div class="vote-opt-title">🤿 Reef & Culture Loop</div>
          <div class="vote-opt-sub">Seminyak (3N) → Amed (2N) → Ubud (4N). Shipwreck diving, Agung views, 100% road transit!</div>
        </div>
      </div>

      <input type="text" class="vote-reason-input" id="voteReasonInput" 
        value="${currentFriend.reason || ''}" 
        placeholder="Add a quick note or reason (e.g. 'I want turtle snorkeling!')" />

      <div class="scoreboard-box">
        <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #fff;">
          <span>Group Scoreboard</span>
          <span>${totalVotes}/5 Voted</span>
        </div>
        <div class="tally-bar">
          <div class="tally-fill-opt2" style="width: ${opt2Pct}%;"></div>
          <div class="tally-fill-opt3" style="width: ${opt3Pct}%;"></div>
        </div>
        <div class="tally-labels">
          <span style="color: var(--opt2-color);">Option 2 (Gili T): ${opt2Votes} votes</span>
          <span style="color: var(--opt3-color);">Option 3 (Amed): ${opt3Votes} votes</span>
        </div>
      </div>

      <button class="whatsapp-share-btn" id="shareWhatsAppBtn">
        <span>📲</span> Copy Decision Summary for WhatsApp Group
      </button>
    `;

    document.querySelectorAll(".friend-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        if (e.target.classList.contains("friend-name-input")) return;
        state.activeFriendId = parseInt(chip.dataset.friendId);
        renderVotingSheet();
      });
    });

    document.querySelectorAll(".friend-name-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const id = parseInt(input.dataset.friendId);
        const friend = state.friends.find(f => f.id === id);
        if (friend) {
          friend.name = input.value.trim() || `Friend ${id}`;
          saveVotes();
        }
      });
    });

    document.getElementById("voteReasonInput").addEventListener("input", (e) => {
      currentFriend.reason = e.target.value;
      saveVotes();
    });

    document.getElementById("voteOpt2Btn").addEventListener("click", () => {
      currentFriend.vote = "opt2";
      saveVotes();
      renderVotingSheet();
      showToast(`${currentFriend.name} voted for Option 2 (Gili T)!`, "🏝️");
    });

    document.getElementById("voteOpt3Btn").addEventListener("click", () => {
      currentFriend.vote = "opt3";
      saveVotes();
      renderVotingSheet();
      showToast(`${currentFriend.name} voted for Option 3 (Amed Loop)!`, "🤿");
    });

    document.getElementById("shareWhatsAppBtn").addEventListener("click", () => {
      copyWhatsAppSummary();
    });
  }

  function saveVotes() {
    try {
      localStorage.setItem("bali2026_friends_votes", JSON.stringify(state.friends));
    } catch (e) {}
  }

  function copyWhatsAppSummary() {
    const opt2Votes = state.friends.filter(f => f.vote === 'opt2');
    const opt3Votes = state.friends.filter(f => f.vote === 'opt3');
    const unvoted = state.friends.filter(f => !f.vote);

    let text = `🌴 *BALI 2026 TRIP DECISION (Dec 18 - 27)* 🌴\n`;
    text += `✈️ Flights: IndiGo 6E 1605 (BLR -> DPS) & 6E 1606 (DPS -> BLR)\n`;
    text += `PNR: [removed] | Group of 5\n\n`;
    text += `*CURRENT VOTE TALLY:*\n`;
    text += `🏝️ *Option 2 (Gili T Island Explorer)*: ${opt2Votes.length} votes\n`;
    opt2Votes.forEach(f => {
      text += `  • ${f.name}${f.reason ? ` ("${f.reason}")` : ''}\n`;
    });
    text += `\n🤿 *Option 3 (Amed Reef & Culture Loop)*: ${opt3Votes.length} votes\n`;
    opt3Votes.forEach(f => {
      text += `  • ${f.name}${f.reason ? ` ("${f.reason}")` : ''}\n`;
    });
    if (unvoted.length > 0) {
      text += `\n⏳ Pending: ${unvoted.map(f => f.name).join(", ")}\n`;
    }
    text += `\n🔗 Open & vote in the app: ${PUBLIC_URL}`;

    navigator.clipboard.writeText(text).then(() => {
      showToast("WhatsApp summary copied to clipboard!", "📋");
    }).catch(() => {
      showToast("Summary generated! Please copy manually.", "📋");
    });
  }

  // Comparison Matrix Modal
  function openMatrixModal() {
    const matrixRowsHtml = TRIP_DATA.comparisonMatrix.map(m => `
      <div class="matrix-row">
        <div class="matrix-cat">${m.category}</div>
        <div class="matrix-cols">
          <div class="matrix-cell opt2-cell">
            <strong>🏝️ Option 2 (Gili T):</strong><br/>${m.opt2}
          </div>
          <div class="matrix-cell opt3-cell">
            <strong>🤿 Option 3 (Amed):</strong><br/>${m.opt3}
          </div>
        </div>
        <div class="matrix-verdict">⚖️ ${m.winner}</div>
      </div>
    `).join("");

    document.getElementById("matrixSheetContent").innerHTML = `
      <div style="font-size: 13px; color: #94a3b8; margin-bottom: 12px;">
        Direct side-by-side breakdown to help the group lock in our final choice:
      </div>
      ${matrixRowsHtml}
    `;
    matrixModal.classList.add("active");
  }

  // Nightlife & Self-Exploration Hub Modal
  function openNightlifeModal() {
    const guide = TRIP_DATA.meta.masterNightlifeGuide;
    if (!guide) return;
    const seminyak = guide.seminyak;
    const gili = guide.giliT;
    const ubud = guide.ubud;
    const quiet = guide.nusaPenidaAndAmed;

    const seminyakVenuesHtml = (seminyak.venues || []).map(v => `
      <div class="nightlife-venue-card">
        <div class="venue-head">
          <span class="venue-name">${v.name}</span>
          <span class="venue-badge">${v.badge}</span>
        </div>
        <div class="venue-desc">${v.desc}</div>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' Bali')}" target="_blank" rel="noopener noreferrer" class="venue-map-link">
          <span>📍</span> Google Maps ↗
        </a>
      </div>
    `).join("");

    const giliVenuesHtml = (gili.venues || []).map(v => `
      <div class="nightlife-venue-card">
        <div class="venue-head">
          <span class="venue-name">${v.name}</span>
          <span class="venue-badge">${v.badge}</span>
        </div>
        <div class="venue-desc">${v.desc}</div>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' Gili Trawangan')}" target="_blank" rel="noopener noreferrer" class="venue-map-link">
          <span>📍</span> Google Maps ↗
        </a>
      </div>
    `).join("");

    const ubudVenuesHtml = (ubud.venues || []).map(v => `
      <div class="nightlife-venue-card">
        <div class="venue-head">
          <span class="venue-name">${v.name}</span>
          <span class="venue-badge">${v.badge}</span>
        </div>
        <div class="venue-desc">${v.desc}</div>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' Ubud Bali')}" target="_blank" rel="noopener noreferrer" class="venue-map-link">
          <span>📍</span> Google Maps ↗
        </a>
      </div>
    `).join("");

    document.getElementById("nightlifeSheetContent").innerHTML = `
      <div class="nightlife-hero-card">
        <div class="nightlife-hero-badge">🎉 SELF-EXPLORATION & NIGHTLIFE GUIDE</div>
        <h3 style="font-size: 16px; color: #fff; margin: 6px 0 4px 0; font-weight: 800;">Parties, Beach Clubs & Adventures by Region</h3>
        <p style="font-size: 12px; color: #cbd5e1; line-height: 1.4; margin: 0;">
          Explore your own way! Here is the complete breakdown of party spots, beach clubs, late-night dancing, and chill vibes across every base in our itinerary.
        </p>
      </div>

      <!-- Region 1: Seminyak -->
      <div class="nightlife-region-section">
        <div class="region-header">
          <div class="region-icon">🍸</div>
          <div>
            <div class="region-title">${seminyak.title}</div>
            <div class="region-vibe">${seminyak.vibe}</div>
          </div>
        </div>
        <div class="venues-grid">
          ${seminyakVenuesHtml}
        </div>
      </div>

      <!-- Region 2: Gili Trawangan -->
      <div class="nightlife-region-section" style="border-color: rgba(245, 158, 11, 0.4);">
        <div class="region-header">
          <div class="region-icon">🏝️</div>
          <div>
            <div class="region-title" style="color: #fbbf24;">${gili.title}</div>
            <div class="region-vibe">${gili.vibe}</div>
          </div>
        </div>
        <div class="rotating-schedule-box">
          <div style="font-size: 12px; font-weight: 800; color: #fbbf24; margin-bottom: 4px;">🔥 The Famous Rotating Party Schedule:</div>
          <p style="font-size: 11px; color: #e2e8f0; line-height: 1.4; margin: 0;">
            ${gili.rotatingSchedule}
          </p>
        </div>
        <div class="venues-grid">
          ${giliVenuesHtml}
        </div>
      </div>

      <!-- Region 3: Ubud -->
      <div class="nightlife-region-section">
        <div class="region-header">
          <div class="region-icon">🎷</div>
          <div>
            <div class="region-title">${ubud.title}</div>
            <div class="region-vibe">${ubud.vibe}</div>
          </div>
        </div>
        <div class="venues-grid">
          ${ubudVenuesHtml}
        </div>
      </div>

      <!-- Region 4: Nusa Penida & Amed -->
      <div class="nightlife-region-section" style="border-color: rgba(56, 189, 248, 0.3);">
        <div class="region-header">
          <div class="region-icon">🌅</div>
          <div>
            <div class="region-title" style="color: #38bdf8;">${quiet.title}</div>
            <div class="region-vibe">${quiet.vibe}</div>
          </div>
        </div>
        <p style="font-size: 12px; color: #cbd5e1; line-height: 1.5; margin: 0; padding: 4px 0;">
          ${quiet.summary}
        </p>
      </div>
    `;

    nightlifeModal.classList.add("active");
  }

  // Close Modals
  document.querySelectorAll(".modal-close-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    });
  });

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });

  // Global Keybindings
  window.addEventListener("keydown", (e) => {
    if (state.viewMode === "cards") {
      if (e.key === "ArrowLeft") navigateDay(-1);
      else if (e.key === "ArrowRight") navigateDay(1);
      else if (e.key === " " || e.key === "ArrowUp") navigatePhoto(1);
    }
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    }
  });

  // Event Listeners for UI Controls
  segmentOpt2.addEventListener("click", () => switchOption("opt2"));
  segmentOpt3.addEventListener("click", () => switchOption("opt3"));
  btnPrev.addEventListener("click", () => navigateDay(-1));
  btnNext.addEventListener("click", () => navigateDay(1));
  btnHeart.addEventListener("click", toggleHeart);
  btnSchedule.addEventListener("click", () => {
    window.location.href = `schedule.html?opt=${state.currentOption}#day-${state.currentOption}-${state.currentDayIndex + 1}`;
  });

  document.getElementById("btnVoteOpen")?.addEventListener("click", openVotingModal);
  document.getElementById("btnCompareOpen")?.addEventListener("click", openMatrixModal);
  document.getElementById("btnProblemOpen")?.addEventListener("click", openProblemModal);
  document.getElementById("btnNightlifeOpen")?.addEventListener("click", openNightlifeModal);
  document.getElementById("problemTickerBar")?.addEventListener("click", openProblemModal);
  document.getElementById("btnDismissTicker")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const bar = document.getElementById("problemTickerBar");
    if (bar) bar.style.display = "none";
    showToast("Banner dismissed", "👌");
  });

  // View Mode Controls (Cards vs Table)
  tabViewCards?.addEventListener("click", () => setViewMode("cards"));
  tabViewTable?.addEventListener("click", () => setViewMode("table"));
  btnTableToggleHeader?.addEventListener("click", () => setViewMode("table"));

  // Device Mode Controls (Mobile vs Web)
  btnDeviceMobile?.addEventListener("click", () => setDeviceMode("mobile"));
  btnDeviceWeb?.addEventListener("click", () => setDeviceMode("web"));

  // Share Public Link Controls
  btnSharePublicTop?.addEventListener("click", openShareModal);

  // Desktop Floating Frame Toggle (Sync with device mode)
  if (toggleFrameBtn) {
    toggleFrameBtn.addEventListener("click", () => {
      const nextMode = state.deviceMode === "mobile" ? "web" : "mobile";
      setDeviceMode(nextMode);
    });
  }

  // Restore saved device mode
  if (state.deviceMode === "web") {
    setDeviceMode("web");
  }

  // Initial Card Render
  renderCard();
});
