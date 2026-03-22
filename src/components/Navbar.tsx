import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-white/80 backdrop-blur-3xl border border-gray-200 p-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
    >
      {navItems.map((item, i) => (
        <a
          key={i}
          href={`#${item.toLowerCase()}`}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            i === 0 
              ? 'bg-primary text-white shadow-lg shadow-primary/30' 
              : 'text-textMuted hover:text-textMain hover:bg-gray-100'
          }`}
        >
          {item}
        </a>
      ))}
    </motion.div>
  );
};

export default Navbar;
