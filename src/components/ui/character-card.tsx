
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export type CharacterCardProps = {
  character: {
    id: string;
    name: string;
    description: string;
    image: string;
    creator?: string;
    conversations?: number;
  };
  className?: string;
}

export const CharacterCard = ({ 
  character, 
  className 
}: CharacterCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };
  
  return (
    <Card 
      className={`overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        {character.creator && (
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            Av {character.creator}
          </div>
        )}
      </div>
      <CardContent className="pt-3 px-4 pb-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{character.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{character.description}</p>
        
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <MessageSquare className="w-3.5 h-3.5 mr-1" />
          <span>{(character.conversations || Math.floor(Math.random() * 500)).toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};
