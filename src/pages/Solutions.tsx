
import React from 'react';
import Header from '../components/landing/Header';
import Benefits from '../components/landing/Benefits';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import TopMenu from '../components/layout/TopMenu';
import HowItWorks from '../components/landing/HowItWorks';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-[#001050] pt-24">
      <TopMenu />
      <Header />
      
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#C3FF44' }}>
            Energy Solutions for Every Need
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore our comprehensive energy solutions tailored to optimize your power consumption.
          </p>
        </div>
      </div>
      
      <Benefits />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Solutions;
