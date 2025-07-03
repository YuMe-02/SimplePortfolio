import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
      }`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-5 py-4 sm:py-5 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl sm:text-2xl font-bold tracking-tight text-black hover:text-red-500 transition-colors relative z-50"
          >
            Darren<span className="text-red-500">Yu</span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-10">
            {['about', 'skills', 'projects', 'experiences', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-black hover:text-red-500 transition-all duration-300 relative group text-sm lg:text-base font-normal"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-black hover:text-red-500 transition-colors relative z-50"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-5 py-4">
            <ul className="space-y-1">
              {['about', 'skills', 'projects', 'experiences', 'contact'].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left text-lg font-medium text-black hover:text-red-500 hover:bg-red-50 transition-all duration-300 py-3 px-4 rounded-lg transform transition-transform ${
                      mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' 
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Only show on mobile and when menu is open */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleMobileMenu}
          style={{ top: '80px' }} // Start below the header
        />
      )}
    </>
  );
};

export default Header;