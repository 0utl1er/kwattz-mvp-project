
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mailbox } from "lucide-react";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';

const Investors = () => {
  const isMobile = useIsMobile();
  const [brightness, setBrightness] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Gradually increase brightness effect
    const maxBrightness = 100;
    const duration = 3000; // 3 seconds
    const interval = 50; // update every 50ms
    const steps = duration / interval;
    const increment = maxBrightness / steps;
    
    let currentBrightness = 0;
    const timer = setInterval(() => {
      currentBrightness += increment;
      if (currentBrightness >= maxBrightness) {
        currentBrightness = maxBrightness;
        clearInterval(timer);
      }
      setBrightness(currentBrightness);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const lightingStyle = {
    opacity: brightness / 100,
    transition: 'opacity 0.05s ease-out'
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Back to Home Button */}
      <div 
        className="container mx-auto px-4 mb-6"
        style={lightingStyle}
      >
        <Button 
          className="bg-black text-[#C3FF44] hover:bg-[#1EAEDB]/10 border border-[#C3FF44]/50 shadow-[0_0_15px_rgba(195,255,68,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(195,255,68,0.5)]"
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
        <section 
          className="mb-20 flex flex-col items-center justify-center text-center"
          style={lightingStyle}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-[#C3FF44] glow-text">
            Investors
          </h1>
          
          {/* Added Brain2 image in large format */}
          <img 
            src="/brain2.png" 
            alt="Brain Visualization" 
            className="mb-10 w-full max-w-2xl mx-auto"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
          
          <div className="max-w-3xl mx-auto bg-black/80 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(195,255,68,0.15)] hover:shadow-[0_0_40px_rgba(195,255,68,0.25)] transition-all duration-500">
            <p className="text-xl md:text-2xl mb-6">
              I know you are excited. I'm too! But I still need to prove that my concept idea works right?
            </p>
            
            <p className="text-xl md:text-2xl mb-8">
              Meanwhile, let's keep in touch! I'm a brain full of ideas (Not kWattz, me, Pedro!).
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
              <Button 
                className="text-black text-lg py-6 px-8 hover:bg-[#C3FF44]/90 shadow-[0_0_20px_rgba(195,255,68,0.4)] hover:shadow-[0_0_30px_rgba(195,255,68,0.6)] transition-all duration-300 flex items-center" 
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

      {/* Footer with lighting effect */}
      <div style={lightingStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Investors;
