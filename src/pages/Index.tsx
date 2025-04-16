
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
    <div className="min-h-screen bg-[#001050] pt-24">
      <TopMenu />
      <Header />
      
      <div id="chat-section" className="container mx-auto px-4 py-6 md:py-12 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#C3FF44]/5 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C3FF44]/0 via-[#C3FF44] to-[#C3FF44]/0 animate-[circuit_4s_linear_infinite]" />
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-[#C3FF44]/0 via-[#C3FF44] to-[#C3FF44]/0 animate-[circuit_4s_linear_infinite]" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C3FF44]/0 via-[#C3FF44] to-[#C3FF44]/0 animate-[circuit_4s_linear_infinite]" />
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C3FF44]/0 via-[#C3FF44] to-[#C3FF44]/0 animate-[circuit_4s_linear_infinite]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 relative z-10 neon-text">
          Try kWattz AI
        </h2>
        <Chat />
      </div>
      
      <Benefits />
      <HowItWorks />
      <CTASection />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes neon-flash {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(195, 255, 68, 0.6), 
              0 0 20px rgba(255, 255, 0, 0.4);
            color: #C3FF44;
          }
          50% {
            text-shadow: 
              0 0 20px rgba(195, 255, 68, 1), 
              0 0 40px rgba(255, 255, 0, 0.8), 
              0 0 60px rgba(195, 255, 68, 0.6);
            color: #FFFF00;
          }
        }

        .neon-text {
          animation: neon-flash 4s infinite ease-in-out;
          font-weight: bold;
        }
      `}} />
    </div>
  );
};

export default Index;
