
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, PiggyBank, Leaf } from "lucide-react";

const WhyKWattz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#111F54] text-white">
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="outline" className="bg-transparent border-[#C3FF44] text-[#C3FF44] hover:bg-[#C3FF44]/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#C3FF44] text-center">
              Why kWattz?
            </h1>
            
            <div className="max-w-3xl mx-auto bg-[#111F54]/90 backdrop-blur-sm p-8 rounded-xl border border-[#C3FF44]/30 shadow-lg mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#C3FF44]">
                The Problem: Energy Bills Are Confusing
              </h2>
              
              <p className="text-lg mb-6">
                Most people struggle to understand their electric bills. Between peak rates, time-of-use pricing, and complex tariffs, it's nearly impossible to know what's driving your costs or how to reduce them.
              </p>
              
              <p className="text-lg">
                Traditional energy monitoring tools show data but don't explain it in plain language, leaving you with charts and numbers but no clear path to savings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-[#1a2c6b] p-6 rounded-lg border border-[#C3FF44]/20 flex flex-col items-center text-center">
                <div className="bg-[#C3FF44]/20 p-4 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-[#C3FF44]" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#C3FF44]">Personalized Insights</h3>
                <p>Our AI analyzes your specific energy usage patterns to deliver custom recommendations that work for your lifestyle.</p>
              </div>
              
              <div className="bg-[#1a2c6b] p-6 rounded-lg border border-[#C3FF44]/20 flex flex-col items-center text-center">
                <div className="bg-[#C3FF44]/20 p-4 rounded-full mb-4">
                  <PiggyBank className="h-8 w-8 text-[#C3FF44]" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#C3FF44]">Real Cost Savings</h3>
                <p>Our users typically save 10-15% on their electric bills by implementing our simple, targeted suggestions.</p>
              </div>
              
              <div className="bg-[#1a2c6b] p-6 rounded-lg border border-[#C3FF44]/20 flex flex-col items-center text-center">
                <div className="bg-[#C3FF44]/20 p-4 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-[#C3FF44]" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#C3FF44]">Eco-Friendly Impact</h3>
                <p>By optimizing your energy usage, you're not just saving money – you're reducing your carbon footprint too.</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-12 bg-[#1a2c6b] p-8 rounded-xl border border-[#C3FF44]/20">
              <h2 className="text-2xl font-semibold mb-4 text-[#C3FF44]">
                How It Works
              </h2>
              
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="bg-[#C3FF44] text-[#111F54] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-medium text-[#C3FF44]">Share Your Energy Info</h3>
                    <p>Fill out a quick questionnaire about your home, energy habits, and frustrations.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-[#C3FF44] text-[#111F54] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-medium text-[#C3FF44]">Get Personalized Analysis</h3>
                    <p>Our AI analyzes your information to identify specific savings opportunities.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-[#C3FF44] text-[#111F54] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-medium text-[#C3FF44]">Implement Simple Changes</h3>
                    <p>Follow our tailored recommendations to start saving immediately.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="text-center mb-12">
              <Link to="/questionnaire">
                <Button className="px-8 py-6 bg-[#C3FF44] text-[#111F54] font-medium text-lg rounded-lg hover:bg-[#d4ff6f] transition-colors">
                  Start Your Energy Savings Journey
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhyKWattz;
