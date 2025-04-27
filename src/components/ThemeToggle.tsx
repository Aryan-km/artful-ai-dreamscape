
import React from 'react';
import { useTheme } from 'next-themes';
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Toggle 
      aria-label="Toggle theme" 
      onClick={toggleTheme}
      className="bg-transparent hover:bg-accent"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Toggle>
  );
};

export default ThemeToggle;
