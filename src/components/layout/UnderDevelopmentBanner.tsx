
import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const UnderDevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem('hasSeenDevBanner');
    if (hasSeenBanner) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('hasSeenDevBanner', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#111F54] text-white px-6 py-5 fixed top-0 left-0 right-0 z-[100] animate-fade-in shadow-lg border-b border-[#C3FF44]/20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-[#C3FF44]" />
          <div>
            <p className="text-lg md:text-xl font-semibold mb-1">
              kWattz is Under Development
            </p>
            <p className="text-sm md:text-base text-white/80">
              Welcome! Some features might not be available yet. We're actively working to improve your experience.
            </p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-[#C3FF44] hover:text-white hover:bg-[#C3FF44]/10"
          onClick={handleDismiss}
        >
          Got it
        </Button>
      </div>
    </div>
  );
};

export default UnderDevelopmentBanner;

