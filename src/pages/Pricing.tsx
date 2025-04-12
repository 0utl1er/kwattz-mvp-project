
import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-white text-black py-20">
          <div className="container mx-auto px-4 text-center">
            <img 
              src="/brain2.png" 
              alt="kWattz Brain" 
              className="w-32 h-auto mx-auto mb-8"
            />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#111F54]">
              Pricing
            </h1>
            
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#111F54]">
                Currently Free During Our Beta Period
              </h2>
              
              <p className="text-lg mb-6">
                While we're still building and testing our platform, kWattz is completely free to use.
              </p>
              
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200 mb-8">
                <p className="text-base mb-4">
                  To get started, simply fill out our energy questionnaire to help us understand your power usage patterns and how kWattz can help you save money on your electric bill.
                </p>
                <p className="text-base font-medium">
                  We'll analyze your information and provide personalized recommendations to optimize your energy consumption.
                </p>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="/questionnaire" 
                  className="inline-flex items-center px-6 py-3 bg-[#111F54] text-white font-medium rounded-lg hover:bg-[#1a2c6b] transition-colors"
                >
                  Get Started for Free
                </a>
              </div>
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-[#111F54]">
                What You'll Get
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-lg mb-2 text-[#111F54]">Energy Analysis</h4>
                  <p>Detailed breakdown of your energy consumption patterns</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-lg mb-2 text-[#111F54]">Saving Recommendations</h4>
                  <p>Personalized tips to reduce your electric bill</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-lg mb-2 text-[#111F54]">AI-Powered Insights</h4>
                  <p>Smart energy management advice that evolves with your usage</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
