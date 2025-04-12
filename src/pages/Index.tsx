
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-400 to-blue-500 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Smart Energy Management for a Brighter Future
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-white">
            Harness the power of data and save on your electricity bills with smart,
            personalized recommendations.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Why Choose kWattz?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Insights</h3>
              <p className="text-gray-600">
                Get detailed breakdowns of your energy usage and understand where your money goes.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Personalized recommendations to help you reduce your energy bill by up to 30%.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Lower your carbon footprint while saving money with smart energy choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Bill</h3>
              <p className="text-gray-600">
                Simply upload your electricity bill and we'll analyze it automatically.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Profile</h3>
              <p className="text-gray-600">
                Tell us a bit about your home and habits to get personalized insights.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive tailored suggestions to optimize your energy usage and save money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">JD</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Jane Doe</h3>
                  <p className="text-gray-600 text-sm">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I was shocked to see how much energy my old appliances were wasting. After following kWattz's recommendations, my bill dropped by 25%!"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">MS</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Michael Smith</h3>
                  <p className="text-gray-600 text-sm">Apartment Renter</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Even in a rental, I was able to make changes that saved me money. The personalized tips were really practical."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">LJ</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Lisa Johnson</h3>
                  <p className="text-gray-600 text-sm">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The energy insights helped me reduce operational costs for my business. The dashboard makes it easy to track progress over time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-green-400">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of homeowners who are cutting their energy bills and carbon footprint with kWattz.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started — It's Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-3">
              <img 
                src="/logo-final-transparent.png" 
                alt="kWattz Logo" 
                className="h-16 w-auto" 
              />
            </div>
            <p className="text-gray-400 mt-2">
              AI-powered energy management for homeowners and businesses.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} kWattz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
