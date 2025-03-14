
import React from 'react';
import { MessageSquare, Settings, FileText, Mail, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type PromptCardProps = {
  text: string;
  title?: string;
  icon?: 'chat' | 'settings' | 'document' | 'email';
  iconPosition?: 'left' | 'right';
  hideIcon?: boolean;
  onClick?: () => void;
  className?: string;
};

export const PromptCard: React.FC<PromptCardProps> = ({ 
  text, 
  title,
  icon = 'chat',
  iconPosition = 'left',
  hideIcon = false,
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

  const IconComponent = getIcon();

  return (
    <div 
      className={cn(
        "bg-surface border border-surface-border rounded-lg p-4 flex items-center gap-3 cursor-pointer",
        "hover:border-primary hover:bg-surface-hover hover:shadow-surface-md transition-all duration-200",
        className
      )}
      onClick={onClick}
    >
      {!hideIcon && iconPosition === 'left' && (
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          {IconComponent}
        </div>
      )}
      
      <div className="flex-1">
        {title && <h4 className="font-medium text-sm mb-1">{title}</h4>}
        <p className="text-sm text-surface-foreground">{text}</p>
      </div>
      
      {!hideIcon && iconPosition === 'right' && (
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          {IconComponent}
        </div>
      )}
    </div>
  );
};
