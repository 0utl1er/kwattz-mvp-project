
import React from 'react';
import { Calculator, LightbulbIcon, Shield } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-16 bg-[#111F54]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#C3FF44' }}>Why Choose kWattz</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
            <div className="mb-4" style={{ color: '#C3FF44' }}>
              <Calculator className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#C3FF44' }}>AI-Powered Analysis</h3>
            <p className="text-white">Our AI technology reads and analyzes your electric bills to identify saving opportunities.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
            <div className="mb-4" style={{ color: '#C3FF44' }}>
              <LightbulbIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#C3FF44' }}>Personalized Education</h3>
            <p className="text-white">Learn how electric bills work and receive tailored advice for your specific situation.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
            <div className="mb-4" style={{ color: '#C3FF44' }}>
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#C3FF44' }}>Ongoing Monitoring</h3>
            <p className="text-white">Subscribe to have your energy usage continuously monitored and receive regular insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
