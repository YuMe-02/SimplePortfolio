import React from 'react';

const HeroSection = ({ 
  title = "Visual Stories", 
  subtitle = "Contemporary Photography",
  category = "Portfolio",
  description = "Exploring the intersection of light, emotion, and narrative through the lens. Each frame captures a moment suspended between reality and imagination, inviting viewers to discover their own stories within."
}) => {
  return (
    <div className="mb-16">
      <h1 className="text-4xl md:text-6xl font-thin leading-tight mb-16 tracking-tightest font-extrabold mt-16">
        {title.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            {word}
            {index === 0 && <br />}
          </React.Fragment>
        ))}
      </h1>

      {/* <p className="text-lg md:text-xl text-gray-600 font-light mb-10">
        {category}
      </p> */}

      <p className="text-lg md:text-xl text-gray-600 font-light mb-10">
        {subtitle}
      </p>
      <p className="text-base leading-relaxed text-gray-700 max-w-lg mb-16">
        {description}
      </p>
    </div>
  );
};

export default HeroSection;