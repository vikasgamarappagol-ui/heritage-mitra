# DATA DICTIONARY: Bagalkote Inclusive Tourism Data Architecture

**Project:** AI-Powered Inclusive Tourism Ecosystem for Bagalkote  
**Version:** 1.0.0  
**Last Updated:** 2026-09-20  

---

## 1. Overview & Architectural Principles

All datasets in `/source_data/structured/` conform to strict normalization, source attribution, and verification requirements.

### Core Universal Schema (Mandatory on All Factual Records)
Every factual entity record across all JSON datasets contains the following foundational fields:

| Field | Type | Description | Allowed Values / Constraints |
|---|---|---|---|
| `id` | `String` | Unique alphanumeric identifier | Snake_case with entity prefix (e.g. `dest_badami`, `her_cave_1`) |
| `name` | `String` | Official primary name of entity | Normalized English title |
| `category` | `String` | Functional domain classification | Standardized category taxonomy |
| `description` | `String` | Detailed, factual description | Minimum 50 characters; strictly non-fictional |
| `location` | `String` | Physical geographical address | Includes village/town, taluk, district, PIN code |
| `source` | `String` | Originating institutional authority | e.g. "Official Bagalkote District Portal", "ASI" |
| `source_url` | `String` | Exact web URL of source | Must be valid HTTP/HTTPS URL |
| `verification_status` | `Enum` | Rigorous provenance audit status | `SOURCE_VERIFIED`, `USER/ADMIN_ADDED`, `DEMO_DATA` |
| `retrieved_at` | `ISO 8601` | Timestamp of data acquisition | e.g. `2026-09-20T00:26:35+05:30` |

---

## 2. Dataset Specific Schemas

### 2.1 `destinations.json`
- `alternate_names` (`Array<String>`): Historical, Kannada, or vernacular toponyms.
- `taluk` (`String`): One of the 9 official Bagalkote taluks (Badami, Bagalkote, Bilagi, Hunagund, Jamkhandi, Mudhol, Guledagudda, Rabkavi Banhatti, Ilkal).
- `historical_significance` (`String`): Chronological, dynastic, and epigraphical facts.
- `cultural_significance` (`String`): Living traditions, festivals, and folklore.
- `architecture` (`String`): Structural and rock-cut architectural classification.
- `major_attractions` (`Array<String>`): Sub-monuments or internal highlights.
- `nearby_attractions` (`Array<String>`): Proximity destinations with distance in km.
- `activities` (`Array<String>`): Tourist recreational and learning activities.
- `suggested_visit_duration` (`String`): Estimated duration (e.g., "3 to 4 Hours", "1 to 2 Days").
- `tourism_facilities` (`Array<String>`): On-site amenities.
- `accessibility_information` (`Object`): High-level mobility summary.
- `transport_information` (`Object`): Rail, air, and road transit hubs.

### 2.2 `heritage.json`
- `monument_type` (`String`): Rock-cut Cave, Structural Temple, Fort, Epigraph, Museum.
- `dynasty` (`String`): Ruling royal house (e.g., Early Chalukya, Kalyana Chalukya, Rashtrakuta).
- `period_century` (`String`): Historical epoch (e.g., "6th Century CE", "Dated 578 CE").
- `architectural_style` (`String`): Dravida-Vimana, Rekha-Nagara, Vesara, Gajaprashtha.
- `unesco_status` (`String`): "UNESCO World Heritage Site", "Tentative List", "ASI Protected".
- `key_sculptures` (`Array<String>`): Specific relief panels, deities, and friezes.
- `heritage_circuit` (`String`): Regional tourism circuit association.

### 2.3 `culture.json` & `handicrafts.json`
- `gi_status` (`String`): Official Geographical Indication status and application number.
- `materials_used` (`Array<String>`): Raw textile/sculpture materials.
- `technique` (`String`): Weaving, needlework, or carving methodology.
- `primary_producers` (`String`): Traditional community, weaver cooperative, or guild.
- `price_range_indicative` (`String`): Fair-market retail pricing benchmarks.

### 2.4 `local_skills.json` (The 5-Node Skill Graph)
- `tourist_interest` (`String`): Tourist search or lifestyle intent.
- `local_skill` (`String`): Verified craft or domain expertise.
- `local_provider` (`String`): Institutional cooperative or certified artisan.
- `location` (`String`): Specific cluster or workshop venue.
- `experience` (`String`): Cross-referenced experience ID (`exp_*`).

### 2.5 `accessibility.json`
- `destination_id` (`String`): Foreign key matching `destinations.json`.
- `wheelchair_accessible` (`Boolean | String`): `true`, `false`, or `"Partial"`.
- `elderly_friendly` (`String`): "Excellent", "Good", "Moderate", "Difficult".
- `stairs_details` (`Object`): Includes `has_stairs`, `total_steps_estimate`, `step_character`, `handrails`.
- `terrain` (`String`): Surface description (sandstone rock, polished granite, lawns, gravel).
- `accessible_entrances` (`String`): Ramped or level entrance availability.
- `toilets` (`Object`): Cleanliness, distance from monument, wheelchair friendliness.
- `accessibility_status` (`Enum`): `SOURCE_VERIFIED` or `NOT_VERIFIED`.

### 2.6 `safety_information.json`
- `phone_numbers` (`Array<String>`): Fully verified 24x7 landlines and emergency short-codes.
- `operating_hours` (`String`): Availability window (e.g., "24 Hours / 7 Days a week").
- `services_provided` (`Array<String>`): Emergency, medical, or security scope.
- `advisories` (`Array<String>`): Tourist safety guidance for women, seniors, and general travelers.

### 2.7 `languages.json`
- `multilingual_framework` (`Object`): Supporting ISO codes `kn` (Kannada), `en` (English), and `hi` (Hindi).
- `glossary` (`Array<Object>`): Normalized trilingual domain vocabulary across greetings, heritage, crafts, food, safety, and inclusive growth.

### 2.8 `sources.json`
- `source_id` (`String`): Unique source code (`SRC_*`).
- `original_url` (`String`): Supplied share or landing URL.
- `resolved_url` (`String`): Final destination canonical URL.
- `source_name` (`String`): Official organization or publisher name.
- `source_type` (`String`): Government Portal, Social Media, Heritage Authority.
- `access_status` (`Enum`): `ACCESSIBLE_VERIFIED`, `MANUAL_IMPORT_REQUIRED`, `RESTRICTED`.
- `content_hash` (`String`): SHA-256 payload integrity hash.
