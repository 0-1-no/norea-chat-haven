
import React from 'react';
import { PromptCard as UIPromptCard } from '@/components/ui/prompt-card';

type PromptCardProps = {
  text: string;
  icon?: 'chat' | 'settings' | 'document' | 'email';
  onClick?: () => void;
  className?: string;
};

export const PromptCard: React.FC<PromptCardProps> = ({ 
  text, 
  icon = 'chat',
  onClick, 
  className 
}) => {
  return (
    <UIPromptCard
      text={text}
      icon={icon}
      onClick={onClick}
      className={className}
    />
  );
};
