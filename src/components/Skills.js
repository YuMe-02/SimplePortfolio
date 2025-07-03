import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      description: 'Programming languages I use to build efficient systems and applications.',
      skills: ['Python', 'C/C++', 'SQL (Postgres)', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Matlab', 'MIPS', 'RISC-V', 'Bash']
    },
    {
      title: 'Developer Tools',
      description: 'Tools and environments that enhance productivity and streamline development workflows.',
      skills: ['Git', 'Docker', 'Cisco Packet Tracer', 'Linux', 'Wireshark', 'Xcode', 'Pandas', 'Postman']
    },
    {
      title: 'Frameworks',
      description: 'Frameworks and platforms I\'ve used to build and deploy software across different environments.',
      skills: ['AWS', 'Anaconda', 'Node.js', 'Flask', 'Swift', 'I2C', 'React']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Banner Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20 pb-8 border-b border-gray-300">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight">
              MY <span className="text-red-500 font-bold">SKILLS</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-lg text-gray-600 leading-relaxed">
              Technical expertise and tools I've aquired along my academic and professional journey.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-10 shadow-lg hover:shadow-xl 
                                       hover:-translate-y-2 transition-all duration-300 rounded-lg">
              <h3 className="text-2xl mb-5 border-b-2 border-red-500 pb-3 font-semibold">{category.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-black text-white px-4 py-2 text-sm font-medium rounded
                                                   hover:bg-red-500 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;