/**
 * Booking Workflow Manager
 * Handles: 5-minute timeout booking countdown, provider accept/reject status notifications,
 * real-time status polling, and tourist rating & feedback submission.
 */

window.BookingWorkflow = (() => {
  let timerInterval = null;
  let pollInterval = null;
  let currentBooking = null;

  function ensureModalsExist() {
    if (!document.getElementById('bookingWorkflowModal')) {
      const modalHtml = `
        <!-- BOOKING WORKFLOW MODAL -->
        <div class="modal-backdrop" id="bookingWorkflowModal" style="z-index:9999;" onclick="if(event.target===this) BookingWorkflow.closeModal();">
          <div class="modal-dialog" style="max-width:560px; border-radius:24px; padding:0; overflow:hidden; background:#FFFFFF; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);">
            <div id="bookingModalContent"></div>
          </div>
        </div>

        <!-- RATING & FEEDBACK MODAL -->
        <div class="modal-backdrop" id="bookingReviewModal" style="z-index:10000;" onclick="if(event.target===this) BookingWorkflow.closeReviewModal();">
          <div class="modal-dialog" style="max-width:520px; border-radius:20px; padding:2rem; background:#FFFFFF;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
              <h3 style="font-family:'Cinzel',serif; color:#0D1B2A; font-size:1.25rem; margin:0;">⭐ Rate Your Experience</h3>
              <button onclick="BookingWorkflow.closeReviewModal()" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:#64748B;">&times;</button>
            </div>
            <p style="font-size:0.88rem; color:#64748B; margin-bottom:1.5rem;" id="reviewModalSubtitle">Share your feedback to support local Bagalkote artisans.</p>
            
            <form id="bookingReviewForm" onsubmit="BookingWorkflow.submitReview(event)">
              <div style="text-align:center; margin-bottom:1.5rem;">
                <div style="font-size:0.75rem; font-weight:700; color:#C85A32; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.5rem;">Overall Rating</div>
                <div id="starRatingSelector" style="font-size:2.2rem; cursor:pointer; user-select:none;">
                  <span onclick="BookingWorkflow.setRating(1)">⭐</span>
                  <span onclick="BookingWorkflow.setRating(2)">⭐</span>
                  <span onclick="BookingWorkflow.setRating(3)">⭐</span>
                  <span onclick="BookingWorkflow.setRating(4)">⭐</span>
                  <span onclick="BookingWorkflow.setRating(5)">⭐</span>
                </div>
                <input type="hidden" id="reviewRatingInput" value="5">
                <div id="ratingTextLabel" style="font-weight:700; color:#1E293B; margin-top:0.3rem; font-size:0.9rem;">5 - Excellent Experience</div>
              </div>

              <div style="margin-bottom:1.5rem;">
                <label style="display:block; font-size:0.75rem; font-weight:700; color:#C85A32; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:0.4rem;">Tourist Feedback / Comments (Optional)</label>
                <textarea id="reviewFeedbackInput" rows="4" style="width:100%; border:1.5px solid #CBD5E1; border-radius:12px; padding:0.75rem; font-family:'Outfit',sans-serif; font-size:0.9rem; outline:none;" placeholder="Optional: Write about your experience, craft demonstration, or food quality..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.85rem;">Submit Rating & Feedback</button>
            </form>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  async function startBookingProcess(provider) {
    ensureModalsExist();

    // Ask for tourist details if not available
    let touristName = 'Tourist User';
    let touristContact = 'Via Bagalkote Portal';

    if (window.TouristProfile && window.TouristProfile.getProfile) {
      const prof = window.TouristProfile.getProfile();
      if (prof) {
        touristName = prof.name || prof.email || 'Registered Tourist';
        touristContact = prof.email || touristContact;
      }
    }

    const modalContent = document.getElementById('bookingModalContent');
    modalContent.innerHTML = `
      <div style="padding:2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
          <span style="background:#FEF3C7; color:#92400E; font-size:0.75rem; font-weight:700; padding:0.3rem 0.75rem; border-radius:50px; text-transform:uppercase; letter-spacing:0.5px;">Confirm Booking Request</span>
          <button onclick="BookingWorkflow.closeModal()" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:#64748B;">&times;</button>
        </div>

        <h3 style="font-family:'Cinzel',serif; font-size:1.3rem; color:#0D1B2A; margin-bottom:0.4rem;">${provider.skill || 'Experience Booking'}</h3>
        <p style="font-size:0.88rem; color:#64748B; margin-bottom:1.5rem;">Provider: <strong>${provider.name}</strong> · Location: ${provider.location || 'Bagalkote'}</p>

        <form onsubmit="BookingWorkflow.confirmAndSubmitBooking(event, ${JSON.stringify(provider).replace(/"/g, '&quot;')})">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.25rem;">
            <div>
              <label style="display:block; font-size:0.75rem; font-weight:700; color:#C85A32; text-transform:uppercase; margin-bottom:0.3rem;">Your Name *</label>
              <input type="text" id="bk_tourist_name" value="${touristName}" required style="width:100%; padding:0.65rem; border:1.5px solid #CBD5E1; border-radius:10px; font-family:'Outfit',sans-serif; font-size:0.9rem;">
            </div>
            <div>
              <label style="display:block; font-size:0.75rem; font-weight:700; color:#C85A32; text-transform:uppercase; margin-bottom:0.3rem;">Contact Phone / Email *</label>
              <input type="text" id="bk_tourist_contact" value="${touristContact}" required style="width:100%; padding:0.65rem; border:1.5px solid #CBD5E1; border-radius:10px; font-family:'Outfit',sans-serif; font-size:0.9rem;">
            </div>
          </div>

          <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:1rem; margin-bottom:1.5rem;">
            <div style="display:flex; justify-content:space-between; font-size:0.95rem; font-weight:700; color:#0D1B2A;">
              <span>Total Price</span>
              <span style="color:#C85A32;">₹${provider.price || 500}</span>
            </div>
            <div style="font-size:0.78rem; color:#64748B; margin-top:0.25rem;">⏱️ Duration: ${provider.duration || 2} hours · Direct artisan payment upon arrival</div>
          </div>

          <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:10px; padding:0.85rem; font-size:0.82rem; color:#1E40AF; margin-bottom:1.5rem;">
            ⚡ <strong>5-Minute Provider Response Rule:</strong> Upon clicking Book, the provider will receive a notification and has <strong>5 minutes</strong> to accept or reject your booking.
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.85rem;">🚀 Send Booking Request</button>
        </form>
      </div>
    `;

    document.getElementById('bookingWorkflowModal').classList.add('active');
  }

  async function confirmAndSubmitBooking(e, provider) {
    e.preventDefault();
    const touristName = document.getElementById('bk_tourist_name').value.trim();
    const touristContact = document.getElementById('bk_tourist_contact').value.trim();

    const response = await API.createBooking({
      provider_id: provider.id || provider.providerId,
      provider_name: provider.name,
      tourist_name: touristName,
      tourist_contact: touristContact,
      experience_title: provider.skill,
      price: provider.price
    });

    if (response && response.success && response.booking) {
      currentBooking = response.booking;
      startCountdownTimer(currentBooking, provider);
    } else {
      alert('Failed to send booking request. Please try again.');
    }
  }

  function startCountdownTimer(booking, provider) {
    clearInterval(timerInterval);
    clearInterval(pollInterval);

    let remainingSeconds = 300; // 5 minutes = 300 seconds

    const renderTimerScreen = () => {
      const modalContent = document.getElementById('bookingModalContent');
      modalContent.innerHTML = `
        <div style="padding:2.5rem; text-align:center; background:linear-gradient(180deg,#FFFFFF,#F8FAFC);">
          <div style="width:72px; height:72px; margin:0 auto 1.25rem; background:#FEF3C7; border:3px solid #F59E0B; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem;">
            ⏳
          </div>

          <span style="background:#DBEAFE; color:#1E40AF; font-size:0.75rem; font-weight:700; padding:0.35rem 0.9rem; border-radius:50px; text-transform:uppercase; letter-spacing:1px;">Booking Pending Provider Confirmation</span>

          <h2 style="font-family:'Cinzel',serif; font-size:1.4rem; color:#0D1B2A; margin:1rem 0 0.4rem;">Waiting for ${provider.name}</h2>
          <p style="font-size:0.88rem; color:#64748B; margin:0 0 1.75rem;">Request sent for <strong>"${provider.skill}"</strong>. Provider has 5 minutes to respond.</p>

          <!-- LIVE COUNTDOWN DISPLAY -->
          <div style="background:#0D1B2A; border-radius:18px; padding:1.5rem; color:#fff; display:inline-block; min-width:260px; box-shadow:0 10px 25px rgba(13,27,42,0.15); margin-bottom:1.75rem;">
            <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:#D4AF37; margin-bottom:0.3rem;">Time Remaining for Provider Response</div>
            <div id="bookingTimerDigits" style="font-family:'Outfit',sans-serif; font-size:3rem; font-weight:800; letter-spacing:2px; color:#FFFFFF;">
              ${formatTime(remainingSeconds)}
            </div>
            <div style="font-size:0.75rem; color:rgba(255,255,255,0.6); margin-top:0.3rem;">Auto-cancels if provider does not respond</div>
          </div>

          <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:14px; padding:1.1rem; text-align:center; margin-bottom:1.5rem; font-size:0.85rem; color:#475569;">
            📩 <strong>Notification sent!</strong> The provider will review your booking request in the <strong>Provider Portal</strong>. Please stay on this screen.
          </div>

          <div>
            <button onclick="BookingWorkflow.closeModal()" class="btn btn-outline" style="font-size:0.85rem; color:#64748B;">Cancel Booking Request</button>
          </div>
        </div>
      `;
    };

    renderTimerScreen();

    // 1. Timer Countdown Interval (Every 1 second)
    timerInterval = setInterval(() => {
      remainingSeconds--;
      const digitsEl = document.getElementById('bookingTimerDigits');
      if (digitsEl) {
        digitsEl.textContent = formatTime(Math.max(0, remainingSeconds));
      }

      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        clearInterval(pollInterval);
        showUnavailableScreen("Sorry, provider is not available.", "The provider did not respond within the 5-minute window.");
      }
    }, 1000);

    // 2. Status Polling Interval (Every 2.5 seconds)
    pollInterval = setInterval(async () => {
      const current = await API.getBookingStatus(booking.id);
      if (current) {
        if (current.status === 'CONFIRMED') {
          clearInterval(timerInterval);
          clearInterval(pollInterval);
          showConfirmedScreen(current, provider);
        } else if (current.status === 'REJECTED' || current.status === 'EXPIRED') {
          clearInterval(timerInterval);
          clearInterval(pollInterval);
          showUnavailableScreen("Sorry, provider is not available.", current.status === 'EXPIRED' ? "Provider did not respond within 5 minutes." : "Provider is currently unavailable for the requested slot.");
        }
      }
    }, 2500);
  }

  async function simulateProviderResponse(bookingId, action) {
    const res = await API.respondBooking(bookingId, action);
    if (res && res.booking) {
      if (res.booking.status === 'CONFIRMED') {
        clearInterval(timerInterval);
        clearInterval(pollInterval);
        showConfirmedScreen(res.booking, { name: res.booking.provider_name, skill: res.booking.experience_title, price: res.booking.price });
      } else {
        clearInterval(timerInterval);
        clearInterval(pollInterval);
        showUnavailableScreen("Sorry, provider is not available.", "Booking request was declined by the provider.");
      }
    }
  }

  function simulateTimeout(bookingId) {
    clearInterval(timerInterval);
    clearInterval(pollInterval);
    showUnavailableScreen("Sorry, provider is not available.", "The provider did not respond within the 5-minute window.");
  }

  function showConfirmedScreen(booking, provider) {
    // Save confirmed booking to profile
    if (window.TouristProfile && window.TouristProfile.saveBookedExperience) {
      window.TouristProfile.saveBookedExperience({
        id: booking.id,
        name: provider.name,
        skill: provider.skill || booking.experience_title,
        price: provider.price || booking.price,
        bookedAt: booking.created_at
      });
    }

    const modalContent = document.getElementById('bookingModalContent');
    modalContent.innerHTML = `
      <div style="padding:2.5rem; text-align:center; background:linear-gradient(180deg,#F0FDF4,#FFFFFF);">
        <div style="width:72px; height:72px; margin:0 auto 1.25rem; background:#DCFCE7; border:3px solid #16A34A; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2.2rem; color:#16A34A;">
          ✓
        </div>

        <span style="background:#DCFCE7; color:#15803D; font-size:0.75rem; font-weight:700; padding:0.35rem 0.9rem; border-radius:50px; text-transform:uppercase; letter-spacing:1px;">Booking Confirmed!</span>

        <h2 style="font-family:'Cinzel',serif; font-size:1.5rem; color:#0D1B2A; margin:1rem 0 0.4rem;">Your experience is confirmed.</h2>
        <p style="font-size:0.9rem; color:#475569; margin:0 0 1.75rem;"><strong>${provider.name}</strong> has accepted your booking request for <strong>"${provider.skill || booking.experience_title}"</strong>.</p>

        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:16px; padding:1.25rem; text-align:left; margin-bottom:1.75rem; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.85rem;">
            <div><span style="color:#64748B;">Booking Reference:</span> <strong style="color:#0D1B2A;">${booking.id}</strong></div>
            <div><span style="color:#64748B;">Status:</span> <span style="color:#16A34A; font-weight:700;">Confirmed ✓</span></div>
            <div><span style="color:#64748B;">Tourist:</span> <strong>${booking.tourist_name}</strong></div>
            <div><span style="color:#64748B;">Price:</span> <strong style="color:#C85A32;">₹${booking.price}</strong></div>
          </div>
        </div>

        <div style="display:flex; gap:0.75rem; flex-wrap:wrap; justify-content:center;">
          <button onclick="BookingWorkflow.openReviewModal('${booking.id}', '${provider.name}')" class="btn btn-primary" style="background:#D4AF37; border-color:#D4AF37; font-size:0.95rem; padding:0.75rem 1.25rem;">⭐ Give Rating & Feedback</button>
          <button onclick="BookingWorkflow.closeModal()" class="btn btn-outline" style="font-size:0.95rem; padding:0.75rem 1.25rem;">Done</button>
        </div>
      </div>
    `;
  }

  function showUnavailableScreen(title, subtitle) {
    const modalContent = document.getElementById('bookingModalContent');
    modalContent.innerHTML = `
      <div style="padding:2.5rem; text-align:center; background:linear-gradient(180deg,#FEF2F2,#FFFFFF);">
        <div style="width:72px; height:72px; margin:0 auto 1.25rem; background:#FEE2E2; border:3px solid #EF4444; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2.2rem; color:#EF4444;">
          ✕
        </div>

        <span style="background:#FEE2E2; color:#B91C1C; font-size:0.75rem; font-weight:700; padding:0.35rem 0.9rem; border-radius:50px; text-transform:uppercase; letter-spacing:1px;">Booking Unavailable</span>

        <h2 style="font-family:'Cinzel',serif; font-size:1.4rem; color:#991B1B; margin:1rem 0 0.4rem;">${title}</h2>
        <p style="font-size:0.9rem; color:#64748B; margin:0 0 1.75rem;">${subtitle}</p>

        <div style="background:#FFFBF6; border:1px solid #F3E8DC; border-radius:14px; padding:1.1rem; text-align:left; font-size:0.85rem; color:#475569; margin-bottom:1.75rem;">
          💡 <strong>Tip:</strong> You can explore other master weavers, home chefs, and heritage storytellers on the Meet People & Artisans directory.
        </div>

        <button onclick="BookingWorkflow.closeModal()" class="btn btn-primary" style="font-size:0.95rem; padding:0.75rem 1.75rem;">Explore Other Experiences</button>
      </div>
    `;
  }

  function setRating(ratingValue) {
    document.getElementById('reviewRatingInput').value = ratingValue;
    const stars = document.querySelectorAll('#starRatingSelector span');
    stars.forEach((star, index) => {
      star.style.opacity = index < ratingValue ? '1' : '0.25';
    });

    const labels = {
      1: '1 - Poor Experience',
      2: '2 - Fair Experience',
      3: '3 - Good Experience',
      4: '4 - Very Good Experience',
      5: '5 - Excellent Experience'
    };
    document.getElementById('ratingTextLabel').textContent = labels[ratingValue] || '';
  }

  function openReviewModal(bookingId, providerName, providerId) {
    ensureModalsExist();
    currentBooking = { 
      id: bookingId, 
      provider_name: providerName,
      provider_id: providerId || (currentBooking ? currentBooking.provider_id : '')
    };
    document.getElementById('reviewModalSubtitle').textContent = `Rate your experience with ${providerName || 'the provider'}`;
    const workflowModal = document.getElementById('bookingWorkflowModal');
    if (workflowModal) workflowModal.classList.remove('active');
    document.getElementById('bookingReviewModal').classList.add('active');
    setRating(5);
  }

  async function submitReview(e) {
    e.preventDefault();
    if (!currentBooking || !currentBooking.id) return;

    const rating = Number(document.getElementById('reviewRatingInput').value);
    const feedback = document.getElementById('reviewFeedbackInput').value.trim();

    // 1. Save to local storage for instant visibility in View Details modal
    try {
      const storedReviews = JSON.parse(localStorage.getItem('bagalkote_provider_reviews') || '[]');
      const touristName = (window.TouristProfile && window.TouristProfile.getProfile && window.TouristProfile.getProfile()?.name) || 'Verified Tourist';
      storedReviews.unshift({
        id: 'rev_' + Date.now(),
        booking_id: currentBooking.id,
        provider_id: currentBooking.provider_id || currentBooking.providerId || '',
        provider_name: currentBooking.provider_name || 'Local Artisan',
        tourist_name: touristName,
        rating: rating,
        feedback: feedback, // Optional, can be empty string
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      });
      localStorage.setItem('bagalkote_provider_reviews', JSON.stringify(storedReviews));
    } catch (err) {
      console.warn('Error saving review to local storage:', err);
    }

    // 2. Send review to API backend
    const result = await API.submitBookingReview(currentBooking.id, rating, feedback);
    
    alert(`⭐ Thank you! Your rating (${rating}/5)${feedback ? ' and feedback' : ''} have been submitted.`);
    closeReviewModal();
  }

  function closeModal() {
    clearInterval(timerInterval);
    clearInterval(pollInterval);
    const m = document.getElementById('bookingWorkflowModal');
    if (m) m.classList.remove('active');
  }

  function closeReviewModal() {
    const m = document.getElementById('bookingReviewModal');
    if (m) m.classList.remove('active');
  }

  return {
    init: ensureModalsExist,
    startBookingProcess,
    confirmAndSubmitBooking,
    simulateProviderResponse,
    simulateTimeout,
    setRating,
    openReviewModal,
    submitReview,
    closeModal,
    closeReviewModal
  };
})();
