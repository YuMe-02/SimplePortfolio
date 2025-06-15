import React from 'react';

const Navigation = ({ links = ['Work', 'About', 'Contact'] }) => {
  return (
    <div className="fixed top-12 -12 z-50 flex flex-col items-end gap-4 md:top-8 md:right-16">
      <div className="flex gap-8">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-800 no-underline text-2xl font-light transition-opacity duration-300 hover:opacity-60 hover:text-red-700"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
