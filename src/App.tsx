import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Connect from './components/Connect';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scrolling via Lenis or native CSS
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-background text-textMain font-sans selection:bg-primary/30 selection:text-white relative min-h-screen">
      <Navbar />

      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />
      
      {/* Dynamic Background Noise/Gradient */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[130px] rounded-full mix-blend-screen mix-blend-lighten animate-float" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen mix-blend-lighten animate-glow" />
      </div>

      <main className="max-w-7xl mx-auto px-6 lg:pb-32 space-y-32 lg:space-y-48 overflow-x-hidden">
        <Hero />
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Connect /></div>
      </main>
    </div>
  );
}

export default App;
