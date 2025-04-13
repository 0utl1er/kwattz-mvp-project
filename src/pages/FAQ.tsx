
import React, { useEffect } from "react";
import Footer from "@/components/landing/Footer";
import TopMenu from "@/components/layout/TopMenu";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What is kWattz?",
      answer: "kWattz is your AI-powered energy advisor. We help you understand your electricity usage, predict costs, and save money — automatically."
    },
    {
      question: "How does it work?",
      answer: "Upload your electricity bill, answer a few questions, and let our AI analyze your energy habits. We provide personalized insights, tips, and forecasts."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. All data is encrypted and stored securely in compliance with GDPR and industry standards. Your bills are yours — we just read them nicely."
    },
    {
      question: "Do you sell my data?",
      answer: "Never. Gross."
    },
    {
      question: "What countries do you support?",
      answer: "Currently we support bills from [your region here], but we're expanding soon. Get on the list to be notified."
    },
    {
      question: "How can I join the beta program?",
      answer: "Just sign up and check the box that says \"I want to test early features.\" That's it."
    },
    {
      question: "How do I contact you?",
      answer: "Email us at hi@kwattz.com or yell into the nearest smart meter and we'll hear you. (Just kidding. Email us.)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#111F54] text-white">
      <TopMenu />
      
      <main className="flex-grow pt-24">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#C3FF44] text-center">
              Frequently Asked Questions
            </h1>
            
            <div className="max-w-3xl mx-auto bg-[#1a2c6b] p-8 rounded-xl border border-[#C3FF44]/20 shadow-lg">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-[#C3FF44]/20 last:border-b-0"
                  >
                    <AccordionTrigger className="text-lg font-medium text-[#C3FF44] hover:text-[#d4ff6f]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white/80 mb-6">Still have questions?</p>
              <Button className="bg-[#C3FF44] text-[#111F54] hover:bg-[#d4ff6f]">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
