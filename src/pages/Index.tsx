
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, LightbulbIcon, BadgeDollarSign, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">
              Smart Energy Management with <span className="text-blue-600">kWattz</span>
            </h1>
            <p className="text-xl text-gray-700 md:pr-12">
              Our AI-powered advisor helps you understand your electric bills, save money, and make smarter energy decisions.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="text-lg py-6 px-8 bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/signup">Get Started <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
              <div className="bg-blue-50 rounded-xl p-4 mb-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Your Energy Advisor</h3>
                <p className="text-gray-700">
                  Upload your electric bill and our AI will analyze your usage patterns and provide personalized recommendations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <LightbulbIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">Understand your energy consumption</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <BadgeDollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">Save money on your electric bills</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-gray-700">Track your progress over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-950">How kWattz Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Create Account</h3>
              <p className="text-gray-700">Sign up with your email and password to get started.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Answer Questions</h3>
              <p className="text-gray-700">Tell us about your energy usage habits.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Upload Bill</h3>
              <p className="text-gray-700">Upload your electric bill for our AI to analyze.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Get Insights</h3>
              <p className="text-gray-700">Receive personalized recommendations and start saving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-950">Why Choose kWattz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">AI-Powered Analysis</h3>
              <p className="text-gray-700">Our AI technology reads and analyzes your electric bills to identify saving opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Personalized Education</h3>
              <p className="text-gray-700">Learn how electric bills work and receive tailored advice for your specific situation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Ongoing Monitoring</h3>
              <p className="text-gray-700">Subscribe to have your energy usage continuously monitored and receive regular insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who have reduced their energy bills with kWattz.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-8" asChild>
            <Link to="/signup">Create Your Account</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4">kWattz</h3>
              <p className="max-w-md">
                AI-powered energy management system that helps you understand and optimize your energy usage.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
                <ul className="space-y-2">
                  <li><Link to="/features" className="hover:text-white">Features</Link></li>
                  <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                  <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="hover:text-white">About</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                  <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-2">
                  <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
                  <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center md:text-left md:flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} kWattz. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex justify-center md:justify-end space-x-6">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
