export const nav = [
  'Home',
  'About',
  'Education',
  'Skills',
  'Experience',
  'Projects',
  'Certifications',
  'Contact'
]

export const email = 'srpunya05@gmail.com'

export const phone = '+91 9482451124'

export const summary = [
  'I am a Computer Science Engineering student with a strong interest in software development and building practical technology solutions. I enjoy understanding how applications work and turning ideas into simple, functional, and user-friendly software. I am continuously developing my skills through academic projects, hands-on development, and practical experience.',

  'I have a foundation in C, Java, Python, Data Structures and Algorithms, Object-Oriented Programming, MySQL, DBMS, HTML, CSS, JavaScript, and React. I am particularly interested in software development, web development, databases, and problem-solving. I continuously work on improving my programming and technical skills through projects and regular practice.',

  'I have worked on projects involving e-commerce, AI-enabled applications, databases, and blockchain-based systems. These projects have helped me gain practical experience in designing interfaces, organizing application data, implementing features, and understanding the software development process. I also have practical experience through my Software Development Internship at BEML Limited, where I work on an e-commerce website for BEML products.',

  'I am looking for an entry-level opportunity where I can apply my technical knowledge, learn from experienced professionals, and contribute to real-world software projects. I am particularly interested in Software Developer and Software Engineer roles where I can continue strengthening my programming, problem-solving, and development skills while growing as a professional.'
]
  

export const about = [
  [
    'cap',
    'Education',
    'B.E. in Computer Science Engineering, expected 2027'
  ],
  [
    'code',
    'Software Development',
    'C, Java, DSA and Object-Oriented Programming'
  ],
  [
    'ai',
    'AI & Web Development',
    'AI-enabled and responsive web applications'
  ],
  [
    'db',
    'Database Development',
    'MySQL and DBMS-driven applications'
  ]
]

export const focus = [
  ['code', 'Software Development'],
  ['ai', 'AI Applications'],
  ['web', 'Web Development'],
  ['db', 'Database Systems']
]

export const skills = [
  [
    'code',
    'Programming Languages',
    ['C', 'Java', 'Python', 'JavaScript', 'SQL']
  ],

  [
    'cap',
    'Core Computer Science',
    [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks'
    ]
  ],

  [
    'web',
    'Web Development',
    [
      'HTML',
      'CSS',
      'React',
      'Responsive Web Design'
    ]
  ],

  [
    'db',
    'Database',
    [
      'MySQL',
      'SQL'
    ]
  ],

  [
    'tool',
    'Tools',
    [
      'Git',
      'GitHub',
      'VS Code',
      'MS Excel',
      'Figma'
    ]
  ],

  [
    'ai',
    'AI & Emerging Technologies',
    [
      'AI/ML Fundamentals',
      'Generative AI',
      'Prompt Engineering',
      'Blockchain',
      'Solidity'
    ]
  ]
] as [string, string, string[]][]

export const experience = [
  'Developing an e-commerce website for BEML products, supporting structured product presentation and customer interaction.',
  'Designing responsive web pages for product listings, product information, categories, and user navigation.',
  'Applying web development and database concepts to create responsive, user-friendly interfaces.',
  'Participating in requirements analysis, development, testing, and project implementation in a professional environment.'
]

export const projects = [
  {
    t: 'AI-Powered Resume Optimization & Analysis Platform',
    d: 'Developed a resume analysis application to evaluate resume content against job requirements. Identified relevant skills and keywords and provided improvement suggestions to improve ATS alignment.',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI/ML Concepts'],
    f: [
      'Resume analysis',
      'Relevant skill identification',
      'Keyword identification',
      'Improvement suggestions',
      'ATS alignment support'
    ]
  },

  {
    t: 'Smart Online Health Consultation & Appointment Scheduling System',
    d: 'Web Development | Database. Developed a platform supporting appointment booking and online consultations. Implemented digital prescriptions, automated notifications, structured database management, and video consultation features.',
    tech: ['Web Development', 'Database'],
    f: [
      'Appointment booking',
      'Online consultation',
      'Digital prescriptions',
      'Automated notifications',
      'Structured database management',
      'Video consultation'
    ]
  },

  {
    t: 'Next-Gen Smart Shopping Platform',
    d: 'Web Development | AI | Database. Developed an AI-enabled shopping platform with personalized recommendations, chatbot, and voice-assistant support. Included predictive analytics, product and order management, secure payment integration, and sales analytics features.',
    tech: ['Web Development', 'AI', 'Database'],
    f: [
      'Personalized recommendations',
      'Chatbot',
      'Voice assistant',
      'Predictive analytics',
      'Product management',
      'Order management',
      'Secure payment integration',
      'Sales analytics'
    ]
  },

  {
    t: 'HerbChain — Blockchain-Based Ayurvedic Herb Traceability System',
    d: 'Developed a blockchain-based supply-chain system for transparent and secure tracking of Ayurvedic herbs from collection to final formulation. The system uses geo-tagging, batch tracking, blockchain records, and Solidity smart contracts to record herb origin, collection, processing, quality verification, and formulation stages. It provides a tamper-resistant history that enables authorized users to verify the complete journey of each herb batch.',
    tech: [
      'Blockchain',
      'Solidity',
      'Hardhat',
      'Node.js',
      'Web3/Ethers.js',
      'Geo-Tagging'
    ],
    f: [
      'Herb origin and collection tracking',
      'Geo-tagging of collection locations',
      'Blockchain-based batch registration',
      'Smart contract transaction validation',
      'Processing and quality-history tracking',
      'End-to-end supply-chain traceability',
      'Tamper-resistant transaction records',
      'Final formulation verification'
    ]
  }
]

export const certs = [
  'AWS Cloud Practitioner Essentials',
  'Relevant programming/DSA credentials',
  'Microsoft Azure Fundamentals (AZ-900)'
]


export const languages = [
  'English',
  'Kannada',
  'Hindi'
]

export const linkedin = 'https://www.linkedin.com/in/punyasr-gowda'
export const linkedinLabel = 'linkedin.com/in/punyasr-gowda'

export const github = 'https://github.com/Punyasr'
export const githubLabel = 'github.com/Punyasr'


// Set VITE_FORMSPREE_ENDPOINT in a .env file (see .env.example) to receive messages by email.
// When it is empty the form falls back to opening the visitor's email app.
export const formEndpoint: string = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? ''
