# Database Schema & Data Dictionary
### AI-Powered Inclusive Tourism Ecosystem for Bagalkote

## 1. Overview & Verification Enums

The data layer consists of 16 structured JSON datasets located in `/source_data/structured/`, validated against strict JSON schemas.

### Verification Status Enum
- `SOURCE_VERIFIED`: Directly extracted and verified from official government portals (ASI, `bagalkot.nic.in`, `karnatakatourism.org`).
- `ADMIN_VERIFIED`: Manually reviewed and certified by the Bagalkote District Tourism Administration.
- `DEMO_DATA`: Prototype / simulated records created for demonstration purposes, explicitly tagged with `is_demo: true` and `DEMO PROVIDER — NOT REAL`.
- `CONFLICT_REQUIRES_REVIEW`: Flagged when two official sources report differing numbers or dates.
- `VERIFICATION_REQUIRED`: Unconfirmed field requiring ground audit.

---

## 2. Core Entities & Schema Definitions

### 2.1 Destinations (`destinations.json`)
```json
{
  "id": "dest_badami",
  "name": "Badami (Ancient Vatapi)",
  "alternate_names": ["Vatapi", "Badavi"],
  "taluk": "Badami",
  "district": "Bagalkote",
  "category": "Heritage / Rock-cut Architecture",
  "description": "Historic capital of the Early Chalukya dynasty...",
  "historical_significance": "Established as Chalukya capital in 6th century...",
  "major_attractions": ["Badami Cave Temples", "Agastya Lake"],
  "accessibility_information": {
    "wheelchair_accessible": false,
    "elderly_friendly": "Moderate to Difficult (200+ steep steps)",
    "walking_requirements": "High"
  },
  "source": "Archaeological Survey of India & Bagalkote District Tourism",
  "source_url": "https://bagalkot.nic.in/en/tourism/",
  "verification_status": "SOURCE_VERIFIED"
}
```

### 2.2 Artisans (`artisans.json`)
```json
{
  "id": "art_ilkal_society",
  "name": "Ilkal Saree Weavers' Co-operative Production Society",
  "craft": "Ilkal Saree Handloom Weaving (GI Tagged)",
  "category": "Handloom / Textiles",
  "location": "Ilkal, Bagalkote District",
  "taluk": "Ilkal",
  "description": "Apex certified handloom cooperative...",
  "products": [
    {
      "name": "Traditional Cotton-Silk Ilkal Saree",
      "gi_tagged": true,
      "price_range": "₹1,800 - ₹6,500"
    }
  ],
  "experience_offered": "Pit-loom weaving demonstration & direct sales",
  "languages_spoken": ["Kannada", "Hindi"],
  "verification_status": "SOURCE_VERIFIED",
  "is_demo": false
}
```

### 2.3 Local Skills (`local_skills.json`)
```json
{
  "id": "skill_ilkal_weaving",
  "skill_name": "Tope Teni Handloom Weaving",
  "category": "Traditional Crafts",
  "tourist_interest": "Weaving, Handloom, Textiles, Cultural Heritage",
  "location": "Ilkal",
  "taluk": "Ilkal",
  "associated_provider": "art_ilkal_society",
  "experience": "exp_ilkal_loom",
  "verification_status": "SOURCE_VERIFIED"
}
```

### 2.4 Accessibility Matrix (`accessibility.json`)
```json
{
  "destination_id": "dest_badami",
  "destination_name": "Badami Cave Temples",
  "wheelchair_accessible": false,
  "elderly_friendly": "Difficult",
  "walking_distance_meters": 1200,
  "stair_count": 200,
  "terrain_type": "Steep rock-cut stairs and sandstone paths",
  "rest_areas": true,
  "accessible_toilets": true,
  "wheelchair_rental_available": false,
  "accessibility_status": "SOURCE_VERIFIED"
}
```

### 2.5 Safety & Helplines (`safety_information.json`)
```json
{
  "id": "safe_district_helpline_1077",
  "name": "Bagalkote District 24x7 Emergency Helpline",
  "category": "Government Emergency Helpline",
  "phone_numbers": ["1077 (Toll-Free within District)", "08354-236240"],
  "location": "Deputy Commissioner Office, Navanagar, Bagalkote - 587103",
  "operating_hours": "24 Hours / 7 Days a week",
  "services_provided": ["Disaster emergency", "Tourist distress assistance"],
  "verification_status": "SOURCE_VERIFIED"
}
```
