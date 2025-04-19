
import React from 'react';
import { SignIn } from '@/components/auth/SignIn';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#001050] flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-12">
        <div className="max-w-2xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Smart energy insights for your <span className="text-[#C3FF44]">home</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Understand your energy usage, reduce your bills, and help the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              onClick={() => navigate('/dashboard')} 
              className="bg-[#C3FF44] text-[#001050] hover:bg-[#C3FF44]/90 text-lg px-8 py-6 h-auto"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:ml-12 max-w-md">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20">
            <SignIn />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © 2025 kWattz. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-[#C3FF44]">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-[#C3FF44]">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-[#C3FF44]">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
