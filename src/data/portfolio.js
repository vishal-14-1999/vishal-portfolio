export const personal = {
  name: 'Vishal',
  title: 'Flutter & Full Stack Developer',
  tagline: 'I build fast, scalable mobile & backend apps with scalability and efficiency.',
  email: 'konda.vishal14@gmail.com',
  phone: '+91 8919730797',
  github: 'https://github.com/vishal',
  linkedin: 'https://linkedin.com/in/vishal',
  bio: `I'm a passionate full-stack developer specializing in Flutter mobile apps and robust backend systems. 
  With hands-on experience across Flutter, Python, Node.js, .NET, and databases like PostgreSQL, MongoDB, and Firebase, 
  I deliver end-to-end solutions — from pixel-perfect UIs to scalable APIs. 
  I've shipped production apps across food delivery, real estate, EV tech, cab booking, and enterprise SaaS.`,
};

export const skills = [
  {
    category: 'Mobile',
    color: '#00d4ff',
    items: [
      { name: 'Flutter', level: 95 },
      { name: 'Dart', level: 92 },
      { name: 'Firebase', level: 88 },
    ],
  },
  {
    category: 'Backend',
    color: '#7c3aed',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Python / FastAPI', level: 82 },
      { name: '.NET', level: 80 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    category: 'Databases',
    color: '#f59e0b',
    items: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Firebase Firestore', level: 82 },
    ],
  },
  {
    category: 'Frontend',
    color: '#10b981',
    items: [
      { name: 'React', level: 78 },
      { name: 'HTML / CSS', level: 85 },
      { name: 'JavaScript', level: 82 },
    ],
  },
];

export const techStack = [
  { name: 'Flutter', icon: '🐦', color: '#00d4ff' },
  { name: 'Dart', icon: '🎯', color: '#00b4d8' },
  { name: 'Python', icon: '🐍', color: '#f7c948' },
  { name: 'Node.js', icon: '🟢', color: '#68a063' },
  { name: '.NET', icon: '⚙️', color: '#512bd4' },
  { name: 'Java', icon: '☕', color: '#f89820' },
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'Firebase', icon: '🔥', color: '#ffca28' },
  { name: 'FastAPI', icon: '⚡', color: '#009688' },
  { name: 'REST APIs', icon: '🔗', color: '#7c3aed' },
];

export const projects = [
  {
    id: 1,
    name: 'FastTracks',
    tagline: 'POS Application',
    description:
      'A full-featured Point of Sale application built for retail businesses. Handles inventory, billing, sales reports, and multi-user roles with a clean Flutter UI backed by a .NET API.',
    tech: ['Flutter', '.NET', 'PostgreSQL'],
    color: '#00d4ff',
    category: 'Enterprise',
    icon: '🏪',
  },
  {
    id: 2,
    name: 'Bethel Prayer House',
    tagline: 'Church Community App',
    description:
      'A Christian community platform featuring live streaming, prayer requests, event management, and a music player. Built with Flutter and .NET with PostgreSQL for data persistence.',
    tech: ['Flutter', '.NET', 'PostgreSQL'],
    color: '#7c3aed',
    category: 'Community',
    icon: '⛪',
  },
  {
    id: 3,
    name: 'OwlPMS',
    tagline: 'Project Management Software',
    description:
      'A comprehensive project management tool with task boards, team collaboration, time tracking, sprint planning, and reporting dashboards. Flutter frontend with .NET backend.',
    tech: ['Flutter', '.NET', 'PostgreSQL'],
    color: '#f59e0b',
    category: 'SaaS',
    icon: '🦉',
  },
  {
    id: 4,
    name: 'Esmito',
    tagline: 'EV Battery Swapping Solution',
    description:
      'An innovative EV battery swapping platform connecting EV riders with swap stations. Features real-time station availability, booking, payments, and fleet management.',
    tech: ['Flutter', 'Java', 'PostgreSQL'],
    color: '#10b981',
    category: 'CleanTech',
    icon: '⚡',
  },
  {
    id: 5,
    name: 'Khanawala',
    tagline: 'Food Delivery App',
    description:
      'A full-stack food delivery platform with customer app, restaurant dashboard, and delivery partner app. Real-time order tracking, payments, and ratings system.',
    tech: ['Flutter', 'Node.js', 'MongoDB'],
    color: '#ef4444',
    category: 'Food Tech',
    icon: '🍔',
  },
  {
    id: 6,
    name: 'Around29 Cabs',
    tagline: 'Cab Booking Platform',
    description:
      'A ride-hailing platform with real-time driver tracking, fare estimation, booking management, and driver/rider apps. Built with Flutter and Node.js microservices.',
    tech: ['Flutter', 'Node.js', 'MongoDB'],
    color: '#f97316',
    category: 'Transport',
    icon: '🚕',
  },
  {
    id: 7,
    name: 'Propertify',
    tagline: 'Real Estate Platform',
    description:
      'A modern real estate app with property reels/feeds, agent profiles, community forums, service listings, and booking system. Instagram-style property discovery.',
    tech: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL'],
    color: '#8b5cf6',
    category: 'Real Estate',
    icon: '🏠',
  },
  {
    id: 8,
    name: 'Hashify',
    tagline: 'Social / Content Platform',
    description:
      'A content discovery and social platform with hashtag-based feeds, user profiles, and content management. Built with Flutter and Python FastAPI.',
    tech: ['Flutter', 'Python', 'PostgreSQL'],
    color: '#06b6d4',
    category: 'Social',
    icon: '#️⃣',
  },
  {
    id: 9,
    name: 'AmRoyal',
    tagline: 'Home Services Application',
    description:
      'An on-demand home services marketplace connecting customers with verified service providers for cleaning, repairs, plumbing, and more. End-to-end booking and payment flow.',
    tech: ['Flutter', 'Node.js', 'Firebase'],
    color: '#ec4899',
    category: 'Services',
    icon: '🏡',
  },
];

