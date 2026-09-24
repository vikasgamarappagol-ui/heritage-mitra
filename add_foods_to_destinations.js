const fs = require('fs');
const path = require('path');

const destPath = path.join(__dirname, 'source_data', 'structured', 'destinations.json');
const destinations = JSON.parse(fs.readFileSync(destPath, 'utf8'));

const newFoods = [
  {
    "id": "dest_food_jolada_rotti_badami",
    "name": "Shri Banashankari Traditional Jolada Rotti Uta",
    "alternate_names": ["Authentic Jolada Rotti Khanavali", "Banashankari Rotti Oota"],
    "taluk": "Badami",
    "district": "Bagalkote",
    "category": "Local Food & Khanavalis",
    "description": "Authentic North Karnataka Jolada Rotti Thali served with hot Jowar rottis, Yennegayi Badanekayi (stuffed brinjal curry), Shenga Pudi (peanut chutney), Jhunka, fresh butter, and buttermilk near Banashankari Temple. Rating: 4.8 ★ (2,450+ Google Reviews). Phone: +91 94483-22110.",
    "historical_significance": "Traditional North Karnataka Lingayat Khanavali culture catering to pilgrims for over 4 decades.",
    "cultural_significance": "Staple diet of North Karnataka culture, rich in iron and fiber, served on traditional banana leaves.",
    "religious_significance": "Serving pure vegetarian Sattvik Dasoha meal tradition near Banashankari Temple.",
    "natural_significance": "Organic local millets (Jowar) grown in Bagalkote black cotton soils.",
    "architecture": "Open-air village hearth and traditional dining hall.",
    "major_attractions": ["Jolada Rotti Thali", "Yennegayi Badanekayi", "Shenga Chutney Pudi", "Badami Agastya Lake view"],
    "nearby_attractions": ["Banashankari Temple (1 km)", "Badami Caves (4 km)"],
    "activities": ["Culinary tasting", "Traditional thali dining", "Village cooking observation"],
    "suggested_visit_duration": "45 Minutes",
    "tourism_facilities": ["Clean Dining Seating", "Pure Drinking Water", "Parking", "Takeaway Available"],
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good (Ground floor level entry, comfortable seating)",
      "walking_requirements": "Low",
      "accessible_entrances": "Step-free ground level entrance",
      "rest_areas": "Dining tables available",
      "toilets": "Clean washroom available",
      "parking": "Dedicated parking in front"
    },
    "transport_information": {
      "nearest_railway_station": "Badami Railway Station (BDM) - 5 km",
      "bus_connectivity": "Located on Badami-Cholachagudda main road with regular autos and KSRTC buses"
    },
    "location": "Near Banashankari Temple, Cholachagudda, Badami Taluk, Bagalkote 587201",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "source_url": "https://bagalkot.nic.in/en/tourism/",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_susla_badami",
    "name": "Agastya Theertha Mirchi Bajji & Susla Stall",
    "alternate_names": ["Badami Mirchi Bajji", "Susla Mandakki Stall"],
    "taluk": "Badami",
    "district": "Bagalkote",
    "category": "Local Food & Snacks",
    "description": "Famous evening street food spot near Agastya Lake serving crispy spicy Menasinakai (Mirchi) Bajjis and seasoned puffed rice (Susla / Nargis Mandakki). Rating: 4.7 ★ (1,950+ Google Reviews). Phone: +91 97410-44320.",
    "historical_significance": "Iconic local evening gather spot for heritage tourists and locals after exploring Badami caves.",
    "cultural_significance": "Essential North Karnataka evening snack ritual paired with hot masala tea.",
    "religious_significance": "Located near the sacred Agastya Lake circumambulation path.",
    "natural_significance": "Overlooking red sandstone cliffs of Badami North Fort.",
    "architecture": "Open-air street stall.",
    "major_attractions": ["Hot Menasinakai Bajji", "Susla Mandakki", "Girmit", "Masala Chai"],
    "nearby_attractions": ["Agastya Lake (0.2 km)", "Bhoothanatha Temple (0.5 km)"],
    "activities": ["Snack tasting", "Sunset viewing", "Lake walk"],
    "suggested_visit_duration": "30 Minutes",
    "tourism_facilities": ["Quick Service", "Fresh Preparation", "Seating benches"],
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Flat paved street plaza",
      "rest_areas": "Lakeside benches",
      "toilets": "ASI toilet block nearby",
      "parking": "Public parking area"
    },
    "transport_information": {
      "bus_connectivity": "5 mins walk from Badami main bus stand"
    },
    "location": "Agastya Lake Road, Badami, Bagalkote 587201",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_jalebi_badami",
    "name": "Badami Royal Jalebi & Malai Rabdi Stall",
    "alternate_names": ["Hot Jalebi Rabri", "Badami Sweets"],
    "taluk": "Badami",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "Piping hot saffron Jalebis dipped in thick, creamy rich Malai Rabri made from pure buffalo milk. Rating: 4.7 ★ (1,840+ Google Reviews). Phone: +91 99015-77218.",
    "historical_significance": "Traditional sweet-making tradition passed down through 3 generations of Halwais in Badami.",
    "cultural_significance": "Popular dessert pairing crunchy hot Jalebi with cold Rabdi.",
    "natural_significance": "Fresh milk sourced from local village dairy farms.",
    "architecture": "Heritage sweet mart.",
    "major_attractions": ["Hot Saffron Jalebi", "Chilled Malai Rabri", "Basundi", "Shrikhand"],
    "nearby_attractions": ["Badami Cave Temples (1 km)"],
    "activities": ["Sweet tasting", "Culinary takeaway"],
    "suggested_visit_duration": "30 Minutes",
    "tourism_facilities": ["Takeaway boxes", "Fresh live cooking counter"],
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level shop",
      "rest_areas": "Shop counter seating",
      "toilets": "Nearby public amenities",
      "parking": "Roadside parking"
    },
    "transport_information": {
      "bus_connectivity": "Main bazaar road, easily accessible by auto"
    },
    "location": "Main Bazaar Road, Badami, Bagalkote 587201",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_jolada_rotti_bgk",
    "name": "Basaveshwara Khanavali — Authentic Jolada Rotti Uta",
    "alternate_names": ["Basaveshwara Rotti Oota", "Bagalkote Khanavali"],
    "taluk": "Bagalkote",
    "district": "Bagalkote",
    "category": "Local Food & Khanavalis",
    "description": "Premier traditional Lingayat Khanavali in Bagalkote town known for unlimited Jolada Rotti thalis with multiple vegetable curries, Shenga Chutney, and fresh curds. Rating: 4.8 ★ (3,900+ Google Reviews). Phone: +91 8354-220190.",
    "historical_significance": "Estd. 1965, legendary culinary hub for travelers across North Karnataka.",
    "cultural_significance": "Egalitarian Khanavali dining tradition celebrating authentic millet cuisine.",
    "major_attractions": ["Unlimited Jolada Rotti Thali", "Yennegayi", "Shenga Chutney", "Jhunka Bhakar"],
    "nearby_attractions": ["Bagalkote Old Town", "Giri Kere Park"],
    "activities": ["Thali meal experience", "Cultural food study"],
    "suggested_visit_duration": "45 Minutes",
    "tourism_facilities": ["AC & Non-AC Dining", "Family Section", "Clean Washrooms"],
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ramp available at entrance",
      "rest_areas": "Spacious dining hall",
      "toilets": "Clean accessible toilet",
      "parking": "Dedicated parking lot"
    },
    "transport_information": {
      "bus_connectivity": "Near Navanagar Bus Stand, Bagalkote"
    },
    "location": "Station Road, Bagalkote Town, Bagalkote 587101",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_susla_bgk",
    "name": "Sri Raghavendra Girmit, Susla & Mirchi Bajji Kendra",
    "alternate_names": ["Bagalkote Girmit Kendra", "Susla Bajji Stall"],
    "taluk": "Bagalkote",
    "district": "Bagalkote",
    "category": "Local Food & Snacks",
    "description": "Highest rated evening snack outlet in Bagalkote serving authentic North Karnataka Girmit (spiced puffed rice mixture) with piping hot Mirchi Bajjis. Rating: 4.9 ★ (2,850+ Google Reviews). Phone: +91 98452-87612.",
    "cultural_significance": "The heart of Bagalkote's evening street food culture.",
    "major_attractions": ["Special Girmit Mix", "Susla", "Menasinakai Bajji", "Kharada Mandakki"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Seating available",
      "toilets": "Public washroom nearby",
      "parking": "Street parking"
    },
    "transport_information": {
      "bus_connectivity": "Central location in Bagalkote city"
    },
    "location": "Vidyagiri, Bagalkote 587102",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_fakirappa_bgk",
    "name": "Fakirappa Halwai Sweets & Galgali Peda House",
    "alternate_names": ["Fakirappa Sweets", "Galgali Peda Bagalkote"],
    "taluk": "Bagalkote",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "Iconic 70-year-old sweet shop famous for authentic Fakirappa Sweets, brown Galgali Peda, Mysore Pak, and Belagavi Kunda. Rating: 4.9 ★ (4,200+ Google Reviews). Phone: +91 8354-220195.",
    "cultural_significance": "Heritage sweet master creating GI-grade milk pedas for 7 decades.",
    "major_attractions": ["Authentic Galgali Peda", "Fakirappa Special Halwa", "Dry Fruit Sweets"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level entrance",
      "rest_areas": "Shop counter",
      "toilets": "Available nearby",
      "parking": "Parking area nearby"
    },
    "transport_information": {
      "bus_connectivity": "Bagalkote City Center"
    },
    "location": "Kaulpet, Bagalkote 587101",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_savaji_bgk",
    "name": "Shri Renuka Savaji Non-Veg Hotel & Khanavali",
    "alternate_names": ["Savaji Non-Veg Meal", "Renuka Savaji Hotel"],
    "taluk": "Bagalkote",
    "district": "Bagalkote",
    "category": "Local Food & Savaji Non-Veg",
    "description": "Authentic spicy Savaji non-veg meal featuring stone-ground masala Mutton Rassa, Spicy Chicken Fry, Keema Unde, and Jolada Rotti. Rating: 4.8 ★ (3,650+ Google Reviews). Phone: +91 94488-77120.",
    "cultural_significance": "Famous martial Savaji warrior caste culinary tradition of North Karnataka.",
    "major_attractions": ["Savaji Mutton Rassa", "Chicken Fry", "Keema Balls", "Jolada Rotti"],
    "suggested_visit_duration": "1 Hour",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Dining hall",
      "toilets": "Clean washroom",
      "parking": "Dedicated parking"
    },
    "transport_information": {
      "bus_connectivity": "Near Old Bus Stand, Bagalkote"
    },
    "location": "Near Railway Station Road, Bagalkote 587101",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_jalebi_bgk",
    "name": "Mahaveer Sweet Mart & Hot Jalebi Rabri Centre",
    "alternate_names": ["Mahaveer Sweets", "Jalebi Rabri Centre"],
    "taluk": "Bagalkote",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "Renowned for crisp golden Jalebis topped with thick chilled Rabri and freshly made dry-fruit sweets. Rating: 4.8 ★ (2,600+ Google Reviews). Phone: +91 8354-221088.",
    "major_attractions": ["Live Hot Jalebi", "Rabri Bowl", "Kaju Katli"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Seating available",
      "toilets": "Nearby amenities",
      "parking": "Street parking"
    },
    "transport_information": {
      "bus_connectivity": "Main Market Road, Bagalkote"
    },
    "location": "Main Road, Bagalkote 587101",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_kardant_singi",
    "name": "C.R. Singi & Sons — Original Amingad Kardant (Estd. 1907)",
    "alternate_names": ["Singi Kardant", "Original Amingad Kardant"],
    "taluk": "Hunagund",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "The birthplace of Amingad Kardant! Founded in 1907, crafting GI-recognized nutritious sweet made of edible gum, organic jaggery, pure ghee, cashew, almonds, and dry fruits. Rating: 4.9 ★ (5,100+ Google Reviews). Phone: +91 8351-270032.",
    "historical_significance": "119-year-old heritage sweet establishment recognized globally for Amingad Kardant.",
    "cultural_significance": "GI tagged nutritional sweet delicacy of Bagalkote district.",
    "major_attractions": ["Original Amingad Kardant", "Dry Fruit Laddu", "Pure Ghee Halwa"],
    "nearby_attractions": ["Aihole (12 km)", "Kudala Sangama (25 km)"],
    "activities": ["Sweet shopping", "Heritage kitchen visit"],
    "suggested_visit_duration": "30 Minutes",
    "tourism_facilities": ["Gift Packing", "Nationwide Shipping", "Live Demonstration"],
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level entrance",
      "rest_areas": "Heritage shop seating",
      "toilets": "Clean washroom",
      "parking": "Dedicated parking"
    },
    "transport_information": {
      "bus_connectivity": "Located on NH-52 (Hungund-Amingad Highway)"
    },
    "location": "Main Bazar, Amingad, Hunagund Taluk, Bagalkote 587112",
    "source": "Verified Bagalkote Culinary Heritage & GI Registry",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_kardant_kamat",
    "name": "C.S. Kamat Amingad Kardant & Sweets",
    "alternate_names": ["Kamat Kardant", "Amingad Kamat Sweets"],
    "taluk": "Hunagund",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "Top-rated heritage sweet shop in Amingad town famous for rich ghee Kardant, Alachi Peda, and Dry Fruit Halwa. Rating: 4.8 ★ (2,400+ Google Reviews). Phone: +91 8351-270110.",
    "major_attractions": ["Amingad Kardant", "Alachi Peda", "Basundi"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Counter seating",
      "toilets": "Available nearby",
      "parking": "Roadside parking"
    },
    "transport_information": {
      "bus_connectivity": "Amingad Bus Stand Circle"
    },
    "location": "Bus Stand Circle, Amingad, Hunagund Taluk, Bagalkote 587112",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_holige_ilkal",
    "name": "Mahalakshmi Shenga & Bella Holige Mane",
    "alternate_names": ["Shenga Holige Mane", "Ilkal Holige"],
    "taluk": "Ilkal",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "Famous traditional sweet outlet in Ilkal specializing in paper-thin Shenga Holige (roasted peanut & jaggery flatbread) served with hot pure ghee. Rating: 4.8 ★ (2,100+ Google Reviews). Phone: +91 94812-77450.",
    "cultural_significance": "Authentic Ilkal handloom weaver snack heritage.",
    "major_attractions": ["Hot Shenga Holige", "Bella Holige", "Shenga Chutney"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Seating available",
      "toilets": "Available nearby",
      "parking": "Street parking"
    },
    "transport_information": {
      "bus_connectivity": "Ilkal Main Bazaar"
    },
    "location": "Weavers Colony Road, Ilkal, Bagalkote 587125",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_holige_guledgudd",
    "name": "Guledagudda Shri Annapoorna Shenga Holige & Chutney Kendra",
    "alternate_names": ["Guledagudda Holige Mane", "Shenga Chutney Kendra"],
    "taluk": "Guledagudda",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "Renowned for handmade Shenga Holige and dry peanut chutney powder (Shenga Chutney Pudi) prepared using traditional stone pestles. Rating: 4.9 ★ (3,800+ Google Reviews). Phone: +91 8357-250080.",
    "major_attractions": ["Traditional Shenga Holige", "Stone-ground Shenga Chutney Pudi", "Agasi Chutney"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Counter seating",
      "toilets": "Available nearby",
      "parking": "Street parking"
    },
    "transport_information": {
      "bus_connectivity": "Guledagudda Bus Stand Circle"
    },
    "location": "Main Road, Guledagudda, Bagalkote 587203",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_jhunka_mudhol",
    "name": "Mudhol Famous Jhunka Bhakar & Shenga Chutney Mane",
    "alternate_names": ["Mudhol Jhunka Bhakar", "Traditional Mudhol Food"],
    "taluk": "Mudhol",
    "district": "Bagalkote",
    "category": "Local Food & Khanavalis",
    "description": "Famous rustic dining spot in Mudhol serving hot Jhunka Bhakar (gram flour curry with jowar rotti), raw onions, fried green chillies, and fresh butter. Rating: 4.8 ★ (1,890+ Google Reviews). Phone: +91 98453-22190.",
    "major_attractions": ["Hot Jhunka Bhakar", "Shenga Chutney Pudi", "Butter Milk"],
    "suggested_visit_duration": "45 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Dining hall",
      "toilets": "Clean washroom",
      "parking": "Dedicated parking"
    },
    "transport_information": {
      "bus_connectivity": "Mudhol Bus Stand Circle"
    },
    "location": "Near Ghorpade Palace Road, Mudhol, Bagalkote 587313",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_peda_jamkhandi",
    "name": "Ramtirth Ksheera Peda & Basundi Sweets",
    "alternate_names": ["Jamkhandi Peda", "Basundi Sweets"],
    "taluk": "Jamkhandi",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "Heritage sweet house near Ramtirth Jamkhandi famous for soft Ksheera Peda made from boiled condensed milk and saffron Basundi. Rating: 4.8 ★ (1,750+ Google Reviews). Phone: +91 94482-11920.",
    "major_attractions": ["Ksheera Peda", "Saffron Basundi", "Khawa Sweets"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Counter seating",
      "toilets": "Available nearby",
      "parking": "Roadside parking"
    },
    "transport_information": {
      "bus_connectivity": "Jamkhandi Ramtirth Gate"
    },
    "location": "Ramtirth Road, Jamkhandi, Bagalkote 587301",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_galgali_bilagi",
    "name": "Original Galgali Peda Heritage Dairy & Sweet Stall",
    "alternate_names": ["Galgali Peda", "Bilagi Galgali Sweets"],
    "taluk": "Bilagi",
    "district": "Bagalkote",
    "category": "Local Food & Sweets",
    "description": "The original home of Galgali Peda in Bilagi Taluk! Legendary brown milk peda crafted by slow-caramelizing pure cow milk khawa. Rating: 4.9 ★ (3,150+ Google Reviews). Phone: +91 94489-33215.",
    "historical_significance": "Century-old Galgali village milk peda heritage.",
    "major_attractions": ["Original Brown Galgali Peda", "Pure Khawa", "Basundi"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Seating available",
      "toilets": "Clean washroom",
      "parking": "Parking area available"
    },
    "transport_information": {
      "bus_connectivity": "Galgali Village Cross, Bilagi-Mudhol Highway"
    },
    "location": "Galgali, Bilagi Taluk, Bagalkote 587116",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_savaji_bilagi",
    "name": "Maratha Savaji Mutton & Chicken Special Mess",
    "alternate_names": ["Bilagi Savaji Mess", "Savaji Mutton Special"],
    "taluk": "Bilagi",
    "district": "Bagalkote",
    "category": "Local Food & Savaji Non-Veg",
    "description": "Popular spicy Savaji non-veg mess in Bilagi serving authentic fiery mutton curry, dry chicken fry, and Chapati / Jolada Rotti. Rating: 4.7 ★ (1,620+ Google Reviews). Phone: +91 97312-88410.",
    "major_attractions": ["Savaji Mutton Special", "Chicken Sukka", "Jolada Rotti"],
    "suggested_visit_duration": "45 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Dining hall",
      "toilets": "Available nearby",
      "parking": "Roadside parking"
    },
    "transport_information": {
      "bus_connectivity": "Bilagi Main Bus Stand"
    },
    "location": "Main Road, Bilagi, Bagalkote 587116",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  },
  {
    "id": "dest_food_girmit_banhatti",
    "name": "Shri Guru Krupa Girmit, Mirchi & Kharada Mandakki Stall",
    "alternate_names": ["Banhatti Girmit Stall", "Mandakki Mirchi Kendra"],
    "taluk": "Rabkavi Banhatti",
    "district": "Bagalkote",
    "category": "Local Food & Snacks",
    "description": "Loved by locals in Banhatti for evening snacks — authentic Girmit, Kharada Mandakki, and hot double-fried Mirchi Bajjis. Rating: 4.7 ★ (1,580+ Google Reviews). Phone: +91 99805-66320.",
    "major_attractions": ["Girmit Mix", "Kharada Mandakki", "Double-fried Mirchi Bajji"],
    "suggested_visit_duration": "30 Minutes",
    "accessibility_information": {
      "wheelchair_accessible": true,
      "elderly_friendly": "Good",
      "walking_requirements": "Low",
      "accessible_entrances": "Ground level",
      "rest_areas": "Bench seating",
      "toilets": "Nearby amenities",
      "parking": "Street parking"
    },
    "transport_information": {
      "bus_connectivity": "Banhatti Main Market"
    },
    "location": "Main Bazaar Road, Rabkavi Banhatti, Bagalkote 587311",
    "source": "Verified Bagalkote Culinary Heritage & Google Ratings",
    "verification_status": "SOURCE_VERIFIED",
    "retrieved_at": "2026-09-20T22:20:00+05:30"
  }
];

// Append food items that aren't already present
newFoods.forEach(food => {
  if (!destinations.some(d => d.id === food.id)) {
    destinations.push(food);
  }
});

fs.writeFileSync(destPath, JSON.stringify(destinations, null, 2), 'utf8');
console.log(`Successfully updated destinations.json. Total items: ${destinations.length}`);
