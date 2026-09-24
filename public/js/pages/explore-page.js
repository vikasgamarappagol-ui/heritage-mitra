/**
 * Explore Page Controller
 * Handles: destination grid, category/taluk filter, detail modal,
 *          login gate for trip planning, tourist profile integration,
 *          attraction lightbox with verified images from /images/major_attractions/
 */

// ── Master list of verified image files in /images/major_attractions/ ────────
const MAJOR_ATTRACTION_FILES = [
  "01 Siddeshwara Devalaya Bilagi.jpg",
  "archeological museum badami.jpg",
  "ASI Archaeological Museum Aihole.jpg",
  "Badami North Fort & Upper Shivalaya.jpg",
  "badami north fort and upper shivalaya.jpg",
  "Badami Taluk Government General Hospital.jpg",
  "BadamiCave temples.jpg",
  "Banakar Towers Lodging & Boarding banhatti.jpg",
  "bhutanatha group of temples.jpg",
  "Bilagi River Valley Agro Resort & Homestay.jpg",
  "Canine Research and Information Centre (CRIC Mudhol Hound Centre).jpg",
  "Durga Temple Complex (Apsidal sanctum with ambulatory peristyle).jpg",
  "Galaganatha Temple (Curvilinear Nagara Shikhara).jpg",
  "Ghataprabha backwaters viewpoint.webp",
  "Hotel Akshay International.jpg",
  "Hotel Royal Executive & City Pride.jpg",
  "Hotel Shanti Sagar & Traditional Khanavali.jpg",
  "Hotel Sri Guru Krupa & Udupi Krishna Bhavan.jpg",
  "Huchimalli Temple.jpg",
  "Jain Narayana Temple (Rashtrakuta era).jpg",
  "Jamkhandi Royal Palace (Ram Prasad Palace).jpg",
  "Kamat Annaleela Traditional Restaurant.jpg",
  "Kasuti Embroidery Artisans Guilds.jpg",
  "Kerudi Hospital & Research Centre.jpg",
  "Konti Gudi Group.jpg",
  "KSTDC Mayura Garden Restaurant.jpg",
  "Kudalasangama Yatri Nivas & Board Guest Houses.jpg",
  "Lad Khan Temple (Panchayatana hall-style).jpg",
  "Mahakuta Pillar Inscription site.JPG",
  "Mahakuteshwara Temple.jpg",
  "Malegitti Shivalaya.jpg",
  "Mallikarjuna Temple (Trailokyeshwara).jpg",
  "Mallikarjuna Temple.jpg",
  "Meguti Jain Temple & Ravikirti Inscription.jpg",
  "Mudhol Royal Palace & Fort ruins.jpg",
  "Museum of Basava Philosophy.jpg",
  "Pampa_Sarovar_from_the_hill.jpg",
  "Papanatha Temple.jpg",
  "Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja).jpg",
  "Sangameshwara Temple (Chalukyan style).jpg",
  "Sangameshwara Temple (Vijayeshwara).jpg",
  "Shri Vijaya Mahantesh Temple & Matha.jpg",
  "Submerged Panchamukha Linga.jpg",
  "Traditional Khana Handloom Weaving Units.jpg",
  "Virupaksha Temple (Lokeshwara).jpg",
  "Vishnu Pushkarini (Sacred Spring Pool).jpg",
  "Weaver Cluster Workshops (Pit loom demonstrations).jpg"
];

