
import React from 'react';
import Header from '../components/landing/Header';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import TopMenu from '../components/layout/TopMenu';
import Chat from '../components/chat/Chat';

const NewLanding = () => {
  return (
    <div className="min-h-screen bg-[#001050]">
      <TopMenu />
      <Header />
      
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#C3FF44' }}>
            Unlock Personalized Energy Insights
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get answers to your energy questions and learn how to save money with our AI advisor.
          </p>
        </div>

        <div id="chat-section" className="relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C3FF44]/0 via-[#C3FF44]/20 to-[#C3FF44]/0">
              <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite]" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C3FF44]/0 via-[#C3FF44]/20 to-[#C3FF44]/0">
              <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite]" />
            </div>
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#C3FF44]/0 via-[#C3FF44]/20 to-[#C3FF44]/0">
              <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite]" />
            </div>
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#C3FF44]/0 via-[#C3FF44]/20 to-[#C3FF44]/0">
              <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite]" />
            </div>
          </div>
          <Chat />
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default NewLanding;
