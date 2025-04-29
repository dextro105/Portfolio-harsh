import React from 'react';
import { Mail, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  // Function to open email client with pre-filled recipient
  const handleEmailClick = () => {
    window.open('mailto:harsh.joshi@example.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Feel free to reach out if you'd like to discuss potential opportunities,
            collaborations, or just to connect professionally.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Pune, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <button 
                      onClick={handleEmailClick}
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      harsh.joshi@example.com
                      <ExternalLink size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      linkedin.com/in/username
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  onClick={handleEmailClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center w-full justify-center transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  Email Me
                </button>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white rounded-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-6 opacity-90">
                I'm currently open to new opportunities where I can leverage my business 
                analysis and data analysis skills to drive impactful solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Business Analysis & Requirements Gathering</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Data Analysis & Visualization</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Process Optimization & Documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Stakeholder Management & Communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;