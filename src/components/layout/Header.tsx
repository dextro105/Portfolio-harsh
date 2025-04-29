import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-900 flex items-center">
            <span className="text-blue-600">H</span>arsh <span className="text-blue-600 ml-1">J</span>oshi
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'work', 'certifications', 'resume', 'github', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-600 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
          
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${
        isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4">
            {['about', 'work', 'certifications', 'resume', 'github', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="flex items-center justify-between text-gray-700 hover:text-blue-600 py-2 capitalize border-b border-gray-100"
              >
                {item}
                <ChevronRight size={16} />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;