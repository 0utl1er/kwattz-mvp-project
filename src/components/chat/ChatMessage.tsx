
import React from 'react';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage = ({ message, isBot }: ChatMessageProps) => {
  return (
    <div className={`flex gap-2 md:gap-4 ${isBot ? 'bg-[#091544]/50' : ''} p-3 md:p-6 rounded-lg transition-colors duration-200`}>
      <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
        isBot ? 'bg-[#C3FF44]/10' : 'bg-white/10'
      }`}>
        {isBot ? (
          <img src="/favicon.ico.png" alt="kWattz Bot" className="h-4 w-4 md:h-5 md:w-5" />
        ) : (
          <User className="h-4 w-4 md:h-5 md:w-5 text-white/70" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
