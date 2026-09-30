import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, GraduationCap } from 'lucide-react';

const experiences = [
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
        icon: <Building2 size={20} />
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
        icon: <Briefcase size={20} />
    },
    {
        title: "AI Instructor",
        company: "NAVTTC",
        period: "Additional Experience",
        description: [
            "Teach fundamentals of Artificial Intelligence and Machine Learning, including core concepts, practical implementations, and student guidance.",
            "Conduct sessions on real-world applications, assist students with projects, and simplify complex technical topics."
        ],
        icon: <GraduationCap size={20} />
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 hover:bg-white/5 transition-colors border-white/5"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                                        <p className="text-zinc-400 font-medium">{exp.company}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-400 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
