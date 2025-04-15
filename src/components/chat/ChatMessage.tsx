
import React from 'react';
import { MessageSquare, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage = ({ message, isBot }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-secondary/20' : ''} p-4 rounded-lg`}>
      {isBot ? (
        <Bot className="h-6 w-6 text-[#C3FF44]" />
      ) : (
        <MessageSquare className="h-6 w-6 text-blue-400" />
      )}
      <p className="text-white/90 text-sm md:text-base">{message}</p>
    </div>
  );
};

export default ChatMessage;
