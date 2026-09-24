// complaints-page.js - Official District Grievance & Feedback Portal Frontend Logic

let attachedPhotoData = '';
let lastSubmittedTicket = null;
let _currentStarRating = 5;

document.addEventListener('DOMContentLoaded', () => {
  setStarRating(5);
  switchPortalTab('lodge');
});

// Interactive Star Rating System
window.setStarRating = function(val) {
  _currentStarRating = val;
  const input = document.getElementById('feedbackRatingValue');
  if (input) input.value = val;
  updateStarDisplay(val);
  const label = document.getElementById('starRatingLabel');
  if (label) {
    const textMap = {
      5: '5.0 — Excellent Experience ⭐⭐⭐⭐⭐',
      4: '4.0 — Very Good Experience ⭐⭐⭐⭐',
      3: '3.0 — Satisfactory / Good ⭐⭐⭐',
      2: '2.0 — Needs Improvement ⭐⭐',
      1: '1.0 — Poor Experience ⭐'
    };
    label.innerText = textMap[val] || `${val}.0`;
  }
};

window.hoverStarRating = function(val) {
  updateStarDisplay(val);
};

window.resetStarRating = function() {
  updateStarDisplay(_currentStarRating);
};

function updateStarDisplay(val) {
  const stars = document.querySelectorAll('#starRatingGroup .star-item');
  stars.forEach(s => {
    const starVal = parseInt(s.getAttribute('data-val'), 10);
    if (starVal <= val) {
      s.style.color = '#F59E0B';
    } else {
      s.style.color = '#CBD5E1';
    }
  });
}

// Tab Switcher between Grievance and Feedback
window.switchPortalTab = function(mode) {
  const btnLodge = document.getElementById('tabBtnLodge');
  const btnFeedback = document.getElementById('tabBtnFeedback');
  const grievancePanel = document.getElementById('grievanceFormPanel');
  const feedbackPanel = document.getElementById('feedbackSectionPanel');

  if (mode === 'feedback') {
    if (btnFeedback) {
      btnFeedback.className = 'btn btn-primary';
      btnFeedback.style.background = '';
    }
    if (btnLodge) {
      btnLodge.className = 'btn btn-outline';
      btnLodge.style.background = '#FFF';
    }
    if (grievancePanel) grievancePanel.style.display = 'none';
    if (feedbackPanel) feedbackPanel.style.display = 'block';
  } else {
    // Default: 'lodge'
    if (btnLodge) {
      btnLodge.className = 'btn btn-primary';
      btnLodge.style.background = '';
    }
    if (btnFeedback) {
      btnFeedback.className = 'btn btn-outline';
      btnFeedback.style.background = '#FFF';
    }
    if (grievancePanel) grievancePanel.style.display = 'block';
    if (feedbackPanel) feedbackPanel.style.display = 'none';
  }
};

// Preset photo attachment for quick demo
window.setPresetPhoto = function(url) {
  attachedPhotoData = url;
  const previewImg = document.getElementById('evidencePreviewImg');
  const previewCont = document.getElementById('photoPreviewContainer');
  previewImg.src = url;
  document.getElementById('photoPreviewName').innerText = '✓ Sample photo attached (' + url.split('/').pop() + ')';
  previewCont.style.display = 'flex';
};

// File Upload Preview
window.previewEvidencePhoto = function(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      attachedPhotoData = e.target.result;
      const previewImg = document.getElementById('evidencePreviewImg');
      previewImg.src = e.target.result;
      document.getElementById('photoPreviewName').innerText = '✓ ' + file.name;
      document.getElementById('photoPreviewContainer').style.display = 'flex';
    };
    reader.readAsDataURL(file);
  }
};

window.clearEvidencePhoto = function() {
  attachedPhotoData = '';
  document.getElementById('evidenceFileInput').value = '';
  document.getElementById('photoPreviewContainer').style.display = 'none';
};

