export interface VisaType {
  id: string;
  name: string;
  icon: string;
  description: string;
  processingTime: string;
  validity: string;
  requirements: string[];
  eligibility: string[];
}

export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  description: string;
  heroImage: string;
  facts: {
    capital: string;
    population: string;
    language: string[];
    currency: string;
    timezone: string;
    climate: string;
  };
  whyChoose: {
    title: string;
    description: string;
    icon: string;
  }[];
  visaTypes: VisaType[];
  benefits: string[];
  popularCities: {
    name: string;
    description: string;
    image: string;
  }[];
  statistics: {
    label: string;
    value: string;
    description: string;
  }[];
  gallery: {
    url: string;
    caption: string;
  }[];
  requirements: {
    category: string;
    items: string[];
  }[];
  process: {
    step: number;
    title: string;
    description: string;
    duration: string;
  }[];
}

export const countriesData: Record<string, CountryData> = {
  canada: {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Your Gateway to the Great White North",
    description: "Canada offers a world-class quality of life, diverse culture, excellent healthcare, and abundant opportunities for skilled workers and families. With its welcoming immigration policies and strong economy, Canada is the top choice for immigrants worldwide.",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2940",
    facts: {
      capital: "Ottawa",
      population: "38+ million",
      language: ["English", "French"],
      currency: "Canadian Dollar (CAD)",
      timezone: "UTC-3.5 to UTC-8",
      climate: "Four distinct seasons, varies by region"
    },
    whyChoose: [
      {
        title: "World-Class Education",
        description: "Home to top-ranked universities and colleges with globally recognized degrees",
        icon: "GraduationCap"
      },
      {
        title: "Universal Healthcare",
        description: "Free public healthcare system for all permanent residents and citizens",
        icon: "Heart"
      },
      {
        title: "Strong Economy",
        description: "Stable economy with diverse job opportunities across multiple sectors",
        icon: "TrendingUp"
      },
      {
        title: "Multiculturalism",
        description: "Welcoming society that celebrates diversity and cultural heritage",
        icon: "Users"
      },
      {
        title: "Safety & Security",
        description: "Low crime rates and political stability ensuring peace of mind",
        icon: "Shield"
      },
      {
        title: "Natural Beauty",
        description: "Stunning landscapes from mountains to oceans, perfect for outdoor enthusiasts",
        icon: "Mountain"
      }
    ],
    visaTypes: [
      {
        id: "express-entry",
        name: "Express Entry",
        icon: "Zap",
        description: "Fast-track immigration system for skilled workers based on points",
        processingTime: "6 months",
        validity: "Permanent Residency",
        requirements: [
          "Minimum 1 year skilled work experience",
          "Language proficiency (IELTS/CELPIP)",
          "Educational credential assessment",
          "Proof of funds"
        ],
        eligibility: [
          "CRS score of 470+",
          "Age 18-35 preferred",
          "Bachelor's degree or higher",
          "CLB 7+ in English/French"
        ]
      },
      {
        id: "pnp",
        name: "Provincial Nominee Program",
        icon: "MapPin",
        description: "Province-specific immigration pathways for in-demand occupations",
        processingTime: "12-18 months",
        validity: "Permanent Residency",
        requirements: [
          "Job offer from province (some streams)",
          "Relevant work experience",
          "Language test results",
          "Connection to province"
        ],
        eligibility: [
          "Meets province-specific criteria",
          "Skills in demand in province",
          "Commitment to live in province",
          "Meet minimum language requirements"
        ]
      },
      {
        id: "family-sponsorship",
        name: "Family Sponsorship",
        icon: "Heart",
        description: "Sponsor your family members to join you in Canada",
        processingTime: "12 months",
        validity: "Permanent Residency",
        requirements: [
          "Proof of relationship",
          "Sponsor must be citizen or PR",
          "Financial ability to support",
          "Medical examination"
        ],
        eligibility: [
          "Spouse or common-law partner",
          "Dependent children",
          "Parents and grandparents",
          "Sponsor meets income requirements"
        ]
      },
      {
        id: "study-permit",
        name: "Study Permit",
        icon: "BookOpen",
        description: "Study at Canadian universities and colleges with work opportunities",
        processingTime: "4-8 weeks",
        validity: "Duration of studies",
        requirements: [
          "Letter of acceptance from DLI",
          "Proof of funds ($10,000+ per year)",
          "No criminal record",
          "Medical exam (if required)"
        ],
        eligibility: [
          "Accepted by designated learning institution",
          "Sufficient funds for tuition and living",
          "Intent to leave after studies",
          "Meet admissions requirements"
        ]
      },
      {
        id: "work-permit",
        name: "Work Permit",
        icon: "Briefcase",
        description: "Temporary work authorization for employment in Canada",
        processingTime: "8-12 weeks",
        validity: "1-2 years (renewable)",
        requirements: [
          "Job offer from Canadian employer",
          "LMIA (if applicable)",
          "Proof of qualifications",
          "Clean criminal record"
        ],
        eligibility: [
          "Valid job offer",
          "Meet job requirements",
          "Employer has LMIA approval",
          "No inadmissibility issues"
        ]
      }
    ],
    benefits: [
      "Pathway to citizenship in 3 years",
      "Bring family members along",
      "Access to free public education",
      "World-class healthcare system",
      "Strong social safety net",
      "Diverse job opportunities",
      "High standard of living",
      "Political stability and safety"
    ],
    popularCities: [
      {
        name: "Toronto",
        description: "Canada's largest city, a global financial hub with diverse culture and endless opportunities",
        image: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2940"
      },
      {
        name: "Vancouver",
        description: "Coastal city surrounded by mountains, known for tech industry and outdoor lifestyle",
        image: "https://images.unsplash.com/photo-1580993833023-f00dfcc2cb2d?q=80&w=2940"
      },
      {
        name: "Montreal",
        description: "Bilingual city rich in culture, arts, and European charm with affordable living",
        image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2940"
      },
      {
        name: "Calgary",
        description: "Energy sector hub with proximity to Rocky Mountains and strong economy",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940"
      }
    ],
    statistics: [
      {
        label: "Success Rate",
        value: "98%",
        description: "Of our applicants receive approval"
      },
      {
        label: "Processing Time",
        value: "6 months",
        description: "Average time for Express Entry"
      },
      {
        label: "Job Growth",
        value: "15%",
        description: "Projected employment growth"
      },
      {
        label: "Immigrants",
        value: "500K+",
        description: "Annual immigration target"
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2940",
        caption: "Niagara Falls"
      },
      {
        url: "https://images.unsplash.com/photo-1568736810019-94a9e4bf7b5e?q=80&w=2940",
        caption: "Banff National Park"
      },
      {
        url: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=2940",
        caption: "Downtown Toronto"
      },
      {
        url: "https://images.unsplash.com/photo-1582655299221-2f9652a5a7e6?q=80&w=2940",
        caption: "Quebec City"
      }
    ],
    requirements: [
      {
        category: "Language Requirements",
        items: [
          "IELTS General Training or CELPIP",
          "Minimum CLB 7 for most programs",
          "TEF for French proficiency",
          "Valid for 2 years from test date"
        ]
      },
      {
        category: "Educational Requirements",
        items: [
          "Educational Credential Assessment (ECA)",
          "High school diploma minimum",
          "Post-secondary preferred",
          "Documents must be translated"
        ]
      },
      {
        category: "Work Experience",
        items: [
          "Minimum 1 year full-time",
          "NOC skill level 0, A, or B",
          "Within last 10 years",
          "Reference letters required"
        ]
      },
      {
        category: "Financial Requirements",
        items: [
          "Proof of funds ($13,310 for single)",
          "Additional $3,492 per family member",
          "6 months of bank statements",
          "Gift deeds accepted"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Free Assessment",
        description: "Complete our AI-powered assessment to check your eligibility",
        duration: "5 minutes"
      },
      {
        step: 2,
        title: "Profile Creation",
        description: "Create your Express Entry profile with our guided system",
        duration: "1-2 days"
      },
      {
        step: 3,
        title: "Receive ITA",
        description: "Get your Invitation to Apply based on your CRS score",
        duration: "1-6 months"
      },
      {
        step: 4,
        title: "Submit Application",
        description: "We help you submit a complete application with all documents",
        duration: "2 weeks"
      },
      {
        step: 5,
        title: "Medical & Biometrics",
        description: "Complete required medical exams and biometric collection",
        duration: "1 month"
      },
      {
        step: 6,
        title: "Receive PR",
        description: "Get your Confirmation of Permanent Residence and plan your move",
        duration: "3-6 months"
      }
    ]
  },
  usa: {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    tagline: "Land of Opportunity and Innovation",
    description: "The United States offers unparalleled opportunities for career growth, innovation, and entrepreneurship. With the world's largest economy and diverse industries, it remains the top destination for ambitious professionals worldwide.",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2940",
    facts: {
      capital: "Washington, D.C.",
      population: "330+ million",
      language: ["English"],
      currency: "US Dollar (USD)",
      timezone: "UTC-5 to UTC-10",
      climate: "Varies greatly by region"
    },
    whyChoose: [
      {
        title: "Tech Innovation Hub",
        description: "Home to Silicon Valley and leading tech companies driving global innovation",
        icon: "Zap"
      },
      {
        title: "Career Opportunities",
        description: "Highest salaries and career advancement opportunities in the world",
        icon: "TrendingUp"
      },
      {
        title: "World-Class Universities",
        description: "Top-ranked institutions like MIT, Harvard, and Stanford",
        icon: "GraduationCap"
      },
      {
        title: "Entrepreneurial Spirit",
        description: "Thriving startup ecosystem with abundant funding and support",
        icon: "Briefcase"
      },
      {
        title: "Cultural Diversity",
        description: "Melting pot of cultures offering rich experiences and perspectives",
        icon: "Users"
      },
      {
        title: "Global Influence",
        description: "Work with leading organizations shaping the future of industries",
        icon: "Mountain"
      }
    ],
    visaTypes: [
      {
        id: "h1b",
        name: "H-1B Visa",
        icon: "Briefcase",
        description: "Specialty occupation visa for highly skilled professionals",
        processingTime: "6 months",
        validity: "3 years (renewable once)",
        requirements: [
          "Bachelor's degree or equivalent",
          "Job offer from US employer",
          "Specialty occupation position",
          "Employer petition (Form I-129)"
        ],
        eligibility: [
          "Relevant degree in specialized field",
          "Position requires specialized knowledge",
          "Employer sponsorship",
          "Selected in H-1B lottery"
        ]
      },
      {
        id: "green-card",
        name: "Employment-Based Green Card",
        icon: "Shield",
        description: "Permanent residency through employment sponsorship",
        processingTime: "2-5 years",
        validity: "Permanent",
        requirements: [
          "Labor certification (PERM)",
          "Employer sponsorship",
          "Advanced degree or exceptional ability",
          "Priority date current"
        ],
        eligibility: [
          "EB-1, EB-2, or EB-3 category",
          "Meets priority workers criteria (EB-1)",
          "Advanced degree or equivalent (EB-2)",
          "Skilled worker (EB-3)"
        ]
      },
      {
        id: "l1",
        name: "L-1 Intracompany Transfer",
        icon: "Users",
        description: "Transfer from foreign office to US office of same company",
        processingTime: "2-4 months",
        validity: "1-3 years",
        requirements: [
          "1 year employment abroad",
          "Managerial or specialized knowledge role",
          "Qualifying relationship between companies",
          "US office operational"
        ],
        eligibility: [
          "Executive or managerial position (L-1A)",
          "Specialized knowledge (L-1B)",
          "Continuous employment abroad",
          "Transferring to related US entity"
        ]
      },
      {
        id: "f1",
        name: "F-1 Student Visa",
        icon: "GraduationCap",
        description: "Study at US universities with Optional Practical Training",
        processingTime: "3-5 weeks",
        validity: "Duration of studies",
        requirements: [
          "Acceptance from SEVP-certified school",
          "Proof of funds for tuition and living",
          "Maintain full-time enrollment",
          "Intent to return home after studies"
        ],
        eligibility: [
          "Admitted to academic program",
          "Financial ability demonstrated",
          "Ties to home country",
          "Proficiency in English"
        ]
      },
      {
        id: "o1",
        name: "O-1 Extraordinary Ability",
        icon: "Star",
        description: "For individuals with extraordinary ability in sciences, arts, education, business, or athletics",
        processingTime: "2-3 months",
        validity: "3 years",
        requirements: [
          "Sustained national/international acclaim",
          "Documentation of achievements",
          "US employer or agent petition",
          "Advisory opinion letter"
        ],
        eligibility: [
          "Top of field recognition",
          "Major awards or prizes",
          "Published material about you",
          "Judging work of others"
        ]
      },
      {
        id: "eb5",
        name: "EB-5 Investor Visa",
        icon: "DollarSign",
        description: "Green card through investment in US business",
        processingTime: "2-3 years",
        validity: "Permanent (conditional)",
        requirements: [
          "$800K-$1.05M investment",
          "Create 10 full-time jobs",
          "Invest in new commercial enterprise",
          "Lawful source of funds"
        ],
        eligibility: [
          "Capital investment in TEA or non-TEA",
          "Active management or policy role",
          "Job creation requirements met",
          "Funds obtained legally"
        ]
      }
    ],
    benefits: [
      "Highest salaries globally",
      "Path to permanent residency",
      "Work with industry leaders",
      "Access to venture capital",
      "Quality education system",
      "Diverse cultural experiences",
      "Strong legal protections",
      "Innovation ecosystem"
    ],
    popularCities: [
      {
        name: "New York City",
        description: "Global financial capital with unmatched cultural diversity and opportunities",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2940"
      },
      {
        name: "San Francisco",
        description: "Tech innovation hub home to Silicon Valley and leading startups",
        image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2940"
      },
      {
        name: "Los Angeles",
        description: "Entertainment capital with booming tech and creative industries",
        image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?q=80&w=2940"
      },
      {
        name: "Seattle",
        description: "Pacific Northwest tech hub with Amazon, Microsoft, and thriving startup scene",
        image: "https://images.unsplash.com/photo-1541659224798-7c051ff8b88f?q=80&w=2940"
      }
    ],
    statistics: [
      {
        label: "Success Rate",
        value: "95%",
        description: "Of our H-1B applicants succeed"
      },
      {
        label: "Avg Salary",
        value: "$85K",
        description: "Entry level tech positions"
      },
      {
        label: "Tech Jobs",
        value: "1M+",
        description: "Open positions annually"
      },
      {
        label: "Startups",
        value: "50K+",
        description: "New startups each year"
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2940",
        caption: "Statue of Liberty"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940",
        caption: "Golden Gate Bridge"
      },
      {
        url: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2940",
        caption: "Chicago Skyline"
      },
      {
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940",
        caption: "Grand Canyon"
      }
    ],
    requirements: [
      {
        category: "Educational Requirements",
        items: [
          "Bachelor's degree or higher",
          "Degree evaluation for foreign degrees",
          "Relevant field of study",
          "Transcripts and certificates"
        ]
      },
      {
        category: "Work Experience",
        items: [
          "Relevant professional experience",
          "Detailed resume required",
          "Reference letters from employers",
          "Matches specialty occupation"
        ]
      },
      {
        category: "Financial Requirements",
        items: [
          "Proof of employer's ability to pay",
          "No personal funds required (H-1B)",
          "Bank statements for student visas",
          "Investment funds for EB-5"
        ]
      },
      {
        category: "Documentation",
        items: [
          "Valid passport",
          "Photographs (US visa format)",
          "Form DS-160 confirmation",
          "Visa fee payment receipt"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Check",
        description: "Assess your qualifications and visa options",
        duration: "15 minutes"
      },
      {
        step: 2,
        title: "Employer Sponsorship",
        description: "Secure job offer and employer petition",
        duration: "1-3 months"
      },
      {
        step: 3,
        title: "USCIS Filing",
        description: "Submit petition to US Citizenship and Immigration Services",
        duration: "2-6 months"
      },
      {
        step: 4,
        title: "Visa Interview",
        description: "Attend interview at US embassy or consulate",
        duration: "1-2 weeks"
      },
      {
        step: 5,
        title: "Visa Approval",
        description: "Receive visa stamp in passport",
        duration: "1-2 weeks"
      },
      {
        step: 6,
        title: "Travel to USA",
        description: "Enter United States and start your journey",
        duration: "As scheduled"
      }
    ]
  },
  australia: {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "Work, Live, and Thrive Down Under",
    description: "Australia combines stunning natural beauty with excellent quality of life, strong economy, and welcoming immigration policies. Experience beach culture, diverse wildlife, and a laid-back lifestyle while building your career.",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2940",
    facts: {
      capital: "Canberra",
      population: "26+ million",
      language: ["English"],
      currency: "Australian Dollar (AUD)",
      timezone: "UTC+8 to UTC+11",
      climate: "Temperate to tropical"
    },
    whyChoose: [
      {
        title: "Work-Life Balance",
        description: "Enjoy a relaxed lifestyle with competitive salaries and benefits",
        icon: "Heart"
      },
      {
        title: "High Quality of Life",
        description: "Consistently ranked among the world's most livable cities",
        icon: "TrendingUp"
      },
      {
        title: "Natural Beauty",
        description: "Pristine beaches, Great Barrier Reef, and unique wildlife",
        icon: "Mountain"
      },
      {
        title: "Strong Economy",
        description: "Resilient economy with low unemployment and growth opportunities",
        icon: "Briefcase"
      },
      {
        title: "Multicultural Society",
        description: "Welcome diverse communities and celebrate multiculturalism",
        icon: "Users"
      },
      {
        title: "Healthcare System",
        description: "Medicare provides universal healthcare coverage",
        icon: "Shield"
      }
    ],
    visaTypes: [
      {
        id: "skilled-independent",
        name: "Skilled Independent (189)",
        icon: "Zap",
        description: "Points-based permanent visa for skilled workers",
        processingTime: "8-12 months",
        validity: "Permanent",
        requirements: [
          "Under 45 years of age",
          "Occupation on skilled list",
          "Competent English (IELTS 6.0+)",
          "65+ points score"
        ],
        eligibility: [
          "Relevant skills assessment",
          "Meet points requirement",
          "Health and character checks",
          "No employer sponsorship needed"
        ]
      },
      {
        id: "tss",
        name: "TSS Visa (482)",
        icon: "Briefcase",
        description: "Temporary skill shortage employer-sponsored visa",
        processingTime: "3-6 months",
        validity: "2-4 years",
        requirements: [
          "Employer nomination",
          "2+ years work experience",
          "Occupation on shortage list",
          "English language proficiency"
        ],
        eligibility: [
          "Meet skill level requirements",
          "Relevant qualifications",
          "Labor market testing (if required)",
          "Genuine temporary entrant"
        ]
      },
      {
        id: "student",
        name: "Student Visa (500)",
        icon: "GraduationCap",
        description: "Study at Australian institutions with work rights",
        processingTime: "4-8 weeks",
        validity: "Duration of course",
        requirements: [
          "Enrollment confirmation (CoE)",
          "Genuine Temporary Entrant requirement",
          "Financial capacity proof",
          "English proficiency"
        ],
        eligibility: [
          "Accepted by registered provider",
          "Adequate funds for tuition and living",
          "Overseas student health cover",
          "Meet GTE requirement"
        ]
      },
      {
        id: "partner",
        name: "Partner Visa (820/801)",
        icon: "Heart",
        description: "For partners of Australian citizens or permanent residents",
        processingTime: "24-36 months",
        validity: "Permanent (after temp phase)",
        requirements: [
          "Genuine relationship evidence",
          "Sponsor must be citizen/PR",
          "Living together or registered",
          "Health and character checks"
        ],
        eligibility: [
          "Married or de facto partner",
          "Relationship of at least 12 months",
          "Both parties 18+ years",
          "Meet relationship criteria"
        ]
      },
      {
        id: "business-innovation",
        name: "Business Innovation (188)",
        icon: "TrendingUp",
        description: "For business owners and investors",
        processingTime: "12-24 months",
        validity: "Temporary (pathway to PR)",
        requirements: [
          "State/territory nomination",
          "65+ points score",
          "Business or investment experience",
          "Meet financial thresholds"
        ],
        eligibility: [
          "Successful business background",
          "Net business assets $400K+",
          "Annual turnover $500K+",
          "Under 55 years (unless waived)"
        ]
      },
      {
        id: "global-talent",
        name: "Global Talent Visa (858)",
        icon: "Star",
        description: "Fast-track PR for highly skilled individuals",
        processingTime: "4-8 weeks",
        validity: "Permanent",
        requirements: [
          "Internationally recognized achievements",
          "Work in target sector",
          "Minimum salary threshold",
          "Nominator in Australia"
        ],
        eligibility: [
          "Top of field in priority sector",
          "Currently prominent",
          "Evidence of exceptional talent",
          "Ability to earn $162,000+"
        ]
      }
    ],
    benefits: [
      "Medicare healthcare coverage",
      "Fair Work Act protections",
      "Annual leave and sick leave",
      "Superannuation (retirement savings)",
      "Free public education",
      "Clean and safe environment",
      "Outdoor lifestyle",
      "Path to citizenship"
    ],
    popularCities: [
      {
        name: "Sydney",
        description: "Harbor city with iconic Opera House, beaches, and thriving business district",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2940"
      },
      {
        name: "Melbourne",
        description: "Cultural capital known for arts, coffee culture, and sporting events",
        image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=2940"
      },
      {
        name: "Brisbane",
        description: "Subtropical city with outdoor lifestyle and growing tech sector",
        image: "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?q=80&w=2940"
      },
      {
        name: "Perth",
        description: "Western Australia's capital with beautiful beaches and mining opportunities",
        image: "https://images.unsplash.com/photo-1544092095-e919251c4be1?q=80&w=2940"
      }
    ],
    statistics: [
      {
        label: "Success Rate",
        value: "97%",
        description: "Skilled visa approval rate"
      },
      {
        label: "Processing",
        value: "8 months",
        description: "Average for skilled visas"
      },
      {
        label: "Unemployment",
        value: "3.5%",
        description: "Low unemployment rate"
      },
      {
        label: "Min Wage",
        value: "$23.23",
        description: "Per hour minimum wage"
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2940",
        caption: "Sydney Opera House"
      },
      {
        url: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=2940",
        caption: "Great Barrier Reef"
      },
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2940",
        caption: "Great Ocean Road"
      },
      {
        url: "https://images.unsplash.com/photo-1557489815-003f0f9b6469?q=80&w=2940",
        caption: "Uluru (Ayers Rock)"
      }
    ],
    requirements: [
      {
        category: "Skills Assessment",
        items: [
          "Relevant skills assessment",
          "Occupation on skilled list",
          "Meet qualification requirements",
          "Work experience verified"
        ]
      },
      {
        category: "English Proficiency",
        items: [
          "IELTS, PTE, or TOEFL",
          "Minimum competent English",
          "Proficient English for higher points",
          "Test valid for 3 years"
        ]
      },
      {
        category: "Health Requirements",
        items: [
          "Medical examination",
          "Chest X-ray",
          "No health risk to Australia",
          "Meet health insurance requirements"
        ]
      },
      {
        category: "Character Requirements",
        items: [
          "Police clearances",
          "No criminal history",
          "Good character declaration",
          "Not cancelled visa holder"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Skills Assessment",
        description: "Get your qualifications assessed by relevant authority",
        duration: "6-12 weeks"
      },
      {
        step: 2,
        title: "Expression of Interest",
        description: "Submit EOI through SkillSelect system",
        duration: "1 day"
      },
      {
        step: 3,
        title: "Receive Invitation",
        description: "Wait for invitation to apply based on points",
        duration: "1-12 months"
      },
      {
        step: 4,
        title: "Lodge Visa Application",
        description: "Submit complete application with documents",
        duration: "1 week"
      },
      {
        step: 5,
        title: "Health & Character",
        description: "Complete medical exams and police checks",
        duration: "4-6 weeks"
      },
      {
        step: 6,
        title: "Visa Grant",
        description: "Receive visa grant and plan your move",
        duration: "3-8 months"
      }
    ]
  }
};
