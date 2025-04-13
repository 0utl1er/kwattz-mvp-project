
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Mail, Lock, Loader2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { initiateOAuthLogin, signUpWithEmail } from "@/utils/auth";
import { saveUserToAzureDB } from "@/utils/azure-db";
import { Motion, AnimatePresence, motion } from 'framer-motion';

const signUpSchema = z.object({
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

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isAppleLoading, setIsAppleLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    setIsLoading(true);
    
    try {
      const userCredential = await signUpWithEmail(values.email, values.password);
      
      // Save user to Azure DB
      const userData = {
        email: values.email,
        createdAt: Date.now(),
        lastLogin: Date.now(),
      };
      
      await saveUserToAzureDB(userData);
      
      // Show success animation before redirecting
      setShowSuccess(true);
      
      // Delay navigation to show success animation
      setTimeout(() => {
        toast({
          title: "Account created successfully",
          description: "You can now proceed to the questionnaire.",
        });
        
        navigate("/questionnaire");
      }, 1500);
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
      const result = await initiateOAuthLogin('google');
      
      // Save user to Azure DB if login was successful
      if (result?.user) {
        const userData = {
          email: result.user.email || '',
          createdAt: Date.now(),
          lastLogin: Date.now(),
        };
        
        await saveUserToAzureDB(userData);
      }
      
      // Note: The redirect to questionnaire happens in the initiateOAuthLogin function
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
      const result = await initiateOAuthLogin('apple');
      
      // Save user to Azure DB if login was successful
      if (result?.user) {
        const userData = {
          email: result.user.email || '',
          createdAt: Date.now(),
          lastLogin: Date.now(),
        };
        
        await saveUserToAzureDB(userData);
      }
      
      // Note: The redirect to questionnaire happens in the initiateOAuthLogin function
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
    <div className="min-h-screen bg-[#111F54] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Energizing background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C3FF44]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1EAEDB]/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{animationDelay: "1s"}}></div>
      
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-[#C3FF44] hover:text-[#C3FF44]/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(195,255,68,0.1)] transition-all duration-300">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#C3FF44] to-[#1EAEDB] bg-clip-text text-transparent">Create your account</h1>
            <p className="text-white mt-2">Join <span className="text-[#C3FF44]">kWattz</span> to start saving on energy</p>
          </div>
          
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-8">
              <CheckCircle2 className="text-[#C3FF44] w-16 h-16 mb-4 animate-bounce" />
              <h2 className="text-xl font-semibold text-white">Account Created!</h2>
              <p className="text-white/80 mt-2">Redirecting you to the questionnaire...</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <FormControl>
                          <Input 
                            placeholder="john.doe@example.com" 
                            {...field} 
                            className="bg-white/10 text-white border-white/20 focus:ring-white/50 pl-10"
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="text-[#FF6B6B]" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            {...field} 
                            className="bg-white/10 text-white border-white/20 focus:ring-white/50 pl-10"
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="text-[#FF6B6B]" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Confirm Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            {...field} 
                            className="bg-white/10 text-white border-white/20 focus:ring-white/50 pl-10"
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="text-[#FF6B6B]" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full text-[#111F54] hover:bg-[#C3FF44]/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(195,255,68,0.4)]" 
                  style={{ backgroundColor: '#C3FF44' }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </div>
                  ) : "Create Account"}
                </Button>

                <div className="relative my-2">
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
                    className="border-white/20 bg-[#111F54] text-white hover:bg-[#111F54]/80 transition-all duration-200 hover:border-[#C3FF44]/20"
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
                    className="border-white/20 bg-[#111F54] text-white hover:bg-[#111F54]/80 transition-all duration-200 hover:border-[#C3FF44]/20"
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
          )}
          
          <div className="mt-6 text-center">
            <p className="text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-[#C3FF44] hover:text-[#C3FF44]/80 font-medium transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-4 text-center text-white/60 text-xs">
          <p>By creating an account, you agree to our</p>
          <p className="mt-1">
            <Link to="/terms" className="text-[#C3FF44]/80 hover:text-[#C3FF44] underline mr-1">Terms of Service</Link>
            and
            <Link to="/privacy-policy" className="text-[#C3FF44]/80 hover:text-[#C3FF44] underline ml-1">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
