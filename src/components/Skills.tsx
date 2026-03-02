import { motion } from 'framer-motion';
import { Layout, Smartphone, Sparkles, UserCheck } from 'lucide-react';

const skillCategories = [
    {
        title: "Core Development",
        icon: <Layout className="text-primary" />,
        skills: ["Java", "JavaFX", "OOP", "Data Structures"]
    },
    {
        title: "Mobile & Web",
        icon: <Smartphone className="text-primary" />,
        skills: ["Android (Java/Kotlin)", "HTML", "CSS", "JavaScript", "React"]
    },
    {
        title: "Design & UX",
        icon: <Sparkles className="text-primary" />,
        skills: ["UI/UX Principles", "Responsive Design", "Figma Basics"]
    },
    {
        title: "Soft Skills",
        icon: <UserCheck className="text-primary" />,
        skills: ["Problem Solving", "Debugging", "Client Coordination", "Communication"]
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
