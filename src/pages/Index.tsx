
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileUp, Sparkles, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Kwattz Energy Bill Analysis</h1>
          <p className="text-xl md:text-2xl mb-8">
            Upload your energy bill, get AI-powered insights, and save money on your next bill.
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

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Kwattz Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload</h3>
              <p className="text-white/80">Upload your energy bill securely to our platform</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p className="text-white/80">Our AI analyzes your bill and usage patterns</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save</h3>
              <p className="text-white/80">Get actionable insights to reduce your next energy bill</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/10 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">Bill Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Get a clear breakdown of your energy usage and charges with detailed explanations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">Cost-Saving Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Receive personalized recommendations to reduce your energy consumption and costs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">Simple & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Upload your bill easily and securely. We respect your privacy and protect your data.
                </p>
              </CardContent>
            </Card>
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
                  "Kwattz helped me understand my electricity bill for the first time. I saved $40 on my next bill by following their recommendations!"
                </p>
                <p className="font-semibold">- Sarah J., Homeowner</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-0 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "I had no idea I was being charged extra fees until Kwattz analyzed my bill. Their insights were eye-opening."
                </p>
                <p className="font-semibold">- Mark D., Small Business Owner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Energy Bill?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Upload your bill today and discover how much you could save on your next energy payment.
          </p>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg">
            Upload Your Bill Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kwattz</h3>
              <p className="text-white/70">
                AI-Powered Energy Bill Analysis for Smart Savings
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white/70">info@kwattz.com</p>
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
