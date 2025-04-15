
import React, { useState } from 'react';
import { Send, Loader2, Mic } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import ChatMessage from './ChatMessage';
import SuggestedActions from './SuggestedActions';

interface Message {
  text: string;
  isBot: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm kWattz, your AI energy advisor. How can I help you optimize your energy consumption today?", isBot: true }
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

  const handleSuggestionSelect = (text: string) => {
    setInput(text);
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-4xl mx-auto bg-[#111F54]/90 backdrop-blur-xl rounded-xl border border-[#C3FF44]/20 shadow-2xl relative overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        {messages.length === 1 && (
          <SuggestedActions onSelect={handleSuggestionSelect} />
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-[#C3FF44]/20 bg-[#111F54]/95">
        <div className="flex gap-2 items-center">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message kWattz..."
            disabled={isLoading}
            className="flex-1 bg-white/5 border-[#C3FF44]/20 text-white placeholder:text-white/50"
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={isLoading}
            className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90 h-11 w-11"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="border-[#C3FF44]/20 text-white/70 hover:bg-[#C3FF44]/5 h-11 w-11"
          >
            <Mic className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Chat;

