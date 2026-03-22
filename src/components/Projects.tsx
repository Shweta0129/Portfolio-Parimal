import { motion } from 'framer-motion';
import { personalData } from '../data';
import { Rocket, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-textMain">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-textMuted mt-4 text-lg font-medium">Architectured for performance and precision.</p>
        </div>
        <div className="p-4 bg-accent/10 text-accent rounded-full hidden md:block animate-bounce shadow-sm">
          <Rocket className="w-8 h-8" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
          >
            {/* Hover Glow Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur-md pointer-events-none" />
            
            <div className="relative h-full glass-card p-8 flex flex-col justify-between overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 transform group-hover:-translate-y-1">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-black text-textMain group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-gray-400 group-hover:text-textMain transition-colors w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                
                <p className="text-textMuted font-medium leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto text-sm font-semibold">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-textMuted tracking-wide pointer-events-none shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
