const taxigoAndroidHero = '/assets/projects/taxigo-android/heroImage.png'
const taxigoAndroidDashboard = '/assets/projects/taxigo-android/dashbaord.png'
const taxigoAndroidDashboard2 = '/assets/projects/taxigo-android/dashbaord2.png'
const taxigoAndroidAddBooking = '/assets/projects/taxigo-android/addbooking.png'
const taxigoAndroidAddBooking2 = '/assets/projects/taxigo-android/addbooking2.png'
const taxigoAndroidAllTrips = '/assets/projects/taxigo-android/alltrips.png'
const taxigoAndroidClientList = '/assets/projects/taxigo-android/clientlist.png'
const taxigoAndroidClientData = '/assets/projects/taxigo-android/clientdata.png'

const sentimentscopeHero = '/assets/projects/sentimentscope/hero.png'
const sentimentscopeShot1 = '/assets/projects/sentimentscope/Screenshot_2026-08-02_183836.png'
const sentimentscopeShot2 = '/assets/projects/sentimentscope/Screenshot_2026-08-02_183850.png'
const sentimentscopeShot3 = '/assets/projects/sentimentscope/Screenshot_2026-08-02_183900.png'
const sentimentscopeShot4 = '/assets/projects/sentimentscope/Screenshot_2026-08-02_183947.png'
const sentimentscopeShot5 = '/assets/projects/sentimentscope/Screenshot_2026-08-02_184000.png'
const sentimentscopeShot6 = '/assets/projects/sentimentscope/Screenshot_2026-08-02_184010.png'
const sentimentscopeShot7 = '/assets/projects/sentimentscope/Screenshot_2026-08-02_184040.png'

const clickReserveHero = '/assets/projects/click-reserve/hero.png'
const clickReserveShot1 = '/assets/projects/click-reserve/Screenshot_2026-08-02_184619.png'
const clickReserveShot2 = '/assets/projects/click-reserve/Screenshot_2026-08-02_184639.png'
const clickReserveShot3 = '/assets/projects/click-reserve/Screenshot_2026-08-02_184700.png'
const clickReserveShot4 = '/assets/projects/click-reserve/Screenshot_2026-08-02_184719.png'
const clickReserveShot5 = '/assets/projects/click-reserve/Screenshot_2026-08-02_184738.png'
const clickReserveShot6 = '/assets/projects/click-reserve/Screenshot_2026-08-02_184803.png'
const clickReserveShot7 = '/assets/projects/click-reserve/Screenshot_2026-08-02_184841.png'
const clickReserveShot8 = '/assets/projects/click-reserve/Screenshot_2026-08-02_184848.png'

const taxigoAiHero = '/assets/projects/taxigo-ai/hero.png'
const taxigoAiShot1 = '/assets/projects/taxigo-ai/Screenshot_2026-08-02_185919.png'
const taxigoAiShot2 = '/assets/projects/taxigo-ai/Screenshot_2026-08-02_185939.png'
const taxigoAiShot3 = '/assets/projects/taxigo-ai/Screenshot_2026-08-02_185945.png'
const taxigoAiShot4 = '/assets/projects/taxigo-ai/Screenshot_2026-08-02_185955.png'
const taxigoAiShot5 = '/assets/projects/taxigo-ai/Screenshot_2026-08-02_190001.png'
const taxigoAiShot6 = '/assets/projects/taxigo-ai/Screenshot_2026-08-02_190018.png'
const taxigoAiShot7 = '/assets/projects/taxigo-ai/Screenshot_2026-08-02_190026.png'

const hospitalityPlatformHero = '/assets/projects/hospitality-platform/hero.png'
const hospitalityPlatformShot1 = '/assets/projects/hospitality-platform/Screenshot_2026-08-02_190501.png'
const hospitalityPlatformShot2 = '/assets/projects/hospitality-platform/Screenshot_2026-08-02_190511.png'
const hospitalityPlatformShot3 = '/assets/projects/hospitality-platform/Screenshot_2026-08-02_190529.png'
const hospitalityPlatformShot4 = '/assets/projects/hospitality-platform/Screenshot_2026-08-02_190546.png'
const hospitalityPlatformShot5 = '/assets/projects/hospitality-platform/Screenshot_2026-08-02_190612.png'
const hospitalityPlatformShot6 = '/assets/projects/hospitality-platform/Screenshot_2026-08-02_190636.png'


export const gradientMap = {
  'taxigo-ai': 'from-accent to-[#241d66]',
  sentimentscope: 'from-emerald-500 to-emerald-800',
  'click-reserve': 'from-amber-500 to-amber-800',
  'taxigo-android': 'from-sky-500 to-sky-800',
  'hospitality-platform': 'from-[#d4af37] to-[#1a1a2e]',
}