// Form Submission Handler
window.handleComplaintSubmit = async function(event) {
  event.preventDefault();
  const btn = document.getElementById('submitGrievanceBtn');
  const statusMsg = document.getElementById('submissionStatusMsg');

  const type = document.getElementById('entryType').value;
  const category = document.getElementById('complaintCategory').value;
  const urgency = document.getElementById('complaintUrgency').value;
  const taluk = document.getElementById('complaintTaluk').value;
  const location = document.getElementById('complaintLocation').value;
  const incidentDate = document.getElementById('incidentDate').value || new Date().toLocaleString('en-IN');
  const description = document.getElementById('complaintDescription').value;
  const touristName = document.getElementById('touristName').value;
  const phone = document.getElementById('touristPhone').value;
  const email = document.getElementById('touristEmail').value;
  const touristType = document.getElementById('touristType').value;

  btn.disabled = true;
  btn.style.opacity = '0.7';
  statusMsg.style.color = '#B45309';
  statusMsg.innerText = 'Registering with DC Intelligence System...';

  const payload = {
    type,
    category,
    urgency,
    taluk,
    location,
    incidentDate,
    description,
    touristName,
    phone,
    email,
    touristType,
    photo: attachedPhotoData
  };

  try {
    const res = await API.submitComplaint(payload);

    btn.disabled = false;
    btn.style.opacity = '1';

    if (res && res.success) {
      lastSubmittedTicket = res.complaint || { ticketId: res.ticketId };
      statusMsg.innerText = '';
      
      // Open success modal
      document.getElementById('modalTicketId').innerText = res.ticketId;
      document.getElementById('modalTicketSummary').innerHTML = `
        <div><strong>Type:</strong> ${type === 'FEEDBACK' ? '🌟 Appreciation / Feedback' : '🚨 Grievance Report'}</div>
        <div><strong>Category:</strong> ${category} · <strong>Taluk:</strong> ${taluk}</div>
        <div><strong>Location:</strong> ${location}</div>
        <div><strong>Complainant:</strong> ${touristName} (${phone})</div>
        <div style="margin-top:0.4rem;color:#16a34a;font-weight:700;">Status: Registered with DC Tourism Redressal Cell</div>
      `;
      document.getElementById('complaintSuccessModal').style.display = 'flex';

      // Reset form
      document.getElementById('complaintForm').reset();
      clearEvidencePhoto();

    } else {
      statusMsg.style.color = '#DC2626';
      statusMsg.innerText = 'Submission error: ' + (res.error || 'Please try again.');
    }
  } catch (err) {
    btn.disabled = false;
    btn.style.opacity = '1';
    statusMsg.style.color = '#DC2626';
    statusMsg.innerText = 'Submission error: ' + err.message;
  }
};

// Feedback Submission Handler (Rating + One Feedback Box)
window.handleFeedbackOnlySubmit = async function(event) {
  event.preventDefault();
  const btn = document.getElementById('submitFeedbackBtn');
  const statusMsg = document.getElementById('feedbackStatusMsg');

  const rating = document.getElementById('feedbackRatingValue').value || '5';
  const description = (document.getElementById('feedbackOnlyDescription').value || '').trim();
  const touristName = (document.getElementById('feedbackTouristName').value || '').trim() || 'Visitor to Bagalkote';

  if (!description) {
    statusMsg.style.color = '#DC2626';
    statusMsg.innerText = 'Please write your feedback.';
    return;
  }

  btn.disabled = true;
  btn.style.opacity = '0.7';
  statusMsg.style.color = '#15803D';
  statusMsg.innerText = 'Submitting your feedback to District Administration...';

  const payload = {
    type: 'FEEDBACK',
    category: `Visitor Appreciation & Rating (${rating} / 5 Stars)`,
    urgency: 'Normal',
    taluk: 'Bagalkote District',
    location: 'District Heritage & Tourism',
    incidentDate: new Date().toLocaleDateString('en-IN'),
    description: `[Rating: ${rating}/5 Stars] ${description}`,
    touristName: touristName,
    phone: '',
    email: '',
    touristType: 'Visitor Feedback',
    photo: ''
  };

  try {
    const res = await API.submitComplaint(payload);

    btn.disabled = false;
    btn.style.opacity = '1';

    if (res && res.success) {
      statusMsg.innerText = '';

      // Open success modal
      document.getElementById('modalTicketId').innerText = res.ticketId;
      document.getElementById('modalTicketSummary').innerHTML = `
        <div><strong>Type:</strong> 🌟 Visitor Appreciation &amp; Feedback</div>
        <div><strong>Rating:</strong> ${'★'.repeat(Number(rating))}${'☆'.repeat(5 - Number(rating))} (${rating}/5 Stars)</div>
        <div style="margin-top:0.35rem;"><strong>Feedback:</strong> "${description}"</div>
        <div style="margin-top:0.35rem;"><strong>Submitted By:</strong> ${touristName}</div>
        <div style="margin-top:0.4rem;color:#16a34a;font-weight:700;">Status: Thank you! Feedback recorded for the District Administration.</div>
      `;
      document.getElementById('complaintSuccessModal').style.display = 'flex';

      // Reset feedback form
      document.getElementById('feedbackOnlyForm').reset();
      setStarRating(5);
    } else {
      statusMsg.style.color = '#DC2626';
      statusMsg.innerText = 'Submission error: ' + (res.error || 'Please try again.');
    }
  } catch (err) {
    btn.disabled = false;
    btn.style.opacity = '1';
    statusMsg.style.color = '#DC2626';
    statusMsg.innerText = 'Submission error: ' + err.message;
  }
};

window.closeSuccessModal = function() {
  document.getElementById('complaintSuccessModal').style.display = 'none';
};
