import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.toLowerCase());
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] md:w-auto flex items-center justify-between bg-white/80 backdrop-blur-3xl border border-gray-200 p-2 md:pl-2 md:pr-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
      >
        <div className="md:hidden pl-4 font-black text-xl text-primary tracking-tighter">PD</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all ${
                  isActive ? 'text-primary' : 'text-textMuted hover:text-textMain hover:bg-gray-100'
                } rounded-full`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-textMain relative z-[60] mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item, i) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className={`text-3xl font-black ${
                    isActive ? 'text-primary' : 'text-textMain'
                  }`}
                >
                  {item}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
