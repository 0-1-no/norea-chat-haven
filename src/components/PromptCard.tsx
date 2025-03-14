
import React from 'react';
import { MessageSquare, Settings, FileText, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const getIcon = () => {
    switch (icon) {
      case 'settings':
        return <Settings className="w-4 h-4 text-muted-foreground" />;
      case 'document':
        return <FileText className="w-4 h-4 text-muted-foreground" />;
      case 'email':
        return <Mail className="w-4 h-4 text-muted-foreground" />;
      case 'chat':
      default:
        return <MessageSquare className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div 
      className={cn(
        "bg-surface border border-surface-border rounded-lg p-4 flex items-center gap-3 cursor-pointer",
        "hover:border-primary/30 hover:shadow-surface-sm transition-all duration-200",
        "animate-slide-up",
        className
      )}
      onClick={onClick}
    >
      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
        {getIcon()}
      </div>
      <p className="text-sm text-surface-foreground flex-1">{text}</p>
    </div>
  );
};
