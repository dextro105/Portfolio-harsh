import React from 'react';
import { Github, Code, GitBranch, GitPullRequest } from 'lucide-react';

const GitHub: React.FC = () => {
  const githubUrl = "https://github.com/username"; // Replace with actual GitHub URL
  
  const projects = [
    {
      name: "Data Analysis Dashboard",
      description: "Interactive dashboard built with Python and Streamlit for visualizing e-commerce metrics",
      language: "Python",
      stars: 12
    },
    {
      name: "SQL Query Library",
      description: "Collection of advanced SQL queries for business analytics and reporting",
      language: "SQL",
      stars: 8
    },
    {
      name: "API Testing Framework",
      description: "Automated testing framework for RESTful APIs using Postman and Newman",
      language: "JavaScript",
      stars: 5
    }
  ];

  return (
    <section id="github" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">GitHub Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Check out some of my open-source projects and contributions on GitHub.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-blue-600">
                    <Code size={24} />
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <GitBranch size={14} className="mr-1" />
                    <span>{project.stars}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="mr-4">{project.language}</span>
                  <div className="flex items-center">
                    <GitPullRequest size={12} className="mr-1" />
                    <span>Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Github size={18} className="mr-2" />
              View GitHub Profile
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Note: Project data shown above is for illustration purposes. 
              Replace with actual GitHub projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;