
import React from 'react';
import { TopMenu } from '../components/layout/TopMenu';
import { Footer } from '../components/landing/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <TopMenu />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">About kWattz</h1>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <img 
                src="/kwattz-brain Medium.jpeg" 
                alt="kWattz Founder" 
                className="rounded-xl shadow-lg max-w-full md:max-w-md"
              />
              {/* Black and white filter with contrast enhancement */}
              <div className="absolute inset-0 bg-[#222]/80 mix-blend-multiply rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111F54] to-transparent opacity-60 rounded-xl"></div>
              <div className="absolute inset-0 rounded-xl" style={{ filter: 'contrast(1.2)' }}></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Mission</h2>
            <p className="text-lg mb-6">
              At kWattz, we're on a mission to democratize access to energy insights. 
              We believe that everyone should be able to understand and optimize their 
              energy usage without requiring specialized knowledge or expensive 
              equipment.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2023, kWattz began as a solution to a common problem: 
              understanding complex energy bills and finding ways to reduce energy costs. 
              Our team of energy experts and AI specialists came together to create an 
              accessible platform that translates complicated energy data into 
              actionable insights.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Approach</h2>
            <p className="text-lg">
              We combine cutting-edge AI technology with deep domain expertise in 
              energy management. Our platform analyzes your energy consumption patterns 
              and provides personalized recommendations to help you save money and 
              reduce your environmental footprint.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Accessibility</h3>
              <p>Making energy insights available to everyone, regardless of technical background.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Sustainability</h3>
              <p>Promoting energy efficiency to reduce environmental impact and create a better future.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Innovation</h3>
              <p>Continuously improving our technology to provide the best possible insights and recommendations.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