export const experience = [
  {
    year: '2024 – Present',
    role: 'Senior Flutter Developer',
    company: 'Freelance',
    desc: 'Building production-grade mobile apps and backend systems for clients across food tech, real estate, EV, and enterprise SaaS.',
  },
  {
    year: '2023',
    role: 'Full Stack Developer',
    company: 'Freelance',
    desc: 'Delivered Khanawala food delivery, Around29 cabs, and Propertify real estate platform end-to-end.',
  },
  {
    year: '2022',
    role: 'Flutter Developer',
    company: 'Freelance',
    desc: 'Built OwlPMS project management software and Esmito EV battery swapping solution.',
  },
  {
    year: '2021',
    role: 'Mobile Developer',
    company: 'Freelance',
    desc: 'Developed FastTracks POS and Bethel Prayer House community app from scratch.',
  },
];

export const services = [
  {
    icon: '📱',
    title: 'Flutter App Development',
    desc: 'Cross-platform iOS & Android apps with beautiful UI, smooth animations, and production-ready architecture.',
    color: '#00d4ff',
  },
  {
    icon: '⚙️',
    title: 'Backend API Development',
    desc: 'Scalable REST APIs with Node.js, Python FastAPI, or .NET — designed for performance and reliability.',
    color: '#7c3aed',
  },
  {
    icon: '🗄️',
    title: 'Database Design',
    desc: 'Efficient schema design and optimization for PostgreSQL, MongoDB, and Firebase Firestore.',
    color: '#f59e0b',
  },
  {
    icon: '🔥',
    title: 'Firebase Integration',
    desc: 'Real-time databases, authentication, push notifications, cloud functions, and storage.',
    color: '#ef4444',
  },
  {
    icon: '🚀',
    title: 'Full Stack Delivery',
    desc: 'End-to-end product development — from UI/UX to deployment. One developer, complete solution.',
    color: '#10b981',
  },
  {
    icon: '🔧',
    title: 'App Maintenance & Support',
    desc: 'Bug fixes, performance improvements, feature additions, and ongoing technical support.',
    color: '#8b5cf6',
  },
];

export const testimonials = [
  {
    name: 'Client — Food Tech',
    project: 'Khanawala',
    text: 'Vishal delivered the entire food delivery app — customer, restaurant, and delivery apps — on time and with great quality. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Client — Real Estate',
    project: 'Propertify',
    text: 'The property reels feature was exactly what we envisioned. Vishal understood our requirements perfectly and executed flawlessly.',
    rating: 5,
  },
  {
    name: 'Client — Enterprise',
    project: 'OwlPMS',
    text: 'Our project management tool works beautifully. Clean code, great architecture, and excellent communication throughout.',
    rating: 5,
  },
  {
    name: 'Client — Transport',
    project: 'Around29 Cabs',
    text: 'Real-time tracking and the booking flow are seamless. Vishal built exactly what we needed for our cab platform.',
    rating: 5,
  },
];
