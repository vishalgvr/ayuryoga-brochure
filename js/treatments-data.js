/**
 * Ayuryoga International - Therapies & Treatments Catalog Data
 * WhatsApp Enquiry Number: +23058074009
 * Currency: MUR (Mauritian Rupee) with approximate USD conversions
 */

const WHATSAPP_PHONE = "23058074009";

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
    image: "assets/images/Ayurveda/Abhyangam + Njavarakizhi  - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam + Bhashpa Sweda - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam Treatment Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam.jpg",
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
    image: "assets/images/Ayurveda/Naranga Kizhi.jpg",
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
    image: "assets/images/Ayurveda/Virechanam.jpg",
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
    image: "assets/images/Ayurveda/Snehapanam.jpg",
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
    image: "assets/images/Ayurveda/Thala Pothichil.jpg",
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
    image: "assets/images/Ayurveda/Thakradhara - Head and Body.jpg",
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
    image: "assets/images/Ayurveda/Thalam.jpg",
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
    image: "assets/images/Ayurveda/Nethra Sekam.jpg",
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
    image: "assets/images/Ayurveda/Nethra Tharpanam.jpg",
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
    image: "assets/images/Ayurveda/Kabalam.jpg",
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
    image: "assets/images/Ayurveda/Karnapooranam.jpg",
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
    image: "assets/images/Ayurveda/Padabhyangam.jpg",
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
    image: "assets/images/Ayurveda/Siroabhyangam.jpg",
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
    image: "assets/images/Ayurveda/Bashpa Sweda.jpg",
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
    image: "assets/images/Ayurveda/Pichu.jpg",
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
    image: "assets/images/Ayurveda/Upanaham.jpg",
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
    image: "assets/images/Ayurveda/Lepanam.jpg",
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
    image: "assets/images/Ayurveda/Specialized Therapy on Affected Area.jpg",
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
    image: "assets/images/Ayurveda/Kashaya Basthi.jpg",
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
    image: "assets/images/Ayurveda/Greeva Vasthi.jpg",
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
    image: "assets/images/Ayurveda/Dhoomapanam.jpg",
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
    image: "assets/images/Ayurveda/Sneha Basthi.jpg",
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
    image: "assets/images/Ayurveda/Siro Vasthi.jpg",
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
    image: "assets/images/Ayurveda/Udwarthanam.jpg",
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
    image: "assets/images/Ayurveda/Nasyam.jpg",
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
    image: "assets/images/Ayurveda/Nadee Sweda.jpg",
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
    image: "assets/images/Ayurveda/Pinda Swedanam.jpg",
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
    image: "assets/images/Ayurveda/Shirodhara Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Ksheeradhara - Head Only.jpg",
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
    image: "assets/images/Ayurveda/Sirodhara With Oil.jpg",
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
    image: "assets/images/Ayurveda/Pizhichil or Snehadhara Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Dhanyamla Dhara.jpg",
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
    image: "assets/images/Ayurveda/Vasthi on Affected Area.jpg",
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
    image: "assets/images/Ayurveda/Kati Vasti.jpg",
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
    image: "assets/images/Ayurveda/Janu Vasti.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam + Podikizhi Treatment  - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Ela Kizhi.jpg",
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
    image: "assets/images/Ayurveda/Vamanam - Panchakarma.jpg",
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
    image: "assets/images/Ayurveda/Podi Kizhi.jpg",
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
    image: "assets/images/Ayurveda/Ekanga Dhara.jpg",
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
    image: "assets/images/Ayurveda/Thakradhara - Head and Body.jpg",
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
    image: "assets/images/Ayurveda/Kashaya Dhara.jpg",
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
    image: "assets/images/Ayurveda/Ksheera Dhara Full Body.jpg",
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
    image: "assets/images/Ayurveda/Thakradhara - Head Only.jpg",
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
    image: "assets/images/Ayurveda/Mamsa Kizhi.jpg",
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
    image: "assets/images/Ayurveda/Navara Kizhi.jpg",
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
    image: "assets/images/Ayurveda/Mukhakanti.jpg",
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
    image: "assets/images/Ayurveda/Manal Kizhi.jpg",
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
    image: "assets/images/Ayurveda/Nethra Sekam.jpg",
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
    image: "assets/images/Ayurveda/Sthanika Abhyangam.jpg",
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
    image: "assets/images/Ayurveda/Sthanika Abhyangam + Podikizhi.jpg",
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
    image: "assets/images/Ayurveda/Agnikarma Cautery.jpg",
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
    image: "assets/images/Ayurveda/Niragni Agnikarma.jpg",
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
    image: "assets/images/Ayurveda/Synchronized Massage - 4 Hands.jpg",
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
    image: "assets/images/Ayurveda/Synchronized Massage - 4 Hands.jpg",
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
    image: "assets/images/Ayurveda/Synchronized Massage - 4 Hands.jpg",
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
    image: "assets/images/Ayurveda/Akshi Tarpanam.jpg",
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
    image: "assets/images/Ayurveda/Vayasthapana.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi - Kati Vasti - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi - Sneha Basti - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi and Bashpa Sweda - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi - Janu Basti - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam and Shirodhara - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Podi Kizhi and Lepam.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam - Podi Kizhi - Kati Vasti and Greeva Vasthi - Without Oil.jpg",
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
    image: "assets/images/Ayurveda/Abhyangam + Shirodhara with Oil.jpg",
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
    id: "well-01",
    categoryId: "wellness",
    categoryName: "Wellness",
    name: "Sound Healing & Tibetan Singing Bowls",
    subtitle: "Acoustic Vibrational Frequency Alignment",
    duration: "60 Mins",
    priceMUR: 2900,
    priceUSD: 65,
    badge: "Mind-Body Harmony",
    requiresDoctorConsultation: false,
    image: "assets/images/yoga.jpg",
    description: "Immerse in therapeutic vibrations produced by hand-hammered Tibetan singing bowls, gongs, and chime frequencies. The sound waves recalibrate cellular resonance, dissolving stress and mental static.",
    benefits: [
      "Lowers cortisol levels and calms the nervous system",
      "Synchronizes left and right brain hemispheres",
      "Clears energetic blockages across 7 subtle chakras",
      "Induces effortless alpha and theta meditative states"
    ],
    doshaFocus: "Energetic Alignment",
    recommendedFor: "Emotional distress, chronic anxiety, creative block, burnout"
  },
  {
    id: "well-02",
    categoryId: "wellness",
    categoryName: "Wellness",
    name: "Yoga Nidra & Pranic Breathwork",
    subtitle: "Deep Yogic Sleep & Vital Energy Alignment",
    duration: "75 Mins",
    priceMUR: 2700,
    priceUSD: 60,
    badge: "Rejuvenation",
    requiresDoctorConsultation: false,
    image: "assets/images/yoga.jpg",
    description: "Guided conscious relaxation combined with sacred pranayama breathwork techniques. One hour of Yoga Nidra yields rest equivalent to 4 hours of deep delta sleep, recharging vital prana.",
    benefits: [
      "Deep systemic recovery for mind and physical body",
      "Increases lung capacity and oxygenates blood",
      "Releases subconscious emotional stress",
      "Deepens mind-body awareness and inner serenity"
    ],
    doshaFocus: "Pranic Vitality",
    recommendedFor: "Sleep deficit, jet lag, high stress lifestyles, spiritual seekers"
  },
  {
    id: "well-03",
    categoryId: "wellness",
    categoryName: "Wellness",
    name: "Chakra Balance & Marma Energy Alignment",
    subtitle: "Holistic Energy Center Recalibration",
    duration: "90 Mins",
    priceMUR: 3900,
    priceUSD: 88,
    badge: "Holistic Master",
    requiresDoctorConsultation: false,
    image: "assets/images/yoga.jpg",
    description: "A comprehensive holistic ritual combining light touch on 107 vital Marma energy points, crystal gemstone placement, and personalized aromatic herbal oils to balance vital energy vortexes.",
    benefits: [
      "Unblocks stagnant energy channels (Nadis)",
      "Balances emotional highs and lows",
      "Boosts immunity and metabolic vitality",
      "Leaves you feeling grounded, uplifted, and centered"
    ],
    doshaFocus: "Holistic Chakra Equilibrium",
    recommendedFor: "Sluggish energy, emotional imbalances, life transitions"
  },
  {
    id: "well-04",
    categoryId: "wellness",
    categoryName: "Wellness",
    name: "Holistic Anti-Stress Deep Release",
    subtitle: "Full Body Tension Melt with Warm Aromatic Compresses",
    duration: "75 Mins",
    priceMUR: 3400,
    priceUSD: 76,
    badge: "Relaxation",
    requiresDoctorConsultation: false,
    image: "assets/images/hero.jpg",
    description: "A therapeutic fusion of Swedish gliding strokes, Ayurvedic acupressure, and warm lavender-sandalwood herbal compresses focused on neck, shoulders, spine, and feet.",
    benefits: [
      "Melts stubborn muscular knots and postural strain",
      "Releases endorphins and promotes deep tranquility",
      "Improves flexibility in the upper torso and neck",
      "Restores effortless posture"
    ],
    doshaFocus: "Stress Relief",
    recommendedFor: "Corporate executives, athletes, travel recovery, everyday stress"
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
    image: "assets/images/card_beauty.png",
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
    image: "assets/images/pkg_hair_pack.jpg",
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
    image: "assets/images/pkg_beauty.png",
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
    image: "assets/images/pkg_back_facial.jpg",
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
    image: "assets/images/pkg_beauty.png",
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
    image: "assets/images/card_beauty.png",
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
    image: "assets/images/card_wellness.png",
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
    image: "assets/images/pkg_therapy.png",
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
    image: "assets/images/pkg_rejuv.png",
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
    image: "assets/images/card_ayurveda.png",
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
    image: "assets/images/card_beauty.png",
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
    image: "assets/images/pkg_rejuv.png",
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
    image: "assets/images/pkg_therapy.png",
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
    image: "assets/images/hero_bg.png",
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
    name: "Udvartana Herbal Slimming Scrub",
    subtitle: "Invigorating Deep Tissue Herbal Powder Massage",
    duration: "75 Mins",
    priceMUR: 3400,
    priceUSD: 76,
    badge: "Slimming & Toning",
    requiresDoctorConsultation: false,
    image: "assets/images/udwarthanam.jpg",
    description: "A vigorous upward lymphatic massage using warm dry herbal powders and minerals. It breaks down subcutaneous fat, stimulates metabolism, eliminates cellulite, and imparts silky soft skin.",
    benefits: [
      "Assists in healthy weight loss and body contouring",
      "Significantly reduces cellulite and localized fat deposits",
      "Stimulates sluggish metabolism and lymphatic flow",
      "Exfoliates dead cells, leaving skin remarkably smooth"
    ],
    doshaFocus: "Kapha Reduction",
    recommendedFor: "Weight management, sluggish circulation, cellulite, water retention"
  },
  {
    id: "body-02",
    categoryId: "body-care",
    categoryName: "Body Care",
    name: "Ksheeradhara Rehydrating Milk Bath",
    subtitle: "Medicated Warm Herbal Milk Full Body Cascade",
    duration: "60 Mins",
    priceMUR: 3800,
    priceUSD: 85,
    badge: "Nourishing",
    requiresDoctorConsultation: false,
    image: "assets/images/dhara.jpg",
    description: "A continuous flow of cow's milk infused with precious healing herbs like Bala, Ashwagandha, and Sandalwood poured over the entire body. Perfect for dry, fatigued, or weather-worn skin.",
    benefits: [
      "Intensely nourishes and repairs dry, peeling skin",
      "Soothes intense body heat, rashes, and eczema",
      "Strengthens deep tissues (Dhatus) and immunity",
      "Deeply calming for nerves and body aches"
    ],
    doshaFocus: "Pitta & Vata Soothing",
    recommendedFor: "Severe dry skin, eczema, psoriasis, hot flash relief"
  },
  {
    id: "body-03",
    categoryId: "body-care",
    categoryName: "Body Care",
    name: "Ayurvedic Hot Herbal Stone Therapy",
    subtitle: "Volcanic Basalt Stones & Infused Herbal Elixirs",
    duration: "90 Mins",
    priceMUR: 4200,
    priceUSD: 94,
    badge: "Deep Muscle Relief",
    requiresDoctorConsultation: false,
    image: "assets/images/hero.jpg",
    description: "Warm volcanic basalt stones coated in Ayurvedic medicinal oils are placed on vital energy centers and used to massage deep muscle groups, melting chronic stiffness effortlessly.",
    benefits: [
      "Penetrates deep muscle layers to release stubborn spasms",
      "Enhances peripheral blood flow and cellular oxygenation",
      "Relieves chronic back pain and fibromyalgia discomfort",
      "Induces a profound state of tranquil relaxation"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Deep muscle knots, chronic body fatigue, winter chill relief"
  },
  {
    id: "body-04",
    categoryId: "body-care",
    categoryName: "Body Care",
    name: "Swedana Herbal Steam Detox Therapy",
    subtitle: "Aromatic Herbal Steam Cabin Treatment",
    duration: "45 Mins",
    priceMUR: 2100,
    priceUSD: 47,
    badge: "Detox Booster",
    requiresDoctorConsultation: false,
    image: "assets/images/swedana.jpg",
    description: "A classical therapeutic steam bath where you recline inside an Ayurvedic wooden steam chamber while medicated herbal vapors open body pores while keeping the head cool.",
    benefits: [
      "Facilitates maximum release of accumulated cellular toxins",
      "Relieves stiffness in joints and all muscles",
      "Improves digestion and metabolic fire (Agni)",
      "Enhances the absorption of subsequent massage oils"
    ],
    doshaFocus: "Kapha & Vata Cleansing",
    recommendedFor: "Post-massage detox, joint stiffness, cold/congested body"
  },

  // =========================================================================
  // 6. HAIR CARE
  // =========================================================================
  {
    id: "hair-01",
    categoryId: "hair-care",
    categoryName: "Hair Care",
    name: "Keshini Intensive Herbal Hair Spa",
    subtitle: "Root Nourishing Hair Mask & Scalp Marma Massage",
    duration: "60 Mins",
    priceMUR: 2500,
    priceUSD: 56,
    badge: "Hair Nutrition",
    requiresDoctorConsultation: false,
    image: "assets/images/facial.jpg",
    description: "A restorative head and hair ceremony using cold-pressed coconut oil steeped with Bhringraj, Amla, Brahmi, and Hibiscus leaves, followed by warm steam and a fresh botanical root mask.",
    benefits: [
      "Strengthens hair roots from deep within follicles",
      "Prevents premature graying and restores natural luster",
      "Hydrates brittle, chemically treated, or frizzy hair",
      "Relieves scalp stress and tension headaches"
    ],
    doshaFocus: "Tridoshic Hair Care",
    recommendedFor: "Dry, damaged, split ends, color-treated hair"
  },
  {
    id: "hair-02",
    categoryId: "hair-care",
    categoryName: "Hair Care",
    name: "Siroabhyanga Traditional Scalp Therapy",
    subtitle: "Warm Herbal Oil Head, Neck & Shoulder Therapy",
    duration: "45 Mins",
    priceMUR: 2100,
    priceUSD: 47,
    badge: "Stress Buster",
    requiresDoctorConsultation: false,
    image: "assets/images/thalapothichil.jpg",
    description: "A focused, revitalizing head and neck massage targeting cranial marma pressure points with specialized warm Ayurvedic herbal oils, releasing chronic mental strain and eye fatigue.",
    benefits: [
      "Instantly relieves mental fatigue and digital eye strain",
      "Promotes deep, sound sleep and tranquil dreams",
      "Stimulates hair growth by boosting scalp circulation",
      "Loosens tight neck and upper shoulder muscles"
    ],
    doshaFocus: "Vata & Pitta Calming",
    recommendedFor: "Computer workers, frequent headaches, scalp tension, insomnia"
  },
  {
    id: "hair-03",
    categoryId: "hair-care",
    categoryName: "Hair Care",
    name: "Bhringraj Anti-Hair Fall Therapy",
    subtitle: "Intensive Botanical Treatment for Thinning Hair",
    duration: "75 Mins",
    priceMUR: 2900,
    priceUSD: 65,
    badge: "Hair Growth",
    requiresDoctorConsultation: false,
    image: "assets/images/facial.jpg",
    description: "Bhringraj, known in Ayurveda as the 'Ruler of Hair', is combined with Methi (Fenugreek), Shikakai, and Jatamansi oils to reactivate dormant hair follicles and curb excessive shedding.",
    benefits: [
      "Significantly slows and stops excessive hair shedding",
      "Stimulates new follicle growth and increases hair density",
      "Strengthens the hair shaft against breakage",
      "Balances scalp sebum and clears follicle blockages"
    ],
    doshaFocus: "Pitta Balance",
    recommendedFor: "Thinning hair, post-stress hair loss, receding hairline"
  },
  {
    id: "hair-04",
    categoryId: "hair-care",
    categoryName: "Hair Care",
    name: "Neem & Tea Tree Dandruff Clarifying Care",
    subtitle: "Anti-Microbial Scalp Exfoliation & Balancing Pack",
    duration: "60 Mins",
    priceMUR: 2400,
    priceUSD: 53,
    badge: "Scalp Health",
    requiresDoctorConsultation: false,
    image: "assets/images/facial.jpg",
    description: "An intensive scalp purifying therapy formulated with fresh Neem extract, Tea Tree oil, Lemon peel, and camphor to combat stubborn dandruff, scalp itchiness, and flakiness.",
    benefits: [
      "Eliminates fungal and microbial causes of dandruff",
      "Relieves chronic scalp itching and redness instantly",
      "Gently exfoliates dead skin flakes from hair roots",
      "Restores balanced scalp microflora"
    ],
    doshaFocus: "Kapha & Pitta Clarifying",
    recommendedFor: "Dandruff, itchy scalp, seborrhea, flaky scalp"
  },

  // =========================================================================
  // 7. HAND & FOOT CARE
  // =========================================================================
  {
    id: "handfoot-01",
    categoryId: "hand-foot-care",
    categoryName: "Hand & Foot Care",
    name: "Padabhyanga Deluxe Foot Reflex Ritual",
    subtitle: "Ayurvedic Foot Massage with Warm Kansa Bowl",
    duration: "60 Mins",
    priceMUR: 2300,
    priceUSD: 51,
    badge: "Ultimate Relaxation",
    requiresDoctorConsultation: false,
    image: "assets/images/hero.jpg",
    description: "Begins with a warm botanical foot bath infused with Epsom salts and fresh petals, followed by an intricate reflexology massage on Marma points using a traditional pure Kansa bronze bowl.",
    benefits: [
      "Draws excess body heat (Pitta) through soles of feet",
      "Relieves tired, aching feet, plantar strain & swollen ankles",
      "Promotes deep, restful sleep and soothes anxiety",
      "Softens cracked heels and restores supple skin"
    ],
    doshaFocus: "Pitta & Vata Calming",
    recommendedFor: "Tired legs, travelers, standing workers, high body heat"
  },
  {
    id: "handfoot-02",
    categoryId: "hand-foot-care",
    categoryName: "Hand & Foot Care",
    name: "Hastabhyanga Royal Hand Treatment",
    subtitle: "Nourishing Herbal Hand & Arm Therapy",
    duration: "45 Mins",
    priceMUR: 1900,
    priceUSD: 42,
    badge: "Nourishing",
    requiresDoctorConsultation: false,
    image: "assets/images/facial.jpg",
    description: "An indulgent treatment for hard-working hands. Includes an exfoliation with almond-saffron scrub, warm herbal compress, Marma point hand massage, and an intensely hydrating shea-ghee balm.",
    benefits: [
      "Relieves repetitive strain and wrist tendon tension",
      "Deeply hydrates dry hands and cuticle beds",
      "Fades sun spots and hyperpigmentation on hands",
      "Leaves hands velvet soft and pain-free"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Typists, artisans, dry cracked hands, wrist stiffness"
  },
  {
    id: "handfoot-03",
    categoryId: "hand-foot-care",
    categoryName: "Hand & Foot Care",
    name: "Botanical Ayurvedic Spa Pedicure & Manicure",
    subtitle: "Full Nail Grooming with Pure Herbal Infusions",
    duration: "75 Mins",
    priceMUR: 2800,
    priceUSD: 62,
    badge: "Full Pampering",
    requiresDoctorConsultation: false,
    image: "assets/images/facial.jpg",
    description: "Complete holistic grooming for both hands and feet using natural chemical-free products. Includes herbal soaking, cuticle care, natural scrubbing, clay mask, and Marma point massage.",
    benefits: [
      "Complete aesthetic and therapeutic nail and skin care",
      "Deeply cleanses and purifies nail beds and heels",
      "Improves blood circulation in extremities",
      "Leaves nails naturally polished and radiant"
    ],
    doshaFocus: "Complete Care",
    recommendedFor: "Full grooming, special occasions, routine self-care"
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
