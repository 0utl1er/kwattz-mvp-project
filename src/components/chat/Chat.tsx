
import React, { useState, useRef, useEffect } from 'react';
import { Loader2, Send, Shield, ShieldAlert } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from './ChatMessage';
import SuggestedActions from './SuggestedActions';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from "@/hooks/use-toast";
import DOMPurify from 'dompurify';

const Chat = () => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState([]); 
  const [inputText, setInputText] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const chatInputRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    if (chatInputRef.current) {
      chatInputRef.current.focus();
    }
    
    // Check authorization status (replace with your actual auth check)
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    // Replace this with your actual authorization check
    const isUserAuthorized = false; // Set to true when user is authenticated
    setIsAuthorized(isUserAuthorized);
  };

  const sanitizeInput = (input: string) => {
    return DOMPurify.sanitize(input.trim(), {
      ALLOWED_TAGS: [], // No HTML tags allowed
      ALLOWED_ATTR: [] // No attributes allowed
    });
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedInput = sanitizeInput(event.target.value);
    setInputText(sanitizedInput);
  };

  const handleSuggestedAction = (text: string) => {
    if (!isAuthorized) {
      toast({
        title: "Access Denied",
        description: "Please log in to use the chat.",
        variant: "destructive"
      });
      return;
    }

    const sanitizedText = sanitizeInput(text);
    setMessages(prevMessages => [...prevMessages, { text: sanitizedText, isBot: false }]);
    
    // Simulate bot response (replace with actual AI call)
    setTimeout(() => {
      const botResponse = `I'll help you with: ${sanitizedText}. (AI response would go here)`;
      setMessages(prevMessages => [...prevMessages, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const sendMessage = () => {
    if (!isAuthorized) {
      toast({
        title: "Access Denied",
        description: "Please log in to use the chat.",
        variant: "destructive"
      });
      return;
    }

    const sanitizedMessage = sanitizeInput(inputText);
    if (sanitizedMessage) {
      setMessages(prevMessages => [...prevMessages, { text: sanitizedMessage, isBot: false }]);
      setInputText('');

      // Simulate bot response (replace with actual AI call)
      setTimeout(() => {
        const botResponse = `You said: ${sanitizedMessage}. (AI response would go here)`;
        setMessages(prevMessages => [...prevMessages, { text: botResponse, isBot: true }]);
      }, 1000);
    }
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
        {messages.length === 0 && (
          <div className="mt-4">
            <SuggestedActions onSelect={handleSuggestedAction} />
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-[#C3FF44]/10 bg-[#001050]">
        <div className="flex gap-2 items-center relative">
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={handleUserInput}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              ref={chatInputRef}
              placeholder={isAuthorized ? "Type your message..." : "Please log in to chat..."}
              className="flex-1 bg-white/5 border-[#C3FF44]/10 text-[#d9d9d9] relative z-10"
              disabled={!isAuthorized}
            />
          </div>
          
          <Button
            type="button"
            onClick={sendMessage}
            size="icon"
            className="bg-[#C3FF44]/50 text-[#001050] h-10 w-10 relative group"
            disabled={!isAuthorized}
          >
            {isAuthorized ? (
              <Send className="h-5 w-5" />
            ) : (
              <ShieldAlert className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
