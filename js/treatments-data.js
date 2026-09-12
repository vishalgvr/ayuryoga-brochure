/**
 * Ayuryoga International - Therapies & Treatments Catalog Data
 * WhatsApp Enquiry Number: +23058074009
 * Currency: MUR (Mauritian Rupee) with approximate USD conversions
 */

const WHATSAPP_PHONE = "23058074009";

const AYURYOGA_LOCATIONS = [
  {
    id: "moka",
    name: "Moka",
    fullName: "Ayuryoga Sanctuary - Moka (Main Centre)",
    badge: "Main Sanctuary & Hospital",
    phone: "23058074009",
    displayPhone: "+230 5807 4009",
    address: "Moka, Mauritius",
    icon: "🌿",
    highlight: "Ayurvedic Inpatient, Panchakarma & Research Centre",
    hours: "08:00 AM – 08:00 PM",
    isDefault: true
  },
  {
    id: "grand-baie",
    name: "Grand Baie",
    fullName: "Ayuryoga Sanctuary - Grand Baie",
    badge: "North Coastal Centre",
    phone: "23059429564",
    displayPhone: "+230 5942 9564",
    address: "Grand Baie, Mauritius",
    icon: "🌊",
    highlight: "Holistic Wellness Spa, Beauty Rituals & Doctor Consultation",
    hours: "08:00 AM – 08:00 PM"
  },
  {
    id: "curepipe",
    name: "Curepipe",
    fullName: "Ayuryoga Sanctuary - Curepipe",
    badge: "Central Highlands Centre",
    phone: "23058857888",
    displayPhone: "+230 5885 7888",
    address: "Curepipe, Mauritius",
    icon: "🍃",
    highlight: "Classical Ayurvedic Therapies & Herbal Wellness Centre",
    hours: "08:00 AM – 08:00 PM"
  }
];

const THERAPY_CATEGORIES = [
  { id: "ayurveda", name: "Ayurveda", icon: "flower-lotus" },
  { id: "wellness", name: "Wellness", icon: "heart-pulse" },
  { id: "beauty-care", name: "Beauty Care", icon: "sparkle" },
  { id: "face-care", name: "Face Care", icon: "smile" },
  { id: "body-care", name: "Body Care", icon: "shield-check" },
  { id: "hair-care", name: "Hair Care", icon: "feather" },
  { id: "hand-foot-care", name: "Hand & Foot Care", icon: "hand" }
];

