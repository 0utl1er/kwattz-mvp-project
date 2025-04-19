
import { Mail } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="mb-8">
        <img src="/brain2.png" alt="KWattz Brain" className="w-64 h-auto mb-6 mx-auto" />
      </div>
      
      <div className="text-center max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
          Product Under Development
        </h1>
        <p className="text-lg mb-8">
          We are currently working on something amazing. Please check back later.
        </p>
        
        <div className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300">
          <Mail size={20} />
          <a href="mailto:info@kwattz.com" className="text-lg">
            info@kwattz.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
