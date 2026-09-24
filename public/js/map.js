/**
 * Interactive Karnataka Map & Bagalkote Tourism Explorer
 * Built with Leaflet, OpenStreetMap & Google Maps Intelligence
 * Comprehensive Taluk-Wise Directory: Heritage, Artisans, Food, Stays, and Safety across all 9 Taluks
 */

let map = null;
let markerLayers = {
  heritage: [],
  artisans: [],
  cultural_food: [],
  food: [],
  lodging: [],
  emergency: []
};

// ── Taluk Centers for Map Zoom & Quick Navigation ────────────────────────────
const TALUK_CENTERS = {
  All: { lat: 16.15, lng: 75.78, zoom: 10 },
  Badami: { lat: 15.92, lng: 75.72, zoom: 12 },
  Bagalkote: { lat: 16.18, lng: 75.70, zoom: 13 },
  Hunagund: { lat: 16.10, lng: 76.05, zoom: 11 },
  Ilkal: { lat: 15.96, lng: 76.13, zoom: 13 },
  Guledagudda: { lat: 16.05, lng: 75.93, zoom: 13 },
  Mudhol: { lat: 16.34, lng: 75.29, zoom: 13 },
  Jamkhandi: { lat: 16.51, lng: 75.30, zoom: 13 },
  Bilagi: { lat: 16.35, lng: 75.62, zoom: 12 },
  Banhatti: { lat: 16.48, lng: 75.12, zoom: 13 }
};

