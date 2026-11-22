# 🌴 Bali 2026: 5 Friends Itinerary Selector (Mobile Web App)

A mobile-first, visual swiping application built for a group of 5 friends to review, compare, and vote between **Option 2 (The Island Explorer / Gili T)** and **Option 3 (Reef, Culture & Coast Loop / Amed)** for their Bali trip (18–27 December 2026).

---

## ✈️ Fixed Group Details
* **PNR / E-Ticket:** `[removed]`
* **Group Size:** 5 adults
* **Baggage Allowance:** 7 Kgs cabin + 20 Kgs check-in per person
* **Outbound Flight:** Friday, 18 Dec 2026 • IndiGo 6E 1605 (Non-stop, 6h 50m) • BLR T2 (00:55) ➔ DPS Bali (10:15)
* **Return Flight:** Sunday, 27 Dec 2026 • IndiGo 6E 1606 (Non-stop, 6h 30m) • DPS Bali (11:15) ➔ BLR T2 (15:15 IST)

---

## 🚨 The Core Problem Addressed
* **The 48-Hour Transit Trap of the Original Draft:**
  * Original draft had 1 night in Nusa Penida + 1 night in Gili Trawangan.
  * In that 48-hour window, the group would spend **10 to 12 hours packing bags, wading through water at boat landings, waiting at piers, and hauling 20kg luggage over unpaved sand or horse carts**.
  * Total daylight relaxation on Gili T was less than 4 hours!
  * December brings monsoon swells in the open Lombok Strait. A 3-hour speedboat delay wipes out a 1-night stay.
* **The Smart Fix Implemented in Both Options:**
  * **Seminyak is increased to 3 nights (Dec 18–21).**
  * Sanur Port is only 35 minutes from Seminyak.
  * The group takes a **seamless day-trip to Nusa Penida on Dec 20** with light daypacks, leaving all heavy bags safely locked in the Seminyak hotel room!
  * Returning to Seminyak avoids all luggage drag and check-in friction.

---

## 🗺️ The Two Itineraries to Choose From

### 🏝️ Option 2: The Island Explorer
* **Route:** Seminyak (3N) ➔ Gili Trawangan (3N) ➔ Ubud (3N)
* **Vibe:** High energy tropical island vibe, car-free sandy paths, wild sea turtle snorkeling, west-coast over-water sunset swings, fresh seafood night market, and ocean crossing.

### 🤿 Option 3: Reef, Culture & Coast Loop
* **Route:** Seminyak (3N) ➔ Amed (2N) ➔ Ubud (4N)
* **Vibe:** 100% overland scenic road transit (zero monsoon boat cancellations!), black volcanic sand beaches, dramatic Mount Agung backdrop, world-class WWII USAT Liberty shipwreck diving/snorkeling directly off the beach, Tirta Gangga water palace, and an extra 4th night in Ubud with authentic Balinese cooking class.

---

## 📱 Interactive Mobile App Features
1. **Dating-App / Instagram Stories Style Swiping:**
   * **Swipe Left / Right** to navigate through Day 1 to Day 10.
   * **Stories Progress Dashes:** Tap the left 40% or right 60% of any photo to cycle through curated high-resolution photography for each destination.
   * **Love This Day ❤️:** Save favorites locally.
2. **Detailed Timed Schedule Drawer:**
   * Tap **"📋 Full Schedule"** on any card to view the hour-by-hour breakdown and pro tips.
3. **5 Friends Consensus Hub (Live Voting):**
   * Edit/select each of the 5 friends' names.
   * Cast a vote for Option 2 or Option 3 with an optional note/reason.
   * View live percentage progress bars.
   * **📲 1-Tap WhatsApp Share:** Copies an emoji-formatted summary ready to paste straight into your group chat.
4. **Side-by-Side Comparison Matrix:**
   * Instant comparison across 6 categories: Transit effort, Snorkeling type, Monsoon risk, Island atmosphere, Luggage friction, and Ubud immersion.
5. **Desktop & Mobile Adaptability:**
   * Opens in a sleek iPhone 16 Pro mockup frame on desktop (with a toggle for expanded view) and natively fills 100% of the screen on mobile devices.

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
