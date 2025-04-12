
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
            src="/brain2.png" 
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
              <p>kWattz ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered energy advisor service (the "Service").</p>
              <p>Please read this Privacy Policy carefully. If you disagree with our policies and practices, your choice is not to use our services. By accessing or using kWattz, you agree to this Privacy Policy.</p>
              <p>Note: kWattz is currently in development. By joining our waitlist, beta testing, or uploading data, you agree to this policy.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information such as name, email address, and utility account details (if provided).</li>
                <li>Uploaded electricity bills (PDFs or images) for AI analysis.</li>
                <li>Energy consumption data from your uploaded bills and connected devices.</li>
                <li>Usage information about how you interact with our platform, including pages visited via cookies or analytics tools (like Google Analytics).</li>
                <li>Technical data including IP address, browser type, device information, and cookies.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide kWattz's energy-saving insights (e.g., bill analysis, cost-saving tips).</li>
                <li>Process and analyze your energy consumption patterns.</li>
                <li>Generate personalized recommendations to help you save energy and reduce costs.</li>
                <li>Improve the Service using AI models (including OpenAI's ChatGPT API for natural language processing).</li>
                <li>Communicate with you about your account, updates to our services, beta updates, and surveys.</li>
                <li>Ensure the security and integrity of our platform.</li>
                <li>Anonymize aggregated data for research (e.g., "Average household saves $X with kWattz").</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">4. Data Storage & Processing</h2>
              <p>We take your data security seriously:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hosting:</strong> kWattz is built on Microsoft Azure Cloud, which stores and processes your data securely.</li>
                <li><strong>AI Processing:</strong> For bill analysis, we use OpenAI's ChatGPT API to generate insights. Your data is sent to OpenAI but is not used to train their models (we disable logging).</li>
                <li><strong>Retention:</strong> Uploaded bills are deleted after processing unless you opt to save them.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">5. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information to third parties.</p>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service providers</strong> who perform services on our behalf, including:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Azure Cloud (hosting)</li>
                    <li>OpenAI API (bill analysis)</li>
                    <li>Google Analytics (website trends, anonymized)</li>
                  </ul>
                </li>
                <li><strong>Partners</strong> who offer complementary energy-saving products or services (only with your consent).</li>
                <li><strong>Legal authorities</strong> when required by law or to protect our rights.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">6. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption, access controls, and Azure's security protocols</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>While we take precautions, no method of transmission over the Internet or electronic storage is 100% secure.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">7. Your Privacy Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access and receive a copy of your personal information.</li>
                <li>The right to correct or update your personal information.</li>
                <li>The right to request deletion of your personal information.</li>
                <li>The right to restrict or object to our processing of your personal information.</li>
                <li>The right to data portability.</li>
                <li>Opt out of marketing emails.</li>
              </ul>
              <p>To exercise these rights, please contact us at info@kwattz.com.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">8. Children's Privacy</h2>
              <p>Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete that information promptly.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">9. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will post any changes on this page and update the "Last Updated" date at the top of this Privacy Policy.</p>
              <p>Updates will be posted here. Continued use of kWattz means you accept the changes.</p>
              <p>We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#C3FF44]">10. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
              <p className="font-medium">Email: info@kwattz.com</p>
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
