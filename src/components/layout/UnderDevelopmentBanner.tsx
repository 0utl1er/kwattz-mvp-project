
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const UnderDevelopmentBanner = () => {
  return (
    <div className="bg-[#111F54] text-white px-6 py-5 fixed top-0 left-0 right-0 z-[100] animate-fade-in shadow-lg border-b border-[#C3FF44]/20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-[#C3FF44]" />
          <div>
            <p className="text-lg md:text-xl font-semibold mb-1">
              kWattz is Under Development
            </p>
            <p className="text-sm md:text-base text-[#d9d9d9]">
              Our site is currently under construction. Features are temporarily disabled for security purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopmentBanner;