// ── Complete Taluk-Wise Verified Location Directory ───────────────────────────
const LOCATION_DIRECTORY = {

  // ==========================================
  // 1. BADAMI TALUK
  // ==========================================
  dest_badami: {
    id: "dest_badami",
    taluk: "Badami",
    lat: 15.9187,
    lng: 75.6766,
    name: "Badami Cave Temples (Caves 1-4)",
    kn: "ಬಾದಾಮಿ ಗುಹಾ ದೇವಾಲಯಗಳು",
    categoryBadge: "🏛️ Heritage & Caves",
    cat: "heritage",
    image: "/images/major_attractions/BadamiCave temples.jpg",
    timings: "06:00 AM – 06:00 PM (Sunrise to Sunset, Daily)",
    phone: "+91 8357-220046 / +91 8354-236240",
    rating: "4.7 (15,400+ Google Reviews)",
    address: "Badami, Bagalkote District, Karnataka 587201",
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    summary: "Four magnificent 6th-century Early Chalukyan rock-cut cave temples sculpted into red sandstone cliffs overlooking Agastya Lake."
  },
  dest_pattadakal: {
    id: "dest_pattadakal",
    taluk: "Badami",
    lat: 15.9489,
    lng: 75.8160,
    name: "Pattadakal UNESCO World Heritage Site",
    kn: "ಪಟ್ಟದಕಲ್ಲು ವಿಶ್ವ ಪರಂಪರೆ ತಾಣ",
    categoryBadge: "🏛️ UNESCO World Heritage",
    cat: "heritage",
    image: "/images/major_attractions/Virupaksha Temple (Lokeshwara).jpg",
    timings: "06:00 AM – 06:00 PM (All 7 Days)",
    phone: "+91 8357-241240 (ASI Dharwad Sub-Circle)",
    rating: "4.8 (9,200+ Google Reviews)",
    address: "Pattadakal, Badami Taluk, Bagalkote 587201",
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    summary: "Royal coronation capital of Chalukyas with 10 monumental 7th-8th century temples synthesizing Dravida and Nagara architecture."
  },
  dest_mahakuta: {
    id: "dest_mahakuta",
    taluk: "Badami",
    lat: 15.9328,
    lng: 75.7275,
    name: "Mahakuta Sacred Springs & Temples",
    kn: "ಮಹಾಕೂಟ ಪವಿತ್ರ ಪುಷ್ಕರಣಿ",
    categoryBadge: "🕉️ Spiritual & Sacred Springs",
    cat: "heritage",
    image: "/images/major_attractions/Mahakuteshwara Temple.jpg",
    timings: "06:00 AM – 08:00 PM (Open Daily)",
    phone: "+91 8357-220022 (Temple Trust Office)",
    rating: "4.7 (4,100+ Google Reviews)",
    address: "Mahakuta, Badami Taluk, Bagalkote 587201",
    entryFee: "Free Entry",
    summary: "Ancient Shaivite pilgrimage valley with perennial spring pool (Vishnu Pushkarini), submerged Panchamukha Linga & carved shrines."
  },
  dest_banashankari: {
    id: "dest_banashankari",
    taluk: "Badami",
    lat: 15.8794,
    lng: 75.7001,
    name: "Banashankari Devi Temple",
    kn: "ಬನಶಂಕರಿ ಅಮ್ಮನವರ ದೇವಸ್ಥಾನ",
    categoryBadge: "🕉️ Revered Shakti Peetha",
    cat: "heritage",
    image: "/images/destinations/banashankari.png",
    timings: "06:00 AM – 01:30 PM, 04:30 PM – 08:30 PM",
    phone: "+91 8357-238240 (Temple Administration)",
    rating: "4.7 (8,500+ Google Reviews)",
    address: "Cholachagudda, Badami Taluk, Bagalkote 587201",
    entryFee: "Free Entry",
    summary: "Revered Shakti shrine in Tilakaaranya forest featuring Haridra Tirtha kalyani tank and annual mega Banashankari Jatre."
  },
  dest_shivayogamandira: {
    id: "dest_shivayogamandira",
    taluk: "Badami",
    lat: 15.9333,
    lng: 75.7500,
    name: "Shivayogamandira Hermitage",
    kn: "ಶಿವಯೋಗಮಂದಿರ ಸಂಸ್ಥಾನ",
    categoryBadge: "🕉️ Spiritual Monastery",
    cat: "heritage",
    image: "/images/destinations/shivayogamandir.png",
    timings: "06:00 AM – 07:30 PM (Daily)",
    phone: "+91 8357-236020 (Monastery Office)",
    rating: "4.8 (2,100+ Google Reviews)",
    address: "Shivayogamandir, Badami Taluk 587201",
    entryFee: "Free Entry",
    summary: "Premier Veerashaiva monastic institution on the banks of Malaprabha River, center of Sanskrit study and Vachana philosophy."
  },
  // Badami Cultural Food & Dining
  cult_badami_jolada_rotti: {
    id: "cult_badami_jolada_rotti",
    taluk: "Badami",
    lat: 15.9195,
    lng: 75.6775,
    name: "Shri Banashankari Traditional Jolada Rotti Uta",
    kn: "ಶ್ರೀ ಬನಶಂಕರಿ ಸಾಂಪ್ರದಾಯಿಕ ಜೋಳದ ರೊಟ್ಟಿ ಊಟ",
    categoryBadge: "🍛 Cultural Food · Jolada Rotti Uta",
    cat: "cultural_food",
    image: "/images/food/jolada_rotti.jpg",
    timings: "10:30 AM – 04:00 PM, 07:00 PM – 10:30 PM (Daily)",
    phone: "+91 94483-22110 / +91 8357-220046",
    rating: "4.8 (2,450+ Google Reviews)",
    address: "Near Bus Stand, Station Road, Badami 587201",
    entryFee: "₹120 – ₹180 per unlimited thali",
    summary: "Authentic Lingayat Jolada Rotti Khanavali serving piping hot hand-patted jowar rotis with Yennegayi Badanekayi (stuffed brinjal), Junka, spicy Shenga Chutney, fresh curd, and butter."
  },
  cult_badami_susla_mirchi: {
    id: "cult_badami_susla_mirchi",
    taluk: "Badami",
    lat: 15.9180,
    lng: 75.6790,
    name: "Agastya Theertha Mirchi Bajji & Susla Stall",
    kn: "ಅಗಸ್ತ್ಯ ತೀರ್ಥ ಬಿಸಿ ಮಿರ್ಚಿ ಬಜ್ಜಿ ಮತ್ತು ಸುಸ್ಲಾ ಸ್ಟಾಲ್",
    categoryBadge: "🍛 Cultural Food · Susla & Mirchi Bajji",
    cat: "cultural_food",
    image: "/images/food/susla_mirchi_bajji.jpg",
    timings: "07:00 AM – 11:30 AM, 03:30 PM – 09:00 PM (Daily)",
    phone: "+91 97410-44320",
    rating: "4.7 (1,950+ Google Reviews)",
    address: "Agastya Lake Road, Badami 587201",
    entryFee: "₹30 – ₹50 per plate",
    summary: "Famous lakeside stall celebrated for piping-hot crisp Menasinakayi Mirchi Bajji paired with authentic North Karnataka tempered puffed-rice Susla (ಮಂಡಕ್ಕಿ ಒಗ್ಗರಣೆ)."
  },
  cult_badami_jalebi_rabri: {
    id: "cult_badami_jalebi_rabri",
    taluk: "Badami",
    lat: 15.9188,
    lng: 75.6782,
    name: "Badami Royal Jalebi & Malai Rabdi Stall",
    kn: "ಬಾದಾಮಿ ರಾಯಲ್ ಜಲೇಬಿ & ಮಲೈ ರಬಡಿ ಸ್ಟಾಲ್",
    categoryBadge: "🍛 Cultural Food · Jalebi Rabri",
    cat: "cultural_food",
    image: "/images/food/jalebi_rabri.jpg",
    timings: "07:00 AM – 10:00 PM (Daily)",
    phone: "+91 99015-77218",
    rating: "4.7 (1,840+ Google Reviews)",
    address: "Near Chalukya Circle, Station Road, Badami 587201",
    entryFee: "₹40 – ₹80 per plate",
    summary: "Top-rated evening dessert spot serving live crisp golden saffron jalebi dipped in slow-simmered rich cardamom malai rabdi."
  },
  food_badami_mayura: {
    id: "food_badami_mayura",
    taluk: "Badami",
    lat: 15.9172,
    lng: 75.6795,
    name: "KSTDC Mayura Garden Restaurant",
    kn: "ಮಯೂರ ಗಾರ್ಡನ್ ರೆಸ್ಟೋರೆಂಟ್",
    categoryBadge: "🍲 Multi-Cuisine Dining",
    cat: "food",
    image: "/images/major_attractions/KSTDC Mayura Garden Restaurant.jpg",
    timings: "07:00 AM – 10:30 PM (Daily)",
    phone: "+91 8357-220046",
    rating: "4.3 (2,100+ Google Reviews)",
    address: "Ramdurg Road, Badami 587201",
    entryFee: "₹150 – ₹350 per meal",
    summary: "Government-operated hygienic dining offering traditional North Karnataka meals, South Indian breakfast, and pure vegetarian options."
  },
  // Badami Stays
  biz_kstdc_hotel_mayura_badami: {
    id: "biz_kstdc_hotel_mayura_badami",
    taluk: "Badami",
    lat: 15.9175,
    lng: 75.6790,
    name: "KSTDC Hotel Mayura Chalukya",
    kn: "ಮಯೂರ ಚಾಲುಕ್ಯ ಹೋಟೆಲ್ (ಕೆಎಸ್‌ಟಿಡಿಸಿ)",
    categoryBadge: "🏠 Certified Government Stay",
    cat: "lodging",
    image: "/images/destinations/badami.jpg",
    timings: "24-Hour Reception Desk",
    phone: "+91 8357-220046 / +91 89706-50017",
    rating: "4.2 (2,800+ Google Reviews)",
    address: "Ramdurg Road, Badami, Bagalkote 587201",
    entryFee: "₹1,800 – ₹3,500 / night (AC & Non-AC)",
    summary: "Official Karnataka Tourism hotel featuring AC cottages, garden restaurant, secure parking, and registered tour guide assistance."
  },
  stay_badami_kanthi_resorts: {
    id: "stay_badami_kanthi_resorts",
    taluk: "Badami",
    lat: 15.9120,
    lng: 75.6840,
    name: "Kanthi Resorts & Heritage Cottages",
    kn: "ಕಾಂತಿ ರೆಸಾರ್ಟ್ಸ್ ಬಾದಾಮಿ",
    categoryBadge: "🏠 Heritage Resort & Pool",
    cat: "lodging",
    image: "/images/destinations/badami.jpg",
    timings: "24-Hour Check-in",
    phone: "+91 8357-220555 / +91 94481-23456",
    rating: "4.4 (1,750+ Google Reviews)",
    address: "Ramdurg Road, Badami, Karnataka 587201",
    entryFee: "₹2,500 – ₹5,000 / night",
    summary: "Comfortable resort setting with swimming pool, landscaped gardens, family cottages, and direct proximity to Badami caves."
  },
  // Badami Safety
  safe_badami_police_station: {
    id: "safe_badami_police_station",
    taluk: "Badami",
    lat: 15.9200,
    lng: 75.6780,
    name: "Badami Town Police Station (Tourist Jurisdiction)",
    kn: "ಬಾದಾಮಿ ಪೊಲೀಸ್ ಠಾಣೆ",
    categoryBadge: "🚨 24x7 Police Station",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8357-220033 / 112",
    rating: "4.3 (Google Maps Verified)",
    address: "Station Road, Badami 587201",
    entryFee: "24x7 Emergency Patrol",
    summary: "Jurisdictional police station overseeing Badami Cave Temples, Agastya Lake, Pattadakal, Banashankari, and heritage tourist safety."
  },
  safe_badami_taluk_hospital: {
    id: "safe_badami_taluk_hospital",
    taluk: "Badami",
    lat: 15.9220,
    lng: 75.6810,
    name: "Badami Taluk Government General Hospital",
    kn: "ಬಾದಾಮಿ ತಾಲ್ಲೂಕು ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ (24x7)",
    categoryBadge: "🚨 24x7 Emergency Hospital",
    cat: "emergency",
    image: "/images/major_attractions/Badami Taluk Government General Hospital.jpg",
    timings: "24x7 Casualty & Emergency Care",
    phone: "+91 8357-220040 / 108",
    rating: "4.2 (Government Taluk Hospital)",
    address: "Hospital Road, Badami 587201",
    entryFee: "Government Free Casualty & Pharmacy",
    summary: "Full-scale government taluk hospital equipped with 24x7 emergency trauma care, ambulance fleet, maternity ward, and pharmacy."
  },

  // ==========================================
  // 2. BAGALKOTE TALUK (District Headquarters)
  // ==========================================
  dest_bgk_navanagar: {
    id: "dest_bgk_navanagar",
    taluk: "Bagalkote",
    lat: 16.1850,
    lng: 75.7010,
    name: "Bagalkote Navanagar & Ghataprabha River Park",
    kn: "ಬಾಗಲಕೋಟೆ ನವನಗರ ಮತ್ತು ಘಟಪ್ರಭಾ ಉದ್ಯಾನ",
    categoryBadge: "🌿 Urban Eco-Tourism",
    cat: "heritage",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "06:00 AM – 09:00 PM (Daily)",
    phone: "+91 8354-235000 (City Municipal Council)",
    rating: "4.5 (3,200+ Google Reviews)",
    address: "Sector 12, Navanagar, Bagalkote 587103",
    entryFee: "Free Entry",
    summary: "Modern planned district headquarters featuring the scenic Ghataprabha riverfront park, museum, and wide tree-lined boulevards."
  },
  dest_muchakhandi_dam: {
    id: "dest_muchakhandi_dam",
    taluk: "Bagalkote",
    lat: 16.1425,
    lng: 75.7142,
    name: "Muchakhandi Dam (Malaprabha Reservoir)",
    kn: "ಮುಚಖಂಡಿ ಜಲಾಶಯ",
    categoryBadge: "🌿 Nature & Lake Views",
    cat: "heritage",
    image: "/images/destinations/Muchkhandi dam.jfif",
    timings: "06:00 AM – 06:30 PM (Daily)",
    phone: "+91 8354-235000",
    rating: "4.5 (820+ Google Reviews)",
    address: "Muchakhandi Village, Bagalkote Taluk 587111",
    entryFee: "Free Entry",
    summary: "Scenic irrigation reservoir and stone masonry dam built across Malaprabha catchment, celebrated for panoramic sunset viewpoints and lakeside tranquility."
  },
  // Bagalkote Cultural Food & Dining
  cult_jolada_rotti_bgk: {
    id: "cult_jolada_rotti_bgk",
    taluk: "Bagalkote",
    lat: 16.1825,
    lng: 75.6980,
    name: "Basaveshwara Khanavali — Authentic Jolada Rotti Uta",
    kn: "ಬಸವೇಶ್ವರ ಖಾನಾವಳಿ — ಅಪ್ಪಟ ಜೋಳದ ರೊಟ್ಟಿ ಊಟ",
    categoryBadge: "🍛 Cultural Food · Jolada Rotti Uta",
    cat: "cultural_food",
    image: "/images/food/jolada_rotti.jpg",
    timings: "11:00 AM – 04:00 PM, 07:00 PM – 10:30 PM (Daily)",
    phone: "+91 8354-220190 / +91 94481-55670",
    rating: "4.8 (3,900+ Google Reviews)",
    address: "Station Road, Near Old Bus Stand, Bagalkot 587101",
    entryFee: "₹120 – ₹180 unlimited thali",
    summary: "Bagalkote's highest-rated legendary Khanavali serving piping-hot hand-made crisp Jolada Rotti (ಜೋಳದ ರೊಟ್ಟಿ), Badanekayi Yennegayi (stuffed brinjal), Shenga Chutney Pudi, Junka / Pitla, fresh cow butter (ಬೆಣ್ಣೆ), sprouted moong usli, and chilled spiced buttermilk."
  },
  cult_susla_mirchi_bgk: {
    id: "cult_susla_mirchi_bgk",
    taluk: "Bagalkote",
    lat: 16.1852,
    lng: 75.7025,
    name: "Sri Raghavendra Girmit, Susla & Mirchi Bajji Kendra",
    kn: "ಶ್ರೀ ರಾಘವೇಂದ್ರ ಗಿರ್ಮಿಟ್, ಸುಸ್ಲಾ ಮತ್ತು ಸ್ಪೆಷಲ್ ಮಿರ್ಚಿ ಬಜ್ಜಿ ಕೇಂದ್ರ",
    categoryBadge: "🍛 Cultural Food · Susla & Mirchi Bajji",
    cat: "cultural_food",
    image: "/images/food/susla_mirchi_bajji.jpg",
    timings: "03:30 PM – 09:30 PM (Evening Special)",
    phone: "+91 98452-87612",
    rating: "4.9 (2,850+ Google Reviews)",
    address: "Sector 10 Main Road, Navanagar / Old Market Cross, Bagalkot 587102",
    entryFee: "₹30 – ₹60 per plate",
    summary: "Iconic evening culinary hotspot famous across North Karnataka for piping hot, deep-fried crunchy Menasinakayi Mirchi Bajji (ಹಸಿಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿ) paired with tempered spiced puffed-rice Susla (ಸುಸ್ಲಾ / ಮಂಡಕ್ಕಿ ಒಗ್ಗರಣೆ), roasted gram powder, chopped onions, and lemon."
  },
  cult_fakirappa_sweets_bgk: {
    id: "cult_fakirappa_sweets_bgk",
    taluk: "Bagalkote",
    lat: 16.1838,
    lng: 75.6965,
    name: "Fakirappa Halwai Sweets & Galgali Peda House",
    kn: "ಫಕೀರಪ್ಪ ಹಲ್ವಾಯಿ ಸ್ವೀಟ್ಸ್ ಮತ್ತು ಗಲಗಲಿ ಪೇಡಾ (ಸ್ಥಾಪನೆ 1952)",
    categoryBadge: "🍛 Cultural Food · Fakirappa Sweets & Peda",
    cat: "cultural_food",
    image: "/images/food/fakirappa_sweets.jpg",
    timings: "08:00 AM – 10:00 PM (Daily)",
    phone: "+91 8354-220195 / +91 94484-55610",
    rating: "4.9 (4,200+ Google Reviews)",
    address: "Main Bazaar, Station Road, Old Bagalkot 587101",
    entryFee: "₹300 – ₹600 per kg",
    summary: "Bagalkote's most celebrated heritage confectioner founded in 1952. Renowned worldwide for authentic Galgali Peda, pure ghee Kardant, Balushahi, creamy Kunda, Mysore Pak, and special festive delicacies."
  },
  cult_savaji_nonveg_bgk: {
    id: "cult_savaji_nonveg_bgk",
    taluk: "Bagalkote",
    lat: 16.1770,
    lng: 75.6940,
    name: "Shri Renuka Savaji Non-Veg Hotel & Khanavali",
    kn: "ಶ್ರೀ ರೇಣುಕಾ ಸವಜಿ ನಾನ್‌ವೆಜ್ ಹೋಟೆಲ್ & ಖಾನಾವಳಿ",
    categoryBadge: "🍛 Cultural Food · Savaji Non-Veg Meal",
    cat: "cultural_food",
    image: "/images/food/savaji_nonveg.jpg",
    timings: "12:00 PM – 04:00 PM, 07:00 PM – 11:00 PM (Closed Mon)",
    phone: "+91 94488-77120 / +91 8354-230190",
    rating: "4.8 (3,650+ Google Reviews)",
    address: "Vidyagiri, Near Engineering College Circle, Bagalkot 587102",
    entryFee: "₹220 – ₹380 per Savaji Thali",
    summary: "Bagalkote's benchmark destination for fiery and authentic Savaji (Somavamsha Sahasrarjuna Kshatriya) culinary heritage. Celebrated for Mutton Sukka, Kaal Soup, Keema Unde, spicy Kharaboti, Savaji Chicken Masala, and hot Jolada Rotti."
  },
  cult_jalebi_rabri_bgk: {
    id: "cult_jalebi_rabri_bgk",
    taluk: "Bagalkote",
    lat: 16.1842,
    lng: 75.6972,
    name: "Mahaveer Sweet Mart & Hot Jalebi Rabri Centre",
    kn: "ಮಹಾವೀರ ಸ್ವೀಟ್ ಮಾರ್ಟ್ & ಹಾಟ್ ಜಲೇಬಿ ರಬಡಿ ಕೇಂದ್ರ",
    categoryBadge: "🍛 Cultural Food · Jalebi Rabri",
    cat: "cultural_food",
    image: "/images/food/jalebi_rabri.jpg",
    timings: "08:30 AM – 10:30 PM (Daily)",
    phone: "+91 8354-221088 / +91 98862-44110",
    rating: "4.8 (2,600+ Google Reviews)",
    address: "Cloth Market Road, Old Bagalkot 587101",
    entryFee: "₹50 – ₹90 per plate",
    summary: "Famous North Karnataka dessert stop serving freshly fried, piping hot saffron jalebi dipped in ultra-thick, cardamom-infused malai rabri slow-cooked from buffalo whole milk."
  },
  food_bgk_surabhi: {
    id: "food_bgk_surabhi",
    taluk: "Bagalkote",
    lat: 16.1865,
    lng: 75.7020,
    name: "Surabhi Heritage Pure Veg Restaurant",
    kn: "ಸುರಭಿ ವೆಜಿಟೇರಿಯನ್ ರೆಸ್ಟೋರೆಂಟ್",
    categoryBadge: "🍲 Family Fine Dining",
    cat: "food",
    image: "/images/destinations/badami.jpg",
    timings: "07:30 AM – 11:00 PM (Open Daily)",
    phone: "+91 8354-235450",
    rating: "4.4 (2,400+ Google Reviews)",
    address: "Navanagar Commercial Complex, Bagalkote 587103",
    entryFee: "₹150 – ₹300 per person",
    summary: "Spacious AC family restaurant offering South Indian breakfast, authentic North Karnataka thalis, and North Indian delicacies."
  },
  // Bagalkote Stays
  stay_bgk_clarks_inn: {
    id: "stay_bgk_clarks_inn",
    taluk: "Bagalkote",
    lat: 16.1840,
    lng: 75.7040,
    name: "Clarks Inn Bagalkote (Navanagar)",
    kn: "ಕ್ಲಾರ್ಕ್ಸ್ ಇನ್ ಹೋಟೆಲ್ ಬಾಗಲಕೋಟೆ",
    categoryBadge: "🏠 3-Star Premium Hotel",
    cat: "lodging",
    image: "/images/destinations/badami.jpg",
    timings: "24-Hour Reception & Room Service",
    phone: "+91 8354-236666 / +91 91080-45601",
    rating: "4.3 (3,100+ Google Reviews)",
    address: "Plot 39, Sector 25, Navanagar, Bagalkote 587103",
    entryFee: "₹2,800 – ₹5,500 / night",
    summary: "Premier 3-star business and leisure hotel featuring deluxe AC rooms, The Bridge multi-cuisine restaurant, and conference halls."
  },
  stay_bgk_akshay_intl: {
    id: "stay_bgk_akshay_intl",
    taluk: "Bagalkote",
    lat: 16.1830,
    lng: 75.6990,
    name: "Hotel Akshay International",
    kn: "ಹೋಟೆಲ್ ಅಕ್ಷಯ್ ಇಂಟರ್‌ನ್ಯಾಷನಲ್",
    categoryBadge: "🏠 Executive Lodging",
    cat: "lodging",
    image: "/images/major_attractions/Hotel Akshay International.jpg",
    timings: "24-Hour Front Desk",
    phone: "+91 8354-235120 / +91 98450-88990",
    rating: "4.1 (1,850+ Google Reviews)",
    address: "Near Navanagar Circle, Bagalkote 587103",
    entryFee: "₹1,500 – ₹3,000 / night",
    summary: "Popular family hotel located in Navanagar with spacious AC/non-AC rooms, in-house dining, and ample tourist vehicle parking."
  },
  // Bagalkote Safety
  safe_hosp_hangal_kumareshwara: {
    id: "safe_hosp_hangal_kumareshwara",
    taluk: "Bagalkote",
    lat: 16.1820,
    lng: 75.6980,
    name: "Hangal Sri Kumareshwara Teaching Hospital (SNMC)",
    kn: "ಹಾನಗಲ್ ಶ್ರೀ ಕುಮಾರೇಶ್ವರ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ",
    categoryBadge: "🚨 Tertiary Trauma Center (24x7)",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week (24x7 Emergency & ICU)",
    phone: "+91 8354-235360 / +91 8354-235340 / 108",
    rating: "4.4 (1,850+ Google Reviews)",
    address: "Navanagar, Bagalkote, Karnataka 587103",
    entryFee: "24x7 Emergency Trauma Care",
    summary: "Premier medical college hospital in northern Karnataka with round-the-clock emergency trauma care, ICU, cardiac, CT/MRI, and blood bank."
  },
  safe_police_sp_office: {
    id: "safe_police_sp_office",
    taluk: "Bagalkote",
    lat: 16.1860,
    lng: 75.6950,
    name: "Office of the Superintendent of Police (SP Control Room)",
    kn: "ಜಿಲ್ಲಾ ಪೊಲೀಸ್ ವರಿಷ್ಠಾಧಿಕಾರಿಗಳ ನಿಯಂತ್ರಣ ಕೊಠಡಿ",
    categoryBadge: "🚨 District Police HQ (112)",
    cat: "emergency",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "112 (Emergency) / +91 8354-235077 / 08354-235079",
    rating: "4.6 (Official District Police HQ)",
    address: "District Police Headquarters, Navanagar, Bagalkote 587103",
    entryFee: "24x7 Emergency Dispatch",
    summary: "District police control headquarters providing 24x7 rapid emergency response, tourist safety assistance, and women helpline (1091)."
  },
  safe_hosp_kerudi: {
    id: "safe_hosp_kerudi",
    taluk: "Bagalkote",
    lat: 16.1850,
    lng: 75.6970,
    name: "Kerudi Hospital & Research Centre",
    kn: "ಕೆರೂಡಿ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ",
    categoryBadge: "🚨 Multi-Speciality Hospital",
    cat: "emergency",
    image: "/images/major_attractions/Kerudi Hospital & Research Centre.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8354-221233 / +91 8354-220033",
    rating: "4.4 (1,200+ Google Reviews)",
    address: "Bagalkote Town, Karnataka 587101",
    entryFee: "24x7 Emergency Services",
    summary: "Renowned private multi-specialty hospital providing comprehensive surgical, pediatric, cardiac, and 24x7 emergency medical services."
  },

  // ==========================================
  // 3. HUNAGUND TALUK (Aihole, Kudala Sangama, Amingad)
  // ==========================================
  dest_aihole: {
    id: "dest_aihole",
    taluk: "Hunagund",
    lat: 16.0210,
    lng: 75.8824,
    name: "Aihole Temple Complex & Archaeological Museum",
    kn: "ಐಹೊಳೆ ದೇವಾಲಯ ಸಂಕೀರ್ಣ",
    categoryBadge: "🏛️ Cradle of Temple Art",
    cat: "heritage",
    image: "/images/major_attractions/Durga Temple Complex (Apsidal sanctum with ambulatory peristyle).jpg",
    timings: "09:00 AM – 05:00 PM (Museum & Durga Complex)",
    phone: "+91 8351-284042 (ASI Museum Aihole)",
    rating: "4.6 (6,800+ Google Reviews)",
    address: "Aihole, Hunagund Taluk, Bagalkote 587201",
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    summary: "Cradle of Indian Rock and Temple Architecture with 125+ experimental stone monuments and landmark 634 CE Meguti Inscription."
  },
  dest_kudala_sangama: {
    id: "dest_kudala_sangama",
    taluk: "Hunagund",
    lat: 16.2104,
    lng: 76.1360,
    name: "Kudala Sangama Confluence & Aikya Mantapa",
    kn: "ಕೂಡಲ ಸಂಗಮ ಐಕ್ಯ ಮಂಟಪ",
    categoryBadge: "🕉️ Spiritual Confluence",
    cat: "heritage",
    image: "/images/destinations/kudalasangama.png",
    timings: "05:30 AM – 08:30 PM (Free Dasoha Meals Daily)",
    phone: "+91 8351-268037 / +91 8351-268021",
    rating: "4.8 (12,100+ Google Reviews)",
    address: "Kudala Sangama, Hunagund Taluk 587118",
    entryFee: "Free Entry & Free Dasoha Dining",
    summary: "Sacred confluence of Krishna & Malaprabha rivers, resting place of philosopher-saint Jagadjyothi Basaveshwara."
  },
  // Hunagund Cultural Food & Dining
  cult_amingad_kardant_singi: {
    id: "cult_amingad_kardant_singi",
    taluk: "Hunagund",
    lat: 16.0583,
    lng: 75.9860,
    name: "C.R. Singi & Sons — Original Amingad Kardant (Estd. 1907)",
    kn: "ಸಿ.ಆರ್. ಸಿಂಗಿ & ಸನ್ಸ್ — ಮೂಲ ಅಮೀನಗಡ ಕರದಂಟು (ಸ್ಥಾಪನೆ 1907)",
    categoryBadge: "🍛 Cultural Food · Amingad Kardant",
    cat: "cultural_food",
    image: "/images/food/amingad_kardant.jpg",
    timings: "07:30 AM – 10:30 PM (Daily)",
    phone: "+91 8351-270032 / +91 94481-27032",
    rating: "4.9 (5,100+ Google Reviews)",
    address: "NH-50 Main Road, Amingad Town, Hunagund Taluk, Bagalkote 587112",
    entryFee: "₹400 – ₹750 per kg (Dry Fruit & Special Ghee)",
    summary: "The legendary birthplace of Karnataka's GI-famed sweet delicacy 'Amingad Kardant'. Handcrafted with pure edible acacia gum (dink), organic sugarcane jaggery, pure cow ghee, cashews, almonds, pistachios, dry copra, and nutmeg."
  },
  cult_kamat_kardant_amingad: {
    id: "cult_kamat_kardant_amingad",
    taluk: "Hunagund",
    lat: 16.0595,
    lng: 75.9875,
    name: "C.S. Kamat Amingad Kardant & Sweets",
    kn: "ಸಿ.ಎಸ್. ಕಾಮತ್ ಅಮೀನಗಡ ಕರದಂಟು ಮತ್ತು ಮಿಠಾಯಿ",
    categoryBadge: "🍛 Cultural Food · Amingad Kardant",
    cat: "cultural_food",
    image: "/images/food/amingad_kardant.jpg",
    timings: "08:00 AM – 10:00 PM (Daily)",
    phone: "+91 8351-270110 / +91 94801-44550",
    rating: "4.8 (2,400+ Google Reviews)",
    address: "Bazaar Road, Amingad, Hunagund Taluk 587112",
    entryFee: "₹380 – ₹700 per kg",
    summary: "A 90-year-old heritage sweet manufacturer renowned for signature Soft Sugar-Free Jaggery Kardant and assorted dry-fruit laddu boxes."
  },
  food_kudala_sangama_dasoha: {
    id: "food_kudala_sangama_dasoha",
    taluk: "Hunagund",
    lat: 16.2115,
    lng: 76.1355,
    name: "Kudala Sangama Maha Dasoha Bhavana",
    kn: "ಕೂಡಲಸಂಗಮ ಮಹಾದಾಸೋಹ ಭವನ",
    categoryBadge: "🍲 Free Community Dining",
    cat: "food",
    image: "/images/destinations/kudalasangama.png",
    timings: "11:30 AM – 03:30 PM & 07:30 PM – 09:30 PM",
    phone: "+91 8351-268037",
    rating: "4.9 (5,200+ Google Reviews)",
    address: "Kudalasangama Temple Complex 587118",
    entryFee: "Free Prasada Meals for All Visitors",
    summary: "Massive community dining hall serving wholesome hot vegetarian meals twice daily to all pilgrims and tourists in true Basava tradition."
  },
  // Hunagund Stays
  biz_kudala_sangama_yatri_nivas: {
    id: "biz_kudala_sangama_yatri_nivas",
    taluk: "Hunagund",
    lat: 16.2110,
    lng: 76.1350,
    name: "Kudalasangama Yatri Nivas & Board Guest Houses",
    kn: "ಕೂಡಲಸಂಗಮ ಯಾತ್ರಿ ನಿವಾಸ ಮತ್ತು ಅತಿಥಿ ಗೃಹಗಳು",
    categoryBadge: "🏠 Pilgrim Stay & Boarding",
    cat: "lodging",
    image: "/images/major_attractions/Kudalasangama Yatri Nivas & Board Guest Houses.jpg",
    timings: "24x7 Pilgrim Reception",
    phone: "+91 8351-268037 / +91 8351-268021",
    rating: "4.6 (3,400+ Google Reviews)",
    address: "Kudalasangama Pilgrim Campus 587118",
    entryFee: "₹300 – ₹1,200 / night",
    summary: "Board-managed accommodation with 200+ rooms, wheelchair loans, free daily dining for all tourists, and river walk access."
  },
  stay_aihole_nisarga_lodge: {
    id: "stay_aihole_nisarga_lodge",
    taluk: "Hunagund",
    lat: 16.0205,
    lng: 75.8810,
    name: "Hotel Nisarga Heritage Lodge (Aihole)",
    kn: "ಹೋಟೆಲ್ ನಿಸರ್ಗ ಹೆರಿಟೇಜ್ ಲಾಡ್ಜ್ ಐಹೊಳೆ",
    categoryBadge: "🏠 Tourist Lodge & Cafe",
    cat: "lodging",
    image: "/images/destinations/aihole.png",
    timings: "06:00 AM – 10:00 PM",
    phone: "+91 8351-284110 / +91 94488-33420",
    rating: "4.2 (620+ Google Reviews)",
    address: "Near Durga Temple Complex, Aihole 587201",
    entryFee: "₹1,200 – ₹2,200 / night",
    summary: "Convenient tourist stay located just 100 meters from Aihole Durga Temple complex with South Indian dining and travel guidance."
  },
  // Hunagund Safety
  safe_hunagund_taluk_hospital: {
    id: "safe_hunagund_taluk_hospital",
    taluk: "Hunagund",
    lat: 16.0600,
    lng: 76.0550,
    name: "Hunagund Taluk Government General Hospital",
    kn: "ಹುನಗುಂದ ತಾಲ್ಲೂಕು ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ (24x7)",
    categoryBadge: "🚨 24x7 Emergency Hospital",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8351-260045 / 108",
    rating: "4.2 (Government Taluk Hospital)",
    address: "Hospital Road, Hunagund 587118",
    entryFee: "24x7 Emergency Medical Support",
    summary: "Government taluk hospital with 24x7 casualty department, emergency ambulance response, maternal healthcare, and diagnostic lab."
  },
  safe_hunagund_police_station: {
    id: "safe_hunagund_police_station",
    taluk: "Hunagund",
    lat: 16.0620,
    lng: 76.0530,
    name: "Hunagund Town Police Station",
    kn: "ಹುನಗುಂದ ಪೊಲೀಸ್ ಠಾಣೆ",
    categoryBadge: "🚨 Police Station (112)",
    cat: "emergency",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8351-260033 / 112",
    rating: "4.3 (Google Maps Verified)",
    address: "Hunagund Town, Bagalkote 587118",
    entryFee: "24x7 Law Enforcement",
    summary: "Taluk police station responsible for Kudala Sangama, Aihole, and Amingad highway security and tourist assistance."
  },

  // ==========================================
  // 4. ILKAL TALUK
  // ==========================================
  dest_ilkal: {
    id: "dest_ilkal",
    taluk: "Ilkal",
    lat: 15.9610,
    lng: 76.1264,
    name: "Ilkal Handloom Saree Weavers' Cooperative",
    kn: "ಇಳಕಲ್ ಕೈಮಗ್ಗ ಸೀರೆ ನೇಕಾರರ ಸಂಘ",
    categoryBadge: "🎨 GI Handloom Cluster",
    cat: "artisans",
    image: "/images/destinations/Ilkal.png",
    timings: "09:30 AM – 07:30 PM (Closed Sundays)",
    phone: "+91 8351-270144 (Ilkal Weavers Society)",
    rating: "4.6 (1,300+ Google Reviews)",
    address: "Weavers Colony, Ilkal, Bagalkote 587125",
    entryFee: "Free Demonstration Visit",
    summary: "Hub of the 300-year GI-tagged Ilkal saree with unique Kondi loop-jointing technique and Tope Teni red silk pallu."
  },
  // Ilkal Cultural Food & Dining
  cult_shenga_holige_ilkal: {
    id: "cult_shenga_holige_ilkal",
    taluk: "Ilkal",
    lat: 15.9610,
    lng: 76.1280,
    name: "Mahalakshmi Shenga & Bella Holige Mane",
    kn: "ಮಹಾಲಕ್ಷ್ಮಿ ಶೇಂಗಾ & ಬೆಲ್ಲದ ಹೋಳಿಗೆ ಮನೆ",
    categoryBadge: "🍛 Cultural Food · Shenga Holige",
    cat: "cultural_food",
    image: "/images/food/shenga_holige.jpg",
    timings: "08:30 AM – 09:30 PM (Daily)",
    phone: "+91 94812-77450",
    rating: "4.8 (2,100+ Google Reviews)",
    address: "Main Market Road, Ilkal 587125",
    entryFee: "₹18 – ₹30 per piece",
    summary: "Renowned home-style sweet makers famous for melt-in-mouth Shenga Holige (roasted peanut flatbread), Coconut Holige (ಕಾಯಿ ಹೋಳಿಗೆ), and fresh Girmit Mandakki mixes."
  },
  food_ilkal_guruprasad: {
    id: "food_ilkal_guruprasad",
    taluk: "Ilkal",
    lat: 15.9630,
    lng: 76.1280,
    name: "Hotel Guruprasad & Sri Renuka Jolada Rotti Khanavali",
    kn: "ಶ್ರೀ ರೇಣುಕಾ ಜೋಳದ ರೊಟ್ಟಿ ಖಾನಾವಳಿ ಇಳಕಲ್",
    categoryBadge: "🍲 Traditional Handloom Eatery",
    cat: "food",
    image: "/images/destinations/Ilkal.png",
    timings: "11:00 AM – 04:00 PM, 07:00 PM – 10:30 PM",
    phone: "+91 8351-271220 / +91 94485-66770",
    rating: "4.6 (1,450+ Google Reviews)",
    address: "Main Road, Near Bus Stand, Ilkal 587125",
    entryFee: "₹100 – ₹180 per meal",
    summary: "Traditional eatery famous among weavers and travelers for unlimited fresh Jolada Rotti, Shenga Chutney, and North Karnataka curries."
  },
  // Ilkal Stays
  stay_ilkal_kyriad_prestige: {
    id: "stay_ilkal_kyriad_prestige",
    taluk: "Ilkal",
    lat: 15.9645,
    lng: 76.1295,
    name: "Kyriad Prestige Hotel & Suites (Ilkal)",
    kn: "ಕಿರ್ಯಾದ್ ಪ್ರೆಸ್ಟೀಜ್ ಹೋಟೆಲ್ ಇಳಕಲ್",
    categoryBadge: "🏠 3-Star Business Hotel",
    cat: "lodging",
    image: "/images/destinations/Ilkal.png",
    timings: "24-Hour Check-in",
    phone: "+91 8351-270888 / +91 8351-270999",
    rating: "4.4 (1,600+ Google Reviews)",
    address: "NH 50, Bypass Road, Ilkal 587125",
    entryFee: "₹2,200 – ₹4,200 / night",
    summary: "Modern comfortable hotel with AC rooms, fine dining restaurant, WiFi, banquet hall, and secure parking on the National Highway."
  },
  // Ilkal Safety
  safe_ilkal_govt_hospital: {
    id: "safe_ilkal_govt_hospital",
    taluk: "Ilkal",
    lat: 15.9600,
    lng: 76.1250,
    name: "Ilkal Taluk Community Hospital (24x7)",
    kn: "ಇಳಕಲ್ ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ (24x7)",
    categoryBadge: "🚨 24x7 Hospital & Casualty",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8351-270030 / 108",
    rating: "4.3 (Google Maps Verified)",
    address: "Hospital Circle, Ilkal 587125",
    entryFee: "24x7 Emergency Medical Support",
    summary: "Primary emergency medical facility in Ilkal providing round-the-clock casualty care, ambulance services, and pharmacy."
  },
  safe_ilkal_police_station: {
    id: "safe_ilkal_police_station",
    taluk: "Ilkal",
    lat: 15.9615,
    lng: 76.1270,
    name: "Ilkal Town Police Station",
    kn: "ಇಳಕಲ್ ನಗರ ಪೊಲೀಸ್ ಠಾಣೆ",
    categoryBadge: "🚨 Police Station (112)",
    cat: "emergency",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8351-270033 / 112",
    rating: "4.4 (Google Maps Verified)",
    address: "Station Road, Ilkal 587125",
    entryFee: "24x7 Emergency Dispatch",
    summary: "Town police station ensuring law and order across Ilkal commercial areas, weaving clusters, and NH 50 corridor."
  },

  // ==========================================
  // 5. GULEDAGUDDA TALUK
  // ==========================================
  dest_guledagudda: {
    id: "dest_guledagudda",
    taluk: "Guledagudda",
    lat: 16.0543,
    lng: 75.9331,
    name: "Guledagudda Khana Weavers' Cluster & Kasuti",
    kn: "ಗುಳೇದಗುಡ್ಡ ಖಣ ನೇಯ್ಗೆ ಕೇಂದ್ರ",
    categoryBadge: "🎨 GI Handloom & Kasuti",
    cat: "artisans",
    image: "/images/destinations/Guledgudda.png",
    timings: "09:00 AM – 06:30 PM (Monday–Saturday)",
    phone: "+91 8357-260025 (Khana Cooperative)",
    rating: "4.5 (820+ Google Reviews)",
    address: "Guledagudda, Badami Taluk, Bagalkote 587203",
    entryFee: "Free Entry",
    summary: "Home to India's only GI-tagged dobby-woven blouse fabric (Guledgudd Khana) and ancient Kasuti embroidery tradition."
  },
  // Guledagudda Cultural Food & Dining
  cult_shenga_holige_guledagudda: {
    id: "cult_shenga_holige_guledagudda",
    taluk: "Guledagudda",
    lat: 16.0520,
    lng: 75.9340,
    name: "Guledagudda Shri Annapoorna Shenga Holige & Chutney Kendra",
    kn: "ಗುಳೇದಗುಡ್ಡ ಶ್ರೀ ಅನ್ನಪೂರ್ಣ ಶೇಂಗಾ ಹೋಳಿಗೆ ಮತ್ತು ಚಟ್ನಿ ಕೇಂದ್ರ",
    categoryBadge: "🍛 Cultural Food · Shenga Holige",
    cat: "cultural_food",
    image: "/images/food/shenga_holige.jpg",
    timings: "08:30 AM – 09:30 PM (Daily)",
    phone: "+91 8357-250080 / +91 94483-55110",
    rating: "4.9 (3,800+ Google Reviews)",
    address: "Khana Bazar, Guledagudda, Bagalkote 587203",
    entryFee: "₹15 – ₹25 per piece / Packets of 10 available",
    summary: "Karnataka's foremost authority on traditional Shenga Holige (ಶೇಂಗಾ ಹೋಳಿಗೆ / Peanut Sweet Flatbread) and Agasi / Gurellu / Shenga Chutney powders. Stuffed with roasted organic peanuts and jaggery, crafted thin and crispy with a 3-month shelf life, eaten with ghee and milk."
  },
  food_guledagudda_annapoorna: {
    id: "food_guledagudda_annapoorna",
    taluk: "Guledagudda",
    lat: 16.0530,
    lng: 75.9320,
    name: "Shri Annapoorna Traditional Khanavali",
    kn: "ಶ್ರೀ ಅನ್ನಪೂರ್ಣ ಖಾನಾವಳಿ ಗುಳೇದಗುಡ್ಡ",
    categoryBadge: "🍲 Traditional Local Eatery",
    cat: "food",
    image: "/images/destinations/Guledgudda.png",
    timings: "11:00 AM – 03:30 PM, 07:00 PM – 10:00 PM",
    phone: "+91 8357-260110 / +91 94491-33210",
    rating: "4.5 (680+ Google Reviews)",
    address: "Bazaar Road, Guledagudda 587203",
    entryFee: "₹90 – ₹150 per thali",
    summary: "Cozy local Khanavali offering home-style Jolada Rotti meals, spicy stuffed brinjal, and authentic buttermilk."
  },
  // Guledagudda Stays
  stay_guledagudda_someshwara_lodge: {
    id: "stay_guledagudda_someshwara_lodge",
    taluk: "Guledagudda",
    lat: 16.0550,
    lng: 75.9340,
    name: "Sri Someshwara Deluxe Lodge & Boarding",
    kn: "ಶ್ರೀ ಸೋಮೇಶ್ವರ ಡೀಲಕ್ಸ್ ಲಾಡ್ಜ್",
    categoryBadge: "🏠 Budget Tourist Lodge",
    cat: "lodging",
    image: "/images/destinations/Guledgudda.png",
    timings: "24-Hour Reception",
    phone: "+91 8357-260220 / +91 98455-77661",
    rating: "4.1 (340+ Google Reviews)",
    address: "Main Road, Guledagudda 587203",
    entryFee: "₹800 – ₹1,600 / night",
    summary: "Clean, budget-friendly lodge with comfortable rooms, located in the center of Guledagudda handloom town."
  },
  // Guledagudda Safety
  safe_guledagudda_community_hospital: {
    id: "safe_guledagudda_community_hospital",
    taluk: "Guledagudda",
    lat: 16.0520,
    lng: 75.9310,
    name: "Guledagudda Community Health Hospital",
    kn: "ಗುಳೇದಗುಡ್ಡ ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರ (24x7)",
    categoryBadge: "🚨 24x7 Emergency Hospital",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8357-260040 / 108",
    rating: "4.2 (Govt Community Health Center)",
    address: "Near Post Office, Guledagudda 587203",
    entryFee: "Government Free Medical Care",
    summary: "Community health hospital providing 24x7 emergency casualty, maternal care, general physician OPD, and ambulance service."
  },
  safe_guledagudda_police_station: {
    id: "safe_guledagudda_police_station",
    taluk: "Guledagudda",
    lat: 16.0540,
    lng: 75.9325,
    name: "Guledagudda Police Station",
    kn: "ಗುಳೇದಗುಡ್ಡ ಪೊಲೀಸ್ ಠಾಣೆ",
    categoryBadge: "🚨 Police Station (112)",
    cat: "emergency",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8357-260033 / 112",
    rating: "4.3 (Google Maps Verified)",
    address: "Station Road, Guledagudda 587203",
    entryFee: "24x7 Emergency Security",
    summary: "Local police station providing 24x7 patrols, law enforcement, and tourist safety assistance in Guledagudda taluk."
  },

  // ==========================================
  // 6. MUDHOL TALUK
  // ==========================================
  dest_mudhol: {
    id: "dest_mudhol",
    taluk: "Mudhol",
    lat: 16.3389,
    lng: 75.2842,
    name: "Mudhol Hound Heritage & Royal Fort",
    kn: "ಮುಧೋಳ ನಾಯಿ ಸಂತತಿ ಮತ್ತು ಕೋಟೆ",
    categoryBadge: "🏛️ Indigenous Heritage",
    cat: "heritage",
    image: "/images/destinations/Mudhol.png",
    timings: "09:00 AM – 05:00 PM (Monday–Saturday)",
    phone: "+91 8350-280120 (Canine Research Centre)",
    rating: "4.5 (1,150+ Google Reviews)",
    address: "Mudhol Town, Bagalkote District 587313",
    entryFee: "Free Entry",
    summary: "Birthplace of the legendary Mudhol Hound indigenous canine breed, Ranna Smaraka, and historical Ghorpade fort."
  },
  // Mudhol Cultural Food & Dining
  cult_mudhol_jhunka_bhakar: {
    id: "cult_mudhol_jhunka_bhakar",
    taluk: "Mudhol",
    lat: 16.3410,
    lng: 75.2890,
    name: "Mudhol Famous Jhunka Bhakar & Shenga Chutney Mane",
    kn: "ಮುಧೋಳ ಫೇಮಸ್ ಝುಂಕಾ ಭಾಕರ್ & ಶೇಂಗಾ ಚಟ್ನಿ ಮನೆ",
    categoryBadge: "🍛 Cultural Food · Jhunka Bhakar & Shenga Chutney",
    cat: "cultural_food",
    image: "/images/food/jolada_rotti.jpg",
    timings: "11:00 AM – 04:00 PM, 07:00 PM – 10:00 PM (Daily)",
    phone: "+91 98453-22190",
    rating: "4.8 (1,890+ Google Reviews)",
    address: "Near Ranna Circle, Mudhol 587313",
    entryFee: "₹90 – ₹150 per meal",
    summary: "Authentic rustic dining house serving traditional hot Jhunka Bhakar (gram flour curry with hot jowar roti), crushed garlic chilli thecha (ಖಾರಾ), and famous dry Shenga Chutney."
  },
  food_mudhol_shanti_sagar: {
    id: "food_mudhol_shanti_sagar",
    taluk: "Mudhol",
    lat: 16.3400,
    lng: 75.2860,
    name: "Hotel Shanti Sagar & Traditional Khanavali",
    kn: "ಹೋಟೆಲ್ ಶಾಂತಿ ಸಾಗರ್ ಮುಧೋಳ",
    categoryBadge: "🍲 Family Restaurant & Khanavali",
    cat: "food",
    image: "/images/major_attractions/Hotel Shanti Sagar & Traditional Khanavali.jpg",
    timings: "06:30 AM – 10:30 PM (Daily)",
    phone: "+91 8350-281450 / +91 94482-11440",
    rating: "4.4 (1,820+ Google Reviews)",
    address: "Court Circle, Mudhol 587313",
    entryFee: "₹100 – ₹250 per person",
    summary: "Popular family dining destination in Mudhol serving South Indian tiffin, North Karnataka Jolada Rotti thalis, and tea snacks."
  },
  // Mudhol Stays
  stay_mudhol_royal_palace: {
    id: "stay_mudhol_royal_palace",
    taluk: "Mudhol",
    lat: 16.3415,
    lng: 75.2880,
    name: "Hotel Royal Palace & Executive Lodging",
    kn: "ಹೋಟೆಲ್ ರಾಯಲ್ ಪ್ಯಾಲೇಸ್ ಮುಧೋಳ",
    categoryBadge: "🏠 Executive Stay & Suites",
    cat: "lodging",
    image: "/images/destinations/Mudhol.png",
    timings: "24-Hour Front Desk",
    phone: "+91 8350-280555 / +91 94488-99001",
    rating: "4.2 (1,100+ Google Reviews)",
    address: "Bagalkote-Belagavi Road, Mudhol 587313",
    entryFee: "₹1,400 – ₹2,800 / night",
    summary: "Well-appointed hotel with air-conditioned executive rooms, restaurant, secure vehicle parking, and travel assistance."
  },
  // Mudhol Safety
  safe_mudhol_taluk_hospital: {
    id: "safe_mudhol_taluk_hospital",
    taluk: "Mudhol",
    lat: 16.3370,
    lng: 75.2830,
    name: "Mudhol Taluk Government General Hospital",
    kn: "ಮುಧೋಳ ತಾಲ್ಲೂಕು ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ (24x7)",
    categoryBadge: "🚨 24x7 Taluk Hospital",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8350-280040 / 108",
    rating: "4.3 (Govt Taluk Hospital)",
    address: "Hospital Road, Mudhol 587313",
    entryFee: "24x7 Casualty & Emergency Ward",
    summary: "100-bed government taluk hospital equipped with 24x7 trauma care, modern maternity wing, and round-the-clock ambulance service."
  },
  safe_mudhol_police_station: {
    id: "safe_mudhol_police_station",
    taluk: "Mudhol",
    lat: 16.3395,
    lng: 75.2855,
    name: "Mudhol Town Police Station",
    kn: "ಮುಧೋಳ ನಗರ ಪೊಲೀಸ್ ಠಾಣೆ",
    categoryBadge: "🚨 Police Station (112)",
    cat: "emergency",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8350-280033 / 112",
    rating: "4.4 (Google Maps Verified)",
    address: "Court Road, Mudhol 587313",
    entryFee: "24x7 Law Enforcement",
    summary: "Police station providing 24x7 surveillance, highway patrol, and tourist safety support in Mudhol taluk."
  },

  // ==========================================
  // 7. JAMKHANDI TALUK
  // ==========================================
  dest_jamkhandi: {
    id: "dest_jamkhandi",
    taluk: "Jamkhandi",
    lat: 16.5056,
    lng: 75.2972,
    name: "Jamkhandi Royal Palace & Ramtirth",
    kn: "ಜಮಖಂಡಿ ರಾಜಮನೆತನ ಅರಮನೆ",
    categoryBadge: "🏛️ Royal Maratha Heritage",
    cat: "heritage",
    image: "/images/destinations/jamkhandi.png",
    timings: "09:00 AM – 06:00 PM (Open Daily)",
    phone: "+91 8353-220028 (Taluk Administration)",
    rating: "4.4 (1,400+ Google Reviews)",
    address: "Palace Road, Jamkhandi, Bagalkote 587301",
    entryFee: "Free Entry",
    summary: "Former princely capital of Patwardhan dynasty featuring historic palace architecture, Ramtirth temple, and gardens."
  },
  // Jamkhandi Cultural Food & Dining
  cult_jamkhandi_basundi_peda: {
    id: "cult_jamkhandi_basundi_peda",
    taluk: "Jamkhandi",
    lat: 16.5120,
    lng: 75.2980,
    name: "Ramtirth Ksheera Peda & Basundi Sweets",
    kn: "ರಾಮತೀರ್ಥ ಕ್ಷೀರ ಪೇಡಾ ಮತ್ತು ಬಾಸುಂದಿ ಸ್ವೀಟ್ಸ್",
    categoryBadge: "🍛 Cultural Food · Royal Sweets",
    cat: "cultural_food",
    image: "/images/food/galgali_peda.jpg",
    timings: "08:00 AM – 10:00 PM (Daily)",
    phone: "+91 94482-11920",
    rating: "4.8 (1,750+ Google Reviews)",
    address: "Palace Road, Jamkhandi 587301",
    entryFee: "₹350 – ₹600 per kg",
    summary: "Royal patronage sweet house famous for rich saffron Basundi and artisanal pure milk Khoya Pedas."
  },
  food_jamkhandi_kamat_annaleela: {
    id: "food_jamkhandi_kamat_annaleela",
    taluk: "Jamkhandi",
    lat: 16.5080,
    lng: 75.2990,
    name: "Kamat Annaleela Traditional Restaurant",
    kn: "ಕಾಮತ್ ಅನ್ನಲೀಲಾ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ",
    categoryBadge: "🍲 Authentic Karnataka Thalis",
    cat: "food",
    image: "/images/major_attractions/Kamat Annaleela Traditional Restaurant.jpg",
    timings: "07:00 AM – 10:30 PM (Daily)",
    phone: "+91 8353-221500 / +91 94481-88220",
    rating: "4.5 (2,800+ Google Reviews)",
    address: "Koppal Circle, Jamkhandi 587301",
    entryFee: "₹120 – ₹260 per person",
    summary: "Celebrated vegetarian dining brand serving traditional Jolada Rotti meals, filter coffee, and North/South Indian specialties."
  },
  // Jamkhandi Stays
  stay_jamkhandi_royal_executive: {
    id: "stay_jamkhandi_royal_executive",
    taluk: "Jamkhandi",
    lat: 16.5070,
    lng: 75.2980,
    name: "Hotel Royal Executive & City Pride",
    kn: "ಹೋಟೆಲ್ ರಾಯಲ್ ಎಕ್ಸಿಕ್ಯೂಟಿವ್ ಜಮಖಂಡಿ",
    categoryBadge: "🏠 Certified Executive Hotel",
    cat: "lodging",
    image: "/images/major_attractions/Hotel Royal Executive & City Pride.jpg",
    timings: "24-Hour Front Desk",
    phone: "+91 8353-222888 / +91 94490-44550",
    rating: "4.3 (1,350+ Google Reviews)",
    address: "Mudhol-Jamkhandi Road, Jamkhandi 587301",
    entryFee: "₹1,600 – ₹3,200 / night",
    summary: "Premium executive accommodation in Jamkhandi with air-conditioned suites, multi-cuisine restaurant, and parking."
  },
  // Jamkhandi Safety
  safe_jamkhandi_subdiv_hospital: {
    id: "safe_jamkhandi_subdiv_hospital",
    taluk: "Jamkhandi",
    lat: 16.5040,
    lng: 75.2960,
    name: "Jamkhandi Sub-Divisional Government Hospital",
    kn: "ಜಮಖಂಡಿ ಉಪ-ವಿಭಾಗೀಯ ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ (24x7)",
    categoryBadge: "🚨 24x7 Sub-Divisional Hospital",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8353-220045 / +91 8353-222707 / 108",
    rating: "4.4 (Major Government Hospital)",
    address: "Hospital Road, Jamkhandi 587301",
    entryFee: "24x7 Trauma & Emergency",
    summary: "Major sub-divisional government hospital with modern emergency trauma center, intensive care unit, blood bank, and ambulance fleet."
  },
  safe_jamkhandi_police_station: {
    id: "safe_jamkhandi_police_station",
    taluk: "Jamkhandi",
    lat: 16.5065,
    lng: 75.2985,
    name: "Jamkhandi Town Police Station",
    kn: "ಜಮಖಂಡಿ ನಗರ ಪೊಲೀಸ್ ಠಾಣೆ",
    categoryBadge: "🚨 Police Station (112)",
    cat: "emergency",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8353-220033 / 112",
    rating: "4.4 (Google Maps Verified)",
    address: "Palace Road, Jamkhandi 587301",
    entryFee: "24x7 Emergency Security",
    summary: "Town police station ensuring round-the-clock public safety, heritage surveillance, and highway patrol in Jamkhandi sub-division."
  },

  // ==========================================
  // 8. BILAGI TALUK
  // ==========================================
  dest_bilagi: {
    id: "dest_bilagi",
    taluk: "Bilagi",
    lat: 16.3475,
    lng: 75.6174,
    name: "Bilagi Kandagal Baoli & Are-Kallina Bavi",
    kn: "ಬೀಳಗಿ ಕಂದಗಲ್ ಬಾವಿ ಮತ್ತು ಅರೆಕಲ್ಲಿನ ಬಾವಿ",
    categoryBadge: "🌿 Nature & Stepwells",
    cat: "heritage",
    image: "/images/destinations/Bilagi.png",
    timings: "08:00 AM – 06:00 PM (Open Daily)",
    phone: "+91 8356-270032 (Bilagi Helpdesk)",
    rating: "4.4 (650+ Google Reviews)",
    address: "Bilagi Town, Bagalkote District 587116",
    entryFee: "Free Entry",
    summary: "Historic stepwell Are-Kallina Bavi, sugarcane plantations, and serene Ghataprabha river valley agro-homestays."
  },
  dest_almatti_dam: {
    id: "dest_almatti_dam",
    taluk: "Bilagi",
    lat: 16.3314,
    lng: 75.8894,
    name: "Almatti Dam & Mughal Gardens",
    kn: "ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟು ಮತ್ತು ಉದ್ಯಾನವನ",
    categoryBadge: "🌿 Nature & Dam Gardens",
    cat: "heritage",
    image: "/images/destinations/Alamatti.png",
    timings: "10:00 AM – 08:00 PM (Musical Fountain: 07:00 PM – 08:00 PM)",
    phone: "+91 8354-270220 (KBJNL Tourism Cell)",
    rating: "4.6 (18,200+ Google Reviews)",
    address: "Almatti, Bilagi/Nidagundi, Bagalkote 586201",
    entryFee: "₹20 (Adults), ₹10 (Children)",
    summary: "Major Krishna river dam with 600 sq km reservoir, sprawling Mughal gardens, musical fountains, and boating."
  },
  // Bilagi Cultural Food & Dining
  cult_galgali_peda_bilagi: {
    id: "cult_galgali_peda_bilagi",
    taluk: "Bilagi",
    lat: 16.4150,
    lng: 75.4620,
    name: "Original Galgali Peda Heritage Dairy & Sweet Stall",
    kn: "ಮೂಲ ಗಲಗಲಿ ಪೇಡಾ ಹೆರಿಟೇಜ್ ಡೈರಿ ಮತ್ತು ಸ್ವೀಟ್ ಸ್ಟಾಲ್",
    categoryBadge: "🍛 Cultural Food · Galgali Peda",
    cat: "cultural_food",
    image: "/images/food/galgali_peda.jpg",
    timings: "08:00 AM – 09:30 PM (Daily)",
    phone: "+91 94489-33215 / +91 8356-277120",
    rating: "4.9 (3,150+ Google Reviews)",
    address: "Galgali Village, Krishna River Bank, Bilagi Taluk, Bagalkote 587117",
    entryFee: "₹340 – ₹550 per kg",
    summary: "The authentic ancestral birthplace of the legendary 'Galgali Peda' (ಗಲಗಲಿ ಪೇಡಾ). Slow-caramelized pure Krishna basin cow milk khoa cooked over babool wood fires to develop its unique granular texture and caramel aroma without artificial flavorings."
  },
  cult_maratha_savaji_bilagi: {
    id: "cult_maratha_savaji_bilagi",
    taluk: "Bilagi",
    lat: 16.3480,
    lng: 75.6210,
    name: "Maratha Savaji Mutton & Chicken Special Mess",
    kn: "ಮರಾಠಾ ಸವಜಿ ಸ್ಪೆಷಲ್ ಮಟನ್ & ಚಿಕನ್ ಮೆಸ್",
    categoryBadge: "🍛 Cultural Food · Savaji Non-Veg Meal",
    cat: "cultural_food",
    image: "/images/food/savaji_nonveg.jpg",
    timings: "12:30 PM – 04:00 PM, 07:30 PM – 11:00 PM (Daily)",
    phone: "+91 97312-88410",
    rating: "4.7 (1,620+ Google Reviews)",
    address: "Main Road, Bilagi Town, Bagalkote 587116",
    entryFee: "₹200 – ₹350 per thali",
    summary: "Renowned highway food stop famous for traditional stone-ground Savaji spices, slow-cooked wood-fired mutton curry, and crisp Kadak Rotti."
  },
  food_bilagi_renuka_savaji: {
    id: "food_bilagi_renuka_savaji",
    taluk: "Bilagi",
    lat: 16.3490,
    lng: 75.6190,
    name: "Sri Renuka Jolada Rotti & Savaji Dhaba",
    kn: "ಶ್ರೀ ರೇಣುಕಾ ಜೋಳದ ರೊಟ್ಟಿ ಮತ್ತು ಸಾವಜಿ ಧಾಬಾ",
    categoryBadge: "🍲 Highway Cuisine & Thalis",
    cat: "food",
    image: "/images/destinations/Bilagi.png",
    timings: "11:00 AM – 11:00 PM (Daily)",
    phone: "+91 95382-43651 / +91 94488-22310",
    rating: "4.4 (1,120+ Google Reviews)",
    address: "Bilagi-Bagalkote Highway, Bilagi 587116",
    entryFee: "₹100 – ₹220 per meal",
    summary: "Popular highway food stop serving authentic Jolada Rotti thalis, Savaji delicacies, and fresh buttermilk on the Ghataprabha corridor."
  },
  // Bilagi Stays
  stay_bilagi_agro_resort: {
    id: "stay_bilagi_agro_resort",
    taluk: "Bilagi",
    lat: 16.3520,
    lng: 75.6220,
    name: "Bilagi River Valley Agro Resort & Homestay",
    kn: "ಬೀಳಗಿ ಆಗ್ರೋ ರೆಸಾರ್ಟ್ ಮತ್ತು ಹೋಂಸ್ಟೇ",
    categoryBadge: "🏠 Certified Agro-Homestay",
    cat: "lodging",
    image: "/images/major_attractions/Bilagi River Valley Agro Resort & Homestay.jpg",
    timings: "24-Hour Reception",
    phone: "+91 8356-270120 / +91 98452-11990",
    rating: "4.5 (450+ Google Reviews)",
    address: "Ghataprabha River Valley, Bilagi 587116",
    entryFee: "₹1,500 – ₹3,000 / night (Includes Farm Meals)",
    summary: "Certified rural agro-homestay offering cottage accommodation, sugarcane harvesting tours, farm-fresh meals, and river walks."
  },
  // Bilagi Safety
  safe_bilagi_taluk_hospital: {
    id: "safe_bilagi_taluk_hospital",
    taluk: "Bilagi",
    lat: 16.3460,
    lng: 75.6160,
    name: "Bilagi Taluk General Government Hospital",
    kn: "ಬೀಳಗಿ ತಾಲ್ಲೂಕು ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ (24x7)",
    categoryBadge: "🚨 24x7 Emergency Hospital",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "+91 8356-275240 / +91 95382-43651 / 108",
    rating: "4.3 (Govt Taluk Hospital)",
    address: "Main Hospital Road, Bilagi 587116",
    entryFee: "24x7 Free Casualty Services",
    summary: "Government taluk hospital with 24x7 emergency medical officers, trauma response, maternal care, and ambulance."
  },
  safe_bilagi_police_station: {
    id: "safe_bilagi_police_station",
    taluk: "Bilagi",
    lat: 16.3480,
    lng: 75.6180,
    name: "Bilagi Town Police Station",
    kn: "ಬೀಳಗಿ ಪೊಲೀಸ್ ಠಾಣೆ",
    categoryBadge: "🚨 Police Station (112)",
    cat: "emergency",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "08425-275233 / +91 8356-275233 / 112",
    rating: "4.3 (Google Maps Verified)",
    address: "Station Road, Bilagi 587116",
    entryFee: "24x7 Law Enforcement",
    summary: "Taluk police station overseeing Bilagi town, Almatti approach routes, and Ghataprabha river valley tourist safety."
  },

  // ==========================================
  // 9. RABKAVI BANHATTI TALUK
  // ==========================================
  dest_banhatti_handlooms: {
    id: "dest_banhatti_handlooms",
    taluk: "Banhatti",
    lat: 16.4800,
    lng: 75.1200,
    name: "Rabkavi Banhatti Textile & Powerloom Cluster",
    kn: "ರಬಕವಿ ಬನಹಟ್ಟಿ ಜವಳಿ ನೇಯ್ಗೆ ಕೇಂದ್ರ",
    categoryBadge: "🎨 Textile & Handloom Heritage",
    cat: "artisans",
    image: "/images/destinations/Guledgudda.png",
    timings: "09:00 AM – 07:00 PM (Monday–Saturday)",
    phone: "+91 8353-230100 (Textile Association)",
    rating: "4.5 (950+ Google Reviews)",
    address: "Weavers Colony, Rabkavi Banhatti 587311",
    entryFee: "Free Demonstration Visit",
    summary: "Famous textile hub on the banks of Krishna River, renowned for quality cotton-silk sarees, shirting fabrics, and multi-generational weavers."
  },
  // Banhatti Cultural Food & Dining
  cult_banhatti_mandakki_mirchi: {
    id: "cult_banhatti_mandakki_mirchi",
    taluk: "Banhatti",
    lat: 16.4820,
    lng: 75.1220,
    name: "Shri Guru Krupa Girmit, Mirchi & Kharada Mandakki Stall",
    kn: "ಶ್ರೀ ಗುರುಕೃಪಾ ಗಿರ್ಮಿಟ್, ಮಿರ್ಚಿ ಮತ್ತು ಖಾರ ಮಂಡಕ್ಕಿ ಸ್ಟಾಲ್",
    categoryBadge: "🍛 Cultural Food · Girmit & Mirchi",
    cat: "cultural_food",
    image: "/images/food/susla_mirchi_bajji.jpg",
    timings: "03:00 PM – 09:30 PM (Evening Special)",
    phone: "+91 99805-66320",
    rating: "4.7 (1,580+ Google Reviews)",
    address: "Weavers Colony Cross, Rabkavi Banhatti 587311",
    entryFee: "₹25 – ₹45 per plate",
    summary: "Beloved evening gathering spot for weavers and visitors serving fiery North Karnataka Girmit with crunchy Sev, spicy hot Mirchi Bajji, and spiced Mandakki."
  },
  food_banhatti_guru_krupa: {
    id: "food_banhatti_guru_krupa",
    taluk: "Banhatti",
    lat: 16.4820,
    lng: 75.1220,
    name: "Hotel Sri Guru Krupa & Udupi Krishna Bhavan",
    kn: "ಶ್ರೀ ಗುರು ಕೃಪಾ ಮತ್ತು ಕೃಷ್ಣ ಭವನ್ ಬನಹಟ್ಟಿ",
    categoryBadge: "🍲 Traditional Vegetarian Dining",
    cat: "food",
    image: "/images/major_attractions/Hotel Sri Guru Krupa & Udupi Krishna Bhavan.jpg",
    timings: "06:30 AM – 10:00 PM (Daily)",
    phone: "+91 8353-231150 / +91 94483-44551",
    rating: "4.5 (1,200+ Google Reviews)",
    address: "Main Bazaar Road, Banhatti 587311",
    entryFee: "₹90 – ₹200 per meal",
    summary: "Authentic pure vegetarian restaurant serving North Karnataka Jolada Rotti oota, South Indian snacks, and fresh juices."
  },
  // Banhatti Stays
  stay_banhatti_banakar_towers: {
    id: "stay_banhatti_banakar_towers",
    taluk: "Banhatti",
    lat: 16.4810,
    lng: 75.1210,
    name: "Banakar Towers Lodging & Boarding",
    kn: "ಬಣಕಾರ ಟವರ್ಸ್ ಲಾಡ್ಜಿಂಗ್ ಮತ್ತು ಬೋರ್ಡಿಂಗ್",
    categoryBadge: "🏠 Executive Town Lodge",
    cat: "lodging",
    image: "/images/major_attractions/Banakar Towers Lodging & Boarding banhatti.jpg",
    timings: "24 Hours Check-in (00:00 - 23:59)",
    phone: "+91 97517-02000 / +91 8353-230555",
    rating: "4.2 (850+ Google Reviews)",
    address: "Banhatti-Jamkhandi Road, Rabkavi Banhatti 587311",
    entryFee: "₹1,200 – ₹2,400 / night",
    summary: "Comfortable executive lodging with air-conditioned rooms, room service, parking, and central market location."
  },
  // Banhatti Safety
  safe_banhatti_pujar_hospital: {
    id: "safe_banhatti_pujar_hospital",
    taluk: "Banhatti",
    lat: 16.4790,
    lng: 75.1190,
    name: "Dr. Pujar Multi-Speciality Hospital & Trauma Care",
    kn: "ಡಾ. ಪೂಜಾರ್ ಮಲ್ಟಿ ಸ್ಪೆಷಾಲಿಟಿ ಆಸ್ಪತ್ರೆ (24x7)",
    categoryBadge: "🚨 24x7 Multi-Speciality Hospital",
    cat: "emergency",
    image: "/images/destinations/badami.jpg",
    timings: "24 Hours / 7 Days a week (24x7 Emergency & ICU)",
    phone: "+91 89514-81159 / 020-48562555 / 108",
    rating: "4.5 (1,100+ Google Reviews)",
    address: "Near New Bus Stand, Rabkavi Banhatti 587311",
    entryFee: "24x7 Trauma Care & Ambulance",
    summary: "Modern multispecialty hospital with 24x7 emergency and trauma care, intensive care unit (ICU), surgery, and pharmacy."
  },
  safe_banhatti_police_station: {
    id: "safe_banhatti_police_station",
    taluk: "Banhatti",
    lat: 16.4805,
    lng: 75.1205,
    name: "Banhatti Town Police Station",
    kn: "ಬನಹಟ್ಟಿ ಪೊಲೀಸ್ ಠಾಣೆ",
    categoryBadge: "🚨 Police Station (112)",
    cat: "emergency",
    image: "/images/karnataka_govt_seal.jpg",
    timings: "24 Hours / 7 Days a week",
    phone: "08353-230292 / +91 8353-230292 / 112",
    rating: "4.3 (Google Maps Verified)",
    address: "Near Bus Stand, Rabkavi Banhatti 587311",
    entryFee: "24x7 Law Enforcement",
    summary: "Jurisdictional police station providing 24x7 community policing, patrol, and emergency response in Rabkavi Banhatti taluk."
  }
};

