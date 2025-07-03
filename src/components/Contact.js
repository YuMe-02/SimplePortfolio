import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-5xl font-light mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-600 mb-12">
          Ready to bring artistic vision to your next technical project?
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
          <a 
            href="mailto:darrenyu90n@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-500 text-white text-lg font-semibold
                       border-2 border-red-500 transition-all duration-300 hover:bg-white 
                       hover:text-red-500 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email
          </a>
          
          <a 
            href="https://www.linkedin.com/in/darren-yu-88341218b/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-lg font-semibold
                       border-2 border-blue-600 transition-all duration-300 hover:bg-white 
                       hover:text-blue-600 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          
          <a 
            href="https://github.com/YuMe-02" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-lg font-semibold
                       border-2 border-gray-900 transition-all duration-300 hover:bg-white 
                       hover:text-gray-900 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <a 
            href="https://drive.google.com/file/d/1a-KnvyQ9xiMCa5Ly4rTz1u83eKreP0kZ/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white text-lg font-semibold
                       border-2 border-green-600 transition-all duration-300 hover:bg-white 
                       hover:text-green-600 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;