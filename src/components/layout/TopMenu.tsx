
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const TopMenu = () => {
  const location = useLocation();
  
  const menuBgColor = 'bg-[#001050]'; 
  const logoSrc = '/logo-kwattz-final-final-transparent.svg';
  
  return (
    <div className={`fixed top-0 left-0 right-0 ${menuBgColor} shadow-md z-50`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logoSrc}
            alt="kWattz" 
            className="h-16 md:h-20" 
          />
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="text-[#C3FF44] hover:text-[#C3FF44]/90"
          >
            Login
          </Link>
          <Button 
            className="text-[#111F54] text-base md:text-lg py-4 md:py-6 px-5 md:px-8 shadow-[0_0_15px_rgba(195,255,68,0.2)] hover:shadow-[0_0_25px_rgba(195,255,68,0.4)]" 
            style={{ backgroundColor: '#C3FF44' }} 
            asChild
          >
            <Link to="/kwattz-signup">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