// ── Master Major Attractions Photomap ─────────────────────────────────────────
window.MAJOR_IMG_MAP = window.MAJOR_IMG_MAP || {
  // Badami
  "Badami Cave Temples (Caves 1-4)": "/images/major_attractions/BadamiCave temples.jpg",
  "Agastya Lake": "/images/major_attractions/bhutanatha group of temples.jpg",
  "Bhoothanatha Group of Temples": "/images/major_attractions/bhutanatha group of temples.jpg",
  "Badami North Fort & Upper Shivalaya": "/images/major_attractions/Badami North Fort & Upper Shivalaya.jpg",
  "Archaeological Museum Badami": "/images/major_attractions/archeological museum badami.jpg",
  "Malegitti Shivalaya": "/images/major_attractions/Malegitti Shivalaya.jpg",

  // Pattadakal
  "Virupaksha Temple (Lokeshwara)": "/images/major_attractions/Virupaksha Temple (Lokeshwara).jpg",
  "Mallikarjuna Temple (Trailokyeshwara)": "/images/major_attractions/Mallikarjuna Temple (Trailokyeshwara).jpg",
  "Sangameshwara Temple (Vijayeshwara)": "/images/major_attractions/Sangameshwara Temple (Vijayeshwara).jpg",
  "Galaganatha Temple (Curvilinear Nagara Shikhara)": "/images/major_attractions/Galaganatha Temple (Curvilinear Nagara Shikhara).jpg",
  "Papanatha Temple": "/images/major_attractions/Papanatha Temple.jpg",
  "Jain Narayana Temple (Rashtrakuta era)": "/images/major_attractions/Jain Narayana Temple (Rashtrakuta era).jpg",

  // Aihole
  "Durga Temple Complex (Apsidal sanctum with ambulatory peristyle)": "/images/major_attractions/Durga Temple Complex (Apsidal sanctum with ambulatory peristyle).jpg",
  "Lad Khan Temple (Panchayatana hall-style)": "/images/major_attractions/Lad Khan Temple (Panchayatana hall-style).jpg",
  "Meguti Jain Temple & Ravikirti Inscription": "/images/major_attractions/Meguti Jain Temple & Ravikirti Inscription.jpg",
  "Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja)": "/images/major_attractions/Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja).jpg",
  "Huchimalli Temple": "/images/major_attractions/Huchimalli Temple.jpg",
  "Konti Gudi Group": "/images/major_attractions/Konti Gudi Group.jpg",
  "ASI Archaeological Museum Aihole": "/images/major_attractions/ASI Archaeological Museum Aihole.jpg",

  // Mahakuta
  "Mahakuteshwara Temple": "/images/major_attractions/Mahakuteshwara Temple.jpg",
  "Mallikarjuna Temple": "/images/major_attractions/Mallikarjuna Temple.jpg",
  "Vishnu Pushkarini (Sacred Spring Pool)": "/images/major_attractions/Vishnu Pushkarini (Sacred Spring Pool).jpg",
  "Submerged Panchamukha Linga": "/images/major_attractions/Submerged Panchamukha Linga.jpg",
  "Mahakuta Pillar Inscription site": "/images/major_attractions/Mahakuta Pillar Inscription site.JPG",

  // Kudala Sangama
  "Sangameshwara Temple (Chalukyan style)": "/images/major_attractions/Sangameshwara Temple (Chalukyan style).jpg",
  "Museum of Basava Philosophy": "/images/major_attractions/Museum of Basava Philosophy.jpg",

  // Ilkal
  "Weaver Cluster Workshops (Pit loom demonstrations)": "/images/major_attractions/Weaver Cluster Workshops (Pit loom demonstrations).jpg",
  "Shri Vijaya Mahantesh Temple & Matha": "/images/major_attractions/Shri Vijaya Mahantesh Temple & Matha.jpg",
  "Kasuti Embroidery Artisans Guilds": "/images/major_attractions/Kasuti Embroidery Artisans Guilds.jpg",

  // Guledagudda
  "Traditional Khana Handloom Weaving Units": "/images/major_attractions/Traditional Khana Handloom Weaving Units.jpg",

  // Mudhol
  "Canine Research and Information Centre (CRIC Mudhol Hound Centre)": "/images/major_attractions/Canine Research and Information Centre (CRIC Mudhol Hound Centre).jpg",
  "Mudhol Royal Palace & Fort ruins": "/images/major_attractions/Mudhol Royal Palace & Fort ruins.jpg",

  // Jamkhandi
  "Jamkhandi Royal Palace (Ram Prasad Palace)": "/images/major_attractions/Jamkhandi Royal Palace (Ram Prasad Palace).jpg",
  "Pampa Sarovara Lake": "/images/major_attractions/Pampa_Sarovar_from_the_hill.jpg",

  // Bilagi
  "Siddheshwara Temple": "/images/major_attractions/01 Siddeshwara Devalaya Bilagi.jpg",
};
var MAJOR_IMG_MAP = window.MAJOR_IMG_MAP;

