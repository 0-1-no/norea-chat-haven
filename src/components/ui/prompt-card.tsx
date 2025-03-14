
import React from 'react';
import { MessageSquare, Settings, FileText, Mail, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type PromptCardProps = {
  text: string;
  title?: string;
  icon?: 'chat' | 'settings' | 'document' | 'email';
  iconPosition?: 'left' | 'right';
  hideIcon?: boolean;
  variant?: 'default' | 'brand';
  onClick?: () => void;
  className?: string;
};

export const PromptCard: React.FC<PromptCardProps> = ({ 
  text, 
  title,
  icon = 'chat',
  iconPosition = 'left',
  hideIcon = false,
  variant = 'default',
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
        "rounded-lg p-4 flex items-center gap-3 cursor-pointer transition-all duration-200",
        variant === 'default' && "bg-surface border border-surface-border hover:border-primary hover:bg-surface-hover hover:shadow-surface-md",
        variant === 'brand' && "bg-gradient-to-r from-primary to-primary-hover text-primary-foreground border border-primary/30 hover:shadow-surface-md",
        className
      )}
      onClick={onClick}
    >
      {!hideIcon && iconPosition === 'left' && (
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          variant === 'default' && "bg-muted",
          variant === 'brand' && "bg-primary-foreground/20"
        )}>
          {IconComponent}
        </div>
      )}
      
      <div className="flex-1">
        {title && <h4 className="font-medium text-sm mb-1">{title}</h4>}
        <p className="text-sm">{text}</p>
      </div>
      
      {!hideIcon && iconPosition === 'right' && (
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          variant === 'default' && "bg-muted",
          variant === 'brand' && "bg-primary-foreground/20"
        )}>
          {IconComponent}
        </div>
      )}
    </div>
  );
};
