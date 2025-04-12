
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';

const About = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#111F54] text-white relative overflow-hidden">
      {/* Energizing glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C3FF44]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#1EAEDB]/30 rounded-full blur-[120px] -z-10 animate-pulse" style={{animationDelay: "1.5s"}}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#D946EF]/20 rounded-full blur-[80px] -z-10 animate-pulse" style={{animationDelay: "0.7s"}}></div>

      {/* Header - removed logo and login/signup buttons */}
      <header className="container mx-auto px-4 py-8">
        {/* Empty header - logo and buttons removed */}
      </header>

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 mb-6">
        <Button 
          className="bg-[#111F54] text-[#C3FF44] hover:bg-[#1EAEDB]/10 border border-[#C3FF44]/50 shadow-[0_0_15px_rgba(195,255,68,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(195,255,68,0.5)]"
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
        <section className="mb-20 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(195,255,68,0.15)] hover:shadow-[0_0_40px_rgba(195,255,68,0.25)] transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#C3FF44] glow-text" style={{ textShadow: '0 0 10px rgba(195,255,68,0.5)' }}>
            kWattz Story
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
              <div className="relative overflow-hidden rounded-xl transition-transform duration-500 hover:scale-105">
                <img 
                  src="/images/content/the-wall.jpeg" 
                  alt="The Wall - kWattz infrastructure planning" 
                  className="rounded-xl shadow-lg max-w-full md:max-w-md"
                />
                <div className="absolute inset-0 bg-[#111F54]/40 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C3FF44]/10 to-transparent opacity-60 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#C3FF44]" style={{ textShadow: '0 0 10px rgba(195,255,68,0.5)' }}>
          Who is building it — or at least trying to?
          </h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1">
              <p className="text-xl mb-6 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-[0_0_15px_rgba(30,174,219,0.2)]">
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
              <div className="relative overflow-hidden rounded-xl transition-transform duration-500 hover:scale-105">
                <img 
                  src="/images/content/IMG_5164 Small.jpeg" 
                  alt="kWattz Founder" 
                  className="rounded-xl shadow-lg max-w-full md:max-w-md"
                />
                <div className="absolute inset-0 bg-[#111F54]/40 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1EAEDB]/20 to-transparent opacity-70 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#C3FF44]" style={{ textShadow: '0 0 10px rgba(195,255,68,0.5)' }}>
            kWattz Mission
          </h2>
          <p className="text-xl mb-8 max-w-3xl">
            At kWattz, we're on a mission to empower households with AI-driven insights that make energy management simple, accessible, and effective.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(195,255,68,0.15)] hover:shadow-[0_0_30px_rgba(195,255,68,0.3)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#C3FF44]">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5 shadow-[0_0_10px_rgba(195,255,68,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span><strong>Simplicity:</strong> We turn complex energy data into easy-to-understand insights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5 shadow-[0_0_10px_rgba(195,255,68,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span><strong>Transparency:</strong> We believe in clear communication and honest advice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full mt-0.5 shadow-[0_0_10px_rgba(195,255,68,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span><strong>Impact:</strong> We measure our success by the money we save our users and the carbon emissions we help prevent.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(30,174,219,0.15)] hover:shadow-[0_0_30px_rgba(30,174,219,0.3)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#C3FF44]">Our Team</h3>
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
        <section className="mb-20 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:shadow-[0_0_40px_rgba(217,70,239,0.25)] transition-all duration-500">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#C3FF44]" style={{ textShadow: '0 0 10px rgba(195,255,68,0.5)' }}>
            A Win for You, the Grid, and the Planet
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-[0_0_15px_rgba(195,255,68,0.2)] hover:shadow-[0_0_25px_rgba(195,255,68,0.35)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#C3FF44]">For You</h3>
              <p className="text-lg">
                Understand your electric bill. Cut monthly costs.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-[0_0_15px_rgba(30,174,219,0.2)] hover:shadow-[0_0_25px_rgba(30,174,219,0.35)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#C3FF44]">For Power Companies</h3>
              <p className="text-lg">
                Improve grid efficiency, avoid overloads.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-[0_0_15px_rgba(217,70,239,0.2)] hover:shadow-[0_0_25px_rgba(217,70,239,0.35)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#C3FF44]">For the Planet</h3>
              <p className="text-lg">
                Reduce energy waste, shrink your carbon impact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#C3FF44]" style={{ textShadow: '0 0 10px rgba(195,255,68,0.5)' }}>
            Ready to Take Control of Your Energy?
          </h2>
          <Button 
            className="text-[#111F54] text-lg py-6 px-8 hover:bg-[#C3FF44]/90 shadow-[0_0_20px_rgba(195,255,68,0.4)] hover:shadow-[0_0_30px_rgba(195,255,68,0.6)] transition-all duration-300" 
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
