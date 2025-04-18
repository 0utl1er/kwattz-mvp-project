
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Mail as GmailIcon } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-[#091544] border-y border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#C3FF44' }}>Ready to Start Saving?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Join Us!
        </p>
        
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full py-6 text-white border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#C3FF44]/50 transition-all duration-200"
              asChild
            >
              <Link to="/login" className="flex items-center justify-center">
                <GmailIcon className="mr-2 h-5 w-5" />
                Continue with Gmail
              </Link>
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="px-2 text-white/60 bg-[#091544]">or</span>
              </div>
            </div>
            
            <Button 
              variant="outline"
              className="w-full py-6 text-white border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#C3FF44]/50 transition-all duration-200"
              asChild
            >
              <Link to="/kwattz-signup" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Continue with Email
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-white/60 px-2">
            By continuing, you agree to kWattz's{' '}
            <Link to="/privacy-policy" className="text-[#C3FF44] hover:text-[#C3FF44]/80 underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="text-[#C3FF44] hover:text-[#C3FF44]/80 underline">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
