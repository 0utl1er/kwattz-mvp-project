
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToAuth = () => {
    const authSection = document.querySelector('#auth-section');
    authSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="container mx-auto px-4 pt-32 pb-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-center gap-2" style={{ color: '#d7ff64' }}>
              Take control of your energy bill with AI
            </h1>
            <p className="text-[#d9d9d9] text-xl md:pr-12 -mt-4">
              Understand your energy use, avoid expensive hours, and save money — meet kWattz, your personal energy advisor.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button 
                className="text-[#0f1c4b] text-lg py-6 px-8" 
                style={{ backgroundColor: '#d7ff64' }}
                onClick={scrollToAuth}
              >
                Try kWattz AI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
