// Goa 2026 — trip data (DRAFT: start city, stays and timings to be confirmed)
// Road trip Bengaluru → Goa → Gokarna → Bengaluru, Thu 26 Nov – Tue 1 Dec 2026.
//
// Place links: write {{🏖️ Place Name}} or {{🏖️ Label|search query}} inside an activity.
// They render as Google Maps links (" Goa" is added to the search unless a query is given).

const TRIP = {
  name: "Goa 2026",
  title: "Goa & Gokarna Road Trip",
  dates: "Thu 26 Nov – Tue 1 Dec 2026",
  start: "2026-11-26",          // Day 1 (India time)
  tz: "Asia/Kolkata",
  departure: "2026-11-26T05:30", // leave home (India time)
  home: "Bengaluru",            // assumed start city: TO CONFIRM
  draft: "Draft plan: start city (assumed Bengaluru), stays, nights per place and timings are still to be confirmed.",

  stays: [
    { place: "North Goa", nights: 3, dates: "26–29 Nov", note: "Area TBC (e.g. Candolim / Calangute / Anjuna)" },
    { place: "South Goa", nights: 1, dates: "29–30 Nov", note: "Area TBC (e.g. Palolem)" },
    { place: "Gokarna", nights: 1, dates: "30 Nov – 1 Dec", note: "Area TBC (e.g. Kudle / Om Beach)" }
  ],

  days: [
    {
      day: 1, date: "Thu, Nov 26", base: "North Goa", kind: "drive",
      title: "Road trip to Goa",
      photos: [
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Road_of_western_ghats_of_karnataka.jpg/960px-Road_of_western_ghats_of_karnataka.jpg", "caption": "Ghat road through the Western Ghats", "credit": "Photo: Samarth V Dangre · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Road_of_western_ghats_of_karnataka.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Candolim_Beach_in_Goa.jpg/960px-Candolim_Beach_in_Goa.jpg", "caption": "Candolim Beach", "credit": "Photo: S1ranand · CC0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Candolim_Beach_in_Goa.jpg"}
      ],
      rows: [
        ["05:30 AM - 06:00 AM", "Leave Bengaluru", "Start early to beat city traffic and reach the ghat section in daylight. Full tank, FASTag balance checked."],
        ["07:30 AM - 08:15 AM", "Breakfast stop on NH48", "Highway restaurants around Tumakuru–Chitradurga. Swap drivers if two of you drive."],
        ["11:00 AM - 11:30 AM", "Tea and fuel break", "Around Davanagere–Haveri. Stretch, refuel, check tyre pressure if anything feels off."],
        ["01:00 PM - 02:00 PM", "Lunch in Hubballi–Dharwad", "Last big town before the ghats. Fill the tank here if it's below half."],
        ["02:00 PM - 05:30 PM", "Ghats into Goa", "Usually via Belagavi and {{⛰️ Chorla Ghat|Chorla Ghat}} for North Goa (narrow, winding; go slow). Check Google Maps live traffic and the Road trip page before choosing a route."],
        ["05:30 PM - 06:30 PM", "Check in to the North Goa stay", "Stay TBC. Confirm parking for the car."],
        ["06:30 PM - 09:30 PM", "Sunset and dinner at {{🏖️ Candolim Beach}}", "Easy first evening: a beach shack dinner close to the stay."]
      ],
      tip: "Plan on 10–12 hours with stops. Do the ghat stretch in daylight, share the driving, and download the route in Google Maps offline (signal drops in the ghats).",
      extras: null
    },
    {
      day: 2, date: "Fri, Nov 27", base: "North Goa", kind: "full",
      title: "Forts and North Goa beaches",
      photos: [
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Aguada_Fort_Top_View%2C_North_Goa.jpg/960px-Aguada_Fort_Top_View%2C_North_Goa.jpg", "caption": "Fort Aguada from above", "credit": "Photo: Rupeshsarkar · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Aguada_Fort_Top_View,_North_Goa.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Chapora_fort_25012016.jpg/960px-Chapora_fort_25012016.jpg", "caption": "Chapora Fort", "credit": "Photo: Nikhilb239 · CC BY 3.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Chapora_fort_25012016.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Vagator_Beach_25012016.jpg/960px-Vagator_Beach_25012016.jpg", "caption": "Vagator Beach", "credit": "Photo: Nikhilb239 · CC BY 3.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Vagator_Beach_25012016.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Anjuna_Beach%2C_Goa%2C_India%2C_Legendary_Curlies_beach_shack.jpg/960px-Anjuna_Beach%2C_Goa%2C_India%2C_Legendary_Curlies_beach_shack.jpg", "caption": "Curlies, Anjuna Beach", "credit": "Photo: Vyacheslav Argenberg · CC BY 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Anjuna_Beach,_Goa,_India,_Legendary_Curlies_beach_shack.jpg"}
      ],
      rows: [
        ["08:30 AM - 10:00 AM", "Slow breakfast", "Recover from the drive."],
        ["10:00 AM - 12:00 PM", "{{🏰 Fort Aguada}} and lighthouse", "17th-century Portuguese fort with views over {{🏖️ Sinquerim Beach}} and the Mandovi river mouth."],
        ["12:30 PM - 02:00 PM", "Lunch at a beach shack in Candolim", "Try a Goan fish thali or prawn curry rice."],
        ["02:30 PM - 05:00 PM", "Cafés and beach time at {{🏖️ Anjuna Beach}}", "Rocky, laid-back beach with lots of cafés along the cliff."],
        ["05:00 PM - 06:45 PM", "Sunset at {{🏰 Chapora Fort}}", "Short steep climb for the view over {{🏖️ Vagator Beach}}. Go by 5 PM; parking fills up at sunset."],
        ["08:00 PM - 11:30 PM", "Dinner and a night out in Vagator / Anjuna", "See the Party guide for options."]
      ],
      tip: "Carry water and wear proper sandals for the Chapora climb (loose stones). Don't leave valuables visible in the parked car.",
      extras: null
    },
    {
      day: 3, date: "Sat, Nov 28", base: "North Goa", kind: "full",
      title: "Beach day and Saturday Night Market",
      photos: [
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Baga_Beach%2C_Goa.jpg/960px-Baga_Beach%2C_Goa.jpg", "caption": "Baga Beach", "credit": "Photo: Slyronit · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Baga_Beach,_Goa.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Calangute-beach-2.jpg/960px-Calangute-beach-2.jpg", "caption": "Calangute Beach", "credit": "Photo: Anoop M S · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Calangute-beach-2.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Morjim_Beach%2C_Goa%2C_India%2C_Arabian_Sea.jpg/960px-Morjim_Beach%2C_Goa%2C_India%2C_Arabian_Sea.jpg", "caption": "Morjim Beach", "credit": "Photo: Vyacheslav Argenberg · CC BY 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Morjim_Beach,_Goa,_India,_Arabian_Sea.jpg"}
      ],
      rows: [
        ["09:00 AM - 12:30 PM", "Water sports at {{🏖️ Baga Beach}} / {{🏖️ Calangute Beach}}", "Parasailing, jet-ski and banana rides. Use operators with life jackets and fixed price boards; agree the price first."],
        ["12:30 PM - 02:00 PM", "Lunch in Baga", "Busy beach strip; lots of shacks."],
        ["02:30 PM - 05:30 PM", "Pool time / rest", "Save energy for the night."],
        ["06:00 PM - 10:00 PM", "{{🛍️ Saturday Night Market|Saturday Night Market Arpora Goa}}", "Food stalls, live music and shopping in Arpora. Seasonal, so check it's on this Saturday."],
        ["10:00 PM - 01:00 AM", "Night out at {{🎉 Tito's Lane|Titos Lane Baga}}, Baga", "Goa's classic club strip. Saturday is the busiest night."]
      ],
      tip: "Saturday is the busiest day of the week. Leave the car parked and take a GoaMiles cab or a licensed taxi at night.",
      extras: "Quieter alternative: sunset at {{🏖️ Morjim Beach}} or {{🏖️ Ashwem Beach}} further north."
    },
    {
      day: 4, date: "Sun, Nov 29", base: "South Goa", kind: "full",
      title: "Old Goa, Panaji, then south",
      photos: [
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Front_Elevation_of_Basilica_of_Bom_Jesus.jpg/960px-Front_Elevation_of_Basilica_of_Bom_Jesus.jpg", "caption": "Basilica of Bom Jesus, Old Goa", "credit": "Photo: iMahesh · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Front_Elevation_of_Basilica_of_Bom_Jesus.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Old_Goa%2C_Se_Cathedral_2.jpg/960px-Old_Goa%2C_Se_Cathedral_2.jpg", "caption": "Se Cathedral, Old Goa", "credit": "Photo: Vyacheslav Argenberg · CC BY 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Old_Goa,_Se_Cathedral_2.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Streets_of_Fontainhas%2C_Panaji_%2803%29.jpg/960px-Streets_of_Fontainhas%2C_Panaji_%2803%29.jpg", "caption": "Fontainhas, Panaji", "credit": "Photo: iMahesh · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Streets_of_Fontainhas,_Panaji_(03).jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Panaji_-_Church_of_Our_Lady_of_the_Immaculate_Conception_-_1.jpg/960px-Panaji_-_Church_of_Our_Lady_of_the_Immaculate_Conception_-_1.jpg", "caption": "Immaculate Conception Church, Panaji", "credit": "Photo: Ingo Mehling · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Panaji_-_Church_of_Our_Lady_of_the_Immaculate_Conception_-_1.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Palolem_Beach%2C_South_Goa.jpg/960px-Palolem_Beach%2C_South_Goa.jpg", "caption": "Palolem Beach", "credit": "Photo: iMahesh · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Palolem_Beach,_South_Goa.jpg"}
      ],
      rows: [
        ["08:00 AM - 09:00 AM", "Check out of the North Goa stay", "Load the car; drive to Old Goa (~40 min)."],
        ["09:30 AM - 11:30 AM", "{{⛪ Basilica of Bom Jesus|Basilica of Bom Jesus Old Goa}} and {{⛪ Se Cathedral|Se Cathedral Old Goa}}", "UNESCO-listed churches. Sunday masses are on, so keep quiet and dress modestly (shoulders and knees covered)."],
        ["12:00 PM - 01:30 PM", "Walk {{🏘️ Fontainhas|Fontainhas Panaji}}, Panaji", "Colourful Latin Quarter lanes, plus the white {{⛪ Immaculate Conception Church|Our Lady of the Immaculate Conception Church Panaji}} steps."],
        ["01:30 PM - 02:30 PM", "Goan lunch in Panaji", "Xacuti, cafreal, bebinca for dessert."],
        ["02:30 PM - 04:30 PM", "Drive to South Goa", "About 70 km / 1 h 45 min to Palolem, depending on traffic."],
        ["04:30 PM - 05:30 PM", "Check in to the South Goa stay", "Stay TBC (one night)."],
        ["05:30 PM - 07:00 PM", "Sunset at {{🏖️ Palolem Beach}}", "Calm crescent bay lined with palm trees."],
        ["07:30 PM - 09:30 PM", "Dinner in Palolem", "Beach restaurants along the bay."]
      ],
      tip: "Parking near the Old Goa churches and in Fontainhas is tight. Use the paid lots, and don't leave bags in the car while you walk.",
      extras: null
    },
    {
      day: 5, date: "Mon, Nov 30", base: "Gokarna", kind: "full",
      title: "South Goa morning, on to Gokarna",
      photos: [
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Butterfly_Beach_-_panoramio.jpg/960px-Butterfly_Beach_-_panoramio.jpg", "caption": "Butterfly Beach", "credit": "Photo: Deepak Patil · CC BY-SA 3.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Butterfly_Beach_-_panoramio.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Kali_river_bridge.jpg/960px-Kali_river_bridge.jpg", "caption": "Kali river bridge, Karwar", "credit": "Photo: Rane.abhijeet · CC BY 3.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Kali_river_bridge.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/PXL_20260103_101009613_People_and_Beach_Om_Beach_Gokarna%2C_Karnataka_27.jpg/960px-PXL_20260103_101009613_People_and_Beach_Om_Beach_Gokarna%2C_Karnataka_27.jpg", "caption": "Om Beach, Gokarna", "credit": "Photo: Sourabh.biswas003 · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:PXL_20260103_101009613_People_and_Beach_Om_Beach_Gokarna,_Karnataka_27.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Kudle_Beach%2C_Gokarna.jpg/960px-Kudle_Beach%2C_Gokarna.jpg", "caption": "Kudle Beach, Gokarna", "credit": "Photo: Malavikanandan30 · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Kudle_Beach,_Gokarna.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/PXL_20260103_091848995.MP_Half_Moon_Beach_Gokarna_Karnatak_01.jpg/960px-PXL_20260103_091848995.MP_Half_Moon_Beach_Gokarna_Karnatak_01.jpg", "caption": "Half Moon Beach, next to Om Beach", "credit": "Photo: Sourabh.biswas003 · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:PXL_20260103_091848995.MP_Half_Moon_Beach_Gokarna_Karnatak_01.jpg"}
      ],
      rows: [
        ["07:30 AM - 09:00 AM", "Dolphin / Butterfly Beach boat trip from Palolem", "Local boats leave from the beach in the morning. Agree the price and route first; life jackets on."],
        ["09:00 AM - 10:00 AM", "Breakfast and check out", "Palolem cafés."],
        ["10:00 AM - 12:30 PM", "Drive Palolem → Gokarna", "About 100 km / 2–2.5 h on NH66 via {{🌉 Karwar|Karwar}} (crossing the Kali river bridge), then Ankola."],
        ["12:30 PM - 02:00 PM", "Lunch and check in at Gokarna", "Stay TBC. Many stays are near {{🏖️ Kudle Beach|Kudle Beach Gokarna}} or {{🏖️ Om Beach|Om Beach Gokarna}}; ask where to park."],
        ["02:30 PM - 05:00 PM", "Beach time at {{🏖️ Kudle Beach|Kudle Beach Gokarna}}", "Laid-back beach with cafés. Strong currents are common on Gokarna beaches, so stay in your depth."],
        ["05:00 PM - 06:45 PM", "Walk over the headland to {{🏖️ Om Beach|Om Beach Gokarna}} for sunset", "About 20–30 min on a rocky trail with sea views. Carry a phone torch for the way back, or take an auto."],
        ["07:30 PM - 09:30 PM", "Dinner at a beach café", "Last night of the trip; pack the car tonight for the drive home."]
      ],
      tip: "Gokarna is a temple town as well as a beach town: dress modestly away from the beach. Swim only where it's calm and lifeguards are present; drownings happen here.",
      extras: "Instead of the boat trip: a quick morning visit to {{🏰 Cabo de Rama Fort}} (~30 min from Palolem) before driving south."
    },
    {
      day: 6, date: "Tue, Dec 1", base: "Drive home", kind: "drive",
      title: "Gokarna, then home to Bengaluru",
      photos: [
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Entrance_to_Gokarna_Mahabaleshwar_Temple_-_panoramio.jpg/960px-Entrance_to_Gokarna_Mahabaleshwar_Temple_-_panoramio.jpg", "caption": "Mahabaleshwar Temple entrance, Gokarna", "credit": "Photo: Deepak Patil · CC BY-SA 3.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Entrance_to_Gokarna_Mahabaleshwar_Temple_-_panoramio.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Gokarna.JPG/960px-Gokarna.JPG", "caption": "Gokarna", "credit": "Photo: Uleli · CC BY-SA 3.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Gokarna.JPG"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Yana_Rocks_Karnataka_India.jpg/960px-Yana_Rocks_Karnataka_India.jpg", "caption": "Yana Rocks", "credit": "Photo: Photos Worldwide · CC0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Yana_Rocks_Karnataka_India.jpg"},
        {"url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Forests_of_the_Western_Ghats_Karnataka.jpg/960px-Forests_of_the_Western_Ghats_Karnataka.jpg", "caption": "Western Ghats forest, Karnataka", "credit": "Photo: Naik2408 · CC BY-SA 4.0 · Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Forests_of_the_Western_Ghats_Karnataka.jpg"}
      ],
      rows: [
        ["06:30 AM - 08:00 AM", "Sunrise and {{🛕 Mahabaleshwar Temple|Mahabaleshwar Temple Gokarna}}", "Ancient Shiva temple in the town centre. Dress modestly and follow the dress rules at the entrance."],
        ["08:00 AM - 09:00 AM", "Breakfast and check out", "Fill up with fuel before leaving the coast."],
        ["09:00 AM - 11:00 AM", "Gokarna → Kumta → Sirsi", "Inland through the Western Ghats (~85 km). Winding ghat road; take it slow."],
        ["11:00 AM - 12:00 PM", "Optional stop: {{🪨 Yana Rocks|Yana Rocks Kumta}}", "Huge black limestone rock formations in the forest, a short detour off this road. Skip it if you're running late."],
        ["12:30 PM - 01:30 PM", "Lunch in Sirsi", "Swap drivers."],
        ["01:30 PM - 03:00 PM", "Sirsi → Haveri, join NH48", "About 75 km."],
        ["03:00 PM - 09:00 PM", "Haveri → Bengaluru on NH48", "About 335 km; take a 15-minute break every 2 hours. Expect city traffic near Bengaluru in the evening."]
      ],
      tip: "Total ~490 km, 9–10 hours with stops. Leaving by 9 AM gets you through the ghats in daylight. If anyone is tired, stop; don't push the last stretch.",
      extras: "Alternative route home: Gokarna → Ankola → Yellapur → Hubballi → NH48 (~500 km)."
    }
  ],

  road: {
    intro: "Out: Bengaluru → Goa, about <b>560–620 km</b> and <b>10–12 hours</b> with stops. Back: Gokarna → Bengaluru, about <b>490–500 km</b> and <b>9–10 hours</b>. Always check Google Maps live traffic on the morning you leave.",
    routes: [
      { name: "Via Belagavi and Chorla Ghat", km: "~600 km · 10–12 h", best: "Best for North Goa", text: "NH48 to Belagavi, then the Chorla Ghat road down to Sanquelim and Mapusa. Scenic but narrow and winding; drive it in daylight." },
      { name: "Via Dharwad and Anmod Ghat", km: "~570 km · 10–11 h", best: "Best for Panaji / central Goa", text: "NH48 to Hubballi–Dharwad, then Ramnagar, Anmod Ghat, Mollem and Ponda. Road quality on the ghat stretch varies; check recent reviews and traffic." },
      { name: "Via Yellapur and Karwar (coast)", km: "~610 km · 11–12 h", best: "Best for South Goa", text: "NH48 to Hubballi, then Yellapur and Ankola down to Karwar and NH66 into Canacona/Palolem." }
    ],
    homeRoutes: [
      { name: "Gokarna → Kumta → Sirsi → Haveri → NH48", km: "~490 km · 9–10 h", best: "Planned route", text: "Ghat road inland from Kumta to Sirsi, then down to Haveri to join NH48. Optional Yana Rocks detour on the way." },
      { name: "Gokarna → Ankola → Yellapur → Hubballi → NH48", km: "~500 km · 9–10 h", best: "Alternative", text: "Via the Ankola–Yellapur ghat road to Hubballi, then NH48 all the way. Good if the Sirsi road has delays." }
    ],
    sections: [
      { title: "⏰ Timing & safety", items: [
        "<b>Leave by 5:30–6 AM.</b> You'll clear Bengaluru traffic and reach the ghats in daylight.",
        "<b>Avoid ghat roads after dark</b>: sharp bends, trucks, and fog early or late in the day.",
        "<b>Break every 2 hours</b> and swap drivers. Tiredness is the biggest risk on this drive.",
        "Late November is normally dry, but check for any rain or landslide warnings the day before (see Local news).",
        "<b>Goa → Gokarna (Day 5):</b> about 100 km / 2–2.5 h on NH66 via Karwar and Ankola."
      ]},
      { title: "⛽ Tolls, fuel & food", items: [
        "<b>FASTag:</b> keep a healthy balance (₹1,500+ for both ways is a safe buffer). Tolls without FASTag cost double.",
        "<b>Fuel:</b> fill up in Hubballi before the ghats; fuel is usually a little cheaper in Goa, so fill up there before driving home.",
        "<b>Food:</b> plenty of highway restaurants along NH48 (Tumakuru, Chitradurga, Davanagere, Hubballi). Fewer options in the ghats, so carry water and snacks."
      ]},
      { title: "📄 Documents in the car", items: [
        "Driving licence, RC, insurance and PUC. Originals or the DigiLocker / mParivahan versions are accepted.",
        "Keep a copy of your stay bookings handy for check-in."
      ]},
      { title: "🚦 Driving in Goa", items: [
        "<b>Seat belts for everyone</b>, and helmets on two-wheelers. Police checks are common.",
        "<b>Drink-driving checks</b> happen at night, especially around Baga–Calangute. Take a cab after a night out.",
        "<b>Parking:</b> beach and town parking is limited and often paid; don't block lanes or you'll get towed.",
        "Out-of-state cars are fine. Don't drive on beaches.",
        "Renting a scooter? Use a licensed rental (yellow/black number plate), carry your DL, and wear a helmet."
      ]},
      { title: "🆘 If something goes wrong", items: [
        "<b>112</b>: any emergency (police, fire, ambulance).",
        "<b>108</b>: ambulance.",
        "<b>1033</b>: NHAI national highway helpline (breakdowns, accidents on NH48 / NH66). The NHAI \"Rajmargyatra\" app also covers this.",
        "Keep your car insurer's roadside-assistance number saved."
      ]}
    ]
  },

  party: {
    intro: "Goa's nights vary by day and season. Check each venue's Instagram on the day. Leave the car and use a cab after drinking.",
    stops: [
      {
        place: "North Goa", when: "26–28 Nov · 3 nights", vibe: "Clubs, beach shacks and hilltop parties.",
        best: "<b>Fri 27:</b> Vagator / Anjuna. <b>Sat 28:</b> Saturday Night Market, then Tito's Lane or a club.",
        venues: [
          { name: "Tito's Lane, Baga", q: "Titos Lane Baga Goa", tag: "Late", text: "Goa's classic club strip (Tito's, Mambo's and more). Packed on weekends." },
          { name: "Club Cubana, Arpora", q: "Club Cubana Arpora Goa", tag: "Late", text: "Hilltop club with a pool. Theme nights vary; check entry rules." },
          { name: "Curlies, Anjuna", q: "Curlies Anjuna Goa", tag: "Sunset → late", text: "Famous beach shack at the south end of Anjuna." },
          { name: "Hilltop, Vagator", q: "Hilltop Vagator Goa", tag: "Events", text: "Open-air venue known for trance and electronic events in season." },
          { name: "SinQ, Candolim", q: "SinQ Candolim Goa", tag: "Club", text: "Club and lounge close to Candolim." },
          { name: "LPK Waterfront, Nerul", q: "LPK Waterfront Nerul Goa", tag: "Club", text: "Riverside club with sculpted, cave-like interiors." },
          { name: "Saturday Night Market, Arpora", q: "Saturday Night Market Arpora Goa", tag: "Sat evening", text: "Food, live music and stalls. Seasonal; check it's on." }
        ]
      },
      {
        place: "South Goa", when: "29 Nov · 1 night", vibe: "Quieter: beach bars, music and the odd headphone party.",
        best: "<b>Sun 29:</b> beach bars in Palolem; low-key.",
        venues: [
          { name: "Palolem beach bars", q: "Palolem beach bars", tag: "Evenings", text: "Relaxed bars and shacks along the beach." },
          { name: "Silent noise / headphone parties", q: "Silent noise party Palolem", tag: "Some nights", text: "Palolem is known for headphone parties; days change by season, so ask locally." }
        ],
        note: "South Goa is calmer; most places wind down by midnight."
      },
      {
        place: "Gokarna", when: "30 Nov · 1 night", vibe: "Not a party town: beach cafés, bonfires and stargazing. It's also a temple town, so keep it respectful.",
        best: "<b>Mon 30:</b> sunset at Om Beach, dinner at a beach café, early night before the drive home.",
        venues: [
          { name: "Om Beach cafés", q: "Om Beach cafe Gokarna", tag: "Sunset", text: "Cafés and shacks around the Om-shaped bay." },
          { name: "Kudle Beach cafés", q: "Kudle Beach cafe Gokarna", tag: "Evenings", text: "Relaxed cafés with music on the sand." }
        ],
        note: "Most places close early. You're driving ~490 km the next day, so keep it light."
      }
    ],
    safety: [
      "<b>Watch your drinks</b> and don't accept drinks from strangers.",
      "<b>No drugs.</b> They're illegal, raids happen, and penalties under the NDPS Act are severe.",
      "<b>No drink-driving.</b> Night police checks are common; take a GoaMiles cab or a licensed taxi.",
      "<b>Drinking in the open on beaches and roadsides can be fined</b>; drink at shacks, bars or your stay.",
      "<b>Never swim at night or after drinking.</b>",
      "<b>Stick together</b> and agree a meeting point; ignore touts offering \"free entry\"."
    ]
  },

  faq: [
    { q: "How long are the drives?", a: "Bengaluru → Goa: about <b>560–620 km</b>, 10–12 hours with stops. Gokarna → Bengaluru: about <b>490–500 km</b>, 9–10 hours. See the Road trip page for routes." },
    { q: "What's the weather like in late November?", a: "Usually dry and sunny, around <b>22–33 °C</b>, with calmer seas than in monsoon. An odd late-season shower is possible." },
    { q: "Is it peak season?", a: "Late November is just before peak; the weekend (28–29 Nov) is busier. Book weekend dinners or club tables if you have a favourite." },
    { q: "Is it safe to swim?", a: "Swim only at beaches with lifeguards, between the flags. Red flag means no swimming. Never swim after dark or after drinking." },
    { q: "How do we get around in Goa?", a: "Your own car, but parking near beaches is limited. For nights out use the <b>GoaMiles</b> app or a licensed taxi. Scooter rentals need a DL and helmets." },
    { q: "UPI or cash?", a: "UPI works almost everywhere. Carry some cash for small shacks, parking and tips." },
    { q: "Any rules about alcohol?", a: "Drinking in the open on beaches and roadsides can be fined, and drink-driving checks are common at night. Drink at bars, shacks or your stay." },
    { q: "Dress code for churches?", a: "Cover shoulders and knees and keep quiet during mass, especially on Sunday at Old Goa." },
    { q: "Mobile signal on the way?", a: "Good on NH48 and in Goa towns; patchy in the ghats. Download offline maps before you leave." },
    { q: "Is it safe to swim in Gokarna?", a: "Be careful: Gokarna's beaches can have strong currents and drownings are reported. Swim only where it's calm and lifeguards are present, stay in your depth, and never swim after dark or after drinking." },
    { q: "Any dress code in Gokarna?", a: "Beachwear is fine on the beach, but cover up in town and at the Mahabaleshwar Temple. Follow the dress rules posted at the temple entrance." },
    { q: "Emergency numbers?", a: "<b>112</b> any emergency, <b>108</b> ambulance, <b>1033</b> NHAI highway helpline." }
  ],

  checklist: [
    { icon: "🚗", title: "Car check", text: "Tyres (including the spare), brakes, coolant, wipers and lights. Get it done before the trip if it's due." },
    { icon: "📄", title: "Car documents", text: "Driving licence, RC, insurance and PUC: originals or in DigiLocker / mParivahan." },
    { icon: "🏷️", title: "FASTag balance", text: "Top up to ₹1,500+ for tolls both ways." },
    { icon: "🏨", title: "Stays confirmed", text: "Both stays booked, with parking for the car. Add them to the app when confirmed." },
    { icon: "🗺️", title: "Offline maps", text: "Download Google Maps offline for the route and for Goa (signal drops in the ghats)." },
    { icon: "🎟️", title: "Weekend plans", text: "Check the Saturday Night Market is on, and book any Saturday dinner or club table you care about." },
    { icon: "💵", title: "Cash + UPI", text: "UPI works widely; carry some cash for shacks, parking and tips." },
    { icon: "🌤️", title: "Weather check", text: "Look at the forecast and Local news the day before you leave." },
    { icon: "🆘", title: "Emergency numbers", text: "Save 112, 108, NHAI 1033 and your insurer's roadside-assistance number." },
    { icon: "🔌", title: "Car charging", text: "Car charger, phone mount and a power bank." }
  ],

  packing: [
    { group: "Car", items: [
      ["c-docs", "DL, RC, insurance, PUC (or DigiLocker)"],
      ["c-key", "Spare car key"],
      ["c-mount", "Phone mount + car charger"],
      ["c-water", "Water bottles + snacks for the drive"],
      ["c-aid", "First-aid kit"],
      ["c-torch", "Torch"],
      ["c-bags", "Garbage bag, tissues, wet wipes"]
    ]},
    { group: "Clothes", items: [
      ["w-light", "Light cotton clothes for 6 days"],
      ["w-swim", "Swimwear (2 sets)"],
      ["w-night", "One outfit for a night out"],
      ["w-church", "Something covering shoulders & knees (churches)"],
      ["w-hat", "Cap / hat + sunglasses"],
      ["w-flip", "Flip-flops"],
      ["w-shoes", "Walking sandals or shoes (forts)"]
    ]},
    { group: "Beach", items: [
      ["b-sun", "Sunscreen SPF 50"],
      ["b-towel", "Beach towel"],
      ["b-dry", "Dry bag / waterproof phone pouch"]
    ]},
    { group: "Health", items: [
      ["h-meds", "Personal medicines"],
      ["h-motion", "Motion-sickness tablets (ghat roads)"],
      ["h-ors", "ORS + something for upset stomach"],
      ["h-mozzie", "Mosquito repellent"],
      ["h-san", "Hand sanitiser"]
    ]},
    { group: "Tech", items: [
      ["t-charge", "Phone chargers"],
      ["t-power", "Power bank"],
      ["t-ear", "Earphones / car Bluetooth"],
      ["t-offline", "Offline maps + this app's photos saved for offline"]
    ]}
  ]
};
