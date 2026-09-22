import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Java Full Stack Intern',
      company: 'Infosys Springboard',
      period: 'Recent',
      description: [
        'Built full-stack applications with modular and scalable architectures.',
        'Developed REST APIs using Spring Boot and connected them with React.js frontends.',
        'Designed interactive dashboards and authentication systems.',
        'Worked with MySQL for reliable data management and storage.',
      ],
      skills: ['Spring Boot', 'React', 'MySQL', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-12"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-accent rounded-full border border-[#0a0a0a] group-hover:scale-150 transition-transform"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full self-start md:self-center">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-400 flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent/5 border border-accent/20 rounded-lg text-xs font-semibold text-accent">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
