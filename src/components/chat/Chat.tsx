
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import ChatMessage from './ChatMessage';

interface Message {
  text: string;
  isBot: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your AI energy advisor. How can I help you optimize your energy consumption today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.message, isBot: true }]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get response from the chatbot. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-3xl mx-auto bg-[#111F54]/50 rounded-xl shadow-xl border border-[#C3FF44]/20">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-[#C3FF44]/20">
        <div className="flex gap-2 items-center">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 bg-white/5 border-[#C3FF44]/20 text-white placeholder:text-white/50"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
