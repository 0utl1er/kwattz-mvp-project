import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#091544] border-y border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#C3FF44' }}>Ready to Start Saving?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Join Us!
        </p>
        <Button className="text-[#111F54] hover:bg-[#C3FF44]/90 text-lg py-6 px-8" style={{ backgroundColor: '#C3FF44' }} asChild>
          <Link to="/signup">Create Your Account</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
