import React, { useState } from 'react';
import { 
  Building, Calendar, CheckCircle, BarChart, 
  Database, Code, Figma, GitPullRequest,
  Trophy, Monitor
} from 'lucide-react';

const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'responsibilities', label: 'Responsibilities' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'achievements', label: 'Achievements' }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Technical Management Engineer</h3>
                <div className="flex items-center mt-2 text-gray-600">
                  <Building size={16} className="mr-2" />
                  <span>Consultadd Inc., Pune, India</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center text-blue-600">
                  <Calendar size={16} className="mr-2" />
                  <span>January 2024 - Present</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Intern (Jan-Jun) → Full-time (Jun-Present)
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-b border-gray-100">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-all hover:bg-gray-50 ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    E-commerce Revamp for American Kitchenware Retailer
                  </h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Lead business analysis and data validation efforts for a major e-commerce platform 
                    redesign project. The client, an American kitchenware retailer under CSC Generation, 
                    needed comprehensive improvements in product discovery, inventory management, returns 
                    optimization, and customer experience.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Monitor size={20} className="text-blue-600 mr-2" />
                    <h5 className="text-lg font-semibold text-gray-900">My Workspace</h5>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="public/image/Harsh at his workspace.jpeg" 
                      alt="Harsh at his workspace" 
                      className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'responsibilities' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Conducted discovery workshops and requirement gathering",
                  "Created documentation (BRD, FRD, SRS)",
                  "Performed SQL data validation on Redshift and MySQL",
                  "Developed Python scripts for data consistency",
                  "Conducted API testing with Postman",
                  "Built Power BI dashboards for reporting",
                  "Supported Agile ceremonies and sprint planning",
                  "Created wireframes using Figma"
                ].map((responsibility, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-700">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'technologies' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <GitPullRequest size={20} />, name: "Jira & Confluence" },
                  { icon: <Code size={20} />, name: "SQL (Redshift, MySQL)" },
                  { icon: <Code size={20} />, name: "Python" },
                  { icon: <Database size={20} />, name: "AWS (S3, Redshift)" },
                  { icon: <BarChart size={20} />, name: "Power BI" },
                  { icon: <Code size={20} />, name: "Postman" },
                  { icon: <Figma size={20} />, name: "Figma" },
                  { icon: <Code size={20} />, name: "Lucidchart" },
                  { icon: <Building size={20} />, name: "Business Documentation" }
                ].map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all hover:bg-blue-50 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="text-blue-600 mr-3">{tech.icon}</div>
                      <span className="text-gray-700 font-medium">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'outcomes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Improved product discovery experience by 32% through optimized categorization",
                  "Reduced return processing time by 40% with streamlined inventory tracking",
                  "Implemented real-time inventory sync between warehouse and website",
                  "Created executive dashboards that improved decision-making efficiency",
                  "Streamlined requirements documentation process, reducing time by 25%"
                ].map((outcome, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-700 font-medium">{outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Employee of the Month", date: "August 2024", image: "public/image/eom1.jpeg" },
                    { title: "Employee of the Month", date: "January 2025", image: "public/image/Eom2.jpeg" },
                    { title: "Employee of the Month", date: "March 2025", image: "/" }
                  ].map((achievement, index) => (
                    <div 
                      key={index}
                      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="aspect-video">
                        <img 
                          src={achievement.image} 
                          alt={`${achievement.title} - ${achievement.date}`}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h5 className="font-semibold text-lg">{achievement.title}</h5>
                          <p className="text-sm text-gray-200">{achievement.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;