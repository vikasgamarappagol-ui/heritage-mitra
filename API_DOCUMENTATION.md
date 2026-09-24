# REST API Documentation
### AI-Powered Inclusive Tourism Ecosystem for Bagalkote

All endpoints operate over HTTP JSON on `http://localhost:3000`.

---

## 1. Endpoints Overview

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/destinations` | List all verified destinations with category/taluk filters |
| `GET` | `/api/destinations/:id` | Get detailed destination record enriched with accessibility & food |
| `GET` | `/api/artisans` | Discover verified local artisans and handicraft societies |
| `GET` | `/api/businesses` | List verified local hotels, resorts, and service providers |
| `GET` | `/api/accessibility` | Fetch audited accessibility matrix for district attractions |
| `GET` | `/api/safety` | Retrieve verified 24x7 emergency contacts, police, and hospitals |
| `POST` | `/api/skills/match` | Match tourist interests with certified local craft masters |
| `POST` | `/api/trip-planner` | Generate inclusive 8-step itinerary with food & artisan stops |
| `POST` | `/api/chat` | Grounded RAG chat assistant powered by Groq LLM |
| `POST` | `/api/provider/inquiry` | Submit booking / inquiry to local artisan or business |
| `GET` | `/api/admin/analytics` | District Commissioner intelligence analytics & KPIs |
| `GET` | `/api/sources` | Complete registry of verified government sources |

---

## 2. Detailed Endpoint Specifications

### 2.1 Tourist–Local Skill Matching
- **Endpoint:** `POST /api/skills/match`
- **Request Body:**
```json
{
  "interest": "weaving",
  "language": "en",
  "budget": "moderate",
  "mobility": "standard"
}
```
- **Response (200 OK):**
```json
{
  "count": 5,
  "matches": [
    {
      "id": "skill_ilkal_weaving",
      "skill_name": "Tope Teni Handloom Weaving",
      "category": "Traditional Crafts",
      "tourist_interest": "Weaving, Handloom, Textiles",
      "location": "Ilkal",
      "match_score": 90,
      "match_reasons": [
        "Directly matches your interest in Weaving, Handloom, Textiles",
        "Multilingual assistance provided"
      ]
    }
  ]
}
```

---

### 2.2 RAG AI Assistant Chat
- **Endpoint:** `POST /api/chat`
- **Request Body:**
```json
{
  "message": "I am travelling with elderly parents. What are the best accessible places in Bagalkote?",
  "language": "en"
}
```
- **Response (200 OK):**
```json
{
  "reply": "For elderly travellers, Pattadakal and Kudala Sangama offer smooth walkways and ramps. Please note that Badami Cave Temples require climbing over 200 steep rock-cut steps...",
  "source": "Archaeological Survey of India & Kudalasangama Development Board Accessibility Audits",
  "verification_status": "SOURCE_VERIFIED",
  "engine": "groq:openai/gpt-oss-120b",
  "rag_references": [ ... ]
}
```

---

### 2.3 Personalized 8-Step Trip Planner
- **Endpoint:** `POST /api/trip-planner`
- **Request Body:**
```json
{
  "destinations": ["dest_badami", "dest_pattadakal"],
  "duration": "1_day",
  "budget": "3000",
  "interests": ["heritage", "handicrafts", "food"],
  "group_type": "elderly_parents",
  "accessibility": ["senior_friendly", "reduced_walking"],
  "language": "hi",
  "safety_preferences": ["daylight_only", "verified_guides"]
}
```
- **Response (200 OK):**
```json
{
  "title": "Inclusive 1-Day Heritage, Culinary & Handloom Circuit",
  "timeline": [
    {
      "time": "09:00 AM - 11:00 AM",
      "type": "Heritage Monument",
      "name": "Badami Cave Temples",
      "accessibility_note": "⚠️ Cave ascents require steep rock-cut stairs."
    },
    {
      "time": "11:30 AM - 01:00 PM",
      "type": "Local Artisan & Skill Experience",
      "name": "Ilkal Saree Weaving Demonstration",
      "provider": "Ilkal Saree Weavers' Co-operative Production Society"
    },
    {
      "time": "01:15 PM - 02:30 PM",
      "type": "Traditional Culinary Immersion",
      "name": "North Karnataka Traditional Jolada Rotti Meal"
    }
  ],
  "safety_advisory": "Emergency assistance is available 24x7 via Bagalkote District Helpline 1077 and Police 112.",
  "estimated_total_budget": "₹1,200 - ₹2,500 for the group (excluding lodging)"
}
```