export const projects = [
  {
    id: 'taxigo-ai',
    name: 'TaxiGo AI',
    badge: 'Hackathon Winner 🏆',
    category: ['AI/ML', 'Full Stack'],
    subtitle: 'Trilingual AI taxi booking assistant',
    duration: '1 week',
    role: 'Full-Stack Developer',
    year: '2026',
    description:
      'Trilingual AI-powered taxi booking assistant supporting Arabic, English, and French with full RTL support, Lebanese dialect awareness, and real-time Socket.IO notifications. Built for the Kanz AI Hackathon 2026.',
    stack: [
      'Python',
      'FastAPI',
      'Groq LLM',
      'PostgreSQL',
      'SQLAlchemy',
      'Socket.IO',
      'Chart.js',
      'Docker',
      'Railway',
    ],
    github: 'https://github.com/Zahraa-mannoun/taxigo-ai',
    live: null,
    images: [
      taxigoAiHero,
      taxigoAiShot1,
      taxigoAiShot2,
      taxigoAiShot3,
      taxigoAiShot4,
      taxigoAiShot5,
      taxigoAiShot6,
      taxigoAiShot7,
    ],
    highlights: [
      'Trilingual NLP booking in Arabic, English and French',
      'Full RTL support with Lebanese dialect awareness',
      'Real-time Socket.IO notifications and reminders',
      'Voice input with Web Speech API',
      'Weekly earnings chart with Chart.js',
      'PWA support with offline queuing',
      'PDF export translated per language',
      'Deployed with Docker on Railway',
    ],
    learned: [
      'Building trilingual agentic AI systems with Groq LLM',
      'Real-time communication with Socket.IO',
      'Async PostgreSQL with SQLAlchemy and Alembic migrations',
      'PWA implementation with service workers and offline sync',
      'Lebanese dialect and location translation dictionaries',
      'Docker containerization and Railway deployment',
    ],
  },
  {
    id: 'sentimentscope',
    name: 'SentimentScope',
    badge: null,
    category: ['AI/ML', 'Web Apps'],
    subtitle: 'Reddit Sentiment Analysis API',
    duration: '1 week',
    role: 'Solo Developer',
    year: '2026',
    description:
      'A sentiment analysis web service that fetches live posts from any Reddit subreddit via the Reddit API and runs them through VADER NLP scoring, returning positive, negative, and neutral sentiment breakdowns through a clean FastAPI interface.',
    stack: ['Python', 'FastAPI', 'VADER NLP', 'Reddit API', 'HTML5', 'CSS3', 'JavaScript'],
    github: null,
    live: null,
    images: [
      sentimentscopeHero,
      sentimentscopeShot1,
      sentimentscopeShot2,
      sentimentscopeShot3,
      sentimentscopeShot4,
      sentimentscopeShot5,
      sentimentscopeShot6,
      sentimentscopeShot7,
    ],
    highlights: [
      'Fetches live Reddit posts from any subreddit in real time',
      'VADER NLP scoring with positive, negative, and neutral breakdown',
      'Clean REST API built with FastAPI and automatic docs via Swagger',
      'Simple frontend interface to enter subreddit and view results',
      'Modular and extensible architecture for adding new NLP models',
      'JSON responses ready for integration with any frontend or dashboard',
    ],
    learned: [
      'Building and documenting REST APIs with FastAPI',
      'Integrating third-party APIs (Reddit PRAW)',
      'NLP sentiment analysis with VADER scoring',
      'Structuring Python projects for clarity and extensibility',
      'Working with live data pipelines and text preprocessing',
      'Clean API design and automatic Swagger documentation',
    ],
  },
  {
    id: 'click-reserve',
    name: 'Click & Reserve',
    badge: null,
    category: ['Web Apps', 'Full Stack'],
    subtitle: 'University Facilities Booking Platform',
    duration: '1 month',
    role: 'Solo Developer',
    year: '2024',
    description:
      'A solo built online reservation platform for Lebanese University where students, faculty, and guests can browse and book university facilities including football fields, basketball courts, tennis courts, a pool, and conference rooms.',
    stack: [
      'C#',
      'ASP.NET',
      'Razor Pages',
      'SQL Server',
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
    github: null,
    live: null,
    images: [
      clickReserveHero,
      clickReserveShot1,
      clickReserveShot2,
      clickReserveShot3,
      clickReserveShot4,
      clickReserveShot5,
      clickReserveShot6,
      clickReserveShot7,
      clickReserveShot8,
    ],
    highlights: [
      '24-hour payment window with automatic booking rejection and slot release',
      'Virtual payment system with coupon number generation',
      'User profiles showing booking status and rejection reasons',
      'Double booking prevention and maintenance status system',
      'Role based discount system: students vs faculty vs guests',
      'Full admin dashboard for resources, bookings, discounts and invoices',
      'Complete database design: conceptual, logical and physical models',
    ],
    learned: [
      'Full-stack solo development from database design to deployment',
      'Database schema design with SQL Server (conceptual, logical, physical)',
      'ASP.NET Razor Pages and C# backend development',
      'Business logic implementation: payment windows, auto-rejection, conflict detection',
      'Role based access control and user management',
      'Admin dashboard design and invoice tracking',
    ],
  },
  {
    id: 'taxigo-android',
    name: 'TaxiGo Android',
    badge: null,
    category: ['Mobile Apps', 'Full Stack'],
    subtitle: 'Native Android Ride-Booking App',
    duration: '15 days',
    role: 'Solo Developer',
    year: '2026',
    description:
      'A native Android ride booking application built with Java, featuring an offline first architecture powered by Room database. The app handles booking management, conflict detection, and a clean RecyclerView driven UI with Material Design components.',
    stack: ['Java', 'Android', 'Room DB', 'SQLite', 'RecyclerView', 'Material Design'],
    github: null,
    live: null,
    images: [
      taxigoAndroidHero,
      taxigoAndroidDashboard,
      taxigoAndroidDashboard2,
      taxigoAndroidAddBooking,
      taxigoAndroidAddBooking2,
      taxigoAndroidAllTrips,
      taxigoAndroidClientList,
      taxigoAndroidClientData,
    ],
    highlights: [
      'Offline first architecture with Room DB for local data persistence',
      'Smart conflict detection to prevent double bookings',
      'RecyclerView driven dynamic UI for booking lists',
      'Material Design components for a native Android feel',
      'SQLite local database with full CRUD operations',
      'Clean MVC architecture with separation of concerns',
    ],
    learned: [
      'Native Android development with Java from scratch',
      'Offline first design patterns with Room DB and SQLite',
      'RecyclerView, adapters, and ViewHolder patterns',
      'Material Design UI components and Android layouts',
      'Conflict detection logic and local data sync strategies',
      'Android activity lifecycle and navigation management',
    ],
  },
  {
    id: 'hospitality-platform',
    name: 'Luxury Hospitality Platform',
    badge: null,
    category: ['Web Apps', 'Full Stack'],
    subtitle: 'Internship Project at Fekrat Al Youm Technologies',
    internship: true,
    company: 'Fekrat Al Youm Technologies',
    duration: 'June – July 2026',
    role: 'Software Developer Intern',
    year: '2026',
    highlightsTitle: 'Some of My Contributions',
    description:
      'A luxury hospitality platform serving yacht bookings, events, and restaurant reservations  built during my internship at Fekrat Al Youm Technologies (Remote, Dubai, June–July 2026).',
    stack: [
      'NestJS',
      'Next.js',
      'TypeScript',
      'Prisma',
      'Supabase',
      'PostgreSQL',
      'React 19',
      'Tailwind CSS',
      'Framer Motion',
      'shadcn/ui',
      'Socket.io',
      'JWT',
      'bcrypt',
      'Google Analytics',
    ],
    github: null,
    live: null,
    images: [
      hospitalityPlatformHero,
      hospitalityPlatformShot1,
      hospitalityPlatformShot2,
      hospitalityPlatformShot3,
      hospitalityPlatformShot4,
      hospitalityPlatformShot5,
      hospitalityPlatformShot6,
    ],
    highlights: [
      'Developed RESTful API endpoints with NestJS and TypeScript for yacht bookings, events, and restaurant reservations',
      'Built a full virtual wallet payment system with balance management, top up flows, and transaction tracking linked to bookings',
      'Implemented dual authentication (cookie-based and JWT) across multiple backend modules including bookings, reviews, enquiries, and favorites',
      'Designed PostgreSQL schemas with Prisma ORM on Supabase including migrations, foreign key relations, and connection optimization',
      'Built responsive UI pages and reusable React components with Next.js and Tailwind CSS v4 including wallet dashboard and bookings management',
      'Implemented admin features including role management, user suspension, password/email change with bcrypt, and a system audit log',
      'Collaborated in a team using Git branch-based workflow with defined module ownership',
    ],
    learned: [
      'Building production-level RESTful APIs with NestJS and TypeScript',
      'Designing and implementing a full virtual wallet and payment flow',
      'Dual authentication strategies using cookies and JWT tokens',
      'PostgreSQL schema design with Prisma ORM, migrations, and connection pooling on Supabase',
      'Building responsive UI with Next.js, Tailwind CSS v4, and shadcn/ui components',
      'Admin panel features: role management, user suspension, audit logging',
      'Branch-based team Git workflow and resolving schema conflicts across modules',
      'Integrating Google Analytics 4 and Open-Meteo weather API',
    ],
  },
]
