
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-[#111F54] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#C3FF44' }}>How kWattz Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
            <div className="bg-[#C3FF44]/20 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-[#C3FF44] font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#C3FF44' }}>Create Account</h3>
            <p className="text-white">Sign up with your email and password to get started.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
            <div className="bg-[#C3FF44]/20 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-[#C3FF44] font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#C3FF44' }}>Answer Questions</h3>
            <p className="text-white">Tell us about your energy usage habits.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
            <div className="bg-[#C3FF44]/20 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-[#C3FF44] font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#C3FF44' }}>Upload Bill</h3>
            <p className="text-white">Upload your electric bill for our AI to analyze.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
            <div className="bg-[#C3FF44]/20 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-[#C3FF44] font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#C3FF44' }}>Get Insights</h3>
            <p className="text-white">Receive personalized recommendations and start saving.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
