
import React from 'react';
import { Landing as LandingComponent } from "@/components/Landing";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#111F54]">
      <LandingComponent />
      <div className="container mx-auto py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Site Under Maintenance</h2>
        <p>We are currently performing maintenance. Please check back later.</p>
      </div>
    </div>
  );
};

export default Landing;
