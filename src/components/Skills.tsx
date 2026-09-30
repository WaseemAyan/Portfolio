import { motion } from 'framer-motion';
import { Database, Layout, Smartphone, Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: "Mobile, Desktop & Web",
        icon: <Smartphone className="text-primary" />,
        skills: ["Android (Kotlin, Jetpack Compose, Java)", "React Native", "Java/JavaFX Desktop Apps", "React & Node.js", "REST API Integration", "UI/UX Implementation"]
    },
    {
        title: "Languages & Databases",
        icon: <Database className="text-primary" />,
        skills: ["Kotlin", "Java", "JavaScript", "PHP (Basic)", "MySQL", "PostgreSQL"]
    },
    {
        title: "Tools & Concepts",
        icon: <Wrench className="text-primary" />,
        skills: ["Android Studio", "Clean Architecture", "Git", "Debugging & Performance Optimization"]
    },
    {
        title: "Core Concepts",
        icon: <Layout className="text-primary" />,
        skills: ["Cross-platform Development", "API Integration", "Mobile UI/UX Design", "Clean Code Practices"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Skill <span className="text-gradient">Arsenal</span></h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-6 border-white/5 hover:border-primary/20 transition-all group"
                        >
                            <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 w-fit mb-6 group-hover:bg-primary/10 transition-colors">
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-4">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, i) => (
                                    <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
