
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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

const queryClient = new QueryClient();

const App = () => (
  // Changed order of providers - React needs to be available before TooltipProvider can use hooks
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/kwattz-signup" element={<KWattzSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/questionnaire" element={<EnergyQuestionnaire />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/why-kwattz" element={<WhyKWattz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
