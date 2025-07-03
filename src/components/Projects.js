import React from 'react';
import banner from './assets/Hydro.jpg';
import proxy from './assets/Proxy.jpeg';
import diabetes from './assets/diabetesMap.jpg'
import churn from './assets/Churn.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'Hydro-Connect',
      description: 'A fully functional smart IoT solution for water usage monitoring. The architecture utilizes Flask for the backend REST API development and React for a responsive front-end interface, resulting in a system capable of tracking water consumption for 1000+ households in real-time. It features a centralized hub network architecture and JWT authentication ensuring secure data transfer.',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Swift', 'C', 'Docker'],
      github: 'https://github.com/YuMe-02/Hydroconnect',
      demo: '#',
      image: banner,
      imagePosition: 'object-center',
      imageScale: 'object-cover', // Options: object-cover (crop), object-contain (fit all), object-scale-down (shrink to fit)
      customScale: 1 // Custom scale factor (0.5 = 50%, 0.8 = 80%, 1.2 = 120%, etc.)
    },
    {
      title: 'Web Proxy',
      description: 'This is a a high-performance and secure HTTPS proxy server, handling concurrent connections for 50+ clients, by implementing multi-threaded architecture and efficient socket programming in C. It features g full SSL/TLS encryption, which ensures data privacy and integrity in network communications.',
      technologies: ['C', 'Make', 'Multithreading', 'Forking'],
      github: 'https://github.com/YuMe-02/WebProxy',
      demo: '#',
      image: proxy,
      imagePosition: 'object-center',
      imageScale: 'object-fill',
      customScale: 1
    },
    {
      title: 'AI Diabetes Prediction',
      description: 'AI-powered healthcare case study designed streamline patient care by integrating real-life medical records to decect diabetes. The following case study acheived 74% accuracy on a dataset of 70,000+ health records. And features an unsupervised learning approach, uncovering 4 distinct patient clusters.',
      technologies: ['Python', 'Pandas', 'MatPlot'],
      github: 'https://github.com/YuMe-02/DiabetesPrediction',
      demo: '#',
      image: diabetes,
      imagePosition: 'object-cover',
      imageScale: 'object-fill',
      customScale: 1.0
    },
    {
      title: 'AI Customer Churn',
      description: 'AI-powered case study designed to explore customer segments of a simulated mobile phone career. This includes a series of reports and justifcations for certain customer behavior and attempts to identify and rectify customer pain points through analytics based business solutions.',
      technologies: ['Python', 'Pandas', 'MatPlot'],
      github: 'https://github.com/YuMe-02/CustomerChurn',
      demo: '#',
      image: churn,
      imagePosition: 'object-center',
      imageScale: 'object-cover',
      customScale: 1.0
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 relative">
      {/* Subtle wall texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="max-w-6xl mx-auto px-5 relative">
        {/* Banner Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20 pb-8 border-b border-gray-300">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-black">
              MY <span className="font-bold text-red-500">PROJECTS</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              A showcase of projects that demonstrate my technical skills and problem-solving abilities.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              {/* Clean Card */}
              <div className="bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] relative h-full">
                {/* Remove Pin for cleaner look */}
                
                {/* Image Area */}
                <div className="bg-gray-100 aspect-[4/3] mb-6 overflow-hidden rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full transition-all duration-300 ${project.imageScale} ${project.imagePosition}`}
                    style={{ 
                      transform: project.customScale ? `scale(${project.customScale})` : 'none'
                    }}
                  />
                </div>
                
                {/* Content Area */}
                <div className="space-y-4 flex-1">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-red-500 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium text-white bg-black px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-6 pt-3 text-sm font-medium">
                    <a
                      href={project.github}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="text-green-600 hover:text-green-800 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .shadow-xl {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
};

export default Projects;