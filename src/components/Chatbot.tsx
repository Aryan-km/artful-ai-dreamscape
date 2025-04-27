
import React, { useState, useRef } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { X } from "lucide-react";
import { toast } from 'sonner';
import parseResponse from '@/lib/parseResponse';

// Mock API key - will be replaced with actual key later
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

// Art style options
const ART_STYLES = [
  "Digital Art", "Watercolor", "Oil Painting", "Pencil Sketch", 
  "Pixel Art", "Concept Art", "Anime", "Comic Book", "Fantasy", 
  "Cyberpunk", "Surrealism", "Impressionism", "Pop Art"
];

// Point of View options
const POV_OPTIONS = [
  "First Person", "Bird's Eye View", "Worm's Eye View", "Isometric", 
  "Top-Down", "Side View", "Three-Quarter View", "Panoramic"
];

// Lighting options
const LIGHTING_OPTIONS = [
  "Natural Light", "Golden Hour", "Dramatic", "Neon", 
  "Ethereal", "Dark and Moody", "Bright and Vibrant"
];

interface ChatbotProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isHtml?: boolean;
}

const Chatbot = ({ open, onOpenChange }: ChatbotProps) => {
  const [prompt, setPrompt] = useState('');
  const [artStyle, setArtStyle] = useState('');
  const [pov, setPov] = useState('');
  const [lighting, setLighting] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast.error("Please enter a prompt to generate ideas");
      return;
    }

    // Add user message
    const userPrompt = `${prompt}${artStyle ? ` in ${artStyle} style` : ''}${pov ? `, from ${pov}` : ''}${lighting ? `, with ${lighting} lighting` : ''}`;
    setMessages(prev => [...prev, { role: 'user', content: userPrompt }]);
    
    // Reset form
    setPrompt('');
    
    // Start loading state
    setIsLoading(true);
    
    try {
      // Construct the prompt for Gemini
      const fullPrompt = `
      You are an expert art prompt generator that helps artists find inspiration.
      
      Generate a detailed, creative art prompt based on the following input:
      
      Subject/Theme: ${prompt}
      ${artStyle ? `Art Style: ${artStyle}` : ''}
      ${pov ? `Point of View: ${pov}` : ''}
      ${lighting ? `Lighting: ${lighting}` : ''}
      
      Create a detailed, evocative description that would inspire artists. Use bold text for important elements. Your response should be professional and artistic.
      `;
      
      // In a real implementation, this would call the Gemini API
      // For now, we'll simulate a response
      setTimeout(() => {
        const simulatedResponse = `
        <p>Here's your creative art prompt:</p>
        
        <p><strong>Ethereal Gateway</strong></p>
        
        <p>A mystical portal shimmers between worlds, its edges rippling with ${artStyle || 'digital'} textures. ${prompt} stands at the threshold, ${pov || 'viewed from a dramatic angle'} that emphasizes the scale of the gateway. ${lighting || 'Ethereal light'} pours through from the other side, casting long shadows and illuminating particles of magic dust suspended in the air.</p>
        
        <p>The composition should create a sense of wonder and anticipation, with rich details in the environment suggesting stories about what lies beyond.</p>
        `;
        
        // Parse the HTML-like response into formatted content
        const parsedContent = parseResponse(simulatedResponse);
        
        setMessages(prev => [
          ...prev, 
          { 
            role: 'assistant', 
            content: parsedContent,
            isHtml: true 
          }
        ]);
        setIsLoading(false);
        
        // Scroll to the bottom of the messages
        setTimeout(scrollToBottom, 100);
      }, 1500);
    } catch (error) {
      console.error("Error generating prompt:", error);
      toast.error("Failed to generate art prompt. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold artful-gradient-text">
            AI Art Prompt Generator
          </DialogTitle>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-1">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <p>Describe what you'd like to draw, and I'll help generate creative ideas!</p>
            </div>
          )}

          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`${
                message.role === 'user' 
                  ? 'bg-primary/10 ml-8' 
                  : 'bg-secondary/10 mr-8'
              } p-3 rounded-lg`}
            >
              {message.isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: message.content }} />
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="bg-secondary/10 mr-8 p-3 rounded-lg">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-150"></div>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-300"></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <Select value={artStyle} onValueChange={setArtStyle}>
              <SelectTrigger>
                <SelectValue placeholder="Art Style" />
              </SelectTrigger>
              <SelectContent>
                {ART_STYLES.map((style) => (
                  <SelectItem key={style} value={style}>
                    {style}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={pov} onValueChange={setPov}>
              <SelectTrigger>
                <SelectValue placeholder="POV" />
              </SelectTrigger>
              <SelectContent>
                {POV_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={lighting} onValueChange={setLighting}>
              <SelectTrigger>
                <SelectValue placeholder="Lighting" />
              </SelectTrigger>
              <SelectContent>
                {LIGHTING_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex space-x-2">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you'd like to draw..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !prompt.trim()}>
              {isLoading ? "Generating..." : "Generate"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Chatbot;
