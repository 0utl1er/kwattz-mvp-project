
import React from 'react';
import Header from '../components/landing/Header';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import TopMenu from '../components/layout/TopMenu';
import Chat from '../components/chat/Chat';

const NewLanding = () => {
  return (
    <div className="min-h-screen bg-[#0f1c4b]">
      <TopMenu />
      <Header />
      
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#d7ff64]">
            Unlock Personalized Energy Insights
          </h2>
          <p className="text-[#d9d9d9] text-xl mb-8">
            Get answers to your energy questions and learn how to save money with our AI advisor.
          </p>
        </div>

        <div id="chat-section">
          <Chat />
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default NewLanding;
