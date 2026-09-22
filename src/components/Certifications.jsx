import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, FileText, Code, Database } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', icon: <Award className="text-yellow-500" /> },
    { title: 'Java Foundation', issuer: 'Infosys', icon: <FileText className="text-blue-500" /> },
    { title: 'DBMS', issuer: 'NPTEL', icon: <Database className="text-emerald-500" /> },
    { title: 'MERN Full Stack', issuer: 'Nasscom', icon: <Code className="text-orange-500" /> },
  ];

  const achievements = [
    { title: 'Hackathon Participant', detail: 'Menti-Support platform development', icon: <Star className="text-purple-500" /> },
    { title: 'Research Publication', detail: 'MedRent platform research', icon: <BookOpen className="text-sky-500" /> },
  ];

  return (
    <section id="certifications" className="section-padding grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-10"></div>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-5 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <div>
                <h4 className="font-bold text-white leading-tight">{cert.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        <div className="h-1 w-20 bg-purple-500 rounded-full mb-10"></div>
        <div className="space-y-4">
          {achievements.map((achieve, index) => (
            <motion.div
              key={achieve.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-5 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {achieve.icon}
              </div>
              <div>
                <h4 className="font-bold text-white leading-tight">{achieve.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{achieve.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
