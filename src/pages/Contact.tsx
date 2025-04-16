import React, { useState, useEffect } from 'react';
import TopMenu from '../components/layout/TopMenu';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, Send, Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';
import DOMPurify from 'dompurify';

const formSchema = z.object({
  name: z.string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Name must not exceed 50 characters."
    })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name must contain only letters and spaces."
    }),
  email: z.string()
    .email({
      message: "Please enter a valid email address.",
    })
    .max(100, {
      message: "Email must not exceed 100 characters."
    }),
  message: z.string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(2000, {
      message: "Message must not exceed 2000 characters"
    })
    .refine(val => !/<script|<\/script|javascript:|onerror=|onclick=|eval\(|fromCharCode/i.test(val), {
      message: "Message contains disallowed content."
    }),
});

type ContactFormData = z.infer<typeof formSchema>;

const Contact = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="min-h-screen bg-[#111F54] text-white">
      <TopMenu />

      <main className="container mx-auto px-4 py-6 pt-24">
        <section className="max-w-3xl mx-auto mb-20 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#C3FF44]">
            Contact Us
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-[#C3FF44]/20 p-3 rounded-full">
              <Mail className="h-8 w-8 text-[#C3FF44]" />
            </div>
          </div>
          
          <div className="text-center p-6 bg-[#C3FF44]/10 rounded-lg border border-[#C3FF44]/20">
            <p className="text-lg text-[#d9d9d9]">
              Our contact form is temporarily disabled while we make improvements to our site.
              Please check back soon.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#C3FF44' }}>Email Us</h3>
              <p className="mb-2">For general inquiries:</p>
              <a 
                href="mailto:info@kwattz.com" 
                className="flex items-center gap-2 text-[#C3FF44] hover:underline"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
                info@kwattz.com
              </a>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#C3FF44' }}>Office Location</h3>
              <p className="mb-2">San Diego, California</p>
              <p>United States</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
