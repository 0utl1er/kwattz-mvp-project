
import React from 'react';
import { 
  ArrowUp, 
  BarChart3, 
  HelpCircle, 
  Home, 
  LightbulbIcon, 
  LogOut, 
  MessageCircle, 
  PieChart, 
  Send, 
  Settings, 
  Upload, 
  User 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  const insights = [
    {
      title: 'Peak Usage Detection',
      icon: <ArrowUp className="h-5 w-5" />,
      description: 'Your peak energy usage is between 6-8PM. Shifting some activities could save up to $24/month.',
      color: 'text-green-600'
    },
    {
      title: 'Appliance Efficiency',
      icon: <LightbulbIcon className="h-5 w-5" />,
      description: 'Your refrigerator is consuming 15% more energy than average. Consider maintenance or upgrading.',
      color: 'text-blue-600'
    },
    {
      title: 'Solar Potential',
      icon: <PieChart className="h-5 w-5" />,
      description: 'Based on your location and usage, solar panels could offset 65% of your electricity costs.',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <LightbulbIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">EnergyMind</span>
          </div>
        </div>

        {/* Nav Options */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</div>
          <div className="mt-2 space-y-1">
            <SidebarItem icon={<Home />} text="Dashboard" active />
            <SidebarItem icon={<User />} text="Profile" />
            <SidebarItem icon={<BarChart3 />} text="Bill Tracking" />
          </div>

          <div className="mt-6 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Analysis</div>
          <div className="mt-2 space-y-1">
            <SidebarItem icon={<PieChart />} text="Usage Analytics" />
            <SidebarItem icon={<LightbulbIcon />} text="AI Recommendations" />
            <SidebarItem icon={<BarChart3 />} text="Energy Forecast" />
          </div>

          <div className="mt-6 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Support</div>
          <div className="mt-2 space-y-1">
            <SidebarItem icon={<HelpCircle />} text="Help Center" />
            <SidebarItem icon={<MessageCircle />} text="Contact Support" />
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <div className="font-medium text-gray-800">John Doe</div>
              <div className="text-xs text-gray-500">Premium Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Energy Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Export Data</Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Upload New Bill
            </Button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome & Upload Section */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">Welcome back, John!</h2>
                <p className="mt-1 text-gray-600">
                  Your last bill showed a 12% reduction in energy usage compared to the previous month. Great job!
                </p>
                <div className="mt-4 flex space-x-3">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Bill
                  </Button>
                  <Button variant="outline">View Recommendations</Button>
                </div>
              </div>
              <div className="w-full md:w-64 h-32 border-2 border-dashed border-green-500 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-green-50/50 transition-colors">
                <Upload className="h-8 w-8 text-green-500" />
                <p className="mt-2 text-sm font-medium text-gray-600">Drag & drop your energy bill</p>
                <p className="text-xs text-gray-500">or click to browse</p>
              </div>
            </div>
          </Card>

          {/* Usage Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-700">Monthly Energy Consumption</h3>
                <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  -8.3% vs Last Year
                </div>
              </div>
              <div className="h-64 flex items-center justify-center text-gray-500">
                Chart will be implemented here
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-700">Cost Breakdown</h3>
                <select className="text-xs border border-gray-300 rounded px-2 py-1">
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="h-64 flex items-center justify-center text-gray-500">
                Chart will be implemented here
              </div>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="p-6">
            <h3 className="font-medium text-gray-700 mb-4">AI Energy Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {insights.map((insight, index) => (
                <Card key={index} className="p-4 hover:-translate-y-1 transition-transform duration-300 bg-gradient-to-br from-green-50 to-blue-50 border-green-100">
                  <div className={`flex items-center space-x-2 ${insight.color} mb-2`}>
                    {insight.icon}
                    <h4 className="font-medium">{insight.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                  <button className={`mt-3 text-xs font-medium ${insight.color} hover:opacity-80`}>
                    View Details →
                  </button>
                </Card>
              ))}
            </div>
          </Card>

          {/* AI Assistant Chat */}
          <Card>
            <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-medium text-gray-700">Energy AI Assistant</h3>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-4 h-80 overflow-y-auto bg-gray-50">
              <ChatMessage 
                isAi
                message="Hi John! I've analyzed your March energy bill and noticed your heating costs were 20% higher than expected for the season. This might be due to the unusually cold weather we had, but I also detected some potential inefficiencies with your heating system."
                recommendation="Consider scheduling a heating system maintenance check. Based on your usage patterns, this could save you approximately $18-32 per month during winter."
              />

              <ChatMessage
                message="That's helpful, thanks! When would be the best time to run my dishwasher to save on energy costs?"
              />

              <ChatMessage
                isAi
                message="Based on your utility's time-of-use rates, the most cost-effective time to run your dishwasher would be after 9 PM or before 7 AM, when electricity rates are at their lowest (approximately 30% cheaper than peak hours)."
              />
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center">
                <Input 
                  placeholder="Ask about your energy usage..."
                  className="rounded-r-none focus-visible:ring-green-500"
                />
                <Button className="rounded-l-none bg-green-600 hover:bg-green-700">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex space-x-3 text-xs">
                  <button className="text-gray-500 hover:text-gray-700">Upload an image</button>
                  <button className="text-gray-500 hover:text-gray-700">Energy tips</button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text, active = false }) => (
  <div className={`px-3 py-2 flex items-center space-x-3 text-gray-700 cursor-pointer hover:bg-green-50/50 rounded-md transition-colors ${
    active ? 'bg-green-50/50 border-l-4 border-green-500' : ''
  }`}>
    {icon}
    <span>{text}</span>
  </div>
);

// Chat Message Component
const ChatMessage = ({ message, isAi = false, recommendation = null }) => (
  <div className={`flex mb-4 ${!isAi && 'justify-end'}`}>
    {isAi && (
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
        <LightbulbIcon className="h-4 w-4" />
      </div>
    )}
    <div className={`chat-message ${
      isAi 
        ? 'bg-white border border-gray-200' 
        : 'bg-blue-50 border border-blue-100'
    } p-3 rounded-lg shadow-sm max-w-[80%]`}>
      <p className="text-gray-700">{message}</p>
      {recommendation && (
        <div className="mt-2 p-2 bg-green-50 rounded border border-green-100 text-sm">
          <div className="font-medium text-green-700">Recommendation:</div>
          <p className="text-gray-600">{recommendation}</p>
        </div>
      )}
    </div>
  </div>
);

export default Dashboard;
