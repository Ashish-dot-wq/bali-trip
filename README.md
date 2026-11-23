# 🌴 Bali 2026: 5 Friends Itinerary (18–27 Dec 2026)

A simple, readable day-by-day itinerary page for a group of 5 friends travelling to Bali, the Gilis, Amed and Ubud.

---

## ✈️ Fixed Group Details
* **PNR / E-Ticket:** `SFJ8RN`
* **Group Size:** 5 adults
* **Baggage Allowance:** 7 Kgs cabin + 20 Kgs check-in per person
* **Outbound Flight:** Friday, 18 Dec 2026 • IndiGo 6E 1605 (Non-stop, 6h 50m) • BLR T2 (00:55) ➔ DPS Bali (10:15)
* **Return Flight:** Sunday, 27 Dec 2026 • IndiGo 6E 1606 (Non-stop, 6h 30m) • DPS Bali (11:15) ➔ BLR T2 (15:15 IST)

---

## 🗺️ The Plan
* **Route:** Seminyak (3N) ➔ Gili Trawangan (2N, PADI Discover Scuba on Dec 22) ➔ Amed (2N, USAT Liberty wreck dive on Dec 24) ➔ Ubud (2N)
* **9 nights, ~8½ usable days** (arrival afternoon on Dec 18 + 8 full days; Dec 27 is a travel morning)
* Nusa Penida is a day trip from Seminyak on Dec 20 (bags stay in the hotel).

---

## 📱 The Web App
A phone-first app (works on desktop too). The ☰ menu is top right; the tab bar at the bottom has the main views:
1. **Days:** one day at a time. Tap a date chip or swipe left/right to change day. Two modes:
   * **📷 Photos & plan:** swipeable photos, places for the day (Google Maps links) and the timed plan.
   * **📋 Table:** the same day as a Time / Activity & details table.
   Each day ends with a 💡 pro tip and ➕ optional extras.
2. **Table:** all 10 days in one table (Day · Time · Activity · Logistics). Scrolls sideways on phones.
3. **Glance:** nights, usable days, where you sleep, live India ⇄ Bali clocks (Bali is 2h 30m ahead) and both flights in both time zones.
4. **Checklist:** "Before you go" items you can tick off (saved on your phone).
5. **Two-dive plan** (in the menu): how the Gili T Discover Scuba and the Tulamben wreck dive fit together.

Add it to your home screen (Share → Add to Home Screen on iPhone) and it opens like an app and works offline once loaded.

To change the plan, edit `data.js` (the app renders from it).

---

## 🌐 Live Site

Hosted on GitHub Pages: **https://ashish-dot-wq.github.io/bali-trip/**

---

## 🚀 How to Run Locally

You can run a local web server with Python:

```bash
cd bali-trip
python3 -m http.server 3000
```

Then open `http://localhost:3000` in your browser.
To test on your mobile phone on the same Wi-Fi network, open `http://<YOUR_LOCAL_IP>:3000`.
