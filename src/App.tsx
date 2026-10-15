import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
