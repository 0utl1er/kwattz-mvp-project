
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#111F54] flex flex-col items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-[#C3FF44] mb-4">Welcome to Your Energy Dashboard</h1>
        <p className="text-white text-lg mb-8">
          Thanks for completing the questionnaire! Your personalized energy dashboard is coming soon.
        </p>
        <Button 
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          View Energy Insights
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
