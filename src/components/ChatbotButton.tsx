
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface ChatbotButtonProps {
  onClick: () => void;
}

const ChatbotButton = ({ onClick }: ChatbotButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 artful-gradient-bg shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Open AI Art Prompt Generator"
    >
      <MessageSquare className="h-6 w-6 text-white" />
    </Button>
  );
};

export default ChatbotButton;
