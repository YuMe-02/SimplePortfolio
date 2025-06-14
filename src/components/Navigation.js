import React from 'react';

const Navigation = ({ links = ['Work', 'About', 'Contact'] }) => {
  return (
    <div className="fixed top-12 right-12 z-50 flex gap-8 md:top-8 md:right-16">
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="text-gray-800 no-underline text-5x1 font-light transition-opacity duration-300 hover:opacity-60 hover:text-red-700"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default Navigation;