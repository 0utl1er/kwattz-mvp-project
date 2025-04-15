
import React from 'react';
import { Button } from "@/components/ui/button";

const suggestions = [
  {
    title: "Analyze my bill",
    description: "What is your energy bill is about"
  },
  {
    title: "Energy saving tips",
    description: "Get recommendations"
  },
  {
    title: "Usage patterns",
    description: "Understand your energy consumption"
  }
];

const SuggestedActions = ({ onSelect }: { onSelect: (text: string) => void }) => {
  return (
    <div className="grid gap-3 md:grid-cols-3 p-4">
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion.title}
          onClick={() => onSelect(suggestion.title)}
          variant="outline"
          className="flex flex-col items-start h-auto p-4 border border-[#C3FF44]/20 bg-white/5 hover:bg-[#C3FF44]/5 transition-colors"
        >
          <span className="font-medium text-[#C3FF44]">{suggestion.title}</span>
          <span className="text-sm text-white/70">{suggestion.description}</span>
        </Button>
      ))}
    </div>
  );
};

export default SuggestedActions;