// ── Attraction info database with authentic /images/major_attractions/ paths ──
const ATTRACTION_INFO = {
  // BADAMI
  "Badami Cave Temples (Caves 1-4)": {
    image: "/images/major_attractions/BadamiCave temples.jpg",
    desc: "Four magnificent rock-cut cave temples sculpted into red sandstone cliffs (6th century CE). Cave 1 is dedicated to Nataraja Shiva, Caves 2 & 3 to Vishnu (Trivikrama, Varaha), and Cave 4 to Jain Tirthankaras. Masterpiece of Early Chalukyan rock-cut architecture."
  },
  "Agastya Lake": {
    image: "/images/major_attractions/bhutanatha group of temples.jpg",
    desc: "A sacred man-made lake at the base of the sandstone cliffs, flanked by Bhoothanatha temples. The circumambulation path offers stunning views of the red cliffs and their reflections in the calm waters."
  },
  "Bhoothanatha Group of Temples": {
    image: "/images/major_attractions/bhutanatha group of temples.jpg",
    desc: "An early Chalukyan structural temple complex on the eastern bank of Agastya Lake. Dedicated to Shiva-Bhoothanatha, these sandstone temples blend Dravidian and Nagara architectural styles in a serene lakeside setting."
  },
  "Badami North Fort & Upper Shivalaya": {
    image: "/images/major_attractions/Badami North Fort & Upper Shivalaya.jpg",
    desc: "Perched atop the northern sandstone hill, the fort houses the Upper Shivalaya, one of the earliest Chalukyan structural temples. Offers panoramic views of the entire Badami town and the surrounding ravine landscape."
  },
  "Archaeological Museum Badami": {
    image: "/images/major_attractions/archeological museum badami.jpg",
    desc: "Managed by the Archaeological Survey of India (ASI), this museum houses a rich collection of sculptures, inscriptions, architectural fragments, and hero stones excavated from Badami and surrounding Chalukyan sites."
  },
  "Malegitti Shivalaya": {
    image: "/images/major_attractions/Malegitti Shivalaya.jpg",
    desc: "One of the earliest surviving freestanding stone temples in South India (early 7th century CE). Dedicated to Shiva, its simple but robust Nagara-Dravidian design on a rocky ridge marks a pivotal moment in Indian temple architecture."
  },

  // PATTADAKAL (UNESCO World Heritage)
  "Virupaksha Temple (Lokeshwara)": {
    image: "/images/major_attractions/Virupaksha Temple (Lokeshwara).jpg",
    desc: "The grandest temple at Pattadakal, built by Queen Lokamahadevi to commemorate King Vikramaditya II's victory over the Pallavas (c. 740 CE). Its ornate Dravidian shikhara and detailed friezes inspired the design of the Kailasa Temple at Ellora."
  },
  "Mallikarjuna Temple (Trailokyeshwara)": {
    image: "/images/major_attractions/Mallikarjuna Temple (Trailokyeshwara).jpg",
    desc: "Built by Queen Trailokyamahadevi alongside Virupaksha Temple. Features exquisite sculptural panels depicting scenes from the Ramayana, Mahabharata, and Panchatantra, celebrated by art historians worldwide."
  },
  "Sangameshwara Temple (Vijayeshwara)": {
    image: "/images/major_attractions/Sangameshwara Temple (Vijayeshwara).jpg",
    desc: "The earliest major temple at Pattadakal (c. 720 CE), commissioned by Chalukya King Vijayaditya. A transitional Dravidian-style temple featuring a tiered vimana tower and carved river goddesses Ganga and Yamuna."
  },
  "Galaganatha Temple (Curvilinear Nagara Shikhara)": {
    image: "/images/major_attractions/Galaganatha Temple (Curvilinear Nagara Shikhara).jpg",
    desc: "Remarkable for its northern Nagara-style curvilinear tower (rekha-prasada shikhara), providing a striking architectural contrast to the surrounding southern Dravidian temples. A key monument of the Chalukyan Vesara architectural synthesis."
  },
  "Papanatha Temple": {
    image: "/images/major_attractions/Papanatha Temple.jpg",
    desc: "Located south of the main Pattadakal complex, Papanatha uniquely combines both Nagara and Dravidian elements in a single temple structure. Its sculpted outer walls depict extensive narrative scenes from the Ramayana."
  },
  "Jain Narayana Temple (Rashtrakuta era)": {
    image: "/images/major_attractions/Jain Narayana Temple (Rashtrakuta era).jpg",
    desc: "A 9th-century Jain temple built during the Rashtrakuta period, located north of the Pattadakal complex. It demonstrates the continuity of sacred building traditions beyond the Chalukyan era with exquisite stone masonry."
  },

  // AIHOLE (Cradle of Indian Temple Architecture)
  "Durga Temple Complex (Apsidal sanctum with ambulatory peristyle)": {
    image: "/images/major_attractions/Durga Temple Complex (Apsidal sanctum with ambulatory peristyle).jpg",
    desc: "The most iconic temple at Aihole, featuring a unique apsidal (semi-circular Gajaprashtha) plan derived from Buddhist chaitya halls. Dedicated to Vishnu and Surya, it is famous for its colonnaded peristyle gallery of monumental sculptures."
  },
  "Durga Temple (Apsidal Plan)": {
    image: "/images/major_attractions/Durga Temple Complex (Apsidal sanctum with ambulatory peristyle).jpg",
    desc: "The iconic apsidal Durga Temple of Aihole, showcasing early experimental proto-Nagara tower and classical Chalukyan sculpture."
  },
  "Lad Khan Temple (Panchayatana hall-style)": {
    image: "/images/major_attractions/Lad Khan Temple (Panchayatana hall-style).jpg",
    desc: "One of the oldest surviving structural temples in Karnataka (c. early 6th century CE). A flat-roofed pillared hall structure with pierced stone lattice windows, considered an experimental prototype for later temple layouts."
  },
  "Ladkhan Temple": {
    image: "/images/major_attractions/Lad Khan Temple (Panchayatana hall-style).jpg",
    desc: "Ancient 6th-century proto-temple hall with distinctive stone roof logs and perforated floral jali windows."
  },
  "Meguti Jain Temple & Ravikirti Inscription": {
    image: "/images/major_attractions/Meguti Jain Temple & Ravikirti Inscription.jpg",
    desc: "Crowning the highest hill in Aihole, this 634 CE Jain temple bears the historic Aihole Inscription by court poet Ravikirti, celebrating King Pulakeshin II's victory over Emperor Harshavardhana and referencing Kalidasa."
  },
  "Meguti Hill Jain Temple": {
    image: "/images/major_attractions/Meguti Jain Temple & Ravikirti Inscription.jpg",
    desc: "Hilltop stone temple providing commanding views over Aihole village and housing the landmark 634 CE Sanskrit stone inscription."
  },
  "Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja)": {
    image: "/images/major_attractions/Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja).jpg",
    desc: "A 6th-century rock-cut cave temple famous for its monumental dynamic panel of Shiva Nataraja dancing with the Saptamatrikas (Seven Divine Mothers), Ganesha, and Parvati. The carving quality is among the finest in Chalukyan art."
  },
  "Ravanaphadi Cave Temple": {
    image: "/images/major_attractions/Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja).jpg",
    desc: "Finely carved rock-cut cave sanctuary in Aihole featuring Shiva Nataraja with the Saptamatrikas."
  },
  "Huchimalli Temple": {
    image: "/images/major_attractions/Huchimalli Temple.jpg",
    desc: "An early 7th-century structural temple introducing a vestibule (antarala) in front of the sanctum — an architectural breakthrough that became standard in later Indian temple design."
  },
  "Huchimalli & Hucchappaya Temples": {
    image: "/images/major_attractions/Huchimalli Temple.jpg",
    desc: "Cluster of early structural temples demonstrating the experimental genius of Aihole stone masons."
  },
  "Konti Gudi Group": {
    image: "/images/major_attractions/Konti Gudi Group.jpg",
    desc: "A group of four temples situated in the middle of Aihole village bazaar, featuring mandapas with inclined roof slabs and ornate ceiling carvings of Brahma, Shiva, and Vishnu."
  },
  "ASI Archaeological Museum Aihole": {
    image: "/images/major_attractions/ASI Archaeological Museum Aihole.jpg",
    desc: "Houses a world-class collection of sculptures, stone inscriptions, hero stones, and architectural relics excavated from the 125+ monuments of the Aihole architectural complex."
  },
  "Aihole Archaeological Museum": {
    image: "/images/major_attractions/ASI Archaeological Museum Aihole.jpg",
    desc: "ASI museum adjacent to the Durga Temple complex displaying prehistoric artifacts and Chalukyan stone sculptures."
  },

  // MAHAKUTA (Sacred Spring & Temples)
  "Mahakuteshwara Temple": {
    image: "/images/major_attractions/Mahakuteshwara Temple.jpg",
    desc: "The principal Shaivite shrine in Mahakuta, built in Early Chalukyan Dravida style with a curvilinear spire. Known for its sacred sanctum and close link to King Mangalesha's royal inscriptions."
  },
  "Mallikarjuna Temple": {
    image: "/images/major_attractions/Mallikarjuna Temple.jpg",
    desc: "A companion temple to Mahakuteshwara within the tranquil banyan grove, featuring finely carved pillars, stone jali windows, and shrines reflecting the transition between Dravidian and Nagara forms."
  },
  "Mallikarjuna Temple Mahakuta": {
    image: "/images/major_attractions/Mallikarjuna Temple.jpg",
    desc: "Finely preserved Chalukyan temple in the shaded Mahakuta grove, dedicated to Lord Shiva."
  },
  "Vishnu Pushkarini (Sacred Spring Pool)": {
    image: "/images/major_attractions/Vishnu Pushkarini (Sacred Spring Pool).jpg",
    desc: "The sacred natural spring-fed water tank at Mahakuta, where perennial cool mineral water bubbles up continuously through natural aquifers. Pilgrims perform holy ablutions in its clear waters."
  },
  "Mahakuta Pushkarini (Sacred Spring Tank)": {
    image: "/images/major_attractions/Vishnu Pushkarini (Sacred Spring Pool).jpg",
    desc: "Perennial lotus spring tank surrounded by ancient Chalukyan shrines and green canopy."
  },
  "Submerged Panchamukha Linga": {
    image: "/images/major_attractions/Submerged Panchamukha Linga.jpg",
    desc: "A rare five-faced Shiva linga partially submerged in the waters of the Vishnu Pushkarini pool at Mahakuta, considered deeply sacred for rituals and meditation."
  },
  "Mahakuta Pillar Inscription site": {
    image: "/images/major_attractions/Mahakuta Pillar Inscription site.JPG",
    desc: "The site of the renowned 602 CE red sandstone pillar inscription of King Mangalesha, documenting Chalukyan lineage, military campaigns, and royal grants to Mahakuteshwara."
  },

  // KUDALA SANGAMA
  "Sangameshwara Temple (Chalukyan style)": {
    image: "/images/major_attractions/Sangameshwara Temple (Chalukyan style).jpg",
    desc: "Ancient 12th-century Chalukyan temple dedicated to Lord Sangameshwara at the holy confluence of the Krishna and Malaprabha rivers in Kudala Sangama."
  },
  "Museum of Basava Philosophy": {
    image: "/images/major_attractions/Museum of Basava Philosophy.jpg",
    desc: "Dedicated museum showcasing the egalitarian philosophy, Vachana literature, and socio-religious revolution led by 12th-century philosopher-saint Jagadjyothi Basaveshwara."
  },

  // ILKAL
  "Weaver Cluster Workshops (Pit loom demonstrations)": {
    image: "/images/major_attractions/Weaver Cluster Workshops (Pit loom demonstrations).jpg",
    desc: "Traditional pit loom weaving workshops where master weavers craft GI-tagged Ilkal sarees featuring the legendary Tope Teni red silk pallu and Kondi jointing."
  },
  "Shri Vijaya Mahantesh Temple & Matha": {
    image: "/images/major_attractions/Shri Vijaya Mahantesh Temple & Matha.jpg",
    desc: "Revered spiritual monastery and temple in Ilkal established by Sri Vijaya Mahantesh Shivayogi, serving as a center for Veerashaiva philosophy and mass feeding (Dasoha)."
  },
  "Kasuti Embroidery Artisans Guilds": {
    image: "/images/major_attractions/Kasuti Embroidery Artisans Guilds.jpg",
    desc: "Artisans guild preserving the ancient 7th-century GI-tagged Kasuti hand embroidery tradition of Karnataka, using Gavanti, Murgi, Negi, and Menthi stitches without knots."
  },

  // GULEDAGUDDA
  "Traditional Khana Handloom Weaving Units": {
    image: "/images/major_attractions/Traditional Khana Handloom Weaving Units.jpg",
    desc: "Centuries-old handloom weaving units producing India's only GI-tagged dobby-woven blouse fabric (Guledgudd Khana) using pure cotton and silk yarns."
  },

  // MUDHOL
  "Canine Research and Information Centre (CRIC Mudhol Hound Centre)": {
    image: "/images/major_attractions/Canine Research and Information Centre (CRIC Mudhol Hound Centre).jpg",
    desc: "Government canine breeding and research center dedicated to the conservation and promotion of the world-famous indigenous Mudhol Hound royal sight hound."
  },
  "Mudhol Royal Palace & Fort ruins": {
    image: "/images/major_attractions/Mudhol Royal Palace & Fort ruins.jpg",
    desc: "Historic citadel of the Ghorpade Maratha rulers of Mudhol on the Ghataprabha River, featuring ancient battlements, court halls, and heritage artifacts."
  },

  // JAMKHANDI
  "Jamkhandi Royal Palace (Ram Prasad Palace)": {
    image: "/images/major_attractions/Jamkhandi Royal Palace (Ram Prasad Palace).jpg",
    desc: "Magnificent 19th-century royal palace of the Patwardhan Maratha dynasty, showcasing Anglo-Indian royal architecture, durbar halls, and royal family memorabilia."
  },
  "Pampa Sarovara Lake": {
    image: "/images/major_attractions/Pampa_Sarovar_from_the_hill.jpg",
    desc: "Historic sacred lake and reservoir in Jamkhandi associated with local folklore and offering scenic hillside vistas and tranquil sunset views."
  },

  // BILAGI
  "Siddheshwara Temple": {
    image: "/images/major_attractions/01 Siddeshwara Devalaya Bilagi.jpg",
    desc: "Ancient Chalukyan-style temple dedicated to Lord Siddheshwara in Bilagi, renowned for its ornate stone pillars, sanctum shikhara, and annual car festival."
  },
  "Ghataprabha backwaters viewpoint": {
    image: "/images/major_attractions/Ghataprabha backwaters viewpoint.webp",
    desc: "Picturesque panoramic viewpoint overlooking the expansive backwaters of the Ghataprabha river in Bilagi taluk, surrounded by verdant agricultural landscapes."
  }
};

