
import React, { useState } from 'react';
import { Send, Loader2, Mic } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import ChatMessage from './ChatMessage';
import SuggestedActions from './SuggestedActions';
import { useIsMobile } from '@/hooks/use-mobile';

interface Message {
  text: string;
  isBot: boolean;
}

const Chat = () => {
  const [messages] = useState<Message[]>([
    { text: "Hello! I'm kWattz, your AI energy advisor. How can I help you optimize your energy consumption today?", isBot: true }
  ]);
  
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col h-[80vh] md:h-[600px] w-full max-w-4xl mx-auto bg-[#001050]/90 backdrop-blur-xl rounded-xl border border-[#C3FF44]/20 shadow-2xl relative overflow-hidden">
      <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-2 md:space-y-4 scrollbar-none">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        {messages.length === 1 && (
          <div className="w-full">
            <SuggestedActions onSelect={() => {}} />
          </div>
        )}
      </div>
      <div className="p-2 md:p-4 border-t border-[#C3FF44]/20 bg-[#001050]/95">
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Chat functionality temporarily disabled..."
            disabled={true}
            className="flex-1 bg-white/5 border-[#C3FF44]/20 text-white/50"
          />
          <Button 
            type="button" 
            size="icon"
            disabled={true}
            className="bg-[#C3FF44]/50 text-[#001050] h-10 md:h-11 w-10 md:w-11"
          >
            <Send className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            disabled={true}
            className="border-[#C3FF44]/20 text-white/50 h-10 md:h-11 w-10 md:w-11"
          >
            <Mic className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
