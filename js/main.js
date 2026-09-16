/**
 * Ayuryoga International - Therapies Brochure Application
 * Dedicated Therapies Catalog, Multi-Location & WhatsApp Integration
 * Supported Sanctuaries: Moka, Grand Baie, Curepipe
 */

document.addEventListener('DOMContentLoaded', () => {
  // State Management
  let currentCategory = 'ayurveda';
  let currentSubcategory = 'consultation'; // 'consultation', 'services', 'therapies' for Ayurveda; 'western', 'ayurveda' for Wellness; 'face-care', etc. for Beauty Care
  let currentTherapyType = 'all'; // 'all', 'abhyangam', 'kizhi', 'dhara', 'others' for Ayurveda Therapies
  let searchQuery = '';
  let currentCurrency = 'MUR'; // 'MUR' or 'USD'
  const exchangeRateUSD = 45; // 1 USD ~ 45 MUR
  let selectedBookingLocationId = 'moka';
  let pendingWhatsAppTreatment = null;

  // DOM Elements
  const treatmentsGrid = document.getElementById('treatmentsGrid');
  const categoryTabsContainer = document.getElementById('categoryTabs');
  const subcategoryFilterWrap = document.getElementById('subcategoryFilterWrap');
  const subcategoryPills = document.getElementById('subcategoryPills');
  const searchInput = document.getElementById('treatmentSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const currencyBtns = document.querySelectorAll('.currency-btn');

  // Booking Modal Elements
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const bookingForm = document.getElementById('bookingForm');
  const bookingLocationGrid = document.getElementById('bookingLocationGrid');
  const bookingModalCategorySelect = document.getElementById('modalCategorySelect');
  const bookingModalTreatmentSelect = document.getElementById('modalTreatmentSelect');
  const modalSummaryBox = document.getElementById('modalSummaryBox');
  const bookingSuccessBox = document.getElementById('bookingSuccessBox');
  const sendWhatsAppBookingBtn = document.getElementById('sendWhatsAppBookingBtn');
  const sendWhatsAppBookingBtnText = document.getElementById('sendWhatsAppBookingBtnText');
  const modalTitleEl = document.getElementById('modalTitle');
  const modalSubtitleEl = document.getElementById('modalSubtitle');
  const modalSubmitBtn = document.getElementById('modalSubmitBtn');

  // Location Picker Modal Elements (for WhatsApp Instant)
  const locationPickerModal = document.getElementById('locationPickerModal');
  const locationModalCloseBtn = document.getElementById('locationModalCloseBtn');
  const locationOptionsList = document.getElementById('locationOptionsList');
  const locationPickerTreatmentPreview = document.getElementById('locationPickerTreatmentPreview');

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
  initLocationPickerModal();

  // =========================================================================
  // 1. Currency & Formatting Helpers
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

  function getLocationById(id) {
    return AYURYOGA_LOCATIONS.find(loc => loc.id === id) || AYURYOGA_LOCATIONS[0];
  }

  // =========================================================================
  // 2. Category Tabs, Subcategories & Rendering
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

        // Subcategory Filter display handling
        if (currentCategory === 'ayurveda') {
          if (subcategoryFilterWrap) subcategoryFilterWrap.style.display = 'block';
          if (!['consultation', 'therapies'].includes(currentSubcategory)) {
            currentSubcategory = 'consultation';
          }
          currentTherapyType = 'all';
          renderSubcategoryPills();
        } else if (currentCategory === 'wellness') {
          if (subcategoryFilterWrap) subcategoryFilterWrap.style.display = 'block';
          if (!['western', 'ayurveda'].includes(currentSubcategory)) {
            currentSubcategory = 'western';
          }
          renderSubcategoryPills();
        } else if (currentCategory === 'beauty-care') {
          if (subcategoryFilterWrap) subcategoryFilterWrap.style.display = 'block';
          if (!['face-care', 'body-care', 'hair-care', 'hand-foot-care'].includes(currentSubcategory)) {
            currentSubcategory = 'face-care';
          }
          renderSubcategoryPills();
        } else {
          if (subcategoryFilterWrap) subcategoryFilterWrap.style.display = 'none';
          currentSubcategory = 'all';
        }

        renderTreatments();
      });
    });

    // Initial subcategory filter visibility
    if (currentCategory === 'ayurveda' || currentCategory === 'wellness' || currentCategory === 'beauty-care') {
      if (subcategoryFilterWrap) subcategoryFilterWrap.style.display = 'block';
      renderSubcategoryPills();
    } else {
      if (subcategoryFilterWrap) subcategoryFilterWrap.style.display = 'none';
    }
  }

  function renderSubcategoryPills() {
    if (!subcategoryPills) return;

    const currentCatObj = THERAPY_CATEGORIES.find(c => c.id === currentCategory);
    if (!currentCatObj || !currentCatObj.subcategories) {
      if (subcategoryFilterWrap) subcategoryFilterWrap.style.display = 'none';
      return;
    }

    subcategoryPills.innerHTML = currentCatObj.subcategories.map(sub => {
      let count = 0;
      if (currentCategory === 'ayurveda') {
        if (sub.id === 'consultation') {
          count = typeof AYURVEDA_DOCTORS !== 'undefined' ? AYURVEDA_DOCTORS.length : 2;
        } else if (sub.id === 'services') {
          count = typeof AYURVEDA_SERVICES !== 'undefined' ? AYURVEDA_SERVICES.length : 12;
        } else if (sub.id === 'therapies') {
          count = TREATMENTS_DATA.filter(t => t.categoryId === 'ayurveda').length;
        }
      } else if (currentCategory === 'wellness') {
        count = TREATMENTS_DATA.filter(t => t.categoryId === 'wellness' && t.subcategoryId === sub.id).length;
      } else if (currentCategory === 'beauty-care') {
        count = TREATMENTS_DATA.filter(t => t.categoryId === 'beauty-care' && t.subcategoryId === sub.id).length;
      }

      const isActive = sub.id === currentSubcategory ? 'active' : '';

      return `
        <li>
          <button class="subcategory-pill-btn ${isActive}" data-subcategory="${sub.id}">
            <span>${sub.name}</span>
            <span class="sub-count">${count}</span>
          </button>
        </li>
      `;
    }).join('');

    // Subcategory Click Listeners
    subcategoryPills.querySelectorAll('.subcategory-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        subcategoryPills.querySelectorAll('.subcategory-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSubcategory = btn.dataset.subcategory;
        currentTherapyType = 'all'; // Reset 4-way filter when switching subcategories
        renderTreatments();
      });
    });
  }

  function renderTreatments() {
    if (!treatmentsGrid) return;

    // 1. AYURVEDA: Specialized Subcategory Views
    if (currentCategory === 'ayurveda') {
      if (currentSubcategory === 'consultation') {
        treatmentsGrid.innerHTML = renderAyurvedaConsultation();
        attachCardActionListeners();
        return;
      }

      if (currentSubcategory === 'services') {
        treatmentsGrid.innerHTML = renderAyurvedaServices();
        attachCardActionListeners();
        return;
      }
    }

    // 2. Filter by Category, Subcategory & Search
    let filtered = TREATMENTS_DATA.filter(item => {
      let matchesCategory = false;
      if (currentCategory === 'beauty-care') {
        matchesCategory = item.categoryId === 'beauty-care' && item.subcategoryId === currentSubcategory;
      } else if (currentCategory === 'wellness') {
        matchesCategory = item.categoryId === 'wellness' && item.subcategoryId === currentSubcategory;
      } else if (currentCategory === 'ayurveda') {
        matchesCategory = item.categoryId === 'ayurveda';
      } else {
        matchesCategory = item.categoryId === currentCategory;
      }

      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.recommendedFor && item.recommendedFor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.subcategoryName && item.subcategoryName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.benefits && item.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });

    // 3. Therapy 4-Way Classification for Ayurveda Therapies Subcategory
    let therapyTypeFilterHtml = '';
    if (currentCategory === 'ayurveda' && currentSubcategory === 'therapies') {
      const allAyurTherapies = TREATMENTS_DATA.filter(t => t.categoryId === 'ayurveda');
      const countAll = allAyurTherapies.length;
      const countAbhyangam = allAyurTherapies.filter(t => t.therapyType === 'abhyangam').length;
      const countKizhi = allAyurTherapies.filter(t => t.therapyType === 'kizhi').length;
      const countDhara = allAyurTherapies.filter(t => t.therapyType === 'dhara').length;
      const countOthers = allAyurTherapies.filter(t => t.therapyType === 'others').length;

      therapyTypeFilterHtml = `
        <div class="therapy-type-filter-bar">
          <div class="therapy-type-filter-label">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
            <span>Classify Therapies:</span>
          </div>
          <div class="therapy-type-pills">
            <button class="therapy-type-btn ${currentTherapyType === 'all' ? 'active' : ''}" data-type="all">
              <span>All Therapies</span>
              <span class="type-badge">${countAll}</span>
            </button>
            <button class="therapy-type-btn ${currentTherapyType === 'abhyangam' ? 'active' : ''}" data-type="abhyangam">
              <span>Abhyangam</span>
              <span class="type-badge">${countAbhyangam}</span>
            </button>
            <button class="therapy-type-btn ${currentTherapyType === 'kizhi' ? 'active' : ''}" data-type="kizhi">
              <span>Kizhi</span>
              <span class="type-badge">${countKizhi}</span>
            </button>
            <button class="therapy-type-btn ${currentTherapyType === 'dhara' ? 'active' : ''}" data-type="dhara">
              <span>Dhara</span>
              <span class="type-badge">${countDhara}</span>
            </button>
            <button class="therapy-type-btn ${currentTherapyType === 'others' ? 'active' : ''}" data-type="others">
              <span>Others</span>
              <span class="type-badge">${countOthers}</span>
            </button>
          </div>
        </div>
      `;

      if (currentTherapyType !== 'all') {
        filtered = filtered.filter(item => item.therapyType === currentTherapyType);
      }
    }

    // Sorting by Duration for Wellness Category (120min -> 90min -> 60min -> 45min -> 30min -> 15min)
    if (currentCategory === 'wellness') {
      filtered.sort((a, b) => {
        const getMins = (dur) => {
          if (!dur) return 0;
          const m = dur.match(/(\d+)/);
          return m ? parseInt(m[1], 10) : 0;
        };
        return getMins(b.duration) - getMins(a.duration);
      });
    }

    if (filtered.length === 0) {
      treatmentsGrid.innerHTML = therapyTypeFilterHtml + `
        <div class="no-results-box">
          <div style="font-size: 3rem; margin-bottom: 12px; color: var(--color-gold);">🌿</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary-dark); margin-bottom: 8px;">No treatments found</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 20px;">We couldn't find any therapy matching "${searchQuery}" in this selection.</p>
          <button class="btn btn-primary-dark btn-sm" id="resetFiltersBtn">Clear Search</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchQuery = '';
          currentTherapyType = 'all';
          if (searchInput) searchInput.value = '';
          if (searchClearBtn) searchClearBtn.style.display = 'none';
          renderTreatments();
        });
      }
      attachTherapyTypeListeners();
      return;
    }

    // Category notice banners
    let categoryNoticeHtml = '';
    if (currentCategory === 'ayurveda' && !searchQuery) {
      categoryNoticeHtml = `
        <div class="ayurveda-category-banner">
          <div class="banner-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          </div>
          <div class="banner-content">
            <h4>Doctor Consultation Mandatory • Available in Moka, Grand Baie & Curepipe</h4>
            <p>Classical Ayurvedic therapies are administered following a mandatory personalized health consultation with our resident Ayurvedic Doctor at our Moka, Grand Baie, or Curepipe sanctuaries to prescribe the exact medicated herbal oils and techniques tailored to your body constitution (Prakriti).</p>
          </div>
        </div>
      `;
    } else if (currentCategory === 'wellness' && !searchQuery) {
      const subTitle = currentSubcategory === 'western' 
        ? 'Western Wellness Therapies' 
        : 'Ayurvedic Wellness & Body Rituals';
      categoryNoticeHtml = `
        <div class="wellness-category-banner">
          <div class="banner-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </div>
          <div class="banner-content">
            <h4>${subTitle} • Available Across All Sanctuaries</h4>
            <p>Revitalize your body and mind with our curated Western massage therapies and classical Ayurvedic wellness rituals in Moka, Grand Baie, and Curepipe.</p>
          </div>
        </div>
      `;
    } else if (currentCategory === 'beauty-care' && !searchQuery) {
      const beautySubcatNames = {
        'face-care': 'Face Care Rituals',
        'body-care': 'Body Care & Polishing Rituals',
        'hair-care': 'Hair Care & Scalp Therapies',
        'hand-foot-care': 'Hand & Foot Care Treatments'
      };
      const subTitle = beautySubcatNames[currentSubcategory] || 'Ayurvedic Beauty & Radiance Rituals';
      categoryNoticeHtml = `
        <div class="beauty-category-banner">
          <div class="banner-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
          </div>
          <div class="banner-content">
            <h4>${subTitle} • Available Across All Sanctuaries</h4>
            <p>Indulge in 100% natural, time-tested Ayurvedic beauty therapies formulated with precious saffron, red sandalwood, botanical oils, and herbal powders across our sanctuaries in Moka, Grand Baie, and Curepipe.</p>
          </div>
        </div>
      `;
    }

    // Check if subcategory is Body Care (showcase custom experience)
    if (currentCategory === 'beauty-care' && currentSubcategory === 'body-care' && filtered.length > 0 && !searchQuery) {
      treatmentsGrid.innerHTML = categoryNoticeHtml + renderBodyCareExperience(filtered);
      attachCardActionListeners();
      return;
    }

    // Check if subcategory is Hair Care (showcase custom experience)
    if (currentCategory === 'beauty-care' && currentSubcategory === 'hair-care' && filtered.length > 0 && !searchQuery) {
      treatmentsGrid.innerHTML = categoryNoticeHtml + renderHairCareExperience(filtered);
      attachCardActionListeners();
      return;
    }

    // Render Cards (Slot note removed from cards, now placed inside booking form)
    const cardsHtml = filtered.map(treatment => {
      const price = formatPrice(treatment.priceMUR, treatment.priceUSD);
      const isDoctorConsult = treatment.requiresDoctorConsultation !== false;
      const isAyurveda = treatment.categoryId === 'ayurveda';

      // If Classical Ayurveda (Therapies subcategory - NO BUTTONS, Doctor Consultation Mandatory, Prescribed by Doctor)
      if (isAyurveda) {
        return `
          <article class="treatment-card" data-id="${treatment.id}">
            <div class="treatment-image-header">
              <img src="${treatment.image}" alt="${treatment.name}" loading="lazy">
              <span class="treatment-badge">${treatment.badge}</span>
              <span class="treatment-cat-tag">${treatment.therapyTypeName || treatment.categoryName}</span>
            </div>

            <div class="treatment-body">
              <div class="treatment-header-row">
                <div>
                  <h3 class="treatment-name">${treatment.name}</h3>
                  <div class="treatment-subtitle">${treatment.subtitle}</div>
                </div>
              </div>

              <div class="treatment-meta">
                <span class="treatment-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  ${treatment.doshaFocus}
                </span>
                <span class="treatment-meta-item" style="margin-left: auto; color: var(--color-gold-dark); font-weight: 600;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
                  Prescribed by Doctor
                </span>
              </div>

              <div class="doctor-consult-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 14 14"></polyline></svg>
                Doctor Consultation Mandatory
              </div>

              <p class="treatment-desc">${treatment.description}</p>

              <div class="treatment-benefits-header" style="font-size: 0.74rem; font-weight: 800; letter-spacing: 0.8px; color: var(--color-gold-dark); text-transform: uppercase; margin-bottom: 8px;">BENEFITS:</div>
              <ul class="treatment-benefits">
                ${treatment.benefits.slice(0, 3).map(b => `
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${b}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </article>
        `;
      }

      // Spa / Beauty / Wellness Cards (with Book Now and WhatsApp buttons)
      const subcatBadgeHtml = treatment.subcategoryName ? `<div class="treatment-subcat-badge">${treatment.subcategoryName}</div>` : '';

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
              ${subcatBadgeHtml}
              <h3 class="treatment-name">${treatment.name}</h3>
              <div class="treatment-card-duration-gold">Duration: ${treatment.duration}</div>
            </div>

            <p class="treatment-desc" style="text-align: center;">${treatment.description}</p>

            ${treatment.benefits && treatment.benefits.length > 0 ? `
              <div class="treatment-includes-box">
                <div class="treatment-includes-title">BENEFITS:</div>
                <div class="treatment-pills-wrap">
                  ${treatment.benefits.map(b => `<span class="treatment-pill-tag">${b}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <div class="treatment-card-bottom-price">${price.main}</div>

            <div class="treatment-actions">
              <button type="button" class="btn btn-primary-dark btn-sm open-booking-btn" data-id="${treatment.id}">
                BOOK NOW
              </button>
              
              <button type="button" class="btn btn-whatsapp-outline btn-sm trigger-treatment-whatsapp" data-id="${treatment.id}" title="Select Location & WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                WHATSAPP
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Terms & Conditions section for Ayurveda Therapies catalog
    let termsSectionHtml = '';
    if (currentCategory === 'ayurveda' && currentSubcategory === 'therapies') {
      const termsGroups = (typeof AYURVEDA_TERMS !== 'undefined' && Array.isArray(AYURVEDA_TERMS)) ? AYURVEDA_TERMS : [];

      const getPolicyIcon = (category) => {
        if (category.includes('General')) {
          return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>';
        } else if (category.includes('Liability') || category.includes('Valuables')) {
          return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';
        } else if (category.includes('Bookings') || category.includes('Cancellation')) {
          return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
        } else if (category.includes('Etiquette')) {
          return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>';
        } else {
          return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>';
        }
      };

      const termsGroupsHtml = termsGroups.map(group => {
        if (typeof group === 'string') {
          return `
            <div class="terms-group-card">
              <ul class="terms-group-items">
                <li><span class="terms-bullet-dot"></span><div class="terms-item-text">${group}</div></li>
              </ul>
            </div>
          `;
        }
        return `
          <div class="terms-group-card">
            <div class="terms-group-header">
              <span class="terms-group-icon">${getPolicyIcon(group.category)}</span>
              <h4 class="terms-group-title">${group.category}</h4>
            </div>
            <ul class="terms-group-items">
              ${group.items.map(item => `
                <li>
                  <span class="terms-bullet-dot"></span>
                  <div class="terms-item-text">
                    <strong>${item.title}:</strong> ${item.desc}
                  </div>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
      }).join('');

      termsSectionHtml = `
        <div class="ayurveda-terms-card">
          <div class="terms-card-header">
            <span class="terms-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              Essential Guest Policies
            </span>
            <h3 class="terms-title">Terms & Conditions</h3>
            <p class="terms-subtitle">Policies & guidelines for guests receiving classical Ayurvedic treatments at Ayuryoga Sanctuary</p>
          </div>
          <div class="terms-groups-grid">
            ${termsGroupsHtml}
          </div>
        </div>
      `;
    }

    treatmentsGrid.innerHTML = categoryNoticeHtml + therapyTypeFilterHtml + `<div class="treatments-grid-inner">${cardsHtml}</div>` + termsSectionHtml;
    attachCardActionListeners();
    attachTherapyTypeListeners();
  }

  function attachTherapyTypeListeners() {
    if (!treatmentsGrid) return;
    treatmentsGrid.querySelectorAll('.therapy-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentTherapyType = btn.dataset.type;
        renderTreatments();
      });
    });
  }

  // =========================================================================
  // Ayurveda Doctor Consultation View Renderer
  // =========================================================================
  function renderAyurvedaConsultation() {
    const doctors = typeof AYURVEDA_DOCTORS !== 'undefined' ? AYURVEDA_DOCTORS : [];
    const conditions = typeof AYURVEDA_CONSULTATION_CONDITIONS !== 'undefined' ? AYURVEDA_CONSULTATION_CONDITIONS : [];

    const doctorsCardsHtml = doctors.map(doc => {
      return `
        <article class="doctor-card" data-doctor="${doc.id}">
          <div class="doctor-card-media">
            <div class="doctor-photo-frame">
              <img src="${doc.image}" alt="${doc.name}" class="doctor-photo" loading="lazy">
              <span class="doctor-badge-chip">${doc.badge}</span>
            </div>
            <span class="doctor-experience-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              ${doc.experience}
            </span>
          </div>

          <div class="doctor-card-content">
            <div class="doctor-header-info">
              <h3 class="doctor-name">${doc.title}</h3>
              <div class="doctor-designation">${doc.designation}</div>
              <div class="doctor-sanctuaries-list">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>${doc.sanctuaries.join(' • ')}</span>
              </div>
            </div>

            <p class="doctor-bio">${doc.bio}</p>

            <div class="doctor-specializations-box">
              <div class="doc-section-label">Clinical Specializations:</div>
              <div class="doc-spec-chips">
                ${doc.specializations.map(spec => `<span class="doc-spec-chip">${spec}</span>`).join('')}
              </div>
            </div>

            <div class="doctor-inclusions-box">
              <div class="doc-section-label">Consultation Includes:</div>
              <ul class="doc-inclusions-list">
                ${doc.consultationIncludes.map(inc => `
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${inc}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="doctor-actions">
              <button type="button" class="btn btn-primary-dark btn-sm trigger-doctor-booking" data-doctor="${doc.id}" style="width: 100%; justify-content: center;">
                Book Consultation
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    const conditionsCardsHtml = conditions.map((cond, idx) => {
      return `
        <div class="consult-disease-card">
          <div class="consult-disease-media">
            <img src="${cond.image}" alt="${cond.name}" class="consult-disease-img" loading="lazy">
            <span class="consult-disease-num-badge">${(idx + 1).toString().padStart(2, '0')}</span>
            <span class="consult-disease-sanskrit-badge">${cond.sanskrit}</span>
          </div>
          <div class="consult-disease-body">
            <h4 class="consult-disease-name">${cond.name}</h4>
            <p class="consult-disease-desc">${cond.desc}</p>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="ayurveda-consultation-wrapper">
        <div class="consultation-hero-banner">
          <span class="consult-banner-badge">Clinical Excellence • Experienced Doctors from Kerala</span>
          <h2 class="consult-banner-title">Resident Ayurvedic Physicians (Doctors)</h2>
          <p class="consult-banner-desc">At Ayuryoga International, our experienced Ayurvedic Vaidyas (Doctors) from Kerala bring classical clinical acumen. Consultations encompass traditional Nadi Pariksha (Pulse Diagnosis), constitutional Prakriti analysis, customized herbal pharmacopeia, and targeted Panchakarma prescriptions.</p>
        </div>

        <div class="doctors-profile-grid">
          ${doctorsCardsHtml}
        </div>

        <!-- Clinical Conditions & Diseases Treated in Doctor Consultation -->
        <div class="consultation-diseases-section">
          <div class="consult-diseases-header">
            <span class="consult-diseases-badge">Comprehensive Clinical Scope</span>
            <h3 class="consult-diseases-title">Conditions & Diseases Diagnosed in Consultation</h3>
            <p class="consult-diseases-desc">During your one-on-one doctor consultation, our senior physicians conduct comprehensive Nadi Pariksha and doshic evaluations to tailor personalized therapeutic plans for these core conditions:</p>
          </div>

          <div class="consult-diseases-grid">
            ${conditionsCardsHtml}
          </div>
        </div>

        <div class="consultation-steps-strip">
          <div class="consult-step-item">
            <div class="consult-step-num">01</div>
            <div class="consult-step-body">
              <h4>Constitutional Prakriti Analysis</h4>
              <p>In-depth clinical assessment to identify your inherent Dosha balance (Vata, Pitta, Kapha) and root metabolic health factors.</p>
            </div>
          </div>
          <div class="consult-step-item">
            <div class="consult-step-num">02</div>
            <div class="consult-step-body">
              <h4>Nadi Pariksha (Pulse Diagnosis)</h4>
              <p>Traditional non-invasive radial pulse diagnosis evaluating deep organ vitality, tissue health, and systemic imbalances.</p>
            </div>
          </div>
          <div class="consult-step-item">
            <div class="consult-step-num">03</div>
            <div class="consult-step-body">
              <h4>Tailored Prescriptions & Therapies</h4>
              <p>Personalized herbal pharmacopeia, dietary Dinacharya protocol, and targeted classical Ayurvedic therapy schedule.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // Ayurveda Specialized Clinical Services View Renderer
  // =========================================================================
  function renderAyurvedaServices() {
    const services = typeof AYURVEDA_SERVICES !== 'undefined' ? AYURVEDA_SERVICES : [];

    const servicesCardsHtml = services.map(serv => {
      return `
        <article class="service-showcase-card" data-service="${serv.id}">
          <div class="service-card-image-col">
            <img src="${serv.image}" alt="${serv.title}" class="service-img" loading="lazy">
            <span class="service-category-tag">${serv.tag}</span>
            <span class="service-badge-pill">${serv.badge}</span>
          </div>

          <div class="service-card-body">
            <div class="service-question-eyebrow">${serv.question}</div>
            <h3 class="service-main-heading">${serv.title}</h3>
            
            <div class="service-lead-box">
              <p class="service-lead-text">${serv.lead}</p>
            </div>

            <p class="service-description">${serv.description}</p>

            <div class="service-features-block">
              <div class="service-features-title">Clinical Highlights & Therapeutic Focus:</div>
              <ul class="service-features-list">
                ${serv.features.map(feat => `
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${feat}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="service-contacts-strip">
              <div class="service-contact-label">For Booking, Consultation & Herbal Remedies:</div>
              <div class="service-contact-pills">
                ${serv.contacts.map(c => `
                  <span class="service-contact-pill">
                    <strong>${c.location}:</strong> ${c.display}
                  </span>
                `).join(' <span style="color: var(--color-gold);">|</span> ')}
              </div>
            </div>

            <div class="service-actions">
              <button type="button" class="btn btn-primary-dark btn-sm trigger-service-booking" data-service="${serv.id}">
                BOOK YOUR CONSULTATION NOW
              </button>
              <button type="button" class="btn btn-whatsapp-outline btn-sm trigger-service-whatsapp" data-service="${serv.id}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                WHATSAPP ENQUIRY
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    return `
      <div class="ayurveda-services-wrapper">
        <div class="services-hero-banner">
          <span class="services-banner-badge">Specialized Clinical Programs • Proven Formulations</span>
          <h2 class="services-banner-title">Ayurvedic Clinical Care & Specialized Programs</h2>
          <p class="services-banner-desc">Targeted therapeutic solutions engineered for chronic ailments, musculoskeletal pain, gastrointestinal health, nervous burnout, and senior vitality across our sanctuaries in Moka and Grand Baie.</p>
        </div>

        <div class="services-cards-grid">
          ${servicesCardsHtml}
        </div>
      </div>
    `;
  }

  function attachCardActionListeners() {
    if (!treatmentsGrid) return;

    // 1. Treatment cards Booking Modal
    treatmentsGrid.querySelectorAll('.open-booking-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        openBookingModalWithTreatment(id);
      });
    });

    // 2. Treatment cards Location Picker WhatsApp
    treatmentsGrid.querySelectorAll('.trigger-treatment-whatsapp').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        openLocationPickerModal(id);
      });
    });

    // 3. Doctor Booking Triggers
    treatmentsGrid.querySelectorAll('.trigger-doctor-booking').forEach(btn => {
      btn.addEventListener('click', () => {
        const docId = btn.dataset.doctor;
        const doc = (typeof AYURVEDA_DOCTORS !== 'undefined') ? AYURVEDA_DOCTORS.find(d => d.id === docId) : null;
        openBookingModal();
        if (bookingModalCategorySelect) {
          bookingModalCategorySelect.value = 'ayurveda';
          populateTreatmentsDropdown('ayurveda');
        }
        const notesField = document.getElementById('bookingNotes');
        if (notesField && doc) {
          notesField.value = `Requesting consultation with ${doc.title} (${doc.designation}).`;
        }
        updateModalSummary();
      });
    });

    // 4. Doctor WhatsApp Direct Triggers
    treatmentsGrid.querySelectorAll('.trigger-doctor-whatsapp').forEach(btn => {
      btn.addEventListener('click', () => {
        const docId = btn.dataset.doctor;
        const doc = (typeof AYURVEDA_DOCTORS !== 'undefined') ? AYURVEDA_DOCTORS.find(d => d.id === docId) : null;
        if (!doc) return;

        const messageText = 
          `Namaste Ayuryoga! 🙏\n\n` +
          `I would like to schedule a personalized Ayurvedic Doctor Consultation with *${doc.title}* (${doc.designation}).\n\n` +
          `👨‍⚕️ *Physician:* ${doc.title}\n` +
          `🏥 *Sanctuaries:* ${doc.sanctuaries.join(', ')}\n\n` +
          `Please let me know the available consultation slots. Thank you!`;

        const whatsappUrl = `https://wa.me/${doc.whatsappPhone}?text=${encodeURIComponent(messageText)}`;
        window.open(whatsappUrl, '_blank');
      });
    });

    // 5. Specialized Services Booking Triggers
    treatmentsGrid.querySelectorAll('.trigger-service-booking').forEach(btn => {
      btn.addEventListener('click', () => {
        const servId = btn.dataset.service;
        const serv = (typeof AYURVEDA_SERVICES !== 'undefined') ? AYURVEDA_SERVICES.find(s => s.id === servId) : null;
        openBookingModal();
        if (bookingModalCategorySelect) {
          bookingModalCategorySelect.value = 'ayurveda';
          populateTreatmentsDropdown('ayurveda');
        }
        const notesField = document.getElementById('bookingNotes');
        if (notesField && serv) {
          notesField.value = `Specialized Clinical Service: ${serv.title} (${serv.badge})`;
        }
        updateModalSummary();
      });
    });

    // 6. Specialized Services WhatsApp Triggers
    treatmentsGrid.querySelectorAll('.trigger-service-whatsapp').forEach(btn => {
      btn.addEventListener('click', () => {
        const servId = btn.dataset.service;
        const serv = (typeof AYURVEDA_SERVICES !== 'undefined') ? AYURVEDA_SERVICES.find(s => s.id === servId) : null;
        if (!serv) return;

        const messageText = 
          `Namaste Ayuryoga! 🙏\n\n` +
          `I would like to enquire about your specialized clinical program:\n\n` +
          `🌿 *Program:* ${serv.title}\n` +
          `📋 *Clinical Focus:* ${serv.lead}\n` +
          `🏷️ *Badge:* ${serv.badge}\n\n` +
          `Please share details regarding doctor consultation and treatment availability. Thank you!`;

        const whatsappUrl = `https://wa.me/23058074009?text=${encodeURIComponent(messageText)}`;
        window.open(whatsappUrl, '_blank');
      });
    });
  }

  // =========================================================================
  // Body Care Custom Luxury Experience Renderer
  // =========================================================================
  function renderBodyCareExperience(treatments) {
    const list = Array.isArray(treatments) ? treatments : [treatments];
    const heroTreatment = list.find(t => t.id === 'body-01') || list[0];
    const additionalTreatments = list.filter(t => t.id !== heroTreatment.id);

    const price = formatPrice(heroTreatment.priceMUR, heroTreatment.priceUSD);

    let additionalCardsHtml = '';
    if (additionalTreatments.length > 0) {
      additionalCardsHtml = `
        <div class="body-care-section" style="margin-top: 50px;">
          <div class="body-care-section-header">
            <div class="body-care-sub-heading">COMPLEMENTARY BODY RITUALS</div>
            <h3 class="body-care-main-heading">More Specialized Body Care</h3>
          </div>
          <div class="treatments-grid-inner">
            ${additionalTreatments.map(t => {
              const p = formatPrice(t.priceMUR, t.priceUSD);
              return `
                <article class="treatment-card" data-id="${t.id}">
                  <div class="treatment-image-header">
                    <img src="${t.image}" alt="${t.name}" loading="lazy">
                    <span class="treatment-duration-pill-top">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      ${t.duration}
                    </span>
                  </div>

                  <div class="treatment-body">
                    <div class="treatment-card-center-head">
                      <div class="treatment-subcat-badge">Body Care</div>
                      <h3 class="treatment-name">${t.name}</h3>
                      <div class="treatment-card-duration-gold">Duration: ${t.duration}</div>
                    </div>

                    <p class="treatment-desc" style="text-align: center;">${t.description}</p>

                    ${t.benefits && t.benefits.length > 0 ? `
                      <div class="treatment-includes-box">
                        <div class="treatment-includes-title">BENEFITS:</div>
                        <div class="treatment-pills-wrap">
                          ${t.benefits.map(b => `<span class="treatment-pill-tag">${b}</span>`).join('')}
                        </div>
                      </div>
                    ` : ''}

                    <div class="treatment-card-bottom-price">${p.main}</div>

                    <div class="treatment-actions">
                      <button type="button" class="btn btn-primary-dark btn-sm open-booking-btn" data-id="${t.id}">
                        BOOK NOW
                      </button>
                      
                      <button type="button" class="btn btn-whatsapp-outline btn-sm trigger-treatment-whatsapp" data-id="${t.id}" title="Select Location & WhatsApp">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                        WHATSAPP
                      </button>
                    </div>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="body-care-luxury-container">
        <!-- 1. HERO SHOWCASE CARD -->
        <div class="body-care-hero-card">
          <div class="body-care-hero-media">
            <img src="${heroTreatment.image}" alt="${heroTreatment.name}" class="body-care-hero-img">
            <div class="body-care-hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#dfbe7d" stroke="#dfbe7d"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>★ Signature Full Body Ritual</span>
            </div>
            <div class="body-care-hero-duration">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Duration: ${heroTreatment.duration}</span>
            </div>
          </div>

          <div class="body-care-hero-content">
            <div class="body-care-pill-tag">TRADITIONAL UDVARTHANAM-INSPIRED THERAPY</div>
            <h2 class="body-care-hero-title">${heroTreatment.name}</h2>
            
            <div class="body-care-pricing-strip">
              <div class="body-care-price-block">
                <div class="body-care-price-val">${price.main}</div>
                <div class="body-care-price-lbl">FULL TREATMENT PRICE</div>
              </div>
              <div class="body-care-price-divider"></div>
              <div class="body-care-duration-block">
                <div class="body-care-duration-val">${heroTreatment.duration}</div>
                <div class="body-care-duration-lbl">TREATMENT DURATION</div>
              </div>
            </div>

            <p class="body-care-hero-desc">
              Our signature <strong>Herbal Body Scrub</strong> is an invigorating Ayurvedic polishing ritual that combines finely powdered therapeutic herbs, precious sandalwood, and cold-pressed botanical oils. Performed using rhythmic upward strokes (<em>Udvarthanam</em>), it gently buffs away dull surface cells, stimulates lymphatic microcirculation, releases trapped metabolic toxins, and restores velvety softness and radiant suppleness to every inch of your skin.
            </p>

            <div class="body-care-hero-actions">
              <button type="button" class="btn btn-primary-dark open-booking-btn body-care-btn" data-id="${heroTreatment.id}">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                BOOK APPOINTMENT
              </button>
              <button type="button" class="btn btn-whatsapp-outline body-care-btn trigger-treatment-whatsapp" data-id="${heroTreatment.id}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                WHATSAPP US
              </button>
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

        ${additionalCardsHtml}
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
                  <div class="hair-care-includes-label">BENEFITS:</div>
                  <div class="hair-care-pills">
                    ${treatment.benefits.map(b => `<span class="hair-care-pill">${b}</span>`).join('')}
                  </div>
                </div>

                <div class="hair-care-footer">
                  <div class="hair-care-price">${price.main}</div>
                  <div class="hair-care-actions">
                    <button type="button" class="btn btn-primary-dark open-booking-btn hair-care-action-btn" data-id="${treatment.id}">
                      BOOK NOW
                    </button>
                    <button type="button" class="btn btn-whatsapp-outline hair-care-action-btn trigger-treatment-whatsapp" data-id="${treatment.id}">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                      WHATSAPP
                    </button>
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

    // General Location Picker triggers across page
    document.querySelectorAll('.trigger-location-picker').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openLocationPickerModal(null);
      });
    });

    // Modal Close buttons
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeBookingModal);
    }
    if (bookingModal) {
      bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) closeBookingModal();
      });
    }

    if (locationModalCloseBtn) {
      locationModalCloseBtn.addEventListener('click', closeLocationPickerModal);
    }
    if (locationPickerModal) {
      locationPickerModal.addEventListener('click', (e) => {
        if (e.target === locationPickerModal) closeLocationPickerModal();
      });
    }

    // Booking Form Submission
    if (bookingForm) {
      bookingForm.addEventListener('submit', handleBookingSubmit);
    }
  }

  // =========================================================================
  // 5. Booking / Doctor Consultation Modal Logic
  // =========================================================================
  function setupBookingModalDropdowns() {
    if (!bookingModalCategorySelect || !bookingModalTreatmentSelect) return;

    // 1. Setup Location Selection Radios
    if (bookingLocationGrid) {
      bookingLocationGrid.querySelectorAll('.location-radio-card').forEach(card => {
        card.addEventListener('click', () => {
          bookingLocationGrid.querySelectorAll('.location-radio-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          const radioInput = card.querySelector('input[type="radio"]');
          if (radioInput) radioInput.checked = true;
          selectedBookingLocationId = card.dataset.location;
          updateModalSummary();
        });
      });
    }

    // 2. Populate Categories
    bookingModalCategorySelect.innerHTML = `
      <option value="">-- Choose Category --</option>
      <option value="ayurveda">Ayurveda (${TREATMENTS_DATA.filter(t => t.categoryId === 'ayurveda').length} Therapies)</option>
      <option value="wellness">Wellness (All ${TREATMENTS_DATA.filter(t => t.categoryId === 'wellness').length} Therapies)</option>
      <optgroup label="Wellness Subcategories">
        <option value="wellness:western">Wellness • Western (${TREATMENTS_DATA.filter(t => t.categoryId === 'wellness' && t.subcategoryId === 'western').length})</option>
        <option value="wellness:ayurveda">Wellness • Ayurveda (${TREATMENTS_DATA.filter(t => t.categoryId === 'wellness' && t.subcategoryId === 'ayurveda').length})</option>
      </optgroup>
      <option value="beauty-care">Beauty Care (All ${TREATMENTS_DATA.filter(t => t.categoryId === 'beauty-care').length} Rituals)</option>
      <optgroup label="Beauty Care Subcategories">
        <option value="beauty-care:face-care">Beauty Care • Face Care (${TREATMENTS_DATA.filter(t => t.subcategoryId === 'face-care').length})</option>
        <option value="beauty-care:body-care">Beauty Care • Body Care (${TREATMENTS_DATA.filter(t => t.subcategoryId === 'body-care').length})</option>
        <option value="beauty-care:hair-care">Beauty Care • Hair Care (${TREATMENTS_DATA.filter(t => t.subcategoryId === 'hair-care').length})</option>
        <option value="beauty-care:hand-foot-care">Beauty Care • Hand & Foot Care (${TREATMENTS_DATA.filter(t => t.subcategoryId === 'hand-foot-care').length})</option>
      </optgroup>
    `;

    // 3. Populate All Treatments initially
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

  function populateTreatmentsDropdown(categoryFilter = '') {
    let list = TREATMENTS_DATA;
    if (categoryFilter) {
      if (categoryFilter.includes(':')) {
        const [catId, subcatId] = categoryFilter.split(':');
        list = TREATMENTS_DATA.filter(t => t.categoryId === catId && t.subcategoryId === subcatId);
      } else {
        list = TREATMENTS_DATA.filter(t => t.categoryId === categoryFilter);
      }
    }

    bookingModalTreatmentSelect.innerHTML = `
      <option value="">-- Choose Treatment --</option>
      ${list.map(t => {
        const subLabel = t.subcategoryName ? `[${t.subcategoryName}] ` : '';
        const isAyur = t.categoryId === 'ayurveda';
        const labelText = isAyur
          ? `${t.name} (Prescribed by Doctor)`
          : `${subLabel}${t.name} (${t.duration} - Rs ${t.priceMUR.toLocaleString()})`;
        return `
          <option value="${t.id}" data-category="${t.categoryId}" data-subcategory="${t.subcategoryId || ''}" data-price-mur="${t.priceMUR || ''}" data-price-usd="${t.priceUSD || ''}" data-duration="${t.duration || ''}">
            ${labelText}
          </option>
        `;
      }).join('')}
    `;
  }

  function openBookingModalWithTreatment(treatmentId) {
    const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId);
    if (!treatment) {
      openBookingModal();
      return;
    }

    openBookingModal();
    const catValue = treatment.subcategoryId ? `${treatment.categoryId}:${treatment.subcategoryId}` : treatment.categoryId;
    if (bookingModalCategorySelect) {
      bookingModalCategorySelect.value = catValue;
    }
    populateTreatmentsDropdown(catValue);
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
    const location = getLocationById(selectedBookingLocationId);

    if (treatment) {
      const price = formatPrice(treatment.priceMUR, treatment.priceUSD);
      const isAyur = treatment.categoryId === 'ayurveda';
      const isDoctorConsult = treatment.requiresDoctorConsultation !== false;
      const categoryDisplay = treatment.subcategoryName 
        ? `${treatment.categoryName} • ${treatment.subcategoryName}` 
        : treatment.categoryName;

      if (modalTitleEl) {
        modalTitleEl.textContent = isDoctorConsult
          ? `Schedule Doctor Consultation (${location.name})`
          : `Reserve Your Wellness Session (${location.name})`;
      }
      if (modalSubtitleEl) {
        modalSubtitleEl.innerHTML = isDoctorConsult
          ? `🩺 <em>Classical therapy at Ayuryoga ${location.name} sanctuary administered following a personalized Doctor consultation.</em>`
          : `Select your preferred date & time for your session at Ayuryoga ${location.name}.`;
      }
      if (modalSubmitBtn) {
        modalSubmitBtn.textContent = isDoctorConsult
          ? `Confirm & Request Doctor Consultation (${location.name})`
          : `Confirm & Submit Reservation (${location.name})`;
      }

      const durationInfo = isAyur ? `Personalized Doctor Protocol` : `Duration: <strong>${treatment.duration}</strong>`;
      const priceHtml = isAyur
        ? `<div style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary-dark); line-height: 1.2;">Prescribed by Doctor</div>
           <div style="font-size: 0.75rem; color: var(--color-gold-dark); margin-top: 2px;">Doctor Consultation Mandatory</div>`
        : `<div style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-dark);">${price.main}</div>
           <div style="font-size: 0.75rem; color: var(--color-text-light);">${price.alt}</div>`;

      modalSummaryBox.innerHTML = `
        <div style="flex: 1;">
          <div style="font-size: 0.78rem; color: var(--color-gold-dark); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">
            📍 Sanctuary: <strong>${location.name}</strong> (${location.displayPhone})
          </div>
          <strong style="color: var(--color-primary-dark); font-size: 1.05rem;">${treatment.name}</strong>
          <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 2px;">
            Category: <strong>${categoryDisplay}</strong> | ${durationInfo}
          </div>
          ${isDoctorConsult ? `<div style="font-size: 0.76rem; color: var(--color-gold-dark); font-weight: 700; margin-top: 4px;">🩺 Doctor Consultation Mandatory</div>` : ''}
        </div>
        <div style="text-align: right; flex-shrink: 0;">
          ${priceHtml}
        </div>
      `;
      modalSummaryBox.style.display = 'flex';
    } else {
      modalSummaryBox.style.display = 'none';
      if (modalTitleEl) modalTitleEl.textContent = `Schedule Doctor Consultation (${location.name})`;
      if (modalSubtitleEl) modalSubtitleEl.textContent = `Select your therapy and schedule your preferred date & time at Ayuryoga ${location.name}.`;
      if (modalSubmitBtn) modalSubmitBtn.textContent = `Confirm & Submit Reservation (${location.name})`;
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
    const location = getLocationById(selectedBookingLocationId);

    if (!treatment) {
      alert('Please select a treatment therapy to continue.');
      return;
    }

    const isAyur = treatment.categoryId === 'ayurveda';
    const isDoctorConsult = treatment.requiresDoctorConsultation !== false;
    const priceFormatted = getWhatsAppPriceString(treatment.priceMUR, treatment.priceUSD);
    const categoryDisplay = treatment.subcategoryName 
      ? `${treatment.categoryName} • ${treatment.subcategoryName}` 
      : treatment.categoryName;

    // Build Formatted WhatsApp Message targeted to specific location
    let therapyDetailsSection = '';
    if (isAyur) {
      therapyDetailsSection = 
        `🌿 *Therapy:* ${treatment.name}\n` +
        `📂 *Category:* ${categoryDisplay}\n` +
        `🩺 *Doctor Consultation:* Mandatory (Prescribed by Doctor)\n`;
    } else {
      therapyDetailsSection = 
        `🌿 *Therapy:* ${treatment.name}\n` +
        `📂 *Category:* ${categoryDisplay}\n` +
        `⏱️ *Duration:* ${treatment.duration}\n` +
        `💰 *Estimated Price:* ${priceFormatted}\n` +
        (isDoctorConsult ? `🩺 *Doctor Consultation:* Mandatory & Requested\n` : ``);
    }

    const bookingSummaryText = 
      `*🌟 NEW AYURYOGA CONSULTATION & BOOKING REQUEST 🌟*\n\n` +
      `📍 *Preferred Sanctuary Location:* ${location.name} (${location.badge})\n` +
      `📞 *Direct WhatsApp Line:* ${location.displayPhone}\n\n` +
      therapyDetailsSection + `\n` +
      `📅 *Preferred Date:* ${date || 'Flexible'}\n` +
      `⏰ *Time Slot:* ${timeSlot}\n` +
      `👥 *Number of Guests:* ${guests}\n\n` +
      `👤 *Guest Name:* ${name}\n` +
      `📱 *Phone / WhatsApp:* ${phone}\n` +
      `✉️ *Email:* ${email || 'N/A'}\n` +
      `📝 *Health Notes / Focus Area:* ${notes || 'None'}\n\n` +
      `_Sent via Ayuryoga International Brochure Website (${location.name} Branch)_`;

    const whatsappUrl = `https://wa.me/${location.phone}?text=${encodeURIComponent(bookingSummaryText)}`;

    // Show Success State inside modal
    if (bookingForm) bookingForm.style.display = 'none';
    if (bookingSuccessBox) {
      bookingSuccessBox.style.display = 'block';
      const summaryDetailEl = document.getElementById('successSummaryDetails');
      if (summaryDetailEl) {
        const scheduleOrPriceLine = isAyur
          ? `<div style="font-size: 0.88rem; color: var(--color-gold-dark); font-weight: 600;">🩺 Prescribed by Doctor (Doctor Consultation Mandatory)</div>`
          : `<div style="font-size: 0.88rem; color: var(--color-text-muted);">Duration: <strong>${treatment.duration}</strong> | Total: <strong>${priceFormatted}</strong></div>`;

        summaryDetailEl.innerHTML = `
          <div style="background: var(--color-sand); padding: 18px; border-radius: var(--radius-md); text-align: left; margin: 20px 0; border-left: 4px solid var(--color-gold);">
            <div style="font-weight: 700; color: var(--color-primary-dark); font-size: 1.1rem; margin-bottom: 4px;">${treatment.name}</div>
            <div style="font-size: 0.88rem; color: var(--color-gold-dark); font-weight: 700; margin-bottom: 6px;">📍 Sanctuary: ${location.name} (${location.displayPhone})</div>
            <div style="font-size: 0.88rem; color: var(--color-text-muted);">Guest: <strong>${name}</strong> (${phone})</div>
            <div style="font-size: 0.88rem; color: var(--color-text-muted);">Schedule: <strong>${date}</strong> at <strong>${timeSlot}</strong></div>
            ${scheduleOrPriceLine}
          </div>
        `;
      }
    }

    if (sendWhatsAppBookingBtnText) {
      sendWhatsAppBookingBtnText.textContent = `Send Reservation to ${location.name} WhatsApp (${location.displayPhone})`;
    }

    if (sendWhatsAppBookingBtn) {
      sendWhatsAppBookingBtn.onclick = () => {
        window.open(whatsappUrl, '_blank');
      };
    }
  }

  // =========================================================================
  // 6. WhatsApp Instant Location Picker Modal Logic
  // =========================================================================
  function initLocationPickerModal() {
    if (!locationOptionsList) return;

    locationOptionsList.innerHTML = AYURYOGA_LOCATIONS.map(loc => {
      return `
        <div class="location-option-item" data-location="${loc.id}">
          <div class="location-option-left">
            <div class="location-option-icon">${loc.icon}</div>
            <div class="location-option-text">
              <div class="location-option-title">
                <span>${loc.name}</span>
                <span class="location-option-badge">${loc.badge}</span>
              </div>
              <div class="location-option-desc">${loc.highlight}</div>
              <div class="location-option-phone">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
                ${loc.displayPhone} • Open Daily
              </div>
            </div>
          </div>
          <div class="location-option-cta">
            <span class="btn-location-whatsapp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.95.82 2.791.82h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.364 8.232c-.141.398-.711.758-1.011.808-.282.046-.649.074-1.898-.444-1.597-.662-2.617-2.28-2.696-2.385-.078-.106-.646-.86-.646-1.637 0-.778.406-1.16.55-1.314.143-.155.313-.194.417-.194.104 0 .208.001.3.006.096.004.225-.037.352.268.13.312.443 1.077.482 1.156.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.235.274-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.391-.455.495-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.102.775z"></path></svg>
              Chat with ${loc.name}
            </span>
          </div>
        </div>
      `;
    }).join('');

    // Handle clicks on location option cards
    locationOptionsList.querySelectorAll('.location-option-item').forEach(card => {
      card.addEventListener('click', () => {
        const locId = card.dataset.location;
        handleLocationWhatsAppSelection(locId);
      });
    });
  }

  function openLocationPickerModal(treatmentId = null) {
    if (!locationPickerModal) return;

    if (treatmentId) {
      pendingWhatsAppTreatment = TREATMENTS_DATA.find(t => t.id === treatmentId);
    } else {
      pendingWhatsAppTreatment = null;
    }

    if (locationPickerTreatmentPreview) {
      if (pendingWhatsAppTreatment) {
        const isAyur = pendingWhatsAppTreatment.categoryId === 'ayurveda';
        const price = formatPrice(pendingWhatsAppTreatment.priceMUR, pendingWhatsAppTreatment.priceUSD);
        const catDisplay = pendingWhatsAppTreatment.subcategoryName 
          ? `${pendingWhatsAppTreatment.categoryName} • ${pendingWhatsAppTreatment.subcategoryName}` 
          : pendingWhatsAppTreatment.categoryName;

        const durationText = isAyur ? `Personalized Doctor Protocol` : `Duration: <strong>${pendingWhatsAppTreatment.duration}</strong>`;
        const priceDisplay = isAyur 
          ? `<span style="font-size: 0.88rem; font-weight: 700; color: var(--color-gold-dark);">Prescribed by Doctor</span>` 
          : price.main;

        locationPickerTreatmentPreview.innerHTML = `
          <div class="location-treatment-preview-info">
            <h5>${pendingWhatsAppTreatment.name}</h5>
            <p>Category: <strong>${catDisplay}</strong> • ${durationText}</p>
          </div>
          <div class="location-treatment-preview-price">
            ${priceDisplay}
          </div>
        `;
        locationPickerTreatmentPreview.style.display = 'flex';
      } else {
        locationPickerTreatmentPreview.style.display = 'none';
      }
    }

    locationPickerModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLocationPickerModal() {
    if (!locationPickerModal) return;
    locationPickerModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function handleLocationWhatsAppSelection(locationId) {
    const location = getLocationById(locationId);
    closeLocationPickerModal();

    let messageText = '';

    if (pendingWhatsAppTreatment) {
      const isAyur = pendingWhatsAppTreatment.categoryId === 'ayurveda';
      const isDoctorConsult = pendingWhatsAppTreatment.requiresDoctorConsultation !== false;
      const priceFormatted = getWhatsAppPriceString(pendingWhatsAppTreatment.priceMUR, pendingWhatsAppTreatment.priceUSD);
      const catDisplay = pendingWhatsAppTreatment.subcategoryName 
        ? `${pendingWhatsAppTreatment.categoryName} • ${pendingWhatsAppTreatment.subcategoryName}` 
        : pendingWhatsAppTreatment.categoryName;

      if (isAyur) {
        messageText = 
          `Namaste Ayuryoga ${location.name} Sanctuary! 🙏\n\n` +
          `I would like to request a *Doctor Consultation & Treatment* at your *${location.name}* centre for:\n\n` +
          `🌿 *Treatment:* ${pendingWhatsAppTreatment.name}\n` +
          `📂 *Category:* ${catDisplay}\n` +
          `🩺 *Protocol:* Classical Ayurveda (Doctor Consultation Mandatory • Prescribed by Doctor)\n` +
          `📍 *Sanctuary Location:* ${location.name} (${location.badge})\n\n` +
          `Please let me know available slots with the Ayurvedic Doctor at ${location.name}. Thank you!`;
      } else if (isDoctorConsult) {
        messageText = 
          `Namaste Ayuryoga ${location.name} Sanctuary! 🙏\n\n` +
          `I would like to request a *Doctor Consultation & Appointment* at your *${location.name}* centre for:\n\n` +
          `🌿 *Treatment:* ${pendingWhatsAppTreatment.name}\n` +
          `📂 *Category:* ${catDisplay}\n` +
          `⏱️ *Duration:* ${pendingWhatsAppTreatment.duration}\n` +
          `💰 *Price:* ${priceFormatted}\n` +
          `📍 *Sanctuary Location:* ${location.name} (${location.badge})\n\n` +
          `Please let me know available slots with the Ayurvedic Doctor at ${location.name}. Thank you!`;
      } else {
        messageText = 
          `Namaste Ayuryoga ${location.name} Sanctuary! 🙏\n\n` +
          `I would like to enquire / book the following therapy at your *${location.name}* centre:\n\n` +
          `🌿 *Treatment:* ${pendingWhatsAppTreatment.name}\n` +
          `📂 *Category:* ${catDisplay}\n` +
          `⏱️ *Duration:* ${pendingWhatsAppTreatment.duration}\n` +
          `💰 *Price:* ${priceFormatted}\n` +
          `📍 *Sanctuary Location:* ${location.name} (${location.badge})\n\n` +
          `Please let me know available slots at ${location.name}. Thank you!`;
      }
    } else {
      messageText = 
        `Namaste Ayuryoga ${location.name} Sanctuary! 🙏\n\n` +
        `I am exploring your Classical Ayurvedic & Wellness Brochure and would like to enquire about appointments and therapies at your *${location.name}* centre.\n\n` +
        `📍 *Centre:* ${location.name} (${location.address})\n` +
        `Please let me know how I can schedule a consultation with your Vaidya / book a therapy session. Thank you!`;
    }

    const whatsappUrl = `https://wa.me/${location.phone}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
  }

  // =========================================================================
  // 7. Floating WhatsApp Concierge Widget
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

    // Direct quick location buttons inside bubble
    if (floatingBubble) {
      floatingBubble.querySelectorAll('.trigger-quick-whatsapp').forEach(btn => {
        btn.addEventListener('click', () => {
          const locId = btn.dataset.location;
          handleLocationWhatsAppSelection(locId);
        });
      });
    }

    if (floatingWhatsAppBtn) {
      floatingWhatsAppBtn.addEventListener('click', () => {
        openLocationPickerModal(null);
      });
    }
  }
});