const TREATMENTS_DATA = [
  // =========================================================================
  // 1. AYURVEDA (Classical Treatments - Administered After Doctor Consultation)
  // =========================================================================
  {
    id: "ayur-01",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam + Njavarakizhi (Without Oil)",
    subtitle: "Classical Medicated Herbal Rice Poultice & Full Body Rejuvenation",
    duration: "90 min",
    priceMUR: 2250,
    priceUSD: 50,
    badge: "Doctor Prescribed",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam + Njavarakizhi  - Without Oil.webp",
    description: "An intensive rejuvenating therapy combining full body Abhyangam massage followed by Njavarakizhi, where warm boluses of medicinal red rice cooked in milk and herbal decoction are applied across the body to rebuild tissues and soothe nerves.",
    benefits: [
      "Deeply nourishes and strengthens muscular tissues and joints",
      "Enhances skin luster, improves peripheral blood circulation",
      "Relieves emaciation, chronic fatigue, and neurological weakness",
      "Calms aggravated Vata dosha and promotes longevity"
    ],
    doshaFocus: "Vata & Pitta Pacifying",
    recommendedFor: "Muscle wasting, joint stiffness, chronic fatigue, anti-aging"
  },
  {
    id: "ayur-02",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam + Bashpa Sweda (Without Oil)",
    subtitle: "Therapeutic Body Therapy with Medicated Herbal Steam Bath",
    duration: "60 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Detox & Relief",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam + Bhashpa Sweda - Without Oil.webp",
    description: "A comprehensive detoxification therapy pairing full body therapeutic Abhyangam with Bashpa Sweda (herbal steam box). The warm herbal vapors open micro-channels (Srotas), flushing deep-seated toxins through perspiration.",
    benefits: [
      "Eliminates accumulated cellular endotoxins (Ama)",
      "Relieves joint pain, stiffness, and body heaviness",
      "Improves circulation and relaxes taut muscles",
      "Promotes light and energized bodily feeling"
    ],
    doshaFocus: "Vata & Kapha Reduction",
    recommendedFor: "Body stiffness, water retention, sluggish metabolism, stress"
  },
  {
    id: "ayur-03",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam Treatment (Without Oil)",
    subtitle: "Focused Classical Ayurvedic Body Massage Protocol",
    duration: "45 min",
    priceMUR: 1440,
    priceUSD: 32,
    badge: "Classical Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam Treatment Without Oil.webp",
    description: "A specialized 45-minute clinical Abhyangam session tailored by our Vaidya to target focal areas of tension and stiffness, stimulating vital Marma energy points to restore systemic equilibrium.",
    benefits: [
      "Restores musculoskeletal flexibility and joint mobility",
      "Relieves physical fatigue and everyday stress",
      "Stimulates vital Marma energy channels",
      "Calms nervous exhaustion and improves sleep quality"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "General fatigue, mild joint ache, stress, posture strain"
  },
  {
    id: "ayur-04",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam",
    subtitle: "Traditional Full Body Ayurvedic Massage",
    duration: "45 min",
    priceMUR: 1200,
    priceUSD: 27,
    badge: "Core Therapy",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam.webp",
    description: "The cornerstone of Ayurvedic daily health regimens. Rhythmic, therapeutic stroking along biological energy meridians to balance all three doshas and nourish bodily tissues.",
    benefits: [
      "Promotes lymphatic drainage and enhances circulation",
      "Soothes sensory fatigue and calms the nervous system",
      "Helps tone muscles and lubricates joints",
      "Enhances natural immunity and vitality (Ojas)"
    ],
    doshaFocus: "Tridoshic Balance",
    recommendedFor: "Physical exhaustion, muscular stiffness, insomnia, routine wellness"
  },
  {
    id: "ayur-05",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Naranga Kizhi (Herbal Powder & Lemon Poultice)",
    subtitle: "Citrus & Medicated Herb Bolus Fomentation for Acute Inflammation",
    duration: "60 min",
    priceMUR: 1990,
    priceUSD: 44,
    badge: "Pain & Stiffness",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Naranga Kizhi.webp",
    description: "A specialized therapeutic fomentation where fresh lemons, medicated powders, garlic, and rock salt are bundled in cotton pouches, heated in herbal oil, and rhythmically applied to alleviate acute pain and swelling.",
    benefits: [
      "Remarkably reduces localized inflammation, edema, and sprains",
      "Relieves cervical spondylosis, frozen shoulder, and sciatica",
      "Breaks down localized Ama (toxin) congestion",
      "Restores free joint movement and flexibility"
    ],
    doshaFocus: "Vata & Kapha Alleviation",
    recommendedFor: "Frozen shoulder, acute sprains, sciatica, severe joint inflammation"
  },
  {
    id: "ayur-06",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Virechanam",
    subtitle: "Classical Panchakarma Therapeutic Purgation",
    duration: "15 min",
    priceMUR: 480,
    priceUSD: 11,
    badge: "Panchakarma",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Virechanam.webp",
    description: "One of the five classical Panchakarma purification procedures. Administered with doctor-prescribed herbal purgatives to eliminate vitiated Pitta dosha and cleanse the liver, gallbladder, and small intestine.",
    benefits: [
      "Flushes accumulated Pitta toxins from liver and GI tract",
      "Clears chronic skin disorders, acne, and pigmentation",
      "Regulates digestive metabolism and acidity",
      "Purifies blood and restores hormonal harmony"
    ],
    doshaFocus: "Pitta Elimination",
    recommendedFor: "Liver sluggishness, chronic hyperacidity, dermatitis, psoriasis"
  },
  {
    id: "ayur-07",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Snehapanam",
    subtitle: "Therapeutic Medicated Ghee Internal Oleation",
    duration: "15 min",
    priceMUR: 250,
    priceUSD: 6,
    badge: "Panchakarma Prep",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Snehapanam.webp",
    description: "The oral intake of increasing doses of medicated herbal ghee (Ghritam) on an empty stomach under strict Vaidya supervision. Mobilizes deep cellular toxins to the gut for elimination in Panchakarma.",
    benefits: [
      "Prepares deep tissues for systemic Panchakarma detox",
      "Lubricates internal organs and cellular membranes",
      "Enhances digestion (Agni) and vital tissue nutrition",
      "Calms severe neurological and psychosomatic disorders"
    ],
    doshaFocus: "Deep Tissue Oleation",
    recommendedFor: "Panchakarma pre-treatment, severe dry skin, neurological disorders"
  },
  {
    id: "ayur-08",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Thalapothichil",
    subtitle: "Cooling Medicated Herbal Paste Crown Mask (Shirolepa)",
    duration: "30 min",
    priceMUR: 1020,
    priceUSD: 23,
    badge: "Mental Calming",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Thala Pothichil.webp",
    description: "A traditional Kerala Ayurvedic therapy where the head is covered with a thick medicinal paste made of Amla, Brahmi, and herbs processed in medicated buttermilk, covered with banana leaves.",
    benefits: [
      "Profoundly calms mental tension, anxiety, and hypertension",
      "Relieves chronic insomnia, migraines, and severe headaches",
      "Cools excess Pitta heat in the head and scalp",
      "Strengthens hair roots and controls premature graying"
    ],
    doshaFocus: "Pitta & Vata Pacifying",
    recommendedFor: "Hypertension, chronic insomnia, migraine, psychiatric burnout"
  },
  {
    id: "ayur-09",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Thakradhara (Head & Body)",
    subtitle: "Continuous Medicated Buttermilk Flow Therapy",
    duration: "90 min",
    priceMUR: 2700,
    priceUSD: 60,
    badge: "Deep Cooling",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Thakradhara - Head and Body.webp",
    description: "A soothing, cooling stream of specially fermented buttermilk medicated with Musta and Amla rhythmically poured over the third eye forehead chakra and across the entire body.",
    benefits: [
      "Highly effective for stress-induced skin conditions like psoriasis",
      "Induces deep neurological relaxation and resolves insomnia",
      "Reduces high blood pressure and mental irritability",
      "Restores internal thermal balance and relieves hot flashes"
    ],
    doshaFocus: "Pitta Pacifying",
    recommendedFor: "Psoriasis, eczema, hypertension, severe stress, hair loss"
  },
  {
    id: "ayur-10",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Thalam",
    subtitle: "Medicinal Herbal Crown Application for Scalp & Brain",
    duration: "30 min",
    priceMUR: 900,
    priceUSD: 20,
    badge: "Neurological Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Thalam.webp",
    description: "A focused therapeutic application where specialized herbal pastes and medicated oils are retained on the vertex (Bregma) of the skull, held in place by a medicinal herbal binding.",
    benefits: [
      "Nourishes the cranial nerves and brain tissues",
      "Relieves chronic rhinitis, sinus congestion, and headaches",
      "Improves memory, focus, and emotional stabilization",
      "Helps in ENT and neurological disorders"
    ],
    doshaFocus: "Vata & Pitta Balance",
    recommendedFor: "ENT conditions, chronic headaches, sinus issues, mental fatigue"
  },
  {
    id: "ayur-11",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Nethra Sekam",
    subtitle: "Medicated Decoction Eye Cleansing & Stream",
    duration: "15 min",
    priceMUR: 480,
    priceUSD: 11,
    badge: "Ophthalmic Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Nethra Sekam.webp",
    description: "A continuous, gentle pouring of lukewarm medicated herbal extracts (such as Triphala Kwatha) over closed and open eyelids to purify ocular channels and relieve inflammation.",
    benefits: [
      "Instantly relieves burning sensations, redness, and itching in eyes",
      "Flushes out environmental allergens and pollutants",
      "Soothes digital screen strain and dry eye symptoms",
      "Improves optical clarity and relaxes eye muscles"
    ],
    doshaFocus: "Pitta & Kapha Cleansing",
    recommendedFor: "Dry eye syndrome, conjunctivitis, digital eye strain, allergies"
  },
  {
    id: "ayur-12",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Netra Tharpanam",
    subtitle: "Medicated Ghee Reservoir Rejuvenation for Eyes",
    duration: "30 min",
    priceMUR: 9600,
    priceUSD: 213,
    badge: "Intensive Eye Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Nethra Tharpanam.webp",
    description: "The gold standard of Ayurvedic eye care. A circular dough dam of black gram is formed around the eyes and filled with pure medicated Triphala Ghrita ghee, bathing the cornea and optical nerves.",
    benefits: [
      "Deeply rejuvenates optical nerves and strengthens vision",
      "Prevents degenerative eye conditions, refractive errors, and dry eyes",
      "Relieves heavy strain from prolonged computer screen exposure",
      "Clears dark circles and strengthens peri-orbital muscles"
    ],
    doshaFocus: "Pitta & Vata Restoration",
    recommendedFor: "Myopia, computer vision syndrome, optic nerve fatigue, dry eyes"
  },
  {
    id: "ayur-13",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Kabalam",
    subtitle: "Therapeutic Medicated Herbal Fluid Mouth Gargle",
    duration: "15 min",
    priceMUR: 360,
    priceUSD: 8,
    badge: "Oral & Throat Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Kabalam.webp",
    description: "A specialized clinical oral retention and swishing procedure using medicated decoctions, oils, and herbal extracts to detoxify oral cavity, strengthen gums, and heal throat irritation.",
    benefits: [
      "Strengthens gums, prevents gingivitis and tooth sensitivity",
      "Relieves recurrent throat infections, hoarseness, and ulcers",
      "Eliminates bad breath (Halitosis) and harmful oral microbes",
      "Enhances taste perception and salivary enzyme function"
    ],
    doshaFocus: "Kapha & Pitta Oral Balance",
    recommendedFor: "Gum bleeding, mouth ulcers, sore throat, dental sensitivity"
  },
  {
    id: "ayur-14",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Karnapooranam",
    subtitle: "Medicated Herbal Ear Oil Pooling & Instillation",
    duration: "15 min",
    priceMUR: 600,
    priceUSD: 13,
    badge: "ENT Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Karnapooranam.webp",
    description: "Gentle filling of the ear canal with warm medicated herbal oil followed by localized steam and acupressure massage around the mastoid and jaw area.",
    benefits: [
      "Relieves tinnitus (ringing in the ears) and ear congestion",
      "Prevents hearing loss and soothes stiffness in jaw / neck",
      "Dislodges impacted earwax safely and naturally",
      "Calms aggravated Vata in the cranial region"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Tinnitus, TMJ pain, earache, cervical stiffness, vertigo"
  },
  {
    id: "ayur-15",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Padabhyangam",
    subtitle: "Targeted Ayurvedic Foot & Reflex Point Massage",
    duration: "15 min",
    priceMUR: 360,
    priceUSD: 8,
    badge: "Reflexology Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Padabhyangam.webp",
    description: "A focused foot massage using warm medicated oils and Kansa bronze bowl on key marma points that connect to all major organs and nervous channels.",
    benefits: [
      "Draws excess body heat and stress downward",
      "Induces rapid mental relaxation and improves sleep",
      "Relieves plantar fasciitis, heel pain, and cramps",
      "Softens rough soles and cracked heels"
    ],
    doshaFocus: "Vata & Pitta Grounding",
    recommendedFor: "Insomnia, tired feet, diabetic neuropathy discomfort, stress"
  },
  {
    id: "ayur-16",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Siroabhyangam - Head, Shoulder & Back",
    subtitle: "Therapeutic Scalp, Cervical & Upper Back Massage",
    duration: "30 min",
    priceMUR: 960,
    priceUSD: 21,
    badge: "Stress Release",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Siroabhyangam.webp",
    description: "Warm Ayurvedic oils infused with Brahmi and Bhringraj applied to head, neck, and upper spine with rhythmic Marma point stimulation to dissolve physical and mental stress.",
    benefits: [
      "Instantly relieves tension headaches and neck stiffness",
      "Nourishes hair roots and boosts scalp micro-circulation",
      "Alleviates desk-work upper back tension",
      "Enhances mental alertness and calmness"
    ],
    doshaFocus: "Vata & Pitta Soothing",
    recommendedFor: "Desk workers, tension headaches, cervical strain, mental burnout"
  },
  {
    id: "ayur-17",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Bashpa Sweda (Herbal Steam Bath)",
    subtitle: "Full Body Medicated Herbal Steam Fomentation",
    duration: "15 min",
    priceMUR: 420,
    priceUSD: 9,
    badge: "Steam Detox",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Bashpa Sweda.webp",
    description: "A session inside an Ayurvedic herbal steam chamber where boiling medicinal plant leaves release therapeutic vapors that dilate pores and liquefy deep bodily toxins.",
    benefits: [
      "Assists in rapid toxin release through perspiration",
      "Relieves joint stiffness and muscle soreness",
      "Improves cutaneous circulation and glows skin",
      "Complements all Panchakarma and oil therapies"
    ],
    doshaFocus: "Kapha & Vata Elimination",
    recommendedFor: "Post-massage detox, stiffness, fluid retention, body ache"
  },
  {
    id: "ayur-18",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Pichu",
    subtitle: "Medicated Oil Cotton Pad Application on Vertex / Joint",
    duration: "30 min",
    priceMUR: 780,
    priceUSD: 17,
    badge: "Targeted Relief",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Pichu.webp",
    description: "A thick sterile cotton pad soaked in warm medicated herbal oil is placed continuously on the head crown, spine, or affected joint, replenished continuously with warm oil.",
    benefits: [
      "Highly effective for localized nerve inflammation and pain",
      "Relieves chronic insomnia, memory loss, and neurological agitation",
      "Soothes severe degenerative joint pain and neck spasm",
      "Deeply calms hyperactive cranial Vata dosha"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Cervical pain, knee joint stiffness, insomnia, anxiety"
  },
  {
    id: "ayur-19",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Upanaham",
    subtitle: "Warm Herbal Medicated Paste Bandage / Poultice",
    duration: "30 min",
    priceMUR: 1020,
    priceUSD: 23,
    badge: "Joint & Tendon Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Upanaham.webp",
    description: "Application of a warm medicinal paste of herbs, oils, and rock salt to the inflamed joint, wrapped with herbal medicinal leaves (e.g. Calotropis / Castor) and cotton bandages to generate therapeutic heat.",
    benefits: [
      "Provides dramatic relief in chronic joint swelling and effusion",
      "Relieves osteoarthritis, gouty arthritis, and ligament sprains",
      "Promotes deep absorption of anti-inflammatory herbs",
      "Increases joint mobility and range of motion"
    ],
    doshaFocus: "Vata-Kapha Joint Disorders",
    recommendedFor: "Osteoarthritis, tennis elbow, chronic knee swelling, sprains"
  },
  {
    id: "ayur-20",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Lepanam",
    subtitle: "Therapeutic Topical Herbal Paste Application",
    duration: "30 min",
    priceMUR: 1020,
    priceUSD: 23,
    badge: "Skin & Joint Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Lepanam.webp",
    description: "Application of a specialized blend of fresh herbal paste applied over the affected area, left until almost dry to draw out localized toxins, reduce inflammation, or heal skin disorders.",
    benefits: [
      "Rapidly subsides localized burning sensation and pain",
      "Heals skin infections, rashes, and inflammatory patches",
      "Reduces localized edema and bruising",
      "Customized based on acute vs. chronic condition"
    ],
    doshaFocus: "Pitta & Kapha Topical Care",
    recommendedFor: "Inflammatory arthritis, skin rashes, sports injuries, eczema"
  },
  {
    id: "ayur-21",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Specialized Therapy - Therapy on Affected Area",
    subtitle: "Customized Localized Marma & Herbal Protocol",
    duration: "30 min",
    priceMUR: 720,
    priceUSD: 16,
    badge: "Targeted Clinical",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Specialized Therapy on Affected Area.webp",
    description: "A focused, doctor-prescribed customized therapy specifically addressing a focal pain point, injured muscle group, or post-surgical recovery area using tailored herbal modalities.",
    benefits: [
      "Tailored specifically to your precise clinical diagnosis",
      "Addresses acute muscle spasms, nerve impingement, or joint locks",
      "Accelerates localized tissue regeneration",
      "Integrates Marma activation and specialized oils"
    ],
    doshaFocus: "Personalized Dosha Target",
    recommendedFor: "Focal pain, athletic injuries, specific joint restrictions"
  },
  {
    id: "ayur-22",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Kashaya Basthi",
    subtitle: "Classical Medicated Herbal Decoction Enema Therapy",
    duration: "60 min",
    priceMUR: 2400,
    priceUSD: 53,
    badge: "Panchakarma Master",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Kashaya Basthi.webp",
    description: "Regarded as the master Panchakarma therapy for all Vata disorders. An intricately formulated emulsion of herbal decoctions, honey, rock salt, paste, and oil administered rectally to cleanse colon and entire body.",
    benefits: [
      "Eradicates systemic Vata disorders from its primary seat (colon)",
      "Provides profound relief in severe backache, sciatica, and arthritis",
      "Resolves chronic constipation, flatulence, and IBS symptoms",
      "Recharges vitality, longevity, and metabolic equilibrium"
    ],
    doshaFocus: "Vata Root Elimination",
    recommendedFor: "Chronic arthritis, sciatica, neurological conditions, constipation"
  },
  {
    id: "ayur-23",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Greeva Vasti",
    subtitle: "Warm Medicated Oil Reservoir for Cervical Neck & Spine",
    duration: "30 min",
    priceMUR: 960,
    priceUSD: 21,
    badge: "Cervical & Neck Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Greeva Vasthi.webp",
    description: "A dam made of herbal dough placed at the back of the neck over cervical vertebrae, filled with warm medicated herbal oil to deeply nourish discs, nerves, and neck muscles.",
    benefits: [
      "Substantially relieves cervical spondylosis and neck stiffness",
      "Eliminates radiating pain, tingling, and numbness in arms/hands",
      "Strengthens cervical spine ligaments and musculature",
      "Relieves stress-induced tension in upper shoulders"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Cervical spondylosis, neck pain, radiating arm numbness, tech neck"
  },
  {
    id: "ayur-24",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Dhoomapanam",
    subtitle: "Medicated Herbal Smoke Inhalation for Respiratory Tract",
    duration: "15 min",
    priceMUR: 360,
    priceUSD: 8,
    badge: "Respiratory Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Dhoomapanam.webp",
    description: "Inhalation of therapeutic smoke prepared from burning medicinal herbal sticks through nostrils/mouth and exhaled through mouth to cleanse the cranial sinuses and respiratory tract.",
    benefits: [
      "Clears heavy phlegm, sinus congestion, and nasal blockages",
      "Relieves chronic rhinitis, cough, and heavy-headedness",
      "Strengthens vocal cords and freshens breath",
      "Acts as natural antimicrobial defense for lungs"
    ],
    doshaFocus: "Kapha Elimination",
    recommendedFor: "Sinusitis, chronic cold, heavy head, respiratory allergies"
  },
  {
    id: "ayur-25",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Sneha Basti",
    subtitle: "Medicated Herbal Oil Enema (Anuvasana Basti)",
    duration: "15 min",
    priceMUR: 480,
    priceUSD: 11,
    badge: "Panchakarma",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Sneha Basthi.webp",
    description: "Administration of a small volume of warm medicated herbal oil into the colon to nourish internal organs, lubricate bones/joints, and pacify chronic Vata imbalances.",
    benefits: [
      "Lubricates internal tissues, spine, and joints from within",
      "Eliminates chronic dry colon and supports regular bowel habits",
      "Strengthens reproductive system and lower back",
      "Enhances physical strength, complexion, and stamina"
    ],
    doshaFocus: "Vata Pacifying & Nourishing",
    recommendedFor: "Lower back pain, dryness, constipation, arthritis, emaciation"
  },
  {
    id: "ayur-26",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Siro Vasthi",
    subtitle: "Capped Medicated Herbal Oil Pooling on Scalp",
    duration: "45 min",
    priceMUR: 900,
    priceUSD: 20,
    badge: "Neurological Vitality",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Siro Vasthi.webp",
    description: "A tall leather cap is fitted securely around the patient's head and filled with warm medicated herbal oil, retained for a prescribed duration to treat severe neurological conditions.",
    benefits: [
      "Premier therapy for facial palsy, trigeminal neuralgia, and stroke recovery",
      "Alleviates severe insomnia, chronic migraines, and vertigo",
      "Recharges brain cells and stabilizes cranial nervous pathways",
      "Prevents hair loss and premature graying"
    ],
    doshaFocus: "Vata-Pitta Cranial Recovery",
    recommendedFor: "Facial paralysis, severe migraines, vertigo, neurological disorders"
  },
  {
    id: "ayur-27",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Udwarthanam",
    subtitle: "Deep Lymphatic Dry Herbal Powder Scrub Massage",
    duration: "60 min",
    priceMUR: 2400,
    priceUSD: 53,
    badge: "Metabolic & Slimming",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Udwarthanam.webp",
    description: "An invigorating therapeutic upward massage using warm dry herbal powders and minerals that creates friction, breaks down subcutaneous fat, stimulates metabolism, and tones skin.",
    benefits: [
      "Assists in healthy weight loss and breaks down cellulite",
      "Stimulates sluggish lymphatic drainage and peripheral circulation",
      "Improves skin tone, reduces lethargy and body heaviness",
      "Exfoliates dead skin cells leaving skin velvety soft"
    ],
    doshaFocus: "Kapha Reduction",
    recommendedFor: "Weight management, cellulite, sluggish metabolism, obesity"
  },
  {
    id: "ayur-28",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Nasyam",
    subtitle: "Nasal Medication & Cranial Clearance (Panchakarma)",
    duration: "30 min",
    priceMUR: 960,
    priceUSD: 21,
    badge: "Panchakarma Ocular/ENT",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Nasyam.webp",
    description: "Facial steam and acupressure followed by precise instillation of medicated herbal drops (Anu Thailam) into the nostrils. The nose is considered the doorway to the brain (Shiras).",
    benefits: [
      "Clears blocked sinuses, prevents recurrent migraines and rhinitis",
      "Improves memory, mental clarity, and optical acuity",
      "Relieves cervical spondylosis and frozen shoulder tension",
      "Rejuvenates facial micro-circulation and skin glow"
    ],
    doshaFocus: "Kapha & Vata Cranial Detox",
    recommendedFor: "Sinusitis, migraine, cervical spondylosis, nasal allergies, hair loss"
  },
  {
    id: "ayur-29",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Nadee Sweda",
    subtitle: "Targeted Tubular Herbal Steam Jet Application",
    duration: "15 min",
    priceMUR: 480,
    priceUSD: 11,
    badge: "Targeted Steam Jet",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Nadee Sweda.webp",
    description: "Application of a localized stream of medicated herbal vapor through a specialized tube directed precisely onto stiff joints, spine, or affected muscle groups.",
    benefits: [
      "Instantly relieves severe focal joint stiffness and muscle knots",
      "Enhances localized blood flow without overheating entire body",
      "Prepares localized areas for manipulation or traction",
      "Reduces sharp localized pain in spine and knees"
    ],
    doshaFocus: "Vata-Kapha Focal Relief",
    recommendedFor: "Localized backache, stiff neck, knee joint stiffness, muscle spasms"
  },
  {
    id: "ayur-30",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Pinda Swedanam",
    subtitle: "Warm Medicated Bolus Fomentation Massage",
    duration: "30 min",
    priceMUR: 600,
    priceUSD: 13,
    badge: "Pain & Mobility",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Pinda Swedanam.webp",
    description: "Application of warm cloth boluses packed with medicinal herbs and processed in herbal decoctions systematically massaged over the body to induce therapeutic perspiration.",
    benefits: [
      "Relieves muscular tension, cramps, and chronic body aches",
      "Improves range of motion in stiff joints and spine",
      "Expels localized metabolic toxins and relieves heaviness",
      "Nourishes subcutaneous tissues"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Body pain, muscular cramps, joint stiffness, physical fatigue"
  },
  {
    id: "ayur-31",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Shirodhara (Without oil)",
    subtitle: "Decoction / Medicated Herbal Water Stream to Forehead",
    duration: "60 min",
    priceMUR: 1080,
    priceUSD: 24,
    badge: "Stress & Cooling",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Shirodhara Without Oil.webp",
    description: "A continuous flow of cooling herbal decoctions (Kashayam) poured rhythmically across the forehead to calm heated Pitta dosha and quiet an overactive mind.",
    benefits: [
      "Soothes intense mental fatigue, anger, and anxiety",
      "Improves sleep onset and quality naturally",
      "Alleviates tension headaches and heat sensations",
      "Ideal for those who prefer non-oily scalp therapies"
    ],
    doshaFocus: "Pitta Pacifying",
    recommendedFor: "Mental burnout, hot flashes, irritability, non-oil preference"
  },
  {
    id: "ayur-32",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Ksheeradhara (Head Only)",
    subtitle: "Medicated Herbal Milk Continuous Stream on Forehead",
    duration: "60 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Cooling & Sleep",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Ksheeradhara - Head Only.webp",
    description: "A continuous stream of warm or cool medicated milk infused with herbs like Bala, Chandana, and Usheera poured rhythmically over the forehead to deeply nourish cranial nerves.",
    benefits: [
      "Supreme therapy for severe insomnia and mental anxiety",
      "Cooling for Pitta-induced headaches, burning scalp, and hair fall",
      "Strengthens sensory organs and balances emotional stress",
      "Deeply relaxing with a soothing cooling sensation"
    ],
    doshaFocus: "Pitta & Vata Soothing",
    recommendedFor: "Chronic insomnia, severe stress, burning scalp sensation, hair thinning"
  },
  {
    id: "ayur-33",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Shirodhara With Oil",
    subtitle: "Classical Medicated Warm Oil Continuous Stream",
    duration: "60 min",
    priceMUR: 2520,
    priceUSD: 56,
    badge: "Signature Rejuvenation",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Sirodhara With Oil.webp",
    description: "The premier classical Ayurvedic therapy. A continuous, steady stream of warm herbalized medicated oil poured gently over the third eye center to recalibrate the central nervous system.",
    benefits: [
      "Relieves deep mental anxiety, chronic stress, and depressive mood",
      "Restores restorative deep sleep cycles and heals insomnia",
      "Improves concentration, intuition, and memory recall",
      "Balances pituitary and pineal endocrine glands"
    ],
    doshaFocus: "Vata & Pitta Balance",
    recommendedFor: "Chronic anxiety, insomnia, hypertension, migraine, mental burnout"
  },
  {
    id: "ayur-34",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Pizhichil (Snehadhara) without oil",
    subtitle: "Therapeutic Medicated Stream Body Infusion",
    duration: "45 min",
    priceMUR: 1080,
    priceUSD: 24,
    badge: "Royal Body Stream",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Pizhichil or Snehadhara Without Oil.webp",
    description: "A continuous cascade of warm medicated herbal decoctions poured systematically across the entire body accompanied by gentle synchronous massage.",
    benefits: [
      "Detoxifies the skin and stimulates cellular regeneration",
      "Improves peripheral circulation and relieves muscular stiffness",
      "Strengthens immunity and calms nervous restlessness",
      "Provides deep relaxation without residual heavy oiliness"
    ],
    doshaFocus: "Tridoshic Rejuvenation",
    recommendedFor: "Musculoskeletal stiffness, fatigue, non-oil preference, vitality boost"
  },
  {
    id: "ayur-35",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Dhanyamla Dhara",
    subtitle: "Fermented Medicinal Cereal Decoction Stream",
    duration: "60 min",
    priceMUR: 1900,
    priceUSD: 42,
    badge: "Anti-Inflammatory",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Dhanyamla Dhara.webp",
    description: "A warm, continuous stream of specially fermented cereal and medicinal plant liquid (Dhanyamla) poured over the body to break down inflammation and toxins.",
    benefits: [
      "Remarkable anti-inflammatory therapy for rheumatoid arthritis and gout",
      "Reduces severe joint swelling, tenderness, and morning stiffness",
      "Enhances metabolic rate and aids in breaking down fat tissue",
      "Alleviates hemiplegia and neurological paralysis symptoms"
    ],
    doshaFocus: "Vata-Kapha & Ama Neutralization",
    recommendedFor: "Rheumatoid arthritis, gout, hemiplegia, localized swelling, obesity"
  },
  {
    id: "ayur-36",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Vasthi on Affected area",
    subtitle: "Localized Medicated Oil Retention Reservoir",
    duration: "45 min",
    priceMUR: 900,
    priceUSD: 20,
    badge: "Targeted Reservoir",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Vasthi on Affected Area.webp",
    description: "A dough reservoir formed over any specifically affected joint, muscle group, or spinal level, filled with warm medicated herbal oil and maintained at optimal temperature.",
    benefits: [
      "Provides intense localized lubrication and deep tissue healing",
      "Relieves nerve compression, chronic pain, and spasms",
      "Accelerates recovery from ligament strain or sports injury",
      "Customized oil formulation based on doctor diagnosis"
    ],
    doshaFocus: "Localized Vata Relief",
    recommendedFor: "Localized pain, shoulder stiffness, thoracic spine, joint injuries"
  },
  {
    id: "ayur-37",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Kati Vasti",
    subtitle: "Warm Medicated Oil Reservoir for Lower Spine & Lumbar",
    duration: "30 min",
    priceMUR: 900,
    priceUSD: 20,
    badge: "Spine & Sciatica",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Kati Vasti.webp",
    description: "A classical spinal therapy where a ring of black gram dough is positioned over the lumbosacral region and filled with warm medicated herbal oil (Sahacharadi / Mahanarayana).",
    benefits: [
      "Substantially relieves acute & chronic lower back pain and stiffness",
      "Relieves sciatica nerve pain, numbness, and disc compression",
      "Strengthens lumbar spine bones, ligaments, and nerves",
      "Enhances spinal flexibility for desk workers and athletes"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Lower back pain, sciatica, lumbar spondylosis, disc bulge, stiffness"
  },
  {
    id: "ayur-38",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Janu Vasti",
    subtitle: "Medicated Herbal Oil Reservoir for Knee Joints",
    duration: "30 min",
    priceMUR: 900,
    priceUSD: 20,
    badge: "Knee & Joint Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Janu Vasti.webp",
    description: "A therapeutic reservoir of herbal dough formed around one or both knee joints, bathed in warm medicated herbal oils to regenerate synovial fluid and rebuild cartilage.",
    benefits: [
      "Profoundly relieves osteoarthritis of knee joints and crepitus (cracking)",
      "Nourishes synovial fluid and strengthens patellar ligaments",
      "Restores pain-free walking, stair climbing, and knee bending",
      "Reduces joint inflammation and swelling"
    ],
    doshaFocus: "Vata & Shleshaka Kapha Balance",
    recommendedFor: "Knee osteoarthritis, knee stiffness, ligament weakness, sports strain"
  },
  {
    id: "ayur-39",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam + Podikizhi Treatment (Without Oil)",
    subtitle: "Full Body Massage Combined with Herbal Powder Poultice",
    duration: "60 min",
    priceMUR: 1440,
    priceUSD: 32,
    badge: "Stiffness Relief",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam + Podikizhi Treatment  - Without Oil.webp",
    description: "A dual therapeutic session featuring full body Abhyangam followed by Podikizhi fomentation using warm herbal powders bundled in cloth to dissolve deep-seated tension.",
    benefits: [
      "Effectively melts stubborn muscular knots and stiffness",
      "Stimulates circulation and enhances metabolic vitality",
      "Relieves neck, shoulder, and spinal fatigue",
      "Leaves the body feeling remarkably limber and light"
    ],
    doshaFocus: "Vata-Kapha Pacifying",
    recommendedFor: "Muscular aches, frozen stiffness, posture fatigue, body heaviness"
  },
  {
    id: "ayur-40",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Ela Kizhi (Herbal Leaf Poultice)",
    subtitle: "Warm Fresh Medicinal Leaves & Root Bolus Massage",
    duration: "45 min",
    priceMUR: 1560,
    priceUSD: 35,
    badge: "Joint Mobility",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Ela Kizhi.webp",
    description: "Warm cloth poultices packed with freshly harvested medicinal leaves (Eranda, Nirgundi, Arka) and herbal powders dipped in medicated oils and systematically applied to the body.",
    benefits: [
      "Relieves severe back pain, arthritis, and sciatica",
      "Reduces inflammation and chronic muscle cramps",
      "Enhances joint flexibility, mobility, and strength",
      "Promotes deep cellular detoxification through perspiration"
    ],
    doshaFocus: "Vata & Kapha Alleviation",
    recommendedFor: "Arthritis, sports injuries, lower back pain, sciatica, muscle spasms"
  },
  {
    id: "ayur-41",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Vamanam (Panchakarma)",
    subtitle: "Therapeutic Emesis for Kapha & Respiratory Toxins",
    duration: "90 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Panchakarma Detox",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Vamanam - Panchakarma.webp",
    description: "A classical Panchakarma procedure performed after thorough preparatory internal oleation (Snehana) and steam (Swedana) to eliminate excess Kapha toxins from the upper digestive and respiratory tracts.",
    benefits: [
      "Root-level cure for chronic asthma, bronchitis, and allergies",
      "Clears persistent skin diseases like psoriasis and chronic eczema",
      "Optimizes metabolic rate and aids in weight normalization",
      "Eliminates heaviness, sluggishness, and sinus congestion"
    ],
    doshaFocus: "Kapha Root Elimination",
    recommendedFor: "Chronic asthma, respiratory allergies, psoriasis, obesity"
  },
  {
    id: "ayur-42",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Podikizhi (Herbal Powder Poultice)",
    subtitle: "Warm Medicinal Herbal Powder Bolus Fomentation",
    duration: "45 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Muscular Relief",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Podi Kizhi.webp",
    description: "Finely powdered medicinal herbs like Kolakulathadi, Devadaru, and Vacha bundled in cotton cloths, heated in medicated oil, and pressed rhythmically over affected areas.",
    benefits: [
      "Relieves chronic pain, numbness, and joint stiffness",
      "Improves blood circulation and breaks down fatty accumulations",
      "Relieves acute spasms and sciatic nerve compression",
      "Imparts strength and tone to muscles"
    ],
    doshaFocus: "Vata & Kapha Pacifying",
    recommendedFor: "Sciatica, paralysis rehabilitation, backache, muscular spasms"
  },
  {
    id: "ayur-43",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Ekanga Dhara",
    subtitle: "Localized Continuous Stream on Specific Limb/Joint",
    duration: "30 min",
    priceMUR: 840,
    priceUSD: 19,
    badge: "Targeted Dhara",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Ekanga Dhara.webp",
    description: "A continuous warm stream of medicated herbal oils or decoctions directed specifically onto a single affected joint, limb, or localized region to accelerate healing.",
    benefits: [
      "Focused recovery for single joint or ligament injuries",
      "Relieves localized spasms, stiffness, and inflammation",
      "Improves localized range of motion and tissue strength",
      "Fast, effective targeted therapy"
    ],
    doshaFocus: "Targeted Vata Pacifying",
    recommendedFor: "Single joint injury, frozen shoulder, tennis elbow, ankle sprain"
  },
  {
    id: "ayur-44",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Thakra Dhara (Full Body)",
    subtitle: "Medicated Herbal Buttermilk Cascade on Entire Body",
    duration: "60 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Full Body Cooling",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Thakradhara - Head and Body.webp",
    description: "A continuous flow of medicated buttermilk infused with Musta and Amla rhythmically poured over the entire body by trained therapists.",
    benefits: [
      "Profound cooling and anti-inflammatory action for full body",
      "Heals widespread skin irritation, psoriasis, and eczema",
      "Calms hyper-irritability, hypertension, and emotional stress",
      "Deeply refreshes and cools internal body heat"
    ],
    doshaFocus: "Pitta Pacifying",
    recommendedFor: "Psoriasis, chronic skin dermatitis, internal heat, stress"
  },
  {
    id: "ayur-45",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Kashaya Dhara",
    subtitle: "Continuous Medicated Herbal Decoction Stream",
    duration: "45 min",
    priceMUR: 1440,
    priceUSD: 32,
    badge: "Skin & Detox",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Kashaya Dhara.webp",
    description: "A continuous rhythmic pouring of warm medicated herbal decoctions over the entire body, customized with specific botanical formulas based on clinical diagnosis.",
    benefits: [
      "Purifies skin layers and eliminates deep toxic residues",
      "Relieves generalized body pain, itching, and inflammation",
      "Enhances peripheral micro-circulation and lymphatic drainage",
      "Non-greasy, refreshing therapeutic experience"
    ],
    doshaFocus: "Tridoshic Cleansing",
    recommendedFor: "Dermatological conditions, full body stiffness, general detox"
  },
  {
    id: "ayur-46",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Ksheera Dhara (Full Body)",
    subtitle: "Therapeutic Herbal Milk Full Body Cascade",
    duration: "60 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Deep Hydration",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Ksheera Dhara Full Body.webp",
    description: "A luxurious cascade of warm cow's milk infused with precious healing herbs like Bala, Ashwagandha, and Sandalwood poured systematically across the entire body.",
    benefits: [
      "Intensely nourishes and repairs dry, dehydrated, or sun-damaged skin",
      "Soothes intense body heat, rashes, and inflammatory sensations",
      "Strengthens deep bodily tissues (Dhatus) and immunity",
      "Deeply calming for nerves and body aches"
    ],
    doshaFocus: "Pitta & Vata Soothing",
    recommendedFor: "Severe dry skin, eczema, psoriasis, hot flashes, nervous exhaustion"
  },
  {
    id: "ayur-47",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Thakra Dhara (Head Only)",
    subtitle: "Medicated Buttermilk Stream on Ajna / Forehead",
    duration: "60 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Insomnia & Scalp",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Thakradhara - Head Only.webp",
    description: "Medicated herbal buttermilk poured gently in an oscillating stream over the forehead. Uniquely cooling and soothing for cranial nerves and scalp.",
    benefits: [
      "Relieves chronic insomnia, stress, and tension headaches",
      "Calms active scalp psoriasis, dandruff, and burning sensation",
      "Reduces high mental anxiety and stabilizes moods",
      "Strengthens hair roots and stops excessive hair fall"
    ],
    doshaFocus: "Pitta Pacifying",
    recommendedFor: "Insomnia, scalp psoriasis, migraines, hair fall, mental fatigue"
  },
  {
    id: "ayur-48",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Mamsa Kizhi",
    subtitle: "Nourishing Meat & Herb Bolus Fomentation for Wasting",
    duration: "45 min",
    priceMUR: 2160,
    priceUSD: 48,
    badge: "Tissue Strengthening",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Mamsa Kizhi.webp",
    description: "A highly specialized classical Ayurvedic therapy where processed medicinal meat extract, herbs, and oils are bundled in poultices and applied to severely wasted muscles.",
    benefits: [
      "Premier therapy for muscle wasting, muscular dystrophy, and paralysis",
      "Rebuilds depleted muscle tissue and restores physical strength",
      "Nourishes nervous system and improves motor functionality",
      "Deeply replenishes vital bodily Ojas"
    ],
    doshaFocus: "Severe Vata Depletion",
    recommendedFor: "Muscular dystrophy, post-stroke paralysis, severe muscle wasting"
  },
  {
    id: "ayur-49",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Njavara Kizhi (Herbal Rice Poultice)",
    subtitle: "Shashtika Shali Rice Cooked in Milk & Bala Decoction",
    duration: "45 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Rejuvenation",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Navara Kizhi.webp",
    description: "A celebrated Ayurvedic rejuvenation ritual using boluses of special 60-day red rice (Shashtika Shali) cooked in medicinal root decoctions and milk, massaged rhythmically.",
    benefits: [
      "Strengthens nerves, muscles, and lubricates all body joints",
      "Improves skin luster, tone, and cellular regeneration",
      "Relieves emaciation, joint stiffness, and chronic weakness",
      "Imparts supreme anti-aging longevity benefits"
    ],
    doshaFocus: "Vata & Pitta Rejuvenation",
    recommendedFor: "Muscle weakness, joint degeneration, chronic fatigue, anti-aging"
  },
  {
    id: "ayur-50",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Mukhakanti Facial",
    subtitle: "Classical Ayurvedic Radiant Herbal Face Treatment",
    duration: "60 min",
    priceMUR: 1560,
    priceUSD: 35,
    badge: "Herbal Glow",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Mukhakanti.webp",
    description: "A classical facial protocol featuring herbal steam, Marma point face and neck massage with Kumkumadi saffron oil, finished with a fresh bespoke herbal lepana mask.",
    benefits: [
      "Firms facial muscles, improves elasticity, and de-puffs eyes",
      "Clears blemishes, hyperpigmentation, and imparts natural glow",
      "Stimulates lymphatic drainage of facial energy centers",
      "Protects against premature aging and environmental pollution"
    ],
    doshaFocus: "Tridoshic Complexion Care",
    recommendedFor: "Dull complexion, fine lines, dark spots, daily rejuvenation"
  },
  {
    id: "ayur-51",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Manal Kizhi",
    subtitle: "Heated Purified Sand Bolus Fomentation for Swelling",
    duration: "60 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Edema & Sprains",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Manal Kizhi.webp",
    description: "A dry heat fomentation therapy (Ruksha Sweda) where purified, medicated sea/river sand is heated in a dry pan, bundled in cloth, and applied to swollen, water-logged joints.",
    benefits: [
      "Rapidly absorbs excess localized edema and joint fluid retention",
      "Alleviates severe rheumatoid arthritis and acute joint swelling",
      "Provides dry thermal relief for Kapha-aggravated pain",
      "Restores mobility to stiff, water-congested joints"
    ],
    doshaFocus: "Kapha & Ama Reduction",
    recommendedFor: "Rheumatoid arthritis swelling, edema, acute sprains, joint effusions"
  },
  {
    id: "ayur-52",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Netra Sekam (Eye Wash)",
    subtitle: "Triphala Decoction Gentle Eye Irrigation & Refreshment",
    duration: "20 min",
    priceMUR: 600,
    priceUSD: 13,
    badge: "Eye Health",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Nethra Sekam.webp",
    description: "A soothing ophthalmic cleansing ritual using sterilized fresh Triphala and Rose floral infusions to flush ocular pathways and relieve irritation.",
    benefits: [
      "Flushes out dust, pollutants, and toxic debris from eyes",
      "Soothes intense burning sensation from screens and sunlight",
      "Refreshes tired optic nerves and improves vision clarity",
      "Safe, gentle, and deeply refreshing"
    ],
    doshaFocus: "Pitta Cleansing",
    recommendedFor: "Computer vision syndrome, tired eyes, allergies, environmental irritation"
  },
  {
    id: "ayur-53",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Sthanika Abhyangam",
    subtitle: "Localized Targeted Ayurvedic Herbal Oil Massage",
    duration: "30 min",
    priceMUR: 840,
    priceUSD: 19,
    badge: "Area Focus",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Sthanika Abhyangam.webp",
    description: "A focused massage directed specifically at a single anatomical region (such as lower back, neck, shoulder, or calf) using warm medicated oils.",
    benefits: [
      "Concentrated therapy for specific muscular aches and tightness",
      "Stimulates local blood flow and accelerates tissue recovery",
      "Relieves postural strain in high-tension areas",
      "Ideal for targeted relief in compact session time"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Targeted muscle knots, neck strain, calf cramps, focal back pain"
  },
  {
    id: "ayur-54",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Sthanika Abhyangam + Podikizhi",
    subtitle: "Localized Massage with Warm Herbal Powder Bolus",
    duration: "30 min",
    priceMUR: 960,
    priceUSD: 21,
    badge: "Targeted Relief",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Sthanika Abhyangam + Podikizhi.webp",
    description: "Combines targeted localized massage with warm herbal powder bolus fomentation for enhanced penetration and faster relief from acute localized pain.",
    benefits: [
      "Rapidly breaks down localized tension and inflammation",
      "Relieves sciatic nerve pain, frozen shoulder, or lumbar stiffness",
      "Combines massage strokes with dry thermal bolus benefits",
      "Restores free movement to restricted joints"
    ],
    doshaFocus: "Vata-Kapha Pacifying",
    recommendedFor: "Frozen shoulder, acute stiff neck, localized back pain, knee stiffness"
  },
  {
    id: "ayur-55",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Agnikarma (Cautery) - 30 min",
    subtitle: "Thermal Micro-Cautery for Severe Joint & Tendon Pain",
    duration: "30 min",
    priceMUR: 900,
    priceUSD: 20,
    badge: "Specialized Clinical",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Agnikarma Cautery.webp",
    description: "A highly specialized classical Ayurvedic para-surgical procedure using a heated Shalaka (metallic probe) applied precisely to specific tender points to relieve intractable pain instantly.",
    benefits: [
      "Provides instant, dramatic pain relief in chronic conditions",
      "Extremely effective for heel spurs, calcaneal spur, and plantar fasciitis",
      "Relieves tennis elbow, trigger finger, and severe sciatica",
      "Non-invasive, fast-acting clinical procedure performed by Vaidya"
    ],
    doshaFocus: "Severe Vata-Kapha Pain",
    recommendedFor: "Calcaneal spur, plantar fasciitis, tennis elbow, chronic tendonitis"
  },
  {
    id: "ayur-56",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Agnikarma (Cautery) - 60 min",
    subtitle: "Extensive Ayurvedic Thermal Micro-Cautery Procedure",
    duration: "60 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Specialized Clinical",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Niragni Agnikarma.webp",
    description: "An extensive Agnikarma session addressing multiple joint sites or chronic tendon networks under doctor supervision for profound musculoskeletal pain elimination.",
    benefits: [
      "Comprehensive treatment for multiple severe pain points",
      "Prevents recurrence of chronic joint lock and tendon inflammation",
      "Stimulates deep tissue micro-healing and collagen alignment",
      "Performed strictly following classical surgical guidelines"
    ],
    doshaFocus: "Intractable Pain Neutralization",
    recommendedFor: "Multi-joint pain, severe lumbar spondylosis, bilateral heel spurs"
  },
  {
    id: "ayur-57",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Synchronized Massage (4 Hands) - 45 min",
    subtitle: "Dual-Therapist Synchronous Medicated Oil Flow",
    duration: "45 min",
    priceMUR: 2160,
    priceUSD: 48,
    badge: "4-Hand Harmony",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Synchronized Massage - 4 Hands.webp",
    description: "Two experienced therapists work in perfect, mirror-image synchronicity across your body, delivering seamless rhythmic strokes with warm medicated herbal oil.",
    benefits: [
      "Synchronous bilateral stimulation balances both brain hemispheres",
      "Delivers double the therapeutic coverage and deep relaxation",
      "Improves blood circulation and relieves systemic fatigue rapidly",
      "Induces a meditative state of total sensory tranquility"
    ],
    doshaFocus: "Tridoshic Equilibrium",
    recommendedFor: "High stress, nervous exhaustion, royal pampering, deep relaxation"
  },
  {
    id: "ayur-58",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Synchronized Massage (4 Hands) - 60 min",
    subtitle: "Dual-Therapist Full Body Rhythmic Herbal Oil Therapy",
    duration: "60 min",
    priceMUR: 2400,
    priceUSD: 53,
    badge: "4-Hand Harmony",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Synchronized Massage - 4 Hands.webp",
    description: "A full 60-minute 4-hand massage choreography. Two therapists simultaneously glide across energy meridians with tailored warm herbal oils.",
    benefits: [
      "Deeply relaxes every major muscle group simultaneously",
      "Improves lymphatic drainage and accelerates toxin release",
      "Relieves chronic postural strain and mental tension",
      "Leaves you feeling profoundly grounded and renewed"
    ],
    doshaFocus: "Tridoshic Harmony",
    recommendedFor: "Corporate burnout, full body stiffness, deep restorative therapy"
  },
  {
    id: "ayur-59",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Synchronized Massage (4 Hands) - 90 min",
    subtitle: "Comprehensive 4-Hand Master Synchronized Ritual",
    duration: "90 min",
    priceMUR: 2760,
    priceUSD: 61,
    badge: "Ultimate Royal",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Synchronized Massage - 4 Hands.webp",
    description: "The ultimate royal Ayurvedic massage indulgence. 90 minutes of uninterrupted, perfectly synchronized four-hand strokes covering head, spine, limbs, and Marma centers.",
    benefits: [
      "The pinnacle of classical Ayurvedic body rejuvenation",
      "Unblocks all 72,000 Nadis (energy channels)",
      "Eradicates deep physical exhaustion and chronic stress",
      "Profoundly nourishes skin, muscles, and vital Ojas"
    ],
    doshaFocus: "Complete Tridoshic Vitality",
    recommendedFor: "Ultimate rejuvenation, chronic exhaustion, royal luxury experience"
  },
  {
    id: "ayur-60",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Akshi Tarpanam",
    subtitle: "Classical Medicated Ghee Eye Bath for Vision & Fatigue",
    duration: "30 min",
    priceMUR: 960,
    priceUSD: 21,
    badge: "Ophthalmic Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Akshi Tarpanam.webp",
    description: "Purified herbal ghee (Triphala Ghrita) retained in a dough dam over the eyes, allowing the medicinal properties to permeate deep into the ocular tissues and optic nerves.",
    benefits: [
      "Nourishes optic nerves and clarifies visual perception",
      "Relieves dry eye syndrome, burning sensation, and eye strain",
      "Improves ocular lubrication and strengthens eye muscles",
      "Clears peri-orbital dark circles"
    ],
    doshaFocus: "Pitta & Alochaka Pitta Balance",
    recommendedFor: "Dry eye syndrome, screen fatigue, poor vision, burning eyes"
  },
  {
    id: "ayur-61",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Vaysthapana For 55+",
    subtitle: "Geriatric Rejuvenation & Vitality Protocol for Seniors",
    duration: "90 min",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Senior Vitality",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Vayasthapana.webp",
    description: "A specialized geriatric therapy designed to nourish aging tissues (Rasayanas), lubricate degenerative joints, boost immunity, and support cognitive vitality in adults 55 and above.",
    benefits: [
      "Strengthens fragile bones, degenerative joints, and muscles",
      "Improves mobility, balance, and reduces age-related stiffness",
      "Calms aggravated Vata dosha associated with advanced age",
      "Enhances memory, sleep quality, and general vigor"
    ],
    doshaFocus: "Geriatric Vata Pacifying",
    recommendedFor: "Seniors 55+, degenerative joint pain, memory support, age vitality"
  },
  {
    id: "ayur-62",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam, Podikizhi, Kati Vasti (Without Oil)",
    subtitle: "Triple Action Spinal & Lumbar Relief Combination",
    duration: "90 min",
    priceMUR: 2160,
    priceUSD: 48,
    badge: "Spine Protocol",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi - Kati Vasti - Without Oil.webp",
    description: "An intensive triple-therapy session combining full body Abhyangam, herbal powder bolus fomentation (Podikizhi), and localized medicated oil reservoir (Kati Vasti) over lower spine.",
    benefits: [
      "Comprehensive, all-in-one therapy for severe lower back pain",
      "Decompresses pinched sciatica nerves and strengthens lumbar discs",
      "Melts muscular spasms across entire back and legs",
      "Restores fluid spine mobility and effortless posture"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Severe lower back pain, lumbar disc herniation, sciatica, stiffness"
  },
  {
    id: "ayur-63",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam, Podikizhi & Sneha Basti (Without Oil)",
    subtitle: "Integrated Musculoskeletal & Internal Vata Cleansing",
    duration: "90 min",
    priceMUR: 2160,
    priceUSD: 48,
    badge: "Deep Balance",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi - Sneha Basti - Without Oil.webp",
    description: "A synergistic combination of external body therapies (Abhyangam & Podikizhi) with internal Panchakarma oleation enema (Sneha Basti) for complete Vata pacification.",
    benefits: [
      "Addresses Vata imbalances both externally and internally",
      "Relieves systemic musculoskeletal stiffness and colon dryness",
      "Promotes deep systemic cellular detoxification",
      "Restores balanced energy, digestion, and restful sleep"
    ],
    doshaFocus: "Comprehensive Vata Detox",
    recommendedFor: "Chronic joint disorders, systemic stiffness, constipation, fatigue"
  },
  {
    id: "ayur-64",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam, Podikizhi & Bhashpa Sweda (Without Oil)",
    subtitle: "Massage, Herbal Bolus & Medicated Steam Combo",
    duration: "90 min",
    priceMUR: 2160,
    priceUSD: 48,
    badge: "Comprehensive Detox",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi and Bashpa Sweda - Without Oil.webp",
    description: "A complete 3-stage detoxification ritual: rhythmic body massage, warm herbal powder poultice therapy, followed by full body herbal steam box fomentation.",
    benefits: [
      "Maximum release of stored bodily toxins and metabolic waste",
      "Relieves body heaviness, water retention, and joint ache",
      "Opens blocked micro-channels and improves skin radiance",
      "Leaves you feeling deeply energized, light, and refreshed"
    ],
    doshaFocus: "Vata-Kapha Cleansing",
    recommendedFor: "Full body stiffness, water retention, metabolic sluggishness, detox"
  },
  {
    id: "ayur-65",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam, Podikizhi, Janu Vasti (Without Oil)",
    subtitle: "Targeted Knee Joint Regeneration & Full Body Relief",
    duration: "90 min",
    priceMUR: 2160,
    priceUSD: 48,
    badge: "Knee Protocol",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi - Janu Basti - Without Oil.webp",
    description: "An intensive therapy combining full body massage, herbal bolus fomentation, and a dedicated medicated oil reservoir (Janu Vasti) over both knee joints.",
    benefits: [
      "Deep relief for chronic knee osteoarthritis and cartilage wear",
      "Re-lubricates knee joint capsule and reduces cracking sounds",
      "Relieves leg cramps, calf tightness, and hip stiffness",
      "Significantly improves pain-free walking and mobility"
    ],
    doshaFocus: "Vata & Shleshaka Kapha",
    recommendedFor: "Knee osteoarthritis, ligament strain, knee stiffness, difficulty walking"
  },
  {
    id: "ayur-66",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam & Shirodhara (Without Oil)",
    subtitle: "2-Hour Body Balance & Deep Mind De-stress Ritual",
    duration: "120 min",
    priceMUR: 2400,
    priceUSD: 53,
    badge: "Mind & Body Rest",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam and Shirodhara - Without Oil.webp",
    description: "A 2-hour dual master therapy pairing comprehensive full body Abhyangam with continuous forehead herbal decoction Shirodhara for complete mind-body renewal.",
    benefits: [
      "Dissolves both deep physical muscular tension and mental static",
      "Induces rapid mental calmness and cures chronic insomnia",
      "Improves blood circulation and restores vital energy channels",
      "Non-greasy finish ideal for busy schedules"
    ],
    doshaFocus: "Tridoshic Mind-Body Reset",
    recommendedFor: "Executive burnout, chronic insomnia, severe stress, body tension"
  },
  {
    id: "ayur-67",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Podikizhi & Lepam",
    subtitle: "Fomentation Followed by Medicated Herbal Paste Wrap",
    duration: "60 min",
    priceMUR: 2040,
    priceUSD: 45,
    badge: "Inflammation Relief",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Podi Kizhi and Lepam.webp",
    description: "An intensive dual anti-inflammatory therapy combining warm medicinal herbal powder poultice fomentation followed by topical application of a customized herbal paste.",
    benefits: [
      "Quickly draws out localized heat, swelling, and acute pain",
      "Heals tendinitis, sprains, and inflammatory joint flare-ups",
      "Promotes deep tissue healing and cellular repair",
      "Restores normal joint function without harsh chemicals"
    ],
    doshaFocus: "Pitta & Kapha Inflammation",
    recommendedFor: "Acute joint inflammation, sports injuries, tendinitis, localized swelling"
  },
  {
    id: "ayur-68",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam, Podikizhi, Kati Vasti & Greeva Vasti (Without Oil)",
    subtitle: "Complete Spinal Axis Therapy (Neck to Lower Spine)",
    duration: "90 min",
    priceMUR: 2400,
    priceUSD: 53,
    badge: "Total Spine Care",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi - Kati Vasti and Greeva Vasthi - Without Oil.webp",
    description: "The supreme Ayurvedic spinal care protocol. Combines full body Abhyangam, Podikizhi, and simultaneous medicated oil reservoirs on both cervical neck (Greeva) and lumbar spine (Kati).",
    benefits: [
      "Complete restorative care for the entire vertebral spinal column",
      "Relieves cervical spondylosis, neck pain, lumbar pain, and sciatica",
      "Decompresses spinal discs and strengthens surrounding nerve roots",
      "Restores posture, flexibility, and eliminates radiating nerve pain"
    ],
    doshaFocus: "Vata Pacifying Spine Master",
    recommendedFor: "Whole spine stiffness, chronic neck and back pain, multi-level disc issues"
  },
  {
    id: "ayur-69",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    name: "Abhyangam + Shirodhara with Oil",
    subtitle: "Warm Medicated Oil Body Massage & Continuous Shirodhara",
    duration: "90 min",
    priceMUR: 3600,
    priceUSD: 80,
    badge: "Supreme Rejuvenation",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Abhyangam + Shirodhara with Oil.webp",
    description: "The royal signature Ayurvedic combination. Full body warm dosha-specific herbal oil Abhyangam followed by continuous streaming of warm medicated oil on the third eye chakra.",
    benefits: [
      "The definitive classical Ayurvedic mind and body rejuvenation experience",
      "Eliminates chronic anxiety, insomnia, hypertension, and fatigue",
      "Deeply nourishes skin, hair, joints, and nervous system",
      "Leaves you in a profound state of blissful stillness and bliss"
    ],
    doshaFocus: "Tridoshic Master Rejuvenation",
    recommendedFor: "Deep mental burnout, insomnia, chronic fatigue, royal wellness seekers"
  },

  // =========================================================================
  // 2. WELLNESS
  // =========================================================================
  {
    "id": "well-01",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Navajeevan",
    "subtitle": "Restorative Renewal & Vital Energy Awakening",
    "duration": "90 Minutes",
    "priceMUR": 2700,
    "priceUSD": 60,
    "badge": "Vital Energy Awakening",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Navajeevan.webp",
    "description": "Restorative renewal therapy formulated to awaken vital energy (Prana), ease chronic fatigue, and balance the three Doshas through synchronized bodywork.",
    "benefits": [
      "Prana-Awakening Abhyanga",
      "Herbal Pouch Stimulation",
      "Marma Energy Balancing",
      "Herbal Compress"
    ],
    "doshaFocus": "Tridoshic Balance",
    "recommendedFor": "Chronic fatigue, low energy, burnout, vitality restoration"
  },
  {
    "id": "well-02",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Ayurvedic Body Scrub Local",
    "subtitle": "Exfoliating Botanical Udvarthanam & Lymphatic Glow",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Exfoliation & Glow",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Ayurvedic Body Scrub Local.webp",
    "description": "Exfoliating full-body ritual using freshly blended local herbs, grains, and botanical oils (Udvarthanam) to refine skin texture and stimulate lymphatic drainage.",
    "benefits": [
      "Botanical Herbal Scrub",
      "Whole-Body Exfoliation",
      "Lymphatic Stimulation",
      "Nourishing Herbal Wash"
    ],
    "doshaFocus": "Kapha & Pitta Balancing",
    "recommendedFor": "Dull skin, sluggish circulation, dead cell buildup, skin texture refinement"
  },
  {
    "id": "well-03",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Avikizhi",
    "subtitle": "Classical Thermal Medicated Herbal Bolus Fomentation",
    "duration": "45 Minutes",
    "priceMUR": 1440,
    "priceUSD": 32,
    "badge": "Joint & Muscle Relief",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Avikizhi.webp",
    "description": "Classical thermal therapy using heated cloth boluses packed with medicated herbal powders, applied systematically to relieve localized swelling and pain.",
    "benefits": [
      "Medicated Herbal Bolus",
      "Therapeutic Heat",
      "Joint & Muscle Soothing",
      "Anti-Inflammatory Action"
    ],
    "doshaFocus": "Vata & Kapha Pacifying",
    "recommendedFor": "Joint pain, stiffness, localized swelling, muscular soreness"
  },
  {
    "id": "well-04",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Shirodhara with Oil",
    "subtitle": "Iconic Continuous Streaming Oil Meditative Therapy",
    "duration": "45 Minutes",
    "priceMUR": 2160,
    "priceUSD": 48,
    "badge": "Deep Meditative Calm",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Shirodhara with Oil.webp",
    "description": "Iconic Ayurvedic therapy where a steady, rhythmic stream of warm medicated oil is gently poured across the forehead, inducing deep meditative stillness.",
    "benefits": [
      "Warm Medicated Oil Stream",
      "Shiro Head Acupressure",
      "Ajna Chakra Activation",
      "Profound Nervous Calm"
    ],
    "doshaFocus": "Vata & Pitta Pacifying",
    "recommendedFor": "Stress, mental fatigue, insomnia, headaches, nervous tension"
  },
  {
    "id": "well-05",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Pranayama & Meditation Guidance",
    "subtitle": "One-on-One Breathwork & Mindful Stress Reduction",
    "duration": "45 Minutes",
    "priceMUR": 960,
    "priceUSD": 21,
    "badge": "Mind-Body Alignment",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Pranayama & Meditation Guidance.webp",
    "description": "Guided one-on-one session on Ayurvedic breathing techniques (Pranayama) and mindful meditation to calm the mind, expand lung capacity, and reduce stress.",
    "benefits": [
      "Personalized Breathwork",
      "Mindfulness Meditation",
      "Nadi Shodhana & Bhramari",
      "Stress Reduction Tools"
    ],
    "doshaFocus": "Pranic Vitality & Mental Peace",
    "recommendedFor": "Anxiety, shallow breathing, mental restlessness, high stress lifestyles"
  },
  {
    "id": "well-06",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Sthanika Naranga Kizhi",
    "subtitle": "Targeted Fresh Citrus & Herb Fomentation",
    "duration": "30 Minutes",
    "priceMUR": 960,
    "priceUSD": 21,
    "badge": "Acute Stiffness Relief",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Sthanika Naranga Kizhi.webp",
    "description": "Targeted local fomentation using freshly sliced medicinal lemons, garlic, and herbal powders fried in herbal oil to rapidly relieve acute joint stiffness.",
    "benefits": [
      "Fresh Citrus & Herb Bolus",
      "Targeted Hot Fomentation",
      "Acute Stiffness Relief",
      "Localized Joint Care"
    ],
    "doshaFocus": "Vata Pacifying",
    "recommendedFor": "Acute joint stiffness, localized pain, frozen shoulder, sprains"
  },
  {
    "id": "well-07",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Sthanika Podikizhi",
    "subtitle": "Localized Dry Thermal Herbal Powder Therapy",
    "duration": "30 Minutes",
    "priceMUR": 960,
    "priceUSD": 21,
    "badge": "Instant Pain Relief",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Sthanika Podikizhi.webp",
    "description": "Localized dry thermal therapy using warm herbal powder bundles to treat localized back, neck, or knee pain, reducing inflammation and stiffness.",
    "benefits": [
      "Warm Herbal Powder Pouch",
      "Dry Heat Therapy",
      "Knee / Back / Neck Focus",
      "Instant Pain Relief"
    ],
    "doshaFocus": "Vata & Kapha Relief",
    "recommendedFor": "Localized back pain, neck stiffness, knee inflammation, muscle spasms"
  },
  {
    "id": "well-08",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Aishwarya",
    "subtitle": "Regal Full-Body Abhyanga & Opulent Royal Facial",
    "duration": "90 Minutes",
    "priceMUR": 2700,
    "priceUSD": 60,
    "badge": "Royal Luxury Pampering",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Aishwarya.webp",
    "description": "Regal Ayurvedic pampering ritual combining a full-body nourishing Abhyanga massage with an opulent royal botanical facial for complete radiance.",
    "benefits": [
      "Royal Abhyanga Massage",
      "Opulent Botanical Facial",
      "Marma Activation",
      "Glow & Tranquility"
    ],
    "doshaFocus": "Tridoshic Royal Radiance",
    "recommendedFor": "Complete pampering, total body relaxation, radiant facial glow, luxury wellness"
  },
  {
    "id": "well-09",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Steam (Herbal Swedana)",
    "subtitle": "Traditional Medicated Steam Chamber Therapy",
    "duration": "15 Minutes",
    "priceMUR": 360,
    "priceUSD": 8,
    "badge": "Pore Detox & Cleanse",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Steam - Herbal Swedana.webp",
    "description": "Traditional Ayurvedic medicated herbal steam chamber therapy that dilates bodily channels, opens pores, and expels deep-seated metabolic toxins.",
    "benefits": [
      "Medicated Steam Chamber",
      "Pore Cleansing & Detox",
      "Channel Opening",
      "Lightness & Vitality"
    ],
    "doshaFocus": "Kapha & Vata Detox",
    "recommendedFor": "Toxin elimination, sluggish metabolism, bodily stiffness, fluid retention"
  },
  {
    "id": "well-10",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Divya Dhara (Antistress Therapy)",
    "subtitle": "Invigorating Herbal Bodywork & Forehead Decoction Stream",
    "duration": "90 Minutes",
    "priceMUR": 2700,
    "priceUSD": 60,
    "badge": "Stress & Anxiety Relief",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Divya Dhara - Antistress Therapy.webp",
    "description": "Heavenly therapeutic ritual combining an invigorating whole-body herbal massage with continuous warm herbal decoction stream along the forehead.",
    "benefits": [
      "Divya Abhyangam",
      "Warm Dhara Pouring",
      "Chakra Balancing",
      "Mental Tranquillity"
    ],
    "doshaFocus": "Vata Pacifying",
    "recommendedFor": "Executive burnout, anxiety, racing thoughts, deep emotional stress"
  },
  {
    "id": "well-11",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Abhyangam + Kizhi",
    "subtitle": "Rhythmic Body Massage & Warm Herbal Bundle Fomentation",
    "duration": "90 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Joint & Back Care",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Abhyangam + Kizhi.webp",
    "description": "Powerful restorative duo combining rhythmic full-body Abhyangam followed by warm herbal bundle (Kizhi) fomentation to relieve deep joint and back discomfort.",
    "benefits": [
      "Full Abhyangam Massage",
      "Medicated Herbal Kizhi",
      "Thermal Joint Care",
      "Inflammation Relief"
    ],
    "doshaFocus": "Vata & Kapha Soothing",
    "recommendedFor": "Lower back pain, shoulder stiffness, joint aches, body fatigue"
  },
  {
    "id": "well-12",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Manicure Paraffin",
    "subtitle": "Thermal Paraffin Hand Therapy & Organic Nail Grooming",
    "duration": "45 Minutes",
    "priceMUR": 960,
    "priceUSD": 21,
    "badge": "Hand Moisture & Care",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Manicure Paraffin.webp",
    "description": "Deeply moisturizing thermal hand therapy with organic nail grooming, gentle scrub, and a warm paraffin wax wrap to soften dry skin and soothe joints.",
    "benefits": [
      "Organic Hand Scrub",
      "Nail & Cuticle Care",
      "Warm Paraffin Wrap",
      "Hydrating Hand Massage"
    ],
    "doshaFocus": "Vata Nourishing",
    "recommendedFor": "Dry hands, brittle nails, hand stiffness, deep skin hydration"
  },
  {
    "id": "well-13",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Deep Tissue Massage and Facial",
    "subtitle": "Muscle-Releasing Bodywork & Revitalizing Botanical Facial",
    "duration": "90 Minutes",
    "priceMUR": 2700,
    "priceUSD": 60,
    "badge": "Complete Body & Face Revival",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Deep Tissue Massage and Facial.webp",
    "description": "Balanced dual treatment combining intensive muscle-releasing deep tissue therapy with a revitalizing Ayurvedic botanical facial for glowing complexion.",
    "benefits": [
      "Deep Tissue Bodywork",
      "Herbal Facial Cleansing",
      "Acupressure Marma Facial",
      "Hydrating Mask & Steam"
    ],
    "doshaFocus": "Tridoshic Restoration",
    "recommendedFor": "Athletes, intense muscular tension, dull facial skin, total relaxation"
  },
  {
    "id": "well-14",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Padamruta",
    "subtitle": "Hip-to-Toe Herbal Oil Massage & Botanical Pouch Therapy",
    "duration": "45 Minutes",
    "priceMUR": 1200,
    "priceUSD": 27,
    "badge": "Leg & Foot Revitalization",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Padamruta.webp",
    "description": "Focused lower-body therapy featuring a soothing hip-to-toe herbal oil massage and warm botanical pouch treatment to relieve tired legs and feet.",
    "benefits": [
      "Hip-to-Toe Massage",
      "Warm Botanical Pouch",
      "Sole Reflexology",
      "Leg Fatigue Relief"
    ],
    "doshaFocus": "Vata & Pitta Cooling",
    "recommendedFor": "Restless legs, standing fatigue, calf soreness, poor circulation in legs"
  },
  {
    "id": "well-15",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Sanjeevani",
    "subtitle": "Abhyangam, Hot Herbal Kizhi & Soothing Ksheeradhara Triad",
    "duration": "90 Minutes",
    "priceMUR": 2700,
    "priceUSD": 60,
    "badge": "Ultimate Triad Renewal",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Sanjeevani.webp",
    "description": "Ultimate revitalizing triad combining warm Abhyangam massage, hot herbal pouch fermentation (Kizhi), and soothing medicated milk streaming (Ksheeradhara).",
    "benefits": [
      "Full-Body Abhyanga",
      "Hot Herbal Kizhi",
      "Ksheeradhara Milk Stream",
      "Tissue Regeneration"
    ],
    "doshaFocus": "Tridoshic Master Rejuvenation",
    "recommendedFor": "Complete physical & mental rejuvenation, nerve renewal, deep fatigue"
  },
  {
    "id": "well-16",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Manasamitram (Abhyanga + Dhara)",
    "subtitle": "Nourishing Body Massage & Herb-Infused Milk Dhara",
    "duration": "90 Minutes",
    "priceMUR": 2700,
    "priceUSD": 60,
    "badge": "Deep Sleep & Mental Calm",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Manasamitram - Abhyanga + Dhara.webp",
    "description": "Deeply calming therapy combining warm medicated oil body massage with a continuous gentle stream of herb-infused warm milk over the third eye.",
    "benefits": [
      "Warm Oil Abhyangam",
      "Ksheeradhara Stream",
      "Cooling Head Therapy",
      "Deep Sleep Induction"
    ],
    "doshaFocus": "Pitta & Vata Soothing",
    "recommendedFor": "Insomnia, hypertension, anxiety, mental exhaustion, high stress"
  },
  {
    "id": "well-17",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Ayur Soukya (Complete Package)",
    "subtitle": "Master 4-in-1 Ayurvedic Wellness Journey",
    "duration": "120 Minutes",
    "priceMUR": 3600,
    "priceUSD": 80,
    "badge": "Master 4-in-1 Journey",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Ayur Soukya - Complete Package.webp",
    "description": "Master Ayurvedic wellness package featuring 4 powerful modalities: Abhyangam body massage, warm herbal Kizhi, soothing Dhara, and detoxifying steam bath.",
    "benefits": [
      "Abhyangam Massage",
      "Herbal Kizhi Fermentation",
      "Soothing Dhara Stream",
      "Medicated Herbal Steam"
    ],
    "doshaFocus": "Tridoshic Supreme Reset",
    "recommendedFor": "Total wellness immersion, deep tissue cleansing, supreme detoxification"
  },
  {
    "id": "well-18",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Manasanthi (Anti Stress Therapy)",
    "subtitle": "Shiro Abhyangam & Medicated Herbal Milk Pour",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Tranquil Mind Reset",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Manasanthi - Anti Stress Therapy.webp",
    "description": "Tranquil mental rejuvenation therapy combining restorative Shiro Abhyangam head massage with gentle Ksheeradhara medicated herbal milk streaming.",
    "benefits": [
      "Herbal Head Massage",
      "Ksheeradhara Milk Pour",
      "Mental Decompression",
      "Sensory Calming"
    ],
    "doshaFocus": "Pitta & Vata Calming",
    "recommendedFor": "Headaches, sensory overload, mental tension, eye strain, restlessness"
  },
  {
    "id": "well-19",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Punarjeeva (Sensory Rejuvenation)",
    "subtitle": "2-Hour Synchronized Abhyangam, Kizhi & Herbal Facial",
    "duration": "120 Minutes",
    "priceMUR": 3600,
    "priceUSD": 80,
    "badge": "2-Hour Sensory Revival",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Punarjeeva (Sensory Rejuvenation).webp",
    "description": "Complete two-hour sensory revival package incorporating synchronized Abhyangam, warm Kizhi compresses, and revitalizing herbal facial care for whole-body vitality.",
    "benefits": [
      "2-Hour Complete Journey",
      "Abhyangam Massage",
      "Warm Herbal Kizhi",
      "Rejuvenating Facial Care"
    ],
    "doshaFocus": "Tridoshic Vitality",
    "recommendedFor": "Exhaustion, loss of luster, full body revitalisation, sensory reset"
  },
  {
    "id": "well-20",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Mukhakanti (Ayurvedic Facial)",
    "subtitle": "Radiance Facial, Marma Massage & Glow-Enhancing Lepam",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Radiant Skin Glow",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Mukhakanti - Ayurvedic Facial.webp",
    "description": "Radiance-boosting facial therapy featuring gentle herbal cleansing, steam, Marma acupressure facial massage, and botanical glow-enhancing Lepam.",
    "benefits": [
      "Herbal Cleanse & Exfoliation",
      "Facial Marma Massage",
      "Custom Lepam Mask",
      "Floral Rose Mist"
    ],
    "doshaFocus": "Pitta Cooling & Glow",
    "recommendedFor": "Dull complexion, sun exposure, facial tension, delicate skin nourishment"
  },
  {
    "id": "well-21",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Swedish Massage",
    "subtitle": "Classic European Wellness Effleurage & Muscle Kneading",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Classic Relaxation",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Swedish Massage.webp",
    "description": "Classic European wellness massage using long flowing effleurage, gentle kneading, and rhythmic friction to enhance circulation and release muscular stress.",
    "benefits": [
      "Flowing Effleurage",
      "Gentle Muscle Kneading",
      "Circulation Boost",
      "Physical Relaxation"
    ],
    "doshaFocus": "Stress & Fatigue Relief",
    "recommendedFor": "General stress, everyday muscular tightness, circulation enhancement"
  },
  {
    "id": "well-22",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Ayurvedic Nirvana - Stress Buster",
    "subtitle": "Abhyanga, Shirodhara & Warm Compresses Synergy",
    "duration": "90 Minutes",
    "priceMUR": 2700,
    "priceUSD": 60,
    "badge": "Ultimate Stress Buster",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Ayurvedic Nirvana - Stress Buster.webp",
    "description": "Blissful multi-therapy session pairing full-body Abhyanga with Shirodhara and warm herbal compresses to dissolve accumulated nervous exhaustion.",
    "benefits": [
      "Full-Body Abhyanga",
      "Shirodhara Stream",
      "Warm Herbal Compress",
      "Nervous System Reset"
    ],
    "doshaFocus": "Vata & Pitta Calming",
    "recommendedFor": "Chronic stress, nervous fatigue, mental overwhelm, burnout"
  },
  {
    "id": "well-23",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Bamboo Massage",
    "subtitle": "Warm Organic Bamboo Deep-Tissue Fascial Release",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Deep Muscle Release",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Bamboo Massage.webp",
    "description": "Innovative deep-tissue technique using warm, smooth organic bamboo stalks to roll and knead tight muscle groups, relieving stubborn stiffness.",
    "benefits": [
      "Warm Bamboo Rollers",
      "Connective Tissue Kneading",
      "Fascial Release",
      "Blood Flow Enhancement"
    ],
    "doshaFocus": "Kapha & Vata Pacifying",
    "recommendedFor": "Deep muscular knots, sports recovery, leg and back stiffness"
  },
  {
    "id": "well-24",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Abhyangam Wellness Massage",
    "subtitle": "Synchronized Full-Body Rhythmic Warm Oil Bodywork",
    "duration": "45 Minutes",
    "priceMUR": 1440,
    "priceUSD": 32,
    "badge": "Express Abhyangam",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Abhyangam Wellness Massage.webp",
    "description": "Traditional full-body synchronized rhythmic massage with warm medicated oils to improve circulation, relieve muscle fatigue, and promote profound relaxation.",
    "benefits": [
      "Warm Oil Abhyangam",
      "Rhythmic Muscle Strokes",
      "Tension Relief",
      "Herbal Hot Towel Wipe"
    ],
    "doshaFocus": "Vata Pacifying",
    "recommendedFor": "Quick body recharge, circulation stimulation, muscular fatigue"
  },
  {
    "id": "well-25",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Rujahari (Pain Relieving Massage)",
    "subtitle": "Specialized Deep Pressure & Pain-Relieving Herbal Oils",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Chronic Pain Relief",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Rujahari - Pain Relieving Massage.webp",
    "description": "Specialized therapeutic massage utilizing pain-relieving herbal oils and targeted pressure techniques to ease chronic joint aches and muscular stiffness.",
    "benefits": [
      "Pain-Relieving Herbal Oils",
      "Deep Tissue Manipulation",
      "Joint Flexibility Work",
      "Therapeutic Warmth"
    ],
    "doshaFocus": "Vata Pain Relief",
    "recommendedFor": "Joint aches, chronic back discomfort, stiff neck, shoulder tightness"
  },
  {
    "id": "well-26",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Ayur Relax (Abhyangam + Steam)",
    "subtitle": "Classical Abhyanga Followed by Aromatic Herbal Steam",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Relaxation & Steam Detox",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Ayur Relax - Abhyangam + Steam.webp",
    "description": "A harmonious combination of classical Abhyanga body massage followed by an aromatic herbal steam bath to eliminate toxins and ease bodily tension.",
    "benefits": [
      "Full-Body Abhyangam",
      "Herbal Steam Bath (Swedana)",
      "Toxin Detoxification",
      "Vital Energy Balance"
    ],
    "doshaFocus": "Vata & Kapha Harmonizing",
    "recommendedFor": "Post-travel stiffness, body heaviness, deep relaxation, detoxification"
  },
  {
    "id": "well-27",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Deep Tissue Massage",
    "subtitle": "Targeted Deep Pressure & Myofascial Knot Release",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Trigger Point Therapy",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Deep Tissue Massage.webp",
    "description": "Intense therapeutic massage focusing on deeper layers of muscle and connective tissue to release chronic knotting, adhesions, and postural tension.",
    "benefits": [
      "Targeted Deep Pressure",
      "Trigger Point Release",
      "Myofascial Relaxation",
      "Circulation Boosting"
    ],
    "doshaFocus": "Postural Tension Relief",
    "recommendedFor": "Desk workers, athletes, chronic neck & upper back tightness"
  },
  {
    "id": "well-28",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Head, Neck, Shoulder & Foot Reflexology",
    "subtitle": "Comprehensive Upper Body & Vital Foot Pressure Points",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Upper Body & Foot Care",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Head - Neck - Shoulder & Foot Reflexology.webp",
    "description": "Comprehensive upper body and reflexology treatment targeting stress-holding zones in the scalp, neck, shoulders, and vital pressure points in the feet.",
    "benefits": [
      "Shiro Scalp Massage",
      "Neck & Shoulder Release",
      "Acupressure Foot Reflexology",
      "Herbal Soothing Oils"
    ],
    "doshaFocus": "Vata & Pitta Stress Soothing",
    "recommendedFor": "Desk fatigue, computer strain, headache prevention, tired feet"
  },
  {
    "id": "well-29",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Manasamithra (Antistress Therapy)",
    "subtitle": "Nurturing Body Oil Therapy & Continuous Forehead Stream",
    "duration": "90 Minutes",
    "priceMUR": 2700,
    "priceUSD": 60,
    "badge": "Burnout Recovery",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Manasamithra - Antistress Therapy.webp",
    "description": "Calming ritual designed to alleviate mental burnout, featuring nurturing whole-body oil therapy combined with soothing continuous forehead herbal oil stream.",
    "benefits": [
      "Anti-Stress Abhyangam",
      "Shirodhara Stream",
      "Marma Calming Points",
      "Herbal Scalp Soothe"
    ],
    "doshaFocus": "Vata & Pitta Pacifying",
    "recommendedFor": "Mental burnout, emotional stress, insomnia, chronic exhaustion"
  },
  {
    "id": "well-30",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Reflexology Massage",
    "subtitle": "Ancient Foot Sole Acupressure & Energetic Balancing",
    "duration": "45 Minutes",
    "priceMUR": 1440,
    "priceUSD": 32,
    "badge": "Acupressure Reflexology",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Reflexology Massage.webp",
    "description": "Ancient reflex zone therapy applying precise thumb and finger pressure to reflex points on the soles to restore full-body energetic equilibrium.",
    "benefits": [
      "Herbal Foot Cleansing",
      "Sole Reflex Point Therapy",
      "Calf Pressure Release",
      "Relaxing Botanical Balm"
    ],
    "doshaFocus": "Tridoshic Harmony",
    "recommendedFor": "Foot fatigue, systemic balance, internal organ stimulation, relaxation"
  },
  {
    "id": "well-31",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Aroma Therapy",
    "subtitle": "Pure Botanical Essential Oils & Gentle Lymphatic Strokes",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Aromatherapy Bliss",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Aroma Therapy.webp",
    "description": "Gentle, rhythmic wellness massage infused with therapeutic pure essential oils to harmonize mood, relieve anxiety, and deeply hydrate the skin.",
    "benefits": [
      "Botanical Essential Oils",
      "Gentle Lymphatic Strokes",
      "Aromatherapy Inhalation",
      "Complete Mind-Body Calm"
    ],
    "doshaFocus": "Emotional Equilibrium",
    "recommendedFor": "Mood balance, gentle relaxation, sensitive skin, aromatherapy enthusiasts"
  },
  {
    "id": "well-32",
    "categoryId": "wellness",
    "categoryName": "Wellness",
    "name": "Stone Massage",
    "subtitle": "Warm Basalt Thermotherapy & Deep Muscular De-Stressing",
    "duration": "60 Minutes",
    "priceMUR": 1800,
    "priceUSD": 40,
    "badge": "Basalt Thermotherapy",
    "requiresDoctorConsultation": false,
    "image": "assets/images/Wellness/Stone Massage.webp",
    "description": "Luxurious thermotherapy using smooth heated basalt stones placed on key energy centers to melt stubborn muscular tightness and induce deep relaxation.",
    "benefits": [
      "Heated Basalt Stones",
      "Thermal Energy Balancing",
      "Warm Oil Sliding Strokes",
      "Deep Muscle De-Stressing"
    ],
    "doshaFocus": "Vata & Kapha Melting",
    "recommendedFor": "Deep muscular tension, cold constitution, poor circulation, deep relaxation"
  },

  // =========================================================================
  // 3. BEAUTY CARE
  // =========================================================================
  {
    id: "beauty-01",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    name: "Panchagavya Facial",
    subtitle: "Sacred Ayurvedic Purifying & Blemish Clearing Ritual",
    duration: "60 Minutes",
    priceMUR: 1500,
    priceUSD: 33,
    badge: "Purifying & Detox",
    requiresDoctorConsultation: false,
    image: "assets/images/Beauty Care/Panchagavya Facial.webp",
    description: "Sacred Ayurvedic purifying therapy formulated with classical botanical ingredients to clear blemishes, balance natural sebum, and detoxify congested facial pores.",
    benefits: [
      "Deep Pore Cleansing & Sebum Balance",
      "Panchagavya Herbal Pack Application",
      "Facial Acupressure & Marma Point Stimulation",
      "Hydrating Floral Mist & Nourishing Finish"
    ],
    doshaFocus: "Pitta & Kapha Balancing",
    recommendedFor: "Blemishes, congested pores, uneven sebum, dull skin"
  },
  {
    id: "beauty-02",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    name: "Herbal Hair Pack",
    subtitle: "Fresh Botanical Conditioning & Follicle Nourishment",
    duration: "30 Minutes",
    priceMUR: 1200,
    priceUSD: 27,
    badge: "Hair & Scalp",
    requiresDoctorConsultation: false,
    image: "assets/images/Beauty Care/Herbal Hair Pack.webp",
    description: "A soothing natural herbal mask prepared with freshly blended botanical extracts including Amla, Brahmi, Bhringraj, and Hibiscus. Deeply conditions the hair follicles and restores natural luster.",
    benefits: [
      "Fresh Herbal Scalp Pack Application",
      "Deep Follicle Conditioning & Root Strengthening",
      "Gentle Herbal Wash & Scalp Cooling",
      "Restores Natural Hair Shine and Luster"
    ],
    doshaFocus: "Pitta & Vata Soothing",
    recommendedFor: "Hair thinning, dry brittle hair, scalp heat, lack of luster"
  },
  {
    id: "beauty-03",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    name: "Njavara Facial",
    subtitle: "Royal Red Rice & Medicated Milk Nourishing Ceremony",
    duration: "60 Minutes",
    priceMUR: 1500,
    priceUSD: 33,
    badge: "Royal Radiance",
    requiresDoctorConsultation: false,
    image: "assets/images/Beauty Care/Njavara Facial.webp",
    description: "Classical royal Ayurvedic facial using medicated Njavara rice cooked in herbal milk to deeply nourish tissues, improve skin elasticity, and restore youthful radiance.",
    benefits: [
      "Njavara Rice Compress Fomentation",
      "Mukhabhyanga Facial Lifting Massage",
      "Herbal Cleanse & Warm Steam Opening",
      "Nourishing Deep Face Pack"
    ],
    doshaFocus: "Vata & Pitta Rejuvenation",
    recommendedFor: "Skin laxity, dullness, fine lines, dryness, youthful glow"
  },
  {
    id: "beauty-04",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    name: "Back Facial",
    subtitle: "Clarifying Exfoliation & Tension-Melting Back Ritual",
    duration: "90 Minutes",
    priceMUR: 2100,
    priceUSD: 47,
    badge: "Clarifying & Relief",
    requiresDoctorConsultation: false,
    image: "assets/images/Beauty Care/Back Facial.webp",
    description: "Comprehensive clarifying therapy for the back that includes deep exfoliation, warm herbal steam, gentle pore cleansing, detoxifying clay mask, and tension-melting back massage.",
    benefits: [
      "Deep Exfoliation Back Scrub",
      "Warm Herbal Steam & Gentle Pore Cleansing",
      "Detoxifying Mud & Clay Mask",
      "Therapeutic Tension-Melting Back Massage"
    ],
    doshaFocus: "Kapha & Vata Relief",
    recommendedFor: "Back acne, clogged pores, upper body tension, stress fatigue"
  },

  // =========================================================================
  // 4. FACE CARE
  // =========================================================================
  {
    id: "face-01",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Njavara Facial",
    subtitle: "Classical Royal Medicated Rice Nourishing Facial",
    duration: "60 Minutes",
    priceMUR: 1500,
    priceUSD: 33,
    badge: "Royal Rejuvenation",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Njavara Facial.webp",
    description: "Classical royal Ayurvedic facial using medicated Njavara rice cooked in herbal milk to deeply nourish tissues and restore youthful radiance.",
    benefits: [
      "Njavara Rice Compress",
      "Mukhabhyanga Massage",
      "Herbal Cleanse & Steam",
      "Nourishing Face Pack"
    ],
    doshaFocus: "Vata & Pitta Nourishment",
    recommendedFor: "Dry skin, loss of radiance, mature skin, deep tissue nourishment"
  },
  {
    id: "face-02",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Panchagavya Facial",
    subtitle: "Sacred Classical Botanical Sebum Balancing Therapy",
    duration: "60 Minutes",
    priceMUR: 1500,
    priceUSD: 33,
    badge: "Botanical Purifying",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Panchagavya Facial.webp",
    description: "Sacred Ayurvedic purifying therapy formulated with classical botanical ingredients to clear blemishes, balance natural sebum, and detoxify congested facial pores.",
    benefits: [
      "Deep Pore Cleansing",
      "Panchagavya Herbal Pack",
      "Facial Acupressure",
      "Hydrating Floral Mist"
    ],
    doshaFocus: "Pitta & Kapha Detox",
    recommendedFor: "Blemishes, congested pores, excess sebum, toxin buildup"
  },
  {
    id: "face-03",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Red Sandal Facial",
    subtitle: "Opulent Cooling & Sun Tan Reversal Therapy",
    duration: "60 Minutes",
    priceMUR: 1500,
    priceUSD: 33,
    badge: "Cooling Radiance",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Red Sandal Facial.webp",
    description: "Opulent cooling therapy enriched with pure red sandalwood to soothe inflammation, minimize sun tanning, and restore an even, luminous complexion.",
    benefits: [
      "Red Sandalwood Infusion",
      "Cooling Herbal Scrub",
      "Lymphatic Massage",
      "Raktachandana Lepam"
    ],
    doshaFocus: "Pitta Soothing & Cooling",
    recommendedFor: "Sun tan, inflammation, skin redness, uneven complexion"
  },
  {
    id: "face-04",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Deep Cleansing Facial",
    subtitle: "Purifying Botanical Extraction & Clay Mask",
    duration: "60 Minutes",
    priceMUR: 1500,
    priceUSD: 33,
    badge: "Purifying Care",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Deep Cleansing Facial.webp",
    description: "Intensive purifying treatment combining gentle steam, herbal exfoliation, and therapeutic clay masks to eliminate pollutants and refresh dull tired skin.",
    benefits: [
      "Steam & Gentle Extraction",
      "Botanical Exfoliation",
      "Clay & Herbal Mask",
      "Toning Herbal Mist"
    ],
    doshaFocus: "Tridoshic / All Skin Types",
    recommendedFor: "Pollution-exposed skin, congested pores, dull tired complexion"
  },
  {
    id: "face-05",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Anti-Aging Facial",
    subtitle: "Restorative Kumkumadi Ritual & Firming Marma Massage",
    duration: "60 Minutes",
    priceMUR: 1500,
    priceUSD: 33,
    badge: "Age-Defying",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Anti-Aging Facial.webp",
    description: "Restorative age-defying ritual infused with Kumkumadi oils and firming Marma massage to boost natural collagen synthesis and soften fine lines.",
    benefits: [
      "Firming Marma Massage",
      "Kumkumadi Serum Infusion",
      "Herbal Collagen Mask",
      "Eye Contour Care"
    ],
    doshaFocus: "Vata & Pitta Nourishment",
    recommendedFor: "Fine lines, loss of elasticity, mature skin, tired eye contours"
  },
  {
    id: "face-06",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Brightening Facial",
    subtitle: "Saffron, Turmeric & Antioxidant Glow Therapy",
    duration: "60 Minutes",
    priceMUR: 1500,
    priceUSD: 33,
    badge: "Radiance & Glow",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Brightening Facial.webp",
    description: "Glow-enhancing facial rich in saffron, turmeric, and natural antioxidants to fade dark spots and unveil vibrant, translucent, radiant facial skin.",
    benefits: [
      "Saffron & Turmeric Scrub",
      "Luminous Glow Massage",
      "Herbal Brightening Pack",
      "Rose Water Hydration"
    ],
    doshaFocus: "Pitta & Kapha Skin",
    recommendedFor: "Hyperpigmentation, uneven skin tone, dark spots, dullness"
  },
  {
    id: "face-07",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Manjishta Facial",
    subtitle: "Targeted Blood-Purifying & Complexion-Clearing Therapy",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Complexion Clearing",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Manjishta Facial.webp",
    description: "Targeted complexion-clearing facial utilizing potent Manjistha roots to purify blood toxins, soothe persistent redness, and impart a crystal-clear natural tone.",
    benefits: [
      "Manjistha Herbal Cleanser",
      "Detoxifying Face Pack",
      "Acupressure Marma Massage",
      "Clarifying Herbal Mist"
    ],
    doshaFocus: "Pitta Blood Detox",
    recommendedFor: "Redness, blemishes, sensitive skin, uneven complexion"
  },
  {
    id: "face-08",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Eladi Facial",
    subtitle: "Ancient Cardamom & Herbal Texture Refining Ritual",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Texture Refining",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Eladi Facial.webp",
    description: "Ancient Ayurvedic beauty ritual with Eladi Choornam and aromatic herbs to refine skin texture, combat environmental pollution, and balance moisture.",
    benefits: [
      "Eladi Choornam Exfoliation",
      "Herbal Steam & Cleanse",
      "Soothing Eladi Oil Massage",
      "Pore Refining Lepam"
    ],
    doshaFocus: "Vata & Kapha Balancing",
    recommendedFor: "Textured skin, roughness, environmental stress, moisture loss"
  },
  {
    id: "face-09",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Nalpamaradi Facial",
    subtitle: "Sacred Bark & Golden Turmeric Sun Damage Repair",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Golden Radiance",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Nalpamaradi Facial.webp",
    description: "Luxurious skin-brightening therapy formulated with sacred Nalpamaradi barks and turmeric to repair sun damage and illuminate your natural golden glow.",
    benefits: [
      "Nalpamaradi Oil Infusion",
      "Brightening Herbal Scrub",
      "Luminous Mukha Lepam",
      "Floral Water Hydration"
    ],
    doshaFocus: "Pitta Sun Repair",
    recommendedFor: "Sun tan, UV exposure, pigmentation, skin revitalization"
  },
  {
    id: "face-10",
    categoryId: "face-care",
    categoryName: "Face Care",
    name: "Threading",
    subtitle: "Precision Organic Cotton Facial Hair Removal",
    duration: "10 Minutes",
    priceMUR: 90,
    priceUSD: 2,
    badge: "Express Shaping",
    requiresDoctorConsultation: false,
    image: "assets/images/Face Care/Threading.webp",
    description: "Precise, gentle organic cotton thread facial hair removal for perfectly sculpted eyebrows, upper lip, or chin, finished with cooling aloe.",
    benefits: [
      "Organic Cotton Threading",
      "Precision Brow Shaping",
      "Cooling Aloe Vera Touch"
    ],
    doshaFocus: "All Skin Types",
    recommendedFor: "Eyebrows, upper lip, chin shaping, gentle hair removal"
  },

  // =========================================================================
  // 5. BODY CARE
  // =========================================================================
  {
    id: "body-01",
    categoryId: "body-care",
    categoryName: "Body Care",
    name: "Herbal Body Scrub",
    subtitle: "Traditional Udvarthanam-Inspired Therapy",
    duration: "60 Minutes",
    priceMUR: 1980,
    priceUSD: 44,
    badge: "Signature Full Body Ritual",
    requiresDoctorConsultation: false,
    image: "assets/images/Body Care/Herbal Body Scrub.webp",
    description: "Our signature Herbal Body Scrub is an invigorating Ayurvedic polishing ritual that combines finely powdered therapeutic herbs, precious sandalwood, and cold-pressed botanical oils. Performed using rhythmic upward strokes (Udvarthanam), it gently buffs away dull surface cells, stimulates lymphatic microcirculation, releases trapped metabolic toxins, and restores velvety softness and radiant suppleness to every inch of your skin.",
    benefits: [
      "Herbal Oil Anointing",
      "Botanical Scrub Blend",
      "Rhythmic Udvarthanam",
      "Warm Rinse & Hydration"
    ],
    doshaFocus: "Tridoshic / All Skin Types",
    recommendedFor: "Lymphatic drainage, dry flakiness, deep pore detoxification, radiant skin glow",
    steps: [
      {
        step: "01",
        title: "Herbal Oil Anointing",
        desc: "Light application of warm, dosha-specific medicated oils to soften the epidermis and prepare skin tissues for exfoliation."
      },
      {
        step: "02",
        title: "Botanical Scrub Blend",
        desc: "Application of freshly compounded medicinal herbs, Triphala, and micro-fine grains customized to your skin constitution."
      },
      {
        step: "03",
        title: "Rhythmic Udvarthanam",
        desc: "Dynamic upward friction massage strokes stimulate lymphatic drainage, tone subcutaneous tissues, and smooth skin texture."
      },
      {
        step: "04",
        title: "Warm Rinse & Hydration",
        desc: "Soothing aromatic rinse followed by a nourishing botanical lotion to seal in moisture and impart an all-day golden glow."
      }
    ],
    botanicals: [
      {
        name: "Red Sandalwood",
        sanskrit: "Raktachandana",
        desc: "Soothes irritated skin, cools internal body heat, and evens out pigmentation and sun tan."
      },
      {
        name: "Triphala Extract",
        sanskrit: "Amalaki, Bibhitaki & Haritaki",
        desc: "Rich in natural antioxidants and Vitamin C to detoxify pores and neutralize free radicals."
      },
      {
        name: "Vetiver Roots",
        sanskrit: "Ushira",
        desc: "Imparts a deeply calming earthy aroma while refining skin texture and boosting microcirculation."
      },
      {
        name: "Organic Gram Flour",
        sanskrit: "Chanaka Choornam",
        desc: "Gently sloughs off dead cells and excess sebum without stripping the skin's protective lipid barrier."
      }
    ],
    holisticBenefits: [
      {
        icon: "clock",
        title: "Lymphatic Drainage",
        desc: "Upward rhythmic friction stimulates lymph flow, reducing fluid retention and heavy limbs."
      },
      {
        icon: "shield",
        title: "Silky Smooth Skin",
        desc: "Instantly removes dry flakiness, rough patches, and keratosis, leaving skin touchably soft."
      },
      {
        icon: "sun",
        title: "Deep Detoxification",
        desc: "Opens clogged sweat glands and pores, assisting the body in natural metabolic waste elimination."
      },
      {
        icon: "heart",
        title: "Radiant Natural Glow",
        desc: "Enhances blood circulation to the skin surface, imparting a youthful, healthy radiance."
      }
    ]
  },

  // =========================================================================
  // 6. HAIR CARE
  // =========================================================================
  {
    id: "hair-01",
    categoryId: "hair-care",
    categoryName: "Hair Care",
    name: "Herbal Hair Pack",
    subtitle: "Fresh Botanical Scalp Mask & Conditioning",
    duration: "30 Minutes",
    priceMUR: 1200,
    priceUSD: 27,
    badge: "Scalp Nourishment",
    requiresDoctorConsultation: false,
    image: "assets/images/Hair Care/Herbal Hair Pack.webp",
    description: "A soothing natural herbal mask prepared with freshly blended botanical extracts including Amla, Brahmi, Bhringraj, and Hibiscus. Deeply conditions the hair follicles, cools excess scalp heat, and restores natural softness and luster.",
    benefits: [
      "Fresh Herbal Scalp Pack",
      "Follicle Conditioning",
      "Gentle Herbal Wash"
    ],
    doshaFocus: "Pitta & Vata Scalp Relief",
    recommendedFor: "Scalp heat, dryness, lack of hair shine, follicle weakness"
  },
  {
    id: "hair-02",
    categoryId: "hair-care",
    categoryName: "Hair Care",
    name: "Keshavardhini (Hair Strengthening)",
    subtitle: "Intensive Ayurvedic Scalp Therapy & Marma Stimulation",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Hair Strengthening",
    requiresDoctorConsultation: false,
    image: "assets/images/Hair Care/Keshavardhini - Hair Strengthening.webp",
    description: "An intensive Ayurvedic restorative therapy combining therapeutic Shiro Abhyangam (warm medicated oil head massage) with targeted Marma point stimulation and a potent hair strengthening herbal pack to control hair fall and stimulate healthy growth.",
    benefits: [
      "Shiro Abhyangam (Head Massage)",
      "Hair Strengthening Pack",
      "Warm Medicated Herbal Oils",
      "Marma Scalp Stimulation"
    ],
    doshaFocus: "Tridoshic Hair Rejuvenation",
    recommendedFor: "Hair fall, thinning hair, scalp stress, follicle strengthening"
  },

  // =========================================================================
  // 7. HAND & FOOT CARE
  // =========================================================================
  {
    id: "handfoot-01",
    categoryId: "hand-foot-care",
    categoryName: "Hand & Foot Care",
    name: "Pedicure & Manicure",
    subtitle: "Complete Dual Holistic Grooming Package",
    duration: "90 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Full Grooming",
    requiresDoctorConsultation: false,
    image: "assets/images/Hand and Foot Care/Pedicure & Manicure.webp",
    description: "A complete holistic grooming package for both hands and feet. Combines nail shaping, gentle cuticle care, exfoliating herbal scrubs, and a deeply relaxing pressure massage for soft, revitalized skin.",
    benefits: [
      "Classic Manicure",
      "Full Pedicure",
      "Herbal Exfoliation",
      "Hand & Foot Massage"
    ],
    doshaFocus: "Complete Hand & Foot Care",
    recommendedFor: "Total nail care, callus removal, hand & foot relaxation, special events"
  },
  {
    id: "handfoot-02",
    categoryId: "hand-foot-care",
    categoryName: "Hand & Foot Care",
    name: "Pedicure",
    subtitle: "Essential Botanical Foot Exfoliation & Massage",
    duration: "60 Minutes",
    priceMUR: 1440,
    priceUSD: 32,
    badge: "Foot Wellness",
    requiresDoctorConsultation: false,
    image: "assets/images/Hand and Foot Care/Pedicure.webp",
    description: "An essential foot treatment designed to cleanse, exfoliate dry calluses, shape toenails, and relieve tension in tired soles through an invigorating herbal soak and soothing foot massage.",
    benefits: [
      "Herbal Foot Soak",
      "Dead Skin Scrub",
      "Nail & Cuticle Care",
      "Soothing Foot Massage"
    ],
    doshaFocus: "Pitta & Vata Soothing",
    recommendedFor: "Tired feet, rough soles, callus reduction, daily nail maintenance"
  },
  {
    id: "handfoot-03",
    categoryId: "hand-foot-care",
    categoryName: "Hand & Foot Care",
    name: "Manicure",
    subtitle: "Quick Hand Care, Botanical Scrub & Hydrating Massage",
    duration: "30 Minutes",
    priceMUR: 600,
    priceUSD: 13,
    badge: "Hand Care",
    requiresDoctorConsultation: false,
    image: "assets/images/Hand and Foot Care/Manicure.webp",
    description: "A quick yet thorough hand care ritual focusing on precise nail shaping, cuticle nourishment, botanical exfoliation, and a hydrating hand massage to leave your hands neat and smooth.",
    benefits: [
      "Nail Shaping & Buffing",
      "Cuticle Conditioning",
      "Herbal Hand Scrub",
      "Hydrating Massage"
    ],
    doshaFocus: "Vata Nourishing",
    recommendedFor: "Dry cuticles, dull nails, hand tension, express grooming"
  },
  {
    id: "handfoot-04",
    categoryId: "hand-foot-care",
    categoryName: "Hand & Foot Care",
    name: "Royal Pedicure",
    subtitle: "Indulgent Floral Bath, Extended Reflexology & Callus Therapy",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Royal Luxury",
    requiresDoctorConsultation: false,
    image: "assets/images/Hand and Foot Care/Royal Pedicure.webp",
    description: "An indulgent luxury foot therapy with fragrant floral baths, essential oil scrubs, intensive callus smoothing, and an extended Ayurvedic reflexology massage along the calves and soles.",
    benefits: [
      "Floral Rose Petal Soak",
      "Aromatic Herbal Scrub",
      "Intensive Callus Care",
      "Royal Calf & Foot Massage"
    ],
    doshaFocus: "Pitta Cooling & Calming",
    recommendedFor: "Calf tension, deep foot stress, severe dry heels, luxurious pampering"
  },
  {
    id: "handfoot-05",
    categoryId: "hand-foot-care",
    categoryName: "Hand & Foot Care",
    name: "Paraffin Foot Spa",
    subtitle: "Deep Thermal Paraffin Wax Wrap & Heel Repair",
    duration: "90 Minutes",
    priceMUR: 2160,
    priceUSD: 48,
    badge: "Intensive Repair",
    requiresDoctorConsultation: false,
    image: "assets/images/Hand and Foot Care/Paraffin Foot Spa.webp",
    description: "A deeply therapeutic thermal treatment enveloping feet in warm paraffin wax. Locks in deep moisture, eases joint stiffness, repairs cracked heels, and stimulates circulation with reflexology.",
    benefits: [
      "Herbal Foot Exfoliation",
      "Warm Paraffin Wax Wrap",
      "Intensive Heel Repair",
      "Reflexology Massage"
    ],
    doshaFocus: "Vata Pacifying & Warming",
    recommendedFor: "Cracked heels, stiff foot joints, intense dryness, circulation boost"
  }
];

// Curated Signature Packages
const SIGNATURE_PACKAGES = [
  {
    id: "pkg-01",
    name: "Royal Panchakarma Rejuvenation Day",
    subtitle: "Full-Day Supreme Detox & Cellular Renewal",
    duration: "4 Hours",
    priceMUR: 9800,
    priceUSD: 220,
    badge: "All-Inclusive Luxury",
    includes: [
      "Ayurvedic Consultation with certified Vaidya",
      "Abhyanga Synchronized Full Body Massage (75m)",
      "Shirodhara Flowing Oil Therapy (45m)",
      "Swedana Medicated Steam Detox (30m)",
      "Mukha Lepam Herbal Facial (45m)",
      "Herbal Ayurvedic Refreshment & Organic Elixir"
    ],
    recommendedFor: "Total life reset, deep detoxification, executive burnout"
  },
  {
    id: "pkg-02",
    name: "Couples Nirvana Wellness Sanctuary",
    subtitle: "Romantic Synchronized Spa Escape for Two",
    duration: "3 Hours",
    priceMUR: 12500,
    priceUSD: 280,
    badge: "For Two Persons",
    includes: [
      "Aromatherapy Herbal Foot Bath Ritual",
      "Synchronized Duo Abhyanga Massages (60m)",
      "Ksheeradhara Soothing Herbal Milk Infusion (45m)",
      "Sound Healing & Tibetan Singing Bowls (30m)",
      "Champagne / Organic Tea with Tropical Fruit Platter"
    ],
    recommendedFor: "Honeymooners, anniversaries, romantic rejuvenation"
  },
  {
    id: "pkg-03",
    name: "Bridal Radiance & Ayur-Glow Retreat",
    subtitle: "Pre-Wedding Comprehensive Beautification",
    duration: "3.5 Hours",
    priceMUR: 8500,
    priceUSD: 190,
    badge: "Bridal Signature",
    includes: [
      "24K Ayurvedic Gold Glow Facial (75m)",
      "Sandalwood & Turmeric Ubtan Body Polish (60m)",
      "Keshini Herbal Scalp & Hair Spa (45m)",
      "Padabhyanga Deluxe Foot Reflexology (30m)",
      "Ayurvedic Beauty Teas & Glow Guide"
    ],
    recommendedFor: "Brides, grooms, high-profile celebration prep"
  }
];
