# SOURCE REPORT: Bagalkote Tourism Information & Data Engineering

**Project Title:** AI-Powered Inclusive Tourism Ecosystem for Bagalkote  
**Primary Theme:** Inclusive Growth  
**Date of Audit:** 2026-09-20  
**Agent:** Source Acquisition, Research and Data Engineering Agent  

---

## 1. Source 1 Status (Google Share Link)
- **Original URL Provided:** `https://share.google/SZS0iOfUQouyiI9sj`
- **Resolution Path:** Followed HTTP redirect to `https://bagalkot.nic.in/en/tourism/`.
- **Underlying Source Entity:** Official District Portal of Bagalkote, maintained by the National Informatics Centre (NIC), Ministry of Electronics & IT, Government of India, in association with the District Administration of Bagalkote, Government of Karnataka.
- **Access Status:** `ACCESSIBLE_VERIFIED`
- **Payload & Content Retrieved:** Full official government tourism directory, including major destinations, taluk subdivisions, handloom tourism initiatives, and administrative directories.

---

## 2. Source 2 Status (Facebook Share Link)
- **Original URL Provided:** `https://www.facebook.com/share/1EyKJBUv99/`
- **Resolution Path:** Followed redirect to `https://www.facebook.com/p/Bagalkote-Tourism-100086104343186/`.
- **Underlying Source Entity:** "Bagalkote Tourism" (Official Facebook Page, Page ID: `100086104343186`).
- **Follower / Community Metric:** 1,169 followers, 10 talking about this.
- **Mission Statement Extracted:** *"This page is an excellent endeavor to highlight the best of district’s Cultural & natural heritage"*.
- **Access Status:** `MANUAL_IMPORT_REQUIRED`
- **Access Diagnostics:** Direct HTTP GET successfully retrieved the OpenGraph page headers, identity, and profile avatar. However, timeline posts, photo albums, and user comments are protected by Facebook's client-side dynamic JavaScript rendering and anti-scraping authentication walls.
- **Action Taken:** In strict accordance with project instructions, no timeline post content was guessed or fabricated. The source identity was preserved, and an extensible manual import pipeline was constructed at `/source_data/raw/manual_import/` (with `README.md` and `import_template.json`) to allow authorized offline ingestion of exported post text, screenshots, and PDFs.

---

## 3. Resolved URLs Summary Table

| Source Identifier | Original Supplied URL | Resolved / Underlying Canonical URL | Authority Level | Access Status |
|---|---|---|---|---|
| **SRC_001** | `https://share.google/SZS0iOfUQouyiI9sj` | `https://bagalkot.nic.in/en/tourism/` | Official District Portal (GoI / GoK) | `ACCESSIBLE_VERIFIED` |
| **SRC_002** | `https://www.facebook.com/share/1EyKJBUv99/` | `https://www.facebook.com/p/Bagalkote-Tourism-100086104343186/` | Official District Social Media Channel | `MANUAL_IMPORT_REQUIRED` |
| **SRC_003** | `https://karnatakatourism.org/` | `https://karnatakatourism.org/tour-item/badami/` | State Tourism Department (GoK) | `ACCESSIBLE_VERIFIED` |
| **SRC_004** | `https://asidharwadcircle.in/` | `https://asidharwadcircle.in/monuments/` | Archaeological Survey of India (ASI) | `ACCESSIBLE_VERIFIED` |
| **SRC_005** | `https://whc.unesco.org/en/list/383` | `https://whc.unesco.org/en/list/383` | UNESCO World Heritage Centre | `ACCESSIBLE_VERIFIED` |
| **SRC_006** | `https://bagalkot.nic.in/en/helpline/` | `https://bagalkot.nic.in/en/helpline/` | Official District Administration Directory | `ACCESSIBLE_VERIFIED` |

---

## 4. Accessible Content Summary
- **Government Portals (`bagalkot.nic.in`, `karnatakatourism.org`, `whc.unesco.org`, `asidharwadcircle.in`)**:
  - Comprehensive historical narratives of the Badami Chalukyas (540–757 CE).
  - Detailed monument descriptions: Badami Caves 1–4, Bhoothanatha complex, Agastya Lake, Pattadakal UNESCO World Heritage group, and Aihole's 125+ experimental temples.
  - Epigraphical records: 578 CE Mangalesha inscription (Cave 3) and 634 CE Ravikirti inscription (Meguti Temple).
  - Official Handloom Tourism Committee initiatives covering GI-tagged Ilkal sarees and GI-tagged Guledgudd Khana.
  - Verified 24x7 emergency contacts, taluk administrative directories, and public utility hospital listings.

---

## 5. Inaccessible Content & Remediation
- **Inaccessible Content:** Historical post timeline, seasonal event announcements, and user interaction threads from the Bagalkote Tourism Facebook page.
- **Remediation:** 
  1. Created `/source_data/raw/manual_import/README.md` and `import_template.json`.
  2. The system is configured to ingest manual submissions (JSON, TXT, HTML, images) and integrate them into `/source_data/cleaned/` with attribution tagged as `USER/ADMIN_ADDED`.

---

