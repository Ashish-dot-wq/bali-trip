// Bali 2026 - Voting Hub Engine
// Manages the 5-friend voting, reasons, consensus meter, and WhatsApp export.

(function() {
  const container = document.getElementById("votingPageContainer");
  if (!container) return;

  const defaultFriends = [
    { id: 1, name: "Ashish", vote: null, reason: "" },
    { id: 2, name: "Rahul", vote: null, reason: "" },
    { id: 3, name: "Priya", vote: null, reason: "" },
    { id: 4, name: "Vikram", vote: null, reason: "" },
    { id: 5, name: "Ananya", vote: null, reason: "" }
  ];

  let friends = defaultFriends;
  try {
    const saved = localStorage.getItem("bali2026_friends_votes");
    if (saved) friends = JSON.parse(saved);
  } catch (e) {}

  let activeFriendId = friends[0]?.id || 1;

  function saveVotes() {
    try {
      localStorage.setItem("bali2026_friends_votes", JSON.stringify(friends));
    } catch (e) {}
  }

  function render() {
    const currentFriend = friends.find(f => f.id === activeFriendId) || friends[0];

    const chipsHtml = friends.map(f => `
      <div class="friend-chip ${f.id === activeFriendId ? 'selected' : ''}" data-id="${f.id}">
        <div class="friend-avatar">${f.name.slice(0, 2).toUpperCase()}</div>
        <input type="text" class="friend-name-input" data-id="${f.id}" value="${f.name}" placeholder="Name" maxlength="10" />
        <div class="friend-vote-status" style="color: ${f.vote === 'opt2' ? 'var(--opt2-color)' : f.vote === 'opt3' ? 'var(--opt3-color)' : '#94a3b8'};">
          ${f.vote === 'opt2' ? 'Opt 2 🏝️' : f.vote === 'opt3' ? 'Opt 3 🤿' : 'Unvoted'}
        </div>
      </div>
    `).join("");

    const opt2Votes = friends.filter(f => f.vote === 'opt2').length;
    const opt3Votes = friends.filter(f => f.vote === 'opt3').length;
    const totalVotes = opt2Votes + opt3Votes;
    const opt2Pct = totalVotes > 0 ? (opt2Votes / 5) * 100 : 0;
    const opt3Pct = totalVotes > 0 ? (opt3Votes / 5) * 100 : 0;

    container.innerHTML = `
      <div class="voting-page-card">
        <div class="vote-section-title">1. Select Who You Are (Click avatar or edit name):</div>
        <div class="friends-selector-list">${chipsHtml}</div>

        <div class="vote-section-title" style="margin-top: 20px;">
          2. Cast Vote for <strong style="color: #38bdf8;">${currentFriend.name}</strong>:
        </div>
        <div class="vote-choices-grid">
          <div class="vote-option-card ${currentFriend.vote === 'opt2' ? 'chosen-opt2' : ''}" id="btnVoteOpt2">
            <span class="vote-opt-badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8;">OPTION 2</span>
            <div class="vote-opt-title">🏝️ Gili T Island Explorer</div>
            <div class="vote-opt-sub">Seminyak (3N) → Gili T (3N) → Ubud (3N). Sea turtles, rotating nightlife & party island!</div>
          </div>
          <div class="vote-option-card ${currentFriend.vote === 'opt3' ? 'chosen-opt3' : ''}" id="btnVoteOpt3">
            <span class="vote-opt-badge" style="background: rgba(52, 211, 153, 0.2); color: #34d399;">OPTION 3</span>
            <div class="vote-opt-title">🤿 Reef & Culture Loop</div>
            <div class="vote-opt-sub">Seminyak (3N) → Amed (2N) → Ubud (4N). Shipwreck diving, Agung views, 100% road transit!</div>
          </div>
        </div>

        <div class="vote-section-title" style="margin-top: 16px;">
          3. Add your quick note or reason:
        </div>
        <input type="text" class="vote-reason-input" id="inputVoteReason" 
          value="${currentFriend.reason || ''}" 
          placeholder="e.g. 'I want turtle snorkeling and lively night markets!'" />

        <!-- Scoreboard -->
        <div class="scoreboard-box" style="margin-top: 24px;">
          <div class="score-header">
            <span>📊 Live Consensus Scoreboard (5 Friends)</span>
            <span>${totalVotes}/5 Voted</span>
          </div>

          <div class="score-bars-container">
            <div class="score-bar-row">
              <span class="score-bar-label">🏝️ Option 2 (Gili T):</span>
              <div class="score-bar-track">
                <div class="score-bar-fill opt2" style="width: ${opt2Pct}%;"></div>
              </div>
              <span class="score-bar-val">${opt2Votes} (${Math.round(opt2Pct)}%)</span>
            </div>

            <div class="score-bar-row">
              <span class="score-bar-label">🤿 Option 3 (Amed):</span>
              <div class="score-bar-track">
                <div class="score-bar-fill opt3" style="width: ${opt3Pct}%;"></div>
              </div>
              <span class="score-bar-val">${opt3Votes} (${Math.round(opt3Pct)}%)</span>
            </div>
          </div>

          <!-- Tally summary breakdown -->
          <div class="votes-tally-list" style="margin-top: 14px; display: flex; flex-direction: column; gap: 6px;">
            ${friends.map(f => `
              <div style="font-size: 11px; color: #cbd5e1; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 4px 8px; border-radius: 6px;">
                <span><strong>${f.name}</strong>: ${f.vote ? (f.vote === 'opt2' ? '🏝️ Option 2 (Gili T)' : '🤿 Option 3 (Amed)') : '⏳ Pending vote'}</span>
                <span style="font-style: italic; color: #94a3b8; font-size: 10px;">${f.reason ? `"${f.reason}"` : ''}</span>
              </div>
            `).join("")}
          </div>

          <button class="whatsapp-share-btn" id="btnShareWhatsApp" style="margin-top: 16px;">
            <span>📲</span> Copy WhatsApp Group Tally
          </button>
        </div>
      </div>
    `;

    // Bind friend chip clicks
    container.querySelectorAll(".friend-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        if (e.target.tagName === "INPUT") return;
        activeFriendId = parseInt(chip.dataset.id);
        render();
      });
    });

    // Bind name inputs
    container.querySelectorAll(".friend-name-input").forEach(input => {
      input.addEventListener("change", (e) => {
        const id = parseInt(input.dataset.id);
        const friend = friends.find(f => f.id === id);
        if (friend && input.value.trim()) {
          friend.name = input.value.trim();
          saveVotes();
          window.BaliNav?.showToast(`Updated name to ${friend.name}`, "👤");
        }
      });
    });

    // Bind vote buttons
    document.getElementById("btnVoteOpt2")?.addEventListener("click", () => {
      const f = friends.find(item => item.id === activeFriendId);
      if (f) {
        f.vote = "opt2";
        saveVotes();
        window.BaliNav?.showToast(`${f.name} voted for Option 2 (Gili T)!`, "🏝️");
        render();
      }
    });

    document.getElementById("btnVoteOpt3")?.addEventListener("click", () => {
      const f = friends.find(item => item.id === activeFriendId);
      if (f) {
        f.vote = "opt3";
        saveVotes();
        window.BaliNav?.showToast(`${f.name} voted for Option 3 (Amed)!`, "🤿");
        render();
      }
    });

    // Bind reason input
    const reasonInput = document.getElementById("inputVoteReason");
    if (reasonInput) {
      reasonInput.addEventListener("input", (e) => {
        const f = friends.find(item => item.id === activeFriendId);
        if (f) {
          f.reason = e.target.value;
          saveVotes();
        }
      });
    }

    // Bind WhatsApp Share Button
    document.getElementById("btnShareWhatsApp")?.addEventListener("click", () => {
      const opt2Count = friends.filter(f => f.vote === 'opt2').length;
      const opt3Count = friends.filter(f => f.vote === 'opt3').length;

      let text = `🌴 *Bali 2026 Group Consensus Update* 🌴\n`;
      text += `📅 Dates: 18–27 Dec 2026 | IndiGo BLR ⇄ DPS (PNR: SFJ8RN)\n\n`;
      text += `📊 *Tally (5 Friends):*\n`;
      text += `• 🏝️ Option 2 (Gili T Explorer): ${opt2Count} votes\n`;
      text += `• 🤿 Option 3 (Amed Reef Loop): ${opt3Count} votes\n\n`;
      text += `*Individual Choices:*\n`;
      friends.forEach(f => {
        const voteStr = f.vote === 'opt2' ? 'Option 2 (Gili T) 🏝️' : f.vote === 'opt3' ? 'Option 3 (Amed) 🤿' : 'Pending ⏳';
        text += `• ${f.name}: ${voteStr} ${f.reason ? `("${f.reason}")` : ''}\n`;
      });
      text += `\n🔗 Vote & view live schedules here: ${window.location.origin}/schedule.html`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          window.BaliNav?.showToast("WhatsApp summary copied to clipboard!", "📲");
        }).catch(() => {
          prompt("Copy WhatsApp message:", text);
        });
      } else {
        prompt("Copy WhatsApp message:", text);
      }
    });
  }

  render();
})();
