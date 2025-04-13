
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [brightness, setBrightness] = useState(10);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Gradually increase brightness for visual effect
    const interval = setInterval(() => {
      setBrightness((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1); // This uses React Router's history to go back
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white"
      style={{ 
        filter: `brightness(${brightness}%)`,
        transition: "filter 0.5s ease"
      }}
    >
      <div className="mb-8">
        <img src="/brain2.png" alt="KWattz Brain" className="w-64 h-auto mb-6 mx-auto" />
      </div>
      
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-yellow-400">404</h1>
        <p className="text-2xl mb-6">Energy not found at this location</p>
        <p className="text-lg mb-10">The page you're looking for doesn't exist or has moved to a new circuit.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} /> Return Home
            </Link>
          </Button>
          <Button variant="outline" 
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 flex items-center gap-2"
            onClick={handleGoBack}
          >
            <ArrowLeft size={18} /> Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
