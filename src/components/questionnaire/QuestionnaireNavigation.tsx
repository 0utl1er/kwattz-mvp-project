
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Zap, Home, Battery, CalendarClock, MessageSquare } from "lucide-react";

interface QuestionnaireNavigationProps {
  activeTab: string;
}

const QuestionnaireNavigation = ({ activeTab }: QuestionnaireNavigationProps) => {
  return (
    <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 mb-8">
      <TabsTrigger value="personal" className="flex flex-col items-center">
        <User className="h-5 w-5 mb-1" />
        <span className="text-xs">Personal</span>
      </TabsTrigger>
      <TabsTrigger value="frustrations" className="flex flex-col items-center">
        <Zap className="h-5 w-5 mb-1" />
        <span className="text-xs">Bills</span>
      </TabsTrigger>
      <TabsTrigger value="home" className="flex flex-col items-center">
        <Home className="h-5 w-5 mb-1" />
        <span className="text-xs">Home</span>
      </TabsTrigger>
      <TabsTrigger value="appliances" className="flex flex-col items-center">
        <Battery className="h-5 w-5 mb-1" />
        <span className="text-xs">Appliances</span>
      </TabsTrigger>
      <TabsTrigger value="habits" className="flex flex-col items-center">
        <CalendarClock className="h-5 w-5 mb-1" />
        <span className="text-xs">Habits</span>
      </TabsTrigger>
      <TabsTrigger value="feedback" className="flex flex-col items-center">
        <MessageSquare className="h-5 w-5 mb-1" />
        <span className="text-xs">Feedback</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default QuestionnaireNavigation;
