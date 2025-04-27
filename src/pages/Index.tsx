
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import ArtStyles from '@/components/ArtStyles';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero onOpenChatbot={() => setIsChatbotOpen(true)} />
        <ArtStyles />
        <Features />
      </main>
      
      <Footer />
      
      {/* Floating chatbot button */}
      <ChatbotButton onClick={() => setIsChatbotOpen(true)} />
      
      {/* Chatbot dialog */}
      <Chatbot 
        open={isChatbotOpen} 
        onOpenChange={setIsChatbotOpen} 
      />
    </div>
  );
};

export default Index;
