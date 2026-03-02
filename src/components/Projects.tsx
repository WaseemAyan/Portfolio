import { motion } from 'framer-motion';
import { Code, ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "GKB Banquet Booking System",
        type: "Java / JavaFX Desktop",
        description: "Complete booking and event management system for Grand Kebabish Banquet.",
        tech: ["Java", "JavaFX", "MySQL"],
        link: "#"
    },
    {
        title: "Kebabish Pakwan Desktop App",
        type: "Order Handling",
        description: "Fully built for order handling, menu management, and reporting.",
        tech: ["Java", "JavaFX"],
        link: "#"
    },
    {
        title: "ShiftSmart Android App",
        type: "Mobile Development",
        description: "Designed and developed a mobile app for gig-based shift management.",
        tech: ["Android", "Kotlin", "Firebase"],
        link: "#"
    },
    {
        title: "ShiftSmart Web App",
        type: "Web Development",
        description: "Built web platform for shifts, workers, and admin management.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        link: "#"
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
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card group overflow-hidden border-white/5 flex flex-col"
                        >
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-zinc-800 p-8 flex items-center justify-center relative overflow-hidden">
                                <Code className="w-16 h-16 text-primary opacity-20 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/10 text-primary">
                                    {proj.type}
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{proj.title}</h3>
                                <p className="text-zinc-400 mb-6 line-clamp-2">
                                    {proj.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {proj.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono bg-white/5 border border-white/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto flex items-center gap-4">
                                    <a href={proj.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                                        View Project <ExternalLink size={14} />
                                    </a>
                                    <a href={proj.link} className="text-zinc-500 hover:text-white transition-colors">
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
