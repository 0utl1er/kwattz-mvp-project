
import React from "react";
import Footer from "@/components/landing/Footer";
import TopMenu from "@/components/layout/TopMenu";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#111F54] text-white">
      <TopMenu />
      
      <main className="flex-grow pt-24">
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#C3FF44]">
              Pricing
            </h1>
            
            <div className="max-w-3xl mx-auto bg-[#111F54]/90 backdrop-blur-sm p-8 rounded-xl border border-[#C3FF44]/30 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#C3FF44]">
                Currently Free During Our Beta Period
              </h2>
              
              <p className="text-lg mb-6">
                While we're still building and testing our platform, kWattz is completely free to use.
              </p>
              
              <div className="bg-[#1a2c6b] p-6 rounded-lg border border-[#C3FF44]/20 mb-8">
                <p className="text-base mb-4">
                  To get started, simply fill out our energy questionnaire to help us understand your power usage patterns and how kWattz can help you save money on your electric bill.
                </p>
                <p className="text-base font-medium">
                  We'll analyze your information and provide personalized recommendations to optimize your energy consumption.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button className="px-6 py-6 bg-[#C3FF44] text-[#111F54] font-medium rounded-lg hover:bg-[#d4ff6f] transition-colors">
                  Get Started for Free
                </Button>
              </div>
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-[#C3FF44]">
                What You'll Get
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-[#1a2c6b] p-6 rounded-lg border border-[#C3FF44]/20 shadow-lg">
                  <h4 className="font-medium text-lg mb-2 text-[#C3FF44]">Energy Analysis</h4>
                  <p>Detailed breakdown of your energy consumption patterns</p>
                </div>
                
                <div className="bg-[#1a2c6b] p-6 rounded-lg border border-[#C3FF44]/20 shadow-lg">
                  <h4 className="font-medium text-lg mb-2 text-[#C3FF44]">Saving Recommendations</h4>
                  <p>Personalized tips to reduce your electric bill</p>
                </div>
                
                <div className="bg-[#1a2c6b] p-6 rounded-lg border border-[#C3FF44]/20 shadow-lg">
                  <h4 className="font-medium text-lg mb-2 text-[#C3FF44]">AI-Powered Insights</h4>
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
