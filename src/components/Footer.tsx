
import React from 'react';
import { Palette } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="artful-gradient-bg text-white py-8">
      <div className="content-wrap">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <Palette className="h-8 w-8 mr-3" />
            <div>
              <h3 className="text-xl font-bold">AI Art Prompt Generator</h3>
              <p className="text-sm opacity-80">Unleash your creativity with AI-powered inspiration</p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Features</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-sm opacity-80 text-center">
          <p>© {new Date().getFullYear()} AI Art Prompt Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
