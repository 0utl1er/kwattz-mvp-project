import React from 'react';
import Card from './Card';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Account",
      description: "Sign up with your email and password to get started."
    },
    {
      number: 2,
      title: "Answer Questions",
      description: "Tell us about your energy usage habits."
    },
    {
      number: 3,
      title: "Upload Bill",
      description: "Upload your electric bill for our AI to analyze."
    },
    {
      number: 4,
      title: "Get Insights",
      description: "Receive personalized recommendations and start saving."
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#111F54] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#C3FF44' }}>How kWattz Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
