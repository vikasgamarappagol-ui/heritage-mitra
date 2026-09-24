const fs = require('fs');
const path = require('path');

const destPath = path.join(__dirname, 'source_data', 'structured', 'destinations.json');
const destinations = JSON.parse(fs.readFileSync(destPath, 'utf8'));

// The master mapping of verified attractions with images
const verifiedAttractionImages = {
  // Badami
  'Badami Cave Temples (Caves 1-4)': 'BadamiCave temples.jpg',
  'Agastya Lake': 'bhutanatha group of temples.jpg',
  'Bhoothanatha Group of Temples': 'bhutanatha group of temples.jpg',
  'Badami North Fort & Upper Shivalaya': 'Badami North Fort & Upper Shivalaya.jpg',
  'Archaeological Museum Badami': 'archeological museum badami.jpg',
  'Malegitti Shivalaya': 'Malegitti Shivalaya.jpg',

  // Pattadakal
  'Virupaksha Temple (Lokeshwara)': 'Virupaksha Temple (Lokeshwara).jpg',
  'Mallikarjuna Temple (Trailokyeshwara)': 'Mallikarjuna Temple (Trailokyeshwara).jpg',
  'Sangameshwara Temple (Vijayeshwara)': 'Sangameshwara Temple (Vijayeshwara).jpg',
  'Galaganatha Temple (Curvilinear Nagara Shikhara)': 'Galaganatha Temple (Curvilinear Nagara Shikhara).jpg',
  'Papanatha Temple': 'Papanatha Temple.jpg',
  'Jain Narayana Temple (Rashtrakuta era)': 'Jain Narayana Temple (Rashtrakuta era).jpg',

  // Aihole
  'Durga Temple Complex (Apsidal sanctum with ambulatory peristyle)': 'Durga Temple Complex (Apsidal sanctum with ambulatory peristyle).jpg',
  'Lad Khan Temple (Panchayatana hall-style)': 'Lad Khan Temple (Panchayatana hall-style).jpg',
  'Meguti Jain Temple & Ravikirti Inscription': 'Meguti Jain Temple & Ravikirti Inscription.jpg',
  'Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja)': 'Ravana Phadi Cave Temple (Rock-cut Shiva Nataraja).jpg',
  'Huchimalli Temple': 'Huchimalli Temple.jpg',
  'Konti Gudi Group': 'Konti Gudi Group.jpg',
  'ASI Archaeological Museum Aihole': 'ASI Archaeological Museum Aihole.jpg',

  // Mahakuta
  'Mahakuteshwara Temple': 'Mahakuteshwara Temple.jpg',
  'Mallikarjuna Temple': 'Mallikarjuna Temple.jpg',
  'Vishnu Pushkarini (Sacred Spring Pool)': 'Vishnu Pushkarini (Sacred Spring Pool).jpg',
  'Submerged Panchamukha Linga': 'Submerged Panchamukha Linga.jpg',
  'Mahakuta Pillar Inscription site': 'Mahakuta Pillar Inscription site.JPG',

  // Kudala Sangama
  'Sangameshwara Temple (Chalukyan style)': 'Sangameshwara Temple (Chalukyan style).jpg',
  'Museum of Basava Philosophy': 'Museum of Basava Philosophy.jpg',

  // Ilkal
  'Weaver Cluster Workshops (Pit loom demonstrations)': 'Weaver Cluster Workshops (Pit loom demonstrations).jpg',
  'Shri Vijaya Mahantesh Temple & Matha': 'Shri Vijaya Mahantesh Temple & Matha.jpg',
  'Kasuti Embroidery Artisans Guilds': 'Kasuti Embroidery Artisans Guilds.jpg',

  // Guledagudda
  'Traditional Khana Handloom Weaving Units': 'Traditional Khana Handloom Weaving Units.jpg',

  // Mudhol
  'Canine Research and Information Centre (CRIC Mudhol Hound Centre)': 'Canine Research and Information Centre (CRIC Mudhol Hound Centre).jpg',
  'Mudhol Royal Palace & Fort ruins': 'Mudhol Royal Palace & Fort ruins.jpg',

  // Jamkhandi
  'Jamkhandi Royal Palace (Ram Prasad Palace)': 'Jamkhandi Royal Palace (Ram Prasad Palace).jpg',
  'Pampa Sarovara Lake': 'Pampa_Sarovar_from_the_hill.jpg',

  // Bilagi
  'Siddheshwara Temple': '01 Siddeshwara Devalaya Bilagi.jpg',
  'Ghataprabha backwaters viewpoint': 'Ghataprabha backwaters viewpoint.webp'
};

destinations.forEach(dest => {
  if (Array.isArray(dest.major_attractions)) {
    // Filter to only include attractions that have an authentic image
    dest.major_attractions = dest.major_attractions.filter(a => verifiedAttractionImages[a]);
  } else {
    dest.major_attractions = [];
  }
});

fs.writeFileSync(destPath, JSON.stringify(destinations, null, 2), 'utf8');
console.log('Successfully updated destinations.json with verified major attractions!');
