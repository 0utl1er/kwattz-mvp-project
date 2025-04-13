
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TopMenu = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#111F54] shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/idea-kwattz-logo-2.svg" alt="kWattz" className="h-10" />
        </Link>
        <Button 
          className="text-[#111F54] text-lg py-6 px-8" 
          style={{ backgroundColor: '#C3FF44' }} 
          asChild
        >
          <Link to="/kwattz-signup">
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TopMenu;
