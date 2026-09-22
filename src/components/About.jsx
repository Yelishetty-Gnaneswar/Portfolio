import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Sparkles, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <User className="text-accent" />
              About Me
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am an <span className="text-white">Information Technology</span> undergraduate based in Hyderabad, India, driven by the desire to build technology that makes a difference.
            </p>
          </motion.div>
        </div>

        <div className="md:w-2/3 grid gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass-card"
           >
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
               <Sparkles size={20} className="text-accent" />
               Professional Summary
             </h3>
             <p className="text-gray-400 leading-relaxed">
               Information Technology undergraduate with strong foundations in Java, Data Structures, and Web Development. Passionate about building <span className="text-white">scalable applications</span> and solving real-world problems using <span className="text-white">AI and full-stack technologies</span>. I thrive in environments that challenge me to learn and evolve.
             </p>
           </motion.div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Code2 className="text-accent" />
                </div>
                <h4 className="font-bold mb-2 text-lg">Full Stack Development</h4>
                <p className="text-sm text-gray-500">Building robust end-to-end solutions using modern frameworks like React and Spring Boot.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Database className="text-purple-500" />
                </div>
                <h4 className="font-bold mb-2 text-lg">AI & Data Science</h4>
                <p className="text-sm text-gray-500">Exploring AI-based predictive modeling and machine learning to solve complex problems.</p>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