// ── Destination hero image mapping ───────────────────────────────────────────
const imageMap = {
  dest_badami:           "/images/destinations/badami.jpg",
  dest_pattadakal:       "/images/destinations/pattadakal.png",
  dest_aihole:           "/images/destinations/aihole.png",
  dest_mahakuta:         "/images/destinations/mahakuta.png",
  dest_banashankari:     "/images/destinations/banashankari.png",
  dest_kudala_sangama:   "/images/destinations/kudalasangama.png",
  dest_almatti_dam:      "/images/destinations/Alamatti.png",
  dest_muchakhandi_dam:  "/images/destinations/Muchkhandi dam.jfif",
  dest_ilkal:            "/images/destinations/Ilkal.png",
  dest_guledagudda:      "/images/destinations/Guledgudda.png",
  dest_mudhol:           "/images/destinations/Mudhol.png",
  dest_jamkhandi:        "/images/destinations/jamkhandi.png",
  dest_bilagi:           "/images/destinations/Bilagi.png",
  dest_shivayogamandira: "/images/destinations/shivayogamandir.png",

  // Cultural Food Places from Karnataka Map Section
  dest_food_jolada_rotti_badami: "/images/food/jolada_rotti.jpg",
  dest_food_susla_badami:        "/images/food/susla_mirchi_bajji.jpg",
  dest_food_jalebi_badami:       "/images/food/jalebi_rabri.jpg",
  dest_food_jolada_rotti_bgk:    "/images/food/jolada_rotti.jpg",
  dest_food_susla_bgk:           "/images/food/susla_mirchi_bajji.jpg",
  dest_food_fakirappa_bgk:      "/images/food/fakirappa_sweets.jpg",
  dest_food_savaji_bgk:          "/images/food/savaji_nonveg.jpg",
  dest_food_jalebi_bgk:          "/images/food/jalebi_rabri.jpg",
  dest_food_kardant_singi:       "/images/food/amingad_kardant.jpg",
  dest_food_kardant_kamat:       "/images/food/amingad_kardant.jpg",
  dest_food_holige_ilkal:        "/images/food/shenga_holige.jpg",
  dest_food_holige_guledgudd:    "/images/food/shenga_holige.jpg",
  dest_food_jhunka_mudhol:       "/images/food/jolada_rotti.jpg",
  dest_food_peda_jamkhandi:      "/images/food/galgali_peda.jpg",
  dest_food_galgali_bilagi:      "/images/food/galgali_peda.jpg",
  dest_food_savaji_bilagi:       "/images/food/savaji_nonveg.jpg",
  dest_food_girmit_banhatti:     "/images/food/susla_mirchi_bajji.jpg"
};

