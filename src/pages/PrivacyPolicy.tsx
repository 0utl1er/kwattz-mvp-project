
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import Footer from "../components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#111F54] text-white">
      {/* Header with Logo */}
      <div className="w-full py-6 px-4 flex justify-center">
        <Link to="/">
          <img 
            src="/logo-final-transparent.png" 
            alt="kWattz Logo" 
            className="h-20 w-auto" 
          />
        </Link>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-[#C3FF44] hover:text-[#C3FF44]/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#C3FF44]/20 p-3 rounded-full">
              <Shield className="h-6 w-6" style={{ color: '#C3FF44' }} />
            </div>
            <h1 className="text-3xl font-bold text-[#C3FF44]">Privacy Policy</h1>
          </div>
          
          <div className="space-y-6 text-white/90">
            <p className="text-lg">Last Updated: April 12, 2025</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">1. Introduction</h2>
              <p>At kWattz, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>
              <p>Please read this Privacy Policy carefully. If you disagree with our policies and practices, your choice is not to use our services. By accessing or using kWattz, you agree to this Privacy Policy.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information such as name, email address, and contact details you provide when registering or using our services.</li>
                <li>Energy consumption data from your uploaded bills and connected devices.</li>
                <li>Usage information about how you interact with our platform.</li>
                <li>Technical data including IP address, browser type, device information, and cookies.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Process and analyze your energy consumption patterns.</li>
                <li>Generate personalized recommendations to help you save energy and reduce costs.</li>
                <li>Communicate with you about your account, updates to our services, and promotional offers.</li>
                <li>Ensure the security and integrity of our platform.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">4. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who perform services on our behalf.</li>
                <li>Partners who offer complementary energy-saving products or services (only with your consent).</li>
                <li>Legal authorities when required by law or to protect our rights.</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</p>
              <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">6. Your Privacy Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access and receive a copy of your personal information.</li>
                <li>The right to correct or update your personal information.</li>
                <li>The right to request deletion of your personal information.</li>
                <li>The right to restrict or object to our processing of your personal information.</li>
                <li>The right to data portability.</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">7. Children's Privacy</h2>
              <p>Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete that information promptly.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">8. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will post any changes on this page and update the "Last Updated" date at the top of this Privacy Policy.</p>
              <p>We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">9. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
              <p className="font-medium">Email: privacy@kwattz.com</p>
              <p className="font-medium">Address: kWattz Headquarters, 123 Energy Way, San Francisco, CA 94103</p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
