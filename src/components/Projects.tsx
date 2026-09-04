import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
    Building2,
    CalendarCheck,
    Coffee,
    ExternalLink,
    Factory,
    Github,
    Landmark,
    Play,
    Smartphone,
    Utensils
} from 'lucide-react';

type Project = {
    title: string;
    type: string;
    description: string;
    tech: string[];
    icon: LucideIcon;
    featured?: boolean;
    client?: string;
    badge?: string;
    highlights?: string[];
    link?: string;
    playStore?: string;
    github?: string;
};

const projects: Project[] = [
    {
        title: "HumKaam",
        type: "Android + Web Platform",
        description: "Pakistan's #1 verified professionals network — connects clients with ID-verified, background-checked plumbers, electricians, tutors, and nurses.",
        tech: ["Kotlin", "Jetpack Compose", "React", "Node.js", "PostgreSQL"],
        icon: Smartphone,
        featured: true,
        badge: "Published on Google Play",
        highlights: [
            "Companion web platform with search, booking, in-app messaging, reviews, and admin dashboards.",
            "REST API integration and real-time data handling across the Android and web clients."
        ],
        link: "https://www.humkaam.com",
        playStore: "https://play.google.com/store/apps/details?id=com.humkaam.app"
    },
    {
        title: "Chaman Bazar",
        type: "Government Mobile App",
        description: "Government digital initiative to regulate and monitor the prices of essential commodities across the Chaman region.",
        tech: ["React Native", "Node.js", "MySQL"],
        icon: Landmark,
        featured: true,
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
        description: "Reservation, hall management, and analytics platform built for Grand Kebabish Banquet.",
        tech: ["Java", "JavaFX", "MySQL"],
        icon: CalendarCheck,
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Pakwan Management System",
        type: "Java / JavaFX Desktop",
        description: "Restaurant order handling, menu management, billing, and reporting in a single desktop system.",
        tech: ["Java", "JavaFX", "MySQL"],
        icon: Utensils,
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Cafe Baldia",
        type: "Café POS & Management",
        description: "POS and management system covering dine-in and delivery orders, table management, billing, ledger (khata), and daily sales reports.",
        tech: ["Java", "JavaFX", "MySQL"],
        icon: Coffee,
        client: "Ziyaan Technologies client work"
    },
    {
        title: "Rahim Khan Bhati (Bricks Bhatti)",
        type: "Manufacturing System",
        description: "Manufacturing management system for a brick production unit: production tracking, inventory, sales records, and financial reporting.",
        tech: ["Java", "JavaFX", "MySQL"],
        icon: Factory,
        client: "Ziyaan Technologies client work"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative bg-zinc-900/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((proj, idx) => {
                        const Icon = proj.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                className={`glass-card group overflow-hidden border-white/5 flex flex-col ${proj.featured ? 'md:col-span-2 md:flex-row' : ''}`}
                            >
                                <div className={`bg-gradient-to-br from-primary/20 to-zinc-800 p-8 flex items-center justify-center relative overflow-hidden ${proj.featured ? 'h-48 md:h-auto md:w-72 shrink-0' : 'h-48'}`}>
                                    <Icon className="w-16 h-16 text-primary opacity-20 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/10 text-primary">
                                        {proj.type}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
                                    {(proj.badge || proj.client) && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {proj.badge && (
                                                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                                    {proj.badge}
                                                </span>
                                            )}
                                            {proj.client && (
                                                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 flex items-center gap-1.5">
                                                    <Building2 size={11} /> {proj.client}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <p className="text-zinc-400 mb-6">
                                        {proj.description}
                                    </p>
                                    {proj.highlights && (
                                        <ul className="space-y-3 mb-6">
                                            {proj.highlights.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-zinc-400 items-start text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {proj.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-mono bg-white/5 border border-white/10 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    {(proj.link || proj.playStore || proj.github) && (
                                        <div className="mt-auto flex flex-wrap items-center gap-5">
                                            {proj.link && (
                                                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                                                    Visit Website <ExternalLink size={14} />
                                                </a>
                                            )}
                                            {proj.playStore && (
                                                <a href={proj.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                                                    <Play size={14} className="fill-current" /> Google Play
                                                </a>
                                            )}
                                            {proj.github && (
                                                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                                    <Github size={18} />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
