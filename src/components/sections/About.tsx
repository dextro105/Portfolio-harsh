import React from 'react';
import { FileText, Database, Workflow, UserCheck } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About: React.FC = () => {
  const skills = [
    {
      title: "Business Analysis",
      description: "BRD, FRD, SRS, UML, BPMN, Agile methodologies",
      icon: <FileText size={28} />
    },
    {
      title: "Data Analysis",
      description: "SQL, Python, AWS Redshift, Data Validation",
      icon: <Database size={28} />
    },
    {
      title: "Process Optimization",
      description: "Workflow mapping, BPMN, process improvement",
      icon: <Workflow size={28} />
    },
    {
      title: "Stakeholder Management",
      description: "Client communication, requirement gathering, collaboration",
      icon: <UserCheck size={28} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700 leading-relaxed">
            Results-driven Business Analyst with 1.5 years of experience delivering scalable technology and 
            data-driven solutions for complex business challenges. Skilled in Business Analysis (BRD, FRD, 
            SRS, UML, BPMN, Agile) and Data Analysis (SQL, Python, AWS Redshift, Power BI). Strong in 
            stakeholder communication, API testing, backend data validation, dashboarding, and real-world 
            e-commerce project delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;