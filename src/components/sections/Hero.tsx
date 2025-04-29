import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center relative">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="text-blue-600">Harsh Joshi</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
            Technical Management Engineer
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Business & Data Analyst with a passion for translating complex data into actionable insights 
            and driving business value through technology solutions.
          </p>
          <button 
            onClick={scrollToAbout}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Explore My Work
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-700 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;