import React from 'react';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ title, issuer, date, imageSrc }) => (
  <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="aspect-video w-full relative overflow-hidden">
      <img 
        src={imageSrc} 
        alt={`${title} certificate`}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-200">{issuer}</p>
          <p className="text-xs text-gray-300 mt-1">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "C++ through C",
      issuer: "SCA,INDIA",
      date: "August 2022",
      imageSrc: "/cert-1.jpg" // Placeholder for your actual certificate
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "SCA,INDIA",
      date: "September 2022",
      imageSrc: "/cert-2.jpg" // Placeholder for your actual certificate
    },
    {
      title: "Data Analysis with Python",
      issuer: "Udemy",
      date: "",
      imageSrc: "/cert-3.jpg" // Placeholder for your actual certificate
    },
    {
      title: "SQL for Data Science",
      issuer: "Oracle",
      date: "January 2023",
      imageSrc: "/cert-4.jpg" // Placeholder for your actual certificate
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Professional certifications that validate my skills and expertise in business analysis,
            data analysis, and related technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;