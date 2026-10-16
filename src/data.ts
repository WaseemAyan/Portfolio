import type { LucideIcon } from 'lucide-react';
import {
    Bot,
    Briefcase,
    Building2,
    CalendarCheck,
    Coffee,
    Cpu,
    Factory,
    GraduationCap,
    Landmark,
    Monitor,
    ShoppingCart,
    Smartphone,
    Store,
    TrafficCone,
    Utensils,
    Zap
} from 'lucide-react';
import gkbLogo from './assets/clients/gkb.png';
import govtBalochistanLogo from './assets/clients/govt-balochistan.png';
import gsLogo from './assets/clients/gs.png';
import humkaamLogo from './assets/clients/humkaam.png';
import kebabishMarqueeLogo from './assets/clients/kebabish-marquee.png';
import nkMartLogo from './assets/clients/nk-mart.png';
import qmbLogo from './assets/clients/qmb.png';
import cafeBaldiaImg from './assets/projects/cafe-baldia.png';
import chamanBazarImg from './assets/projects/chaman-bazar.png';
import chamanBazarComplaintEnImg from './assets/projects/chaman-bazar-complaint-en.webp';
import chamanBazarComplaintUrImg from './assets/projects/chaman-bazar-complaint-ur.webp';
import chamanBazarFruitsImg from './assets/projects/chaman-bazar-fruits.webp';
import chamanBazarHomeImg from './assets/projects/chaman-bazar-home.webp';
import gafforSonsImg from './assets/projects/gaffor-sons.png';
import gkbBanquetImg from './assets/projects/gkb-banquet.png';
import humkaamAndroidImg from './assets/projects/humkaam-android.png';
import humkaamHomeImg from './assets/projects/humkaam-home.webp';
import humkaamPlayStoreImg from './assets/projects/humkaam-play-store.webp';
import humkaamProfileImg from './assets/projects/humkaam-profile.webp';
import humkaamStepsImg from './assets/projects/humkaam-steps.webp';
import humkaamWebImg from './assets/projects/humkaam-web.png';
import nkSuperMartImg from './assets/projects/nk-super-mart.png';
import pakwanImg from './assets/projects/pakwan-management.png';
import quettaMainBoardImg from './assets/projects/quetta-main-board.png';
import safeCityImg from './assets/projects/safecity-anpr.png';
import studyBuddyImg from './assets/projects/study-buddy.png';

export type ProjectImage = {
    src: string;
    alt: string;
    portrait?: boolean;
    // Image used on the grid tile; otherwise the first wide screenshot is used
    cover?: boolean;
};

export type ProjectCategory = 'Mobile' | 'Desktop' | 'Web' | 'AI';

export type Project = {
    title: string;
    type: string;
    category: ProjectCategory;
    description: string;
    tech: string[];
    icon: LucideIcon;
    images?: ProjectImage[];
    featured?: boolean;
    // Card background on the top-projects grid
    color?: string;
    logo?: string;
    // Padding for logos that should sit inside the white circle instead of filling it
    logoPad?: string;
    client?: string;
    badge?: string;
    highlights?: string[];
    link?: string;
    playStore?: string;
    github?: string;
};

