import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mailbox, Zap, ChevronDown, Power, Menu } from "lucide-react";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';
import TopMenu from '../components/layout/TopMenu';
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Investors = () => {
  const isMobile = useIsMobile();
  const [energized, setEnergized] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);
  const [blinkInterval, setBlinkInterval] = useState(800);
  const timelineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [activeTimelineItems, setActiveTimelineItems] = useState<boolean[]>([true, true, true, true]);
  const [openTimelineItems, setOpenTimelineItems] = useState<boolean[]>([false, false, false, false]);
  const [isBlinking, setIsBlinking] = useState(false);
  const [pageReveal, setPageReveal] = useState(false);
  const [logoReached, setLogoReached] = useState(true);
  const [initialScroll, setInitialScroll] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);
  const [showOnlyPowerButton, setShowOnlyPowerButton] = useState(true);

  const [wholePageBlinking, setWholePageBlinking] = useState(false);
  const [wholePageVisible, setWholePageVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      if (!initialScroll && window.scrollY > 50) {
        setInitialScroll(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    setTimeout(handleScroll, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialScroll]);

  const handlePowerButtonClick = () => {
    setLogoClicked(true);
    setShowOnlyPowerButton(false);
    startWholePageBlinking();
  };

  const startWholePageBlinking = () => {
    if (isBlinking) return;
    
    setIsBlinking(true);
    setWholePageBlinking(true);
    setBlinkCount(0);
    setBlinkInterval(1000);
    
    let currentCount = 0;
    let currentInterval = 1000;
    const maxBlinks = 10;
    
    const executeBlinkSequence = () => {
      const blinkTimer = setTimeout(() => {
        currentCount++;
        setBlinkCount(currentCount);
        
        if (currentCount >= maxBlinks) {
          setWholePageBlinking(false);
          setWholePageVisible(true);
          setEnergized(true);
          setIsBlinking(false);
          setPageReveal(true);
          return;
        }
        
        const reductionFactor = 0.75;
        const newInterval = Math.max(currentInterval * reductionFactor, 50);
        currentInterval = newInterval;
        setBlinkInterval(newInterval);
        
        executeBlinkSequence();
      }, currentInterval);
      
      return blinkTimer;
    };
    
    const timer = executeBlinkSequence();
    
    return () => clearTimeout(timer);
  };

  const animationStyles: React.CSSProperties = {
    opacity: isBlinking ? (blinkCount % 2 === 0 ? 1 : 0) : (energized ? 1 : 0.2), 
    transition: `opacity ${blinkInterval/1000}s ease-in-out`,
    boxShadow: energized ? '0 0 50px rgba(195, 255, 68, 0.4)' : 'none'
  };

  const wholePageStyles: React.CSSProperties = {
    filter: wholePageBlinking 
      ? (blinkCount % 2 === 0 ? 'brightness(0.2)' : 'brightness(0)')
      : (wholePageVisible ? 'brightness(1)' : 'brightness(0.05)'),
    backgroundColor: energized ? '#111F54' : '#111F54',
    display: showOnlyPowerButton ? 'none' : 'block',
  };

  const hiddenElementStyles: React.CSSProperties = {
    opacity: pageReveal ? 1 : 0,
    visibility: pageReveal ? 'visible' as const : 'hidden' as const,
    transition: 'opacity 0.8s ease-out, visibility 0.8s ease-out',
  };

  const initialHiddenStyles: React.CSSProperties = {
    opacity: initialScroll ? 1 : 0,
    pointerEvents: initialScroll ? 'auto' as const : 'none' as const,
    transition: 'opacity 1s ease-out',
  };

  const toggleTimelineItem = (index: number) => {
    if (!initialScroll) return;
    
    const newOpenItems = [...openTimelineItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenTimelineItems(newOpenItems);
  };

  const timelineGlowingStyles: React.CSSProperties = {
    opacity: 1,
    filter: 'brightness(1)',
    zIndex: 10,
  };

  const powerButtonStyles: React.CSSProperties = {
    backgroundColor: '#C3FF44',
    boxShadow: '0 0 50px #C3FF44, 0 0 80px rgba(195, 255, 68, 0.6)',
    opacity: 1,
    transition: 'all 0.6s ease-in-out',
    cursor: 'pointer',
    border: '2px solid rgba(195, 255, 68, 0.5)',
    padding: isMobile ? '0.75rem' : '1rem',
    borderRadius: '9999px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 9999,
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
      {/* Power Button and Logo Container - Always visible */}
      <div 
        className="power-button-container"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: showOnlyPowerButton ? 'flex' : 'none', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: 'black',
          zIndex: 9000 
        }}
      >
        {/* Brain Logo - At the top */}
        <img 
          src="/brain2.png" 
          alt="kWattz Brain Logo" 
          className="w-full md:w-1/2 mx-auto px-2 md:px-0 mb-10"
          style={{ 
            objectFit: 'contain',
            maxWidth: '400px',
            marginBottom: '80px'
          }}
        />
        
        {/* Power Button - Below the logo */}
        <div 
          className="inline-flex items-center justify-center rounded-full animate-pulse"
          style={{
            ...powerButtonStyles,
            position: 'relative',
            top: 'auto',
            transform: 'translateX(-50%)',
          }}
          onClick={handlePowerButtonClick}
        >
          <Power 
            size={isMobile ? 36 : 48} 
            className="text-black" 
            style={{
              filter: 'drop-shadow(0 0 20px rgba(195, 255, 68, 0.8))',
            }}
          />
        </div>
        {isMobile && (
          <p className="text-[#C3FF44] text-sm mt-2 animate-pulse">
            Tap to power up!
          </p>
        )}
      </div>
      
      {/* Main Page Content - Hidden until power button is clicked */}
      <div style={wholePageStyles}>
        {!showOnlyPowerButton && (
          <div style={hiddenElementStyles}>
            <TopMenu />
          </div>
        )}
        
        <main className="container mx-auto px-4 py-6 pt-24">
          {!showOnlyPowerButton && (
            <>
              <section className="mb-12 md:mb-20 flex flex-col items-center justify-center text-center" style={hiddenElementStyles}>
                <div className={`max-w-3xl mx-auto ${pageReveal ? 'bg-[#111F54]/80' : 'bg-black/80'} p-4 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(195,255,68,0.15)] hover:shadow-[0_0_40px_rgba(195,255,68,0.25)] transition-all duration-500`}>
                  <p className="text-lg md:text-2xl mb-6">
                    While I'm busy hustling to validate my concept, take a look at what I've accomplished so far. Meanwhile, let's keep in touch! I'm a brain full of ideas.
                  </p>
                  
                  <div className="flex flex-col items-center space-y-6 mt-6">
                    <Button 
                      className="text-black text-lg py-5 px-6 md:py-6 md:px-8 hover:bg-[#C3FF44]/90 shadow-[0_0_20px_rgba(195,255,68,0.4)] hover:shadow-[0_0_30px_rgba(195,255,68,0.6)] transition-all duration-300 flex items-center w-full md:w-auto" 
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
              
              <section 
                className="mt-10 md:mt-20 mb-16 md:mb-32 max-w-4xl mx-auto relative z-50"
                ref={timelineRef}
                style={timelineGlowingStyles}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-16 text-center text-[#C3FF44] neon-text" 
                    style={{ 
                      textShadow: '0 0 15px rgba(195, 255, 68, 0.8), 0 0 25px rgba(195, 255, 68, 0.6), 0 0 35px rgba(195, 255, 68, 0.4)'
                    }}>
                  Our Journey So Far
                </h2>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 z-0">
                    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 right-0 h-full energy-flow" 
                        style={{
                          background: 'linear-gradient(180deg, rgba(195,255,68,0) 0%, rgba(195,255,68,1) 50%, rgba(195,255,68,0) 100%)',
                          height: '30%',
                          opacity: 1,
                          boxShadow: '0 0 20px rgba(195,255,68,0.8), 0 0 40px rgba(195,255,68,0.4), 0 0 60px rgba(195,255,68,0.2)',
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    {timelineItems.map((item, index) => (
                      <div 
                        key={index}
                        className={`timeline-item mb-12 md:mb-20 flex ${isMobile ? 'flex-col items-center' : (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')} items-center`}
                      >
                        <div 
                          className={`${isMobile ? 'w-full mt-4' : 'w-5/12'} ${!isMobile && (index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left')}`} 
                          style={hiddenElementStyles}
                        >
                          <Collapsible
                            open={openTimelineItems[index]}
                            onOpenChange={() => toggleTimelineItem(index)}
                            className={`w-full ${openTimelineItems[index] ? 'shadow-[0_0_30px_rgba(195,255,68,0.4)]' : ''} transition-all duration-500`}
                          >
                            <Card className={`${pageReveal ? 'bg-[#111F54]/40' : 'bg-black/40'} border-[#C3FF44]/20 overflow-hidden ${openTimelineItems[index] ? 'shadow-[0_0_25px_rgba(195,255,68,0.3)]' : ''} transition-all duration-500 cursor-pointer hover:border-[#C3FF44]/40`}>
                              <CardContent className="p-4 md:p-6">
                                <CollapsibleTrigger className="w-full flex items-center justify-between">
                                  <div>
                                    <p className="text-[#C3FF44] text-xs md:text-sm font-semibold mb-1 md:mb-2">{item.date}</p>
                                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">{item.title}</h3>
                                  </div>
                                  <ChevronDown className={`h-5 w-5 text-[#C3FF44] transition-transform duration-300 ${openTimelineItems[index] ? 'rotate-180' : ''}`} />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pt-3 md:pt-4 text-gray-300">
                                  <div className={`overflow-hidden transition-all duration-500 ${openTimelineItems[index] ? 'max-h-40' : 'max-h-0'}`}>
                                    {item.description}
                                  </div>
                                </CollapsibleContent>
                              </CardContent>
                            </Card>
                          </Collapsible>
                        </div>
                        
                        <div className={`${isMobile ? 'mb-0 mt-0' : 'w-2/12'} flex justify-center`}>
                          <div 
                            className="h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center border-2 border-[#C3FF44] relative cursor-pointer"
                            style={{
                              backgroundColor: 'black',
                              boxShadow: '0 0 15px rgba(195, 255, 68, 0.8), 0 0 25px rgba(195, 255, 68, 0.4)',
                              animation: 'glow-pulse 2s ease-in-out infinite alternate',
                            }}
                          >
                            <Zap className="h-5 w-5 md:h-6 md:w-6 text-[#C3FF44]" />
                          </div>
                        </div>
                        
                        {!isMobile && <div className="w-5/12"></div>}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mt-6 md:mt-10 mb-12 md:mb-20 flex flex-col items-center justify-center text-center relative z-50">
                <img 
                  ref={logoRef}
                  src="/brain2.png" 
                  alt="kWattz Brain Logo" 
                  className="w-full md:max-w-[12xl] mx-auto px-2 md:px-0"
                  style={{ 
                    objectFit: 'contain',
                    opacity: logoReached ? 1 : 0.3,
                    transition: 'opacity 0.8s ease-out',
                    filter: 'drop-shadow(0 0 10px rgba(195, 255, 68, 0.4))'
                  }}
                />
                
                {(!logoClicked && !showOnlyPowerButton) && (
                  <div 
                    className="power-button-container mt-4 md:mt-8"
                    style={{ zIndex: 999 }}
                  >
                    <div 
                      className="inline-flex items-center justify-center rounded-full animate-pulse"
                      style={{
                        backgroundColor: '#C3FF44',
                        boxShadow: '0 0 50px #C3FF44, 0 0 80px rgba(195, 255, 68, 0.6)',
                        opacity: 1,
                        transition: 'all 0.6s ease-in-out',
                        cursor: 'pointer',
                        border: '2px solid rgba(195, 255, 68, 0.5)',
                        padding: isMobile ? '0.75rem' : '1rem',
                        borderRadius: '9999px',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 'fit-content',
                      }}
                      onClick={handlePowerButtonClick}
                    >
                      <Power 
                        size={isMobile ? 36 : 48} 
                        className="text-black" 
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(195, 255, 68, 0.8))',
                        }}
                      />
                    </div>
                    {isMobile && (
                      <p className="text-[#C3FF44] text-sm mt-2 animate-pulse">
                        Tap to power up!
                      </p>
                    )}
                  </div>
                )}
              </section>
            </>
          )}
        </main>

        {!showOnlyPowerButton && (
          <div style={{...animationStyles, ...hiddenElementStyles}}>
            <Footer />
          </div>
        )}
      </div>
      
      <style>
        {`
        @keyframes flowDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        
        .energy-flow {
          animation: flowDown 3s infinite linear;
          filter: drop-shadow(0 0 8px rgba(195, 255, 68, 0.8));
        }
        
        .neon-text {
          text-shadow: 0 0 10px rgba(195, 255, 68, 0.7), 0 0 20px rgba(195, 255, 68, 0.5), 0 0 30px rgba(195, 255, 68, 0.3);
          animation: neon-pulse 1.5s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 10px rgba(195, 255, 68, 0.3); }
          50% { box-shadow: 0 0 20px rgba(195, 255, 68, 0.7); }
          100% { box-shadow: 0 0 10px rgba(195, 255, 68, 0.3); }
        }
        
        @keyframes neon-pulse {
          from { text-shadow: 0 0 10px rgba(195, 255, 68, 0.7), 0 0 20px rgba(195, 255, 68, 0.5), 0 0 30px rgba(195, 255, 68, 0.3); }
          to { text-shadow: 0 0 15px rgba(195, 255, 68, 0.9), 0 0 25px rgba(195, 255, 68, 0.7), 0 0 35px rgba(195, 255, 68, 0.5); }
        }
        
        @keyframes glow-pulse {
          from { box-shadow: 0 0 15px rgba(195, 255, 68, 0.8), 0 0 25px rgba(195, 255, 68, 0.4); }
          to { box-shadow: 0 0 20px rgba(195, 255, 68, 1), 0 0 30px rgba(195, 255, 68, 0.6); }
        }
        
        @keyframes pulse-subtle {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        @keyframes powerUp {
          0% { filter: brightness(0.3); }
          100% { filter: brightness(1); }
        }
        
        .prevent-interactions {
          pointer-events: none !important;
        }
        
        /* Mobile-specific improvements */
        @media (max-width: 767px) {
          .timeline-item {
            margin-bottom: 2rem;
          }
          
          .energy-flow {
            height: 40% !important;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Investors;
