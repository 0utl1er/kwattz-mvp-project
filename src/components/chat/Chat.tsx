
import React, { useState, useRef, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { ChatContainer } from "@/components/ui/chat-container";
import { ChatInput } from "@/components/ui/chat-input";
import { ChatMessage } from "@/components/ui/chat-message";
import SuggestedActions from './SuggestedActions';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Initial questions the bot will ask
const initialQuestions = [
  "Do you want to reduce home or business energy costs?",
  "What type of energy bill do you have (electric, gas, both)?",
  "What is your average monthly energy bill?",
  "Are you interested in saving energy with specific appliances/EV/Solar?"
];

interface Message {
  text: string;
  isBot: boolean;
}

const Chat = () => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionFlowComplete, setQuestionFlowComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Effect to scroll to bottom on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial bot message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { 
          text: "Hi there! I'm kWattz, your AI energy advisor. I can help you save money on your energy bills. Let me ask you a few questions to get started.", 
          isBot: true 
        },
        {
          text: initialQuestions[0],
          isBot: true
        }
      ]);
    }
  }, []);

  const processUserMessage = async (message: string) => {
    // Add user message to chat
    setMessages(prevMessages => [...prevMessages, { text: message, isBot: false }]);
    setInputText('');
    setLoading(true);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check if we're in the question flow
    if (currentQuestionIndex < initialQuestions.length - 1) {
      // Move to next question
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setMessages(prev => [...prev, { text: initialQuestions[nextIndex], isBot: true }]);
    } else if (!questionFlowComplete) {
      // End of questionnaire
      setQuestionFlowComplete(true);
      setMessages(prev => [
        ...prev, 
        { 
          text: "Thank you for sharing that information! To provide you with tailored guidance and a complete energy saving analysis, I'll need to review your energy bill. Would you like to sign up to upload your bill?", 
          isBot: true 
        }
      ]);
    } else {
      // This would connect to the OpenAI GPT API in production
      // Currently using a placeholder response
      const botResponse = await mockOpenAIResponse(message);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }
    
    setLoading(false);
  };

  // Mock function that would be replaced with actual OpenAI API call
  const mockOpenAIResponse = async (message: string) => {
    // This function would be replaced with an actual API call to OpenAI
    // Example of how the API integration would work:
    /*
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return data.message;
    */
    
    // For now, return a placeholder message
    return "To proceed with a detailed analysis of your energy usage and get personalized recommendations, please sign up or log in. I'll be able to analyze your bills and provide specific guidance for your situation.";
  };

  const handleSuggestedAction = (text: string) => {
    processUserMessage(text);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      processUserMessage(inputText.trim());
    }
  };

  return (
    <ChatContainer>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={!message.isBot}
          />
        ))}
        
        {loading && (
          <div className="flex justify-center items-center p-4">
            <Loader2 className="h-6 w-6 animate-spin text-[#C3FF44]" />
          </div>
        )}
        
        {questionFlowComplete && messages[messages.length - 1]?.isBot && (
          <div className="flex justify-center mt-6">
            <Button className="bg-[#C3FF44] text-[#0f1c4b] hover:bg-[#A4D633]" asChild>
              <Link to="/signup">Sign Up / Log In</Link>
            </Button>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-[#C3FF44]/10 bg-[#001050]">
        <ChatInput
          value={inputText}
          onChange={setInputText}
          onSend={handleSendMessage}
          disabled={loading}
        />
      </div>
    </ChatContainer>
  );
};

export default Chat;
