/**
 * AI-POWERED INCLUSIVE TOURISM ECOSYSTEM FOR BAGALKOTE
 * Backend Server & RAG Engine
 * 
 * Primary Theme: Inclusive Growth
 * Tagline: "Inclusive Tourism for Every Traveller, Opportunities for Every Local."
 * Core Message: "AI should not only take tourists to monuments. 
 *                AI should connect tourists with the people, culture, skills and businesses of Bagalkote."
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { MultiSourceRAG } = require('./lib/multi_source_rag');
const { VisionEngine } = require('./lib/vision_engine');
const { findRelatedImages, IMAGE_CATALOG } = require('./lib/image_catalog');

// Load .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...vals] = trimmed.split('=');
      if (key && vals.length) {
        process.env[key.trim()] = vals.join('=').trim().replace(/^["']|["']$/g, '');
      }
    }
  });
}

const app = express();
const PORT = process.env.PORT || 3000;

// Government Websites & Google Search AI Assistant (No RAG)
async function callGovtAndGoogleAI(query, language = 'en') {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';
  if (!apiKey) return null;

  let langInstruction = "Respond in clear, professional, engaging English.";
  if (language === 'kn') {
    langInstruction = "Respond in natural, respectful, fluent Kannada script (ಕನ್ನಡ). Ensure accurate Kannada terminology.";
  } else if (language === 'hi') {
    langInstruction = "Respond in natural, respectful, fluent Hindi (हिन्दी). Ensure accurate Hindi terminology.";
  }

  const systemPrompt = `You are the Official AI Tourism Companion for Bagalkote District, Karnataka, India.
IMPORTANT INSTRUCTION: You DO NOT use internal RAG systems.
You formulate your verified responses using Official Government Portals and verified Google Search Intelligence:
- Karnataka Tourism Department (https://karnatakatourism.org)
- District Administration Bagalkote (https://bagalkot.nic.in)
- Archaeological Survey of India (ASI) (https://asi.nic.in)
- Incredible India, Ministry of Tourism, Govt of India (https://www.incredibleindia.gov.in)
- Karnataka State Tourism Development Corporation (https://kstdc.co)
- Google Search Knowledge & Verified Travel Intelligence

STRICT GUIDELINES:
1. Provide accurate, up-to-date guidance on Bagalkote monuments (Badami Caves, UNESCO Pattadakal, Aihole, Kudala Sangama, Almatti Dam).
2. Detail local GI-tagged handlooms (Ilkal sarees, Guledgudd Khana) and traditional Uttara Karnataka food (Jolada Rotti, Ennegayi, Amingad Kardant).
3. For emergency helplines, cite official numbers: 1077 (District Control Room), 112 (Police), 104 (Health Helpline).
4. For accessibility: note Badami caves require climbing steep stone stairs (~200 steps), while Pattadakal and Kudala Sangama have ramps and wheelchair assistance.
5. End your response with a clear "🏛️ Verified Sources:" section linking to the relevant official Government websites (karnatakatourism.org, bagalkot.nic.in, asi.nic.in) and Google Search.
6. Language instruction: ${langInstruction}`;

  const userContent = `USER QUESTION / TRAVEL INQUIRY: ${query}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userContent }
        ],
        temperature: 0.3,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      console.error(`[AI Error] HTTP ${response.status}: ${await response.text()}`);
      return null;
    }

    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    }
    return null;
  } catch (err) {
    console.error('[AI Assistant Exception]', err.message);
    return null;
  }
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Paths to Source Data
const STRUCTURED_DIR = path.join(__dirname, 'source_data', 'structured');
const RAG_DIR = path.join(__dirname, 'source_data', 'rag');
const SOURCES_FILE = path.join(__dirname, 'source_data', 'sources', 'sources.json');

// Helper to safely load JSON
function loadJson(filename) {
  try {
    const fullPath = path.join(STRUCTURED_DIR, filename);
    if (fs.existsSync(fullPath)) {
      return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    }
    return [];
  } catch (err) {
    console.error(`Error loading ${filename}:`, err.message);
    return [];
  }
}

// In-Memory Database initialized from verified source data
const db = {
  destinations: loadJson('destinations.json'),
  heritage: loadJson('heritage.json'),
  culture: loadJson('culture.json'),
  festivals: loadJson('festivals.json'),
  artisans: loadJson('artisans.json'),
  handicrafts: loadJson('handicrafts.json'),
  businesses: loadJson('local_businesses.json'),
  guides: loadJson('guides.json'),
  homestays: loadJson('homestays.json'),
  foodProviders: loadJson('food_providers.json'),
  localExperiences: loadJson('local_experiences.json'),
  localSkills: loadJson('local_skills.json'),
  accessibility: loadJson('accessibility.json'),
  accessibilityFeatures: loadJson('accessibility_features.json'),
  safety: loadJson('safety_information.json'),
  languages: loadJson('languages.json'),
  tourismSources: loadJson('tourism_sources.json'),
  sources: fs.existsSync(SOURCES_FILE) ? JSON.parse(fs.readFileSync(SOURCES_FILE, 'utf8')) : [],

  // Dynamic runtime entities (for demonstration, booking workflow & provider onboarding)
  providerInquiries: [],
  userTrips: [],
  bookings: [],
  registeredProviders: [],
  pendingVerifications: [
    {
      id: "ver_001",
      provider_id: "BGK-CRAFT-0044",
      provider_name: "Mahalingpur Khadi & Weaving Society",
      skill: "Handmade Khadi Weaving & Dyeing",
      category: "Artisan Guild",
      taluk: "Mudhol",
      location: "Mahalingpur, Mudhol",
      price: 350,
      duration: 2,
      language: "Kannada, Hindi",
      availability: "Mon–Sat, 9:00 AM – 6:00 PM",
      description: "Traditional cotton and silk khadi weaving demonstration on handlooms. Tour of organic dye house and yarn spinning.",
      submitted_at: "2026-09-18T10:30:00+05:30",
      status: "PENDING",
      documents_submitted: ["Khadi Board Certificate", "Registration No. 441/2018"],
      work_photos: ["/images/destinations/Ilkal.png"],
      certifications: ["KVIC Handloom Registration Certificate #441/2018"]
    },
    {
      id: "ver_002",
      provider_id: "BGK-HOME-0019",
      provider_name: "Ghataprabha Agro Homestay",
      skill: "Rural Homestay & Organic Farm Cooking",
      category: "Homestay",
      taluk: "Bilagi",
      location: "Ghataprabha River Bank, Bilagi",
      price: 1200,
      duration: 24,
      language: "Kannada, English",
      availability: "Daily",
      description: "Authentic North Karnataka farmstay experience. Harvest fresh organic vegetables, milk cows, and enjoy traditional Jolada Rotti meals.",
      submitted_at: "2026-09-19T14:15:00+05:30",
      status: "PENDING",
      documents_submitted: ["Gram Panchayat NOC", "Property Tax Receipt"],
      work_photos: ["/images/destinations/badami.jpg"],
      certifications: ["Gram Panchayat Commercial NOC #GP/2025/88"]
    }
  ],
  complaints: [
    {
      id: "cmp_001",
      ticketId: "BGK-TGT-2026-1042",
      type: "COMPLAINT",
      category: "Overcharging & Parking Fees",
      taluk: "Badami",
      location: "Badami Cave Temples (Agastya Lake Parking Lot)",
      incidentDate: "2026-09-22 11:30 AM",
      urgency: "Urgent",
      touristName: "Rajesh Kumar",
      phone: "+91 98450 12345",
      email: "rajesh.kumar@example.com",
      touristType: "Domestic Visitor (Bengaluru)",
      description: "Private parking attendants at the main Agastya lake approach demanded ₹100 for a car parking, whereas the official ASI/TMC displayed tariff is ₹30. Attendant refused to provide a printed receipt and spoke aggressively.",
      photo: "/images/destinations/badami.jpg",
      status: "UNDER_REVIEW",
      submittedAt: "2026-09-22T11:45:00+05:30",
      dcNotes: "Notice issued to Municipal Commissioner Badami to audit parking contract. Official rate board ordered to be re-painted with District Helpline 1077.",
      history: [
        { status: "SUBMITTED", timestamp: "2026-09-22T11:45:00+05:30", note: "Grievance registered via Bagalkote Tourist Portal" },
        { status: "UNDER_REVIEW", timestamp: "2026-09-22T14:10:00+05:30", note: "DC Cell assigned to Badami Taluk Tahsildar for field inspection" }
      ]
    },
    {
      id: "cmp_002",
      ticketId: "BGK-TGT-2026-1038",
      type: "COMPLAINT",
      category: "Accessibility & Wheelchair Barriers",
      taluk: "Hunagund",
      location: "Pattadakal UNESCO World Heritage Complex",
      incidentDate: "2026-09-21 03:15 PM",
      urgency: "Critical",
      touristName: "Dr. Ananya Sharma",
      phone: "+91 94220 56789",
      email: "ananya.sharma@example.com",
      touristType: "Domestic Visitor (Pune)",
      description: "My elderly father is a wheelchair user. The accessible ramp leading into the Virupaksha temple compound was obstructed by temporary stone renovation scaffolding. No alternative ramp was marked or provided.",
      photo: "/images/destinations/pattadakal.jpg",
      status: "ACTION_DISPATCHED",
      submittedAt: "2026-09-21T15:30:00+05:30",
      dcNotes: "Dispatched ASI Dharwad Circle conservation engineer to remove obstruction. Temporary rubberized ramp installed within 4 hours.",
      history: [
        { status: "SUBMITTED", timestamp: "2026-09-21T15:30:00+05:30", note: "Grievance registered via Bagalkote Tourist Portal" },
        { status: "ACTION_DISPATCHED", timestamp: "2026-09-21T16:00:00+05:30", note: "ASI Dharwad Circle Liaison Officer dispatched" }
      ]
    },
    {
      id: "cmp_003",
      ticketId: "BGK-TGT-2026-1025",
      type: "FEEDBACK",
      category: "Sanitation & Cultural Experience",
      taluk: "Hunagund",
      location: "Kudala Sangama Confluence & Aikya Mantapa",
      incidentDate: "2026-09-23 09:00 AM",
      urgency: "Normal",
      touristName: "Suresh Patil",
      phone: "+91 81055 43210",
      email: "suresh.patil@example.com",
      touristType: "Family Traveler (Hubballi)",
      description: "Visited Kudala Sangama with family. The river ghats were exceptionally clean, life jackets were available for boat ride to Sangameshwara temple, and the Basava museum display was world-class. Thank you District Administration!",
      photo: "/images/destinations/Kudala_Sangama.jpg",
      status: "RESOLVED",
      submittedAt: "2026-09-23T09:20:00+05:30",
      dcNotes: "Official commendation passed to Kudala Sangama Development Authority sanitation wing.",
      history: [
        { status: "SUBMITTED", timestamp: "2026-09-23T09:20:00+05:30", note: "Feedback registered with 5-star rating" },
        { status: "RESOLVED", timestamp: "2026-09-23T10:15:00+05:30", note: "Appreciation recorded by Tourism Officer" }
      ]
    },
    {
      id: "cmp_004",
      ticketId: "BGK-TGT-2026-1019",
      type: "COMPLAINT",
      category: "Guide Conduct & Unlicensed Operators",
      taluk: "Hunagund",
      location: "Aihole Durga Temple Complex",
      incidentDate: "2026-09-20 01:45 PM",
      urgency: "Urgent",
      touristName: "Michael Evans",
      phone: "+44 7700 900123",
      email: "michael.evans@uktravel.com",
      touristType: "International Tourist (UK)",
      description: "Approached by two men without Department of Tourism guide badges who demanded ₹1,500 and claimed foreigners cannot enter without hiring them. They gave inaccurate historical facts about Chalukyan architecture.",
      photo: "/images/destinations/aihole.jpg",
      status: "RESOLVED",
      submittedAt: "2026-09-20T14:00:00+05:30",
      dcNotes: "Tourist Police deployed to Aihole gate. Unlicensed operators issued warnings. Registered guide verification QR codes deployed at ASI ticket counter.",
      history: [
        { status: "SUBMITTED", timestamp: "2026-09-20T14:00:00+05:30", note: "Grievance registered via Bagalkote Tourist Portal" },
        { status: "RESOLVED", timestamp: "2026-09-20T17:30:00+05:30", note: "Tourist Police squad deployed and verified badge compliance" }
      ]
    }
  ]
};

// ============================================================
// RAG VECTOR & SEMANTIC RETRIEVAL ENGINE
// ============================================================

class RAGEngine {
  constructor(ragDir) {
    this.ragDir = ragDir;
    this.documents = [];
    this.loadDocuments();
  }

  loadDocuments() {
    try {
      if (!fs.existsSync(this.ragDir)) return;
      const files = fs.readdirSync(this.ragDir).filter(f => f.endsWith('.md'));
      this.documents = files.map(filename => {
        const fullPath = path.join(this.ragDir, filename);
        const raw = fs.readFileSync(fullPath, 'utf8');

        // Parse YAML-like frontmatter
        let metadata = {};
        let content = raw;
        if (raw.startsWith('---')) {
          const parts = raw.split('---');
          if (parts.length >= 3) {
            const yamlBlock = parts[1];
            content = parts.slice(2).join('---').trim();
            yamlBlock.split('\n').forEach(line => {
              const [key, ...vals] = line.split(':');
              if (key && vals.length) {
                metadata[key.trim()] = vals.join(':').trim().replace(/^["']|["']$/g, '');
              }
            });
          }
        }

        // Tokenize for BM25/Cosine scoring
        const tokens = this.tokenize(content + ' ' + (metadata.title || ''));
        return {
          filename,
          metadata,
          content,
          tokens
        };
      });
      console.log(`[RAGEngine] Loaded ${this.documents.length} verified knowledge chunks.`);
    } catch (err) {
      console.error('[RAGEngine] Error loading documents:', err.message);
    }
  }

  tokenize(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\u0C80-\u0CFF\u0900-\u097F\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 2);
  }

  search(query, topK = 3) {
    const queryTokens = this.tokenize(query);
    if (!queryTokens.length) return [];

    const scored = this.documents.map(doc => {
      let score = 0;
      queryTokens.forEach(qt => {
        // Simple term frequency scoring
        const count = doc.tokens.filter(dt => dt.includes(qt) || qt.includes(dt)).length;
        if (count > 0) {
          score += count * 2;
        }
      });
      // Boost if title matches
      if (doc.metadata.title && queryTokens.some(qt => doc.metadata.title.toLowerCase().includes(qt))) {
        score += 15;
      }
      return { doc, score };
    });

    return scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(item => ({
        document_id: item.doc.metadata.document_id || item.doc.filename,
        title: item.doc.metadata.title || item.doc.filename,
        category: item.doc.metadata.category || 'General Heritage',
        location: item.doc.metadata.location || 'Bagalkote District',
        source: item.doc.metadata.source || 'Official Bagalkote District Portal',
        source_url: item.doc.metadata.source_url || 'https://bagalkot.nic.in/en/tourism/',
        verification_status: item.doc.metadata.verification_status || 'SOURCE_VERIFIED',
        snippet: item.doc.content.substring(0, 500) + '...',
        score: item.score
      }));
  }
}

const ragEngine = new RAGEngine(RAG_DIR);

// ============================================================
// MULTI-SOURCE EVIDENCE-GROUNDED RAG ENGINE (New Pipeline)
// ============================================================
const multiSourceRAG = new MultiSourceRAG(RAG_DIR, STRUCTURED_DIR, SOURCES_FILE);
const visionEngine = new VisionEngine(process.env.GROQ_API_KEY);

// ============================================================
// REST API ENDPOINTS
// ============================================================

// 1. Destinations
app.get('/api/destinations', (req, res) => {
  const { category, taluk, search } = req.query;
  let results = [...db.destinations];

  // Category alias map — maps UI filter pills to actual category keywords in the data
  const CATEGORY_ALIASES = {
    'nature': 'ecotourism',
    'heritage': 'heritage',
    'craft': 'craft',
    'food': 'local food',
    'spiritual': 'spiritual',
  };

  if (taluk && taluk !== 'All') {
    results = results.filter(d => d.taluk.toLowerCase().includes(taluk.toLowerCase()));
  }
  if (category && category !== 'All') {
    const catKey = category.toLowerCase();
    const resolvedCat = CATEGORY_ALIASES[catKey] || catKey;
    results = results.filter(d => d.category.toLowerCase().includes(resolvedCat));
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(d =>
      d.name.toLowerCase().includes(q) ||
      (d.alternate_names && d.alternate_names.some(a => a.toLowerCase().includes(q))) ||
      d.description.toLowerCase().includes(q) ||
      d.taluk.toLowerCase().includes(q)
    );
  }

  res.json({ count: results.length, data: results });

});

app.get('/api/destinations/:id', (req, res) => {
  const dest = db.destinations.find(d => d.id === req.params.id);
  if (!dest) return res.status(404).json({ error: 'Destination not found' });

  // Enrich with accessibility, nearby experiences, and food
  const accessibility = db.accessibility.find(a => a.destination_id === dest.id) || null;
  const experiences = db.localExperiences.filter(e => e.location.toLowerCase().includes(dest.taluk.toLowerCase()));
  const food = db.foodProviders.filter(f => f.location.toLowerCase().includes(dest.name.split(' ')[0].toLowerCase()));

  res.json({
    ...dest,
    accessibility_details: accessibility,
    associated_experiences: experiences,
    nearby_food: food
  });
});

// 2. Heritage
app.get('/api/heritage', (req, res) => {
  res.json({ count: db.heritage.length, data: db.heritage });
});

// 3. Artisans & Handicrafts (Module 8)
app.get('/api/artisans', (req, res) => {
  const { craft, taluk } = req.query;
  let results = [...db.artisans];

  if (craft) {
    results = results.filter(a => a.craft.toLowerCase().includes(craft.toLowerCase()));
  }
  if (taluk) {
    results = results.filter(a => a.location.toLowerCase().includes(taluk.toLowerCase()));
  }

  res.json({ count: results.length, data: results });
});

app.get('/api/handicrafts', (req, res) => {
  res.json({ count: db.handicrafts.length, data: db.handicrafts });
});

// 4. Local Businesses & Hospitality (Module 9)
app.get('/api/businesses', (req, res) => {
  const { category, verified_only } = req.query;
  let results = [...db.businesses];

  if (category) {
    results = results.filter(b => b.category.toLowerCase().includes(category.toLowerCase()));
  }
  if (verified_only === 'true') {
    results = results.filter(b => b.verification_status === 'SOURCE_VERIFIED');
  }

  res.json({ count: results.length, data: results });
});

app.get('/api/homestays', (req, res) => {
  res.json({ count: db.homestays.length, data: db.homestays });
});

app.get('/api/food', (req, res) => {
  res.json({ count: db.foodProviders.length, data: db.foodProviders });
});

app.get('/api/guides', (req, res) => {
  res.json({ count: db.guides.length, data: db.guides });
});

// 5. Accessible Tourism (Module 10)
app.get('/api/accessibility', (req, res) => {
  const { wheelchair_only, senior_friendly } = req.query;
  let results = [...db.accessibility];

  if (wheelchair_only === 'true') {
    results = results.filter(a => a.wheelchair_accessible === true);
  }
  if (senior_friendly === 'true') {
    results = results.filter(a => a.elderly_friendly === 'Good' || a.elderly_friendly === 'Excellent');
  }

  res.json({
    count: results.length,
    data: results,
    features: db.accessibilityFeatures,
    categories: db.accessibilityFeatures
  });
});

app.get('/api/accessibility/features', (req, res) => {
  res.json(db.accessibilityFeatures);
});

// 6. Multilingual Framework (Module 11)
app.get('/api/languages', (req, res) => {
  res.json(db.languages);
});

// 7. Tourist-Local Skill Matching (Module 12)
app.post('/api/skills/match', (req, res) => {
  const { interest, budget, language, mobility } = req.body;

  let scoredMatches = db.localSkills.map(skill => {
    let score = 50; // base score
    const reasons = [];

    // Interest match
    if (interest && skill.tourist_interest.toLowerCase().includes(interest.toLowerCase())) {
      score += 30;
      reasons.push(`Directly matches your interest in ${skill.tourist_interest}`);
    } else if (interest) {
      score += 10;
      reasons.push(`Offers complementary cultural exposure to ${skill.category}`);
    } else {
      reasons.push(`Popular local experience in ${skill.location}`);
    }

    // Language consideration
    if (language === 'kn') {
      score += 10;
      reasons.push(`Native Kannada-speaking local craft guides available`);
    } else if (language === 'hi') {
      score += 8;
      reasons.push(`Hindi-speaking guide translation supported`);
    } else {
      reasons.push(`Multilingual assistance provided`);
    }

    // Mobility adjustment
    if (mobility === 'wheelchair' || mobility === 'reduced_walking') {
      if (skill.location.toLowerCase().includes('ilkal') || skill.location.toLowerCase().includes('kudala')) {
        score += 10;
        reasons.push(`Step-free or ground-level accessible workshop location`);
      } else {
        score -= 5;
      }
    }

    return {
      ...skill,
      match_score: Math.min(score, 98),
      match_reasons: reasons,
      associated_experience: db.localExperiences.find(e => e.id === skill.experience) || null
    };
  });

  scoredMatches.sort((a, b) => b.match_score - a.match_score);
  res.json({ count: scoredMatches.length, matches: scoredMatches });
});

// 8. Women & Senior Safety Centre (Module 13)
app.get('/api/safety', (req, res) => {
  res.json(db.safety);
});

// 9. Personalized Trip Planner
app.post('/api/trip-planner', (req, res) => {
  const {
    duration = '1 Day',
    budget = '₹2,000 - ₹5,000',
    interests = ['Heritage', 'Food'],
    companions = 'Family with Seniors',
    accessibility = 'Reduced Walking',
    language = 'en'
  } = req.body;

  // Filter destinations based on accessibility and interests
  let selectedDests = [...db.destinations];
  if (accessibility.includes('Reduced Walking') || accessibility.includes('Wheelchair') || companions.includes('Seniors')) {
    selectedDests = selectedDests.filter(d => {
      const acc = db.accessibility.find(a => a.destination_id === d.id);
      return acc && (acc.wheelchair_accessible === true || acc.elderly_friendly === 'Good' || acc.elderly_friendly === 'Excellent');
    });
  }

  // Ensure iconic sites are present if possible
  const badami = db.destinations.find(d => d.id === 'dest_badami');
  const pattadakal = db.destinations.find(d => d.id === 'dest_pattadakal');
  const kudala = db.destinations.find(d => d.id === 'dest_kudala_sangama');
  const ilkal = db.destinations.find(d => d.id === 'dest_ilkal');

  const itinerary = {
    trip_title: `Inclusive Bagalkote Experience (${duration})`,
    theme: "Heritage, Local Artisans & Community Gastronomy",
    parameters: { duration, budget, companions, accessibility, language },
    timeline: [
      {
        time: "08:30 AM - 11:00 AM",
        type: "Heritage Destination",
        name: pattadakal ? pattadakal.name : "Pattadakal UNESCO World Heritage Complex",
        kn_name: "ಪಟ್ಟದಕಲ್ಲು",
        description: "Explore the 8th-century royal coronation temples with level stone-flagged pathways.",
        accessibility_note: "♿ Wheelchair accessible with gentle entrance ramp and shaded benches.",
        verified_source: "UNESCO & Archaeological Survey of India",
        estimated_cost: "₹40 per entry ticket"
      },
      {
        time: "11:30 AM - 01:00 PM",
        type: "Local Artisan & Skill Experience",
        name: "Ilkal Saree Weaving Demonstration",
        kn_name: "ಇಳಕಲ್ ಸೀರೆ ನೇಕಾರಿಕೆ",
        description: "Witness master weavers operating traditional pit-looms with the Kondi loop-jointing technique.",
        provider: "Ilkal Saree Weavers' Co-operative Production Society",
        accessibility_note: "Ground-level cooperative showroom with level access.",
        verified_source: "Bagalkote District Handloom Tourism Committee",
        estimated_cost: "Free visit; direct artisan purchases available"
      },
      {
        time: "01:15 PM - 02:30 PM",
        type: "Traditional Culinary Immersion",
        name: "North Karnataka Traditional Jolada Rotti Meal",
        kn_name: "ಸಾಂಪ್ರದಾಯಿಕ ಜೋಳದ ರೊಟ್ಟಿ ಊಟ",
        description: "Fresh hand-patted sorghum flatbreads served with stuffed brinjal (Ennegayi), Shenga chutney, and curd.",
        provider: "KSTDC Mayura Restaurant / Verified Local Khanavali",
        accessibility_note: "Ground-floor dining with ramped access.",
        verified_source: "KSTDC Official Directory",
        estimated_cost: "₹150 - ₹200 per person"
      },
      {
        time: "03:00 PM - 05:30 PM",
        type: "Spiritual & Riverside Heritage",
        name: kudala ? kudala.name : "Kudala Sangama River Confluence",
        kn_name: "ಕೂಡಲ ಸಂಗಮ",
        description: "Visit the sacred river confluence and Aikya Mantapa of Jagadjyothi Basaveshwara.",
        accessibility_note: "♿ Campus golf buggies, elevators to river walkway, and universal Dasoha.",
        verified_source: "Kudalasangama Development Board",
        estimated_cost: "Free entry"
      }
    ],
    safety_advisory: "Emergency assistance is available 24x7 via Bagalkote District Helpline 1077 and Police 112.",
    estimated_total_budget: "₹1,200 - ₹2,500 for the group (excluding lodging)"
  };

  res.json(itinerary);
});

// 10. AI Chat Assistant — Multimodal Evidence-Grounded Engine (Text, Voice, Images & Vision)
app.post('/api/chat', async (req, res) => {
  const { message, image, language = 'en', debug = false } = req.body;

  // Multimodal Vision Routing: If an image is uploaded with/without text
  if (image) {
    try {
      console.log(`[Chat:Vision] Image uploaded with prompt: "${(message || '').substring(0, 80)}" | Lang: ${language}`);
      const visionResult = await visionEngine.analyzeImage(image, message, language);
      return res.json(visionResult);
    } catch (vErr) {
      console.error('[Chat:Vision Error]', vErr.message);
      return res.status(500).json({
        error: 'Failed to analyze image.',
        reply: 'I was unable to analyze this image. Please ensure it is a clear image of a monument, craft, or landmark.',
        confidence_state: 'NO_CONFIDENCE',
        related_images: [],
        sources: []
      });
    }
  }

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  console.log(`[Chat] Query: "${message.substring(0, 80)}" | Lang: ${language} | Debug: ${debug}`);

  try {
    const isDebug = debug === true || debug === 'true' || req.query.debug === '1';
    const result = await multiSourceRAG.processQuery(message, language, isDebug);

    // Build backward-compatible response (legacy fields + new fields)
    const primarySource = (result.sources && result.sources[0]) || {};
    const sourceAttribution = result.sources
      ? result.sources.map(s => s.name).join(' & ')
      : 'Official Government Tourism Sources';

    // Find verified related images from our district catalog
    const relatedImages = findRelatedImages((result.reply || '') + ' ' + message, 4);

    res.json({
      reply: result.reply,
      source: sourceAttribution,
      verification_status: result.verification_status,
      confidence_state: result.confidence_state,
      answerability_score: result.answerability_score,
      detected_intent: result.detected_intent,
      requested_attribute: result.requested_attribute,
      sources: result.sources,
      related_images: relatedImages,
      engine: result.debug_trace ? result.debug_trace.engine_used : 'multi-source-rag',
      gov_websites: [
        'https://karnatakatourism.org',
        'https://bagalkot.nic.in',
        'https://asi.nic.in',
        'https://incredibleindia.gov.in',
        'https://kstdc.co'
      ],
      ...(result.debug_trace ? { debug_trace: result.debug_trace } : {})
    });
  } catch (err) {
    console.error('[Chat Error]', err.message);
    const fallbackImages = findRelatedImages(message || 'Badami Pattadakal', 3);
    res.status(500).json({
      error: 'Internal server error processing your query.',
      reply: 'I apologize, I am temporarily unable to answer. Please visit [bagalkot.nic.in](https://bagalkot.nic.in/en/tourism/) for official information.',
      confidence_state: 'NO_CONFIDENCE',
      related_images: fallbackImages,
      sources: [{ name: 'Official Bagalkote District Portal', url: 'https://bagalkot.nic.in/en/tourism/', domain: 'bagalkot.nic.in' }]
    });
  }
});

// 10a. Dedicated Visual Image Analysis Endpoint
app.post('/api/chat/vision', async (req, res) => {
  try {
    const { image, prompt, message, language = 'en' } = req.body;
    const userPrompt = prompt || message || '';
    if (!image) {
      return res.status(400).json({ error: 'Image is required for visual analysis.' });
    }
    console.log(`[Vision API] Received image analysis request. Prompt: "${userPrompt.substring(0, 50)}" | Lang: ${language}`);
    const result = await visionEngine.analyzeImage(image, userPrompt, language);
    res.json(result);
  } catch (err) {
    console.error('[Vision API Error]', err.message);
    res.status(500).json({
      error: 'Failed to analyze image.',
      reply: 'I was unable to analyze this image. Please ensure it is a clear photo of a monument, craft, food, or landmark.',
      confidence_state: 'NO_CONFIDENCE',
      related_images: [],
      sources: []
    });
  }
});

// 10b. Voice Speech-to-Text Audio Transcription Endpoint (Groq Whisper)
app.post('/api/voice/transcribe', async (req, res) => {
  try {
    const { audio, language } = req.body;
    if (!audio) {
      return res.status(400).json({ error: 'Audio data is required' });
    }
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Groq API key not configured for Whisper' });
    }

    // Convert base64 audio data URI to binary buffer
    const base64Data = audio.replace(/^data:audio\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const blob = new Blob([buffer], { type: 'audio/webm' });

    const formData = new FormData();
    formData.append('file', blob, 'recording.webm');
    formData.append('model', 'whisper-large-v3-turbo');
    if (language && (language === 'kn' || language === 'hi' || language === 'en')) {
      formData.append('language', language);
    }

    const groqRes = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      body: formData
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error('[Whisper Error]', groqRes.status, errText);
      return res.status(groqRes.status).json({ error: 'Transcription failed', details: errText });
    }

    const data = await groqRes.json();
    res.json({ text: data.text || '' });
  } catch (err) {
    console.error('[Voice Transcribe Exception]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// 10c. District Verified Media Catalog Endpoint
app.get('/api/media/catalog', (req, res) => {
  res.json({
    count: IMAGE_CATALOG.length,
    catalog: IMAGE_CATALOG
  });
});

// 10b. Debug Audit Log Inspector
app.get('/api/chat/debug/logs', (req, res) => {
  const limit = parseInt(req.query.limit) || 20;
  res.json({
    logs: multiSourceRAG.logger.getRecentLogs(limit),
    total_indexed_chunks: multiSourceRAG.store.chunks.length
  });
});

// 11. Provider Inquiries & Onboarding
app.post('/api/provider/inquiry', (req, res) => {
  const { provider_id, tourist_name, tourist_contact, experience_date, notes } = req.body;
  const inquiry = {
    id: `inq_${Date.now()}`,
    provider_id,
    tourist_name: tourist_name || 'Anonymous Tourist',
    tourist_contact: tourist_contact || 'Via Portal',
    experience_date: experience_date || 'Flexible',
    notes: notes || '',
    created_at: new Date().toISOString(),
    status: 'RECEIVED'
  };
  db.providerInquiries.push(inquiry);
  res.json({ success: true, inquiry });
});

// 11b. Real-Time Booking Request Workflow (5-Minute Timeout & Notifications)
app.post('/api/bookings', (req, res) => {
  const { provider_id, provider_name, tourist_name, tourist_contact, experience_title, experience_date, price } = req.body;
  const now = Date.now();
  const timeoutMs = 5 * 60 * 1000; // 5 minutes requirement

  const booking = {
    id: `bk_${now}_${Math.floor(Math.random() * 1000)}`,
    provider_id: provider_id || 'prov_default',
    provider_name: provider_name || 'Local Experience Provider',
    tourist_name: tourist_name || 'Tourist',
    tourist_contact: tourist_contact || '',
    experience_title: experience_title || 'Local Experience Session',
    experience_date: experience_date || new Date().toISOString().split('T')[0],
    price: price || 500,
    created_at: new Date(now).toISOString(),
    expires_at: new Date(now + timeoutMs).toISOString(),
    expires_at_timestamp: now + timeoutMs,
    status: 'PENDING', // PENDING -> CONFIRMED | REJECTED | EXPIRED
    rating: null,
    feedback: null
  };

  db.bookings.push(booking);
  res.json({ success: true, booking });
});

// Get booking status (Auto-expires if 5 minutes elapse without provider response)
app.get('/api/bookings/:id', (req, res) => {
  const booking = db.bookings.find(b => b.id === req.params.id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });

  // Check 5-minute timeout condition
  if (booking.status === 'PENDING' && Date.now() > booking.expires_at_timestamp) {
    booking.status = 'EXPIRED';
  }

  res.json(booking);
});

// Get bookings (filter by provider_id if query param present)
app.get('/api/bookings', (req, res) => {
  const { provider_id } = req.query;
  const now = Date.now();

  // Update expiration status for pending items
  db.bookings.forEach(b => {
    if (b.status === 'PENDING' && now > b.expires_at_timestamp) {
      b.status = 'EXPIRED';
    }
  });

  let list = db.bookings;
  if (provider_id) {
    list = list.filter(b => b.provider_id === provider_id);
  }
  res.json({ count: list.length, bookings: list });
});

// Provider Accept or Reject booking action
app.post('/api/bookings/:id/respond', (req, res) => {
  const { action } = req.body; // 'accept' or 'reject'
  const booking = db.bookings.find(b => b.id === req.params.id);

  if (!booking) return res.status(404).json({ error: 'Booking not found' });

  if (Date.now() > booking.expires_at_timestamp && booking.status === 'PENDING') {
    booking.status = 'EXPIRED';
    return res.status(400).json({ error: 'Booking request expired after 5 minutes timeout.', booking });
  }

  if (action === 'accept') {
    booking.status = 'CONFIRMED';
  } else if (action === 'reject') {
    booking.status = 'REJECTED';
  } else {
    return res.status(400).json({ error: 'Invalid action. Must be accept or reject.' });
  }

  res.json({ success: true, message: `Booking ${booking.status.toLowerCase()}`, booking });
});

// Post-Experience Tourist Ratings & Feedback
app.post('/api/bookings/:id/review', (req, res) => {
  const { rating, feedback } = req.body;
  const booking = db.bookings.find(b => b.id === req.params.id);

  if (!booking) return res.status(404).json({ error: 'Booking not found' });

  booking.rating = Number(rating) || 5;
  booking.feedback = (feedback || '').trim();
  booking.reviewed_at = new Date().toISOString();

  res.json({ success: true, message: 'Rating and feedback submitted successfully.', booking });
});

// Provider Portal Registration (with Work Photos & Certifications Proofs)
app.post('/api/provider/register', (req, res) => {
  const { providerId, name, skill, category, location, price, duration, language, availability, description, work_photos, workPhotos, certifications } = req.body;

  const verId = `ver_${Date.now()}`;
  const photos = (Array.isArray(workPhotos) && workPhotos.length) ? workPhotos : ((Array.isArray(work_photos) && work_photos.length) ? work_photos : ["/images/destinations/Ilkal.png"]);
  const docs = (Array.isArray(certifications) && certifications.length) ? certifications : ["Artisan Craft Guild Registration Certificate", "Government ID Proof"];

  const verificationRecord = {
    id: verId,
    provider_id: providerId || `BGK-PROV-${Math.floor(1000 + Math.random() * 9000)}`,
    provider_name: name || 'Local Provider',
    skill: skill || 'Traditional Craft & Experience',
    category: category || 'Crafts',
    taluk: (location || 'Bagalkote').split(',')[0].trim(),
    location: location || 'Bagalkote',
    price: Number(price) || 500,
    duration: Number(duration) || 2,
    language: language || 'Kannada, English',
    availability: availability || 'Daily, 9:00 AM – 6:00 PM',
    description: description || 'Verified local experience provider in Bagalkote.',
    submitted_at: new Date().toISOString(),
    status: 'PENDING',
    documents_submitted: docs,
    work_photos: photos,
    certifications: docs
  };

  const existingIdx = db.pendingVerifications.findIndex(v => v.provider_id === verificationRecord.provider_id || (v.provider_name === verificationRecord.provider_name && v.skill === verificationRecord.skill));
  if (existingIdx >= 0) {
    db.pendingVerifications[existingIdx] = { ...db.pendingVerifications[existingIdx], ...verificationRecord };
  } else {
    db.pendingVerifications.unshift(verificationRecord);
  }

  res.json({ success: true, message: 'Provider registered successfully and queued for DC verification.', verification: verificationRecord });
});

// DC Portal Verification Decision (Accept / Approve, Review / Inspect, or Reject Provider)
app.post('/api/admin/verifications/:id/decision', (req, res) => {
  const { decision, notes, provider_name, provider_id, category, taluk, location, skill, price, duration, description } = req.body;
  let record = db.pendingVerifications.find(v => v.id === req.params.id || (v.provider_id && v.provider_id === (provider_id || req.params.id)) || (v.provider_name && v.provider_name === provider_name));

  if (!record) {
    record = {
      id: req.params.id,
      provider_id: provider_id || `BGK-PROV-${Math.floor(1000 + Math.random() * 9000)}`,
      provider_name: provider_name || 'Local Provider',
      skill: skill || 'Local Craft & Experience',
      category: category || 'Crafts',
      taluk: taluk || 'Bagalkote',
      location: location || 'Bagalkote',
      price: price || 500,
      duration: duration || 2,
      description: description || 'Verified local experience provider in Bagalkote.',
      submitted_at: new Date().toISOString(),
      status: 'PENDING',
      documents_submitted: ["Artisan ID Card"],
      work_photos: ["/images/destinations/Ilkal.png"]
    };
    db.pendingVerifications.unshift(record);
  }

  if (decision === 'approve' || decision === 'accept') {
    record.status = 'VERIFIED';
    record.verified_at = new Date().toISOString();
    record.review_notes = '';
    record.rejection_notes = '';

    // Automatically add to active experience directory for tourists
    const newArtisan = {
      id: record.provider_id || `prov_${Date.now()}`,
      providerId: record.provider_id || `BGK-PROV-${Math.floor(1000 + Math.random() * 9000)}`,
      name: record.provider_name,
      avatar: (record.provider_name || 'P')[0].toUpperCase(),
      skill: record.skill || 'Local Craft & Experience',
      category: record.category || 'Crafts',
      interests: [record.category || 'Crafts', 'Culture', 'Local Living'],
      location: record.location || `${record.taluk || 'Bagalkote'}, Bagalkote`,
      price: Number(record.price) || 500,
      duration: Number(record.duration) || 2,
      language: record.language ? (Array.isArray(record.language) ? record.language : record.language.split(',').map(s=>s.trim())) : ['Kannada', 'English'],
      availability: record.availability || 'Mon–Sat, 9:00 AM – 6:00 PM',
      rating: 5.0,
      reviews: 1,
      verified: true,
      verificationStatus: 'Government Verified ✓',
      description: record.description || 'Government verified local experience provider in Bagalkote.',
      tags: ['Government Verified', 'DC Approved', record.category || 'Local Craft'],
      heroScore: 99
    };

    // Store in db.registeredProviders and db.artisans
    const idx = db.registeredProviders.findIndex(p => p.id === newArtisan.id || p.providerId === newArtisan.providerId || p.name === newArtisan.name);
    if (idx >= 0) db.registeredProviders[idx] = newArtisan;
    else db.registeredProviders.unshift(newArtisan);

    const artIdx = db.artisans.findIndex(a => a.name === newArtisan.name);
    if (artIdx >= 0) db.artisans[artIdx] = newArtisan;
    else db.artisans.unshift(newArtisan);

  } else if (decision === 'review') {
    record.status = 'UNDER_REVIEW';
    record.review_notes = notes || 'Inspection requested via Taluk Tahsildar';
    db.registeredProviders = db.registeredProviders.filter(p => p.id !== record.provider_id && p.providerId !== record.provider_id && p.name !== record.provider_name);
  } else if (decision === 'reject') {
    record.status = 'REJECTED';
    record.rejection_notes = notes || 'Documentation incomplete';
    db.registeredProviders = db.registeredProviders.filter(p => p.id !== record.provider_id && p.providerId !== record.provider_id && p.name !== record.provider_name);
  } else {
    return res.status(400).json({ error: 'Invalid decision. Use accept/approve, review, or reject.' });
  }

  res.json({ success: true, verification: record, registeredProvidersCount: db.registeredProviders.length });
});

// Get registered & approved experience providers
app.get('/api/providers/registered', (req, res) => {
  res.json({ count: db.registeredProviders.length, providers: db.registeredProviders });
});

// 12. DC Administration Official Authentication Gate
// Username: Dc_bgk | Password: DCofficebgk
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {};
  const cleanUser = (username || '').trim();
  const cleanPass = (password || '').trim();

  if (cleanUser === 'Dc_bgk' && cleanPass === 'DCofficebgk') {
    return res.json({
      success: true,
      token: 'dc-auth-token-bgk-2026-collectorate',
      user: {
        username: 'Dc_bgk',
        role: 'DEPUTY_COMMISSIONER',
        name: 'Deputy Commissioner & District Magistrate',
        district: 'Bagalkote',
        office: 'District Collectorate, Navanagar, Bagalkote'
      },
      message: 'Authentication successful. Access granted to District Collectorate Intelligence Portal.'
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid credentials. Access restricted to authorized District Administration personnel only.'
  });
});

// 13. Tourist Grievance & Feedback Portal Endpoints
// Submit a new complaint or feedback
app.post('/api/complaints', (req, res) => {
  const {
    type,
    category,
    taluk,
    location,
    incidentDate,
    urgency,
    description,
    touristName,
    phone,
    email,
    touristType,
    photo
  } = req.body || {};

  if (!description || !category) {
    return res.status(400).json({ success: false, error: 'Category and description are required.' });
  }

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const ticketId = `BGK-TGT-2026-${randomNum}`;
  const now = new Date().toISOString();

  const newComplaint = {
    id: `cmp_${Date.now()}`,
    ticketId,
    type: (type || 'COMPLAINT').toUpperCase(), // COMPLAINT or FEEDBACK
    category: category || 'General Inconvenience',
    taluk: taluk || 'Bagalkote',
    location: location || `${taluk || 'Bagalkote'} District`,
    incidentDate: incidentDate || new Date().toLocaleString('en-IN'),
    urgency: urgency || 'Normal',
    touristName: touristName || 'Anonymous Visitor',
    phone: phone || '',
    email: email || '',
    touristType: touristType || 'Domestic Visitor',
    description: description.trim(),
    photo: photo || (type === 'FEEDBACK' ? '/images/destinations/badami.jpg' : ''),
    status: 'NEW',
    submittedAt: now,
    dcNotes: '',
    history: [
      {
        status: 'SUBMITTED',
        timestamp: now,
        note: `${type === 'FEEDBACK' ? 'Visitor Appreciation & Feedback' : 'Tourist Grievance'} logged via Bagalkote Official Portal.`
      }
    ]
  };

  db.complaints.unshift(newComplaint);

  res.status(201).json({
    success: true,
    ticketId,
    complaint: newComplaint,
    message: 'Your submission has been registered with the DC Tourism Redressal Cell.'
  });
});

// Get all complaints & feedback (with optional filters)
app.get('/api/complaints', (req, res) => {
  let list = [...(db.complaints || [])];
  const { type, status, urgency, taluk } = req.query;

  if (type) {
    list = list.filter(c => c.type.toUpperCase() === type.toUpperCase());
  }
  if (status) {
    list = list.filter(c => c.status.toUpperCase() === status.toUpperCase());
  }
  if (urgency) {
    list = list.filter(c => c.urgency.toLowerCase() === urgency.toLowerCase());
  }
  if (taluk) {
    list = list.filter(c => c.taluk.toLowerCase() === taluk.toLowerCase());
  }

  res.json({
    count: list.length,
    complaints: list
  });
});

// Track a specific complaint by ticket ID or ID or Phone
app.get('/api/complaints/:lookup', (req, res) => {
  const query = (req.params.lookup || '').trim().toUpperCase();
  const found = (db.complaints || []).find(c =>
    c.ticketId.toUpperCase() === query ||
    c.id.toUpperCase() === query ||
    (c.phone && c.phone.replace(/\D/g, '').includes(query.replace(/\D/g, '')))
  );

  if (!found) {
    return res.status(404).json({ success: false, error: 'No grievance or feedback ticket found matching this reference.' });
  }

  res.json({ success: true, complaint: found });
});

// DC Official Update Action on Complaint (Change Status & Issue DC Directive)
app.put('/api/admin/complaints/:id', (req, res) => {
  const { id } = req.params;
  const { status, dcNotes, actionType } = req.body || {};

  const record = (db.complaints || []).find(c => c.id === id || c.ticketId === id);
  if (!record) {
    return res.status(404).json({ success: false, error: 'Complaint ticket not found.' });
  }

  const validStatuses = ['NEW', 'UNDER_REVIEW', 'ACTION_DISPATCHED', 'RESOLVED', 'REJECTED'];
  if (status && validStatuses.includes(status)) {
    record.status = status;
  }

  if (dcNotes) {
    record.dcNotes = dcNotes;
  }

  const now = new Date().toISOString();
  record.history.push({
    status: record.status,
    timestamp: now,
    note: dcNotes ? `DC Directive: ${dcNotes}` : `Status updated to ${record.status} by District Administration.`
  });

  res.json({
    success: true,
    complaint: record,
    message: 'DC Action Directive successfully recorded.'
  });
});

// 14. Admin & DC Intelligence Dashboard Analytics
app.get('/api/admin/analytics', (req, res) => {
  const complaints = db.complaints || [];
  const pendingCount = complaints.filter(c => c.status !== 'RESOLVED' && c.status !== 'REJECTED').length;
  const resolvedCount = complaints.filter(c => c.status === 'RESOLVED').length;
  const criticalCount = complaints.filter(c => c.urgency === 'Critical' && c.status !== 'RESOLVED').length;
  const feedbackCount = complaints.filter(c => c.type === 'FEEDBACK').length;

  res.json({
    disclaimer: "DEMO / PROTOTYPE DATA — Simulated District Tourism Intelligence",
    metrics: {
      total_tourists_projected_annual: "1,250,000+",
      verified_heritage_destinations: db.destinations.length,
      active_weaver_cooperatives: 12,
      registered_local_businesses: 48,
      ai_skill_matches_completed: 3420,
      accessibility_inquiries_pct: "28.4%",
      multilingual_queries: {
        kannada_pct: "52%",
        english_pct: "31%",
        hindi_pct: "17%"
      },
      complaints_total: complaints.length,
      complaints_pending: pendingCount,
      complaints_resolved: resolvedCount,
      complaints_critical: criticalCount,
      feedback_count: feedbackCount
    },
    popular_destinations: [
      { name: "Badami Caves", visitors_pct: 42 },
      { name: "Pattadakal UNESCO", visitors_pct: 26 },
      { name: "Aihole Complex", visitors_pct: 15 },
      { name: "Kudala Sangama", visitors_pct: 11 },
      { name: "Ilkal Weavers", visitors_pct: 6 }
    ],
    taluk_distribution: {
      "Badami": 45,
      "Hunagund": 25,
      "Ilkal": 12,
      "Guledagudda": 8,
      "Bagalkote": 5,
      "Mudhol": 3,
      "Jamkhandi": 2
    },
    verification_queue: db.pendingVerifications,
    complaints: complaints
  });
});

// 15. Sources Registry
app.get('/api/sources', (req, res) => {
  res.json({ count: db.sources.length, sources: db.sources });
});

// Catch-all route to serve SPA
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`=======================================================`);
    console.log(`AI-POWERED INCLUSIVE TOURISM ECOSYSTEM FOR BAGALKOTE`);
    console.log(`App Name: Heritage ಮಿತ್ರ`);
    console.log(`Local:   http://localhost:${PORT}`);
    console.log(`Network: http://10.149.73.226:${PORT}  ← scan QR on phone`);
    console.log(`Theme: Inclusive Growth | Ready for DC Presentation & Vercel`);
    console.log(`=======================================================`);
  });
}

module.exports = app;
