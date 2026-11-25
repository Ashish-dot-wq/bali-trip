# Goa 2026 road trip app

Self-contained trip app (26 Nov – 1 Dec 2026). Live at https://ashish-dot-wq.github.io/bali-trip/goa/ for now.

- Content: `data.js` (days, stays, road trip, party guide, FAQs, checklist, packing). The page renders from it.
- Photos: Wikimedia Commons (credits on each photo).
- Saved settings use the `goa2026-` prefix; the offline cache is `goa2026-*` and scoped to this folder.
- News: `.github/workflows/news-goa.yml` runs `goa/scripts/fetch-news.mjs` about every 2 hours and publishes
  `news.json` to the `news-feed-goa` branch, which the app reads via the GitHub API.

## Moving to its own repo later
1. Copy everything in this folder to the new repo's root, and copy `.github/workflows/news-goa.yml`
   (change `goa/scripts/fetch-news.mjs` → `scripts/fetch-news.mjs`, and the branch in `push:`).
2. In `app.js`, change `Ashish-dot-wq/bali-trip` in `NEWS_API` / `NEWS_URL` to the new repo.
3. Turn on GitHub Pages for the new repo, then delete `goa/`, the workflow and the `news-feed-goa` branch here.
