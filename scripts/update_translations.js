const fs = require('fs');
const path = require('path');

const NEW_DESTINATIONS = {
  dest_banashankari: {
    en: {
      name: "Banashankari Temple (Cholachagudda)",
      taluk: "Badami",
      category: "Spiritual & Temple Heritage",
      description: "Historic 7th-century shrine dedicated to Goddess Banashankari (Shakambhari), Kuladevi of the Chalukyas, situated in the Tilakaaranya forest with the sacred Haridra Tirtha pond.",
      historical_significance: "Founded during the 7th century Chalukyan era with extensive Dravida and Vijayanagara royal additions; site of the celebrated annual Banashankari Jathra.",
      architecture: "Blend of Chalukyan and Vijayanagara stonework featuring the magnificent Haridra Tirtha square pushkarini pool with multi-tiered stone lamps (Deepastambhas).",
      transport: "5 km from Badami town on the Badami-Ilkal highway. City autos and frequent KSRTC buses connect the temple."
    },
    kn: {
      name: "ಬನಶಂಕರಿ ದೇವಾಲಯ (ಚೋಳಚಗುಡ್ಡ)",
      taluk: "ಬಾದಾಮಿ",
      category: "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಪಾರಂಪರಿಕ ತಾಣ",
      description: "ಚಾಲುಕ್ಯರ ಕುಲದೇವತೆಯಾದ ಬನಶಂಕರಿ ಅಮ್ಮನವರ ೭ನೇ ಶತಮಾನದ ಪ್ರಸಿದ್ಧ ದೇವಾಲಯ. ತಿಲಕಾರಣ್ಯ ಅರಣ್ಯ ಪ್ರದೇಶದಲ್ಲಿರುವ ಈ ತಾಣದಲ್ಲಿ ಪವಿತ್ರ ಹರಿದ್ರಾ ತೀರ್ಥ ಕಲ್ಯಾಣಿ ಇದೆ.",
      historical_significance: "೭ನೇ ಶತಮಾನದ ಆರಂಭಿಕ ಚಾಲುಕ್ಯರ ಕಾಲದಲ್ಲಿ ಸ್ಥಾಪನೆಗೊಂಡು, ನಂತರ ವಿಜಯನಗರ ಕಾಲದಲ್ಲಿ ವಿಸ್ತಾರಗೊಂಡ ದೇವಾಲಯ. ಪ್ರಸಿದ್ಧ ಬನಶಂಕರಿ ಜಾತ್ರೆಗೆ ನಾಡಿನಾದ್ಯಂತ ಭಕ್ತರು ಬರುತ್ತಾರೆ.",
      architecture: "ದ್ರಾವಿಡ ಮತ್ತು ವಿಜಯನಗರ ಶೈಲಿಯ ಸುಂದರ ಕೆತ್ತನೆಗಳು, ವಿಶಾಲ ಹರಿದ್ರಾ ತೀರ್ಥ ಪುಷ್ಕರಣಿ ಮತ್ತು ಎತ್ತರದ ಕಲ್ಲಿನ ದೀಪಸ್ತಂಭಗಳು.",
      transport: "ಬಾದಾಮಿ ನಗರದಿಂದ ಕೇವಲ ೫ ಕಿಮೀ ದೂರದಲ್ಲಿದೆ. ನಿರಂತರ ಆಟೋ ಮತ್ತು ಬಸ್ ಸೌಲಭ್ಯವಿದೆ."
    },
    hi: {
      name: "बनशंकरी देवी मंदिर (चोलचगुड्डा)",
      taluk: "बादामी",
      category: "आध्यात्मिक एवं ऐतिहासिक धरोहर",
      description: "चालुक्य राजवंश की कुलदेवी मां बनशंकरी (शाकंभरी) का 7वीं शताब्दी का प्रसिद्ध मंदिर। तिलकारण्य वन में स्थित पवित्र हरिद्रा तीर्थ पुष्करिणी से सुशोभित।",
      historical_significance: "चालुक्य काल में स्थापित तथा विजयनगर काल में विस्तृत हुआ पवित्र शक्तिपीठ; वार्षिक बनशंकरी जात्रा हेतु प्रसिद्ध।",
      architecture: "द्रविड़ और विजयनगर स्थापत्य शैली का संगम, भव्य हरिद्रा तीर्थ सरोवर और विशाल पाषाण दीपस्तंभ।",
      transport: "बादामी से मात्र 5 किमी की दूरी पर स्थित। निरंतर बसें और ऑटो उपलब्ध हैं।"
    },
    ta: {
      name: "பனசங்கரி கோவில் (சோளச்சகுட்டா)",
      taluk: "பாதாமி",
      category: "ஆன்மீகம் & பாரம்பரியம்",
      description: "சாளுக்கிய மன்னர்களின் குலதெய்வமான பனசங்கரி அம்மனின் 7ஆம் நூற்றாண்டு பழமையான கோவில். திலகாரண்ய காட்டில் அமைந்துள்ள புனித ஹரித்ரா தீர்த்த குளம் கொண்டது.",
      historical_significance: "சாளுக்கியர்களால் நிறுவப்பட்டு விஜயநகர பேரரசால் விரிவாக்கப்பட்ட வரலாற்று சிறப்புமிக்க சக்தி தலம்.",
      architecture: "சாளுக்கிய-விஜயநகர திராவிட பாணி சிற்பங்கள் மற்றும் பிரம்மாண்டமான ஹரித்ரா தீர்த்த கல் தெப்பக்குளம்.",
      transport: "பாதாமி நகரத்திலிருந்து 5 கி.மீ தொலைவில் அமைந்துள்ளது. பேருந்துகள் மற்றும் ஆட்டோக்கள் உள்ளன."
    },
    te: {
      name: "బనశంకరి ఆలయం (చోళచగుడ్డ)",
      taluk: "బాదామి",
      category: "ఆధ్యాత్మికం & వారసత్వం",
      description: "చాళుక్యుల కులదైవమైన బనశంకరి దేవి 7వ శతాబ్దపు చారిత్రక క్షేత్రం. తిలకారణ్య అటవీ ప్రాంతంలో పవిత్ర హరిద్రా తీర్థ కోనేరుతో అలరారుతోంది.",
      historical_significance: "చాళుక్యులు స్థాపించిన శక్తిక్షేత్రం; ప్రతి సంవత్సరం జరిగే బనశంకరి జాతరకు లక్షలాది భక్తులు తరలివస్తారు.",
      architecture: "ద్రవిడ మరియు విజయనగర వాస్తు శైలి శిల్పకళ, విశాలమైన హరిద్రా పుష్కరిణి మరియు రాతి దీపస్తంభాలు.",
      transport: "బాదామి నుండి 5 కి.మీ దూరం. నిరంతరం బస్సులు మరియు ఆటోలు నడుస్తాయి."
    },
    mr: {
      name: "बनशंकरी मंदिर (चोळचगुड्डा)",
      taluk: "बादामी",
      category: "धार्मिक व ऐतिहासिक वारसा",
      description: "चालुक्यांची कुलदेवता माता बनशंकरी (शाकंभरी) यांचे ७व्या शतकातील प्रसिद्ध मंदिर. तिलकारण्य परिसरातील पवित्र हरिद्रा तीर्थ तलावासाठी प्रसिद्ध.",
      historical_significance: "चालुक्य काळात स्थापन झालेले आणि विजयनगर सम्राटांनी विस्तारलेले जागृत शक्तिपीठ.",
      architecture: "द्राविड व विजयनगर स्थापत्यकलेचा उत्कृष्ट संगम, विस्तीर्ण दगडी हरिद्रा तीर्थ तलाव व दीपमाळा.",
      transport: "बादामी शहरापासून ५ किमी अंतरावर. बसेस व ऑटो रिक्षा सहज उपलब्ध."
    },
    ml: {
      name: "ബനശങ്കരി ക്ഷേത്രം (ചോളച്ചഗുഡ്ഡ)",
      taluk: "ബദാമി",
      category: "ആത്മീയത & പൈതൃകം",
      description: "ചാലൂക്യരുടെ കുലദേവതയായ ബനശങ്കരി ദേവിയുടെ ഏഴാം നൂറ്റാണ്ടിലെ പുരാതന ക്ഷേത്രം. തിലകാരണ്യ വനത്തിലെ വിശുദ്ധ ഹരിദ്രാ തീർത്ഥ കുളത്താൽ ചുറ്റപ്പെട്ടതാണ്.",
      historical_significance: "ഏഴാം നൂറ്റാണ്ടിൽ ചാലൂക്യർ നിർമ്മിച്ചതും വിജയനഗര രാജാക്കന്മാർ വികസിപ്പിച്ചതുമായ പുണ്യകേന്ദ്രം.",
      architecture: "ദ്രാവിഡ-വിജയനഗര ശൈലിയിലുള്ള ശിലാക്ഷേത്രവും വിശാലമായ ചതുര കുളവും കൽവിളക്കുകളും.",
      transport: "ബദാമി പട്ടണത്തിൽ നിന്ന് 5 കി.മീ. ബസുകളും ഓട്ടോകളും ലഭ്യമാണ്."
    }
  },

  dest_almatti_dam: {
    en: {
      name: "Almatti Dam & Lal Bahadur Shastri Sagar",
      taluk: "Nidagundi / Bagalkote",
      category: "Nature & Dam Gardens",
      description: "Major multi-purpose reservoir project on the Krishna River featuring spectacular musical dancing fountains, Mughal gardens, Rock garden, and illuminated dam vistas.",
      historical_significance: "Cornerstone of the Upper Krishna Project completed in 2005, providing vital irrigation across northern Karnataka and named after Prime Minister Lal Bahadur Shastri.",
      architecture: "Massive masonry and earth-fill dam with 26 radial crest gates, surrounded by beautifully landscaped Mughal-style geometric terraced gardens.",
      transport: "65 km from Bagalkote town along NH-50. Well connected by KSRTC luxury express buses and Almatti Railway Station."
    },
    kn: {
      name: "ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟು & ಲಾಲ್ ಬಹದ್ದೂರ್ ಶಾಸ್ತ್ರಿ ಸಾಗರ",
      taluk: "ಬಾಗಲಕೋಟೆ ಗಡಿ",
      category: "ಪ್ರಕೃತಿ ಮತ್ತು ಅಣೆಕಟ್ಟು ಉದ್ಯಾನ",
      description: "ಕೃಷ್ಣಾ ನದಿಗೆ ಅಡ್ಡಲಾಗಿ ನಿರ್ಮಿಸಲಾದ ಬೃಹತ್ ಅಣೆಕಟ್ಟು. ಸಂಗೀತ ಕಾರಂಜಿ, ಮೊಘಲ್ ಗಾರ್ಡನ್, ರಾಕ್ ಗಾರ್ಡನ್ ಮತ್ತು ವರ್ಣರಂಜಿತ ದೀಪಾಲಂಕಾರಕ್ಕೆ ಇದು ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
      historical_significance: "ಉತ್ತರ ಕರ್ನಾಟಕಕ್ಕೆ ಜೀವನಾಡಿಯಾದ ಕೃಷ್ಣಾ ಮೇಲ್ದಂಡೆ ಯೋಜನೆಯ ಪ್ರಮುಖ ಜಲಾಶಯ; ಭಾರತದ ಮಾಜಿ ಪ್ರಧಾನಿ ಲಾಲ್ ಬಹದ್ದೂರ್ ಶಾಸ್ತ್ರಿಯವರ ಸ್ಮರಣಾರ್ಥ ನಾಮಕರಣ.",
      architecture: "೨೬ ಬೃಹತ್ ರೇಡಿಯಲ್ ಗೇಟ್‌ಗಳುಳ್ಳ ಕಲ್ಲಿನ ಮತ್ತು ಮಣ್ಣಿನ ಬೃಹತ್ ಅಣೆಕಟ್ಟು, ಬೃಂದಾವನ ಮಾದರಿಯ ಸುಂದರ ಉದ್ಯಾನವನಗಳು.",
      transport: "ಬಾಗಲಕೋಟೆಯಿಂದ ೬೫ ಕಿಮೀ. ಎನ್‌ಎಚ್-೫೦ ಹೆದ್ದಾರಿಯಲ್ಲಿದೆ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ಸುಗಳು ಮತ್ತು ರೈಲು ನಿಲ್ದಾಣ ಸೌಲಭ್ಯವಿದೆ."
    },
    hi: {
      name: "आलमट्टी बांध एवं लाल बहादुर शास्त्री सागर",
      taluk: "बागलकोट सीमा",
      category: "प्रकृति एवं बांध उद्यान",
      description: "कृष्णा नदी पर बना उत्तर कर्नाटक का विशाल जलाशय, जो अपनी संगीतमय फव्वारों, मुगल गार्डन, रॉक गार्डन और मनोहारी दृश्यों के लिए प्रसिद्ध है।",
      historical_significance: "ऊपरी कृष्णा परियोजना का मुख्य आधार, 2005 में राष्ट्र को समर्पित; पूर्व प्रधानमंत्री लाल बहादुर शास्त्री के नाम पर स्थापित।",
      architecture: "26 विशाल रेडियल गेटों वाला बहुउद्देशीय विशाल बांध और वृंदावन की तर्ज पर बने सुंदर उद्यान।",
      transport: "बागलकोट से 65 किमी दूर NH-50 पर। सीधी बसें एवं आलमट्टी रेलवे स्टेशन की सुविधा उपलब्ध है।"
    },
    ta: {
      name: "ஆலமட்டி அணை & லால் பகதூர் சாஸ்திரி சாகர்",
      taluk: "பாகல்கோட்டை எல்லை",
      category: "இயற்கை & அணை தோட்டங்கள்",
      description: "கிருஷ்ணா நதியின் குறுக்கே கட்டப்பட்ட பிரம்மாண்ட அணை. இசை நீரூற்றுகள், முகலாய தோட்டங்கள் மற்றும் பாறை தோட்டங்களுக்கு மிகவும் புகழ்பெற்றது.",
      historical_significance: "வட கர்நாடகாவின் விவசாயத்திற்கு உயிரூட்டும் கிருஷ்ணா நதி நீர்ப்பாசன திட்டம்.",
      architecture: "26 பிரம்மாண்ட கதவுகள் கொண்ட அணை மற்றும் அழகான பூங்காக்கள்.",
      transport: "பாகல்கோட்டையிலிருந்து 65 கி.மீ. பேருந்து மற்றும் ரயில் வசதிகள் உள்ளன."
    },
    te: {
      name: "ఆలమట్టి డ్యామ్ & లాల్ బహదూర్ శాస్త్రి సాగర్",
      taluk: "బాగల్‌కోట్ సరిహద్దు",
      category: "ప్రకృతి & ఆనకట్ట ఉద్యానవనాలు",
      description: "కృష్ణా నదిపై నిర్మించిన భారీ బహుళార్ధసాధక ప్రాజెక్ట్. మ్యూజికల్ ఫౌంటెన్లు, మొఘల్ గార్డెన్స్, రాక్ గార్డెన్‌తో పర్యాటకులను ఆకర్షిస్తుంది.",
      historical_significance: "ఉత్తర కర్ణాటకకు జీవనాడి అయిన అప్పర్ కృష్ణా ప్రాజెక్ట్ ప్రధాన భాగం.",
      architecture: "26 రేడియల్ గేట్లతో నిర్మించిన భారీ డ్యామ్ మరియు అందమైన ప్రకృతి ఉద్యానవనాలు.",
      transport: "బాగల్‌కోట్ నుండి 65 కి.మీ దూరం. ఎక్స్‌ప్రెస్ బస్సులు, ఆలమట్టి రైల్వే స్టేషన్ సౌకర్యం కలదు."
    },
    mr: {
      name: "आलमट्टी धरण आणि लाल बहादूर शास्त्री सागर",
      taluk: "बागलकोट सीमा",
      category: "निसर्ग व धरण उद्याने",
      description: "कृष्णा नदीवरील भव्य धरण प्रकल्प. संगीतमय कारंजे, मुघल गार्डन, रॉक गार्डन आणि आकर्षक रोषणाईसाठी पर्यटकांचे आवडते केंद्र.",
      historical_significance: "उत्तर कर्नाटकातील कृषी क्रांतीचा आधारस्तंभ असणारा जलप्रकल्प.",
      architecture: "२६ वक्र द्वारांचे विशाल दगडी धरण आणि भव्य उद्याने.",
      transport: "बागलकोट शहरापासून ६५ किमी अंतरावर. राष्ट्रीय महामार्ग ५० वरून थेट बसेस."
    },
    ml: {
      name: "ആലമട്ടി ഡാം & ലാൽ ബഹാദൂർ ശാസ്ത്രി സാഗർ",
      taluk: "ബാഗൽകോട്ട് അതിർത്തി",
      category: "പ്രകൃതി & അണക്കെട്ട്",
      description: "കൃഷ്ണ നദിക്ക് കുറുകെയുള്ള കൂറ്റൻ അണക്കെട്ട്. സംഗീത ജലധാരകൾ, മുഗൾ ഗാർഡൻ, റോക്ക് ഗാർഡൻ എന്നിവയാൽ സന്ദർശകരെ ആകർഷിക്കുന്നു.",
      historical_significance: "ഉത്തര കർണാടകത്തിന്റെ ജീവനാഡിയായ പ്രധാന ജലസേചന പദ്ധതി.",
      architecture: "26 കൂറ്റൻ ഷട്ടറുകളുള്ള വലിയ ഡാമും പൂന്തോട്ടങ്ങളും.",
      transport: "ബാഗൽകോട്ടിൽ നിന്ന് 65 കി.മീ. ബസ്, ട്രെയിൻ സർവീസുകൾ ലഭ്യമാണ്."
    }
  },

  dest_shivayogamandira: {
    en: {
      name: "Shivayogamandira",
      taluk: "Badami",
      category: "Spiritual & Confluence",
      description: "Sacred Veerashaiva monastery founded in 1909 by Saint Hangal Kumaraswamiji on the banks of Malaprabha River, training hundreds of monastic scholars in spiritual discipline.",
      historical_significance: "Historic seat of modern Lingayat-Veerashaiva resurgence and Sanskrit monastic schooling, maintaining an unbroken tradition of community welfare and Dasoha.",
      architecture: "Serene ashram-style temple architecture shaded by palm and mango groves along the banks of the sacred Malaprabha river.",
      transport: "18 km from Badami, 12 km from Pattadakal. State transport buses and autorickshaws available."
    },
    kn: {
      name: "ಶಿವಯೋಗಮಂದಿರ",
      taluk: "ಬಾದಾಮಿ",
      category: "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಆಶ್ರಮ ತಾಣ",
      description: "ಮಲಪ್ರಭಾ ನದಿಯ ದಂಡೆಯಲ್ಲಿರುವ ಪವಿತ್ರ ವೀರಶೈವ ಮಠ. ೧೯೦೯ ರಲ್ಲಿ ಹಾನಗಲ್ ಕುಮಾರಸ್ವಾಮಿಗಳಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟಿದ್ದು, ನೂರಾರು ಸಂತರ ತರಬೇತಿ ಕೇಂದ್ರವಾಗಿದೆ.",
      historical_significance: "ವೀರಶೈವ-ಲಿಂಗಾಯತ ಪುನರುತ್ಥಾನದ ಪವಿತ್ರ ವಿದ್ಯಾಪೀಠ, ಸಂಸ್ಕೃತ ಅಧ್ಯಯನ ಮತ್ತು ದಾಸೋಹ ಸಂಪ್ರದಾಯದ ಕೇಂದ್ರ.",
      architecture: "ಪ್ರಶಾಂತ ಆಶ್ರಮ ಶೈಲಿಯ ಸುಂದರ ಪರಿಸರ, ನದೀತೀರದ ತಪೋವನ ಮತ್ತು ಧ್ಯಾನ ಮಂದಿರ.",
      transport: "ಬಾದಾಮಿಯಿಂದ ೧೮ ಕಿಮೀ, ಪಟ್ಟದಕಲ್ಲಿನಿಂದ ೧೨ ಕಿಮೀ. ಬಸ್ಸು ಮತ್ತು ಆಟೋ ಸೌಲಭ್ಯವಿದೆ."
    },
    hi: {
      name: "शिवयोगमंदिर",
      taluk: "बादामी",
      category: "आध्यात्मिक एवं शांत तपोवन",
      description: "मलप्रभा नदी के सुरम्य तट पर 1909 में पूज्य हंगल कुमारस्वामीजी द्वारा स्थापित प्रतिष्ठित आध्यात्मिक विद्यापीठ एवं वीरशैव मठ।",
      historical_significance: "संस्कृत एवं वीरशैव दर्शन की उच्च शिक्षा का ऐतिहासिक केंद्र; निरंतर समाज सेवा एवं अन्न दान (दासोह) का पवित्र स्थल।",
      architecture: "शांत प्राकृतिक आश्रम शैली, नदी तट का मनोहारी वातावरण और ध्यान मंडप।",
      transport: "बादामी से 18 किमी, पट्टदकल से 12 किमी। राज्य परिवहन की बसें उपलब्ध हैं।"
    },
    ta: {
      name: "சிவயோகமந்திரம்",
      taluk: "பாதாமி",
      category: "ஆன்மீகம் & ஆசிரமம்",
      description: "மலபிரபா நதிக்கரையில் 1909-ல் ஹானகல் குமாரசுவாமி அவர்களால் நிறுவப்பட்ட புனித வீரசைவ மடம் மற்றும் ஆன்மீக கல்வி மையம்.",
      historical_significance: "ஆன்மீக துறவிகள் உருவாகும் வரலாற்று சிறப்புமிக்க குருகுல பீடம்.",
      architecture: "அமைதியான நதிக்கரை ஆசிரம சூழல் மற்றும் தியான கூடம்.",
      transport: "பாதாமியிலிருந்து 18 கி.மீ, பட்டடக்கல்லிலிருந்து 12 கி.மீ."
    },
    te: {
      name: "శివయోగమందిరం",
      taluk: "బాదామి",
      category: "ఆధ్యాత్మికం & ఆశ్రమం",
      description: "మలప్రభ నదీ తీరంలో 1909 లో హానగల్ కుమారస్వామి స్థాపించిన పవిత్ర వీరశైవ పీఠం మరియు వేద పాఠశాల.",
      historical_significance: "సంస్కృతం, వీరశైవ తత్వశాస్త్రం బోధించే ప్రముఖ చారిత్రక గురుకులం.",
      architecture: "ప్రశాంతమైన నదీతీర ఆశ్రమ ప్రాంగణం మరియు ధ్యాన మందిరం.",
      transport: "బాదామి నుండి 18 కి.మీ, పట్టడకల్ నుండి 12 కి.మీ. బస్సులు అందుబాటులో ఉన్నాయి."
    },
    mr: {
      name: "शिवयोगमंदिर",
      taluk: "बादामी",
      category: "आध्यात्मिक व तपोभूमी",
      description: "मलप्रभा नदीकाठी १९०९ मध्ये हनगल कुमारस्वामींनी स्थापन केलेला विख्यात वीरशैव मठ आणि संस्कृत अभ्यास केंद्र.",
      historical_significance: "अखंड समाजसेवा, अन्नदान (दासोह) आणि संन्यासी प्रशिक्षणाची ऐतिहासिक तपोभूमी.",
      architecture: "शांत निसर्गरम्य आश्रम रचना आणि नदीकाठचा ध्यान मंडप.",
      transport: "बादामीपासून १८ किमी, पट्टदकलपासून १२ किमी."
    },
    ml: {
      name: "ശിവയോഗമന്ദിരം",
      taluk: "ബദാമി",
      category: "ആത്മീയത & ആശ്രമം",
      description: "മലപ്രഭ നദിക്കരയിൽ 1909-ൽ ഹാനഗൽ കുമാരസ്വാമിജി സ്ഥാപിച്ച പുണ്യ വീരശൈവ മഠവും ആശ്രമവും.",
      historical_significance: "സംസ്കൃത വേദപഠനത്തിന്റെയും തത്ത്വചിന്തയുടെയും ചരിത്രപ്രസിദ്ധമായ കേന്ദ്രം.",
      architecture: "ശാന്തമായ നദീതീര ആശ്രമ വാസ്തുവിദ്യയും ധ്യാനമണ്ഡപവും.",
      transport: "ബദാമിയിൽ നിന്ന് 18 കി.മീ അകലെ."
    }
  },

  // ── 17 CULTURAL FOOD DESTINATIONS ───────────────────────────────────────────
  dest_food_jolada_rotti_badami: {
    en: {
      name: "Shri Banashankari Traditional Jolada Rotti Uta",
      taluk: "Badami",
      category: "Local Food & Khanavalis",
      description: "Iconic authentic North Karnataka sorghum flatbread meal served with stuffed brinjal (Badanekayi Ennegayi), sprouted moth-bean usli, Shenga Chutney, and fresh churned white butter.",
      historical_significance: "Centuries-old agrarian culinary staple of the Deccan plateau, celebrating millet-based organic nutrition.",
      architecture: "Traditional dining Khanavali setup with authentic low brass plates and banana leaf service.",
      transport: "Opposite Badami Bus Stand, walkable from cave temples entrance."
    },
    kn: {
      name: "ಶ್ರೀ ಬನಶಂಕರಿ ಸಾಂಪ್ರದಾಯಿಕ ಜೋಳದ ರೊಟ್ಟಿ ಊಟ",
      taluk: "ಬಾದಾಮಿ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಬಿಸಿ ಬಿಸಿ ಜೋಳದ ರೊಟ್ಟಿ, ಬದನೆಕಾಯಿ ಎಣ್ಣೆಗಾಯಿ ಪಲ್ಯ, ಕಾಳು ಪಲ್ಯ, ಶೇಂಗಾ ಚಟ್ನಿಪುಡಿ ಮತ್ತು ಗಟ್ಟಿ ಮೊಸರಿನೊಂದಿಗೆ ಬಡಿಸುವ ಅಪ್ಪಟ ಉತ್ತರ ಕರ್ನಾಟಕ ಊಟ.",
      historical_significance: "ಶತಮಾನಗಳಿಂದ ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಪೌಷ್ಟಿಕ ಸಿರಿಧಾನ್ಯದ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ ಪರಂಪರೆ.",
      architecture: "ಸಾಂಪ್ರದಾಯಿಕ ಕೌಟುಂಬಿಕ ಖಾನಾವಳಿ ಶೈಲಿಯ ಆತಿಥ್ಯ.",
      transport: "ಬಾದಾಮಿ ಬಸ್ ನಿಲ್ದಾಣದ ಎದುರು, ಗುಹಾ ದೇವಾಲಯಗಳಿಗೆ ಸಮೀಪ."
    },
    hi: {
      name: "श्री बनशंकरी पारंपरिक जोलद रोट्टी भोजन",
      taluk: "बादामी",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "गरमा-गरम ज्वार की रोट्टी, बैंगन का मसालेदार भरवां (एन्नेगायी), अंकुरित दाल, मूंगफली की चटनी और ताज़ा मक्खन के साथ उत्तर कर्नाटक की प्रामाणिक थाली।",
      historical_significance: "दक्कन के पठार की सदियों पुरानी पौष्टिक कदन्न (मिलेट) भोजन परंपरा।",
      architecture: "पारंपरिक प्रामाणिक खानावलि बैठक व्यवस्था।",
      transport: "बादामी बस स्टैंड के सामने, गुफा मंदिरों से कुछ ही दूरी पर।"
    },
    ta: {
      name: "ஸ்ரீ பனசங்கரி பாரம்பரிய சோள ரொட்டி உணவு",
      taluk: "பாதாமி",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "சுடச்சுட சோள ரொட்டி, எண்ணெய் கத்திரிக்காய் பொரியல், முளைகட்டிய பயறு, நிலக்கடலை பொடி மற்றும் வெண்ணெயுடன் கூடிய சுவையான உணவு.",
      historical_significance: "கர்நாடகாவின் பாரம்பரிய சிறுதானிய உணவு கலாச்சாரம்.",
      architecture: "பாரம்பரிய உணவு விடுதி அமைப்பு.",
      transport: "பாதாமி பேருந்து நிலையம் எதிரில்."
    },
    te: {
      name: "శ్రీ బనశంకరి సాంప్రదాయ జొన్న రొట్టె భోజనం",
      taluk: "బాదామి",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "వేడి వేడి జొన్న రొట్టెలు, గుత్తి వంకాయ కూర, మొలకల ఉసలి, వేరుశెనగ పొడి మరియు తాజా వెన్నతో కూడిన ఉత్తర కర్ణాటక స్పెషల్ భోజనం.",
      historical_significance: "దక్కన్ పీఠభూమి ప్రాచీన పోషక చిరుధాన్య ఆహార వారసత్వం.",
      architecture: "సాంప్రదాయ ఖానావళి భోజన శాల.",
      transport: "బాదామి బస్టాండ్ ఎదురుగా."
    },
    mr: {
      name: "श्री बनशंकरी पारंपरिक ज्वारीची भाकरी जेवण",
      taluk: "बादामी",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "गरमागरम मऊ ज्वारीची भाकरी, भरलेली वांगी (एन्नेगायी), उसळ, शेंगदाणा चटणी व लोण्यासह अस्सल उत्तर कर्नाटक जेवण.",
      historical_significance: "दख्खनच्या पठाराची शतकानुशतके चालत आलेली पौष्टिक भरडधान्य संस्कृती.",
      architecture: "अस्सल पारंपारिक खानावळ संस्कृती.",
      transport: "बादामी बस स्थानकासमोर."
    },
    ml: {
      name: "ശ്രീ ബനശങ്കരി പരമ്പരാഗത ചോള റൊട്ടി ഊണ്",
      taluk: "ബദാമി",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "ചൂടുള്ള ചോള റൊട്ടിയും വഴുതനങ്ങ കറിയും മുളപ്പിച്ച പയറും നിലക്കടല ചട്ണിയും ചേർന്ന ഉത്തർ കർണാടക സ്പെഷ്യൽ ഊണ്.",
      historical_significance: "പരമ്പരാഗത ധാന്യ സമൃദ്ധമായ പൈതൃക ഭക്ഷണം.",
      architecture: "പരമ്പരാഗത ഖാനാവലി ഊട്ടുപുര.",
      transport: "ബദാമി ബസ് സ്റ്റാൻഡിന് എതിർവശം."
    }
  },

  dest_food_susla_badami: {
    en: {
      name: "Agastya Theertha Mirchi Bajji & Susla Stall",
      taluk: "Badami",
      category: "Local Food & Khanavalis",
      description: "Crispy double-fried stuffed green chilli fritters (Mirchi Bajji) paired with spiced puffed-rice savory upma (Susla), beloved lakeside evening snack.",
      historical_significance: "Signature street food of Bagalkote popularized over generations by lakeside stalls.",
      architecture: "Open-air street stall overlooking Agastya lake cliffs.",
      transport: "Near Agastya lake western ghats."
    },
    kn: {
      name: "ಅಗಸ್ತ್ಯ ತೀರ್ಥ ಮಿರ್ಚಿ ಬಜ್ಜಿ & ಸುಸ್ಲಾ ಕೇಂದ್ರ",
      taluk: "ಬಾದಾಮಿ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಗರಿಗರಿಯಾದ ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿ ಮತ್ತು ಮಂಡಕ್ಕಿ ಸುಸ್ಲಾ, ಸರೋವರದ ತೀರದ ಸಂಜೆಯ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ತಿನಿಸು.",
      historical_significance: "ಬಾಗಲಕೋಟೆಯ ಪ್ರಸಿದ್ಧ ಬೀದಿಬದಿ ಸಂಜೆಯ ಆಹಾರ ಸಂಸ್ಕೃತಿ.",
      architecture: "ಸರೋವರದ ಸೌಂದರ್ಯವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳುವ ಬಯಲು ಅಂಗಡಿ.",
      transport: "ಅಗಸ್ತ್ಯ ಸರೋವರದ ಪ್ರವೇಶ ದ್ವಾರದ ಬಳಿ."
    },
    hi: {
      name: "अगस्त्य तीर्थ मिर्ची भज्जी एवं सुसला स्टॉल",
      taluk: "बादामी",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "कुरकुरी तीखी मिर्ची भज्जी और बघारे हुए मुरमुरे का सुसला, अगस्त्य झील किनारे का सबसे लोकप्रिय शाम का नाश्ता।",
      historical_significance: "बागलकोट का पारंपरिक शाम का पसंदीदा स्ट्रीट फूड।",
      architecture: "झील किनारे स्थित खुला स्ट्रीट फूड स्टॉल।",
      transport: "अगस्त्य सरोवर के पास।"
    },
    ta: {
      name: "அகஸ்திய தீர்த்தம் மிளகாய் பஜ்ஜி & சுஸ்லா",
      taluk: "பாதாമി",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "மொருமொருப்பான மிளகாய் பஜ்ஜி மற்றும் சுஸ்லா காரப் பொரி சிற்றுண்டி.",
      historical_significance: "பாகல்கோட்டையின் பாரம்பரிய மாலை நேர சிற்றுண்டி.",
      architecture: "ஏரிக்கரை சிற்றுண்டி கடை.",
      transport: "அகஸ்திய ஏரிக்கரை அருகில்."
    },
    te: {
      name: "అగస్త్య తీర్థం మిర్చి బజ్జీ & సుస్లా స్టాల్",
      taluk: "బాదామి",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "కరకరలాడే మిర్చి బజ్జీ మరియు కారపు మరమరాల సుస్లా అల్పాహారం.",
      historical_significance: "బాదామి సరస్సు పరిసరాలలో పేరొందిన వీధి ఆహారం.",
      architecture: "సరస్సు ఒడ్డున ఉన్న స్టాల్.",
      transport: "అగస్త్య సరస్సు వద్ద."
    },
    mr: {
      name: "अगस्त्य तीर्थ मिरची भजी आणि सुसला स्टॉल",
      taluk: "बादामी",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "कुरकुरीत मिरची भजी आणि मुरमुऱ्यांचा चवदार सुसला, तलावाकाठचा प्रसिद्ध संध्याकाळचा नाश्ता.",
      historical_significance: "बागलकोट जिल्ह्यातील पिढ्यानपिढ्या चालत आलेला लोकप्रिय स्ट्रीट फूड.",
      architecture: "तलावाकाठची खुली गादी.",
      transport: "अगस्त्य तलावाच्या काठावर."
    },
    ml: {
      name: "അഗസ്ത്യ തീർത്ഥ മിർച്ചി ബജ്ജി & സുസ്ല സ്റ്റാൾ",
      taluk: "ബദാമി",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "മൊരിഞ്ഞ മുളക് ബജ്ജിയും പൊരി കൊണ്ടുള്ള സുസ്ലയും.",
      historical_significance: "തടാകക്കരയിലെ പ്രസിദ്ധമായ വൈകുന്നേര പലഹാരം.",
      architecture: "തുറന്ന ഭക്ഷണ സ്റ്റാൾ.",
      transport: "അഗസ്ത്യ തടാകക്കരയിൽ."
    }
  },

  dest_food_jalebi_badami: {
    en: {
      name: "Badami Royal Jalebi & Malai Rabdi Stall",
      taluk: "Badami",
      category: "Local Food & Khanavalis",
      description: "Crispy saffron-soaked spiral Jalebis deep-fried in pure ghee, served crowned with thick slow-simmered cardamom Malai Rabdi.",
      historical_significance: "Royal sweet legacy patronized during festival processions in old Vatapi.",
      architecture: "Heritage sweet shop operating with massive cast-iron kadai.",
      transport: "Main Temple Bazaar Street, Badami."
    },
    kn: {
      name: "ಬಾದಾಮಿ ರಾಯಲ್ ಜಿಲೇಬಿ ಮತ್ತು ಮಲೈ ರಬಡಿ ಅಂಗಡಿ",
      taluk: "ಬಾದಾಮಿ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ತುಪ್ಪದಲ್ಲಿ ಕರಿದ ಗರಿಗರಿಯಾದ ಕೇಸರಿ ಜಿಲೇಬಿ ಮತ್ತು ಘಮಘಮಿಸುವ ಮಲೈ ರಬಡಿಯ ಸಿಹಿ ಅನುಭವ.",
      historical_significance: "ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ರಥಬೀದಿಯಲ್ಲಿ ಸವಿಯುವ ಬಾದಾಮಿಯ ಜನಪ್ರಿಯ ಸಿಹಿ ತಿನಿಸು.",
      architecture: "ಹಳೆಯ ಬಜಾರಿನ ಹೆರಿಟೇಜ್ ಸಿಹಿ ಅಂಗಡಿ.",
      transport: "ಬಾದಾಮಿ ಮುಖ್ಯ ಮಾರುಕಟ್ಟೆ ರಸ್ತೆ."
    },
    hi: {
      name: "बादामी रॉयल जलेबी एवं मलाई रबड़ी केंद्र",
      taluk: "बादामी",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "शुद्ध घी में तली हुई कुरकुरी केसरिया जलेबी और गाढ़ी मलाईदार रबड़ी का लाजवाब संगम।",
      historical_significance: "त्योहारों पर बादामी के बाजार की प्रसिद्ध मिष्ठान परंपरा।",
      architecture: "पारंपरिक हलवाई की दुकान।",
      transport: "मुख्य मंदिर बाजार रोड, बादामी।"
    },
    ta: {
      name: "பாதாமி ராயல் ஜிலேபி மற்றும் மலாய் ரப்ரி",
      taluk: "பாதாமி",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "நெய்யில் பொரித்த குங்குமப்பூ ஜிலேபி மற்றும் கெட்டி மலாய் ரப்ரி இனிப்பு.",
      historical_significance: "பாதாமியின் புகழ்பெற்ற பாரம்பரிய இனிப்பு.",
      architecture: "பாரம்பரிய இனிப்பகம்.",
      transport: "பாதாமி பஜார் வீதி."
    },
    te: {
      name: "బాదామి రాయల్ జిలేబీ & మలై రబ్రీ స్టాల్",
      taluk: "బాదామి",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "నెయ్యితో వేయించిన జిలేబీ మరియు చిక్కని మలై రబ్రీ మిఠాయి.",
      historical_significance: "బాదామి బజారులోని చారిత్రక తీపి వంటకం.",
      architecture: "పురాతన మిఠాయి దుకాణం.",
      transport: "బాదామి మెయిన్ బజార్."
    },
    mr: {
      name: "बादामी रॉयल जिलेबी आणि मलाई रबडी स्टॉल",
      taluk: "बादामी",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "साजूक तुपात तळलेली कुरकुरीत केशर जिलेबी आणि घट्ट मलाईदार बासुंदी-रबडी.",
      historical_significance: "उत्सवांच्या काळात प्रसिद्ध असणारी बादामीची राजेशाही गोड परंपरा.",
      architecture: "पारंपरिक हलवाई दुकान.",
      transport: "मुख्य बाजारपेठ, बादामी."
    },
    ml: {
      name: "ബദാമി റോയൽ ജിലേബി & മലായ് റബ്ഡി",
      taluk: "ബദാമി",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "നെയ്യിൽ വറുത്ത ജിലേബിയും ക്രീം നിറഞ്ഞ മലായ് റബ്ഡിയും.",
      historical_significance: "പാരമ്പര്യ മധുരപലഹാരം.",
      architecture: "പരമ്പരാഗത സ്വീറ്റ് ഷോപ്പ്.",
      transport: "മെയിൻ ബസാർ, ബദാമി."
    }
  },

  dest_food_jolada_rotti_bgk: {
    en: {
      name: "Basaveshwara Khanavali — Authentic Jolada Rotti Uta",
      taluk: "Bagalkote",
      category: "Local Food & Khanavalis",
      description: "The gold standard of North Karnataka Lingayat Khanavali meals, serving unlimited hand-flattened Sorghum rottis with 3 curries, Junka, Ranjaka chilli paste, and butter.",
      historical_significance: "Iconic family Khanavali running for decades in old Bagalkote town.",
      architecture: "Traditional seated dining hall serving piping-hot food.",
      transport: "Station Road, Bagalkote Old Town."
    },
    kn: {
      name: "ಬಸವೇಶ್ವರ ಖಾನಾವಳಿ — ಅಪ್ಪಟ ಉತ್ತರ ಕರ್ನಾಟಕ ಜೋಳದ ರೊಟ್ಟಿ ಊಟ",
      taluk: "ಬಾಗಲಕೋಟೆ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಕೈಯಿಂದ ತಟ್ಟಿದ ಬಿಸಿ ಜೋಳದ ರೊಟ್ಟಿ, ಮೂರು ವಿಧದ ಪಲ್ಯಗಳು, ಜುಣಕ, ರಂಜಕ ಖಾರ ಮತ್ತು ಬೆಣ್ಣೆಯೊಂದಿಗೆ ಅಪರಿಮಿತ ಊಟ.",
      historical_significance: "ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ದಶಕಗಳಿಂದ ನಡೆದುಕೊಂಡು ಬಂದಿರುವ ಶ್ರೇಷ್ಠ ಖಾನಾವಳಿ ಪರಂಪರೆ.",
      architecture: "ಸಾಂಪ್ರದಾಯಿಕ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಭೋಜನಾಲಯ.",
      transport: "ಸ್ಟೇಷನ್ ರಸ್ತೆ, ಬಾಗಲಕೋಟೆ."
    },
    hi: {
      name: "बसवेश्वर खानावलि — प्रामाणिक जोलद रोट्टी भोजन",
      taluk: "बागलकोट",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "हाथ से बनी गरमा-गरम ज्वार की रोटियां, 3 प्रकार की सब्जियां, झुनका, रंजक चटनी और मक्खन से सजी असीमित उत्तर कर्नाटक थाली।",
      historical_significance: "बागलकोट की सबसे प्रतिष्ठित एवं प्रामाणिक लिंगायत खानावलि।",
      architecture: "पारंपरिक सात्विक भोजन कक्ष।",
      transport: "स्टेशन रोड, बागलकोट।"
    },
    ta: {
      name: "பசவேஸ்வரா கானாங்கி — பாரம்பரிய சோள ரொட்டி உணவு",
      taluk: "பாகல்கோட்டை",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "வரம்பற்ற சோள ரொட்டி, 3 வகையான காய்கறி பொரியல், ஜுன்கா மற்றும் வெண்ணெய் உணவு.",
      historical_significance: "பாகல்கோட்டையின் புகழ்பெற்ற சைவ கானாங்கி.",
      architecture: "பாரம்பரிய உணவு கூடம்.",
      transport: "ஸ்டேஷன் ரோடு, பாகல்கோட்டை."
    },
    te: {
      name: "బసవేశ్వర ఖానావళి — ప్రామాణిక జొన్న రొట్టె భోజనం",
      taluk: "బాగల్‌కోట్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "చేతితో చేసిన వేడి జొన్న రొట్టెలు, 3 రకాల కూరలు, జున్కా మరియు రంజక చట్నీతో అపరిమిత భోజనం.",
      historical_significance: "బాగల్‌కోట్‌లో దశాబ్దాలుగా ప్రసిద్ధి చెందిన శాఖాహార భోజనశాల.",
      architecture: "సాంప్రదాయ డైనింగ్ హాల్.",
      transport: "స్టేషన్ రోడ్, బాగల్‌కోట్."
    },
    mr: {
      name: "बसवेश्वर खानावळ — अस्सल उत्तर कर्नाटक ज्वारीची भाकरी",
      taluk: "बागलकोट",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "हाताने थापलेली गरम ज्वारीची भाकरी, ३ प्रकारच्या भाज्या, झुणका, ठेचा व लोण्यासह अमर्याद शाकाहारी जेवण.",
      historical_significance: "बागलकोटमधील सर्वात जुनी व मानाची लिंगायत खानावळ.",
      architecture: "पारंपरिक सात्विक बैठक व्यवस्था.",
      transport: "स्टेशन रोड, बागलकोट."
    },
    ml: {
      name: "ബസവേശ്വര ഖാനാവലി — തനത് ചോള റൊട്ടി ഊണ്",
      taluk: "ബാഗൽകോട്ട്",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "കൈകൊണ്ട് പരത്തിയ ചൂടുള്ള ചോള റൊട്ടിയും വിഭവസമൃദ്ധമായ വെജിറ്റേറിയൻ ഊണും.",
      historical_significance: "പഴക്കം ചെന്ന വിശ്വസ്ത ഭക്ഷണശാല.",
      architecture: "പരമ്പരാഗത ഊട്ടുശാല.",
      transport: "സ്റ്റേഷൻ റോഡ്, ബാഗൽകോട്ട്."
    }
  },

  dest_food_susla_bgk: {
    en: {
      name: "Sri Raghavendra Girmit, Susla & Mirchi Bajji Kendra",
      taluk: "Bagalkote",
      category: "Local Food & Khanavalis",
      description: "Bagalkote's top destination for crunchy Girmit (masala puffed rice tempered with roasted gram and onions) and sizzling hot Mirchi Bajjis.",
      historical_significance: "Hub of cultural evening gatherings for locals, scholars, and travellers.",
      architecture: "Lively local eatery with continuous fresh frying.",
      transport: "Vidyagiri, Bagalkote."
    },
    kn: {
      name: "ಶ್ರೀ ರಾಘವೇಂದ್ರ ಗಿರ್ಮಿಟ್, ಸುಸ್ಲಾ ಮತ್ತು ಮಿರ್ಚಿ ಬಜ್ಜಿ ಕೇಂದ್ರ",
      taluk: "ಬಾಗಲಕೋಟೆ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಗರಿಗರಿಯಾದ ಗಿರ್ಮಿಟ್, ಒಗ್ಗರಣೆ ಸುಸ್ಲಾ ಮತ್ತು ಬಿಸಿ ಬಿಸಿ ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿಗೆ ಬಾಗಲಕೋಟೆಯ ಜನಪ್ರಿಯ ತಾಣ.",
      historical_significance: "ವಿದ್ಯಾಗಿರಿ ಪ್ರದೇಶದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು ಹಾಗೂ ಪ್ರವಾಸಿಗರ ನೆಚ್ಚಿನ ಸಂಜೆ ತಿನಿಸು ಕೇಂದ್ರ.",
      architecture: "ಚುರುಕಾದ ಸ್ಥಳೀಯ ತಿನಿಸು ಕೇಂದ್ರ.",
      transport: "ವಿದ್ಯಾಗಿರಿ, ಬಾಗಲಕೋಟೆ."
    },
    hi: {
      name: "श्री राघवेंद्र गिरमिट, सुसला एवं मिर्ची भज्जी केंद्र",
      taluk: "बागलकोट",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "बागलकोट का मशहूर गिरमिट (मसालेदार मुरमुरा भेल) और गरमा-गरम तीखी मिर्ची भज्जी।",
      historical_significance: "विद्यागिरि क्षेत्र का प्रसिद्ध शाम का अड्डा।",
      architecture: "व्यस्त स्थानीय जलपान गृह।",
      transport: "विद्यागिरि, बागलकोट।"
    },
    ta: {
      name: "ஸ்ரீ ராகவேந்திரா கிர்மிட், சுஸ்லா & மிளகாய் பஜ்ஜி மையம்",
      taluk: "பாகல்கோட்டை",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "பாகல்கோட்டையின் காரசாரமான கிர்மிட் பொரி மற்றும் சுடச்சுட மிளகாய் பஜ்ஜி.",
      historical_significance: "மக்களின் விருப்பமான மாலை நேர சிற்றுண்டி கடை.",
      architecture: "உள்ளூர் சிற்றுண்டகம்.",
      transport: "வித்யாகிரி, பாகல்கோட்டை."
    },
    te: {
      name: "శ్రీ రాఘవేంద్ర గిర్మిట్, సుస్లా & మిర్చి బజ్జీ కేంద్రం",
      taluk: "బాగల్‌కోట్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "బాగల్‌కోట్ స్పెషల్ గిర్మిట్ మరమరాలు మరియు వేడి వేడి మిర్చి బజ్జీలు.",
      historical_significance: "విద్యాగిరిలోని ప్రసిద్ధ సాయంత్రపు తినుబండారాల కేంద్రం.",
      architecture: "స్థానిక చిరుతిండి దుకాణం.",
      transport: "విద్యాగిరి, బాగల్‌కోట్."
    },
    mr: {
      name: "श्री राघवेंद्र गिरमीट, सुसला आणि मिरची भजी केंद्र",
      taluk: "बागलकोट",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "बागलकोटचे प्रसिद्ध गिरमीट (मसालेदार चुरमुरे) आणि गरमागरम मिरची भजी.",
      historical_significance: "विद्यागिरी भागातील संध्याकाळचा सर्वात आवडता नाश्ता अड्डा.",
      architecture: "स्थानिक जलपानगृह.",
      transport: "विद्यागिरी, बागलकोट."
    },
    ml: {
      name: "ശ്രീ രാഘവേന്ദ്ര ഗിർമിറ്റ്, സുസ്ല & മിർച്ചി ബജ്ജി കേന്ദ്രം",
      taluk: "ബാഗൽകോട്ട്",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "രുചികരമായ ഗിർമിറ്റ് പൊരിയും എരിവുള്ള മിർച്ചി ബജ്ജിയും.",
      historical_significance: "വിദ്യാഗിരിയിലെ പ്രിയപ്പെട്ട പലഹാരക്കട.",
      architecture: "പ്രാദേശിക ഭക്ഷണശാല.",
      transport: "വിദ്യാഗിരി, ബാഗൽകോട്ട്."
    }
  },

  dest_food_fakirappa_bgk: {
    en: {
      name: "Fakirappa Halwai Sweets & Galgali Peda House",
      taluk: "Bagalkote",
      category: "Local Food & Khanavalis",
      description: "Legendary confectionery crafting authentic Galgali Pedas from slow-simmered buffalo milk mawa, alongside classic Belagavi Kunda and Motichoor Ladoos.",
      historical_significance: "Over 75 years of sweet craftsmanship in the heart of old Bagalkote.",
      architecture: "Traditional Indian Halwai shop with copper cauldrons.",
      transport: "Main Bazar, Bagalkote."
    },
    kn: {
      name: "ಫಕೀರಪ್ಪ ಹಲ್ವಾಯಿ ಸ್ವೀಟ್ಸ್ ಮತ್ತು ಗಲಗಲಿ ಪೇಡಾ ಹೌಸ್",
      taluk: "ಬಾಗಲಕೋಟೆ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಗಟ್ಟಿಯಾದ ಎಮ್ಮೆಯ ಹಾಲಿನ ಕೋವಾದಿಂದ ತಯಾರಿಸಿದ ಅಪ್ಪಟ ಗಲಗಲಿ ಪೇಡಾ ಮತ್ತು ಬೆಳಗಾವಿ ಕುಂದಾ ಸಿಹಿತಿನಿಸುಗಳಿಗೆ ಹೆಸರಾದ ಐತಿಹಾಸಿಕ ಅಂಗಡಿ.",
      historical_significance: "ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ೭೫ ವರ್ಷಗಳಿಂದ ನಡೆದುಕೊಂಡು ಬಂದಿರುವ ಪ್ರಸಿದ್ಧ ಸಿಹಿ ಮಳಿಗೆ.",
      architecture: "ಸಾಂಪ್ರದಾಯಿಕ ಹಲ್ವಾಯಿ ಶೈಲಿಯ ಸಿಹಿ ಅಂಗಡಿ.",
      transport: "ಮುಖ್ಯ ಬಜಾರ್, ಬಾಗಲಕೋಟೆ."
    },
    hi: {
      name: "फकीरप्पा हलवाई मिठाई एवं गलगली पेड़ा हाउस",
      taluk: "बागलकोट",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "शुद्ध खोये से निर्मित प्रसिद्ध गलगली पेड़ा और बेलगावी कुंदा का 75 वर्षों से विश्वसनीय प्रतिष्ठान।",
      historical_significance: "बागलकोट का ऐतिहासिक एवं प्रतिष्ठित मिष्ठान भंडार।",
      architecture: "पारंपरिक हलवाई की दुकान।",
      transport: "मेन बाजार, बागलकोट।"
    },
    ta: {
      name: "பகீரப்பா அல்வா ஸ்வீட்ஸ் & கல்கலி பேடா",
      taluk: "பாகல்கோட்டை",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "சுவையான பால்கோவா கல்கலி பேடா மற்றும் பாரம்பரிய இனிப்புகள்.",
      historical_significance: "75 ஆண்டுகள் பாரம்பரியம் கொண்ட புகழ்பெற்ற இனிப்பகம்.",
      architecture: "பாரம்பரிய இனிப்பு கடை.",
      transport: "மெயின் பஜார், பாகல்கோட்டை."
    },
    te: {
      name: "ఫకీరప్ప హల్వాయి స్వీట్స్ & గల్గలీ పేడా హౌస్",
      taluk: "బాగల్‌కోట్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "స్వచ్ఛమైన పాలకోవాతో చేసే గల్గలీ పేడా మరియు స్వీట్లకు ప్రసిద్ధి.",
      historical_significance: "75 ఏళ్ల చరిత్ర కలిగిన మిఠాయి దుకాణం.",
      architecture: "చారిత్రక మిఠాయి నిలయం.",
      transport: "మెయిన్ బజార్, బాగల్‌కోట్."
    },
    mr: {
      name: "फकिरप्पा हलवाई मिठाई व गलगली पेढा हाऊस",
      taluk: "बागलकोट",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "अस्सल म्हशीच्या खव्यापासून तयार केलेला खमंग गलगली पेढा आणि कुंदा.",
      historical_significance: "बागलकोटमधील ७५ वर्षे जुने विश्वासार्ह मिठाईचे दालन.",
      architecture: "पारंपरिक हलवाई दुकान.",
      transport: "मेन बाजार, बागलकोट."
    },
    ml: {
      name: "ഫക്കീരപ്പ ഹൽവായി സ്വീറ്റ്സ് & ഗൽഗലി പേഡ",
      taluk: "ബാഗൽകോട്ട്",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "തനത് ഗൽഗലി പേഡയും മധുരപലഹാരങ്ങളും.",
      historical_significance: "75 വർഷത്തെ പാരമ്പര്യമുള്ള സ്വീറ്റ് ഷോപ്പ്.",
      architecture: "പരമ്പരാഗത മധുരക്കട.",
      transport: "മെയിൻ ബസാർ, ബാഗൽകോട്ട്."
    }
  },

  dest_food_savaji_bgk: {
    en: {
      name: "Shri Renuka Savaji Non-Veg Hotel & Khanavali",
      taluk: "Bagalkote",
      category: "Local Food & Khanavalis",
      description: "Authentic fiery Savaji warrior community cuisine featuring slow-cooked Mutton Sukka, spicy Keema Balls, Edmi flatbreads, and aromatic mutton khara rassa.",
      historical_significance: "Catering the distinctive high-spice culinary tradition of the Somavanshi Sahasrarjun Kshatriya (Savaji) community.",
      architecture: "No-frills traditional non-vegetarian military mess.",
      transport: "Near Old Bus Stand, Bagalkote."
    },
    kn: {
      name: "ಶ್ರೀ ರೇಣುಕಾ ಸವಜಿ ಮಾಂಸಾಹಾರಿ ಹೋಟೆಲ್ ಮತ್ತು ಖಾನಾವಳಿ",
      taluk: "ಬಾಗಲಕೋಟೆ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಅಪ್ಪಟ ಸವಜಿ ಶೈಲಿಯ ಖಾರವಾದ ಮಟನ್ ಸುಕ್ಕಾ, ಕೀಮಾ ಉಂಡೆಗಳು, ಖಾರ ರಸ್ಸಾ ಮತ್ತು ಎಡ್ಮಿ ರೊಟ್ಟಿಗಳ ಊಟ.",
      historical_significance: "ಸೋಮವಂಶ ಸಹಸ್ರಾರ್ಜುನ ಕ್ಷತ್ರಿಯ (ಸವಜಿ) ಸಮುದಾಯದ ವಿಶಿಷ್ಟ ಖಾರ ಮಸಾಲೆ ಆಹಾರ ಸಂಸ್ಕೃತಿ.",
      architecture: "ಸಾಂಪ್ರದಾಯಿಕ ಸವಜಿ ಮಿಲಿಟರಿ ಮೆಸ್.",
      transport: "ಹಳೆಯ ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಬಾಗಲಕೋಟೆ."
    },
    hi: {
      name: "श्री रेणुका सावजी मांसाहारी होटल एवं खानावलि",
      taluk: "बागलकोट",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "प्रसिद्ध सावजी शैली का मसालेदार मटन सुक्का, कीमा बॉल्स, एडमी रोटी और तीखा मटन रस्सा।",
      historical_significance: "सावजी क्षत्रिय समुदाय की सदियों पुरानी तीव्र मसालेदार पाक परंपरा।",
      architecture: "पारंपरिक गैर-शाकाहारी सावजी मेस।",
      transport: "पुराने बस स्टैंड के पास, बागलकोट।"
    },
    ta: {
      name: "ஸ்ரீ ரேணுகா சவாஜி அசைவ ஹோட்டல் & கானாங்கி",
      taluk: "பாகல்கோட்டை",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "காரசாரமான சவாஜி மட்டன் சுக்கா, கீமா உருண்டைகள் மற்றும் எட்மி ரொட்டி.",
      historical_significance: "சவாஜி போர்வீரர் சமூகத்தின் பாரம்பரிய அசைவ உணவு.",
      architecture: "பாரம்பரிய அசைவ மெஸ்.",
      transport: "பழைய பேருந்து நிலையம் அருகில்."
    },
    te: {
      name: "శ్రీ రేణుక సావజీ నాన్-వెజ్ హోటల్ & ఖానావళి",
      taluk: "బాగల్‌కోట్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "స్పైసీ సావజీ మటన్ సుక్కా, కీమా బాల్స్, ఎడ్మి రొట్టెలు మరియు ఘాటైన రస్సా.",
      historical_significance: "సావజీ క్షత్రియ సంప్రదాయ ఘాటైన నాన్-వెజ్ వంటకాలు.",
      architecture: "సాంప్రదాయ మిలిటరీ మెస్.",
      transport: "పాత బస్టాండ్ సమీపంలో."
    },
    mr: {
      name: "श्री रेणुका सावजी मांसाहारी हॉटेल आणि खानावळ",
      taluk: "बागलकोट",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "अस्सल झणझणीत सावजी मटन सुक्का, खिमा गोळे, एडमी रोटी आणि काळा-तांबडा रस्सा.",
      historical_significance: "सोमवंशीय सहस्रार्जुन क्षत्रिय (सावजी) समाजाची वैशिष्ट्यपूर्ण मसालेदार पाककला.",
      architecture: "पारंपरिक नॉनव्हेज सावजी मेस.",
      transport: "जुना बस स्टँडजवळ, बागलकोट."
    },
    ml: {
      name: "ശ്രീ രേണുക സാവജി നോൺ-വെജ് ഹോട്ടൽ & ഖാനാവലി",
      taluk: "ബാഗൽകോട്ട്",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "നല്ല എരിവുള്ള സാവജി മട്ടൻ സുക്കയും കീമ ഉണ്ടകളും കറിയും.",
      historical_significance: "സാവജി സമുദായത്തിന്റെ തനത് സ്പൈസി പാചകരീതി.",
      architecture: "പരമ്പരാഗത മിലിറ്ററി മെസ്സ്.",
      transport: "പഴയ ബസ് സ്റ്റാൻഡിന് സമീപം."
    }
  },

  dest_food_jalebi_bgk: {
    en: {
      name: "Mahaveer Sweet Mart & Hot Jalebi Rabri Centre",
      taluk: "Bagalkote",
      category: "Local Food & Khanavalis",
      description: "Freshly prepared crunchy Jalebis dipped in aromatic cardamom syrup paired with decadent cold Rabdi, drawing crowds every morning and evening.",
      historical_significance: "Decades of high-repute milk and confectionary traditions in district headquarters.",
      architecture: "Classic town sweet center with live fryer counter.",
      transport: "Near Gandhi Circle, Bagalkote."
    },
    kn: {
      name: "ಮಹಾವೀರ ಸ್ವೀಟ್ ಮಾರ್ಟ್ & ಬಿಸಿ ಜಿಲೇಬಿ ರಬಡಿ ಕೇಂದ್ರ",
      taluk: "ಬಾಗಲಕೋಟೆ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಬಿಸಿ ಬಿಸಿ ಜಿಲೇಬಿ ಮತ್ತು ತಂಪಾದ ಗಟ್ಟಿ ರಬಡಿಯ ಅಧ್ಬುತ ಸವಿ, ಬಾಗಲಕೋಟೆ ನಗರದ ಜನಪ್ರಿಯ ಸಿಹಿ ಕೇಂದ್ರ.",
      historical_significance: "ಜಿಲ್ಲಾ ಕೇಂದ್ರದಲ್ಲಿ ದಶಕಗಳಿಂದ ನಡೆದುಬಂದ ಜನಪ್ರಿಯ ಸಿಹಿ ತಿಂಡಿ ಮಳಿಗೆ.",
      architecture: "ಸಾಂಪ್ರದಾಯಿಕ ಸಿಹಿ ಅಂಗಡಿ.",
      transport: "ಗಾಂಧಿ ವೃತ್ತದ ಬಳಿ, ಬಾಗಲಕೋಟೆ."
    },
    hi: {
      name: "महावीर स्वीट मार्ट एवं गरमा-गरम जलेबी रबड़ी केंद्र",
      taluk: "बागलकोट",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "गरमा-गरम रसीली जलेबी और ठंडी मलाईदार रबड़ी का लाजवाब मेल।",
      historical_significance: "बागलकोट शहर का प्रतिष्ठित मिष्ठान केंद्र।",
      architecture: "पारंपरिक स्वीट मार्ट।",
      transport: "गांधी सर्कल के पास, बागलकोट।"
    },
    ta: {
      name: "மகாவீர் ஸ்வீட் மார்ட் & சூடான ஜிலேபி ரப்ரி",
      taluk: "பாகல்கோட்டை",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "சுடச்சுட மொறுமொறுப்பான ஜிலேபி மற்றும் சுவையான ரப்ரி இனிப்பு.",
      historical_significance: "நகரத்தின் பிரபலமான இனிப்பகம்.",
      architecture: "பாரம்பரிய இனிப்பு கடை.",
      transport: "காந்தி வட்டம் அருகில்."
    },
    te: {
      name: "మహావీర్ స్వీట్ మార్ట్ & వేడి జిలేబీ రబ్రీ కేంద్రం",
      taluk: "బాగల్‌కోట్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "వేడి వేడి రసవంతమైన జిలేబీ మరియు చల్లని మలై రబ్రీ కలయిక.",
      historical_significance: "నగరంలోని ప్రసిద్ధ స్వీట్ దుకాణం.",
      architecture: "సాంప్రదాయ మిఠాయి కేంద్రం.",
      transport: "గాంధీ సర్కిల్ వద్ద."
    },
    mr: {
      name: "महावीर स्वीट मार्ट आणि गरमागरम जिलेबी रबडी केंद्र",
      taluk: "बागलकोट",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "गरमागरम रसरशीत जिलेबी आणि थंडगार मलाईदार रबडीचा आस्वाद.",
      historical_significance: "बागलकोट शहरातील प्रसिद्ध मिष्टान्न केंद्र.",
      architecture: "पारंपरिक मिठाई दुकान.",
      transport: "गांधी सर्कलजवळ, बागलकोट."
    },
    ml: {
      name: "മഹാവീർ സ്വീറ്റ് മാർട്ട് & ചൂടുള്ള ജിലേബി റബ്ഡി",
      taluk: "ബാഗൽകോട്ട്",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "ചൂടുള്ള ജിലേബിയും തണുത്ത മലായ് റബ്ഡിയും.",
      historical_significance: "നഗരത്തിലെ പ്രശസ്തമായ മധുരപലഹാരക്കട.",
      architecture: "സ്വീറ്റ് മാർട്ട്.",
      transport: "ഗാന്ധി സർക്കിളിന് സമീപം."
    }
  },

  dest_food_kardant_singi: {
    en: {
      name: "C.R. Singi & Sons — Original Amingad Kardant (Estd. 1907)",
      taluk: "Hunagund",
      category: "Local Food & Khanavalis",
      description: "The historical birthplace of India's world-famous GI-tagged Amingad Kardant. Made with pure edible gum (dink), organic jaggery, dry dates, copra, almonds, cashews, and pure ghee.",
      historical_significance: "Innovated in 1907 by Sri Chennappa Singi for wrestlers and travellers needing instant energy; patronized across India and abroad.",
      architecture: "115+ year old heritage shop maintaining century-old manual copper stirring vats.",
      transport: "NH-50 Main Bazar, Amingad (Hunagund Taluk)."
    },
    kn: {
      name: "ಸಿ.ಆರ್. ಸಿಂಗಿ & ಸನ್ಸ್ — ಮೂಲ ಅಮೀನಗಡ ಕರದಂಟು (ಸ್ಥಾಪನೆ ೧೯೦೭)",
      taluk: "ಹುನಗುಂದ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ವಿಶ್ವಪ್ರಸಿದ್ಧ ಅಮೀನಗಡ ಕರದಂಟಿನ ಮೂಲ ಜನಕರು. ಶುದ್ಧ ಅಂಟಿನ ಗೋಂದು, ಜವಾರಿ ಬೆಲ್ಲ, ಬಾದಾಮಿ, ಗೋಡಂಬಿ, ಒಣದ್ರಾಕ್ಷಿ ಮತ್ತು ತುಪ್ಪದಿಂದ ತಯಾರಿಸಲಾಗುವ ಪೌಷ್ಟಿಕ ಸಿಹಿತಿನಿಸು.",
      historical_significance: "೧೯೦೭ ರಲ್ಲಿ ಚೆನ್ನಪ್ಪ ಸಿಂಗಿಯವರಿಂದ ಕುಸ್ತಿ ಪಟುಗಳು ಮತ್ತು ಪ್ರಯಾಣಿಕರಿಗೆ ಶಕ್ತಿ ನೀಡಲು ಆವಿಷ್ಕಾರಗೊಂಡ ಜಿಐ ಮಾನ್ಯತೆಯ ಸಿಹಿತಿನಿಸು.",
      architecture: "೧೧೫ ವರ್ಷಗಳಿಗೂ ಹಳೆಯದಾದ ಪರಂಪರೆಯ ಹೆರಿಟೇಜ್ ಸಿಹಿ ಅಂಗಡಿ.",
      transport: "ಎನ್‌ಎಚ್-೫೦ ಮುಖ್ಯ ರಸ್ತೆ, ಅಮೀನಗಡ (ಹುನಗುಂದ ತಾಲೂಕು)."
    },
    hi: {
      name: "सी.आर. सिंगी एंड संस — मूल अमीनगढ़ करदंत (स्था. 1907)",
      taluk: "हुनगुंड",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "विश्वप्रसिद्ध जीआई-टैग अमीनगढ़ करदंत का मूल जन्मस्थान। शुद्ध खाने योग्य गोंद, देसी गुड़, काजू, बादाम और शुद्ध घी से निर्मित अत्यधिक पौष्टिक मिठाई।",
      historical_significance: "1907 में चेन्नप्पा सिंगी द्वारा पहलवानों एवं यात्रियों की ऊर्जा हेतु विकसित ऐतिहासिक मिष्ठान।",
      architecture: "115 वर्ष से अधिक प्राचीन ऐतिहासिक प्रतिष्ठान।",
      transport: "NH-50 मेन बाजार, अमीनगढ़ (हुनगुंड)।"
    },
    ta: {
      name: "சி.ஆர். சிங்கி & சன்ஸ் — அசல் அமின்காட் கர்தாந்த் (1907)",
      taluk: "ஹுனகுந்த்",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "உலகப் புகழ்பெற்ற அமின்காட் கர்தாந்த் இனிப்பின் பிறப்பிடம். உலர் பருப்புகள், மூலிகை கோந்து மற்றும் வெல்லத்தால் செய்யப்பட்டது.",
      historical_significance: "1907 இல் சென்னப்பா சிங்கியால் உருவாக்கப்பட்ட ஜிஐ முத்திரை பெற்ற பாரம்பரிய உணவு.",
      architecture: "115 ஆண்டுகள் பழமையான பாரம்பரிய கடை.",
      transport: "மெயின் பஜார், அமின்காட்."
    },
    te: {
      name: "సి.ఆర్. సింగీ & సన్స్ — అసలైన అమీన్‌గఢ్ కరదంట్ (1907)",
      taluk: "హునగుండ్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "ప్రపంచ ప్రసిద్ధ అమీన్‌గఢ్ కరదంట్ మూల స్థానం. స్వచ్ఛమైన గోధుమ జిగురు, జీడిపప్పు, బాదం, బెల్లం మరియు నెయ్యితో చేసిన బలవర్ధకమైన మిఠాయి.",
      historical_significance: "1907 లో చెన్నప్ప సింగీ ప్రారంభించిన ప్రఖ్యాత జిఐ ట్యాగ్ స్వీట్.",
      architecture: "115 ఏళ్ల నాటి చారిత్రక షాప్.",
      transport: "ఎన్‌హెచ్-50 మెయిన్ రోడ్, అమీన్‌గఢ్."
    },
    mr: {
      name: "सी.आर. शिंगी आणि सन्स — अस्सल अमिनगड करदंत (स्था. १९०७)",
      taluk: "हुनगुंद",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "भारतात व जगात प्रसिद्ध असलेल्या जीआय-टॅग अमिनगड करदंतचे मूळ जन्मस्थान. शुद्ध डिंक, सेंद्रिय गूळ, सुकामेवा व साजूक तुपातील पौष्टिक गोड पदार्थ.",
      historical_significance: "१९०७ मध्ये चेन्नप्पा शिंगी यांनी पैलवान व प्रवाशांसाठी तयार केलेली ऊर्जादायी मिठाई.",
      architecture: "११५ वर्षांपेक्षा जुने ऐतिहासिक मिठाईचे दुकान.",
      transport: "महामार्ग ५०, मेन बाजार, अमिनगड."
    },
    ml: {
      name: "സി.ആർ. സിംഗി & സൺസ് — അസൽ അമീൻഗഡ് കർദന്ത് (1907)",
      taluk: "ഹുനഗുണ്ട്",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "ലോകപ്രശസ്തമായ അമീൻഗഡ് കർദന്തിന്റെ ജന്മസ്ഥലം. നട്ട്സും ശർക്കരയും നെയ്യും ചേർത്ത അത്ഭുത മധുരം.",
      historical_significance: "1907 മുതൽ തുടരുന്ന വിഖ്യാത പാരമ്പര്യം.",
      architecture: "നൂറ്റാണ്ട് പഴക്കമുള്ള കട.",
      transport: "മെയിൻ ബസാർ, അമീൻഗഡ്."
    }
  },

  dest_food_kardant_kamat: {
    en: {
      name: "C.S. Kamat Amingad Kardant & Sweets",
      taluk: "Hunagund",
      category: "Local Food & Khanavalis",
      description: "Renowned traditional sweet-makers of Amingad famous for softer-texture organic Kardant, pistachio dry-fruit chikki, and pure ghee sweets.",
      historical_significance: "Trusted purveyors of authentic Amingad confectionery for over 6 decades.",
      architecture: "Modernized confectionery showroom with live packaging.",
      transport: "Highway Junction, Amingad."
    },
    kn: {
      name: "ಸಿ.ಎಸ್. ಕಾಮತ್ ಅಮೀನಗಡ ಕರದಂಟು ಮತ್ತು ಸಿಹಿತಿನಿಸುಗಳು",
      taluk: "ಹುನಗುಂದ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಮೃದುವಾದ ಸಾವಯವ ಕರದಂಟು, ಪಿಸ್ತಾ ಡ್ರೈಫ್ರೂಟ್ ಚಿಕ್ಕಿ ಮತ್ತು ಶುದ್ಧ ತುಪ್ಪದ ಸಿಹಿತಿನಿಸುಗಳಿಗೆ ಹೆಸರಾದ ಅಮೀನಗಡದ ಪ್ರಮುಖ ಮಳಿಗೆ.",
      historical_significance: "೬ ದಶಕಗಳಿಂದ ಅಧಿಕೃತ ಅಮೀನಗಡ ಸಿಹಿ ಪರಂಪರೆಯನ್ನು ಉಳಿಸಿಕೊಂಡು ಬಂದಿರುವ ಸಂಸ್ಥೆ.",
      architecture: "ಸುಸಜ್ಜಿತ ಹೆದ್ದಾರಿ ಸಿಹಿ ಮಳಿಗೆ.",
      transport: "ಹೈವೇ ಜಂಕ್ಷನ್, ಅಮೀನಗಡ."
    },
    hi: {
      name: "सी.एस. कामत अमीनगढ़ करदंत एवं मिष्ठान",
      taluk: "हुनगुंड",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "मुलायम ऑर्गेनिक करदंत, ड्राईफ्रूट चिक्की और शुद्ध घी की मिठाइयों के लिए प्रसिद्ध अमीनगढ़ का प्रमुख मिष्ठान भंडार।",
      historical_significance: "6 दशकों से शुद्धता और प्रामाणिक स्वाद की पहचान।",
      architecture: "आधुनिक सुविधाओं युक्त शोरूम।",
      transport: "हाईवे जंक्शन, अमीनगढ़।"
    },
    ta: {
      name: "சி.எஸ். காமத் அமின்காட் கர்தாந்த் & இனிப்புகள்",
      taluk: "ஹுனகுந்த்",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "மென்மையான இயற்கை கர்தாந்த் மற்றும் உலர் பழ இனிப்புகள்.",
      historical_significance: "60 ஆண்டுகளுக்கும் மேலாக புகழ்பெற்ற பாரம்பரிய இனிப்பகம்.",
      architecture: "நவீன இனிப்பகம்.",
      transport: "நெடுஞ்சாலை சந்திப்பு, அமின்காட்."
    },
    te: {
      name: "సి.ఎస్. కామత్ అమీన్‌గఢ్ కరదంట్ & స్వీట్స్",
      taluk: "హునగుండ్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "మృదువైన సేంద్రీయ కరదంట్, డ్రైఫ్రూట్ చిక్కీలకు ప్రసిద్ధి చెందిన స్వీట్ సెంటర్.",
      historical_significance: "60 సంవత్సరాల నమ్మకమైన రుచి మరియు నాణ్యత.",
      architecture: "హైవే షోరూమ్.",
      transport: "హైవే జంక్షన్, అమీన్‌గఢ్."
    },
    mr: {
      name: "सी.एस. कामत अमिनगड करदंत व मिठाई",
      taluk: "हुनगुंद",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "मऊ सेंद्रिय करदंत, ड्रायफ्रूट चिक्की व साजूक तुपातील रुचकर मिठाया.",
      historical_significance: "६ दशकांपासून अमिनगडच्या अस्सल चवीचे मानकरी.",
      architecture: "सुसज्ज मिठाई दालन.",
      transport: "हायवे जंक्शन, अमिनगड."
    },
    ml: {
      name: "സി.എസ്. കാമത്ത് അമീൻഗഡ് കർദന്ത് & സ്വീറ്റ്സ്",
      taluk: "ഹുനഗുണ്ട്",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "പ്രത്യേക തരം സോഫ്റ്റ് കർദന്തും ഡ്രൈഫ്രൂട്ട് സ്വീറ്റ്സും.",
      historical_significance: "ആറ് പതിറ്റാണ്ടിന്റെ ഗുണമേന്മ.",
      architecture: "ആധുനിക സ്വീറ്റ് ഷോറൂം.",
      transport: "ഹൈവേ ജംഗ്ഷൻ, അമീൻഗഡ്."
    }
  },

  dest_food_holige_ilkal: {
    en: {
      name: "Mahalakshmi Shenga & Bella Holige Mane",
      taluk: "Ilkal",
      category: "Local Food & Khanavalis",
      description: "Artisanal bakery crafting gossamer-thin roasted peanut (Shenga) and jaggery stuffed flatbreads (Holige) served drenched in warm milk and cardamom ghee.",
      historical_significance: "Traditional festive sweet bread intrinsic to North Karnataka celebratory culture.",
      architecture: "Homely artisanal production unit where expert women roll thin pastry sheets.",
      transport: "Weavers Colony, Ilkal."
    },
    kn: {
      name: "ಮಹಾಲಕ್ಷ್ಮಿ ಶೇಂಗಾ & ಬೆಲ್ಲದ ಹೋಳಿಗೆ ಮನೆ",
      taluk: "ಇಳಕಲ್",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಬಿಸಿ ಬಿಸಿ ಶೇಂಗಾ ಹೋಳಿಗೆ, ಬೆಲ್ಲದ ಹೂರಣದ ಹೋಳಿಗೆ, ತುಪ್ಪ ಮತ್ತು ಬಿಸಿ ಹಾಲಿನೊಂದಿಗೆ ಸವಿಯುವ ಅಪ್ಪಟ ಉತ್ತರ ಕರ್ನಾಟಕದ ಹಬ್ಬದ ಸಿಹಿ.",
      historical_significance: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಮನೆ-ಮನೆಗಳಲ್ಲಿ ಹಬ್ಬ-ಹರಿದಿನಗಳಿಗೆ ಸಿದ್ಧಪಡಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಸಿಹಿ ತಿನಿಸು.",
      architecture: "ಮನೆಯಂಗಳದ ಸಾಂಪ್ರದಾಯಿಕ ಹೋಳಿಗೆ ತಯಾರಿಕಾ ಕೇಂದ್ರ.",
      transport: "ನೇಕಾರರ ಕಾಲೋನಿ, ಇಳಕಲ್."
    },
    hi: {
      name: "महालक्ष्मी शेंगा (मूंगफली) एवं गुड़ होलिगे गृह",
      taluk: "इलकल",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "मूंगफली और गुड़ के मिश्रण से बनी अत्यंत पतली मीठी रोटी (होलिगे/पूरनपोली), जिसे गरमा-गरम दूध और घी के साथ परोसा जाता है।",
      historical_significance: "उत्तर कर्नाटक का पारंपरिक उत्सव मिष्ठान।",
      architecture: "पारंपरिक पारिवारिक होलिगे निर्माण केंद्र।",
      transport: "वीवर्स कॉलोनी, इलकल।"
    },
    ta: {
      name: "மகாலட்சுமி நிலக்கடலை & வெல்லம் ஹோலிகே",
      taluk: "இளக்கல்",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "நிலக்கடலை மற்றும் வெல்ல பூரணம் கொண்ட மெல்லிய ஹோலிகே (போளி) இனிப்பு.",
      historical_significance: "கர்நாடக பண்டிகைகளில் செய்யப்படும் பிரதான பாரம்பரிய உணவு.",
      architecture: "பாரம்பரிய தயாரிப்பகம்.",
      transport: "நெசவாளர் குடியிருப்பு, இளக்கல்."
    },
    te: {
      name: "మహాలక్ష్మి వేరుశెనగ & బెల్లం బొబ్బట్లు (హోళిగె)",
      taluk: "ఇల్కల్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "పల్లీలు మరియు బెల్లం పూర్ణంతో చేసిన అత్యంత రుచికరమైన సాంప్రదాయ బొబ్బట్లు (హోళిగె).",
      historical_significance: "పండుగల వేళ చేసుకొనే కర్ణాటక ప్రాచీన మిఠాయి.",
      architecture: "కుటీర పరిశ్రమ శైలి తయారీ కేంద్రం.",
      transport: "వీవర్స్ కాలనీ, ఇల్కల్."
    },
    mr: {
      name: "महालक्ष्मी शेंगदाणा व गूळ पोळी केंद्र",
      taluk: "इळकल",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "शेंगदाणा आणि गुळाचे सारण भरलेली तलम शेंगदाणा पोळी, साजूक तूप आणि दुधासह अप्रतिम मेजवानी.",
      historical_significance: "उत्तर कर्नाटकातील सण-उत्सवांची पारंपारिक गोड पुरणपोळी.",
      architecture: "घरगुती पारंपरिक पोळी केंद्र.",
      transport: "विणकर वसाहत, इळकल."
    },
    ml: {
      name: "മഹാലക്ഷ്മി നിലക്കടല & ശർക്കര ഹോളിഗെ",
      taluk: "ഇൽകൽ",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "നിലക്കടലയും ശർക്കരയും ചേർത്ത നേർത്ത ഹോളിഗെ മധുര റൊട്ടി.",
      historical_significance: "ഉത്സവങ്ങളിലെ പരമ്പരാഗത വിഭവം.",
      architecture: "ഹോം മെയ്ഡ് യൂണിറ്റ്.",
      transport: "വീവേഴ്സ് കോളനി, ഇൽകൽ."
    }
  },

  dest_food_holige_guledgudd: {
    en: {
      name: "Guledagudda Shri Annapoorna Shenga Holige & Chutney Kendra",
      taluk: "Guledagudda",
      category: "Local Food & Khanavalis",
      description: "Renowned local specialty house preparing wafer-crisp dried Shenga Holige (shelf life over 3 months) alongside dry garlic chutney powders.",
      historical_significance: "Developed by weavers who travelled long distances carrying non-perishable nutritious food packs.",
      architecture: "Rustic artisan kitchen in the historic Khana handloom cluster.",
      transport: "Main Road, Guledagudda."
    },
    kn: {
      name: "ಗುಳೇದಗುಡ್ಡ ಶ್ರೀ ಅನ್ನಪೂರ್ಣ ಶೇಂಗಾ ಹೋಳಿಗೆ ಮತ್ತು ಚಟ್ನಿಪುಡಿ ಕೇಂದ್ರ",
      taluk: "ಗುಳೇದಗುಡ್ಡ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ತಿಂಗಳುಗಟ್ಟಲೆ ಕೆಡದ ಗರಿಗರಿ ಒಣ ಶೇಂಗಾ ಹೋಳಿಗೆ, ಅಗಸೆ ಚಟ್ನಿಪುಡಿ ಮತ್ತು ಕೆಂಪು ಖಾರದ ಪುಡಿಗೆ ಗುಳೇದಗುಡ್ಡದ ಖ್ಯಾತ ಕೇಂದ್ರ.",
      historical_significance: "ದೂರದ ಊರುಗಳಿಗೆ ವ್ಯಾಪಾರಕ್ಕೆ ಹೋಗುತ್ತಿದ್ದ ನೇಕಾರರು ಕೊಂಡೊಯ್ಯುತ್ತಿದ್ದ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ.",
      architecture: "ಪಾರಂಪರಿಕ ನೇಕಾರರ ಪೇಟೆಯ ಆಹಾರ ಕೇಂದ್ರ.",
      transport: "ಮುಖ್ಯ ರಸ್ತೆ, ಗುಳೇದಗುಡ್ಡ."
    },
    hi: {
      name: "गुलेदगुड्डा श्री अन्नपूर्णा शेंगा होलिगे एवं चटनी केंद्र",
      taluk: "गुलेदगुड्डा",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "लंबे समय तक ताज़ा रहने वाली कुरकुरी सूखी शेंगा होलिगे और तीखी लहसुन-अलसी चटनी के लिए प्रसिद्ध केंद्र।",
      historical_significance: "विणकर व्यापारियों की दूरगामी यात्राओं का पौष्टिक सहारा।",
      architecture: "हथकरघा क्लस्टर में स्थित पारंपरिक रसोई।",
      transport: "मेन रोड, गुलेदगुड्डा।"
    },
    ta: {
      name: "குலேதகுட்டா ஸ்ரீ அன்னபூர்ணா ஹோலிகே & சட்னி மையம்",
      taluk: "குலேதகுட்டா",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "நீண்ட நாட்கள் கெடாத உலர் நிலக்கடலை ஹோலிகே மற்றும் சட்னி பொடிகள்.",
      historical_significance: "நெசவாளர் சமூகத்தின் பாரம்பரிய உணவு தயாரிப்பு.",
      architecture: "பாரம்பரிய தயாரிப்பு கூடம்.",
      transport: "மெயின் ரோடு, குலேதகுட்டா."
    },
    te: {
      name: "గులేదగుడ్డ శ్రీ అన్నపూర్ణ శెనగ హోళిగె & చట్నీ కేంద్రం",
      taluk: "గులేదగుడ్డ",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "ఎక్కువ కాలం నిల్వ ఉండే డ్రై శెనగ హోళిగెలు మరియు కారపు చట్నీ పొడులు.",
      historical_significance: "నేత కార్మికుల ప్రాచీన పౌష్టిక ఆహార నిలయం.",
      architecture: "గ్రామీణ తయారీ కేంద్రం.",
      transport: "మెయిన్ రోడ్, గులేదగుడ్డ."
    },
    mr: {
      name: "गुळेदगुड्डा श्री अन्नपूर्णा शेंगदाणा पोळी व चटणी केंद्र",
      taluk: "गुळेदगुड्डा",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "अनेक महिने टिकणारी कुरकुरीत सुकी शेंगदाणा पोळी, जवस चटणी व लसूण चटणी.",
      historical_significance: "दूरवर प्रवास करणाऱ्या विणकर बंधूंचे पारंपारिक शिदोरी खाद्य.",
      architecture: "हातमाग क्लस्टरमधील पारंपरिक केंद्र.",
      transport: "मेन रोड, गुळेदगुड्डा."
    },
    ml: {
      name: "ഗുലേദഗുഡ്ഡ ശ്രീ അന്നപൂർണ്ണ ഹോളിഗെ & ചട്ണി കേന്ദ്രം",
      taluk: "ഗുലേദഗുഡ്ഡ",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "ഏറെ നാൾ കേടുകൂടാതെയിരിക്കുന്ന ഡ്രൈ ഹോളിഗെയും ചട്ണി പൊടികളും.",
      historical_significance: "നെയ്ത്തുകാരുടെ പരമ്പരാഗത യാത്ര ഭക്ഷണം.",
      architecture: "പരമ്പരാഗത അടുക്കള.",
      transport: "മെയിൻ റോഡ്, ഗുലേദഗുഡ്ഡ."
    }
  },

  dest_food_jhunka_mudhol: {
    en: {
      name: "Mudhol Famous Jhunka Bhakar & Shenga Chutney Mane",
      taluk: "Mudhol",
      category: "Local Food & Khanavalis",
      description: "Rustic country meal featuring spiced gram-flour porridge (Jhunka) cooked with onions, mustard seeds, and coriander, served with thick bajra/jowar bhakri and roasted peanut garlic chutney.",
      historical_significance: "Royal cavalry and peasant field sustenance during the Ghorpade Maratha rule in Mudhol.",
      architecture: "Traditional stone veranda village eatery.",
      transport: "Near Mudhol Fort Gate, Mudhol."
    },
    kn: {
      name: "ಮುಧೋಳ ಫೇಮಸ್ ಜುಣಕ ಭಾಕ್ರಿ ಮತ್ತು ಶೇಂಗಾ ಚಟ್ನಿ ಮನೆ",
      taluk: "ಮುಧೋಳ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಬಿಸಿ ಬಿಸಿ ಜುಣಕ, ಗಟ್ಟಿಯಾದ ರೊಟ್ಟಿ/ಭಾಕ್ರಿ, ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ ಖಾರ ಮತ್ತು ಶೇಂಗಾ ಚಟ್ನಿಯೊಂದಿಗೆ ಗ್ರಾಮೀಣ ಶೈಲಿಯ ಸ್ವಾದಿಷ್ಟ ಊಟ.",
      historical_significance: "ಘೋರ್ಪಡೆ ಮರಾಠಾ ಆಳ್ವಿಕೆಯ ಕಾಲದಿಂದಲೂ ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಸೈನಿಕರು ಮತ್ತು ರೈತರ ಪೌಷ್ಟಿಕ ಆಹಾರ.",
      architecture: "ಕಲ್ಲಿನ ಜಗಲಿಯ ಸಾಂಪ್ರದಾಯಿಕ ಗ್ರಾಮೀಣ ಹೋಟೆಲ್.",
      transport: "ಮುಧೋಳ ಕೋಟೆ ದ್ವಾರದ ಬಳಿ."
    },
    hi: {
      name: "मुधोल प्रसिद्ध झुनका भाकर एवं शेंगा चटनी गृह",
      taluk: "मुधोल",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "बेसन से निर्मित पारंपरिक तीखा झुनका, मोटी ज्वार/बाजरा भाकरी और भुनी मूंगफली-लहसुन की चटनी।",
      historical_significance: "घोरपड़े मराठा काल के सैनिकों एवं किसानों का पारंपरिक बलवर्धक भोजन।",
      architecture: "ग्रामीण शैली की पारंपरिक खानावळ।",
      transport: "मुधोल किला गेट के पास।"
    },
    ta: {
      name: "முதோல் புகழ் பெற்ற ஜுன்கா பாக்கரி & சட்னி",
      taluk: "முதோல்",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "சுவையான கடலை மாவு ஜுன்கா, சோள பாக்கரி மற்றும் நிலக்கடலை சட்னி உணவு.",
      historical_significance: "மராட்டியர் ஆட்சிக் கால பாரம்பரிய உணவு.",
      architecture: "கிராமிய உணவு விடுதி.",
      transport: "முதோல் கோட்டை அருகில்."
    },
    te: {
      name: "ముధోల్ ప్రసిద్ధ జున్కా భాకర్ & శెనగ చట్నీ నిలయం",
      taluk: "ముధోల్",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "శనగపిండితో చేసే ఘుమఘుమలాడే జున్కా, జొన్న రొట్టె మరియు వేరుశెనగ చట్నీ.",
      historical_significance: "ఘోర్పడే మరాఠా కాలపు సైనిక మరియు రైతుల బలమైన ఆహారం.",
      architecture: "గ్రామీణ శైలి భోజనశాల.",
      transport: "ముధోల్ కోట గేటు వద్ద."
    },
    mr: {
      name: "मुधोळ प्रसिद्ध झुणका भाकर आणि शेंगदाणा चटणी",
      taluk: "मुधोळ",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "चमचमीत पिठलं-झुणका, खरपूस बाजरी-ज्वारीची भाकरी आणि खमंग शेंगदाणा-लसूण चटणी.",
      historical_significance: "घोरपडे मराठा रियासतीच्या काळातील वीर सैनिकांचे व शेतकऱ्यांचे मुख्य अन्न.",
      architecture: "दगडी ओट्यावरील पारंपारिक खानावळ.",
      transport: "मुधोळ किल्ला दरवाजाजवळ."
    },
    ml: {
      name: "മുധോൾ ഫേമസ് ജുൻക ഭാക്കർ & നിലക്കടല ചട്ണി",
      taluk: "മുധോൾ",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "പരമ്പരാഗത ജുൻകയും കട്ടിയുള്ള ബാക്കറിയും നിലക്കടല ചട്ണിയും.",
      historical_significance: "ചരിത്രപ്രസിദ്ധമായ നാടൻ ഭക്ഷണം.",
      architecture: "ഗ്രാമീണ ഭക്ഷണശാല.",
      transport: "മുധോൾ കോട്ടയ്ക്ക് സമീപം."
    }
  },

  dest_food_peda_jamkhandi: {
    en: {
      name: "Ramtirth Ksheera Peda & Basundi Sweets",
      taluk: "Jamkhandi",
      category: "Local Food & Khanavalis",
      description: "Royal dairy confectionery preparing rich, caramelized milk fudge Pedas using traditional slow-condensed milk from Krishna river valley buffaloes.",
      historical_significance: "Patronized by the Patwardhan Maharajas of Jamkhandi state as royal durbari prasad.",
      architecture: "Palatial-era confectionery near the scenic Ramtirth temples.",
      transport: "Ramtirth Temple Road, Jamkhandi."
    },
    kn: {
      name: "ರಾಮತೀರ್ಥ ಕ್ಷೀರ ಪೇಡಾ ಮತ್ತು ಬಾಸುಂದಿ ಸ್ವೀಟ್ಸ್",
      taluk: "ಜಮಖಂಡಿ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಕೃಷ್ಣಾ ಕಣಿವೆಯ ಗಟ್ಟಿ ಹಾಲಿನಿಂದ ಮಂದವಾಗಿ ಕಾಯಿಸಿ ತಯಾರಿಸುವ ಅಪ್ಪಟ ಕ್ಷೀರ ಪೇಡಾ ಮತ್ತು ರಾಯಲ್ ಬಾಸುಂದಿ.",
      historical_significance: "ಜಮಖಂಡಿ ಸಂಸ್ಥಾನದ ಪಟವರ್ಧನ್ ಮಹಾರಾಜರ ಆಸ್ಥಾನದಲ್ಲಿ ಪ್ರಸಾದವಾಗಿ ಗೌರವಿಸಲ್ಪಟ್ಟ ಸಿಹಿತಿನಿಸು.",
      architecture: "ರಾಮತೀರ್ಥ ದೇವಾಲಯ ಸಮೀಪದ ಪರಂಪರೆಯ ಸಿಹಿ ಅಂಗಡಿ.",
      transport: "ರಾಮತೀರ್ಥ ರಸ್ತೆ, ಜಮಖಂಡಿ."
    },
    hi: {
      name: "रामतीर्थ क्षीर पेड़ा एवं बासुंदी मिष्ठान",
      taluk: "जमखंडी",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "कृष्णा घाटी के शुद्ध दूध से धीमी आंच पर पकाकर निर्मित लाजवाब क्षीर पेड़ा एवं शाही बासुंदी।",
      historical_significance: "जमखंडी रियासत के पटवर्धन राजाओं द्वारा संरक्षित ऐतिहासिक शाही मिष्ठान।",
      architecture: "रामतीर्थ मंदिर के समीप स्थित प्रतिष्ठित मिष्ठान भंडार।",
      transport: "रामतीर्थ रोड, जमखंडी।"
    },
    ta: {
      name: "ராமதீர்த்தம் பால் பேடா மற்றும் பாசுந்தி",
      taluk: "ஜம்கண்டி",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "சுத்தமான பாலில் மெதுவாக காய்ச்சி செய்யப்படும் சுவையான பால் பேடா மற்றும் பாசுந்தி.",
      historical_significance: "ஜம்கண்டி சமஸ்தான மன்னர்களின் அரச இனிப்பு.",
      architecture: "பாரம்பரிய இனிப்பகம்.",
      transport: "ராமதீர்த்தம் ரோடு, ஜம்கண்டி."
    },
    te: {
      name: "రామతీర్థ క్షీర పేడా & బాసుంది స్వీట్స్",
      taluk: "జంఖండి",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "కృష్ణా నదీ లోయలోని స్వచ్ఛమైన పాలతో చేసే రుచికరమైన క్షీర పేడా మరియు బాసుంది.",
      historical_significance: "జంఖండి పట్వర్ధన్ రాజుల కాలం నాటి రాచరిక మిఠాయి.",
      architecture: "చారిత్రక స్వీట్ సెంటర్.",
      transport: "రామతీర్థ రోడ్, జంఖండి."
    },
    mr: {
      name: "रामतीर्थ खवा पेढा आणि बासुंदी मिठाई",
      taluk: "जमखंडी",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "कृष्णा खोऱ्यातील अस्सल दुधाचा मंद आचेवर आटवलेला खमंग पेढा आणि शाही बासुंदी.",
      historical_significance: "जमखंडी संस्थानातील पटवर्धन महाराजांच्या दरबारात मानाचे स्थान असलेला गोड पदार्थ.",
      architecture: "रामतीर्थ परिसरातील पारंपरिक मिठाई दुकान.",
      transport: "रामतीर्थ रोड, जमखंडी."
    },
    ml: {
      name: "രാമതീർത്ഥ പാൽ പേഡ & ബാസുന്ദി സ്വീറ്റ്സ്",
      taluk: "ജംഖണ്ഡി",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "ശുദ്ധമായ പാൽ കുറുക്കി ഉണ്ടാക്കുന്ന രുചികരമായ പേഡയും ബാസുന്ദിയും.",
      historical_significance: "രാജഭരണ കാലത്തെ പാരമ്പര്യ മധുരം.",
      architecture: "പാരമ്പര്യ സ്വീറ്റ് ഷോപ്പ്.",
      transport: "രാമതീർത്ഥ റോഡ്, ജംഖണ്ഡി."
    }
  },

  dest_food_galgali_bilagi: {
    en: {
      name: "Original Galgali Peda Heritage Dairy & Sweet Stall",
      taluk: "Bilagi",
      category: "Local Food & Khanavalis",
      description: "The authentic ancestral source of the iconic brown Galgali Peda, crafted exclusively in Galgali village using unpasteurized buffalo milk reduced over acacia firewood.",
      historical_significance: "Over 130 years of uninterrupted single-village artisanal sweet heritage on the Krishna riverbank.",
      architecture: "Village dairy sweet store with traditional wood-fired chulhas.",
      transport: "Galgali Village Main Chowk, Bilagi Taluk."
    },
    kn: {
      name: "ಮೂಲ ಗಲಗಲಿ ಪೇಡಾ ಹೆರಿಟೇಜ್ ಡೇರಿ ಮತ್ತು ಸ್ವೀಟ್ ಸ್ಟಾಲ್",
      taluk: "ಬೀಳಗಿ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ಕೃಷ್ಣಾ ನದಿತೀರದ ಗಲಗಲಿ ಗ್ರಾಮದಲ್ಲಿ ಕಟ್ಟಿಗೆಯ ಒಲೆಯಲ್ಲಿ ಹಾಲನ್ನು ಕಾಯಿಸಿ ತಯಾರಿಸುವ ವಿಶ್ವಖ್ಯಾತಿಯ ಬ್ರೌನ್ ಗಲಗಲಿ ಪೇಡಾ.",
      historical_significance: "೧೩೦ ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲದಿಂದ ತನ್ನ ಮೂಲ ರುಚಿ ಮತ್ತು ಗುಣಮಟ್ಟವನ್ನು ಉಳಿಸಿಕೊಂಡಿರುವ ಪಾರಂಪರಿಕ ಸಿಹಿ.",
      architecture: "ಕಟ್ಟಿಗೆ ಒಲೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಗ್ರಾಮೀಣ ಡೇರಿ ಮಳಿಗೆ.",
      transport: "ಗಲಗಲಿ ಗ್ರಾಮ, ಬೀಳಗಿ ತಾಲೂಕು."
    },
    hi: {
      name: "ओरिजिनल गलगली पेड़ा हेरिटेज डेयरी एवं स्वीट स्टॉल",
      taluk: "बीलगी",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "गलगली गांव का विश्वविख्यात गहरा भूरा पेड़ा, जिसे लकड़ी की धीमी आंच पर दूध को घंटों काढ़कर शुद्ध रूप से बनाया जाता है।",
      historical_significance: "130 से अधिक वर्षों की अविच्छिन्न पारंपरिक मिष्ठान धरोहर।",
      architecture: "पारंपरिक चूल्हे वाली ग्रामीण डेयरी दुकान।",
      transport: "गलगली गांव मुख्य चौक, बीलगी।"
    },
    ta: {
      name: "அசல் கல்கலி பேடா பாரம்பரிய இனிப்பகம்",
      taluk: "பீலகி",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "கல்கலி கிராமத்தின் புகழ்பெற்ற பழுப்பு நிற பால்கோவா பேடா.",
      historical_significance: "130 ஆண்டுகள் பழமையான கிராமிய இனிப்பு பாரம்பரியம்.",
      architecture: "பாரம்பரிய பால் பண்ணை கடை.",
      transport: "கல்கலி கிராமம், பீலகி."
    },
    te: {
      name: "ఒరిజినల్ గల్గలీ పేడా హెరిటేజ్ డైరీ & స్వీట్స్",
      taluk: "బీళగి",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "గల్గలీ గ్రామంలో కట్టెల పొయ్యిపై పాలను మరిగించి చేసే ప్రసిద్ధ బ్రౌన్ గల్గలీ పేడా.",
      historical_significance: "130 ఏళ్లకు పైగా చరిత్ర ఉన్న అరుదైన సాంప్రదాయ తీపి వంటకం.",
      architecture: "గ్రామీణ డెయిరీ స్టాల్.",
      transport: "గల్గలీ గ్రామం, బీళగి తాలూకా."
    },
    mr: {
      name: "ओरिजिनल गलगली पेढा हेरिटेज डेअरी व स्वीट स्टॉल",
      taluk: "बिलगी",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "गलगली गावातील लाकडाच्या चुलीवर दूध आटवून तयार केलेला जगप्रसिद्ध तांबूस-तपकिरी रंगाचा अस्सल खवा पेढा.",
      historical_significance: "१३० वर्षांची समृद्ध व अखंड परंपरा असलेले अस्सल ग्रामीण मिष्ठान्न.",
      architecture: "पारंपरिक चुलीवर तयार होणारे डेअरी दालन.",
      transport: "गलगली गाव चौक, बिलगी तालुका."
    },
    ml: {
      name: "ഒറിജിനൽ ഗൽഗലി പേഡ ഹെറിറ്റേജ് ഡയറി & സ്വീറ്റ്സ്",
      taluk: "ബിലഗി",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "വിറകടുപ്പിൽ പാൽ കുറുക്കി ഉണ്ടാക്കുന്ന പരമ്പരാഗത തവിട്ടുനിറത്തിലുള്ള ഗൽഗലി പേഡ.",
      historical_significance: "130 വർഷത്തിലേറെ പഴക്കമുള്ള പാരമ്പര്യം.",
      architecture: "നാടൻ ഡയറി സ്വീറ്റ് സ്റ്റാൾ.",
      transport: "ഗൽഗലി വില്ലേജ്, ബിലഗി."
    }
  },

  dest_food_savaji_bilagi: {
    en: {
      name: "Maratha Savaji Mutton & Chicken Special Mess",
      taluk: "Bilagi",
      category: "Local Food & Khanavalis",
      description: "Renowned highway destination for authentic fiery Savaji cuisine, cooked with traditional 32-spice masala blend, black stone flower, and tender country goat meat.",
      historical_significance: "Longstanding family recipes passed down across warrior-chef lineages.",
      architecture: "Rustic wayside restaurant with outdoor and family seating.",
      transport: "Bilagi-Bagalkote Highway cross."
    },
    kn: {
      name: "ಮರಾಠಾ ಸವಜಿ ಮಟನ್ & ಚಿಕನ್ ಸ್ಪೆಷಲ್ ಮೆಸ್",
      taluk: "ಬೀಳಗಿ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "೩೨ ವಿಧದ ಸಾಂಬಾರ ಪದಾರ್ಥಗಳ ಮಸಾಲೆಯೊಂದಿಗೆ ತಯಾರಿಸುವ ಅಪ್ಪಟ ಮರಾಠಾ ಸವಜಿ ಮಟನ್, ಖಾರಾ ರಸ್ಸಾ ಮತ್ತು ಬಿಳಿ ಜೋಳದ ರೊಟ್ಟಿ.",
      historical_significance: "ಸವಜಿ ಯೋಧ-ಬಾಣಸಿಗರ ಪರಂಪರೆಯ ವಿಶಿಷ್ಟ ಖಾರದ ಪಾಕವಿಧಾನ.",
      architecture: "ಹೆದ್ದಾರಿಯ ಜನಪ್ರಿಯ ಸವಜಿ ಊಟದ ಮೆಸ್.",
      transport: "ಬೀಳಗಿ-ಬಾಗಲಕೋಟೆ ಹೆದ್ದಾರಿ ಕ್ರಾಸ್."
    },
    hi: {
      name: "मराठा सावजी मटन एवं चिकन स्पेशल मेस",
      taluk: "बीलगी",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "32 गुप्त मसालों के मिश्रण से तैयार होने वाला बेहद लज़ीज़ और तीखा सावजी मटन, खारा रस्सा और ताज़ा रोटियां।",
      historical_significance: "पारंपरिक मराठा-सावजी योद्धा पाककला का बेमिसाल उदाहरण।",
      architecture: "राजमार्ग पर स्थित लोकप्रिय भोजन भोजनालय।",
      transport: "बीलगी-बागलकोट हाईवे क्रॉस।"
    },
    ta: {
      name: "மராத்தா சவாஜி மட்டன் & சிக்கன் ஸ்பெஷல் மெஸ்",
      taluk: "பீலகி",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "32 மசாலாக்கள் சேர்த்து சமைக்கப்படும் காரசாரமான சவாஜி மட்டன் மற்றும் ரொட்டி.",
      historical_significance: "பாரம்பரிய சவாஜி சமையல் கலை.",
      architecture: "நெடுஞ்சாலை உணவு விடுதி.",
      transport: "பீலகி-பாகல்கோட்டை நெடுஞ்சாலை சந்திப்பு."
    },
    te: {
      name: "మరాఠా సావజీ మటన్ & చికెన్ స్పెషల్ మెస్",
      taluk: "బీళగి",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "32 రకాల సుగంధ ద్రవ్యాలతో చేసే ఘాటైన సావజీ మటన్ మరియు జొన్న రొట్టెల విందు.",
      historical_significance: "మరాఠా సావజీ యోధుల చారిత్రక ఘాటైన వంటకం.",
      architecture: "హైవే స్పెషల్ మెస్.",
      transport: "బీళగి-బాగల్‌కోట్ హైవే."
    },
    mr: {
      name: "मराठा सावजी मटन व चिकन स्पेशल मेस",
      taluk: "बिलगी",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "३२ मसाल्यांच्या गुप्त मिश्रणातून तयार होणारे झणझणीत मराठा सावजी मटन, काळा रस्सा आणि कडक भाकरी.",
      historical_significance: "सावजी पाककलेची समृद्ध व ज्वलंत परंपरा जोपासणारे लोकप्रिय ठिकाण.",
      architecture: "महामार्गावरील अस्सल खानावळ.",
      transport: "बिलगी-बागलकोट हायवे क्रॉस."
    },
    ml: {
      name: "മറാഠാ സാവജി മട്ടൻ & ചിക്കൻ സ്പെഷ്യൽ മെസ്സ്",
      taluk: "ബിലഗി",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "32 മസാലക്കൂട്ടുകൾ ചേർത്ത സ്വാദിഷ്ടമായ സാവജി മട്ടനും റൊട്ടിയും.",
      historical_significance: "പാരമ്പര്യ സ്പൈസി മിലിറ്ററി രുചിക്കൂട്ട്.",
      architecture: "ഹൈവേ ഭക്ഷണശാല.",
      transport: "ബിലഗി-ബാഗൽകോട്ട് ഹൈവേ."
    }
  },

  dest_food_girmit_banhatti: {
    en: {
      name: "Shri Guru Krupa Girmit, Mirchi & Kharada Mandakki Stall",
      taluk: "Banhatti",
      category: "Local Food & Khanavalis",
      description: "Legendary weaving town snack joint serving authentic North Karnataka spicy Girmit, crunchy Mirchi Bajji, and fiery garlic roasted puffed rice (Kharada Mandakki).",
      historical_significance: "Energy-giving evening refreshment for powerloom and handloom weavers returning from shifts.",
      architecture: "Vibrant street cafe right in the textile bazaar.",
      transport: "Weavers Market, Rabkavi Banhatti."
    },
    kn: {
      name: "ಶ್ರೀ ಗುರು ಕೃಪಾ ಗಿರ್ಮಿಟ್, ಮಿರ್ಚಿ ಮತ್ತು ಖಾರದ ಮಂಡಕ್ಕಿ ಸ್ಟಾಲ್",
      taluk: "ಬನಹಟ್ಟಿ",
      category: "ಸ್ಥಳೀಯ ಆಹಾರ ಮತ್ತು ಖಾನಾವಳಿ",
      description: "ನೇಕಾರರ ನಗರವಾದ ಬನಹಟ್ಟಿಯ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಖಾರ ಗಿರ್ಮಿಟ್, ಬಿಸಿ ಮಿರ್ಚಿ ಬಜ್ಜಿ ಮತ್ತು ಗರಿಗರಿ ಖಾರದ ಮಂಡಕ್ಕಿ.",
      historical_significance: "ಕೈಮಗ್ಗ ಹಾಗೂ ವಿದ್ಯುತ್ ಮಗ್ಗದ ಕಾರ್ಮಿಕರ ಮತ್ತು ಸ್ಥಳೀಯರ ಸಂಜೆಯ ನೆಚ್ಚಿನ ಪೌಷ್ಟಿಕ ತಿನಿಸು.",
      architecture: "ಜವಳಿ ಮಾರುಕಟ್ಟೆಯ ಜೀವಂತ ತಿಂಡಿ ಕೇಂದ್ರ.",
      transport: "ನೇಕಾರರ ಮಾರುಕಟ್ಟೆ, ರಬಕವಿ ಬನಹಟ್ಟಿ."
    },
    hi: {
      name: "श्री गुरु कृपा गिरमिट, मिर्ची एवं तीखी मंडक्की स्टॉल",
      taluk: "बनहट्टी",
      category: "स्थानीय भोजन एवं खानावलि",
      description: "बुनकर नगरी बनहट्टी का सबसे लोकप्रिय गिरमिट, कुरकुरी मिर्ची भज्जी और तीखी लहसुनी मुरमुरा चिवड़ा।",
      historical_significance: "वस्त्र उद्योग के कामगारों और व्यापारियों का पसंदीदा शाम का जलपान।",
      architecture: "बाजार में स्थित चहल-पहल वाला नाश्ता कॉर्नर।",
      transport: "वीवर्स मार्केट, रबकवि बनहट्टी।"
    },
    ta: {
      name: "ஸ்ரீ குரு கிருபா கிர்மிட், மிளகாய் & கார மண்டி",
      taluk: "பனஹட்டி",
      category: "உள்ளூர் உணவு & கானாங்கி",
      description: "பனஹட்டி நகரின் காரசாரமான கிர்மிட் பொரி மற்றும் மிளகாய் பஜ்ஜி.",
      historical_significance: "நெசவாளர்களின் மாலை நேர பிரியமான சிற்றுண்டி.",
      architecture: "ஜவுளி சந்தை சிற்றுண்டகம்.",
      transport: "நெசவாளர் சந்தை, ரபகவி பனஹட்டி."
    },
    te: {
      name: "శ్రీ గురు కృప గిర్మిట్, మిర్చి & కారపు బొరుగులు",
      taluk: "బనహట్టి",
      category: "స్థానిక ఆహారం & ఖానావళులు",
      description: "నేతన్నల నగరం బనహట్టిలో ప్రసిద్ధ గిర్మిట్ మరమరాలు, మిర్చి బజ్జీ మరియు కారపు బొరుగులు.",
      historical_significance: "చేనేత కార్మికుల సాయంత్రపు ఇష్టమైన అల్పాహారం.",
      architecture: "టెక్స్‌టైల్ బజార్ స్టాల్.",
      transport: "వీవర్స్ మార్కెట్, రబకవి బనహట్టి."
    },
    mr: {
      name: "श्री गुरु कृपा गिरमीट, मिरची आणि तिखट भडंग स्टॉल",
      taluk: "बनहट्टी",
      category: "स्थानिक खाद्यसंस्कृती",
      description: "विणकरांचे शहर बनहट्टीमधील प्रसिद्ध चुरचुरीत गिरमीट, मिरची भजी आणि लसूण तिखट चुरमुरे भडंग.",
      historical_significance: "हातमाग व यंत्रमाग कामगारांचा कामावरून परततानाचा हक्काचा संध्याकाळचा चहा-नाश्ता.",
      architecture: "कापड बाजारातील लोकप्रिय खाद्य कॉर्नर.",
      transport: "विणकर बाजार, रबकवी बनहट्टी."
    },
    ml: {
      name: "ശ്രീ ഗുരു കൃപ ഗിർമിറ്റ്, മിർച്ചി & കാര പൊരി സ്റ്റാൾ",
      taluk: "ബനഹട്ടി",
      category: "പ്രാദേശിക ഭക്ഷണങ്ങൾ",
      description: "നെയ്ത്തുനഗരമായ ബനഹട്ടിയിലെ രുചികരമായ ഗിർമിറ്റും മിർച്ചി ബജ്ജിയും കാരപ്പൊരിയും.",
      historical_significance: "തൊഴിലാളികളുടെ പ്രിയപ്പെട്ട വൈകുന്നേര വിഭവം.",
      architecture: "ടെക്സ്റ്റൈൽ ബസാർ സ്റ്റാൾ.",
      transport: "വീവേഴ്സ് മാർക്കറ്റ്, റബകവി ബനഹട്ടി."
    }
  }
};

