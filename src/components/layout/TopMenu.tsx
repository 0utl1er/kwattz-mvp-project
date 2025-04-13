
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TopMenu = () => {
  const location = useLocation();
  const isInvestorsPage = location.pathname === '/investors';
  
  // Dynamic styling based on current page
  const menuBgColor = isInvestorsPage ? 'bg-black' : 'bg-[#111F54]';
  
  // Choose logo based on page
  const logoSrc = isInvestorsPage 
    ? '/logo-final-transparent.png' 
    : '/logo-kwattz-final-svg.svg';
  
  return (
    <div className={`fixed top-0 left-0 right-0 ${menuBgColor} shadow-md z-50`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logoSrc}
            alt="kWattz" 
            className={`${isInvestorsPage ? 'h-16 md:h-20' : 'h-14 md:h-16'}`} 
          />
        </Link>
        <Button 
          className="text-[#111F54] text-base md:text-lg py-4 md:py-6 px-5 md:px-8" 
          style={{ backgroundColor: '#C3FF44' }} 
          asChild
        >
          <Link to="/kwattz-signup">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TopMenu;

