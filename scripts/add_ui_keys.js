const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, '..', 'public', 'js', 'translations.js');
let code = fs.readFileSync(transPath, 'utf8');

const UI_KEYS = {
  en: {
    taluk_suffix: "Taluk",
    access_yes: "♿ Accessible",
    access_partial: "⚠️ Steps / Terrain",
    source_label: "Source",
    duration_default: "2-3 Hours",
    acc_wheelchair_label: "Wheelchair",
    acc_wheelchair_yes: "Yes (Accessible ramps)",
    acc_wheelchair_no: "No (Steps required)",
    acc_staircase_label: "Staircase",
    acc_senior_label: "Senior Friendly",
    acc_terrain_varies: "Terrain varies",
    transport_default: "Regular KSRTC bus services from Bagalkote and Hubballi."
  },
  kn: {
    taluk_suffix: "ತಾಲೂಕು",
    access_yes: "♿ ಸುಲಭ ಪ್ರವೇಶ",
    access_partial: "⚠️ ಮೆಟ್ಟಿಲುಗಳು / ಕಡಿದಾದ",
    source_label: "ಮೂಲ",
    duration_default: "೨-೩ ಗಂಟೆಗಳು",
    acc_wheelchair_label: "ಗಾಲಿಕುರ್ಚಿ",
    acc_wheelchair_yes: "ಹೌದು (ರ‍್ಯಾಂಪ್ ಲಭ್ಯವಿದೆ)",
    acc_wheelchair_no: "ಇಲ್ಲ (ಮೆಟ್ಟಿಲುಗಳಿವೆ)",
    acc_staircase_label: "ಮೆಟ್ಟಿಲುಗಳು",
    acc_senior_label: "ಹಿರಿಯರಿಗೆ ಅನುಕೂಲ",
    acc_terrain_varies: "ಕಡಿದಾದ ಭೂಪ್ರದೇಶ",
    transport_default: "ಬಾಗಲಕೋಟೆ ಮತ್ತು ಹುಬ್ಬಳ್ಳಿಯಿಂದ ನಿರಂತರ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ ಸೌಲಭ್ಯ."
  },
  hi: {
    taluk_suffix: "तालुक",
    access_yes: "♿ सुलभ",
    access_partial: "⚠️ सीढ़ियां / विषम धरातल",
    source_label: "स्रोत",
    duration_default: "2-3 घंटे",
    acc_wheelchair_label: "व्हीलचेयर",
    acc_wheelchair_yes: "हाँ (रैंप उपलब्ध)",
    acc_wheelchair_no: "नहीं (सीढ़ियां हैं)",
    acc_staircase_label: "सीढ़ियां",
    acc_senior_label: "वरिष्ठ नागरिकों हेतु अनुकूल",
    acc_terrain_varies: "विषम धरातल",
    transport_default: "बागलकोट और हुबली से नियमित केएसआरटीसी बस सेवाएं।"
  },
  ta: {
    taluk_suffix: "தாலுகா",
    access_yes: "♿ அணுகக்கூடியது",
    access_partial: "⚠️ படிகள் / கடின பாதை",
    source_label: "ஆதாரம்",
    duration_default: "2-3 மணிநேரம்",
    acc_wheelchair_label: "சக்கர நாற்காலி",
    acc_wheelchair_yes: "ஆம் (சாய்தளம் உள்ளது)",
    acc_wheelchair_no: "இல்லை (படிகள் உள்ளன)",
    acc_staircase_label: "படிகள்",
    acc_senior_label: "முதியோர்க்கு உகந்தது",
    acc_terrain_varies: "மாறுபட்ட தரைப்பகுதி",
    transport_default: "பாகல்கோட்டை மற்றும் ஹூப்ளியிலிருந்து தொடர் பேருந்து வசதிகள்."
  },
  te: {
    taluk_suffix: "తాలూకా",
    access_yes: "♿ అందుబాటులో ఉంది",
    access_partial: "⚠️ మెట్లు / అసమాన మార్గం",
    source_label: "మూలం",
    duration_default: "2-3 గంటలు",
    acc_wheelchair_label: "వీల్ చైర్",
    acc_wheelchair_yes: "అవును (ర్యాంప్ అందుబాటులో ఉంది)",
    acc_wheelchair_no: "లేదు (మెట్లు ఉన్నాయి)",
    acc_staircase_label: "మెట్లు",
    acc_senior_label: "వృద్ధులకు అనుకూలం",
    acc_terrain_varies: "అసమాన భూమి",
    transport_default: "బాగల్‌కోట్ మరియు హుబ్లీ నుండి సాధారణ ఆర్టీసీ బస్సులు అందుబాటులో ఉన్నాయి."
  },
  mr: {
    taluk_suffix: "तालुका",
    access_yes: "♿ सुलभ प्रवेश",
    access_partial: "⚠️ पायऱ्या / खडकाळ",
    source_label: "स्रोत",
    duration_default: "२-३ तास",
    acc_wheelchair_label: "व्हीलचेअर",
    acc_wheelchair_yes: "होय (रॅम्प उपलब्ध)",
    acc_wheelchair_no: "नाही (पायऱ्या आहेत)",
    acc_staircase_label: "पायऱ्या",
    acc_senior_label: "ज्येष्ठांसाठी अनुकूल",
    acc_terrain_varies: "विषम जमीन",
    transport_default: "बागलकोट आणि हुबळी येथून नियमित बस सेवा."
  },
  ml: {
    taluk_suffix: "താലൂക്ക്",
    access_yes: "♿ പ്രാപ്യമാണ്",
    access_partial: "⚠️ പടികൾ / വിഷമം",
    source_label: "ഉറവിടം",
    duration_default: "2-3 മണിക്കൂർ",
    acc_wheelchair_label: "വീൽചെയർ",
    acc_wheelchair_yes: "അതെ (റാംപ് ലഭ്യമാണ്)",
    acc_wheelchair_no: "ഇല്ല (പടികൾ കയറണം)",
    acc_staircase_label: "പടികൾ",
    acc_senior_label: "മുതിർന്നവർക്ക് അനുയോജ്യം",
    acc_terrain_varies: "വ്യത്യസ്തമായ ഭൂപ്രകൃതി",
    transport_default: "ബാഗൽകോട്ടിൽ നിന്നും ഹുബ്ബള്ളിയിൽ നിന്നും സ്ഥിരം ബസ് സർവീസ്."
  }
};

