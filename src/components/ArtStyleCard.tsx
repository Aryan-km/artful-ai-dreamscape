
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ArtStyleCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ArtStyleCard = ({ title, description, imageSrc }: ArtStyleCardProps) => {
  return (
    <Card className="glass-card overflow-hidden h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ArtStyleCard;
