import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalData } from '../data';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const shapesY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const shapesY2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 bg-background">
      
      {/* Moving Background Text - Cohesion Style */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-5">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <h1 className="text-[20vw] font-black leading-none text-textMain tracking-tighter mx-8">
            PARIMAL DONGARE PARIMAL DONGARE PARIMAL DONGARE 
          </h1>
        </motion.div>
      </div>

      {/* Floating 3D Primitives Image Integration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.img 
          style={{ y: shapesY1 }} 
          src="/orange_cube.png" 
          className="absolute top-[10%] left-[10%] w-48 md:w-64 opacity-90 animate-float blend-multiply" 
          alt="3D Cube" 
        />
        <motion.img 
          style={{ y: shapesY2 }} 
          src="/purple_sphere.png" 
          className="absolute top-[20%] right-[10%] w-56 md:w-72 opacity-95 animate-float animation-delay-2000 blend-multiply" 
          alt="3D Sphere" 
        />
        <motion.img 
          style={{ y: shapesY1 }} 
          src="/blue_cylinder.png" 
          className="absolute bottom-[10%] left-[20%] w-40 md:w-56 opacity-90 animate-float animation-delay-4000 blend-multiply" 
          alt="3D Cylinder" 
        />
        <motion.img 
          style={{ y: shapesY2 }} 
          src="/green_star.png" 
          className="absolute bottom-[20%] right-[15%] w-44 md:w-60 opacity-90 animate-float-slow animation-delay-1000 blend-multiply" 
          alt="3D Star" 
        />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex flex-col items-center text-center mt-8 w-full max-w-5xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-textMain mb-10 leading-[1.1]"
        >
          Hi, I'm {personalData.name.split(' ')[0]} <br/>
          <span className="text-gray-400 font-bold block mt-2 text-4xl md:text-6xl">{personalData.title}</span>
        </motion.h2>

        {/* Central Squircle Profile - Natural Color Without Distracting Filters */}
        <motion.div 
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] md:rounded-[4rem] group z-20 hover:scale-[1.02] transition-transform duration-500 shadow-2xl bg-white overflow-hidden"
        >
          <img 
            src="/profile.jpg" 
            alt={personalData.name} 
            className="w-full h-full object-cover object-top opacity-100 group-hover:scale-105 transition-transform duration-700" 
          />
        </motion.div>

        {/* Cohesion Large "Let's Work Together" Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32"
        >
          <div className="flex flex-col items-center gap-6 bg-white p-8 md:p-12 rounded-[3xl] md:rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden group">
            <h3 className="text-4xl md:text-5xl font-black text-textMain relative z-10 mb-4">Let's Work Together!</h3>
            
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <a href="#projects" className="bg-[#ff5a1f] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e04a15] transition-colors shadow-xl shadow-[#ff5a1f]/30 flex items-center gap-2">
                Discover Projects <ArrowRight className="w-5 h-5"/>
              </a>
              <a href="/Parimal_Dongare_resume (1) (1).pdf" download className="bg-gray-100 text-textMain px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5"/> Get Resume
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
