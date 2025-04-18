
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart2, Upload, Settings } from "lucide-react";
import Chat from "@/components/chat/Chat";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#111F54] flex flex-col p-4">
      <div className="max-w-7xl w-full mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#C3FF44]">Energy Dashboard</h1>
          <Button 
            variant="ghost" 
            className="text-white hover:text-[#C3FF44] hover:bg-white/10"
          >
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Button>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <BarChart2 className="h-10 w-10 text-[#C3FF44] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Energy Consumption</h2>
            <p className="text-gray-300">Upload your bill to get started with personalized insights.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Upload className="h-10 w-10 text-[#C3FF44] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Upload Bill</h2>
            <p className="text-gray-300">Let our AI analyze your energy bill and provide recommendations.</p>
          </div>
        </div>
        
        <div className="mt-8">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
