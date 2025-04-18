
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { BarChart3, Lightbulb, FileText } from 'lucide-react';

const suggestions = [
  {
    title: "Analyze my bill",
    description: "Upload and understand your energy bill",
    icon: FileText
  },
  {
    title: "Energy saving tips",
    description: "Get personalized recommendations",
    icon: Lightbulb
  },
  {
    title: "Usage patterns",
    description: "Visualize your energy consumption trends",
    icon: BarChart3
  }
];

const SuggestedActions = ({ onSelect }: { onSelect: (text: string) => void }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 p-4 rounded-lg bg-slate-900">
      {suggestions.map((suggestion) => {
        const Icon = suggestion.icon;
        return (
          <Button
            key={suggestion.title}
            onClick={() => onSelect(suggestion.title)}
            variant="outline"
            className="flex flex-col items-start h-auto p-4 border border-emerald-400/20 bg-white/5 hover:bg-emerald-400/10 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2 w-full">
              <Icon size={20} className="text-emerald-400" />
              <span className="font-medium text-emerald-400">{suggestion.title}</span>
            </div>
            <span className="text-sm text-white/70">{suggestion.description}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default SuggestedActions;
