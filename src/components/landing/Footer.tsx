import React from 'react';
import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111F54] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="mb-4">
              <img 
                src="/logo-final-transparent.png" 
                alt="kWattz Logo" 
                className="h-20 w-auto"
              />
            </h3>
            <p className="max-w-md">
              AI-powered energy management system that helps you understand and optimize your energy usage.
            </p>
            <p className="mt-2 text-[#C3FF44] flex items-center gap-2">
              <Mail className="h-5 w-5" />
              info@kwattz.com
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#C3FF44' }}>Product</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="hover:text-[#C3FF44]">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-[#C3FF44]">Pricing</Link></li>
                <li><Link to="/faq" className="hover:text-[#C3FF44]">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#C3FF44' }}>Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-[#C3FF44]">About</Link></li>
                <li><Link to="/contact" className="hover:text-[#C3FF44]">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-[#C3FF44]">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#C3FF44' }}>Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="hover:text-[#C3FF44]">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-[#C3FF44]">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-center" style={{ color: '#C3FF44' }}>Proudly Supported By</h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:border-[#C3FF44]/50 transition-colors">
              <a href="https://startup.google.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/google-for-startups-banner.png" 
                  alt="Google for Startups" 
                  className="h-10 md:h-12 w-auto"
                />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:border-[#C3FF44]/50 transition-colors">
              <a href="https://foundershub.startups.microsoft.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/microsoft-for-startups-founders-hub-banner.png" 
                  alt="Microsoft for Startups Founders Hub" 
                  className="h-10 md:h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center md:text-left md:flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} kWattz. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <a 
                  href="https://www.linkedin.com/kwattz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C3FF44] flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
