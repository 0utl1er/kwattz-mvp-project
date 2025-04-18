
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import ChatMessage from './ChatMessage';
import FileUpload from '@/components/FileUpload';

const initialMessages = [
  { text: "Hello! I'm your AI Energy Assistant. Would you like to upload your energy bill for analysis?", isBot: true }
];

const Chat = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const chatInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, []);

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleFileSelected = async (file: File) => {
    setIsAnalyzing(true);
    setMessages(prev => [...prev, { 
      text: `Processing your bill: ${file.name}`, 
      isBot: false 
    }]);

    try {
      // Simulate API call for bill analysis
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setMessages(prev => [...prev, { 
        text: "I've analyzed your bill and found some interesting insights! Your monthly consumption is 20% higher than similar households in your area. Would you like specific recommendations to reduce your energy usage?", 
        isBot: true 
      }]);

      toast({
        title: "Bill Analysis Complete",
        description: "Your energy bill has been successfully analyzed.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to analyze the bill. Please try again.",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, { text: inputText, isBot: false }]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Would you like to know more about specific aspects of your energy consumption?",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[80vh] md:h-[600px] w-full max-w-4xl mx-auto bg-[#0f1c4b] backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        {isAnalyzing && (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-6 w-6 animate-spin text-[#C3FF44]" />
          </div>
        )}
      </div>

      {messages.length === 1 && (
        <div className="p-4 border-t border-[#C3FF44]/10">
          <FileUpload
            onFileSelected={handleFileSelected}
            acceptedFileTypes=".pdf,.jpg,.jpeg,.png"
            maxSizeMB={10}
          />
        </div>
      )}

      <div className="p-4 border-t border-[#C3FF44]/10 bg-[#001050]">
        <div className="flex gap-2 items-center">
          <Input
            value={inputText}
            onChange={handleUserInput}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            ref={chatInputRef}
            placeholder="Type your message..."
            className="flex-1 bg-white/5 border-[#C3FF44]/10 text-[#d9d9d9]"
          />
          <Button
            onClick={sendMessage}
            size="icon"
            className="bg-[#C3FF44]/50 text-[#001050] h-10 w-10"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
