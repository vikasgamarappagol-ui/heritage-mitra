/**
 * Client API Service
 * Connects frontend to Express REST endpoints with robust fallbacks
 */

const API = {
  baseUrl: '',

  async getDestinations(category = 'All', taluk = 'All', search = '') {
    try {
      const params = new URLSearchParams();
      if (category && category !== 'All') params.append('category', category);
      if (taluk && taluk !== 'All') params.append('taluk', taluk);
      if (search) params.append('search', search);

      const res = await fetch(`/api/destinations?${params.toString()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getDestinations error, using fallback:', err.message);
      return { count: 0, data: [] };
    }
  },

  async getDestinationById(id) {
    try {
      const res = await fetch(`/api/destinations/${id}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn(`[API] getDestinationById ${id} error:`, err.message);
      return null;
    }
  },

  async getArtisans(craft = '', taluk = '') {
    try {
      const params = new URLSearchParams();
      if (craft) params.append('craft', craft);
      if (taluk) params.append('taluk', taluk);

      const res = await fetch(`/api/artisans?${params.toString()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getArtisans error:', err.message);
      return { count: 0, data: [] };
    }
  },

  async getBusinesses(category = '', verifiedOnly = false) {
    try {
      const params = new URLSearchParams();
      if (category && category !== 'All') params.append('category', category);
      if (verifiedOnly) params.append('verified_only', 'true');

      const res = await fetch(`/api/businesses?${params.toString()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getBusinesses error:', err.message);
      return { count: 0, data: [] };
    }
  },

  async getAccessibility(wheelchairOnly = false, seniorFriendly = false) {
    try {
      const params = new URLSearchParams();
      if (wheelchairOnly) params.append('wheelchair_only', 'true');
      if (seniorFriendly) params.append('senior_friendly', 'true');

      const res = await fetch(`/api/accessibility?${params.toString()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getAccessibility error:', err.message);
      return { count: 0, data: [] };
    }
  },

  async getSafety() {
    try {
      const res = await fetch('/api/safety');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getSafety error:', err.message);
      return [];
    }
  },

  async matchSkills(interest, budget = '', language = 'en', mobility = 'standard') {
    try {
      const res = await fetch('/api/skills/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ interest, budget, language, mobility })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] matchSkills error:', err.message);
      return { count: 0, matches: [] };
    }
  },

  async generateTrip(planData) {
    try {
      const res = await fetch('/api/trip-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(planData)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] generateTrip error:', err.message);
      return null;
    }
  },

  async sendChatMessage(message, language = 'en', image = null) {
    try {
      const payload = { message, language };
      if (image) payload.image = image;

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] sendChatMessage error:', err.message);
      return {
        reply: "I am having trouble reaching the knowledge base server. Please consult our verified destination directories directly.",
        source: "Local System Fallback",
        verification_status: "SYSTEM_OFFLINE_FALLBACK",
        related_images: []
      };
    }
  },

  async analyzeImage(image, prompt = '', language = 'en') {
    try {
      const res = await fetch('/api/chat/vision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, prompt, language })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] analyzeImage error:', err.message);
      return {
        reply: "I was unable to analyze this image right now. Please try again or check official sources at bagalkot.nic.in.",
        confidence_state: 'NO_CONFIDENCE',
        related_images: []
      };
    }
  },

  async transcribeVoice(audioBase64, language = 'en') {
    try {
      const res = await fetch('/api/voice/transcribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ audio: audioBase64, language })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] transcribeVoice error:', err.message);
      return { text: '' };
    }
  },

  async submitInquiry(inquiryData) {
    try {
      const res = await fetch('/api/provider/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData)
      });
      return await res.json();
    } catch (err) {
      console.warn('[API] submitInquiry error:', err.message);
      return { success: false, error: err.message };
    }
  },

  async getAdminAnalytics() {
    try {
      const res = await fetch('/api/admin/analytics');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getAdminAnalytics error:', err.message);
      return null;
    }
  },

  async createBooking(data) {
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await res.json();
    } catch (err) {
      console.warn('[API] createBooking error:', err.message);
      return { success: false, error: err.message };
    }
  },

  async getBookingStatus(bookingId) {
    try {
      const res = await fetch(`/api/bookings/${bookingId}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getBookingStatus error:', err.message);
      return null;
    }
  },

  async getBookings(providerId = '') {
    try {
      const url = providerId ? `/api/bookings?provider_id=${encodeURIComponent(providerId)}` : '/api/bookings';
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getBookings error:', err.message);
      return { count: 0, bookings: [] };
    }
  },

  async respondBooking(bookingId, action) {
    try {
      const res = await fetch(`/api/bookings/${bookingId}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      return await res.json();
    } catch (err) {
      console.warn('[API] respondBooking error:', err.message);
      return { success: false, error: err.message };
    }
  },

  async submitBookingReview(bookingId, rating, feedback) {
    try {
      const res = await fetch(`/api/bookings/${bookingId}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, feedback })
      });
      return await res.json();
    } catch (err) {
      console.warn('[API] submitBookingReview error:', err.message);
      return { success: false, error: err.message };
    }
  },

  async registerProvider(providerData) {
    try {
      const res = await fetch('/api/provider/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(providerData)
      });
      return await res.json();
    } catch (err) {
      console.warn('[API] registerProvider error:', err.message);
      return { success: false, error: err.message };
    }
  },

  async decideVerification(verificationId, decision, notes = '', extraData = {}) {
    try {
      const res = await fetch(`/api/admin/verifications/${verificationId}/decision`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ decision, notes, ...extraData })
      });
      return await res.json();
    } catch (err) {
      console.warn('[API] decideVerification error:', err.message);
      return { success: false, error: err.message };
    }
  },

  async adminLogin(username, password) {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.warn('[API] adminLogin error:', err.message);
      // Fallback for offline/local simulation
      if (username === 'Dc_bgk' && password === 'DCofficebgk') {
        return {
          success: true,
          token: 'dc-auth-token-bgk-offline',
          user: { username: 'Dc_bgk', role: 'DEPUTY_COMMISSIONER', name: 'Deputy Commissioner & District Magistrate' }
        };
      }
      return { success: false, error: 'Network error or invalid credentials.' };
    }
  },

  async submitComplaint(complaintData) {
    try {
      const res = await fetch('/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(complaintData)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] submitComplaint error:', err.message);
      // Fallback to localStorage simulation
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `BGK-TGT-2026-${randomNum}`;
      const fallbackRecord = {
        id: `cmp_${Date.now()}`,
        ticketId,
        ...complaintData,
        status: 'NEW',
        submittedAt: new Date().toISOString(),
        history: [{ status: 'SUBMITTED', timestamp: new Date().toISOString(), note: 'Saved locally' }]
      };
      const existing = JSON.parse(localStorage.getItem('bgk_local_complaints') || '[]');
      existing.unshift(fallbackRecord);
      localStorage.setItem('bgk_local_complaints', JSON.stringify(existing));
      return { success: true, ticketId, complaint: fallbackRecord };
    }
  },

  async getComplaints(filters = {}) {
    try {
      const params = new URLSearchParams(filters).toString();
      const res = await fetch(`/api/complaints${params ? '?' + params : ''}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getComplaints error:', err.message);
      const local = JSON.parse(localStorage.getItem('bgk_local_complaints') || '[]');
      return { count: local.length, complaints: local };
    }
  },

  async getComplaintStatus(lookup) {
    try {
      const res = await fetch(`/api/complaints/${encodeURIComponent(lookup)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('[API] getComplaintStatus error:', err.message);
      const local = JSON.parse(localStorage.getItem('bgk_local_complaints') || '[]');
      const query = (lookup || '').toUpperCase();
      const found = local.find(c => c.ticketId.toUpperCase() === query || (c.phone && c.phone.includes(query)));
      if (found) return { success: true, complaint: found };
      return { success: false, error: 'Ticket not found.' };
    }
  },

  async updateComplaintStatus(id, updateData) {
    try {
      const res = await fetch(`/api/admin/complaints/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });
      return await res.json();
    } catch (err) {
      console.warn('[API] updateComplaintStatus error:', err.message);
      return { success: false, error: err.message };
    }
  }
};
