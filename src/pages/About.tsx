
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Footer from '../components/landing/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#111F54] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/">
            <img 
              src="/brain2.png" 
              alt="kWattz Logo" 
              className="h-24 w-auto"
            />
          </Link>
          <div className="flex gap-4 mt-6 md:mt-0">
            <Button 
              className="text-[#111F54] hover:bg-[#C3FF44]/90"
              style={{ backgroundColor: '#C3FF44' }}
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button 
              className="text-[#111F54] hover:bg-[#C3FF44]/90"
              style={{ backgroundColor: '#C3FF44' }}
              asChild
            >
              <Link to="/kwattz-signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#C3FF44' }}>
            Take Control of Your Electric Bill with AI ⚡️
          </h1>
          <p className="text-xl mb-6 max-w-4xl">
            Tired of high energy bills? You're not alone.
          </p>
          <p className="text-xl mb-12 max-w-4xl">
            kWattz is an AI-powered personal energy advisor that helps you understand your electric bill, 
            lower your energy costs, and make smarter home energy decisions — fast.
          </p>

          <Button 
            className="text-[#111F54] text-lg py-6 px-8 hover:bg-[#C3FF44]/90" 
            style={{ backgroundColor: '#C3FF44' }} 
            asChild
          >
            <Link to="/kwattz-signup">Start Saving Today <ArrowRight className="ml-2" /></Link>
          </Button>
        </section>

        {/* Problem Section */}
        <section className="mb-20 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#C3FF44' }}>
            The Problem: Electric Bills Are Too High, Too Confusing
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-lg mb-4">
                Working with California's largest utilities — PG&E and SDG&E — I kept hearing the same frustration:
              </p>
              <blockquote className="border-l-4 pl-4 italic my-6" style={{ borderColor: '#C3FF44' }}>
                "My electric bill is too high, and I don't understand why."
              </blockquote>
              <p className="text-lg mb-6">
                Between peak/off-peak charges, rate plans, EV charging, and solar panel credits, people feel lost. 
                Utility apps don't explain. Dashboards are too technical. Most people just keep overpaying — every month.
              </p>
              <blockquote className="border-l-4 pl-4 italic my-6" style={{ borderColor: '#C3FF44' }}>
                "What if we used AI to help people understand how energy works — just like AI is helping people learn language?"
              </blockquote>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/happycustomer.jpg" 
                alt="Frustrated customer with high energy bill" 
                className="rounded-xl shadow-lg max-w-full md:max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#C3FF44' }}>
            The Solution: kWattz⚡ AI Energy Assistant
          </h2>
          <p className="text-lg mb-8">
            That's when I created kWattz, your AI energy savings app — designed to help you:
          </p>
          <ul className="space-y-4 text-lg mb-12 max-w-2xl">
            <li className="flex items-start gap-3">
              <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Lower your electric bill</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Save on energy costs at home</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Reduce your carbon footprint</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Optimize EV charging times</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Understand what's driving your power bill</span>
            </li>
          </ul>
          <p className="text-lg mb-12">
            You don't need special devices. No smart meter required. Just upload a bill, enter your details, and let kWattz do the rest.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-20 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#C3FF44' }}>
            A Win for You, the Grid, and the Planet
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#C3FF44' }}>For You</h3>
              <p className="text-lg">
                Understand your electric bill. Cut monthly costs.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#C3FF44' }}>For Power Companies</h3>
              <p className="text-lg">
                Improve grid efficiency, avoid overloads.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#C3FF44' }}>For the Planet</h3>
              <p className="text-lg">
                Reduce energy waste, shrink your carbon impact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#C3FF44' }}>
            Ready to Take Control of Your Energy?
          </h2>
          <Button 
            className="text-[#111F54] text-lg py-6 px-8 hover:bg-[#C3FF44]/90" 
            style={{ backgroundColor: '#C3FF44' }} 
            asChild
          >
            <Link to="/kwattz-signup">Start Saving Today <ArrowRight className="ml-2" /></Link>
          </Button>
        </section>

        {/* Partners Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#C3FF44' }}>
            Trusted By Industry Leaders
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-[#C3FF44]/50 transition-colors">
              <a href="https://startup.google.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/google-for-startups-banner.png" 
                  alt="Google for Startups" 
                  className="h-12 md:h-16 w-auto"
                />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-[#C3FF44]/50 transition-colors">
              <a href="https://foundershub.startups.microsoft.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/microsoft-for-startups-founders-hub-banner.png" 
                  alt="Microsoft for Startups Founders Hub" 
                  className="h-12 md:h-16 w-auto"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
