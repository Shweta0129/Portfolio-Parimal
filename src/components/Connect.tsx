import { motion } from 'framer-motion';
import { personalData } from '../data';
import { Mail, Linkedin, Github, GraduationCap, Award, Phone } from 'lucide-react';

const Connect = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
      {/* Education & Achievements Column */}
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-textMain flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary w-8 h-8" /> Education
          </h2>
          <div className="space-y-6">
            {personalData.education.map((edu, index) => (
              <div key={index} className="glass-card p-6 border-l-4 border-l-primary hover:bg-gray-50 transition-colors shadow-sm cursor-default">
                <h3 className="text-xl font-bold text-textMain">{edu.degree}</h3>
                <p className="text-textMuted mt-2 font-medium">{edu.institution}</p>
                <span className="text-sm font-bold text-primary mt-1 block">{edu.duration}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-black text-textMain flex items-center gap-3 mb-8">
            <Award className="text-secondary w-8 h-8" /> Achievements
          </h2>
          <div className="flex flex-col gap-4">
            {personalData.achievements.map((ach, index) => (
              <div key={index} className="flex items-start gap-4 p-4 glass-card shadow-sm hover:shadow-md transition-shadow">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 animate-ping" />
                <p className="text-textMuted font-medium flex-1">{ach}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Connect Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center shadow-lg"
      >
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[80px] rounded-full mix-blend-multiply" />
        
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-textMain">Let's <span className="text-primary">Connect</span></h2>
        <p className="text-textMuted text-lg mb-12 max-w-sm font-medium leading-relaxed">
          Open for opportunities in data, AI, and backend engineering. Let's build the future together.
        </p>

        <div className="space-y-6 relative z-10">
          <a
            href={`mailto:${personalData.contact.email}`}
            className="flex items-center gap-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
          >
            <div className="p-4 bg-white shadow-sm rounded-full group-hover:bg-primary/10 transition-colors">
              <Mail className="w-6 h-6 text-textMuted group-hover:text-primary transition-colors" />
            </div>
            <div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-1">Email</span>
              <span className="text-lg font-bold text-textMain">{personalData.contact.email}</span>
            </div>
          </a>

          <div className="flex items-center gap-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm cursor-default">
            <div className="p-4 bg-white shadow-sm rounded-full">
              <Phone className="w-6 h-6 text-textMuted" />
            </div>
            <div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-1">Phone</span>
              <span className="text-lg font-bold text-textMain">{personalData.contact.phone}</span>
            </div>
          </div>

          <div className="flex gap-6 mt-12">
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 p-4 bg-white border border-gray-200 shadow-sm rounded-xl flex justify-center items-center gap-3 hover:bg-[#F3F2EF] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors font-bold text-textMain"
            >
              <Linkedin className="w-6 h-6" /> <span>LinkedIn</span>
            </a>
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 p-4 bg-white border border-gray-200 shadow-sm rounded-xl flex justify-center items-center gap-3 hover:bg-gray-100 hover:text-black hover:border-black transition-colors font-bold text-textMain"
            >
              <Github className="w-6 h-6" /> <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Connect;
