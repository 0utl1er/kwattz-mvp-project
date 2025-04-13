
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mailbox } from "lucide-react";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';

const Investors = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#111F54] text-white relative overflow-hidden">
      {/* Removed glow effects and drawing-related divs */}

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
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-[#C3FF44] glow-text">
            Investors
          </h1>
          
          <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(195,255,68,0.15)] hover:shadow-[0_0_40px_rgba(195,255,68,0.25)] transition-all duration-500">
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
                  Say Hi
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

