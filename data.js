// Bali 2026 — final itinerary data (single plan)
// Seminyak 3N → Gili Trawangan 2N → Amed 2N → Ubud 2N  |  Fri 18 Dec – Sun 27 Dec 2026
//
// Place links: write {{🏖️ Place Name}} or {{🏖️ Label|search query}} inside an activity.
// They render as green Google Maps links.

const TRIP = {
  title: "Bali, Gilis, Amed & Ubud",
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
      rows: [
        ["07:00 AM - 08:30 AM", "Private car: Seminyak to {{🚗 Padang Bai Harbour|Padang Bai Harbour Bali}}", "Early morning drive through east Bali (~1 hour 30 minutes) to catch the morning boat departure."],
        ["08:30 AM - 11:30 AM", "Fast catamaran: Padang Bai to {{🏝️ Gili Trawangan}}", "High-speed multi-engine catamaran across the Lombok Strait (~1 hour 30 minutes to 2 hours 30 minutes by operator). Morning departures offer calmer sea conditions."],
        ["11:30 AM - 01:00 PM", "Arrival & hotel check-in on Gili T", "Gili Trawangan has zero motorized vehicles. Walk or transfer luggage via bicycle or traditional horse cart (cidomo)."],
        ["01:00 PM - 02:30 PM", "Beachfront seafood lunch", "Fresh grilled fish lunch with feet in the sand along the east beach strip."],
        ["03:00 PM - 06:00 PM", "Island perimeter bicycle tour", "Rent a cruiser bicycle (~50,000 IDR / ~300 INR) to ride the flat 7 km perimeter of the island."],
        ["06:00 PM - 07:30 PM", "Sunset swings and cocktails", "Watch the sun dip behind Bali's Mount Agung from the beach swings on the west coast."],
        ["07:30 PM - 09:30 PM", "Seafood dinner at {{🐟 Gili T Night Market|Gili Trawangan Night Market}}", "Pick fresh snapper, prawns, and chicken satay grilled over coconut husks on the spot."]
      ],
      tip: "Boat times differ by operator (Eka Jaya, Bluewater, etc.). Confirm the exact departure when booking and book early for Christmas week. Gili T had water-supply cuts in Sept 2026, so ask your hotel whether it has its own water supply or storage.",
      extras: null
    },
    {
      day: 5, date: "Tue, Dec 22", base: "Gili Trawangan",
      rows: [
        ["08:00 AM - 11:30 AM", "Snorkeling excursion at {{🐢 Turtle Point|Turtle Point Gili Trawangan}}", "Snorkel with wild green sea turtles over coral bommies along the sheltered northeast reef."],
        ["12:00 PM - 01:30 PM", "Beachfront cafe lunch", "Relax in shaded bamboo cabanas with fresh tropical juices."],
        ["02:00 PM - 05:00 PM", "Island downtime & swimming", "Leisurely afternoon swimming in the turquoise lagoon or enjoying an open-air massage."],
        ["05:30 PM - 07:30 PM", "Sunset drinks on the west coast", "Acoustic beach music and chilled drinks as the light fades."],
        ["07:30 PM - 09:00 PM", "Beachside barbecue dinner", "Fresh seafood and Indonesian dishes served right on the beach."],
        ["09:00 PM - 01:00 AM", "Tuesday night party on Gili T", "Weekly party at {{🎉 Jiggy Bar|Jiggy Bar Gili Trawangan}} followed by live reggae on the sand at {{🎶 Sama Sama Reggae Bar|Sama Sama Reggae Bar Gili Trawangan}}."]
      ],
      tip: "Gili T's party night moves between bars and guides disagree on which bar hosts Tuesday. Ask at your hotel or look for the posters that day. Sama Sama has live reggae most nights regardless.",
      extras: "Some guides list a Tuesday pub crawl and Mad Monkey foam parties on Tuesdays."
    },
    {
      day: 6, date: "Wed, Dec 23", base: "Amed",
      rows: [
        ["07:30 AM - 08:30 AM", "Breakfast & check-out on Gili T", "Walk luggage to the harbour pier for the morning boat back to mainland Bali."],
        ["09:00 AM - 11:30 AM", "Fast boat: Gili Trawangan to {{🚗 Padang Bai Harbour|Padang Bai Harbour Bali}}", "Morning catamaran crossing back across the Lombok Strait (~1 hour 30 minutes to 2 hours 30 minutes)."],
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
      rows: [
        ["07:00 AM - 09:30 AM", "Snorkel / dive the {{🤿 USAT Liberty Shipwreck|USAT Liberty Shipwreck Tulamben}}", "~30-minute drive (~13 km) to Tulamben. The 120-metre WWII shipwreck lies just 30 metres off the pebble shore. Early arrival ensures calm morning glass before trade winds and day-trip vans arrive."],
        ["10:00 AM - 11:30 AM", "Late breakfast at your resort", "Return to Amed for a full breakfast, freshwater pool dip, and relaxation."],
        ["12:00 PM - 01:30 PM", "Fresh seafood lunch in Amed", "Relaxed lunch at an open-air oceanfront cafe."],
        ["02:30 PM - 04:30 PM", "Snorkel the Japanese Shipwreck at {{🐠 Banyuning Bay|Japanese Shipwreck Banyuning Amed}}", "Direct shore-entry snorkel over a shallow coral-encrusted wreck and vibrant sea fans in a sheltered cove."],
        ["05:00 PM - 06:30 PM", "Sunset drinks above {{🌅 Jemeluk Bay|Jemeluk Bay viewpoint Amed}}", "Enjoy panoramic views of the curving bay and volcanic peaks from the coastal hill lookout."],
        ["07:30 PM - 09:30 PM", "Christmas Eve coastal dinner", "Festive evening meal featuring grilled mahi-mahi or tuna with local Balinese spices."]
      ],
      tip: "Hire a local guide and gear at Tulamben (wear reef shoes for the pebble entry). Scuba needs a certification or a guided 'discover scuba' session. Snorkelling the wreck is fine for everyone. Reserve the Christmas Eve dinner in advance.",
      extras: null
    },
    {
      day: 8, date: "Fri, Dec 25", base: "Ubud",
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
