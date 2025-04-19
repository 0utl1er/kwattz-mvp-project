
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#111F54] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Welcome to kWattz⚡
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          Your AI Energy Expert
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <Button 
            className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90 animate-fade-in animation-delay-300"
            asChild
          >
            <Link to="/signup">
              Get Started
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white/10 animate-fade-in animation-delay-400"
            asChild
          >
            <Link to="/login">
              Sign In
            </Link>
          </Button>
        </div>
      </div>
      <div className="container mx-auto py-12 text-center text-white mt-12 animate-fade-in animation-delay-500">
        <h2 className="text-2xl font-bold mb-4">Site Under Maintenance</h2>
        <p>We are currently performing maintenance. Please check back later.</p>
      </div>
    </div>
  );
};

export default Landing;
