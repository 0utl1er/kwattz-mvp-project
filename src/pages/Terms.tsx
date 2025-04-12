
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#C3FF44] text-center">
              Terms & Conditions
            </h1>
            
            <div className="max-w-3xl mx-auto bg-[#1a2c6b] p-8 rounded-xl border border-[#C3FF44]/20 shadow-lg">
              <p className="text-white/90 text-lg mb-6">
                Welcome to kWattz. By using this website and our services, you agree to the following:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2 text-white/90">
                <li>We don't steal your data.</li>
                <li>We don't promise you'll become energy rich.</li>
                <li>We do our best to provide accurate insights, but we can't control the weather, power grid, or your teenager leaving lights on.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4 text-[#C3FF44]">
                For legal stuff:
              </h2>
              
              <ul className="list-disc pl-6 mb-8 space-y-2 text-white/90">
                <li>Your data belongs to you.</li>
                <li>We store data securely using Microsoft Azure and Google Cloud.</li>
                <li>We use AI models to generate suggestions. You are responsible for decisions based on those suggestions.</li>
                <li>This is an early-stage product. Things may break, glitch, or become sentient.</li>
              </ul>
              
              <p className="text-white/90 text-lg italic border-t border-[#C3FF44]/20 pt-6">
                For full terms and our privacy policy, contact <a href="mailto:legal@kwattz.com" className="text-[#C3FF44] hover:underline">legal@kwattz.com</a> (or, for now, probably still Pedro.)
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white/80 mb-6">Have more questions?</p>
              <div className="flex justify-center gap-4">
                <Link to="/faq">
                  <Button variant="outline" className="bg-transparent border-[#C3FF44] text-[#C3FF44] hover:bg-[#C3FF44]/10">
                    View FAQ
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-[#C3FF44] text-[#111F54] hover:bg-[#d4ff6f]">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
