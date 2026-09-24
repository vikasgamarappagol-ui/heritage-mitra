/**
 * Verified Bagalkote Media & Image Catalog
 * Provides fast semantic image matching for AI Assistant responses
 */

const IMAGE_CATALOG = [
  // ── BADAMI ────────────────────────────────────────────────────────────────
  {
    id: 'img_badami_overview',
    title: 'Badami Cave Temples & Agastya Lake',
    url: '/images/destinations/badami.jpg',
    category: 'Heritage Destination',
    taluk: 'Badami',
    destinationId: 'dest_badami',
    caption: '6th-century Chalukyan rock-cut cave temples sculpted into red sandstone cliffs overlooking the sacred waters of Agastya Lake.',
    keywords: ['badami', 'vatapi', 'caves', 'cave temple', 'agastya', 'lake', 'sandstone', 'chalukya', 'shiva', 'vishnu', 'jain', 'rock-cut', 'rock cut', 'bhoothanatha', 'monument']
  },
  {
    id: 'img_badami_caves',
    title: 'Badami Rock-cut Cave Temples',
    url: '/images/major_attractions/BadamiCave temples.jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_badami',
    caption: 'Carved out of monolithic red sandstone cliffs, featuring intricate relief carvings of Nataraja, Trivikrama, and Jain Tirthankaras.',
    keywords: ['badami', 'cave', 'caves', 'cave 1', 'cave 2', 'cave 3', 'cave 4', 'nataraja', 'trivikrama', 'sculpture', 'rock-cut', 'sandstone']
  },
  {
    id: 'img_bhutanatha',
    title: 'Bhutanatha Group of Temples',
    url: '/images/major_attractions/bhutanatha group of temples.jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_badami',
    caption: 'Ancient 7th to 11th-century sandstone temple shrines extending directly into the tranquil waters of Agastya Lake.',
    keywords: ['bhutanatha', 'bhoothanatha', 'agastya lake', 'lake', 'water', 'badami', 'shiva', 'sandstone']
  },
  {
    id: 'img_badami_north_fort',
    title: 'Badami North Fort & Upper Shivalaya',
    url: '/images/major_attractions/Badami North Fort & Upper Shivalaya.jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_badami',
    caption: 'Strategic hill citadel perched high above Badami with ancient granaries, treasury, and Dravidian style Upper Shivalaya shrine.',
    keywords: ['north fort', 'fort', 'upper shivalaya', 'shivalaya', 'citadel', 'hilltop', 'badami', 'trekking']
  },
  {
    id: 'img_malegitti_shivalaya',
    title: 'Malegitti Shivalaya',
    url: '/images/major_attractions/Malegitti Shivalaya.jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_badami',
    caption: 'One of the earliest surviving structural stone temples in Karnataka (c. 7th century CE) perched on an isolated boulder.',
    keywords: ['malegitti', 'shivalaya', 'garland maker', 'structural temple', 'badami', 'dravidian']
  },
  {
    id: 'img_badami_museum',
    title: 'ASI Archaeological Museum Badami',
    url: '/images/major_attractions/archeological museum badami.jpg',
    category: 'Museum',
    taluk: 'Badami',
    destinationId: 'dest_badami',
    caption: 'Houses an extraordinary collection of Early Chalukya sculptures, hero stones, inscriptions, and prehistoric artifacts.',
    keywords: ['museum', 'asi', 'archaeological', 'sculptures', 'lajja gauri', 'artifacts', 'badami']
  },

  // ── PATTADAKAL (UNESCO WORLD HERITAGE SITE) ──────────────────────────────
  {
    id: 'img_pattadakal_overview',
    title: 'Pattadakal UNESCO World Heritage Complex',
    url: '/images/destinations/pattadakal.png',
    category: 'UNESCO Heritage Site',
    taluk: 'Badami',
    destinationId: 'dest_pattadakal',
    caption: 'UNESCO World Heritage coronation site of the Chalukya kings along the Malaprabha River, blending Dravida and Nagara architecture.',
    keywords: ['pattadakal', 'pattadakallu', 'unesco', 'world heritage', 'coronation', 'raktapura', 'malaprabha', 'temples', 'monument']
  },
  {
    id: 'img_virupaksha_temple',
    title: 'Virupaksha Temple (Lokeshwara)',
    url: '/images/major_attractions/Virupaksha Temple (Lokeshwara).jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_pattadakal',
    caption: 'Grandest Dravidian monument at Pattadakal commissioned in 740 CE by Queen Lokamahadevi to celebrate King Vikramaditya II victory.',
    keywords: ['virupaksha', 'lokeshwara', 'lokamahadevi', 'pattadakal', 'vikramaditya', 'dravidian', 'nandi', 'sculpture']
  },
  {
    id: 'img_mallikarjuna_temple',
    title: 'Mallikarjuna Temple (Trailokyeshwara)',
    url: '/images/major_attractions/Mallikarjuna Temple (Trailokyeshwara).jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_pattadakal',
    caption: 'Built by Queen Trailokyamahadevi in 740 CE directly beside the Virupaksha temple, featuring a circular griva and sikhara.',
    keywords: ['mallikarjuna', 'trailokyeshwara', 'trailokya', 'pattadakal', 'queen', 'chalukya']
  },
  {
    id: 'img_sangameshwara_temple',
    title: 'Sangameshwara Temple (Vijayeshwara)',
    url: '/images/major_attractions/Sangameshwara Temple (Vijayeshwara).jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_pattadakal',
    caption: 'The oldest surviving temple at Pattadakal, commissioned by Chalukya King Vijayaditya (696–733 CE).',
    keywords: ['sangameshwara', 'vijayeshwara', 'vijayaditya', 'pattadakal', 'dravidian']
  },
  {
    id: 'img_papanatha_temple',
    title: 'Papanatha Temple',
    url: '/images/major_attractions/Papanatha Temple.jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_pattadakal',
    caption: 'Fascinating hybrid synthesis of northern Nagara curvilinear sikhara with southern Dravidian mandapa wall carvings from Ramayana.',
    keywords: ['papanatha', 'nagara', 'ramayana', 'curvilinear', 'shikhara', 'pattadakal']
  },
  {
    id: 'img_galaganatha_temple',
    title: 'Galaganatha Temple (Nagara Shikhara)',
    url: '/images/major_attractions/Galaganatha Temple (Curvilinear Nagara Shikhara).jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_pattadakal',
    caption: 'Classic Rekha-Nagara curvilinear tower exemplifying the North Indian architectural idiom at Pattadakal.',
    keywords: ['galaganatha', 'nagara', 'rekha nagara', 'curvilinear', 'pattadakal', 'shikhara']
  },
  {
    id: 'img_jain_narayana',
    title: 'Jain Narayana Temple (Rashtrakuta era)',
    url: '/images/major_attractions/Jain Narayana Temple (Rashtrakuta era).jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_pattadakal',
    caption: '9th-century Rashtrakuta-era Dravidian temple dedicated to the Jain Tirthankaras at the northern end of Pattadakal.',
    keywords: ['jain narayana', 'jain', 'rashtrakuta', 'pattadakal', 'tirthankara']
  },

  // ── AIHOLE (CRADLE OF TEMPLE ARCHITECTURE) ──────────────────────────────
  {
    id: 'img_aihole_overview',
    title: 'Aihole Temple Complex',
    url: '/images/destinations/aihole.png',
    category: 'Heritage Destination',
    taluk: 'Hunagund',
    destinationId: 'dest_aihole',
    caption: 'The celebrated "Cradle of Indian Temple Architecture" featuring over 120 stone temples dating from 450 to 1200 CE.',
    keywords: ['aihole', 'aryapura', 'cradle of temple architecture', 'monuments', 'malaprabha', 'hunagund']
  },
  {
    id: 'img_durga_temple',
    title: 'Durga Temple Complex (Apsidal Sanctum)',
    url: '/images/major_attractions/Durga Temple Complex (Apsidal sanctum with ambulatory peristyle).jpg',
    category: 'Monuments',
    taluk: 'Hunagund',
    destinationId: 'dest_aihole',
    caption: 'Iconic apsidal (horseshoe-shaped) temple resembling a Buddhist Chaitya hall with an open pillared peristyle gallery.',
    keywords: ['durga temple', 'durga', 'apsidal', 'gajaprishtha', 'horseshoe', 'peristyle', 'aihole', 'durg', 'fort']
  },
  {
    id: 'img_lad_khan_temple',
    title: 'Lad Khan Temple (Panchayatana Hall)',
    url: '/images/major_attractions/Lad Khan Temple (Panchayatana hall-style).jpg',
    category: 'Monuments',
    taluk: 'Hunagund',
    destinationId: 'dest_aihole',
    caption: 'One of the oldest stone shrines at Aihole (c. 5th century CE), designed in an ancient royal assembly hall format.',
    keywords: ['lad khan', 'ladkhan', 'mandapa', 'assembly hall', 'aihole', 'early chalukya']
  },
  {
    id: 'img_ravana_phadi',
    title: 'Ravana Phadi Cave Temple',
    url: '/images/major_attractions/Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja).jpg',
    category: 'Monuments',
    taluk: 'Hunagund',
    destinationId: 'dest_aihole',
    caption: '6th-century rock-cut sanctuary containing a renowned ten-armed dancing Shiva Nataraja surrounded by the Saptamatrikas.',
    keywords: ['ravana phadi', 'ravanaphadi', 'cave temple', 'nataraja', 'saptamatrika', 'rock cut', 'aihole']
  },
  {
    id: 'img_meguti_jain',
    title: 'Meguti Jain Temple & Ravikirti Inscription',
    url: '/images/major_attractions/Meguti Jain Temple & Ravikirti Inscription.jpg',
    category: 'Monuments',
    taluk: 'Hunagund',
    destinationId: 'dest_aihole',
    caption: 'Hilltop temple built in 634 CE containing the famous Aihole Inscription authored by court poet Ravikirti eulogizing Pulakeshin II.',
    keywords: ['meguti', 'ravikirti', 'inscription', 'pulakeshin', 'pulakeshin ii', 'hilltop', 'jain', 'aihole']
  },
  {
    id: 'img_huchimalli_temple',
    title: 'Huchimalli Temple',
    url: '/images/major_attractions/Huchimalli Temple.jpg',
    category: 'Monuments',
    taluk: 'Hunagund',
    destinationId: 'dest_aihole',
    caption: '7th-century temple introducing an enclosed vestibule (antarala) connecting sanctum to hall, a breakthrough in temple layout.',
    keywords: ['huchimalli', 'antarala', 'shikhara', 'karthikeya', 'aihole']
  },
  {
    id: 'img_konti_gudi',
    title: 'Konti Gudi Group of Temples',
    url: '/images/major_attractions/Konti Gudi Group.jpg',
    category: 'Monuments',
    taluk: 'Hunagund',
    destinationId: 'dest_aihole',
    caption: 'Four early temples built on high stone plinths dating from the 6th to 7th centuries at the heart of Aihole village.',
    keywords: ['konti gudi', 'kunti gudi', 'plinths', 'mandapa', 'aihole']
  },
  {
    id: 'img_aihole_museum',
    title: 'ASI Archaeological Museum Aihole',
    url: '/images/major_attractions/ASI Archaeological Museum Aihole.jpg',
    category: 'Museum',
    taluk: 'Hunagund',
    destinationId: 'dest_aihole',
    caption: 'Located inside the Durga temple compound, housing stone sculptures, hero stones, inscriptions, and architectural components.',
    keywords: ['museum', 'asi', 'aihole museum', 'sculptures', 'durga complex']
  },

  // ── KUDALA SANGAMA ────────────────────────────────────────────────────────
  {
    id: 'img_kudala_sangama',
    title: 'Kudala Sangama Pilgrim & Confluence Center',
    url: '/images/destinations/kudalasangama.png',
    category: 'Spiritual Heritage',
    taluk: 'Hunagund',
    destinationId: 'dest_kudala_sangama',
    caption: 'Sacred river confluence of Krishna and Malaprabha rivers, housing the Aikya Mantapa of social reformer Jagadjyothi Basaveshwara.',
    keywords: ['kudala sangama', 'kudalasangama', 'basavanna', 'basaveshwara', 'confluence', 'krishna', 'malaprabha', 'aikya mantapa', 'dasoha', 'spiritual', 'lingayat']
  },

  // ── MAHAKUTA ──────────────────────────────────────────────────────────────
  {
    id: 'img_mahakuta_overview',
    title: 'Mahakuta Temple Complex',
    url: '/images/destinations/mahakuta.png',
    category: 'Heritage Destination',
    taluk: 'Badami',
    destinationId: 'dest_mahakuta',
    caption: 'Secluded temple complex surrounded by Dakshina Kashi holy groves, housing sacred natural springs and Early Chalukya shrines.',
    keywords: ['mahakuta', 'mahakoota', 'spring', 'pushkarini', 'shiva', 'holy grove', 'dakshina kashi', 'badami']
  },
  {
    id: 'img_mahakuteshwara',
    title: 'Mahakuteshwara Temple',
    url: '/images/major_attractions/Mahakuteshwara Temple.jpg',
    category: 'Monuments',
    taluk: 'Badami',
    destinationId: 'dest_mahakuta',
    caption: 'Principal 7th-century Dravidian shrine in the Mahakuta complex, active for daily worship and rituals.',
    keywords: ['mahakuteshwara', 'shrine', 'dravidian', 'linga', 'mahakuta']
  },
  {
    id: 'img_vishnu_pushkarini',
    title: 'Vishnu Pushkarini (Sacred Spring Pool)',
    url: '/images/major_attractions/Vishnu Pushkarini (Sacred Spring Pool).jpg',
    category: 'Spiritual Springs',
    taluk: 'Badami',
    destinationId: 'dest_mahakuta',
    caption: 'Natural perennial spring pool within Mahakuta with submerged five-faced Shiva linga (Panchamukha Linga).',
    keywords: ['pushkarini', 'vishnu pushkarini', 'spring', 'pool', 'panchamukha', 'linga', 'water', 'mahakuta']
  },
  {
    id: 'img_mahakuta_pillar',
    title: 'Mahakuta Pillar Inscription Site',
    url: '/images/major_attractions/Mahakuta Pillar Inscription site.JPG',
    category: 'Historical Epigraphy',
    taluk: 'Badami',
    destinationId: 'dest_mahakuta',
    caption: 'Site of the famous red sandstone pillar inscription erected by Chalukya King Mangalesha in 602 CE.',
    keywords: ['pillar', 'inscription', 'mangalesha', 'epigraphy', 'mahakuta']
  },

  // ── BANASHANKARI ──────────────────────────────────────────────────────────
  {
    id: 'img_banashankari',
    title: 'Banashankari Amma Temple',
    url: '/images/destinations/banashankari.png',
    category: 'Spiritual Heritage',
    taluk: 'Badami',
    destinationId: 'dest_banashankari',
    caption: 'Sacred Shakta sanctuary dedicated to Goddess Banashankari (Shakambhari), renowned for Haridra Tirtha pond and annual Jathra.',
    keywords: ['banashankari', 'shakambhari', 'devi', 'temple', 'haridra tirtha', 'jatra', 'lamp tower', 'deepa stambha', 'badami']
  },

  // ── HANDLOOMS & TEXTILE HERITAGE ──────────────────────────────────────────
  {
    id: 'img_ilkal_saree',
    title: 'GI Ilkal Saree Handloom Weaving',
    url: '/images/destinations/Ilkal.png',
    category: 'GI Handloom Craft',
    taluk: 'Ilkal',
    destinationId: 'dest_ilkal',
    caption: 'GI-tagged handloom heritage featuring the legendary Kondi loop technique and distinctive red-and-white Tope-Teni pallu.',
    keywords: ['ilkal', 'saree', 'handloom', 'weaver', 'weavers', 'kondi', 'tope-teni', 'tope teni', 'chikki paras', 'kasuti', 'gi tag', 'craft', 'silk', 'cotton']
  },
  {
    id: 'img_guledgudda_khana',
    title: 'Guledgudd Khana Fabric Weaving',
    url: '/images/destinations/Guledgudda.png',
    category: 'GI Handloom Craft',
    taluk: 'Guledgudda',
    destinationId: 'dest_guledgudda',
    caption: 'World-famous GI-tagged blouse fabric (Khana) woven with traditional motifs like Siddeshwara Peetha and Chariot wheels.',
    keywords: ['guledgudda', 'guledgudd', 'khana', 'blouse fabric', 'choli', 'handloom', 'weaving', 'gi tag', 'textile', 'craft']
  },

  // ── ALMATTI DAM & NATURE ──────────────────────────────────────────────────
  {
    id: 'img_almatti_dam',
    title: 'Almatti Dam & Lal Bahadur Shastri Sagar',
    url: '/images/destinations/Alamatti.png',
    category: 'Ecotourism & Engineering',
    taluk: 'Nidagundi',
    destinationId: 'dest_almatti',
    caption: 'Massive multipurpose masonry dam on the Krishna River featuring illuminated musical fountains, Mughal gardens, and rock garden.',
    keywords: ['almatti', 'alamatti', 'dam', 'krishna river', 'musical fountain', 'mughal garden', 'rock garden', 'reservoir', 'water']
  },

  // ── REGIONAL CENTRES (MUDHOL, JAMKHANDI, BILAGI, SHIVAYOGAMANDIR) ──────────
  {
    id: 'img_mudhol',
    title: 'Mudhol Royal Heritage & Hound Culture',
    url: '/images/destinations/Mudhol.png',
    category: 'Heritage & Culture',
    taluk: 'Mudhol',
    destinationId: 'dest_mudhol',
    caption: 'Historic princely state famous for the indigenous royal Mudhol Hound sight-hound breed and classical poet Ranna.',
    keywords: ['mudhol', 'mudhol hound', 'ranna', 'ghataprabha', 'princely state', 'dog', 'hound']
  },
  {
    id: 'img_jamkhandi',
    title: 'Jamkhandi Royal Heritage & Ram Teerth',
    url: '/images/destinations/jamkhandi.png',
    category: 'Heritage & Nature',
    taluk: 'Jamkhandi',
    destinationId: 'dest_jamkhandi',
    caption: 'Former Maratha princely state noted for Patwardhan palaces, Ram Teerth natural spring, and historic wrestling akharas.',
    keywords: ['jamkhandi', 'patwardhan', 'ram teerth', 'palace', 'wrestling', 'princely state']
  },
  {
    id: 'img_bilagi',
    title: 'Bilagi Heritage & Arethimmanagudda',
    url: '/images/destinations/Bilagi.png',
    category: 'Heritage & Nature',
    taluk: 'Bilagi',
    destinationId: 'dest_bilagi',
    caption: 'Historic town on Ghataprabha river known for Siddheshwara temple, Arethimmanagudda rock formations, and Baoli stepwells.',
    keywords: ['bilagi', 'siddheshwara', 'arethimmanagudda', 'baoli', 'ghataprabha']
  },
  {
    id: 'img_shivayogamandir',
    title: 'Shivayogamandira Spiritual & Vedantic Institute',
    url: '/images/destinations/shivayogamandir.png',
    category: 'Spiritual & Cultural',
    taluk: 'Badami',
    destinationId: 'dest_shivayogamandira',
    caption: 'Venerable spiritual monastic institution founded by Hangal Kumaraswamiji along the Malaprabha River.',
    keywords: ['shivayogamandir', 'shivayogamandira', 'hangal kumaraswamiji', 'mutt', 'vedanta', 'malaprabha']
  },

  // ── TRADITIONAL LOCAL CUISINE & GASTRONOMY ────────────────────────────────
  {
    id: 'img_jolada_rotti',
    title: 'North Karnataka Traditional Jolada Rotti Oota',
    url: '/images/food/jolada_rotti.jpg',
    category: 'Traditional Cuisine',
    taluk: 'Bagalkote',
    caption: 'Hand-patted sorghum flatbread served with Ennegayi (spiced stuffed brinjal), Shenga chutney powder, Ranjaka chili paste, and fresh curd.',
    keywords: ['food', 'cuisine', 'jolada rotti', 'rotti', 'ennegayi', 'brinjal', 'shenga chutney', 'khanavali', 'traditional food', 'lunch', 'dinner', 'eating', 'meal', 'uttara karnataka']
  },
  {
    id: 'img_amingad_kardant',
    title: 'Authentic Amingad Kardant',
    url: '/images/food/amingad_kardant.jpg',
    category: 'Traditional Sweets',
    taluk: 'Hunagund',
    caption: 'GI-reputed nutritious sweet delicacy made with pure edible gum (dink), organic jaggery, dry dates, cashews, almonds, and pistachios.',
    keywords: ['kardant', 'karadantu', 'amingad', 'sweet', 'sweets', 'dry fruits', 'edible gum', 'dink', 'jaggery', 'dessert']
  },
  {
    id: 'img_galgali_peda',
    title: 'Famous Galgali Peda',
    url: '/images/food/galgali_peda.jpg',
    category: 'Traditional Sweets',
    taluk: 'Bilagi',
    caption: 'Centuries-old milk sweet made from caramelized condensed mawa from the village of Galgali on the Krishna riverbanks.',
    keywords: ['galgali peda', 'peda', 'galgali', 'milk sweet', 'mawa', 'sweet', 'bilagi']
  },
  {
    id: 'img_susla_mirchi',
    title: 'Susla & Hot Mirchi Bajji',
    url: '/images/food/susla_mirchi_bajji.jpg',
    category: 'Traditional Breakfast & Snacks',
    taluk: 'Bagalkote',
    caption: 'Classic Uttara Karnataka breakfast of seasoned puffed rice (Mandakki Susla) paired with crispy deep-fried besan chili fritters (Mirchi Bajji).',
    keywords: ['susla', 'mirchi bajji', 'bajji', 'mandakki', 'breakfast', 'snack', 'tea time', 'puffed rice']
  },
  {
    id: 'img_shenga_holige',
    title: 'Shenga Holige (Peanut Stuffed Sweet Flatbread)',
    url: '/images/food/shenga_holige.jpg',
    category: 'Traditional Sweets',
    taluk: 'Bagalkote',
    caption: 'Traditional festival sweet flatbread stuffed with roasted peanuts, cardamom, and organic jaggery.',
    keywords: ['shenga holige', 'holige', 'sweet', 'peanut', 'jaggery', 'festival sweet']
  },
  {
    id: 'img_savaji_food',
    title: 'Traditional Savaji Cuisine',
    url: '/images/food/savaji_nonveg.jpg',
    category: 'Traditional Cuisine',
    taluk: 'Bagalkote',
    caption: 'Renowned fiery warrior cuisine prepared using secret 32-spice masala blend and wood-fired slow cooking.',
    keywords: ['savaji', 'sauji', 'spicy', 'mutton', 'nonveg', 'non-veg', 'curry', 'masala']
  },
  {
    id: 'img_jalebi_rabri',
    title: 'Hot Jalebi with Thick Rabri',
    url: '/images/food/jalebi_rabri.jpg',
    category: 'Traditional Sweets',
    taluk: 'Bagalkote',
    caption: 'Crisp spiral jalebis soaked in saffron sugar syrup topped with creamy slow-simmered rabri.',
    keywords: ['jalebi', 'rabri', 'sweet', 'dessert', 'evening snack']
  },
  {
    id: 'img_fakirappa_sweets',
    title: 'Fakirappa Sweets Heritage',
    url: '/images/food/fakirappa_sweets.jpg',
    category: 'Traditional Sweets',
    taluk: 'Bagalkote',
    caption: 'Iconic heritage sweet confectioners of Bagalkote offering authentic regional milk and jaggery delicacies.',
    keywords: ['fakirappa', 'sweets', 'heritage sweet shop', 'bagalkote sweets']
  }
];

