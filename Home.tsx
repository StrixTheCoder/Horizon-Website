import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ParticleBackground from '../components/ParticleBackground';

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <ParticleBackground />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;