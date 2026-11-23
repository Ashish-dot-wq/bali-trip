// Bali 2026 — final itinerary data (single plan)
// Seminyak 3N → Gili Trawangan 2N → Amed 2N → Ubud 2N  |  Fri 18 Dec – Sun 27 Dec 2026
//
// Place links: write {{🏖️ Place Name}} or {{🏖️ Label|search query}} inside an activity.
// They render as green Google Maps links.

const TRIP = {
  title: "Master 10-Day Bali Itinerary: Seminyak, Gili T Scuba, Amed & Ubud (Dec 18 – Dec 27, 2026)",

  // Shown as a callout under the itinerary table
  diveNote: {
    title: "🔑 The Two-Dive Plan (Gili T → Tulamben)",
    points: [
      "<b>Dec 22, Gili T:</b> PADI Discover Scuba Diving (theory, pool, then one open-water boat dive to max 12 m with an instructor).",
      "<b>Dec 24, Tulamben:</b> a guided repeat dive on the USAT Liberty wreck, still max 12 m and still with a PADI professional, because DSD is not a certification.",
      "<b>Skipping the pool session:</b> PADI says repeat dives within a couple of weeks can skip theory and pool <i>with the same dive school</i>. <b>A different school will usually ask you to redo the pool session and safety review.</b> So either book both dives with one operator that runs trips in both places, or ask your Tulamben shop in advance and allow ~1 hour for a quick skills review.",
      "<b>Bring proof:</b> keep your Gili T DSD record / logbook page on your phone to show in Tulamben.",
      "<b>Flying after diving:</b> the last dive is the morning of Dec 24 and the flight home is Dec 27, about 72 hours later, well past the usual 12–18 hour guideline."
    ]
  },
  dates: "Fri 18 Dec – Sun 27 Dec 2026",
  group: "5 friends",
  pnr: "[removed]",
  baggage: "20 kg check-in + 7 kg cabin per person",

  stays: [
    { place: "Seminyak", nights: 3, dates: "18–21 Dec" },
    { place: "Gili Trawangan", nights: 2, dates: "21–23 Dec" },
    { place: "Amed", nights: 2, dates: "23–25 Dec" },
    { place: "Ubud", nights: 2, dates: "25–27 Dec" }
  ],

  days: [
    {
      day: 1, date: "Fri, Dec 18", base: "Seminyak",
      title: "Touchdown & Potato Head sunset",
      photos: [
        { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=70", caption: "Welcome to Bali" },
        { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=70", caption: "Golden hour on Seminyak beach" },
        { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=70", caption: "Sunset drinks by the sea" }
      ],
      rows: [
        ["00:55 AM - 10:15 AM", "Flight: BLR to DPS on IndiGo <b>6E 1605</b>", "Non-stop flight (6 hours 50 minutes). PNR: <code>[removed]</code>. Check-in baggage 20 kg and cabin baggage 7 kg included. Leave home on the night of <b>Thu, Dec 17</b>."],
        ["10:15 AM - 12:00 PM", "Arrival formalities at {{✈️ Ngurah Rai International Airport}}", "Clear immigration with e-VoA (B213), scan customs QR from All Indonesia Arrival Card, show Bali Tourist Levy voucher, and collect bags."],
        ["12:00 PM - 01:15 PM", "Private car transfer: DPS Airport to Seminyak", "Pre-booked air-conditioned private car (~12 km, ~40 to 60 minutes depending on mid-day traffic)."],
        ["01:15 PM - 04:00 PM", "Hotel check-in and rest in Seminyak", "Drop bags, freshen up, and recover from the overnight flight at your Seminyak base."],
        ["04:30 PM - 07:30 PM", "Sunset drinks at {{🏖️ Potato Head Beach Club|Potato Head Beach Club Seminyak}}", "Oceanfront daybed session overlooking Seminyak Beach with live DJ sets and craft cocktails during golden hour."],
        ["08:00 PM - 10:00 PM", "Welcome dinner along {{🍽️ Jalan Kayu Aya (Eat Street)|Jalan Kayu Aya Seminyak}}", "Casual upscale Indonesian or contemporary dining in central Seminyak."]
      ],
      tip: "Potato Head daybeds need a minimum spend and go fast in Christmas week. Book a few days ahead.",
      extras: "Late night: {{🎉 La Favela|La Favela Seminyak}} (till ~3 AM) or {{🌮 Motel Mexicola|Motel Mexicola Seminyak}}."
    },
    {
      day: 2, date: "Sat, Dec 19", base: "Seminyak",
      title: "Surf, boutiques & Ku De Ta",
      photos: [
        { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=70", caption: "Beach day in Seminyak" },
        { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=70", caption: "Cafe breakfast in Petitenget" },
        { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=70", caption: "Sunset at Ku De Ta" }
      ],
      rows: [
        ["08:30 AM - 10:00 AM", "Specialty cafe breakfast in Seminyak", "Artisanal coffee and breakfast bowls along Petitenget or Kayu Aya."],
        ["10:30 AM - 01:00 PM", "Beginner surf lesson at {{🏄 Seminyak Beach}}", "2-hour guided lesson with qualified local instructors covering board handling and wave catching, or beach lounger relaxation."],
        ["01:30 PM - 04:00 PM", "Boutique shopping and Balinese massage", "Browse local designer boutiques at {{🛍️ Seminyak Village}} followed by a 60-minute Balinese reflexology treatment."],
        ["05:00 PM - 07:30 PM", "Sunset session at {{🌅 Ku De Ta|Ku De Ta Seminyak}}", "Iconic beachfront venue with relaxed sunset ambient music and cocktails."],
        ["08:00 PM - 10:00 PM", "Dinner in Petitenget & early rest", "Dine at a local restaurant, then rest early ahead of the 06:30 AM departure for the offshore day trip."]
      ],
      tip: "Pack tonight: a small daypack with swimwear, towel, sunscreen, cash, power bank and motion-sickness tablets. Big bags stay in the room.",
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
        ["06:30 AM - 07:15 AM", "Private car: Seminyak to {{🚗 Sanur Port|Sanur Harbour Bali}}", "Early morning transfer (~35 to 45 minutes). Main luggage stays safely in Seminyak room; carry only a small daypack."],
        ["07:30 AM - 08:30 AM", "Fast boat: Sanur Port to Nusa Penida", "Speedboat crossing across the Badung Strait (~45 minutes). Take motion sickness tablets prior to boarding."],
        ["09:00 AM - 11:30 AM", "Cliff exploration at {{🦖 Kelingking Beach|Kelingking Beach Nusa Penida}}", "Panoramic view of the world-famous T-Rex shaped limestone promontory from the upper ridge path."],
        ["12:00 PM - 01:30 PM", "Coastal natural landmarks: {{🌊 Broken Beach|Broken Beach Nusa Penida}} & {{🏊 Angel's Billabong|Angel's Billabong Nusa Penida}}", "Walk around the circular sea arch and look down onto the turquoise tidal pool."],
        ["01:30 PM - 02:30 PM", "Lunch at a cliffside warung", "Casual local lunch with fresh coconut water between island sightseeing spots."],
        ["02:45 PM - 04:00 PM", "Snorkeling and swimming at {{🤿 Crystal Bay|Crystal Bay Nusa Penida}}", "Sheltered bay with clear calm water and coral formations; ideal for a refreshing swim."],
        ["04:30 PM - 05:30 PM", "Return fast boat: Nusa Penida to Sanur Port", "Afternoon crossing back to mainland Bali (~45 minutes)."],
        ["05:30 PM - 06:45 PM", "Private car: Sanur Port back to Seminyak hotel", "Drive back to your Seminyak base (~35 to 45 minutes) to freshen up."],
        ["07:30 PM - 09:30 PM", "Relaxed dinner at leisure in Seminyak", "Casual dining near your hotel; pack tonight for the morning transfer to Gili Trawangan."]
      ],
      tip: "Nusa Penida charges its own island entry fee (IDR 25,000/adult in 2025). Reports say a per-attraction fee at Kelingking, Broken Beach, Angel's Billabong and Crystal Bay started in Aug 2026, collected cashless, so carry a card and some cash. Sunday is the busiest day at Kelingking, and the steep path down to the beach is unsafe after rain. Stick to the viewpoint.",
      extras: null
    },
    {
      day: 4, date: "Mon, Dec 21", base: "Gili Trawangan",
      title: "Fast boat to Gili T & sunset swings",
      photos: [
        { url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=900&q=70", caption: "Sunset swings on Gili T" },
        { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=70", caption: "Car-free island lanes by bike" },
        { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=70", caption: "Beanbags and sunset drinks" }
      ],
      rows: [
        ["07:00 AM - 08:30 AM", "Private car: Seminyak to {{🚗 Padang Bai Harbour|Padang Bai Harbour Bali}}", "Early morning drive through east Bali (~1 hour 30 minutes) to catch the morning boat departure."],
        ["08:30 AM - 11:30 AM", "Fast catamaran: Padang Bai to {{🏝️ Gili Trawangan}}", "High-speed multi-engine catamaran across the Lombok Strait (~1 hour 30 minutes to 2 hours 30 minutes by operator). Morning departures offer calmer sea conditions."],
        ["11:30 AM - 01:00 PM", "Arrival & hotel check-in on Gili T", "Gili Trawangan has zero motorized vehicles. Walk or transfer luggage via bicycle or traditional horse cart (cidomo)."],
        ["01:00 PM - 02:30 PM", "Beachfront seafood lunch", "Fresh grilled fish lunch with feet in the sand along the east beach strip."],
        ["03:00 PM - 06:00 PM", "Island perimeter bicycle tour", "Rent a cruiser bicycle (~50,000 IDR / ~₹270) to ride the flat 7 km perimeter of the island."],
        ["06:00 PM - 07:30 PM", "Sunset swings and cocktails", "Watch the sun dip behind Bali's Mount Agung from the beach swings on the west coast."],
        ["07:30 PM - 09:30 PM", "Seafood dinner at {{🐟 Gili T Night Market|Gili Trawangan Night Market}}", "Pick fresh snapper, prawns, and chicken satay grilled over coconut husks on the spot."]
      ],
      tip: "Boat times differ by operator (Eka Jaya, Bluewater, etc.). Confirm the exact departure when booking and book early for Christmas week. Gili T had water-supply cuts in Sept 2026, so ask your hotel whether it has its own water supply or storage.",
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
        ["08:30 AM - 10:00 AM", "PADI Discover Scuba: Theory & Gear Fitting", "Meet your instructor at a beachfront dive resort on Gili T. Safety briefing, breathing rules, and gear fitting."],
        ["10:00 AM - 11:30 AM", "PADI Discover Scuba: Pool Skills Training", "Dedicated training pool session practicing regulator clearing, breathing, and buoyancy control."],
        ["11:30 AM - 12:45 PM", "Lunch & surface interval on Gili T", "Beachfront lunch and hydration before boarding the dive boat."],
        ["12:45 PM - 02:45 PM", "PADI Discover Scuba: Open Ocean Boat Dive", "Boat dive down to 12 metres at {{🐠 Halik Reef|Halik dive site Gili Trawangan}} or {{🐢 Turtle Point|Turtle Point Gili Trawangan}}. Spot wild green sea turtles, clownfish, and reef sharks with a dedicated PADI instructor."],
        ["02:45 PM - 03:30 PM", "Debrief & DSD Certificate", "Shower, debrief, log your dive, and receive your official PADI DSD registration."],
        ["03:30 PM - 05:30 PM", "Afternoon beach downtime & rest", "Relax on the sand, enjoy a fresh coconut, or get a beachside massage."],
        ["05:30 PM - 07:30 PM", "Sunset drinks on Gili T's west coast", "Acoustic beach music and chilled drinks as the light fades behind Mount Agung."],
        ["07:30 PM - 09:00 PM", "Beachside barbecue dinner", "Fresh seafood and Indonesian dishes served right on the beach."],
        ["09:00 PM - 01:00 AM", "Tuesday night party on Gili T", "Weekly party at {{🎉 Jiggy Bar|Jiggy Bar Gili Trawangan}} followed by live reggae on the sand at {{🎶 Sama Sama Reggae Bar|Sama Sama Reggae Bar Gili Trawangan}}."]
      ],
      tip: "Book the Discover Scuba session in advance for all 5. Everyone fills in a medical questionnaire, and conditions like asthma, heart issues or recent ear/sinus problems need a doctor's sign-off, so check before the trip. No heavy drinking the night before (Dec 21). Gili T's party night moves between bars, so confirm the Tuesday venue locally. Sama Sama has live reggae most nights.",
      extras: "Not diving? Snorkel {{🐢 Turtle Point|Turtle Point Gili Trawangan}} from the beach while the others dive."
    },
    {
      day: 6, date: "Wed, Dec 23", base: "Amed",
      title: "Back to Bali, on to Amed",
      photos: [
        { url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=70", caption: "Black sand and jukung boats in Amed" },
        { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=70", caption: "Mount Agung above the coast" }
      ],
      rows: [
        ["07:30 AM - 08:30 AM", "Breakfast & check-out on Gili T", "Walk luggage to the harbour pier for the morning boat back to mainland Bali."],
        ["09:00 AM - 11:30 AM", "Fast boat: Gili Trawangan to {{🚗 Padang Bai Harbour|Padang Bai Harbour Bali}}", "Morning catamaran crossing back across the Lombok Strait (~1 hour 30 minutes to 2 hours 30 minutes). Sea-level surface transit carries zero decompression risk."],
        ["11:30 AM - 01:30 PM", "Private car: Padang Bai to {{🏖️ Amed Beach|Amed Beach Bali}}", "Scenic drive north along the coastal road (~55 km, ~1 hour 45 minutes to 2 hours)."],
        ["01:30 PM - 02:30 PM", "Beachfront warung lunch in Amed", "Casual fresh grilled fish lunch overlooking the black sand bay and outrigger canoes."],
        ["02:30 PM - 04:00 PM", "Check-in at Amed resort & rest", "Settle into your coastal room overlooking the ocean and Mount Agung."],
        ["04:30 PM - 06:30 PM", "Traditional jukung sunset sail", "Hire a local wooden outrigger boat to drift along the volcanic coast as Mount Agung glows crimson at dusk."],
        ["07:00 PM - 09:00 PM", "Quiet dinner in Amed", "Dine at a beachfront warung; the Amed strip is peaceful and winds down by 09:30 PM."]
      ],
      tip: "Keep your Bali Tourist Levy QR on your phone. You re-enter Bali at Padang Bai and it can be checked. Amed has few ATMs, so withdraw cash before leaving Gili T or Padang Bai.",
      extras: null
    },
    {
      day: 7, date: "Thu, Dec 24", base: "Amed",
      title: "USAT Liberty wreck & Christmas Eve",
      photos: [
        { url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=900&q=70", caption: "The USAT Liberty wreck, Tulamben" },
        { url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=900&q=70", caption: "Reef fish around the wreck" },
        { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=70", caption: "Sunset over Jemeluk Bay" }
      ],
      rows: [
        ["07:30 AM - 08:00 AM", "Transfer: Amed resort to Tulamben", "~30-minute drive (~13 km) along the coast to Tulamben."],
        ["08:00 AM - 10:30 AM", "USAT Liberty Wreck Guided Dive / Snorkel", "Explore the 120-metre WWII {{🤿 USAT Liberty Shipwreck|USAT Liberty Shipwreck Tulamben}}, which lies just 30 metres off the pebble shore. A guided repeat Discover Scuba dive to max 12 m (see the Two-Dive Plan below); non-divers snorkel the shallow end of the wreck."],
        ["10:30 AM - 11:30 AM", "Late breakfast & freshwater pool dip", "Return to your resort for a full breakfast, freshwater rinse, and relaxation."],
        ["12:00 PM - 01:30 PM", "Fresh seafood lunch in Amed", "Relaxed lunch at an open-air oceanfront cafe."],
        ["02:30 PM - 04:30 PM", "Snorkel the Japanese Shipwreck at {{🐠 Banyuning Bay|Japanese Shipwreck Banyuning Amed}}", "Direct shore-entry snorkel over a shallow coral-encrusted wreck and vibrant sea fans in a sheltered cove."],
        ["05:00 PM - 06:30 PM", "Sunset drinks above {{🌅 Jemeluk Bay|Jemeluk Bay viewpoint Amed}}", "Enjoy panoramic views of the curving bay and volcanic peaks from the coastal hill lookout."],
        ["07:30 PM - 09:30 PM", "Christmas Eve coastal dinner", "Festive evening meal featuring grilled mahi-mahi or tuna with local Balinese spices."]
      ],
      tip: "Book the Tulamben dive ahead and tell the shop you did Discover Scuba on Gili T on Dec 22. Wear reef shoes for the pebble entry. Reserve the Christmas Eve dinner in advance.",
      extras: null
    },
    {
      day: 8, date: "Fri, Dec 25", base: "Ubud",
      title: "Christmas: Tirta Gangga → Ubud",
      photos: [
        { url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=70", caption: "Stepping stones at Tirta Gangga" },
        { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70", caption: "East Bali rice terraces" }
      ],
      rows: [
        ["08:30 AM - 10:00 AM", "Christmas morning breakfast by the sea", "Unhurried breakfast taking in the morning sea breeze and Mount Agung vistas."],
        ["10:00 AM - 11:30 AM", "Private car: Amed to {{🏛️ Tirta Gangga|Tirta Gangga Water Palace}}", "Drive through the foothills of Karangasem (~30 km, ~45 minutes)."],
        ["11:30 AM - 01:00 PM", "Explore Tirta Gangga Water Palace", "Stroll across stone stepping-pads laid out across ponds filled with giant golden koi and tiered fountain gardens."],
        ["01:00 PM - 02:15 PM", "Balinese lunch in Karangasem", "Traditional lunch overlooking the rice valleys of East Bali."],
        ["02:15 PM - 03:30 PM", "Scenic drive: Karangasem to Ubud", "Complete the drive to the central highlands (~50 km, ~1 hour 15 minutes; total Amed-Ubud transit is ~80 km)."],
        ["03:30 PM - 05:00 PM", "Check in to Ubud jungle resort", "Check in, unpack, and take in the rainforest valley surroundings."],
        ["05:30 PM - 07:00 PM", "Sunset stroll along {{🌿 Campuhan Ridge Walk|Campuhan Ridge Walk Ubud}}", "Paved scenic ridge walk between two river valleys with sweeping highland greenery."],
        ["07:30 PM - 10:00 PM", "Christmas Day dinner in central Ubud", "Festive holiday dining in Ubud (e.g. {{🍽️ Locavore NXT|Locavore NXT Ubud}}, {{🍽️ Hujan Locale|Hujan Locale Ubud}}, or {{🦆 Bebek Bengil|Bebek Bengil Ubud}} crispy duck). Reservations recommended."]
      ],
      tip: "Book the Christmas dinner now. Locavore NXT in particular fills weeks ahead. Ask the driver to wait while you're at Tirta Gangga so you leave straight for Ubud with your bags.",
      extras: "Short on energy? Skip Campuhan today and do it at sunrise on Dec 26."
    },
    {
      day: 9, date: "Sat, Dec 26", base: "Ubud",
      title: "Monkeys, rice terraces & holy water",
      photos: [
        { url: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=900&q=70", caption: "Sacred Monkey Forest" },
        { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70", caption: "Tegallalang Rice Terrace" },
        { url: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=900&q=70", caption: "Tirta Empul holy spring" },
        { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=70", caption: "Balinese spa" }
      ],
      rows: [
        ["09:00 AM - 10:30 AM", "Morning walk in {{🐒 Sacred Monkey Forest Sanctuary|Sacred Monkey Forest Sanctuary Ubud}}", "Walk under giant banyan trees among wild Balinese long-tailed macaques and moss-covered ancient temples. Opens ~9 AM."],
        ["11:00 AM - 01:00 PM", "Explore {{🌾 Tegallalang Rice Terrace|Tegallalang Rice Terrace}}", "Hike along the cascading emerald terraces and visit an organic plantation for coffee and tea tastings."],
        ["01:15 PM - 02:30 PM", "Valley-view lunch near Tegallalang", "Dine overlooking the palm-fringed rice gorges."],
        ["03:00 PM - 05:00 PM", "Spiritual cleansing at {{🛕 Tirta Empul Temple|Tirta Empul Temple}}", "Experience the holy water spring temple with stone pools where Balinese come for traditional purification rituals."],
        ["05:30 PM - 07:00 PM", "Traditional Balinese reflexology & spa", "Relaxing 90-minute herbal massage and body scrub in central Ubud."],
        ["07:30 PM - 09:30 PM", "Farewell dinner in Ubud", "Final dinner celebrating the trip; pack bags tonight for the morning airport transfer."]
      ],
      tip: "Monkey Forest: no food, sunglasses or loose items in hands; the macaques grab. Tirta Empul: sarong and sash required (rentable at the gate). If you enter the pools, bring a change of clothes and a towel. Pools can close to visitors on ceremony days.",
      extras: null
    },
    {
      day: 10, date: "Sun, Dec 27", base: "Fly home",
      title: "Fly home",
      photos: [
        { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70", caption: "Goodbye, Bali" }
      ],
      rows: [
        ["06:15 AM - 07:00 AM", "Early breakfast and hotel check-out", "Quick morning breakfast and hotel departure in Ubud."],
        ["07:00 AM - 08:15 AM", "Private car: Ubud to {{✈️ Ngurah Rai International Airport}}", "Direct south-bound drive (~40 km, ~55 minutes to 1 hour 15 minutes in Sunday morning traffic)."],
        ["08:15 AM - 11:15 AM", "Check-in, security & immigration at DPS", "Check-in counters open 3 hours before departure. Check in bags (20 kg limit) and clear international security."],
        ["11:15 AM - 03:15 PM", "Flight: DPS to BLR on IndiGo <b>6E 1606</b>", "Non-stop flight (6 hours 30 minutes) landing at Kempegowda International Airport (BLR) Terminal 2 at 03:15 PM IST."]
      ],
      tip: "Weigh bags the night before: 20 kg check-in, 7 kg cabin. The 06:15 AM breakfast is early, so ask the hotel the evening before for a packed breakfast box.",
      extras: null
    }
  ],

  // Party guide (menu → Party guide). Venue nights change often; check locally.
  party: {
    intro: "Where the nights are, stop by stop. Plan around the early mornings: the Nusa Penida boat (Dec 20), the Gili T dive (Dec 22), the Liberty dive (Dec 24) and the flight home (Dec 27).",
    stops: [
      {
        place: "Seminyak", when: "Dec 18–20 · 3 nights", vibe: "Beach clubs at sunset, then clubs that run till ~3 AM.",
        best: "Best night out: <b>Fri, Dec 18</b> (if the red-eye hasn't flattened you). Keep <b>Dec 19</b> early: the Nusa Penida car leaves at 6:30 AM.",
        venues: [
          { name: "Potato Head Beach Club", q: "Potato Head Beach Club Seminyak", tag: "Sunset", text: "Daybeds, oceanfront pool, DJs. Minimum spend on daybeds; book ahead in Christmas week." },
          { name: "Ku De Ta", q: "Ku De Ta Seminyak", tag: "Sunset", text: "Classic beachfront sunset spot with relaxed music and cocktails." },
          { name: "La Favela", q: "La Favela Seminyak", tag: "Late (till ~3 AM)", text: "Seminyak's best-known late club: jungle-style rooms, disco and hip-hop." },
          { name: "Motel Mexicola", q: "Motel Mexicola Seminyak", tag: "Dinner → party", text: "Mexican cantina where dinner turns into dancing on tables." },
          { name: "Finns Beach Club", q: "Finns Beach Club Canggu", tag: "Day & sunset", text: "Huge beach club in Canggu, ~15–20 min away. Pools, bars, festival feel." }
        ]
      },
      {
        place: "Gili Trawangan", when: "Dec 21–22 · 2 nights", vibe: "Car-free party island. One bar usually hosts the main party each night, and everyone ends up there.",
        best: "<b>Mon, Dec 21:</b> keep it light, because the Discover Scuba session starts at 8:30 AM (no diving hungover). <b>Tue, Dec 22</b> is your big night after the dive.",
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
        place: "Amed", when: "Dec 23–24 · 2 nights", vibe: "Not a party place: sunset drinks, beach warungs, acoustic music, very dark skies for stargazing.",
        best: "<b>Wed, Dec 23:</b> early night (Liberty dive pickup 7:30 AM). <b>Thu, Dec 24</b> is Christmas Eve: dinner and drinks by the sea.",
        venues: [
          { name: "Jemeluk Bay viewpoint", q: "Jemeluk Bay viewpoint Amed", tag: "Sunset", text: "Hilltop lookout over the bay and Mount Agung." },
          { name: "Beachfront warungs", q: "Amed beach restaurants", tag: "Evenings", text: "Grilled fish, cold Bintang, occasional live acoustic sets. Most close by ~10 PM." }
        ]
      },
      {
        place: "Ubud", when: "Dec 25–26 · 2 nights", vibe: "Live music bars, cocktail lounges and one proper late spot.",
        best: "<b>Fri, Dec 25:</b> Christmas dinner, then live music. <b>Sat, Dec 26:</b> farewell night; keep it sensible, you leave the hotel at 7 AM.",
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

  // FAQs (menu → FAQs)
  faq: [
    { q: "What's the time difference with India?", a: "Bali is <b>2 hours 30 minutes ahead</b> of India (WITA, UTC+8 vs IST, UTC+5:30). When it's 9 AM in Bali it's 6:30 AM at home." },
    { q: "How many days do we actually get?", a: "<b>9 nights and about 8½ usable days:</b> the afternoon of Dec 18, eight full days (Dec 19–26), and Dec 27 is just the trip to the airport." },
    { q: "What do we need to enter Indonesia?", a: "Passport valid 6+ months, an <b>e-VoA</b> (IDR 500,000, apply online), the <b>All Indonesia Arrival Card</b> (within 72 h before landing) and the <b>Bali Tourist Levy</b> (IDR 150,000). See the checklist." },
    { q: "How much is the rupiah worth?", a: "Roughly <b>₹1 ≈ IDR 185–190</b>. Quick maths: IDR 100,000 ≈ ₹530, IDR 50,000 ≈ ₹265. Check the rate before you go." },
    { q: "Cash or card?", a: "Cards work in most Seminyak and Ubud restaurants and shops. Carry <b>cash for Nusa Penida, Gili T and Amed</b>, where ATMs are few. Don't count on UPI; a forex card plus some cash is safest." },
    { q: "Do restaurants add charges?", a: "Often yes: many add tax and service on top of menu prices (look for \"++\" on the menu). Tipping is not expected but rounding up is appreciated." },
    { q: "Phone and internet?", a: "Get an <b>eSIM</b> before flying or a Telkomsel SIM at the airport. Coverage is good in Seminyak and Ubud, slower on Gili T and in Amed. This app works offline once opened." },
    { q: "How do we get around?", a: "Pre-booked private drivers for every transfer. Grab and Gojek work in Seminyak and Ubud. On Gili T you walk, cycle or take a horse cart; there are no cars or scooters." },
    { q: "Can we drink the tap water?", a: "<b>No.</b> Drink bottled or filtered water and use it to brush your teeth. Ice in established restaurants and bars is generally factory-made." },
    { q: "What do we wear to temples?", a: "Shoulders covered and a <b>sarong with a sash</b> (rentable at Tirta Empul). If you go into the purification pools, bring a change of clothes and a towel." },
    { q: "Do we need a diving certificate?", a: "No. The Gili T <b>Discover Scuba</b> session is for beginners: everyone fills in a medical form first. See the Two-dive plan for the Tulamben dive." },
    { q: "What if a boat is cancelled?", a: "December seas can be rough. Operators usually move you to the next sailing. Keep the operator's WhatsApp handy, tell the next hotel, and have travel insurance that covers delays." },
    { q: "What's the weather like?", a: "Hot and humid, about <b>27–31 °C</b>, with short heavy showers, usually in the afternoon. Pack a light rain jacket." },
    { q: "Emergency numbers?", a: "<b>112</b> works from any phone in Indonesia. Save your hotel's number and the driver's WhatsApp for each stop." }
  ],

  checklist: [
    { icon: "🛂", title: "Passport", text: "Valid for at least 6 months after 18 Dec 2026, with blank pages." },
    { icon: "📄", title: "e-VoA (visa)", text: "Apply online on the official Indonesian immigration site (evisa.imigrasi.go.id) before flying: IDR 500,000 (~₹2,650) per person. Some reports mention a fee rise, so check the portal." },
    { icon: "📱", title: "All Indonesia Arrival Card", text: "Fill in online within 72 hours before landing. It replaced the old customs (e-CD) and health forms; you scan its QR on arrival." },
    { icon: "🌴", title: "Bali Tourist Levy", text: "IDR 150,000 per person via the official Love Bali site. Keep the QR voucher on your phone." },
    { icon: "📅", title: "Book early (Christmas week)", text: "Fast boats for Dec 20, 21 and 23, private drivers for every transfer, and the Dec 24 / Dec 25 dinners." },
    { icon: "💵", title: "Cash", text: "Carry rupiah for Nusa Penida, Gili T and Amed (few ATMs, high fees). Cards work in Seminyak and Ubud." },
    { icon: "🌧️", title: "December = rainy season", text: "Short, heavy afternoon showers and choppier seas. Pack a light rain jacket and a dry bag; boats can be delayed." },
    { icon: "💊", title: "Health kit", text: "Motion-sickness tablets (3 boat days), mosquito repellent, ORS sachets, reef-safe sunscreen. Drink only bottled or filtered water." },
    { icon: "🔌", title: "Plugs", text: "Type C/F, 230 V. Indian 2-pin plugs fit; 3-pin plugs need an adapter." },
    { icon: "📶", title: "SIM & apps", text: "Buy an eSIM before flying or a Telkomsel SIM at the airport. Grab and Gojek work in Seminyak and Ubud." },
    { icon: "🧳", title: "Luggage", text: "Soft bags are easier on Gili T (no vehicles, sandy paths). Leave space under 20 kg for shopping." },
    { icon: "🛡️", title: "Travel insurance", text: "Get a policy that covers boat delays or cancellations and water activities." }
  ]
};
