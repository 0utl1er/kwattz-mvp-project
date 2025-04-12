
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#111F54] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/">
            <img 
              src="/logo-final-transparent.png" 
              alt="kWattz Logo" 
              className="h-28 w-auto" 
            />
          </Link>
          <div className="flex gap-3 mt-6 md:mt-0">
            <Button 
              className="text-[#111F54] hover:bg-[#C3FF44]/90"
              style={{ backgroundColor: '#C3FF44' }}
              size={isMobile ? "sm" : "default"}
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button 
              className="text-[#111F54] hover:bg-[#C3FF44]/90"
              style={{ backgroundColor: '#C3FF44' }}
              size={isMobile ? "sm" : "default"}
              asChild
            >
              <Link to="/kwattz-signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 mb-6">
        <Button 
          className="text-[#C3FF44] border-[#C3FF44] hover:bg-[#C3FF44]/10"
          variant="outline"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Company Story Section */}
        <section className="mb-20 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#C3FF44' }}>
            Our Story
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-lg mb-4">
                Founded in 2025 in San Diego, California, kWattz emerged from a simple observation: people are overwhelmed by their energy bills and don't know how to reduce them.
              </p>
              <p className="text-lg mb-4">
                Our founder, a former PG&E and SDG&E contractor, witnessed firsthand the frustration customers experienced with their utility bills. Despite the push for energy efficiency, most consumers lacked the tools to understand their consumption patterns in an actionable way.
              </p>
              <p className="text-lg mb-4">
                Spending countless nights developing the prototype, our founder famously mapped out the entire kWattz infrastructure on their apartment wall — a moment now immortalized in our company lore.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/images/content/the-wall.jpeg" 
                alt="The Wall - kWattz infrastructure planning" 
                className="rounded-xl shadow-lg max-w-full md:max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#C3FF44' }}>
            Meet Our Founder
          </h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1">
              <p className="text-xl mb-6">
                "What started as scribbles on my apartment wall has grown into a mission to democratize energy intelligence for everyone. I saw how people struggled with their utility bills, and I knew there had to be a better way."
              </p>
              <p className="text-lg mb-4">
                After years in the energy industry consulting for California's largest utilities, our founder identified a critical gap in consumer education and tools. What began as a small project to help friends and family optimize their energy usage quickly evolved into kWattz.
              </p>
              <p className="text-lg">
                Today, our founder leads a growing team dedicated to making energy management accessible, affordable, and actionable for households across America.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/images/content/IMG_5164 Small.jpeg" 
                alt="kWattz Founder" 
                className="rounded-xl shadow-lg max-w-full md:max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#C3FF44' }}>
            Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-3xl">
            At kWattz, we're on a mission to empower households with AI-driven insights that make energy management simple, accessible, and effective.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#C3FF44' }}>Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span><strong>Simplicity:</strong> We turn complex energy data into easy-to-understand insights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span><strong>Transparency:</strong> We believe in clear communication and honest advice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span><strong>Impact:</strong> We measure our success by the money we save our users and the carbon emissions we help prevent.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#C3FF44' }}>Our Team</h3>
              <p className="mb-4">
                We're a passionate team of energy experts, data scientists, and developers dedicated to making energy intelligence accessible to everyone.
              </p>
              <p>
                Based in San Diego, California, our team combines deep industry knowledge with cutting-edge AI technology to deliver a service that truly makes a difference in people's lives and on our planet.
              </p>
            </div>
          </div>
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
