import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Github from '../components/Github';
import Contact from '../components/Contact';
import Education from '../components/Education';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Github />
      <Contact />
    </>
  );
}

export default Home;
