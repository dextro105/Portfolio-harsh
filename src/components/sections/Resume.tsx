import React from 'react';
import { FileText, Download, ArrowUpRight } from 'lucide-react';

const Resume: React.FC = () => {
  // This is a placeholder function. In a real implementation, you would 
  // provide a link to the actual resume file
  const downloadResume = () => {
    alert("In a real implementation, this would download Harsh's resume PDF.");
  };

  const resumeHighlights = [
    "Technical Management Engineer at Consultadd Inc.",
    "Business Analysis & Data Analysis Specialist",
    "Experience with SQL, Python, AWS, Power BI",
    "Discovery workshops and requirement gathering",
    "API testing and backend data validation",
    "E-commerce project delivery",
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Download my resume to learn more about my professional experience,
            education, and skills.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 text-white">
              <div className="flex justify-center mb-6">
                <FileText size={64} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Resume Highlights</h3>
              <ul className="space-y-3">
                {resumeHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowUpRight size={16} className="mr-2 mt-1 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-2/3 p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Download</h3>
              <p className="text-gray-600 mb-8 max-w-md">
                My resume provides a comprehensive overview of my professional journey, 
                skills, and qualifications. Download it to learn more about my experience
                and how I can contribute to your organization.
              </p>
              <button
                onClick={downloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition-colors"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
              <p className="text-sm text-gray-500 mt-4">
                PDF format, last updated June 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;