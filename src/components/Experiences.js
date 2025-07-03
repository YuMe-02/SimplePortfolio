import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      company: 'William Stout Architectural Books',
      position: 'Product Photographer and Catalog Specialist',
      duration: 'September 2024 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Streamlined product cataloging workflows, reducing processing time by 30% through efficient photography, editing, and data entry—enhancing content readiness for social media and accelerating campaign execution',
        'Collaborated with management to analyze and resolve inventory discrepancies, improving inventory accuracy and pricing strategies for various product editions'
      ],
      skills: ['Photography', 'Catalog Management', 'Inventory Analysis', 'Adobe Photoshop', 'Excel']
    },
    {
      company: 'Baskin School of Engineering',
      position: 'System Architecture Group Tutor',
      duration: 'January 2023 – July 2024',
      location: 'Santa Cruz, CA',
      responsibilities: [
        'Mentored 30+ undergraduate students, encouraging them to pursue advanced courses in system architecture',
        'Led study groups and facilitated 20+ sessions per quarter, contributing to a 25% reduction in office hour demand',
        'Collaborated with faculty to revamp course curriculum, integrating real-world case studies that improved engagement and practical application skills'
      ],
      skills: ['System Architecture', 'Tutoring', 'Curriculum Development', 'Student Mentorship', 'Communication']
    },
    {
      company: 'Tech4Good',
      position: 'Research Assistant',
      duration: 'January 2022 – April 2022',
      location: 'Santa Cruz, CA',
      responsibilities: [
        'Engineered and deployed an internal assistance tool using Node.js and the Slack API, integrating web-scraped Stack Overflow data to support researcher productivity',
        'Conducted research on supervised and unsupervised learning for economic data analysis, yielding insights into model robustness and data pattern identification',
        'Collaborated with graduate students and faculty in a cross-functional research environment, fostering open communication and successful project execution'
      ],
      skills: ['Node.js', 'Slack API', 'Web Scraping', 'Machine Learning', 'Collaboration']
    }
  ];
  
  return (
    <section id="experiences" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Banner Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20 pb-8 border-b border-gray-300">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight">
              MY <span className="text-red-500 font-medium">EXPERIENCE</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-lg text-gray-600 leading-relaxed">
              A collection of roles where I've applied my skills and grown as a professional.
            </p>
          </div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                  <h4 className="text-xl text-red-500 font-semibold">{exp.position}</h4>
                  <p className="text-gray-500 mt-1">{exp.location}</p>
                </div>
                <div className="md:text-right">
                  <span className="text-lg font-medium text-red-500">{exp.duration}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="text-gray-600 leading-relaxed flex items-start">
                      <span className="text-red-500 mr-2 mt-1.5 text-sm">●</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-3 ">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-black text-white px-3 py-1 text-sm font-medium rounded
                                                     hover:bg-red-500 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Experiences;