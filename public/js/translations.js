/**
 * Multi-Language Translation System (Module 11)
 * Supports 7 Languages:
 *   - English (en)
 *   - Kannada (kn - ಕನ್ನಡ)
 *   - Hindi (hi - हिन्दी)
 *   - Tamil (ta - தமிழ்)
 *   - Telugu (te - తెలుగు)
 *   - Marathi (mr - मराठी)
 *   - Malayalam (ml - മലയാളം)
 *
 * Full-page deep translation covering nav, hero, cards, categories, taluks,
 * modals, major attractions, accessibility, safety, and all inside content.
 */

const translations = {
  en: {
    lang_label: "Language:",
    announcement_text: "AI-Powered Inclusive Tourism Ecosystem for Bagalkote — Prepared for District Commissioner & Tourism Department",
    nav_home: "Home",
    nav_explore: "Explore",
    nav_map: "Karnataka Map",
    nav_skills: "Meet the People",
    nav_artisans: "Artisans",
    nav_businesses: "Businesses",
    nav_accessible: "Accessible Tourism",
    nav_safety: "Safety Centre",
    nav_provider: "Provider Portal",
    nav_complaints: "Complaints & Feedback",
    nav_admin: "DC Dashboard",
    nav_profile: "My Profile",
    btn_plan_trip: "PLAN MY TRIP",
    hero_badge: "OFFICIAL DISTRICT AI TOURISM PLATFORM",
    hero_tagline: "DISCOVER BAGALKOTE. EXPERIENCE ITS CULTURE. EMPOWER ITS PEOPLE.",
    hero_desc: "An AI-powered inclusive tourism ecosystem connecting travellers with 6th-century Chalukyan rock-cut caves, UNESCO World Heritage monuments, GI-tagged handloom weavers, and authentic rural communities.",
    hero_btn_plan: "PLAN MY TRIP",
    hero_btn_ai: "ASK AI COMPANION",
    hero_btn_map: "VIEW KARNATAKA MAP",
    stat_destinations: "Verified Destinations",
    stat_unesco: "Pattadakal World Heritage",
    stat_gi: "Ilkal Saree & Khana",
    stat_inclusive: "Inclusive Growth Focus",
    cat_kicker: "EXPERIENCE DIVERSITY",
    cat_title: "ONE DISTRICT. MANY EXPERIENCES.",
    cat_all: "All Experiences",
    cat_heritage: "Heritage & Caves",
    cat_crafts: "Art & GI Handlooms",
    cat_food: "Local Food & Khanavalis",
    cat_spiritual: "Spiritual & Confluence",
    cat_nature: "Nature & Dam Gardens",
    cat_accessible: "Accessible Tourism",
    cat_business: "Local Businesses",
    iconic_kicker: "AUTHENTIC DESTINATIONS",
    iconic_title: "ICONIC BAGALKOTE",
    iconic_subtitle: "Source-verified heritage monuments, sacred river confluences, and artisan clusters.",
    filter_taluk_label: "Taluk Filter:",
    taluk_all: "All Taluks",
    map_kicker: "GEOGRAPHIC HEARTLAND",
    map_title: "BAGALKOTE — HEART OF CHALUKYAN HERITAGE",
    map_subtitle: "Interactive GIS map highlighting Bagalkote District within Karnataka state, showing verified monuments, artisan clusters, and safety nodes.",
    map_layers_title: "Active Map Layers:",
    map_reset_btn: "↺ Reset View",
    layer_heritage: "Heritage",
    layer_artisans: "Artisans",
    layer_cultural_food: "Cultural Food",
    layer_food: "Dining",
    layer_lodging: "Stays",
    layer_emergency: "Safety / Emergency",
    skills_kicker: "INCLUSIVE GROWTH SIGNATURE MODULE",
    skills_title: "MEET THE PEOPLE BEHIND BAGALKOTE",
    skills_subtitle: "AI-Based Tourist–Local Skill Matching: Connecting your specific interests directly to master weavers, needlecraft artisans, and traditional home-chefs.",
    skill_prompt: "Select what you love to explore:",
    artisan_kicker: "MODULE 8: LOCAL ARTISANS",
    artisan_title: "DISCOVER LOCAL CRAFTS & ARTISANS",
    artisan_subtitle: "Verified handloom cooperatives and GI-tagged craft practitioners. Zero invented entities.",
    biz_kicker: "MODULE 9: LOCAL BUSINESSES",
    biz_title: "LOCAL BUSINESSES & TOURISM SERVICES",
    biz_subtitle: "Promoting verified homestays, traditional Khanavalis, licensed monument guides, and handloom stores.",
    acc_kicker: "MODULE 10: INCLUSIVE ACCESS",
    acc_title: "TRAVEL WITHOUT BARRIERS",
    acc_subtitle: "Verified mobility assessments, staircase counts, wheelchair ramp availability, and senior-friendly facilities.",
    safe_kicker: "MODULE 13: TOURIST SECURITY",
    safe_title: "BAGALKOTE TOURIST SAFETY CENTRE",
    safe_subtitle: "Verified 24x7 emergency contacts, police stations, multi-specialty trauma hospitals, and responsible travel advisories.",
    btn_explore_details: "Explore Details",
    btn_add_trip: "+ Trip",
    btn_route: "Route",
    btn_open_maps: "🗺️ Open Google Maps",
    badge_verified: "✓ Verified",
    modal_historical_title: "Historical Significance",
    modal_architecture_title: "Architecture & Style",
    modal_attractions_title: "📍 Major Attractions — Click Any to View Photos & Notes:",
    modal_attractions_desc: "Discover authentic high-resolution photographs directly from district archives and Archaeological Survey of India.",
    modal_accessibility_title: "♿ Accessibility & Senior Assistance",
    modal_reach_title: "🚌 How to Reach:",
    lightbox_source_prefix: "Source: Official Bagalkote District Portal & ASI Dharwad Circle",
    close_btn: "Close",
    taluk_suffix: "Taluk",
    access_yes: "♿ Accessible",
    access_partial: "⚠️ Steps / Terrain",
    source_label: "Source",
    duration_default: "2-3 Hours",
    acc_wheelchair_label: "Wheelchair",
    acc_wheelchair_yes: "Yes (Accessible ramps)",
    acc_wheelchair_no: "No (Steps required)",
    acc_staircase_label: "Staircase",
    acc_senior_label: "Senior Friendly",
    acc_terrain_varies: "Terrain varies",
    transport_default: "Regular KSRTC bus services from Bagalkote and Hubballi."
  },

  kn: {
    lang_label: "ಭಾಷೆ:",
    announcement_text: "ಬಾಗಲಕೋಟೆ AI-ಚಾಲಿತ ಸರ್ವರನ್ನೊಳಗೊಂಡ ಪ್ರವಾಸೋದ್ಯಮ ಪರಿಸರ ವ್ಯವಸ್ಥೆ — ಜಿಲ್ಲಾಧಿಕಾರಿಗಳ ಪ್ರಸ್ತುತಿಗೆ ಸಿದ್ಧವಾಗಿದೆ",
    nav_home: "ಮುಖಪುಟ",
    nav_explore: "ಅನ್ವೇಷಿಸಿ",
    nav_map: "ಕರ್ನಾಟಕ ನಕ್ಷೆ",
    nav_skills: "ಜನರನ್ನು ಭೇಟಿಯಾಗಿ",
    nav_artisans: "ಕುಶಲಕರ್ಮಿಗಳು",
    nav_businesses: "ವ್ಯಾಪಾರಗಳು",
    nav_accessible: "ಸುಲಭ ಪ್ರವಾಸ",
    nav_safety: "ಸುರಕ್ಷತಾ ಕೇಂದ್ರ",
    nav_provider: "ಸೇವಾ ಪೋರ್ಟಲ್",
    nav_complaints: "ದೂರುಗಳು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ",
    nav_admin: "ಡಿಸಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    nav_profile: "ನನ್ನ ಪ್ರೊಫೈಲ್",
    btn_plan_trip: "ಪ್ರವಾಸ ಯೋಜಿಸಿ",
    hero_badge: "ಅಧಿಕೃತ ಜಿಲ್ಲಾ AI ಪ್ರವಾಸೋದ್ಯಮ ವೇದಿಕೆ",
    hero_tagline: "ಬಾಗಲಕೋಟೆಯನ್ನು ಅನ್ವೇಷಿಸಿ. ಸಂಸ್ಕೃತಿಯನ್ನು ಅನುಭವಿಸಿ. ಜನರನ್ನು ಸಬಲೀಕರಿಸಿ.",
    hero_desc: "೬ನೇ ಶತಮಾನದ ಚಾಲುಕ್ಯರ ಗುಹಾ ದೇವಾಲಯಗಳು, ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣಗಳು, ಜಿಐ ಮಾನ್ಯತೆಯ ಇಳಕಲ್ ಸೀರೆ ನೇಕಾರರು ಮತ್ತು ಸ್ಥಳೀಯ ಸಮುದಾಯಗಳೊಂದಿಗೆ ಪ್ರವಾಸಿಗರನ್ನು ಬೆಸೆಯುವ ಸಮಗ್ರ ವೇದಿಕೆ.",
    hero_btn_plan: "ಪ್ರವಾಸ ಯೋಜಿಸಿ",
    hero_btn_ai: "AI ಸಹಾಯಕನನ್ನು ಕೇಳಿ",
    hero_btn_map: "ಕರ್ನಾಟಕ ನಕ್ಷೆ ವೀಕ್ಷಿಸಿ",
    stat_destinations: "ಪರಿಶೀಲಿತ ತಾಣಗಳು",
    stat_unesco: "ಪಟ್ಟದಕಲ್ಲು ವಿಶ್ವ ಪರಂಪರೆ",
    stat_gi: "ಇಳಕಲ್ ಸೀರೆ ಮತ್ತು ಖಣ",
    stat_inclusive: "ಸರ್ವರನ್ನೊಳಗೊಂಡ ಬೆಳವಣಿಗೆ",
    cat_kicker: "ವಿವಿಧ ಅನುಭವಗಳು",
    cat_title: "ಒಂದು ಜಿಲ್ಲೆ. ಹಲವು ಅನುಭವಗಳು.",
    cat_all: "ಎಲ್ಲಾ ಅನುಭವಗಳು",
    cat_heritage: "ಪರಂಪರೆ ಮತ್ತು ಗುಹೆಗಳು",
    cat_crafts: "ಕಲೆ ಮತ್ತು ಜಿಐ ಕೈಮಗ್ಗ",
    cat_food: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
    cat_spiritual: "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಸಂಗಮ",
    cat_nature: "ಪ್ರಕೃತಿ ಮತ್ತು ಅಣೆಕಟ್ಟು ಉದ್ಯಾನ",
    cat_accessible: "ಸುಲಭ ಪ್ರವಾಸೋದ್ಯಮ",
    cat_business: "ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳು",
    iconic_kicker: "ಅಧಿಕೃತ ತಾಣಗಳು",
    iconic_title: "ಐತಿಹಾಸಿಕ ಬಾಗಲಕೋಟೆ",
    iconic_subtitle: "ಮೂಲ-ಪರಿಶೀಲಿತ ಪಾರಂಪರಿಕ ಸ್ಮಾರಕಗಳು, ಪವಿತ್ರ ನದಿ ಸಂಗಮ ಮತ್ತು ಕುಶಲಕರ್ಮಿಗಳ ಕೇಂದ್ರಗಳು.",
    filter_taluk_label: "ತಾಲೂಕು ಫಿಲ್ಟರ್:",
    taluk_all: "ಎಲ್ಲಾ ತಾಲೂಕುಗಳು",
    map_kicker: "ಭೌಗೋಳಿಕ ಕೇಂದ್ರ",
    map_title: "ಬಾಗಲಕೋಟೆ — ಚಾಲುಕ್ಯ ಪರಂಪರೆಯ ಹೃದಯಭಾಗ",
    map_subtitle: "ಕರ್ನಾಟಕದಲ್ಲಿ ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆಯನ್ನು ಪ್ರಮುಖವಾಗಿ ಬಿಂಬಿಸುವ ಸಂವಾದಾತ್ಮಕ ಜಿಐಎಸ್ ನಕ್ಷೆ.",
    map_layers_title: "ನಕ್ಷೆಯ ಪದರಗಳು:",
    map_reset_btn: "↺ ಮೊದಲಿನ ನೋಟ",
    layer_heritage: "ಪರಂಪರೆ",
    layer_artisans: "ಕುಶಲಕರ್ಮಿಗಳು",
    layer_cultural_food: "ಸಾಂಸ್ಕೃತಿಕ ಆಹಾರ",
    layer_food: "ಊಟೋಪಚಾರ",
    layer_lodging: "ವಸತಿ",
    layer_emergency: "ಸುರಕ್ಷತೆ / ತುರ್ತು",
    skills_kicker: "ವಿಶೇಷ ಕೌಶಲ್ಯ ಹೊಂದಾಣಿಕೆ ಮಾಡ್ಯೂಲ್",
    skills_title: "ಬಾಗಲಕೋಟೆಯ ಹಿಂದಿರುವ ಜನರನ್ನು ಭೇಟಿಯಾಗಿ",
    skills_subtitle: "ಪ್ರವಾಸಿಗರ ಆಸಕ್ತಿಯನ್ನು ನೇರವಾಗಿ ಸ್ಥಳೀಯ ನೇಕಾರರು, ಕಸೂತಿ ಕಲಾವಿದರು ಮತ್ತು ಬಾಣಸಿಗರೊಂದಿಗೆ ಬೆಸೆಯುವ AI ಎಂಜಿನ್.",
    skill_prompt: "ನಿಮಗೆ ಆಸಕ್ತಿಯಿರುವ ಕ್ಷೇತ್ರವನ್ನು ಆರಿಸಿ:",
    artisan_kicker: "ಮಾಡ್ಯೂಲ್ ೮: ಸ್ಥಳೀಯ ಕುಶಲಕರ್ಮಿಗಳು",
    artisan_title: "ಸ್ಥಳೀಯ ಕಲೆ ಮತ್ತು ಕುಶಲಕರ್ಮಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    artisan_subtitle: "ಪರಿಶೀಲಿತ ಕೈಮಗ್ಗ ಸಂಘಗಳು ಮತ್ತು ಜಿಐ ಕರಕುಶಲ ಕಲಾವಿದರು.",
    biz_kicker: "ಮಾಡ್ಯೂಲ್ ೯: ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳು",
    biz_title: "ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳು ಮತ್ತು ಪ್ರವಾಸೋದ್ಯಮ ಸೇವೆಗಳು",
    biz_subtitle: "ಸ್ಥಳೀಯ ಹೋಮ್‌ಸ್ಟೇಗಳು, ಸಾಂಪ್ರದಾಯಿಕ ಖಾನಾವಳಿಗಳು ಮತ್ತು ಪರವಾನಗಿ ಪಡೆದ ಮಾರ್ಗದರ್ಶಿಗಳು.",
    acc_kicker: "ಮಾಡ್ಯೂಲ್ ೧೦: ಸುಲಭ ಪ್ರವೇಶ",
    acc_title: "ಅಡೆತಡೆಗಳಿಲ್ಲದ ಪ್ರವಾಸ",
    acc_subtitle: "ವೀಲ್‌ಚೇರ್ ಲಭ್ಯತೆ, ಮೆಟ್ಟಿಲುಗಳ ಸಂಖ್ಯೆ ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಅನುಕೂಲಕರ ಸೌಲಭ್ಯಗಳ ಪರಿಶೀಲಿತ ಮಾಹಿತಿ.",
    safe_kicker: "ಮಾಡ್ಯೂಲ್ ೧೩: ಪ್ರವಾಸಿ ಭದ್ರತೆ",
    safe_title: "ಬಾಗಲಕೋಟೆ ಪ್ರವಾಸಿ ಸುರಕ್ಷತಾ ಕೇಂದ್ರ",
    safe_subtitle: "೨೪x೭ ತುರ್ತು ಸಹಾಯವಾಣಿಗಳು, ಪೊಲೀಸ್ ಠಾಣೆಗಳು ಮತ್ತು ಮಲ್ಟಿ-ಸ್ಪೆಷಾಲಿಟಿ ಆಸ್ಪತ್ರೆಗಳ ವಿವರ.",
    btn_explore_details: "ವಿವರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    btn_add_trip: "+ ಪ್ರವಾಸ",
    btn_route: "ಮಾರ್ಗ",
    btn_open_maps: "🗺️ ಗೂಗಲ್ ನಕ್ಷೆ ತೆರೆಯಿರಿ",
    badge_verified: "✓ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    modal_historical_title: "ಐತಿಹಾಸಿಕ ಮಹತ್ವ",
    modal_architecture_title: "ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಶೈಲಿ",
    modal_attractions_title: "📍 ಪ್ರಮುಖ ಆಕರ್ಷಣೆಗಳು — ಫೋಟೋ ಮತ್ತು ವಿವರಗಳಿಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ:",
    modal_attractions_desc: "ಪುರಾತತ್ವ ಇಲಾಖೆ ಹಾಗೂ ಜಿಲ್ಲಾ ದಾಖಲೆಗಳಿಂದ ದೃಢೀಕರಿಸಲಾದ ಅಧಿಕೃತ ಛಾಯಾಚಿತ್ರಗಳು.",
    modal_accessibility_title: "♿ ಸುಲಭ ಪ್ರವೇಶ ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ನೆರವು",
    modal_reach_title: "🚌 ತಲುಪುವುದು ಹೇಗೆ:",
    lightbox_source_prefix: "ಮೂಲ: ಅಧಿಕೃತ ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಪೋರ್ಟಲ್ & ಎಎಸ್ಐ ಧಾರವಾಡ ವೃತ್ತ",
    close_btn: "ಮುಚ್ಚಿ",
    taluk_suffix: "ತಾಲೂಕು",
    access_yes: "♿ ಸುಲಭ ಪ್ರವೇಶ",
    access_partial: "⚠️ ಮೆಟ್ಟಿಲುಗಳು / ಕಡಿದಾದ",
    source_label: "ಮೂಲ",
    duration_default: "೨-೩ ಗಂಟೆಗಳು",
    acc_wheelchair_label: "ಗಾಲಿಕುರ್ಚಿ",
    acc_wheelchair_yes: "ಹೌದು (ರ‍್ಯಾಂಪ್ ಲಭ್ಯವಿದೆ)",
    acc_wheelchair_no: "ಇಲ್ಲ (ಮೆಟ್ಟಿಲುಗಳಿವೆ)",
    acc_staircase_label: "ಮೆಟ್ಟಿಲುಗಳು",
    acc_senior_label: "ಹಿರಿಯರಿಗೆ ಅನುಕೂಲ",
    acc_terrain_varies: "ಕಡಿದಾದ ಭೂಪ್ರದೇಶ",
    transport_default: "ಬಾಗಲಕೋಟೆ ಮತ್ತು ಹುಬ್ಬಳ್ಳಿಯಿಂದ ನಿರಂತರ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ ಸೌಲಭ್ಯ."
  },

  hi: {
    lang_label: "भाषा:",
    announcement_text: "बागलकोट एआई-संचालित समावेशी पर्यटन पारिस्थितिकी तंत्र — जिला आयुक्त प्रस्तुति हेतु तैयार",
    nav_home: "मुखपृष्ठ",
    nav_explore: "अन्वेषण करें",
    nav_map: "कर्नाटक मानचित्र",
    nav_skills: "स्थानीय लोगों से मिलें",
    nav_artisans: "कारीगर",
    nav_businesses: "व्यवसाय",
    nav_accessible: "सुलभ पर्यटन",
    nav_safety: "सुरक्षा केंद्र",
    nav_provider: "सेवा प्रदाता पोर्टल",
    nav_complaints: "शिकायतें और प्रतिक्रिया",
    nav_admin: "डीसी डैशबोर्ड",
    nav_profile: "मेरी प्रोफ़ाइल",
    btn_plan_trip: "यात्रा की योजना बनाएं",
    hero_badge: "आधिकारिक जिला एआई पर्यटन मंच",
    hero_tagline: "बागलकोट को जानें। इसकी संस्कृति का अनुभव करें। इसके लोगों को सशक्त बनाएं।",
    hero_desc: "चालुक्य कालीन 6वीं शताब्दी के शैल-उत्कीर्ण गुफा मंदिरों, यूनेस्को विश्व धरोहर स्थलों, जीआई टैग इलकल साड़ियों और ग्रामीण कारीगरों से पर्यटकों को जोड़ने वाला एआई मंच।",
    hero_btn_plan: "यात्रा की योजना बनाएं",
    hero_btn_ai: "एआई साथी से पूछें",
    hero_btn_map: "कर्नाटक मानचित्र देखें",
    stat_destinations: "सत्यापित गंतव्य",
    stat_unesco: "पट्टदकल विश्व धरोहर",
    stat_gi: "इलकल साड़ी और खण",
    stat_inclusive: "समावेशी विकास केंद्र",
    cat_kicker: "विविध अनुभव",
    cat_title: "एक जिला। अनेक अनुभव।",
    cat_all: "सभी अनुभव",
    cat_heritage: "धरोहर एवं गुफाएं",
    cat_crafts: "कला एवं जीआई हथकरघा",
    cat_food: "स्थानीय भोजन एवं खानावलि",
    cat_spiritual: "आध्यात्मिक एवं संगम",
    cat_nature: "प्रकृति एवं बांध उद्यान",
    cat_accessible: "सुलभ पर्यटन",
    cat_business: "स्थानीय व्यवसाय",
    iconic_kicker: "प्रामाणिक गंतव्य",
    iconic_title: "ऐतिहासिक बागलकोट",
    iconic_subtitle: "स्रोतों द्वारा सत्यापित विरासत स्मारक, पवित्र नदी संगम और कारीगर समूह।",
    filter_taluk_label: "तालुक फ़िल्टर:",
    taluk_all: "सभी तालुक",
    map_kicker: "भौगोलिक केंद्र",
    map_title: "बागलकोट — चालुक्य विरासत का हृदय",
    map_subtitle: "कर्नाटक में बागलकोट जिले को प्रदर्शित करने वाला इंटरैक्टिव मानचित्र।",
    map_layers_title: "सक्रिय मानचित्र परतें:",
    map_reset_btn: "↺ रीसेट करें",
    layer_heritage: "धरोहर",
    layer_artisans: "कारीगर",
    layer_cultural_food: "सांस्कृतिक भोजन",
    layer_food: "खानपान",
    layer_lodging: "आवास",
    layer_emergency: "सुरक्षा / आपातकालीन",
    skills_kicker: "समावेशी विकास कौशल मिलान",
    skills_title: "बागलकोट के कुशल कारीगरों से मिलें",
    skills_subtitle: "आपकी प्राथमिकताओं को बुनकरों, कसूती सुईशिल्पियों और पारंपरिक रसोइयों से जोड़ने वाला एआई सिस्टम।",
    skill_prompt: "अपनी पसंद का अनुभव चुनें:",
    artisan_kicker: "मॉड्यूल 8: स्थानीय कारीगर",
    artisan_title: "स्थानीय कला एवं कारीगरों को जानें",
    artisan_subtitle: "सत्यापित हथकरघा सहकारी समितियां और जीआई उत्पादक।",
    biz_kicker: "मॉड्यूल 9: स्थानीय व्यवसाय",
    biz_title: "स्थानीय व्यवसाय एवं पर्यटन सेवाएं",
    biz_subtitle: "सत्यापित होमस्टे, पारंपरिक खानवलियां, और प्रमाणित टूर गाइड।",
    acc_kicker: "मॉड्यूल 10: सुगम्यता",
    acc_title: "बाधा-मुक्त पर्यटन",
    acc_subtitle: "व्हीलचेयर सुलभता, सीढ़ियों की संख्या और वरिष्ठ नागरिकों हेतु सुविधाओं की सत्यापित जानकारी।",
    safe_kicker: "मॉड्यूल 13: सुरक्षा केंद्र",
    safe_title: "बागलकोट पर्यटक सुरक्षा केंद्र",
    safe_subtitle: "24x7 आपातकालीन नंबर, पुलिस, और मल्टी-स्पेशियलिटी अस्पतालों की सूची।",
    btn_explore_details: "विवरण देखें",
    btn_add_trip: "+ यात्रा",
    btn_route: "मार्ग",
    btn_open_maps: "🗺️ गूगल मैप्स खोलें",
    badge_verified: "✓ सत्यापित",
    modal_historical_title: "ऐतिहासिक महत्व",
    modal_architecture_title: "वास्तुकला एवं शैली",
    modal_attractions_title: "📍 मुख्य आकर्षण — फोटो और विवरण देखने हेतु क्लिक करें:",
    modal_attractions_desc: "भारतीय पुरातत्व सर्वेक्षण (एएसआई) और जिला अभिलेखागार से प्रामाणिक तस्वीरें।",
    modal_accessibility_title: "♿ सुगम्यता एवं वरिष्ठ नागरिक सहायता",
    modal_reach_title: "🚌 कैसे पहुंचें:",
    lightbox_source_prefix: "स्रोत: आधिकारिक बागलकोट जिला पोर्टल एवं एएसआई धारवाड़ मंडल",
    close_btn: "बंद करें",
    taluk_suffix: "तालुक",
    access_yes: "♿ सुलभ",
    access_partial: "⚠️ सीढ़ियां / विषम धरातल",
    source_label: "स्रोत",
    duration_default: "2-3 घंटे",
    acc_wheelchair_label: "व्हीलचेयर",
    acc_wheelchair_yes: "हाँ (रैंप उपलब्ध)",
    acc_wheelchair_no: "नहीं (सीढ़ियां हैं)",
    acc_staircase_label: "सीढ़ियां",
    acc_senior_label: "वरिष्ठ नागरिकों हेतु अनुकूल",
    acc_terrain_varies: "विषम धरातल",
    transport_default: "बागलकोट और हुबली से नियमित केएसआरटीसी बस सेवाएं।"
  },

  ta: {
    lang_label: "மொழி:",
    announcement_text: "பாகல்கோட்டை AI-இயங்கும் ஒருங்கிணைந்த சுற்றுலா தளம் — மாவட்ட ஆட்சியர் & சுற்றுலா துறைக்கான அதிகாரப்பூர்வ தளம்",
    nav_home: "முகப்பு",
    nav_explore: "ஆராயுங்கள்",
    nav_map: "கர்நாடக வரைபடம்",
    nav_skills: "மக்களை சந்தியுங்கள்",
    nav_artisans: "கைவினைஞர்கள்",
    nav_businesses: "வணிகங்கள்",
    nav_accessible: "அணுகக்கூடிய சுற்றுலா",
    nav_safety: "பாதுகாப்பு மையம்",
    nav_provider: "வழங்குநர் போர்டல்",
    nav_complaints: "புகார்கள் மற்றும் பின்னூட்டம்",
    nav_admin: "டிசி டாஷ்போர்டு",
    nav_profile: "எனது சுயவிவரம்",
    btn_plan_trip: "பயணத்தை திட்டமிடு",
    hero_badge: "அதிகாரப்பூர்வ மாவட்ட AI சுற்றுலா தளம்",
    hero_tagline: "பாகல்கோட்டையை கண்டறியுங்கள். கலாச்சாரத்தை உணருங்கள். மக்களை மேம்படுத்துங்கள்.",
    hero_desc: "6ஆம் நூற்றாண்டு சாளுக்கிய குடைவரைக் கோயில்கள், யுனெஸ்கோ உலக பாரம்பரிய சின்னங்கள், புவிசார் குறியீடு பெற்ற இல்கல் சேலை நெசவாளர்கள் மற்றும் கிராமப்புற மக்களை இணைக்கும் AI தளம்.",
    hero_btn_plan: "பயணத்தை திட்டமிடு",
    hero_btn_ai: "AI தோழனிடம் கேளுங்கள்",
    hero_btn_map: "கர்நாடக வரைபடத்தை காண்க",
    stat_destinations: "சரிபார்க்கப்பட்ட இடங்கள்",
    stat_unesco: "பட்டடக்கல் உலக பாரம்பரியம்",
    stat_gi: "இல்கல் சேலை & கணா",
    stat_inclusive: "ஒருங்கிணைந்த வளர்ச்சி",
    cat_kicker: "பன்முக அனுபவம்",
    cat_title: "ஒரு மாவட்டம். பல அனுபவங்கள்.",
    cat_all: "அனைத்து அனுபவங்கள்",
    cat_heritage: "பாரம்பரியம் & குகைகள்",
    cat_crafts: "கலை & கைத்தறி நெசவு",
    cat_food: "உள்ளூர் உணவு & கானாங்கி",
    cat_spiritual: "ஆன்மீகம் & நதி சங்கமம்",
    cat_nature: "இயற்கை & அணை தோட்டங்கள்",
    cat_accessible: "அணுகக்கூடிய சுற்றுலா",
    cat_business: "உள்ளூர் வணிகங்கள்",
    iconic_kicker: "உண்மையான இடங்கள்",
    iconic_title: "புகழ்பெற்ற பாகல்கோட்டை",
    iconic_subtitle: "ஆதாரப்பூர்வமாக சரிபார்க்கப்பட்ட பாரம்பரிய சின்னங்கள், புனித நதி சங்கமங்கள் மற்றும் கைவினைஞர் தொகுப்புகள்.",
    filter_taluk_label: "தாலுகா வடிகட்டி:",
    taluk_all: "அனைத்து தாலுகாக்கள்",
    map_kicker: "புவியியல் மையம்",
    map_title: "பாகல்கோட்டை — சாளுக்கிய பாரம்பரியத்தின் இதயம்",
    map_subtitle: "கர்நாடகாவில் பாகல்கோட்டை மாவட்டத்தைக் காட்டும் ஊடாடும் ஜிஐஎஸ் வரைபடம்.",
    map_layers_title: "செயலில் உள்ள அடுக்குகள்:",
    map_reset_btn: "↺ மீட்டமை",
    layer_heritage: "பாரம்பரியம்",
    layer_artisans: "கைவினைஞர்கள்",
    layer_cultural_food: "கலாச்சார உணவு",
    layer_food: "உணவகங்கள்",
    layer_lodging: "தங்குமிடங்கள்",
    layer_emergency: "பாதுகாப்பு / அவசரம்",
    skills_kicker: "திறன் இணைப்பு தளம்",
    skills_title: "பாகல்கோட்டையின் மக்களை சந்தியுங்கள்",
    skills_subtitle: "உங்கள் ஆர்வங்களை நேரடியாக நெசவாளர்கள், கசூதி பூத்தையல் கலைஞர்கள் மற்றும் பாரம்பரிய சமையல்காரர்களுடன் இணைக்கும் AI முறை.",
    skill_prompt: "நீங்கள் விரும்பும் அனுபவத்தைத் தேர்ந்தெடுங்கள்:",
    artisan_kicker: "பிரிவு 8: உள்ளூர் கைவினைஞர்கள்",
    artisan_title: "உள்ளூர் கலை மற்றும் கலைஞர்களை கண்டறியுங்கள்",
    artisan_subtitle: "சரிபார்க்கப்பட்ட கைத்தறி சங்கங்கள் மற்றும் புவிசார் குறியீடு பெற்ற கைவினைஞர்கள்.",
    biz_kicker: "பிரிவு 9: உள்ளூர் வணிகங்கள்",
    biz_title: "உள்ளூர் வணிகங்கள் மற்றும் சுற்றுலா சேவைகள்",
    biz_subtitle: "ஹோம்ஸ்டேகள், பாரம்பரிய கானாவளிகள் மற்றும் சுற்றுலா வழிகாட்டிகள்.",
    acc_kicker: "பிரிவு 10: தடைகளற்ற அணுகல்",
    acc_title: "தடைகளற்ற பயணம்",
    acc_subtitle: "சக்கர நாற்காலி வசதிகள், படிக்கட்டுகள் எண்ணிக்கை மற்றும் மூத்த குடிமக்களுக்கான வசதிகள்.",
    safe_kicker: "பிரிவு 13: சுற்றுலா பாதுகாப்பு",
    safe_title: "பாகல்கோட்டை சுற்றுலா பாதுகாப்பு மையம்",
    safe_subtitle: "24x7 அவசர எண்கள், காவல் நிலையங்கள் மற்றும் மருத்துவமனைகள்.",
    btn_explore_details: "விவரங்களை ஆராய்க",
    btn_add_trip: "+ பயணம்",
    btn_route: "வழிப்பாதை",
    btn_open_maps: "🗺️ கூகிள் மேப்ஸ் திறக்கவும்",
    badge_verified: "✓ சரிபார்க்கப்பட்டது",
    modal_historical_title: "வரலாற்று முக்கியத்துவம்",
    modal_architecture_title: "கட்டிடக்கலை & பாணி",
    modal_attractions_title: "📍 முக்கிய ஈர்ப்புகள் — புகைப்படங்களை காண கிளிக் செய்யவும்:",
    modal_attractions_desc: "இந்திய தொல்பொருள் ஆய்வுத் துறை (ASI) மற்றும் மாவட்ட ஆவணக் காப்பகத்தின் உண்மையான புகைப்படங்கள்.",
    modal_accessibility_title: "♿ அணுகல்தன்மை & முதியோர் உதவி",
    modal_reach_title: "🚌 எப்படி அடைவது:",
    lightbox_source_prefix: "ஆதாரம்: அதிகாரப்பூர்வ பாகல்கோட்டை போர்டல் & ASI தார்வாட் வட்டம்",
    close_btn: "மூடுக",
    taluk_suffix: "தாலுகா",
    access_yes: "♿ அணுகக்கூடியது",
    access_partial: "⚠️ படிகள் / கடின பாதை",
    source_label: "ஆதாரம்",
    duration_default: "2-3 மணிநேரம்",
    acc_wheelchair_label: "சக்கர நாற்காலி",
    acc_wheelchair_yes: "ஆம் (சாய்தளம் உள்ளது)",
    acc_wheelchair_no: "இல்லை (படிகள் உள்ளன)",
    acc_staircase_label: "படிகள்",
    acc_senior_label: "முதியோர்க்கு உகந்தது",
    acc_terrain_varies: "மாறுபட்ட தரைப்பகுதி",
    transport_default: "பாகல்கோட்டை மற்றும் ஹூப்ளியிலிருந்து தொடர் பேருந்து வசதிகள்."
  },

  te: {
    lang_label: "భాష:",
    announcement_text: "బాగల్‌కోట్ AI-ఆధారిత సమగ్ర పర్యాటక వేదిక — జిల్లా కలెక్టర్ & పర్యాటక శాఖ కోసం సిద్ధం చేయబడింది",
    nav_home: "ముఖపేజీ",
    nav_explore: "అన్వేషించండి",
    nav_map: "కర్ణాటక పటం",
    nav_skills: "ప్రజలను కలవండి",
    nav_artisans: "చేతివృత్తులవారు",
    nav_businesses: "వ్యాపారాలు",
    nav_accessible: "అందుబాటు పర్యాటకం",
    nav_safety: "రక్షణ కేంద్రం",
    nav_provider: "సేవా పోర్టల్",
    nav_complaints: "ఫిర్యాదులు మరియు అభిప్రాయం",
    nav_admin: "డీసీ డ్యాష్‌బోర్డ్",
    nav_profile: "నా ప్రొఫైల్",
    btn_plan_trip: "యాత్రను ప్లాన్ చేయండి",
    hero_badge: "అధికారిక జిల్లా AI పర్యాటక వేదిక",
    hero_tagline: "బాగల్‌కోట్‌ను కనుగొనండి. సంస్కృతిని ఆస్వాదించండి. ప్రజలను శక్తివంతం చేయండి.",
    hero_desc: "6వ శతాబ్దపు చాళుక్యుల గుహాలయాలు, యునెస్కో ప్రపంచ వారసత్వ ప్రదేశాలు, జిఐ ట్యాగ్ పొందిన ఇల్కల్ చేనేతకారులు మరియు గ్రామీణ సమాజాలతో అనుసంధానించే AI వేదిక.",
    hero_btn_plan: "యాత్రను ప్లాన్ చేయండి",
    hero_btn_ai: "AI సహాయకుడిని అడగండి",
    hero_btn_map: "కర్ణాటక పటాన్ని వీక్షించండి",
    stat_destinations: "ధృవీకరించబడిన ప్రదేశాలు",
    stat_unesco: "పట్టడకల్ ప్రపంచ వారసత్వం",
    stat_gi: "ఇల్కల్ చీర & ఖణా",
    stat_inclusive: "సమగ్ర ప్రగతి వేదిక",
    cat_kicker: "విభిన్న అనుభవాలు",
    cat_title: "ఒకే జిల్లా. ఎన్నో అనుభవాలు.",
    cat_all: "అన్ని అనుభవాలు",
    cat_heritage: "వారసత్వం & గుహాలయాలు",
    cat_crafts: "కళలు & చేనేత వస్త్రాలు",
    cat_food: "స్థానిక ఆహారం & ఖానావళులు",
    cat_spiritual: "ఆధ్యాత్మికం & నదీ సంగమం",
    cat_nature: "ప్రకృతి & ఆనకట్ట ఉద్యానవనాలు",
    cat_accessible: "అందుబాటు పర్యాటకం",
    cat_business: "స్థానిక వ్యాపారాలు",
    iconic_kicker: "ప్రామాణిక ప్రదేశాలు",
    iconic_title: "చారిత్రక బాగల్‌కోట్",
    iconic_subtitle: "ధృవీకరించబడిన వారసత్వ కట్టడాలు, పవిత్ర సంగమాలు మరియు కళాకారుల సమూహాలు.",
    filter_taluk_label: "తాలూకా ఫిల్టర్:",
    taluk_all: "అన్ని తాలూకాలు",
    map_kicker: "భౌగోళిక కేంద్రం",
    map_title: "బాగల్‌కోట్ — చాళుక్య వారసత్వ గుండెకాయ",
    map_subtitle: "కర్ణాటకలో బాగల్‌కోట్ జిల్లాను ప్రదర్శించే ఇంటరాక్టివ్ GIS పటం.",
    map_layers_title: "క్రియాశీల పట పొరలు:",
    map_reset_btn: "↺ రీసెట్ చేయండి",
    layer_heritage: "వారసత్వం",
    layer_artisans: "చేతివృత్తులవారు",
    layer_cultural_food: "సాంస్కృతిక ఆహారం",
    layer_food: "భోజనశాలలు",
    layer_lodging: "వసతి గృహాలు",
    layer_emergency: "భద్రత / అత్యవసరం",
    skills_kicker: "సమగ్ర నైపుణ్య సరిపోలిక",
    skills_title: "బాగల్‌కోట్ వెనుక ఉన్న వ్యక్తులను కలవండి",
    skills_subtitle: "మీ అభిరుచులను నేరుగా నేతకారులు, కసూతి ఎంబ్రాయిడరీ నిపుణులు మరియు సంప్రదాయ చెఫ్‌లతో అనుసంధానించే AI వ్యవస్థ.",
    skill_prompt: "మీకు ఆసక్తి ఉన్న రంగాన్ని ఎంచుకోండి:",
    artisan_kicker: "విభాగం 8: స్థానిక చేతివృత్తులవారు",
    artisan_title: "స్థానిక కళలు & చేతివృత్తులను అన్వేషించండి",
    artisan_subtitle: "ధృవీకరించబడిన చేనేత సహకార సంఘాలు మరియు జీఐ కళాకారులు.",
    biz_kicker: "విభాగం 9: స్థానిక వ్యాపారాలు",
    biz_title: "స్థానిక వ్యాపారాలు & పర్యాటక సేవలు",
    biz_subtitle: "హోమ్‌స్టేలు, సంప్రదాయ ఖానావళులు మరియు లైసెన్స్ పొందిన గైడులు.",
    acc_kicker: "విభాగం 10: అవరోధాలు లేని ప్రయాణం",
    acc_title: "అందరికీ అందుబాటులో ఉండే పర్యాటకం",
    acc_subtitle: "వీల్‌చైర్ సదుపాయాలు, మెట్ల సంఖ్య మరియు సీనియర్ సిటిజన్ సదుపాయాల సమాచారం.",
    safe_kicker: "విభాగం 13: పర్యాటక భద్రత",
    safe_title: "బాగల్‌కోట్ పర్యాటక భద్రతా కేంద్రం",
    safe_subtitle: "24x7 అత్యవసర నంబర్లు, పోలీస్ స్టేషన్లు మరియు సూపర్ స్పెషాలిటీ ఆసుపత్రులు.",
    btn_explore_details: "వివరాలను అన్వేషించండి",
    btn_add_trip: "+ యాత్ర",
    btn_route: "మార్గం",
    btn_open_maps: "🗺️ గూగుల్ మ్యాప్స్ తెరవండి",
    badge_verified: "✓ ధృవీకరించబడింది",
    modal_historical_title: "చారిత్రక ప్రాముఖ్యత",
    modal_architecture_title: "వాస్తుశిల్పం & శైలి",
    modal_attractions_title: "📍 ప్రధాన ఆకర్షణలు — ఫోటోలు & వివరాల కోసం క్లిక్ చేయండి:",
    modal_attractions_desc: "భారత పురావస్తు సర్వే (ASI) మరియు జిల్లా ఆర్కైవ్స్ నుండి నిజమైన ఛాయాచిత్రాలు.",
    modal_accessibility_title: "♿ అందుబాటు & సీనియర్ సిటిజన్ల సహాయం",
    modal_reach_title: "🚌 ఎలా చేరుకోవాలి:",
    lightbox_source_prefix: "మూలం: అధికారిక బాగల్‌కోట్ పోర్టల్ & ASI ధార్వాడ్ సర్కిల్",
    close_btn: "మూసివేయి",
    taluk_suffix: "తాలూకా",
    access_yes: "♿ అందుబాటులో ఉంది",
    access_partial: "⚠️ మెట్లు / అసమాన మార్గం",
    source_label: "మూలం",
    duration_default: "2-3 గంటలు",
    acc_wheelchair_label: "వీల్ చైర్",
    acc_wheelchair_yes: "అవును (ర్యాంప్ అందుబాటులో ఉంది)",
    acc_wheelchair_no: "లేదు (మెట్లు ఉన్నాయి)",
    acc_staircase_label: "మెట్లు",
    acc_senior_label: "వృద్ధులకు అనుకూలం",
    acc_terrain_varies: "అసమాన భూమి",
    transport_default: "బాగల్‌కోట్ మరియు హుబ్లీ నుండి సాధారణ ఆర్టీసీ బస్సులు అందుబాటులో ఉన్నాయి."
  },

  mr: {
    lang_label: "भाषा:",
    announcement_text: "बागलकोट एआय-चालित सर्वसमावेशक पर्यटन व्यासपीठ — जिल्हाधिकारी व पर्यटन विभागासाठी तयार",
    nav_home: "मुख्यपृष्ठ",
    nav_explore: "एक्सप्लोर करा",
    nav_map: "कर्नाटक नकाशा",
    nav_skills: "स्थानिक लोकांना भेटा",
    nav_artisans: "कारागीर",
    nav_businesses: "व्यवसाय",
    nav_accessible: "सुलभ पर्यटन",
    nav_safety: "सुरक्षा केंद्र",
    nav_provider: "सेवा प्रदाता पोर्टल",
    nav_complaints: "तक्रारी आणि अभिप्राय",
    nav_admin: "डीसी डॅशबोर्ड",
    nav_profile: "माझे प्रोफाइल",
    btn_plan_trip: "सहल आखा",
    hero_badge: "अधिकृत जिल्हा एआय पर्यटन प्लॅटफॉर्म",
    hero_tagline: "बागलकोट शोधा. संस्कृती अनुभवा. स्थानिक जनतेला सक्षम करा.",
    hero_desc: "६ व्या शतकातील चालुक्यकालीन दगडी गुंफा मंदिरे, युनेस्को जागतिक वारसा स्थळे, जीआय मानांकित इलकल साडी विणकर आणि ग्रामीण समुदायांना जोडणारे एआय व्यासपीठ.",
    hero_btn_plan: "सहल आखा",
    hero_btn_ai: "एआय मित्राला विचारा",
    hero_btn_map: "कर्नाटक नकाशा पहा",
    stat_destinations: "प्रमाणित पर्यटन स्थळे",
    stat_unesco: "पट्टदकल जागतिक वारसा",
    stat_gi: "इलकल साडी व खण",
    stat_inclusive: "सर्वसमावेशक विकास",
    cat_kicker: "विविध अनुभव",
    cat_title: "एक जिल्हा. अनेक अनुभव.",
    cat_all: "सर्व अनुभव",
    cat_heritage: "वारसा व गुंफा",
    cat_crafts: "कला व जीआय हातमाग",
    cat_food: "स्थानिक खाद्यसंस्कृती",
    cat_spiritual: "आध्यात्मिक व संगम",
    cat_nature: "निसर्ग व धरण उद्याने",
    cat_accessible: "सुलभ पर्यटन",
    cat_business: "स्थानिक व्यवसाय",
    iconic_kicker: "अस्सल स्थळे",
    iconic_title: "ऐतिहासिक बागलकोट",
    iconic_subtitle: "पुराव्यानिशी प्रमाणित वारसा स्मारके, पवित्र संगम आणि कारागीर केंद्रे.",
    filter_taluk_label: "तालुका फिल्टर:",
    taluk_all: "सर्व तालुके",
    map_kicker: "भौगोलिक केंद्र",
    map_title: "बागलकोट — चालुक्य वारशाचे हृदय",
    map_subtitle: "कर्नाटक राज्यातील बागलकोट जिल्ह्याचे प्रदर्शन करणारा परस्परसंवादी नकाशा.",
    map_layers_title: "सक्रिय स्तर:",
    map_reset_btn: "↺ रीसेट करा",
    layer_heritage: "वारसा",
    layer_artisans: "कारागीर",
    layer_cultural_food: "सांस्कृतिक खाद्य",
    layer_food: "भोजनगृहे",
    layer_lodging: "निवास",
    layer_emergency: "सुरक्षा / आपत्कालीन",
    skills_kicker: "कौशल्य जुळवणी प्रणाली",
    skills_title: "बागलकोटच्या कारागिरांना भेटा",
    skills_subtitle: "तुमच्या आवडीनुसार विणकर, कसूती भरतकाम कारागीर आणि पारंपारिक शेफ यांच्याशी थेट संवाद घडवणारी प्रणाली.",
    skill_prompt: "तुमचा आवडता अनुभव निवडा:",
    artisan_kicker: "मॉड्यूल ८: स्थानिक कारागीर",
    artisan_title: "स्थानिक हस्तकला व कारागीर शोधा",
    artisan_subtitle: "प्रमाणित हातमाग सोसायट्या आणि जीआय मानांकन प्राप्त कारागीर.",
    biz_kicker: "मॉड्यूल ९: स्थानिक व्यवसाय",
    biz_title: "स्थानिक व्यवसाय व पर्यटन सेवा",
    biz_subtitle: "प्रमाणित होमस्टे, पारंपारिक खाणावळी आणि परवानाधारक मार्गदर्शक.",
    acc_kicker: "मॉड्यूल १०: अडथळामुक्त पर्यटन",
    acc_title: "सुलभ व अडथळामुक्त प्रवास",
    acc_subtitle: "व्हीलचेअर सुलभता, पायऱ्यांची संख्या आणि ज्येष्ठ नागरिकांच्या सुविधांची माहिती.",
    safe_kicker: "मॉड्यूल १३: सुरक्षा केंद्र",
    safe_title: "बागलकोट पर्यटक सुरक्षा केंद्र",
    safe_subtitle: "२४x७ आपत्कालीन संपर्क, पोलीस ठाणी आणि मल्टी-स्पेशालिटी रुग्णालये.",
    btn_explore_details: "तपशील एक्सप्लोर करा",
    btn_add_trip: "+ सहल",
    btn_route: "मार्ग",
    btn_open_maps: "🗺️ गुगल मॅप्स उघडा",
    badge_verified: "✓ प्रमाणित",
    modal_historical_title: "ऐतिहासिक महत्त्व",
    modal_architecture_title: "वास्तुकला आणि शैली",
    modal_attractions_title: "📍 मुख्य आकर्षणे — फोटो व माहितीसाठी क्लिक करा:",
    modal_attractions_desc: "भारतीय पुरातत्व सर्वेक्षण (ASI) आणि जिल्हा अभिलेखागारातील अधिकृत छायाचित्रे.",
    modal_accessibility_title: "♿ सुलभता आणि ज्येष्ठ नागरिकांना मदत",
    modal_reach_title: "🚌 कसे पोहोचावे:",
    lightbox_source_prefix: "स्रोत: अधिकृत बागलकोट पोर्टल आणि ASI धारवाड मंडळ",
    close_btn: "बंद करा",
    taluk_suffix: "तालुका",
    access_yes: "♿ सुलभ प्रवेश",
    access_partial: "⚠️ पायऱ्या / खडकाळ",
    source_label: "स्रोत",
    duration_default: "२-३ तास",
    acc_wheelchair_label: "व्हीलचेअर",
    acc_wheelchair_yes: "होय (रॅम्प उपलब्ध)",
    acc_wheelchair_no: "नाही (पायऱ्या आहेत)",
    acc_staircase_label: "पायऱ्या",
    acc_senior_label: "ज्येष्ठांसाठी अनुकूल",
    acc_terrain_varies: "विषम जमीन",
    transport_default: "बागलकोट आणि हुबळी येथून नियमित बस सेवा."
  },

  ml: {
    lang_label: "ഭാഷ:",
    announcement_text: "ബാഗൽകോട്ട് AI-അധിഷ്ഠിത സമഗ്ര ടൂറിസം പ്ലാറ്റ്‌ഫോം — ജില്ലാ കളക്ടർക്കും ടൂറിസം വകുപ്പിനുമായി തയ്യാറാക്കിയത്",
    nav_home: "ഹോം",
    nav_explore: "പര്യവേക്ഷണം",
    nav_map: "കർണാടക ഭൂപടം",
    nav_skills: "ആളുകളെ കാണുക",
    nav_artisans: "കരകൗശല വിദഗ്ധർ",
    nav_businesses: "ബിസിനസുകൾ",
    nav_accessible: "പ്രാപ്യമായ ടൂറിസം",
    nav_safety: "സുരക്ഷാ കേന്ദ്രം",
    nav_provider: "പ്രൊവൈഡർ പോർട്ടൽ",
    nav_complaints: "പരാതികളും പ്രതികരണങ്ങളും",
    nav_admin: "ഡിസി ഡാഷ്‌ബോർഡ്",
    nav_profile: "എന്റെ പ്രൊഫൈൽ",
    btn_plan_trip: "യാത്ര ആസൂത്രണം ചെയ്യുക",
    hero_badge: "ഔദ്യോഗിക ജില്ലാ AI ടൂറിസം പ്ലാറ്റ്‌ഫോം",
    hero_tagline: "ബാഗൽകോട്ട് കണ്ടെത്തൂ. സംസ്കാരം അനുഭവിക്കൂ. ജനങ്ങളെ ശാക്തീകരിക്കൂ.",
    hero_desc: "ആറാം നൂറ്റാണ്ടിലെ ചാലൂക്യ ഗുഹാക്ഷേത്രങ്ങൾ, യുനെസ്കോ ലോക പൈതൃക സ്മാരകങ്ങൾ, ജിഐ ടാഗുള്ള ഇൽക്കൽ സാരി നെയ്ത്തുകാർ എന്നിവരെ സഞ്ചാരികളുമായി ബന്ധിപ്പിക്കുന്ന വേദി.",
    hero_btn_plan: "യാത്ര ആസൂത്രണം ചെയ്യുക",
    hero_btn_ai: "AI കൂട്ടുകാരനോട് ചോദിക്കൂ",
    hero_btn_map: "ഭൂപടം കാണുക",
    stat_destinations: "സ്ഥിരീകരിച്ച കേന്ദ്രങ്ങൾ",
    stat_unesco: "പട്ടടക്കൽ ലോക പൈതൃകം",
    stat_gi: "ഇൽക്കൽ സാരി & ഖാന",
    stat_inclusive: "സമഗ്ര വളർച്ചാ പദ്ധതി",
    cat_kicker: "വൈവിധ്യമാർന്ന അനുഭവങ്ങൾ",
    cat_title: "ഒരു ജില്ല. നിരവധി അനുഭവങ്ങൾ.",
    cat_all: "എല്ലാ അനുഭവങ്ങളും",
    cat_heritage: "പൈതൃകം & ഗുഹകൾ",
    cat_crafts: "കല & കൈത്തറി",
    cat_food: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
    cat_spiritual: "ആത്മീയത & സംഗമം",
    cat_nature: "പ്രകൃതി & അണക്കെട്ട്",
    cat_accessible: "പ്രാപ്യമായ ടൂറിസം",
    cat_business: "പ്രാദേശിക ബിസിനസുകൾ",
    iconic_kicker: "ആധികാരിക കേന്ദ്രങ്ങൾ",
    iconic_title: "ചരിത്രപ്രസിദ്ധമായ ബാഗൽകോട്ട്",
    iconic_subtitle: "ആധികാരികമായി പരിശോധിച്ച പൈതൃക സ്മാരകങ്ങളും നദീസംഗമങ്ങളും കരകൗശല കേന്ദ്രങ്ങളും.",
    filter_taluk_label: "താലൂക്ക് ഫിൽട്ടർ:",
    taluk_all: "എല്ലാ താലൂക്കുകളും",
    map_kicker: "ഭൂമിശാസ്ത്ര ഹൃദയം",
    map_title: "ബാഗൽകോട്ട് — ചാലൂക്യ പൈതൃകത്തിന്റെ ഹൃദയം",
    map_subtitle: "കർണാടകയിലെ ബാഗൽകോട്ട് ജില്ലയെ കാണിക്കുന്ന ഇന്ററാക്ടീവ് മാപ്പ്.",
    map_layers_title: "മാപ്പ് ലെയറുകൾ:",
    map_reset_btn: "↺ പുനഃസ്ഥാപിക്കുക",
    layer_heritage: "പൈതൃകം",
    layer_artisans: "കരകൗശല വിദഗ്ധർ",
    layer_cultural_food: "ഭക്ഷണ പാരമ്പര്യം",
    layer_food: "ഭക്ഷണശാലകൾ",
    layer_lodging: "താമസം",
    layer_emergency: "സുരക്ഷ / അത്യാഹിതം",
    skills_kicker: "നൈപുണ്യ പൊരുത്തപ്പെടുത്തൽ",
    skills_title: "ബാഗൽകോട്ടിന്റെ ശില്പികളെ കാണൂ",
    skills_subtitle: "നിങ്ങളുടെ താല്പര്യങ്ങൾ നെയ്ത്തുകാരുമായും കസൂതി കലാകാരന്മാരുമായും ബന്ധിപ്പിക്കുന്ന സംവിധാനം.",
    skill_prompt: "നിങ്ങൾക്ക് താൽപ്പര്യമുള്ള മേഖല തിരഞ്ഞെടുക്കുക:",
    artisan_kicker: "വിഭാഗം 8: പ്രാദേശിക ശില്പികൾ",
    artisan_title: "കരകൗശല വിദഗ്ധരെ കണ്ടെത്തുക",
    artisan_subtitle: "സ്ഥിരീകരിച്ച കൈത്തറി സഹകരണ സംഘങ്ങളും ജിഐ കരകൗശല വിദഗ്ധരും.",
    biz_kicker: "വിഭാഗം 9: പ്രാദേശിക ബിസിനസുകൾ",
    biz_title: "പ്രാദേശിക ബിസിനസുകളും സേവനങ്ങളും",
    biz_subtitle: "ഹോംസ്റ്റേകൾ, പരമ്പരാഗത ഭക്ഷണശാലകൾ, ടൂർ ഗൈഡുകൾ എന്നിവയുടെ വിവരങ്ങൾ.",
    acc_kicker: "വിഭാഗം 10: തടസ്സമില്ലാത്ത പ്രവേശനം",
    acc_title: "തടസ്സങ്ങളില്ലാത്ത യാത്ര",
    acc_subtitle: "വീൽചെയർ സൗകര്യങ്ങൾ, പടികളുടെ എണ്ണം, മുതിർന്ന പൗരന്മാർക്കുള്ള സൗകര്യങ്ങൾ എന്നിവ.",
    safe_kicker: "വിഭാഗം 13: സുരക്ഷാ കേന്ദ്രം",
    safe_title: "ബാഗൽകോട്ട് ടൂറിസ്റ്റ് സുരക്ഷാ കേന്ദ്രം",
    safe_subtitle: "24x7 അടിയന്തര സഹായ നമ്പറുകൾ, പോലീസ് സ്റ്റേഷനുകൾ, ആശുപത്രികൾ.",
    btn_explore_details: "വിശദാംശങ്ങൾ കാണുക",
    btn_add_trip: "+ യാത്ര",
    btn_route: "റൂട്ട് / വഴി",
    btn_open_maps: "🗺️ ഗൂഗിൾ മാപ്പ് തുറക്കുക",
    badge_verified: "✓ പരിശോധിച്ചുറപ്പിച്ചു",
    modal_historical_title: "ചരിത്രപരമായ പ്രാധാന്യം",
    modal_architecture_title: "വാസ്തുവിദ്യയും ശൈലിയും",
    modal_attractions_title: "📍 പ്രധാന ആകർഷണങ്ങൾ — ഫോട്ടോകൾ കാണാൻ ക്ലിക്ക് ചെയ്യുക:",
    modal_attractions_desc: "ആർക്കിയോളജിക്കൽ സർവേ ഓഫ് ഇന്ത്യയിൽ (ASI) നിന്നുള്ള യഥാർത്ഥ ഫോട്ടോകൾ.",
    modal_accessibility_title: "♿ പ്രവേശനക്ഷമതയും മുതിർന്നവർക്കുള്ള സഹായവും",
    modal_reach_title: "🚌 എങ്ങനെ എത്തിച്ചേരാം:",
    lightbox_source_prefix: "ഉറവിടം: ഔദ്യോഗിക ബാഗൽകോട്ട് പോർട്ടൽ & ASI ധാർവാഡ് സർക്കിൾ",
    close_btn: "അടയ്ക്കുക",
    taluk_suffix: "താലൂക്ക്",
    access_yes: "♿ പ്രാപ്യമാണ്",
    access_partial: "⚠️ പടികൾ / വിഷമം",
    source_label: "ഉറവിടം",
    duration_default: "2-3 മണിക്കൂർ",
    acc_wheelchair_label: "വീൽചെയർ",
    acc_wheelchair_yes: "അതെ (റാംപ് ലഭ്യമാണ്)",
    acc_wheelchair_no: "ഇല്ല (പടികൾ കയറണം)",
    acc_staircase_label: "പടികൾ",
    acc_senior_label: "മുതിർന്നവർക്ക് അനുയോജ്യം",
    acc_terrain_varies: "വ്യത്യസ്തമായ ഭൂപ്രകൃതി",
    transport_default: "ബാഗൽകോട്ടിൽ നിന്നും ഹുബ്ബള്ളിയിൽ നിന്നും സ്ഥിരം ബസ് സർവീസ്."
  }
};

// ── Master Destination Localized Dictionary ──────────────────────────────────
const DESTINATIONS_I18N = {
  dest_badami: {
    en: {
      name: "Badami (Ancient Vatapi)",
      taluk: "Badami",
      category: "Heritage & Cave Temples",
      description: "Historic capital of the Early Chalukya dynasty (6th–8th century CE), renowned for its four magnificent rock-cut cave temples carved into red sandstone cliffs overlooking the sacred Agastya Lake.",
      historical_significance: "Royal capital founded by Pulakeshin I in 540 CE; epicenter of Early Chalukyan stone architecture and royal rock inscriptions.",
      architecture: "Masterpiece of rock-cut architecture in Cave 1 (Shiva Nataraja), Caves 2 & 3 (Vishnu avatars), and Cave 4 (Jain Tirthankaras).",
      transport: "Direct KSRTC buses from Hubballi, Belagavi, and Bagalkote. Badami Railway Station is 5 km from town center."
    },
    kn: {
      name: "ಬಾದಾಮಿ (ಪ್ರಾಚೀನ ವಾತಾಪಿ)",
      taluk: "ಬಾದಾಮಿ",
      category: "ಪರಂಪರೆ ಮತ್ತು ಗುಹಾ ದೇವಾಲಯಗಳು",
      description: "ಆರಂಭಿಕ ಚಾಲುಕ್ಯ ರಾಜವಂಶದ (೬-೮ನೇ ಶತಮಾನ) ಐತಿಹಾಸಿಕ ರಾಜಧಾನಿ. ಅಗಸ್ತ್ಯ ಸರೋವರದ ತೀರದಲ್ಲಿ ಕೆಂಪು ಮರಳುಗಲ್ಲಿನ ಬಂಡೆಗಳಲ್ಲಿ ಕೊರೆಯಲಾದ ನಾಲ್ಕು ಭವ್ಯ ಗುಹಾ ದೇವಾಲಯಗಳಿಗೆ ಇದು ಜಗತ್ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
      historical_significance: "ಕ್ರಿ.ಶ. ೫೪೦ ರಲ್ಲಿ ಒಂದನೇ ಪುಲಕೇಶಿಯಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ರಾಜಧಾನಿ; ಆರಂಭಿಕ ಚಾಲುಕ್ಯ ಕಲ್ಲಿನ ವಾಸ್ತುಶಿಲ್ಪದ ಕೇಂದ್ರಬಿಂದು.",
      architecture: "ಗುಹೆ ೧ (ನಟರಾಜ ಶಿವ), ಗುಹೆಗಳು ೨ & ೩ (ವಿಷ್ಣು ಅವತಾರಗಳು) ಮತ್ತು ಗುಹೆ ೪ (ಜೈನ ತೀರ್ಥಂಕರರು) ಗಳಲ್ಲಿನ ಶಿಲಾ-ಕೆತ್ತನೆಯ ಅಪೂರ್ವ ಕಲಾಕೃತಿ.",
      transport: "ಹುಬ್ಬಳ್ಳಿ, ಬೆಳಗಾವಿ ಮತ್ತು ಬಾಗಲಕೋಟೆಯಿಂದ ನೇರ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ಸುಗಳು. ಬಾದಾಮಿ ರೈಲ್ವೆ ನಿಲ್ದಾಣವು ೫ ಕಿಮೀ ದೂರದಲ್ಲಿದೆ."
    },
    hi: {
      name: "बादामी (प्राचीन वातापी)",
      taluk: "बादामी",
      category: "धरोहर एवं गुफा मंदिर",
      description: "आरंभिक चालुक्य राजवंश (6वीं-8वीं शताब्दी) की ऐतिहासिक राजधानी, जो पवित्र अगस्त्य झील के तट पर लाल बलुआ पत्थर की चट्टानों में तराशे गए चार भव्य शैल-उत्कीर्ण गुफा मंदिरों के लिए विश्व प्रसिद्ध है।",
      historical_significance: "540 ईस्वी में पुलकेशिन प्रथम द्वारा स्थापित शाही राजधानी; चालुक्य शैल-स्थापत्य और शिलालेखों का केंद्र।",
      architecture: "गुफा 1 (नटराज शिव), गुफा 2 व 3 (विष्णु अवतार), और गुफा 4 (जैन तीर्थंकर) में शैल-उत्कीर्ण वास्तुकला की उत्कृष्ट कृति।",
      transport: "हुबली, बेलगावी और बागलकोट से सीधी केएसआरटीसी बसें। बादामी रेलवे स्टेशन नगर केंद्र से 5 किमी दूर है।"
    },
    ta: {
      name: "பாதாமி (பண்டைய வாதாபி)",
      taluk: "பாதாமி",
      category: "பாரம்பரியம் & குடைவரைக் கோயில்கள்",
      description: "தொடக்கக்கால சாளுக்கிய வம்சத்தின் (6-8ஆம் நூற்றாண்டு) வரலாற்று தலைநகரம். புனித அகஸ்தியர் ஏரியின் கரையில் செம்மணற்கல் பாறைகளில் செதுக்கப்பட்ட நான்கு அற்புதமான குடைவரைக் கோயில்களுக்கு புகழ்பெற்றது.",
      historical_significance: "கி.பி. 540-ൽ முதலாம் புலிகேசியால் நிறுவப்பட்ட சாளுக்கிய தலைநகரம்; பாறை குடைவரை கட்டிடக்கலையின் பிறப்பிடம்.",
      architecture: "குகை 1 (நடராஜர்), குகைகள் 2 & 3 (விஷ்ணு அவதாரங்கள்), குகை 4 (சமண தீர்த்தங்கரர்கள்) ஆகியவற்றில் உள்ள சாளுக்கிய சிற்பக்கலை.",
      transport: "ஹூப்ளி, பெலகாவி மற்றும் பாகல்கோட்டையிலிருந்து நேரடி பேருந்துகள். பாதமி ரயில் நிலையம் 5 கி.மீ தொலைவில் உள்ளது."
    },
    te: {
      name: "బాదామి (ప్రాచీన వాతాపి)",
      taluk: "బాదామి",
      category: "వారసత్వం & గుహాలయాలు",
      description: "తొలి చాళుక్యుల (6-8వ శతాబ్దం) చారిత్రక రాజధాని. పవిత్ర అగస్త్య సరస్సు ఒడ్డున ఎర్ర రాతి కొండలలో చెక్కబడిన నాలుగు అద్భుతమైన రాతి గుహాలయాలకు ప్రపంచ ప్రసిద్ధి చెందినది.",
      historical_significance: "క్రీ.శ. 540 లో మొదటి పులకేశి స్థాపించిన రాజధాని; చాళుక్య శిలా వాస్తుశిల్పానికి ప్రసిద్ధి చెందిన కేంద్రం.",
      architecture: "గుహ 1 (నటరాజ శివుడు), గుహలు 2 & 3 (విష్ణు అవతారాలు), గుహ 4 (జైన తీర్థంకరులు) లలో తొలి చాళుక్య శిల్ప కళాఖండాలు.",
      transport: "హుబ్లీ, బెళగావి మరియు బాగల్‌కోట్ నుండి ఆర్టీసీ బస్సులు అందుబాటులో ఉన్నాయి. బాదామి రైల్వే స్టేషన్ 5 కి.మీ దూరంలో ఉంది."
    },
    mr: {
      name: "बादामी (प्राचीन वातापी)",
      taluk: "बादामी",
      category: "वारसा व लेणी मंदिरे",
      description: "आरंभीच्या चालुक्य घराण्याची (६वे-८वे शतक) ऐतिहासिक राजधानी. पवित्र अगस्त्य तलावाच्या काठावर लाल वालुकाश्माच्या खडकात कोरलेल्या चार भव्य गुंफा मंदिरांसाठी जगप्रसिद्ध.",
      historical_significance: "इ.स. ५४० मध्ये पहिल्या पुलकेशीने स्थापन केलेली राजधानी; चालुक्य दगडी वास्तुकलेचा अद्वितीय केंद्रबिंदू.",
      architecture: "गुंफा १ (नटराज शिव), गुंफा २ व ३ (विष्णू अवतार) आणि गुंफा ४ (जैन तीर्थंकर) मधील शिल्पकलेचा उत्कृष्ट नमुना.",
      transport: "हुबळी, बेळगाव आणि बागलकोट येथून थेट बस सेवा. बादामी रेल्वे स्थानक मुख्य शहरापासून ५ किमी अंतरावर आहे."
    },
    ml: {
      name: "ബദാമി (പുരാതന വാതാപി)",
      taluk: "ബദാമി",
      category: "പൈതൃകം & ഗുഹാക്ഷേത്രങ്ങൾ",
      description: "ആദ്യകാല ചാലൂക്യ രാജവംശത്തിന്റെ (6-8 നൂറ്റാണ്ട്) ചരിത്ര തലസ്ഥാനം. അഗസ്ത്യ തടാകത്തിന്റെ തീരത്ത് ചെങ്കൽ പാറകളിൽ കൊത്തിയെടുത്ത നാല് ഗുഹാക്ഷേത്രങ്ങൾക്ക് പ്രശസ്തമാണ്.",
      historical_significance: "എഡി 540-ൽ പുലകേശി ഒന്നാമൻ സ്ഥാപിച്ച തലസ്ഥാനം; ചാലൂക്യ ശിലാ വാസ്തുവിദ്യയുടെ ഈറ്റില്ലം.",
      architecture: "ഗുഹ 1 (ശിവ നടരാജൻ), ഗുഹകൾ 2 & 3 (വിഷ്ണു), ഗുഹ 4 (ജൈന തീർത്ഥങ്കരന്മാർ) എന്നിവയിലെ വിസ്മയകരമായ കൊത്തുപണികൾ.",
      transport: "ഹുബ്ബള്ളി, ബെളഗാവി എന്നിവിടങ്ങളിൽ നിന്ന് നേരിട്ട് ബസ് സർവീസ്. ബദാമി റെയിൽവേ സ്റ്റേഷൻ 5 കി.മീ അകലെയാണ്."
    },
    taluk_suffix: "താലൂക്ക്",
    access_yes: "♿ പ്രാപ്യമാണ്",
    access_partial: "⚠️ പടികൾ / വിഷമം",
    source_label: "ഉറവിടം",
    duration_default: "2-3 മണിക്കൂർ",
    acc_wheelchair_label: "വീൽചെയർ",
    acc_wheelchair_yes: "അതെ (റാംപ് ലഭ്യമാണ്)",
    acc_wheelchair_no: "ഇല്ല (പടികൾ കയറണം)",
    acc_staircase_label: "പടികൾ",
    acc_senior_label: "മുതിർന്നവർക്ക് അനുയോജ്യം",
    acc_terrain_varies: "വ്യത്യസ്തമായ ഭൂപ്രകൃതി",
    transport_default: "ബാഗൽകോട്ടിൽ നിന്നും ഹുബ്ബള്ളിയിൽ നിന്നും സ്ഥിരം ബസ് സർവീസ്."
  },

  dest_pattadakal: {
    en: {
      name: "Pattadakal UNESCO World Heritage Site",
      taluk: "Badami",
      category: "UNESCO World Heritage Site",
      description: "Coronation capital of the Early Chalukyas on the banks of Malaprabha River. A UNESCO World Heritage complex of 10 monumental 7th-8th century temples demonstrating the synthesis of northern Nagara and southern Dravida architectural styles.",
      historical_significance: "Pattadakal (meaning 'Stone of Coronation') was where Chalukyan emperors were crowned; celebrates King Vikramaditya II's victory over Pallavas.",
      architecture: "Virupaksha and Mallikarjuna temples in classical Dravida style alongside Galaganatha and Papanatha temples with northern curvilinear Nagara shikharas.",
      transport: "14 km from Badami, 22 km from Aihole. Frequent buses and tourist taxis available."
    },
    kn: {
      name: "ಪಟ್ಟದಕಲ್ಲು ವಿಶ್ವ ಪರಂಪರೆ ತಾಣ",
      taluk: "ಬಾದಾಮಿ",
      category: "ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣ",
      description: "ಮಲಪ್ರಭಾ ನದಿಯ ದಂಡೆಯಲ್ಲಿರುವ ಆರಂಭಿಕ ಚಾಲುಕ್ಯರ ಪಟ್ಟಾಭಿಷೇಕ ರಾಜಧಾನಿ. ಉತ್ತರ ಭಾರತದ ನಾಗರ ಮತ್ತು ದಕ್ಷಿಣ ಭಾರತದ ದ್ರಾವಿಡ ವಾಸ್ತುಶಿಲ್ಪ ಶೈಲಿಗಳ ಅದ್ಭುತ ಸಂಗಮವನ್ನು ಬಿಂಬಿಸುವ ೧೦ ಬೃಹತ್ ದೇವಾಲಯಗಳ ಯುನೆಸ್ಕೋ ತಾಣ.",
      historical_significance: "ಚಾಲುಕ್ಯ ಚಕ್ರವರ್ತಿಗಳ ಪಟ್ಟಾಭಿಷೇಕ ಜರುಗುತ್ತಿದ್ದ ಪವಿತ್ರ ಸ್ಥಳ; ಪಲ್ಲವರ ಮೇಲಿನ ಎರಡನೇ ವಿಕ್ರಮಾದಿತ್ಯನ ವಿಜಯದ ಸ್ಮರಣಾರ್ಥ ನಿರ್ಮಿತ ದೇವಾಲಯಗಳು.",
      architecture: "ದ್ರಾವಿಡ ಶೈಲಿಯ ವಿರೂಪಾಕ್ಷ ಮತ್ತು ಮಲ್ಲಿಕಾರ್ಜುನ ದೇವಾಲಯಗಳು ಹಾಗೂ ಉತ್ತರ ನಾಗರ ಶೈಲಿಯ ಗಳಗನಾಥ ಮತ್ತು ಪಾಪನಾಥ ದೇವಾಲಯಗಳು.",
      transport: "ಬಾದಾಮಿಯಿಂದ ೧೪ ಕಿಮೀ, ಐಹೊಳೆಯಿಂದ ೨೨ ಕಿಮೀ. ನಿರಂತರ ಬಸ್ಸು ಮತ್ತು ಟ್ಯಾಕ್ಸಿ ಸೌಲಭ್ಯವಿದೆ."
    },
    hi: {
      name: "पट्टदकल यूनेस्को विश्व धरोहर स्थल",
      taluk: "बादामी",
      category: "यूनेस्को विश्व धरोहर",
      description: "मलप्रभा नदी के तट पर चालुक्य सम्राटों की राज्याभिषेक राजधानी। 10 स्मारकीय 7वीं-8वीं शताब्दी के मंदिरों का यूनेस्को विश्व धरोहर स्थल जो उत्तर भारतीय नागर और दक्षिण भारतीय द्रविड़ स्थापत्य शैलियों के संगम को दर्शाता है।",
      historical_significance: "चालुक्य सम्राटों के पट्टाभिषेक का पवित्र स्थल; पल्लवों पर विक्रमादित्य द्वितीय की विजय का प्रतीक।",
      architecture: "द्रविड़ शैली के विरुपाक्ष और मल्लिकार्जुन मंदिर तथा नागर रेखा-प्रासाद शिखर वाले गलगनाथ और पापनाथा मंदिर।",
      transport: "बादामी से 14 किमी, आईहोल से 22 किमी। नियमित बसें और टैक्सी उपलब्ध हैं।"
    },
    ta: {
      name: "பட்டடக்கல் யுனெஸ்கோ உலக பாரம்பரிய தளம்",
      taluk: "பாதாமி",
      category: "யுனெஸ்கோ உலக பாரம்பரிய தளம்",
      description: "மலபிரபா நதிக்கரையில் அமைந்துள்ள சாளுக்கியர்களின் முடிசூட்டு தலைநகரம். திராவிட மற்றும் நாகர கட்டிடக்கலை பாணிகளின் ஒருங்கிணைப்பை வெளிப்படுத்தும் 10 நினைவுச் சின்னக் கோவில்கள் கொண்ட யுனெஸ்கோ தளம்.",
      historical_significance: "சாளுக்கிய பேரரசர்கள் முடிசூட்டப்பட்ட புனித தளம்; பல்லவர்களுக்கு எதிரான இரண்டாம் விக்கிரமாதித்தனின் வெற்றியை கொண்டாடும் தளம்.",
      architecture: "விருபாக்ஷா மற்றும் மல்லிகார்ஜுனா கோவில்கள் திராவிட பாணியிலும், கலகநாதா கோவில் நாகர பாணியிலும் கட்டப்பட்டுள்ளன.",
      transport: "பாதாமியிலிருந்து 14 கி.மீ, ஐஹோலிலிருந்து 22 கி.மீ. பேருந்து மற்றும் டாக்ஸி வசதிகள் உள்ளன."
    },
    te: {
      name: "పట్టడకల్ యునెస్కో ప్రపంచ వారసత్వ ప్రదేశం",
      taluk: "బాదామి",
      category: "యునెస్కో ప్రపంచ వారసత్వ ప్రదేశం",
      description: "మలప్రభ నదీ తీరంలో తొలి చాళుక్యుల పట్టాభిషేక రాజధాని. ఉత్తర భారత నగర మరియు దక్షిణ భారత ద్రావిడ వాస్తు శైలుల అద్భుత సమ్మేళనమైన 10 దేవాలయాల యునెస్కో ప్రదేశం.",
      historical_significance: "చాళుక్య చక్రవర్తుల పట్టాభిషేకం జరిగిన పవిత్ర స్థలం; పల్లవులపై రెండవ విక్రమాదిత్యుని విజయోత్సవ చిహ్నం.",
      architecture: "ద్రావిడ శైలిలోని విరూపాక్ష, మల్లికార్జున దేవాలయాలు మరియు ఉత్తర నగర శైలిలోని గలగనాథ దేవాలయాలు.",
      transport: "బాదామి నుండి 14 కి.మీ, ఐహోల్ నుండి 22 కి.మీ. నిరంతరం బస్సులు మరియు టాక్సీలు అందుబాటులో ఉన్నాయి."
    },
    mr: {
      name: "पट्टदकल युनेस्को जागतिक वारसा स्थळ",
      taluk: "बादामी",
      category: "युनेस्को जागतिक वारसा स्थळ",
      description: "मलप्रभा नदीकाठची चालुक्यांची राज्याभिषेक राजधानी. उत्तर भारतीय नागर आणि दक्षिण भारतीय द्रविड मंदिर शैलींचा अप्रतिम संगम दर्शविणाऱ्या १० मंदिरांचे युनेस्को संकुल.",
      historical_significance: "चालुक्य सम्राटांचा राज्याभिषेक येथे होत असे; पल्लवांवरील दुसऱ्या विक्रमादित्याच्या विजयाचे प्रतीक.",
      architecture: "द्रविड शैलीतील विरूपाक्ष व मल्लिकार्जुन मंदिरे आणि नागर शैलीतील गलगनाथ व पापनाथा मंदिरे.",
      transport: "बादामीपासून १४ किमी, ऐहोळेपासून २२ किमी. बस व टॅक्सी उपलब्ध."
    },
    ml: {
      name: "പട്ടടക്കൽ യുനെസ്കോ ലോക പൈതൃക കേന്ദ്രം",
      taluk: "ബദാമി",
      category: "യുനെസ്കോ ലോക പൈതൃക കേന്ദ്രം",
      description: "മലപ്രഭ നദിക്കരയിലെ ചാലൂക്യ കിരീടധാരണ തലസ്ഥാനം. ദ്രാവിഡ-നാഗര വാസ്തുവിദ്യാ ശൈലികളുടെ സംഗമം കാണിക്കുന്ന 10 ക്ഷേത്രങ്ങളുള്ള യുനെസ്കോ പൈതൃക കേന്ദ്രം.",
      historical_significance: "ചാലൂക്യ ചക്രവർത്തിമാരുടെ കിരീടധാരണം നടന്നിരുന്ന പുണ്യഭൂമി; പല്ലവർക്കെതിരായ വിജയസ്മാരകം.",
      architecture: "വിരൂപാക്ഷ, മല്ലികാർജ്ജുന ക്ഷേത്രങ്ങൾ ദ്രാവിഡ ശൈലിയിലും ഗലഗനാഥ ക്ഷേത്രം നാഗര ശൈലിയിലും പണിതിരിക്കുന്നു.",
      transport: "ബദാമിയിൽ നിന്ന് 14 കി.മീ. ബസ്, ടാക്സി സർവീസുകൾ ലഭ്യമാണ്."
    }
  },

  dest_aihole: {
    en: {
      name: "Aihole (Cradle of Indian Temple Architecture)",
      taluk: "Hunagund",
      category: "Heritage / Temple Architecture",
      description: "Regarded by art historians worldwide as the 'Cradle of Indian Temple Architecture', containing over 125 experimental stone structural temples built between the 5th and 12th century CE.",
      historical_significance: "Ancient Aryapura; served as an architectural laboratory for Early Chalukyan stone masons and guild of merchants (Ayyavole 500).",
      architecture: "Iconic Durga Temple with apsidal Buddhist chaitya plan, ancient Lad Khan flat-roofed temple, and Meguti Jain temple with 634 CE Ravikirti inscription.",
      transport: "34 km from Badami, 10 km from Pattadakal. Direct state buses from Bagalkote and Ilkal."
    },
    kn: {
      name: "ಐಹೊಳೆ (ಭಾರತೀಯ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ತೊಟ್ಟಿಲು)",
      taluk: "ಹುನಗುಂದ",
      category: "ಪರಂಪರೆ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ",
      description: "ಜಗತ್ತಿನ ಇತಿಹಾಸಕಾರರಿಂದ 'ಭಾರತೀಯ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ತೊಟ್ಟಿಲು' ಎಂದು ಗೌರವಿಸಲ್ಪಟ್ಟ ಐತಿಹಾಸಿಕ ತಾಣ. ಕ್ರಿ.ಶ. ೫ ರಿಂದ ೧೨ನೇ ಶತಮಾನದ ನಡುವೆ ನಿರ್ಮಿಸಲಾದ ೧೨೫ ಕ್ಕೂ ಹೆಚ್ಚು ಕಲ್ಲಿನ ಪ್ರಾಯೋಗಿಕ ದೇವಾಲಯಗಳನ್ನು ಹೊಂದಿದೆ.",
      historical_significance: "ಪ್ರಾಚೀನ ಆರ್ಯಪುರ; ಚಾಲುಕ್ಯ ಶಿಲ್ಪಿಗಳ ವಾಸ್ತುಶಿಲ್ಪದ ಪ್ರಯೋಗಶಾಲೆ ಮತ್ತು ಪ್ರಸಿದ್ಧ 'ಅಯ್ಯಾವೊಳೆ ೫೦೦' ವ್ಯಾಪಾರಿ ಸಂಘದ ಕೇಂದ್ರ.",
      architecture: "ಅರೆ-ವೃತ್ತಾಕಾರದ ಗಜಪೃಷ್ಠ ಶೈಲಿಯ ದುರ್ಗಾ ದೇವಾಲಯ, ಪ್ರಾಚೀನ ಲಾಡ್ ಖಾನ್ ದೇವಾಲಯ ಮತ್ತು ಕ್ರಿ.ಶ. ೬೩೪ ರ ರವಿಕೀರ್ತಿ ಶಾಸನವಿರುವ ಮೇಗುತಿ ಜೈನ ದೇವಾಲಯ.",
      transport: "ಬಾದಾಮಿಯಿಂದ ೩೪ ಕಿಮೀ, ಪಟ್ಟದಕಲ್ಲಿನಿಂದ ೧೦ ಕಿಮೀ. ಬಾಗಲಕೋಟೆ ಮತ್ತು ಇಳಕಲ್‌ನಿಂದ ಬಸ್ ಸೌಲಭ್ಯವಿದೆ."
    },
    hi: {
      name: "आईहोल (भारतीय मंदिर वास्तुकला का पालना)",
      taluk: "हुनगुंड",
      category: "धरोहर एवं वास्तुकला",
      description: "विश्वभर के कला इतिहासकारों द्वारा 'भारतीय मंदिर वास्तुकला का पालना' माना जाने वाला स्थल, जहाँ 5वीं से 12वीं शताब्दी के बीच निर्मित 125 से अधिक प्रयोगात्मक मंदिर स्थित हैं।",
      historical_significance: "प्राचीन आर्यपुरा; चालुक्य वास्तुकारों की प्रयोगात्मक प्रयोगशाला तथा 'अय्यावोले 500' व्यापारी गिल्ड का मुख्य केंद्र।",
      architecture: "बौद्ध चैत्य शैली की गजपृष्ठाकार दुर्गा मंदिर, प्राचीन लाड खान मंदिर, तथा 634 ईस्वी के रविकीर्ति शिलालेख युक्त मेगुती जैन मंदिर।",
      transport: "बादामी से 34 किमी, पट्टदकल से 10 किमी। बागलकोट से नियमित बसें उपलब्ध।"
    },
    ta: {
      name: "ஐஹோல் (இந்திய கோவில் கட்டிடக்கலையின் தொட்டில்)",
      taluk: "ஹுனகுண்ட்",
      category: "பாரம்பரியம் & கட்டிடக்கலை",
      description: "'இந்திய கோவில் கட்டிடக்கலையின் தொட்டில்' என போற்றப்படும் வரலாற்று தளம். 5 முதல் 12ஆம் நூற்றாண்டு வரை கட்டப்பட்ட 125க்கும் மேற்பட்ட பரிசோதனை கற்கோவில்களைக் கொண்டுள்ளது.",
      historical_significance: "பண்டைய ஆரியபுரா; சாளுக்கிய சிற்பிகளின் கட்டிடக்கலை ஆய்வகம் மற்றும் புகழ்பெற்ற 'ஐயாவோலே 500' வணிகர் கூட்டமைப்பின் மையம்.",
      architecture: "துர்க்கை கோவில் (அரைவட்ட கஜபிருஷ்ட வடிவம்), லாட் கான் கோவில், மற்றும் கி.பி. 634 ரவிகீர்த்தி கல்வெட்டு கொண்ட மேகுதி கோவில்.",
      transport: "பாதாமியிலிருந்து 34 கி.மீ, பட்டடக்கல்லிலிருந்து 10 கி.மீ. பேருந்து வசதிகள் உள்ளன."
    },
    te: {
      name: "ఐహోల్ (భారతీయ ఆలయ వాస్తుశిల్ప ఊయల)",
      taluk: "హునగుండ్",
      category: "వారసత్వం & వాస్తుశిల్పం",
      description: "'భారతీయ ఆలయ వాస్తుశిల్ప ఊయల'గా ప్రసిద్ధి చెందిన ప్రదేశం. 5వ నుండి 12వ శతాబ్దం మధ్య నిర్మించిన 125కు పైగా రాతి ఆలయాల ప్రయోగశాల.",
      historical_significance: "ప్రాచీన ఆర్యపుర; తొలి చాళుక్య శిల్పుల వాస్తు పరిశోధనా కేంద్రం మరియు ప్రసిద్ధ వ్యాపార కేంద్రం.",
      architecture: "గజపృష్ఠాకార దుర్గా దేవాలయం, లాడ్ ఖాన్ దేవాలయం మరియు క్రీ.శ. 634 నాటి రవికీర్తి శాసనం గల మేగుతి జైన దేవాలయం.",
      transport: "బాదామి నుండి 34 కి.మీ, పట్టడకల్ నుండి 10 కి.మీ. బాగల్‌కోట్ నుండి బస్సులు ఉన్నాయి."
    },
    mr: {
      name: "ऐहोळे (भारतीय मंदिर वास्तुकलेचे पाळणाघर)",
      taluk: "हुनगुंड",
      category: "वारसा व वास्तुकला",
      description: "'भारतीय मंदिर वास्तुकलेचे पाळणाघर' म्हणून गौरवले जाणारे ठिकाण. ५व्या ते १२व्या शतकातील १२५ हून अधिक प्रयोगात्मक दगडी मंदिरांचे संकुल.",
      historical_significance: "प्राचीन आर्यपुरा; चालुक्य शिल्पकारांची वास्तुकला प्रयोगशाळा.",
      architecture: "दुर्गा मंदिर (अर्धगोलाकार चैत्य शैली), लाड खान मंदिर आणि इ.स. ६३४ च्या रविकीर्ती शिलालेखासह मेगुती जैन मंदिर.",
      transport: "बादामीपासून ३४ किमी. बस सेवा उपलब्ध."
    },
    ml: {
      name: "ഐഹോളെ (ഇന്ത്യൻ ക്ഷേത്ര വാസ്തുവിദ്യയുടെ കളിത്തൊട്ടിൽ)",
      taluk: "ഹുനഗുണ്ട്",
      category: "പൈതൃകം & വാസ്തുവിദ്യ",
      description: "'ഇന്ത്യൻ ക്ഷേത്ര വാസ്തുവിദ്യയുടെ കളിത്തൊട്ടിൽ' എന്നറിയപ്പെടുന്ന സ്ഥലം. 5 മുതൽ 12 വരെ നൂറ്റാണ്ടുകളിൽ നിർമ്മിച്ച 125 ലധികം ക്ഷേത്രങ്ങൾ ഇവിടെയുണ്ട്.",
      historical_significance: "ചാലൂക്യ ശില്പികളുടെ വാസ്തുവിദ്യാ പരീക്ഷണശാലയായിരുന്നു ഈ പുരാതന നഗരം.",
      architecture: "ദുർഗ്ഗാ ക്ഷേത്രം, ലാഡ് ഖാൻ ക്ഷേത്രം, എഡി 634-ലെ ശാസനം അടങ്ങിയ മേഗുതി ജൈന ക്ഷേത്രം.",
      transport: "ബദാമിയിൽ നിന്ന് 34 കി.മീ അകലെയാണ് ഐഹോളെ."
    }
  },

  dest_mahakuta: {
    en: {
      name: "Mahakuta (Sacred Springs & Shrines)",
      taluk: "Badami",
      category: "Spiritual & Sacred Springs",
      description: "Tranquil pilgrimage valley in a forested banyan grove, famous for its natural perennial thermal mineral springs and 7th-century Early Chalukyan Dravidian shrines.",
      historical_significance: "Mentioned in the 602 CE Mahakuta Pillar Inscription of King Mangalesha documenting royal land endowments to Lord Mahakuteshwara.",
      architecture: "Mahakuteshwara temple with early curvilinear Dravidian vimana and the sacred Vishnu Pushkarini spring pool with submerged Panchamukha Shiva Linga.",
      transport: "14 km east of Badami via rural route. Auto-rickshaws, private cabs, and local buses available."
    },
    kn: {
      name: "ಮಹಾಕೂಟ (ಪವಿತ್ರ ಪುಷ್ಕರಣಿ ಮತ್ತು ದೇವಾಲಯಗಳು)",
      taluk: "ಬಾದಾಮಿ",
      category: "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಪವಿತ್ರ ಪುಷ್ಕರಣಿ",
      description: "ಆಲದ ಮರಗಳ ಹಸಿರು ಕಾನನದ ನಡುವೆ ನೆಲೆಸಿರುವ ಶಾಂತ ಯಾತ್ರಾ ಸ್ಥಳ. ನಿರಂತರವಾಗಿ ಜಿನುಗುವ ನೈಸರ್ಗಿಕ ಔಷಧೀಯ ಬುಗ್ಗೆಗಳು (ವಿಷ್ಣು ಪುಷ್ಕರಣಿ) ಮತ್ತು ೭ನೇ ಶತಮಾನದ ಚಾಲುಕ್ಯ ದೇವಾಲಯಗಳಿಗೆ ಪ್ರಸಿದ್ಧ.",
      historical_significance: "ಕ್ರಿ.ಶ. ೬೦೨ ರ ಮಂಗಲೇಶ ರಾಜನ ಪ್ರಸಿದ್ಧ ಮಹಾಕೂಟ ಸ್ತಂಭ ಶಾಸನದಲ್ಲಿ ಉಲ್ಲೇಖಿತವಾದ ಪವಿತ್ರ ಕ್ಷೇತ್ರ.",
      architecture: "ದ್ರಾವಿಡ ಶಿಖರ ಹೊಂದಿರುವ ಮಹಾಕೂಟೇಶ್ವರ ದೇವಾಲಯ ಮತ್ತು ನೀರಿನಲ್ಲಿ ಮುಳುಗಿರುವ ಪಂಚಮುಖ ಲಿಂಗವಿರುವ ವಿಷ್ಣು ಪುಷ್ಕರಣಿ.",
      transport: "ಬಾದಾಮಿಯಿಂದ ಪೂರ್ವಕ್ಕೆ ೧೪ ಕಿಮೀ ದೂರದಲ್ಲಿದೆ. ಆಟೋರಿಕ್ಷಾ ಮತ್ತು ಬಸ್ ಸೌಲಭ್ಯವಿದೆ."
    },
    hi: {
      name: "महाकूट (पवित्र प्राकृतिक कुंड एवं मंदिर)",
      taluk: "बादामी",
      category: "आध्यात्मिक एवं प्राकृतिक कुंड",
      description: "हरे-भरे वटवृक्षों के उपवन में स्थित एक शांत तीर्थ स्थल, जो अपने सदाबहार प्राकृतिक खनिज जल स्रोतों (विष्णु पुष्करिणी) और 7वीं शताब्दी के चालुक्य मंदिरों के लिए प्रसिद्ध है।",
      historical_significance: "राजा मंगलेश के 602 ईस्वी के महाकूट स्तंभ शिलालेख में उल्लिखित शाही धार्मिक स्थल।",
      architecture: "द्रविड़ शैली का महाकूटेश्वर मंदिर तथा जलमग्न पंचमुख शिवलिंग वाला पवित्र विष्णु पुष्करिणी कुंड।",
      transport: "बादामी से पूर्व दिशा में 14 किमी। ऑटो और बसें उपलब्ध।"
    },
    ta: {
      name: "மஹாகூடா (புனித நீரூற்று மற்றும் கோவில்கள்)",
      taluk: "பாதாமி",
      category: "ஆன்மீகம் & புனித நீரூற்று",
      description: "பசுமையான ஆலமர சோலையில் அமைந்துள்ள அமைதியான புனித தளம். வற்றாத இயற்கை நீரூற்று (விஷ்ணு புஷ்கரிணி) மற்றும் 7ஆம் நூற்றாண்டு சாளுக்கிய கோவில்களுக்கு பிரபலமானது.",
      historical_significance: "மன்னர் மங்களேஷனின் கி.பி. 602 மகாகூடா தூண் கல்வெட்டில் குறிப்பிடப்பட்ட வரலாற்று சிறப்புமிக்க தளம்.",
      architecture: "மகாகூடேஸ்வரர் கோவில் மற்றும் நீரில் மூழ்கிய பஞ்சமுக லிங்கம் கொண்ட புனித குளம்.",
      transport: "பாதாமியிலிருந்து 14 கி.மீ தொலைவில் உள்ளது."
    },
    te: {
      name: "మహాకూట (పవిత్ర పుష్కరిణి మరియు ఆలయాలు)",
      taluk: "బాదామి",
      category: "ఆధ్యాత్మికం & పవిత్ర పుష్కరిణి",
      description: "మర్రి చెట్ల నీడలో ప్రశాంతమైన పుణ్యక్షేత్రం. నిరంతరం ప్రవహించే సహజ ఊటలు (విష్ణు పుష్కరిణి) మరియు 7వ శతాబ్దపు చాళుక్య దేవాలయాలకు ప్రసిద్ధి.",
      historical_significance: "క్రీ.శ. 602 నాటి మంగళేశుని మహాకూట స్తంభ శాసనంలో పేర్కొనబడిన క్షేత్రం.",
      architecture: "ద్రావిడ శైలిలోని మహాకూటేశ్వర ఆలయం మరియు నీటిలో మునిగి ఉన్న పంచముఖ లింగం.",
      transport: "బాదామి నుండి 14 కి.మీ దూరం. ఆటోలు, బస్సులు కలవు."
    },
    mr: {
      name: "महाकूट (पवित्र झरा आणि मंदिरे)",
      taluk: "बादामी",
      category: "आध्यात्मिक व पवित्र कुंड",
      description: "वड-पिंपळाच्या गर्द सावलीत वसलेले शांत तीर्थक्षेत्र. बारमाही नैसर्गिक पाण्याचा झरा (विष्णू पुष्करिणी) आणि ७व्या शतकातील चालुक्य मंदिरांसाठी प्रसिद्ध.",
      historical_significance: "राजा मंगलेश यांच्या इ.स. ६०२ च्या महाकूट स्तंभालेखात उल्लेख असलेले तीर्थ.",
      architecture: "महाकूटेश्वर मंदिर आणि पाण्याखालील पंचमुखी शिवलिंग असलेले पवित्र कुंड.",
      transport: "बादामीपासून १४ किमी अंतरावर."
    },
    ml: {
      name: "മഹാകൂട (വിശുദ്ധ നീരുറവയും ക്ഷേത്രങ്ങളും)",
      taluk: "ബദാമി",
      category: "ആത്മീയത & വിശുദ്ധ കുളം",
      description: "ആൽമരങ്ങളാൽ ചുറ്റപ്പെട്ട പ്രശാന്തമായ തീർത്ഥാടന കേന്ദ്രം. വറ്റാത്ത പ്രകൃതിദത്ത നീരുറവയും (വിഷ്ണു പുഷ്കരിണി) ഏഴാം നൂറ്റാണ്ടിലെ ക്ഷേത്രങ്ങളും.",
      historical_significance: "എഡി 602-ലെ മംഗളേശ രാജാവിന്റെ സ്തംഭ ശാസനത്തിൽ ഈ ക്ഷേത്രത്തെക്കുറിച്ച് പ്രതിപാദിക്കുന്നു.",
      architecture: "ദ്രാവിഡ ശൈലിയിലുള്ള മഹാകൂടേശ്വര ക്ഷേത്രവും വെള്ളത്തിൽ മുങ്ങിക്കിടക്കുന്ന പഞ്ചമുഖ ലിംഗവും.",
      transport: "ബദാമിയിൽ നിന്ന് 14 കി.മീ."
    }
  },

  dest_kudala_sangama: {
    en: {
      name: "Kudala Sangama (Krishna-Malaprabha Confluence)",
      taluk: "Hunagund",
      category: "Spiritual & Pilgrimage",
      description: "Sacred confluence of the Krishna and Malaprabha rivers, and final resting place (Aikya Mantapa) of 12th-century philosopher, statesman, and social reformer Jagadjyothi Basaveshwara.",
      historical_significance: "Spiritual epicenter of the Sharana Lingayat movement; where Basaveshwara received enlightenment and attained spiritual union (Aikya).",
      architecture: "Aikya Mantapa preserved inside an engineering marvel circular ring-well amidst river waters, 12th-century Sangameshwara Chalukyan temple, and Basava Museum.",
      transport: "50 km from Bagalkote city, 45 km from Almatti. Well-connected four-lane highway with pilgrim guest houses."
    },
    kn: {
      name: "ಕೂಡಲ ಸಂಗಮ (ಕೃಷ್ಣಾ-ಮಲಪ್ರಭಾ ಪವಿತ್ರ ಸಂಗಮ)",
      taluk: "ಹುನಗುಂದ",
      category: "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಪವಿತ್ರ ಸಂಗಮ",
      description: "ಕೃಷ್ಣಾ ಮತ್ತು ಮಲಪ್ರಭಾ ನದಿಗಳ ಪವಿತ್ರ ಸಂಗಮ ಕ್ಷೇತ್ರ. ೧೨ನೇ ಶತಮಾನದ ವಿಶ್ವಗುರು, ಕ್ರಾಂತಿಕಾರಿ ಸಮಾಜ ಸುಧಾರಕ ಜಗಜ್ಯೋತಿ ಬಸವೇಶ್ವರರ ಐಕ್ಯ ಮಂಟಪವಿರುವ ಪರಮ ಪಾವನ ತಾಣ.",
      historical_significance: "ಶರಣ ಚಳುವಳಿಯ ಧಾರ್ಮಿಕ ಕೇಂದ್ರಬಿಂದು; ಬಸವಣ್ಣನವರು ವಿದ್ಯೆ ಕಲಿತು, ಜ್ಞಾನೋದಯ ಪಡೆದು ಲಿಂಗೈಕ್ಯರಾದ ಪುಣ್ಯಭೂಮಿ.",
      architecture: "ನದಿಯ ಮಧ್ಯದಲ್ಲಿ ವෘತ್ತಾಕಾರದ ಬೃಹತ್ ಗೋಡೆಯೊಳಗೆ ಸಂರಕ್ಷಿಸಲಾದ ಐಕ್ಯ ಮಂಟಪ, ಚಾಲುಕ್ಯ ಶೈಲಿಯ ಸಂಗಮೇಶ್ವರ ದೇವಾಲಯ ಮತ್ತು ಬಸವ ತತ್ವ ಸಂಗ್ರಹಾಲಯ.",
      transport: "ಬಾಗಲಕೋಟೆಯಿಂದ ೫೦ ಕಿಮೀ, ಆಲಮಟ್ಟಿಯಿಂದ ೪೫ ಕಿಮೀ. ಯಾತ್ರಿ ನಿವಾಸಗಳೊಂದಿಗೆ ಉತ್ತಮ ಹೆದ್ದಾರಿ ಸಂಪರ್ಕವಿದೆ."
    },
    hi: {
      name: "कूडल संगम (कृष्णा-मलप्रभा पवित्र संगम)",
      taluk: "हुनगुंड",
      category: "आध्यात्मिक एवं संगम तीर्थ",
      description: "कृष्णा और मलप्रभा नदियों का पवित्र संगम स्थल तथा 12वीं शताब्दी के महान दार्शनिक और समाज सुधारक जगद्ज्योति बसवेश्वर का समाधि स्थल (ऐक्य मंटप)।",
      historical_significance: "शरण लिंगायत आंदोलन का आध्यात्मिक केंद्र; जहाँ बसवेश्वर जी ने ज्ञान प्राप्त किया और समाधि ली।",
      architecture: "नदी के जल के मध्य एक विशाल वृत्ताकार कुएं के अंदर संरक्षित ऐक्य मंटप, 12वीं सदी का संगमेश्वर मंदिर तथा बसव दर्शन संग्रहालय।",
      transport: "बागलकोट से 50 किमी, आलमट्टी से 45 किमी। बेहतरीन चार लेन हाईवे कनेक्टिविटी।"
    },
    ta: {
      name: "கூடல சங்கமம் (கிருஷ்ணா-மலபிரபா நதி சங்கமம்)",
      taluk: "ஹுனகுண்ட்",
      category: "ஆன்மீகம் & புனித சங்கமம்",
      description: "கிருஷ்ணா மற்றும் மலபிரபா நதிகளின் புனித சங்கம தளம். 12ஆம் நூற்றாண்டு சமூக சீர்திருத்தவாதி ஜெகஜோதி பசவேஸ்வரரின் ஐக்கிய மண்டபம் (ஜீவ சமாதி) அமைந்துள்ள இடம்.",
      historical_significance: "சரன இயக்கத்தின் ஆன்மீக மையம்; பசவேஸ்வரர் ஞானம் பெற்று முக்தி அடைந்த இடம்.",
      architecture: "நதியின் நடுவே பிரம்மாண்ட வட்டக் கிணற்றினுள் பாதுகாக்கப்பட்ட ஐக்கிய மண்டபம் மற்றும் சங்கமேஸ்வரர் கோவில்.",
      transport: "பாகல்கோட்டையிலிருந்து 50 கி.மீ தூரம்."
    },
    te: {
      name: "కూడల సంగమం (కృష్ణా-మలప్రభ పవిత్ర సంగమం)",
      taluk: "హునగుండ్",
      category: "ఆధ్యాత్మికం & సంగమ క్షేత్రం",
      description: "కృష్ణా మరియు మలప్రభ నదుల పవిత్ర సంగమ ప్రదేశం. 12వ శతాబ్దపు గొప్ప సమాజ సంస్కర్త జగద్జ్యోతి బసవేశ్వరుల ఐక్య మంటపం (సమాధి) ఇక్కడే ఉంది.",
      historical_significance: "శరణ లింగాయత్ ఉద్యమానికి ఆధ్యాత్మిక కేంద్రం; బసవన్న ముక్తి పొందిన పుణ్యభూమి.",
      architecture: "నది మధ్యలో వృత్తాకార గోడలో భద్రపరచబడిన ఐక్య మంటపం మరియు సంగమేశ్వర దేవాలయం.",
      transport: "బాగల్‌కోట్ నుండి 50 కి.మీ దూరంలో ఉంది."
    },
    mr: {
      name: "कुडल संगम (कृष्णा-मलप्रभा संगम)",
      taluk: "हुनगुंड",
      category: "आध्यात्मिक व तीर्थक्षेत्र",
      description: "कृष्णा आणि मलप्रभा नद्यांचा पवित्र संगम. १२व्या शतकातील समाजसुधारक महात्मा बसवेश्वर यांचे ऐक्य मंटप (समाधी स्थळ).",
      historical_significance: "शरण लिंगायत चळवळीचे आध्यात्मिक केंद्र; महात्मा बसवेश्वरांचे निर्वाण स्थळ.",
      architecture: "नदीच्या मध्यभागी गोलाकार संरचनेत जतन केलेले ऐक्य मंटप आणि संगमेश्वर मंदिर.",
      transport: "बागलकोटपासून ५० किमी. उत्तम रस्ते जोडणी."
    },
    ml: {
      name: "കൂടല സംഗമ (കൃഷ്ണ-മലപ്രഭ നദീസംഗമം)",
      taluk: "ഹുനഗുണ്ട്",
      category: "ആത്മീയത & തീർത്ഥാടനം",
      description: "കൃഷ്ണ, മലപ്രഭ നദികളുടെ പവിത്ര സംഗമസ്ഥാനം. പന്ത്രണ്ടാം നൂറ്റാണ്ടിലെ സാമൂഹിക പരിഷ്കർത്താവ് ബസവേശ്വരന്റെ ഐക്യ മണ്ഡപം ഇവിടെ സ്ഥിതി ചെയ്യുന്നു.",
      historical_significance: "ശരണ പ്രസ്ഥാനത്തിന്റെ ആത്മീയ ആസ്ഥാനം.",
      architecture: "നദിയുടെ നടുവിൽ വൃത്താകൃതിയിലുള്ള സംരക്ഷണ ഭിത്തിക്കുള്ളിലെ ഐക്യ മണ്ഡപവും സംഗമേശ്വര ക്ഷേത്രവും.",
      transport: "ബാഗൽകോട്ടിൽ നിന്ന് 50 കി.മീ."
    }
  },

  dest_ilkal: {
    en: {
      name: "Ilkal (GI Handloom Saree Hub)",
      taluk: "Ilkal",
      category: "Art & GI Handlooms",
      description: "Legendary 300-year-old weaving center world-famous for its Geographical Indication (GI) tagged Ilkal sarees, woven with traditional pit looms and distinctive Tope Teni red silk pallu.",
      historical_significance: "Thrived under the patronage of the Peshwas and local chieftains; home to thousands of master weaver families carrying forward generational textile heritage.",
      architecture: "Traditional weaver pit-loom houses with live demonstrations and the sacred Shri Vijaya Mahantesh Matha.",
      transport: "Located on NH-50. 60 km from Bagalkote, 30 km from Kudala Sangama."
    },
    kn: {
      name: "ಇಳಕಲ್ (ಜಿಐ ಕೈಮಗ್ಗ ಸೀರೆಗಳ ಕೇಂದ್ರ)",
      taluk: "ಇಳಕಲ್",
      category: "ಕಲೆ ಮತ್ತು ಜಿಐ ಕೈಮಗ್ಗ",
      description: "೩೦೦ ವರ್ಷಗಳ ಇತಿಹಾಸವಿರುವ ವಿಶ್ವವಿಖ್ಯಾತ ಜಿಐ ಮಾನ್ಯತೆಯ ಇಳಕಲ್ ಸೀರೆಗಳ ಜನ್ಮಸ್ಥಳ. ವಿಶಿಷ್ಟ 'ಟೋಪ ತೇಣಿ' ಕೆಂಪು ರೇಷ್ಮೆ ಪಲ್ಲು ಮತ್ತು ಕೊಂಡಿ ಕೌಶಲ್ಯದಿಂದ ಸಾಂಪ್ರದಾಯಿಕ ಕುಳಿಮಗ್ಗಗಳಲ್ಲಿ ನೇಯಲಾಗುತ್ತದೆ.",
      historical_significance: "ಪೇಶ್ವೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಅರಸರ ಪ್ರೋತ್ಸಾಹದಿಂದ ಬೆಳೆದ ನೇಕಾರಿಕೆ ಪರಂಪರೆ; ತಲೆಮಾರುಗಳಿಂದ ಬಂದ ನೇಕಾರ ಕುಟುಂಬಗಳ ನೆಲೆವೀಡು.",
      architecture: "ಸಾಂಪ್ರದಾಯಿಕ ನೇಯ್ಗೆ ಕಾರ್ಯಾಗಾರಗಳು, ಕುಳಿಮಗ್ಗ ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಪ್ರಸಿದ್ಧ ಶ್ರೀ ವಿಜಯ ಮಹಾಂತೇಶ ಮಠ.",
      transport: "ರಾಷ್ಟ್ರೀય ಹೆದ್ದಾರಿ ೫೦ ರಲ್ಲಿದೆ. ಬಾಗಲಕೋಟೆಯಿಂದ ೬೦ ಕಿಮೀ, ಕೂಡಲಸಂಗಮದಿಂದ ೩೦ ಕಿಮೀ."
    },
    hi: {
      name: "इलकल (जीआई हथकरघा साड़ी केंद्र)",
      taluk: "इलकल",
      category: "कला एवं जीआई हथकरघा",
      description: "300 साल पुराना विश्व प्रसिद्ध हथकरघा केंद्र, जो अपने जीआई टैग प्राप्त इलकल साड़ियों के लिए विख्यात है। यह विशिष्ट 'टोपे तेणी' लाल पल्लू और कोंडी तकनीक से पारंपरिक गड्ढा-करघों (पिट लूम) पर बुनी जाती है।",
      historical_significance: "पेशवाओं और स्थानीय शासकों के संरक्षण में विकसित हथकरघा धरोहर; पीढ़ियों से चली आ रही बुनकर परंपरा।",
      architecture: "पारंपरिक बुनकर कार्यशालाएं तथा पवित्र श्री विजय महंतेश मठ।",
      transport: "एनएच-50 पर स्थित। बागलकोट से 60 किमी दूरी पर।"
    },
    ta: {
      name: "இல்கல் (புவிசார் குறியீடு கைத்தறி சேலை மையம்)",
      taluk: "இல்கல்",
      category: "கலை & கைத்தறி நெசவு",
      description: "300 ஆண்டுகள் பழமையான புகழ்பெற்ற புவிசார் குறியீடு பெற்ற இல்கல் சேலைகளின் பிறப்பிடம். பாரம்பரிய குழித்தறிகளில் தனித்துவமான சிவப்பு பல்லுவுடன் நெய்யப்படுகிறது.",
      historical_significance: "தலைமுறை தலைமுறையாக தொடரும் நெசவு கலை பாரம்பரியம்.",
      architecture: "நேரடி நெசவு பட்டறைகள் மற்றும் வரலாற்று சிறப்புமிக்க விஜய மஹாந்தேஷ் மடம்.",
      transport: "தேசிய நெடுஞ்சாலை 50ல் உள்ளது. பாகல்கோட்டையிலிருந்து 60 கி.மீ."
    },
    te: {
      name: "ఇల్కల్ (జీఐ చేనేత చీరల కేంద్రం)",
      taluk: "ఇల్కల్",
      category: "కళలు & జీఐ చేనేత",
      description: "300 సంవత్సరాల ఘన చరిత్ర కలిగిన భౌగోళిక గుర్తింపు (GI) పొందిన ఇల్కల్ చీరల కేంద్రం. ప్రత్యేకమైన 'టోపే తేణి' ఎరుపు పల్లుతో సంప్రదాయ మగ్గాలపై నేయబడుతుంది.",
      historical_significance: "తరతరాలుగా సంక్రమించిన చేనేత కళా సంప్రదాయం.",
      architecture: "చేనేత మగ్గాల ప్రత్యక్ష ప్రదర్శనలు మరియు శ్రీ విజయ మహాంతేష్ మఠం.",
      transport: "NH-50 పై ఉంది. బాగల్‌కోట్ నుండి 60 కి.మీ."
    },
    mr: {
      name: "इलकल (जीआय मानांकित हातमाग साडी केंद्र)",
      taluk: "इलकल",
      category: "कला व जीआय हातमाग",
      description: "३०० वर्षांची परंपरा असलेले प्रसिद्ध जीआय मानांकित इलकल साडीचे केंद्र. वैशिष्ट्यपूर्ण 'टोपे तेणी' लाल पदरासाठी ओळखले जाते.",
      historical_significance: "पेशवेकालीन ऐतिहासिक पाठबळ लाभलेली समृद्ध विणकर संस्कृती.",
      architecture: "पारंपारिक हातमाग कार्यशाळा आणि श्री विजय महंतेश मठ.",
      transport: "राष्ट्रीय महामार्ग ५० वर स्थित. बागलकोटपासून ६० किमी."
    },
    ml: {
      name: "ഇൽക്കൽ (ജിഐ കൈത്തറി സാരി കേന്ദ്രം)",
      taluk: "ഇൽക്കൽ",
      category: "കല & കൈത്തറി",
      description: "300 വർഷത്തിലേറെ പാരമ്പര്യമുള്ള പ്രശസ്തമായ ജിഐ ടാഗുള്ള ഇൽക്കൽ സാരികളുടെ നിർമ്മാണ കേന്ദ്രം. പരമ്പരാഗത തറികളിൽ നെയ്യുന്ന സവിശേഷ വസ്ത്രങ്ങൾ.",
      historical_significance: "തലമുറകളായി കൈമാറിവന്ന നെയ്ത്ത് പാരമ്പര്യം.",
      architecture: "തത്സമയ നെയ്ത്ത് ശാലകളും ശ്രീ വിജയ മഹാന്തേഷ് മഠവും.",
      transport: "ബാഗൽകോട്ടിൽ നിന്ന് 60 കി.മീ."
    }
  },

  dest_guledagudda: {
    en: {
      name: "Guledagudda (Khana Weaving & Kasuti Craft)",
      taluk: "Guledagudda",
      category: "Art & GI Handlooms",
      description: "India's only production center for the GI-tagged handloom 'Guledgudd Khana' (traditional dobby-woven blouse fabric) and center for ancient geometric Kasuti embroidery.",
      historical_significance: "Flourished during the Chalukyan and Vijayanagara periods as a dedicated fabric production town for royalty and temples.",
      architecture: "Handloom weaving clusters, Kasuti embroidery artisan guilds, and picturesque hill viewpoints.",
      transport: "22 km from Badami, 30 km from Bagalkote. Frequent mini-buses and private vehicles."
    },
    kn: {
      name: "ಗುಳೇದಗುಡ್ಡ (ಖಣ ನೇಯ್ಗೆ ಮತ್ತು ಕಸೂತಿ ಕಲೆ)",
      taluk: "ಗುಳೇದಗುಡ್ಡ",
      category: "ಕಲೆ ಮತ್ತು ಜಿಐ ಕೈಮಗ್ಗ",
      description: "ಭಾರತದ ಏಕೈಕ ಜಿಐ ಮಾನ್ಯತೆಯ ಕೈಮಗ್ಗ 'ಗುಳೇದಗುಡ್ಡ ಖಣ' (ರವಿಕೆ ಬಟ್ಟೆ) ಮತ್ತು ಪ್ರಾಚೀನ ಜ್ಯಾಮಿತೀಯ ಕಸೂತಿ ಕಲೆಯ ಹೆಮ್ಮೆಯ ತವರು.",
      historical_significance: "ಚಾಲುಕ್ಯ ಮತ್ತು ವಿಜಯನಗರ ಕಾಲದಿಂದಲೂ ರಾಜಮನೆತನ ಹಾಗೂ ದೇವಾಲಯಗಳಿಗೆ ವಿಶೇಷ ಬಟ್ಟೆ ಪೂರೈಸುತ್ತಿದ್ದ ಐತಿಹಾಸಿಕ ಪಟ್ಟಣ.",
      architecture: "ಸಾಂಪ್ರದಾಯಿಕ ಖಣ ನೇಕಾರಿಕೆ ಸಂಘಗಳು, ಕಸೂತಿ ಕರಕುಶಲ ಕೇಂದ್ರಗಳು ಮತ್ತು ಸುಂದರ ಬೆಟ್ಟದ ತಾಣಗಳು.",
      transport: "ಬಾದಾಮಿಯಿಂದ ೨೨ ಕಿಮೀ, ಬಾಗಲಕೋಟೆಯಿಂದ ೩೦ ಕಿಮೀ. ಬಸ್ಸುಗಳು ನಿರಂತರವಾಗಿ ಲಭ್ಯವಿವೆ."
    },
    hi: {
      name: "गुलेदगुड्डा (खण बुनाई एवं कसूती शिल्प)",
      taluk: "गुलेदगुड्डा",
      category: "कला एवं जीआई हथकरघा",
      description: "भारत में जीआई टैग प्राप्त हथकरघा 'गुलेदगुद्द खण' (पारंपरिक चोली वस्त्र) का एकमात्र उत्पादक केंद्र तथा प्राचीन ज्यामितीय कसूती कढ़ाई की ऐतिहासिक धरोहर।",
      historical_significance: "चालुक्य और विजयनगर काल से शाही परिवारों और मंदिरों के लिए वस्त्र उत्पादन का केंद्र।",
      architecture: "पारंपरिक हथकरघा बुनकर इकाइयां और कसूती कढ़ाई कारीगर क्लस्टर।",
      transport: "बादामी से 22 किमी, बागलकोट से 30 किमी दूरी पर स्थित।"
    },
    ta: {
      name: "குலேதகுடா (கணா நெசவு & கசூதி பூத்தையல்)",
      taluk: "குலேதகுடா",
      category: "கலை & கைத்தறி நெசவு",
      description: "இந்தியாவின் ஒரே புவிசார் குறியீடு பெற்ற கைத்தறி 'கணா' ரவிக்கை துணி உற்பத்தி மையம் மற்றும் பண்டைய கசூதி பூத்தையல் கலை தளம்.",
      historical_significance: "சாளுக்கியர் மற்றும் விஜயநகர காலத்தில் அரச குடும்பங்களுக்கான ஆடை தயாரிப்பு நகரம்.",
      architecture: "கைத்தறி நெசவு பட்டறைகள் மற்றும் கசூதி கைவினைஞர்கள் மையம்.",
      transport: "பாதாமியிலிருந்து 22 கி.மீ தொலைவில் உள்ளது."
    },
    te: {
      name: "గులేదగుడ్డ (ఖణా నేత & కసూతి కళ)",
      taluk: "గులేదగుడ్డ",
      category: "కళలు & జీఐ చేనేత",
      description: "భారతదేశంలో ఏకైక జీఐ గుర్తింపు పొందిన 'గులేదగుడ్డ ఖణా' బ్లౌజ్ వస్త్రాల తయారీ కేంద్రం మరియు ప్రాచీన కసూతి ఎంబ్రాయిడరీ నిలయం.",
      historical_significance: "చాళుక్య మరియు విజయనగర రాజుల కాలం నుండి వస్త్ర తయారీకి ప్రసిద్ధి.",
      architecture: "చేనేత క్లస్టర్లు మరియు కసూతి కళాకారుల నిలయాలు.",
      transport: "బాదామి నుండి 22 కి.మీ దూరం."
    },
    mr: {
      name: "गुळेदगुड्ड (खण विणकाम व कसूती कला)",
      taluk: "गुळेदगुड्ड",
      category: "कला व जीआय हातमाग",
      description: "भारतातील एकमेव जीआय मानांकित हातमाग 'गुळेदगुड्ड खण' आणि प्राचीन भौमितिक कसूती भरतकामाचे प्रमुख केंद्र.",
      historical_significance: "चालुक्य आणि विजयनगर काळात राजघराण्यांसाठी वस्त्र निर्मितीचे प्रसिद्ध ठिकाण.",
      architecture: "पारंपारिक हातमाग केंद्रे आणि कसूती कारागीर गृह.",
      transport: "बादामीपासून २२ किमी अंतरावर."
    },
    ml: {
      name: "ഗുലേദഗുഡ്ഡ (ഖാന തുണിത്തരങ്ങൾ & കസൂതി)",
      taluk: "ഗുലേദഗുഡ്ഡ",
      category: "കല & കൈത്തറി",
      description: "ഇന്ത്യയിലെ ഏക ജിഐ ടാഗുള്ള പരമ്പരാഗത 'ഖാന' ബ്ലൗസ് തുണികളുടെ നിർമ്മാണ കേന്ദ്രവും കസൂതി എംബ്രോയിഡറി കേന്ദ്രവും.",
      historical_significance: "ചാലൂക്യ-വിജയനഗര കാലഘട്ടം മുതലുള്ള പ്രശസ്ത വസ്ത്രനിർമ്മാണ കേന്ദ്രം.",
      architecture: "കൈത്തറി നെയ്ത്തുശാലകളും കരകൗശല സംഘങ്ങളും.",
      transport: "ബദാമിയിൽ നിന്ന് 22 കി.മീ."
    }
  },

  dest_mudhol: {
    en: {
      name: "Mudhol (Canine Heritage & Royal Fort)",
      taluk: "Mudhol",
      category: "Indigenous Heritage & Forts",
      description: "Former princely state celebrated as the ancestral home of the royal indigenous Mudhol Hound canine breed, ancient Ghorpade fort ruins, and birthplace of 10th-century Adikavi Ranna.",
      historical_significance: "Capital of Ghorpade Maratha rulers and home of Kannada literary titan Adikavi Ranna (author of Sahasa Bhima Vijaya).",
      architecture: "Canine Research & Information Centre (CRIC), historic palace ruins, and scenic Ghataprabha river check dam.",
      transport: "55 km west of Bagalkote city, 40 km from Jamkhandi. Well-connected on State Highway 53."
    },
    kn: {
      name: "ಮುಧೋಳ (ಶ್ವಾನ ತಳಿ ಪರಂಪರೆ ಮತ್ತು ಅರಮನೆ)",
      taluk: "ಮುಧೋಳ",
      category: "ಸ್ಥಳೀಯ ಪರಂಪರೆ ಮತ್ತು ಕೋಟೆಗಳು",
      description: "ವಿಶ್ವವಿಖ್ಯಾತ ರಾಜಮನೆತನದ ಮುಧೋಳ ಹೌಂಡ್ ಶ್ವಾನ ತಳಿಯ ತವರು, ಐತಿಹಾಸಿಕ ಘೋರ್ಪಡೆ ಅರಮನೆ-ಕೋಟೆ ಮತ್ತು ೧೦ನೇ ಶತಮಾನದ ಮಹಾಕವಿ ರನ್ನನ ಪವಿತ್ರ ಜನ್ಮಭೂಮಿ.",
      historical_significance: "ಘೋರ್ಪಡೆ ಮರಾಠ ರಾಜಮನೆತನದ ರಾಜಧಾನಿ ಹಾಗೂ 'ಸಾಹಸಭೀಮ ವಿಜಯ' ಖ್ಯಾತಿಯ ಆದಿಕವಿ ರನ್ನನ ಕರ್ಮಭೂಮಿ.",
      architecture: "ಮುಧೋಳ ಹೌಂಡ್ ಶ್ವಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ (CRIC), ಕೋಟೆ ಅವಶೇಷಗಳು ಮತ್ತು ಘಟಪ್ರಭಾ ನದಿ ಚೆಕ್ ಡ್ಯಾಂ.",
      transport: "ಬಾಗಲಕೋಟೆಯಿಂದ ಪಶ್ಚಿಮಕ್ಕೆ ೫೫ ಕಿಮೀ, ಜಮಖಂಡಿಯಿಂದ ೪೦ ಕಿಮೀ. ರಾಜ್ಯ ಹೆದ್ದಾರಿ ೫೩ ರಲ್ಲಿದೆ."
    },
    hi: {
      name: "मुधोल (श्वान नस्ल विरासत एवं शाही किला)",
      taluk: "मुधोल",
      category: "देशी विरासत एवं किले",
      description: "शाही देशी मुधोल हाउंड श्वान नस्ल का पैतृक घर, घोरपड़े शासकों का ऐतिहासिक किला तथा 10वीं शताब्दी के महाकवि रन्ना की जन्मभूमि।",
      historical_significance: "घोरपड़े मराठा राजाओं की राजधानी तथा 'साहस भीम विजय' के रचयिता आदिकवि रन्ना की भूमि।",
      architecture: "मुधोल हाउंड अनुसंधान केंद्र (CRIC), ऐतिहासिक महल के अवशेष और घटप्रभा नदी चेक डैम।",
      transport: "बागलकोट से 55 किमी पश्चिम, जमखंडी से 40 किमी दूरी पर स्थित।"
    },
    ta: {
      name: "முதோல் (முதோல் ஹவுண்ட் நாய் இனம் & கோட்டை)",
      taluk: "முதோல்",
      category: "உள்ளூர் பாரம்பரியம் & கோட்டைகள்",
      description: "புகழ்பெற்ற முதோல் ஹவுண்ட் வேட்டை நாய் இனத்தின் தாயகம், வரலாற்று கோர்படே அரச கோட்டை மற்றும் 10ஆம் நூற்றாண்டு கன்னட கவிஞர் ரன்னாவின் பிறப்பிடம்.",
      historical_significance: "மராட்டிய கோர்படே அரசர்களின் தலைநகரம்.",
      architecture: "முதோல் நாய் ஆராய்ச்சி மையம் (CRIC) மற்றும் வரலாற்று அரண்மனை இடிபாடுகள்.",
      transport: "பாகல்கோட்டையிலிருந்து 55 கி.மீ தொலைவில் உள்ளது."
    },
    te: {
      name: "ముధోల్ (ముధోల్ హౌండ్ జాతి & రాయల్ కోట)",
      taluk: "ముధోల్",
      category: "స్థానిక వారసత్వం & కోటలు",
      description: "ప్రసిద్ధ ముధోల్ హౌండ్ శునక జాతి జన్మస్థలం, చారిత్రక ఘోర్పడే రాజ కోట మరియు 10వ శతాబ్దపు మహాకవి రన్న జన్మభూమి.",
      historical_significance: "ఘోర్పడే మరాఠా పాలకుల రాజధాని.",
      architecture: "ముధోల్ హౌండ్ పరిశోధనా కేంద్రం (CRIC) మరియు ఘటప్రభ నది వ్యూ పాయింట్.",
      transport: "బాగల్‌కోట్ నుండి 55 కి.మీ దూరం."
    },
    mr: {
      name: "मुधोळ (मुधोळ हाउंड श्वान जात व राजवाडा)",
      taluk: "मुधोळ",
      category: "देशी वारसा व किल्ले",
      description: "शाही मुधोळ हाउंड या शिकारी श्वान जातीचे मूळ स्थान, घोरपडे संस्थानिकांचा ऐतिहासिक वाडा आणि महाकवी रन्ना यांची जन्मभूमी.",
      historical_significance: "घोरपडे मराठा संस्थानाची राजधानी.",
      architecture: "मुधोळ हाउंड श्वान संशोधन केंद्र (CRIC) आणि घटप्रभा नदी चेक डॅम.",
      transport: "बागलकोटपासून ५५ किमी अंतरावर."
    },
    ml: {
      name: "മുധോൾ (മുധോൾ ഹൗണ്ട് നായ്ക്കളും കോട്ടയും)",
      taluk: "മുധോൾ",
      category: "തദ്ദേശീയ പൈതൃകം & കോട്ടകൾ",
      description: "റോയൽ മുധോൾ ഹൗണ്ട് ഇനം നായ്ക്കളുടെ ജന്മദേശം, ചരിത്രപ്രസിദ്ധമായ കോട്ട അവശിഷ്ടങ്ങൾ, മഹാകവി രന്നയുടെ ജന്മസ്ഥലം.",
      historical_significance: "ഘോർപഡെ മറാഠ ഭരണാധികാരികളുടെ തലസ്ഥാനം.",
      architecture: "മുധോൾ ഹൗണ്ട് ഗവേഷണ കേന്ദ്രം (CRIC) എന്നിവ കാണാം.",
      transport: "ബാഗൽകോട്ടിൽ നിന്ന് 55 കി.മീ."
    }
  },

  dest_jamkhandi: {
    en: {
      name: "Jamkhandi (Royal Maratha Palace & Temples)",
      taluk: "Jamkhandi",
      category: "Heritage & Royal Palaces",
      description: "Former princely state ruled by the Patwardhan Maratha dynasty, famous for the grand Ram Prasad Royal Palace, Ramateerth hill temple complex, and Pampa Sarovara reservoir.",
      historical_significance: "Princely capital established by Raja Gopalrao Patwardhan in 1811; hosted early national freedom movement conventions.",
      architecture: "Ram Prasad Royal Palace in European-Maratha style, Ramtirth hill temple overlooking verdant sugarcane valleys.",
      transport: "75 km northwest of Bagalkote, 35 km from Vijayapura. Well connected by KSRTC buses."
    },
    kn: {
      name: "ಜಮಖಂಡಿ (ರಾಜಮನೆತನದ ಅರಮನೆ ಮತ್ತು ದೇವಾಲಯಗಳು)",
      taluk: "ಜಮಖಂಡಿ",
      category: "ಪರಂಪರೆ ಮತ್ತು ರಾಜಮನೆತನದ ಅರಮನೆ",
      description: "ಪಟವರ್ಧನ ಮರಾಠ ರಾಜವಂಶ ಆಳಿದ ಐತಿಹಾಸಿಕ ಸಂಸ್ಥಾನ. ಭವ್ಯ ರಾಮಪ್ರಸಾದ್ ರಾಜಮನೆತನದ ಅರಮನೆ, ರಮಣೀಯ ರಾಮತೀರ್ಥ ಬೆಟ್ಟದ ದೇವಾಲಯ ಮತ್ತು ಪಂಪಾ ಸರೋವರಕ್ಕೆ ಹೆಸರುವಾಸಿ.",
      historical_significance: "೧೮೧೧ ರಲ್ಲಿ ರಾಜಾ ಗೋಪಾಲರಾವ್ ಪಟವರ್ಧನ್ ಸ್ಥಾಪಿಸಿದ ಸಂಸ್ಥಾನ; ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟದ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿತ್ತು.",
      architecture: "ಯುರೋಪಿಯನ್-ಮರಾಠಾ ಸಮ್ಮಿಶ್ರ ಶೈಲಿಯ ರಾಮಪ್ರಸಾದ್ ಅರಮನೆ ಮತ್ತು ಕಬ್ಬಿನ ಗದ್ದೆಗಳ ಕಣಿವೆಯನ್ನು ವೀಕ್ಷಿಸುವ ರಾಮತೀರ್ಥ ದೇಗುಲ.",
      transport: "ಬಾಗಲಕೋಟೆಯಿಂದ ವಾಯುವ್ಯಕ್ಕೆ ೭೫ ಕಿಮೀ. ವಿಜಯಪುರ ಮತ್ತು ಬೆಳಗಾವಿಗೆ ಉತ್ತಮ ರಸ್ತೆ ಸಂಪರ್ಕವಿದೆ."
    },
    hi: {
      name: "जमखंडी (शाही मराठा महल एवं मंदिर)",
      taluk: "जमखंडी",
      category: "धरोहर एवं शाही महल",
      description: "पटवर्धन मराठा राजवंश द्वारा शासित ऐतिहासिक रियासत, जो अपने भव्य राम प्रसाद राजमहल, रामतीर्थ पहाड़ी मंदिर परिसर तथा पंपा सरोवर के लिए प्रसिद्ध है।",
      historical_significance: "1811 में राजा गोपालराव पटवर्धन द्वारा स्थापित रियासत की राजधानी।",
      architecture: "यूरोपीय-मराठा शैली में निर्मित राम प्रसाद महल तथा हरे-भरे गन्ने के खेतों को निहारता रामतीर्थ मंदिर।",
      transport: "बागलकोट से 75 किमी उत्तर-पश्चिम। नियमित केएसआरटीसी बसें उपलब्ध।"
    },
    ta: {
      name: "ஜம்கண்டி (பட்வர்தன் அரச அரண்மனை & கோவில்கள்)",
      taluk: "ஜம்கண்டி",
      category: "பாரம்பரியம் & அரச அரண்மனைகள்",
      description: "பட்வர்தன் மராட்டிய மன்னர்கள் ஆண்ட சமஸ்தானம். கம்பீரமான ராம் பிரசாத் அரண்மனை, ராமதீர்த்த மலைக் கோவில் மற்றும் பம்பா சரோவரத்திற்கு பிரபலமானது.",
      historical_significance: "1811 இல் நிறுவப்பட்ட வரலாற்று சிறப்புமிக்க சுதேச சமஸ்தானம்.",
      architecture: "ஐரோப்பிய-மராட்டிய பாணி அரண்மனை மற்றும் அழகிய இயற்கை எழில் கொஞ்சும் ராமதீர்த்தம்.",
      transport: "பாகல்கோட்டையிலிருந்து 75 கி.மீ தொலைவில் உள்ளது."
    },
    te: {
      name: "జంఖండి (రాజభవనం & పురాతన ఆలయాలు)",
      taluk: "జంఖండి",
      category: "వారసత్వం & రాజభవనాలు",
      description: "పాట్వర్ధన్ మరాఠా వంశం పాలించిన చారిత్రక సంస్థానం. అద్భుతమైన రామ్ ప్రసాద్ ప్యాలెస్, రామతీర్థ కొండ ఆలయం మరియు పంపా సరోవరానికి ప్రసిద్ధి.",
      historical_significance: "1811 లో స్థాపించబడిన సంస్థాన రాజధాని.",
      architecture: "యూరోపియన్-మరాఠా శైలిలోని రామ్ ప్రసాద్ ప్యాలెస్ మరియు రామతీర్థ దేవాలయం.",
      transport: "బాగల్‌కోట్ నుండి 75 కి.మీ దూరం."
    },
    mr: {
      name: "जमखंडी (पटवर्धन संस्थानचा राजवाडा व मंदिरे)",
      taluk: "जमखंडी",
      category: "वारसा व राजवाडे",
      description: "पटवर्धन मराठा घराण्याने राज्य केलेले ऐतिहासिक संस्थान. भव्य राम प्रसाद राजवाडा, रामतीर्थ टेकडी मंदिर आणि पंपा सरोवरासाठी प्रसिद्ध.",
      historical_significance: "१८११ मध्ये राजा गोपाळराव पटवर्धन यांनी स्थापन केलेल्या संस्थानाची राजधानी.",
      architecture: "युरोपियन-मराठा स्थापत्य शैलीतील राम प्रसाद राजवाडा आणि रामतीर्थ मंदिर.",
      transport: "बागलकोटपासून ७५ किमी अंतरावर."
    },
    ml: {
      name: "ജംഖണ്ഡി (പട്വർദ്ധൻ രാജകൊട്ടാരം & ക്ഷേത്രങ്ങൾ)",
      taluk: "ജംഖണ്ഡി",
      category: "പൈതൃകം & രാജകൊട്ടാരങ്ങൾ",
      description: "പട്വർദ്ധൻ മറാഠാ രാജവംശം ഭരിച്ചിരുന്ന പഴയ നാട്ടുരാജ്യം. രാം പ്രസാദ് കൊട്ടാരം, രാമതീർത്ഥം മലമുകളിലെ ക്ഷേത്രം എന്നിവ പ്രശസ്തമാണ്.",
      historical_significance: "1811-ൽ സ്ഥാപിതമായ ചരിത്രപ്രസിദ്ധമായ രാജവംശ ആസ്ഥാനം.",
      architecture: "യൂറോപ്യൻ-മറാഠ ശൈലിയിലുള്ള കൊട്ടാരവും പ്രകൃതിദത്ത കുന്നിൻമുകളിലെ ക്ഷേത്രവും.",
      transport: "ബാഗൽകോട്ടിൽ നിന്ന് 75 കി.മീ."
    }
  },

  dest_bilagi: {
    en: {
      name: "Bilagi (Historic Stepwells & Agro-Valley)",
      taluk: "Bilagi",
      category: "Nature & Stepwells",
      description: "Historic town renowned for the 16th-century Are-Kallina Bavi / Kandagal Baoli stepwell, ancient Siddheshwara Temple, and Ghataprabha river valley agro-tourism homestays.",
      historical_significance: "Ruled by Bilagi Nayakas as feudatories of Vijayanagara and Adil Shahis; famed for ancient water engineering.",
      architecture: "Are-Kallina Bavi stepwell with subterranean stone pavilions, and Chalukyan-style Siddheshwara Devalaya.",
      transport: "30 km north of Bagalkote city on the Almatti highway corridor."
    },
    kn: {
      name: "ಬೀಳಗಿ (ಐತಿಹಾಸಿಕ ಮೆಟ್ಟಿಲು ಬಾವಿಗಳು ಮತ್ತು ಕಣಿವೆ)",
      taluk: "ಬೀಳಗಿ",
      category: "ಪ್ರಕೃತಿ ಮತ್ತು ಮೆಟ್ಟಿಲು ಬಾವಿಗಳು",
      description: "೧೬ನೇ ಶತಮಾನದ ಐತಿಹಾಸಿಕ ಅರೆ-ಕಲ್ಲಿನ ಬಾವಿ (ಕಂದಗಲ್ ಬಾವೊಲಿ), ಪ್ರಾಚೀನ ಸಿದ್ದೇಶ್ವರ ದೇವಾಲಯ ಮತ್ತು ಘಟಪ್ರಭಾ ನದಿ ಕಣಿವೆಯ ಆಗ್ರೋ-ರೆಸಾರ್ಟ್‌ಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾದ ತಾಣ.",
      historical_significance: "ವಿಜಯನಗರ ಹಾಗೂ ಆದಿಲ್‌ಶಾಹಿಗಳ ಕಾಲದ ಬೀಳಗಿ ನಾಯಕರ ಆಡಳಿತ ಕೇಂದ್ರ; ಪ್ರಾಚೀನ ಜಲ ಸಂರಕ್ಷಣಾ ವಾಸ್ತುಶಿಲ್ಪದ ತಾಣ.",
      architecture: "ಕಲ್ಲಿನ ಮಂಟಪಗಳಿರುವ ಆಕರ್ಷಕ ಅರೆಕಲ್ಲಿನ ಮೆಟ್ಟಿಲು ಬಾವಿ ಮತ್ತು ಸಿದ್ದೇಶ್ವರ ದೇವಾಲಯ.",
      transport: "ಬಾಗಲಕೋಟೆಯಿಂದ ಉತ್ತರಕ್ಕೆ ೩೦ ಕಿಮೀ ದೂರದಲ್ಲಿದೆ. ಆಲಮಟ್ಟಿ ಹೆದ್ದಾರಿಯಲ್ಲಿ ಸಾರಿಗೆ ಲಭ್ಯ."
    },
    hi: {
      name: "बीलगी (ऐतिहासिक बावड़ी एवं कृषि घाटी)",
      taluk: "बीलगी",
      category: "प्रकृति एवं ऐतिहासिक बावड़ी",
      description: "16वीं शताब्दी की ऐतिहासिक 'अरे-कल्लिना बावि' (कंदगल बावड़ी), प्राचीन सिद्धेश्वर मंदिर तथा घटप्रभा नदी घाटी के कृषि होमस्टे के लिए प्रसिद्ध।",
      historical_significance: "विजयनगर और आदिलशाही काल के बीलगी नायकों का केंद्र; प्राचीन जल संरक्षण वास्तुकला।",
      architecture: "भूमिगत पत्थर के मंडपों वाली ऐतिहासिक सीढ़ीदार बावड़ी और सिद्धेश्वर देवालय।",
      transport: "बागलकोट से उत्तर दिशा में 30 किमी, आलमट्टी मार्ग पर।"
    },
    ta: {
      name: "பீலகி (வரலாற்று படிக்கிணறு மற்றும் இயற்கை)",
      taluk: "பீலகி",
      category: "இயற்கை & படிக்கிணறுகள்",
      description: "16ஆம் நூற்றாண்டு வரலாற்று சிறப்புமிக்க படிக்கிணறு (கந்தகல் பாவோலி), பண்டைய சித்தேஸ்வரர் கோவில் மற்றும் நதி பள்ளத்தாக்கு இயற்கை சூழல்.",
      historical_significance: "பண்டைய நீர்வள மேலாண்மை பொறியியல் கலைக்கு சிறந்த சான்று.",
      architecture: "அழகிய கல் மண்டபங்கள் கொண்ட படிக்கிணறு மற்றும் சித்தேஸ்வரர் கோவில்.",
      transport: "பாகல்கோட்டையிலிருந்து 30 கி.மீ வடக்கே அமைந்துள்ளது."
    },
    te: {
      name: "బీళగి (చారిత్రక కోనేరు & వ్యవసాయ లోయ)",
      taluk: "బీళగి",
      category: "ప్రకృతి & చారిత్రక కోనేరు",
      description: "16వ శతాబ్దపు ప్రసిద్ధ 'అరె-కల్లిన బావి' (మెట్ల బావి/కోనేరు), పురాతన సిద్ధేశ్వరాలయం మరియు ఘటప్రభ నది అందాలు.",
      historical_significance: "విజయనగర కాలం నాటి పురాతన నీటి సంరక్షణ వాస్తుశిల్పం.",
      architecture: "రాతి మంటపాలతో కూడిన చారిత్రక మెట్ల బావి మరియు సిద్ధేశ్వరాలయం.",
      transport: "బాగల్‌కోట్ నుండి 30 కి.మీ దూరంలో ఉంది."
    },
    mr: {
      name: "बिलगी (ऐतिहासिक पायऱ्यांची विहीर व निसर्ग)",
      taluk: "बिलगी",
      category: "निसर्ग व ऐतिहासिक बारव",
      description: "१६व्या शतकातील ऐतिहासिक कंदगल पायऱ्यांची विहीर (बारव), प्राचीन सिद्धेश्वर मंदिर आणि घटप्रभा नदी खोऱ्यातील निसर्ग सौंदर्य.",
      historical_significance: "विजयनगर कालीन प्राचीन जलसंधारण स्थापत्य कलेचा नमुना.",
      architecture: "दगडी मंडप असलेली सुंदर बारव आणि सिद्धेश्वर मंदिर.",
      transport: "बागलकोटपासून ३० किमी अंतरावर."
    },
    ml: {
      name: "ബിലഗി (ചരിത്രപ്രസിദ്ധമായ പടവുകിണറും പ്രകൃതിയും)",
      taluk: "ബിലഗി",
      category: "പ്രകൃതി & പടവുകിണറുകൾ",
      description: "പതിനാറാം നൂറ്റാണ്ടിലെ കല്ലിൽ തീർത്ത പടവുകിണറും (കന്ദഗൽ ബാവോലി) പുരാതന സിദ്ധേശ്വര ക്ഷേത്രവും പ്രകൃതിഭംഗിയും.",
      historical_significance: "പുരാതന ജലസംരക്ഷണ വാസ്തുവിദ്യയ്ക്ക് മികച്ച ഉദാഹരണം.",
      architecture: "ശിലാ മണ്ഡപങ്ങളുള്ള ഭൂഗർഭ പടവുകിണർ.",
      transport: "ബാഗൽകോട്ടിൽ നിന്ന് 30 കി.മീ."
    }
  },

  dest_muchakhandi_dam: {
    en: {
      name: "Muchakhandi Dam (Malaprabha Reservoir)",
      taluk: "Bagalkote",
      category: "Nature & Lake Views",
      description: "Scenic irrigation reservoir and stone masonry dam built across the Malaprabha catchment, celebrated for panoramic sunset viewpoints, birdwatching, and lakeside tranquility.",
      historical_significance: "Constructed during the British and princely era to irrigate Bagalkote farmlands and manage regional hydrology.",
      architecture: "Traditional stone masonry spillway and reservoir promenade overlooking hills.",
      transport: "8 km south of Bagalkote city center. Auto-rickshaws and local buses available."
    },
    kn: {
      name: "ಮುಚಖಂಡಿ ಜಲಾಶಯ (ಮಲಪ್ರಭಾ ಜಲಾನಯನ)",
      taluk: "ಬಾಗಲಕೋಟೆ",
      category: "ಪ್ರಕೃತಿ ಮತ್ತು ಸರೋವರ ನೋಟ",
      description: "ಮಲಪ್ರಭಾ ಜಲಾನಯನ ಪ್ರದೇಶದಲ್ಲಿ ನಿರ್ಮಿಸಲಾದ ರಮಣೀಯ ಕಲ್ಲಿನ ಅಣೆಕಟ್ಟು. ಸುಂದರ ಸೂರ್ಯಾಸ್ತ, ಪಕ್ಷಿವೀಕ್ಷಣೆ ಮತ್ತು ಶಾಂತ ಪರಿಸರಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾದ ಜನಪ್ರಿಯ ತಾಣ.",
      historical_significance: "ಬಾಗಲಕೋಟೆ ಕೃಷಿ ಭೂಮಿಗೆ ನೀರಾವರಿ ಒದಗಿಸಲು ಐತಿಹಾಸಿಕವಾಗಿ ನಿರ್ಮಿಸಲಾದ ಜಲಾಶಯ.",
      architecture: "ಕಲ್ಲಿನ ಗೋಡೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಅಣೆಕಟ್ಟು ಮತ್ತು ಬೆಟ್ಟಗಳನ್ನು ವೀಕ್ಷಿಸುವ ವಾಯುವಿಹಾರ ಮಾರ್ಗ.",
      transport: "ಬಾಗಲಕೋಟೆ ನಗರದಿಂದ ಕೇವಲ ೮ ಕಿಮೀ ದಕ್ಷಿಣದಲ್ಲಿದೆ. ಆಟೋ ಮತ್ತು ಸ್ಥಳೀಯ ವಾಹನಗಳು ಲಭ್ಯ."
    },
    hi: {
      name: "मुचखंडी जलाशय (मलप्रभा बेसिन)",
      taluk: "बागलकोट",
      category: "प्रकृति एवं झील दृश्य",
      description: "मलप्रभा जलक्षेत्र में निर्मित एक सुरम्य पत्थर का चिनाई वाला बांध, जो मनोरम सूर्यास्त दृश्यों, पक्षी-दर्शन और शांत वातावरण के लिए विख्यात है।",
      historical_significance: "बागलकोट के कृषि क्षेत्रों की सिंचाई हेतु ऐतिहासिक रूप से निर्मित जल परियोजना।",
      architecture: "पारंपरिक पत्थर का स्पिलवे और पहाड़ियों की पृष्ठभूमि वाला सुंदर जलाशय तट।",
      transport: "बागलकोट नगर केंद्र से मात्र 8 किमी दक्षिण में स्थित।"
    },
    ta: {
      name: "முசகண்டி நீர்த்தேக்கம்",
      taluk: "பாகல்கோட்டை",
      category: "இயற்கை & ஏரி காட்சிகள்",
      description: "மலபிரபா வடிநிலத்தில் கட்டப்பட்ட அழகிய கல் அணைக்கட்டு. மாலை நேர சூரிய அஸ்தமனம் மற்றும் அமைதியான ஏரிக்கரை சூழலுக்கு பெயர் பெற்றது.",
      historical_significance: "பாகல்கோட்டை விவசாய நிலங்களுக்கு பாசனம் வழங்க அமைக்கப்பட்ட வரலாற்று நீர்த்தேக்கம்.",
      architecture: "பாரம்பரிய கல் அணை அமைப்பு மற்றும் மலை காட்சிகளுடன் கூடிய ஏரிக்கரை.",
      transport: "பாகல்கோட்டை நகரத்திலிருந்து 8 கி.மீ தொலைவில் உள்ளது."
    },
    te: {
      name: "ముచఖండి జలాశయం",
      taluk: "బాగల్‌కోట్",
      category: "ప్రకృతి & సరస్సు దృశ్యాలు",
      description: "మలప్రభ పరివాహక ప్రాంతంలో రాతితో నిర్మించిన సుందరమైన జలాశయం. అద్భుతమైన సూర్యాస్తమయ దృశ్యాలకు, పక్షుల వీక్షణకు ప్రసిద్ధి.",
      historical_significance: "బాగల్‌కోట్ వ్యవసాయ భూములకు నీరందించే చారిత్రక రిజర్వాయర్.",
      architecture: "సాంప్రదాయ రాతి ఆనకట్ట మరియు కొండల మధ్య సుందర సరస్సు.",
      transport: "బాగల్‌కోట్ పట్టణ కేంద్రం నుండి 8 కి.మీ."
    },
    mr: {
      name: "मुचखंडी जलाशय",
      taluk: "बागलकोट",
      category: "निसर्ग व तलाव परिसर",
      description: "मलप्रभा खोऱ्यात दगडी बांधकामात बांधलेले सुंदर धरण. विहंगम सूर्यास्त, पक्षी निरीक्षण आणि शांत परिसरासाठी प्रसिद्ध.",
      historical_significance: "बागलकोट परिसरातील शेतीसाठी बांधलेला ऐतिहासिक प्रकल्प.",
      architecture: "पारंपारिक दगडी सांडवा आणि डोंगरांच्या कुशीतील जलाशय.",
      transport: "बागलकोट शहरापासून केवळ ८ किमी दक्षिणेस."
    },
    ml: {
      name: "മുചഖണ്ഡി തടാകം",
      taluk: "ബാഗൽകോട്ട്",
      category: "പ്രകൃതി & തടാകക്കാഴ്ചകൾ",
      description: "മലപ്രഭ തടത്തിൽ നിർമ്മിച്ച മനോഹരമായ കരിങ്കൽ അണക്കെട്ട്. മനോഹരമായ സൂര്യാസ്തമയ കാഴ്ചകൾക്കും പക്ഷിനിരീക്ഷണത്തിനും പേരുകേട്ട ഇടം.",
      historical_significance: "കൃഷിയിടങ്ങളിലേക്ക് ജലസേചനം നൽകുന്ന ചരിത്രപരമായ അണക്കെട്ട്.",
      architecture: "പരമ്പരാഗത ശിലാ നിർമ്മിതിയും മനോഹരമായ തടാകക്കരയും.",
      transport: "ബാഗൽകോട്ട് നഗരത്തിൽ നിന്ന് 8 കി.മീ."
    }
  },
  dest_banashankari: {
    "en": {
        "name": "Banashankari Temple (Cholachagudda)",
        "taluk": "Badami",
        "category": "Spiritual & Temple Heritage",
        "description": "Historic 7th-century shrine dedicated to Goddess Banashankari (Shakambhari), Kuladevi of the Chalukyas, situated in the Tilakaaranya forest with the sacred Haridra Tirtha pond.",
        "historical_significance": "Founded during the 7th century Chalukyan era with extensive Dravida and Vijayanagara royal additions; site of the celebrated annual Banashankari Jathra.",
        "architecture": "Blend of Chalukyan and Vijayanagara stonework featuring the magnificent Haridra Tirtha square pushkarini pool with multi-tiered stone lamps (Deepastambhas).",
        "transport": "5 km from Badami town on the Badami-Ilkal highway. City autos and frequent KSRTC buses connect the temple."
    },
    "kn": {
        "name": "ಬನಶಂಕರಿ ದೇವಾಲಯ (ಚೋಳಚಗುಡ್ಡ)",
        "taluk": "ಬಾದಾಮಿ",
        "category": "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಪಾರಂಪರಿಕ ತಾಣ",
        "description": "ಚಾಲುಕ್ಯರ ಕುಲದೇವತೆಯಾದ ಬನಶಂಕರಿ ಅಮ್ಮನವರ ೭ನೇ ಶತಮಾನದ ಪ್ರಸಿದ್ಧ ದೇವಾಲಯ. ತಿಲಕಾರಣ್ಯ ಅರಣ್ಯ ಪ್ರದೇಶದಲ್ಲಿರುವ ಈ ತಾಣದಲ್ಲಿ ಪವಿತ್ರ ಹರಿದ್ರಾ ತೀರ್ಥ ಕಲ್ಯಾಣಿ ಇದೆ.",
        "historical_significance": "೭ನೇ ಶತಮಾನದ ಆರಂಭಿಕ ಚಾಲುಕ್ಯರ ಕಾಲದಲ್ಲಿ ಸ್ಥಾಪನೆಗೊಂಡು, ನಂತರ ವಿಜಯನಗರ ಕಾಲದಲ್ಲಿ ವಿಸ್ತಾರಗೊಂಡ ದೇವಾಲಯ. ಪ್ರಸಿದ್ಧ ಬನಶಂಕರಿ ಜಾತ್ರೆಗೆ ನಾಡಿನಾದ್ಯಂತ ಭಕ್ತರು ಬರುತ್ತಾರೆ.",
        "architecture": "ದ್ರಾವಿಡ ಮತ್ತು ವಿಜಯನಗರ ಶೈಲಿಯ ಸುಂದರ ಕೆತ್ತನೆಗಳು, ವಿಶಾಲ ಹರಿದ್ರಾ ತೀರ್ಥ ಪುಷ್ಕರಣಿ ಮತ್ತು ಎತ್ತರದ ಕಲ್ಲಿನ ದೀಪಸ್ತಂಭಗಳು.",
        "transport": "ಬಾದಾಮಿ ನಗರದಿಂದ ಕೇವಲ ೫ ಕಿಮೀ ದೂರದಲ್ಲಿದೆ. ನಿರಂತರ ಆಟೋ ಮತ್ತು ಬಸ್ ಸೌಲಭ್ಯವಿದೆ."
    },
    "hi": {
        "name": "बनशंकरी देवी मंदिर (चोलचगुड्डा)",
        "taluk": "बादामी",
        "category": "आध्यात्मिक एवं ऐतिहासिक धरोहर",
        "description": "चालुक्य राजवंश की कुलदेवी मां बनशंकरी (शाकंभरी) का 7वीं शताब्दी का प्रसिद्ध मंदिर। तिलकारण्य वन में स्थित पवित्र हरिद्रा तीर्थ पुष्करिणी से सुशोभित।",
        "historical_significance": "चालुक्य काल में स्थापित तथा विजयनगर काल में विस्तृत हुआ पवित्र शक्तिपीठ; वार्षिक बनशंकरी जात्रा हेतु प्रसिद्ध।",
        "architecture": "द्रविड़ और विजयनगर स्थापत्य शैली का संगम, भव्य हरिद्रा तीर्थ सरोवर और विशाल पाषाण दीपस्तंभ।",
        "transport": "बादामी से मात्र 5 किमी की दूरी पर स्थित। निरंतर बसें और ऑटो उपलब्ध हैं।"
    },
    "ta": {
        "name": "பனசங்கரி கோவில் (சோளச்சகுட்டா)",
        "taluk": "பாதாமி",
        "category": "ஆன்மீகம் & பாரம்பரியம்",
        "description": "சாளுக்கிய மன்னர்களின் குலதெய்வமான பனசங்கரி அம்மனின் 7ஆம் நூற்றாண்டு பழமையான கோவில். திலகாரண்ய காட்டில் அமைந்துள்ள புனித ஹரித்ரா தீர்த்த குளம் கொண்டது.",
        "historical_significance": "சாளுக்கியர்களால் நிறுவப்பட்டு விஜயநகர பேரரசால் விரிவாக்கப்பட்ட வரலாற்று சிறப்புமிக்க சக்தி தலம்.",
        "architecture": "சாளுக்கிய-விஜயநகர திராவிட பாணி சிற்பங்கள் மற்றும் பிரம்மாண்டமான ஹரித்ரா தீர்த்த கல் தெப்பக்குளம்.",
        "transport": "பாதாமி நகரத்திலிருந்து 5 கி.மீ தொலைவில் அமைந்துள்ளது. பேருந்துகள் மற்றும் ஆட்டோக்கள் உள்ளன."
    },
    "te": {
        "name": "బనశంకరి ఆలయం (చోళచగుడ్డ)",
        "taluk": "బాదామి",
        "category": "ఆధ్యాత్మికం & వారసత్వం",
        "description": "చాళుక్యుల కులదైవమైన బనశంకరి దేవి 7వ శతాబ్దపు చారిత్రక క్షేత్రం. తిలకారణ్య అటవీ ప్రాంతంలో పవిత్ర హరిద్రా తీర్థ కోనేరుతో అలరారుతోంది.",
        "historical_significance": "చాళుక్యులు స్థాపించిన శక్తిక్షేత్రం; ప్రతి సంవత్సరం జరిగే బనశంకరి జాతరకు లక్షలాది భక్తులు తరలివస్తారు.",
        "architecture": "ద్రవిడ మరియు విజయనగర వాస్తు శైలి శిల్పకళ, విశాలమైన హరిద్రా పుష్కరిణి మరియు రాతి దీపస్తంభాలు.",
        "transport": "బాదామి నుండి 5 కి.మీ దూరం. నిరంతరం బస్సులు మరియు ఆటోలు నడుస్తాయి."
    },
    "mr": {
        "name": "बनशंकरी मंदिर (चोळचगुड्डा)",
        "taluk": "बादामी",
        "category": "धार्मिक व ऐतिहासिक वारसा",
        "description": "चालुक्यांची कुलदेवता माता बनशंकरी (शाकंभरी) यांचे ७व्या शतकातील प्रसिद्ध मंदिर. तिलकारण्य परिसरातील पवित्र हरिद्रा तीर्थ तलावासाठी प्रसिद्ध.",
        "historical_significance": "चालुक्य काळात स्थापन झालेले आणि विजयनगर सम्राटांनी विस्तारलेले जागृत शक्तिपीठ.",
        "architecture": "द्राविड व विजयनगर स्थापत्यकलेचा उत्कृष्ट संगम, विस्तीर्ण दगडी हरिद्रा तीर्थ तलाव व दीपमाळा.",
        "transport": "बादामी शहरापासून ५ किमी अंतरावर. बसेस व ऑटो रिक्षा सहज उपलब्ध."
    },
    "ml": {
        "name": "ബനശങ്കരി ക്ഷേത്രം (ചോളച്ചഗുഡ്ഡ)",
        "taluk": "ബദാമി",
        "category": "ആത്മീയത & പൈതൃകം",
        "description": "ചാലൂക്യരുടെ കുലദേവതയായ ബനശങ്കരി ദേവിയുടെ ഏഴാം നൂറ്റാണ്ടിലെ പുരാതന ക്ഷേത്രം. തിലകാരണ്യ വനത്തിലെ വിശുദ്ധ ഹരിദ്രാ തീർത്ഥ കുളത്താൽ ചുറ്റപ്പെട്ടതാണ്.",
        "historical_significance": "ഏഴാം നൂറ്റാണ്ടിൽ ചാലൂക്യർ നിർമ്മിച്ചതും വിജയനഗര രാജാക്കന്മാർ വികസിപ്പിച്ചതുമായ പുണ്യകേന്ദ്രം.",
        "architecture": "ദ്രാവിഡ-വിജയനഗര ശൈലിയിലുള്ള ശിലാക്ഷേത്രവും വിശാലമായ ചതുര കുളവും കൽവിളക്കുകളും.",
        "transport": "ബദാമി പട്ടണത്തിൽ നിന്ന് 5 കി.മീ. ബസുകളും ഓട്ടോകളും ലഭ്യമാണ്."
    }
},

  dest_almatti_dam: {
    "en": {
        "name": "Almatti Dam & Lal Bahadur Shastri Sagar",
        "taluk": "Nidagundi / Bagalkote",
        "category": "Nature & Dam Gardens",
        "description": "Major multi-purpose reservoir project on the Krishna River featuring spectacular musical dancing fountains, Mughal gardens, Rock garden, and illuminated dam vistas.",
        "historical_significance": "Cornerstone of the Upper Krishna Project completed in 2005, providing vital irrigation across northern Karnataka and named after Prime Minister Lal Bahadur Shastri.",
        "architecture": "Massive masonry and earth-fill dam with 26 radial crest gates, surrounded by beautifully landscaped Mughal-style geometric terraced gardens.",
        "transport": "65 km from Bagalkote town along NH-50. Well connected by KSRTC luxury express buses and Almatti Railway Station."
    },
    "kn": {
        "name": "ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟು & ಲಾಲ್ ಬಹದ್ದೂರ್ ಶಾಸ್ತ್ರಿ ಸಾಗರ",
        "taluk": "ಬಾಗಲಕೋಟೆ ಗಡಿ",
        "category": "ಪ್ರಕೃತಿ ಮತ್ತು ಅಣೆಕಟ್ಟು ಉದ್ಯಾನ",
        "description": "ಕೃಷ್ಣಾ ನದಿಗೆ ಅಡ್ಡಲಾಗಿ ನಿರ್ಮಿಸಲಾದ ಬೃಹತ್ ಅಣೆಕಟ್ಟು. ಸಂಗೀತ ಕಾರಂಜಿ, ಮೊಘಲ್ ಗಾರ್ಡನ್, ರಾಕ್ ಗಾರ್ಡನ್ ಮತ್ತು ವರ್ಣರಂಜಿತ ದೀಪಾಲಂಕಾರಕ್ಕೆ ಇದು ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
        "historical_significance": "ಉತ್ತರ ಕರ್ನಾಟಕಕ್ಕೆ ಜೀವನಾಡಿಯಾದ ಕೃಷ್ಣಾ ಮೇಲ್ದಂಡೆ ಯೋಜನೆಯ ಪ್ರಮುಖ ಜಲಾಶಯ; ಭಾರತದ ಮಾಜಿ ಪ್ರಧಾನಿ ಲಾಲ್ ಬಹದ್ದೂರ್ ಶಾಸ್ತ್ರಿಯವರ ಸ್ಮರಣಾರ್ಥ ನಾಮಕರಣ.",
        "architecture": "೨೬ ಬೃಹತ್ ರೇಡಿಯಲ್ ಗೇಟ್‌ಗಳುಳ್ಳ ಕಲ್ಲಿನ ಮತ್ತು ಮಣ್ಣಿನ ಬೃಹತ್ ಅಣೆಕಟ್ಟು, ಬೃಂದಾವನ ಮಾದರಿಯ ಸುಂದರ ಉದ್ಯಾನವನಗಳು.",
        "transport": "ಬಾಗಲಕೋಟೆಯಿಂದ ೬೫ ಕಿಮೀ. ಎನ್‌ಎಚ್-೫೦ ಹೆದ್ದಾರಿಯಲ್ಲಿದೆ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ಸುಗಳು ಮತ್ತು ರೈಲು ನಿಲ್ದಾಣ ಸೌಲಭ್ಯವಿದೆ."
    },
    "hi": {
        "name": "आलमट्टी बांध एवं लाल बहादुर शास्त्री सागर",
        "taluk": "बागलकोट सीमा",
        "category": "प्रकृति एवं बांध उद्यान",
        "description": "कृष्णा नदी पर बना उत्तर कर्नाटक का विशाल जलाशय, जो अपनी संगीतमय फव्वारों, मुगल गार्डन, रॉक गार्डन और मनोहारी दृश्यों के लिए प्रसिद्ध है।",
        "historical_significance": "ऊपरी कृष्णा परियोजना का मुख्य आधार, 2005 में राष्ट्र को समर्पित; पूर्व प्रधानमंत्री लाल बहादुर शास्त्री के नाम पर स्थापित।",
        "architecture": "26 विशाल रेडियल गेटों वाला बहुउद्देशीय विशाल बांध और वृंदावन की तर्ज पर बने सुंदर उद्यान।",
        "transport": "बागलकोट से 65 किमी दूर NH-50 पर। सीधी बसें एवं आलमट्टी रेलवे स्टेशन की सुविधा उपलब्ध है।"
    },
    "ta": {
        "name": "ஆலமட்டி அணை & லால் பகதூர் சாஸ்திரி சாகர்",
        "taluk": "பாகல்கோட்டை எல்லை",
        "category": "இயற்கை & அணை தோட்டங்கள்",
        "description": "கிருஷ்ணா நதியின் குறுக்கே கட்டப்பட்ட பிரம்மாண்ட அணை. இசை நீரூற்றுகள், முகலாய தோட்டங்கள் மற்றும் பாறை தோட்டங்களுக்கு மிகவும் புகழ்பெற்றது.",
        "historical_significance": "வட கர்நாடகாவின் விவசாயத்திற்கு உயிரூட்டும் கிருஷ்ணா நதி நீர்ப்பாசன திட்டம்.",
        "architecture": "26 பிரம்மாண்ட கதவுகள் கொண்ட அணை மற்றும் அழகான பூங்காக்கள்.",
        "transport": "பாகல்கோட்டையிலிருந்து 65 கி.மீ. பேருந்து மற்றும் ரயில் வசதிகள் உள்ளன."
    },
    "te": {
        "name": "ఆలమట్టి డ్యామ్ & లాల్ బహదూర్ శాస్త్రి సాగర్",
        "taluk": "బాగల్‌కోట్ సరిహద్దు",
        "category": "ప్రకృతి & ఆనకట్ట ఉద్యానవనాలు",
        "description": "కృష్ణా నదిపై నిర్మించిన భారీ బహుళార్ధసాధక ప్రాజెక్ట్. మ్యూజికల్ ఫౌంటెన్లు, మొఘల్ గార్డెన్స్, రాక్ గార్డెన్‌తో పర్యాటకులను ఆకర్షిస్తుంది.",
        "historical_significance": "ఉత్తర కర్ణాటకకు జీవనాడి అయిన అప్పర్ కృష్ణా ప్రాజెక్ట్ ప్రధాన భాగం.",
        "architecture": "26 రేడియల్ గేట్లతో నిర్మించిన భారీ డ్యామ్ మరియు అందమైన ప్రకృతి ఉద్యానవనాలు.",
        "transport": "బాగల్‌కోట్ నుండి 65 కి.మీ దూరం. ఎక్స్‌ప్రెస్ బస్సులు, ఆలమట్టి రైల్వే స్టేషన్ సౌకర్యం కలదు."
    },
    "mr": {
        "name": "आलमट्टी धरण आणि लाल बहादूर शास्त्री सागर",
        "taluk": "बागलकोट सीमा",
        "category": "निसर्ग व धरण उद्याने",
        "description": "कृष्णा नदीवरील भव्य धरण प्रकल्प. संगीतमय कारंजे, मुघल गार्डन, रॉक गार्डन आणि आकर्षक रोषणाईसाठी पर्यटकांचे आवडते केंद्र.",
        "historical_significance": "उत्तर कर्नाटकातील कृषी क्रांतीचा आधारस्तंभ असणारा जलप्रकल्प.",
        "architecture": "२६ वक्र द्वारांचे विशाल दगडी धरण आणि भव्य उद्याने.",
        "transport": "बागलकोट शहरापासून ६५ किमी अंतरावर. राष्ट्रीय महामार्ग ५० वरून थेट बसेस."
    },
    "ml": {
        "name": "ആലമട്ടി ഡാം & ലാൽ ബഹാദൂർ ശാസ്ത്രി സാഗർ",
        "taluk": "ബാഗൽകോട്ട് അതിർത്തി",
        "category": "പ്രകൃതി & അണക്കെട്ട്",
        "description": "കൃഷ്ണ നദിക്ക് കുറുകെയുള്ള കൂറ്റൻ അണക്കെട്ട്. സംഗീത ജലധാരകൾ, മുഗൾ ഗാർഡൻ, റോക്ക് ഗാർഡൻ എന്നിവയാൽ സന്ദർശകരെ ആകർഷിക്കുന്നു.",
        "historical_significance": "ഉത്തര കർണാടകത്തിന്റെ ജീവനാഡിയായ പ്രധാന ജലസേചന പദ്ധതി.",
        "architecture": "26 കൂറ്റൻ ഷട്ടറുകളുള്ള വലിയ ഡാമും പൂന്തോട്ടങ്ങളും.",
        "transport": "ബാഗൽകോട്ടിൽ നിന്ന് 65 കി.മീ. ബസ്, ട്രെയിൻ സർവീസുകൾ ലഭ്യമാണ്."
    }
},

  dest_shivayogamandira: {
    "en": {
        "name": "Shivayogamandira",
        "taluk": "Badami",
        "category": "Spiritual & Confluence",
        "description": "Sacred Veerashaiva monastery founded in 1909 by Saint Hangal Kumaraswamiji on the banks of Malaprabha River, training hundreds of monastic scholars in spiritual discipline.",
        "historical_significance": "Historic seat of modern Lingayat-Veerashaiva resurgence and Sanskrit monastic schooling, maintaining an unbroken tradition of community welfare and Dasoha.",
        "architecture": "Serene ashram-style temple architecture shaded by palm and mango groves along the banks of the sacred Malaprabha river.",
        "transport": "18 km from Badami, 12 km from Pattadakal. State transport buses and autorickshaws available."
    },
    "kn": {
        "name": "ಶಿವಯೋಗಮಂದಿರ",
        "taluk": "ಬಾದಾಮಿ",
        "category": "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಆಶ್ರಮ ತಾಣ",
        "description": "ಮಲಪ್ರಭಾ ನದಿಯ ದಂಡೆಯಲ್ಲಿರುವ ಪವಿತ್ರ ವೀರಶೈವ ಮಠ. ೧೯೦೯ ರಲ್ಲಿ ಹಾನಗಲ್ ಕುಮಾರಸ್ವಾಮಿಗಳಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟಿದ್ದು, ನೂರಾರು ಸಂತರ ತರಬೇತಿ ಕೇಂದ್ರವಾಗಿದೆ.",
        "historical_significance": "ವೀರಶೈವ-ಲಿಂಗಾಯತ ಪುನರುತ್ಥಾನದ ಪವಿತ್ರ ವಿದ್ಯಾಪೀಠ, ಸಂಸ್ಕೃತ ಅಧ್ಯಯನ ಮತ್ತು ದಾಸೋಹ ಸಂಪ್ರದಾಯದ ಕೇಂದ್ರ.",
        "architecture": "ಪ್ರಶಾಂತ ಆಶ್ರಮ ಶೈಲಿಯ ಸುಂದರ ಪರಿಸರ, ನದೀತೀರದ ತಪೋವನ ಮತ್ತು ಧ್ಯಾನ ಮಂದಿರ.",
        "transport": "ಬಾದಾಮಿಯಿಂದ ೧೮ ಕಿಮೀ, ಪಟ್ಟದಕಲ್ಲಿನಿಂದ ೧೨ ಕಿಮೀ. ಬಸ್ಸು ಮತ್ತು ಆಟೋ ಸೌಲಭ್ಯವಿದೆ."
    },
    "hi": {
        "name": "शिवयोगमंदिर",
        "taluk": "बादामी",
        "category": "आध्यात्मिक एवं शांत तपोवन",
        "description": "मलप्रभा नदी के सुरम्य तट पर 1909 में पूज्य हंगल कुमारस्वामीजी द्वारा स्थापित प्रतिष्ठित आध्यात्मिक विद्यापीठ एवं वीरशैव मठ।",
        "historical_significance": "संस्कृत एवं वीरशैव दर्शन की उच्च शिक्षा का ऐतिहासिक केंद्र; निरंतर समाज सेवा एवं अन्न दान (दासोह) का पवित्र स्थल।",
        "architecture": "शांत प्राकृतिक आश्रम शैली, नदी तट का मनोहारी वातावरण और ध्यान मंडप।",
        "transport": "बादामी से 18 किमी, पट्टदकल से 12 किमी। राज्य परिवहन की बसें उपलब्ध हैं।"
    },
    "ta": {
        "name": "சிவயோகமந்திரம்",
        "taluk": "பாதாமி",
        "category": "ஆன்மீகம் & ஆசிரமம்",
        "description": "மலபிரபா நதிக்கரையில் 1909-ல் ஹானகல் குமாரசுவாமி அவர்களால் நிறுவப்பட்ட புனித வீரசைவ மடம் மற்றும் ஆன்மீக கல்வி மையம்.",
        "historical_significance": "ஆன்மீக துறவிகள் உருவாகும் வரலாற்று சிறப்புமிக்க குருகுல பீடம்.",
        "architecture": "அமைதியான நதிக்கரை ஆசிரம சூழல் மற்றும் தியான கூடம்.",
        "transport": "பாதாமியிலிருந்து 18 கி.மீ, பட்டடக்கல்லிலிருந்து 12 கி.மீ."
    },
    "te": {
        "name": "శివయోగమందిరం",
        "taluk": "బాదామి",
        "category": "ఆధ్యాత్మికం & ఆశ్రమం",
        "description": "మలప్రభ నదీ తీరంలో 1909 లో హానగల్ కుమారస్వామి స్థాపించిన పవిత్ర వీరశైవ పీఠం మరియు వేద పాఠశాల.",
        "historical_significance": "సంస్కృతం, వీరశైవ తత్వశాస్త్రం బోధించే ప్రముఖ చారిత్రక గురుకులం.",
        "architecture": "ప్రశాంతమైన నదీతీర ఆశ్రమ ప్రాంగణం మరియు ధ్యాన మందిరం.",
        "transport": "బాదామి నుండి 18 కి.మీ, పట్టడకల్ నుండి 12 కి.మీ. బస్సులు అందుబాటులో ఉన్నాయి."
    },
    "mr": {
        "name": "शिवयोगमंदिर",
        "taluk": "बादामी",
        "category": "आध्यात्मिक व तपोभूमी",
        "description": "मलप्रभा नदीकाठी १९०९ मध्ये हनगल कुमारस्वामींनी स्थापन केलेला विख्यात वीरशैव मठ आणि संस्कृत अभ्यास केंद्र.",
        "historical_significance": "अखंड समाजसेवा, अन्नदान (दासोह) आणि संन्यासी प्रशिक्षणाची ऐतिहासिक तपोभूमी.",
        "architecture": "शांत निसर्गरम्य आश्रम रचना आणि नदीकाठचा ध्यान मंडप.",
        "transport": "बादामीपासून १८ किमी, पट्टदकलपासून १२ किमी."
    },
    "ml": {
        "name": "ശിവയോഗമന്ദിരം",
        "taluk": "ബദാമി",
        "category": "ആത്മീയത & ആശ്രമം",
        "description": "മലപ്രഭ നദിക്കരയിൽ 1909-ൽ ഹാനഗൽ കുമാരസ്വാമിജി സ്ഥാപിച്ച പുണ്യ വീരശൈവ മഠവും ആശ്രമവും.",
        "historical_significance": "സംസ്കൃത വേദപഠനത്തിന്റെയും തത്ത്വചിന്തയുടെയും ചരിത്രപ്രസിദ്ധമായ കേന്ദ്രം.",
        "architecture": "ശാന്തമായ നദീതീര ആശ്രമ വാസ്തുവിദ്യയും ധ്യാനമണ്ഡപവും.",
        "transport": "ബദാമിയിൽ നിന്ന് 18 കി.മീ അകലെ."
    }
},

  dest_food_jolada_rotti_badami: {
    "en": {
        "name": "Shri Banashankari Traditional Jolada Rotti Uta",
        "taluk": "Badami",
        "category": "Local Food & Khanavalis",
        "description": "Iconic authentic North Karnataka sorghum flatbread meal served with stuffed brinjal (Badanekayi Ennegayi), sprouted moth-bean usli, Shenga Chutney, and fresh churned white butter.",
        "historical_significance": "Centuries-old agrarian culinary staple of the Deccan plateau, celebrating millet-based organic nutrition.",
        "architecture": "Traditional dining Khanavali setup with authentic low brass plates and banana leaf service.",
        "transport": "Opposite Badami Bus Stand, walkable from cave temples entrance."
    },
    "kn": {
        "name": "ಶ್ರೀ ಬನಶಂಕರಿ ಸಾಂಪ್ರದಾಯಿಕ ಜೋಳದ ರೊಟ್ಟಿ ಊಟ",
        "taluk": "ಬಾದಾಮಿ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಬಿಸಿ ಬಿಸಿ ಜೋಳದ ರೊಟ್ಟಿ, ಬದನೆಕಾಯಿ ಎಣ್ಣೆಗಾಯಿ ಪಲ್ಯ, ಕಾಳು ಪಲ್ಯ, ಶೇಂಗಾ ಚಟ್ನಿಪುಡಿ ಮತ್ತು ಗಟ್ಟಿ ಮೊಸರಿನೊಂದಿಗೆ ಬಡಿಸುವ ಅಪ್ಪಟ ಉತ್ತರ ಕರ್ನಾಟಕ ಊಟ.",
        "historical_significance": "ಶತಮಾನಗಳಿಂದ ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಪೌಷ್ಟಿಕ ಸಿರಿಧಾನ್ಯದ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ ಪರಂಪರೆ.",
        "architecture": "ಸಾಂಪ್ರದಾಯಿಕ ಕೌಟುಂಬಿಕ ಖಾನಾವಳಿ ಶೈಲಿಯ ಆತಿಥ್ಯ.",
        "transport": "ಬಾದಾಮಿ ಬಸ್ ನಿಲ್ದಾಣದ ಎದುರು, ಗುಹಾ ದೇವಾಲಯಗಳಿಗೆ ಸಮೀಪ."
    },
    "hi": {
        "name": "श्री बनशंकरी पारंपरिक जोलद रोट्टी भोजन",
        "taluk": "बादामी",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "गरमा-गरम ज्वार की रोट्टी, बैंगन का मसालेदार भरवां (एन्नेगायी), अंकुरित दाल, मूंगफली की चटनी और ताज़ा मक्खन के साथ उत्तर कर्नाटक की प्रामाणिक थाली।",
        "historical_significance": "दक्कन के पठार की सदियों पुरानी पौष्टिक कदन्न (मिलेट) भोजन परंपरा।",
        "architecture": "पारंपरिक प्रामाणिक खानावलि बैठक व्यवस्था।",
        "transport": "बादामी बस स्टैंड के सामने, गुफा मंदिरों से कुछ ही दूरी पर।"
    },
    "ta": {
        "name": "ஸ்ரீ பனசங்கரி பாரம்பரிய சோள ரொட்டி உணவு",
        "taluk": "பாதாமி",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "சுடச்சுட சோள ரொட்டி, எண்ணெய் கத்திரிக்காய் பொரியல், முளைகட்டிய பயறு, நிலக்கடலை பொடி மற்றும் வெண்ணெயுடன் கூடிய சுவையான உணவு.",
        "historical_significance": "கர்நாடகாவின் பாரம்பரிய சிறுதானிய உணவு கலாச்சாரம்.",
        "architecture": "பாரம்பரிய உணவு விடுதி அமைப்பு.",
        "transport": "பாதாமி பேருந்து நிலையம் எதிரில்."
    },
    "te": {
        "name": "శ్రీ బనశంకరి సాంప్రదాయ జొన్న రొట్టె భోజనం",
        "taluk": "బాదామి",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "వేడి వేడి జొన్న రొట్టెలు, గుత్తి వంకాయ కూర, మొలకల ఉసలి, వేరుశెనగ పొడి మరియు తాజా వెన్నతో కూడిన ఉత్తర కర్ణాటక స్పెషల్ భోజనం.",
        "historical_significance": "దక్కన్ పీఠభూమి ప్రాచీన పోషక చిరుధాన్య ఆహార వారసత్వం.",
        "architecture": "సాంప్రదాయ ఖానావళి భోజన శాల.",
        "transport": "బాదామి బస్టాండ్ ఎదురుగా."
    },
    "mr": {
        "name": "श्री बनशंकरी पारंपरिक ज्वारीची भाकरी जेवण",
        "taluk": "बादामी",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "गरमागरम मऊ ज्वारीची भाकरी, भरलेली वांगी (एन्नेगायी), उसळ, शेंगदाणा चटणी व लोण्यासह अस्सल उत्तर कर्नाटक जेवण.",
        "historical_significance": "दख्खनच्या पठाराची शतकानुशतके चालत आलेली पौष्टिक भरडधान्य संस्कृती.",
        "architecture": "अस्सल पारंपारिक खानावळ संस्कृती.",
        "transport": "बादामी बस स्थानकासमोर."
    },
    "ml": {
        "name": "ശ്രീ ബനശങ്കരി പരമ്പരാഗത ചോള റൊട്ടി ഊണ്",
        "taluk": "ബദാമി",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "ചൂടുള്ള ചോള റൊട്ടിയും വഴുതനങ്ങ കറിയും മുളപ്പിച്ച പയറും നിലക്കടല ചട്ണിയും ചേർന്ന ഉത്തർ കർണാടക സ്പെഷ്യൽ ഊണ്.",
        "historical_significance": "പരമ്പരാഗത ധാന്യ സമൃദ്ധമായ പൈതൃക ഭക്ഷണം.",
        "architecture": "പരമ്പരാഗത ഖാനാവലി ഊട്ടുപുര.",
        "transport": "ബദാമി ബസ് സ്റ്റാൻഡിന് എതിർവശം."
    }
},

  dest_food_susla_badami: {
    "en": {
        "name": "Agastya Theertha Mirchi Bajji & Susla Stall",
        "taluk": "Badami",
        "category": "Local Food & Khanavalis",
        "description": "Crispy double-fried stuffed green chilli fritters (Mirchi Bajji) paired with spiced puffed-rice savory upma (Susla), beloved lakeside evening snack.",
        "historical_significance": "Signature street food of Bagalkote popularized over generations by lakeside stalls.",
        "architecture": "Open-air street stall overlooking Agastya lake cliffs.",
        "transport": "Near Agastya lake western ghats."
    },
    "kn": {
        "name": "ಅಗಸ್ತ್ಯ ತೀರ್ಥ ಮಿರ್ಚಿ ಬಜ್ಜಿ & ಸುಸ್ಲಾ ಕೇಂದ್ರ",
        "taluk": "ಬಾದಾಮಿ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಗರಿಗರಿಯಾದ ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿ ಮತ್ತು ಮಂಡಕ್ಕಿ ಸುಸ್ಲಾ, ಸರೋವರದ ತೀರದ ಸಂಜೆಯ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ತಿನಿಸು.",
        "historical_significance": "ಬಾಗಲಕೋಟೆಯ ಪ್ರಸಿದ್ಧ ಬೀದಿಬದಿ ಸಂಜೆಯ ಆಹಾರ ಸಂಸ್ಕೃತಿ.",
        "architecture": "ಸರೋವರದ ಸೌಂದರ್ಯವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳುವ ಬಯಲು ಅಂಗಡಿ.",
        "transport": "ಅಗಸ್ತ್ಯ ಸರೋವರದ ಪ್ರವೇಶ ದ್ವಾರದ ಬಳಿ."
    },
    "hi": {
        "name": "अगस्त्य तीर्थ मिर्ची भज्जी एवं सुसला स्टॉल",
        "taluk": "बादामी",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "कुरकुरी तीखी मिर्ची भज्जी और बघारे हुए मुरमुरे का सुसला, अगस्त्य झील किनारे का सबसे लोकप्रिय शाम का नाश्ता।",
        "historical_significance": "बागलकोट का पारंपरिक शाम का पसंदीदा स्ट्रीट फूड।",
        "architecture": "झील किनारे स्थित खुला स्ट्रीट फूड स्टॉल।",
        "transport": "अगस्त्य सरोवर के पास।"
    },
    "ta": {
        "name": "அகஸ்திய தீர்த்தம் மிளகாய் பஜ்ஜி & சுஸ்லா",
        "taluk": "பாதாമി",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "மொருமொருப்பான மிளகாய் பஜ்ஜி மற்றும் சுஸ்லா காரப் பொரி சிற்றுண்டி.",
        "historical_significance": "பாகல்கோட்டையின் பாரம்பரிய மாலை நேர சிற்றுண்டி.",
        "architecture": "ஏரிக்கரை சிற்றுண்டி கடை.",
        "transport": "அகஸ்திய ஏரிக்கரை அருகில்."
    },
    "te": {
        "name": "అగస్త్య తీర్థం మిర్చి బజ్జీ & సుస్లా స్టాల్",
        "taluk": "బాదామి",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "కరకరలాడే మిర్చి బజ్జీ మరియు కారపు మరమరాల సుస్లా అల్పాహారం.",
        "historical_significance": "బాదామి సరస్సు పరిసరాలలో పేరొందిన వీధి ఆహారం.",
        "architecture": "సరస్సు ఒడ్డున ఉన్న స్టాల్.",
        "transport": "అగస్త్య సరస్సు వద్ద."
    },
    "mr": {
        "name": "अगस्त्य तीर्थ मिरची भजी आणि सुसला स्टॉल",
        "taluk": "बादामी",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "कुरकुरीत मिरची भजी आणि मुरमुऱ्यांचा चवदार सुसला, तलावाकाठचा प्रसिद्ध संध्याकाळचा नाश्ता.",
        "historical_significance": "बागलकोट जिल्ह्यातील पिढ्यानपिढ्या चालत आलेला लोकप्रिय स्ट्रीट फूड.",
        "architecture": "तलावाकाठची खुली गादी.",
        "transport": "अगस्त्य तलावाच्या काठावर."
    },
    "ml": {
        "name": "അഗസ്ത്യ തീർത്ഥ മിർച്ചി ബജ്ജി & സുസ്ല സ്റ്റാൾ",
        "taluk": "ബദാമി",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "മൊരിഞ്ഞ മുളക് ബജ്ജിയും പൊരി കൊണ്ടുള്ള സുസ്ലയും.",
        "historical_significance": "തടാകക്കരയിലെ പ്രസിദ്ധമായ വൈകുന്നേര പലഹാരം.",
        "architecture": "തുറന്ന ഭക്ഷണ സ്റ്റാൾ.",
        "transport": "അഗസ്ത്യ തടാകക്കരയിൽ."
    }
},

  dest_food_jalebi_badami: {
    "en": {
        "name": "Badami Royal Jalebi & Malai Rabdi Stall",
        "taluk": "Badami",
        "category": "Local Food & Khanavalis",
        "description": "Crispy saffron-soaked spiral Jalebis deep-fried in pure ghee, served crowned with thick slow-simmered cardamom Malai Rabdi.",
        "historical_significance": "Royal sweet legacy patronized during festival processions in old Vatapi.",
        "architecture": "Heritage sweet shop operating with massive cast-iron kadai.",
        "transport": "Main Temple Bazaar Street, Badami."
    },
    "kn": {
        "name": "ಬಾದಾಮಿ ರಾಯಲ್ ಜಿಲೇಬಿ ಮತ್ತು ಮಲೈ ರಬಡಿ ಅಂಗಡಿ",
        "taluk": "ಬಾದಾಮಿ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ತುಪ್ಪದಲ್ಲಿ ಕರಿದ ಗರಿಗರಿಯಾದ ಕೇಸರಿ ಜಿಲೇಬಿ ಮತ್ತು ಘಮಘಮಿಸುವ ಮಲೈ ರಬಡಿಯ ಸಿಹಿ ಅನುಭವ.",
        "historical_significance": "ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ರಥಬೀದಿಯಲ್ಲಿ ಸವಿಯುವ ಬಾದಾಮಿಯ ಜನಪ್ರಿಯ ಸಿಹಿ ತಿನಿಸು.",
        "architecture": "ಹಳೆಯ ಬಜಾರಿನ ಹೆರಿಟೇಜ್ ಸಿಹಿ ಅಂಗಡಿ.",
        "transport": "ಬಾದಾಮಿ ಮುಖ್ಯ ಮಾರುಕಟ್ಟೆ ರಸ್ತೆ."
    },
    "hi": {
        "name": "बादामी रॉयल जलेबी एवं मलाई रबड़ी केंद्र",
        "taluk": "बादामी",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "शुद्ध घी में तली हुई कुरकुरी केसरिया जलेबी और गाढ़ी मलाईदार रबड़ी का लाजवाब संगम।",
        "historical_significance": "त्योहारों पर बादामी के बाजार की प्रसिद्ध मिष्ठान परंपरा।",
        "architecture": "पारंपरिक हलवाई की दुकान।",
        "transport": "मुख्य मंदिर बाजार रोड, बादामी।"
    },
    "ta": {
        "name": "பாதாமி ராயல் ஜிலேபி மற்றும் மலாய் ரப்ரி",
        "taluk": "பாதாமி",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "நெய்யில் பொரித்த குங்குமப்பூ ஜிலேபி மற்றும் கெட்டி மலாய் ரப்ரி இனிப்பு.",
        "historical_significance": "பாதாமியின் புகழ்பெற்ற பாரம்பரிய இனிப்பு.",
        "architecture": "பாரம்பரிய இனிப்பகம்.",
        "transport": "பாதாமி பஜார் வீதி."
    },
    "te": {
        "name": "బాదామి రాయల్ జిలేబీ & మలై రబ్రీ స్టాల్",
        "taluk": "బాదామి",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "నెయ్యితో వేయించిన జిలేబీ మరియు చిక్కని మలై రబ్రీ మిఠాయి.",
        "historical_significance": "బాదామి బజారులోని చారిత్రక తీపి వంటకం.",
        "architecture": "పురాతన మిఠాయి దుకాణం.",
        "transport": "బాదామి మెయిన్ బజార్."
    },
    "mr": {
        "name": "बादामी रॉयल जिलेबी आणि मलाई रबडी स्टॉल",
        "taluk": "बादामी",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "साजूक तुपात तळलेली कुरकुरीत केशर जिलेबी आणि घट्ट मलाईदार बासुंदी-रबडी.",
        "historical_significance": "उत्सवांच्या काळात प्रसिद्ध असणारी बादामीची राजेशाही गोड परंपरा.",
        "architecture": "पारंपरिक हलवाई दुकान.",
        "transport": "मुख्य बाजारपेठ, बादामी."
    },
    "ml": {
        "name": "ബദാമി റോയൽ ജിലേബി & മലായ് റബ്ഡി",
        "taluk": "ബദാമി",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "നെയ്യിൽ വറുത്ത ജിലേബിയും ക്രീം നിറഞ്ഞ മലായ് റബ്ഡിയും.",
        "historical_significance": "പാരമ്പര്യ മധുരപലഹാരം.",
        "architecture": "പരമ്പരാഗത സ്വീറ്റ് ഷോപ്പ്.",
        "transport": "മെയിൻ ബസാർ, ബദാമി."
    }
},

  dest_food_jolada_rotti_bgk: {
    "en": {
        "name": "Basaveshwara Khanavali — Authentic Jolada Rotti Uta",
        "taluk": "Bagalkote",
        "category": "Local Food & Khanavalis",
        "description": "The gold standard of North Karnataka Lingayat Khanavali meals, serving unlimited hand-flattened Sorghum rottis with 3 curries, Junka, Ranjaka chilli paste, and butter.",
        "historical_significance": "Iconic family Khanavali running for decades in old Bagalkote town.",
        "architecture": "Traditional seated dining hall serving piping-hot food.",
        "transport": "Station Road, Bagalkote Old Town."
    },
    "kn": {
        "name": "ಬಸವೇಶ್ವರ ಖಾನಾವಳಿ — ಅಪ್ಪಟ ಉತ್ತರ ಕರ್ನಾಟಕ ಜೋಳದ ರೊಟ್ಟಿ ಊಟ",
        "taluk": "ಬಾಗಲಕೋಟೆ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಕೈಯಿಂದ ತಟ್ಟಿದ ಬಿಸಿ ಜೋಳದ ರೊಟ್ಟಿ, ಮೂರು ವಿಧದ ಪಲ್ಯಗಳು, ಜುಣಕ, ರಂಜಕ ಖಾರ ಮತ್ತು ಬೆಣ್ಣೆಯೊಂದಿಗೆ ಅಪರಿಮಿತ ಊಟ.",
        "historical_significance": "ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ದಶಕಗಳಿಂದ ನಡೆದುಕೊಂಡು ಬಂದಿರುವ ಶ್ರೇಷ್ಠ ಖಾನಾವಳಿ ಪರಂಪರೆ.",
        "architecture": "ಸಾಂಪ್ರದಾಯಿಕ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಭೋಜನಾಲಯ.",
        "transport": "ಸ್ಟೇಷನ್ ರಸ್ತೆ, ಬಾಗಲಕೋಟೆ."
    },
    "hi": {
        "name": "बसवेश्वर खानावलि — प्रामाणिक जोलद रोट्टी भोजन",
        "taluk": "बागलकोट",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "हाथ से बनी गरमा-गरम ज्वार की रोटियां, 3 प्रकार की सब्जियां, झुनका, रंजक चटनी और मक्खन से सजी असीमित उत्तर कर्नाटक थाली।",
        "historical_significance": "बागलकोट की सबसे प्रतिष्ठित एवं प्रामाणिक लिंगायत खानावलि।",
        "architecture": "पारंपरिक सात्विक भोजन कक्ष।",
        "transport": "स्टेशन रोड, बागलकोट।"
    },
    "ta": {
        "name": "பசவேஸ்வரா கானாங்கி — பாரம்பரிய சோள ரொட்டி உணவு",
        "taluk": "பாகல்கோட்டை",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "வரம்பற்ற சோள ரொட்டி, 3 வகையான காய்கறி பொரியல், ஜுன்கா மற்றும் வெண்ணெய் உணவு.",
        "historical_significance": "பாகல்கோட்டையின் புகழ்பெற்ற சைவ கானாங்கி.",
        "architecture": "பாரம்பரிய உணவு கூடம்.",
        "transport": "ஸ்டேஷன் ரோடு, பாகல்கோட்டை."
    },
    "te": {
        "name": "బసవేశ్వర ఖానావళి — ప్రామాణిక జొన్న రొట్టె భోజనం",
        "taluk": "బాగల్‌కోట్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "చేతితో చేసిన వేడి జొన్న రొట్టెలు, 3 రకాల కూరలు, జున్కా మరియు రంజక చట్నీతో అపరిమిత భోజనం.",
        "historical_significance": "బాగల్‌కోట్‌లో దశాబ్దాలుగా ప్రసిద్ధి చెందిన శాఖాహార భోజనశాల.",
        "architecture": "సాంప్రదాయ డైనింగ్ హాల్.",
        "transport": "స్టేషన్ రోడ్, బాగల్‌కోట్."
    },
    "mr": {
        "name": "बसवेश्वर खानावळ — अस्सल उत्तर कर्नाटक ज्वारीची भाकरी",
        "taluk": "बागलकोट",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "हाताने थापलेली गरम ज्वारीची भाकरी, ३ प्रकारच्या भाज्या, झुणका, ठेचा व लोण्यासह अमर्याद शाकाहारी जेवण.",
        "historical_significance": "बागलकोटमधील सर्वात जुनी व मानाची लिंगायत खानावळ.",
        "architecture": "पारंपरिक सात्विक बैठक व्यवस्था.",
        "transport": "स्टेशन रोड, बागलकोट."
    },
    "ml": {
        "name": "ബസവേശ്വര ഖാനാവലി — തനത് ചോള റൊട്ടി ഊണ്",
        "taluk": "ബാഗൽകോട്ട്",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "കൈകൊണ്ട് പരത്തിയ ചൂടുള്ള ചോള റൊട്ടിയും വിഭവസമൃദ്ധമായ വെജിറ്റേറിയൻ ഊണും.",
        "historical_significance": "പഴക്കം ചെന്ന വിശ്വസ്ത ഭക്ഷണശാല.",
        "architecture": "പരമ്പരാഗത ഊട്ടുശാല.",
        "transport": "സ്റ്റേഷൻ റോഡ്, ബാഗൽകോട്ട്."
    }
},

  dest_food_susla_bgk: {
    "en": {
        "name": "Sri Raghavendra Girmit, Susla & Mirchi Bajji Kendra",
        "taluk": "Bagalkote",
        "category": "Local Food & Khanavalis",
        "description": "Bagalkote's top destination for crunchy Girmit (masala puffed rice tempered with roasted gram and onions) and sizzling hot Mirchi Bajjis.",
        "historical_significance": "Hub of cultural evening gatherings for locals, scholars, and travellers.",
        "architecture": "Lively local eatery with continuous fresh frying.",
        "transport": "Vidyagiri, Bagalkote."
    },
    "kn": {
        "name": "ಶ್ರೀ ರಾಘವೇಂದ್ರ ಗಿರ್ಮಿಟ್, ಸುಸ್ಲಾ ಮತ್ತು ಮಿರ್ಚಿ ಬಜ್ಜಿ ಕೇಂದ್ರ",
        "taluk": "ಬಾಗಲಕೋಟೆ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಗರಿಗರಿಯಾದ ಗಿರ್ಮಿಟ್, ಒಗ್ಗರಣೆ ಸುಸ್ಲಾ ಮತ್ತು ಬಿಸಿ ಬಿಸಿ ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿಗೆ ಬಾಗಲಕೋಟೆಯ ಜನಪ್ರಿಯ ತಾಣ.",
        "historical_significance": "ವಿದ್ಯಾಗಿರಿ ಪ್ರದೇಶದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು ಹಾಗೂ ಪ್ರವಾಸಿಗರ ನೆಚ್ಚಿನ ಸಂಜೆ ತಿನಿಸು ಕೇಂದ್ರ.",
        "architecture": "ಚುರುಕಾದ ಸ್ಥಳೀಯ ತಿನಿಸು ಕೇಂದ್ರ.",
        "transport": "ವಿದ್ಯಾಗಿರಿ, ಬಾಗಲಕೋಟೆ."
    },
    "hi": {
        "name": "श्री राघवेंद्र गिरमिट, सुसला एवं मिर्ची भज्जी केंद्र",
        "taluk": "बागलकोट",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "बागलकोट का मशहूर गिरमिट (मसालेदार मुरमुरा भेल) और गरमा-गरम तीखी मिर्ची भज्जी।",
        "historical_significance": "विद्यागिरि क्षेत्र का प्रसिद्ध शाम का अड्डा।",
        "architecture": "व्यस्त स्थानीय जलपान गृह।",
        "transport": "विद्यागिरि, बागलकोट।"
    },
    "ta": {
        "name": "ஸ்ரீ ராகவேந்திரா கிர்மிட், சுஸ்லா & மிளகாய் பஜ்ஜி மையம்",
        "taluk": "பாகல்கோட்டை",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "பாகல்கோட்டையின் காரசாரமான கிர்மிட் பொரி மற்றும் சுடச்சுட மிளகாய் பஜ்ஜி.",
        "historical_significance": "மக்களின் விருப்பமான மாலை நேர சிற்றுண்டி கடை.",
        "architecture": "உள்ளூர் சிற்றுண்டகம்.",
        "transport": "வித்யாகிரி, பாகல்கோட்டை."
    },
    "te": {
        "name": "శ్రీ రాఘవేంద్ర గిర్మిట్, సుస్లా & మిర్చి బజ్జీ కేంద్రం",
        "taluk": "బాగల్‌కోట్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "బాగల్‌కోట్ స్పెషల్ గిర్మిట్ మరమరాలు మరియు వేడి వేడి మిర్చి బజ్జీలు.",
        "historical_significance": "విద్యాగిరిలోని ప్రసిద్ధ సాయంత్రపు తినుబండారాల కేంద్రం.",
        "architecture": "స్థానిక చిరుతిండి దుకాణం.",
        "transport": "విద్యాగిరి, బాగల్‌కోట్."
    },
    "mr": {
        "name": "श्री राघवेंद्र गिरमीट, सुसला आणि मिरची भजी केंद्र",
        "taluk": "बागलकोट",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "बागलकोटचे प्रसिद्ध गिरमीट (मसालेदार चुरमुरे) आणि गरमागरम मिरची भजी.",
        "historical_significance": "विद्यागिरी भागातील संध्याकाळचा सर्वात आवडता नाश्ता अड्डा.",
        "architecture": "स्थानिक जलपानगृह.",
        "transport": "विद्यागिरी, बागलकोट."
    },
    "ml": {
        "name": "ശ്രീ രാഘവേന്ദ്ര ഗിർമിറ്റ്, സുസ്ല & മിർച്ചി ബജ്ജി കേന്ദ്രം",
        "taluk": "ബാഗൽകോട്ട്",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "രുചികരമായ ഗിർമിറ്റ് പൊരിയും എരിവുള്ള മിർച്ചി ബജ്ജിയും.",
        "historical_significance": "വിദ്യാഗിരിയിലെ പ്രിയപ്പെട്ട പലഹാരക്കട.",
        "architecture": "പ്രാദേശിക ഭക്ഷണശാല.",
        "transport": "വിദ്യാഗിരി, ബാഗൽകോട്ട്."
    }
},

  dest_food_fakirappa_bgk: {
    "en": {
        "name": "Fakirappa Halwai Sweets & Galgali Peda House",
        "taluk": "Bagalkote",
        "category": "Local Food & Khanavalis",
        "description": "Legendary confectionery crafting authentic Galgali Pedas from slow-simmered buffalo milk mawa, alongside classic Belagavi Kunda and Motichoor Ladoos.",
        "historical_significance": "Over 75 years of sweet craftsmanship in the heart of old Bagalkote.",
        "architecture": "Traditional Indian Halwai shop with copper cauldrons.",
        "transport": "Main Bazar, Bagalkote."
    },
    "kn": {
        "name": "ಫಕೀರಪ್ಪ ಹಲ್ವಾಯಿ ಸ್ವೀಟ್ಸ್ ಮತ್ತು ಗಲಗಲಿ ಪೇಡಾ ಹೌಸ್",
        "taluk": "ಬಾಗಲಕೋಟೆ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಗಟ್ಟಿಯಾದ ಎಮ್ಮೆಯ ಹಾಲಿನ ಕೋವಾದಿಂದ ತಯಾರಿಸಿದ ಅಪ್ಪಟ ಗಲಗಲಿ ಪೇಡಾ ಮತ್ತು ಬೆಳಗಾವಿ ಕುಂದಾ ಸಿಹಿತಿನಿಸುಗಳಿಗೆ ಹೆಸರಾದ ಐತಿಹಾಸಿಕ ಅಂಗಡಿ.",
        "historical_significance": "ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ೭೫ ವರ್ಷಗಳಿಂದ ನಡೆದುಕೊಂಡು ಬಂದಿರುವ ಪ್ರಸಿದ್ಧ ಸಿಹಿ ಮಳಿಗೆ.",
        "architecture": "ಸಾಂಪ್ರದಾಯಿಕ ಹಲ್ವಾಯಿ ಶೈಲಿಯ ಸಿಹಿ ಅಂಗಡಿ.",
        "transport": "ಮುಖ್ಯ ಬಜಾರ್, ಬಾಗಲಕೋಟೆ."
    },
    "hi": {
        "name": "फकीरप्पा हलवाई मिठाई एवं गलगली पेड़ा हाउस",
        "taluk": "बागलकोट",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "शुद्ध खोये से निर्मित प्रसिद्ध गलगली पेड़ा और बेलगावी कुंदा का 75 वर्षों से विश्वसनीय प्रतिष्ठान।",
        "historical_significance": "बागलकोट का ऐतिहासिक एवं प्रतिष्ठित मिष्ठान भंडार।",
        "architecture": "पारंपरिक हलवाई की दुकान।",
        "transport": "मेन बाजार, बागलकोट।"
    },
    "ta": {
        "name": "பகீரப்பா அல்வா ஸ்வீட்ஸ் & கல்கலி பேடா",
        "taluk": "பாகல்கோட்டை",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "சுவையான பால்கோவா கல்கலி பேடா மற்றும் பாரம்பரிய இனிப்புகள்.",
        "historical_significance": "75 ஆண்டுகள் பாரம்பரியம் கொண்ட புகழ்பெற்ற இனிப்பகம்.",
        "architecture": "பாரம்பரிய இனிப்பு கடை.",
        "transport": "மெயின் பஜார், பாகல்கோட்டை."
    },
    "te": {
        "name": "ఫకీరప్ప హల్వాయి స్వీట్స్ & గల్గలీ పేడా హౌస్",
        "taluk": "బాగల్‌కోట్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "స్వచ్ఛమైన పాలకోవాతో చేసే గల్గలీ పేడా మరియు స్వీట్లకు ప్రసిద్ధి.",
        "historical_significance": "75 ఏళ్ల చరిత్ర కలిగిన మిఠాయి దుకాణం.",
        "architecture": "చారిత్రక మిఠాయి నిలయం.",
        "transport": "మెయిన్ బజార్, బాగల్‌కోట్."
    },
    "mr": {
        "name": "फकिरप्पा हलवाई मिठाई व गलगली पेढा हाऊस",
        "taluk": "बागलकोट",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "अस्सल म्हशीच्या खव्यापासून तयार केलेला खमंग गलगली पेढा आणि कुंदा.",
        "historical_significance": "बागलकोटमधील ७५ वर्षे जुने विश्वासार्ह मिठाईचे दालन.",
        "architecture": "पारंपरिक हलवाई दुकान.",
        "transport": "मेन बाजार, बागलकोट."
    },
    "ml": {
        "name": "ഫക്കീരപ്പ ഹൽവായി സ്വീറ്റ്സ് & ഗൽഗലി പേഡ",
        "taluk": "ബാഗൽകോട്ട്",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "തനത് ഗൽഗലി പേഡയും മധുരപലഹാരങ്ങളും.",
        "historical_significance": "75 വർഷത്തെ പാരമ്പര്യമുള്ള സ്വീറ്റ് ഷോപ്പ്.",
        "architecture": "പരമ്പരാഗത മധുരക്കട.",
        "transport": "മെയിൻ ബസാർ, ബാഗൽകോട്ട്."
    }
},

  dest_food_savaji_bgk: {
    "en": {
        "name": "Shri Renuka Savaji Non-Veg Hotel & Khanavali",
        "taluk": "Bagalkote",
        "category": "Local Food & Khanavalis",
        "description": "Authentic fiery Savaji warrior community cuisine featuring slow-cooked Mutton Sukka, spicy Keema Balls, Edmi flatbreads, and aromatic mutton khara rassa.",
        "historical_significance": "Catering the distinctive high-spice culinary tradition of the Somavanshi Sahasrarjun Kshatriya (Savaji) community.",
        "architecture": "No-frills traditional non-vegetarian military mess.",
        "transport": "Near Old Bus Stand, Bagalkote."
    },
    "kn": {
        "name": "ಶ್ರೀ ರೇಣುಕಾ ಸವಜಿ ಮಾಂಸಾಹಾರಿ ಹೋಟೆಲ್ ಮತ್ತು ಖಾನಾವಳಿ",
        "taluk": "ಬಾಗಲಕೋಟೆ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಅಪ್ಪಟ ಸವಜಿ ಶೈಲಿಯ ಖಾರವಾದ ಮಟನ್ ಸುಕ್ಕಾ, ಕೀಮಾ ಉಂಡೆಗಳು, ಖಾರ ರಸ್ಸಾ ಮತ್ತು ಎಡ್ಮಿ ರೊಟ್ಟಿಗಳ ಊಟ.",
        "historical_significance": "ಸೋಮವಂಶ ಸಹಸ್ರಾರ್ಜುನ ಕ್ಷತ್ರಿಯ (ಸವಜಿ) ಸಮುದಾಯದ ವಿಶಿಷ್ಟ ಖಾರ ಮಸಾಲೆ ಆಹಾರ ಸಂಸ್ಕೃತಿ.",
        "architecture": "ಸಾಂಪ್ರದಾಯಿಕ ಸವಜಿ ಮಿಲಿಟರಿ ಮೆಸ್.",
        "transport": "ಹಳೆಯ ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಬಾಗಲಕೋಟೆ."
    },
    "hi": {
        "name": "श्री रेणुका सावजी मांसाहारी होटल एवं खानावलि",
        "taluk": "बागलकोट",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "प्रसिद्ध सावजी शैली का मसालेदार मटन सुक्का, कीमा बॉल्स, एडमी रोटी और तीखा मटन रस्सा।",
        "historical_significance": "सावजी क्षत्रिय समुदाय की सदियों पुरानी तीव्र मसालेदार पाक परंपरा।",
        "architecture": "पारंपरिक गैर-शाकाहारी सावजी मेस।",
        "transport": "पुराने बस स्टैंड के पास, बागलकोट।"
    },
    "ta": {
        "name": "ஸ்ரீ ரேணுகா சவாஜி அசைவ ஹோட்டல் & கானாங்கி",
        "taluk": "பாகல்கோட்டை",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "காரசாரமான சவாஜி மட்டன் சுக்கா, கீமா உருண்டைகள் மற்றும் எட்மி ரொட்டி.",
        "historical_significance": "சவாஜி போர்வீரர் சமூகத்தின் பாரம்பரிய அசைவ உணவு.",
        "architecture": "பாரம்பரிய அசைவ மெஸ்.",
        "transport": "பழைய பேருந்து நிலையம் அருகில்."
    },
    "te": {
        "name": "శ్రీ రేణుక సావజీ నాన్-వెజ్ హోటల్ & ఖానావళి",
        "taluk": "బాగల్‌కోట్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "స్పైసీ సావజీ మటన్ సుక్కా, కీమా బాల్స్, ఎడ్మి రొట్టెలు మరియు ఘాటైన రస్సా.",
        "historical_significance": "సావజీ క్షత్రియ సంప్రదాయ ఘాటైన నాన్-వెజ్ వంటకాలు.",
        "architecture": "సాంప్రదాయ మిలిటరీ మెస్.",
        "transport": "పాత బస్టాండ్ సమీపంలో."
    },
    "mr": {
        "name": "श्री रेणुका सावजी मांसाहारी हॉटेल आणि खानावळ",
        "taluk": "बागलकोट",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "अस्सल झणझणीत सावजी मटन सुक्का, खिमा गोळे, एडमी रोटी आणि काळा-तांबडा रस्सा.",
        "historical_significance": "सोमवंशीय सहस्रार्जुन क्षत्रिय (सावजी) समाजाची वैशिष्ट्यपूर्ण मसालेदार पाककला.",
        "architecture": "पारंपरिक नॉनव्हेज सावजी मेस.",
        "transport": "जुना बस स्टँडजवळ, बागलकोट."
    },
    "ml": {
        "name": "ശ്രീ രേണുക സാവജി നോൺ-വെജ് ഹോട്ടൽ & ഖാനാവലി",
        "taluk": "ബാഗൽകോട്ട്",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "നല്ല എരിവുള്ള സാവജി മട്ടൻ സുക്കയും കീമ ഉണ്ടകളും കറിയും.",
        "historical_significance": "സാവജി സമുദായത്തിന്റെ തനത് സ്പൈസി പാചകരീതി.",
        "architecture": "പരമ്പരാഗത മിലിറ്ററി മെസ്സ്.",
        "transport": "പഴയ ബസ് സ്റ്റാൻഡിന് സമീപം."
    }
},

  dest_food_jalebi_bgk: {
    "en": {
        "name": "Mahaveer Sweet Mart & Hot Jalebi Rabri Centre",
        "taluk": "Bagalkote",
        "category": "Local Food & Khanavalis",
        "description": "Freshly prepared crunchy Jalebis dipped in aromatic cardamom syrup paired with decadent cold Rabdi, drawing crowds every morning and evening.",
        "historical_significance": "Decades of high-repute milk and confectionary traditions in district headquarters.",
        "architecture": "Classic town sweet center with live fryer counter.",
        "transport": "Near Gandhi Circle, Bagalkote."
    },
    "kn": {
        "name": "ಮಹಾವೀರ ಸ್ವೀಟ್ ಮಾರ್ಟ್ & ಬಿಸಿ ಜಿಲೇಬಿ ರಬಡಿ ಕೇಂದ್ರ",
        "taluk": "ಬಾಗಲಕೋಟೆ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಬಿಸಿ ಬಿಸಿ ಜಿಲೇಬಿ ಮತ್ತು ತಂಪಾದ ಗಟ್ಟಿ ರಬಡಿಯ ಅಧ್ಬುತ ಸವಿ, ಬಾಗಲಕೋಟೆ ನಗರದ ಜನಪ್ರಿಯ ಸಿಹಿ ಕೇಂದ್ರ.",
        "historical_significance": "ಜಿಲ್ಲಾ ಕೇಂದ್ರದಲ್ಲಿ ದಶಕಗಳಿಂದ ನಡೆದುಬಂದ ಜನಪ್ರಿಯ ಸಿಹಿ ತಿಂಡಿ ಮಳಿಗೆ.",
        "architecture": "ಸಾಂಪ್ರದಾಯಿಕ ಸಿಹಿ ಅಂಗಡಿ.",
        "transport": "ಗಾಂಧಿ ವೃತ್ತದ ಬಳಿ, ಬಾಗಲಕೋಟೆ."
    },
    "hi": {
        "name": "महावीर स्वीट मार्ट एवं गरमा-गरम जलेबी रबड़ी केंद्र",
        "taluk": "बागलकोट",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "गरमा-गरम रसीली जलेबी और ठंडी मलाईदार रबड़ी का लाजवाब मेल।",
        "historical_significance": "बागलकोट शहर का प्रतिष्ठित मिष्ठान केंद्र।",
        "architecture": "पारंपरिक स्वीट मार्ट।",
        "transport": "गांधी सर्कल के पास, बागलकोट।"
    },
    "ta": {
        "name": "மகாவீர் ஸ்வீட் மார்ட் & சூடான ஜிலேபி ரப்ரி",
        "taluk": "பாகல்கோட்டை",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "சுடச்சுட மொறுமொறுப்பான ஜிலேபி மற்றும் சுவையான ரப்ரி இனிப்பு.",
        "historical_significance": "நகரத்தின் பிரபலமான இனிப்பகம்.",
        "architecture": "பாரம்பரிய இனிப்பு கடை.",
        "transport": "காந்தி வட்டம் அருகில்."
    },
    "te": {
        "name": "మహావీర్ స్వీట్ మార్ట్ & వేడి జిలేబీ రబ్రీ కేంద్రం",
        "taluk": "బాగల్‌కోట్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "వేడి వేడి రసవంతమైన జిలేబీ మరియు చల్లని మలై రబ్రీ కలయిక.",
        "historical_significance": "నగరంలోని ప్రసిద్ధ స్వీట్ దుకాణం.",
        "architecture": "సాంప్రదాయ మిఠాయి కేంద్రం.",
        "transport": "గాంధీ సర్కిల్ వద్ద."
    },
    "mr": {
        "name": "महावीर स्वीट मार्ट आणि गरमागरम जिलेबी रबडी केंद्र",
        "taluk": "बागलकोट",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "गरमागरम रसरशीत जिलेबी आणि थंडगार मलाईदार रबडीचा आस्वाद.",
        "historical_significance": "बागलकोट शहरातील प्रसिद्ध मिष्टान्न केंद्र.",
        "architecture": "पारंपरिक मिठाई दुकान.",
        "transport": "गांधी सर्कलजवळ, बागलकोट."
    },
    "ml": {
        "name": "മഹാവീർ സ്വീറ്റ് മാർട്ട് & ചൂടുള്ള ജിലേബി റബ്ഡി",
        "taluk": "ബാഗൽകോട്ട്",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "ചൂടുള്ള ജിലേബിയും തണുത്ത മലായ് റബ്ഡിയും.",
        "historical_significance": "നഗരത്തിലെ പ്രശസ്തമായ മധുരപലഹാരക്കട.",
        "architecture": "സ്വീറ്റ് മാർട്ട്.",
        "transport": "ഗാന്ധി സർക്കിളിന് സമീപം."
    }
},

  dest_food_kardant_singi: {
    "en": {
        "name": "C.R. Singi & Sons — Original Amingad Kardant (Estd. 1907)",
        "taluk": "Hunagund",
        "category": "Local Food & Khanavalis",
        "description": "The historical birthplace of India's world-famous GI-tagged Amingad Kardant. Made with pure edible gum (dink), organic jaggery, dry dates, copra, almonds, cashews, and pure ghee.",
        "historical_significance": "Innovated in 1907 by Sri Chennappa Singi for wrestlers and travellers needing instant energy; patronized across India and abroad.",
        "architecture": "115+ year old heritage shop maintaining century-old manual copper stirring vats.",
        "transport": "NH-50 Main Bazar, Amingad (Hunagund Taluk)."
    },
    "kn": {
        "name": "ಸಿ.ಆರ್. ಸಿಂಗಿ & ಸನ್ಸ್ — ಮೂಲ ಅಮೀನಗಡ ಕರದಂಟು (ಸ್ಥಾಪನೆ ೧೯೦೭)",
        "taluk": "ಹುನಗುಂದ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ವಿಶ್ವಪ್ರಸಿದ್ಧ ಅಮೀನಗಡ ಕರದಂಟಿನ ಮೂಲ ಜನಕರು. ಶುದ್ಧ ಅಂಟಿನ ಗೋಂದು, ಜವಾರಿ ಬೆಲ್ಲ, ಬಾದಾಮಿ, ಗೋಡಂಬಿ, ಒಣದ್ರಾಕ್ಷಿ ಮತ್ತು ತುಪ್ಪದಿಂದ ತಯಾರಿಸಲಾಗುವ ಪೌಷ್ಟಿಕ ಸಿಹಿತಿನಿಸು.",
        "historical_significance": "೧೯೦೭ ರಲ್ಲಿ ಚೆನ್ನಪ್ಪ ಸಿಂಗಿಯವರಿಂದ ಕುಸ್ತಿ ಪಟುಗಳು ಮತ್ತು ಪ್ರಯಾಣಿಕರಿಗೆ ಶಕ್ತಿ ನೀಡಲು ಆವಿಷ್ಕಾರಗೊಂಡ ಜಿಐ ಮಾನ್ಯತೆಯ ಸಿಹಿತಿನಿಸು.",
        "architecture": "೧೧೫ ವರ್ಷಗಳಿಗೂ ಹಳೆಯದಾದ ಪರಂಪರೆಯ ಹೆರಿಟೇಜ್ ಸಿಹಿ ಅಂಗಡಿ.",
        "transport": "ಎನ್‌ಎಚ್-೫೦ ಮುಖ್ಯ ರಸ್ತೆ, ಅಮೀನಗಡ (ಹುನಗುಂದ ತಾಲೂಕು)."
    },
    "hi": {
        "name": "सी.आर. सिंगी एंड संस — मूल अमीनगढ़ करदंत (स्था. 1907)",
        "taluk": "हुनगुंड",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "विश्वप्रसिद्ध जीआई-टैग अमीनगढ़ करदंत का मूल जन्मस्थान। शुद्ध खाने योग्य गोंद, देसी गुड़, काजू, बादाम और शुद्ध घी से निर्मित अत्यधिक पौष्टिक मिठाई।",
        "historical_significance": "1907 में चेन्नप्पा सिंगी द्वारा पहलवानों एवं यात्रियों की ऊर्जा हेतु विकसित ऐतिहासिक मिष्ठान।",
        "architecture": "115 वर्ष से अधिक प्राचीन ऐतिहासिक प्रतिष्ठान।",
        "transport": "NH-50 मेन बाजार, अमीनगढ़ (हुनगुंड)।"
    },
    "ta": {
        "name": "சி.ஆர். சிங்கி & சன்ஸ் — அசல் அமின்காட் கர்தாந்த் (1907)",
        "taluk": "ஹுனகுந்த்",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "உலகப் புகழ்பெற்ற அமின்காட் கர்தாந்த் இனிப்பின் பிறப்பிடம். உலர் பருப்புகள், மூலிகை கோந்து மற்றும் வெல்லத்தால் செய்யப்பட்டது.",
        "historical_significance": "1907 இல் சென்னப்பா சிங்கியால் உருவாக்கப்பட்ட ஜிஐ முத்திரை பெற்ற பாரம்பரிய உணவு.",
        "architecture": "115 ஆண்டுகள் பழமையான பாரம்பரிய கடை.",
        "transport": "மெயின் பஜார், அமின்காட்."
    },
    "te": {
        "name": "సి.ఆర్. సింగీ & సన్స్ — అసలైన అమీన్‌గఢ్ కరదంట్ (1907)",
        "taluk": "హునగుండ్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "ప్రపంచ ప్రసిద్ధ అమీన్‌గఢ్ కరదంట్ మూల స్థానం. స్వచ్ఛమైన గోధుమ జిగురు, జీడిపప్పు, బాదం, బెల్లం మరియు నెయ్యితో చేసిన బలవర్ధకమైన మిఠాయి.",
        "historical_significance": "1907 లో చెన్నప్ప సింగీ ప్రారంభించిన ప్రఖ్యాత జిఐ ట్యాగ్ స్వీట్.",
        "architecture": "115 ఏళ్ల నాటి చారిత్రక షాప్.",
        "transport": "ఎన్‌హెచ్-50 మెయిన్ రోడ్, అమీన్‌గఢ్."
    },
    "mr": {
        "name": "सी.आर. शिंगी आणि सन्स — अस्सल अमिनगड करदंत (स्था. १९०७)",
        "taluk": "हुनगुंद",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "भारतात व जगात प्रसिद्ध असलेल्या जीआय-टॅग अमिनगड करदंतचे मूळ जन्मस्थान. शुद्ध डिंक, सेंद्रिय गूळ, सुकामेवा व साजूक तुपातील पौष्टिक गोड पदार्थ.",
        "historical_significance": "१९०७ मध्ये चेन्नप्पा शिंगी यांनी पैलवान व प्रवाशांसाठी तयार केलेली ऊर्जादायी मिठाई.",
        "architecture": "११५ वर्षांपेक्षा जुने ऐतिहासिक मिठाईचे दुकान.",
        "transport": "महामार्ग ५०, मेन बाजार, अमिनगड."
    },
    "ml": {
        "name": "സി.ആർ. സിംഗി & സൺസ് — അസൽ അമീൻഗഡ് കർദന്ത് (1907)",
        "taluk": "ഹുനഗുണ്ട്",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "ലോകപ്രശസ്തമായ അമീൻഗഡ് കർദന്തിന്റെ ജന്മസ്ഥലം. നട്ട്സും ശർക്കരയും നെയ്യും ചേർത്ത അത്ഭുത മധുരം.",
        "historical_significance": "1907 മുതൽ തുടരുന്ന വിഖ്യാത പാരമ്പര്യം.",
        "architecture": "നൂറ്റാണ്ട് പഴക്കമുള്ള കട.",
        "transport": "മെയിൻ ബസാർ, അമീൻഗഡ്."
    }
},

  dest_food_kardant_kamat: {
    "en": {
        "name": "C.S. Kamat Amingad Kardant & Sweets",
        "taluk": "Hunagund",
        "category": "Local Food & Khanavalis",
        "description": "Renowned traditional sweet-makers of Amingad famous for softer-texture organic Kardant, pistachio dry-fruit chikki, and pure ghee sweets.",
        "historical_significance": "Trusted purveyors of authentic Amingad confectionery for over 6 decades.",
        "architecture": "Modernized confectionery showroom with live packaging.",
        "transport": "Highway Junction, Amingad."
    },
    "kn": {
        "name": "ಸಿ.ಎಸ್. ಕಾಮತ್ ಅಮೀನಗಡ ಕರದಂಟು ಮತ್ತು ಸಿಹಿತಿನಿಸುಗಳು",
        "taluk": "ಹುನಗುಂದ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಮೃದುವಾದ ಸಾವಯವ ಕರದಂಟು, ಪಿಸ್ತಾ ಡ್ರೈಫ್ರೂಟ್ ಚಿಕ್ಕಿ ಮತ್ತು ಶುದ್ಧ ತುಪ್ಪದ ಸಿಹಿತಿನಿಸುಗಳಿಗೆ ಹೆಸರಾದ ಅಮೀನಗಡದ ಪ್ರಮುಖ ಮಳಿಗೆ.",
        "historical_significance": "೬ ದಶಕಗಳಿಂದ ಅಧಿಕೃತ ಅಮೀನಗಡ ಸಿಹಿ ಪರಂಪರೆಯನ್ನು ಉಳಿಸಿಕೊಂಡು ಬಂದಿರುವ ಸಂಸ್ಥೆ.",
        "architecture": "ಸುಸಜ್ಜಿತ ಹೆದ್ದಾರಿ ಸಿಹಿ ಮಳಿಗೆ.",
        "transport": "ಹೈವೇ ಜಂಕ್ಷನ್, ಅಮೀನಗಡ."
    },
    "hi": {
        "name": "सी.एस. कामत अमीनगढ़ करदंत एवं मिष्ठान",
        "taluk": "हुनगुंड",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "मुलायम ऑर्गेनिक करदंत, ड्राईफ्रूट चिक्की और शुद्ध घी की मिठाइयों के लिए प्रसिद्ध अमीनगढ़ का प्रमुख मिष्ठान भंडार।",
        "historical_significance": "6 दशकों से शुद्धता और प्रामाणिक स्वाद की पहचान।",
        "architecture": "आधुनिक सुविधाओं युक्त शोरूम।",
        "transport": "हाईवे जंक्शन, अमीनगढ़।"
    },
    "ta": {
        "name": "சி.எஸ். காமத் அமின்காட் கர்தாந்த் & இனிப்புகள்",
        "taluk": "ஹுனகுந்த்",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "மென்மையான இயற்கை கர்தாந்த் மற்றும் உலர் பழ இனிப்புகள்.",
        "historical_significance": "60 ஆண்டுகளுக்கும் மேலாக புகழ்பெற்ற பாரம்பரிய இனிப்பகம்.",
        "architecture": "நவீன இனிப்பகம்.",
        "transport": "நெடுஞ்சாலை சந்திப்பு, அமின்காட்."
    },
    "te": {
        "name": "సి.ఎస్. కామత్ అమీన్‌గఢ్ కరదంట్ & స్వీట్స్",
        "taluk": "హునగుండ్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "మృదువైన సేంద్రీయ కరదంట్, డ్రైఫ్రూట్ చిక్కీలకు ప్రసిద్ధి చెందిన స్వీట్ సెంటర్.",
        "historical_significance": "60 సంవత్సరాల నమ్మకమైన రుచి మరియు నాణ్యత.",
        "architecture": "హైవే షోరూమ్.",
        "transport": "హైవే జంక్షన్, అమీన్‌గఢ్."
    },
    "mr": {
        "name": "सी.एस. कामत अमिनगड करदंत व मिठाई",
        "taluk": "हुनगुंद",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "मऊ सेंद्रिय करदंत, ड्रायफ्रूट चिक्की व साजूक तुपातील रुचकर मिठाया.",
        "historical_significance": "६ दशकांपासून अमिनगडच्या अस्सल चवीचे मानकरी.",
        "architecture": "सुसज्ज मिठाई दालन.",
        "transport": "हायवे जंक्शन, अमिनगड."
    },
    "ml": {
        "name": "സി.എസ്. കാമത്ത് അമീൻഗഡ് കർദന്ത് & സ്വീറ്റ്സ്",
        "taluk": "ഹുനഗുണ്ട്",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "പ്രത്യേക തരം സോഫ്റ്റ് കർദന്തും ഡ്രൈഫ്രൂട്ട് സ്വീറ്റ്സും.",
        "historical_significance": "ആറ് പതിറ്റാണ്ടിന്റെ ഗുണമേന്മ.",
        "architecture": "ആധുനിക സ്വീറ്റ് ഷോറൂം.",
        "transport": "ഹൈവേ ജംഗ്ഷൻ, അമീൻഗഡ്."
    }
},

  dest_food_holige_ilkal: {
    "en": {
        "name": "Mahalakshmi Shenga & Bella Holige Mane",
        "taluk": "Ilkal",
        "category": "Local Food & Khanavalis",
        "description": "Artisanal bakery crafting gossamer-thin roasted peanut (Shenga) and jaggery stuffed flatbreads (Holige) served drenched in warm milk and cardamom ghee.",
        "historical_significance": "Traditional festive sweet bread intrinsic to North Karnataka celebratory culture.",
        "architecture": "Homely artisanal production unit where expert women roll thin pastry sheets.",
        "transport": "Weavers Colony, Ilkal."
    },
    "kn": {
        "name": "ಮಹಾಲಕ್ಷ್ಮಿ ಶೇಂಗಾ & ಬೆಲ್ಲದ ಹೋಳಿಗೆ ಮನೆ",
        "taluk": "ಇಳಕಲ್",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಬಿಸಿ ಬಿಸಿ ಶೇಂಗಾ ಹೋಳಿಗೆ, ಬೆಲ್ಲದ ಹೂರಣದ ಹೋಳಿಗೆ, ತುಪ್ಪ ಮತ್ತು ಬಿಸಿ ಹಾಲಿನೊಂದಿಗೆ ಸವಿಯುವ ಅಪ್ಪಟ ಉತ್ತರ ಕರ್ನಾಟಕದ ಹಬ್ಬದ ಸಿಹಿ.",
        "historical_significance": "ಉತ್ತರ ಕರ್ನಾಟಕದ ಮನೆ-ಮನೆಗಳಲ್ಲಿ ಹಬ್ಬ-ಹರಿದಿನಗಳಿಗೆ ಸಿದ್ಧಪಡಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಸಿಹಿ ತಿನಿಸು.",
        "architecture": "ಮನೆಯಂಗಳದ ಸಾಂಪ್ರದಾಯಿಕ ಹೋಳಿಗೆ ತಯಾರಿಕಾ ಕೇಂದ್ರ.",
        "transport": "ನೇಕಾರರ ಕಾಲೋನಿ, ಇಳಕಲ್."
    },
    "hi": {
        "name": "महालक्ष्मी शेंगा (मूंगफली) एवं गुड़ होलिगे गृह",
        "taluk": "इलकल",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "मूंगफली और गुड़ के मिश्रण से बनी अत्यंत पतली मीठी रोटी (होलिगे/पूरनपोली), जिसे गरमा-गरम दूध और घी के साथ परोसा जाता है।",
        "historical_significance": "उत्तर कर्नाटक का पारंपरिक उत्सव मिष्ठान।",
        "architecture": "पारंपरिक पारिवारिक होलिगे निर्माण केंद्र।",
        "transport": "वीवर्स कॉलोनी, इलकल।"
    },
    "ta": {
        "name": "மகாலட்சுமி நிலக்கடலை & வெல்லம் ஹோலிகே",
        "taluk": "இளக்கல்",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "நிலக்கடலை மற்றும் வெல்ல பூரணம் கொண்ட மெல்லிய ஹோலிகே (போளி) இனிப்பு.",
        "historical_significance": "கர்நாடக பண்டிகைகளில் செய்யப்படும் பிரதான பாரம்பரிய உணவு.",
        "architecture": "பாரம்பரிய தயாரிப்பகம்.",
        "transport": "நெசவாளர் குடியிருப்பு, இளக்கல்."
    },
    "te": {
        "name": "మహాలక్ష్మి వేరుశెనగ & బెల్లం బొబ్బట్లు (హోళిగె)",
        "taluk": "ఇల్కల్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "పల్లీలు మరియు బెల్లం పూర్ణంతో చేసిన అత్యంత రుచికరమైన సాంప్రదాయ బొబ్బట్లు (హోళిగె).",
        "historical_significance": "పండుగల వేళ చేసుకొనే కర్ణాటక ప్రాచీన మిఠాయి.",
        "architecture": "కుటీర పరిశ్రమ శైలి తయారీ కేంద్రం.",
        "transport": "వీవర్స్ కాలనీ, ఇల్కల్."
    },
    "mr": {
        "name": "महालक्ष्मी शेंगदाणा व गूळ पोळी केंद्र",
        "taluk": "इळकल",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "शेंगदाणा आणि गुळाचे सारण भरलेली तलम शेंगदाणा पोळी, साजूक तूप आणि दुधासह अप्रतिम मेजवानी.",
        "historical_significance": "उत्तर कर्नाटकातील सण-उत्सवांची पारंपारिक गोड पुरणपोळी.",
        "architecture": "घरगुती पारंपरिक पोळी केंद्र.",
        "transport": "विणकर वसाहत, इळकल."
    },
    "ml": {
        "name": "മഹാലക്ഷ്മി നിലക്കടല & ശർക്കര ഹോളിഗെ",
        "taluk": "ഇൽകൽ",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "നിലക്കടലയും ശർക്കരയും ചേർത്ത നേർത്ത ഹോളിഗെ മധുര റൊട്ടി.",
        "historical_significance": "ഉത്സവങ്ങളിലെ പരമ്പരാഗത വിഭവം.",
        "architecture": "ഹോം മെയ്ഡ് യൂണിറ്റ്.",
        "transport": "വീവേഴ്സ് കോളനി, ഇൽകൽ."
    }
},

  dest_food_holige_guledgudd: {
    "en": {
        "name": "Guledagudda Shri Annapoorna Shenga Holige & Chutney Kendra",
        "taluk": "Guledagudda",
        "category": "Local Food & Khanavalis",
        "description": "Renowned local specialty house preparing wafer-crisp dried Shenga Holige (shelf life over 3 months) alongside dry garlic chutney powders.",
        "historical_significance": "Developed by weavers who travelled long distances carrying non-perishable nutritious food packs.",
        "architecture": "Rustic artisan kitchen in the historic Khana handloom cluster.",
        "transport": "Main Road, Guledagudda."
    },
    "kn": {
        "name": "ಗುಳೇದಗುಡ್ಡ ಶ್ರೀ ಅನ್ನಪೂರ್ಣ ಶೇಂಗಾ ಹೋಳಿಗೆ ಮತ್ತು ಚಟ್ನಿಪುಡಿ ಕೇಂದ್ರ",
        "taluk": "ಗುಳೇದಗುಡ್ಡ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ತಿಂಗಳುಗಟ್ಟಲೆ ಕೆಡದ ಗರಿಗರಿ ಒಣ ಶೇಂಗಾ ಹೋಳಿಗೆ, ಅಗಸೆ ಚಟ್ನಿಪುಡಿ ಮತ್ತು ಕೆಂಪು ಖಾರದ ಪುಡಿಗೆ ಗುಳೇದಗುಡ್ಡದ ಖ್ಯಾತ ಕೇಂದ್ರ.",
        "historical_significance": "ದೂರದ ಊರುಗಳಿಗೆ ವ್ಯಾಪಾರಕ್ಕೆ ಹೋಗುತ್ತಿದ್ದ ನೇಕಾರರು ಕೊಂಡೊಯ್ಯುತ್ತಿದ್ದ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ.",
        "architecture": "ಪಾರಂಪರಿಕ ನೇಕಾರರ ಪೇಟೆಯ ಆಹಾರ ಕೇಂದ್ರ.",
        "transport": "ಮುಖ್ಯ ರಸ್ತೆ, ಗುಳೇದಗುಡ್ಡ."
    },
    "hi": {
        "name": "गुलेदगुड्डा श्री अन्नपूर्णा शेंगा होलिगे एवं चटनी केंद्र",
        "taluk": "गुलेदगुड्डा",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "लंबे समय तक ताज़ा रहने वाली कुरकुरी सूखी शेंगा होलिगे और तीखी लहसुन-अलसी चटनी के लिए प्रसिद्ध केंद्र।",
        "historical_significance": "विणकर व्यापारियों की दूरगामी यात्राओं का पौष्टिक सहारा।",
        "architecture": "हथकरघा क्लस्टर में स्थित पारंपरिक रसोई।",
        "transport": "मेन रोड, गुलेदगुड्डा।"
    },
    "ta": {
        "name": "குலேதகுட்டா ஸ்ரீ அன்னபூர்ணா ஹோலிகே & சட்னி மையம்",
        "taluk": "குலேதகுட்டா",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "நீண்ட நாட்கள் கெடாத உலர் நிலக்கடலை ஹோலிகே மற்றும் சட்னி பொடிகள்.",
        "historical_significance": "நெசவாளர் சமூகத்தின் பாரம்பரிய உணவு தயாரிப்பு.",
        "architecture": "பாரம்பரிய தயாரிப்பு கூடம்.",
        "transport": "மெயின் ரோடு, குலேதகுட்டா."
    },
    "te": {
        "name": "గులేదగుడ్డ శ్రీ అన్నపూర్ణ శెనగ హోళిగె & చట్నీ కేంద్రం",
        "taluk": "గులేదగుడ్డ",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "ఎక్కువ కాలం నిల్వ ఉండే డ్రై శెనగ హోళిగెలు మరియు కారపు చట్నీ పొడులు.",
        "historical_significance": "నేత కార్మికుల ప్రాచీన పౌష్టిక ఆహార నిలయం.",
        "architecture": "గ్రామీణ తయారీ కేంద్రం.",
        "transport": "మెయిన్ రోడ్, గులేదగుడ్డ."
    },
    "mr": {
        "name": "गुळेदगुड्डा श्री अन्नपूर्णा शेंगदाणा पोळी व चटणी केंद्र",
        "taluk": "गुळेदगुड्डा",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "अनेक महिने टिकणारी कुरकुरीत सुकी शेंगदाणा पोळी, जवस चटणी व लसूण चटणी.",
        "historical_significance": "दूरवर प्रवास करणाऱ्या विणकर बंधूंचे पारंपारिक शिदोरी खाद्य.",
        "architecture": "हातमाग क्लस्टरमधील पारंपरिक केंद्र.",
        "transport": "मेन रोड, गुळेदगुड्डा."
    },
    "ml": {
        "name": "ഗുലേദഗുഡ്ഡ ശ്രീ അന്നപൂർണ്ണ ഹോളിഗെ & ചട്ണി കേന്ദ്രം",
        "taluk": "ഗുലേദഗുഡ്ഡ",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "ഏറെ നാൾ കേടുകൂടാതെയിരിക്കുന്ന ഡ്രൈ ഹോളിഗെയും ചട്ണി പൊടികളും.",
        "historical_significance": "നെയ്ത്തുകാരുടെ പരമ്പരാഗത യാത്ര ഭക്ഷണം.",
        "architecture": "പരമ്പരാഗത അടുക്കള.",
        "transport": "മെയിൻ റോഡ്, ഗുലേദഗുഡ്ഡ."
    }
},

  dest_food_jhunka_mudhol: {
    "en": {
        "name": "Mudhol Famous Jhunka Bhakar & Shenga Chutney Mane",
        "taluk": "Mudhol",
        "category": "Local Food & Khanavalis",
        "description": "Rustic country meal featuring spiced gram-flour porridge (Jhunka) cooked with onions, mustard seeds, and coriander, served with thick bajra/jowar bhakri and roasted peanut garlic chutney.",
        "historical_significance": "Royal cavalry and peasant field sustenance during the Ghorpade Maratha rule in Mudhol.",
        "architecture": "Traditional stone veranda village eatery.",
        "transport": "Near Mudhol Fort Gate, Mudhol."
    },
    "kn": {
        "name": "ಮುಧೋಳ ಫೇಮಸ್ ಜುಣಕ ಭಾಕ್ರಿ ಮತ್ತು ಶೇಂಗಾ ಚಟ್ನಿ ಮನೆ",
        "taluk": "ಮುಧೋಳ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಬಿಸಿ ಬಿಸಿ ಜುಣಕ, ಗಟ್ಟಿಯಾದ ರೊಟ್ಟಿ/ಭಾಕ್ರಿ, ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ ಖಾರ ಮತ್ತು ಶೇಂಗಾ ಚಟ್ನಿಯೊಂದಿಗೆ ಗ್ರಾಮೀಣ ಶೈಲಿಯ ಸ್ವಾದಿಷ್ಟ ಊಟ.",
        "historical_significance": "ಘೋರ್ಪಡೆ ಮರಾಠಾ ಆಳ್ವಿಕೆಯ ಕಾಲದಿಂದಲೂ ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಸೈನಿಕರು ಮತ್ತು ರೈತರ ಪೌಷ್ಟಿಕ ಆಹಾರ.",
        "architecture": "ಕಲ್ಲಿನ ಜಗಲಿಯ ಸಾಂಪ್ರದಾಯಿಕ ಗ್ರಾಮೀಣ ಹೋಟೆಲ್.",
        "transport": "ಮುಧೋಳ ಕೋಟೆ ದ್ವಾರದ ಬಳಿ."
    },
    "hi": {
        "name": "मुधोल प्रसिद्ध झुनका भाकर एवं शेंगा चटनी गृह",
        "taluk": "मुधोल",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "बेसन से निर्मित पारंपरिक तीखा झुनका, मोटी ज्वार/बाजरा भाकरी और भुनी मूंगफली-लहसुन की चटनी।",
        "historical_significance": "घोरपड़े मराठा काल के सैनिकों एवं किसानों का पारंपरिक बलवर्धक भोजन।",
        "architecture": "ग्रामीण शैली की पारंपरिक खानावळ।",
        "transport": "मुधोल किला गेट के पास।"
    },
    "ta": {
        "name": "முதோல் புகழ் பெற்ற ஜுன்கா பாக்கரி & சட்னி",
        "taluk": "முதோல்",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "சுவையான கடலை மாவு ஜுன்கா, சோள பாக்கரி மற்றும் நிலக்கடலை சட்னி உணவு.",
        "historical_significance": "மராட்டியர் ஆட்சிக் கால பாரம்பரிய உணவு.",
        "architecture": "கிராமிய உணவு விடுதி.",
        "transport": "முதோல் கோட்டை அருகில்."
    },
    "te": {
        "name": "ముధోల్ ప్రసిద్ధ జున్కా భాకర్ & శెనగ చట్నీ నిలయం",
        "taluk": "ముధోల్",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "శనగపిండితో చేసే ఘుమఘుమలాడే జున్కా, జొన్న రొట్టె మరియు వేరుశెనగ చట్నీ.",
        "historical_significance": "ఘోర్పడే మరాఠా కాలపు సైనిక మరియు రైతుల బలమైన ఆహారం.",
        "architecture": "గ్రామీణ శైలి భోజనశాల.",
        "transport": "ముధోల్ కోట గేటు వద్ద."
    },
    "mr": {
        "name": "मुधोळ प्रसिद्ध झुणका भाकर आणि शेंगदाणा चटणी",
        "taluk": "मुधोळ",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "चमचमीत पिठलं-झुणका, खरपूस बाजरी-ज्वारीची भाकरी आणि खमंग शेंगदाणा-लसूण चटणी.",
        "historical_significance": "घोरपडे मराठा रियासतीच्या काळातील वीर सैनिकांचे व शेतकऱ्यांचे मुख्य अन्न.",
        "architecture": "दगडी ओट्यावरील पारंपारिक खानावळ.",
        "transport": "मुधोळ किल्ला दरवाजाजवळ."
    },
    "ml": {
        "name": "മുധോൾ ഫേമസ് ജുൻക ഭാക്കർ & നിലക്കടല ചട്ണി",
        "taluk": "മുധോൾ",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "പരമ്പരാഗത ജുൻകയും കട്ടിയുള്ള ബാക്കറിയും നിലക്കടല ചട്ണിയും.",
        "historical_significance": "ചരിത്രപ്രസിദ്ധമായ നാടൻ ഭക്ഷണം.",
        "architecture": "ഗ്രാമീണ ഭക്ഷണശാല.",
        "transport": "മുധോൾ കോട്ടയ്ക്ക് സമീപം."
    }
},

  dest_food_peda_jamkhandi: {
    "en": {
        "name": "Ramtirth Ksheera Peda & Basundi Sweets",
        "taluk": "Jamkhandi",
        "category": "Local Food & Khanavalis",
        "description": "Royal dairy confectionery preparing rich, caramelized milk fudge Pedas using traditional slow-condensed milk from Krishna river valley buffaloes.",
        "historical_significance": "Patronized by the Patwardhan Maharajas of Jamkhandi state as royal durbari prasad.",
        "architecture": "Palatial-era confectionery near the scenic Ramtirth temples.",
        "transport": "Ramtirth Temple Road, Jamkhandi."
    },
    "kn": {
        "name": "ರಾಮತೀರ್ಥ ಕ್ಷೀರ ಪೇಡಾ ಮತ್ತು ಬಾಸುಂದಿ ಸ್ವೀಟ್ಸ್",
        "taluk": "ಜಮಖಂಡಿ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಕೃಷ್ಣಾ ಕಣಿವೆಯ ಗಟ್ಟಿ ಹಾಲಿನಿಂದ ಮಂದವಾಗಿ ಕಾಯಿಸಿ ತಯಾರಿಸುವ ಅಪ್ಪಟ ಕ್ಷೀರ ಪೇಡಾ ಮತ್ತು ರಾಯಲ್ ಬಾಸುಂದಿ.",
        "historical_significance": "ಜಮಖಂಡಿ ಸಂಸ್ಥಾನದ ಪಟವರ್ಧನ್ ಮಹಾರಾಜರ ಆಸ್ಥಾನದಲ್ಲಿ ಪ್ರಸಾದವಾಗಿ ಗೌರವಿಸಲ್ಪಟ್ಟ ಸಿಹಿತಿನಿಸು.",
        "architecture": "ರಾಮತೀರ್ಥ ದೇವಾಲಯ ಸಮೀಪದ ಪರಂಪರೆಯ ಸಿಹಿ ಅಂಗಡಿ.",
        "transport": "ರಾಮತೀರ್ಥ ರಸ್ತೆ, ಜಮಖಂಡಿ."
    },
    "hi": {
        "name": "रामतीर्थ क्षीर पेड़ा एवं बासुंदी मिष्ठान",
        "taluk": "जमखंडी",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "कृष्णा घाटी के शुद्ध दूध से धीमी आंच पर पकाकर निर्मित लाजवाब क्षीर पेड़ा एवं शाही बासुंदी।",
        "historical_significance": "जमखंडी रियासत के पटवर्धन राजाओं द्वारा संरक्षित ऐतिहासिक शाही मिष्ठान।",
        "architecture": "रामतीर्थ मंदिर के समीप स्थित प्रतिष्ठित मिष्ठान भंडार।",
        "transport": "रामतीर्थ रोड, जमखंडी।"
    },
    "ta": {
        "name": "ராமதீர்த்தம் பால் பேடா மற்றும் பாசுந்தி",
        "taluk": "ஜம்கண்டி",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "சுத்தமான பாலில் மெதுவாக காய்ச்சி செய்யப்படும் சுவையான பால் பேடா மற்றும் பாசுந்தி.",
        "historical_significance": "ஜம்கண்டி சமஸ்தான மன்னர்களின் அரச இனிப்பு.",
        "architecture": "பாரம்பரிய இனிப்பகம்.",
        "transport": "ராமதீர்த்தம் ரோடு, ஜம்கண்டி."
    },
    "te": {
        "name": "రామతీర్థ క్షీర పేడా & బాసుంది స్వీట్స్",
        "taluk": "జంఖండి",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "కృష్ణా నదీ లోయలోని స్వచ్ఛమైన పాలతో చేసే రుచికరమైన క్షీర పేడా మరియు బాసుంది.",
        "historical_significance": "జంఖండి పట్వర్ధన్ రాజుల కాలం నాటి రాచరిక మిఠాయి.",
        "architecture": "చారిత్రక స్వీట్ సెంటర్.",
        "transport": "రామతీర్థ రోడ్, జంఖండి."
    },
    "mr": {
        "name": "रामतीर्थ खवा पेढा आणि बासुंदी मिठाई",
        "taluk": "जमखंडी",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "कृष्णा खोऱ्यातील अस्सल दुधाचा मंद आचेवर आटवलेला खमंग पेढा आणि शाही बासुंदी.",
        "historical_significance": "जमखंडी संस्थानातील पटवर्धन महाराजांच्या दरबारात मानाचे स्थान असलेला गोड पदार्थ.",
        "architecture": "रामतीर्थ परिसरातील पारंपरिक मिठाई दुकान.",
        "transport": "रामतीर्थ रोड, जमखंडी."
    },
    "ml": {
        "name": "രാമതീർത്ഥ പാൽ പേഡ & ബാസുന്ദി സ്വീറ്റ്സ്",
        "taluk": "ജംഖണ്ഡി",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "ശുദ്ധമായ പാൽ കുറുക്കി ഉണ്ടാക്കുന്ന രുചികരമായ പേഡയും ബാസുന്ദിയും.",
        "historical_significance": "രാജഭരണ കാലത്തെ പാരമ്പര്യ മധുരം.",
        "architecture": "പാരമ്പര്യ സ്വീറ്റ് ഷോപ്പ്.",
        "transport": "രാമതീർത്ഥ റോഡ്, ജംഖണ്ഡി."
    }
},

  dest_food_galgali_bilagi: {
    "en": {
        "name": "Original Galgali Peda Heritage Dairy & Sweet Stall",
        "taluk": "Bilagi",
        "category": "Local Food & Khanavalis",
        "description": "The authentic ancestral source of the iconic brown Galgali Peda, crafted exclusively in Galgali village using unpasteurized buffalo milk reduced over acacia firewood.",
        "historical_significance": "Over 130 years of uninterrupted single-village artisanal sweet heritage on the Krishna riverbank.",
        "architecture": "Village dairy sweet store with traditional wood-fired chulhas.",
        "transport": "Galgali Village Main Chowk, Bilagi Taluk."
    },
    "kn": {
        "name": "ಮೂಲ ಗಲಗಲಿ ಪೇಡಾ ಹೆರಿಟೇಜ್ ಡೇರಿ ಮತ್ತು ಸ್ವೀಟ್ ಸ್ಟಾಲ್",
        "taluk": "ಬೀಳಗಿ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ಕೃಷ್ಣಾ ನದಿತೀರದ ಗಲಗಲಿ ಗ್ರಾಮದಲ್ಲಿ ಕಟ್ಟಿಗೆಯ ಒಲೆಯಲ್ಲಿ ಹಾಲನ್ನು ಕಾಯಿಸಿ ತಯಾರಿಸುವ ವಿಶ್ವಖ್ಯಾತಿಯ ಬ್ರೌನ್ ಗಲಗಲಿ ಪೇಡಾ.",
        "historical_significance": "೧೩೦ ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲದಿಂದ ತನ್ನ ಮೂಲ ರುಚಿ ಮತ್ತು ಗುಣಮಟ್ಟವನ್ನು ಉಳಿಸಿಕೊಂಡಿರುವ ಪಾರಂಪರಿಕ ಸಿಹಿ.",
        "architecture": "ಕಟ್ಟಿಗೆ ಒಲೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಗ್ರಾಮೀಣ ಡೇರಿ ಮಳಿಗೆ.",
        "transport": "ಗಲಗಲಿ ಗ್ರಾಮ, ಬೀಳಗಿ ತಾಲೂಕು."
    },
    "hi": {
        "name": "ओरिजिनल गलगली पेड़ा हेरिटेज डेयरी एवं स्वीट स्टॉल",
        "taluk": "बीलगी",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "गलगली गांव का विश्वविख्यात गहरा भूरा पेड़ा, जिसे लकड़ी की धीमी आंच पर दूध को घंटों काढ़कर शुद्ध रूप से बनाया जाता है।",
        "historical_significance": "130 से अधिक वर्षों की अविच्छिन्न पारंपरिक मिष्ठान धरोहर।",
        "architecture": "पारंपरिक चूल्हे वाली ग्रामीण डेयरी दुकान।",
        "transport": "गलगली गांव मुख्य चौक, बीलगी।"
    },
    "ta": {
        "name": "அசல் கல்கலி பேடா பாரம்பரிய இனிப்பகம்",
        "taluk": "பீலகி",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "கல்கலி கிராமத்தின் புகழ்பெற்ற பழுப்பு நிற பால்கோவா பேடா.",
        "historical_significance": "130 ஆண்டுகள் பழமையான கிராமிய இனிப்பு பாரம்பரியம்.",
        "architecture": "பாரம்பரிய பால் பண்ணை கடை.",
        "transport": "கல்கலி கிராமம், பீலகி."
    },
    "te": {
        "name": "ఒరిజినల్ గల్గలీ పేడా హెరిటేజ్ డైరీ & స్వీట్స్",
        "taluk": "బీళగి",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "గల్గలీ గ్రామంలో కట్టెల పొయ్యిపై పాలను మరిగించి చేసే ప్రసిద్ధ బ్రౌన్ గల్గలీ పేడా.",
        "historical_significance": "130 ఏళ్లకు పైగా చరిత్ర ఉన్న అరుదైన సాంప్రదాయ తీపి వంటకం.",
        "architecture": "గ్రామీణ డెయిరీ స్టాల్.",
        "transport": "గల్గలీ గ్రామం, బీళగి తాలూకా."
    },
    "mr": {
        "name": "ओरिजिनल गलगली पेढा हेरिटेज डेअरी व स्वीट स्टॉल",
        "taluk": "बिलगी",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "गलगली गावातील लाकडाच्या चुलीवर दूध आटवून तयार केलेला जगप्रसिद्ध तांबूस-तपकिरी रंगाचा अस्सल खवा पेढा.",
        "historical_significance": "१३० वर्षांची समृद्ध व अखंड परंपरा असलेले अस्सल ग्रामीण मिष्ठान्न.",
        "architecture": "पारंपरिक चुलीवर तयार होणारे डेअरी दालन.",
        "transport": "गलगली गाव चौक, बिलगी तालुका."
    },
    "ml": {
        "name": "ഒറിജിനൽ ഗൽഗലി പേഡ ഹെറിറ്റേജ് ഡയറി & സ്വീറ്റ്സ്",
        "taluk": "ബിലഗി",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "വിറകടുപ്പിൽ പാൽ കുറുക്കി ഉണ്ടാക്കുന്ന പരമ്പരാഗത തവിട്ടുനിറത്തിലുള്ള ഗൽഗലി പേഡ.",
        "historical_significance": "130 വർഷത്തിലേറെ പഴക്കമുള്ള പാരമ്പര്യം.",
        "architecture": "നാടൻ ഡയറി സ്വീറ്റ് സ്റ്റാൾ.",
        "transport": "ഗൽഗലി വില്ലേജ്, ബിലഗി."
    }
},

  dest_food_savaji_bilagi: {
    "en": {
        "name": "Maratha Savaji Mutton & Chicken Special Mess",
        "taluk": "Bilagi",
        "category": "Local Food & Khanavalis",
        "description": "Renowned highway destination for authentic fiery Savaji cuisine, cooked with traditional 32-spice masala blend, black stone flower, and tender country goat meat.",
        "historical_significance": "Longstanding family recipes passed down across warrior-chef lineages.",
        "architecture": "Rustic wayside restaurant with outdoor and family seating.",
        "transport": "Bilagi-Bagalkote Highway cross."
    },
    "kn": {
        "name": "ಮರಾಠಾ ಸವಜಿ ಮಟನ್ & ಚಿಕನ್ ಸ್ಪೆಷಲ್ ಮೆಸ್",
        "taluk": "ಬೀಳಗಿ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "೩೨ ವಿಧದ ಸಾಂಬಾರ ಪದಾರ್ಥಗಳ ಮಸಾಲೆಯೊಂದಿಗೆ ತಯಾರಿಸುವ ಅಪ್ಪಟ ಮರಾಠಾ ಸವಜಿ ಮಟನ್, ಖಾರಾ ರಸ್ಸಾ ಮತ್ತು ಬಿಳಿ ಜೋಳದ ರೊಟ್ಟಿ.",
        "historical_significance": "ಸವಜಿ ಯೋಧ-ಬಾಣಸಿಗರ ಪರಂಪರೆಯ ವಿಶಿಷ್ಟ ಖಾರದ ಪಾಕವಿಧಾನ.",
        "architecture": "ಹೆದ್ದಾರಿಯ ಜನಪ್ರಿಯ ಸವಜಿ ಊಟದ ಮೆಸ್.",
        "transport": "ಬೀಳಗಿ-ಬಾಗಲಕೋಟೆ ಹೆದ್ದಾರಿ ಕ್ರಾಸ್."
    },
    "hi": {
        "name": "मराठा सावजी मटन एवं चिकन स्पेशल मेस",
        "taluk": "बीलगी",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "32 गुप्त मसालों के मिश्रण से तैयार होने वाला बेहद लज़ीज़ और तीखा सावजी मटन, खारा रस्सा और ताज़ा रोटियां।",
        "historical_significance": "पारंपरिक मराठा-सावजी योद्धा पाककला का बेमिसाल उदाहरण।",
        "architecture": "राजमार्ग पर स्थित लोकप्रिय भोजन भोजनालय।",
        "transport": "बीलगी-बागलकोट हाईवे क्रॉस।"
    },
    "ta": {
        "name": "மராத்தா சவாஜி மட்டன் & சிக்கன் ஸ்பெஷல் மெஸ்",
        "taluk": "பீலகி",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "32 மசாலாக்கள் சேர்த்து சமைக்கப்படும் காரசாரமான சவாஜி மட்டன் மற்றும் ரொட்டி.",
        "historical_significance": "பாரம்பரிய சவாஜி சமையல் கலை.",
        "architecture": "நெடுஞ்சாலை உணவு விடுதி.",
        "transport": "பீலகி-பாகல்கோட்டை நெடுஞ்சாலை சந்திப்பு."
    },
    "te": {
        "name": "మరాఠా సావజీ మటన్ & చికెన్ స్పెషల్ మెస్",
        "taluk": "బీళగి",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "32 రకాల సుగంధ ద్రవ్యాలతో చేసే ఘాటైన సావజీ మటన్ మరియు జొన్న రొట్టెల విందు.",
        "historical_significance": "మరాఠా సావజీ యోధుల చారిత్రక ఘాటైన వంటకం.",
        "architecture": "హైవే స్పెషల్ మెస్.",
        "transport": "బీళగి-బాగల్‌కోట్ హైవే."
    },
    "mr": {
        "name": "मराठा सावजी मटन व चिकन स्पेशल मेस",
        "taluk": "बिलगी",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "३२ मसाल्यांच्या गुप्त मिश्रणातून तयार होणारे झणझणीत मराठा सावजी मटन, काळा रस्सा आणि कडक भाकरी.",
        "historical_significance": "सावजी पाककलेची समृद्ध व ज्वलंत परंपरा जोपासणारे लोकप्रिय ठिकाण.",
        "architecture": "महामार्गावरील अस्सल खानावळ.",
        "transport": "बिलगी-बागलकोट हायवे क्रॉस."
    },
    "ml": {
        "name": "മറാഠാ സാവജി മട്ടൻ & ചിക്കൻ സ്പെഷ്യൽ മെസ്സ്",
        "taluk": "ബിലഗി",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "32 മസാലക്കൂട്ടുകൾ ചേർത്ത സ്വാദിഷ്ടമായ സാവജി മട്ടനും റൊട്ടിയും.",
        "historical_significance": "പാരമ്പര്യ സ്പൈസി മിലിറ്ററി രുചിക്കൂട്ട്.",
        "architecture": "ഹൈവേ ഭക്ഷണശാല.",
        "transport": "ബിലഗി-ബാഗൽകോട്ട് ഹൈവേ."
    }
},

  dest_food_girmit_banhatti: {
    "en": {
        "name": "Shri Guru Krupa Girmit, Mirchi & Kharada Mandakki Stall",
        "taluk": "Banhatti",
        "category": "Local Food & Khanavalis",
        "description": "Legendary weaving town snack joint serving authentic North Karnataka spicy Girmit, crunchy Mirchi Bajji, and fiery garlic roasted puffed rice (Kharada Mandakki).",
        "historical_significance": "Energy-giving evening refreshment for powerloom and handloom weavers returning from shifts.",
        "architecture": "Vibrant street cafe right in the textile bazaar.",
        "transport": "Weavers Market, Rabkavi Banhatti."
    },
    "kn": {
        "name": "ಶ್ರೀ ಗುರು ಕೃಪಾ ಗಿರ್ಮಿಟ್, ಮಿರ್ಚಿ ಮತ್ತು ಖಾರದ ಮಂಡಕ್ಕಿ ಸ್ಟಾಲ್",
        "taluk": "ಬನಹಟ್ಟಿ",
        "category": "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
        "description": "ನೇಕಾರರ ನಗರವಾದ ಬನಹಟ್ಟಿಯ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಖಾರ ಗಿರ್ಮಿಟ್, ಬಿಸಿ ಮಿರ್ಚಿ ಬಜ್ಜಿ ಮತ್ತು ಗರಿಗರಿ ಖಾರದ ಮಂಡಕ್ಕಿ.",
        "historical_significance": "ಕೈಮಗ್ಗ ಹಾಗೂ ವಿದ್ಯುತ್ ಮಗ್ಗದ ಕಾರ್ಮಿಕರ ಮತ್ತು ಸ್ಥಳೀಯರ ಸಂಜೆಯ ನೆಚ್ಚಿನ ಪೌಷ್ಟಿಕ ತಿನಿಸು.",
        "architecture": "ಜವಳಿ ಮಾರುಕಟ್ಟೆಯ ಜೀವಂತ ತಿಂಡಿ ಕೇಂದ್ರ.",
        "transport": "ನೇಕಾರರ ಮಾರುಕಟ್ಟೆ, ರಬಕವಿ ಬನಹಟ್ಟಿ."
    },
    "hi": {
        "name": "श्री गुरु कृपा गिरमिट, मिर्ची एवं तीखी मंडक्की स्टॉल",
        "taluk": "बनहट्टी",
        "category": "स्थानीय भोजन एवं खानावलि",
        "description": "बुनकर नगरी बनहट्टी का सबसे लोकप्रिय गिरमिट, कुरकुरी मिर्ची भज्जी और तीखी लहसुनी मुरमुरा चिवड़ा।",
        "historical_significance": "वस्त्र उद्योग के कामगारों और व्यापारियों का पसंदीदा शाम का जलपान।",
        "architecture": "बाजार में स्थित चहल-पहल वाला नाश्ता कॉर्नर।",
        "transport": "वीवर्स मार्केट, रबकवि बनहट्टी।"
    },
    "ta": {
        "name": "ஸ்ரீ குரு கிருபா கிர்மிட், மிளகாய் & கார மண்டி",
        "taluk": "பனஹட்டி",
        "category": "உள்ளூர் உணவு & கானாங்கி",
        "description": "பனஹட்டி நகரின் காரசாரமான கிர்மிட் பொரி மற்றும் மிளகாய் பஜ்ஜி.",
        "historical_significance": "நெசவாளர்களின் மாலை நேர பிரியமான சிற்றுண்டி.",
        "architecture": "ஜவுளி சந்தை சிற்றுண்டகம்.",
        "transport": "நெசவாளர் சந்தை, ரபகவி பனஹட்டி."
    },
    "te": {
        "name": "శ్రీ గురు కృప గిర్మిట్, మిర్చి & కారపు బొరుగులు",
        "taluk": "బనహట్టి",
        "category": "స్థానిక ఆహారం & ఖానావళులు",
        "description": "నేతన్నల నగరం బనహట్టిలో ప్రసిద్ధ గిర్మిట్ మరమరాలు, మిర్చి బజ్జీ మరియు కారపు బొరుగులు.",
        "historical_significance": "చేనేత కార్మికుల సాయంత్రపు ఇష్టమైన అల్పాహారం.",
        "architecture": "టెక్స్‌టైల్ బజార్ స్టాల్.",
        "transport": "వీవర్స్ మార్కెట్, రబకవి బనహట్టి."
    },
    "mr": {
        "name": "श्री गुरु कृपा गिरमीट, मिरची आणि तिखट भडंग स्टॉल",
        "taluk": "बनहट्टी",
        "category": "स्थानिक खाद्यसंस्कृती",
        "description": "विणकरांचे शहर बनहट्टीमधील प्रसिद्ध चुरचुरीत गिरमीट, मिरची भजी आणि लसूण तिखट चुरमुरे भडंग.",
        "historical_significance": "हातमाग व यंत्रमाग कामगारांचा कामावरून परततानाचा हक्काचा संध्याकाळचा चहा-नाश्ता.",
        "architecture": "कापड बाजारातील लोकप्रिय खाद्य कॉर्नर.",
        "transport": "विणकर बाजार, रबकवी बनहट्टी."
    },
    "ml": {
        "name": "ശ്രീ ഗുരു കൃപ ഗിർമിറ്റ്, മിർച്ചി & കാര പൊരി സ്റ്റാൾ",
        "taluk": "ബനഹട്ടി",
        "category": "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
        "description": "നെയ്ത്തുനഗരമായ ബനഹട്ടിയിലെ രുചികരമായ ഗിർമിറ്റും മിർച്ചി ബജ്ജിയും കാരപ്പൊരിയും.",
        "historical_significance": "തൊഴിലാളികളുടെ പ്രിയപ്പെട്ട വൈകുന്നേര വിഭവം.",
        "architecture": "ടെക്സ്റ്റൈൽ ബസാർ സ്റ്റാൾ.",
        "transport": "വീവേഴ്സ് മാർക്കറ്റ്, റബകവി ബനഹട്ടി."
    }
},

};

// ── Master Localized Attractions Dictionary (Names & Descriptions) ───────────
const ATTRACTIONS_I18N = {
  "Badami Cave Temples (Caves 1-4)": {
    en: { name: "Badami Cave Temples (Caves 1-4)", desc: "Four magnificent rock-cut cave temples sculpted into red sandstone cliffs (6th century CE). Masterpiece of Early Chalukyan rock-cut architecture." },
    kn: { name: "ಬಾದಾಮಿ ಗುಹಾ ದೇವಾಲಯಗಳು (ಗುಹೆಗಳು ೧-೪)", desc: "ಕೆಂಪು ಮರಳುಗಲ್ಲಿನ ಬಂಡೆಗಳಲ್ಲಿ ಕೊರೆಯಲಾದ ನಾಲ್ಕು ಭವ್ಯ ಗುಹಾ ದೇವಾಲಯಗಳು (೬ನೇ ಶತಮಾನ). ಚಾಲುಕ್ಯ ಶಿಲಾ ವಾಸ್ತುಶಿಲ್ಪದ ಮೇರುಕೃತಿ." },
    hi: { name: "बादामी गुफा मंदिर (गुफा 1-4)", desc: "लाल बलुआ पत्थर की चट्टानों में तराशे गए चार भव्य शैल-उत्कीर्ण गुफा मंदिर (6वीं शताब्दी)। चालुक्य वास्तुकला की उत्कृष्ट कृति।" },
    ta: { name: "பாதாமி குடைவரைக் கோயில்கள் (குகைகள் 1-4)", desc: "செம்மணற்கல் பாறைகளில் செதுக்கப்பட்ட நான்கு அற்புதமான குடைவரைக் கோயில்கள் (6ஆம் நூற்றாண்டு)." },
    te: { name: "బాదామి గుహాలయాలు (గుహలు 1-4)", desc: "ఎర్ర రాతి కొండలలో చెక్కబడిన నాలుగు అద్భుతమైన రాతి గుహాలయాలు (6వ శతాబ్దం)." },
    mr: { name: "बादामी गुंफा मंदिरे (गुंफा १-४)", desc: "लाल वालुकाश्माच्या खडकात कोरलेली चार भव्य लेणी मंदिरे (६वे शतक). चालुक्य शिल्पकलेचा अद्वितीय आविष्कार." },
    ml: { name: "ബദാമി ഗുഹാക്ഷേത്രങ്ങൾ (ഗുഹകൾ 1-4)", desc: "ചെങ്കൽ പാറകളിൽ കൊത്തിയെടുത്ത നാല് മനോഹരമായ ഗുഹാക്ഷേത്രങ്ങൾ (ആറാം നൂറ്റാണ്ട്)." }
  },
  "Agastya Lake": {
    en: { name: "Agastya Lake", desc: "A sacred man-made lake at the base of red sandstone cliffs, flanked by Bhoothanatha temples, offering panoramic water reflections." },
    kn: { name: "ಅಗಸ್ತ್ಯ ಸರೋವರ", desc: "ಕೆಂಪು ಮರಳುಗಲ್ಲಿನ ಬಂಡೆಗಳ ತಳಭಾಗದಲ್ಲಿರುವ ಪವಿತ್ರ ಸರೋವರ. ಭೂತನಾಥ ದೇವಾಲಯಗಳಿಂದ ಆವೃತವಾಗಿದ್ದು, ನೀರಿನಲ್ಲಿ ಬಂಡೆಗಳ ರಮಣೀಯ ಪ್ರತಿಬಿಂಬ ಮೂಡುತ್ತದೆ." },
    hi: { name: "अगस्त्य झील", desc: "लाल बलुआ पत्थर की चट्टानों की तलहटी में स्थित पवित्र झील, जिसके किनारे भूतनाथ मंदिर समूह स्थित है।" },
    ta: { name: "அகஸ்தியர் ஏரி", desc: "செம்மணற்கல் பாறைகளின் அடிவாரத்தில் உள்ள புனித ஏரி, பூதநாதர் கோவில்களால் சூழப்பட்டுள்ளது." },
    te: { name: "అగస్త్య సరస్సు", desc: "ఎర్ర రాతి కొండల దిగువన ఉన్న పవిత్ర సరస్సు, భూతనాథ ఆలయాల సుందర ప్రతిబింబాలతో అలరారుతుంది." },
    mr: { name: "अगस्त्य तलाव", desc: "लाल वालुकाश्माच्या टेकड्यांच्या पायथ्याशी असलेला पवित्र तलाव, ज्याच्या काठावर भूतनाथ मंदिरे आहेत." },
    ml: { name: "അഗസ്ത്യ തടാകം", desc: "ചെങ്കൽ മലനിരകളുടെ അടിവാരത്തിലെ പവിത്രമായ തടാകം, ഭൂതനാഥ ക്ഷേത്രങ്ങളാൽ ചുറ്റപ്പെട്ടിരിക്കുന്നു." }
  },
  "Bhoothanatha Group of Temples": {
    en: { name: "Bhoothanatha Group of Temples", desc: "Sandstone structural temples extending gracefully into the waters of Agastya Lake, blending Dravida and Nagara styles." },
    kn: { name: "ಭೂತನಾಥ ದೇವಾಲಯಗಳ ಸಮೂಹ", desc: "ಅಗಸ್ತ್ಯ ಸರೋವರದ ನೀರಿನೊಳಗೆ ವಿಸ್ತರಿಸಿರುವ ಕಲ್ಲಿನ ದೇವಾಲಯಗಳು; ದ್ರಾವಿಡ ಮತ್ತು ನಾಗರ ಶೈಲಿಗಳ ಸುಂದರ ಸಂಗಮ." },
    hi: { name: "भूतनाथ मंदिर समूह", desc: "अगस्त्य झील के जल में विस्तृत बलुआ पत्थर के मंदिर, जो द्रविड़ और नागर शैलियों का सुंदर मिश्रण हैं।" },
    ta: { name: "பூதநாதர் கோவில் தொகுதி", desc: "அகஸ்தியர் ஏரியின் கரையில் கம்பீரமாக நிற்கும் சாளுக்கிய மணற்கல் கோவில்கள்." },
    te: { name: "భూతనాథ దేవాలయాల సమూహం", desc: "అగస్త్య సరస్సు నీటిలో అందంగా విస్తరించిన రాతి ఆలయాలు." },
    mr: { name: "भूतनाथ मंदिर समूह", desc: "अगस्त्य तलावाच्या पाण्यात विस्तारलेली सुंदर दगडी मंदिरे." },
    ml: { name: "ഭൂതനാഥ ക്ഷേത്ര സമുച്ചയം", desc: "അഗസ്ത്യ തടാകത്തിന്റെ ഓരത്ത് സ്ഥിതി ചെയ്യുന്ന മനോഹരമായ ശിലാ ക്ഷേത്രങ്ങൾ." }
  },
  "Badami North Fort & Upper Shivalaya": {
    en: { name: "Badami North Fort & Upper Shivalaya", desc: "Perched atop northern sandstone cliffs, housing the ancient Upper Shivalaya structural temple with sweeping vistas." },
    kn: { name: "ಬಾದಾಮಿ ಉತ್ತರ ಕೋಟೆ ಮತ್ತು ಮೇಲಿನ ಶಿವಾಲಯ", desc: "ಉತ್ತರ ಬೆಟ್ಟದ ಮೇಲಿರುವ ಕೋಟೆ ಮತ್ತು ಆರಂಭಿಕ ಚಾಲುಕ್ಯ ಕಲ್ಲಿನ ದೇವಾಲಯವಾದ ಮೇಲಿನ ಶಿವಾಲಯ; ಇಡೀ ಬಾದಾಮಿಯ ವಿಹಂಗಮ ನೋಟ ನೀಡುತ್ತದೆ." },
    hi: { name: "बादामी उत्तरी किला एवं ऊपरी शिवालय", desc: "उत्तरी बलुआ पत्थर की पहाड़ी पर स्थित ऐतिहासिक किला और 7वीं सदी का ऊपरी शिवालय मंदिर।" },
    ta: { name: "பாதாமி வடக்கு கோட்டை & மேல் சிவாலயம்", desc: "வடக்கு மலைப்பகுதியில் அமைந்துள்ள பழங்கால கோட்டை மற்றும் மேல் சிவாலயம் கோவில்." },
    te: { name: "బాదామి ఉత్తర కోట & ఎగువ శివాలయం", desc: "ఉత్తర రాతి కొండపై ఉన్న చారిత్రక కోట మరియు ఎగువ శివాలయం ఆలయం." },
    mr: { name: "बादामी उत्तर किल्ला आणि अप्पर शिवालय", desc: "उत्तरेकडील टेकडीवर वसलेला किल्ला आणि प्राचीन शिवालय मंदिर." },
    ml: { name: "ബദാമി നോർത്ത് ഫോർട്ട് & അപ്പർ ശിവാലയ", desc: "വടക്കൻ മലനിരകളിൽ സ്ഥിതി ചെയ്യുന്ന കോട്ടയും പുരാതന ശിവക്ഷേത്രവും." }
  },
  "Archaeological Museum Badami": {
    en: { name: "Archaeological Museum Badami", desc: "ASI museum housing monumental Chalukyan stone sculptures, Lajja Gauri carvings, and 6th-century inscriptions." },
    kn: { name: "ಪುರಾತತ್ವ ಸಂಗ್ರಹಾಲಯ ಬಾದಾಮಿ", desc: "ಭಾರತೀಯ ಪುರಾತತ್ವ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆಯ ಸಂಗ್ರಹಾಲಯ; ಅಪರೂಪದ ಲಜ್ಜಾ ಗೌರಿ ಶಿಲ್ಪ ಹಾಗೂ ಚಾಲುಕ್ಯ ಕೆತ್ತನೆಗಳ ಭಂಡಾರ." },
    hi: { name: "पुरातत्व संग्रहालय बादामी", desc: "भारतीय पुरातत्व सर्वेक्षण (एएसआई) का संग्रहालय, जिसमें लज्जा गौरी और चालुक्य मूर्तियां सुरक्षित हैं।" },
    ta: { name: "தொல்பொருள் அருங்காட்சியகம் பாதாமி", desc: "சாளுக்கிய சிற்பங்கள் மற்றும் கல்வெட்டுகளைக் கொண்ட தொல்பொருள் அருங்காட்சியகம்." },
    te: { name: "పురావస్తు సంగ్రహాలయం బాదామి", desc: "అరుదైన లజ్జా గౌరి శిల్పాలు మరియు చాళుక్య శాసనాల మ్యూజియం." },
    mr: { name: "पुरातत्व संग्रहालय बादामी", desc: "एएसआयचे संग्रहालय, जेथे लज्जा गौरी आणि चालुक्य शिल्पे जतन केली आहेत." },
    ml: { name: "ആർക്കിയോളജിക്കൽ മ്യൂസിയം ബദാമി", desc: "ചാലൂക്യ ശില്പങ്ങളും പുരാതന ശാസനങ്ങളും സൂക്ഷിച്ചിട്ടുള്ള മ്യൂസിയം." }
  },
  "Malegitti Shivalaya": {
    en: { name: "Malegitti Shivalaya", desc: "One of the earliest surviving freestanding structural stone temples in South India (early 7th century CE) on a rocky knoll." },
    kn: { name: "ಮಾಲೆಗಿತ್ತಿ ಶಿವಾಲಯ", desc: "ದಕ್ಷಿಣ ಭಾರತದ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಸ್ವತಂತ್ರ ಕಲ್ಲಿನ ದೇವಾಲಯಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ (೭ನೇ ಶತಮಾನದ ಆರಂಭ)." },
    hi: { name: "मालेगिट्टी शिवालय", desc: "दक्षिण भारत के सबसे प्राचीन जीवित पत्थर के मंदिरों में से एक (7वीं शताब्दी)।" },
    ta: { name: "மாலேகிட்டி சிவாலயம்", desc: "தென்னிந்தியாவின் மிக பழமையான சுதந்திரமான கற்கோவில்களில் ஒன்று." },
    te: { name: "మాలేగిత్తి శివాలయం", desc: "దక్షిణ భారతదేశంలో అత్యంత పురాతన స్వతంత్ర రాతి ఆలయాలలో ఒకటి." },
    mr: { name: "मालेगिट्टी शिवालय", desc: "दक्षिण भारतातील सर्वात जुन्या स्वतंत्र दगडी मंदिरांपैकी एक." },
    ml: { name: "മാലെഗിത്തി ശിവാലയം", desc: "ദക്ഷിണേന്ത്യയിലെ ഏറ്റവും പുരാതനമായ കരിങ്കൽ ക്ഷേത്രങ്ങളിൽ ഒന്ന്." }
  },

  // Pattadakal
  "Virupaksha Temple (Lokeshwara)": {
    en: { name: "Virupaksha Temple (Lokeshwara)", desc: "Grandest temple at Pattadakal (c. 740 CE) built by Queen Lokamahadevi; model for the Kailasa temple at Ellora." },
    kn: { name: "ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ (ಲೋಕೇಶ್ವರ)", desc: "ಕ್ರಿ.ಶ. ೭೪೦ ರಲ್ಲಿ ರಾಣಿ ಲೋಕಮಹಾದೇವಿ ನಿರ್ಮಿಸಿದ ಪಟ್ಟದಕಲ್ಲಿನ ಅತಿ ಭವ್ಯ ದೇವಾಲಯ; ಎಲ್ಲೋರಾದ ಕೈಲಾಸನಾಥ ದೇವಾಲಯಕ್ಕೆ ಇದು ಮಾದರಿಯಾಗಿದೆ." },
    hi: { name: "विरुपाक्ष मंदिर (लोकेश्वर)", desc: "पट्टदकल का सबसे भव्य मंदिर (740 ईस्वी) जिसे रानी लोकमहादेवी ने बनवाया था; एलोरा के कैलाश मंदिर की प्रेरणा।" },
    ta: { name: "விருபாக்ஷா கோவில் (லோகேஸ்வரா)", desc: "ராணி லோகமஹாதேவியால் கட்டப்பட்ட பட்டடக்கல்லின் பிரம்மாண்ட கோவில்." },
    te: { name: "విరూపాక్ష దేవాలయం (లోకేశ్వర)", desc: "రాణి లోకమహాదేవి నిర్మించిన పట్టడకల్‌లోని అత్యంత వైభవమైన ఆలయం." },
    mr: { name: "विरूपाक्ष मंदिर (लोकेश्वर)", desc: "राणी लोकमहादेवी यांनी बांधलेले पट्टदकलमधील सर्वात भव्य मंदिर." },
    ml: { name: "വിരൂപാക്ഷ ക്ഷേത്രം (ലോകേശ്വര)", desc: "എഡി 740-ൽ ലോകമഹാദേവി രാജ്ഞി നിർമ്മിച്ച മഹാക്ഷേത്രം." }
  },
  "Mallikarjuna Temple (Trailokyeshwara)": {
    en: { name: "Mallikarjuna Temple (Trailokyeshwara)", desc: "Built by Queen Trailokyamahadevi featuring ornate Ramayana and Mahabharata sculptural friezes." },
    kn: { name: "ಮಲ್ಲಿಕಾರ್ಜುನ ದೇವಾಲಯ (ತ್ರೈಲೋಕೇಶ್ವರ)", desc: "ರಾಣಿ ತ್ರೈಲೋಕ್ಯಮಹಾದೇವಿಯಿಂದ ನಿರ್ಮಿತ ದೇಗುಲ; ರಾಮಾಯಣ, ಮಹಾಭಾರತ ಕಥಾಚಿತ್ರಣದ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳಿಗೆ ಖ್ಯಾತಿ." },
    hi: { name: "मल्लिकार्जुन मंदिर (त्रैलोक्येश्वर)", desc: "रानी त्रैलोक्यमहादेवी द्वारा निर्मित मंदिर जिसमें रामायण और महाभारत के सुंदर शिल्प उकेरे गए हैं।" },
    ta: { name: "மல்லிகார்ஜுனா கோவில் (திரைலோக்யேஸ்வரா)", desc: "ராமாயண, மகாபாரத சிற்பங்களை கொண்ட கம்பீரமான கோவில்." },
    te: { name: "మల్లికార్జున దేవాలయం (త్రైలోక్యేశ్వర)", desc: "రామాయణ, మహాభారత శిల్పాలతో కూడిన సుందర దేవాలయం." },
    mr: { name: "मल्लिकार्जुन मंदिर (त्रैलोक्येश्वर)", desc: "रामायण आणि महाभारतातील दृश्यांचे सुंदर कोरीवकाम असलेले मंदिर." },
    ml: { name: "മല്ലികാർജ്ജുന ക്ഷേത്രം (ത്രൈലോക്യേശ്വര)", desc: "രാമായണ, മഹാഭാരത കൊത്തുപണികൾ നിറഞ്ഞ മനോഹര ക്ഷേത്രം." }
  },
  "Sangameshwara Temple (Vijayeshwara)": {
    en: { name: "Sangameshwara Temple (Vijayeshwara)", desc: "Earliest major structural temple at Pattadakal (c. 720 CE), commissioned by King Vijayaditya in pure Dravida style." },
    kn: { name: "ಸಂಗಮೇಶ್ವರ ದೇವಾಲಯ (ವಿಜಯೇಶ್ವರ)", desc: "ಕ್ರಿ.ಶ. ೭೨೦ ರಲ್ಲಿ ರಾಜ ವಿಜಯಾದಿತ್ಯನಿಂದ ನಿರ್ಮಿತವಾದ ಪಟ್ಟದಕಲ್ಲಿನ ಅತಿ ಪ್ರಾಚೀನ ಬೃಹತ್ ದ್ರಾವಿಡ ಶೈಲಿಯ ದೇವಾಲಯ." },
    hi: { name: "संगमेश्वर मंदिर (विजयेश्वर)", desc: "पट्टदकल का सबसे पुराना प्रमुख मंदिर (720 ईस्वी), जो राजा विजयादित्य द्वारा द्रविड़ शैली में बनवाया गया था।" },
    ta: { name: "சங்கமேஸ்வரர் கோவில் (விஜயேஸ்வரா)", desc: "பட்டடக்கல்லின் பழமையான திராவிட பாணி கற்கோவில்." },
    te: { name: "సంగమేశ్వర దేవాలయం (విజయేశ్వర)", desc: "పట్టడకల్‌లో అత్యంత పురాతన ద్రావిడ శైలి ఆలయం." },
    mr: { name: "संगमेश्वर मंदिर (विजयेश्वर)", desc: "पट्टदकलमधील सर्वात प्राचीन द्रविड शैलीतील मंदिर." },
    ml: { name: "സംഗമേശ്വര ക്ഷേത്രം (വിജയേശ്വര)", desc: "എഡി 720-ൽ നിർമ്മിച്ച ഏറ്റവും പുരാതന ദ്രാവിഡ ക്ഷേത്രം." }
  },
  "Galaganatha Temple (Curvilinear Nagara Shikhara)": {
    en: { name: "Galaganatha Temple (Curvilinear Nagara Shikhara)", desc: "Features a northern Indian Nagara-style curvilinear tower (rekha-prasada) with an intact sculpted Shivalinga." },
    kn: { name: "ಗಳಗನಾಥ ದೇವಾಲಯ (ನಾಗರ ಶಿಖರ)", desc: "ಉತ್ತರ ಭಾರತೀಯ ನಾಗರ ರೇಖಾ-ಪ್ರಾಸಾದ ಶೈಲಿಯ ಶಿಖರ ಹೊಂದಿರುವ ವಿಶಿಷ್ಟ ದೇವಾಲಯ." },
    hi: { name: "गलगनाथ मंदिर (नागर शिखर)", desc: "उत्तर भारतीय नागर शैली के वक्राकार शिखर वाला दर्शनीय मंदिर।" },
    ta: { name: "கலகநாதா கோவில் (நாகர கோபுரம்)", desc: "வட இந்திய நாகர பாணி கோபுரத்துடன் கூடிய தனித்துவமான கோவில்." },
    te: { name: "గలగనాథ దేవాలయం (నగర శిఖరం)", desc: "ఉత్తర భారత నగర శైలి శిఖరంతో నిర్మితమైన ఆలయం." },
    mr: { name: "गलगनाथ मंदिर (नागर शिखर)", desc: "उत्तर भारतीय नागर शैलीतील शिखर असलेले मंदिर." },
    ml: { name: "ഗലഗനാഥ ക്ഷേത്രം (നാഗര ശിഖരം)", desc: "ഉത്തരേന്ത്യൻ നാഗര ശൈലിയിലുള്ള ഗോപുരമുള്ള ക്ഷേത്രം." }
  },
  "Papanatha Temple": {
    en: { name: "Papanatha Temple", desc: "Located south of Pattadakal, uniquely harmonizing Nagara tower with Dravida layout and Ramayana relief panels." },
    kn: { name: "ಪಾಪನಾಥ ದೇವಾಲಯ", desc: "ನಾಗರ ಮತ್ತು ದ್ರಾವಿಡ ಶೈಲಿಗಳ ಸುಂದರ ಸಮ್ಮಿಲನ; ಹೊರಗೋಡೆಗಳಲ್ಲಿ ರಾಮಾಯಣ ಮಹಾಕಾವ್ಯದ ಕಥೆಗಳ ಕೆತ್ತನೆಗಳಿವೆ." },
    hi: { name: "पापनाथा मंदिर", desc: "नागर और द्रविड़ शैलियों का अनोखा संगम, जिसकी दीवारों पर रामायण के दृश्य उकेरे गए हैं।" },
    ta: { name: "பாபநாதா கோவில்", desc: "நாகர மற்றும் திராவிட கட்டிடக்கலைகளின் அற்புதமான சங்கமம்." },
    te: { name: "పాపనాథ దేవాలయం", desc: "రామాయణ గాథల శిల్పాలతో నగర, ద్రావిడ శైలుల కలయిక." },
    mr: { name: "पापनाथा मंदिर", desc: "नागर आणि द्रविड शैलींचा सुंदर मिलाफ असलेले मंदिर." },
    ml: { name: "പാപനാഥ ക്ഷേത്രം", desc: "നാഗര, ദ്രാവിഡ ശൈലികളുടെ അപൂർവ്വ സംഗമം." }
  },
  "Jain Narayana Temple (Rashtrakuta era)": {
    en: { name: "Jain Narayana Temple (Rashtrakuta era)", desc: "A 9th-century Rashtrakuta Jain temple showcasing the continuity of monument building traditions." },
    kn: { name: "ಜೈನ ನಾರಾಯಣ ದೇವಾಲಯ (ರಾಷ್ಟ್ರಕೂಟ ಕಾಲ)", desc: "೯ನೇ ಶತಮಾನದ ರಾಷ್ಟ್ರಕೂಟರ ಕಾಲದ ಜೈನ ದೇವಾಲಯ; ಕಲ್ಲಿನ ಅದ್ಭುತ ವಾಸ್ತುಶಿಲ್ಪ." },
    hi: { name: "जैन नारायण मंदिर (राष्ट्रकूट युग)", desc: "9वीं शताब्दी का राष्ट्रकूट कालीन जैन मंदिर जो निरंतर स्थापत्य परंपरा को दर्शाता है।" },
    ta: { name: "சமண நாராயண கோவில் (ராஷ்டிரகூட காலம்)", desc: "9ஆம் நூற்றாண்டு ராஷ்டிரகூடர் கால சமண கோவில்." },
    te: { name: "జైన నారాయణ దేవాలయం (రాష్ట్రకూట కాలం)", desc: "9వ శతాబ్దపు రాష్ట్రకూటుల కాలం నాటి జైన ఆలయం." },
    mr: { name: "जैन नारायण मंदिर (राष्ट्रकूट काळ)", desc: "९व्या शतकातील राष्ट्रकूट काळातील भव्य जैन मंदिर." },
    ml: { name: "ജൈന നാരായണ ക്ഷേത്രം (രാഷ്ട്രകൂട കാലഘട്ടം)", desc: "ഒമ്പതാം നൂറ്റാണ്ടിലെ രാഷ്ട്രകൂട ജൈന ക്ഷേത്രം." }
  },

  // Aihole
  "Durga Temple Complex (Apsidal sanctum with ambulatory peristyle)": {
    en: { name: "Durga Temple Complex (Apsidal Plan)", desc: "Iconic apsidal (Gajaprashtha) temple derived from Buddhist chaitya architecture with colonnaded gallery of monumental sculptures." },
    kn: { name: "ದುರ್ಗಾ ದೇವಾಲಯ ಸಂಕೀರ್ಣ (ಗಜಪೃಷ್ಠ ಶೈಲಿ)", desc: "ಬೌದ್ಧ ಚೈತ್ಯ ಶೈಲಿಯ ಗಜಪೃಷ್ಠ ಆಕಾರದಲ್ಲಿರುವ ಜಗತ್ಪ್ರಸಿದ್ಧ ದೇವಾಲಯ; ಕಂಬಗಳ ಸಾಲು ಮತ್ತು ಸುಂದರ ಶಿಲ್ಪಕಲೆಗಳಿಗೆ ಪ್ರಸಿದ್ಧಿ." },
    hi: { name: "दुर्गा मंदिर परिसर (गजपृष्ठाकार)", desc: "बौद्ध चैत्य शैली का गजपृष्ठाकार मंदिर, जिसके स्तंभों पर अद्भुत मूर्तियां उकेरी गई हैं।" },
    ta: { name: "துர்க்கை கோவில் வளாகம் (கஜபிருஷ்ட வடிவம்)", desc: "பௌத்த சைத்திய பாணியிலான கஜபிருஷ்ட அரைவட்ட சாளுக்கிய கோவில்." },
    te: { name: "దుర్గా దేవాలయ సముదాయం (గజపృష్ఠ శైలి)", desc: "బౌద్ధ చైత్య శైలిలో నిర్మించిన గజపృష్ఠాకార దుర్గా దేవాలయం." },
    mr: { name: "दुर्गा मंदिर संकुल (गजपृष्ठाकार)", desc: "बौद्ध चैत्य शैलीवर आधारित अद्वितीय गजपृष्ठाकार मंदिर." },
    ml: { name: "ദുർഗ്ഗാ ക്ഷേത്ര സമുച്ചയം (ഗജപൃഷ്ഠ ശൈലി)", desc: "ബുദ്ധ ചൈത്യ ശൈലിയിൽ നിർമ്മിച്ച വിഖ്യാത ഗജപൃഷ്ഠ ക്ഷേത്രം." }
  },
  "Lad Khan Temple (Panchayatana hall-style)": {
    en: { name: "Lad Khan Temple (Panchayatana hall-style)", desc: "One of the oldest surviving structural temples in Karnataka (c. early 6th century CE), originally an assembly hall." },
    kn: { name: "ಲಾಡ್ ಖಾನ್ ದೇವಾಲಯ (ಪಂಚಾಯತನ ಶೈಲಿ)", desc: "ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ಹಳೆಯ ಕಲ್ಲಿನ ದೇವಾಲಯಗಳಲ್ಲಿ ಒಂದು (೬ನೇ ಶತಮಾನದ ಆರಂಭ); ಮರದ ತೊಲೆಗಳಂತಿರುವ ಕಲ್ಲಿನ ಛಾವಣಿ ಹೊಂದಿದೆ." },
    hi: { name: "लाड खान मंदिर (पंचायतन शैली)", desc: "कर्नाटक के सबसे पुराने जीवित मंदिरों में से एक (6वीं शताब्दी की शुरुआत)।" },
    ta: { name: "லாட் கான் கோவில் (பஞ்சாயதன பாணி)", desc: "கர்நாடகாவின் மிக பழமையான கற்கோவில்களில் ஒன்று (6ஆம் நூற்றாண்டு)." },
    te: { name: "లాడ్ ఖాన్ దేవాలయం (పంచాయతన శైలి)", desc: "కర్ణాటకలోని అత్యంత పురాతన రాతి ఆలయాలలో ఒకటి (6వ శతాబ్దం)." },
    mr: { name: "लाड खान मंदिर (पंचायतन शैली)", desc: "कर्नाटकातील सर्वात जुन्या दगडी मंदिरांपैकी एक (६वे शतक)." },
    ml: { name: "ലാഡ് ഖാൻ ക്ഷേത്രം", desc: "കർണാടകയിലെ ഏറ്റവും പുരാതനമായ ശിലാ ക്ഷേത്രങ്ങളിലൊന്ന്." }
  },
  "Meguti Jain Temple & Ravikirti Inscription": {
    en: { name: "Meguti Jain Temple & Ravikirti Inscription", desc: "Crowning the highest hill in Aihole, bearing the landmark 634 CE Sanskrit inscription by court poet Ravikirti praising Pulakeshin II." },
    kn: { name: "ಮೇಗುತಿ ಜೈನ ದೇವಾಲಯ ಮತ್ತು ರವಿಕೀರ್ತಿ ಶಾಸನ", desc: "ಐಹೊಳೆಯ ಎತ್ತರದ ಬೆಟ್ಟದ ಮೇಲಿರುವ ಜೈನ ಮಂದಿರ; ಇಮ್ಮಡಿ ಪುಲಕೇಶಿಯ ವಿಜಯಗಳನ್ನು ವರ್ಣಿಸುವ ಕ್ರಿ.ಶ. ೬೩೪ ರ ರವಿಕೀರ್ತಿ ಸಂಸ್ಕೃತ ಶಾಸನವಿದೆ." },
    hi: { name: "मेगुती जैन मंदिर एवं रविकीर्ति शिलालेख", desc: "आईहोल की सबसे ऊंची पहाड़ी पर स्थित जैन मंदिर, जिसमें 634 ईस्वी का प्रसिद्ध रविकीर्ति शिलालेख है।" },
    ta: { name: "மேகுதி சமண கோவில் & ரவிகீர்த்தி கல்வெட்டு", desc: "கி.பி. 634 ரவிகீர்த்தி சமஸ்கிருத கல்வெட்டு அமைந்துள்ள மலைக்கோவில்." },
    te: { name: "మేగుతి జైన దేవాలయం & రవికీర్తి శాసనం", desc: "రెండవ పులకేశి విజయాలను కీర్తించే క్రీ.శ. 634 నాటి సంస్కృత శాసనం ఉన్న ఆలయం." },
    mr: { name: "मेगुती जैन मंदिर आणि रविकीर्ती शिलालेख", desc: "ऐहोळेच्या उंच टेकडीवरील जैन मंदिर आणि प्रसिद्ध ६३४ चा शिलालेख." },
    ml: { name: "മേഗുതി ജൈന ക്ഷേത്രവും രവികീർത്തി ശാസനവും", desc: "എഡി 634-ലെ വിഖ്യാത സംസ്കൃത ശാസനമുള്ള മലമുകളിലെ ക്ഷേത്രം." }
  },
  "Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja)": {
    en: { name: "Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja)", desc: "A 6th-century rock-cut cave sanctuary famous for its dynamic panel of Shiva Nataraja with the Saptamatrikas." },
    kn: { name: "ರಾವಣ ಫಡಿ ಗುಹಾ ದೇವಾಲಯ (ಶಿವ ನಟರಾಜ)", desc: "೬ನೇ ಶತಮಾನದ ಶಿಲಾ ಗುಹೆ; ಸಪ್ತಮಾತೃಕೆಯರೊಂದಿಗೆ ನರ್ತಿಸುವ ಶಿವ ನಟರಾಜನ ಅಪೂರ್ವ ಕೆತ್ತನೆ ಇಲ್ಲಿದೆ." },
    hi: { name: "रावण फडी गुफा मंदिर (शैल-उत्कीर्ण शिव नटराज)", desc: "6वीं शताब्दी की शैल-उत्कीर्ण गुफा जिसमें सप्तमातृकाओं के साथ शिव नटराज का भव्य शिल्प है।" },
    ta: { name: "ராவண படி குடைவரை கோவில் (சிவ நடராஜர்)", desc: "சப்தமாதாக்களுடன் நடனமாடும் சிவபெருமானின் சிற்பம் கொண்ட குகை." },
    te: { name: "రావణ ఫడి గుహాలయం (శివ నటరాజ)", desc: "సప్తమాతృకలతో కూడిన శివ నటరాజ శిల్ప కళాఖండం గల గుహాలయం." },
    mr: { name: "रावण फडी गुंफा मंदिर (शिव नटराज)", desc: "सप्तमातृकांसोबत नृत्य करणाऱ्या शिव नटराजाचे उत्कृष्ट शिल्प असलेली गुंफा." },
    ml: { name: "രാവണ ഫഡി ഗുഹാക്ഷേത്രം (ശിവ നടരാജൻ)", desc: "സപ്തമാതൃക്കളോടൊപ്പം നൃത്തം ചെയ്യുന്ന ശിവന്റെ അപൂർവ്വ ശില്പം." }
  },
  "Huchimalli Temple": {
    en: { name: "Huchimalli Temple", desc: "7th-century structural breakthrough introducing the antechamber (antarala) in temple layouts." },
    kn: { name: "ಹುಚಿಮಲ್ಲಿ ದೇವಾಲಯ", desc: "ಗರ್ಭಗುಡಿಯ ಮುಂದೆ ಅಂತರಾಳವನ್ನು ಪರಿಚಯಿಸಿದ ೭ನೇ ಶತಮಾನದ ಪ್ರಮುಖ ದೇವಾಲಯ." },
    hi: { name: "हुच्चीमल्ली मंदिर", desc: "7वीं शताब्दी का मंदिर जिसने मंदिर वास्तुकला में अंतराल (प्रवेश कक्ष) की शुरुआत की।" },
    ta: { name: "ஹுச்சிமல்லி கோவில்", desc: "கோவில் கட்டிடக்கலையில் அந்தராளத்தை அறிமுகப்படுத்திய 7ஆம் நூற்றாண்டு கோவில்." },
    te: { name: "హుచ్చిమల్లి దేవాలయం", desc: "గర్భగుడి ముందు అంతరాళాన్ని పరిచయం చేసిన 7వ శతాబ్దపు ఆలయం." },
    mr: { name: "हुच्चीमल्ली मंदिर", desc: "मंदिराच्या आराखड्यात अंतराळ संकल्पना आणणारे ७व्या शतकातील मंदिर." },
    ml: { name: "ഹുച്ചിമല്ലി ക്ഷേത്രം", desc: "ക്ഷേത്ര വാസ്തുവിദ്യയിൽ അന്തരാളം അവതരിപ്പിച്ച ഏഴാം നൂറ്റാണ്ടിലെ ക്ഷേത്രം." }
  },
  "Konti Gudi Group": {
    en: { name: "Konti Gudi Group", desc: "Four early temples located in the village bazaar with ornate ceiling carvings of Brahma, Shiva, and Vishnu." },
    kn: { name: "ಕೊಂಟಿ ಗುಡಿ ಸಮೂಹ", desc: "ಗ್ರಾಮದ ಬಜಾರ್‌ನಲ್ಲಿರುವ ನಾಲ್ಕು ಪ್ರಾಚೀನ ದೇವಾಲಯಗಳು; ಮೇಲ್ಛಾವಣಿಯಲ್ಲಿ ತ್ರಿಮೂರ್ತಿಗಳ ಶಿಲ್ಪಗಳಿವೆ." },
    hi: { name: "कोंटी गुड़ी समूह", desc: "बाजार क्षेत्र में स्थित चार मंदिर, जिनकी छतों पर ब्रह्मा, विष्णु और महेश की नक्काशी है।" },
    ta: { name: "கொண்டி குடி தொகுதி", desc: "பிரம்மா, விஷ்ணு, சிவன் சிற்பங்கள் கொண்ட நான்கு ஆரம்பகால கோவில்கள்." },
    te: { name: "కొంటి గుడి సముదాయం", desc: "బ్రహ్మ, విష్ణు, మహేశ్వరుల పైకప్పు శిల్పాలు కలిగిన పురాతన ఆలయాలు." },
    mr: { name: "कोंटी गुडी समूह", desc: "ब्रह्मा, विष्णू आणि महेश यांच्या सुंदर कोरीव कामासह चार मंदिरांचा समूह." },
    ml: { name: "കൊണ്ടി ഗുഡി ഗ്രൂപ്പ്", desc: "ഗ്രാമ ചന്തയിൽ സ്ഥിതി ചെയ്യുന്ന നാല് പുരാതന ക്ഷേത്രങ്ങൾ." }
  },
  "ASI Archaeological Museum Aihole": {
    en: { name: "ASI Archaeological Museum Aihole", desc: "Houses collections of excavated stone sculptures, hero stones, and inscriptions from across 125+ monuments." },
    kn: { name: "ಪುರಾತತ್ವ ಸಂಗ್ರಹಾಲಯ ಐಹೊಳೆ", desc: "ಐಹೊಳೆಯ ೧೨೫ಕ್ಕೂ ಹೆಚ್ಚು ಸ್ಮಾರಕಗಳಿಂದ ಉತ್ಖನನ ಮಾಡಲಾದ ಶಿಲ್ಪಗಳು ಮತ್ತು ವೀರಗಲ್ಲುಗಳ ಕೇಂದ್ರ." },
    hi: { name: "एएसआई पुरातत्व संग्रहालय आईहोल", desc: "आईहोल के 125 से अधिक स्मारकों से प्राप्त प्राचीन मूर्तियों और वीरगलों का संग्रहालय।" },
    ta: { name: "ASI தொல்பொருள் அருங்காட்சியகம் ஐஹோல்", desc: "ஐஹோல் நினைவுச்சின்னங்களில் இருந்து கண்டெடுக்கப்பட்ட சிற்பங்களின் அருங்காட்சியகம்." },
    te: { name: "ASI పురావస్తు మ్యూజియం ఐహోల్", desc: "ఐహోల్ స్మారకాల నుండి సేకరించిన శిల్పాలు మరియు వీరగల్లుల ప్రదర్శన." },
    mr: { name: "पुरातत्व संग्रहालय ऐहोळे", desc: "ऐहोळेतील मंदिरांमधून उत्खनन केलेल्या प्राचीन मूर्तींचे संग्रहालय." },
    ml: { name: "ASI ആർക്കിയോളജിക്കൽ മ്യൂസിയം ഐഹോളെ", desc: "ഐഹോളെയിലെ ശില്പങ്ങളും വീരക്കല്ലുകളും സൂക്ഷിച്ചിട്ടുള്ള മ്യൂസിയം." }
  },

  // Mahakuta
  "Mahakuteshwara Temple": {
    en: { name: "Mahakuteshwara Temple", desc: "Principal Shaivite shrine in Mahakuta, built in Early Chalukyan Dravida style with a curvilinear spire." },
    kn: { name: "ಮಹಾಕೂಟೇಶ್ವರ ದೇವಾಲಯ", desc: "ಮಹಾಕೂಟದ ಪ್ರಮುಖ ಶೈವ ಕ್ಷೇತ್ರ; ದ್ರಾವಿಡ ಶಿಖರ ಹೊಂದಿರುವ ಆರಂಭಿಕ ಚಾಲುಕ್ಯ ದೇವಾಲಯ." },
    hi: { name: "महाकूटेश्वर मंदिर", desc: "महाकूट का प्रमुख शिव मंदिर, जो द्रविड़ शैली में निर्मित है।" },
    ta: { name: "மகாகூடேஸ்வரர் கோவில்", desc: "திராவிட பாணியில் கட்டப்பட்ட மகாகூடாவின் முதன்மை சிவன் கோவில்." },
    te: { name: "మహాకూటేశ్వర దేవాలయం", desc: "మహాకూటలోని ప్రధాన శైవ క్షేత్రం." },
    mr: { name: "महाकूटेश्वर मंदिर", desc: "महाकूटमधील मुख्य शिवमंदिर, द्रविड शैलीत बांधलेले." },
    ml: { name: "മഹാകൂടേശ്വര ക്ഷേത്രം", desc: "മഹാകൂടയിലെ പ്രധാന ശിവക്ഷേത്രം." }
  },
  "Mallikarjuna Temple": {
    en: { name: "Mallikarjuna Temple", desc: "A companion temple to Mahakuteshwara within the tranquil banyan grove, featuring finely carved pillars." },
    kn: { name: "ಮಲ್ಲಿಕಾರ್ಜುನ ದೇವಾಲಯ", desc: "ಆಲದ ಮರಗಳ ನೆರಳಿನಲ್ಲಿರುವ ಸುಂದರ ಕೆತ್ತನೆಯ ಕಂಬಗಳುಳ್ಳ ಪ್ರಾಚೀನ ದೇವಾಲಯ." },
    hi: { name: "मल्लिकार्जुन मंदिर (महाकूट)", desc: "वटवृक्षों के उपवन में स्थित नक्काशीदार स्तंभों वाला सुंदर मंदिर।" },
    ta: { name: "மல்லிகார்ஜுனா கோவில் (மஹாகூடா)", desc: "அழகிய செதுக்கப்பட்ட தூண்களைக் கொண்ட ஆலமர சோலை கோவில்." },
    te: { name: "మల్లికార్జున దేవాలయం (మహాకూట)", desc: "మర్రి చెట్ల నీడలో అందమైన రాతి స్తంభాల ఆలయం." },
    mr: { name: "मल्लिकार्जुन मंदिर", desc: "वड-वृक्षांच्या सावलीत वसलेले नक्षीदार स्तंभांचे मंदिर." },
    ml: { name: "മല്ലികാർജ്ജുന ക്ഷേത്രം", desc: "ആൽമരത്തണലിലെ മനോഹരമായ ചാലൂക്യ ക്ഷേത്രം." }
  },
  "Vishnu Pushkarini (Sacred Spring Pool)": {
    en: { name: "Vishnu Pushkarini (Sacred Spring Pool)", desc: "Sacred perennial natural thermal spring pool where pilgrims perform ablutions in mineral-rich waters." },
    kn: { name: "ವಿಷ್ಣು ಪುಷ್ಕರಣಿ (ಪವಿತ್ರ ಜಲಕುಂಡ)", desc: "ನಿರಂತರವಾಗಿ ಶುದ್ಧ ನೀರು ಚಿಮ್ಮುವ ನೈಸರ್ಗಿಕ ಪವಿತ್ರ ಪುಷ್ಕರಣಿ; ಭಕ್ತರು ಇಲ್ಲಿ ಪುಣ್ಯಸ್ನಾನ ಮಾಡುತ್ತಾರೆ." },
    hi: { name: "विष्णु पुष्करिणी (पवित्र प्राकृतिक कुंड)", desc: "प्राकृतिक मीठे जल का पवित्र कुंड जहाँ श्रद्धालु पवित्र स्नान करते हैं।" },
    ta: { name: "விஷ்ணு புஷ்கரிணி (புனித நீரூற்று குளம்)", desc: "வற்றாத இயற்கை நீரூற்று குளம், பக்தர்கள் புனித நீராடும் இடம்." },
    te: { name: "విష్ణు పుష్కరిణి (పవిత్ర కోనేరు)", desc: "నిరంతరం స్వచ్ఛమైన నీరు ఊరే పవిత్ర కోనేరు." },
    mr: { name: "विष्णू पुष्करिणी (पवित्र झरा कुंड)", desc: "नैसर्गिक बारमाही पाण्याचा पवित्र पाण्याचा कुंड." },
    ml: { name: "വിഷ്ണു പുഷ്കരിണി (വിശുദ്ധ കുളം)", desc: "തീർത്ഥാടകർ സ്നാനം ചെയ്യുന്ന വറ്റാത്ത പ്രകൃതിദത്ത നീരുറവ കുളം." }
  },
  "Submerged Panchamukha Linga": {
    en: { name: "Submerged Panchamukha Linga", desc: "Rare five-faced Shiva linga partially submerged in the sacred waters of Vishnu Pushkarini pool." },
    kn: { name: "ಮುಳುಗಿರುವ ಪಂಚಮುಖ ಲಿಂಗ", desc: "ವಿಷ್ಣು ಪುಷ್ಕರಣಿಯ ನೀರಿನಲ್ಲಿ ಭಾಗಶಃ ಮುಳುಗಿರುವ ಅಪರೂಪದ ಐದು ಮುಖಗಳ ಶಿವಲಿಂಗ." },
    hi: { name: "जलमग्न पंचमुख शिवलिंग", desc: "विष्णु पुष्करिणी के पवित्र जल में आंशिक रूप से डूबा हुआ दुर्लभ पांच मुखों वाला शिवलिंग।" },
    ta: { name: "நீரில் மூழ்கிய பஞ்சமுக லிங்கம்", desc: "புஷ்கரிணி குளத்தின் நீரில் மூழ்கியுள்ள அரிய ஐந்து முக லிங்கம்." },
    te: { name: "నీటిలో మునిగిన పంచముఖ లింగం", desc: "పుష్కరిణి నీటిలో ఉన్న అరుదైన ఐదు ముఖాల శివలింగం." },
    mr: { name: "पाण्याखालील पंचमुखी शिवलिंग", desc: "विष्णू पुष्करिणीच्या पाण्यात अंशतः बुडालेले दुर्मीळ पंचमुखी शिवलिंग." },
    ml: { name: "വെള്ളത്തിൽ മുങ്ങിയ പഞ്ചമുഖ ലിംഗം", desc: "പുഷ്കരിണി കുളത്തിലെ ജലത്തിൽ സ്ഥിതി ചെയ്യുന്ന അപൂർവ്വ ശിവലിംഗം." }
  },
  "Mahakuta Pillar Inscription site": {
    en: { name: "Mahakuta Pillar Inscription site", desc: "Site of the landmark 602 CE red sandstone pillar inscription of King Mangalesha." },
    kn: { name: "ಮಹಾಕೂಟ ಸ್ತಂಭ ಶಾಸನ ತಾಣ", desc: "ಚಾಲುಕ್ಯ ವಂಶಾವಳಿ ಹಾಗೂ ವಿಜಯಗಳನ್ನು ಸಾರುವ ಕ್ರಿ.ಶ. ೬೦೨ ರ ಮಂಗಲೇಶ ರಾಜನ ಕೆಂಪು ಕಲ್ಲಿನ ಸ್ತಂಭ ಶಾಸನದ ಸ್ಥಳ." },
    hi: { name: "महाकूट स्तंभ शिलालेख स्थल", desc: "राजा मंगलेश के 602 ईस्वी के ऐतिहासिक लाल बलुआ पत्थर के स्तंभ शिलालेख का मूल स्थल।" },
    ta: { name: "மகாகூடா தூண் கல்வெட்டு தளம்", desc: "மன்னர் மங்களேஷனின் கி.பி. 602 வரலாற்று தூண் கல்வெட்டு தளம்." },
    te: { name: "మహాకూట స్తంభ శాసన ప్రదేశం", desc: "క్రీ.శ. 602 నాటి మంగళేశుని చారిత్రక స్తంభ శాసన స్థలం." },
    mr: { name: "महाकूट स्तंभालेख स्थळ", desc: "राजा मंगलेश यांच्या ६०२ च्या ऐतिहासिक स्तंभालेखाचे मूळ स्थान." },
    ml: { name: "മഹാകൂട സ്തംഭ ശാസന സ്ഥലം", desc: "എഡി 602-ലെ ചരിത്രപ്രസിദ്ധമായ ശിലാ സ്തംഭ ശാസനം." }
  },

  // Kudala Sangama
  "Sangameshwara Temple (Chalukyan style)": {
    en: { name: "Sangameshwara Temple (Chalukyan style)", desc: "Ancient 12th-century Chalukyan temple dedicated to Lord Sangameshwara at the Krishna-Malaprabha confluence." },
    kn: { name: "ಸಂಗಮೇಶ್ವರ ದೇವಾಲಯ (ಚಾಲುಕ್ಯ ಶೈಲಿ)", desc: "ಕೃಷ್ಣಾ ಮತ್ತು ಮಲಪ್ರಭಾ ನದಿಗಳ ಸಂಗಮದಲ್ಲಿರುವ ೧೨ನೇ ಶತಮಾನದ ಪುರಾತನ ಸಂಗಮೇಶ್ವರ ದೇಗುಲ." },
    hi: { name: "संगमेश्वर मंदिर (चालुक्य शैली)", desc: "कृष्णा और मलप्रभा के संगम पर स्थित 12वीं शताब्दी का प्राचीन संगमेश्वर मंदिर।" },
    ta: { name: "சங்கமேஸ்வரர் கோவில் (சாளுக்கிய பாணி)", desc: "நதி சங்கமத்தில் அமைந்துள்ள 12ஆம் நூற்றாண்டு கோவில்." },
    te: { name: "సంగమేశ్వర దేవాలయం (చాళుక్య శైలి)", desc: "కృష్ణా-మలప్రభ సంగమంలో ఉన్న 12వ శతాబ్దపు ఆలయం." },
    mr: { name: "संगमेश्वर मंदिर (चालुक्य शैली)", desc: "कृष्णा-मलप्रभा संगमावरील १२व्या शतकातील प्राचीन मंदिर." },
    ml: { name: "സംഗമേശ്വര ക്ഷേത്രം (ചാലൂക്യ ശൈലി)", desc: "നദീസംഗമത്തിലെ പന്ത്രണ്ടാം നൂറ്റാണ്ടിലെ ക്ഷേത്രം." }
  },
  "Museum of Basava Philosophy": {
    en: { name: "Museum of Basava Philosophy", desc: "Dedicated museum showcasing the egalitarian philosophy, Vachana literature, and socio-religious revolution of Basaveshwara." },
    kn: { name: "ಬಸವ ತತ್ವ ಸಂಗ್ರಹಾಲಯ", desc: "ಬಸವೇಶ್ವರರ ಸಮಾನತೆಯ ತತ್ವಗಳು, ವಚನ ಸಾಹಿತ್ಯ ಮತ್ತು ಕಲ್ಯಾಣ ಕ್ರಾಂತಿಯನ್ನು ಬಿಂಬಿಸುವ ಭವ್ಯ ಸಂಗ್ರಹಾಲಯ." },
    hi: { name: "बसव दर्शन संग्रहालय", desc: "बसवेश्वर के समानता के दर्शन, वचन साहित्य और सामाजिक क्रांति को समर्पित संग्रहालय।" },
    ta: { name: "பசவ தத்துவ அருங்காட்சியகம்", desc: "பசவேஸ்வரரின் சமத்துவ தத்துவம் மற்றும் வசன இலக்கிய அருங்காட்சியகம்." },
    te: { name: "బసవ తత్వ మ్యూజియం", desc: "బసవేశ్వరుల సమానత్వ సిద్ధాంతం మరియు వచన సాహిత్య ప్రదర్శనశాల." },
    mr: { name: "बसव दर्शन संग्रहालय", desc: "महात्मा बसवेश्वरांचे वचन साहित्य आणि तत्वज्ञान दर्शविणारे संग्रहालय." },
    ml: { name: "ബസവ തത്ത്വചിന്താ മ്യൂസിയം", desc: "ബസവേശ്വരന്റെ വചന സാഹിത്യവും തത്ത്വചിന്തകളും പ്രദർശിപ്പിക്കുന്ന മ്യൂസിയം." }
  },

  // Ilkal
  "Weaver Cluster Workshops (Pit loom demonstrations)": {
    en: { name: "Weaver Cluster Workshops (Pit loom demonstrations)", desc: "Traditional pit loom weaving workshops crafting GI-tagged Ilkal sarees with distinctive Tope Teni red silk pallu." },
    kn: { name: "ನೇಕಾರರ ಕಾರ್ಯಾಗಾರಗಳು (ಕುಳಿಮಗ್ಗ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ)", desc: "ಜಿಐ ಮಾನ್ಯತೆಯ ಇಳಕಲ್ ಸೀರೆಗಳನ್ನು ಟೋಪ ತೇಣಿ ರೇಷ್ಮೆ ಪಲ್ಲು ಸಮೇತ ನೇಯುವ ಸಾಂಪ್ರದಾಯಿಕ ಕುಳಿಮಗ್ಗ ಕಾರ್ಯಾಗಾರಗಳು." },
    hi: { name: "बुनकर कार्यशालाएं (पिट लूम प्रदर्शन)", desc: "पारंपरिक गड्ढा-करघा (पिट लूम) कार्यशालाएं जहां जीआई टैग इलकल साड़ियों की बुनाई का सीधा प्रदर्शन होता है।" },
    ta: { name: "நெசவாளர் பட்டறைகள் (குழித்தறி செயல்முறை)", desc: "இல்கல் புவிசார் குறியீடு சேலைகள் நெய்யப்படும் பாரம்பரிய குழித்தறி பட்டறைகள்." },
    te: { name: "చేనేత వర్క్‌షాప్‌లు (మగ్గాల ప్రదర్శన)", desc: "ఇల్కల్ చీరల తయారీని ప్రత్యక్షంగా చూపే సంప్రదాయ మగ్గాల కేంద్రం." },
    mr: { name: "विणकर कार्यशाळा (हातमाग प्रात्यक्षिक)", desc: "जीआय मानांकित इलकल साड्यांची निर्मिती करणाऱ्या पारंपारिक हातमाग कार्यशाळा." },
    ml: { name: "നെയ്ത്തുശാലകൾ (തറി പ്രദർശനം)", desc: "ഇൽക്കൽ സാരികൾ പരമ്പരാഗത തറികളിൽ നെയ്യുന്ന ശാലകൾ." }
  },
  "Shri Vijaya Mahantesh Temple & Matha": {
    en: { name: "Shri Vijaya Mahantesh Temple & Matha", desc: "Revered spiritual monastery in Ilkal established by Sri Vijaya Mahantesh Shivayogi, offering community service and Dasoha." },
    kn: { name: "ಶ್ರೀ ವಿಜಯ ಮಹಾಂತೇಶ ಮಠ ಮತ್ತು ದೇವಾಲಯ", desc: "ಶ್ರೀ ವಿಜಯ ಮಹಾಂತೇಶ ಶಿವಯೋಗಿಗಳಿಂದ ಸ್ಥಾಪಿತವಾದ ಇಳಕಲ್‌ನ ಪವಿತ್ರ ಮಠ; ದಾಸೋಹ ಮತ್ತು ಸಾಮಾಜಿಕ ಸೇವೆಗೆ ಪ್ರಸಿದ್ಧ." },
    hi: { name: "श्री विजय महंतेश मंदिर एवं मठ", desc: "इलकल का पूजनीय आध्यात्मिक मठ जो दैनिक निःशुल्क अन्नदान (दासोह) और समाज सेवा के लिए विख्यात है।" },
    ta: { name: "ஸ்ரீ விஜய மஹாந்தேஷ் மடம்", desc: "இல்கல்லில் உள்ள ஆன்மீக மடம் மற்றும் அன்னதான தளம்." },
    te: { name: "శ్రీ విజయ మహాంతేష్ మఠం & దేవాలయం", desc: "ఇల్కల్‌లోని ప్రముఖ ఆధ్యాత్మిక మఠం మరియు అన్నదాన కేంద్రం." },
    mr: { name: "श्री विजय महंतेश मंदिर व मठ", desc: "इलकलमधील प्रसिद्ध आध्यात्मिक मठ, जो दासोह (अन्नदान) सेवेसाठी ओळखला जातो." },
    ml: { name: "ശ്രീ വിജയ മഹാന്തേഷ് മഠം", desc: "ഇൽക്കലിലെ ആത്മീയ കേന്ദ്രവും ദാസോഹ (അന്നദാന) ശാലയും." }
  },
  "Kasuti Embroidery Artisans Guilds": {
    en: { name: "Kasuti Embroidery Artisans Guilds", desc: "Master artisans preserving the 7th-century GI-tagged Kasuti needlecraft of Karnataka, stitched without knots." },
    kn: { name: "ಕಸೂತಿ ಕರಕುಶಲ ಕಲಾವಿದರ ಸಂಘ", desc: "ಗಂಟುಗಳಿಲ್ಲದೆ ಸೂಜಿಯಲ್ಲೇ ಚಿತ್ರ ಬಿಡಿಸುವ ೭ನೇ ಶತಮಾನದ ಜಿಐ ಮಾನ್ಯತೆಯ ಕರ್ನಾಟಕದ ಹೆಮ್ಮೆಯ ಕಸೂತಿ ಕಲೆ." },
    hi: { name: "कसूती कढ़ाई कारीगर गिल्ड", desc: "बिना गांठ वाली 7वीं सदी की पारंपरिक जीआई कसूती सुईशिल्प को संरक्षित करने वाले कुशल कारीगर।" },
    ta: { name: "கசூதி பூத்தையல் கைவினைஞர் சங்கம்", desc: "முடிச்சுகள் இல்லாமல் தைக்கப்படும் பழங்கால புவிசார் குறியீடு கசூதி பூத்தையல் கலை." },
    te: { name: "కసూతి ఎంబ్రాయిడరీ కళాకారుల సంఘం", desc: "ముడులు లేకుండా సూదితో అల్లే పురాతన కసూతి కళాకారులు." },
    mr: { name: "कसूती भरतकाम कारागीर संस्था", desc: "कोणतीही गाठ न घालता सुईने केले जाणारे ७व्या शतकातील पारंपारिक कसूती भरतकाम." },
    ml: { name: "കസൂതി എംബ്രോയിഡറി കരകൗശല സംഘം", desc: "കെട്ടുകളില്ലാതെ തുന്നിയെടുക്കുന്ന പാരമ്പര്യ കസൂതി തയ്യൽ കല." }
  },

  // Guledagudda
  "Traditional Khana Handloom Weaving Units": {
    en: { name: "Traditional Khana Handloom Weaving Units", desc: "Centuries-old handloom weaving units producing India's only GI-tagged dobby-woven blouse fabric (Guledgudd Khana)." },
    kn: { name: "ಸಾಂಪ್ರದಾಯಿಕ ಖಣ ಕೈಮಗ್ಗ ಘಟಕಗಳು", desc: "ಭಾರತದ ಏಕೈಕ ಜಿಐ ಮಾನ್ಯತೆಯ ರವಿಕೆ ಬಟ್ಟೆ 'ಗುಳೇದಗುಡ್ಡ ಖಣ' ತಯಾರಿಸುವ ಶತಮಾನಗಳ ಇತಿಹಾಸವುಳ್ಳ ಕೈಮಗ್ಗ ಘಟಕಗಳು." },
    hi: { name: "पारंपरिक खण हथकरघा इकाइयां", desc: "भारत का एकमात्र जीआई टैग प्राप्त चोली वस्त्र 'गुलेदगुद्द खण' बनाने वाली ऐतिहासिक हथकरघा इकाइयां।" },
    ta: { name: "பாரம்பரிய கணா கைத்தறி நெசவு கூடங்கள்", desc: "இந்தியாவின் ஒரே புவிசார் குறியீடு கணா ரவிக்கை துணி தயாரிக்கும் பட்டறைகள்." },
    te: { name: "సంప్రదాయ ఖణా చేనేత యూనిట్లు", desc: "భారతదేశంలో ఏకైక జీఐ గుర్తింపు పొందిన ఖణా బ్లౌజ్ వస్త్రాల తయారీ కేంద్రాలు." },
    mr: { name: "पारंपारिक खण हातमाग युनिट्स", desc: "भारतातील एकमेव जीआय मानांकित 'गुळेदगुड्ड खण' तयार करणारी पारंपारिक हातमाग केंद्रे." },
    ml: { name: "പരമ്പരാഗത ഖാന കൈത്തറി യൂണിറ്റുകൾ", desc: "ഇന്ത്യയിലെ ഏക ജിഐ ടാഗുള്ള ഖാന ബ്ലൗസ് തുണിത്തരങ്ങൾ നെയ്യുന്ന യൂണിറ്റുകൾ." }
  },

  // Mudhol
  "Canine Research and Information Centre (CRIC Mudhol Hound Centre)": {
    en: { name: "CRIC Mudhol Hound Research Centre", desc: "Government breeding and conservation center preserving the pure royal lineage of the indigenous Mudhol Hound sight hound." },
    kn: { name: "ಮುಧೋಳ ಹೌಂಡ್ ಶ್ವಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ (CRIC)", desc: "ರಾಜಮನೆತನದ ಮುಧೋಳ ಹೌಂಡ್ ಶ್ವಾನ ತಳಿಯ ಶುದ್ಧ ವಂಶಾವಳಿಯನ್ನು ಸಂರಕ್ಷಿಸುವ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಶ್ವಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ." },
    hi: { name: "मुधोल हाउंड अनुसंधान एवं सूचना केंद्र", desc: "देशी शाही मुधोल हाउंड श्वान नस्ल के संरक्षण और प्रजनन हेतु सरकारी शोध केंद्र।" },
    ta: { name: "முதோல் ஹவுண்ட் நாய் ஆராய்ச்சி மையம்", desc: "முதோல் வேட்டை நாய் இனத்தின் தூய்மையான பரம்பரையை பாதுகாக்கும் அரசு மையம்." },
    te: { name: "ముధోల్ హౌండ్ పరిశోధనా కేంద్రం (CRIC)", desc: "రాజవంశపు ముధోల్ హౌండ్ శునక జాతి స్వచ్ఛతను పరిరక్షించే ప్రభుత్వ పరిశోధనా కేంద్రం." },
    mr: { name: "मुधोळ हाउंड श्वान संशोधन केंद्र", desc: "देशी मुधोळ हाउंड या शिकारी श्वान जातीचे संवर्धन करणारे शासकीय केंद्र." },
    ml: { name: "മുധോൾ ഹൗണ്ട് ഗവേഷണ കേന്ദ്രം", desc: "മുധോൾ ഹൗണ്ട് നായ്ക്കളുടെ തനത് വംശം സംരക്ഷിക്കുന്ന സർക്കാർ ഗവേഷണ കേന്ദ്രം." }
  },
  "Mudhol Royal Palace & Fort ruins": {
    en: { name: "Mudhol Royal Palace & Fort ruins", desc: "Historic seat of the Ghorpade Maratha rulers featuring battlements and royal artifacts along the Ghataprabha River." },
    kn: { name: "ಮುಧೋಳ ರಾಜಮನೆತನದ ಅರಮನೆ ಮತ್ತು ಕೋಟೆ ಅವಶೇಷಗಳು", desc: "ಘಟಪ್ರಭಾ ನದಿಯ ದಂಡೆಯಲ್ಲಿರುವ ಘೋರ್ಪಡೆ ಮರಾಠಾ ರಾಜರ ಐತಿಹಾಸಿಕ ಕೋಟೆ ಮತ್ತು ಅರಮನೆಯ ಅವಶೇಷಗಳು." },
    hi: { name: "मुधोल राजमहल एवं किला अवशेष", desc: "घटप्रभा नदी के किनारे घोरपड़े मराठा शासकों का ऐतिहासिक किला और महल के अवशेष।" },
    ta: { name: "முதோல் அரச அரண்மனை & கோட்டை இடிபாடுகள்", desc: "கதபிரபா நதிக்கரையில் அமைந்துள்ள மராட்டிய கோர்படே அரசர்களின் வரலாற்று கோட்டை." },
    te: { name: "ముధోల్ రాజభవనం & కోట శిథిలాలు", desc: "ఘటప్రభ నది ఒడ్డున ఉన్న చారిత్రక ఘోర్పడే రాజకోట." },
    mr: { name: "मुधोळ राजवाडा आणि किल्ला अवशेष", desc: "घटप्रभा नदीकाठचा घोरपडे मराठा संस्थानिकांचा ऐतिहासिक किल्ला." },
    ml: { name: "മുധോൾ രാജകൊട്ടാരവും കോട്ട അവശിഷ്ടങ്ങളും", desc: "ഘടപ്രഭാ നദീതീരത്തെ ചരിത്രപ്രസിദ്ധമായ കോട്ടയും കൊട്ടാര അവശിഷ്ടങ്ങളും." }
  },

  // Jamkhandi
  "Jamkhandi Royal Palace (Ram Prasad Palace)": {
    en: { name: "Jamkhandi Royal Palace (Ram Prasad Palace)", desc: "Grand 19th-century royal palace of the Patwardhan Maratha dynasty, showcasing European-Maratha durbar halls." },
    kn: { name: "ಜಮಖಂಡಿ ರಾಜಮನೆತನದ ಅರಮನೆ (ರಾಮಪ್ರಸಾದ್ ದರ್ಬಾರ್)", desc: "ಪಟವರ್ಧನ ಮರಾಠಾ ರಾಜವಂಶದ ೧೯ನೇ ಶತಮಾನದ ಭವ್ಯ ರಾಮಪ್ರಸಾದ್ ಅರಮನೆ ಮತ್ತು ರಾಜ ದರ್ಬಾರ್ ಹಾಲ್." },
    hi: { name: "जमखंडी राजमहल (राम प्रसाद पैलेस)", desc: "पटवर्धन मराठा राजवंश का 19वीं सदी का भव्य राम प्रसाद महल, जिसमें शाही दरबार हॉल स्थित है।" },
    ta: { name: "ஜம்கண்டி அரச அரண்மனை (ராம் பிரசாத் அரண்மனை)", desc: "19ஆம் நூற்றாண்டு பட்வர்தன் மன்னர்களின் கம்பீரமான தர்பார் அரண்மனை." },
    te: { name: "జంఖండి రాజభవనం (రామ్ ప్రసాద్ ప్యాలెస్)", desc: "పాట్వర్ధన్ రాజవంశానికి చెందిన 19వ శతాబ్దపు రామ్ ప్రసాద్ ప్యాలెస్." },
    mr: { name: "जमखंडी राजवाडा (राम प्रसाद पॅलेस)", desc: "पटवर्धन घराण्याचा १९व्या शतकातील भव्य राम प्रसाद राजवाडा आणि दरबार हॉल." },
    ml: { name: "ജംഖണ്ഡി രാജകൊട്ടാരം (രാം പ്രസാദ് പാലസ്)", desc: "പട്വർദ്ധൻ രാജവംശത്തിന്റെ 19-ാം നൂറ്റാണ്ടിലെ പ്രൗഢഗംഭീരമായ കൊട്ടാരം." }
  },
  "Pampa Sarovara Lake": {
    en: { name: "Pampa Sarovara Lake", desc: "Historic freshwater lake in Jamkhandi surrounded by scenic hills, associated with local folklore and sunset views." },
    kn: { name: "ಪಂಪಾ ಸರೋವರ", desc: "ಬೆಟ್ಟಗಳಿಂದ ಸುತ್ತುವರೆದಿರುವ ಜಮಖಂಡಿಯ ಐತಿಹಾಸಿಕ ಸಿಹಿನೀರಿನ ಸರೋವರ; ಸುಂದರ ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಹೆಸರುವಾಸಿ." },
    hi: { name: "पंपा सरोवर", desc: "जमखंडी की पहाड़ियों के बीच स्थित ऐतिहासिक मीठे पानी की झील, जो सूर्यास्त के सुंदर दृश्यों के लिए प्रसिद्ध है।" },
    ta: { name: "பம்பா சரோவர ஏரி", desc: "மலைகளால் சூழப்பட்ட வரலாற்று சிறப்புமிக்க ஏரி, சூரிய அஸ்தமனத்திற்கு பிரபலமானது." },
    te: { name: "పంపా సరోవరం", desc: "కొండల నడుమ ఉన్న చారిత్రక మంచినీటి సరస్సు, సూర్యాస్తమయ వీక్షణకు ప్రసిద్ధి." },
    mr: { name: "पंपा सरोवर", desc: "डोंगरांच्या कुशीत वसलेला ऐतिहासिक गोड्या पाण्याचा तलाव." },
    ml: { name: "പമ്പാ സരോവരം", desc: "കുന്നുകളാൽ ചുറ്റപ്പെട്ട ചരിത്രപ്രസിദ്ധമായ തടാകം." }
  },

  // Bilagi
  "Siddheshwara Temple": {
    en: { name: "Siddheshwara Temple Bilagi", desc: "Ancient Chalukyan-style temple dedicated to Lord Siddheshwara in Bilagi, renowned for ornate pillars and sanctum shikhara." },
    kn: { name: "ಸಿದ್ಧೇಶ್ವರ ದೇವಾಲಯ ಬೀಳಗಿ", desc: "ಬೀಳಗಿಯ ಪ್ರಾಚೀನ ಚಾಲುಕ್ಯ ಶೈಲಿಯ ಸಿದ್ಧೇಶ್ವರ ದೇಗುಲ; ಕೆತ್ತನೆಯ ಕಂಬಗಳು ಮತ್ತು ರಥೋತ್ಸವಕ್ಕೆ ಖ್ಯಾತಿ." },
    hi: { name: "सिद्धेश्वर मंदिर बीलगी", desc: "बीलगी का प्राचीन चालुक्य शैली का सिद्धेश्वर मंदिर, जो नक्काशीदार खंभों और वार्षिक रथोत्सव के लिए प्रसिद्ध है।" },
    ta: { name: "சித்தேஸ்வரர் கோவில் பீலகி", desc: "சாளுக்கிய பாணியில் கட்டப்பட்ட வரலாற்று சிறப்புமிக்க சிவன் கோவில்." },
    te: { name: "సిద్ధేశ్వర దేవాలయం బీళగి", desc: "అందమైన రాతి స్తంభాలతో నిర్మించిన ప్రాచీన చాళుక్య ఆలయం." },
    mr: { name: "सिद्धेश्वर मंदिर बिलगी", desc: "चालुक्य स्थापत्य शैलीतील प्रसिद्ध सिद्धेश्वर मंदिर." },
    ml: { name: "സിദ്ധേശ്വര ക്ഷേത്രം ബിലഗി", desc: "ബിലഗിയിലെ പുരാതന ചാലൂക്യ ശൈലിയിലുള്ള ശിവക്ഷേത്രം." }
  },
  "Ghataprabha backwaters viewpoint": {
    en: { name: "Ghataprabha backwaters viewpoint", desc: "Picturesque panoramic viewpoint overlooking the expansive backwaters of the Ghataprabha river in Bilagi." },
    kn: { name: "ಘಟಪ್ರಭಾ ಹಿನ್ನೀರು ವೀಕ್ಷಣಾ ತಾಣ", desc: "ಬೀಳಗಿ ತಾಲೂಕಿನಲ್ಲಿ ಘಟಪ್ರಭಾ ನದಿಯ ರಮಣೀಯ ಹಿನ್ನೀರಿನ ವಿಹಂಗಮ ನೋಟ ನೀಡುವ ಸುಂದರ ತಾಣ." },
    hi: { name: "घटप्रभा बैकवाटर्स व्यू पॉइंट", desc: "बीलगी में घटप्रभा नदी के विशाल बैकवाटर का मनोरम दृश्य प्रस्तुत करने वाला सुंदर स्थल।" },
    ta: { name: "கதபிரபா உப்பங்கழி காட்சி தளம்", desc: "கதபிரபா நதியின் அழகிய பரந்த காட்சியை வழங்கும் இயற்கை தளம்." },
    te: { name: "ఘటప్రభ బ్యాక్‌వాటర్స్ వ్యూ పాయింట్", desc: "ఘటప్రభ నది యొక్క సుందరమైన విస్తార దృశ్యాలను అందించే ప్రదేశం." },
    mr: { name: "घटप्रभा बॅकवॉटर व्ह्यू पॉइंट", desc: "घटप्रभा नदीच्या बॅकवॉटरचा विहंगम नजराणा देणारे निसर्गरम्य ठिकाण." },
    ml: { name: "ഘടപ്രഭാ ബാക്ക്‌വാട്ടർ വ്യൂ പോയിന്റ്", desc: "ഘടപ്രഭാ നദിയുടെ വിസ്തൃതമായ കായൽ കാഴ്ചകൾ നൽകുന്ന പ്രകൃതിദത്ത സ്ഥലം." }
  }
};

// ── Taluks Localized Names ───────────────────────────────────────────────────
const TALUKS_I18N = {
  All:        { en: "All Taluks", kn: "ಎಲ್ಲಾ ತಾಲೂಕುಗಳು", hi: "सभी तालुक", ta: "அனைத்து தாலுகாக்கள்", te: "అన్ని తాలూకాలు", mr: "सर्व तालुके", ml: "എല്ലാ താലൂക്കുകളും" },
  Badami:     { en: "Badami", kn: "ಬಾದಾಮಿ", hi: "बादामी", ta: "பாதாமி", te: "బాదామి", mr: "बादामी", ml: "ബദാമി" },
  Bagalkote:  { en: "Bagalkote", kn: "ಬಾಗಲಕೋಟೆ", hi: "बागलकोट", ta: "பாகல்கோட்டை", te: "బాగల్‌కోట్", mr: "बागलकोट", ml: "ബാഗൽകോട്ട്" },
  Hunagund:   { en: "Hunagund", kn: "ಹುನಗುಂದ", hi: "हुनगुंड", ta: "ஹுனகுண்ட்", te: "హునగుండ్", mr: "हुनगुंड", ml: "ഹുനഗുണ്ട്" },
  Ilkal:      { en: "Ilkal", kn: "ಇಳಕಲ್", hi: "इलकल", ta: "இல்கல்", te: "ఇల్కల్", mr: "इलकल", ml: "ഇൽക്കൽ" },
  Guledagudda:{ en: "Guledagudda", kn: "ಗುಳೇದಗುಡ್ಡ", hi: "गुलेदगुड्डा", ta: "குலேதகுடா", te: "గులేదగుడ్డ", mr: "गुळेदगुड्ड", ml: "ഗുലേദഗുഡ്ഡ" },
  Mudhol:     { en: "Mudhol", kn: "ಮುಧೋಳ", hi: "मुधोल", ta: "முதோல்", te: "ముధోల్", mr: "मुधोळ", ml: "മുധോൾ" },
  Jamkhandi:  { en: "Jamkhandi", kn: "ಜಮಖಂಡಿ", hi: "जमखंडी", ta: "ஜம்கண்டி", te: "జంఖండి", mr: "जमखंडी", ml: "ജംഖണ്ഡി" },
  Bilagi:     { en: "Bilagi", kn: "ಬೀಳಗಿ", hi: "बीलगी", ta: "பீலகி", te: "బీళగి", mr: "बिलगी", ml: "ബിലഗി" },
  Banhatti:   { en: "Rabkavi Banhatti", kn: "ರಬಕವಿ ಬನಹಟ್ಟಿ", hi: "रबकवि बनहट्टी", ta: "ரபகவி பனஹட்டி", te: "రబకవి బనహట్టి", mr: "रबकवी बनहट्टी", ml: "റബകവി ബനഹട്ടി" }
};

// ── Categories Localized Names ───────────────────────────────────────────────
const CATEGORIES_I18N = {
  "Heritage": {
    en: "Heritage & Caves", kn: "ಪರಂಪರೆ ಮತ್ತು ಗುಹೆಗಳು", hi: "धरोहर एवं गुफाएं", ta: "பாரம்பரியம் & குகைகள்", te: "వారసత్వం & గుహాలయాలు", mr: "वारसा व गुंफा", ml: "പൈതൃകം & ഗുഹകൾ"
  },
  "Craft": {
    en: "Art & GI Handlooms", kn: "ಕಲೆ ಮತ್ತು ಜಿಐ ಕೈಮಗ್ಗ", hi: "कला एवं जीआई हथकरघा", ta: "கலை & கைத்தறி", te: "కళలు & చేనేత", mr: "कला व जीआय हातमाग", ml: "കല & കൈത്തറി"
  },
  "Food": {
    en: "Local Food", kn: "ಸ್ಥಳೀಯ ಆಹಾರ", hi: "स्थानीय भोजन", ta: "உள்ளூர் உணவு", te: "స్థానిక ఆహారం", mr: "स्थानिक खाद्यसंस्कृती", ml: "പ്രാദേശിക ഭക്ഷണങ്ങൾ"
  },
  "Spiritual": {
    en: "Spiritual", kn: "ಆಧ್ಯಾತ್ಮಿಕ", hi: "आध्यात्मिक", ta: "ஆன்மீகம்", te: "ఆధ్యాత్మికం", mr: "आध्यात्मिक", ml: "ആത്മീയത"
  },
  "Nature": {
    en: "Nature & Dams", kn: "ಪ್ರಕೃತಿ ಮತ್ತು ಅಣೆಕಟ್ಟುಗಳು", hi: "प्रकृति एवं बांध", ta: "இயற்கை & அணைகள்", te: "ప్రకృతి & ఆనకట్టలు", mr: "निसर्ग व धरणे", ml: "പ്രകൃതി & അണക്കെട്ടുകൾ"
  },

  "All": {
    en: "All Experiences", kn: "ಎಲ್ಲಾ ಅನುಭವಗಳು", hi: "सभी अनुभव", ta: "அனைத்து அனுபவங்கள்", te: "అన్ని అనుభవాలు", mr: "सर्व अनुभव", ml: "എല്ലാ അനുഭവങ്ങളും"
  },
  "Heritage & Caves": {
    en: "Heritage & Caves", kn: "ಪರಂಪರೆ ಮತ್ತು ಗುಹೆಗಳು", hi: "धरोहर एवं गुफाएं", ta: "பாரம்பரியம் & குகைகள்", te: "వారసత్వం & గుహాలయాలు", mr: "वारसा व गुंफा", ml: "പൈതൃകം & ഗുഹകൾ"
  },
  "Art & GI Handlooms": {
    en: "Art & GI Handlooms", kn: "ಕಲೆ ಮತ್ತು ಜಿಐ ಕೈಮಗ್ಗ", hi: "कला एवं जीआई हथकरघा", ta: "கலை & கைத்தறி", te: "కళలు & చేనేత", mr: "कला व जीआय हातमाग", ml: "കല & കൈത്തറി"
  },
  "Local Food & Khanavalis": {
    en: "Local Food & Khanavalis", kn: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ", hi: "स्थानीय भोजन एवं खानावलि", ta: "உள்ளூர் உணவு & கானாங்கி", te: "స్థానిక ఆహారం & ఖానావళులు", mr: "स्थानिक खाद्यसंस्कृती", ml: "പ്രാദേശിക ഭക്ഷണങ്ങൾ"
  },
  "Spiritual & Confluence": {
    en: "Spiritual & Confluence", kn: "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಸಂಗಮ", hi: "आध्यात्मिक एवं संगम", ta: "ஆன்மீகம் & நதி சங்கமம்", te: "ఆధ్యాత్మికం & సంగమం", mr: "आध्यात्मिक व संगम", ml: "ആത്മീയത & സംഗമം"
  },
  "Nature & Dam Gardens": {
    en: "Nature & Dam Gardens", kn: "ಪ್ರಕೃತಿ ಮತ್ತು ಅಣೆಕಟ್ಟು ಉದ್ಯಾನ", hi: "प्रकृति एवं बांध उद्यान", ta: "இயற்கை & அணை தோட்டங்கள்", te: "ప్రకృతి & ఆనకట్టలు", mr: "निसर्ग व धरण उद्याने", ml: "പ്രകൃതി & അണക്കെട്ട്"
  },
  "Accessible Tourism": {
    en: "Accessible Tourism", kn: "ಸುಲಭ ಪ್ರವಾಸೋದ್ಯಮ", hi: "सुलभ पर्यटन", ta: "அணுகக்கூடிய சுற்றுலா", te: "అందుబాటు పర్యాటకం", mr: "सुलभ पर्यटन", ml: "പ്രാപ്യമായ ടൂറിസം"
  },
  "Local Businesses": {
    en: "Local Businesses", kn: "ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳು", hi: "स्थानीय व्यवसाय", ta: "உள்ளூர் வணிகங்கள்", te: "స్థానిక వ్యాపారాలు", mr: "स्थानिक व्यवसाय", ml: "പ്രാദേശിക ബിസിനസുകൾ"
  }
};

// ── Active Language State ─────────────────────────────────────────────────────
let currentLanguage = localStorage.getItem('bgk_preferred_lang') || 'en';

// ── Localized Data Getters ───────────────────────────────────────────────────
window.getLocalizedDestination = function(dest, lang) {
  const l = lang || currentLanguage || 'en';
  if (!dest) return null;
  const entry = DESTINATIONS_I18N[dest.id];
  if (entry && entry[l]) {
    return {
      ...dest,
      name: entry[l].name || dest.name,
      taluk: (TALUKS_I18N[dest.taluk] && TALUKS_I18N[dest.taluk][l]) || dest.taluk,
      category: entry[l].category || dest.category,
      description: entry[l].description || dest.description,
      historical_significance: entry[l].historical_significance || dest.historical_significance,
      architecture: entry[l].architecture || dest.architecture,
      transport_information: {
        ...(dest.transport_information || {}),
        bus_connectivity: entry[l].transport || (dest.transport_information && dest.transport_information.bus_connectivity)
      }
    };
  }
  // Fallback taluk localization
  if (TALUKS_I18N[dest.taluk] && TALUKS_I18N[dest.taluk][l]) {
    return { ...dest, taluk: TALUKS_I18N[dest.taluk][l] };
  }
  return dest;
};

window.getLocalizedAttraction = function(attractionName, lang) {
  const l = lang || currentLanguage || 'en';
  const entry = ATTRACTIONS_I18N[attractionName];
  if (entry && entry[l]) {
    return entry[l];
  }
  return { name: attractionName, desc: '' };
};

window.getLocalizedAttractionName = function(attractionName, lang) {
  const l = lang || currentLanguage || 'en';
  const entry = ATTRACTIONS_I18N[attractionName];
  if (entry && entry[l] && entry[l].name) {
    return entry[l].name;
  }
  return attractionName;
};

window.getLocalizedTalukName = function(talukKey, lang) {
  const l = lang || currentLanguage || 'en';
  return (TALUKS_I18N[talukKey] && TALUKS_I18N[talukKey][l]) || talukKey;
};

window.getLocalizedCategoryName = function(catKey, lang) {
  const l = lang || currentLanguage || 'en';
  return (CATEGORIES_I18N[catKey] && CATEGORIES_I18N[catKey][l]) || catKey;
};

// ── Global Set Language Function ──────────────────────────────────────────────
window.setLanguage = function(lang) {
  if (!translations[lang]) {
    console.warn(`[I18N] Language code "${lang}" not found in translations. Defaulting to 'en'.`);
    lang = 'en';
  }
  currentLanguage = lang;
  localStorage.setItem('bgk_preferred_lang', lang);
  document.body.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;

  // 1. Update text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 2. Update active state on all language selector buttons
  document.querySelectorAll('.lang-btn, .gov-lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang-code') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 3. Update Category scroll pills if present
  document.querySelectorAll('#categoryScroll .cat-pill').forEach(pill => {
    const cat = pill.getAttribute('data-cat');
    if (cat && CATEGORIES_I18N[cat] && CATEGORIES_I18N[cat][lang]) {
      const icon = pill.querySelector('.cat-icon')?.outerHTML || '';
      pill.innerHTML = (icon ? icon + ' ' : '') + CATEGORIES_I18N[cat][lang];
    }
  });

  // 4. Update Taluk select options if present
  const talukSelects = document.querySelectorAll('#talukSelect, #mapTalukSelect');
  talukSelects.forEach(sel => {
    Array.from(sel.options).forEach(opt => {
      const val = opt.value;
      if (TALUKS_I18N[val] && TALUKS_I18N[val][lang]) {
        opt.textContent = TALUKS_I18N[val][lang];
      }
    });
  });

  // 5. Update Map Layer labels if present
  const layerKeys = [
    { id: 'layerHeritage', key: 'layer_heritage' },
    { id: 'layerArtisans', key: 'layer_artisans' },
    { id: 'layerCulturalFood', key: 'layer_cultural_food' },
    { id: 'layerFood', key: 'layer_food' },
    { id: 'layerLodging', key: 'layer_lodging' },
    { id: 'layerEmergency', key: 'layer_emergency' }
  ];
  layerKeys.forEach(lk => {
    const cb = document.getElementById(lk.id);
    if (cb && cb.parentElement && translations[lang][lk.key]) {
      const span = cb.parentElement.querySelector('span');
      if (span) span.textContent = translations[lang][lk.key];
    }
  });

  // 6. Update AI Assistant drawer placeholder & greeting if active
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    const placeholders = {
      en: "Ask about heritage, routes, guides, food...",
      kn: "ಪರಂಪರೆ, ಮಾರ್ಗಗಳು, ಆಹಾರ, ಮಾರ್ಗದರ್ಶಿಗಳ ಬಗ್ಗೆ ಕೇಳಿ...",
      hi: "धरोहर, मार्ग, खानपान, गाइड के बारे में पूछें...",
      ta: "பாரம்பரியம், வழிகள், உணவு பற்றி கேளுங்கள்...",
      te: "వారసత్వం, మార్గాలు, ఆహారం గురించి అడగండి...",
      mr: "वारसा, मार्ग, अन्न, मार्गदर्शकांविषयी विचारा...",
      ml: "പൈതൃകം, വഴികൾ, ഭക്ഷണം എന്നിവയെക്കുറിച്ച് ചോദിക്കൂ..."
    };
    chatInput.placeholder = placeholders[lang] || placeholders.en;
  }

  // 7. Dispatch language changed event for reactive page controllers
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));

  // 8. If on Explore page or Homepage with destination loader, reload or re-render
  if (typeof window.loadDestinations === 'function') {
    const activePill = document.querySelector('#categoryScroll .cat-pill.active');
    const cat = activePill ? activePill.getAttribute('data-cat') : 'All';
    const taluk = document.getElementById('talukSelect')?.value || 'All';
    window.loadDestinations(cat, taluk);
  }
};

// ── Initialize on Page Load ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Wire up all lang buttons
  document.querySelectorAll('.lang-btn, .gov-lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const code = btn.getAttribute('data-lang-code');
      if (code) {
        window.setLanguage(code);
      }
    });
  });

  // Apply saved language
  const savedLang = localStorage.getItem('bgk_preferred_lang') || 'en';
  window.setLanguage(savedLang);
});
