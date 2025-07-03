import React from 'react';

const Personal = () => {
  const hobbies = [
    { icon: '📸', title: 'Photography', description: 'Street & landscape photography around the Bay Area' },
    { icon: '🎨', title: 'Typography', description: 'Swiss design principles and clean, functional aesthetics' },
    { icon: '🌍', title: 'Cultural Exchange', description: 'Meeting people and learning about diverse perspectives' },
    { icon: '🏔️', title: 'Bay Area Explorer', description: 'Discovering hidden gems and scenic locations' }
  ];

  return (
    <section id="personal" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-light">Beyond the Code</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                When I'm not developing or analyzing data, I'm exploring the Bay Area with my camera, 
                always looking for the perfect shot. I believe that creativity and technical skills 
                complement each other beautifully.
              </p>
              <p>
                I'm passionate about meeting new people, learning about different cultures, and finding 
                inspiration in everyday moments. This curiosity drives both my personal photography and 
                professional approach to problem-solving.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-white p-8 text-center shadow-lg hover:scale-105 
                                         transition-transform duration-300">
                <div className="text-5xl mb-4 text-red-500">{hobby.icon}</div>
                <h4 className="text-lg font-semibold mb-3">{hobby.title}</h4>
                <p className="text-gray-600 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;