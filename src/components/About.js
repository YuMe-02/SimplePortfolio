import React from 'react';
import pfp from './assets/pfp.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="flex justify-center">
            <div className="bg-white p-5 pb-16 shadow-2xl transform rotate-2 hover:rotate-0 
                            transition-all duration-500 rounded-sm hover:shadow-3xl cursor-pointer">
              <div className="aspect-[3/4] h-96 overflow-hidden">
                <img 
                  src={pfp} 
                  alt="Darren Yu - Developer" 
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="text-center mt-4 font-mono text-gray-700">Darren Yu - Developer</div>
            </div>
          </div>
          <div className="space-y-6 pt-8">
            <h2 className="text-3xl text-black font-light tracking-tight -mt-4 text-red-500">
              Developer & Visual Storyteller
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I'm Darren Yu—an aspiring software engineer and creative.
                Studying computer engineering taught me how to see systems.
                Practicing photography taught me how to see life.
                I'm especially curious about how digital experiences ripple into the real world.
              </p>
            
              <p>
                I'm always learning, experimenting, and creating where technology meets storytelling.
              </p>
            </div>

            <div className="pt-10 border-t border-gray-200">
              <h2 className="text-3xl text-black font-light tracking-tight mb-5 text-red-500">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-x-24">
                    <div className="text-lg text-gray-800 font-medium">University of California, Santa Cruz</div>
                    <div className="text-lg text-gray-800">2020 - 2024</div>
                  </div>
                  <div className="mt-5 text-lg font-semibold">
                    Bachelor of Science in Computer Engineering
                  </div>
                  {/* <div className="text-gray-600">Concentration: Computer Networks </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
