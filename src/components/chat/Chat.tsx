
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from './ChatMessage';
import SuggestedActions from './SuggestedActions';
import { useIsMobile } from '@/hooks/use-mobile';

const Chat = () => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState([]); 
  const [inputText, setInputText] = useState('');
  const chatInputRef = useRef(null);

  useEffect(() => {
    if (chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, []);

  const handleUserInput = (event) => {
    setInputText(event.target.value);
  };

  const handleSuggestedAction = (text) => {
    setMessages(prevMessages => [...prevMessages, { text, isBot: false }]);
    
    // Simulate bot response (replace with actual AI call)
    setTimeout(() => {
      const botResponse = `I'll help you with: ${text}. (AI response would go here)`;
      setMessages(prevMessages => [...prevMessages, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const sendMessage = () => {
    const message = inputText.trim();
    if (message) {
      setMessages(prevMessages => [...prevMessages, { text: message, isBot: false }]);
      setInputText('');

      // Simulate bot response (replace with actual AI call)
      setTimeout(() => {
        const botResponse = `You said: ${message}. (AI response would go here)`;
        setMessages(prevMessages => [...prevMessages, { text: botResponse, isBot: true }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] md:h-[600px] w-full max-w-4xl mx-auto bg-[#0f1c4b] backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.length === 0 && (
          <div className="mt-4">
            <SuggestedActions onSelect={handleSuggestedAction} />
          </div>
        )}
        
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
            value={inputText}
            onChange={handleUserInput}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            ref={chatInputRef}
            placeholder="Type your message..."
            className="flex-1 bg-white/5 border-[#C3FF44]/10 text-[#d9d9d9]"
          />
          <Button
            type="button"
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
