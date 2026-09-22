import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[90vh] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] -z-10"></div>

      <div className="md:w-1/2 text-center md:text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-accent"
        >
          Available for Opportunities
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight"
        >
          Hi, I'm <br />
          <span className="gradient-text">Gnaneswar</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
        >
          Full Stack Developer crafting <span className="text-white">scalable and impactful digital solutions</span> with a passion for AI and problem-solving.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center"
        >
          <a href="#projects" className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5">
            View Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Yelishetty-Gnaneswar" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="md:w-5/12 mt-20 md:mt-0 relative"
      >
        <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full border border-white/5"></div>
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative p-2">
            <div className="w-full h-full rounded-full overflow-hidden">
               <img 
                src={profileImg} 
                alt="Yelishetty Gnaneswar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
