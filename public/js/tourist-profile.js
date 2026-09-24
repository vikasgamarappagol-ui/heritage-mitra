/**
 * Tourist Profile System
 * Manages: auth, profile, saved destinations (+Trip), planned itineraries (Plan My Trip)
 * Storage: localStorage (client-side demo with multi-profile support)
 */

const TouristProfile = (() => {

  // Pre-mapped destination directory for enriching saved destination cards
  const DEST_REGISTRY = {
    dest_badami: {
      id: 'dest_badami',
      name: 'Badami (Ancient Vatapi)',
      taluk: 'Badami',
      category: 'Heritage / Rock-cut Architecture',
      imageUrl: '/images/destinations/badami.jpg',
      duration: '1 to 2 Days',
      description: 'Historic capital of Early Chalukyas, renowned for 4 rock-cut cave temples in red sandstone cliffs overlooking Agastya Lake.'
    },
    dest_pattadakal: {
      id: 'dest_pattadakal',
      name: 'Pattadakal',
      taluk: 'Badami',
      category: 'UNESCO World Heritage Site',
      imageUrl: '/images/destinations/pattadakal.png',
      duration: '3 to 4 Hours',
      description: 'UNESCO World Heritage royal coronation site featuring 10 major temples blending Dravidian and Nagara architecture.'
    },
    dest_aihole: {
      id: 'dest_aihole',
      name: 'Aihole',
      taluk: 'Hunagund',
      category: 'Heritage / Cradle of Temple Architecture',
      imageUrl: '/images/destinations/aihole.png',
      duration: 'Half to Full Day',
      description: 'Cradle of Indian Rock Architecture with 125+ stone temples from 4th to 12th century CE.'
    },
    dest_mahakuta: {
      id: 'dest_mahakuta',
      name: 'Mahakuta',
      taluk: 'Badami',
      category: 'Spiritual / Sacred Springs',
      imageUrl: '/images/destinations/mahakuta.png',
      duration: '2 Hours',
      description: 'Ancient Shaivite pilgrimage valley famous for perennial sacred spring pools and carved stone shrines.'
    },
    dest_banashankari: {
      id: 'dest_banashankari',
      name: 'Banashankari Temple (Cholachagudda)',
      taluk: 'Badami',
      category: 'Spiritual / Sacred Tank',
      imageUrl: '/images/destinations/banashankari.png',
      duration: '1 to 2 Hours',
      description: 'Revered Shakti shrine in Tilakaaranya forest featuring Haridra Tirtha kalyani and annual mega Jatre.'
    },
    dest_kudala_sangama: {
      id: 'dest_kudala_sangama',
      name: 'Kudala Sangama',
      taluk: 'Hunagund',
      category: 'Spiritual / River Confluence',
      imageUrl: '/images/destinations/kudalasangama.png',
      duration: 'Half to Full Day',
      description: 'Sacred river confluence of Krishna & Malaprabha, Aikya Mantapa of social reformer Jagadjyothi Basaveshwara.'
    },
    dest_almatti_dam: {
      id: 'dest_almatti_dam',
      name: 'Almatti Dam (Lal Bahadur Shastri Sagar)',
      taluk: 'Nidagundi / Bilagi',
      category: 'Nature & Dam Gardens',
      imageUrl: '/images/destinations/Alamatti.png',
      duration: '3 to 5 Hours',
      description: 'Magnificent dam on Krishna river with expansive reservoir, Mughal gardens, and musical fountains.'
    },
    dest_ilkal: {
      id: 'dest_ilkal',
      name: 'Ilkal Handloom Cluster',
      taluk: 'Ilkal',
      category: 'Art & GI Handlooms',
      imageUrl: '/images/destinations/Ilkal.png',
      duration: '2 to 3 Hours',
      description: 'Famous 300-year GI-tagged Ilkal saree weaving center with authentic pit-loom artisan cooperatives.'
    },
    dest_guledagudda: {
      id: 'dest_guledagudda',
      name: 'Guledagudda Khana Weaving Cluster',
      taluk: 'Guledagudda',
      category: 'Art & GI Handlooms',
      imageUrl: '/images/destinations/Guledgudda.png',
      duration: '2 Hours',
      description: 'Traditional GI-tagged dobby-woven Khana blouse fabric and Kasuti needlecraft embroidery heritage.'
    },
    dest_mudhol: {
      id: 'dest_mudhol',
      name: 'Mudhol (Caravan Hound Heritage)',
      taluk: 'Mudhol',
      category: 'Indigenous Heritage & Temples',
      imageUrl: '/images/destinations/Mudhol.png',
      duration: '2 to 3 Hours',
      description: 'Historical royal town celebrated for indigenous Mudhol Hounds and Chalukyan stone shrines.'
    },
    dest_jamkhandi: {
      id: 'dest_jamkhandi',
      name: 'Jamkhandi (Royal Maratha Heritage)',
      taluk: 'Jamkhandi',
      category: 'Heritage & Palaces',
      imageUrl: '/images/destinations/jamkhandi.png',
      duration: '2 Hours',
      description: 'Historic seat of Patwardhan dynasty featuring Ramtirth temple, royal palaces, and scenic gardens.'
    },
    dest_bilagi: {
      id: 'dest_bilagi',
      name: 'Bilagi',
      taluk: 'Bilagi',
      category: 'Nature & Historical Wells',
      imageUrl: '/images/destinations/Bilagi.png',
      duration: '1 to 2 Hours',
      description: 'Heritage town known for the historic Are-Kallina Bavi stepwell and lush river valley agro-tourism.'
    },
    dest_shivayogamandira: {
      id: 'dest_shivayogamandira',
      name: 'Shivayogamandira',
      taluk: 'Badami',
      category: 'Spiritual Monastery',
      imageUrl: '/images/destinations/shivayogamandir.png',
      duration: '1 to 2 Hours',
      description: 'Premier Veerashaiva monastic institution on the banks of the Malaprabha river.'
    },
    dest_muchakhandi_dam: {
      id: 'dest_muchakhandi_dam',
      name: 'Muchakhandi Dam (Malaprabha Reservoir)',
      taluk: 'Bagalkote',
      category: 'Nature & Dam Views',
      imageUrl: '/images/destinations/Muchkhandi dam.jfif',
      duration: '1 to 2 Hours',
      description: 'Panoramic stone masonry reservoir and dam across Malaprabha basin, renowned for sunset photography and tranquility.'
    }
  };

  // ── Auth helpers ──────────────────────────────────────────────────────────
  function isLoggedIn() {
    return !!localStorage.getItem('bgk_user_token');
  }

  function getActiveEmail() {
    return localStorage.getItem('bgk_user_email') || '';
  }

  function getAllProfiles() {
    try {
      const raw = localStorage.getItem('bgk_all_profiles');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveAllProfiles(profiles) {
    localStorage.setItem('bgk_all_profiles', JSON.stringify(profiles));
  }

  function getProfile() {
    const email = getActiveEmail();
    if (!email) {
      // Fallback: check legacy single profile
      const raw = localStorage.getItem('bgk_tourist_profile');
      return raw ? JSON.parse(raw) : null;
    }
    const profiles = getAllProfiles();
    return profiles[email] || null;
  }

  function saveProfile(profile) {
    if (!profile || !profile.email) return;
    const profiles = getAllProfiles();
    profiles[profile.email] = profile;
    saveAllProfiles(profiles);
    // Also save current active profile
    localStorage.setItem('bgk_tourist_profile', JSON.stringify(profile));
  }

  function login(email, password) {
    if (!email || !password || password.length < 4) return false;
    email = email.trim().toLowerCase();

    const profiles = getAllProfiles();
    let profile = profiles[email];

    if (!profile) {
      // Create new profile for this tourist
      const cleanName = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      profile = {
        email: email,
        name: cleanName,
        joinedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        savedDestinations: [], // [{ id, name, imageUrl, taluk, category, duration, description, addedAt }]
        plannedTrips: []       // [{ id, trip_title, theme, budget, companions, accessibility, timeline, estimated_total_budget, safety_advisory, savedAt }]
      };
      profiles[email] = profile;
      saveAllProfiles(profiles);
    }

    localStorage.setItem('bgk_user_token', btoa(email + ':' + Date.now()));
    localStorage.setItem('bgk_user_email', email);
    localStorage.setItem('bgk_tourist_profile', JSON.stringify(profile));

    // Migrate any orphan bagalkote_my_trip items into this profile
    syncExistingOfflineTrips(profile);

    return true;
  }

  function logout() {
    localStorage.removeItem('bgk_user_token');
    localStorage.removeItem('bgk_user_email');
    localStorage.removeItem('bgk_tourist_profile');
  }

  // ── Sync offline trips into logged in profile ─────────────────────────────
  function syncExistingOfflineTrips(profile) {
    try {
      const offline = JSON.parse(localStorage.getItem('bagalkote_my_trip') || '[]');
      let updated = false;
      offline.forEach(destId => {
        const exists = profile.savedDestinations.some(d => (typeof d === 'string' ? d === destId : d.id === destId));
        if (!exists) {
          const enriched = enrichDestination(destId);
          profile.savedDestinations.push(enriched);
          updated = true;
        }
      });
      if (updated) {
        saveProfile(profile);
      }
    } catch (e) {
      console.warn('[TouristProfile] Sync warning:', e);
    }
  }

  function enrichDestination(dest) {
    if (typeof dest === 'object' && dest.name && dest.imageUrl) {
      return {
        ...dest,
        addedAt: dest.addedAt || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
    }
    const destId = typeof dest === 'string' ? dest : dest.id;
    const reg = DEST_REGISTRY[destId] || {
      id: destId,
      name: dest.name || destId.replace('dest_', '').replace(/_/g, ' ').toUpperCase(),
      taluk: dest.taluk || 'Bagalkote',
      category: dest.category || 'Tourist Attraction',
      imageUrl: '/images/destinations/badami.jpg',
      duration: '2-3 Hours',
      description: 'Verified destination in Bagalkote district.'
    };

    return {
      ...reg,
      addedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
  }

  // ── Saved Destinations (+Trip) ───────────────────────────────────────────
  function addDestination(dest) {
    if (!isLoggedIn()) return false;
    const profile = getProfile();
    if (!profile) return false;

    const destId = typeof dest === 'string' ? dest : (dest.id || 'dest_' + Date.now());
    const already = profile.savedDestinations.some(d => (typeof d === 'string' ? d === destId : d.id === destId));
    if (already) return 'duplicate';

    const enriched = enrichDestination(dest);
    profile.savedDestinations.push(enriched);
    saveProfile(profile);

    // Keep bagalkote_my_trip array in sync for offline compatibility
    try {
      let trip = JSON.parse(localStorage.getItem('bagalkote_my_trip') || '[]');
      if (!trip.includes(destId)) {
        trip.push(destId);
        localStorage.setItem('bagalkote_my_trip', JSON.stringify(trip));
      }
    } catch (e) {}

    return true;
  }

  function removeDestination(destId) {
    const profile = getProfile();
    if (!profile) return;
    profile.savedDestinations = profile.savedDestinations.filter(d => {
      const id = typeof d === 'string' ? d : d.id;
      return id !== destId;
    });
    saveProfile(profile);

    // Also update bagalkote_my_trip
    try {
      let trip = JSON.parse(localStorage.getItem('bagalkote_my_trip') || '[]');
      trip = trip.filter(id => id !== destId);
      localStorage.setItem('bagalkote_my_trip', JSON.stringify(trip));
    } catch (e) {}
  }

  // ── Planned Trips (Plan My Trip) ──────────────────────────────────────────
  function saveTrip(itinerary) {
    if (!isLoggedIn()) return false;
    const profile = getProfile();
    if (!profile) return false;

    const tripRecord = {
      id: 'trip_' + Date.now(),
      trip_title: itinerary.trip_title || 'Bagalkote Inclusive Journey',
      theme: itinerary.theme || 'Heritage & Cultural Exploration',
      budget: itinerary.budget || itinerary.estimated_total_budget || 'Moderate',
      companions: itinerary.companions || 'Family',
      accessibility: itinerary.accessibility || 'Step-free / Reduced Walking',
      estimated_total_budget: itinerary.estimated_total_budget || '₹1,500 - ₹3,000',
      safety_advisory: itinerary.safety_advisory || 'Keep hydrated; follow ASI site guidelines.',
      timeline: itinerary.timeline || [],
      savedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    if (!profile.plannedTrips) profile.plannedTrips = [];
    profile.plannedTrips.unshift(tripRecord); // latest trip on top
    saveProfile(profile);
    return true;
  }

  function removeTrip(tripId) {
    const profile = getProfile();
    if (!profile || !profile.plannedTrips) return;
    profile.plannedTrips = profile.plannedTrips.filter(t => t.id !== tripId);
    saveProfile(profile);
  }

  return {
    isLoggedIn,
    getActiveEmail,
    getProfile,
    login,
    logout,
    addDestination,
    removeDestination,
    saveTrip,
    removeTrip,
    enrichDestination,
    DEST_REGISTRY
  };
})();

if (typeof window !== 'undefined') {
  window.TouristProfile = TouristProfile;
}
