import React from 'react';

const CTAButton = ({ 
  text = "View Full Portfolio",
  href = "#",
  onClick,
  className = ""
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div className={`mt-auto ${className}`}>
      <a
        href={href}
        onClick={handleClick}
        className="inline-block py-4 px-10 bg-gray-800 text-white no-underline text-sm font-light tracking-widest uppercase transition-colors duration-300 hover:bg-gray-600"
      >
        {text}
      </a>
    </div>
  );
};

export default CTAButton;