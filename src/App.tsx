import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnderDevelopmentBanner from "./components/layout/UnderDevelopmentBanner";
import Solutions from "./pages/Solutions";
import NewLanding from "./pages/NewLanding";
import SignUp from "./pages/SignUp";
import KWattzSignup from "./pages/KWattzSignup";
import Login from "./pages/Login";
import EnergyQuestionnaire from "./pages/EnergyQuestionnaire";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import WhyKWattz from "./pages/WhyKWattz";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Investors from "./pages/Investors";
import ChatBot from "./pages/ChatBot";
import { Suspense } from 'react';
import { Settings, Chat } from './utils/lazy';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <UnderDevelopmentBanner />
        <Toaster />
        <Sonner />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
