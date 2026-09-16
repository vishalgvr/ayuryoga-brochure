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
  { 
    id: "ayurveda", 
    name: "Ayurveda", 
    icon: "flower-lotus",
    subcategories: [
      { id: "consultation", name: "Consultation", icon: "user-doctor" },
      // { id: "services", name: "Services", icon: "shield-plus" }, // Temporarily hidden
      { id: "therapies", name: "Therapies", icon: "sparkle" }
    ]
  },
  { 
    id: "wellness", 
    name: "Wellness", 
    icon: "heart-pulse",
    subcategories: [
      { id: "western", name: "Western", icon: "sparkle" },
      { id: "ayurveda", name: "Ayurveda", icon: "flower-lotus" }
    ]
  },
  { 
    id: "beauty-care", 
    name: "Beauty Care", 
    icon: "sparkle",
    subcategories: [
      { id: "face-care", name: "Face Care", icon: "smile" },
      { id: "body-care", name: "Body Care", icon: "shield-check" },
      { id: "hair-care", name: "Hair Care", icon: "feather" },
      { id: "hand-foot-care", name: "Hand & Foot Care", icon: "hand" }
    ]
  }
];

const AYURVEDA_CONSULTATION_CONDITIONS = [
  {
    name: "Shoulder Pain & Frozen Shoulder",
    sanskrit: "Apabahuka",
    icon: "activity",
    image: "assets/images/Diseases/shoulder-pain-frozen-shoulder-6aaa49dd1bef3.webp",
    desc: "Rotator cuff tendinitis, bursitis, and severe cervical-shoulder mobility restrictions."
  },
  {
    name: "Stress & Mental Fatigue",
    sanskrit: "Manasika Shrama",
    icon: "brain",
    image: "assets/images/Diseases/stress-mental-fatigue-6aaa49dd49046.webp",
    desc: "Executive burnout, anxiety, chronic insomnia, and nervous system exhaustion."
  },
  {
    name: "Constipation & Gut Health",
    sanskrit: "Vibandha / Agnimandya",
    icon: "flame",
    image: "assets/images/Diseases/constipation-gut-health-6aaa49de2df9e.webp",
    desc: "Sluggish bowels, IBS, hyperacidity, bloating, and metabolic Ama toxicity."
  },
  {
    name: "Rheumatoid Arthritis",
    sanskrit: "Amavata",
    icon: "shield-alert",
    image: "assets/images/Diseases/rheumatoid-arthritis-6aaa49e171272.webp",
    desc: "Severe morning stiffness, joint swelling, synovial inflammation, and cartilage pain."
  },
  {
    name: "Old Age Care & Longevity",
    sanskrit: "Vayasthapana / Rasayana",
    icon: "heart",
    image: "assets/images/Diseases/old-age-care-longevity-6aaa49dfc09ac.webp",
    desc: "Senior mobility, degenerative joint care, memory vitality, and whole-body stamina for 55+."
  },
  {
    name: "Obesity Management",
    sanskrit: "Sthoulya / Medoroga",
    icon: "scale",
    image: "assets/images/Diseases/obesity-management-6aaa49df0da10.webp",
    desc: "Lipid metabolism imbalances, subcutaneous fat, water retention, and sluggish thyroid/Agni."
  },
  {
    name: "Pain Management",
    sanskrit: "Shoola Prashamana",
    icon: "zap",
    image: "assets/images/Diseases/pain-management-6aaa49dfd7e41.webp",
    desc: "Chronic lower backache, cervical spondylosis, myalgia, ligament sprains, and sports injuries."
  },
  {
    name: "Arthritis Care (Osteoarthritis)",
    sanskrit: "Sandhigata Vata",
    icon: "bone",
    image: "assets/images/Diseases/arthritis-care-osteoarthritis-6aaa49ddf260a.webp",
    desc: "Knee friction, crepitus, synovial fluid depletion, and degenerative joint wear-and-tear."
  },
  {
    name: "Sciatica Pain",
    sanskrit: "Gridhrasi",
    icon: "navigation",
    image: "assets/images/Diseases/sciatica-pain-6aaa49e18f9b0.webp",
    desc: "Shooting nerve pain radiating down the leg, herniated lumbar disc, and numbness."
  },
  {
    name: "Respiratory Problems & Sinusitis",
    sanskrit: "Pranavaha Sroto Roga",
    icon: "wind",
    image: "assets/images/Diseases/respiratory-problems-sinusitis-6aaa49e0bb810.webp",
    desc: "Chronic sinusitis, bronchial asthma, allergic rhinitis, and pulmonary congestion."
  },
  {
    name: "Diabetics & Glycemic Control",
    sanskrit: "Prameha / Madhumeha",
    icon: "droplet",
    image: "assets/images/Diseases/diabetics-glycemic-control-6aaa49ded342b.webp",
    desc: "Metabolic sugar dysregulation, pre-diabetes, diabetic neuropathy, and sluggish vitality."
  },
  {
    name: "Panchakarma Detoxification",
    sanskrit: "Shodhana / Rasayana",
    icon: "sparkles",
    image: "assets/images/Diseases/panchakarma-detoxification-6aaa49e09d4e0.webp",
    desc: "Deep cellular toxin elimination, biological Agni reset, and systemic immunity renewal."
  },
  {
    name: "Gynaec Issues & Menstrual Problems",
    sanskrit: "Stree Roga / Yonivyapad",
    icon: "heart",
    image: "assets/images/Diseases/Gynaec Issues & Menstrual Problems.jpg",
    desc: "Irregular cycles, dysmenorrhea, PCOS/PCOD hormonal imbalances, pelvic congestion, and menopause care."
  }
];

