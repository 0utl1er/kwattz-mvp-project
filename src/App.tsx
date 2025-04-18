
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
            <Route path="/" element={<NewLanding />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/kwattz-signup" element={<KWattzSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/questionnaire" element={<EnergyQuestionnaire />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/why-kwattz" element={<WhyKWattz />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/new" element={<NewLanding />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
