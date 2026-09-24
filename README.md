# Heritage ಮಿತ್ರ (Heritage Mitra)
### AI-Powered Inclusive Tourism Ecosystem for Bagalkote
#### ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಪ್ರವಾಸೋದ್ಯಮ ತಂತ್ರಜ್ಞಾನ ವೇದಿಕೆ

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20App-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://heritage-mitra.vercel.app)
[![PWA Ready](https://img.shields.io/badge/PWA-Mobile%20Installable-green?style=for-the-badge&logo=pwa&logoColor=white)](https://heritage-mitra.vercel.app)
[![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

> 🚀 **Live Production Web & Mobile App:** [https://heritage-mitra.vercel.app](https://heritage-mitra.vercel.app)  
> 📱 **Presentation QR Code Screen:** [https://heritage-mitra.vercel.app/scan.html](https://heritage-mitra.vercel.app/scan.html)  
> 🏷️ **Tagline:** Inclusive Tourism for Every Traveller, Opportunities for Every Local.  
> 🎯 **Core Mission:** AI should not only take tourists to monuments. AI should connect tourists with the people, culture, skills and businesses of Bagalkote.

---

## Table of Contents
1. [Project Title](#project-title)
2. [Problem Statement](#problem-statement)
3. [Objectives](#objectives)
4. [Proposed Methodology](#proposed-methodology)
5. [System Architecture](#system-architecture)
6. [AI and RAG Architecture](#ai-and-rag-architecture)
7. [Key Features and Modules](#key-features-and-modules)
8. [Technology Stack](#technology-stack)
9. [Data Sources and Coverage](#data-sources-and-coverage)
10. [Database Schema](#database-schema)
11. [REST API Reference](#rest-api-reference)
12. [Expected Outcomes and Impact](#expected-outcomes-and-impact)
13. [Responsible AI Policy](#responsible-ai-policy)
14. [Quick Start](#quick-start)
15. [Project File Structure](#project-file-structure)

---

## Project Title

**AI-Powered Inclusive Tourism Ecosystem for Bagalkote**
*A Government-Grade Production-Ready Platform*

- **Theme:** Inclusive Growth
- **Domain:** AI for Social Good — Tourism, Culture and Community Empowerment
- **Region:** Bagalkote District, Karnataka, India
- **Audience:** District Commissioner of Bagalkote, Karnataka Tourism Department, Hackathon Evaluation Panels

---

## Problem Statement

### Background

Bagalkote District is one of Karnataka most historically significant regions home to:
- **Badami (Ancient Vatapi)** - Capital of the Early Chalukya dynasty (540-757 CE) with UNESCO-listed rock-cut cave temples
- **Pattadakal** - UNESCO World Heritage Site with the finest Nagara-Dravida temple architecture
- **Aihole** - The Cradle of Indian Temple Architecture housing 125+ experimental temples
- **GI-Tagged Handlooms** - Ilkal Sarees (GI App No. 43) and Guledgudd Khana (GI App No. 373)

### Core Problems

| # | Problem | Impact |
|---|---|---|
| P1 | **Monument-Centric Tourism** - Tourists visit Badami caves and leave. Local artisans, weavers, khanavali owners receive no economic benefit | Local communities economically excluded from tourism revenue |
| P2 | **Zero Digital Discoverability for Artisans** - Ilkal Saree Weavers Co-operative and Guledgudd Khana Weavers have no digital presence or AI recommendation engine | GI-tagged crafts remain invisible to visiting tourists |
| P3 | **Accessibility Exclusion** - Seniors and wheelchair users have no curated guidance on accessible monuments. Badami 200+ steep rock-cut steps are a hidden hazard | Elderly and mobility-impaired tourists face dangerous unguided situations |
| P4 | **Language Barrier** - Tourist information is primarily in English only, excluding Kannada-speaking locals and Hindi-speaking pan-Indian tourists | Linguistic exclusion reduces engagement and economic transactions |
| P5 | **No Tourist-Local Connection Engine** - No mechanism for tourists to discover local craft masters or engage in authentic cultural immersion | Cultural heritage knowledge being lost; artisans have no platform |
| P6 | **Safety Information Gaps** - Women and senior tourists lack a verified centralized resource for emergency contacts and accessible medical facilities | Safety risks for vulnerable tourist groups |
| P7 | **No District-Level Tourism Intelligence** - District Administration has no consolidated real-time dashboard for tourist flows, artisan engagement, or taluk-wise demand | Evidence-based tourism policymaking is impossible |

### The Core Gap

Existing tourism apps point tourists to monuments and provide no connection to local artisans, local businesses, or the cultural economy of the district. No AI platform exists that treats Bagalkote local community as equal stakeholders in the tourism value chain.

---

## Objectives

1. **Redistribute tourist attention and spending** directly to local artisans, weavers, food providers, and guides - not just heritage monuments
2. **Build a zero-hallucination AI assistant** grounded strictly in verified government and official sources (ASI, Bagalkote District Administration, Karnataka Tourism, UNESCO)
3. **Create a verifiable accessibility matrix** that honestly informs and guides tourists with mobility challenges across all 13 major destinations
4. **Enable trilingual engagement** in Kannada, English, and Hindi to maximize inclusivity across all tourist demographics
5. **Design a Tourist-Local Skill Matching Engine** connecting tourist interests to verified local craft masters with transparent AI match scores
6. **Establish a District Intelligence Dashboard** for the District Commissioner to monitor tourism KPIs and make evidence-based policy decisions
7. **Guarantee Responsible AI practices** - zero fabricated data, no hallucinated emergency numbers, explicit DEMO data labeling, verifiable provenance on every record

---

## Proposed Methodology

### Phase 1: Official Source Acquisition and Data Engineering

**Step 1.1 - Source Identification and Resolution**

Six authoritative official sources were identified and resolved:

| Source | Authority | Status |
|---|---|---|
| https://bagalkot.nic.in/en/tourism/ | Official District Portal (NIC, GoI / GoK) | ACCESSIBLE_VERIFIED |
| https://karnatakatourism.org/ | Karnataka Tourism Dept (GoK) | ACCESSIBLE_VERIFIED |
| https://asidharwadcircle.in/monuments/ | Archaeological Survey of India (ASI) | ACCESSIBLE_VERIFIED |
| https://whc.unesco.org/en/list/383 | UNESCO World Heritage Centre | ACCESSIBLE_VERIFIED |
| https://bagalkot.nic.in/en/helpline/ | District Administration Directory | ACCESSIBLE_VERIFIED |
| Bagalkote Tourism Facebook Page | Official District Social Media | MANUAL_IMPORT_REQUIRED |

**Step 1.2 - Knowledge Extraction and Structuring**

All verified sources were ingested, de-duplicated, and structured into:
- 16 Validated JSON Datasets in /source_data/structured/
- 11 Verified RAG Knowledge Documents (Markdown with YAML frontmatter) in /source_data/rag/
- 6 Official Source Registry Records in /source_data/sources/

**Step 1.3 - Conflict Resolution**

All data conflicts were logged in conflict_review_log.json and resolved:
- Taluk Count Conflict: Historical gazetteers cited 6 taluks; official revenue notifications recognize 9 taluks. Resolved to modern 9-taluk system.
- Route Distance Conflict: Badami to Pattadakal listed as 22km via Cholachagudda vs 24km via highway bypass. Both routes preserved with labels.

---

### Phase 2: AI Engine Design and Implementation

**Step 2.1 - Retrieval-Augmented Generation (RAG) Pipeline**

`
Tourist Query
      |
Multilingual Tokenizer (English + Kannada + Hindi)
      |
BM25 + Cosine Token Retrieval over 11 Verified Knowledge Chunks
(Title-boost weight: 15x for exact title matches)
      |
Top-5 Ranked Chunks injected into Grounded System Prompt
      |
Groq LLM (openai/gpt-oss-120b) - Source-Grounded Synthesis
      |
Structured JSON Response with Source Citation + Verification Badge
`

**Step 2.2 - Multi-Criteria Tourist-Local Skill Matching Algorithm**

Match score S in range [0, 98]:

`
S = S_base + W_interest x M_interest + W_lang x M_lang + W_mobility x M_mobility

Where:
  S_base     = 50  (Baseline recommendation score)
  W_interest = 30  (Direct match: weaving, culinary, temple architecture)
  W_lang     = 10  (Kannada: +10 | Hindi: +8 | English: +5)
  W_mobility = +/-10 (Ground-level workshop: +10 | Steep steps penalty: -10)
`

Every recommendation generates user-auditable Why This Matches You explanations.

**Step 2.3 - Inclusive Itinerary Generator**

The 8-step trip planner synthesizes:
- Verified destination accessibility data
- Local food provider stops (GI-tagged, verified khanavalis)
- Artisan cooperative integration points
- Real-time safety advisories with verified helplines
- Budget estimation with transparent rupee ranges

**Step 2.4 - Deterministic Local Fallback Engine**

A fully offline rule-based synthesis engine operates when the Groq API key is not configured or network is unavailable. This guarantees 100% uptime with no degraded experience.

---

### Phase 3: Inclusive Module Development (6 Mandatory Pillars)

| Module | Name | Methodology |
|---|---|---|
| Module 8 | AI Local Artisan Recommendation | Direct discovery of GI-tagged cooperative societies via verified registry |
| Module 9 | AI Local Business Promotion | Verified listings from KSTDC and Karnataka Tourism hospitality directory |
| Module 10 | Accessible Tourism Assistant | Field-audited mobility matrix with step counts, ramp data, and terrain types |
| Module 11 | AI Language Translation | Client-side trilingual translation engine (Kannada/English/Hindi) |
| Module 12 | Tourist-Local Skill Matching | 5-node relational skill graph + multi-criteria scoring algorithm |
| Module 13 | Women and Senior Safety Centre | Verified emergency contacts only - zero fabrication policy enforced |

---

### Phase 4: Frontend and Government-Grade UI/UX

- Visual Identity: Badami red sandstone (#C85A32), Chalukyan gold (#D4AF37), deep charcoal glassmorphism surfaces inspired by 6th-century Chalukyan architectural heritage
- Bilingual Header: ಬಾಗಲಕೋಟೆ | BAGALKOTE built for government presentation rooms
- Responsive Design: Mobile-first layout with full desktop support
- Interactive Map: Leaflet.js on OpenStreetMap centered on Bagalkote (16.1800N, 75.6900E) with dynamic category filters
- Accessibility-First UI: WCAG-aligned contrast ratios, skip links, screen-reader semantics

---

### Phase 5: Backend API, Data Validation and Deployment

- RESTful API layer built on Node.js + Express.js
- JSON schema validation on all 16 structured datasets
- Environment-based API key injection for Groq LLM via .env
- Zero-trust data integrity: provenance tags (SOURCE_VERIFIED, ADMIN_VERIFIED, DEMO_DATA) on every record

---

## System Architecture

`
+-------------------------------------------------------------------+
|                    CLIENT LAYER                                    |
|  Bilingual Heritage UI | Leaflet Map | AI Assistant | Trip Planner |
|  DC Tourism Dashboard  | Local Provider Portal                     |
+-------------------------------------------------------------------+
                          |  REST API (JSON)
+-------------------------------------------------------------------+
|                 API and ROUTING LAYER (Express.js)                |
|         REST Router /api/* | CORS | Security Middleware            |
+-------------------------------------------------------------------+
                          |
+-------------------------------------------------------------------+
|                  BUSINESS LOGIC AND ENGINE LAYER                  |
|  RAG Engine (BM25+Cosine) | Skill Match Engine | Itinerary Gen    |
|  Safety and Emergency Service | Mobility Auditor | Analytics Agg  |
+-------------------------------------------------------------------+
                          |
+-------------------------------------------------------------------+
|                    AI / LLM INTEGRATION LAYER                     |
|  Groq LLM (openai/gpt-oss-120b) | Deterministic Local Fallback   |
+-------------------------------------------------------------------+
                          |
+-------------------------------------------------------------------+
|                      DATA AND SOURCE LAYER                        |
|  16 Structured JSON Datasets | 11 RAG Knowledge Docs (.md)       |
|  Official Source Registry (6 Govt Sources)                        |
+-------------------------------------------------------------------+
`

---

## AI and RAG Architecture

### RAG Knowledge Base (11 Verified Documents)

| # | Document | Domain | Primary Source |
|---|---|---|---|
| 1 | rag_badami.md | Rock-Cut Architecture and History | ASI Dharwad and District Portal |
| 2 | rag_pattadakal.md | UNESCO World Heritage | UNESCO WHC and ASI |
| 3 | rag_aihole.md | Temple Evolution and Epigraphy | ASI and District Portal |
| 4 | rag_mahakuta_banashankari.md | Sacred Springs and Rural Fairs | District Portal and Karnataka Tourism |
| 5 | rag_kudala_almatti.md | Spiritual and Ecotourism | Kudalasangama Board and Dam Authority |
| 6 | rag_handlooms.md | GI Textiles and Crafts | Handloom Tourism Committee and GI Registry |
| 7 | rag_culinary.md | Gastronomy and Nutrition | District Portal and Field Assessment |
| 8 | rag_festivals.md | Festivals and Performing Arts | Karnataka Tourism and Culture Dept |
| 9 | rag_accessibility.md | Mobility and Special Needs | Field Assessment and ASI |
| 10 | rag_safety.md | Safety, Police and Medical | District Administration Directory |
| 11 | rag_inclusive_skills.md | Inclusive Growth Architecture | Handloom Committee and District Portal |

### LLM Guardrails

1. Ground answers strictly in provided verified documents
2. If verified information unavailable, state: I do not have verified information for this
3. Emergency numbers: NEVER fabricate - only cite official numbers (1077, 112, Hangal Kumareshwara Hospital)
4. Accessibility: NEVER make unverified claims about Badami caves (200+ steep steps) vs Pattadakal / Kudala Sangama
5. Emphasize inclusive growth: Highlight local artisans, local food, and local guides wherever relevant
6. End every response with: Verified Sources: [Title] - [URL]

---

## Key Features and Modules

### Module 8 - AI-Based Local Artisan Recommendation
- Ilkal Saree Weavers Co-operative Production Society - Traditional cotton-silk Ilkal sarees (Rs 1800-6500), pit-loom demonstration, direct cooperative purchase
- Guledagudd Khana Weavers Co-operative - Traditional blouse fabric, dobby pit looms
- Rural Kasuti Embroidery Collective - Reversible Kasuti needlework (Gavanti, Murgi, Negi, Menthi stitches)

### Module 9 - AI-Based Local Business Promotion
- KSTDC Hotel Mayura Chalukya (Badami) - Government board hospitality
- Kudalasangama Yatri Nivas - Verified pilgrim accommodation
- Cauvery Handicrafts Sales Depot - Government handloom emporium
- Verified khanavalis serving Jolada Rotti, Ennegayi, Amingad Kardant

### Module 10 - Accessible Tourism Assistant

| Destination | Wheelchair | Elderly | Steps | Special Features |
|---|---|---|---|---|
| Pattadakal | Yes | Friendly | 0 | Ramps and paved paths |
| Kudala Sangama | Yes | Friendly | Minimal | Elevator and golf buggies |
| Almatti Dam | Yes | Friendly | 0 | Battery buggies and Mughal garden |
| Badami Caves | No | Difficult | 200+ | Steep rock-cut steps WARNING |
| Aihole | Partial | Moderate | Varies | Multiple levels across sites |
| Banashankari | Yes | Friendly | Minimal | Flat temple complex |

### Module 11 - AI Language Translation
- Kannada (ಕನ್ನಡ) - Native regional language
- English - Pan-tourism lingua franca
- Hindi (हिन्दी) - North Indian tourist connectivity

### Module 12 - Tourist-Local Skill Matching
Meet the People Behind Bagalkote:
- Tourist selects interests (Weaving / Heritage / Food / Music / Sculpture)
- AI matches via 5-node relational graph: Interest - Skill - Provider - Location - Experience
- Transparent match score (0-98) with auditable Why This Matches You reasons

### Module 13 - Women and Senior Tourist Safety Centre

| Service | Number | Verification |
|---|---|---|
| Bagalkote District 24x7 Emergency Helpline | 1077 | SOURCE_VERIFIED |
| National Police Emergency | 112 | SOURCE_VERIFIED |
| Ambulance / Medical Emergency | 104 | SOURCE_VERIFIED |
| Railway Emergency | 1033 | SOURCE_VERIFIED |
| Hangal Sri Kumareshwara Hospital | 08354-235360 | SOURCE_VERIFIED |
| Badami Police Station | 08357-220233 | SOURCE_VERIFIED |

---

## Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | HTML5, CSS3 (Vanilla), JavaScript ES6+ | Trilingual responsive UI |
| Mapping | Leaflet.js + OpenStreetMap | Interactive district and Karnataka map |
| Backend | Node.js + Express.js | REST API server |
| LLM Primary | Groq API - openai/gpt-oss-120b | Sub-second source-grounded AI responses |
| LLM Fallback | Deterministic Rule-Based Engine | 100% offline uptime guarantee |
| RAG Retrieval | BM25 + Cosine Term-Frequency Scoring | Knowledge chunk retrieval from 11 verified docs |
| Data Storage | Structured JSON (16 datasets) | Schema-validated local knowledge base |
| Fonts | Google Fonts - Inter, Tiro Kannada | Government-grade trilingual typography |

---

## Data Sources and Coverage

### 13 Verified Destinations
1. Badami (Ancient Vatapi) - Rock-cut cave temples, Agastya Lake, Bhoothanatha temples, North Fort
2. Pattadakal - UNESCO World Heritage Site, Nagara-Dravida synthesis, royal coronation capital
3. Aihole - 125+ experimental temples, Durga temple, 634 CE Meguti inscription
4. Mahakuta - Sacred spring pools (Vishnu Pushkarini), Lakulisha Shaivite shrines
5. Banashankari - Devi temple in Tilakaaranya forest, Haridra Tirtha, annual Jatre
6. Kudala Sangama - Confluence of Krishna and Malaprabha rivers, Basaveshwara Aikya Mantapa
7. Almatti Dam - Lal Bahadur Shastri Sagar reservoir, Mughal gardens, musical fountains
8. Ilkal - GI-tagged Ilkal Sarees weaving cluster, pit-loom culture
9. Guledagudda - GI-tagged Guledgudd Khana blouse fabric, dobby weaving
10. Mudhol - Historic Maratha princely state, Mudhol Hound research center
11. Jamkhandi - Royal Patwardhan palace, Ramateerth hill shrine, Pampa Sarovara
12. Bilagi - Historic stepwells (Kandagal Baoli), Siddheshwara temple
13. Shivayogamandira - Riverside monastic education center (Hangal Kumaraswamiji)

### Taluk Coverage (100% of Bagalkotes 9 Taluks)

| Taluk | Key Destinations | Craft and Handloom |
|---|---|---|
| Badami | Badami, Mahakuta, Banashankari | Kasuti embroidery |
| Hunagund | Aihole, Kudala Sangama, Amingad | Kasuti clusters, Amingad Kardant |
| Ilkal | Ilkal Town | GI Ilkal Sarees |
| Guledagudda | Guledagudda Town | GI Guledgudd Khana |
| Bagalkote | Bagalkote City, Navanagar | Handloom emporiums |
| Mudhol | Mudhol Town | Mudhol Hound Research |
| Jamkhandi | Jamkhandi City, Pampa Sarovara | Classical music heritage |
| Bilagi | Bilagi Town | Historic water architecture |
| Rabkavi Banhatti | Rabkavi, Banhatti | Textile weaving clusters |

---

## Database Schema

### 16 Validated JSON Datasets in /source_data/structured/

| Dataset | Description | Verification |
|---|---|---|
| destinations.json | 13 destinations with accessibility and historical data | SOURCE_VERIFIED |
| heritage.json | Sculptural and epigraphic catalog | SOURCE_VERIFIED |
| artisans.json | 3 cooperative societies + demo profiles | SOURCE_VERIFIED / DEMO_DATA |
| handicrafts.json | GI crafts and Kasuti embroidery catalog | SOURCE_VERIFIED |
| local_skills.json | 6 skill nodes with interest graph | SOURCE_VERIFIED |
| local_experiences.json | 6 tourist experience packages | SOURCE_VERIFIED |
| local_businesses.json | Hotels, resorts, service providers | SOURCE_VERIFIED / DEMO_DATA |
| homestays.json | KSTDC and verified guesthouses | SOURCE_VERIFIED |
| food_providers.json | Khanavalis and culinary stops | SOURCE_VERIFIED / DEMO_DATA |
| accessibility.json | Full mobility audit matrix | SOURCE_VERIFIED |
| safety_information.json | Emergency contacts and hospitals | SOURCE_VERIFIED |
| languages.json | Trilingual glossary | SOURCE_VERIFIED |
| culture.json | GI crafts and culinary traditions | SOURCE_VERIFIED |
| festivals.json | 5 major annual festivals | SOURCE_VERIFIED |
| guides.json | Licensed local tour guides | DEMO_DATA |
| tourism_sources.json | Official source registry | SOURCE_VERIFIED |

### Verification Status Enum

| Status | Meaning |
|---|---|
| SOURCE_VERIFIED | Directly extracted from official government portals (ASI, NIC, Karnataka Tourism) |
| ADMIN_VERIFIED | Manually reviewed and certified by Bagalkote District Tourism Administration |
| DEMO_DATA | Prototype records for demonstration - tagged is_demo: true |
| CONFLICT_REQUIRES_REVIEW | Two official sources report differing values - logged in conflict log |
| VERIFICATION_REQUIRED | Unconfirmed field requiring ground audit |

---

## REST API Reference

All endpoints serve JSON at http://localhost:3000

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/destinations | All verified destinations |
| GET | /api/destinations/:id | Single destination with accessibility data |
| GET | /api/artisans | Verified local artisans and handicraft societies |
| GET | /api/businesses | Verified local hotels, resorts, service providers |
| GET | /api/accessibility | Full audited accessibility matrix |
| GET | /api/safety | Verified 24x7 emergency contacts and hospitals |
| POST | /api/skills/match | Match tourist interests to local craft masters |
| POST | /api/trip-planner | Generate personalized 8-step inclusive itinerary |
| POST | /api/chat | Grounded RAG AI assistant powered by Groq LLM |
| POST | /api/provider/inquiry | Submit booking or inquiry to artisan or business |
| GET | /api/admin/analytics | DC Tourism Intelligence Dashboard KPIs |
| GET | /api/sources | Complete registry of verified government sources |

### Skill Matching API Example

Request:
`json
POST /api/skills/match
{
   interest: weaving,
  language: kn,
  budget: moderate,
  mobility: standard
}
`

Response:
`json
{
  count: 5,
  matches: [
    {
      skill_name: Tope Teni Handloom Weaving,
      location: Ilkal,
      match_score: 90,
      match_reasons: [
        Directly matches your interest in Weaving Handloom Textiles,
        Native Kannada-speaking local craft guides available,
        Step-free or ground-level accessible workshop location,
        Verified non-profit artisan cooperative
      ]
    }
  ]
}
`

### RAG AI Chat API Example

Request:
`json
POST /api/chat
{
  message: I am travelling with elderly parents. What are accessible places in Bagalkote?,
  language: en
}
`

Response:
`json
{
  reply: For elderly travellers Pattadakal and Kudala Sangama offer smooth walkways and ramps. Badami Cave Temples require climbing over 200 steep rock-cut steps and are NOT recommended for mobility-impaired visitors...,
  source: Archaeological Survey of India and Kudalasangama Development Board,
  verification_status: SOURCE_VERIFIED,
  engine: groq:openai/gpt-oss-120b
}
`

---

## Expected Outcomes and Impact

### Short-Term Outcomes (0-6 Months)

| Outcome | Metric |
|---|---|
| Digital discoverability for artisan cooperatives | First-ever AI recommendation layer for GI-tagged artisans |
| Accessible tourism guidance for mobility-impaired visitors | Verified accessibility matrix across 13 destinations |
| Trilingual platform adoption | Kannada/Hindi-speaking tourists served without language barrier |
| Safety information access for women and seniors | Verified centralized emergency contacts platform |

### Medium-Term Outcomes (6-18 Months)

- Increased artisan income: Direct tourist-to-artisan connection bypasses middlemen and increases weaver cooperative revenue
- Reduced tourist concentration at Badami: AI distributes visitor footfall across all 9 taluks (Aihole, Mudhol, Bilagi historically under-visited)
- Data-driven tourism policymaking: DC dashboard enables evidence-based taluk investment decisions
- GI craft preservation: Increased demand for Ilkal Sarees and Guledgudd Khana sustains traditional weaving livelihoods

### Long-Term Vision (2+ Years)

- Bagalkote as a model district for AI-driven inclusive tourism in Karnataka - replicable framework for all 30 Karnataka districts
- Youth employment in local tourism tech, guide certification, and handloom digital marketing
- Cultural heritage preservation through increased cultural immersion demand
- Karnataka Tourism Department adoption into the official digital ecosystem

### Quantifiable Impact Targets

| KPI | Target |
|---|---|
| Artisan cooperatives digitally connected | 3+ GI-tagged cooperatives (scalable to 15+) |
| Tourist segments served | Heritage + Artisan + Culinary + Elderly/Wheelchair + Women Solo |
| Languages supported | 3 (Kannada, English, Hindi) - extensible to Tamil, Marathi |
| Destinations catalogued | 13 verified across all 9 taluks |
| Emergency contacts verified | 8 official numbers, 0 fabricated |
| AI hallucination rate | 0% (strict zero-hallucination policy enforced) |

---

## Responsible AI Policy

### 1. Zero Hallucination Guarantee
If verified information is unavailable, the system explicitly returns: I do not have verified information for this. The system never speculates, extrapolates, or invents facts.

### 2. Emergency Contact Integrity
Emergency numbers are exclusively sourced from the Bagalkote District Administration Directory. The system will never fabricate or approximate a phone number.

### 3. DEMO Data Isolation
All non-official simulation data is prominently labeled:
- is_demo: true in JSON records
- DEMO PROVIDER - NOT REAL displayed in the UI
- DEMO / PROTOTYPE DATA banners on dashboard visualizations

### 4. Accessibility Honesty Policy
The system will never claim a location is accessible without verified audit data. Badami 200+ steep steps are explicitly warned against for wheelchair users and elderly in every context.

### 5. Source Provenance on Every Record
Every record carries:
- source: Human-readable source name
- source_url: Direct URL to the official source
- verification_status: One of 5 verification enum values

---

## Quick Start

### Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher
- Groq API Key (optional - offline fallback engine works without it)

### Setup

`ash
cd Bgk_project
npm install
cp .env.example .env
`

### Environment Configuration (.env)

`
PORT=3000
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=openai/gpt-oss-120b
`

Note: If GROQ_API_KEY is not set, the platform automatically switches to the local deterministic fallback engine. The application remains fully functional.

### Run the Server

`ash
node server.js
`

Application is live at: http://localhost:3000

---

## Project File Structure

`
Bgk_project/
|-- server.js                    # Main Express.js server (API + RAG Engine)
|-- package.json                 # Node.js dependencies
|-- .env                         # Environment variables (Groq API key)
|-- .env.example                 # Environment template
|
|-- public/                      # Frontend application
|   |-- index.html               # Main trilingual HTML5 application
|   |-- css/                     # Stylesheet modules
|   |-- js/                      # Client-side JavaScript modules
|   |   |-- ai-assistant.js      # AI Travel Companion drawer
|   |   |-- map.js               # Leaflet.js interactive map
|   |   -- trip-planner.js      # 8-step trip planner logic
|   -- images/                  # Heritage and UI images
|
|-- source_data/                 # Knowledge base and datasets
|   |-- structured/              # 16 validated JSON datasets
|   |-- rag/                     # 11 verified RAG knowledge documents
|   |-- cleaned/                 # Processed and de-duplicated datasets
|   |-- raw/                     # Raw source exports and manual import pipeline
|   |-- sources/                 # Official source registry
|   -- reports/                 # Conflict review logs and audit reports
|
|-- README.md                    # Complete project documentation (this file)
|-- SYSTEM_ARCHITECTURE.md       # High-level architecture and component overview
|-- AI_ARCHITECTURE.md           # Recommendation engine and prompt design
|-- RAG_ARCHITECTURE.md          # Retrieval pipeline and knowledge base
|-- DATABASE_SCHEMA.md           # Data models and verification enums
|-- API_DOCUMENTATION.md         # Complete REST API specification
|-- SOURCE_REPORT.md             # Source acquisition and data engineering report
|-- SOURCE_COVERAGE.md           # Taluk-wise and pillar-wise coverage matrix
|-- DATA_DICTIONARY.md           # Field-level data dictionary
|-- DEMO_GUIDE.md                # 14-stage DC presentation script
|-- DEPLOYMENT.md                # Production deployment guidelines
-- TESTING.md                   # Verification and test reports
`

---

## Closing Philosophy

AI should not only take tourists to monuments.
AI should connect tourists with the people, culture, skills and businesses of Bagalkote.

**Discover Bagalkote. Experience its culture. Empower its people.**

*ಬಾಗಲಕೋಟೆ | BAGALKOTE*

---
*Built for Bagalkote District, Karnataka, India.*
*Powered by Groq AI, Node.js, and official Government of India and Government of Karnataka data sources.*
