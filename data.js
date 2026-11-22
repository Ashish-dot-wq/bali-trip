// Bali 2026 - Master Trip Data
// Group of 5 Friends: Dec 18 - Dec 27, 2026
// Flights: IndiGo 6E 1605 (BLR -> DPS) & 6E 1606 (DPS -> BLR) | PNR: SFJ8RN

const TRIP_DATA = {
  meta: {
    tripTitle: "Bali Group Adventure 2026",
    dates: "Fri, 18 Dec 2026 – Sun, 27 Dec 2026",
    duration: "10 Days / 9 Nights",
    groupSize: 5,
    pnr: "SFJ8RN",
    flights: {
      outbound: {
        flightNumber: "6E 1605",
        airline: "IndiGo",
        from: "Bengaluru (BLR, Terminal 2)",
        to: "Bali Denpasar (DPS, Ngurah Rai)",
        departure: "00:55 hrs (Fri, 18 Dec)",
        arrival: "10:15 hrs (Fri, 18 Dec)",
        duration: "6h 50m (Non-stop)"
      },
      inbound: {
        flightNumber: "6E 1606",
        airline: "IndiGo",
        from: "Bali Denpasar (DPS, Ngurah Rai)",
        to: "Bengaluru (BLR, Terminal 2)",
        departure: "11:15 hrs (Sun, 27 Dec)",
        arrival: "15:15 hrs IST (Sun, 27 Dec)",
        duration: "6h 30m (Non-stop)"
      },
      baggage: {
        cabin: "7 Kgs / adult",
        checkIn: "20 Kgs / adult"
      }
    },

  masterNightlifeGuide: {
    headline: "Bali & Gilis Nightlife, Party & Alternative Explorer",
    seminyak: {
      title: "Seminyak: Beach Clubs & Late-Night Institutions",
      vibe: "High-end mega beach clubs, wild multi-story nightclubs, chic cocktail lounges",
      venues: [
        { name: "Potato Head Beach Club", badge: "Sunset Amphitheater", desc: "Daybeds, oceanfront pool, sunset cocktails, world-class guest DJs." },
        { name: "La Favela", badge: "Jungle Club (Till 3 AM)", desc: "Seminyak's #1 wild party spot: retro disco, hip hop, secret rooms, insane energy." },
        { name: "Motel Mexicola", badge: "Dancing on Tables", desc: "Table-dancing, tequila anthems, confetti showers, and retro party vibes." },
        { name: "ShiShi Nightclub", badge: "3-Floor Club & Izakaya", desc: "Japanese dining on bottom, house/techno club & electric rooftop on top." },
        { name: "Finns Beach Club (Canggu border)", badge: "Mega Beach Festival", desc: "4 pools, 9 bars, sunset festival atmosphere 15 mins from Seminyak." }
      ]
    },
    giliT: {
      title: "Gili Trawangan: The Ultimate Car-Free Party Island",
      vibe: "Rotating Official Island Party Schedule, beachfront live reggae, booze cruises, barefoot dancing",
      rotatingSchedule: "Gili T has a legendary agreement among bar owners: each night of the week has ONE designated official party that stays open until 3–4 AM with huge sound systems, so the entire island's party crowd converges at the same venue!",
      venues: [
        { name: "Sama Sama Reggae Bar", badge: "Live Reggae Daily", desc: "Live roots reggae band every single night, packed beachfront crowd." },
        { name: "Jiggy Bar & Jiggy Boat Party", badge: "Booze Cruise & Club", desc: "Daily 4-hour catamaran party cruise with open bar, plus nightly beer pong & dancefloors." },
        { name: "Lava Bar", badge: "Rock & Fire Shows", desc: "Famous for fire dancers, pool tournaments, rock music, and wild Friday parties." },
        { name: "Tir Na Nog (Irish Pub)", badge: "Wednesday Mega Party", desc: "Huge open-air dancefloors with international electronic and house DJs." },
        { name: "Blue Marlin Dive Bar", badge: "Monday Techno Party", desc: "Legendary oceanfront party looking over the sea." },
        { name: "Rudy's Bar", badge: "Jungle Buckets", desc: "Hip hop, chart hits, and cocktail buckets that keep going late." }
      ]
    },
    ubud: {
      title: "Ubud: Speakeasies, Live Jazz & Late-Night Latin Bars",
      vibe: "Hidden speakeasies, live jazz/blues, open-air salsa & reggae lounges",
      venues: [
        { name: "CP Lounge", badge: "Late Night Party (Till 3 AM)", desc: "Ubud's most famous late-night spot: live salsa, reggae & rock bands, dancefloor, pool tables." },
        { name: "The Blue Door", badge: "Hidden Speakeasy Club", desc: "Behind a red London phone booth: live rock in front, underground DJ club in the back." },
        { name: "No Más Bar", badge: "Cocktails & Vinyl", desc: "Chic second-story bar above Folk Pool & Gardens with craft cocktails & indie vinyl DJs." },
        { name: "Laughing Buddha Bar", badge: "Live Jazz & Blues", desc: "Vibrant live music every night, signature mojitos, intimate social atmosphere." }
      ]
    },
    nusaPenidaAndAmed: {
      title: "Nusa Penida & Amed: Low-Key Sunset & Bonfire Vibes",
      vibe: "Nature, cliffside sunset infinity pools, beach bonfires, acoustic guitars",
      summary: "Neither Nusa Penida nor Amed are clubbing or late-night party hubs. Their nightlife revolves around cliffside sunset drinks (Amok Sunset on Penida, Amed Sunset Point), beachfront bonfires with acoustic guitar (Warung Bobo, Sailors Bar), and pristine stargazing under zero-pollution skies."
    }
  },

    problemStatement: {
      headline: "Why the Original Plan Changed: The 48-Hour Transit Trap",
      summary: "Our initial draft had 1 night in Nusa Penida and 1 night in Gili Trawangan. When calculated realistically, that 48-hour transit window becomes an exhausting logistical hurdle instead of a vacation.",
      keyIssues: [
        {
          icon: "⏳",
          title: "12 Hours in Transit vs. 4 Hours Relaxing",
          description: "Between packing bags 3 mornings in a row, wading through water to boat landings, port waiting, and rough swells, you lose an entire prime day."
        },
        {
          icon: "🐴",
          title: "Gili T Has Zero Motorized Vehicles",
          description: "Dragging 20kg rolling luggage through unpaved beach sand or horse carts twice within 20 hours is chaotic for a 5-person crew."
        },
        {
          icon: "🌊",
          title: "December Monsoon Sea State Risk",
          description: "Lombok Strait swells in late December frequently delay or cancel speedboats. A 3-hour delay burns an entire 1-night stay."
        },
        {
          icon: "💡",
          title: "The Smart Solution: Seminyak 3-Night Base",
          description: "Keep Seminyak Dec 18–21 (3 nights). Sanur Port is only 35 mins away. We take a seamless Nusa Penida day-trip on Dec 20 with light daypacks, leaving all heavy bags safely in our hotel room!"
        }
      ],
      theChoice: "Now, choose how we spend Dec 21–27: Option 2 (Gili Trawangan 3N + Ubud 3N) or Option 3 (Amed Reef Road Trip 2N + Ubud 4N)!"
    }
  },

  options: {
    opt2: {
      id: "opt2",
      name: "Option 2: The Island Explorer",
      shortName: "Gili T Island Explorer",
      tagline: "Tropical party, wild sea turtles, beachfront swings & turquoise waters",
      badge: "Islands & Ocean Vibe",
      color: "#06b6d4",
      stayBreakdown: "Seminyak (3N) → Gili Trawangan (3N) → Ubud (3N)",
      highlights: [
        "Nusa Penida day trip without dragging luggage",
        "3 full nights on car-free Gili Trawangan",
        "Snorkeling with wild green turtles right off the reef",
        "West-coast over-water sunset swings & seafood night market",
        "Cultural finale in Ubud with waterfalls & monkeys"
      ],
      tradeoffs: [
        "Requires 2.5 hr fast boat across the Lombok Strait",
        "Horse carts / bicycles for luggage transfer on Gili",
        "Potential sea swell motion during monsoon crossings"
      ],
      days: [
        {
          dayNum: 1,
          date: "Fri, Dec 18, 2026",
          location: "Seminyak",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Potato+Head+Beach+Club+Ku+De+Ta+Seminyak+Beach+Bali",
          attractions: [
            { name: "Potato Head Beach Club", url: "https://www.google.com/maps/search/?api=1&query=Potato+Head+Beach+Club+Seminyak+Bali" },
            { name: "Seminyak Beach", url: "https://www.google.com/maps/search/?api=1&query=Seminyak+Beach+Bali" },
            { name: "Eat Street (Jalan Kayu Aya)", url: "https://www.google.com/maps/search/?api=1&query=Jalan+Kayu+Aya+Seminyak+Bali" }
          ],
          title: "Touchdown Bali & Sunset Beach Club Unwind",
          vibe: "Arrival & Coastal Lifestyle",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
              caption: "Potato Head Beach Club lawn amphitheater & sunset pool"
            },
            {
              url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
              caption: "Golden hour sunset over Seminyak beach waves"
            },
            {
              url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
              caption: "Tropical welcome cocktails & beachfront dining"
            }
          ],
          schedule: [
            { time: "10:15 AM - 12:00 PM", activity: "Arrival & Immigration at DPS Airport", details: "Land on flight 6E 1605. Clear e-VoA counter, collect baggage, scan customs QR." },
            { time: "12:00 PM - 01:30 PM", activity: "Private Transfer to Seminyak", details: "Pre-booked private air-conditioned van for the 5 of us (~40 mins drive)." },
            { time: "01:30 PM - 03:30 PM", activity: "Check-in & Rest", details: "Unpack bags, freshen up, and recover from the red-eye flight." },
            { time: "04:30 PM - 07:30 PM", activity: "Sunset Drinks at Potato Head Beach Club", details: "Daybeds overlooking the crashing waves, tropical cocktails, and DJ sunset tunes." },
            { time: "08:00 PM - 10:00 PM", activity: "Welcome Group Dinner", details: "Feast on Jalan Kayu Aya (Eat Street) at an upscale Balinese fusion spot." }
          ],
          alternatives: [
            {
                        "name": "La Favela Bali",
                        "category": "Nightlife & Dancing",
                        "badge": "\ud83d\udd25 Wild Multi-Floor Club",
                        "desc": "Legendary jungle-themed retro disco & hip-hop institution. Secret courtyards and wild parties till 3 AM.",
                        "url": "https://www.google.com/maps/search/?api=1&query=La+Favela+Seminyak+Bali"
            },
            {
                        "name": "Motel Mexicola",
                        "category": "Fiesta Dining",
                        "badge": "\ud83c\udf89 Dancing on Tables",
                        "desc": "High-energy retro Mexican cantina where dining turns into dancing on tables with tequila shots & throwback anthems.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Motel+Mexicola+Seminyak+Bali"
            },
            {
                        "name": "Finns Beach Club (Canggu)",
                        "category": "Day & Night Club",
                        "badge": "\ud83c\udfd6\ufe0f Mega Beach Club",
                        "desc": "15 mins away: 4 oceanfront pools, 9 bars, international festival DJs, and daybeds.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Finns+Beach+Club+Bali"
            }
],
          tips: "Pre-fill Indonesia e-CD (customs declaration) online 3 days prior for instant QR clearance."
        },
        {
          dayNum: 2,
          date: "Sat, Dec 19, 2026",
          location: "Seminyak",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Ku+De+Ta+Seminyak+Village+Petitenget+Beach+Bali",
          attractions: [
            { name: "Ku De Ta Sunset Lounge", url: "https://www.google.com/maps/search/?api=1&query=Ku+De+Ta+Seminyak+Bali" },
            { name: "Seminyak Village Boutiques", url: "https://www.google.com/maps/search/?api=1&query=Seminyak+Village+Bali" },
            { name: "Petitenget Beach", url: "https://www.google.com/maps/search/?api=1&query=Petitenget+Beach+Seminyak+Bali" }
          ],
          title: "Seminyak Surf, Boutiques & Ku De Ta Sunset",
          vibe: "Lifestyle, Surf & Spa",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
              caption: "Rolling surf waves along the sunny Seminyak coast"
            },
            {
              url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
              caption: "Iconic red beachfront loungers at Ku De Ta"
            },
            {
              url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
              caption: "Artisan brunch & specialty coffee in Petitenget"
            }
          ],
          schedule: [
            { time: "08:30 AM - 10:30 AM", activity: "Cafe Breakfast & Specialty Coffee", details: "Avocado toast, smoothie bowls, and flat whites in central Seminyak." },
            { time: "10:30 AM - 01:00 PM", activity: "Surf Lesson / Beachside Loungers", details: "Beginner-friendly surf lesson with local instructors on Seminyak beach." },
            { time: "01:00 PM - 03:30 PM", activity: "Boutique Shopping & Balinese Spa", details: "Browse Seminyak Village fashion & enjoy a 60-min reflexology session." },
            { time: "05:00 PM - 07:30 PM", activity: "Sunset Session at Ku De Ta", details: "Iconic beachfront venue with house music, red loungers, and fiery sunset." },
            { time: "08:00 PM - 10:00 PM", activity: "Dinner in Petitenget", details: "Casual group dining and early night to rest for tomorrow's 06:30 AM Penida boat." }
          ],
          alternatives: [
            {
                        "name": "ShiShi Nightclub & Rooftop",
                        "category": "Club & Rooftop",
                        "badge": "\ud83c\udf78 House/Techno & Izakaya",
                        "desc": "3-story venue featuring Japanese Izakaya dining, neon light tunnels, and an electric rooftop party.",
                        "url": "https://www.google.com/maps/search/?api=1&query=ShiShi+Nightclub+Izakaya+Seminyak"
            },
            {
                        "name": "Woobar at W Bali",
                        "category": "Sunset Lounge",
                        "badge": "\ud83c\udfa7 Chic Sunset Beats",
                        "desc": "Beachfront deck & underground cocktail lounge with international guest DJs and signature martinis.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Woobar+Bali+Seminyak"
            },
            {
                        "name": "La Plancha (Double Six)",
                        "category": "Casual Beach Bar",
                        "badge": "\ud83c\udf79 Colorful Beanbags",
                        "desc": "Chilled sunset spot on the sand with vibrant parasols, beanbags, Spanish sangria, and grilled tapas.",
                        "url": "https://www.google.com/maps/search/?api=1&query=La+Plancha+Bali"
            }
],
          tips: "Hydrate well today and pack a small 15L daypack for tomorrow's Nusa Penida excursion."
        },
        {
          dayNum: 3,
          date: "Sun, Dec 20, 2026",
          location: "Nusa Penida",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Kelingking+Beach+Broken+Beach+Angels+Billabong+Crystal+Bay+Nusa+Penida",
          attractions: [
            { name: "Kelingking Beach (T-Rex Cliff)", url: "https://www.google.com/maps/search/?api=1&query=Kelingking+Beach+Nusa+Penida" },
            { name: "Broken Beach (Pasih Uug)", url: "https://www.google.com/maps/search/?api=1&query=Broken+Beach+Nusa+Penida" },
            { name: "Angel's Billabong", url: "https://www.google.com/maps/search/?api=1&query=Angels+Billabong+Nusa+Penida" },
            { name: "Crystal Bay Snorkeling", url: "https://www.google.com/maps/search/?api=1&query=Crystal+Bay+Nusa+Penida" }
          ],
          title: "Epic Nusa Penida Day Trip: Kelingking & Broken Beach",
          vibe: "Dramatic Cliffs & Turquoise Bays (Zero Luggage Hassle)",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1534131197842-bafa0b820f91?auto=format&fit=crop&w=1200&q=80",
              caption: "Iconic panoramic T-Rex headland at Kelingking Beach"
            },
            {
              url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
              caption: "Broken Beach natural limestone circular ocean arch"
            },
            {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
              caption: "Crystal Bay calm turquoise snorkeling waters & palms"
            },
            {
              url: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1200&q=80",
              caption: "Dramatic limestone cliffs dropping into deep azure sea"
            }
          ],
          schedule: [
            { time: "06:30 AM - 07:15 AM", activity: "Drive to Sanur Port", details: "Quick 35-min transfer from Seminyak. Main luggage stays safely locked in hotel!" },
            { time: "07:30 AM - 08:30 AM", activity: "Fast Boat to Nusa Penida", details: "Catamaran crossing over Badung Strait (45 min). Enjoy ocean views." },
            { time: "09:00 AM - 11:30 AM", activity: "Kelingking Beach Viewpoint", details: "World-famous T-Rex cliff panorama and cliffside photos from upper ridge." },
            { time: "12:00 PM - 01:30 PM", activity: "Broken Beach & Angel's Billabong", details: "Natural limestone bridge and turquoise ocean sinkhole. Cliffside lunch." },
            { time: "02:00 PM - 03:30 PM", activity: "Snorkeling at Crystal Bay", details: "Swim with reef fish in a sheltered cove surrounded by towering coconut palms." },
            { time: "04:30 PM - 05:30 PM", activity: "Fast Boat back to Sanur Port", details: "Smooth late afternoon crossing back to Bali mainland." },
            { time: "05:30 PM - 06:45 PM", activity: "Return to Seminyak Hotel", details: "Back to our hotel room with no check-in fuss. Relaxed dinner at leisure." }
          ],
          alternatives: [
            {
                        "name": "Manta Point Snorkeling Detour",
                        "category": "Marine Adventure",
                        "badge": "\ud83e\udd3f Giant Manta Rays",
                        "desc": "Detour to Penida southern cliffs to snorkel with massive 3-meter oceanic manta rays.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Manta+Point+Nusa+Penida"
            },
            {
                        "name": "Diamond Beach & Atuh Beach",
                        "category": "East Coast Highlights",
                        "badge": "\ud83d\udc8e White Cliff Staircase",
                        "desc": "Dramatic needle rock formations and the famous cliff-carved staircase on Penida East Coast.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Nusa+Penida"
            },
            {
                        "name": "Amok Sunset Lounge",
                        "category": "Cliffside Drinks",
                        "badge": "\ud83c\udf79 Treehouse Nests",
                        "desc": "Cliffside sunset restaurant with private bamboo treehouse nests overlooking Mount Agung.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Amok+Sunset+Nusa+Penida"
            }
],
          tips: "Leaving our bags in Seminyak is a life-saver: no hauling suitcases up Penida's rough stairs!"
        },
        {
          dayNum: 4,
          date: "Mon, Dec 21, 2026",
          location: "Gili Trawangan",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Turtle+Point+Hotel+Ombak+Sunset+Swings+Gili+Trawangan+Night+Market",
          attractions: [
            { name: "West Coast Sunset Swings", url: "https://www.google.com/maps/search/?api=1&query=Hotel+Ombak+Sunset+Swings+Gili+Trawangan" },
            { name: "Gili Trawangan Night Market", url: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+Night+Market" },
            { name: "East Coast Harbor Strip", url: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+Harbour" }
          ],
          title: "Speedboat to Gili Trawangan & Sunset Beach Swings",
          vibe: "Island Crossing, Bicycles & Over-water Swings",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
              caption: "Over-water sunset swings on the west coast of Gili T"
            },
            {
              url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
              caption: "Car-free sandy beach road: rent cruiser bikes with baskets"
            },
            {
              url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
              caption: "Beachfront beanbags, chilled reggae, and golden sunsets"
            }
          ],
          schedule: [
            { time: "07:00 AM - 08:30 AM", activity: "Checkout Seminyak & Drive to Padang Bai", details: "Private van to eastern port of Padang Bai (1h 30m drive)." },
            { time: "09:00 AM - 11:30 AM", activity: "Fast Boat to Gili Trawangan", details: "Morning crossing across Lombok Strait (~2.5 hrs). Morning water is calmest." },
            { time: "11:30 AM - 01:00 PM", activity: "Arrival & Check-in on Gili T", details: "Rent beach cruisers or take a horse cart to beachfront resort. Check in." },
            { time: "01:30 PM - 03:30 PM", activity: "Beachside Seafood Lunch", details: "Fresh grilled fish, sambal matah, and fresh coconuts by the turquoise reef." },
            { time: "05:00 PM - 07:00 PM", activity: "Sunset Swings on the West Coast", details: "Cycle to the west coast for golden hour cocktails and photos on ocean swings." },
            { time: "07:30 PM - 10:00 PM", activity: "Gili T Night Market Feast", details: "Bustling open-air stalls with grilled snapper, prawns, satay, and nasi campur." }
          ],
          alternatives: [
            {
                        "name": "Sama Sama Reggae Bar",
                        "category": "Live Music & Nightlife",
                        "badge": "\ud83c\udfb5 Live Reggae Daily",
                        "desc": "Packed beachfront dancefloor with live roots reggae band playing every single night till late.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Sama+Sama+Reggae+Bar+Gili+Trawangan"
            },
            {
                        "name": "Jiggy Bar & Beer Pong",
                        "category": "Nightlife & Games",
                        "badge": "\ud83c\udf7b Beer Pong & Shots",
                        "desc": "High-energy party hub famous for nightly beer pong tourneys, shot wheels, and commercial dance hits.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Jiggy+Bar+Gili+Trawangan"
            },
            {
                        "name": "The Exile Beach Bar (West Coast)",
                        "category": "Sunset Vibe",
                        "badge": "\ud83e\udd41 Sunset Drum Circle",
                        "desc": "Barefoot west coast sunset hangout with live acoustic jam sessions, fire pits, and ocean hammocks.",
                        "url": "https://www.google.com/maps/search/?api=1&query=The+Exile+Gili+Trawangan"
            }
],
          tips: "No cars or motorbikes allowed on Gili T! Grab bikes with baskets for easy island hopping."
        },
        {
          dayNum: 5,
          date: "Tue, Dec 22, 2026",
          location: "Gili Trawangan",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Turtle+Point+Gili+Trawangan+Coral+Reef+Lombok",
          attractions: [
            { name: "Turtle Point Snorkeling", url: "https://www.google.com/maps/search/?api=1&query=Turtle+Point+Gili+Trawangan" },
            { name: "7km Island Perimeter Route", url: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+Island+Loop" },
            { name: "North Beach Coral Gardens", url: "https://www.google.com/maps/search/?api=1&query=North+Beach+Gili+Trawangan" }
          ],
          title: "Snorkeling with Wild Sea Turtles & Island Cycling",
          vibe: "Marine Wildlife & Full Island Perimeter",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
              caption: "Wild Green sea turtle gliding 1 meter below surface"
            },
            {
              url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80",
              caption: "Pristine coral bommies and clownfish around Turtle Point"
            },
            {
              url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
              caption: "Cycling beneath coconut palms with ocean views"
            }
          ],
          schedule: [
            { time: "08:30 AM - 11:30 AM", activity: "Private Turtle Snorkeling Boat", details: "Swim alongside green and hawksbill sea turtles at Turtle Point and coral reef." },
            { time: "12:00 PM - 02:00 PM", activity: "Beachside Lunch & Hammock Nap", details: "Chilled smoothies, wood-fired pizza, and shade loungers." },
            { time: "03:30 PM - 05:30 PM", activity: "7km Island Perimeter Bike Ride", details: "Scenic bike circuit around the entire perimeter with ocean views in every direction." },
            { time: "06:00 PM - 09:30 PM", activity: "Beach Barbecue & Acoustic Reggae", details: "Beach bonfire, live acoustic guitar, and group stargazing." }
          ],
          alternatives: [
            {
                        "name": "Jiggy Boat Party (Booze Cruise)",
                        "category": "Day Party",
                        "badge": "\ud83d\udef3\ufe0f 4-Hour Boat Rave",
                        "desc": "The legendary Gili party catamaran: open bar, swim stops, live DJ decks, and golden hour party.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Jiggy+Boat+Party+Gili+Trawangan"
            },
            {
                        "name": "Lava Bar Fire & Rock Show",
                        "category": "Nightlife",
                        "badge": "\ud83d\udd25 Fire Dancers & Rock",
                        "desc": "Famous rock bar hosting pool tournaments, fire-twirling performances, and Friday mega parties.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Lava+Bar+Gili+Trawangan"
            },
            {
                        "name": "Tir Na Nog (Irish Pub)",
                        "category": "Late Night Party",
                        "badge": "\u2618\ufe0f Wild Wednesday Party",
                        "desc": "Longest-standing party pub on Gili T with open-air dancefloors and guest international DJs.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Tir+Na+Nog+Gili+Trawangan"
            }
],
          tips: "Rent a GoPro or get underwater housing: the turtles swim just 1-2 meters beneath you!"
        },
        {
          dayNum: 6,
          date: "Wed, Dec 23, 2026",
          location: "Gili Trawangan",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+Viewpoint+Hill+East+Beach+Lombok",
          attractions: [
            { name: "Gili T Hilltop Viewpoint", url: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+Hilltop+Viewpoint" },
            { name: "Eastern Lagoon Watersports", url: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+East+Beach" },
            { name: "Beachfront Candlelight Strip", url: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+Beachfront+Dining" }
          ],
          title: "Paddleboarding, Spa Downtime & Hilltop Viewpoint",
          vibe: "Lagoon Watersports & Hilltop Sunset",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
              caption: "Glassy turquoise lagoon water along the east shore"
            },
            {
              url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
              caption: "Panoramic sunset glow looking toward Bali and Mount Agung"
            }
          ],
          schedule: [
            { time: "09:00 AM - 11:30 AM", activity: "Stand-Up Paddleboarding & Kayaking", details: "Glide over the calm glass-like eastern lagoon." },
            { time: "12:00 PM - 02:30 PM", activity: "Resort Poolside & Balinese Massage", details: "Total downtime with cocktails, book reading, and spa treatment." },
            { time: "04:30 PM - 07:00 PM", activity: "Gili T Hilltop Viewpoint Hike", details: "Gentle 20-min hike up the highest hill for 360° views across Lombok & Mount Rinjani." },
            { time: "07:30 PM - 10:00 PM", activity: "Farewell Beachfront Dinner", details: "Candlelit table right on the sand with grilled lobster and Indonesian curries." }
          ],
          alternatives: [
            {
                        "name": "Blue Marlin Dive Bar",
                        "category": "Nightlife",
                        "badge": "\ud83c\udfa7 House & Techno",
                        "desc": "Oceanfront dive center that transforms into Gili premier Monday/Wednesday electronic music party.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Blue+Marlin+Dive+Gili+Trawangan"
            },
            {
                        "name": "Rudy's Bar & Lounge",
                        "category": "Late Night Party",
                        "badge": "\ud83c\udf79 Cocktail Buckets",
                        "desc": "Jungle cocktail buckets, R&B hits, and lively open-air crowd that keeps dancing until 4 AM.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Rudys+Bar+Gili+Trawangan"
            },
            {
                        "name": "Gili Meno Underwater Statues Hop",
                        "category": "Marine Exploration",
                        "badge": "\ud83d\uddff Submerged Statues",
                        "desc": "10-min wooden boat across the channel to snorkel the famous underwater circle of 48 human statues.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Underwater+Sculptures+Gili+Meno"
            }
],
          tips: "Have your resort book tomorrow's harbor luggage transfer tonight for a smooth exit."
        },
        {
          dayNum: 7,
          date: "Thu, Dec 24, 2026",
          location: "Ubud",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Ubud+Palace+Jalan+Raya+Ubud+Jungle+Resorts+Bali",
          attractions: [
            { name: "Ubud Royal Palace", url: "https://www.google.com/maps/search/?api=1&query=Ubud+Palace+Bali" },
            { name: "Jalan Raya Ubud Boutiques", url: "https://www.google.com/maps/search/?api=1&query=Jalan+Raya+Ubud" },
            { name: "Padang Bai Harbor (Transit)", url: "https://www.google.com/maps/search/?api=1&query=Padang+Bai+Harbour+Bali" }
          ],
          title: "Return Boat to Mainland Bali & Ubud Highlands Entry",
          vibe: "Ocean Crossing to Highland Jungle",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
              caption: "Ubud highland rainforest canopy & river valley villas"
            },
            {
              url: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80",
              caption: "Ancient mossy jungle stone shrines and courtyards"
            }
          ],
          schedule: [
            { time: "09:00 AM - 10:30 AM", activity: "Checkout Gili T & Board Fast Boat", details: "Transfer bags to harbor for the 11:00 AM return boat." },
            { time: "11:00 AM - 01:30 PM", activity: "Fast Boat to Padang Bai Harbour", details: "Scenic ocean crossing returning to Bali's east coast." },
            { time: "01:30 PM - 03:30 PM", activity: "Private Van Drive to Ubud Highlands", details: "Ascend from the coast up into the lush ravines of Ubud (~1h 30m)." },
            { time: "03:30 PM - 05:30 PM", activity: "Check-in to Ubud Jungle Resort", details: "Settle into your villa surrounded by rainforest canopy and river sounds." },
            { time: "06:00 PM - 08:30 PM", activity: "Ubud Palace & Christmas Eve Dinner", details: "Stroll the royal palace courtyard and enjoy festive Christmas Eve dining." }
          ],
          alternatives: [
            {
                        "name": "CP Lounge Ubud",
                        "category": "Late Night Nightlife",
                        "badge": "\ud83c\udf89 Open Till 3 AM",
                        "desc": "Ubud's #1 late-night party spot: live salsa, reggae & pop bands, pool tables, open-air dancefloor.",
                        "url": "https://www.google.com/maps/search/?api=1&query=CP+Lounge+Ubud+Bali"
            },
            {
                        "name": "The Blue Door Speakeasy",
                        "category": "Speakeasy Club",
                        "badge": "\ud83c\udf78 Secret London Phone Booth",
                        "desc": "Secret club hidden behind a vintage red phone booth: live rock band in front, underground DJ club inside.",
                        "url": "https://www.google.com/maps/search/?api=1&query=The+Blue+Door+Ubud+Bali"
            },
            {
                        "name": "No M\u00e1s Bar",
                        "category": "Craft Cocktails",
                        "badge": "\ud83c\udfa7 Indie DJs & Vinyl",
                        "desc": "Chic second-floor cocktail hangout above Folk Pool & Gardens with craft drinks and vinyl sets.",
                        "url": "https://www.google.com/maps/search/?api=1&query=No+Mas+Bar+Ubud+Bali"
            }
],
          tips: "Ubud evening temperatures drop slightly into the mid-20s C; a light jacket is pleasant."
        },
        {
          dayNum: 8,
          date: "Fri, Dec 25, 2026",
          location: "Ubud",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Sacred+Monkey+Forest+Sanctuary+Tegallalang+Rice+Terrace+Tirta+Empul+Temple+Ubud",
          attractions: [
            { name: "Sacred Monkey Forest", url: "https://www.google.com/maps/search/?api=1&query=Sacred+Monkey+Forest+Sanctuary+Ubud" },
            { name: "Tegallalang Rice Terraces & Swing", url: "https://www.google.com/maps/search/?api=1&query=Tegallalang+Rice+Terrace+Ubud" },
            { name: "Tirta Empul Holy Water Temple", url: "https://www.google.com/maps/search/?api=1&query=Tirta+Empul+Temple+Bali" }
          ],
          title: "Christmas in Ubud: Macaques, Rice Terraces & Holy Water",
          vibe: "Sacred Temples & Cascading Greens",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
              caption: "Emerald green terraced tiers of Tegallalang Rice Terrace"
            },
            {
              url: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80",
              caption: "Sacred Monkey Forest Sanctuary long-tailed macaques"
            },
            {
              url: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=1200&q=80",
              caption: "Tirta Empul sacred natural spring purification spouts"
            }
          ],
          schedule: [
            { time: "08:30 AM - 10:30 AM", activity: "Sacred Monkey Forest Sanctuary", details: "Walk beneath towering banyan trees with 700+ inquisitive Balinese macaques." },
            { time: "11:00 AM - 01:30 PM", activity: "Tegallalang Rice Terraces & Swing", details: "Walk the UNESCO-heritage terraces; take turns on the giant jungle swing." },
            { time: "01:30 PM - 03:00 PM", activity: "Crispy Duck Feast Overlooking Terraces", details: "Traditional Bebek Betutu roasted in banana leaves with river canyon views." },
            { time: "03:30 PM - 05:30 PM", activity: "Tirta Empul Holy Water Temple", details: "Witness or participate in the traditional Melukat purification ritual." },
            { time: "07:00 PM - 09:30 PM", activity: "Christmas Celebration Dinner", details: "Festive group holiday dinner at an ambient garden restaurant in Ubud." }
          ],
          alternatives: [
            {
                        "name": "Ayung River White Water Rafting",
                        "category": "Jungle Adventure",
                        "badge": "\ud83d\udea3 12km Jungle Rapids",
                        "desc": "Class II-III rafting through jungle gorges, stone carved cliffs, and river waterfalls.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Ayung+River+Rafting+Ubud"
            },
            {
                        "name": "ATV Quad Biking Through Caves",
                        "category": "Adrenaline Adventure",
                        "badge": "\ud83c\udfcd\ufe0f Mud & Cave Tracks",
                        "desc": "Ride all-terrain 250cc quads through muddy rice paddies, bamboo forests, and underground tunnels.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Ubud+ATV+Ride+Bali"
            },
            {
                        "name": "Laughing Buddha Bar",
                        "category": "Live Music",
                        "badge": "\ud83c\udfb7 Live Jazz & Blues",
                        "desc": "Vibrant live jazz, funk, and Latin blues every single night with signature mojitos.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Laughing+Buddha+Bar+Ubud"
            }
],
          tips: "Wear sarongs (provided at temple gate) for Tirta Empul. Bring dry clothes if cleansing."
        },
        {
          dayNum: 9,
          date: "Sat, Dec 26, 2026",
          location: "Ubud",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Campuhan+Ridge+Walk+Kanto+Lampo+Waterfall+Tibumana+Waterfall+Ubud",
          attractions: [
            { name: "Campuhan Ridge Walk", url: "https://www.google.com/maps/search/?api=1&query=Campuhan+Ridge+Walk+Ubud" },
            { name: "Kanto Lampo Waterfall", url: "https://www.google.com/maps/search/?api=1&query=Kanto+Lampo+Waterfall+Bali" },
            { name: "Tibumana Waterfall", url: "https://www.google.com/maps/search/?api=1&query=Tibumana+Waterfall+Bali" },
            { name: "Ubud Traditional Art Market", url: "https://www.google.com/maps/search/?api=1&query=Ubud+Art+Market+Bali" }
          ],
          title: "Campuhan Ridge Walk, Waterfalls & Luxury Flower Bath",
          vibe: "Jungle Waterfalls & Balinese Wellness",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
              caption: "Cascading rock tiers of tropical jungle waterfall"
            },
            {
              url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
              caption: "Campuhan Ridge walking trail flanked by river palm valleys"
            },
            {
              url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
              caption: "Luxury Balinese flower bath with fresh frangipani petals"
            }
          ],
          schedule: [
            { time: "08:00 AM - 10:00 AM", activity: "Campuhan Ridge Morning Walk", details: "Breezy scenic trail flanked by river valleys and lush palm slopes." },
            { time: "10:30 AM - 01:00 PM", activity: "Tibumana & Kanto Lampo Waterfalls", details: "Swim in the rainforest pool at Tibumana and stand under rock cascade at Kanto Lampo." },
            { time: "01:30 PM - 03:30 PM", activity: "Ubud Art Market & Souvenirs", details: "Pick up hand-carved woodwork, batik prints, woven bags, and vanilla beans." },
            { time: "04:00 PM - 06:00 PM", activity: "Luxury Spa & Flower Bath Session", details: "Herbal body scrub, warm aromatic oils, and a petal-filled copper bath." },
            { time: "07:00 PM - 09:30 PM", activity: "Farewell Feast & Legong Dance", details: "Traditional multi-course Balinese banquet with live Legong cultural performance." }
          ],
          alternatives: [
            {
                        "name": "Pyramids of Chi Sound Healing",
                        "category": "Spiritual Wellness",
                        "badge": "\ud83e\uddd8 Ancient Gong Bath",
                        "desc": "Multi-frequency sound healing with 16 massive acoustic gongs inside scale-built pyramid chambers.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Pyramids+of+Chi+Ubud"
            },
            {
                        "name": "The Yoga Barn Ecstatic Dance",
                        "category": "Community Vibe",
                        "badge": "\ud83d\udc83 Ecstatic Dance",
                        "desc": "World-famous conscious dance session beneath soaring bamboo yoga pavilions.",
                        "url": "https://www.google.com/maps/search/?api=1&query=The+Yoga+Barn+Ubud"
            },
            {
                        "name": "Ubud Traditional Spa & Herbal Scrubs",
                        "category": "Wellness",
                        "badge": "\ud83c\udf38 2-Hour Royal Scrub",
                        "desc": "Ancient 4-hand Balinese massage with warm coconut oils and fresh floral petal bath.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Ubud+Traditional+Spa"
            }
],
          tips: "Water shoes with rubber grips are super handy when stepping over the rocks at Kanto Lampo."
        },
        {
          dayNum: 10,
          date: "Sun, Dec 27, 2026",
          location: "DPS Airport to Bengaluru",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Ngurah+Rai+International+Airport+Bali",
          attractions: [
            { name: "Ngurah Rai International Airport (DPS)", url: "https://www.google.com/maps/search/?api=1&query=Ngurah+Rai+International+Airport+Bali" },
            { name: "Kempegowda International Airport BLR T2", url: "https://www.google.com/maps/search/?api=1&query=Kempegowda+International+Airport+Bengaluru+Terminal+2" }
          ],
          title: "Safe Journey Home to Bengaluru",
          vibe: "Departure & Memories",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
              caption: "IndiGo 6E 1606 non-stop return flight to Bengaluru T2"
            }
          ],
          schedule: [
            { time: "06:15 AM - 08:00 AM", activity: "Checkout & Drive to DPS Airport", details: "Early private van transfer to beat south Bali morning bottleneck traffic." },
            { time: "08:15 AM - 11:15 AM", activity: "Airport Check-in & Security", details: "Drop 20kg check-in bags, clear exit immigration, duty-free shopping." },
            { time: "11:15 AM - 03:15 PM", activity: "Flight: DPS to BLR (IndiGo 6E 1606)", details: "Non-stop 6h 30m flight, touching down in Bengaluru T2 at 15:15 IST." }
          ],
          alternatives: [
            {
                        "name": "DPS Duty Free & Lounge",
                        "category": "Airport",
                        "badge": "\ud83d\udecd\ufe0f Tax-Free Shopping",
                        "desc": "Browse Balinese cocoa, Luwak coffee, local silver jewelry and international boutiques.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Ngurah+Rai+Airport+Duty+Free"
            }
],
          tips: "Arriving by 08:15 AM gives 3 hours before takeoff, ensuring zero stress at security counters."
        }
      ]
    },

    opt3: {
      id: "opt3",
      name: "Option 3: Reef, Culture & Coast Loop",
      shortName: "Amed & Culture Loop",
      tagline: "Black sand beaches, WWII shipwreck diving, water palaces & zero monsoon boat risks",
      badge: "Reef, Shipwrecks & Zen",
      color: "#10b981",
      stayBreakdown: "Seminyak (3N) → Amed (2N) → Ubud (4N)",
      highlights: [
        "Nusa Penida day trip without dragging luggage",
        "Scenic coastal road journey with Mount Agung panoramas (100% road-based, no rough sea crossings!)",
        "Snorkel the famous 120m USAT Liberty WWII shipwreck directly off the beach",
        "Royal Water Palace of Tirta Gangga with koi stepping stones",
        "Extra 4th night in Ubud with authentic Balinese cooking class"
      ],
      tradeoffs: [
        "No party island / Gili T vibe",
        "Black volcanic sand beaches instead of white powdered coral sand",
        "Quieter, laid-back evenings in Amed (warungs & acoustic music rather than clubs)"
      ],
      days: [
        {
          dayNum: 1,
          date: "Fri, Dec 18, 2026",
          location: "Seminyak",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Potato+Head+Beach+Club+Ku+De+Ta+Seminyak+Beach+Bali",
          attractions: [
            { name: "Potato Head Beach Club", url: "https://www.google.com/maps/search/?api=1&query=Potato+Head+Beach+Club+Seminyak+Bali" },
            { name: "Seminyak Beach", url: "https://www.google.com/maps/search/?api=1&query=Seminyak+Beach+Bali" },
            { name: "Eat Street (Jalan Kayu Aya)", url: "https://www.google.com/maps/search/?api=1&query=Jalan+Kayu+Aya+Seminyak+Bali" }
          ],
          title: "Touchdown Bali & Sunset Beach Club Unwind",
          vibe: "Arrival & Coastal Lifestyle",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
              caption: "Potato Head Beach Club sunset amphitheater & daybeds"
            },
            {
              url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
              caption: "Golden hour sunset over Seminyak beach waves"
            }
          ],
          schedule: [
            { time: "10:15 AM - 12:00 PM", activity: "Arrival & Immigration at DPS Airport", details: "Land on 6E 1605. Clear e-VoA counter, collect baggage, scan customs QR." },
            { time: "12:00 PM - 01:30 PM", activity: "Private Transfer to Seminyak", details: "Pre-booked private AC van for the 5 friends (~40 mins drive)." },
            { time: "01:30 PM - 03:30 PM", activity: "Check-in & Rest", details: "Drop bags, shower, and rest after the overnight flight." },
            { time: "04:30 PM - 07:30 PM", activity: "Sunset Drinks at Potato Head Beach Club", details: "Amphitheater lawn seats overlooking the surf, signature cocktails." },
            { time: "08:00 PM - 10:00 PM", activity: "Welcome Group Dinner", details: "Dine along Jalan Kayu Aya (Eat Street) at an upscale Indonesian eatery." }
          ],
          alternatives: [
            {
                        "name": "La Favela Bali",
                        "category": "Nightlife & Dancing",
                        "badge": "\ud83d\udd25 Wild Multi-Floor Club",
                        "desc": "Legendary jungle-themed retro disco & hip-hop institution. Secret courtyards and wild parties till 3 AM.",
                        "url": "https://www.google.com/maps/search/?api=1&query=La+Favela+Seminyak+Bali"
            },
            {
                        "name": "Motel Mexicola",
                        "category": "Fiesta Dining",
                        "badge": "\ud83c\udf89 Dancing on Tables",
                        "desc": "High-energy retro Mexican cantina where dining turns into dancing on tables with tequila shots & throwback anthems.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Motel+Mexicola+Seminyak+Bali"
            },
            {
                        "name": "Finns Beach Club (Canggu)",
                        "category": "Day & Night Club",
                        "badge": "\ud83c\udfd6\ufe0f Mega Beach Club",
                        "desc": "15 mins away: 4 oceanfront pools, 9 bars, international festival DJs, and daybeds.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Finns+Beach+Club+Bali"
            }
],
          tips: "Identical to Option 2: smooth, relaxing start in vibrant South Bali."
        },
        {
          dayNum: 2,
          date: "Sat, Dec 19, 2026",
          location: "Seminyak",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Ku+De+Ta+Seminyak+Village+Petitenget+Beach+Bali",
          attractions: [
            { name: "Ku De Ta Sunset Lounge", url: "https://www.google.com/maps/search/?api=1&query=Ku+De+Ta+Seminyak+Bali" },
            { name: "Seminyak Village Boutiques", url: "https://www.google.com/maps/search/?api=1&query=Seminyak+Village+Bali" },
            { name: "Petitenget Beach", url: "https://www.google.com/maps/search/?api=1&query=Petitenget+Beach+Seminyak+Bali" }
          ],
          title: "Seminyak Surf, Boutiques & Ku De Ta Sunset",
          vibe: "Lifestyle, Surf & Spa",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
              caption: "Seminyak surfing waves and beach loungers"
            },
            {
              url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
              caption: "Sunset cocktails on Petitenget beachfront"
            }
          ],
          schedule: [
            { time: "08:30 AM - 10:30 AM", activity: "Cafe Breakfast & Specialty Coffee", details: "Healthy brunch in central Seminyak." },
            { time: "10:30 AM - 01:00 PM", activity: "Surf Lesson / Beachside Loungers", details: "Catch rolling waves with certified instructors on Seminyak beach." },
            { time: "01:00 PM - 03:30 PM", activity: "Boutique Shopping & Balinese Spa", details: "Explore boutiques and enjoy a relaxing 60-min massage." },
            { time: "05:00 PM - 07:30 PM", activity: "Sunset Session at Ku De Ta", details: "Loungers, chilled house beats, and iconic Bali sunset." },
            { time: "08:00 PM - 10:00 PM", activity: "Dinner in Petitenget", details: "Group feast and early rest for tomorrow's boat excursion." }
          ],
          alternatives: [
            {
                        "name": "ShiShi Nightclub & Rooftop",
                        "category": "Club & Rooftop",
                        "badge": "\ud83c\udf78 House/Techno & Izakaya",
                        "desc": "3-story venue featuring Japanese Izakaya dining, neon light tunnels, and an electric rooftop party.",
                        "url": "https://www.google.com/maps/search/?api=1&query=ShiShi+Nightclub+Izakaya+Seminyak"
            },
            {
                        "name": "Woobar at W Bali",
                        "category": "Sunset Lounge",
                        "badge": "\ud83c\udfa7 Chic Sunset Beats",
                        "desc": "Beachfront deck & underground cocktail lounge with international guest DJs and signature martinis.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Woobar+Bali+Seminyak"
            },
            {
                        "name": "La Plancha (Double Six)",
                        "category": "Casual Beach Bar",
                        "badge": "\ud83c\udf79 Colorful Beanbags",
                        "desc": "Chilled sunset spot on the sand with vibrant parasols, beanbags, Spanish sangria, and grilled tapas.",
                        "url": "https://www.google.com/maps/search/?api=1&query=La+Plancha+Bali"
            }
],
          tips: "Keep your luggage fully unpacked in your Seminyak room."
        },
        {
          dayNum: 3,
          date: "Sun, Dec 20, 2026",
          location: "Nusa Penida",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Kelingking+Beach+Broken+Beach+Angels+Billabong+Crystal+Bay+Nusa+Penida",
          attractions: [
            { name: "Kelingking Beach (T-Rex Cliff)", url: "https://www.google.com/maps/search/?api=1&query=Kelingking+Beach+Nusa+Penida" },
            { name: "Broken Beach (Pasih Uug)", url: "https://www.google.com/maps/search/?api=1&query=Broken+Beach+Nusa+Penida" },
            { name: "Angel's Billabong", url: "https://www.google.com/maps/search/?api=1&query=Angels+Billabong+Nusa+Penida" },
            { name: "Crystal Bay Snorkeling", url: "https://www.google.com/maps/search/?api=1&query=Crystal+Bay+Nusa+Penida" }
          ],
          title: "Epic Nusa Penida Day Trip: Kelingking & Broken Beach",
          vibe: "Dramatic Cliffs & Turquoise Bays (Zero Luggage Hassle)",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1534131197842-bafa0b820f91?auto=format&fit=crop&w=1200&q=80",
              caption: "Jaw-dropping T-Rex headland viewpoint at Kelingking"
            },
            {
              url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
              caption: "Broken Beach natural limestone ocean arch and azure sea"
            },
            {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
              caption: "Crystal Bay calm turquoise snorkeling waters & palms"
            }
          ],
          schedule: [
            { time: "06:30 AM - 07:15 AM", activity: "Drive to Sanur Port", details: "35-min transfer from Seminyak. All main luggage stays locked in Seminyak!" },
            { time: "07:30 AM - 08:30 AM", activity: "Fast Boat to Nusa Penida", details: "45-min catamaran crossing." },
            { time: "09:00 AM - 11:30 AM", activity: "Kelingking Beach Viewpoint", details: "Jaw-dropping panoramic views of the T-Rex cliff and azure waves." },
            { time: "12:00 PM - 01:30 PM", activity: "Broken Beach & Angel's Billabong", details: "Limestone arch and tidal pool photography." },
            { time: "02:00 PM - 03:30 PM", activity: "Snorkeling at Crystal Bay", details: "Snorkel with colorful reef fish in the calm bay." },
            { time: "04:30 PM - 05:30 PM", activity: "Fast Boat back to Sanur Port", details: "Return boat to Bali mainland." },
            { time: "05:30 PM - 06:45 PM", activity: "Return to Seminyak Hotel", details: "Back in our comfortable hotel with zero check-in hassle. Dinner at leisure." }
          ],
          alternatives: [
            {
                        "name": "Manta Point Snorkeling Detour",
                        "category": "Marine Adventure",
                        "badge": "\ud83e\udd3f Giant Manta Rays",
                        "desc": "Detour to Penida southern cliffs to snorkel with massive 3-meter oceanic manta rays.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Manta+Point+Nusa+Penida"
            },
            {
                        "name": "Diamond Beach & Atuh Beach",
                        "category": "East Coast Highlights",
                        "badge": "\ud83d\udc8e White Cliff Staircase",
                        "desc": "Dramatic needle rock formations and the famous cliff-carved staircase on Penida East Coast.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Nusa+Penida"
            },
            {
                        "name": "Amok Sunset Lounge",
                        "category": "Cliffside Drinks",
                        "badge": "\ud83c\udf79 Treehouse Nests",
                        "desc": "Cliffside sunset restaurant with private bamboo treehouse nests overlooking Mount Agung.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Amok+Sunset+Nusa+Penida"
            }
],
          tips: "No bags packed, no luggage hauling. Returning to Seminyak ensures a restful night."
        },
        {
          dayNum: 4,
          date: "Mon, Dec 21, 2026",
          location: "Amed",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Amed+Beach+Lipah+Beach+Mount+Agung+Viewpoint+Bali",
          attractions: [
            { name: "Amed Black Sand Beach", url: "https://www.google.com/maps/search/?api=1&query=Amed+Beach+Bali" },
            { name: "Mount Agung Sunset Viewpoint", url: "https://www.google.com/maps/search/?api=1&query=Mount+Agung+Viewpoint+Amed+Bali" },
            { name: "Lipah Beach Snorkeling Bay", url: "https://www.google.com/maps/search/?api=1&query=Lipah+Beach+Amed+Bali" }
          ],
          title: "Scenic Coastal Drive to Amed & Mount Agung Sunset",
          vibe: "Road Trip Panoramas, Black Sand & Sacred Volcano",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
              caption: "Majestic Mount Agung towering behind Amed's coastline"
            },
            {
              url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80",
              caption: "Volcanic black sands and traditional outrigger wooden boats"
            }
          ],
          schedule: [
            { time: "09:30 AM - 10:00 AM", activity: "Check out of Seminyak Hotel", details: "Relaxed morning check-out. Luggage loaded into private AC van." },
            { time: "10:00 AM - 01:00 PM", activity: "Scenic Drive to Amed", details: "Comfortable highway & coastal road trip (2.5 to 3 hrs) with zero boat delays!" },
            { time: "01:00 PM - 02:30 PM", activity: "Check-in to Amed Beach Resort & Lunch", details: "Check into beachfront resort; enjoy grilled fish with black sand views." },
            { time: "03:30 PM - 05:30 PM", activity: "Afternoon Beach Walk & Swim", details: "Unwind on the volcanic shore with gentle waves and zero crowds." },
            { time: "05:30 PM - 07:00 PM", activity: "Sunset Drinks with Mount Agung View", details: "Watch the sun dip behind Bali's highest sacred volcano from a cliff cafe." },
            { time: "07:30 PM - 09:30 PM", activity: "Fresh Catch Warung Dinner", details: "Traditional grilled mahi-mahi and Balinese spiced curries right by the water." }
          ],
          alternatives: [
            {
                        "name": "Amed Sunset Point",
                        "category": "Sunset Drinks",
                        "badge": "\ud83c\udf0b Agung Infinity Pool",
                        "desc": "Cliffside infinity pool with cold Bintangs and unmatched Mount Agung panoramic sunset.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Amed+Sunset+Point+Bali"
            },
            {
                        "name": "Sailors Bar Amed",
                        "category": "Live Music",
                        "badge": "\ud83c\udfb8 Acoustic Rock",
                        "desc": "Laid-back beachfront bar with live classic rock & blues overlooking black volcanic sand bay.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Sailors+Bar+Amed+Bali"
            },
            {
                        "name": "Warung Bobo Acoustic Jams",
                        "category": "Beach Hangout",
                        "badge": "\ud83d\udd25 Beachside Bonfire",
                        "desc": "Casual beachfront warung with live acoustic guitar, beach bonfire, and fresh mahi-mahi.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Warung+Bobo+Amed"
            }
],
          tips: "Monsoon-proof day: traveling by air-conditioned van avoids all ocean swell disruptions!"
        },
        {
          dayNum: 5,
          date: "Tue, Dec 22, 2026",
          location: "Tulamben & Amed",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=USAT+Liberty+Shipwreck+Tulamben+Japanese+Shipwreck+Banyuning+Bali",
          attractions: [
            { name: "USAT Liberty WWII Shipwreck", url: "https://www.google.com/maps/search/?api=1&query=USAT+Liberty+Shipwreck+Tulamben+Bali" },
            { name: "Japanese Shipwreck (Banyuning)", url: "https://www.google.com/maps/search/?api=1&query=Japanese+Shipwreck+Amed+Bali" },
            { name: "Jukung Sunset Sailing Headland", url: "https://www.google.com/maps/search/?api=1&query=Jukung+Boat+Amed+Bali" }
          ],
          title: "WWII USAT Liberty Shipwreck Diving & Jukung Sunset",
          vibe: "World-Class Shipwreck Diving & Traditional Outrigger Boat",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=80",
              caption: "Snorkeling the coral-encrusted USAT Liberty WWII shipwreck"
            },
            {
              url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80",
              caption: "Hundreds of colorful tropical reef fish swimming around the hull"
            },
            {
              url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80",
              caption: "Traditional wooden Jukung sailing boats lined along the bay"
            }
          ],
          schedule: [
            { time: "08:00 AM - 11:30 AM", activity: "Snorkel / Dive USAT Liberty Shipwreck", details: "Swim right from the beach into the 120-meter coral wreck teeming with marine life." },
            { time: "12:00 PM - 01:30 PM", activity: "Lunch in Tulamben Bay", details: "Fresh Indonesian lunch overlooking the tranquil diving cove." },
            { time: "02:30 PM - 04:30 PM", activity: "Japanese Shipwreck Snorkeling at Banyuning", details: "Shallow, vibrant coral garden with hundreds of reef fish." },
            { time: "05:30 PM - 07:30 PM", activity: "Sunset Sail on Traditional Jukung Boat", details: "Private wooden outrigger sail along Amed's headlands in golden hour." },
            { time: "08:00 PM - 10:00 PM", activity: "Dinner & Stargazing", details: "Tranquil open-air dinner under pristine, low-light night skies." }
          ],
          alternatives: [
            {
                        "name": "Apnea Bali Freediving Intro",
                        "category": "Adventure",
                        "badge": "\ud83c\udf0a 1-Day Freedive Trial",
                        "desc": "Learn breath-hold techniques and dive to 10-15m on a single breath in calm, current-free water.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Apnea+Bali+Freediving+Amed"
            },
            {
                        "name": "Jemeluk Viewpoint Cafe",
                        "category": "Sunset Cafe",
                        "badge": "\ud83c\udf05 Bay Panorama",
                        "desc": "Cliffside cafe with aerial views across Jemeluk coral bay as the sun dips behind Bali volcano.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Jemeluk+Viewpoint+Amed"
            },
            {
                        "name": "Lipah Bay Coral Snorkeling",
                        "category": "Snorkeling",
                        "badge": "\ud83d\udc20 Shallow Coral Gardens",
                        "desc": "Tranquil bay with healthy table corals starting just 5 meters from the black sand shore.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Lipah+Beach+Amed"
            }
],
          tips: "The USAT Liberty wreck sits in just 5 to 30 meters of water: fantastic even for snorkelers!"
        },
        {
          dayNum: 6,
          date: "Wed, Dec 23, 2026",
          location: "Ubud",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Tirta+Gangga+Water+Palace+Karangasem+Jalan+Raya+Ubud+Bali",
          attractions: [
            { name: "Tirta Gangga Water Palace", url: "https://www.google.com/maps/search/?api=1&query=Tirta+Gangga+Water+Palace+Bali" },
            { name: "Karangasem Rice Terraces", url: "https://www.google.com/maps/search/?api=1&query=Karangasem+Rice+Terrace+Bali" },
            { name: "Central Ubud Art Street", url: "https://www.google.com/maps/search/?api=1&query=Jalan+Raya+Ubud+Bali" }
          ],
          title: "Tirta Gangga Royal Water Palace & Highlands Entry",
          vibe: "Royal Heritage, Stepping Stones & Ubud Check-in",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80",
              caption: "Stepping stones across sacred koi ponds at Tirta Gangga"
            },
            {
              url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
              caption: "Lush cascading rice terraces of eastern Bali"
            }
          ],
          schedule: [
            { time: "09:30 AM - 10:30 AM", activity: "Checkout Amed & Depart by Van", details: "Private driver transfer toward the central mountains." },
            { time: "11:00 AM - 12:30 PM", activity: "Visit Tirta Gangga Water Palace", details: "Step on stone pavers over clear natural spring pools filled with giant golden koi." },
            { time: "01:00 PM - 02:30 PM", activity: "Lunch with Karangasem Valley Views", details: "Terrace restaurant overlooking lush rice hills." },
            { time: "02:30 PM - 04:00 PM", activity: "Arrive in Ubud (4 Nights Base!)", details: "Check in to Ubud resort. Settle into our 4-night highland haven." },
            { time: "05:00 PM - 07:00 PM", activity: "Explore Central Ubud", details: "Stroll Jalan Raya Ubud, art galleries, and craft boutiques." },
            { time: "07:30 PM - 09:30 PM", activity: "Farm-to-Table Dinner in Ubud", details: "Organic Balinese dishes in an open-air bamboo pavilion." }
          ],
          alternatives: [
            {
                        "name": "Lempuyang Temple (Gates of Heaven)",
                        "category": "Cultural Detour",
                        "badge": "\u26e9\ufe0f Sacred Mirror Gate",
                        "desc": "Famed temple gate framing Mount Agung in Karangasem (best done early morning).",
                        "url": "https://www.google.com/maps/search/?api=1&query=Lempuyang+Temple+Bali"
            },
            {
                        "name": "Taman Ujung Water Palace",
                        "category": "Heritage",
                        "badge": "\ud83c\udff0 Coastal Royal Palace",
                        "desc": "Vast royal water park with European-Balinese bridges, pools, and ocean views.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Taman+Ujung+Karangasem+Bali"
            },
            {
                        "name": "CP Lounge Ubud",
                        "category": "Late Night Nightlife",
                        "badge": "\ud83c\udf89 Open Till 3 AM",
                        "desc": "Arrive in Ubud and head to CP Lounge: live salsa & rock bands, open-air dancefloor.",
                        "url": "https://www.google.com/maps/search/?api=1&query=CP+Lounge+Ubud+Bali"
            }
],
          tips: "Buy fish food pellets at the Tirta Gangga entrance: the giant koi swarm around your feet!"
        },
        {
          dayNum: 7,
          date: "Thu, Dec 24, 2026",
          location: "Ubud",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Sacred+Monkey+Forest+Sanctuary+Tegallalang+Rice+Terrace+Campuhan+Ridge+Walk+Ubud",
          attractions: [
            { name: "Sacred Monkey Forest Sanctuary", url: "https://www.google.com/maps/search/?api=1&query=Sacred+Monkey+Forest+Sanctuary+Ubud" },
            { name: "Tegallalang Rice Terrace & Swing", url: "https://www.google.com/maps/search/?api=1&query=Tegallalang+Rice+Terrace+Ubud" },
            { name: "Campuhan Ridge Walk", url: "https://www.google.com/maps/search/?api=1&query=Campuhan+Ridge+Walk+Ubud" }
          ],
          title: "Monkey Forest, Rice Terraces & Christmas Eve in Ubud",
          vibe: "Culture, Terraces & Festive Jungle Dining",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80",
              caption: "Playful macaques in Sacred Monkey Forest"
            },
            {
              url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
              caption: "Lush green tiers of Tegallalang Rice Terrace"
            },
            {
              url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
              caption: "Campuhan Ridge sunset panoramic walk"
            }
          ],
          schedule: [
            { time: "08:30 AM - 10:30 AM", activity: "Sacred Monkey Forest Sanctuary", details: "Explore sacred mossy temples and observe wild macaques in the canopy." },
            { time: "11:00 AM - 01:30 PM", activity: "Tegallalang Rice Terrace & Jungle Swing", details: "Trek the terraces and snap photos on high valley swings." },
            { time: "02:00 PM - 03:30 PM", activity: "Artisan Coffee Tasting & Lunch", details: "Taste local Luwak coffee and herbal infusions overlooking the jungle." },
            { time: "04:30 PM - 06:30 PM", activity: "Campuhan Ridge Sunset Walk", details: "Gentle hilltop stroll with cool mountain breezes between river valleys." },
            { time: "07:30 PM - 09:30 PM", activity: "Christmas Eve Dinner in Ubud", details: "Festive celebration in an illuminated jungle valley setting." }
          ],
          alternatives: [
            {
                        "name": "The Blue Door Speakeasy",
                        "category": "Speakeasy Club",
                        "badge": "\ud83c\udf78 Secret London Phone Booth",
                        "desc": "Secret club hidden behind a vintage red phone booth: live rock band in front, underground DJ club inside.",
                        "url": "https://www.google.com/maps/search/?api=1&query=The+Blue+Door+Ubud+Bali"
            },
            {
                        "name": "No M\u00e1s Bar",
                        "category": "Craft Cocktails",
                        "badge": "\ud83c\udfa7 Indie DJs & Vinyl",
                        "desc": "Chic second-floor cocktail hangout above Folk Pool & Gardens with craft drinks and vinyl sets.",
                        "url": "https://www.google.com/maps/search/?api=1&query=No+Mas+Bar+Ubud+Bali"
            },
            {
                        "name": "Laughing Buddha Bar",
                        "category": "Live Music",
                        "badge": "\ud83c\udfb7 Live Jazz & Blues",
                        "desc": "Vibrant live jazz, funk, and Latin blues every single night with signature mojitos.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Laughing+Buddha+Bar+Ubud"
            }
],
          tips: "Keep sunglasses and shiny jewelry tucked in bags at Monkey Forest."
        },
        {
          dayNum: 8,
          date: "Fri, Dec 25, 2026",
          location: "Ubud & Gianyar",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Tirta+Empul+Temple+Tukad+Cepung+Waterfall+Kanto+Lampo+Waterfall+Bali",
          attractions: [
            { name: "Tirta Empul Holy Water Temple", url: "https://www.google.com/maps/search/?api=1&query=Tirta+Empul+Temple+Bali" },
            { name: "Tukad Cepung Cave Waterfall", url: "https://www.google.com/maps/search/?api=1&query=Tukad+Cepung+Waterfall+Bali" },
            { name: "Kanto Lampo Stepped Waterfall", url: "https://www.google.com/maps/search/?api=1&query=Kanto+Lampo+Waterfall+Bali" }
          ],
          title: "Holy Water Melukat Cleansing & Hidden Cave Waterfalls",
          vibe: "Spiritual Purification & Jungle Falls",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=1200&q=80",
              caption: "Tirta Empul holy spring water cleansing ritual"
            },
            {
              url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
              caption: "Sunlit cave waterfall pouring into rock pool"
            }
          ],
          schedule: [
            { time: "08:30 AM - 10:30 AM", activity: "Tirta Empul Holy Water Temple", details: "Participate in the ancient Melukat cleansing ritual under the 11 sacred spouts." },
            { time: "11:00 AM - 01:00 PM", activity: "Tukad Cepung Cave Waterfall", details: "Walk inside a sunlit cavern where water pours through a rocky fissure." },
            { time: "01:30 PM - 03:00 PM", activity: "Riverside Balinese Lunch", details: "Relaxed lunch along the Ayung riverbank." },
            { time: "03:30 PM - 05:30 PM", activity: "Kanto Lampo Waterfall", details: "Swim in the natural pool and snap tiered cascade photos." },
            { time: "07:00 PM - 09:30 PM", activity: "Christmas Holiday Dinner", details: "Celebratory group dinner at a fine-dining restaurant in Ubud." }
          ],
          alternatives: [
            {
                        "name": "Ayung River White Water Rafting",
                        "category": "Jungle Adventure",
                        "badge": "\ud83d\udea3 12km Jungle Rapids",
                        "desc": "Class II-III rafting through jungle gorges, stone carved cliffs, and river waterfalls.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Ayung+River+Rafting+Ubud"
            },
            {
                        "name": "ATV Quad Biking Through Caves",
                        "category": "Adrenaline Adventure",
                        "badge": "\ud83c\udfcd\ufe0f Mud & Cave Tracks",
                        "desc": "Ride all-terrain 250cc quads through muddy rice paddies, bamboo forests, and underground tunnels.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Ubud+ATV+Ride+Bali"
            },
            {
                        "name": "CP Lounge Ubud",
                        "category": "Late Night",
                        "badge": "\ud83c\udf89 Christmas Night Dance",
                        "desc": "Late-night Christmas party with live band and festive cocktails.",
                        "url": "https://www.google.com/maps/search/?api=1&query=CP+Lounge+Ubud+Bali"
            }
],
          tips: "Bring swimsuits and dry towels. The cave waterfall lighting is best around midday!"
        },
        {
          dayNum: 9,
          date: "Sat, Dec 26, 2026",
          location: "Ubud",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Ubud+Art+Market+Celuk+Village+Mas+Woodcarving+Village+Bali",
          attractions: [
            { name: "Authentic Balinese Cooking Class", url: "https://www.google.com/maps/search/?api=1&query=Balinese+Cooking+Class+Ubud+Bali" },
            { name: "Celuk Silver & Mas Woodcarving", url: "https://www.google.com/maps/search/?api=1&query=Celuk+Village+Bali" },
            { name: "Balinese Luxury Flower Bath Spa", url: "https://www.google.com/maps/search/?api=1&query=Luxury+Spa+Ubud+Bali" }
          ],
          title: "Authentic Balinese Cooking Class, Art & Floral Spa",
          vibe: "Hands-on Culinary, Artisans & Full Wellness",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
              caption: "Relaxing floral petal bath at an Ubud jungle spa"
            },
            {
              url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
              caption: "Balinese organic herbs, turmeric, lemongrass and spice grinding"
            }
          ],
          schedule: [
            { time: "08:30 AM - 12:30 PM", activity: "Authentic Balinese Cooking Class", details: "Tour organic herb gardens, grind traditional bumbu spice pastes, cook 5 courses." },
            { time: "01:00 PM - 03:00 PM", activity: "Celuk Silver & Mas Woodcarving", details: "Visit artisan craft villages and shop directly with local master silversmiths." },
            { time: "03:30 PM - 06:00 PM", activity: "Balinese Deep Tissue Massage & Flower Bath", details: "90-minute full body massage followed by a fragrant flower petal bath." },
            { time: "07:00 PM - 09:30 PM", activity: "Grand Farewell Feast with Gamelan Music", details: "Final trip dinner featuring suckling pig (Babi Guling) or crispy duck with live music." }
          ],
          alternatives: [
            {
                        "name": "Pyramids of Chi Sound Healing",
                        "category": "Spiritual Wellness",
                        "badge": "\ud83e\uddd8 Ancient Gong Bath",
                        "desc": "Multi-frequency sound healing with 16 massive acoustic gongs inside scale-built pyramid chambers.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Pyramids+of+Chi+Ubud"
            },
            {
                        "name": "The Yoga Barn Ecstatic Dance",
                        "category": "Community Vibe",
                        "badge": "\ud83d\udc83 Ecstatic Dance",
                        "desc": "World-famous conscious dance session beneath soaring bamboo yoga pavilions.",
                        "url": "https://www.google.com/maps/search/?api=1&query=The+Yoga+Barn+Ubud"
            },
            {
                        "name": "Ubud Traditional Spa & Herbal Scrubs",
                        "category": "Wellness",
                        "badge": "\ud83c\udf38 2-Hour Royal Scrub",
                        "desc": "Ancient 4-hand Balinese massage with warm coconut oils and fresh floral petal bath.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Ubud+Traditional+Spa"
            }
],
          tips: "A relaxing final full day with no transit pressure before our flight tomorrow."
        },
        {
          dayNum: 10,
          date: "Sun, Dec 27, 2026",
          location: "DPS Airport to Bengaluru",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Ngurah+Rai+International+Airport+Bali",
          attractions: [
            { name: "Ngurah Rai International Airport (DPS)", url: "https://www.google.com/maps/search/?api=1&query=Ngurah+Rai+International+Airport+Bali" },
            { name: "Kempegowda International Airport BLR T2", url: "https://www.google.com/maps/search/?api=1&query=Kempegowda+International+Airport+Bengaluru+Terminal+2" }
          ],
          title: "Safe Journey Home to Bengaluru",
          vibe: "Departure & Memories",
          photos: [
            {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
              caption: "IndiGo 6E 1606 direct flight back to Bengaluru"
            }
          ],
          schedule: [
            { time: "06:15 AM - 08:00 AM", activity: "Checkout & Drive to DPS Airport", details: "Early private transfer from Ubud to DPS to bypass south Bali morning traffic." },
            { time: "08:15 AM - 11:15 AM", activity: "Airport Check-in & Security", details: "Drop check-in baggage, clear customs and immigration, duty free." },
            { time: "11:15 AM - 03:15 PM", activity: "Flight: DPS to BLR (IndiGo 6E 1606)", details: "Non-stop 6h 30m flight, landing in Bengaluru T2 at 15:15 IST." }
          ],
          alternatives: [
            {
                        "name": "DPS Duty Free & Lounge",
                        "category": "Airport",
                        "badge": "\ud83d\udecd\ufe0f Tax-Free Shopping",
                        "desc": "Browse Balinese cocoa, Luwak coffee, local silver jewelry and international boutiques.",
                        "url": "https://www.google.com/maps/search/?api=1&query=Ngurah+Rai+Airport+Duty+Free"
            }
],
          tips: "Ubud to airport is ~1h 30m at 06:15 AM, giving comfortable buffer for international check-in."
        }
      ]
    }
  },

  comparisonMatrix: [
    {
      category: "Island Hopping vs. Road Loop",
      opt2: "Speedboat across Lombok Strait (2.5h) to Gili Trawangan",
      opt3: "Scenic air-conditioned road drive (2.5h) along East Coast to Amed",
      winner: "opt3 for motion sensitivity; opt2 for remote island feeling"
    },
    {
      category: "Snorkeling & Marine Life",
      opt2: "Wild Green & Hawksbill sea turtles at Turtle Point (boat tour)",
      opt3: "WWII USAT Liberty Shipwreck & Japanese wreck (snorkel from beach)",
      winner: "Tie (Turtles vs. Historic Coral Wreck)"
    },
    {
      category: "Monsoon Sea Weather Risk",
      opt2: "Moderate-High (December Lombok Strait swells can delay fast boats)",
      opt3: "Near Zero (100% overland van transport between mainland hubs)",
      winner: "Option 3 is weather-bulletproof"
    },
    {
      category: "Island Atmosphere",
      opt2: "Car-free party & beach bar vibe, bicycles, sunset swings",
      opt3: "Serene, black volcanic sand, Mount Agung backdrop, quiet warungs",
      winner: "Option 2 for high energy; Option 3 for chill Zen"
    },
    {
      category: "Luggage Friction",
      opt2: "Horse carts / bicycles over sandy paths on Gili T (low-moderate)",
      opt3: "Private AC van door-to-door for all mainland hotel transfers (zero)",
      winner: "Option 3 is easier with 20kg bags"
    },
    {
      category: "Ubud Immersion",
      opt2: "3 Nights (Packed with Monkey Forest, Rice Terraces, Waterfalls)",
      opt3: "4 Nights (More relaxed, adds Balinese Cooking Class & Craft Villages)",
      winner: "Option 3 allows deeper cultural immersion"
    }
  ],

  masterScheduleTable: [
    {
      dayNum: 1,
      date: "Fri, 18 Dec 2026",
      divergence: false,
      tag: "South Bali Base",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Potato+Head+Beach+Club+Ku+De+Ta+Seminyak+Beach+Bali",
      opt2Transit: "Entry: DPS Airport landing 10:15 AM → Check in Seminyak (13:30 PM).",
      opt2Activity: "Drop bags, rest after red-eye 6E 1605, sunset drinks at Potato Head Beach Club, Eat Street welcome dinner.",
      opt2Stay: "Seminyak (Night 1/3)",
      opt3Transit: "Entry: DPS Airport landing 10:15 AM → Check in Seminyak (13:30 PM).",
      opt3Activity: "Drop bags, rest after red-eye 6E 1605, sunset drinks at Potato Head Beach Club, Eat Street welcome dinner.",
      opt3Stay: "Seminyak (Night 1/3)"
    },
    {
      dayNum: 2,
      date: "Sat, 19 Dec 2026",
      divergence: false,
      tag: "South Bali Base",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ku+De+Ta+Seminyak+Village+Petitenget+Beach+Bali",
      opt2Transit: "Local Seminyak exploration (walk/scooter/taxi).",
      opt2Activity: "Cafe breakfast, beginner surf lesson or beach lounging, boutique shopping, iconic sunset session at Ku De Ta.",
      opt2Stay: "Seminyak (Night 2/3)",
      opt3Transit: "Local Seminyak exploration (walk/scooter/taxi).",
      opt3Activity: "Cafe breakfast, beginner surf lesson or beach lounging, boutique shopping, iconic sunset session at Ku De Ta.",
      opt3Stay: "Seminyak (Night 2/3)"
    },
    {
      dayNum: 3,
      date: "Sun, 20 Dec 2026",
      divergence: false,
      tag: "Nusa Penida Day Trip",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kelingking+Beach+Broken+Beach+Angels+Billabong+Crystal+Bay+Nusa+Penida",
      opt2Transit: "Excursion: 06:30 AM drive to Sanur Port (35 mins) → 45m fast boat to Penida → 17:30 return boat to Sanur → Seminyak room.",
      opt2Activity: "Kelingking T-Rex cliff viewpoint, Broken Beach natural arch, Angel's Billabong, snorkeling Crystal Bay. All main bags stay safely in Seminyak!",
      opt2Stay: "Seminyak (Night 3/3)",
      opt3Transit: "Excursion: 06:30 AM drive to Sanur Port (35 mins) → 45m fast boat to Penida → 17:30 return boat to Sanur → Seminyak room.",
      opt3Activity: "Kelingking T-Rex cliff viewpoint, Broken Beach natural arch, Angel's Billabong, snorkeling Crystal Bay. All main bags stay safely in Seminyak!",
      opt3Stay: "Seminyak (Night 3/3)"
    },
    {
      dayNum: 4,
      date: "Mon, 21 Dec 2026",
      divergence: true,
      tag: "The Split Begins!",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+Lombok+vs+Amed+Beach+Bali",
      opt2Transit: "Exit Seminyak (07:30 AM) → Van to Padang Bai (1.5h) → Fast boat to Gili T (2.5h) → Entry Gili T (12:30 PM).",
      opt2Activity: "Rent bicycles / horse carts, beachfront seafood lunch, west-coast sunset swings & cocktails, lively night market feast.",
      opt2Stay: "Gili Trawangan (Night 1/3)",
      opt3Transit: "Exit Seminyak (09:30 AM) → Comfortable air-conditioned private van along East Coast (2.5 to 3h) → Entry Amed (13:00 PM).",
      opt3Activity: "Relaxed scenic highway road trip with Mount Agung panoramas. Black sand beach walk, cliffside sunset drinks, fresh catch dinner.",
      opt3Stay: "Amed (Night 1/2)"
    },
    {
      dayNum: 5,
      date: "Tue, 22 Dec 2026",
      divergence: true,
      tag: "Marine Exploration",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Turtle+Point+Gili+Trawangan+vs+USAT+Liberty+Shipwreck+Tulamben",
      opt2Transit: "Local bicycle / boat on Gili T.",
      opt2Activity: "Private boat snorkeling with wild Green & Hawksbill sea turtles at Turtle Point, 7km perimeter island bike circuit, beach BBQ & acoustic music.",
      opt2Stay: "Gili Trawangan (Night 2/3)",
      opt3Transit: "Short 15-min road transfer to Tulamben Bay.",
      opt3Activity: "Snorkel / scuba dive the historic 120m WWII USAT Liberty shipwreck right off beach, Japanese wreck at Banyuning, sunset sail on traditional Jukung wooden boat.",
      opt3Stay: "Amed (Night 2/2)"
    },
    {
      dayNum: 6,
      date: "Wed, 23 Dec 2026",
      divergence: true,
      tag: "Island Rest vs. Highland Transition",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Gili+Trawangan+Viewpoint+vs+Tirta+Gangga+Water+Palace",
      opt2Transit: "Stay on Gili T (relaxing full third island day).",
      opt2Activity: "Stand-up paddleboarding / kayaking over turquoise lagoon, resort spa downtime, gentle hike to Gili T hill viewpoint, candlelight beach dinner.",
      opt2Stay: "Gili Trawangan (Night 3/3)",
      opt3Transit: "Exit Amed (09:30 AM) → Drive via water temples & valleys (3h) → Entry Ubud Highlands (14:30 PM).",
      opt3Activity: "Stroll stepping stones across sacred koi ponds at Tirta Gangga Water Palace, valley terrace lunch, Ubud check-in, explore Jalan Raya Ubud art galleries.",
      opt3Stay: "Ubud Highlands (Night 1/4)"
    },
    {
      dayNum: 7,
      date: "Thu, 24 Dec 2026",
      divergence: true,
      tag: "Highland Shift & Christmas Eve",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ubud+Palace+Sacred+Monkey+Forest+Tegallalang+Rice+Terrace",
      opt2Transit: "Exit Gili T (09:30 AM) → 11:00 AM fast boat to Padang Bai (2.5h) → Van to Ubud (1.5h) → Entry Ubud (15:00 PM).",
      opt2Activity: "Check-in to Ubud jungle resort, evening stroll around Ubud Royal Palace, Christmas Eve celebratory dinner in a garden pavilion.",
      opt2Stay: "Ubud Highlands (Night 1/3)",
      opt3Transit: "Full day based in Ubud highlands (no packing bags!).",
      opt3Activity: "Sacred Monkey Forest banyan trails, Tegallalang Rice Terraces & high swing, Luwak coffee plantation tasting, Campuhan Ridge sunset walk, Christmas Eve dinner.",
      opt3Stay: "Ubud Highlands (Night 2/4)"
    },
    {
      dayNum: 8,
      date: "Fri, 25 Dec 2026",
      divergence: true,
      tag: "Christmas Day in Ubud",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Tirta+Empul+Temple+Tukad+Cepung+Waterfall+Kanto+Lampo+Waterfall",
      opt2Transit: "Full day in Ubud highlands.",
      opt2Activity: "Sacred Monkey Forest sanctuary, cascading Tegallalang Rice Terraces, Bebek Betutu crispy duck lunch, Tirta Empul purification, Christmas group feast.",
      opt2Stay: "Ubud Highlands (Night 2/3)",
      opt3Transit: "Full day in Ubud highlands & Gianyar waterfalls.",
      opt3Activity: "Tirta Empul Holy Water Melukat cleansing ritual, Tukad Cepung sunlit cave cavern waterfall, Kanto Lampo stepped rock waterfall swim, festive dinner.",
      opt3Stay: "Ubud Highlands (Night 3/4)"
    },
    {
      dayNum: 9,
      date: "Sat, 26 Dec 2026",
      divergence: true,
      tag: "Grand Farewell & Wellness",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Campuhan+Ridge+Walk+Ubud+Art+Market+Celuk+Village",
      opt2Transit: "Full day in Ubud highlands.",
      opt2Activity: "Campuhan Ridge morning walk, Tibumana & Kanto Lampo waterfalls, Ubud art & craft market, 90-min massage & flower bath, farewell Balinese feast with Legong dance.",
      opt2Stay: "Ubud Highlands (Night 3/3)",
      opt3Transit: "Full day in Ubud highlands & craft villages.",
      opt3Activity: "5-course authentic Balinese cooking class (organic garden tour + spice paste), Celuk silver & Mas woodcarving villages, luxury herbal massage & flower bath, farewell gamelan feast.",
      opt3Stay: "Ubud Highlands (Night 4/4)"
    },
    {
      dayNum: 10,
      date: "Sun, 27 Dec 2026",
      divergence: false,
      tag: "Departure to BLR",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ngurah+Rai+International+Airport+Bali",
      opt2Transit: "Exit Ubud (06:15 AM) → Private van to DPS Airport (08:00 AM) → Check-in counters open 3 hrs before flight.",
      opt2Activity: "IndiGo 6E 1606 non-stop flight (11:15 AM departure), touching down in Bengaluru T2 at 15:15 hrs IST.",
      opt2Stay: "Home Sweet Home (BLR)",
      opt3Transit: "Exit Ubud (06:15 AM) → Private van to DPS Airport (08:00 AM) → Check-in counters open 3 hrs before flight.",
      opt3Activity: "IndiGo 6E 1606 non-stop flight (11:15 AM departure), touching down in Bengaluru T2 at 15:15 hrs IST.",
      opt3Stay: "Home Sweet Home (BLR)"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRIP_DATA;
}