// ── Smart Attraction Image Resolver & Validator ───────────────────────────────
function hasAttractionImage(attractionName) {
  if (ATTRACTION_INFO[attractionName] && ATTRACTION_INFO[attractionName].image) {
    return true;
  }
  const cleanName = (attractionName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!cleanName) return false;
  for (const filename of MAJOR_ATTRACTION_FILES) {
    const cleanFile = filename.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (cleanName.includes(cleanFile) || cleanFile.includes(cleanName)) {
      return true;
    }
  }
  return false;
}

function getAttractionImage(attractionName, destId) {
  // 1. Direct match in ATTRACTION_INFO
  if (ATTRACTION_INFO[attractionName] && ATTRACTION_INFO[attractionName].image) {
    return ATTRACTION_INFO[attractionName].image;
  }

  // 2. Fuzzy search through MAJOR_ATTRACTION_FILES
  const cleanName = (attractionName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  for (const filename of MAJOR_ATTRACTION_FILES) {
    const cleanFile = filename.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (cleanName && cleanFile && (cleanName.includes(cleanFile) || cleanFile.includes(cleanName))) {
      return `/images/major_attractions/${filename}`;
    }
  }

  // 3. Fallback to destination image
  return imageMap[destId] || '/images/destinations/badami.jpg';
}

// ── Auth helpers ─────────────────────────────────────────────────────────────
function checkAuth() {
  return window.TouristProfile ? window.TouristProfile.isLoggedIn() : !!localStorage.getItem('bgk_user_token');
}

let _loginCallback = null;

function showLoginModal(callback) {
  _loginCallback = callback;
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.add('active');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginError').style.display = 'none';
  }
}

