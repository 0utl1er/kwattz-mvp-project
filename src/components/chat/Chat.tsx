import React from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from './ChatMessage';
import { useIsMobile } from '@/hooks/use-mobile';

const Chat = () => {
  const isMobile = useIsMobile();
  const messages = [
    { text: "Do you want to reduce home or business energy costs?", isBot: true },
    { text: "What is your average monthly energy bill?", isBot: true },
    { text: "Want to understand your energy bill?", isBot: true }
  ];

  return (
    <div className="flex flex-col h-[80vh] md:h-[600px] w-full max-w-4xl mx-auto bg-[#0f1c4b] backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C3FF44]/0 via-[#C3FF44]/10 to-[#C3FF44]/0">
          <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C3FF44]/0 via-[#C3FF44]/10 to-[#C3FF44]/0">
          <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]" />
        </div>
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#C3FF44]/0 via-[#C3FF44]/10 to-[#C3FF44]/0">
          <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]" />
        </div>
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#C3FF44]/0 via-[#C3FF44]/10 to-[#C3FF44]/0">
          <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
      </div>
      <div className="p-4 border-t border-[#C3FF44]/10 bg-[#001050]">
        <div className="flex gap-2 items-center">
          <Input
            value="Chat functionality temporarily disabled"
            disabled
            className="flex-1 bg-white/5 border-[#C3FF44]/10 text-[#d9d9d9]"
          />
          <Button 
            disabled
            type="button" 
            size="icon"
            className="bg-[#C3FF44]/50 text-[#001050] h-10 w-10"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
