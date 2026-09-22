import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Terminal, Settings, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="text-blue-400" />,
      skills: ['Java', 'Python', 'C', 'C++'],
    },
    {
      title: 'Frontend',
      icon: <Layout className="text-sky-400" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      title: 'Backend',
      icon: <Database className="text-emerald-400" />,
      skills: ['Spring Boot', 'Node.js', 'Express.js'],
    },
    {
      title: 'Databases',
      icon: <Settings className="text-orange-400" />,
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      icon: <Terminal className="text-purple-400" />,
      skills: ['Git', 'Postman', 'IntelliJ'],
    },
    {
      title: 'Concepts',
      icon: <Layers className="text-rose-400" />,
      skills: ['DSA', 'OOP', 'OS', 'DBMS'],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and the tools I use to build robust applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
