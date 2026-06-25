// Asili / Savera site — content data (Tanzania). window.AT
const P = (id, w = 1600, q = 80) => (window.__resources && window.__resources[id]) || `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

const PHOTOS = {
  heroJeep:      "1516426122078-c23e76319801", // safari vehicle, golden-hour acacia
  acacia:        "1516026672322-bc52d61a55d5", // lone acacia, savanna sunset
  acacia2:       "1547471080-7cc2caa01a7e",     // acacia + red earth at dusk
  savannaSunset: "1523805009345-7448845a9e53", // orange savanna sundown
  elephantPlains:"1535941339077-2dd1c7963098", // elephant on golden plains
  elephantFront: "1557050543-4d5f4e07ef46",     // elephant, blue sky
  elephantGreen: "1549366021-9f761d450615",     // elephant in green woodland
  rhinos:        "1547970810-dc1eac37d174",     // two rhinos
  rhino:         "1535338454770-8be927b5a00b",  // single rhino
  lion:          "1546182990-dffeafbe841d",     // lion walking
  lions:         "1547036967-23d11aacaee0",     // two lions nuzzling
  leopard:       "1456926631375-92c8ce872def",  // leopard on branch
  giraffe:       "1518621736915-f3b1c41bfd00",  // giraffe portrait
  mountains:     "1500964757637-c85e8a162699",  // highland ridge at dusk
  kili:          "1505765050516-f72dcac9c60e",  // snow peak in cloud
  zanzibar:      "1505881502353-a1986add3762",  // turquoise lagoon + jetty
  underwater:    "1559825481-12a05cc00344",      // turquoise water
  coast:         "1518684079-3c830dcef090",      // coastline aerial
  lodge:         "1546026423-cc4642628d2b",      // luxury tented suite interior
  greenHills:    "1523592121529-f6dde35f079e",   // misty green highlands
};

// ---- TOURS ----
const TOURS = [
  { id: "great-migration", region: "Serengeti · Ngorongoro", title: "The Great Migration", nights: 8, price: 6950, badge: "Best seller", photo: PHOTOS.elephantPlains,
    pace: "Active", group: "Private guided", best: "Jun – Oct",
    blurb: "Track the thunder of two million wildebeest across the Serengeti, then descend into the Ngorongoro Crater — the greatest wildlife theatre on earth.",
    tags: ["Big cats","River crossings","Hot-air balloon","Photography"],
    route: "Arusha → Serengeti → Ngorongoro",
    days: [
      ["Days 1–2","Arusha & the Highlands","Arrive into Kilimanjaro, unwind at a coffee-estate lodge, and meet your private guide for the journey ahead."],
      ["Days 3–5","Central & Northern Serengeti","Follow the herds across the short-grass plains — dawn balloon flight, big-cat country, and the drama of the Mara River crossings."],
      ["Days 6–7","Ngorongoro Crater","Descend 600 metres into a collapsed caldera teeming with lion, rhino and flamingo — Africa's Eden in miniature."],
      ["Day 8","Farewell","A final golden-hour drive before your transfer to the airstrip and onward flight."],
    ]},
  { id: "ngorongoro-highlands", region: "Ngorongoro · Tarangire", title: "Crater & Highlands", nights: 5, price: 4200, badge: null, photo: PHOTOS.mountains,
    pace: "Relaxed", group: "Private guided", best: "All year",
    blurb: "A shorter circuit through Tanzania's volcanic heart — the Ngorongoro Crater rim, Maasai highlands, and the baobab country of Tarangire.",
    tags: ["Crater floor","Maasai villages","Baobabs","Families"],
    route: "Arusha → Tarangire → Ngorongoro",
    days: [
      ["Day 1","Tarangire National Park","Ancient baobabs and some of the largest elephant herds in Tanzania, framed by the Tarangire River."],
      ["Days 2–3","Ngorongoro Highlands","Stay on the forested crater rim; walk with a Maasai guide and witness the caldera at first light."],
      ["Days 4–5","Lake Manyara & departure","Tree-climbing lions and flamingo-pink shallows before your return to Arusha."],
    ]},
  { id: "kilimanjaro-machame", region: "Mount Kilimanjaro", title: "Kilimanjaro: Machame Route", nights: 7, price: 3850, badge: "Summit", photo: PHOTOS.kili,
    pace: "Challenging", group: "Small group", best: "Jan – Mar · Jun – Oct",
    blurb: "The 'Whisky Route' to the Roof of Africa — seven days through five climate zones to a sunrise on the 5,895-metre summit of Uhuru Peak.",
    tags: ["Trekking","Summit night","Glaciers","Small group"],
    route: "Machame Gate → Uhuru Peak → Mweka",
    days: [
      ["Days 1–2","Rainforest & Shira","Climb through dripping montane forest onto the heather moorland of the Shira Plateau."],
      ["Days 3–4","Lava Tower & Barranco","Acclimatise high, sleep low — scale the Barranco Wall beneath the Western Breach."],
      ["Days 5–6","Summit push","A midnight ascent to Stella Point and on to Uhuru Peak for sunrise above the clouds."],
      ["Day 7","Descent","A long, triumphant descent through the forest to Mweka Gate and your celebration dinner."],
    ]},
  { id: "tarangire-manyara", region: "Tarangire · Lake Manyara", title: "Tarangire & Manyara", nights: 4, price: 2950, badge: null, photo: PHOTOS.elephantGreen,
    pace: "Relaxed", group: "Private guided", best: "Jun – Oct",
    blurb: "A compact introduction to the southern Serengeti ecosystem — perfect as a standalone escape or paired with a Zanzibar finale.",
    tags: ["Elephants","Birdlife","Short break","Add-on"],
    route: "Arusha → Tarangire → Manyara",
    days: [
      ["Days 1–2","Tarangire","Baobab-studded plains and elephant herds along the river — superb for first-time safari-goers."],
      ["Days 3–4","Lake Manyara","Soda-lake birdlife, groundwater forest and the park's famous tree-climbing lions."],
    ]},
  { id: "zanzibar-shore", region: "Zanzibar Archipelago", title: "Zanzibar: Spice & Shore", nights: 6, price: 3400, badge: null, photo: PHOTOS.zanzibar,
    pace: "Relaxed", group: "Independent", best: "Jun – Mar",
    blurb: "Trade dust for turquoise — the labyrinth of Stone Town, fragrant spice farms, and barefoot days on the powder-white sand of the north coast.",
    tags: ["Beach","Stone Town","Diving","Honeymoon"],
    route: "Stone Town → Nungwi → Mnemba",
    days: [
      ["Days 1–2","Stone Town","A UNESCO-listed maze of carved doors, sultans' palaces and Swahili-Omani history; sunset dhow with the call to prayer."],
      ["Days 3–4","Spice & sea","Tour a working spice farm, then north to the reefs for snorkelling over the Mnemba atoll."],
      ["Days 5–6","Barefoot days","Nothing on the itinerary but warm sand, fresh seafood and the Indian Ocean."],
    ]},
  { id: "northern-circuit", region: "Grand Northern Circuit", title: "The Grand Northern Circuit", nights: 12, price: 9800, badge: "Flagship", photo: PHOTOS.acacia,
    pace: "Active", group: "Private guided", best: "Jun – Oct",
    blurb: "Our definitive journey: Tarangire, Manyara, the Serengeti and Ngorongoro, finished with five barefoot nights on Zanzibar. Bush to beach, done beautifully.",
    tags: ["Bush & beach","Migration","Crater","Honeymoon"],
    route: "Arusha → Serengeti → Ngorongoro → Zanzibar",
    days: [
      ["Days 1–2","Tarangire & Manyara","Ease in among the baobabs and the soda-lake flamingos."],
      ["Days 3–6","Serengeti","Four nights chasing the herds across the endless plains, with a dawn balloon flight included."],
      ["Days 7–8","Ngorongoro Crater","The wildlife-dense caldera and the cultural highlands of the Maasai."],
      ["Days 9–12","Zanzibar","Fly to the coast for white sand, spice and the warm Indian Ocean."],
    ]},
];

// ---- DESTINATIONS ----
const DESTS = [
  { name: "Serengeti", kicker: "Endless plains", photo: PHOTOS.elephantPlains, blurb: "1.5 million hectares of golden grassland and the stage for the Great Migration.", ratio: "3 / 4" },
  { name: "Ngorongoro", kicker: "The Crater", photo: PHOTOS.mountains, blurb: "A collapsed volcano sheltering 25,000 large animals on its emerald floor.", ratio: "3 / 4" },
  { name: "Kilimanjaro", kicker: "Roof of Africa", photo: PHOTOS.kili, blurb: "The highest free-standing mountain on earth, crowned with equatorial snow.", ratio: "3 / 4" },
  { name: "Tarangire", kicker: "Baobab country", photo: PHOTOS.elephantGreen, blurb: "Ancient baobabs and Tanzania's densest elephant population.", ratio: "3 / 4" },
  { name: "Zanzibar", kicker: "Spice islands", photo: PHOTOS.zanzibar, blurb: "Turquoise water, white sand and the Swahili coast's living history.", ratio: "3 / 4" },
  { name: "Lake Manyara", kicker: "Rift valley", photo: PHOTOS.greenHills, blurb: "Tree-climbing lions and a soda lake stained pink with flamingos.", ratio: "3 / 4" },
];

// ---- PRICING TIERS ----
const TIERS = [
  { name: "Classic", from: 2950, accent: "var(--sage-500)", tagline: "Authentic safari, beautifully run",
    points: ["Hand-picked classic camps & lodges","Shared or private 4x4 with expert guide","All park & conservation fees","Full-board in the bush","ATOL financial protection"] },
  { name: "Signature", from: 5600, accent: "var(--gold-500)", featured: true, tagline: "Our most-loved level of comfort",
    points: ["Premium tented camps in prime locations","Private 4x4 & dedicated specialist guide","Dawn balloon flight included","Sundowners, bush dining & laundry","24/7 on-the-ground support"] },
  { name: "Bespoke", from: 9800, accent: "var(--teal-700)", tagline: "Ultra-luxury, entirely your own",
    points: ["Exclusive-use & owner-run lodges","Private vehicle, guide & light-aircraft hops","Helicopter & walking add-ons","Personal trip designer end-to-end","Conservation & community access"] },
];

// ---- REVIEWS ----
const REVIEWS = [
  { name: "Eleanor & James Whitfield", place: "United Kingdom", trip: "The Great Migration", rating: 5, date: "May 2026", text: "From the first email to the final sundowner, every detail was anticipated. Watching a river crossing at dawn from our own vehicle is something we'll never forget." },
  { name: "Priya Nair", place: "Singapore", trip: "Kilimanjaro: Machame", rating: 5, date: "Apr 2026", text: "The guides read the mountain perfectly. Reaching Uhuru Peak at sunrise was the hardest, most beautiful thing I have ever done — and I felt safe the whole way." },
  { name: "The Okonkwo Family", place: "United States", trip: "Crater & Highlands", rating: 5, date: "Mar 2026", text: "Travelling with two children felt effortless. The team built the pace around them, and our guide turned every drive into a story they still talk about." },
  { name: "Sofia Marchetti", place: "Italy", trip: "Zanzibar: Spice & Shore", rating: 5, date: "Feb 2026", text: "Stone Town at dusk, spice farms, and then days of nothing but warm sand. The bush-to-beach combination was paced exactly right." },
  { name: "Daniel Berg", place: "Norway", trip: "Grand Northern Circuit", rating: 5, date: "Jan 2026", text: "Twelve days, four parks, one seamless journey. Not a single transfer felt rushed. Worth every krone." },
  { name: "Amara & Tendai", place: "South Africa", trip: "Bush & Beach Honeymoon", rating: 5, date: "Dec 2025", text: "They surprised us with a private bush dinner under the stars on our wedding anniversary. The kind of touch you can't plan for — but they did." },
];

// ---- BLOG ----
const BLOG = [
  { cat: "Field notes", date: "Jun 2026", title: "When to see the Great Migration river crossings", photo: PHOTOS.elephantFront, read: "6 min", excerpt: "Timing is everything. A month-by-month guide to where the herds are — and where the crocodiles are waiting." },
  { cat: "Guide", date: "May 2026", title: "Choosing your first safari camp: a specialist's view", photo: PHOTOS.lodge, read: "8 min", excerpt: "Tented or lodge? Mobile or permanent? How to match the camp to the kind of trip you actually want." },
  { cat: "Mountain", date: "Apr 2026", title: "Which Kilimanjaro route is right for you?", photo: PHOTOS.kili, read: "7 min", excerpt: "Machame, Lemosho or Marangu — comparing scenery, success rates and how hard each one really is." },
  { cat: "Coast", date: "Mar 2026", title: "Forty-eight hours in Stone Town", photo: PHOTOS.zanzibar, read: "5 min", excerpt: "Carved doors, Persian baths and the best place to watch the dhows come in. A slow weekend on Zanzibar." },
  { cat: "Conservation", date: "Feb 2026", title: "How responsible tourism funds the wild", photo: PHOTOS.rhino, read: "6 min", excerpt: "Where the conservation levy on every Asili Trails journey actually goes — and the rangers it keeps in the field." },
  { cat: "Photography", date: "Jan 2026", title: "Packing for golden hour: a camera kit for safari", photo: PHOTOS.leopard, read: "9 min", excerpt: "What to bring, what to leave, and how to be ready when the light and the leopard arrive at once." },
];

// ---- ADMIN MOCK DATA ----
const BOOKINGS = [
  { ref: "SAV-4821", guest: "Eleanor Whitfield", trip: "The Great Migration", depart: "12 Jul 2026", pax: 2, value: 13900, status: "Confirmed" },
  { ref: "SAV-4820", guest: "Priya Nair", trip: "Kilimanjaro: Machame", depart: "03 Aug 2026", pax: 1, value: 3850, status: "Confirmed" },
  { ref: "SAV-4819", guest: "Marcus Okonkwo", trip: "Crater & Highlands", depart: "21 Sep 2026", pax: 4, value: 16800, status: "Deposit paid" },
  { ref: "SAV-4818", guest: "Sofia Marchetti", trip: "Zanzibar: Spice & Shore", depart: "08 Oct 2026", pax: 2, value: 6800, status: "Confirmed" },
  { ref: "SAV-4817", guest: "Daniel Berg", trip: "Grand Northern Circuit", depart: "15 Jun 2026", pax: 2, value: 19600, status: "Balance due" },
  { ref: "SAV-4816", guest: "Hannah Lewis", trip: "Tarangire & Manyara", depart: "29 Nov 2026", pax: 3, value: 8850, status: "Enquiry" },
  { ref: "SAV-4815", guest: "Yuki Tanaka", trip: "The Great Migration", depart: "18 Jul 2026", pax: 2, value: 13900, status: "Confirmed" },
];
const ENQUIRIES = [
  { name: "Olivia Grant", interest: "Honeymoon · bush & beach", when: "2h ago", specialist: "Thabo N." },
  { name: "Raj & Meera Patel", interest: "Family safari, Aug", when: "5h ago", specialist: "Amani K." },
  { name: "Lukas Fischer", interest: "Kilimanjaro, solo", when: "Yesterday", specialist: "Thabo N." },
  { name: "Grace Mwangi", interest: "Grand Northern Circuit", when: "Yesterday", specialist: "Naomi L." },
  { name: "Tom & Sue Harper", interest: "Zanzibar add-on", when: "2 days ago", specialist: "Amani K." },
];

window.AT = { P, PHOTOS, TOURS, DESTS, TIERS, REVIEWS, BLOG, BOOKINGS, ENQUIRIES };