const AYURVEDA_DOCTORS = [
  {
    id: "doc-anoop",
    name: "Dr. Anoop",
    title: "Dr. Anoop (BAMS)",
    designation: "Experienced Ayurvedic Physician & Panchakarma Specialist (Kerala)",
    experience: "5+ Years Experience • Kerala, India",
    image: "assets/images/doc_anoop.webp",
    badge: "Experienced Doctor from Kerala",
    sanctuaries: ["Moka"],
    phone: "+230 5807 4009",
    whatsappPhone: "23058074009",
    specializations: [
      "Pulse Diagnosis (Nadi Pariksha)",
      "Panchakarma Detox & Chronic Disease Reversal",
      "Spinal & Musculoskeletal Rehabilitation",
      "Stress, Anxiety & Insomnia Protocols"
    ],
    bio: "Dr. Anoop is an experienced Ayurvedic physician from Kerala with over 5 years of classical clinical practice. Renowned for his diagnostic acumen in Nadi Pariksha (Pulse Diagnosis), Dr. Anoop designs personalized therapeutic blueprints that address root-cause constitutional imbalances, restoring cellular vitality and systemic harmony.",
    consultationIncludes: [
      "Comprehensive Prakriti (Body Constitution) & Dosha Evaluation",
      "Nadi Pariksha (Traditional Radial Pulse Diagnosis)",
      "Tailored Classical Herbal Medicines & Decoctions Prescription",
      "Personalized Ayurvedic Diet & Dinacharya (Daily Routine) Blueprint",
      "Targeted Panchakarma & Inpatient Treatment Recommendations"
    ]
  },
  {
    id: "doc-naveen",
    name: "Dr. Naveen",
    title: "Dr. Naveen (BAMS)",
    designation: "Experienced Ayurvedic Consultant & Holistic Medicine Specialist (Kerala)",
    experience: "4+ Years Experience • Kerala, India",
    image: "assets/images/doc_naveen.webp",
    badge: "Experienced Doctor from Kerala",
    sanctuaries: ["Grand Baie"],
    phone: "+230 5942 9564",
    whatsappPhone: "23059429564",
    specializations: [
      "Rheumatoid Arthritis & Joint Pain Management",
      "Digestive & Metabolic Disorders (Agni & Ama Therapy)",
      "Geriatric Vitality & Healthy Aging (Vayasthapana)",
      "Allergic & Dermatological Care"
    ],
    bio: "Dr. Naveen is an experienced Ayurvedic physician from Kerala with over 4 years of clinical practice, recognized for his compassionate, patient-centered care and integrative clinical therapeutics. He specializes in chronic arthritic pain resolution, gastrointestinal restoration, and restorative geriatric protocols, bringing enduring relief through authentic Kerala Ayurveda.",
    consultationIncludes: [
      "Holistic Clinical Health Assessment & Lifestyle Review",
      "Musculoskeletal & Joint Mobility Analysis",
      "Customized Herbal Remedies & Natural Pharmacology",
      "Metabolic Gut Detox & Digestive Fire (Agni) Restoration",
      "Long-term Preventive Health & Rejuvenation Schedule"
    ]
  }
];

