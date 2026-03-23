import { motion } from 'framer-motion';
import { personalData } from '../data';
import { Mail, Linkedin, Github, GraduationCap, Award, Phone } from 'lucide-react';

const Connect = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 py-16">
      {/* Education & Achievements Column */}
      <div className="space-y-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-textMain flex items-center gap-4 mb-8">
            <GraduationCap className="text-primary w-10 h-10 p-2 bg-primary/10 rounded-xl" /> Education
          </h2>
          <div className="space-y-6">
            {personalData.education.map((edu, index) => (
              <div key={index} className="glass-card p-6 md:p-8 border-l-4 border-l-primary hover:bg-gray-50 transition-colors shadow-sm cursor-default">
                <h3 className="text-xl md:text-2xl font-bold text-textMain">{edu.degree}</h3>
                <p className="text-textMuted mt-2 font-medium text-lg">{edu.institution}</p>
                <span className="text-sm font-bold text-primary mt-3 inline-block bg-primary/10 px-3 py-1 rounded-full">{edu.duration}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-textMain flex items-center gap-4 mb-8">
            <Award className="text-secondary w-10 h-10 p-2 bg-secondary/10 rounded-xl" /> Achievements
          </h2>
          <div className="flex flex-col gap-4">
            {personalData.achievements.map((ach, index) => (
              <div key={index} className="flex items-start gap-4 p-5 glass-card shadow-sm hover:shadow-md transition-shadow group">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                <p className="text-textMuted font-medium flex-1 text-base md:text-lg leading-relaxed">{ach}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Connect Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col justify-center shadow-2xl border-2 border-white"
      >
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[80px] rounded-full mix-blend-multiply" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full mix-blend-multiply" />
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-textMain relative z-10 tracking-tight">Let's <span className="text-primary block mt-2">Connect</span></h2>
        <p className="text-textMuted text-lg mb-12 max-w-sm font-medium leading-relaxed relative z-10">
          Open for opportunities in data, AI, and backend engineering. Let's build the future together.
        </p>

        <div className="space-y-6 relative z-10 w-full">
          <a
            href={`mailto:${personalData.contact.email}`}
            className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 group w-full overflow-hidden"
          >
            <div className="p-3 sm:p-4 bg-white shadow-sm rounded-full group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
              <Mail className="w-6 h-6 text-textMuted group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest block mb-1">Email</span>
              <span className="text-base sm:text-lg font-bold text-textMain truncate block w-full">{personalData.contact.email}</span>
            </div>
          </a>

          <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm cursor-default w-full overflow-hidden hover:shadow-md transition-all">
            <div className="p-3 sm:p-4 bg-white shadow-sm rounded-full flex-shrink-0">
              <Phone className="w-6 h-6 text-textMuted" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest block mb-1">Phone</span>
              <span className="text-base sm:text-lg font-bold text-textMain truncate block w-full">{personalData.contact.phone}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 w-full">
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 p-4 bg-white border border-gray-200 shadow-sm rounded-xl flex justify-center items-center gap-3 hover:bg-[#F3F2EF] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors font-bold text-lg text-textMain group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" /> <span>LinkedIn</span>
            </a>
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 p-4 bg-white border border-gray-200 shadow-sm rounded-xl flex justify-center items-center gap-3 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors font-bold text-lg text-textMain group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" /> <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Connect;
