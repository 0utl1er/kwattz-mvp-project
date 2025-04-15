
import React from 'react';
import Header from '../components/landing/Header';
import Benefits from '../components/landing/Benefits';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import TopMenu from '../components/layout/TopMenu';
import Chat from '../components/chat/Chat';
import HowItWorks from '../components/landing/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111F54] pt-24">
      <TopMenu />
      <Header />
      
      {/* Benefits Section */}
      <Benefits />

      {/* Chat Section with Circuit Effect */}
      <div id="chat-section" className="container mx-auto px-4 py-12 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#C3FF44]/5 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C3FF44]/0 via-[#C3FF44] to-[#C3FF44]/0 animate-[circuit_4s_linear_infinite]" />
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-[#C3FF44]/0 via-[#C3FF44] to-[#C3FF44]/0 animate-[circuit_4s_linear_infinite]" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C3FF44]/0 via-[#C3FF44] to-[#C3FF44]/0 animate-[circuit_4s_linear_infinite]" />
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C3FF44]/0 via-[#C3FF44] to-[#C3FF44]/0 animate-[circuit_4s_linear_infinite]" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 text-[#C3FF44] relative z-10">
          Try kWattz AI
        </h2>
        <Chat />
      </div>

      {/* How kWattz Works Section */}
      <HowItWorks />
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

