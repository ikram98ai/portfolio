import React from 'react';
import { personalInfo } from '../data';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 bg-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h2 className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-linear-to-r from-apple-blue to-purple-600 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {personalInfo.title}
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-apple-text mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Intelligence. <br/>
          <span className="text-gray-400">Architected.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-apple-text-secondary max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {personalInfo.tagline}
        </p>
        
        <p className="mt-6 text-base text-gray-500 max-w-lg mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {personalInfo.summary}
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
           <a 
            href="#projects"
            className="text-apple-blue hover:underline text-lg font-medium flex items-center gap-2 group"
           >
            View Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
           </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <ArrowDown size={24} />
      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-30 z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
