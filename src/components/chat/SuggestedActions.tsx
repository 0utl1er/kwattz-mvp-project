
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const suggestions = [
  {
    title: "Why my bill is so high?",
  },
  {
    title: "How I can save money next month?",
  },
  {
    title: "What's using the most energy in my home?",
  }
];

const SuggestedActions = ({ onSelect }: { onSelect: (text: string) => void }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 p-4 rounded-lg bg-[#0f1c4b]">
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion.title}
          onClick={() => onSelect(suggestion.title)}
          variant="outline"
          className="flex flex-col items-start h-auto p-4 border border-[#C3FF44]/20 bg-white/5 hover:bg-[#C3FF44]/10 transition-colors"
        >
          <span className="font-medium text-[#C3FF44]">{suggestion.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default SuggestedActions;
