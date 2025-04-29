import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Harsh Joshi</h3>
            <p className="text-gray-400">Technical Management Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#github" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Harsh Joshi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;