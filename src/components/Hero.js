import React from 'react';
import banner from './assets/Banner.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20 md:py-0">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center md:items-start">
          <div className="space-y-8 pt-8">
            <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-tight">
              Developer &<br />
              <span className="text-red-500 font-bold">Photographer</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Recent UC Santa Cruz graduate specializing in Shopify development, data analytics, 
              and visual storytelling. I bring an artistic perspective to technical solutions.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-block px-10 py-4 bg-black text-white font-medium border-2 border-black 
                         transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 
                         hover:shadow-xl"
            >
              View My Work
            </button>
          </div>
          <div className="flex justify-center pt-8">
            <div className="bg-white p-5 pb-16 shadow-2xl transform -rotate-2 hover:rotate-0 
                            transition-transform duration-500 rounded-sm cursor-pointer">
              <div className="w-full h-64 bg-gradient-to-br from-red-500 to-black relative overflow-hidden mb-5">
                <img 
                  src={banner} 
                  alt="Bay Area Explorer" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Bay Area Explorer</h3>
                <p className="text-gray-600 text-sm">Capturing moments between code and creativity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;