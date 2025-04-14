
import { useRef, useState, useEffect } from "react";

const Investors = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const [logoReached, setLogoReached] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setLogoReached(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Investor Relations</h1>
        
        <div className="flex justify-center mb-12">
          <img
            ref={logoRef}
            src="/brain2.png" 
            alt="kWattz Brain Logo" 
            className="w-full max-w-[12xl] mx-auto"
            style={{ 
              objectFit: 'contain',
              opacity: logoReached ? 1 : 0.3,
              transition: 'opacity 0.8s ease-out',
              filter: 'drop-shadow(0 0 10px rgba(195, 255, 68, 0.4))'
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-4">
              kWattz is revolutionizing the energy industry by leveraging artificial intelligence 
              to help consumers and businesses optimize their energy usage, reduce costs, and decrease 
              environmental impact.
            </p>
            <p>
              We're creating a future where energy decisions are informed, intelligent, and sustainable.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Investment Opportunity</h2>
            <p className="mb-4">
              The global energy management market is projected to reach $43 billion by 2028. 
              kWattz is uniquely positioned to capture significant market share with our innovative 
              AI-powered energy advisory platform.
            </p>
            <p>
              We're seeking strategic partners who share our vision for a smarter energy future.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Financial Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-green-400 mb-2">237%</h3>
              <p className="text-gray-300">Revenue Growth (YoY)</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-green-400 mb-2">65K+</h3>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-green-400 mb-2">$4.2M</h3>
              <p className="text-gray-300">Annual Recurring Revenue</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Ready to Join Our Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We're currently raising our Series A to accelerate product development and market expansion.
            Contact our investor relations team to learn more about this opportunity.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Request Investor Deck
          </button>
        </div>
      </div>
    </div>
  );
};

export default Investors;
