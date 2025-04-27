
import React from 'react';
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

interface HeroProps {
  onOpenChatbot: () => void;
}

const Hero = ({ onOpenChatbot }: HeroProps) => {
  return (
    <div className="relative">
      {/* Theme Toggle positioned at top right */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-artful-blue/40 via-artful-purple/30 to-artful-pink/40 pointer-events-none" />
      
      <div className="relative content-wrap flex flex-col items-center text-center py-20">
        <div className="animate-float">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 artful-gradient-text">
            AI Art Prompt Generator
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-800 dark:text-gray-200">
          Transform your ideas into inspiring art concepts with our AI-powered prompt generator
        </p>
        
        <Button 
          onClick={onOpenChatbot}
          className="artful-gradient-bg text-white font-bold py-3 px-8 text-lg hover:opacity-90 transition-opacity"
        >
          Generate Art Prompts
        </Button>
      </div>
    </div>
  );
};

export default Hero;
