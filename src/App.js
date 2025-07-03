import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
// import Personal from './components/Personal';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      {/* <Personal /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;