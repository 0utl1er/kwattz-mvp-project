
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

  return (
    <div className="grid gap-2 md:gap-3 grid-cols-1 sm:grid-cols-3 p-2 md:p-4">
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion.title}
          onClick={() => onSelect(suggestion.title)}
          variant="outline"
          className="flex flex-col items-start h-auto p-3 md:p-4 border border-[#C3FF44]/20 bg-white/5 hover:bg-[#C3FF44]/5 transition-colors"
        >
          <span className="font-medium text-[#C3FF44]">{suggestion.title}</span>
          <span className="text-xs md:text-sm text-white/70">{suggestion.description}</span>
        </Button>
      ))}
    </div>
  );
};

export default SuggestedActions;
