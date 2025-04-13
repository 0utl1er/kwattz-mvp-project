
import React from 'react';
import Header from '../components/landing/Header';
import HowItWorks from '../components/landing/HowItWorks';
import Benefits from '../components/landing/Benefits';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import TopMenu from '../components/layout/TopMenu';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111F54] pt-24">
      {/* Fixed Menu */}
      <TopMenu />
      
      {/* Hero Section */}
      <Header />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <Benefits />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
