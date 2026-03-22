import { motion } from 'framer-motion';
import { personalData } from '../data';
import { User, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-secondary/10 text-secondary rounded-2xl shadow-sm">
            <User className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-textMain">About <span className="text-gray-400">Me</span></h2>
        </div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
          <p className="text-xl md:text-2xl font-medium text-textMuted leading-relaxed md:leading-loose relative z-10">
            {personalData.summary}
          </p>
          
          <div className="mt-8 flex gap-6 text-gray-300">
            <Cpu className="w-8 h-8 opacity-50 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
