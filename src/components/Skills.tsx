import { motion } from 'framer-motion';
import { personalData } from '../data';
import { Code2, Database, Brain, Briefcase } from 'lucide-react';

const icons = [Brain, Code2, Database, Briefcase];

const Skills = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-textMain">
            <span className="text-primary">Core</span> Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(personalData.skills).map(([category, skills], index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-primary/10 transition-colors shadow-sm">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-textMain capitalize tracking-wider">
                    {category.replace('ai', 'AI & ML')}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-textMuted hover:text-primary transition-colors cursor-default hover:bg-white shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
