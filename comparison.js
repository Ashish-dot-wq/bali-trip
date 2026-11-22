// Bali 2026 - Comparison Matrix & Transit Reality Script

(function() {
  const container = document.getElementById("comparisonContent");
  if (!container) return;

  const matrix = TRIP_DATA.comparisonMatrix || [];
  const metaProblem = TRIP_DATA.meta.problemStatement;

  const matrixRowsHtml = matrix.map(item => `
    <div class="matrix-card-item">
      <div class="matrix-factor-header">
        <span class="matrix-factor-title">${item.factor}</span>
      </div>
      <div class="matrix-grid-two-cols">
        <div class="matrix-col opt2-col">
          <div class="matrix-col-label">🏝️ Option 2 (Gili T)</div>
          <div class="matrix-col-val">${item.opt2}</div>
        </div>
        <div class="matrix-col opt3-col">
          <div class="matrix-col-label">🤿 Option 3 (Amed)</div>
          <div class="matrix-col-val">${item.opt3}</div>
        </div>
      </div>
    </div>
  `).join("");

  const keyIssuesHtml = metaProblem.keyIssues.map(issue => `
    <div class="transit-issue-item">
      <div class="issue-icon">${issue.icon}</div>
      <div class="issue-content">
        <div class="issue-title">${issue.title}</div>
        <div class="issue-desc">${issue.description}</div>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <!-- The 48h Transit Reality Section -->
    <section class="comparison-page-section" id="transit-reality" style="border-left: 4px solid #ef4444;">
      <div class="section-badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #f87171;">
        🚨 The Transit Reality Check
      </div>
      <h2 class="section-heading" style="color: #f87171;">Why 1N Penida + 1N Gili Changed</h2>
      <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5; margin: 8px 0 14px 0;">
        ${metaProblem.summary}
      </p>

      <div class="transit-issues-grid">
        ${keyIssuesHtml}
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 14px; margin-top: 14px;">
        <div style="font-size: 13px; font-weight: 800; color: #34d399; margin-bottom: 4px;">
          ✅ How Both Options Solve This Friction
        </div>
        <p style="font-size: 12px; color: #e2e8f0; line-height: 1.5; margin: 0;">
          <strong>Why Seminyak is 3 Nights:</strong> Both Option 2 and Option 3 keep Seminyak as our base for 3 nights (Dec 18–21). On Dec 20, we take a 45-minute speedboat from nearby Sanur Port (35 mins away) for a full-day excursion to Nusa Penida with only daypacks, keeping all main bags safely locked in our Seminyak room! We return for a relaxed dinner with zero check-in friction.
        </p>
      </div>
    </section>

    <!-- Side-by-Side Comparison Matrix Section -->
    <section class="comparison-page-section" style="margin-top: 24px;">
      <div class="section-badge-pill" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">
        ⚖️ Head-to-Head Comparison
      </div>
      <h2 class="section-heading">Option 2 (Gili T) vs. Option 3 (Amed)</h2>
      <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5; margin: 8px 0 16px 0;">
        Core differences across pace, sea-sickness risk, nightlife, marine life, and transit effort.
      </p>

      <div class="matrix-cards-list">
        ${matrixRowsHtml}
      </div>
    </section>
  `;
})();
