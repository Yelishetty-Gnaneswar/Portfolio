import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import farmImg from '../assets/farm-predict.png';
import volunteerImg from '../assets/volunteer-hub.png';
import medImg from '../assets/medrentia.png';

const Projects = () => {
  const projects = [
    {
      title: 'MedRentia',
      description: 'A comprehensive medical equipment rental platform allowing users to book 75+ types of equipment with integrated payment solutions.',
      tech: ['MERN Stack', 'Redux', 'Stripe', 'Tailwind CSS'],
      github: '#',
      live: 'https://medrentia.vercel.app/',
      image: medImg,
    },
    {
      title: 'Farm Predict',
      description: 'An AI-based crop recommendation system using SVM models to suggest optimal crops based on soil and climate parameters.',
      tech: ['Python', 'FastAPI', 'React', 'Scikit-Learn'],
      github: '#',
      live: 'https://farmpredict.vercel.app/',
      image: farmImg,
    },
    {
      title: 'VolunteerHub',
      description: 'Full-stack volunteer management system with role-based authentication, interactive dashboards, and event tracking.',
      tech: ['Spring Boot', 'React', 'MySQL', 'JWT'],
      github: '#',
      live: 'https://volunteer-management-system-blush.vercel.app/',
      image: volunteerImg,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl">
            A selection of my recent work, ranging from web applications to AI-powered predictive systems.
          </p>
        </div>
        <a href="https://github.com/Yelishetty-Gnaneswar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          View all on GitHub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-card p-0 overflow-hidden flex flex-col group`}
          >
            <div className={`h-48 relative overflow-hidden`}>
              <img 
                src={project.image} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={project.title}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${project.title} GitHub repository`}
                      className="p-3 bg-black/50 backdrop-blur-md rounded-full hover:bg-black transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${project.title} live demo`}
                      className="p-3 bg-black/50 backdrop-blur-md rounded-full hover:bg-black transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                 </div>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-gray-500 px-2 py-1 bg-white/5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                   <a 
                     href={project.live} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-sm font-bold flex items-center gap-1.5 hover:text-accent transition-colors"
                   >
                     Live Demo <ExternalLink size={14} />
                   </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
