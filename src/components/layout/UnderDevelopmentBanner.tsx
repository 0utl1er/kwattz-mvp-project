
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
    <div className="bg-[#111F54] text-white px-4 py-3 fixed top-0 left-0 right-0 z-[100] animate-fade-in">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-[#C3FF44]" />
          <p className="text-sm md:text-base">
            Welcome! kWattz is currently under development. Some features might not be available yet.
          </p>
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
