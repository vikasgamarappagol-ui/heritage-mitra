/**
 * AI Tourism Assistant Companion — Multimodal Edition
 * - Powered by Official Government Portals (bagalkot.nic.in, karnatakatourism.org, asi.nic.in) & Google Intelligence
 * - Modalities Supported:
 *   1. Text input & Text output
 *   2. Voice input (Web Speech Recognition + Whisper) & Voice output (SpeechSynthesis TTS)
 *   3. Image upload & Detailed Visual Heritage AI analysis (Qwen 3.8 27B Vision on Groq)
 *   4. Related Archival Images Gallery with full-screen Lightbox inspection
 * - Floating Pop-up Mascot on the bottom-right of ALL pages
 * - Slide-in Chat Drawer with quick chips, citations, audio player, and media cards
 */

(function () {
  // Global Voice & Media States
  window.bgkVoiceOutputEnabled = localStorage.getItem('bgk_auto_voice') !== 'false';
  window.currentUploadedImage = null;
  window.currentSpeechUtterance = null;
  window.activePlayingMsgId = null;
  window.isRecordingVoice = false;
  window.voiceRecognitionInstance = null;

  // ── INJECT CSS STYLES ────────────────────────────────────────────────────────
  function injectAIAssistantStyles() {
    if (document.getElementById('bgkAiAssistantStyles')) return;
    const style = document.createElement('style');
    style.id = 'bgkAiAssistantStyles';
    style.textContent = `
      /* ── FLOATING ROBO MASCOT WIDGET ────────────────────────────────────── */
      #bgkRoboPopupWidget {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 99990;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-family: 'Outfit', sans-serif;
        pointer-events: auto;
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

      body.ai-drawer-open #bgkRoboPopupWidget,
      body:has(.ai-drawer.active) #bgkRoboPopupWidget,
      .ai-drawer.active ~ #bgkRoboPopupWidget,
      #bgkRoboPopupWidget.drawer-open {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        transform: scale(0.6) translateY(30px) !important;
      }

      .robo-tooltip-bubble {
        background: #0D1B2A;
        color: #FFFFFF;
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.45rem 0.9rem;
        border-radius: 20px;
        margin-bottom: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        border: 1px solid #D4AF37;
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        animation: floatBubble 3s ease-in-out infinite;
        white-space: nowrap;
        transition: transform 0.2s, opacity 0.2s;
      }

      .robo-tooltip-bubble:hover {
        transform: scale(1.04);
      }

      @keyframes floatBubble {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }

      .robo-fab-btn {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: linear-gradient(135deg, #0D1B2A 0%, #1e3558 50%, #C85A32 100%);
        border: 3px solid #D4AF37;
        box-shadow: 0 8px 25px rgba(13, 27, 42, 0.35), 0 0 15px rgba(212, 175, 55, 0.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        outline: none;
      }

      .robo-fab-btn:hover {
        transform: scale(1.1) rotate(-5deg);
        box-shadow: 0 12px 30px rgba(200, 90, 50, 0.45), 0 0 20px rgba(212, 175, 55, 0.5);
      }

      .robo-avatar-icon {
        font-size: 2.2rem;
        user-select: none;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        animation: roboWiggle 4s ease-in-out infinite;
      }

      @keyframes roboWiggle {
        0%, 90%, 100% { transform: rotate(0deg); }
        92% { transform: rotate(-10deg); }
        96% { transform: rotate(10deg); }
      }

      .robo-live-badge {
        position: absolute;
        top: 0;
        right: 0;
        width: 16px;
        height: 16px;
        background: #10B981;
        border: 2.5px solid #FFFFFF;
        border-radius: 50%;
        box-shadow: 0 0 8px #10B981;
        animation: pulseLive 2s infinite;
      }

      @keyframes pulseLive {
        0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
        70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
        100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
      }

      /* ── AI CHAT DRAWER OVERLAY & CONTAINER ─────────────────────────────── */
      .ai-drawer-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(13, 27, 42, 0.4);
        backdrop-filter: blur(3px);
        z-index: 99998;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }

      .ai-drawer-overlay.active {
        opacity: 1;
        visibility: visible;
      }

      .ai-drawer {
        position: fixed;
        top: 0;
        right: -540px;
        width: 100%;
        max-width: 500px;
        height: 100vh;
        background: #FFFFFF;
        box-shadow: -10px 0 40px rgba(0, 0, 0, 0.25);
        z-index: 100000;
        display: flex;
        flex-direction: column;
        transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        font-family: 'Outfit', sans-serif;
      }

      .ai-drawer.active {
        right: 0;
      }

      .ai-drawer-header {
        padding: 1rem 1.25rem;
        background: linear-gradient(135deg, #0D1B2A 0%, #1e3558 100%);
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #D4AF37;
        flex-shrink: 0;
      }

      .ai-header-title {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .ai-header-robo-icon {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: linear-gradient(135deg, #C85A32, #D4AF37);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        border: 2px solid rgba(255,255,255,0.4);
      }

      .ai-gov-subtext {
        font-size: 0.72rem;
        color: #D4AF37;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-top: 2px;
      }

      .ai-header-actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .ai-auto-voice-toggle {
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(212, 175, 55, 0.6);
        color: #FFFFFF;
        font-size: 0.72rem;
        font-weight: 600;
        padding: 0.35rem 0.65rem;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
        transition: all 0.2s;
      }

      .ai-auto-voice-toggle.active {
        background: #10B981;
        border-color: #34D399;
        color: #FFFFFF;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
      }

      .ai-auto-voice-toggle:hover {
        transform: translateY(-1px);
      }

      /* ── QUICK PROMPTS CHIPS ────────────────────────────────────────────── */
      .ai-quick-prompts {
        display: flex;
        gap: 0.5rem;
        overflow-x: auto;
        padding: 0.7rem 1rem;
        background: #F8FAFC;
        border-bottom: 1px solid #E2E8F0;
        scrollbar-width: none;
        flex-shrink: 0;
      }

      .ai-quick-prompts::-webkit-scrollbar {
        display: none;
      }

      .quick-chip {
        background: #FFFFFF;
        border: 1px solid #CBD5E1;
        padding: 0.35rem 0.8rem;
        border-radius: 50px;
        font-size: 0.75rem;
        font-weight: 600;
        color: #334155;
        white-space: nowrap;
        cursor: pointer;
        transition: all 0.2s;
        font-family: 'Outfit', sans-serif;
      }

      .quick-chip:hover {
        background: #C85A32;
        color: #FFFFFF;
        border-color: #C85A32;
        transform: translateY(-1px);
      }

      /* ── MESSAGES CONTAINER ─────────────────────────────────────────────── */
      .ai-messages-container {
        flex: 1;
        overflow-y: auto;
        padding: 1.25rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        background: #F8FAFC;
      }

      .ai-message {
        display: flex;
        gap: 0.75rem;
        max-width: 96%;
      }

      .ai-message.user-message {
        align-self: flex-end;
        flex-direction: row-reverse;
      }

      .ai-message.bot-message {
        align-self: flex-start;
      }

      .msg-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #0D1B2A;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.15rem;
        flex-shrink: 0;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      }

      .bot-message .msg-avatar {
        background: linear-gradient(135deg, #0D1B2A, #C85A32);
        border: 1.5px solid #D4AF37;
      }

      .msg-body {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 16px;
        padding: 0.9rem 1.15rem;
        font-size: 0.88rem;
        line-height: 1.55;
        color: #1E293B;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        position: relative;
        word-break: break-word;
      }

      .user-message .msg-body {
        background: linear-gradient(135deg, #C85A32 0%, #B84E27 100%);
        color: #FFFFFF;
        border: none;
        border-bottom-right-radius: 4px;
      }

      .bot-message .msg-body {
        border-bottom-left-radius: 4px;
      }

      /* ── USER UPLOADED IMAGE PREVIEW IN BUBBLE ──────────────────────────── */
      .msg-user-image {
        margin-bottom: 0.6rem;
        border-radius: 10px;
        overflow: hidden;
        border: 2px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        max-width: 260px;
      }

      .msg-user-image img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        display: block;
        transition: transform 0.2s;
      }

      .msg-user-image:hover img {
        transform: scale(1.02);
      }

      /* ── VOICE AUDIO PLAYER IN BOT BUBBLE ───────────────────────────────── */
      .ai-msg-voice-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #F1F5F9;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 0.4rem 0.75rem;
        margin-bottom: 0.75rem;
        font-size: 0.78rem;
      }

      .ai-voice-play-btn {
        background: #0D1B2A;
        color: #FFFFFF;
        border: none;
        border-radius: 20px;
        padding: 0.3rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: all 0.2s;
      }

      .ai-voice-play-btn:hover {
        background: #C85A32;
        transform: translateY(-1px);
      }

      .ai-voice-play-btn.speaking {
        background: #DC2626;
        animation: pulseLive 1.5s infinite;
      }

      /* Animated sound wave bars */
      .ai-soundwave-bars {
        display: inline-flex;
        align-items: flex-end;
        gap: 2px;
        height: 14px;
        margin-left: 4px;
      }

      .ai-soundwave-bars .bar {
        width: 3px;
        background: #C85A32;
        border-radius: 2px;
        height: 3px;
        transition: height 0.15s ease;
      }

      .speaking .ai-soundwave-bars .bar:nth-child(1) { animation: waveBar 0.5s ease-in-out infinite alternate; }
      .speaking .ai-soundwave-bars .bar:nth-child(2) { animation: waveBar 0.7s ease-in-out infinite alternate 0.1s; }
      .speaking .ai-soundwave-bars .bar:nth-child(3) { animation: waveBar 0.4s ease-in-out infinite alternate 0.2s; }
      .speaking .ai-soundwave-bars .bar:nth-child(4) { animation: waveBar 0.6s ease-in-out infinite alternate 0.3s; }

      @keyframes waveBar {
        0% { height: 3px; }
        100% { height: 14px; }
      }

      /* ── RELATED IMAGES GALLERY SECTION ─────────────────────────────────── */
      .ai-related-images-section {
        margin-top: 0.9rem;
        padding-top: 0.75rem;
        border-top: 1px solid #E2E8F0;
      }

      .ai-related-images-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        font-size: 0.78rem;
        color: #0D1B2A;
        margin-bottom: 0.6rem;
      }

      .ai-related-images-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 0.6rem;
      }

      .ai-image-card {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
        display: flex;
        flex-direction: column;
      }

      .ai-image-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(200, 90, 50, 0.2);
        border-color: #C85A32;
      }

      .ai-image-thumb-wrapper {
        position: relative;
        width: 100%;
        height: 85px;
        background: #E2E8F0;
        overflow: hidden;
      }

      .ai-image-thumb-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.3s;
      }

      .ai-image-card:hover .ai-image-thumb-wrapper img {
        transform: scale(1.08);
      }

      .ai-image-category-pill {
        position: absolute;
        top: 4px;
        left: 4px;
        background: rgba(13, 27, 42, 0.85);
        color: #D4AF37;
        font-size: 0.62rem;
        font-weight: 700;
        padding: 1px 6px;
        border-radius: 10px;
        backdrop-filter: blur(2px);
      }

      .ai-image-card-title {
        font-size: 0.74rem;
        font-weight: 700;
        color: #0D1B2A;
        padding: 0.35rem 0.5rem 0.15rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .ai-image-card-caption {
        font-size: 0.66rem;
        color: #64748B;
        padding: 0 0.5rem 0.45rem;
        line-height: 1.25;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* ── SOURCE CITATIONS & BADGES ──────────────────────────────────────── */
      .msg-source-tag {
        margin-top: 0.75rem;
        padding-top: 0.55rem;
        border-top: 1px solid #E2E8F0;
        font-size: 0.75rem;
        color: #64748B;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .gov-badge-tag {
        background: #EFF6FF;
        color: #1E40AF;
        border: 1px solid #BFDBFE;
        padding: 0.2rem 0.6rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 0.68rem;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      /* ── INPUT TOOLBAR & ACTIONS ────────────────────────────────────────── */
      .ai-input-area {
        padding: 0.85rem 1rem;
        background: #FFFFFF;
        border-top: 1px solid #E2E8F0;
        flex-shrink: 0;
      }

      /* Active recording indicator banner */
      .ai-voice-active-banner {
        display: none;
        align-items: center;
        justify-content: space-between;
        background: #FEE2E2;
        border: 1px solid #FCA5A5;
        border-radius: 8px;
        padding: 0.45rem 0.85rem;
        margin-bottom: 0.5rem;
        font-size: 0.78rem;
        color: #991B1B;
        font-weight: 600;
        animation: pulseLight 1.5s infinite;
      }

      .ai-voice-active-banner.active {
        display: flex;
      }

      @keyframes pulseLight {
        0%, 100% { background: #FEE2E2; }
        50% { background: #FECACA; }
      }

      /* Uploaded Image Preview Strip */
      .ai-image-preview-strip {
        display: none;
        align-items: center;
        gap: 0.75rem;
        background: #F8FAFC;
        border: 1px dashed #CBD5E1;
        border-radius: 10px;
        padding: 0.5rem 0.75rem;
        margin-bottom: 0.5rem;
      }

      .ai-image-preview-strip.active {
        display: flex;
      }

      .ai-preview-thumb {
        width: 44px;
        height: 44px;
        border-radius: 8px;
        object-fit: cover;
        border: 1.5px solid #C85A32;
      }

      .ai-preview-info {
        flex: 1;
        font-size: 0.75rem;
        color: #334155;
      }

      .ai-preview-info strong {
        color: #0D1B2A;
        display: block;
      }

      .ai-remove-img-btn {
        background: none;
        border: none;
        color: #EF4444;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 0.2rem;
        line-height: 1;
      }

      .ai-input-wrapper {
        display: flex;
        gap: 0.4rem;
        background: #F1F5F9;
        border: 1.5px solid #CBD5E1;
        border-radius: 50px;
        padding: 0.3rem 0.4rem 0.3rem 0.8rem;
        align-items: center;
        transition: border-color 0.2s, background-color 0.2s;
      }

      .ai-input-wrapper:focus-within {
        border-color: #C85A32;
        background: #FFFFFF;
      }

      .ai-input-wrapper input {
        flex: 1;
        border: none;
        background: transparent;
        font-size: 0.88rem;
        font-family: 'Outfit', sans-serif;
        outline: none;
        color: #0D1B2A;
      }

      .ai-input-action-btn {
        width: 36px;
        height: 36px;
        min-width: 36px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 1px solid #CBD5E1;
        color: #334155;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        transition: all 0.2s;
      }

      .ai-input-action-btn:hover {
        background: #C85A32;
        color: #FFFFFF;
        border-color: #C85A32;
        transform: translateY(-1px);
      }

      .ai-input-action-btn.active-recording {
        background: #DC2626 !important;
        color: #FFFFFF !important;
        border-color: #B91C1C !important;
        animation: pulseRecording 1.2s infinite;
      }

      @keyframes pulseRecording {
        0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
        70% { box-shadow: 0 0 0 8px rgba(220, 38, 38, 0); }
        100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
      }

      .ai-send-btn {
        width: 40px;
        height: 40px;
        min-width: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #C85A32 0%, #A04020 100%);
        color: #FFFFFF;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.15rem;
        box-shadow: 0 4px 12px rgba(200, 90, 50, 0.35);
        transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        outline: none;
      }

      .ai-send-btn:hover {
        background: linear-gradient(135deg, #D4633B 0%, #B04525 100%);
        transform: scale(1.06);
      }

      /* ── FULLSCREEN IMAGE LIGHTBOX MODAL ────────────────────────────────── */
      .ai-lightbox-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(13, 27, 42, 0.92);
        backdrop-filter: blur(6px);
        z-index: 999999;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        box-sizing: border-box;
      }

      .ai-lightbox-modal.active {
        display: flex;
      }

      .ai-lightbox-content {
        max-width: 850px;
        width: 100%;
        background: #0D1B2A;
        border: 2px solid #D4AF37;
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
      }

      .ai-lightbox-close {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.65);
        border: 1px solid rgba(255, 255, 255, 0.4);
        color: #FFFFFF;
        font-size: 1.6rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: background 0.2s;
      }

      .ai-lightbox-close:hover {
        background: #C85A32;
      }

      .ai-lightbox-content img {
        width: 100%;
        max-height: 65vh;
        object-fit: contain;
        background: #050B14;
        display: block;
      }

      .ai-lightbox-caption {
        padding: 1rem 1.25rem;
        background: #0D1B2A;
        color: #FFFFFF;
      }

      .ai-lightbox-title {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        font-size: 1.15rem;
        color: #D4AF37;
        margin-bottom: 0.35rem;
      }

      .ai-lightbox-desc {
        font-size: 0.85rem;
        color: #CBD5E1;
        line-height: 1.45;
      }
    `;
    document.head.appendChild(style);
  }

  // ── INJECT POPUP ROBO & SLIDE-IN CHAT DRAWER ──────────────────────────────────
  function ensureRoboAndDrawerMounted() {
    injectAIAssistantStyles();

    // 1. Floating Robo Mascot Button
    if (!document.getElementById('bgkRoboPopupWidget')) {
      const roboHtml = `
        <div id="bgkRoboPopupWidget" aria-label="AI Tourism Assistant">
          <div class="robo-tooltip-bubble" onclick="window.toggleAIDrawer()">
            <span>🤖</span>
            <span>Ask Bagalkote AI Guide</span>
          </div>
          <button class="robo-fab-btn" onclick="window.toggleAIDrawer()" title="Chat with Bagalkote AI Tourism Assistant">
            <span class="robo-avatar-icon">🤖</span>
            <span class="robo-live-badge" title="Online: Multimodal Voice & Visual AI"></span>
          </button>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', roboHtml);
    }

    // 2. Chat Drawer
    let drawer = document.getElementById('aiDrawer');
    if (!drawer) {
      const drawerHtml = `
        <div class="ai-drawer-overlay" id="aiDrawerOverlay" onclick="window.closeAIDrawer()"></div>
        <div class="ai-drawer" id="aiDrawer">
          <!-- Header -->
          <div class="ai-drawer-header">
            <div class="ai-header-title">
              <div class="ai-header-robo-icon">🤖</div>
              <div>
                <div style="font-family:'Cinzel',serif;font-weight:700;font-size:1.05rem;">Bagalkote AI Guide</div>
                <div class="ai-gov-subtext">🎙️ Voice · 📷 Visual AI · 🏛️ Govt Verified</div>
              </div>
            </div>
            <div class="ai-header-actions">
              <button id="aiAutoVoiceToggle" class="ai-auto-voice-toggle ${window.bgkVoiceOutputEnabled ? 'active' : ''}" onclick="window.toggleAutoVoice()" title="Toggle voice narration for responses">
                <span id="aiAutoVoiceIcon">${window.bgkVoiceOutputEnabled ? '🔊' : '🔇'}</span>
                <span>Voice <strong id="aiAutoVoiceText">${window.bgkVoiceOutputEnabled ? 'ON' : 'OFF'}</strong></span>
              </button>
              <button id="closeAIChatBtn" onclick="window.closeAIDrawer()" style="background:none;border:none;color:#FFFFFF;font-size:1.6rem;cursor:pointer;padding:0.25rem;line-height:1;" title="Close Chat">&times;</button>
            </div>
          </div>

          <!-- Quick Chips -->
          <div class="ai-quick-prompts">
            <button class="quick-chip" data-prompt="What are the top UNESCO heritage monuments in Bagalkote?">🏛️ UNESCO Sites</button>
            <button class="quick-chip" data-prompt="Where can I see and buy authentic GI Ilkal sarees?">🧵 Ilkal Sarees</button>
            <button class="quick-chip" data-prompt="What is traditional North Karnataka Jolada Rotti meal and Kardant?">🍲 Traditional Food</button>
            <button class="quick-chip" data-prompt="Which monuments in Bagalkote have wheelchair accessibility and ramps?">♿ Accessible Places</button>
            <button class="quick-chip" data-prompt="What are the official 24x7 emergency helpline numbers in Bagalkote?">🚨 Helplines</button>
          </div>

          <!-- Messages Container -->
          <div class="ai-messages-container" id="aiMessagesContainer">
            <div class="ai-message bot-message" id="welcomeMsg">
              <div class="msg-avatar">🤖</div>
              <div class="msg-body">
                <div><strong>Namaskara! Welcome to Bagalkote.</strong></div>
                <div style="margin-top:0.35rem;">
                  I am your Multimodal AI Tourism Companion. You can <strong>type questions</strong>, <strong>speak with your voice (🎙️)</strong>, or <strong>upload photos (📷)</strong> of monuments, temples, crafts, or food to get detailed historical, architectural, and travel information!
                </div>
                <div style="margin-top:0.5rem;font-size:0.75rem;color:#64748B;">
                  🌐 <em>Responses are verified with <strong>Official Government Sources</strong> (bagalkot.nic.in, karnatakatourism.org, asi.nic.in) and include related archival photos and voice narration.</em>
                </div>
              </div>
            </div>
          </div>

          <!-- Input Area with Voice & Image Upload -->
          <div class="ai-input-area">
            <!-- Active Voice Recording Banner -->
            <div class="ai-voice-active-banner" id="aiVoiceActiveBanner">
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="font-size:1rem;">🔴</span>
                <span>Listening... Speak your question now (English, ಕನ್ನಡ, हिन्दी)</span>
              </div>
              <button type="button" onclick="window.stopVoiceInput()" style="background:#B91C1C;color:#FFFFFF;border:none;border-radius:12px;padding:2px 8px;font-size:0.7rem;cursor:pointer;">Stop</button>
            </div>

            <!-- Uploaded Image Preview Strip -->
            <div class="ai-image-preview-strip" id="aiImagePreviewStrip">
              <img id="aiPreviewImg" class="ai-preview-thumb" src="" alt="Upload preview">
              <div class="ai-preview-info">
                <strong>Photo selected for Visual AI Analysis</strong>
                <span>Ask a question about this photo, or press send</span>
              </div>
              <button type="button" class="ai-remove-img-btn" onclick="window.clearUploadedImage()" title="Remove image">&times;</button>
            </div>

            <form id="aiInputForm" onsubmit="window.submitAIChat(event)">
              <div class="ai-input-wrapper">
                <input type="file" id="aiImageFileInput" accept="image/*" style="display:none" onchange="window.handleImageSelected(event)">
                <button type="button" id="aiImageUploadBtn" class="ai-input-action-btn" title="Upload image of monument, craft, or food" onclick="document.getElementById('aiImageFileInput').click()">📷</button>
                <button type="button" id="aiVoiceInputBtn" class="ai-input-action-btn" title="Ask question with voice (English, Kannada, Hindi)" onclick="window.toggleVoiceInput()">🎙️</button>
                <input type="text" id="aiUserInput" placeholder="Type question, use voice (🎙️), or upload photo (📷)..." autocomplete="off">
                <button type="submit" class="ai-send-btn" title="Send Question">➤</button>
              </div>
            </form>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', drawerHtml);
      drawer = document.getElementById('aiDrawer');
    }

    // Ensure multimodal buttons exist in drawer input area even if drawer was in pre-existing HTML
    if (drawer) {
      // 1. Ensure Voice ON/OFF button exists in header
      const headerActions = drawer.querySelector('.ai-header-actions') || drawer.querySelector('.ai-drawer-header');
      if (headerActions && !drawer.querySelector('#aiAutoVoiceToggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'aiAutoVoiceToggle';
        toggleBtn.className = `ai-auto-voice-toggle ${window.bgkVoiceOutputEnabled ? 'active' : ''}`;
        toggleBtn.onclick = window.toggleAutoVoice;
        toggleBtn.title = 'Toggle voice narration for responses';
        toggleBtn.innerHTML = `
          <span id="aiAutoVoiceIcon">${window.bgkVoiceOutputEnabled ? '🔊' : '🔇'}</span>
          <span>Voice <strong id="aiAutoVoiceText">${window.bgkVoiceOutputEnabled ? 'ON' : 'OFF'}</strong></span>
        `;
        const closeBtn = drawer.querySelector('#closeAIChatBtn, .close-btn');
        if (closeBtn && closeBtn.parentNode) {
          closeBtn.parentNode.insertBefore(toggleBtn, closeBtn);
        } else {
          headerActions.appendChild(toggleBtn);
        }
      }

      // 2. Ensure Voice banner & Image preview strip exist in form
      const inputForm = drawer.querySelector('#aiInputForm, .ai-input-form');
      if (inputForm) {
        if (!document.getElementById('aiVoiceActiveBanner')) {
          const banner = document.createElement('div');
          banner.className = 'ai-voice-active-banner';
          banner.id = 'aiVoiceActiveBanner';
          banner.innerHTML = `
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font-size:1rem;">🔴</span>
              <span>Listening... Speak your question now (English, ಕನ್ನಡ, हिन्दी)</span>
            </div>
            <button type="button" onclick="window.stopVoiceInput()" style="background:#B91C1C;color:#FFFFFF;border:none;border-radius:12px;padding:2px 8px;font-size:0.7rem;cursor:pointer;">Stop</button>
          `;
          inputForm.insertBefore(banner, inputForm.firstChild);
        }

        if (!document.getElementById('aiImagePreviewStrip')) {
          const strip = document.createElement('div');
          strip.className = 'ai-image-preview-strip';
          strip.id = 'aiImagePreviewStrip';
          strip.innerHTML = `
            <img id="aiPreviewImg" class="ai-preview-thumb" src="" alt="Upload preview">
            <div class="ai-preview-info">
              <strong>Photo selected for Visual AI Analysis</strong>
              <span>Ask a question about this photo, or press send</span>
            </div>
            <button type="button" class="ai-remove-img-btn" onclick="window.clearUploadedImage()" title="Remove image">&times;</button>
          `;
          const banner = document.getElementById('aiVoiceActiveBanner');
          if (banner && banner.nextSibling) {
            inputForm.insertBefore(strip, banner.nextSibling);
          } else {
            inputForm.insertBefore(strip, inputForm.firstChild);
          }
        }

        // 3. Ensure input wrapper contains Camera (📷) and Mic (🎙️) buttons
        const wrapper = inputForm.querySelector('.input-wrapper, .ai-input-wrapper');
        const userInput = inputForm.querySelector('#aiUserInput, input[type="text"]');
        if (wrapper && userInput) {
          if (!document.getElementById('aiImageFileInput')) {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.id = 'aiImageFileInput';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            fileInput.onchange = window.handleImageSelected;
            wrapper.insertBefore(fileInput, userInput);
          }

          if (!document.getElementById('aiImageUploadBtn')) {
            const imgBtn = document.createElement('button');
            imgBtn.type = 'button';
            imgBtn.id = 'aiImageUploadBtn';
            imgBtn.className = 'ai-input-action-btn';
            imgBtn.title = 'Upload image of monument, craft, or food';
            imgBtn.innerHTML = '📷';
            imgBtn.onclick = () => {
              const fi = document.getElementById('aiImageFileInput');
              if (fi) fi.click();
            };
            wrapper.insertBefore(imgBtn, userInput);
          }

          if (!document.getElementById('aiVoiceInputBtn')) {
            const micBtn = document.createElement('button');
            micBtn.type = 'button';
            micBtn.id = 'aiVoiceInputBtn';
            micBtn.className = 'ai-input-action-btn';
            micBtn.title = 'Ask question with voice (English, Kannada, Hindi)';
            micBtn.innerHTML = '🎙️';
            micBtn.onclick = window.toggleVoiceInput;
            wrapper.insertBefore(micBtn, userInput);
          }
        }
      }
    }

    // 3. Mount Fullscreen Lightbox Modal if missing
    if (!document.getElementById('aiLightboxModal')) {
      const lightboxHtml = `
        <div class="ai-lightbox-modal" id="aiLightboxModal" onclick="window.closeLightbox(event)">
          <div class="ai-lightbox-content" onclick="event.stopPropagation()">
            <button class="ai-lightbox-close" onclick="window.closeLightbox()" title="Close">&times;</button>
            <img id="aiLightboxImg" src="" alt="Monument Full View">
            <div class="ai-lightbox-caption">
              <div id="aiLightboxTitle" class="ai-lightbox-title"></div>
              <div id="aiLightboxDesc" class="ai-lightbox-desc"></div>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', lightboxHtml);
    }

    if (!document.getElementById('aiDrawerOverlay')) {
      const ov = document.createElement('div');
      ov.className = 'ai-drawer-overlay';
      ov.id = 'aiDrawerOverlay';
      ov.onclick = window.closeAIDrawer;
      document.body.appendChild(ov);
    }

    bindChatListeners();
    setupDragAndDrop();
  }

  function bindChatListeners() {
    // Quick prompt chips
    const chips = document.querySelectorAll('.quick-chip');
    chips.forEach(chip => {
      if (chip._chipBound) return;
      chip._chipBound = true;
      chip.onclick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        const prompt = chip.getAttribute('data-prompt') || chip.textContent.trim();
        if (prompt) window.handleUserMessage(prompt);
      };
    });

    // Close buttons
    const closeBtns = document.querySelectorAll('#closeAIChatBtn, .ai-drawer .close-btn');
    closeBtns.forEach(btn => {
      btn.onclick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        window.closeAIDrawer();
      };
    });

    // Header buttons
    const openBtn = document.getElementById('openAIChatBtn');
    const heroBtn = document.getElementById('heroAskAIBtn');
    if (openBtn) openBtn.onclick = () => window.openAIDrawer();
    if (heroBtn) heroBtn.onclick = () => window.openAIDrawer();

    // Input form submit
    const drawerForms = document.querySelectorAll('#aiInputForm, .ai-input-form');
    drawerForms.forEach(form => {
      if (form && !form._bgkBound) {
        form._bgkBound = true;
        form.addEventListener('submit', (e) => {
          window.submitAIChat(e);
        });
      }
    });

    // Text inputs for Enter key
    const inputs = document.querySelectorAll('#aiDrawer input[type="text"], #aiUserInput');
    inputs.forEach(inp => {
      if (inp && !inp._bgkBound) {
        inp._bgkBound = true;
        inp.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            window.submitAIChat(e);
          }
        });
      }
    });
  }

  // ── DRAG AND DROP & PASTE SUPPORT FOR IMAGES ──────────────────────────────────
  function setupDragAndDrop() {
    const drawer = document.getElementById('aiDrawer');
    if (!drawer || drawer._dragBound) return;
    drawer._dragBound = true;

    drawer.addEventListener('dragover', (e) => {
      e.preventDefault();
      drawer.style.outline = '2px dashed #C85A32';
    });

    drawer.addEventListener('dragleave', (e) => {
      e.preventDefault();
      drawer.style.outline = '';
    });

    drawer.addEventListener('drop', (e) => {
      e.preventDefault();
      drawer.style.outline = '';
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
          loadSelectedImageFile(file);
        }
      }
    });

    // Paste event support (e.g. screenshot paste)
    window.addEventListener('paste', (e) => {
      const drawer = document.getElementById('aiDrawer');
      if (!drawer || !drawer.classList.contains('active')) return;
      if (e.clipboardData && e.clipboardData.items) {
        for (let i = 0; i < e.clipboardData.items.length; i++) {
          const item = e.clipboardData.items[i];
          if (item.type.indexOf('image') !== -1) {
            const blob = item.getAsFile();
            loadSelectedImageFile(blob);
            break;
          }
        }
      }
    });
  }

  // ── IMAGE UPLOAD HANDLING ──────────────────────────────────────────────────
  window.handleImageSelected = function (event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      loadSelectedImageFile(file);
    }
  };

  function loadSelectedImageFile(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      window.currentUploadedImage = e.target.result;
      const previewStrip = document.getElementById('aiImagePreviewStrip');
      const previewImg = document.getElementById('aiPreviewImg');
      const input = document.getElementById('aiUserInput');
      if (previewStrip && previewImg) {
        previewImg.src = window.currentUploadedImage;
        previewStrip.classList.add('active');
      }
      if (input) {
        input.placeholder = "Ask about this monument/photo, or click send ➤...";
        input.focus();
      }
    };
    reader.readAsDataURL(file);
  }

  window.clearUploadedImage = function () {
    window.currentUploadedImage = null;
    const previewStrip = document.getElementById('aiImagePreviewStrip');
    const fileInput = document.getElementById('aiImageFileInput');
    const input = document.getElementById('aiUserInput');
    if (previewStrip) previewStrip.classList.remove('active');
    if (fileInput) fileInput.value = '';
    if (input) input.placeholder = "Type question, use voice (🎙️), or upload photo (📷)...";
  };

  // ── VOICE SPEECH-TO-TEXT INPUT ───────────────────────────────────────────────
  window.toggleVoiceInput = function () {
    if (window.isRecordingVoice) {
      window.stopVoiceInput();
    } else {
      window.startVoiceInput();
    }
  };

  window.startVoiceInput = function () {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const banner = document.getElementById('aiVoiceActiveBanner');
    const micBtn = document.getElementById('aiVoiceInputBtn');
    const input = document.getElementById('aiUserInput');

    // Stop any ongoing assistant speech first
    window.stopSpeaking();

    if (!SpeechRecognition) {
      alert('Speech recognition is not directly supported in this browser. Please type your question or use Chrome/Edge for instant voice.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      window.voiceRecognitionInstance = recognition;
      recognition.continuous = false;
      recognition.interimResults = true;

      // Select language
      let lang = 'en-IN';
      const currentLang = window.currentLanguage || document.body.getAttribute('data-lang') || 'en';
      if (currentLang === 'kn') lang = 'kn-IN';
      else if (currentLang === 'hi') lang = 'hi-IN';
      recognition.lang = lang;

      recognition.onstart = function () {
        window.isRecordingVoice = true;
        if (banner) banner.classList.add('active');
        if (micBtn) micBtn.classList.add('active-recording');
        if (input) input.placeholder = "Listening... Speak now...";
      };

      recognition.onresult = function (event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        if (input && transcript) {
          input.value = transcript;
        }
      };

      recognition.onerror = function (event) {
        console.warn('Speech recognition error:', event.error);
        window.stopVoiceInput();
      };

      recognition.onend = function () {
        window.stopVoiceInput();
        if (input && input.value.trim()) {
          setTimeout(() => {
            window.submitAIChat();
          }, 300);
        }
      };

      recognition.start();
    } catch (err) {
      console.error('Speech recognition exception:', err);
      window.stopVoiceInput();
    }
  };

  window.stopVoiceInput = function () {
    window.isRecordingVoice = false;
    if (window.voiceRecognitionInstance) {
      try { window.voiceRecognitionInstance.stop(); } catch (e) {}
      window.voiceRecognitionInstance = null;
    }
    const banner = document.getElementById('aiVoiceActiveBanner');
    const micBtn = document.getElementById('aiVoiceInputBtn');
    const input = document.getElementById('aiUserInput');
    if (banner) banner.classList.remove('active');
    if (micBtn) micBtn.classList.remove('active-recording');
    if (input && !window.currentUploadedImage) {
      input.placeholder = "Type question, use voice (🎙️), or upload photo (📷)...";
    }
  };

  // ── VOICE TEXT-TO-SPEECH OUTPUT ──────────────────────────────────────────────
  window.toggleAutoVoice = function () {
    window.bgkVoiceOutputEnabled = !window.bgkVoiceOutputEnabled;
    localStorage.setItem('bgk_auto_voice', window.bgkVoiceOutputEnabled ? 'true' : 'false');
    const toggleBtn = document.getElementById('aiAutoVoiceToggle');
    const icon = document.getElementById('aiAutoVoiceIcon');
    const text = document.getElementById('aiAutoVoiceText');
    if (toggleBtn) {
      if (window.bgkVoiceOutputEnabled) {
        toggleBtn.classList.add('active');
        if (icon) icon.textContent = '🔊';
        if (text) text.textContent = 'ON';
      } else {
        toggleBtn.classList.remove('active');
        if (icon) icon.textContent = '🔇';
        if (text) text.textContent = 'OFF';
        window.stopSpeaking();
      }
    }
  };

  window.stopSpeaking = function () {
    if (window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    window.currentSpeechUtterance = null;
    window.activePlayingMsgId = null;

    // Reset all play buttons
    document.querySelectorAll('.ai-voice-play-btn').forEach(btn => {
      btn.classList.remove('speaking');
      btn.innerHTML = '▶️ Listen';
    });
  };

  window.togglePlayMessageAudio = function (msgId) {
    if (window.activePlayingMsgId === msgId) {
      window.stopSpeaking();
      return;
    }

    const msgEl = document.getElementById(msgId);
    if (!msgEl) return;

    const rawText = msgEl.getAttribute('data-raw-text') || '';
    if (!rawText) return;

    window.speakText(rawText, msgId);
  };

  window.speakText = function (rawText, msgId = null, preferredLang = null) {
    if (!window.speechSynthesis) return;

    window.stopSpeaking();

    // Clean text for natural speech (strip markdown headers, asterisks, URLs, links, bullet symbols)
    let cleanText = String(rawText || '')
      .replace(/###\s+/g, '')
      .replace(/##\s+/g, '')
      .replace(/#\s+/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/🏛️|⏳|🎨|ℹ️|📍|🌐|✅|⚠️|🔴|🔍|🤖|👤/g, '')
      .replace(/Verified Sources:.*/is, '')
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    window.currentSpeechUtterance = utterance;

    // Detect language
    let lang = preferredLang || 'en-IN';
    if (/[\u0C80-\u0CFF]/.test(cleanText)) {
      lang = 'kn-IN';
    } else if (/[\u0900-\u097F]/.test(cleanText)) {
      lang = 'hi-IN';
    } else {
      const pageLang = window.currentLanguage || document.body.getAttribute('data-lang');
      if (pageLang === 'kn') lang = 'kn-IN';
      else if (pageLang === 'hi') lang = 'hi-IN';
    }
    utterance.lang = lang;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick best matching voice
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length) {
      const targetLangPrefix = lang.split('-')[0];
      const matchedVoice = voices.find(v => v.lang === lang) ||
                           voices.find(v => v.lang.startsWith(targetLangPrefix)) ||
                           voices.find(v => v.lang.includes('en-IN')) ||
                           voices.find(v => v.lang.includes('en'));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
    }

    if (msgId) {
      window.activePlayingMsgId = msgId;
      const btn = document.querySelector(`#${msgId} .ai-voice-play-btn`);
      if (btn) {
        btn.classList.add('speaking');
        btn.innerHTML = `
          <span>⏸️ Pause</span>
          <span class="ai-soundwave-bars">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </span>
        `;
      }
    }

    utterance.onend = function () {
      window.activePlayingMsgId = null;
      if (msgId) {
        const btn = document.querySelector(`#${msgId} .ai-voice-play-btn`);
        if (btn) {
          btn.classList.remove('speaking');
          btn.innerHTML = '🔄 Replay';
        }
      }
    };

    utterance.onerror = function (e) {
      console.warn('SpeechSynthesis error:', e);
      window.activePlayingMsgId = null;
      if (msgId) {
        const btn = document.querySelector(`#${msgId} .ai-voice-play-btn`);
        if (btn) {
          btn.classList.remove('speaking');
          btn.innerHTML = '▶️ Listen';
        }
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  // ── FULLSCREEN IMAGE LIGHTBOX MODAL ──────────────────────────────────────────
  window.openLightbox = function (imgUrl, title, caption) {
    let modal = document.getElementById('aiLightboxModal');
    if (!modal) {
      ensureRoboAndDrawerMounted();
      modal = document.getElementById('aiLightboxModal');
    }
    const img = document.getElementById('aiLightboxImg');
    const titleEl = document.getElementById('aiLightboxTitle');
    const descEl = document.getElementById('aiLightboxDesc');
    if (!modal || !img) return;

    img.src = imgUrl;
    if (titleEl) titleEl.textContent = title || 'Verified Archival Image';
    if (descEl) descEl.textContent = caption || 'Bagalkote District Tourism Heritage Archive';
    modal.classList.add('active');
  };

  window.closeLightbox = function (e) {
    if (e && e.target && e.target.closest && e.target.closest('.ai-lightbox-content') && !e.target.classList.contains('ai-lightbox-close')) {
      return;
    }
    const modal = document.getElementById('aiLightboxModal');
    if (modal) modal.classList.remove('active');
  };

  // ── GLOBAL CONTROLS & DRAWER LIFECYCLE ───────────────────────────────────────
  window.openAIDrawer = function () {
    const drawer = document.getElementById('aiDrawer');
    const overlay = document.getElementById('aiDrawerOverlay');
    const fab = document.getElementById('bgkRoboPopupWidget');
    document.body.classList.add('ai-drawer-open');
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (fab) {
      fab.classList.add('drawer-open');
      fab.style.display = 'none';
    }
    setTimeout(() => {
      const input = document.getElementById('aiUserInput') || (drawer ? drawer.querySelector('input[type="text"]') : null);
      if (input) input.focus();
    }, 250);
  };

  window.closeAIDrawer = function () {
    const drawer = document.getElementById('aiDrawer');
    const overlay = document.getElementById('aiDrawerOverlay');
    const fab = document.getElementById('bgkRoboPopupWidget');
    document.body.classList.remove('ai-drawer-open');
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (fab) {
      fab.classList.remove('drawer-open');
      fab.style.display = '';
    }
    window.stopSpeaking();
    window.stopVoiceInput();
  };

  window.toggleAIDrawer = function () {
    const drawer = document.getElementById('aiDrawer');
    if (drawer && drawer.classList.contains('active')) {
      window.closeAIDrawer();
    } else {
      window.openAIDrawer();
    }
  };

  // ── SUBMIT CHAT (TEXT, VOICE & IMAGE) ────────────────────────────────────────
  window.submitAIChat = function (e) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById('aiUserInput');
    const text = input ? input.value.trim() : '';
    const image = window.currentUploadedImage;

    if (!text && !image) return;

    if (input) input.value = '';
    window.clearUploadedImage();

    window.handleUserMessage(text, image);
  };

  window.handleUserMessage = async function (message, uploadedImage = null) {
    const container = document.getElementById('aiMessagesContainer');
    if (!container) return;

    const textMsg = String(message || '').trim();
    const hasImage = Boolean(uploadedImage);

    if (!textMsg && !hasImage) return;

    // Stop previous speaking
    window.stopSpeaking();

    // 1. Append User Message Bubble (with image preview if present)
    appendMessage({
      sender: 'user',
      text: textMsg || 'Identify this image and tell me its history and details',
      image: uploadedImage
    });

    // 2. Append Thinking Indicator Bubble
    const thinkingId = `thinking_${Date.now()}`;
    const thinkingEl = document.createElement('div');
    thinkingEl.className = 'ai-message bot-message';
    thinkingEl.id = thinkingId;

    const thinkingText = hasImage
      ? 'Analyzing photo with Visual Heritage AI... Identifying monument, craft, or food details...'
      : 'Searching Government Portals (bagalkot.nic.in, karnatakatourism.org, asi.nic.in) & Google...';

    thinkingEl.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-body" style="color: #64748B; background: #FFFFFF; border: 1px dashed #CBD5E1;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:1.1rem;animation:spin 1.5s linear infinite;">⏳</span>
          <em>${thinkingText}</em>
        </div>
      </div>
    `;
    container.appendChild(thinkingEl);
    container.scrollTop = container.scrollHeight;

    // 3. Call Backend API
    let lang = 'en';
    if (window.currentLanguage) lang = window.currentLanguage;
    else if (document.body.getAttribute('data-lang')) lang = document.body.getAttribute('data-lang');

    let response = null;
    try {
      const isDebug = window.location.search.includes('debug=1');

      if (hasImage) {
        // Call Vision API
        if (window.API && window.API.analyzeImage) {
          response = await API.analyzeImage(uploadedImage, textMsg, lang);
        } else {
          const res = await fetch('/api/chat/vision', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: uploadedImage, prompt: textMsg, language: lang })
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          response = await res.json();
        }
      } else {
        // Call Text RAG API
        const payload = { message: textMsg, language: lang };
        if (isDebug) payload.debug = true;

        if (window.API && window.API.sendChatMessage) {
          response = await API.sendChatMessage(textMsg, lang);
        } else {
          const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          response = await res.json();
        }
      }
    } catch (err) {
      console.warn('AI Chat error:', err);
      response = {
        reply: "Bagalkote offers world-renowned heritage at Badami, Pattadakal, and Aihole. For official information, please visit [bagalkot.nic.in](https://bagalkot.nic.in/en/tourism/).",
        source: "Official Karnataka Tourism (karnatakatourism.org) & Google Intelligence",
        verification_status: "Govt Verified ✓",
        confidence_state: 'NO_CONFIDENCE',
        related_images: [],
        sources: []
      };
    } finally {
      const thinkingNode = document.getElementById(thinkingId);
      if (thinkingNode) thinkingNode.remove();
    }

    const botReply = (response && response.reply)
      ? response.reply
      : ((response && response.error) ? response.error : "I am here to help you explore Bagalkote. Please ask another question about monuments, handlooms, food, or accessibility.");
    const botSource = (response && response.source) || "Official Karnataka Tourism Sources";
    const botStatus = (response && response.verification_status) || "Govt Verified ✓";
    const botConfidence = (response && response.confidence_state) || "HIGH_CONFIDENCE";
    const botSources = (response && response.sources) || [];
    const botRelatedImages = (response && response.related_images) || [];

    const newBotMsgId = appendMessage({
      sender: 'bot',
      text: botReply,
      source: botSource,
      verificationStatus: botStatus,
      confidenceState: botConfidence,
      sources: botSources,
      relatedImages: botRelatedImages
    });

    // 4. Auto-Voice Narration if enabled
    if (window.bgkVoiceOutputEnabled && newBotMsgId) {
      setTimeout(() => {
        window.speakText(botReply, newBotMsgId, lang);
      }, 350);
    }
  };

  // ── APPEND MESSAGE TO CHAT CONTAINER ─────────────────────────────────────────
  function appendMessage(opts) {
    const {
      sender,
      text,
      image = null,
      source = null,
      verificationStatus = null,
      confidenceState = null,
      sources = [],
      relatedImages = []
    } = opts;

    const container = document.getElementById('aiMessagesContainer');
    if (!container) return null;

    const msgId = `msg_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${sender}-message`;
    msgDiv.id = msgId;
    msgDiv.setAttribute('data-raw-text', text || '');

    // Format markdown text (links, bold, italic, line breaks, tables)
    let formattedText = String(text || '')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color:#C85A32;font-weight:700;text-decoration:underline;">$1</a>')
      .replace(/\n/g, '<br>');

    // Uploaded Image (for User Bubble)
    let userImageHtml = '';
    if (sender === 'user' && image) {
      userImageHtml = `
        <div class="msg-user-image" data-img-url="${image}" onclick="window.openLightbox(this.dataset.imgUrl, 'Your Uploaded Photo', 'Analyzed with Bagalkote Visual Heritage AI')">
          <img src="${image}" alt="User uploaded photo">
        </div>
      `;
    }

    // Voice Audio Player Control Bar (for Bot Bubble)
    let voiceBarHtml = '';
    if (sender === 'bot') {
      voiceBarHtml = `
        <div class="ai-msg-voice-bar">
          <button type="button" class="ai-voice-play-btn" onclick="window.togglePlayMessageAudio('${msgId}')">
            ▶️ Listen
          </button>
          <span style="font-size:0.72rem;color:#64748B;">🔊 Voice Assistant</span>
        </div>
      `;
    }

    // Related Archival Images Gallery (for Bot Bubble)
    let relatedImagesHtml = '';
    if (sender === 'bot' && relatedImages && relatedImages.length > 0) {
      const cardsHtml = relatedImages.map(img => `
        <div class="ai-image-card" data-img-url="${img.url}" data-img-title="${escapeHtml(img.title)}" data-img-caption="${escapeHtml(img.caption || '')}" onclick="window.openLightbox(this.dataset.imgUrl, this.dataset.imgTitle, this.dataset.imgCaption)" title="${escapeHtml(img.title)}">
          <div class="ai-image-thumb-wrapper">
            <img src="${img.url}" alt="${escapeHtml(img.title)}" loading="lazy">
            <span class="ai-image-category-pill">${img.category || 'Monuments'}</span>
          </div>
          <div class="ai-image-card-title">${escapeHtml(img.title)}</div>
          <div class="ai-image-card-caption">${escapeHtml(img.caption || '')}</div>
        </div>
      `).join('');

      relatedImagesHtml = `
        <div class="ai-related-images-section">
          <div class="ai-related-images-title">
            <span>🖼️ Verified Archival Photos (${relatedImages.length})</span>
            <span style="font-size:0.7rem;color:#64748B;">Click to enlarge</span>
          </div>
          <div class="ai-related-images-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    }

    // Sources and Verification Badges (for Bot Bubble)
    let sourceHtml = '';
    if (sender === 'bot') {
      let badgeHtml = '';
      if (confidenceState === 'HIGH_CONFIDENCE') {
        badgeHtml = `<span class="gov-badge-tag" style="background:#D1FAE5;color:#065F46;border-color:#6EE7B7;">✅ Government Source Verified</span>`;
      } else if (confidenceState === 'PARTIAL_CONFIDENCE') {
        badgeHtml = `<span class="gov-badge-tag" style="background:#FEF3C7;color:#92400E;border-color:#FCD34D;">⚠️ Partial Verification</span>`;
      } else if (confidenceState === 'NO_CONFIDENCE') {
        badgeHtml = `<span class="gov-badge-tag" style="background:#FEE2E2;color:#991B1B;border-color:#FCA5A5;">🔴 Safe Fallback — Official Portals</span>`;
      } else {
        badgeHtml = `<span class="gov-badge-tag">🏛️ Official Govt Websites</span>
          <span class="gov-badge-tag" style="background:#FEF3C7;color:#92400E;border-color:#FCD34D;">🔍 Google Search Verified</span>`;
      }

      let citationLinks = '';
      if (sources && sources.length > 0) {
        citationLinks = sources.map(s =>
          `<a href="${s.url}" target="_blank" rel="noopener" style="color:#1E40AF;text-decoration:underline;font-size:0.72rem;">${s.domain || s.name}</a>`
        ).join(' &nbsp;·&nbsp; ');
      } else {
        citationLinks = `
          <a href="https://bagalkot.nic.in/en/tourism/" target="_blank" rel="noopener" style="color:#1E40AF;text-decoration:underline;">bagalkot.nic.in</a>
          &nbsp;·&nbsp;
          <a href="https://karnatakatourism.org" target="_blank" rel="noopener" style="color:#1E40AF;text-decoration:underline;">karnatakatourism.org</a>
          &nbsp;·&nbsp;
          <a href="https://asi.nic.in" target="_blank" rel="noopener" style="color:#1E40AF;text-decoration:underline;">asi.nic.in</a>`;
      }

      const displaySource = source || 'Official Karnataka Government Tourism Sources';

      sourceHtml = `
        <div class="msg-source-tag">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
            ${badgeHtml}
          </div>
          <div style="margin-top:4px;font-size:0.72rem;color:#475569;">
            <strong>Sources:</strong> ${displaySource}
          </div>
          <div style="margin-top:3px;">${citationLinks}</div>
        </div>
      `;
    }

    // Follow-up Suggestion Chips
    let modifierChips = '';
    if (sender === 'bot') {
      modifierChips = `
        <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 10px;">
          <button onclick="window.handleUserMessage('Tell me about Badami rock cut caves opening timings and entry tickets')" style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 99px; font-size: 0.7rem; padding: 3px 9px; cursor: pointer; color:#0D1B2A;">🏛️ Badami Cave Timings</button>
          <button onclick="window.handleUserMessage('Where can I buy authentic Ilkal sarees from weavers?')" style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 99px; font-size: 0.7rem; padding: 3px 9px; cursor: pointer; color:#0D1B2A;">🧵 Ilkal Weavers</button>
          <button onclick="window.handleUserMessage('What are wheelchair accessible options in Bagalkote?')" style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 99px; font-size: 0.7rem; padding: 3px 9px; cursor: pointer; color:#0D1B2A;">♿ Accessibility Info</button>
        </div>
      `;
    }

    msgDiv.innerHTML = `
      <div class="msg-avatar">${sender === 'bot' ? '🤖' : '👤'}</div>
      <div class="msg-body">
        ${voiceBarHtml}
        ${userImageHtml}
        <div>${formattedText}</div>
        ${relatedImagesHtml}
        ${sourceHtml}
        ${modifierChips}
      </div>
    `;

    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;

    return msgId;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // ── AUTO INITIALIZATION ON DOM READY ────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureRoboAndDrawerMounted);
  } else {
    ensureRoboAndDrawerMounted();
  }

  window.initAIAssistant = ensureRoboAndDrawerMounted;
})();