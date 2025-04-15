import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart2, Calendar, Lightbulb, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#091544] flex flex-col p-4">
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
            <p className="text-gray-300">Your data is being processed. Check back soon for personalized insights.</p>
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
        
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Questionnaire Complete</h2>
            <Link to="/questionnaire">
              <Button variant="outline" className="border-[#C3FF44] text-[#C3FF44] hover:bg-[#C3FF44] hover:text-[#111F54]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Update Responses
              </Button>
            </Link>
          </div>
          <p className="text-gray-300">Thank you for completing the energy questionnaire. Your personalized dashboard will be updated with insights based on your responses.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
