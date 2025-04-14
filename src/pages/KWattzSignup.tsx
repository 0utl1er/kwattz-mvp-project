import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { initiateOAuthLogin, signUpWithEmail } from "@/utils/auth";

const signUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const KWattzSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isAppleLoading, setIsAppleLoading] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    setIsLoading(true);
    
    try {
      console.log("Form submitted, signing up with:", values.email);
      await signUpWithEmail(values.email, values.password);
      
      toast({
        title: "Account created successfully",
        description: "Welcome to kWattz! Let's start saving on energy.",
      });
    } catch (error: any) {
      console.error("Error during signup:", error);
      
      let errorMessage = "There was an error creating your account. Please try again.";
      
      // Handle Firebase specific errors
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered. Please try logging in instead.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak. Please choose a stronger password.";
      }
      
      toast({
        title: "Sign up failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    
    try {
      console.log("Initiating Google OAuth login");
      await initiateOAuthLogin('google');
      
      toast({
        title: "Account created successfully",
        description: "Welcome to kWattz⚡!",
      });
    } catch (error) {
      console.error("Error during Google signup:", error);
      toast({
        title: "Google authentication failed",
        description: "Could not authenticate with Google. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    setIsAppleLoading(true);
    
    try {
      console.log("Initiating Apple OAuth login");
      await initiateOAuthLogin('apple');
      
      toast({
        title: "Account created successfully",
        description: "Welcome to kWattz⚡!",
      });
    } catch (error) {
      console.error("Error during Apple signup:", error);
      toast({
        title: "Apple authentication failed",
        description: "Could not authenticate with Apple. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAppleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111F54] flex flex-col">
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-[#C3FF44] hover:text-[#C3FF44]/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold neon-text">Join kWattz</h1>
              <p className="text-white mt-2">Create your account and start saving on energy today</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="bg-white/10 text-white border-white/20 focus:ring-white/50"
                        />
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
                        <Input 
                          placeholder="john@example.com" 
                          {...field} 
                          className="bg-white/10 text-white border-white/20 focus:ring-white/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-white/10 text-white border-white/20 focus:ring-white/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Confirm Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-white/10 text-white border-white/20 focus:ring-white/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full text-[#111F54] hover:bg-[#C3FF44]/90 py-6" 
                  style={{ backgroundColor: '#C3FF44' }}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create My kWattz Account"}
                </Button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/20"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#111F54] px-2 text-white">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="border-white/20 bg-[#111F54] text-white hover:bg-[#111F54]/80"
                    onClick={handleGoogleLogin}
                    disabled={isGoogleLoading}
                  >
                    {isGoogleLoading ? (
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    ) : (
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    )}
                    {isGoogleLoading ? "Connecting..." : "Google"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="border-white/20 bg-[#111F54] text-white hover:bg-[#111F54]/80"
                    onClick={handleAppleLogin}
                    disabled={isAppleLoading}
                  >
                    {isAppleLoading ? (
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    ) : (
                      <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                    )}
                    {isAppleLoading ? "Connecting..." : "Apple"}
                  </Button>
                </div>
              </form>
            </Form>
            
            <div className="mt-6 text-center">
              <p className="text-white">
                Already have an account?{" "}
                <Link to="/login" className="text-[#C3FF44] hover:text-[#C3FF44]/80 font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-white/60 text-sm">
            <p>By creating an account, you agree to our</p>
            <p className="mt-1">
              <Link to="/terms" className="text-[#C3FF44]/80 hover:text-[#C3FF44] mr-2">Terms of Service</Link>
              and
              <Link to="/privacy-policy" className="text-[#C3FF44]/80 hover:text-[#C3FF44] ml-2">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes neon-flash {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(195, 255, 68, 0.6), 
              0 0 20px rgba(255, 255, 0, 0.4);
            color: #C3FF44;
          }
          50% {
            text-shadow: 
              0 0 20px rgba(195, 255, 68, 1), 
              0 0 40px rgba(255, 255, 0, 0.8), 
              0 0 60px rgba(195, 255, 68, 0.6);
            color: #FFFF00;
          }
        }

        .neon-text {
          animation: neon-flash 4s infinite ease-in-out;
          font-weight: bold;
        }
      `}} />
    </div>
  );
};

export default KWattzSignup;
