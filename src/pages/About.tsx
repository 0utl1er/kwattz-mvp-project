
import React from 'react';
import TopMenu from '../components/layout/TopMenu';
import Footer from '../components/landing/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#111F54] pt-24">
      {/* Fixed Menu */}
      <TopMenu />
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#C3FF44' }}>
            About kWattz
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
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
            
            <div className="text-white max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#C3FF44' }}>Our Mission</h2>
              <p className="mb-4">
                kWattz is on a mission to revolutionize how people manage their energy consumption. 
                We believe that sustainable energy practices start at home, and with the right tools 
                and insights, everyone can contribute to a greener future.
              </p>
              <p>
                Our AI-powered energy advisor helps homeowners and businesses optimize their energy 
                usage, reduce bills, and minimize their carbon footprint through personalized 
                recommendations and smart analytics.
              </p>
            </div>
          </div>
          
          <div className="text-white max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center" style={{ color: '#C3FF44' }}>Our Story</h2>
            <p className="mb-4">
              Founded in 2023, kWattz emerged from a simple observation: most people want to save 
              energy and reduce their bills, but lack the tools to make informed decisions. Our 
              founders, with backgrounds in AI, energy systems, and sustainability, came together 
              to create a solution that makes energy optimization accessible to everyone.
            </p>
            <p>
              Today, kWattz is helping thousands of users across the country take control of their 
              energy consumption with intelligent insights and actionable recommendations.
            </p>
          </div>
        </section>
        
        <section className="text-white max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: '#C3FF44' }}>Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A2A5E] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#C3FF44' }}>Sustainability</h3>
              <p>We're committed to building a more sustainable future through accessible energy solutions.</p>
            </div>
            
            <div className="bg-[#1A2A5E] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#C3FF44' }}>Innovation</h3>
              <p>We leverage cutting-edge AI and data science to provide the most effective energy solutions.</p>
            </div>
            
            <div className="bg-[#1A2A5E] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#C3FF44' }}>Empowerment</h3>
              <p>We believe in empowering individuals and businesses to make informed energy decisions.</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
