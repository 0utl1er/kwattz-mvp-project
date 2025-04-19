
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface QuestionnaireNavigationProps {
  activeTab: string;
}

const QuestionnaireNavigation = ({ activeTab }: QuestionnaireNavigationProps) => {
  return (
    <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6 bg-white/10">
      <TabsTrigger value="personal" disabled={activeTab !== "personal"} className="text-white">
        Personal
      </TabsTrigger>
      <TabsTrigger value="frustrations" disabled={activeTab !== "frustrations"} className="text-white">
        Frustrations
      </TabsTrigger>
      <TabsTrigger value="home" disabled={activeTab !== "home"} className="text-white">
        Home
      </TabsTrigger>
      <TabsTrigger value="appliances" disabled={activeTab !== "appliances"} className="text-white">
        Appliances
      </TabsTrigger>
      <TabsTrigger value="habits" disabled={activeTab !== "habits"} className="text-white">
        Habits
      </TabsTrigger>
      <TabsTrigger value="feedback" disabled={activeTab !== "feedback"} className="text-white">
        Feedback
      </TabsTrigger>
    </TabsList>
  );
};

export default QuestionnaireNavigation;