function hideLoginModal() {
  document.getElementById('loginModal')?.classList.remove('active');
}

document.getElementById('closeLoginModal')?.addEventListener('click', hideLoginModal);
document.getElementById('loginModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) hideLoginModal();
});

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl    = document.getElementById('loginError');

  if (!email || !password || password.length < 4) {
    errEl.textContent = 'Please enter a valid email and password (minimum 4 characters).';
    errEl.style.display = 'block';
    return;
  }

  // Create or load tourist profile
  let success = false;
  if (window.TouristProfile) {
    success = window.TouristProfile.login(email, password);
  } else {
    localStorage.setItem('bgk_user_token', btoa(email));
    localStorage.setItem('bgk_user_email', email);
    success = true;
  }

  if (success) {
    hideLoginModal();
    updateProfileNavState();
    showToast(`Welcome, ${email.split('@')[0]}! Profile ready.`);
    if (typeof _loginCallback === 'function') {
      _loginCallback();
    }
  } else {
    errEl.textContent = 'Login failed. Please try again.';
    errEl.style.display = 'block';
  }
});

// Update Profile Nav status
function updateProfileNavState() {
  const profileBtn = document.getElementById('headerProfileBtn');
  if (checkAuth() && profileBtn) {
    const email = localStorage.getItem('bgk_user_email') || 'Tourist';
    const name = email.split('@')[0];
    profileBtn.innerHTML = `<span class="btn-icon">👤</span> <span>MY PROFILE (${name})</span>`;
    profileBtn.classList.remove('btn-outline');
    profileBtn.classList.add('btn-primary');
  }
}

