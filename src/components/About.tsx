import { motion } from 'framer-motion';
import { personalData } from '../data';
import { User, Cpu, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <div className="p-4 bg-secondary/10 text-secondary rounded-2xl shadow-sm border border-secondary/20 relative group">
            <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <User className="w-8 h-8 relative z-10" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-textMain tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Me</span>
          </h2>
        </div>

        <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl border border-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 text-xl md:text-2xl font-medium text-textMuted leading-relaxed md:leading-loose max-w-4xl">
            <Sparkles className="text-primary w-8 h-8 mb-6 animate-pulse opacity-70" />
            {personalData.summary}
          </div>
          
          <div className="mt-12 flex gap-6 text-gray-300 relative z-10 border-t border-gray-100 pt-8">
            <Cpu className="w-10 h-10 opacity-40 hover:opacity-100 transition-opacity duration-300 hover:text-primary" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
