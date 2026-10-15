import { motion } from 'framer-motion';
import { StarField } from './components/StarField';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Clients } from './components/Clients';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Github, Linkedin, Mail, Download, Layout, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen text-ink bg-background">
      <StarField />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-secondary/10 shadow-[0_8px_30px_-20px_rgba(102,45,128,0.4)]">
        <h1 className="text-2xl font-black text-gradient">MW.</h1>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#clients" className="hover:text-primary transition-colors">Clients</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-1.5 text-primary">
            Say Hello <Sparkles size={12} />
          </a>
        </div>
        <button className="md:hidden p-2 text-muted">
          <Layout size={24} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-40 w-[36rem] h-[36rem] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-secondary/15 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-5 py-1.5 mb-8 text-xs font-black tracking-[0.2em] uppercase border border-primary/20 bg-surface text-primary rounded-md shadow-[0_8px_24px_-12px_rgba(225,30,121,0.45)]"
          >
            Java Software Engineer · Android Developer
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight uppercase">
            MUHAMMAD<br />
            <span className="text-gradient">WASEEM</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Co-Founder &amp; CEO of Ziyaan Technologies. I build Android, Java/JavaFX desktop, and React/Node.js web apps for businesses and government clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 font-black uppercase tracking-widest text-sm text-white bg-brand rounded-md hover:brightness-110 transition-all shadow-xl shadow-primary/25 hover:translate-y-[-2px]">
              Explore My Journey
            </a>
            <a href={`${import.meta.env.BASE_URL}Muhammad-Waseem-CV.pdf`} download className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 font-black uppercase tracking-widest text-sm text-ink bg-surface border border-secondary/15 rounded-md hover:border-primary/30 transition-all text-center">
              <Download size={18} className="text-primary shrink-0" />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </section>

      <About />
      <Clients />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="py-12 px-6 bg-plum">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/muhammad-waseem-a5191038a/" className="text-white/60 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="https://github.com/WaseemAyan" className="text-white/60 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="mailto:muhammadwaseem92123@gmail.com" className="text-white/60 hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