/**
 * Match query or text against image catalog to find the most relevant images
 * @param {string} text - User query or generated answer text
 * @param {number} maxCount - Max images to return (default 4)
 * @returns {Array} - Array of matched image objects with title, url, caption, category, taluk
 */
function findRelatedImages(text, maxCount = 4) {
  if (!text || typeof text !== 'string') return [];
  const query = text.toLowerCase();

  const scored = IMAGE_CATALOG.map(img => {
    let score = 0;

    // Direct title match
    const titleLower = img.title.toLowerCase();
    if (query.includes(titleLower)) score += 35;

    // Check specific keywords (give high weight to specific distinct terms)
    img.keywords.forEach(kw => {
      const kwLower = kw.toLowerCase();
      if (kwLower === 'monument' || kwLower === 'craft') {
        // generic keyword, small score
        if (query.includes(kwLower)) score += 1;
      } else if (query.includes(kwLower)) {
        // specific keyword match
        score += (kwLower.length > 5 ? 10 : 5);
        // extra boost if word appears as a standalone word/phrase
        const wordRegex = new RegExp('\\b' + kwLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
        if (wordRegex.test(text)) {
          score += 15;
        }
      }
    });

    // Check taluk & category
    if (img.taluk && query.includes(img.taluk.toLowerCase())) score += 3;

    return { img, score };
  });

  const matched = scored
    .filter(item => item.score > 10)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxCount)
    .map(item => ({
      id: item.img.id,
      title: item.img.title,
      url: item.img.url,
      caption: item.img.caption,
      category: item.img.category,
      taluk: item.img.taluk
    }));

  return matched;
}

module.exports = {
  IMAGE_CATALOG,
  findRelatedImages
};
