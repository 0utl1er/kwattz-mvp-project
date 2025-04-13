import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mailbox } from "lucide-react";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';
import TopMenu from '../components/layout/TopMenu';

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
      <TopMenu />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pt-24">
        {/* Investors Message Section */}
        <section 
          className="mb-20 flex flex-col items-center justify-center text-center"
          style={lightingStyle}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#C3FF44] glow-text">
            Investors
          </h1>
          
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
            
            {/* Say Hi Button inside the box */}
            <div className="flex flex-col items-center space-y-6 mt-6">
              <Button 
                className="text-black text-lg py-6 px-8 hover:bg-[#C3FF44]/90 shadow-[0_0_20px_rgba(195,255,68,0.4)] hover:shadow-[0_0_30px_rgba(195,255,68,0.6)] transition-all duration-300 flex items-center" 
                style={{ backgroundColor: '#C3FF44' }} 
                asChild
              >
                <a href="mailto:investors@kwattz.com">
                  <Mailbox className="mr-2 h-5 w-5" />
                  Say Hi
                </a>
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