## 6. Extracted Destinations
A total of **13 primary destinations** across all 9 taluks of Bagalkote have been verified and structured into `destinations.json`:
1. **Badami (Ancient Vatapi)**: Rock-cut cave temples, Agastya Lake, Bhoothanatha temples, North Fort.
2. **Pattadakal**: UNESCO World Heritage Site, royal coronation capital, Nagara-Dravida synthesis.
3. **Aihole**: Cradle of Indian temple architecture, Durga temple (apsidal plan), Lad Khan, Meguti inscription.
4. **Mahakuta**: Sacred perennial spring pools (Vishnu Pushkarini), Lakulisha Shaivite shrines.
5. **Banashankari (Cholachagudda)**: Devi temple in Tilakaaranya forest, Haridra Tirtha tank, annual Jatre.
6. **Kudala Sangama**: Confluence of Krishna and Malaprabha rivers, Basaveshwara Aikya Mantapa.
7. **Almatti Dam**: Lal Bahadur Shastri Sagar reservoir, Mughal gardens, Rock garden, musical fountains.
8. **Ilkal**: Ancient weaving cluster, GI-tagged Ilkal Sarees, pit-loom culture.
9. **Guledagudda**: Traditional handloom hill town, GI-tagged Guledgudd Khana blouse fabric.
10. **Mudhol**: Historic Maratha princely state, Mudhol Hound research center, poet Ranna memorial.
11. **Jamkhandi**: Royal Patwardhan palace, Ramateerth hill shrine, Pampa Sarovara.
12. **Bilagi**: Historic stepwells (Kandagal Baoli / Arethirtha) and Siddheshwara temple.
13. **Shivayogamandira**: Riverside monastic education center founded by Hangal Kumaraswamiji.

---

## 7. Extracted Heritage Information
Structured in `heritage.json` and 5 specialized RAG documents:
- **Caves**: Detailed sculptural catalogs for Badami Caves 1, 2, 3, and 4 (Nataraja with 81 mudras, Trivikrama, Anantasayana Vishnu, and Bahubali).
- **Temples**: Structural analysis of Virupaksha, Mallikarjuna, Sangameshwara, Galaganatha, Papanatha, Durga temple, and Lad Khan.
- **Epigraphy**: Authenticated Sanskrit and Halegannada (Old Kannada) inscriptions.
- **Circuits**: Badami-Pattadakal-Aihole Triangle Circuit and Bagalkote Craft & Spiritual Circuits.

---

## 8. Extracted Cultural Information
Structured in `culture.json` and `festivals.json`:
- **GI Crafts**: Ilkal Sarees (GI App No. 43) and Guledgudd Khana (GI App No. 373).
- **Traditional Needlecraft**: Reversible Kasuti embroidery (Gavanti, Murgi, Negi, Menthi stitches).
- **Culinary Traditions**: Jolada Rotti, Ennegayi, Shenga Chutney Pudi, Kaalu Palya, Girmit-Mirchi, and Amingad Kardant (1907 origin).
- **Festivals**: Chalukya Utsava (February), Pattadakallu Dance Festival (January), Banashankari Jatre (January-February), Basava Jayanti (April-May), Ilkal Mahantesha Jatre (August-September).

---

## 9. Extracted Local Community & Inclusive Growth Information
Full compliance across all **SIX mandatory Inclusive Growth areas**:
1. **AI-Based Local Artisan Recommendation (`artisans.json`, `handicrafts.json`)**: Real cooperative societies registered under GoK (Ilkal Saree Weavers Co-op, Guledgudd Khana Co-op); individual master artisan schemas prepared with explicit `DEMO_DATA` / `DEMO PROVIDER — NOT REAL` flags to prevent fabrication.
2. **AI-Based Local Business Promotion (`local_businesses.json`, `homestays.json`, `food_providers.json`)**: Official government hospitality (KSTDC Hotel Mayura Chalukya, Kudalasangama Yatri Nivas, Cauvery Handicrafts Depot); demo profiles explicitly flagged.
3. **Accessible Tourism Assistant (`accessibility.json`)**: Precise physical accessibility audits covering wheelchair accessibility, steps count, handrails, terrain, and disabled toilets across all major sites.
4. **AI-Based Language Translation (`languages.json`)**: Multilingual framework with standardized glossaries in English, Kannada (ಕನ್ನಡ), and Hindi (हिन्दी).
5. **AI-Based Tourist–Local Skill Matching (`local_skills.json`, `local_experiences.json`)**: 5-node relational skill graph (`Interest ↔ Skill ↔ Provider ↔ Location ↔ Experience`).
6. **Women & Senior Tourist Safety Assistant (`safety_information.json`)**: Verified 24x7 district helplines (1077, 112, 104, 1033), SP Office, Badami Police Station, and multi-specialty trauma centers (Hangal Kumareshwara Hospital, Kerudi Hospital). Explicitly states that no travel route is guaranteed 100% safe.

---

## 10. Missing Information
1. **Individual Artisan Census**: Government portals list cooperative societies and craft clusters, but individual weaver names, contact phone numbers, and home workshop coordinates are not published publicly for privacy and commercial protection reasons.
2. **Live Bus Timetables**: Inter-village mini-bus departure frequencies between Badami, Mahakuta, and Guledagudda vary dynamically and are managed locally at the KSRTC Badami bus depot.
3. **Private Homestay Registry**: While KSTDC and government board guesthouses are verified, unorganized private rural homestays require local licensing verification.

---

## 11. Conflicting Information & Resolutions
Documented in `source_data/reports/conflict_review_log.json`:
- **Taluk Count**: Historical gazetteers cited 6 taluks; current official revenue notifications recognize 9 taluks (including newly carved Guledagudda, Rabkavi Banhatti, and Ilkal). Reconciled to the modern 9-taluk system.
- **Route Distances**: Badami to Pattadakal is listed as 22 km via Cholachagudda and 24 km via highway bypass. Both routes are preserved and clarified.

---

## 12. Data Requiring Manual Verification vs. Manual Import
- **Manual Verification Required**: Any newly submitted private homestay, unauthorized tour guide, or unlisted restaurant.
- **Manual Import Required**: Specific promotional campaigns, event photos, or notices from the Bagalkote Tourism Facebook page.