// For each language, append UI keys before close_btn: "..."
for (const [lang, keys] of Object.entries(UI_KEYS)) {
  const langKey = `${lang}: {`;
  const idx = code.indexOf(langKey);
  if (idx !== -1) {
    const nextLangIdx = code.indexOf('\n  },', idx);
    if (nextLangIdx !== -1) {
      let extra = '';
      for (const [k, v] of Object.entries(keys)) {
        extra += `,\n    ${k}: ${JSON.stringify(v)}`;
      }
      code = code.slice(0, nextLangIdx) + extra + code.slice(nextLangIdx);
    }
  }
}

// Add category aliases to CATEGORIES_I18N
const catAliases = `
  "Heritage": {
    en: "Heritage & Caves", kn: "ಪರಂಪರೆ ಮತ್ತು ಗುಹೆಗಳು", hi: "धरोहर एवं गुफाएं", ta: "பாரம்பரியம் & குகைகள்", te: "వారసత్వం & గుహాలయాలు", mr: "वारसा व गुंफा", ml: "പൈതൃകം & ഗുഹകൾ"
  },
  "Craft": {
    en: "Art & GI Handlooms", kn: "ಕಲೆ ಮತ್ತು ಜಿಐ ಕೈಮಗ್ಗ", hi: "कला एवं जीआई हथकरघा", ta: "கலை & கைத்தறி", te: "కళలు & చేనేత", mr: "कला व जीआय हातमाग", ml: "കല & കൈത്തറി"
  },
  "Food": {
    en: "Local Food", kn: "ಸ್ಥಳೀಯ ಆಹಾರ", hi: "स्थानीय भोजन", ta: "உள்ளூர் உணவு", te: "స్థానిక ఆహారం", mr: "स्थानिक खाद्यसंस्कृती", ml: "പ്രാദേശിക ഭക്ഷണങ്ങൾ"
  },
  "Spiritual": {
    en: "Spiritual", kn: "ಆಧ್ಯಾತ್ಮಿಕ", hi: "आध्यात्मिक", ta: "ஆன்மீகம்", te: "ఆధ్యాత్మికం", mr: "आध्यात्मिक", ml: "ആത്മീയത"
  },
  "Nature": {
    en: "Nature & Dams", kn: "ಪ್ರಕೃತಿ ಮತ್ತು ಅಣೆಕಟ್ಟುಗಳು", hi: "प्रकृति एवं बांध", ta: "இயற்கை & அணைகள்", te: "ప్రకృతి & ఆనకట్టలు", mr: "निसर्ग व धरणे", ml: "പ്രകൃതി & അണക്കെട്ടുകൾ"
  },
`;

const catMarker = 'const CATEGORIES_I18N = {';
const catIdx = code.indexOf(catMarker);
if (catIdx !== -1) {
  code = code.slice(0, catIdx + catMarker.length) + catAliases + code.slice(catIdx + catMarker.length);
}

fs.writeFileSync(transPath, code, 'utf8');
console.log("Successfully added UI keys and category aliases!");
