import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative bg-zinc-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in <span className="text-gradient">Touch</span></h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-md">
                            Ready to take the next step together? Reach out for collaborations, inquiries, or just to say hi.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:muhammadwaseem92123@gmail.com" className="flex items-center gap-6 group p-4 border border-white/5 hover:border-primary/20 rounded-2xl bg-white/5 transition-all">
                                <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Email Me</p>
                                    <p className="font-bold">muhammadwaseem92123@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+3172532083" className="flex items-center gap-6 group p-4 border border-white/5 hover:border-primary/20 rounded-2xl bg-white/5 transition-all">
                                <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Call Me</p>
                                    <p className="font-bold">(317) 253-2083</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 group p-4 border border-white/5 hover:border-white/10 rounded-2xl bg-white/5 transition-all opacity-80">
                                <div className="p-4 bg-zinc-800 rounded-xl text-zinc-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                                    <p className="font-bold">Quetta, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 border-white/5"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="How can I help you?" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Write your message here..." />
                            </div>
                            <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
