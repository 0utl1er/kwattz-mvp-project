
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Kwattz Energy Consumption Intelligence</h1>
          <p className="text-xl md:text-2xl mb-8">
            Monitor, analyze, and optimize your energy usage in real-time with our smart AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white/10 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Smart Energy Monitoring Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">Real-Time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Track your energy consumption in real-time with detailed analytics and intuitive dashboards.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">AI-Powered Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Leverage advanced AI to predict energy usage patterns and receive smart optimization recommendations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">Cost Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Save on energy bills with intelligent suggestions for reducing consumption during peak hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Kwattz Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-white/80">Connect your home's energy meters to our secure platform</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Monitor</h3>
              <p className="text-white/80">View your consumption patterns with detailed analytics</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save</h3>
              <p className="text-white/80">Implement AI-powered suggestions to reduce energy costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/10 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "Kwattz helped us reduce our energy bill by 30% in just three months. The insights were eye-opening!"
                </p>
                <p className="font-semibold">- Sarah Johnson, Homeowner</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "The predictive analytics have transformed how we manage energy consumption in our office building."
                </p>
                <p className="font-semibold">- Mark Davis, Business Owner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Energy?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join thousands of smart homeowners and businesses who are saving energy and reducing costs with Kwattz.
          </p>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kwattz</h3>
              <p className="text-white/70">
                Smart Energy Monitoring for a Sustainable Future
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Features</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 Kwattz Energy Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
