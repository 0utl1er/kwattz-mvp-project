
import React from 'react';
import Header from '../components/landing/Header';
import HowItWorks from '../components/landing/HowItWorks';
import Benefits from '../components/landing/Benefits';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import TopMenu from '../components/layout/TopMenu';
import Chat from '../components/chat/Chat';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111F54] pt-24">
      {/* Fixed Menu */}
      <TopMenu />
      
      {/* Hero Section */}
      <Header />

      {/* Chat Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#C3FF44]">
          Chat with kWattz AI
        </h2>
        <Chat />
      </div>

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
