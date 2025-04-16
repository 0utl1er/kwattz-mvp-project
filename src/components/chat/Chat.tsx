
import React, { useState, useEffect } from 'react';
import { Send, Loader2, Mic } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import ChatMessage from './ChatMessage';
import { useIsMobile } from '@/hooks/use-mobile';

interface Message {
  text: string;
  isBot: boolean;
}

const questions = [
  "Do you want to reduce home or business energy costs?",
  "What type of energy bill do you have (electric, gas, both)?",
  "What is your average monthly energy bill?",
  "Are you interested in saving energy with specific appliances/EV/Solar?"
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm kWattz, your AI energy advisor. How can I help you optimize your energy consumption today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isBot: false }]);
    setIsProcessing(true);

    // Simulate bot response
    setTimeout(() => {
      if (currentQuestion < questions.length) {
        setMessages(prev => [...prev, { text: questions[currentQuestion], isBot: true }]);
        setCurrentQuestion(prev => prev + 1);
      } else {
        setMessages(prev => [...prev, { 
          text: "Based on our conversation, I can help you save on your energy bills. To get a detailed analysis and personalized recommendations, please sign up for a free account.", 
          isBot: true 
        }]);
      }
      setIsProcessing(false);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[80vh] md:h-[600px] w-full max-w-4xl mx-auto bg-[#001050]/90 backdrop-blur-xl rounded-xl border border-[#C3FF44]/20 shadow-2xl relative overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        {isProcessing && (
          <div className="flex items-center gap-2 text-white/50 p-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>kWattz is thinking...</span>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-[#C3FF44]/20 bg-[#001050]/95">
        <div className="flex gap-2 items-center">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-white/5 border-[#C3FF44]/20 text-white"
          />
          <Button 
            onClick={handleSendMessage}
            type="button" 
            size="icon"
            className="bg-[#C3FF44] text-[#001050] hover:bg-[#C3FF44]/90 h-10 w-10"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
