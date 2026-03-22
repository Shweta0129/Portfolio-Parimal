import { motion } from 'framer-motion';
import { personalData } from '../data';
import { Building2 } from 'lucide-react';

const Experience = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-primary/10 text-primary rounded-2xl shadow-sm">
          <Building2 className="w-6 h-6" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-textMain">Experience Timeline</h2>
      </div>

      <div className="relative border-l border-gray-200 ml-6 md:ml-12 space-y-16">
        {personalData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-16 group"
          >
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2 shadow-[0_0_15px_rgba(255,100,0,0.4)] group-hover:scale-150 transition-transform duration-300" />
            <div className="absolute w-8 h-[1px] bg-gray-200 left-0 top-4 hidden md:block" />

            <div className="glass-card p-6 md:p-10 hover:border-primary/30 transition-colors duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <span className="text-sm tracking-wider text-primary font-bold mb-2 block uppercase">
                {exp.duration}
              </span>
              <h3 className="text-2xl font-black mb-1 text-textMain">{exp.role}</h3>
              <h4 className="text-lg text-textMuted mb-6 font-semibold">{exp.company}</h4>

              <ul className="space-y-4 text-gray-600 leading-relaxed font-medium">
                {exp.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary/50 mt-2.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
