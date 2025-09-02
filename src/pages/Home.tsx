import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Projects />
      <Achievements />
      <Testimonials />
      <Process />
    </div>
  );
};

export default Home;


