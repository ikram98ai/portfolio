import React from 'react';
import { personalInfo } from '../data';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-apple-dark text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          Ready to scale your AI?
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance projects and consulting. Let's build something intelligent together.
        </p>

        <a 
          href={personalInfo.contact.upwork} 
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors mb-20"
        >
          Get in Touch <ArrowRight size={20} />
        </a>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{personalInfo.title}</p>
          </div>

          <div className="flex gap-6">
            <a href={personalInfo.contact.github} className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={personalInfo.contact.linkedin} className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.contact.email} className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-600">
          © {new Date().getFullYear()} Ikram Khan. All rights reserved. Design inspired by Apple.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
