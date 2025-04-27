
import React from 'react';
import { Palette, MessageSquare, Image } from 'lucide-react';

const FEATURES = [
  {
    icon: <Palette className="h-8 w-8 text-artful-purple" />,
    title: "Art Style Selection",
    description: "Choose from a wide variety of art styles to inspire your creative process."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-artful-blue" />,
    title: "Custom Prompts",
    description: "Get personalized art prompts based on your specific requirements and preferences."
  },
  {
    icon: <Image className="h-8 w-8 text-artful-pink" />,
    title: "Detailed Descriptions",
    description: "Receive comprehensive descriptions that help bring your artistic vision to life."
  }
];

const Features = () => {
  return (
    <div className="content-wrap py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Powerful <span className="artful-gradient-text">Features</span>
      </h2>
      <p className="text-lg text-gray-600 text-center mb-10">
        Tools designed to enhance your creative process
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <div 
            key={index} 
            className="glass-card p-6 rounded-xl text-center flex flex-col items-center"
          >
            <div className="mb-4 p-3 rounded-full bg-white shadow-sm">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
