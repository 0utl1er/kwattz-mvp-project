
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, BrainCircuit, Mailbox } from "lucide-react";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';

const Investors = () => {
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

      {/* Header - empty placeholder */}
      <header className="container mx-auto px-4 py-8">
        {/* Empty header */}
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
        {/* Investors Message Section */}
        <section className="mb-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-[#C3FF44] glow-text" style={{ textShadow: '0 0 10px rgba(195,255,68,0.5)' }}>
            Investors
          </h1>
          
          <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(195,255,68,0.15)] hover:shadow-[0_0_40px_rgba(195,255,68,0.25)] transition-all duration-500">
            <div className="flex flex-col items-center mb-6">
              <BrainCircuit size={80} className="text-[#C3FF44] mb-4" />
            </div>
            
            <p className="text-xl md:text-2xl mb-6">
              I know you are excited. I'm too! But I still need to prove that my concept idea works right?
            </p>
            
            <p className="text-xl md:text-2xl mb-8">
              Meanwhile, let's keep in touch! I'm a brain full of ideas (Not kWattz, me, Pedro!).
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
              <Button 
                className="text-[#111F54] text-lg py-6 px-8 hover:bg-[#C3FF44]/90 shadow-[0_0_20px_rgba(195,255,68,0.4)] hover:shadow-[0_0_30px_rgba(195,255,68,0.6)] transition-all duration-300 flex items-center" 
                style={{ backgroundColor: '#C3FF44' }} 
                asChild
              >
                <Link to="mailto:investors@kwattz.com">
                  <Mailbox className="mr-2 h-5 w-5" />
                  Contact for Investment
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Investors;
