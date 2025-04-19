import React from 'react';
import { Calculator, LightbulbIcon, Shield } from "lucide-react";
import Card from './Card';

const Benefits = () => {
  const benefits = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Start",
      description: "Sing in to get started"
    },
    {
      icon: <LightbulbIcon className="h-8 w-8" />,
      title: "Upload your electric bill",
      description: "Learn how electric bills work and receive tailored advice for your specific situation."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "...... ",
      description: "......"
    }
  ];

  return (
    <section className="py-16 bg-[#091544]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#C3FF44' }}>Why Choose kWattz</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