export const projects: Project[] = [
    {
        title: "HumKaam",
        type: "Android + Web Platform",
        category: "Mobile",
        description: "Pakistan's #1 verified professionals network — connects clients with ID-verified, background-checked plumbers, electricians, tutors, and nurses.",
        tech: ["Kotlin", "Jetpack Compose", "React", "Node.js", "PostgreSQL"],
        icon: Smartphone,
        images: [
            { src: humkaamPlayStoreImg, alt: "HumKaam on the Google Play Store, by Ziyaan Technologies" },
            { src: humkaamWebImg, alt: "HumKaam web platform", cover: true },
            { src: humkaamAndroidImg, alt: "HumKaam Android app - hire trusted experts", portrait: true },
            { src: humkaamHomeImg, alt: "HumKaam Android home screen with service categories", portrait: true },
            { src: humkaamStepsImg, alt: "HumKaam featured professionals and three-step hiring flow", portrait: true },
            { src: humkaamProfileImg, alt: "HumKaam professional profile with weekly availability", portrait: true }
        ],
        featured: true,
        color: "#0a74db",
        logo: humkaamLogo,
        badge: "Published on Google Play",
        highlights: [
            "Companion web platform with search, booking, in-app messaging, reviews, and admin dashboards.",
            "REST API integration and real-time data handling across the Android and web clients."
        ],
        link: "https://www.humkaam.com",
        playStore: "https://play.google.com/store/apps/details?id=com.humkaam.app"
    },
    {
        title: "NK Super Mart Retail Management System",
        type: "Retail POS & Inventory · Chaman",
        category: "Web",
        description: "Retail POS and inventory platform for a supermarket and its warehouse, covering billing, purchasing, stock transfers, and reports.",
        tech: ["TypeScript", "NestJS", "Vue 3", "Vuetify", "MySQL"],
        icon: ShoppingCart,
        images: [{ src: nkSuperMartImg, alt: "NK Super Mart - stock on hand across warehouse and branch" }],
        featured: true,
        color: "#273377",
        logo: nkMartLogo,
        logoPad: '14px',
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Chaman Bazar",
        type: "Government Mobile App",
        category: "Mobile",
        description: "Government digital initiative to regulate and monitor the prices of essential commodities across the Chaman region.",
        tech: ["React Native", "Node.js", "MySQL"],
        icon: Landmark,
        // Play Store shot stays first: it fills the 3D phone and grid tile, while the
        // framed app screens below already include their own device bezel
        images: [
            { src: chamanBazarImg, alt: "Chaman Bazar on the Google Play Store", portrait: true },
            { src: chamanBazarHomeImg, alt: "Chaman Bazar home screen with today's price highlights", portrait: true },
            { src: chamanBazarFruitsImg, alt: "Chaman Bazar fruit prices per kg", portrait: true },
            { src: chamanBazarComplaintEnImg, alt: "Submit an overpricing complaint in English", portrait: true },
            { src: chamanBazarComplaintUrImg, alt: "Submit an overpricing complaint in Urdu", portrait: true }
        ],
        featured: true,
        color: "#1b7f3b",
        logo: govtBalochistanLogo,
        logoPad: '10px',
        client: "Government of Balochistan",
        badge: "Published on Google Play",
        highlights: [
            "Complaint submission portal for overpricing violations, supporting consumer protection and market transparency.",
            "Cross-platform front end with a Node.js/MySQL backend handling real-time data flow for public use at scale."
        ],
        playStore: "https://play.google.com/store/apps/details?id=com.chamanbazar"
    },
    {
        title: "GKB Banquet Booking System",
        type: "Java / JavaFX Desktop",
        category: "Desktop",
        description: "Reservation, hall management, and analytics platform built for Grand Kebabish Banquet.",
        tech: ["Java", "JavaFX", "MySQL"],
        icon: CalendarCheck,
        images: [{ src: gkbBanquetImg, alt: "GKB Banquet Booking System - new booking screen" }],
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Pakwan Management System",
        type: "Java / JavaFX Desktop",
        category: "Desktop",
        description: "Restaurant order handling, menu management, billing, and reporting in a single desktop system.",
        tech: ["Java", "JavaFX", "MySQL"],
        icon: Utensils,
        images: [{ src: pakwanImg, alt: "Pakwan Management System" }],
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Cafe Baldia",
        type: "Café POS & Management",
        category: "Desktop",
        description: "POS and management system covering dine-in and delivery orders, table management, billing, ledger (khata), and daily sales reports.",
        tech: ["Java", "JavaFX", "MySQL"],
        icon: Coffee,
        images: [{ src: cafeBaldiaImg, alt: "Cafe Baldia POS system" }],
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Quetta Main Board",
        type: "Retail POS & Inventory · Quetta",
        category: "Web",
        description: "Retail POS, stock management, sales, and inventory platform for an electrical goods store.",
        tech: ["TypeScript", "NestJS", "Vue 3", "Vuetify", "MySQL"],
        icon: Zap,
        images: [{ src: quettaMainBoardImg, alt: "Quetta Main Board POS - brand and category product picker" }],
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Gaffor & Sons",
        type: "Retail POS & Inventory · Quetta",
        category: "Web",
        description: "Retail POS, stock management, sales, and inventory platform.",
        tech: ["TypeScript", "NestJS", "Vue 3", "Vuetify", "MySQL"],
        icon: Store,
        images: [{ src: gafforSonsImg, alt: "Gaffor & Sons POS - pick sizes and quantities per product" }],
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Rahim Khan Bhati (Bricks Bhatti)",
        type: "Manufacturing System",
        category: "Desktop",
        description: "Manufacturing management system for a brick production unit: production tracking, inventory, sales records, and financial reporting.",
        tech: ["Java", "JavaFX", "MySQL"],
        icon: Factory,
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Multi-Agent AI Student Assistant",
        type: "AI / Research",
        category: "AI",
        description: "Multi-agent AI system that helps students with study tasks and academic workflows.",
        tech: ["Python", "LLMs", "Multi-Agent Architecture", "AI Orchestration"],
        icon: Bot,
        images: [{ src: studyBuddyImg, alt: "Study Buddy Agent - multi-agent AI student assistant" }],
        highlights: [
            "Specialized agents for task decomposition, context management, and structured academic outputs.",
            "Keeps reasoning, task execution, and user-facing responses in separate layers."
        ]
    },
    {
        title: "SafeCity AI – Real-Time Security & ANPR Platform",
        type: "Computer Vision / AI",
        category: "AI",
        description: "Python AI service that runs several deep learning models on one real-time streaming platform for city-wide security monitoring and automatic number-plate recognition (ANPR).",
        tech: ["Python", "YOLOv8", "EasyOCR", "Tesseract", "Flask", "MySQL", "SSE"],
        icon: TrafficCone,
        images: [{ src: safeCityImg, alt: "SafeCity AI - license plate recognition with unregistered plate alerts" }],
        featured: true,
        color: "#434343",
        highlights: [
            "Weapon, fight, and abnormal-activity detection modules run in parallel on YOLOv8 (Ultralytics).",
            "ANPR pipeline reads plates with EasyOCR + Tesseract, cleans the text, and checks it against a MySQL vehicle database to flag unregistered vehicles.",
            "Custom multithreaded MJPEG streaming in Flask, with Server-Sent Events for low-latency alerts and live stats dashboards.",
            "Batch mode for uploaded videos and live stream mode, with security logs stored in MySQL."
        ]
    }
];


