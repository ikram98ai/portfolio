import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = ['hero', 'expertise', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'expertise', label: 'Services' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'experience', label: 'History' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-gray-200/50 py-3 shadow-sm supports-backdrop-filter:bg-white/60' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <div 
          className="group cursor-pointer flex items-center gap-3"
          onClick={() => scrollTo('hero')}
        >
          {/* New Aesthetic Icon: iOS App Icon Style */}
          <div className="font-semibold tracking-tight text-lg cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-4 h-4 bg-black rounded-full"></div>
            Ikram Khan.
          </div>
        </div>
        
        {/* Desktop Navigation & CTA */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex bg-gray-100/50 backdrop-blur-md p-1 rounded-full border border-gray-200/50 mr-4">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-500 hover:text-black hover:bg-gray-200/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('contact')}
            className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-apple-text p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200 p-6 flex flex-col space-y-4 md:hidden shadow-xl animate-fade-in">
          {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => scrollTo(link.id)} 
               className={`text-2xl font-semibold tracking-tight text-left py-2 ${
                 activeSection === link.id ? 'text-black' : 'text-gray-400'
               }`}
             >
               {link.label}
             </button>
          ))}
          <button 
            onClick={() => scrollTo('contact')} 
            className="text-lg font-bold text-white bg-black py-4 rounded-2xl text-center mt-6 shadow-xl"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;