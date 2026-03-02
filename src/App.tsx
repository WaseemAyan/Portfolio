import { motion } from 'framer-motion';
import { StarField } from './components/StarField';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Github, Linkedin, Mail, Download, Heart, Layout, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen text-white bg-[#0a0a0a]">
      <StarField />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
        <h1 className="text-2xl font-black text-gradient">MW.</h1>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-1.5 text-primary">
            Say Hello <Sparkles size={12} />
          </a>
        </div>
        <button className="md:hidden p-2 text-zinc-400">
          <Layout size={24} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
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
            className="inline-block px-5 py-1.5 mb-8 text-xs font-black tracking-[0.2em] uppercase border border-primary/30 bg-primary/10 text-primary rounded-full shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            Innovating Through Code
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight uppercase">
            MUHAMMAD<br />
            <span className="text-gradient">WASEEM</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Dynamic and results-driven Software Engineer with hands-on experience in AI Engineering, Java, and Full-Stack development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 font-black uppercase tracking-widest text-sm text-white bg-primary rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-primary/25 hover:translate-y-[-2px]">
              Explore My Journey
            </a>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 font-black uppercase tracking-widest text-sm text-white border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-center">
              <Download size={18} className="text-primary shrink-0" />
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/muhammad-waseem-a5191038a/" className="text-zinc-500 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="https://github.com/WaseemAyan" className="text-zinc-500 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="mailto:muhammadwaseem92123@gmail.com" className="text-zinc-500 hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-zinc-600 text-sm font-medium flex items-center gap-2">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by MW © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
