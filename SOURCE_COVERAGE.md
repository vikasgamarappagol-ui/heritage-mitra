# SOURCE COVERAGE MATRIX: Bagalkote Inclusive Tourism Ecosystem

**Project:** AI-Powered Inclusive Tourism Ecosystem for Bagalkote  
**Theme:** Inclusive Growth  
**Audit Date:** 2026-09-20  

---

## 1. Taluk-Wise Geographical Coverage

Bagalkote District comprises **9 administrative taluks**. The table below demonstrates 100% geographic coverage across the district:

| Taluk | Key Destinations Covered | Heritage Sites | Craft & Handloom Clusters | Local Food & Agriculture |
|---|---|---|---|---|
| **Badami** | Badami, Mahakuta, Banashankari, Shivayogamandira | Cave Temples 1-4, Agastya Lake, Bhoothanatha, North Fort | Kasuti embroidery, Sandstone sculpture | Jolada Rotti, Ennegayi, Shenga Chutney |
| **Hunagund** | Aihole, Kudala Sangama, Amingad | Durga Temple, Lad Khan, Meguti Temple, Sangameshwara | Kasuti embroidery clusters | Amingad Kardant (1907), Dasoha cuisine |
| **Ilkal** | Ilkal Town | Vijaya Mahantesh Matha, Weaver colonies | GI-tagged Ilkal Sarees, Pit-loom clusters | Traditional sweets, North Karnataka thalis |
| **Guledagudda** | Guledagudda Town | Hill shrines, Historic weaver mohallas | GI-tagged Guledgudd Khana, Dobby weaving | Shenga Holige, local snacks |
| **Bagalkote** | Bagalkote City, Navanagar, Ghataprabha banks | District museum, Old town remnants | Handloom sales emporiums | Multi-cuisine, Khanavalis |
| **Mudhol** | Mudhol Town, Ghataprabha check-dam | Mudhol Fort, Royal cenotaphs, Ranna Memorial | Mudhol Hound Breeding & Research Centre | Sugarcane agro-produce, Jolada Rotti |
| **Jamkhandi** | Jamkhandi City, Ramateerth, Pampa Sarovara | Ram Prasad Royal Palace, Ramateerth hill temples | Classical music heritage, wrestling | Confectioneries, rural delicacies |
| **Bilagi** | Bilagi Town | Kandagal Baoli (Arethirtha), Siddheshwara Temple | Historic water conservation architecture | Traditional agro-food |
| **Rabkavi Banhatti** | Rabkavi, Banhatti | Riverbank temples, historic powerloom/handloom hubs | Textile weaving clusters | Local snacks and thalis |

---

## 2. Inclusive Growth Pillars Coverage Matrix

| Inclusive Growth Pillar | Dataset Deliverable | Primary Entities Covered | Verification Status |
|---|---|---|---|
| **1. AI Local Artisan Recommendation** | `artisans.json`, `handicrafts.json` | Ilkal Saree Weavers Co-op, Guledgudd Khana Weavers Co-op, Rural Kasuti Collective | `SOURCE_VERIFIED` (Demo profiles flagged `DEMO_DATA`) |
| **2. AI Local Business Promotion** | `local_businesses.json`, `homestays.json`, `food_providers.json` | KSTDC Hotel Mayura Chalukya, Kudalasangama Yatri Nivas, Cauvery Handloom Depot | `SOURCE_VERIFIED` (Demo profiles flagged `DEMO_DATA`) |
| **3. Accessible Tourism Assistant** | `accessibility.json`, `rag/accessibility_and_mobility_guide.md` | Badami Caves, Pattadakal Complex, Aihole Durga Complex, Kudala Sangama, Almatti Dam | `SOURCE_VERIFIED` / `NOT_VERIFIED` where unconfirmed |
| **4. AI Language Translation** | `languages.json` | Trilingual vocabulary for Kannada (`kn`), English (`en`), and Hindi (`hi`) | `SOURCE_VERIFIED` |
| **5. AI Tourist–Local Skill Matching** | `local_skills.json`, `local_experiences.json`, `rag/inclusive_tourist_skill_matching.md` | 5-node relationship graph (`Interest ↔ Skill ↔ Provider ↔ Location ↔ Experience`) | `SOURCE_VERIFIED` |
| **6. Women / Senior Tourist Safety** | `safety_information.json`, `rag/emergency_safety_directory.md` | 24x7 Helplines (1077, 112, 104, 1033), SP Office, Badami Police, Hangal Hospital, Kerudi Hospital | `SOURCE_VERIFIED` |

---

## 3. RAG Knowledge Corpus Coverage

| RAG Document ID | Document Title | Primary Domain | Source Attribution | Chunks / Focus |
|---|---|---|---|---|
| `rag_badami_001` | `badami_rock_cut_caves.md` | Rock-Cut Architecture & History | ASI Dharwad & District Portal | Caves 1-4, Agastya Lake, Bhoothanatha, Fort |
| `rag_pattadakal_002` | `pattadakal_unesco_monuments.md` | UNESCO World Heritage | UNESCO WHC & ASI | Nagara-Dravida blend, Virupaksha, Mallikarjuna |
| `rag_aihole_003` | `aihole_cradle_temple_architecture.md` | Temple Evolution & Epigraphy | ASI & District Portal | Durga temple, Lad Khan, Meguti 634 CE inscription |
| `rag_mahakuta_banashankari_004` | `mahakuta_banashankari_spiritual.md` | Sacred Springs & Rural Fairs | District Portal & Karnataka Tourism | Vishnu Pushkarini, Banashankari Jatre fair |
| `rag_kudala_almatti_005` | `kudala_sangama_almatti_dam.md` | Spiritual & Ecotourism | Kudalasangama Board & Dam Authority | Confluence, Basaveshwara, Mughal Garden |
| `rag_handlooms_006` | `ilkal_guledagudda_handloom_crafts.md` | GI Textiles & Crafts | Handloom Tourism Committee & GI Registry | Ilkal sarees, Khana fabric, Kasuti embroidery |
| `rag_culinary_007` | `bagalkote_culinary_traditions.md` | Gastronomy & Nutrition | District Portal & Field Assessment | Jolada Rotti, Ennegayi, Amingad Kardant |
| `rag_festivals_008` | `festivals_and_cultural_events.md` | Festivals & Performing Arts | Karnataka Tourism & Culture Dept | Chalukya Utsava, Pattadakallu Dance Festival |
| `rag_accessibility_009` | `accessibility_and_mobility_guide.md` | Mobility & Special Needs | Field Assessment & ASI | Steps, ramps, wheelchairs, elderly guidance |
| `rag_safety_010` | `emergency_safety_directory.md` | Safety, Police & Medical | District Administration Directory | 1077, 112, 104, hospitals, women safety |
| `rag_inclusive_skills_011` | `inclusive_tourist_skill_matching.md` | Inclusive Growth Architecture | Handloom Committee & District Portal | 5-node matching engine specification |

---

## 4. Verification and Data Quality Summary

- **Total Structured JSON Datasets**: 16 files in `/source_data/structured/`
- **Total RAG Knowledge Documents**: 11 documents in `/source_data/rag/`
- **Total Sources Registered**: 6 sources in `/source_data/sources/sources.json`
- **Fabricated Real Entities**: 0 (Zero). All real businesses and institutions are backed by official government directories; all illustrative test cases are strictly flagged with `DEMO PROVIDER — NOT REAL` and `DEMO_DATA`.
- **Manual Import Mechanism**: Fully operational in `/source_data/raw/manual_import/`.