const AYURVEDA_SERVICES = [
  {
    id: "serv-shoulder",
    tag: "PAIN MANAGEMENT",
    title: "Shoulder Pain",
    question: "Shoulder Pain or Frozen Shoulder?",
    highlight: "Unlock Your Frozen Shoulder with Ayurvedic Treatments",
    lead: "Targeted Ayurvedic pain management to melt adhesions, relieve nerve compression, and restore pain-free shoulder mobility. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/shoulder-pain-frozen-shoulder-6aaa49dd1bef3.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Frozen shoulder (Apabahuka), rotator cuff tendinitis, bursitis, cervical-shoulder stiffness",
    description: "Our specialized Ayurvedic shoulder protocol combines deep medicinal oil pooling, rhythmic Marma point release, and hot citrus-herbal boluses (Naranga Kizhi) to dissolve calcifications, lubricate joints, and restore natural elevation and rotation without invasive injections.",
    features: [
      "Targeted Marma point lubrication & musculoskeletal release",
      "Anti-inflammatory warm herbal Kizhi poultice fomentation",
      "Restores full shoulder elevation & rotation smoothly",
      "Herbal remedies for deep tendon and nerve rejuvenation"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-stress",
    tag: "MENTAL WELLBEING",
    title: "Stress",
    question: "Struggling with Stress & Mental Fatigue?",
    highlight: "Let Ayurveda Show You the Path to Inner Calm & Resilience",
    lead: "Deep psychosomatic restoration, nervous system nourishment, and emotional calm through authentic Kerala Ayurveda rituals. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/stress-mental-fatigue-6aaa49dd49046.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Chronic stress, anxiety, insomnia, executive burnout, tension headaches, cognitive exhaustion",
    description: "Ayurveda approaches stress by calming aggravated Prana Vata and cooling excess Pitta in cranial channels. Through continuous third-eye forehead streaming (Shirodhara), cooling buttermilk cascades (Takradhara), and herbal crown masques (Thalapothichil), we guide your mind into deep tranquility.",
    features: [
      "Continuous third-eye Shirodhara with medicated herbal oils",
      "Cooling Thalapothichil herbal crown masques to soothe nerves",
      "Calms hyper-aroused nervous system and lowers cortisol",
      "Restores restful, restorative REM sleep and emotional clarity"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-constipation",
    tag: "GUT HEALTH & DETOX",
    title: "Constipation",
    question: "Need Relief from Constipation & Sluggish Bowels?",
    highlight: "Ayurveda for Upset Stomach & Gastrointestinal Health",
    lead: "Rebalance your digestive fire (Agni), eliminate accumulated toxic waste (Ama), and restore smooth, natural bowel regularity. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/constipation-gut-health-6aaa49de2df9e.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Chronic constipation, sluggish bowels, IBS, acid reflux, bloating, metabolic toxicity",
    description: "In Ayurveda, gut health is the foundation of all vitality. When digestive fire (Agni) is impaired, toxic Ama accumulates in the colon. Our clinical gastrointestinal protocols utilize doctor-prescribed herbal decoctions, gentle Panchakarma purification, and internal oleation to re-establish effortless daily elimination.",
    features: [
      "Root-cause gastrointestinal purification & channel detoxification",
      "Medicated herbal Kashayams and Triphala bowel harmonizing regimens",
      "Lubricating Sneha Basti enemas to heal chronic intestinal dryness",
      "Personalized nutritional guidelines tailored to your metabolic constitution"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-rheumatoid",
    tag: "RHEUMATOLOGY & JOINTS",
    title: "Rheumatoid Arthritis",
    question: "Suffering from Joint Swelling & Morning Stiffness?",
    highlight: "Specialized Ayurvedic Treatments for Rheumatoid Arthritis (Amavata)",
    lead: "Targeted clinical therapies to neutralize inflammatory Ama toxins, eliminate severe morning stiffness, and preserve joint cartilage. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/rheumatoid-arthritis-6aaa49e171272.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Rheumatoid arthritis (Amavata), inflammatory polyarthritis, morning stiffness, joint effusions",
    description: "Rheumatoid Arthritis requires dual action: clearing systemic metabolic Ama and pacifying localized Vata inflammation. We employ dry heated sand bolus fomentation (Manal Kizhi), anti-inflammatory herbal pastes (Lepanam), and specialized Kashaya Dhara streams to rapidly drain swelling and dissolve stiffness.",
    features: [
      "Purified heated sand (Manal Kizhi) dry fomentation for joint swelling",
      "Warm medicinal herbal powder bolus (Podi Kizhi) to eliminate joint toxins",
      "Topical herbal Lepanam wraps to rapidly extract localized inflammatory heat",
      "Strengthens synovial cartilage, tendons, and restores pain-free movement"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-oldage",
    tag: "GERIATRIC REJUVENATION",
    title: "Old Age Care through Ayurveda",
    question: "Looking for Senior Vitality, Mobility & Longevity?",
    highlight: "Holistic Care to Restore Balance, Vitality & Mobility for Seniors",
    lead: "Our holistic approach aims to restore balance, improve vitality, and address age-related issues such as joint pain, mobility, digestion, and mental well-being. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/old-age-care-longevity-6aaa49dfc09ac.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Adults 55+, degenerative joint pain, muscular weakness, fatigue, memory decline, longevity",
    description: "Classical Ayurvedic Rasayana and Vayasthapana protocols are designed specifically for senior wellness. By deeply lubricating aging joints, strengthening bone tissue (Asthi Dhatu), nourishing neurological pathways, and optimizing gentle digestion, we empower our seniors to enjoy vibrant, energetic, and independent lives.",
    features: [
      "Tailored Wellness Plans crafted for senior physiological needs",
      "Joint & Mobility Care to restore safe, steady, and comfortable movement",
      "Herbal Supplements for bone density, cardiovascular health & cognitive clarity",
      "Panchakarma Detox to gently rebuild deep tissue resilience (Ojas)"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-obesity",
    tag: "METABOLIC & WEIGHT RESET",
    title: "Obesity Management",
    question: "Struggling with Stubborn Weight & Slow Metabolism?",
    highlight: "Ayurvedic Medoroga Protocols for Natural Fat Metabolism",
    lead: "Accelerate lipid breakdown, clear lymphatic congestion, and balance Kapha-Medo Dhatu for sustainable, healthy weight reduction. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/obesity-management-6aaa49df0da10.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Excess weight, sluggish metabolism, water retention, visceral fat, cellulite",
    description: "Ayurvedic obesity management utilizes vigorous dry herbal powder massage (Udwarthanam) with triphala, musta, and kolakulathadi powders performed in upward strokes against hair follicles. Combined with medicated steam detox (Bashpa Sweda) and internal metabolic herbs, it breaks down subcutaneous fat and tones the entire body.",
    features: [
      "Vigorous dry herbal powder Udwarthanam for localized fat mobilization",
      "Medicated herbal steam (Bashpa Sweda) to flush liquefied toxins",
      "Agni-stimulating herbal Kashayams to boost basal metabolic rate",
      "Customized Ayurvedic dietary plan for lasting weight equilibrium"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-pain",
    tag: "PAIN REHABILITATION",
    title: "Pain Management through Ayurveda",
    question: "Suffering from Chronic Musculoskeletal & Spinal Pain?",
    highlight: "Comprehensive Root-Cause Pain Relief & Tissue Healing",
    lead: "Non-invasive, drug-free holistic pain resolution targeting chronic back pain, neck stiffness, tendonitis, and muscular spasms. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/pain-management-6aaa49dfd7e41.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Chronic low back pain, cervical spondylosis, myalgia, ligament sprains, post-injury rehabilitation",
    description: "Ayurvedic pain management treats localized Vata aggravation and inflammation through herbal oil reservoirs (Kati, Greeva & Janu Vasti), steaming herbal leaf boluses (Ela Kizhi), and specialized Marma stimulation. This stimulates local blood circulation, releases muscle spasms, and accelerates natural tissue healing.",
    features: [
      "Warm medicated herbal oil reservoirs over painful spinal segments",
      "Steaming Ela Kizhi herbal leaf poultice fomentation for deep spasms",
      "Marma point therapy to relieve neuro-muscular entrapments",
      "Internal anti-inflammatory Ayurvedic Guggulu and Rasna decoctions"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-arthritis-care",
    tag: "OSTEOARTHRITIS & JOINTS",
    title: "Arthritis Care",
    question: "Experiencing Knee Friction, Joint Degeneration & Stiffness?",
    highlight: "Classical Sandhigata Vata Protocols for Cartilage & Mobility",
    lead: "Deeply nourish depleted synovial fluid, rebuild joint cushioning, and reduce chronic knee and hip joint wear-and-tear. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/arthritis-care-osteoarthritis-6aaa49ddf260a.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Osteoarthritis (Sandhigata Vata), knee crepitus, cartilage erosion, restricted joint flexion",
    description: "Degenerative osteoarthritis occurs when aggravated Vata causes joint dryness and cartilage breakdown. Our clinical Arthritis Care protocol utilizes localized Janu Vasti (warm herbal oil reservoirs on knee joints), continuous medicated milk pouring (Ksheera Dhara), and Njavara rice fomentation to rebuild joint fluid, reduce friction, and eliminate pain.",
    features: [
      "Localized Janu Vasti warm medicinal oil retention for knee regeneration",
      "Soothing Njavara rice milk poultices to strengthen joint ligaments",
      "Rebuilds depleted synovial fluid and cushions aging cartilage",
      "Restores smooth, pain-free joint bending, climbing, and walking"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-sciatica",
    tag: "SPINE & NERVE CARE",
    title: "Sciatica Pain",
    question: "Shooting Nerve Pain Radiating Down Your Leg?",
    highlight: "Specialized Gridhrasi Protocols for Sciatic Nerve Decompression",
    lead: "Targeted Ayurvedic nerve therapy to soothe inflamed sciatic nerve roots, relieve lumbar disc compression, and restore walking ease. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/sciatica-pain-6aaa49e18f9b0.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Sciatica (Gridhrasi), herniated lumbar discs, piriformis syndrome, radiating leg numbness",
    description: "In Ayurveda, Sciatica is known as Gridhrasi. It causes severe shooting pain from the lower back through the buttocks down to the heel. Our clinical protocol combines localized Kati Vasti (medicated spinal oil reservoir), warm Podi Kizhi powder fomentation, and specialized herbal enemas (Sneha & Kashaya Basti) to relieve nerve pressure and regenerate nerve myelin.",
    features: [
      "Localized Kati Vasti oil reservoir to relieve lumbar root compression",
      "Warm herbal powder Podikizhi fomentation to clear nerve channel blockages",
      "Specialized Basti therapy to pacify systemic Vata and heal nerve irritation",
      "Eliminates shooting radiating pain, tingling, and lower limb numbness"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-respiratory",
    tag: "RESPIRATORY & SINUS",
    title: "Respiratory Problems",
    question: "Struggling with Sinusitis, Allergies, Bronchitis or Asthma?",
    highlight: "Ayurvedic Pranavaha Srotas Purification & Lung Vitality",
    lead: "Clear deep mucosal congestion, expand vital lung capacity, and soothe chronic respiratory allergies and sinus inflammation. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/respiratory-problems-sinusitis-6aaa49e0bb810.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Chronic sinusitis (Dushta Pratishyaya), bronchial asthma (Tamaka Shwasa), allergic rhinitis, cough",
    description: "Ayurvedic respiratory therapy purifies the Pranavaha Srotas (respiratory tract) by clearing accumulated Kapha mucus and inflammatory toxins. Through therapeutic nasal administration (Nasyam) of medicated herbal oils, medicated herbal smoke inhalation (Dhoomapanam), and herbal chest fomentation, we clear blocked sinus passages and boost respiratory immunity.",
    features: [
      "Therapeutic Nasyam nasal oil infusion to clear sinus and head congestion",
      "Warm herbal chest fomentation and gentle medicated steam inhalation",
      "Dhoomapanam medicated herbal smoking to disinfect respiratory channels",
      "Herbal Rasayanas (such as Agastya Haritaki) to strengthen pulmonary immunity"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-diabetics",
    tag: "METABOLIC & ENDOCRINE CARE",
    title: "Diabetics",
    question: "Seeking Natural Glycemic Control & Diabetic Vitality?",
    highlight: "Classical Ayurvedic Prameha Protocols for Blood Sugar Management",
    lead: "Comprehensive Ayurvedic protocols to enhance insulin sensitivity, purify metabolic channels (Srotas), prevent diabetic neuropathy, and restore metabolic balance. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/diabetics-glycemic-control-6aaa49ded342b.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Type 2 Diabetes (Prameha / Madhumeha), pre-diabetes, metabolic syndrome, diabetic neuropathy, lethargy",
    description: "In Ayurveda, diabetes is recognized as Prameha, primarily a metabolic disturbance of Kapha and Medo Dhatu (fat tissue). Our clinical diabetes care protocol combines personalized herbal Kashayams (including Nisha-Amalaki, Asanadi, and Vijaysar), channel-purifying Dhara streams, metabolic Udvarthanam, and therapeutic dietary regimens to optimize glucose metabolism and protect vital organs.",
    features: [
      "Customized herbal Kashayams & Nisha-Amalaki formulations for glycemic balance",
      "Therapeutic metabolic Udvarthanam and Dhara for fat and channel cleansing",
      "Neuropathy care and Padabhyangam to prevent micro-vascular complications",
      "Tailored Ayurvedic Dinacharya and nutritional blueprint for sustained vitality"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  },
  {
    id: "serv-panchakarma",
    tag: "CELLULAR DETOX & REJUVENATION",
    title: "Panchakarma Detoxification",
    question: "Need Deep Systemic Cleansing & Vitality Reset?",
    highlight: "Authentic 5-Stage Classical Panchakarma Purification",
    lead: "The supreme Ayurvedic detoxification methodology to expel deep-rooted Ama toxins, reset biological Agni, and rejuvenate cellular vitality. Administered strictly after Doctor Consultation.",
    image: "assets/images/Diseases/panchakarma-detoxification-6aaa49e09d4e0.webp",
    badge: "Doctor Consultation Mandatory",
    focus: "Deep metabolic toxicity (Ama), autoimmune vulnerability, chronic fatigue, metabolic reset, longevity",
    description: "Panchakarma is the pinnacle of classical Ayurvedic healing. Following personalized preparation (Poorvakarma) with internal ghee oleation (Snehapanam) and herbal steam (Swedana), the five classical cleansing procedures (Vamanam, Virechanam, Basti, Nasyam, and Raktamokshana) systematically dislodge and eliminate toxic waste from every cellular layer, resetting your body's self-healing intelligence.",
    features: [
      "Personalized 3-phase Panchakarma: Poorvakarma, Pradhanakarma & Paschatkarma",
      "Full internal cellular oleation and medicated steam channel dilation",
      "Doctor-monitored therapeutic purgation (Virechanam) and healing Basti enemas",
      "Deep immunity restoration (Rasayana) and biological age reversal (Ojas)"
    ],
    contacts: [
      { location: "Moka", phone: "58074009", display: "+230 5807 4009" },
      { location: "Grand Baie", phone: "59429564", display: "+230 5942 9564" }
    ]
  }
];

const AYURVEDA_TERMS = [
  {
    category: "General Policy",
    icon: "shield-check",
    items: [
      {
        title: "Health Disclosure",
        desc: "Guests are required to provide accurate information regarding their medical history, allergies, and physical conditions upon arrival."
      },
      {
        title: "Consultation",
        desc: "All Ayurvedic treatments are preceded by a consultation. The Chief Physician’s decision regarding the suitability of a treatment is final."
      },
      {
        title: "Age Requirement",
        desc: "Guests under 18 must be accompanied by a guardian."
      }
    ]
  },
  {
    category: "Liability & Valuables",
    icon: "lock",
    items: [
      {
        title: "Personal Property",
        desc: "The Centre is not responsible for the loss or damage of personal belongings. Please use the lockers or in-room safes provided."
      },
      {
        title: "Physical Limits",
        desc: "Guests participate in Yoga and Physical Therapy at their own risk. Please do not push beyond your physical comfort zone."
      }
    ]
  },
  {
    category: "Bookings & Cancellations",
    icon: "calendar-check",
    items: [
      {
        title: "Reservations",
        desc: "A booking is confirmed only upon receipt of the required advance deposit."
      },
      {
        title: "Cancellation",
        desc: "Cancellations made within 1 day of the arrival date."
      },
      {
        title: "No-Show",
        desc: "In case of a no-show, the total cost of the stay/treatment will be forfeited."
      }
    ]
  },
  {
    category: "Centre Etiquette",
    icon: "sparkles",
    items: [
      {
        title: "Punctuality",
        desc: "Please arrive 15 minutes prior to your scheduled treatment. Late arrivals may result in a shortened session to avoid inconveniencing the next guest."
      },
      {
        title: "Silence Zone",
        desc: "To maintain a healing environment, we request guests to keep noise levels to a minimum. Mobile phones must be on silent mode in all therapy and yoga areas."
      },
      {
        title: "Dress Code",
        desc: "Please use the provided clothes within the spa and treatment zones."
      }
    ]
  },
  {
    category: "Health & Safety",
    icon: "heart-pulse",
    items: [
      {
        title: "Therapeutic Response",
        desc: "While Ayurveda is natural, some treatments (like Panchakarma) may cause temporary “healing crises” (tiredness or mild headaches). Please report any discomfort to your therapist immediately."
      },
      {
        title: "Contraindications",
        desc: "Treatments will not be administered to guests under the influence of alcohol or drugs."
      },
      {
        title: "Pregnancy",
        desc: "Expectant mothers must inform the front desk to ensure treatments are modified for safety."
      }
    ]
  }
];

const TREATMENTS_DATA = [
  // =========================================================================
  // 1. AYURVEDA (Classical Treatments - Administered After Doctor Consultation)
  // Sub-classified into: Abhyangam, Kizhi, Dhara, Others
  // =========================================================================
  {
    id: "ayur-04",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    therapyType: "abhyangam",
    therapyTypeName: "Abhyangam",
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
    therapyType: "kizhi",
    therapyTypeName: "Kizhi",
    name: "Naranga Kizhi",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "dhara",
    therapyTypeName: "Dhara",
    name: "Thakradhara",
    subtitle: "Continuous Medicated Buttermilk Flow Therapy (Head & Body)",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "abhyangam",
    therapyTypeName: "Abhyangam",
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
    therapyType: "abhyangam",
    therapyTypeName: "Abhyangam",
    name: "Siroabhyangam",
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
    therapyType: "others",
    therapyTypeName: "Others",
    name: "Bashpa Sweda",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    id: "ayur-22",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "kizhi",
    therapyTypeName: "Kizhi",
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
    id: "ayur-32",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    therapyType: "dhara",
    therapyTypeName: "Dhara",
    name: "Ksheeradhara",
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
    therapyType: "dhara",
    therapyTypeName: "Dhara",
    name: "Shirodhara",
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
    therapyType: "dhara",
    therapyTypeName: "Dhara",
    name: "Pizhichil",
    subtitle: "Therapeutic Medicated Stream Body Infusion (Snehadhara)",
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
    therapyType: "dhara",
    therapyTypeName: "Dhara",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    therapyType: "others",
    therapyTypeName: "Others",
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
    id: "ayur-40",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    therapyType: "kizhi",
    therapyTypeName: "Kizhi",
    name: "Ela Kizhi",
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
    therapyType: "others",
    therapyTypeName: "Others",
    name: "Vamanam",
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
    therapyType: "kizhi",
    therapyTypeName: "Kizhi",
    name: "Podikizhi",
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
    id: "ayur-avikizhi",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    therapyType: "kizhi",
    therapyTypeName: "Kizhi",
    name: "Avikizhi",
    subtitle: "Classical Thermal Medicated Herbal Bolus Fomentation",
    duration: "45 min",
    priceMUR: 1440,
    priceUSD: 32,
    badge: "Joint & Muscle Relief",
    requiresDoctorConsultation: true,
    image: "assets/images/Ayurveda/Avikizhi.webp",
    description: "Classical thermal therapy using heated cloth boluses packed with medicated herbal powders, applied systematically to relieve localized swelling and pain.",
    benefits: [
      "Medicated Herbal Bolus",
      "Therapeutic Heat",
      "Joint & Muscle Soothing",
      "Anti-Inflammatory Action"
    ],
    doshaFocus: "Vata & Kapha Pacifying",
    recommendedFor: "Joint pain, stiffness, localized swelling, muscular soreness"
  },
  {
    id: "ayur-43",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    therapyType: "dhara",
    therapyTypeName: "Dhara",
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
    therapyType: "dhara",
    therapyTypeName: "Dhara",
    name: "Thakra Dhara",
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
    therapyType: "dhara",
    therapyTypeName: "Dhara",
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
    therapyType: "dhara",
    therapyTypeName: "Dhara",
    name: "Ksheera Dhara",
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
    therapyType: "dhara",
    therapyTypeName: "Dhara",
    name: "Thakra Dhara",
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
    therapyType: "kizhi",
    therapyTypeName: "Kizhi",
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
    therapyType: "kizhi",
    therapyTypeName: "Kizhi",
    name: "Njavara Kizhi",
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
    id: "ayur-51",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    therapyType: "kizhi",
    therapyTypeName: "Kizhi",
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
    therapyType: "others",
    therapyTypeName: "Others",
    name: "Netra Sekam",
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
    therapyType: "abhyangam",
    therapyTypeName: "Abhyangam",
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
    id: "ayur-60",
    categoryId: "ayurveda",
    categoryName: "Ayurveda",
    therapyType: "others",
    therapyTypeName: "Others",
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

  // =========================================================================
  // 2. WELLNESS
  // =========================================================================

  // --- 120 Minutes Treatments ---
  {
    id: "well-17",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Ayur Soukya",
    subtitle: "Master 4-in-1 Ayurvedic Wellness Journey",
    duration: "120 Minutes",
    priceMUR: 3600,
    priceUSD: 80,
    badge: "Master 4-in-1 Journey",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Ayur Soukya - Complete Package.webp",
    description: "Master Ayurvedic wellness package featuring 4 powerful modalities: Abhyangam body massage, warm herbal Kizhi, soothing Dhara, and detoxifying steam bath.",
    benefits: [
      "Abhyangam Massage",
      "Herbal Kizhi Fermentation",
      "Soothing Dhara Stream",
      "Medicated Herbal Steam"
    ],
    doshaFocus: "Tridoshic Supreme Reset",
    recommendedFor: "Total wellness immersion, deep tissue cleansing, supreme detoxification"
  },
  {
    id: "well-19",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Punarjeeva",
    subtitle: "2-Hour Synchronized Abhyangam, Kizhi & Herbal Facial",
    duration: "120 Minutes",
    priceMUR: 3600,
    priceUSD: 80,
    badge: "2-Hour Sensory Revival",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Punarjeeva (Sensory Rejuvenation).webp",
    description: "Complete two-hour sensory revival package incorporating synchronized Abhyangam, warm Kizhi compresses, and revitalizing herbal facial care for whole-body vitality.",
    benefits: [
      "2-Hour Complete Journey",
      "Abhyangam Massage",
      "Warm Herbal Kizhi",
      "Rejuvenating Facial Care"
    ],
    doshaFocus: "Tridoshic Vitality",
    recommendedFor: "Exhaustion, loss of luster, full body revitalisation, sensory reset"
  },

  // --- 90 Minutes Treatments ---
  {
    id: "well-vayasthapana",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Vayasthapana (Geriatric Vitality 55+)",
    subtitle: "Geriatric Rejuvenation & Vitality Protocol for Seniors",
    duration: "90 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Senior Vitality",
    requiresDoctorConsultation: false,
    image: "assets/images/Ayurveda/Vayasthapana.webp",
    description: "A specialized geriatric therapy designed to nourish aging tissues, lubricate degenerative joints, boost immunity, and support cognitive vitality in adults 55 and above.",
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
    id: "well-01",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Navajeevan",
    subtitle: "Restorative Renewal & Vital Energy Awakening",
    duration: "90 Minutes",
    priceMUR: 2700,
    priceUSD: 60,
    badge: "Vital Energy Awakening",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Navajeevan.webp",
    description: "Restorative renewal therapy formulated to awaken vital energy (Prana), ease chronic fatigue, and balance the three Doshas through synchronized bodywork.",
    benefits: [
      "Prana-Awakening Abhyanga",
      "Herbal Pouch Stimulation",
      "Marma Energy Balancing",
      "Herbal Compress"
    ],
    doshaFocus: "Tridoshic Balance",
    recommendedFor: "Chronic fatigue, low energy, burnout, vitality restoration"
  },
  {
    id: "well-08",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Aishwarya",
    subtitle: "Regal Full-Body Abhyanga & Opulent Royal Facial",
    duration: "90 Minutes",
    priceMUR: 2700,
    priceUSD: 60,
    badge: "Royal Luxury Pampering",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Aishwarya.webp",
    description: "Regal Ayurvedic pampering ritual combining a full-body nourishing Abhyanga massage with an opulent royal botanical facial for complete radiance.",
    benefits: [
      "Royal Abhyanga Massage",
      "Opulent Botanical Facial",
      "Marma Activation",
      "Glow & Tranquility"
    ],
    doshaFocus: "Tridoshic Royal Radiance",
    recommendedFor: "Complete pampering, total body relaxation, radiant facial glow, luxury wellness"
  },
  {
    id: "well-10",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Divya Dhara",
    subtitle: "Invigorating Herbal Bodywork & Forehead Decoction Stream",
    duration: "90 Minutes",
    priceMUR: 2700,
    priceUSD: 60,
    badge: "Stress & Anxiety Relief",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Divya Dhara - Antistress Therapy.webp",
    description: "Heavenly therapeutic ritual combining an invigorating whole-body herbal massage with continuous warm herbal decoction stream along the forehead.",
    benefits: [
      "Divya Abhyangam",
      "Warm Dhara Pouring",
      "Chakra Balancing",
      "Mental Tranquillity"
    ],
    doshaFocus: "Vata Pacifying",
    recommendedFor: "Executive burnout, anxiety, racing thoughts, deep emotional stress"
  },
  {
    id: "well-15",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Sanjeevani",
    subtitle: "Abhyangam, Hot Herbal Kizhi & Soothing Ksheeradhara Triad",
    duration: "90 Minutes",
    priceMUR: 2700,
    priceUSD: 60,
    badge: "Ultimate Triad Renewal",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Sanjeevani.webp",
    description: "Ultimate revitalizing triad combining warm Abhyangam massage, hot herbal pouch fermentation (Kizhi), and soothing medicated milk streaming (Ksheeradhara).",
    benefits: [
      "Full-Body Abhyanga",
      "Hot Herbal Kizhi",
      "Ksheeradhara Milk Stream",
      "Tissue Regeneration"
    ],
    doshaFocus: "Tridoshic Master Rejuvenation",
    recommendedFor: "Complete physical & mental rejuvenation, nerve renewal, deep fatigue"
  },
  {
    id: "well-16",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Manasamitram",
    subtitle: "Nourishing Body Massage & Herb-Infused Milk Dhara",
    duration: "90 Minutes",
    priceMUR: 2700,
    priceUSD: 60,
    badge: "Deep Sleep & Mental Calm",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Manasamitram - Abhyanga + Dhara.webp",
    description: "Deeply calming therapy combining warm medicated oil body massage with a continuous gentle stream of herb-infused warm milk over the third eye.",
    benefits: [
      "Warm Oil Abhyangam",
      "Ksheeradhara Stream",
      "Cooling Head Therapy",
      "Deep Sleep Induction"
    ],
    doshaFocus: "Pitta & Vata Soothing",
    recommendedFor: "Insomnia, hypertension, anxiety, mental exhaustion, high stress"
  },
  {
    id: "well-22",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Nirvana - Stress Buster",
    subtitle: "Abhyanga, Shirodhara & Warm Compresses Synergy",
    duration: "90 Minutes",
    priceMUR: 2700,
    priceUSD: 60,
    badge: "Ultimate Stress Buster",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Ayurvedic Nirvana - Stress Buster.webp",
    description: "Blissful multi-therapy session pairing full-body Abhyanga with Shirodhara and warm herbal compresses to dissolve accumulated nervous exhaustion.",
    benefits: [
      "Full-Body Abhyanga",
      "Shirodhara Stream",
      "Warm Herbal Compress",
      "Nervous System Reset"
    ],
    doshaFocus: "Vata & Pitta Calming",
    recommendedFor: "Chronic stress, nervous fatigue, mental overwhelm, burnout"
  },

  // --- 60 Minutes Treatments (Western & Ayurveda) ---
  {
    id: "well-21",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "western",
    subcategoryName: "Western",
    name: "Swedish Massage",
    subtitle: "Classic European Wellness Effleurage & Muscle Kneading",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Classic Relaxation",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Swedish Massage.webp",
    description: "Classic European wellness massage using long flowing effleurage, gentle kneading, and rhythmic friction to enhance circulation and release muscular stress.",
    benefits: [
      "Flowing Effleurage",
      "Gentle Muscle Kneading",
      "Circulation Boost",
      "Physical Relaxation"
    ],
    doshaFocus: "Stress & Fatigue Relief",
    recommendedFor: "General stress, everyday muscular tightness, circulation enhancement"
  },
  {
    id: "well-27",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "western",
    subcategoryName: "Western",
    name: "Deep Tissue Massage",
    subtitle: "Targeted Deep Pressure & Myofascial Knot Release",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Trigger Point Therapy",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Deep Tissue Massage.webp",
    description: "Intense therapeutic massage focusing on deeper layers of muscle and connective tissue to release chronic knotting, adhesions, and postural tension.",
    benefits: [
      "Targeted Deep Pressure",
      "Trigger Point Release",
      "Myofascial Relaxation",
      "Circulation Boosting"
    ],
    doshaFocus: "Postural Tension Relief",
    recommendedFor: "Desk workers, athletes, chronic neck & upper back tightness"
  },
  {
    id: "well-31",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "western",
    subcategoryName: "Western",
    name: "Aroma Therapy",
    subtitle: "Pure Botanical Essential Oils & Gentle Lymphatic Strokes",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Aromatherapy Bliss",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Aroma Therapy.webp",
    description: "Gentle, rhythmic wellness massage infused with therapeutic pure essential oils to harmonize mood, relieve anxiety, and deeply hydrate the skin.",
    benefits: [
      "Botanical Essential Oils",
      "Gentle Lymphatic Strokes",
      "Aromatherapy Inhalation",
      "Complete Mind-Body Calm"
    ],
    doshaFocus: "Emotional Equilibrium",
    recommendedFor: "Mood balance, gentle relaxation, sensitive skin, aromatherapy enthusiasts"
  },
  {
    id: "well-32",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "western",
    subcategoryName: "Western",
    name: "Stone Massage",
    subtitle: "Warm Basalt Thermotherapy & Deep Muscular De-Stressing",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Basalt Thermotherapy",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Stone Massage.webp",
    description: "Luxurious thermotherapy using smooth heated basalt stones placed on key energy centers to melt stubborn muscular tightness and induce deep relaxation.",
    benefits: [
      "Heated Basalt Stones",
      "Thermal Energy Balancing",
      "Warm Oil Sliding Strokes",
      "Deep Muscle De-Stressing"
    ],
    doshaFocus: "Vata & Kapha Melting",
    recommendedFor: "Deep muscular tension, cold constitution, poor circulation, deep relaxation"
  },
  {
    id: "well-23",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "western",
    subcategoryName: "Western",
    name: "Bamboo Massage",
    subtitle: "Warm Organic Bamboo Deep-Tissue Fascial Release",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Deep Muscle Release",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Bamboo Massage.webp",
    description: "Innovative deep-tissue technique using warm, smooth organic bamboo stalks to roll and knead tight muscle groups, relieving stubborn stiffness.",
    benefits: [
      "Warm Bamboo Rollers",
      "Connective Tissue Kneading",
      "Fascial Release",
      "Blood Flow Enhancement"
    ],
    doshaFocus: "Kapha & Vata Pacifying",
    recommendedFor: "Deep muscular knots, sports recovery, leg and back stiffness"
  },
  {
    id: "well-02",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Ayurvedic Body Scrub",
    subtitle: "Exfoliating Botanical Udvarthanam & Lymphatic Glow",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Exfoliation & Glow",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Ayurvedic Body Scrub Local.webp",
    description: "Exfoliating full-body ritual using freshly blended local herbs, grains, and botanical oils (Udvarthanam) to refine skin texture and stimulate lymphatic drainage.",
    benefits: [
      "Botanical Herbal Scrub",
      "Whole-Body Exfoliation",
      "Lymphatic Stimulation",
      "Nourishing Herbal Wash"
    ],
    doshaFocus: "Kapha & Pitta Balancing",
    recommendedFor: "Dull skin, sluggish circulation, dead cell buildup, skin texture refinement"
  },
  {
    id: "well-18",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Manasanthi",
    subtitle: "Shiro Abhyangam & Medicated Herbal Milk Pour",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Tranquil Mind Reset",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Manasanthi - Anti Stress Therapy.webp",
    description: "Tranquil mental rejuvenation therapy combining restorative Shiro Abhyangam head massage with gentle Ksheeradhara medicated herbal milk streaming.",
    benefits: [
      "Herbal Head Massage",
      "Ksheeradhara Milk Pour",
      "Mental Decompression",
      "Sensory Calming"
    ],
    doshaFocus: "Pitta & Vata Calming",
    recommendedFor: "Headaches, sensory overload, mental tension, eye strain, restlessness"
  },
  {
    id: "well-25",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Rujahari",
    subtitle: "Specialized Deep Pressure & Pain-Relieving Herbal Oils",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Chronic Pain Relief",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Rujahari - Pain Relieving Massage.webp",
    description: "Specialized therapeutic massage utilizing pain-relieving herbal oils and targeted pressure techniques to ease chronic joint aches and muscular stiffness.",
    benefits: [
      "Pain-Relieving Herbal Oils",
      "Deep Tissue Manipulation",
      "Joint Flexibility Work",
      "Therapeutic Warmth"
    ],
    doshaFocus: "Vata Pain Relief",
    recommendedFor: "Joint aches, chronic back discomfort, stiff neck, shoulder tightness"
  },
  {
    id: "well-26",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Ayur Relax",
    subtitle: "Classical Abhyanga Followed by Aromatic Herbal Steam",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Relaxation & Steam Detox",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Ayur Relax - Abhyangam + Steam.webp",
    description: "A harmonious combination of classical Abhyanga body massage followed by an aromatic herbal steam bath to eliminate toxins and ease bodily tension.",
    benefits: [
      "Full-Body Abhyangam",
      "Herbal Steam Bath (Swedana)",
      "Toxin Detoxification",
      "Vital Energy Balance"
    ],
    doshaFocus: "Vata & Kapha Harmonizing",
    recommendedFor: "Post-travel stiffness, body heaviness, deep relaxation, detoxification"
  },
  {
    id: "well-28",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Head, Neck, Shoulder & Foot Reflexology",
    subtitle: "Comprehensive Upper Body & Vital Foot Pressure Points",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Upper Body & Foot Care",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Head - Neck - Shoulder & Foot Reflexology.webp",
    description: "Comprehensive upper body and reflexology treatment targeting stress-holding zones in the scalp, neck, shoulders, and vital pressure points in the feet.",
    benefits: [
      "Shiro Scalp Massage",
      "Neck & Shoulder Release",
      "Acupressure Foot Reflexology",
      "Herbal Soothing Oils"
    ],
    doshaFocus: "Vata & Pitta Stress Soothing",
    recommendedFor: "Desk fatigue, computer strain, headache prevention, tired feet"
  },

  // --- 45 Minutes Treatments (Western & Ayurveda) ---
  {
    id: "well-30",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "western",
    subcategoryName: "Western",
    name: "Reflexology Massage",
    subtitle: "Ancient Foot Sole Acupressure & Energetic Balancing",
    duration: "45 Minutes",
    priceMUR: 1440,
    priceUSD: 32,
    badge: "Acupressure Reflexology",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Reflexology Massage.webp",
    description: "Ancient reflex zone therapy applying precise thumb and finger pressure to reflex points on the soles to restore full-body energetic equilibrium.",
    benefits: [
      "Herbal Foot Cleansing",
      "Sole Reflex Point Therapy",
      "Calf Pressure Release",
      "Relaxing Botanical Balm"
    ],
    doshaFocus: "Tridoshic Harmony",
    recommendedFor: "Foot fatigue, systemic balance, internal organ stimulation, relaxation"
  },
  {
    id: "well-14",
    categoryId: "wellness",
    categoryName: "Wellness",
    subcategoryId: "ayurveda",
    subcategoryName: "Ayurveda",
    name: "Padamruta",
    subtitle: "Hip-to-Toe Herbal Oil Massage & Botanical Pouch Therapy",
    duration: "45 Minutes",
    priceMUR: 1200,
    priceUSD: 27,
    badge: "Leg & Foot Revitalization",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Padamruta.webp",
    description: "Focused lower-body therapy featuring a soothing hip-to-toe herbal oil massage and warm botanical pouch treatment to relieve tired legs and feet.",
    benefits: [
      "Hip-to-Toe Massage",
      "Warm Botanical Pouch",
      "Sole Reflexology",
      "Leg Fatigue Relief"
    ],
    doshaFocus: "Vata & Pitta Cooling",
    recommendedFor: "Restless legs, standing fatigue, calf soreness, poor circulation in legs"
  },

  // =========================================================================
  // 3. BEAUTY CARE (Face Care, Body Care, Hair Care, Hand & Foot Care)
  // =========================================================================

  // --- Subcategory: Face Care ---
  {
    id: "face-01",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "face-care",
    subcategoryName: "Face Care",
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
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "face-care",
    subcategoryName: "Face Care",
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
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "face-care",
    subcategoryName: "Face Care",
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
    id: "face-07",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "face-care",
    subcategoryName: "Face Care",
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
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "face-care",
    subcategoryName: "Face Care",
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
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "face-care",
    subcategoryName: "Face Care",
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
    id: "face-mukhakanti",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "face-care",
    subcategoryName: "Face Care",
    name: "Mukhakanti (Ayurvedic Facial)",
    subtitle: "Radiance Facial, Marma Massage & Glow-Enhancing Lepam",
    duration: "60 Minutes",
    priceMUR: 1800,
    priceUSD: 40,
    badge: "Radiant Skin Glow",
    requiresDoctorConsultation: false,
    image: "assets/images/Wellness/Mukhakanti - Ayurvedic Facial.webp",
    description: "Radiance-boosting facial therapy featuring gentle herbal cleansing, steam, Marma acupressure facial massage, and botanical glow-enhancing Lepam.",
    benefits: [
      "Herbal Cleanse & Exfoliation",
      "Facial Marma Massage",
      "Custom Lepam Mask",
      "Floral Rose Mist"
    ],
    doshaFocus: "Pitta Cooling & Glow",
    recommendedFor: "Dull complexion, sun exposure, facial tension, delicate skin nourishment"
  },

  // --- Subcategory: Body Care ---
  {
    id: "body-01",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "body-care",
    subcategoryName: "Body Care",
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
  {
    id: "body-02",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "body-care",
    subcategoryName: "Body Care",
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

  // --- Subcategory: Hair Care ---
  {
    id: "hair-02",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "hair-care",
    subcategoryName: "Hair Care",
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
  {
    id: "hair-01",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "hair-care",
    subcategoryName: "Hair Care",
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

  // --- Subcategory: Hand & Foot Care ---
  {
    id: "handfoot-01",
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "hand-foot-care",
    subcategoryName: "Hand & Foot Care",
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
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "hand-foot-care",
    subcategoryName: "Hand & Foot Care",
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
    categoryId: "beauty-care",
    categoryName: "Beauty Care",
    subcategoryId: "hand-foot-care",
    subcategoryName: "Hand & Foot Care",
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
