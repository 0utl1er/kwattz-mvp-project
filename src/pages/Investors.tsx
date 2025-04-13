
import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mailbox, Zap } from "lucide-react";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';
import TopMenu from '../components/layout/TopMenu';
import { Card, CardContent } from "@/components/ui/card";

const Investors = () => {
  const isMobile = useIsMobile();
  const [brightness, setBrightness] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeTimelineItems, setActiveTimelineItems] = useState<boolean[]>([false, false, false, false]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Gradually increase brightness effect
    const maxBrightness = 100;
    const duration = 6000; // 6 seconds
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
    
    // Handle scroll animation for timeline
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      const newActiveItems = [...activeTimelineItems];
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          newActiveItems[index] = true;
        }
      });
      
      setActiveTimelineItems(newActiveItems);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    setTimeout(handleScroll, 500);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTimelineItems]);

  const lightingStyle = {
    opacity: brightness / 100,
    transition: 'opacity 0.05s ease-out'
  };

  const timelineItems = [
    {
      date: "February 2025",
      title: "kWattz Was Born",
      description: "The concept of kWattz was developed, focusing on democratizing energy intelligence for every home."
    },
    {
      date: "March 2025",
      title: "Startup Program Approvals",
      description: "kWattz was approved for both Google for Startups and Microsoft for Startups programs, gaining valuable resources and support."
    },
    {
      date: "April 2025",
      title: "Tech Stack Implementation",
      description: "Backend built with Azure Static Apps & CosmoDB; Frontend developed using Lovable and Firebase, creating a scalable and robust platform."
    },
    {
      date: "Present",
      title: "Moving Forward",
      description: "Continuing to innovate and develop our platform with a focus on making energy management accessible to everyone."
    }
  ];

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
              While I'm busy hustling to validate my concept, take a look at what I've accomplished so far. Meanwhile, let's keep in touch! I'm a brain full of ideas.
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
                  Let's connect!
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section 
          className="mt-20 mb-32 max-w-4xl mx-auto"
          ref={timelineRef}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#C3FF44]">
            Our Journey So Far
          </h2>
          
          <div className="relative">
            {/* Vertical Energy Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 z-0">
              {/* Animated Energy Flow */}
              <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                <div 
                  className="absolute top-0 left-0 right-0 h-full" 
                  style={{
                    background: 'linear-gradient(180deg, rgba(195,255,68,0) 0%, rgba(195,255,68,1) 50%, rgba(195,255,68,0) 100%)',
                    height: '30%',
                    animation: 'flowDown 3s infinite',
                  }}
                />
              </div>
            </div>
            
            {/* Timeline Items */}
            <div className="relative z-10">
              {timelineItems.map((item, index) => (
                <div 
                  key={index}
                  className={`timeline-item mb-20 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center transition-all duration-500`}
                  style={{ 
                    opacity: activeTimelineItems[index] ? 1 : 0,
                    transform: activeTimelineItems[index] ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                    <Card className="bg-black/40 border-[#C3FF44]/20 overflow-hidden hover:shadow-[0_0_25px_rgba(195,255,68,0.3)] transition-all duration-500">
                      <CardContent className="p-6">
                        <p className="text-[#C3FF44] text-sm font-semibold mb-2">{item.date}</p>
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center Circle with Zap Icon */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center bg-black border-2 relative transition-all duration-300 ${activeTimelineItems[index] ? 'border-[#C3FF44] shadow-[0_0_15px_rgba(195,255,68,0.5)]' : 'border-gray-700'}`}>
                      <Zap className={`h-6 w-6 ${activeTimelineItems[index] ? 'text-[#C3FF44]' : 'text-gray-500'} transition-all duration-500`} />
                    </div>
                  </div>
                  
                  {/* Empty Space for Alternate Layout */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer with lighting effect */}
      <div style={lightingStyle}>
        <Footer />
      </div>
      
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes flowDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        
        .glow-text {
          text-shadow: 0 0 10px rgba(195, 255, 68, 0.7);
        }
        `}
      </style>
    </div>
  );
};

export default Investors;
