
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart2, Calendar, Lightbulb, Settings } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { logout } from '@/utils/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        toast({
          title: "Access Denied",
          description: "Please log in to access the dashboard",
          variant: "destructive",
        });
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate, auth]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: "Could not log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#001050] flex flex-col p-4">
      <div className="max-w-7xl w-full mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#C3FF44]">Energy Dashboard</h1>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:text-[#C3FF44] hover:bg-white/10"
              onClick={handleLogout}
            >
              Logout
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-[#C3FF44] hover:bg-white/10"
            >
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Button>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <BarChart2 className="h-10 w-10 text-[#C3FF44] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Energy Consumption</h2>
            <p className="text-gray-300">Welcome! Your personalized energy insights will appear here soon.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Lightbulb className="h-10 w-10 text-[#C3FF44] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Smart Tips</h2>
            <p className="text-gray-300">Based on your profile, we'll generate AI-powered energy saving tips here.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Calendar className="h-10 w-10 text-[#C3FF44] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Usage Schedule</h2>
            <p className="text-gray-300">Optimize your energy usage by scheduling during off-peak hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