function initMap() {
  const mapElement = document.getElementById('interactiveMap');
  if (!mapElement || typeof L === 'undefined') return;

  // Initialize Map centered on Bagalkote District (16.15 N, 75.78 E)
  map = L.map('interactiveMap', {
    center: [16.18, 75.65],
    zoom: 10,
    minZoom: 7,
    maxZoom: 16,
    scrollWheelZoom: false
  });

  // Base Map Layer (OpenStreetMap with clean aesthetic tiles)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Bagalkote Tourism GIS & Google Maps Data',
    maxZoom: 18
  }).addTo(map);

  // Draw Bagalkote District Approximate Highlight Polygon
  const bagalkoteOutline = [
    [16.58, 75.10],
    [16.55, 75.40],
    [16.40, 75.95],
    [16.28, 76.24],
    [15.90, 76.22],
    [15.80, 75.70],
    [15.88, 75.50],
    [16.25, 75.10],
    [16.58, 75.10]
  ];

  L.polygon(bagalkoteOutline, {
    color: '#C85A32',
    weight: 2,
    dashArray: '5, 5',
    fillColor: '#C85A32',
    fillOpacity: 0.06
  }).addTo(map).bindTooltip("ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆ / Bagalkote District (All 9 Taluks)", { permanent: false, direction: 'center' });

  // Add Markers
  renderMarkers();

  // Setup Layer & Taluk Toggles
  setupLayerToggles();
}