// ── Plan My Trip button (requires login) ─────────────────────────────────────
document.getElementById('openTripPlannerBtn')?.addEventListener('click', () => {
  if (!checkAuth()) {
    showLoginModal(() => {
      window.location.href = '/?openTrip=1';
    });
  } else {
    window.location.href = '/?openTrip=1';
  }
});

// ── Load Destinations ────────────────────────────────────────────────────────
async function loadDestinations(category = 'All', taluk = 'All') {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;

  grid.innerHTML = `<div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>`;

  const data = await API.getDestinations(category, taluk);
  const destinations = data.data || [];

  if (!destinations.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:#64748B;padding:3rem;">No verified destinations found matching your filter.</div>`;
    return;
  }

  const lang = localStorage.getItem('bgk_preferred_lang') || 'en';
  const t = (window.translations && window.translations[lang]) || (window.translations && window.translations.en) || {};

  grid.innerHTML = destinations.map(d => {
    const loc = window.getLocalizedDestination ? window.getLocalizedDestination(d, lang) : d;
    const imageUrl   = imageMap[d.id] || "/images/destinations/badami.jpg";
    const accessible = d.accessibility_information?.wheelchair_accessible;
    const accessPill = accessible ? 'access-yes' : 'access-partial';
    const accessText = accessible ? (t.access_yes || '♿ Accessible') : (t.access_partial || '⚠️ Steps / Terrain');
    const talukSuffix = t.taluk_suffix || 'Taluk';
    const talukName = loc.taluk || d.taluk;
    const name = loc.name || d.name;
    const desc = (loc.description || d.description).substring(0, 140) + '...';
    const duration = loc.suggested_visit_duration || d.suggested_visit_duration || t.duration_default || '2-3 Hours';

    return `
      <div class="dest-card">
        <div class="dest-card-image" style="background-image:url('${imageUrl}');">
          <span class="dest-card-badge">${talukName} ${talukSuffix}</span>
        </div>
        <div class="dest-card-content">
          <span class="dest-kn-title">${d.alternate_names ? d.alternate_names[0] : name}</span>
          <h3 class="dest-en-title">${name}</h3>
          <p class="dest-desc">${desc}</p>
          <div class="dest-meta-row">
            <span>⏱️ ${duration}</span>
            <span class="dest-access-pill ${accessPill}">${accessText}</span>
          </div>
          <div class="dest-card-actions">
            <button class="btn btn-card-primary" onclick="viewDestinationDetail('${d.id}')">
              ${t.btn_explore_details || 'Explore Details'}
            </button>
            <button class="btn btn-card-outline" onclick="addToTrip('${d.id}')" title="Add to My Travel Profile">
              ${t.btn_add_trip || '+ Trip'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Add to Trip (requires login & saves to tourist profile) ───────────────────
function addToTrip(destId) {
  if (!checkAuth()) {
    showLoginModal(() => addToTrip(destId));
    return;
  }

  if (window.TouristProfile) {
    const res = window.TouristProfile.addDestination(destId);
    if (res === true) {
      showToast("✅ Added to your Profile! View under My Profile.");
    } else if (res === 'duplicate') {
      showToast("Already in your Profile Journey!");
    } else {
      showToast("✅ Added to your journey!");
    }
  } else {
    // Fallback
    let trip = JSON.parse(localStorage.getItem('bagalkote_my_trip') || '[]');
    if (!trip.includes(destId)) {
      trip.push(destId);
      localStorage.setItem('bagalkote_my_trip', JSON.stringify(trip));
      showToast("✅ Added to your Bagalkote Journey!");
    } else {
      showToast("Already in your trip!");
    }
  }
}

// ── Toast Notification Helper ────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toastMsg');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toastMsg';
    t.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:#0D1B2A;color:#fff;padding:0.9rem 1.6rem;border-radius:10px;font-size:0.92rem;font-weight:600;z-index:9999;box-shadow:0 6px 25px rgba(0,0,0,0.35);transition:opacity 0.3s ease;border:1px solid rgba(212,175,55,0.4);';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 3000);
}

// ── Destination Detail Modal ─────────────────────────────────────────────────
window.viewDestinationDetail = async function(destId) {
  const modal  = document.getElementById('destinationDetailModal');
  const body   = document.getElementById('modalDestBody');
  const title  = document.getElementById('modalDestTitle');
  const knName = document.getElementById('modalDestKn');
  const cat    = document.getElementById('modalDestCategory');
  const source = document.getElementById('modalDestSource');

  if (!modal || !body) return;
  body.innerHTML = `<p style="padding:2rem;text-align:center;">Loading destination intelligence...</p>`;
  modal.classList.add('active');

  const dest = await API.getDestinationById(destId);
  if (!dest) {
    body.innerHTML = `<p style="color:#E63946;">Destination details could not be retrieved.</p>`;
    return;
  }

  const lang = localStorage.getItem('bgk_preferred_lang') || 'en';
  const t = (window.translations && window.translations[lang]) || (window.translations && window.translations.en) || {};
  const loc = window.getLocalizedDestination ? window.getLocalizedDestination(dest, lang) : dest;

  const destTitle = loc.name || dest.name;
  title.textContent  = destTitle;
  knName.textContent = dest.alternate_names ? dest.alternate_names[0] : '';
  const talukSuffix = t.taluk_suffix || 'Taluk';
  cat.textContent    = `${loc.category || dest.category} | ${loc.taluk || dest.taluk} ${talukSuffix}`;
  source.textContent = `${t.source_label || 'Source'}: ${dest.source}`;

  const destImageUrl = imageMap[dest.id] || '/images/destinations/badami.jpg';

  body.innerHTML = `
    <div class="dest-detail-layout">

      <!-- Hero image of destination -->
      <div class="detail-hero-image" style="background-image:url('${destImageUrl}');"></div>

      <div style="font-size:1.05rem;line-height:1.7;color:#334155;">${loc.description || dest.description}</div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;background:#F8FAFC;padding:1.25rem;border-radius:12px;border:1px solid #E2E8F0;">
        <div>
          <h4 style="font-size:0.85rem;color:#C85A32;text-transform:uppercase;margin-bottom:0.35rem;">${t.modal_historical_title || 'Historical Significance'}</h4>
          <p style="font-size:0.875rem;color:#475569;">${loc.historical_significance || dest.historical_significance || 'Key Chalukyan royal site.'}</p>
        </div>
        <div>
          <h4 style="font-size:0.85rem;color:#C85A32;text-transform:uppercase;margin-bottom:0.35rem;">${t.modal_architecture_title || 'Architecture & Style'}</h4>
          <p style="font-size:0.875rem;color:#475569;">${loc.architecture || dest.architecture || 'Dravida & Nagara stone architecture.'}</p>
        </div>
      </div>

      <!-- Major Attractions — strictly filtered: if image is present use it, otherwise remove the field -->
      ${(() => {
        const verified = (dest.major_attractions || []).filter(a => hasAttractionImage(a));
        if (!verified.length || (dest.category && dest.category.toLowerCase().includes('local food'))) return '';
        return `
        <div style="background:#FFFBF6;border:1px solid #F3E8DC;padding:1.25rem;border-radius:12px;">
          <h4 style="font-size:1.05rem;color:#0D1B2A;margin-bottom:0.4rem;font-family:'Cinzel',serif;">
            ${t.modal_attractions_title || '📍 Major Attractions — Click Any Attraction to See Verified Photos & Details:'}
          </h4>
          <p style="font-size:0.825rem;color:#64748B;margin-bottom:0.85rem;">
            ${t.modal_attractions_desc || 'Discover authentic high-resolution photographs directly from district archives and Archaeological Survey of India.'}
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:0.65rem;">
            ${verified.map(a => {
              const locAtt = window.getLocalizedAttraction ? window.getLocalizedAttraction(a, lang) : { name: a, desc: '' };
              const displayName = locAtt.name || a;
              return `
              <button
                class="attraction-pill"
                onclick="showAttractionDetail('${a.replace(/'/g, "\\'")}', '${dest.id}')"
                title="View photo & details for ${displayName.replace(/'/g, "\\'")}"
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
        <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:1.25rem;">
          <h4 style="font-size:0.95rem;color:#166534;margin-bottom:0.35rem;">${t.modal_accessibility_title || '♿ Accessibility & Senior Assistance'}</h4>
          <p style="font-size:0.85rem;color:#14532D;">
            <strong>${t.acc_wheelchair_label || 'Wheelchair'}:</strong> ${dest.accessibility_details.wheelchair_accessible ? (t.acc_wheelchair_yes || 'Yes (Accessible ramps)') : (t.acc_wheelchair_no || 'No (Steps required)')}<br>
            <strong>${t.acc_staircase_label || 'Staircase'}:</strong> ${dest.accessibility_details.stairs_details ? dest.accessibility_details.stairs_details.step_character : (t.acc_terrain_varies || 'Terrain varies')}<br>
            <strong>${t.acc_senior_label || 'Senior Friendly'}:</strong> ${dest.accessibility_details.elderly_friendly}
          </p>
        </div>
      ` : ''}

      <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:12px;padding:1rem;font-size:0.825rem;color:#78350F;">
        <strong>${t.modal_reach_title || '🚌 How to Reach:'}</strong> ${(loc.transport_information && loc.transport_information.bus_connectivity) || (dest.transport_information && dest.transport_information.bus_connectivity) || t.transport_default || 'Regular KSRTC bus services from Bagalkote and Hubballi.'}
      </div>
    </div>
  `;

  const addBtn = document.getElementById('modalAddToTripBtn');
  if (addBtn) {
    addBtn.textContent = t.btn_add_trip || '+ Trip';
    addBtn.onclick = () => addToTrip(dest.id);
  }
};

// ── Attraction Lightbox (Display image from images/major_attractions/) ────────
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
  const info = ATTRACTION_INFO[attractionName];
  const resolvedImg = info?.image || getAttractionImage(attractionName, destId);

  lbImg.src = resolvedImg;
  lbImg.alt = locAtt?.name || attractionName;
  lbTitle.textContent = locAtt?.name || attractionName;

  if (locAtt && locAtt.desc) {
    lbDesc.textContent = locAtt.desc;
    lbSource.textContent = t.lightbox_source_prefix || 'Source: Official Bagalkote District Portal & Archaeological Survey of India (ASI)';
  } else if (info && info.desc) {
    lbDesc.textContent = info.desc;
    lbSource.textContent = t.lightbox_source_prefix || 'Source: Official Bagalkote District Portal & Archaeological Survey of India (ASI)';
  } else {
    lbDesc.textContent = `Verified major attraction of ${destId ? destId.replace('dest_', '').toUpperCase() : 'Bagalkote'}. A prominent monument of the Early Chalukyan heritage circuit.`;
    lbSource.textContent = t.lightbox_source_prefix || 'Source: Official Bagalkote District Tourism Archives';
  }

  lb.classList.add('active');
};

// Re-render explore destinations when language changes
window.addEventListener('languageChanged', (e) => {
  const activePill = document.querySelector('#categoryScroll .cat-pill.active');
  const cat = activePill ? activePill.getAttribute('data-cat') : 'All';
  const taluk = document.getElementById('talukSelect')?.value || 'All';
  loadDestinations(cat, taluk);
});

document.getElementById('closeLightboxBtn')?.addEventListener('click', () => {
  document.getElementById('attractionLightbox')?.classList.remove('active');
});
document.getElementById('attractionLightbox')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
});

// ── Close destination modal ───────────────────────────────────────────────────
document.getElementById('closeDestModalBtn')?.addEventListener('click', () => {
  document.getElementById('destinationDetailModal')?.classList.remove('active');
});
document.getElementById('destinationDetailModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
});

// ── Category pills & Taluk filter ────────────────────────────────────────────
document.querySelectorAll('#categoryScroll .cat-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('#categoryScroll .cat-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const cat   = pill.getAttribute('data-cat');
    const taluk = document.getElementById('talukSelect')?.value || 'All';
    loadDestinations(cat, taluk);
  });
});

document.getElementById('talukSelect')?.addEventListener('change', function() {
  const activePill = document.querySelector('#categoryScroll .cat-pill.active');
  const cat = activePill ? activePill.getAttribute('data-cat') : 'All';
  loadDestinations(cat, this.value);
});

// ── Escape key handler ────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.active').forEach(el => el.classList.remove('active'));
  }
});

// ── Init ──────────────────────────────────────────────────────────────────────
updateProfileNavState();
loadDestinations();