// Read current translations.js
const transPath = path.join(__dirname, '..', 'public', 'js', 'translations.js');
let code = fs.readFileSync(transPath, 'utf8');

// Insert new destinations before `const ATTRACTIONS_I18N = {`
const marker = 'const ATTRACTIONS_I18N = {';
const destInsertionIndex = code.indexOf(marker);
if (destInsertionIndex === -1) {
  console.error("Could not find ATTRACTIONS_I18N marker!");
  process.exit(1);
}

// Generate the JS code for NEW_DESTINATIONS
let newDestCode = '';
for (const [destKey, destData] of Object.entries(NEW_DESTINATIONS)) {
  newDestCode += `  ${destKey}: ${JSON.stringify(destData, null, 4)},\n\n`;
}

// Check where DESTINATIONS_I18N ends (before the marker)
const beforeMarker = code.slice(0, destInsertionIndex);
const closingBraceIndex = beforeMarker.lastIndexOf('};');

if (closingBraceIndex === -1) {
  console.error("Could not find closing brace of DESTINATIONS_I18N");
  process.exit(1);
}

const updatedCode = code.slice(0, closingBraceIndex) + newDestCode + code.slice(closingBraceIndex);
fs.writeFileSync(transPath, updatedCode, 'utf8');
console.log("Successfully injected all 20 new destination translations into translations.js!");