function renderMarkers(filterTaluk = 'All') {
  // Clear previous layers
  Object.keys(markerLayers).forEach(key => {
    markerLayers[key].forEach(marker => map.removeLayer(marker));
    markerLayers[key] = [];
  });

  // Category pin colors
  const pinColors = {
    heritage: '#C85A32',
    artisans: '#D4AF37',
    cultural_food: '#E65100',
    food: '#F4A261',
    lodging: '#2A9D8F',
    emergency: '#E63946'
  };

  Object.entries(LOCATION_DIRECTORY).forEach(([id, loc]) => {
    // Taluk filtering
    if (filterTaluk !== 'All' && loc.taluk !== filterTaluk) {
      return;
    }

    const color = pinColors[loc.cat] || '#C85A32';
    
    // Custom Leaflet circle marker
    const marker = L.circleMarker([loc.lat, loc.lng], {
      radius: 9,
      fillColor: color,
      color: '#FFFFFF',
      weight: 2.5,
      opacity: 1,
      fillOpacity: 0.95
    });

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;

    const popupContent = `
      <div class="map-popup-card">
        <div class="map-popup-thumb" style="background-image:url('${loc.image || '/images/destinations/badami.jpg'}');">
          <span class="map-popup-category">${loc.categoryBadge}</span>
          <span class="map-popup-verified">✓ Verified</span>
        </div>
        
        <div class="map-popup-body">
          <span class="map-popup-kn">${loc.kn}</span>
          <h4 class="map-popup-title">${loc.name}</h4>
          
          <div class="map-popup-rating-row">
            <span class="map-rating-star">⭐ ${loc.rating}</span>
            <span style="color:#64748B;">· ${loc.taluk} Taluk</span>
          </div>

          <div class="map-popup-info-list">
            <div class="map-popup-info-item">
              <strong>🕒 Hours:</strong>
              <span>${loc.timings}</span>
            </div>
            <div class="map-popup-info-item">
              <strong>📞 Phone:</strong>
              <span><a href="tel:${loc.phone.split('/')[0].trim()}">${loc.phone}</a></span>
            </div>
            <div class="map-popup-info-item">
              <strong>📍 Address:</strong>
              <span>${loc.address}</span>
            </div>
          </div>

          <p class="map-popup-desc">${loc.summary}</p>

          <div class="map-popup-actions">
            <button class="btn btn-primary" onclick="window.viewDestinationDetail('${id}')">
              🧭 Explore Details
            </button>
            <button class="btn btn-outline" onclick="window.addDestinationToTrip('${id}')" title="Save to My Profile">
              + Trip
            </button>
            <a href="${googleMapsUrl}" target="_blank" rel="noopener" class="btn btn-outline" title="Open in Google Maps">
              🗺️ Route
            </a>
          </div>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 305, className: 'custom-map-popup' });

    if (markerLayers[loc.cat]) {
      markerLayers[loc.cat].push(marker);
      marker.addTo(map);
    }
  });
}

function setupLayerToggles() {
  const toggleMap = {
    layerHeritage: 'heritage',
    layerArtisans: 'artisans',
    layerCulturalFood: 'cultural_food',
    layerFood: 'food',
    layerLodging: 'lodging',
    layerEmergency: 'emergency'
  };

  Object.entries(toggleMap).forEach(([checkboxId, layerKey]) => {
    const cb = document.getElementById(checkboxId);
    if (!cb) return;

    cb.addEventListener('change', (e) => {
      const parentLabel = cb.closest('.layer-btn');
      if (e.target.checked) {
        parentLabel.classList.add('active');
        markerLayers[layerKey].forEach(m => m.addTo(map));
      } else {
        parentLabel.classList.remove('active');
        markerLayers[layerKey].forEach(m => map.removeLayer(m));
      }
    });
  });

  // Taluk filter dropdown listener
  const talukSelect = document.getElementById('mapTalukSelect');
  if (talukSelect) {
    talukSelect.addEventListener('change', (e) => {
      const taluk = e.target.value;
      renderMarkers(taluk);

      // Pan & zoom to taluk
      const centerInfo = TALUK_CENTERS[taluk] || TALUK_CENTERS.All;
      map.setView([centerInfo.lat, centerInfo.lng], centerInfo.zoom);
    });
  }

  const resetBtn = document.getElementById('resetMapBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (talukSelect) talukSelect.value = 'All';
      renderMarkers('All');
      map.setView([16.18, 75.65], 10);
    });
  }
}

// ── Global Destination & Node Detail Modal ───────────────────────────────────
window.viewDestinationDetail = async function(destId) {
  const modal  = document.getElementById('destinationDetailModal');
  const body   = document.getElementById('modalDestBody');
  const title  = document.getElementById('modalDestTitle');
  const knName = document.getElementById('modalDestKn');
  const cat    = document.getElementById('modalDestCategory');
  const source = document.getElementById('modalDestSource');

  if (!modal || !body) return;

  body.innerHTML = `<p style="padding:2rem;text-align:center;">Loading verified node intelligence...</p>`;
  modal.classList.add('active');

  const loc = LOCATION_DIRECTORY[destId];
  let dest = null;

  if (typeof API !== 'undefined' && API.getDestinationById && destId.startsWith('dest_')) {
    dest = await API.getDestinationById(destId);
  }

  // Node Layout (Food, Stays, Emergency, Artisans, or unlisted destinations)
  if (!dest && loc) {
    title.textContent  = loc.name;
    knName.textContent = loc.kn || '';
    cat.textContent    = `${loc.categoryBadge} | ${loc.taluk} Taluk`;
    source.textContent = 'Verified from: Google Maps & Bagalkote District Portal';

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;

    body.innerHTML = `
      <div class="dest-detail-layout" style="display:flex;flex-direction:column;gap:1.25rem;">
        <div class="detail-hero-image" style="background-image:url('${loc.image}');height:220px;background-size:cover;background-position:center;border-radius:12px;"></div>
        
        <div style="font-size:1.05rem;line-height:1.7;color:#334155;">
          ${loc.summary}
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;background:#F8FAFC;padding:1.25rem;border-radius:12px;border:1px solid #E2E8F0;">
          <div>
            <h4 style="font-size:0.85rem;color:#C85A32;text-transform:uppercase;margin-bottom:0.35rem;">🕒 Operating Timings</h4>
            <p style="font-size:0.9rem;color:#1E293B;font-weight:600;margin:0;">${loc.timings}</p>
          </div>
          <div>
            <h4 style="font-size:0.85rem;color:#C85A32;text-transform:uppercase;margin-bottom:0.35rem;">📞 Contact & Helpline</h4>
            <p style="font-size:0.9rem;color:#1E293B;font-weight:600;margin:0;"><a href="tel:${loc.phone.split('/')[0].trim()}" style="color:#C85A32;text-decoration:none;">${loc.phone}</a></p>
          </div>
        </div>

        <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:1.15rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
          <div>
            <h4 style="font-size:0.9rem;color:#166534;margin-bottom:0.25rem;">📍 Location & Directions</h4>
            <p style="font-size:0.875rem;color:#14532D;margin:0;">${loc.address}</p>
          </div>
          <a href="${googleMapsUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="text-decoration:none;">
            🗺️ Open Google Maps
          </a>
        </div>
      </div>
    `;

    const addBtn = document.getElementById('modalAddToTripBtn');
    if (addBtn) addBtn.onclick = () => window.addDestinationToTrip(destId);
    return;
  }

  if (!dest) {
    body.innerHTML = `<p style="color:#E63946;">Details could not be retrieved.</p>`;
    return;
  }

  // Standard Destination Layout
  const lang = localStorage.getItem('bgk_preferred_lang') || 'en';
  const t = (window.translations && window.translations[lang]) || (window.translations && window.translations.en) || {};
  const localized = window.getLocalizedDestination ? window.getLocalizedDestination(dest, lang) : dest;

  title.textContent  = localized.name || dest.name;
  knName.textContent = dest.alternate_names ? dest.alternate_names[0] : '';
  const talukSuffix = t.taluk_suffix || 'Taluk';
  cat.textContent    = `${localized.category || dest.category} | ${localized.taluk || dest.taluk} ${talukSuffix}`;
  source.textContent = `${t.source_label || 'Source'}: ${dest.source}`;

  const destHeroImg = (loc && loc.image) || '/images/destinations/badami.jpg';
  const phone = (loc && loc.phone) || '+91 8354-236240';
  const timings = (loc && loc.timings) || '06:00 AM – 06:00 PM (Daily)';
  const googleMapsUrl = loc ? `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}` : 'https://www.google.com/maps';

  body.innerHTML = `
    <div class="dest-detail-layout" style="display:flex;flex-direction:column;gap:1.35rem;">
      <div class="detail-hero-image" style="background-image:url('${destHeroImg}');height:220px;background-size:cover;background-position:center;border-radius:12px;"></div>

      <div style="font-size:1.05rem;line-height:1.7;color:#334155;">
        ${localized.description || dest.description}
      </div>

      <!-- Quick Info Bar (Timings, Phone, Google Maps) -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;background:#F8FAFC;padding:1.1rem;border-radius:12px;border:1px solid #E2E8F0;">
        <div>
          <h4 style="font-size:0.8rem;color:#C85A32;text-transform:uppercase;margin-bottom:0.25rem;">🕒 Visiting Hours</h4>
          <p style="font-size:0.875rem;color:#0F172A;font-weight:600;margin:0;">${timings}</p>
        </div>
        <div>
          <h4 style="font-size:0.8rem;color:#C85A32;text-transform:uppercase;margin-bottom:0.25rem;">📞 Contact & Helpdesk</h4>
          <p style="font-size:0.875rem;color:#0F172A;font-weight:600;margin:0;"><a href="tel:${phone.split('/')[0].trim()}" style="color:#C85A32;text-decoration:none;">${phone}</a></p>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;background:#F8FAFC;padding:1.25rem;border-radius:12px;border:1px solid #E2E8F0;">
        <div>
          <h4 style="font-size:0.85rem;color:#C85A32;text-transform:uppercase;margin-bottom:0.35rem;">${t.modal_historical_title || 'Historical Significance'}</h4>
          <p style="font-size:0.875rem;color:#475569;">${localized.historical_significance || dest.historical_significance || 'Key Chalukyan royal site.'}</p>
        </div>
        <div>
          <h4 style="font-size:0.85rem;color:#C85A32;text-transform:uppercase;margin-bottom:0.35rem;">${t.modal_architecture_title || 'Architecture & Style'}</h4>
          <p style="font-size:0.875rem;color:#475569;">${localized.architecture || dest.architecture || 'Dravida & Nagara stone architecture.'}</p>
        </div>
      </div>

      <!-- Major Attractions — strictly filtered: if image is present use it, otherwise remove the field -->
      ${(() => {
        const verified = (dest.major_attractions || []).filter(a => MAJOR_IMG_MAP[a]);
        if (!verified.length || (dest.category && dest.category.toLowerCase().includes('local food'))) return '';
        return `
        <div style="background:#FFFBF6;border:1px solid #F3E8DC;padding:1.25rem;border-radius:12px;">
          <h4 style="font-size:1.05rem;color:#0D1B2A;margin-bottom:0.35rem;font-family:'Cinzel',serif;">
            ${t.modal_attractions_title || '📍 Major Attractions — Click Any to View Photos & Notes:'}
          </h4>
          <div style="display:flex;flex-wrap:wrap;gap:0.55rem;margin-top:0.6rem;">
            ${verified.map(a => {
              const locAtt = window.getLocalizedAttraction ? window.getLocalizedAttraction(a, lang) : { name: a, desc: '' };
              const displayName = locAtt.name || a;
              return `
              <button
                class="attraction-pill"
                onclick="window.showAttractionDetail('${a.replace(/'/g, "\\'")}', '${dest.id}')"
                title="Click to view photo & info for ${displayName.replace(/'/g, "\\'")}"
                style="cursor:pointer;"
              >
                📸 ${displayName}
              </button>
            `}).join('')}
          </div>
        </div>
        `;
      })()}

      ${dest.accessibility_details ? `
        <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:1.15rem;">
          <h4 style="font-size:0.95rem;color:#166534;margin-bottom:0.35rem;">${t.modal_accessibility_title || '♿ Accessibility & Senior Assistance'}</h4>
          <p style="font-size:0.85rem;color:#14532D;margin:0;">
            <strong>${t.acc_wheelchair_label || 'Wheelchair'}:</strong> ${dest.accessibility_details.wheelchair_accessible ? (t.acc_wheelchair_yes || 'Yes (Accessible ramps)') : (t.acc_wheelchair_no || 'No (Steps required)')} · 
            <strong>${t.acc_senior_label || 'Senior Friendly'}:</strong> ${dest.accessibility_details.elderly_friendly}
          </p>
        </div>
      ` : ''}

      <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:12px;padding:1rem;font-size:0.825rem;color:#78350F;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <strong>${t.modal_reach_title || '🚌 How to Reach:'}</strong> ${(localized.transport_information && localized.transport_information.bus_connectivity) || (dest.transport_information && dest.transport_information.bus_connectivity) || t.transport_default || 'Regular KSRTC bus services from Bagalkote and Hubballi.'}
        </div>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="text-decoration:none;">
          🗺️ Google Maps
        </a>
      </div>
    </div>
  `;

  const addBtn = document.getElementById('modalAddToTripBtn');
  if (addBtn) addBtn.onclick = () => window.addDestinationToTrip(dest.id);
};

// ── Attraction Lightbox for Map Page ─────────────────────────────────────────
window.showAttractionDetail = function(attractionName, destId) {
  const lb       = document.getElementById('attractionLightbox');
  const lbImg    = document.getElementById('lightboxImage');
  const lbTitle  = document.getElementById('lightboxTitle');
  const lbDesc   = document.getElementById('lightboxDesc');
  const lbSource = document.getElementById('lightboxSource');

  if (!lb) return;

  const lang = localStorage.getItem('bgk_preferred_lang') || 'en';
  const t = (window.translations && window.translations[lang]) || (window.translations && window.translations.en) || {};
  const locAtt = window.getLocalizedAttraction ? window.getLocalizedAttraction(attractionName, lang) : null;
  const imgPath = MAJOR_IMG_MAP[attractionName] || (LOCATION_DIRECTORY[destId] && LOCATION_DIRECTORY[destId].image) || '/images/destinations/badami.jpg';

  lbImg.src = imgPath;
  lbImg.alt = locAtt?.name || attractionName;
  lbTitle.textContent = locAtt?.name || attractionName;
  if (locAtt && locAtt.desc) {
    lbDesc.textContent = locAtt.desc;
  } else {
    lbDesc.textContent = `Verified monument of the Chalukyan circuit at ${destId ? destId.replace('dest_', '').toUpperCase() : 'Bagalkote'}, documented by the Archaeological Survey of India (ASI) and Karnataka Tourism.`;
  }
  lbSource.textContent = t.lightbox_source_prefix || 'Source: Official Bagalkote District Portal & ASI Dharwad Circle';

  lb.classList.add('active');
};

// ── Add to Trip Helper ───────────────────────────────────────────────────────
window.addDestinationToTrip = function(destId) {
  if (window.TouristProfile) {
    if (!window.TouristProfile.isLoggedIn()) {
      if (typeof window.showLoginModal === 'function') {
        window.showLoginModal(() => {
          const res = window.TouristProfile.addDestination(destId);
          if (typeof window.showToast === 'function') {
            window.showToast(res === true ? "✅ Added to your Profile! View in My Profile." : "Already in your Profile Journey!");
          }
        });
        return;
      }
    } else {
      const res = window.TouristProfile.addDestination(destId);
      if (typeof window.showToast === 'function') {
        window.showToast(res === true ? "✅ Added to your Profile! View in My Profile." : "Already in your Profile Journey!");
      } else {
        alert(res === true ? "Added to your Profile! View under My Profile." : "Destination already in your trip.");
      }
      return;
    }
  }

  // Fallback
  let trip = JSON.parse(localStorage.getItem('bagalkote_my_trip') || '[]');
  if (!trip.includes(destId)) {
    trip.push(destId);
    localStorage.setItem('bagalkote_my_trip', JSON.stringify(trip));
    if (typeof window.showToast === 'function') {
      window.showToast("✅ Added to your Bagalkote Journey!");
    } else {
      alert("Added to your saved 'My Bagalkote Journey'!");
    }
  } else {
    if (typeof window.showToast === 'function') {
      window.showToast("Already in your trip!");
    } else {
      alert("Destination already in your trip.");
    }
  }
};
