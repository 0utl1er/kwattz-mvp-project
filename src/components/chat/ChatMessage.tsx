
import React from 'react';
import { MessageSquare, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage = ({ message, isBot }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-[#C3FF44]/5' : ''} p-4 rounded-lg transition-colors duration-200`}>
      {isBot ? (
        <Bot className="h-6 w-6 text-[#C3FF44]" />
      ) : (
        <MessageSquare className="h-6 w-6 text-blue-400" />
      )}
      <p className="text-white/90 text-sm md:text-base leading-relaxed">{message}</p>
    </div>
  );
};

export default ChatMessage;
