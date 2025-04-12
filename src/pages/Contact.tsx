
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, Send, Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import Footer from '../components/landing/Footer';
import { useIsMobile } from '../hooks/use-mobile';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to a server
      // For now, we'll simulate a successful submission
      console.log("Form data:", values);
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111F54] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/">
            <img 
              src="/logo-final-transparent.png" 
              alt="kWattz Logo" 
              className="h-28 w-auto" 
            />
          </Link>
          <div className="flex gap-3 mt-6 md:mt-0">
            <Button 
              className="text-[#111F54] hover:bg-[#C3FF44]/90"
              style={{ backgroundColor: '#C3FF44' }}
              size={isMobile ? "sm" : "default"}
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button 
              className="text-[#111F54] hover:bg-[#C3FF44]/90"
              style={{ backgroundColor: '#C3FF44' }}
              size={isMobile ? "sm" : "default"}
              asChild
            >
              <Link to="/kwattz-signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 mb-6">
        <Button 
          className="bg-[#111F54] text-[#C3FF44] hover:bg-[#1EAEDB]/10"
          variant="outline"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <section className="max-w-3xl mx-auto mb-20 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: '#C3FF44' }}>
            Contact Us
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-[#C3FF44]/20 p-3 rounded-full">
              <Mail className="h-8 w-8 text-[#C3FF44]" />
            </div>
          </div>
          
          <p className="text-lg mb-8 text-center">
            Have questions or want to learn more about kWattz? Get in touch with our team and we'll get back to you as soon as possible.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-center">
                <Button 
                  className="text-[#111F54] hover:bg-[#C3FF44]/90 w-full md:w-auto"
                  style={{ backgroundColor: '#C3FF44' }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </section>

        <section className="max-w-3xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#C3FF44' }}>Email Us</h3>
              <p className="mb-2">For general inquiries:</p>
              <a 
                href="mailto:info@kwattz.com" 
                className="flex items-center gap-2 text-[#C3FF44] hover:underline"
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
