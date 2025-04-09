
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, LightbulbIcon, BadgeDollarSign, BarChart3, Upload, Shield, Calculator, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111F54]">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#C3FF44' }}>
              Smart Energy Management with <span>kWattz</span>
            </h1>
            <p className="text-xl text-white md:pr-12">
              Our AI-powered advisor helps you understand your electric bills, save money, and make smarter energy decisions.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="text-[#111F54] text-lg py-6 px-8" style={{ backgroundColor: '#C3FF44' }} asChild>
                <Link to="/signup">Get Started <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button 
                className="text-[#111F54] text-lg py-6 px-8 hover:bg-[#C3FF44]/90" 
                style={{ backgroundColor: '#C3FF44' }} 
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md bg-white/10 rounded-2xl backdrop-blur-lg p-6 border border-white/20">
              <div className="bg-[#C3FF44]/20 rounded-xl p-4 mb-4">
                <h3 className="text-xl font-semibold" style={{ color: '#C3FF44' }}>Your Energy Advisor</h3>
                <p className="text-white">
                  Upload your electric bill and our AI will analyze your usage patterns and provide personalized recommendations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full">
                    <LightbulbIcon className="h-5 w-5" style={{ color: '#C3FF44' }} />
                  </div>
                  <p className="text-white">Understand your energy consumption</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full">
                    <BadgeDollarSign className="h-5 w-5" style={{ color: '#C3FF44' }} />
                  </div>
                  <p className="text-white">Save money on your electric bills</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#C3FF44]/20 p-2 rounded-full">
                    <BarChart3 className="h-5 w-5" style={{ color: '#C3FF44' }} />
                  </div>
                  <p className="text-white">Track your progress over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
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

      {/* Benefits Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-[#111F54] border-y border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#C3FF44' }}>Ready to Start Saving?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Join thousands of users who have reduced their energy bills with kWattz.
          </p>
          <Button className="text-[#111F54] hover:bg-[#C3FF44]/90 text-lg py-6 px-8" style={{ backgroundColor: '#C3FF44' }} asChild>
            <Link to="/signup">Create Your Account</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111F54] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                <span style={{ color: '#C3FF44' }}>k</span>Wattz
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
                <li><a href="#" className="hover:text-[#C3FF44]">Twitter</a></li>
                <li><a href="#" className="hover:text-[#C3FF44]">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
