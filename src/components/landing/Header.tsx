import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, LightbulbIcon, BadgeDollarSign, BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#C3FF44' }}>
            Take control of your Electric Bill with
          </h1>
          <div className="flex justify-start items-center -mt-2 mb-2">
            <img 
              src="/logo-final-transparent.png" 
              alt="kWattz Logo" 
              className="h-32 md:h-40 lg:h-48 w-auto" 
            />
          </div>
          <p className="text-xl text-white md:pr-12">
            Our AI-powered advisor helps you understand your electric bills, save money, and make smarter energy decisions.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button className="text-[#111F54] text-lg py-6 px-8" style={{ backgroundColor: '#C3FF44' }} asChild>
              <Link to="/signup">Get Started <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button 
              className="text-[#111F54] text-lg py-6 px-8 hover:bg-[#C3FF44]/90" 
              style={{ backgroundColor: '#C3FF44' }} 
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md bg-white/10 rounded-2xl backdrop-blur-lg p-6 border border-white/20">
            <div className="bg-[#C3FF44]/20 rounded-xl p-4 mb-4">
              <h3 className="text-xl font-semibold" style={{ color: '#C3FF44' }}>Your Energy Advisor</h3>
              <p className="text-white">
                Upload your electric bill and our AI will analyze your usage patterns and provide personalized recommendations.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#C3FF44]/20 p-2 rounded-full">
                  <LightbulbIcon className="h-5 w-5" style={{ color: '#C3FF44' }} />
                </div>
                <p className="text-white">Understand your energy consumption</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#C3FF44]/20 p-2 rounded-full">
                  <BadgeDollarSign className="h-5 w-5" style={{ color: '#C3FF44' }} />
                </div>
                <p className="text-white">Save money on your electric bills</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#C3FF44]/20 p-2 rounded-full">
                  <BarChart3 className="h-5 w-5" style={{ color: '#C3FF44' }} />
                </div>
                <p className="text-white">Track your progress over time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
