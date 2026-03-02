import { motion } from 'framer-motion';
import { User, Rocket, Target } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square glass-card rounded-3xl p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700" />
                            <div className="h-full w-full rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center">
                                <User className="w-32 h-32 text-primary opacity-20" />
                            </div>

                            {/* Stats Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                className="absolute -right-4 top-1/4 glass-card p-4 border border-primary/20 shadow-xl shadow-primary/10"
                            >
                                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Passionate about</p>
                                <p className="text-lg font-bold text-gradient">AI Engineering</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -left-4 bottom-1/4 glass-card p-4 border border-primary/20 shadow-xl shadow-primary/10"
                            >
                                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Focusing on</p>
                                <p className="text-lg font-bold text-gradient">System Reliability</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Passionate About Building <span className="text-gradient">Impactful Solutions</span></h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            I am a Bachelor of Science in Software Engineering student (Class of 2026) with a deep passion for creating clean, reliable systems. Currently honing my skills as an AI Engineering Intern at SDSS, I focus on exploring machine learning concepts and delivering high-quality prototypes.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                    <Rocket size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Goal-Driven</h4>
                                    <p className="text-zinc-400 text-sm">Committed to delivering projects from planning to deployment with full ownership.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Problem Solver</h4>
                                    <p className="text-zinc-400 text-sm">Known for a track record of building production-ready apps in real business environments.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
