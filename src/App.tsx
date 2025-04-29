import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Certifications from './components/sections/Certifications';
import Resume from './components/sections/Resume';
import GitHub from './components/sections/GitHub';
import Contact from './components/sections/Contact';

function App() {
  // Update page title
  useEffect(() => {
    document.title = "Harsh Joshi | Business Analyst and Data Analyst Portfolio";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Portfolio of Harsh Joshi, a Technical Management Engineer specializing in Business Analysis and Data Analysis, with experience in e-commerce project delivery.';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);
  
  return (
    <div className="min-h-screen font-sans antialiased text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Certifications />
        <Resume />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;