export type Experience = {
    title: string;
    company: string;
    period: string;
    description: string[];
    tags: string[];
    icon: LucideIcon;
    color: string;
};

export const experiences: Experience[] = [
    {
        title: "Co-Founder & CEO",
        company: "Ziyaan Technologies",
        period: "Present",
        description: [
            "Co-founded and lead a software company delivering mobile, desktop, and web applications for business and government clients.",
            "Personally build and ship Java/JavaFX desktop systems and Android applications, in addition to leading the team and client relationships.",
            "Own the full project lifecycle — requirements gathering, architecture, development, testing, deployment, and client communication.",
            "Integrate REST APIs and backend systems (Node.js, PHP, MySQL/PostgreSQL) across mobile, desktop, and web products.",
            "Improve UI/UX and optimize application performance across the product portfolio."
        ],
        tags: ["Java", "JavaFX", "Android", "Node.js", "PHP", "MySQL", "PostgreSQL"],
        icon: Building2,
        color: "#004791"
    },
    {
        title: "AI Engineering Intern",
        company: "SDSS",
        period: "Oct 2025 - Apr 2026",
        description: [
            "Worked on machine learning concepts, model experimentation, and data preprocessing.",
            "Assisted in evaluating ML models and research-based implementations.",
            "Collaborated with senior engineers on AI-driven features."
        ],
        tags: ["Machine Learning", "Model Evaluation", "Data Preprocessing"],
        icon: Briefcase,
        color: "#0086cd"
    },
    {
        title: "AI Instructor",
        company: "NAVTTC",
        period: "Additional Experience",
        description: [
            "Teach fundamentals of Artificial Intelligence and Machine Learning, including core concepts, practical implementations, and student guidance.",
            "Conduct sessions on real-world applications, assist students with projects, and simplify complex technical topics."
        ],
        tags: ["Artificial Intelligence", "Machine Learning", "Mentoring"],
        icon: GraduationCap,
        color: "#009de0"
    }
];

export type Client = {
    name: string;
    logo: string;
    // Inner padding for logos sitting on the white circle
    pad?: string;
};

export const clients: Client[] = [
    { name: "Government of Balochistan", logo: govtBalochistanLogo, pad: '12px' },
    { name: "HumKaam", logo: humkaamLogo },
    { name: "Quetta Main Board Works", logo: qmbLogo, pad: '0 4px' },
    { name: "GKB", logo: gkbLogo },
    { name: "Abdul Ghaffar & Sons", logo: gsLogo, pad: '0 8px' },
    { name: "Kebabish Marquee", logo: kebabishMarqueeLogo },
    { name: "NK Mart", logo: nkMartLogo, pad: '14px' }
];

export type Expertise = {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    // Colour of the thick marker underline behind the title
    accent: 'magenta' | 'blue' | 'orange';
};

export const expertise: Expertise[] = [
    {
        title: "Android Dev",
        subtitle: "Kotlin, Compose",
        description: "Native Android apps in Kotlin and Jetpack Compose, plus cross-platform React Native. Shipped to Google Play for startups and government.",
        icon: Smartphone,
        accent: 'magenta'
    },
    {
        title: "Desktop Systems",
        subtitle: "Java, JavaFX",
        description: "POS, inventory, booking, and manufacturing systems for real businesses, built on Java/JavaFX with MySQL and clean architecture.",
        icon: Monitor,
        accent: 'blue'
    },
    {
        title: "Web & AI",
        subtitle: "React, Node, Python",
        description: "React/Node.js and NestJS/Vue web platforms with REST APIs, plus AI work: YOLOv8 computer vision and multi-agent LLM systems.",
        icon: Cpu,
        accent: 'orange'
    }
];

export const contact = {
    email: "muhammadwaseem92123@gmail.com",
    phone: "+92-3172532083",
    phoneHref: "tel:+923172532083",
    location: "Quetta, Pakistan",
    github: "https://github.com/WaseemAyan",
    githubHandle: "WaseemAyan",
    linkedin: "https://www.linkedin.com/in/muhammad-waseem-a5191038a/"
};
