import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import DesignShowcase from './components/sections/DesignShowcase';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DesignShowcase />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;