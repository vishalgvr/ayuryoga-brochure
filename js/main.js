/**
 * Ayuryoga International - Therapies Brochure Application
 * Dedicated Therapies Catalog & WhatsApp Integration
 * WhatsApp Concierge Number: +23058074009
 */

document.addEventListener('DOMContentLoaded', () => {
  // State Management
  let currentCategory = 'ayurveda';
  let searchQuery = '';
  let currentCurrency = 'MUR'; // 'MUR' or 'USD'
  const exchangeRateUSD = 45; // 1 USD ~ 45 MUR

  // DOM Elements
  const treatmentsGrid = document.getElementById('treatmentsGrid');
  const categoryTabsContainer = document.getElementById('categoryTabs');
  const searchInput = document.getElementById('treatmentSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const currencyBtns = document.querySelectorAll('.currency-btn');

  // Modal Elements
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const bookingForm = document.getElementById('bookingForm');
  const bookingModalCategorySelect = document.getElementById('modalCategorySelect');
  const bookingModalTreatmentSelect = document.getElementById('modalTreatmentSelect');
  const modalSummaryBox = document.getElementById('modalSummaryBox');
  const bookingSuccessBox = document.getElementById('bookingSuccessBox');
  const sendWhatsAppBookingBtn = document.getElementById('sendWhatsAppBookingBtn');
  const modalTitleEl = document.getElementById('modalTitle');
  const modalSubtitleEl = document.getElementById('modalSubtitle');
  const modalSubmitBtn = document.getElementById('modalSubmitBtn');

  // Floating WhatsApp Widget
  const floatingBubble = document.getElementById('whatsappChatBubble');
  const bubbleCloseBtn = document.getElementById('bubbleCloseBtn');
  const floatingWhatsAppBtn = document.getElementById('floatingWhatsAppBtn');

  // Initialize
  initCategoryTabs();
  renderTreatments();
  setupCurrencySwitcher();
  setupEventListeners();
  initFloatingWhatsApp();
  setupBookingModalDropdowns();

  // =========================================================================
  // 1. Currency Formatting Helper
  // =========================================================================
  function formatPrice(murAmount, usdAmount) {
    if (currentCurrency === 'USD') {
      return {
        main: `$${usdAmount || Math.round(murAmount / exchangeRateUSD)}`,
        alt: `Approx. Rs ${murAmount.toLocaleString()}`
      };
    } else {
      return {
        main: `Rs ${murAmount.toLocaleString()}`,
        alt: `Approx. $${usdAmount || Math.round(murAmount / exchangeRateUSD)} USD`
      };
    }
  }

  function getWhatsAppPriceString(murAmount, usdAmount) {
    return currentCurrency === 'USD' 
      ? `$${usdAmount} USD (Rs ${murAmount.toLocaleString()})`
      : `Rs ${murAmount.toLocaleString()} ($${usdAmount} USD)`;
  }

  // =========================================================================
  // 2. Category Tabs & Rendering
  // =========================================================================
  function initCategoryTabs() {
    if (!categoryTabsContainer) return;

    categoryTabsContainer.innerHTML = THERAPY_CATEGORIES.map(cat => {
      const count = TREATMENTS_DATA.filter(t => t.categoryId === cat.id).length;
      const isActive = cat.id === currentCategory ? 'active' : '';

      return `
        <li>
          <button class="category-tab-btn ${isActive}" data-category="${cat.id}">
            <span>${cat.name}</span>
            <span class="cat-count">${count}</span>
          </button>
        </li>
      `;
    }).join('');

    // Tab Click Listeners
    categoryTabsContainer.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        categoryTabsContainer.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderTreatments();
      });
    });
  }

  function renderTreatments() {
    if (!treatmentsGrid) return;

    // Filter by Category & Search
    let filtered = TREATMENTS_DATA.filter(item => {
      const matchesCategory = item.categoryId === currentCategory;
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.recommendedFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      treatmentsGrid.innerHTML = `
        <div class="no-results-box">
          <div style="font-size: 3rem; margin-bottom: 12px; color: var(--color-gold);">🌿</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary-dark); margin-bottom: 8px;">No treatments found</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 20px;">We couldn't find any therapy matching "${searchQuery}" in this category.</p>
          <button class="btn btn-primary-dark btn-sm" id="resetFiltersBtn">Clear Search</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          if (searchClearBtn) searchClearBtn.style.display = 'none';
          renderTreatments();
        });
      }
      return;
    }

    // Category notice for Ayurveda
    let categoryNoticeHtml = '';
    if (currentCategory === 'ayurveda' && !searchQuery) {
      categoryNoticeHtml = `
        <div class="ayurveda-category-banner">
          <div class="banner-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          </div>
          <div class="banner-content">
            <h4>Doctor Consultation Included</h4>
            <p>Classical Ayurvedic therapies are administered following a personalized health consultation with our resident Ayurvedic Vaidya (Doctor) to prescribe the exact medicated herbal oils, decoctions, and techniques tailored to your body constitution (Prakriti).</p>
          </div>
        </div>
      `;
    }

    // Check if category is Body Care
    if (currentCategory === 'body-care' && filtered.length > 0) {
      treatmentsGrid.innerHTML = renderBodyCareExperience(filtered[0]);

      // Attach open modal listeners
      treatmentsGrid.querySelectorAll('.open-booking-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          openBookingModalWithTreatment(id);
        });
      });
      return;
    }

    // Check if category is Hair Care
    if (currentCategory === 'hair-care' && filtered.length > 0) {
      treatmentsGrid.innerHTML = renderHairCareExperience(filtered);

      // Attach open modal listeners
      treatmentsGrid.querySelectorAll('.open-booking-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          openBookingModalWithTreatment(id);
        });
      });
      return;
    }

    const cardsHtml = filtered.map(treatment => {
      const price = formatPrice(treatment.priceMUR, treatment.priceUSD);
      const isDoctorConsult = treatment.requiresDoctorConsultation !== false;

      // WhatsApp text
      const whatsappText = isDoctorConsult
        ? encodeURIComponent(
            `Namaste Ayuryoga International! 🙏\n\nI would like to request a *Doctor Consultation & Appointment* for the following therapy:\n\n🌿 *Treatment:* ${treatment.name}\n📂 *Category:* ${treatment.categoryName}\n⏱️ *Duration:* ${treatment.duration}\n💰 *Price:* ${getWhatsAppPriceString(treatment.priceMUR, treatment.priceUSD)}\n🩺 *Note:* Required Doctor Consultation\n\nPlease let me know available slots with the Ayurvedic Doctor. Thank you!`
          )
        : encodeURIComponent(
            `Namaste Ayuryoga International! 🙏\n\nI would like to enquire / book the following therapy:\n\n🌿 *Treatment:* ${treatment.name}\n📂 *Category:* ${treatment.categoryName}\n⏱️ *Duration:* ${treatment.duration}\n💰 *Price:* ${getWhatsAppPriceString(treatment.priceMUR, treatment.priceUSD)}\n\nPlease let me know available slots. Thank you!`
          );

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${whatsappText}`;

      // If Classical Ayurveda (requires doctor consultation)
      if (isDoctorConsult) {
        const consultButtonLabel = "Consult Doctor";
        const consultButtonIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`;
        const doctorConsultTag = `
          <div class="doctor-consult-tag">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            Done after Doctor Consultation
          </div>`;

        return `
          <article class="treatment-card" data-id="${treatment.id}">
            <div class="treatment-image-header">
              <img src="${treatment.image}" alt="${treatment.name}" loading="lazy">
              <span class="treatment-badge">${treatment.badge}</span>
              <span class="treatment-cat-tag">${treatment.categoryName}</span>
            </div>

            <div class="treatment-body">
              <div class="treatment-header-row">
                <div>
                  <h3 class="treatment-name">${treatment.name}</h3>
                  <div class="treatment-subtitle">${treatment.subtitle}</div>
                </div>
                <div class="treatment-pricing">
                  <div class="price-main">${price.main}</div>
                  <div class="price-alt">${price.alt}</div>
                </div>
              </div>

              <div class="treatment-meta">
                <span class="treatment-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  ${treatment.duration}
                </span>
                <span class="treatment-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  ${treatment.doshaFocus}
                </span>
              </div>

              ${doctorConsultTag}

              <p class="treatment-desc">${treatment.description}</p>

              <ul class="treatment-benefits">
                ${treatment.benefits.slice(0, 3).map(b => `
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${b}</span>
                  </li>
                `).join('')}
              </ul>

              <div class="treatment-actions">
                <button class="btn btn-consult-doctor btn-sm open-booking-btn" data-id="${treatment.id}">
                  ${consultButtonIcon}
                  ${consultButtonLabel}
                </button>
                
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" title="Instant WhatsApp Message">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                  WhatsApp Instant
                </a>
              </div>
            </div>
          </article>
        `;
      }

      // Spa / Beauty / Face / Hand-Foot Cards (matching exact brochure layout)
      const includesTitle = currentCategory === 'hand-foot-care' ? 'PACKAGE INCLUDES:' : 'TREATMENT INCLUDES:';

      return `
        <article class="treatment-card" data-id="${treatment.id}">
          <div class="treatment-image-header">
            <img src="${treatment.image}" alt="${treatment.name}" loading="lazy">
            <span class="treatment-duration-pill-top">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${treatment.duration}
            </span>
          </div>

          <div class="treatment-body">
            <div class="treatment-card-center-head">
              <h3 class="treatment-name">${treatment.name}</h3>
              <div class="treatment-card-duration-gold">Duration: ${treatment.duration}</div>
            </div>

            <p class="treatment-desc" style="text-align: center;">${treatment.description}</p>

            ${treatment.benefits && treatment.benefits.length > 0 ? `
              <div class="treatment-includes-box">
                <div class="treatment-includes-title">${includesTitle}</div>
                <div class="treatment-pills-wrap">
                  ${treatment.benefits.map(b => `<span class="treatment-pill-tag">${b}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <div class="treatment-card-bottom-price">${price.main}</div>

            <div class="treatment-actions">
              <button class="btn btn-primary-dark btn-sm open-booking-btn" data-id="${treatment.id}">
                BOOK NOW
              </button>
              
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-outline btn-sm" title="Instant WhatsApp Message">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                WHATSAPP
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    treatmentsGrid.innerHTML = categoryNoticeHtml + `<div class="treatments-grid-inner">${cardsHtml}</div>`;

    // Attach open modal listeners
    treatmentsGrid.querySelectorAll('.open-booking-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        openBookingModalWithTreatment(id);
      });
    });
  }

  // =========================================================================
  // Body Care Custom Luxury Experience Renderer
  // =========================================================================
  function renderBodyCareExperience(treatment) {
    const price = formatPrice(treatment.priceMUR, treatment.priceUSD);
    const whatsappText = encodeURIComponent(
      `Namaste Ayuryoga International! 🙏\n\nI would like to enquire / book the signature *Herbal Body Scrub* therapy:\n\n🌿 *Treatment:* ${treatment.name}\n📂 *Category:* Body Care\n⏱️ *Duration:* ${treatment.duration}\n💰 *Price:* ${getWhatsAppPriceString(treatment.priceMUR, treatment.priceUSD)}\n\nPlease let me know available slots. Thank you!`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${whatsappText}`;

    return `
      <div class="body-care-luxury-container">
        <!-- 1. HERO SHOWCASE CARD -->
        <div class="body-care-hero-card">
          <div class="body-care-hero-media">
            <img src="${treatment.image}" alt="${treatment.name}" class="body-care-hero-img">
            <div class="body-care-hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#dfbe7d" stroke="#dfbe7d"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>★ Signature Full Body Ritual</span>
            </div>
            <div class="body-care-hero-duration">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Duration: ${treatment.duration}</span>
            </div>
          </div>

          <div class="body-care-hero-content">
            <div class="body-care-pill-tag">TRADITIONAL UDVARTHANAM-INSPIRED THERAPY</div>
            <h2 class="body-care-hero-title">${treatment.name}</h2>
            
            <div class="body-care-pricing-strip">
              <div class="body-care-price-block">
                <div class="body-care-price-val">${price.main}</div>
                <div class="body-care-price-lbl">FULL TREATMENT PRICE</div>
              </div>
              <div class="body-care-price-divider"></div>
              <div class="body-care-duration-block">
                <div class="body-care-duration-val">${treatment.duration}</div>
                <div class="body-care-duration-lbl">TREATMENT DURATION</div>
              </div>
            </div>

            <p class="body-care-hero-desc">
              Our signature <strong>Herbal Body Scrub</strong> is an invigorating Ayurvedic polishing ritual that combines finely powdered therapeutic herbs, precious sandalwood, and cold-pressed botanical oils. Performed using rhythmic upward strokes (<em>Udvarthanam</em>), it gently buffs away dull surface cells, stimulates lymphatic microcirculation, releases trapped metabolic toxins, and restores velvety softness and radiant suppleness to every inch of your skin.
            </p>

            <div class="body-care-hero-actions">
              <button class="btn btn-primary-dark open-booking-btn body-care-btn" data-id="${treatment.id}">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                BOOK APPOINTMENT
              </button>
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-outline body-care-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                WHATSAPP US
              </a>
            </div>
          </div>
        </div>

        <!-- 2. THE RITUAL EXPERIENCE -->
        <div class="body-care-section">
          <div class="body-care-section-header">
            <div class="body-care-sub-heading">THE RITUAL EXPERIENCE</div>
            <h3 class="body-care-main-heading">Your 4-Step Body Polishing Journey</h3>
            <p class="body-care-section-desc">Every phase of our Herbal Body Scrub is designed to maximize cellular turnover, detoxify pores, and induce profound relaxation.</p>
          </div>

          <div class="body-care-steps-grid">
            <div class="body-care-step-card">
              <div class="body-care-step-number">01</div>
              <h4 class="body-care-step-title">Herbal Oil Anointing</h4>
              <p class="body-care-step-desc">Light application of warm, dosha-specific medicated oils to soften the epidermis and prepare skin tissues for exfoliation.</p>
            </div>

            <div class="body-care-step-card">
              <div class="body-care-step-number">02</div>
              <h4 class="body-care-step-title">Botanical Scrub Blend</h4>
              <p class="body-care-step-desc">Application of freshly compounded medicinal herbs, Triphala, and micro-fine grains customized to your skin constitution.</p>
            </div>

            <div class="body-care-step-card">
              <div class="body-care-step-number">03</div>
              <h4 class="body-care-step-title">Rhythmic Udvarthanam</h4>
              <p class="body-care-step-desc">Dynamic upward friction massage strokes stimulate lymphatic drainage, tone subcutaneous tissues, and smooth skin texture.</p>
            </div>

            <div class="body-care-step-card">
              <div class="body-care-step-number">04</div>
              <h4 class="body-care-step-title">Warm Rinse & Hydration</h4>
              <p class="body-care-step-desc">Soothing aromatic rinse followed by a nourishing botanical lotion to seal in moisture and impart an all-day golden glow.</p>
            </div>
          </div>
        </div>

        <!-- 3. NATURAL FORMULATION -->
        <div class="body-care-section">
          <div class="body-care-section-header">
            <div class="body-care-sub-heading">NATURAL FORMULATION</div>
            <h3 class="body-care-main-heading">Pure Ayurvedic Botanicals</h3>
            <p class="body-care-section-desc">Formulated with 100% natural, ethically sourced herbs with zero artificial microbeads, sulfates, or chemical preservatives.</p>
          </div>

          <div class="body-care-botanicals-grid">
            <div class="body-care-botanical-card">
              <h4 class="body-care-botanical-name">Red Sandalwood</h4>
              <div class="body-care-botanical-sanskrit">Raktachandana</div>
              <p class="body-care-botanical-desc">Soothes irritated skin, cools internal body heat, and evens out pigmentation and sun tan.</p>
            </div>

            <div class="body-care-botanical-card">
              <h4 class="body-care-botanical-name">Triphala Extract</h4>
              <div class="body-care-botanical-sanskrit">Amalaki, Bibhitaki & Haritaki</div>
              <p class="body-care-botanical-desc">Rich in natural antioxidants and Vitamin C to detoxify pores and neutralize free radicals.</p>
            </div>

            <div class="body-care-botanical-card">
              <h4 class="body-care-botanical-name">Vetiver Roots</h4>
              <div class="body-care-botanical-sanskrit">Ushira</div>
              <p class="body-care-botanical-desc">Imparts a deeply calming earthy aroma while refining skin texture and boosting microcirculation.</p>
            </div>

            <div class="body-care-botanical-card">
              <h4 class="body-care-botanical-name">Organic Gram Flour</h4>
              <div class="body-care-botanical-sanskrit">Chanaka Choornam</div>
              <p class="body-care-botanical-desc">Gently sloughs off dead cells and excess sebum without stripping the skin's protective lipid barrier.</p>
            </div>
          </div>
        </div>

        <!-- 4. HOLISTIC BENEFITS -->
        <div class="body-care-section">
          <div class="body-care-section-header">
            <h3 class="body-care-main-heading">Holistic Benefits of Body Polishing</h3>
            <p class="body-care-section-desc">Regular Ayurvedic body exfoliation does more than smooth the surface — it enhances metabolic health and promotes deep physical vitality.</p>
          </div>

          <div class="body-care-benefits-grid">
            <div class="body-care-benefit-card">
              <div class="body-care-benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h4 class="body-care-benefit-title">Lymphatic Drainage</h4>
              <p class="body-care-benefit-desc">Upward rhythmic friction stimulates lymph flow, reducing fluid retention and heavy limbs.</p>
            </div>

            <div class="body-care-benefit-card">
              <div class="body-care-benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 class="body-care-benefit-title">Silky Smooth Skin</h4>
              <p class="body-care-benefit-desc">Instantly removes dry flakiness, rough patches, and keratosis, leaving skin touchably soft.</p>
            </div>

            <div class="body-care-benefit-card">
              <div class="body-care-benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg>
              </div>
              <h4 class="body-care-benefit-title">Deep Detoxification</h4>
              <p class="body-care-benefit-desc">Opens clogged sweat glands and pores, assisting the body in natural metabolic waste elimination.</p>
            </div>

            <div class="body-care-benefit-card">
              <div class="body-care-benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h4 class="body-care-benefit-title">Radiant Natural Glow</h4>
              <p class="body-care-benefit-desc">Enhances blood circulation to the skin surface, imparting a youthful, healthy radiance.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // Hair Care Dedicated Horizontal Experience Renderer
  // =========================================================================
  function renderHairCareExperience(treatments) {
    return `
      <div class="hair-care-container">
        ${treatments.map(treatment => {
          const price = formatPrice(treatment.priceMUR, treatment.priceUSD);
          const whatsappText = encodeURIComponent(
            `Namaste Ayuryoga International! 🙏\n\nI would like to enquire / book the *${treatment.name}* therapy:\n\n🌿 *Treatment:* ${treatment.name}\n📂 *Category:* Hair Care\n⏱️ *Duration:* ${treatment.duration}\n💰 *Price:* ${getWhatsAppPriceString(treatment.priceMUR, treatment.priceUSD)}\n\nPlease let me know available slots. Thank you!`
          );
          const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${whatsappText}`;

          return `
            <div class="hair-care-card" data-id="${treatment.id}">
              <div class="hair-care-media">
                <img src="${treatment.image}" alt="${treatment.name}" class="hair-care-img">
                <div class="hair-care-duration-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>${treatment.duration}</span>
                </div>
              </div>

              <div class="hair-care-content">
                <div class="hair-care-header">
                  <h3 class="hair-care-title">${treatment.name}</h3>
                  <div class="hair-care-duration-text">Duration: ${treatment.duration}</div>
                </div>

                <p class="hair-care-desc">${treatment.description}</p>

                <div class="hair-care-includes">
                  <div class="hair-care-includes-label">PACKAGE INCLUDES:</div>
                  <div class="hair-care-pills">
                    ${treatment.benefits.map(b => `<span class="hair-care-pill">${b}</span>`).join('')}
                  </div>
                </div>

                <div class="hair-care-footer">
                  <div class="hair-care-price">${price.main}</div>
                  <div class="hair-care-actions">
                    <button class="btn btn-primary-dark open-booking-btn hair-care-action-btn" data-id="${treatment.id}">
                      BOOK NOW
                    </button>
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-outline hair-care-action-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                      WHATSAPP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // =========================================================================
  // 3. Currency Switcher
  // =========================================================================
  function setupCurrencySwitcher() {
    currencyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currencyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCurrency = btn.dataset.currency;
        renderTreatments();
      });
    });
  }

  // =========================================================================
  // 4. Search & Event Listeners
  // =========================================================================
  function setupEventListeners() {
    // Live Search
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        if (searchClearBtn) {
          searchClearBtn.style.display = searchQuery ? 'block' : 'none';
        }
        renderTreatments();
      });
    }

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClearBtn.style.display = 'none';
        renderTreatments();
      });
    }

    // General CTA buttons across page
    document.querySelectorAll('.trigger-booking-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingModal();
      });
    });

    // Modal Close
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeBookingModal);
    }
    if (bookingModal) {
      bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) closeBookingModal();
      });
    }

    // Booking Form Submission
    if (bookingForm) {
      bookingForm.addEventListener('submit', handleBookingSubmit);
    }
  }

  // =========================================================================
  // 5. Booking / Consultation Modal Logic
  // =========================================================================
  function setupBookingModalDropdowns() {
    if (!bookingModalCategorySelect || !bookingModalTreatmentSelect) return;

    // Populate Categories
    bookingModalCategorySelect.innerHTML = `
      <option value="">-- Choose Category --</option>
      ${THERAPY_CATEGORIES.map(c => `
        <option value="${c.id}">${c.name}</option>
      `).join('')}
    `;

    // Populate All Treatments initially
    populateTreatmentsDropdown();

    // On Category Change, Filter Treatments
    bookingModalCategorySelect.addEventListener('change', () => {
      const selectedCat = bookingModalCategorySelect.value;
      populateTreatmentsDropdown(selectedCat);
      updateModalSummary();
    });

    bookingModalTreatmentSelect.addEventListener('change', updateModalSummary);

    // Set Date input minimum to today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }

  function populateTreatmentsDropdown(categoryId = '') {
    const list = categoryId 
      ? TREATMENTS_DATA.filter(t => t.categoryId === categoryId) 
      : TREATMENTS_DATA;

    bookingModalTreatmentSelect.innerHTML = `
      <option value="">-- Choose Treatment --</option>
      ${list.map(t => `
        <option value="${t.id}" data-category="${t.categoryId}" data-price-mur="${t.priceMUR}" data-price-usd="${t.priceUSD}" data-duration="${t.duration}">
          ${t.name} (${t.duration} - Rs ${t.priceMUR.toLocaleString()})
        </option>
      `).join('')}
    `;
  }

  function openBookingModalWithTreatment(treatmentId) {
    const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId);
    if (!treatment) {
      openBookingModal();
      return;
    }

    openBookingModal();
    if (bookingModalCategorySelect) {
      bookingModalCategorySelect.value = treatment.categoryId;
    }
    populateTreatmentsDropdown(treatment.categoryId);
    if (bookingModalTreatmentSelect) {
      bookingModalTreatmentSelect.value = treatment.id;
    }
    updateModalSummary();
  }

  function openBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset view
    if (bookingForm) bookingForm.style.display = 'block';
    if (bookingSuccessBox) bookingSuccessBox.style.display = 'none';
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateModalSummary() {
    if (!modalSummaryBox) return;

    const treatmentId = bookingModalTreatmentSelect ? bookingModalTreatmentSelect.value : '';
    const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId);

    if (treatment) {
      const price = formatPrice(treatment.priceMUR, treatment.priceUSD);
      const isDoctorConsult = treatment.requiresDoctorConsultation !== false;

      if (modalTitleEl) {
        modalTitleEl.textContent = isDoctorConsult
          ? "Schedule Doctor Consultation & Therapy"
          : "Reserve Your Wellness Session";
      }
      if (modalSubtitleEl) {
        modalSubtitleEl.innerHTML = isDoctorConsult
          ? "🩺 <em>This classical therapy is customized during a personalized consultation with our resident Ayurvedic Doctor (Vaidya).</em>"
          : "Select your preferred date & time for your session.";
      }
      if (modalSubmitBtn) {
        modalSubmitBtn.textContent = isDoctorConsult
          ? "Confirm & Request Doctor Consultation"
          : "Confirm & Submit Reservation";
      }

      modalSummaryBox.innerHTML = `
        <div style="flex: 1;">
          <strong style="color: var(--color-primary-dark); font-size: 1.05rem;">${treatment.name}</strong>
          <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 2px;">
            Category: <strong>${treatment.categoryName}</strong> | Duration: <strong>${treatment.duration}</strong>
          </div>
          ${isDoctorConsult ? `<div style="font-size: 0.76rem; color: var(--color-gold-dark); font-weight: 700; margin-top: 4px;">🩺 Includes Doctor Consultation</div>` : ''}
        </div>
        <div style="text-align: right; flex-shrink: 0;">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-dark);">${price.main}</div>
          <div style="font-size: 0.75rem; color: var(--color-text-light);">${price.alt}</div>
        </div>
      `;
      modalSummaryBox.style.display = 'flex';
    } else {
      modalSummaryBox.style.display = 'none';
      if (modalTitleEl) modalTitleEl.textContent = "Schedule Doctor Consultation & Therapy";
      if (modalSubtitleEl) modalSubtitleEl.textContent = "Select your therapy and schedule your preferred date & time.";
      if (modalSubmitBtn) modalSubmitBtn.textContent = "Confirm & Submit Reservation";
    }
  }

  function handleBookingSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('guestName').value.trim();
    const phone = document.getElementById('guestPhone').value.trim();
    const email = document.getElementById('guestEmail').value.trim();
    const date = document.getElementById('bookingDate').value;
    const timeSlot = document.getElementById('bookingTimeSlot').value;
    const guests = document.getElementById('bookingGuests').value;
    const notes = document.getElementById('bookingNotes').value.trim();
    const treatmentId = bookingModalTreatmentSelect.value;
    const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId);

    if (!treatment) {
      alert('Please select a treatment therapy to continue.');
      return;
    }

    const isDoctorConsult = treatment.requiresDoctorConsultation !== false;
    const priceFormatted = getWhatsAppPriceString(treatment.priceMUR, treatment.priceUSD);

    // Build Formatted WhatsApp Message
    const bookingSummaryText = 
      `*🌟 NEW AYURYOGA CONSULTATION & BOOKING REQUEST 🌟*\n\n` +
      `🌿 *Therapy:* ${treatment.name}\n` +
      `📂 *Category:* ${treatment.categoryName}\n` +
      `⏱️ *Duration:* ${treatment.duration}\n` +
      `💰 *Estimated Price:* ${priceFormatted}\n` +
      (isDoctorConsult ? `🩺 *Doctor Consultation:* Required & Requested\n\n` : `\n`) +
      `📅 *Preferred Date:* ${date || 'Flexible'}\n` +
      `⏰ *Time Slot:* ${timeSlot}\n` +
      `👥 *Number of Guests:* ${guests}\n\n` +
      `👤 *Guest Name:* ${name}\n` +
      `📱 *Phone / WhatsApp:* ${phone}\n` +
      `✉️ *Email:* ${email || 'N/A'}\n` +
      `📝 *Health Notes / Focus Area:* ${notes || 'None'}\n\n` +
      `_Sent from Ayuryoga International Brochure Website_`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(bookingSummaryText)}`;

    // Show Success State inside modal
    if (bookingForm) bookingForm.style.display = 'none';
    if (bookingSuccessBox) {
      bookingSuccessBox.style.display = 'block';
      const summaryDetailEl = document.getElementById('successSummaryDetails');
      if (summaryDetailEl) {
        summaryDetailEl.innerHTML = `
          <div style="background: var(--color-sand); padding: 18px; border-radius: var(--radius-md); text-align: left; margin: 20px 0; border-left: 4px solid var(--color-gold);">
            <div style="font-weight: 700; color: var(--color-primary-dark); font-size: 1.1rem; margin-bottom: 6px;">${treatment.name}</div>
            <div style="font-size: 0.88rem; color: var(--color-text-muted);">Guest: <strong>${name}</strong> (${phone})</div>
            <div style="font-size: 0.88rem; color: var(--color-text-muted);">Schedule: <strong>${date}</strong> at <strong>${timeSlot}</strong></div>
            <div style="font-size: 0.88rem; color: var(--color-text-muted);">Duration: <strong>${treatment.duration}</strong> | Total: <strong>${priceFormatted}</strong></div>
            ${isDoctorConsult ? `<div style="font-size: 0.85rem; color: var(--color-gold-dark); font-weight: 600; margin-top: 6px;">🩺 Consultation with Ayurvedic Vaidya scheduled before therapy</div>` : ''}
          </div>
        `;
      }
    }

    if (sendWhatsAppBookingBtn) {
      sendWhatsAppBookingBtn.onclick = () => {
        window.open(whatsappUrl, '_blank');
      };
    }
  }

  // =========================================================================
  // 6. Floating WhatsApp Concierge Widget
  // =========================================================================
  function initFloatingWhatsApp() {
    // Show bubble automatically after 4 seconds
    setTimeout(() => {
      if (floatingBubble) floatingBubble.style.display = 'block';
    }, 4000);

    if (bubbleCloseBtn && floatingBubble) {
      bubbleCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        floatingBubble.style.display = 'none';
      });
    }

    if (floatingWhatsAppBtn) {
      floatingWhatsAppBtn.addEventListener('click', () => {
        const defaultMsg = encodeURIComponent(
          "Namaste Ayuryoga International! 🙏\n\nI am browsing your brochure website and would like to ask questions about doctor consultations, therapies, and appointment availability."
        );
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${defaultMsg}`, '_blank');
      });
    }
  }
});
