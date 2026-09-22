import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
           <a href="#hero" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            YG<span className="text-accent">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">Hyderabad, India</p>
        </div>

        <div className="flex space-x-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Yelishetty Gnaneswar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
