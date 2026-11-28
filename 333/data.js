// Bali 2026: the 3-3-3 plan (alternative to the main app at ../index.html)
// Seminyak 3N → Gili Trawangan 3N → Ubud 3N  |  Fri 18 Dec – Sun 27 Dec 2026
//
// Place links: write {{🏖️ Place Name}} or {{🏖️ Label|search query}} inside an activity.
// They render as green Google Maps links.

const TRIP = {
  title: "The Complete 3-3-3 Bali Itinerary: Seminyak, Gili T & Ubud (Dec 18 – Dec 27, 2026)",

  // Dive plan page (menu → Dive plan)
  diveNote: {
    title: "🔑 The Dive Plan (Gili T)",
    points: [
      "<b>Dec 21, evening:</b> walk into {{🤿 Manta Dive|Manta Dive Gili Trawangan}} on the east strip to register for the next morning. Better still, book all 5 places before the trip, because Christmas week fills up.",
      "<b>Medical form:</b> everyone fills in a medical questionnaire. Asthma, heart issues or recent ear/sinus problems need a doctor's sign-off, so check before you fly.",
      "<b>Dec 22:</b> PADI Discover Scuba Diving: theory and pool skills in the morning, then one open-water boat dive to max 12 m at Halik Reef or Turtle Point with an instructor.",
      "<b>Want a second dive?</b> Ask Manta Dive about a second Discover Scuba dive on Dec 23 with the same shop. It usually skips the pool session because you've just done it there.",
      "<b>Flying after diving:</b> the last dive is Dec 22 (or Dec 23 if you add one) and the flight home is Dec 27, far beyond the usual 12–18 hour guideline. The fast boat back on Dec 24 is fine too."
    ]
  },
  dates: "Fri 18 Dec – Sun 27 Dec 2026",
  group: "5 friends",
  baggage: "20 kg check-in + 7 kg cabin per person",

  stays: [
    { place: "Seminyak", nights: 3, dates: "18–21 Dec" },
    { place: "Gili Trawangan", nights: 3, dates: "21–24 Dec" },
    { place: "Ubud", nights: 3, dates: "24–27 Dec" }
  ],

  days: [
    {
      day: 1, date: "Fri, Dec 18", base: "Seminyak",
      title: "Touchdown & Tanah Lot sunset",
      photos: [
        { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=70", caption: "Welcome to Bali" },
        { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=70", caption: "Sunset by the sea" }
      ],
      rows: [
        ["00:55 AM - 10:15 AM", "Flight: BLR to DPS on IndiGo <b>6E 1605</b>", "Non-stop international flight (6 hours 50 minutes). Baggage: 20 kg check-in, 7 kg cabin. Leave home on the night of <b>Thu, Dec 17</b>."],
        ["10:15 AM - 12:00 PM", "Arrival formalities at {{✈️ Ngurah Rai International Airport}}", "Clear immigration with e-VoA (B213), scan the customs QR code from the All Indonesia Arrival Card, show the Bali Tourist Levy voucher, and collect bags."],
        ["12:00 PM - 01:15 PM", "Private car transfer: DPS Airport to Seminyak hotel", "Settle in, unpack, freshen up, and take a quick rest after the overnight flight."],
        ["03:15 PM - 06:45 PM", "Sunset at {{🌊 Tanah Lot|Tanah Lot Temple}} sea temple", "Private drive from Seminyak to Tanah Lot (17.9 km, ~1 hour 14 minutes). Explore the coastal cliffs and watch the sun set directly behind the offshore rock shrine."],
        ["07:30 PM - 09:30 PM", "Welcome dinner along {{🍽️ Jalan Kayu Aya (Eat Street)|Jalan Kayu Aya Seminyak}}", "Dine at a casual upscale Indonesian restaurant in central Seminyak."]
      ],
      tip: "Tanah Lot is one of Bali's busiest sunset spots, and Christmas-week traffic on the way back is slow. Leave Seminyak by 3:15 PM. Visitors can't enter the rock shrine itself, and at high tide you can't walk across to it.",
      extras: "Late night: {{🎉 La Favela|La Favela Seminyak}} (till ~3 AM) or {{🌮 Motel Mexicola|Motel Mexicola Seminyak}}."
    },
    {
      day: 2, date: "Sat, Dec 19", base: "Seminyak",
      title: "Beach, boutiques & Uluwatu Kecak",
      photos: [
        { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=70", caption: "Beach morning in Seminyak" },
        { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=70", caption: "Cafe breakfast" },
        { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=70", caption: "Golden hour on the coast" }
      ],
      rows: [
        ["08:30 AM - 11:30 AM", "Morning at {{🏄 Seminyak Beach}}", "Specialty cafe breakfast, followed by a beginner surf lesson or a beach lounger session along the sands of Seminyak Beach."],
        ["11:30 AM - 02:30 PM", "Boutique browsing & Balinese reflexology", "Explore local designer stores at {{🛍️ Seminyak Village}} and enjoy a relaxing 60-minute massage."],
        ["03:00 PM - 07:30 PM", "{{🛕 Uluwatu Temple}} & Kecak fire dance", "Drive south to the Bukit Peninsula (25.6 km, ~1 hour 10 minutes). Explore Uluwatu Temple on its 70-metre sea cliffs, then watch the Kecak fire dance at 06:00 PM in the open-air cliffside amphitheatre at sunset."],
        ["08:00 PM - 09:30 PM", "Seafood dinner on the sand at {{🐟 Jimbaran Bay|Jimbaran Bay seafood restaurants}}", "Candlelit fresh grilled fish served right on the beach with gentle waves lapping at your feet."]
      ],
      tip: "Kecak seats sell out in Christmas week, so get tickets early or arrive by ~5 PM. Uluwatu's monkeys snatch sunglasses, hats and phones; keep them in a bag. Sarongs are provided at the gate. Pack a small daypack tonight for Nusa Penida (swimwear, towel, sunscreen, cash, power bank, motion-sickness tablets): the car leaves at 6:30 AM.",
      extras: "Instead of surfing: {{🏖️ Finns Beach Club|Finns Beach Club Canggu}} (~15 min away)."
    },
    {
      day: 3, date: "Sun, Dec 20", base: "Seminyak",
      title: "Nusa Penida day trip",
      photos: [
        { url: "https://images.unsplash.com/photo-1534131197842-bafa0b820f91?auto=format&fit=crop&w=900&q=70", caption: "Kelingking's T-Rex headland" },
        { url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=70", caption: "Broken Beach sea arch" },
        { url: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=900&q=70", caption: "Nusa Penida cliffs" }
      ],
      rows: [
        ["06:30 AM - 07:15 AM", "Private car: Seminyak to {{🚗 Sanur Port|Sanur Harbour Bali}}", "Early morning transfer. Main luggage stays safely in your Seminyak room; carry only a small daypack."],
        ["07:30 AM - 08:30 AM", "Fast boat: Sanur Port to Nusa Penida", "High-speed catamaran crossing of the Badung Strait (~45 minutes). Take motion-sickness tablets before boarding."],
        ["09:00 AM - 04:00 PM", "West-coast tour of Nusa Penida", "Private island van to {{🦖 Kelingking Beach|Kelingking Beach Nusa Penida}} (T-Rex headland view), {{🌊 Broken Beach|Broken Beach Nusa Penida}} natural limestone arch, {{🏊 Angel's Billabong|Angel's Billabong Nusa Penida}} tidal pool, a cliffside lunch, and coral snorkelling at {{🤿 Crystal Bay|Crystal Bay Nusa Penida}}."],
        ["04:30 PM - 06:45 PM", "Return fast boat & transfer to Seminyak", "Fast boat back to Sanur Port, then the car back to Seminyak. Dinner at {{🏖️ Potato Head Beach Club|Potato Head Beach Club Seminyak}}; pack tonight for Gili T."]
      ],
      tip: "Nusa Penida charges its own island entry fee (IDR 25,000/adult in 2025). Reports say a per-attraction fee at Kelingking, Broken Beach, Angel's Billabong and Crystal Bay started in Aug 2026, collected cashless, so carry a card and some cash. Sunday is the busiest day at Kelingking, and the steep path down to the beach is unsafe after rain. Stick to the viewpoint. Potato Head daybeds have a minimum spend; book ahead.",
      extras: null
    },
    {
      day: 4, date: "Mon, Dec 21", base: "Gili Trawangan",
      title: "Eka Jaya to Gili T & sunset swings",
      photos: [
        { url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=900&q=70", caption: "Sunset swings on Gili T" },
        { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=70", caption: "Car-free island lanes by bike" },
        { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=70", caption: "Beanbags and sunset drinks" }
      ],
      rows: [
        ["06:30 AM - 08:00 AM", "Private car: Seminyak to {{🚗 Padang Bai Harbour|Padang Bai Harbour Bali}}", "Drive through east Bali (~1 hour 30 minutes), arriving for the 08:00 AM harbour check-in."],
        ["09:00 AM - 11:30 AM", "{{⛴️ Eka Jaya|Eka Jaya Fast Boat Padang Bai}} fast catamaran to {{🏝️ Gili Trawangan}}", "Large 34-metre aluminium catamaran with electronic stabilisers for a smoother crossing of the Lombok Strait."],
        ["11:30 AM - 02:00 PM", "Arrival, luggage transfer & beachfront lunch", "Walk or take a horse cart (cidomo) to your resort (Pearl Sunset, Jambuluwuk or Gili Teak), check in, and enjoy seafood on the beach. Gili T has no cars or scooters."],
        ["03:00 PM - 05:30 PM", "Island perimeter bicycle tour", "Rent a fat-tyre pedal cruiser (~50,000 IDR / ~₹270) and ride the flat 7 km loop around Gili T (e-bikes are banned)."],
        ["05:30 PM - 08:30 PM", "Sunset swings, beach fire show & dive sign-up", "Watch the sunset from the over-water swings on the west coast, catch the 60-minute fire show at The Gili Beach Bar / Kardia, then walk into {{🤿 Manta Dive|Manta Dive Gili Trawangan}} on the east strip to register for tomorrow's dive."]
      ],
      tip: "Confirm the Eka Jaya departure when booking and book early for Christmas week. Gili T's mains water went out on 3 Sept 2026 and no fix had been reported by late November. Ask your hotel to confirm in writing that it has its own water supply or storage. If it can't, Gili Air (piped water from Lombok, same boats, also good for Discover Scuba) is the easy backup. Keep tonight light: the dive starts at 8:30 AM.",
      extras: null
    },
    {
      day: 5, date: "Tue, Dec 22", base: "Gili Trawangan",
      title: "Discover Scuba & Tuesday party",
      photos: [
        { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=70", caption: "Green sea turtles at Turtle Point" },
        { url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=900&q=70", caption: "Coral and clownfish on the reef" },
        { url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=900&q=70", caption: "West-coast sunset" }
      ],
      rows: [
        ["08:30 AM - 11:30 AM", "PADI Discover Scuba: pool training & theory", "Meet your instructor at {{🤿 Manta Dive|Manta Dive Gili Trawangan}}. Learn breathing and equalising, then practise skills in the training pool."],
        ["11:30 AM - 12:45 PM", "Lunch & surface interval", "Beachfront lunch and hydration before boarding the dive boat."],
        ["12:45 PM - 02:45 PM", "PADI Discover Scuba: open-ocean boat dive", "Boat dive down to 12 metres at {{🐠 Halik Reef|Halik dive site Gili Trawangan}} or {{🐢 Turtle Point|Turtle Point Gili Trawangan}}. Dive alongside wild green sea turtles, clownfish and reef sharks with a dedicated PADI instructor."],
        ["02:45 PM - 05:30 PM", "Debrief, certificate & afternoon rest", "Return gear, log the dive, shower, and relax by the resort pool."],
        ["05:30 PM - Late", "Sunset cocktails & Tuesday night party", "West-coast sunset drinks, beach barbecue dinner, and the weekly Tuesday party at {{🎉 Jiggy Bar|Jiggy Bar Gili Trawangan}} and {{🎶 Sama Sama Reggae Bar|Sama Sama Reggae Bar Gili Trawangan}}."]
      ],
      tip: "Book the Discover Scuba session in advance for all 5. Everyone fills in a medical questionnaire, and conditions like asthma, heart issues or recent ear/sinus problems need a doctor's sign-off, so check before the trip. No heavy drinking the night before. Gili T's party night moves between bars, so confirm the Tuesday venue locally.",
      extras: "Not diving? Snorkel {{🐢 Turtle Point|Turtle Point Gili Trawangan}} from the beach while the others dive."
    },
    {
      day: 6, date: "Wed, Dec 23", base: "Gili Trawangan",
      title: "Sunrise, turtles & night market",
      photos: [
        { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=70", caption: "A slow island morning" },
        { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=70", caption: "Snorkelling with turtles" },
        { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=70", caption: "Sunset drinks" }
      ],
      rows: [
        ["05:45 AM - 06:45 AM", "Sunrise at East Beach (Sunrise Beach)", "Watch the sun rise behind Mount Rinjani on Lombok, with orange reflections over the calm morning sea."],
        ["08:00 AM - 12:00 PM", "Turtle snorkelling & paddleboarding", "Snorkel right off the sand at {{🐢 Turtle Point|Turtle Point Gili Trawangan}} with sea turtles in the shallow coral gardens, or rent a stand-up paddleboard."],
        ["12:00 PM - 05:30 PM", "Island relaxation & beach massages", "A properly unhurried day: beachside cabana massages, chilled coconuts and no packing rush."],
        ["06:00 PM - 09:30 PM", "Sunset drinks & {{🐟 Gili T Night Market|Gili Trawangan Night Market}} dinner", "Sunset cocktails at {{🍹 Ombak Sunset|Ombak Sunset Gili Trawangan}}, then grilled snapper, satay skewers and sambal at the night market."]
      ],
      tip: "Don't touch or chase the turtles, and wear a rash guard: the midday sun on your back while snorkelling burns fast. Pack tonight: you check out at 8:15 AM for the 9 AM boat.",
      extras: "Want a second dive? Ask Manta Dive about a second Discover Scuba dive this morning."
    },
    {
      day: 7, date: "Thu, Dec 24", base: "Ubud",
      title: "Tirta Gangga & Christmas Eve in Ubud",
      photos: [
        { url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=70", caption: "Stepping stones at Tirta Gangga" },
        { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70", caption: "Rice terraces on the way to Ubud" }
      ],
      rows: [
        ["08:15 AM - 11:30 AM", "Check-out & Eka Jaya catamaran to {{🚗 Padang Bai Harbour|Padang Bai Harbour Bali}}", "Catch the 09:00 AM catamaran back to mainland Bali, arriving at Padang Bai at 11:30 AM."],
        ["11:45 AM - 01:15 PM", "Visit {{🏛️ Tirta Gangga|Tirta Gangga Water Palace}} royal water palace", "Short drive north (30 km, ~55 minutes). Walk across stone stepping-pads laid over lotus ponds full of giant golden koi."],
        ["01:15 PM - 03:45 PM", "Balinese lunch & scenic drive to Ubud", "Traditional Karangasem lunch, then the scenic drive into the central highlands (~63 km, ~2 hours 10 minutes)."],
        ["03:45 PM - 05:15 PM", "Check in to Ubud jungle resort", "Check in, unpack, and take in the rainforest valley views."],
        ["05:30 PM - 07:00 PM", "Sunset stroll along {{🌿 Campuhan Ridge Walk|Campuhan Ridge Walk Ubud}}", "Walk the paved hilltop ridge between lush river valleys in the golden evening light."],
        ["07:30 PM - 10:00 PM", "Christmas Eve dinner in Ubud", "Dine at one of Ubud's celebrated restaurants (e.g. {{🍽️ Locavore NXT|Locavore NXT Ubud}}, {{🍽️ Hujan Locale|Hujan Locale Ubud}}, or {{🦆 Bebek Bengil|Bebek Bengil Ubud}} crispy duck). Reservations recommended."]
      ],
      tip: "Keep your Bali Tourist Levy QR on your phone; it can be checked at Padang Bai. Have the driver meet you at the harbour. If the boat runs late, skip Tirta Gangga and head straight to Ubud. Book the Christmas Eve dinner now: Locavore NXT fills weeks ahead.",
      extras: "Short on energy? Skip Campuhan today and do it at sunrise on Dec 25."
    },
    {
      day: 8, date: "Fri, Dec 25", base: "Ubud",
      title: "Christmas: monkeys, terraces & holy water",
      photos: [
        { url: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=900&q=70", caption: "Sacred Monkey Forest" },
        { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70", caption: "Tegallalang Rice Terrace" },
        { url: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=900&q=70", caption: "Tirta Empul holy spring" },
        { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=70", caption: "Balinese spa" }
      ],
      rows: [
        ["08:30 AM - 10:30 AM", "{{🐒 Sacred Monkey Forest Sanctuary|Sacred Monkey Forest Sanctuary Ubud}}", "Morning walk under giant banyans and past ancient mossy temples among wild long-tailed macaques."],
        ["11:00 AM - 01:00 PM", "{{🌾 Tegallalang Rice Terrace|Tegallalang Rice Terrace}} & coffee tasting", "Hike through cascading green rice terraces and visit a hillside plantation for organic coffee and herbal tea tastings."],
        ["01:15 PM - 02:30 PM", "Valley-view lunch near Tegallalang", "Open-air terrace lunch overlooking the deep, palm-lined rice gorge."],
        ["02:45 PM - 04:45 PM", "{{🛕 Tirta Empul Temple|Tirta Empul Temple}} holy water spring", "Visit the 10th-century water temple and take part in the traditional Melukat purification ritual in the stone spring pools."],
        ["05:15 PM - 07:00 PM", "Balinese herbal spa & reflexology", "Relaxing 90-minute traditional herbal massage in central Ubud."],
        ["07:30 PM - 10:00 PM", "Christmas Day dinner in Ubud", "Festive dinner to celebrate Christmas in the highlands. Book ahead."]
      ],
      tip: "Monkey Forest opens around 9 AM. No food, sunglasses or loose items in your hands; the macaques grab. Tirta Empul: sarong and sash required (rentable at the gate). If you enter the pools, bring a change of clothes and a towel. Pools can close to visitors on ceremony days.",
      extras: null
    },
    {
      day: 9, date: "Sat, Dec 26", base: "Ubud",
      title: "Batur caldera, waterfalls & art market",
      photos: [
        { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=70", caption: "Volcano views" },
        { url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=70", caption: "Jungle waterfall" }
      ],
      rows: [
        ["08:30 AM - 12:30 PM", "{{🌋 Mount Batur caldera & Kintamani|Kintamani Mount Batur viewpoint}}", "Drive north from Ubud (40.8 km, ~1 hour 15 minutes) to the Kintamani rim. Panoramic views of the active Mount Batur crater and Lake Batur, with brunch overlooking the caldera."],
        ["01:00 PM - 03:30 PM", "Jungle waterfalls: {{💦 Tibumana|Tibumana Waterfall}} or {{💦 Kanto Lampo|Kanto Lampo Waterfall}}", "Swim under cool jungle cascades surrounded by mossy canyon walls."],
        ["04:00 PM - 06:30 PM", "{{🛍️ Ubud Art Market}} & downtown stroll", "Browse handwoven rattan bags, batik silks and woodcarvings along Jalan Raya Ubud."],
        ["07:30 PM - 09:30 PM", "Farewell dinner in Ubud", "Final dinner of the trip; pack bags tonight for the morning flight."]
      ],
      tip: "Kintamani is cooler (often around 20 °C) and clouds roll in by late morning, so go early and bring a light layer. Waterfall steps are steep and slippery; after heavy rain the water turns brown and swimming may be closed. Haggle at the Art Market: start around half the first price.",
      extras: null
    },
    {
      day: 10, date: "Sun, Dec 27", base: "Fly home",
      title: "Fly home",
      photos: [
        { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70", caption: "Goodbye, Bali" }
      ],
      rows: [
        ["06:45 AM - 08:00 AM", "Private car: Ubud to {{✈️ Ngurah Rai International Airport}}", "Direct south-bound drive (40 km, ~1 hour)."],
        ["08:15 AM - 11:15 AM", "Check-in, security & immigration at DPS", "Check-in counters open 3 hours before departure. Check in luggage (20 kg limit) and clear international security."],
        ["11:15 AM - 03:15 PM", "Flight: DPS to BLR on IndiGo <b>6E 1606</b>", "Non-stop flight (6 hours 30 minutes), landing at Kempegowda International Airport (BLR) Terminal 2 at 03:15 PM IST."]
      ],
      tip: "Weigh bags the night before: 20 kg check-in, 7 kg cabin. Ask the hotel the evening before for a packed breakfast box, since you leave at 6:45 AM.",
      extras: null
    }
  ],

  // Party guide (menu → Party guide). Venue nights change often; check locally.
  party: {
    intro: "Where the nights are, stop by stop. Plan around the early mornings: the Nusa Penida boat (Dec 20), the Gili T boat (Dec 21), the dive (Dec 22), the boat back (Dec 24) and the flight home (Dec 27).",
    stops: [
      {
        place: "Seminyak", when: "Dec 18–20 · 3 nights", vibe: "Beach clubs at sunset, then clubs that run till ~3 AM.",
        best: "Best night out: <b>Fri, Dec 18</b> (if the red-eye hasn't flattened you). Keep <b>Dec 19</b> early (Uluwatu and Jimbaran, then bed): the Nusa Penida car leaves at 6:30 AM.",
        venues: [
          { name: "Potato Head Beach Club", q: "Potato Head Beach Club Seminyak", tag: "Sunset", text: "Daybeds, oceanfront pool, DJs. Minimum spend on daybeds; book ahead in Christmas week." },
          { name: "Ku De Ta", q: "Ku De Ta Seminyak", tag: "Sunset", text: "Classic beachfront sunset spot with relaxed music and cocktails." },
          { name: "La Favela", q: "La Favela Seminyak", tag: "Late (till ~3 AM)", text: "Seminyak's best-known late club: jungle-style rooms, disco and hip-hop." },
          { name: "Motel Mexicola", q: "Motel Mexicola Seminyak", tag: "Dinner → party", text: "Mexican cantina where dinner turns into dancing on tables." },
          { name: "Finns Beach Club", q: "Finns Beach Club Canggu", tag: "Day & sunset", text: "Huge beach club in Canggu, ~15–20 min away. Pools, bars, festival feel." }
        ]
      },
      {
        place: "Gili Trawangan", when: "Dec 21–23 · 3 nights", vibe: "Car-free party island. One bar usually hosts the main party each night, and everyone ends up there.",
        best: "<b>Mon, Dec 21:</b> keep it light, because the Discover Scuba session starts at 8:30 AM (no diving hungover). <b>Tue, Dec 22</b> is your big night after the dive. <b>Wed, Dec 23:</b> a quieter one (often Tir Na Nog), since the boat leaves at 9 AM.",
        venues: [
          { name: "Sama Sama Reggae Bar", q: "Sama Sama Reggae Bar Gili Trawangan", tag: "Most nights", text: "Live reggae band on the sand. A safe bet any night." },
          { name: "Jiggy Bar", q: "Jiggy Bar Gili Trawangan", tag: "Often Tuesday", text: "Some guides list it as the Tuesday party venue. Confirm on the day." },
          { name: "Blue Marlin", q: "Blue Marlin Gili Trawangan", tag: "Often Monday", text: "Long-running Monday night party by the sea." },
          { name: "Tir Na Nog", q: "Tir Na Nog Gili Trawangan", tag: "Often Wednesday", text: "Big Irish pub with dance floors; also a pub-crawl meeting point." },
          { name: "Gili T Pub Crawl", q: "Gili Trawangan pub crawl", tag: "Some nights", text: "Guided bar crawl, reportedly on Tuesdays among other nights. Easy way to meet people." }
        ],
        note: "The weekly rotation changes. Ask your hotel or look for posters on the main strip that afternoon."
      },
      {
        place: "Ubud", when: "Dec 24–26 · 3 nights", vibe: "Live music bars, cocktail lounges and one proper late spot.",
        best: "<b>Thu, Dec 24:</b> Christmas Eve dinner. <b>Fri, Dec 25:</b> Christmas dinner, then live music. <b>Sat, Dec 26:</b> farewell night; keep it sensible, you leave the hotel at 6:45 AM.",
        venues: [
          { name: "CP Lounge", q: "CP Lounge Ubud", tag: "Late", text: "Ubud's best-known late-night spot: live bands, dance floor, pool tables." },
          { name: "Laughing Buddha Bar", q: "Laughing Buddha Bar Ubud", tag: "Live music", text: "Small bar with live jazz/blues most nights." },
          { name: "No Más", q: "No Mas Bar Ubud", tag: "Cocktails", text: "Stylish cocktail bar with DJs and a younger crowd." }
        ]
      }
    ],
    safety: [
      "<b>Drink from sealed bottles or reputable bars.</b> Illegal or cheap arak (local spirit) has caused methanol poisonings in Bali and Lombok. Be wary of very cheap cocktails and \"buckets\".",
      "<b>No drugs, including the \"magic mushroom\" shakes advertised on Gili T.</b> Indonesian drug laws are extremely strict, with long prison sentences.",
      "<b>Stick together</b> and agree a meeting point. Gili T has no street lights in parts; carry a phone torch.",
      "<b>No scooters after drinking</b> (and none at all without an International Driving Permit).",
      "<b>Hydrate</b> before dive days. Alcohol and diving don't mix."
    ]
  },

  // International Driving Permit (menu → Driving permit)
  idp: {
    intro: "Every transfer in the plan uses a private driver, so you only need this if you want to <b>rent a scooter or drive yourself</b> (e.g. around Ubud, Seminyak or Nusa Penida). Gili T has no motor vehicles at all.",
    deadline: "Apply in the <b>first week of December at the latest</b>. RTOs usually take 3–7 working days and you fly out on the night of Thu 17 Dec.",
    need: [
      "<b>Two-wheeler class on your Indian licence.</b> The IDP only lists the classes on your Indian DL. For scooters you need MCWG/MCWOG (two-wheeler) on it; a car-only licence gives a car-only IDP.",
      "<b>A permanent Indian driving licence</b> (not a learner's licence) that's valid through the trip.",
      "<b>A valid passport.</b> Your IDP is tied to it."
    ],
    steps: [
      { t: "Apply online", d: "Go to <b>parivahan.gov.in</b> → Online Services → Driving Licence Related Services → choose <b>the state that issued your licence</b> (e.g. Karnataka) → <b>Issue of International Driving Permit</b>. Enter your DL number and date of birth; this fills <b>Form 4A</b>." },
      { t: "Upload documents", d: "Driving licence, passport (front and back pages), flight tickets, passport photo and signature. Many RTOs also ask for a <b>Form 1A medical certificate</b> signed by a registered doctor, so keep one ready." },
      { t: "Pay the fee", d: "About <b>₹1,000</b> online, plus small service or post charges in some states." },
      { t: "Visit your RTO", d: "Book a slot if offered and take the <b>originals</b> (DL, passport, tickets) for verification. Some RTOs issue the IDP the same day; others post it within about a week." },
      { t: "Check the booklet", d: "Make sure the categories include <b>A (motorcycles)</b> if you plan to ride scooters. It's valid for <b>1 year</b> (or until your DL expires, if sooner)." }
    ],
    bali: [
      "<b>Carry three things when riding:</b> your Indian DL, the printed IDP booklet, and the rental's registration paper (STNK). Phone photos of all three as backup.",
      "<b>Police checks are common</b> in Seminyak and Ubud. On-the-spot fines are reported at roughly <b>IDR 300,000–1,000,000</b> for missing documents.",
      "<b>Helmet always</b>, for driver and passenger.",
      "<b>Insurance:</b> most travel policies don't cover scooter accidents without a valid licence and IDP. Check your policy wording.",
      "<b>Nusa Penida roads are steep and broken.</b> Stick to a driver there, which the plan already does."
    ]
  },

  // Packing list (menu → Packing list). Item ids keep ticks stable if the list changes.
  packing: [
    { group: "Documents & money", items: [
      ["pp", "Passport (6+ months valid) + a photocopy"],
      ["evoa", "e-VoA approval (PDF on phone + printout)"],
      ["aiac", "All Indonesia Arrival Card QR (fill in within 72 h of landing)"],
      ["levy", "Bali Tourist Levy QR voucher"],
      ["ins", "Travel insurance policy + emergency number"],
      ["idp", "Indian DL + International Driving Permit (only if riding scooters)"],
      ["forex", "Forex card + some rupiah cash for the islands"],
      ["inr", "A little INR for the cab home from BLR"]
    ]},
    { group: "Clothes", items: [
      ["light", "Light, breathable clothes for 9 days (hot and humid)"],
      ["swim", "2–3 swimsuits"],
      ["rash", "Rash guard or quick-dry tee (sun + snorkelling)"],
      ["temple", "Sarong or a top that covers shoulders (temples)"],
      ["nice", "One smarter outfit (beach clubs, Christmas dinners)"],
      ["rain", "Light rain jacket or poncho (December showers)"],
      ["hat", "Cap or hat + sunglasses"],
      ["sleep", "Something warm for the overnight flight and the Kintamani morning"]
    ]},
    { group: "Shoes", items: [
      ["flip", "Flip-flops / sandals"],
      ["reef", "Reef or water shoes (coral, rocky waterfall pools)"],
      ["walk", "Comfortable walking shoes (Nusa Penida, rice terraces)"]
    ]},
    { group: "Beach & water", items: [
      ["dry", "Dry bag (boat days, wet phones)"],
      ["daypack", "Small daypack (15–20 L) for the Nusa Penida day trip"],
      ["pouch", "Waterproof phone pouch"],
      ["towel", "Quick-dry towel"],
      ["mask", "Own snorkel mask (optional; rentals are easy)"]
    ]},
    { group: "Health", items: [
      ["sun", "Reef-safe sunscreen SPF 50"],
      ["mozzie", "Mosquito repellent"],
      ["motion", "Motion-sickness tablets (3 boat days)"],
      ["ors", "ORS sachets + something for upset stomach"],
      ["meds", "Personal medicines (with prescriptions)"],
      ["aid", "Plasters, antiseptic, after-sun / aloe"]
    ]},
    { group: "Tech", items: [
      ["adapter", "Plug adapter (Type C/F; Indian 2-pin fits, 3-pin doesn't)"],
      ["power", "Power bank (in cabin bag, not checked in)"],
      ["cables", "Charging cables"],
      ["esim", "eSIM installed before flying (or buy a SIM at DPS)"],
      ["offline", "Offline Google Maps for Bali + this app's photos saved for offline"]
    ]},
    { group: "Drone (DJI Avata 2)", items: [
      ["d-drone", "Avata 2 + propeller guard (cabin bag)"],
      ["d-goggles", "Goggles + goggles battery (cabin bag)"],
      ["d-rc", "Controller (RC Motion / FPV remote)"],
      ["d-batt", "Flight batteries, contacts taped or in a LiPo bag (cabin only)"],
      ["d-charger", "Charging hub + charger"],
      ["d-props", "Spare propellers + screwdriver"],
      ["d-sd", "microSD cards"],
      ["d-docs", "Purchase invoice + Export Certificate from BLR customs"]
    ]},
    { group: "Before you lock the bag", items: [
      ["weight", "Check-in bag under 20 kg, cabin bag under 7 kg"],
      ["space", "Leave space for shopping on the way back"],
      ["liquids", "Liquids in cabin bag in 100 ml bottles"]
    ]}
  ],

  // Drone page (menu → Drone: DJI Avata 2)
  drone: {
    intro: "Your <b>DJI Avata 2</b> weighs about <b>377 g</b>: well under Indonesia's 2 kg hobby limit, so recreational flying needs no permit. The real risks are <b>bringing it back into India</b>, <b>airport zones</b> and <b>temples</b>.",
    sections: [
      { title: "🇮🇳 Before you leave India (most important)", items: [
        "<b>India has restricted imports of foreign-made drones since 2022.</b> On the way home, BLR customs can hold a DJI drone unless you can prove it left India with you.",
        "<b>At BLR departure, go to the Customs desk before security</b> and ask for the drone, goggles and controller to be listed on an <b>Export Certificate</b> (the form used for valuables you'll bring back). Have the serial numbers ready.",
        "<b>Carry the purchase invoice</b> (or a photo) showing it was bought in India, plus photos of the serial number stickers.",
        "<b>Ask BLR customs in writing</b> (email) beforehand if you can. Rules changed with the 2026 Baggage Rules and blogs disagree, so their answer is the one that counts."
      ]},
      { title: "✈️ Flying with it (IndiGo)", items: [
        "<b>Every battery goes in your cabin bag</b>, never checked in: flight batteries, the goggles battery and power banks.",
        "Avata 2 batteries are about <b>31.7 Wh</b> each, well under the 100 Wh limit, so no airline approval is needed. Check the Wh printed on yours.",
        "<b>Tape over the contacts</b> or use a LiPo-safe bag, and store batteries at ~50% charge for the flight.",
        "Keep the drone, goggles and controller in your cabin bag too (fragile, and it keeps everything together for customs). Remember the 7 kg cabin limit."
      ]},
      { title: "🇮🇩 Flying rules in Indonesia", items: [
        "<b>No permit for hobby flying under 2 kg.</b> Some guides mention pre-registering on a Bali drone system, but this is disputed; there's no clear official source.",
        "<b>Max 150 m height, daylight only, away from people and crowds.</b>",
        "<b>Keep it in sight.</b> With FPV goggles on, have a friend act as spotter watching the drone directly.",
        "<b>Airports:</b> stay well clear of Ngurah Rai. Guides quote no-fly radii from about 9 km to 15 km. The DJI Fly app's GEO zones will warn you or block take-off.",
        "<b>No military, government or police sites</b>, and no flying over ceremonies or processions.",
        "<b>Commercial shoots</b> (paid work) need a DGCA permit. Personal videos are fine."
      ]},
      { title: "🛕 Temples & sacred sites", items: [
        "<b>Don't fly over or near temples or ceremonies</b> without the temple's or village's permission. Reports mention a Bali regulation with a 5 km zone around sacred sites needing the local banjar's consent (unconfirmed).",
        "On this trip: <b>Tanah Lot (Day 1)</b>, <b>Uluwatu (Day 2)</b>, <b>Tirta Gangga (Day 7)</b> and <b>Tirta Empul (Day 8)</b>: ask at the ticket desk before flying; expect a no or a fee.",
        "Some sites allow it for a small donation. <b>Always ask first</b>: fines and confiscation are possible."
      ]},
      { title: "📍 Where it works on this trip", items: [
        "<b>Seminyak and Uluwatu (Days 1–2):</b> inside or close to Ngurah Rai's controlled airspace. <b>Don't fly here.</b> Tanah Lot is further out, but it's a temple: ask first.",
        "<b>Nusa Penida (Day 3):</b> the classic drone day: Kelingking, Broken Beach, Angel's Billabong. Very busy and often windy at the cliffs; launch away from crowds and watch for gusts.",
        "<b>Gili T (Days 4–6):</b> early morning on the north and west beaches before crowds. Sea breeze picks up by midday. Ask your hotel if they have house rules.",
        "<b>Ubud (Days 7–9):</b> Tegallalang rice terraces early morning (some operators ask a small fee); Campuhan Ridge at sunrise; the Batur caldera from the Kintamani rim (windy, so watch the gusts). Not over the Monkey Forest temples."
      ]},
      { title: "🎮 Avata 2 tips for this trip", items: [
        "<b>Over water, fly conservatively.</b> A sea landing means it's gone. Set Return-to-Home altitude above the cliff tops at Nusa Penida.",
        "<b>Wind:</b> it's light (377 g). If the app warns about wind, especially at Kelingking and on Gili T beaches, don't launch.",
        "<b>Heat & humidity:</b> let it acclimatise out of air-con before flying to stop lenses and goggles fogging.",
        "<b>Charging:</b> Indonesian sockets are Type C/F 230 V; bring the charger plus a multi-plug. Chargers work on 100–240 V.",
        "<b>Download offline maps</b> in the DJI Fly app and update firmware at home on Wi-Fi.",
        "<b>Respect privacy</b>: no hovering over hotel pools or people sunbathing."
      ]},
      { title: "🏠 Coming home", items: [
        "<b>Have the Export Certificate and invoice ready</b> at BLR arrivals.",
        "If customs asks about drones, answer honestly. Choosing the Green Channel wrongly can mean seizure and a penalty. With the Export Certificate it's a quick check."
      ]}
    ]
  },

  // FAQs (menu → FAQs)
  faq: [
    { q: "What's the time difference with India?", a: "Bali is <b>2 hours 30 minutes ahead</b> of India (WITA, UTC+8 vs IST, UTC+5:30). When it's 9 AM in Bali it's 6:30 AM at home." },
    { q: "How many days do we actually get?", a: "<b>9 nights and about 8½ usable days:</b> the afternoon of Dec 18, eight full days (Dec 19–26), and Dec 27 is just the trip to the airport." },
    { q: "What do we need to enter Indonesia?", a: "Passport valid 6+ months, an <b>e-VoA</b> (IDR 500,000, apply online), the <b>All Indonesia Arrival Card</b> (within 72 h before landing) and the <b>Bali Tourist Levy</b> (IDR 150,000). See the checklist." },
    { q: "How much is the rupiah worth?", a: "Roughly <b>₹1 ≈ IDR 185–190</b>. Quick maths: IDR 100,000 ≈ ₹530, IDR 50,000 ≈ ₹265. Check the rate before you go." },
    { q: "Cash or card?", a: "Cards work in most Seminyak and Ubud restaurants and shops. Carry <b>cash for Nusa Penida and Gili T</b>, where ATMs are few. Don't count on UPI; a forex card plus some cash is safest." },
    { q: "Do restaurants add charges?", a: "Often yes: many add tax and service on top of menu prices (look for \"++\" on the menu). Tipping is not expected but rounding up is appreciated." },
    { q: "Phone and internet?", a: "Get an <b>eSIM</b> before flying or a Telkomsel SIM at the airport. Coverage is good in Seminyak and Ubud, slower on Gili T. This app works offline once opened." },
    { q: "How do we get around?", a: "Pre-booked private drivers for every transfer. Grab and Gojek work in Seminyak and Ubud. On Gili T you walk, cycle or take a horse cart; there are no cars or scooters." },
    { q: "Can we drink the tap water?", a: "<b>No.</b> Drink bottled or filtered water and use it to brush your teeth. Ice in established restaurants and bars is generally factory-made." },
    { q: "What do we wear to temples?", a: "Shoulders covered and a <b>sarong with a sash</b> (provided at Uluwatu, rentable at Tirta Empul). If you go into the purification pools, bring a change of clothes and a towel." },
    { q: "Do we need a diving certificate?", a: "No. The Gili T <b>Discover Scuba</b> session is for beginners: everyone fills in a medical form first. See the Dive plan." },
    { q: "What if a boat is cancelled?", a: "December seas can be rough. Operators usually move you to the next sailing. Keep the operator's WhatsApp handy, tell the next hotel, and have travel insurance that covers delays." },
    { q: "What's the weather like?", a: "Hot and humid, about <b>27–31 °C</b>, with short heavy showers, usually in the afternoon. Pack a light rain jacket." },
    { q: "Can we rent scooters?", a: "Only with your Indian licence <b>plus an International Driving Permit that includes motorcycles</b>. See <a href=\"#drive\">Driving permit</a> for the process. Otherwise stick to drivers, Grab and Gojek." },
    { q: "Emergency numbers?", a: "<b>112</b> works from any phone in Indonesia. Save your hotel's number and the driver's WhatsApp for each stop." }
  ],

  checklist: [
    { icon: "🛂", title: "Passport", text: "Valid for at least 6 months after 18 Dec 2026, with blank pages." },
    { icon: "📄", title: "e-VoA (visa)", text: "Apply online on the official Indonesian immigration site (evisa.imigrasi.go.id) before flying: IDR 500,000 (~₹2,650) per person. Some reports mention a fee rise, so check the portal." },
    { icon: "📱", title: "All Indonesia Arrival Card", text: "Fill in online within 72 hours before landing. It replaced the old customs (e-CD) and health forms; you scan its QR on arrival." },
    { icon: "🌴", title: "Bali Tourist Levy", text: "IDR 150,000 per person via the official Love Bali site. Keep the QR voucher on your phone." },
    { icon: "📅", title: "Book early (Christmas week)", text: "Fast boats for Dec 20, 21 and 24, Manta Dive for Dec 22, Uluwatu Kecak tickets, private drivers for every transfer, and the Dec 24 / Dec 25 dinners in Ubud." },
    { icon: "💵", title: "Cash", text: "Carry rupiah for Nusa Penida and Gili T (few ATMs, high fees). Cards work in Seminyak and Ubud." },
    { icon: "🌧️", title: "December = rainy season", text: "Short, heavy afternoon showers and choppier seas. Pack a light rain jacket and a dry bag; boats can be delayed." },
    { icon: "💊", title: "Health kit", text: "Motion-sickness tablets (3 boat days), mosquito repellent, ORS sachets, reef-safe sunscreen. Drink only bottled or filtered water." },
    { icon: "🔌", title: "Plugs", text: "Type C/F, 230 V. Indian 2-pin plugs fit; 3-pin plugs need an adapter." },
    { icon: "📶", title: "SIM & apps", text: "Buy an eSIM before flying or a Telkomsel SIM at the airport. Grab and Gojek work in Seminyak and Ubud." },
    { icon: "🧳", title: "Luggage", text: "Soft bags are easier on Gili T (no vehicles, sandy paths). Leave space under 20 kg for shopping." },
    { icon: "🛡️", title: "Travel insurance", text: "Get a policy that covers boat delays or cancellations and water activities." },
    { icon: "🛵", title: "Driving permit (only if renting scooters)", text: "Get an International Driving Permit from your RTO by early December. Your Indian DL must have the two-wheeler class. See Driving permit in the menu." },
    { icon: "🚰", title: "Gili T hotel water", text: "Gili T's mains water was cut on 3 Sept 2026 and no fix had been confirmed by late November. Ask the hotel to confirm in writing (email or WhatsApp) that it has its own water supply or storage tanks for 21–24 Dec (3 nights on this plan). If it can't, switch to Gili Air: same boats, piped water from Lombok, and good for Discover Scuba too." }
  ]
};
