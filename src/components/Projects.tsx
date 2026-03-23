import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalData } from '../data';
import { Rocket, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full group cursor-pointer"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2rem] opacity-0 group-hover:opacity-20 transition duration-500 blur-xl pointer-events-none" style={{ transform: "translateZ(-10px)" }} />
        
        <div 
          className="relative h-full bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300"
          style={{ transform: "translateZ(30px)" }}
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-black text-textMain group-hover:text-primary transition-colors text-balance">
                {project.title}
              </h3>
              <div className="p-2 bg-gray-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
            
            <p className="text-textMuted font-medium leading-relaxed mb-8">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-textMain rounded-full text-xs font-bold tracking-wide shadow-sm transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

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
        <div className="p-4 bg-accent/10 text-accent rounded-full hidden md:block animate-pulse shadow-md border border-accent/20">
          <Rocket className="w-8 h-8" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {personalData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
