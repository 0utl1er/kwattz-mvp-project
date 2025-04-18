
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  BarChart2, 
  Calendar, 
  Contact, 
  HelpCircle,
  Home,
  Lightbulb, 
  LogOut,
  MessageCircle,
  Settings, 
  Upload,
  User
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { logout } from '@/utils/auth';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { isAuthenticated, getAuthStorage } from '@/utils/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    console.log("Dashboard mounting, checking authentication...");
    
    // First check local storage for quicker response
    const storedAuthData = getAuthStorage();
    const storedIsAuth = isAuthenticated();
    console.log("Initial auth check from storage:", storedIsAuth, storedAuthData);
    
    // Listen to Firebase auth state changes for more secure verification
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser?.email);
      setAuthChecked(true);
      
      if (currentUser) {
        console.log("User is authenticated:", currentUser.email);
        setUser(currentUser);
      } else {
        console.log("No authenticated user found in Firebase");
        // Check if we have stored auth data even though Firebase doesn't recognize it
        if (storedIsAuth) {
          console.log("Found stored auth data, treating as authenticated");
          // We still have stored auth data, so we can show the dashboard
          // This helps with page refreshes and temporary Firebase connection issues
        } else {
          console.log("No stored auth data, redirecting to login");
          toast({
            title: "Access Denied",
            description: "Please log in to access the dashboard",
            variant: "destructive",
          });
          navigate('/login');
        }
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate, auth]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: "Could not log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Always show dashboard during initial loading to prevent flashing
  if (loading) {
    return (
      <div className="min-h-screen bg-[#001050] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C3FF44]"></div>
      </div>
    );
  }

  // For quick development access, bypass auth check when needed
  // const bypassAuth = true; 
  // if (!user && !bypassAuth) {
  if (!user && !isAuthenticated()) {
    return (
      <div className="min-h-screen bg-[#001050] flex items-center justify-center flex-col">
        <p className="text-white text-lg mb-4">You must be logged in to view this page</p>
        <Button onClick={() => navigate('/login')} className="bg-[#C3FF44] text-[#001050] hover:bg-[#C3FF44]/90">
          Go to Login
        </Button>
      </div>
    );
  }

  // Get user data either from Firebase or localStorage
  const userData = user || { email: getAuthStorage().email || 'User' };

  return (
    <div className="min-h-screen bg-[#001050] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0f1c4b]/50 backdrop-blur-lg border-r border-white/10">
        {/* Logo Section */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#C3FF44] to-[#001050] rounded-lg flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#C3FF44]">kWattz</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-8">
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Main</p>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-white hover:text-[#C3FF44] hover:bg-white/5">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-[#C3FF44] hover:bg-white/5">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-[#C3FF44] hover:bg-white/5">
                <BarChart2 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Support</p>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-white hover:text-[#C3FF44] hover:bg-white/5">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help Center
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-[#C3FF44] hover:bg-white/5">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-[#C3FF44] hover:bg-white/5">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </nav>

        {/* User Section */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C3FF44] to-[#001050] flex items-center justify-center text-white">
                {userData?.email?.[0]?.toUpperCase() || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {userData?.email || 'User'}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleLogout} className="text-white hover:text-[#C3FF44]">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-[#0f1c4b]/50 backdrop-blur-lg border-b border-white/10 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#C3FF44]">Dashboard</h1>
            <Button className="bg-[#C3FF44] text-[#001050] hover:bg-[#C3FF44]/90">
              <Upload className="mr-2 h-4 w-4" /> Upload Bill
            </Button>
          </div>
        </header>

        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-[#C3FF44] flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                Energy Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Track your daily and monthly energy consumption</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-[#C3FF44] flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Bill History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">View and analyze your past energy bills</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-[#C3FF44] flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Smart Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Get personalized energy-saving recommendations</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
