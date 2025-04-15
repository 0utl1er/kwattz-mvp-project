import React from 'react';
import Chat from '../components/chat/Chat';
import TopMenu from '../components/layout/TopMenu';

const ChatBot = () => {
  return (
    <div className="min-h-screen bg-[#091544] pt-24">
      <TopMenu />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#C3FF44]">
          Chat with kWattz AI
        </h1>
        <Chat />
      </div>
    </div>
  );
};

export default ChatBot;
