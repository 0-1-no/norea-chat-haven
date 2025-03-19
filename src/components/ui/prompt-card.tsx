
import React from 'react';
import { MessageSquare, Settings, FileText, Mail, Image } from 'lucide-react';
import { cn } from '@/lib/utils';

export type PromptCardProps = {
  text: string;
  title?: string;
  icon?: 'chat' | 'settings' | 'document' | 'email' | 'image';
  iconPosition?: 'left' | 'right';
  hideIcon?: boolean;
  variant?: 'default' | 'brand' | 'compact';
  onClick?: () => void;
  className?: string;
  imageSrc?: string;
};

export const PromptCard: React.FC<PromptCardProps> = ({ 
  text, 
  title,
  icon = 'chat',
  iconPosition = 'left',
  hideIcon = false,
  variant = 'default',
  onClick, 
  className,
  imageSrc
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'settings':
        return <Settings className={cn("text-muted-foreground", variant === 'compact' ? "w-3 h-3" : "w-4 h-4")} />;
      case 'document':
        return <FileText className={cn("text-muted-foreground", variant === 'compact' ? "w-3 h-3" : "w-4 h-4")} />;
      case 'email':
        return <Mail className={cn("text-muted-foreground", variant === 'compact' ? "w-3 h-3" : "w-4 h-4")} />;
      case 'image':
        return <Image className={cn("text-muted-foreground", variant === 'compact' ? "w-3 h-3" : "w-4 h-4")} />;
      case 'chat':
      default:
        return <MessageSquare className={cn("text-muted-foreground", variant === 'compact' ? "w-3 h-3" : "w-4 h-4")} />;
    }
  };

  const IconComponent = getIcon();

  const renderIconContainer = () => (
    <div className={cn(
      "flex items-center justify-center flex-shrink-0 rounded-full",
      variant === 'default' && "bg-muted",
      variant === 'brand' && "bg-primary-foreground/20",
      variant === 'compact' && "bg-muted",
      variant === 'compact' ? "w-6 h-6" : "w-8 h-8"
    )}>
      {imageSrc ? (
        <img src={imageSrc} alt="" className="w-full h-full rounded-full object-cover" />
      ) : (
        IconComponent
      )}
    </div>
  );

  return (
    <div 
      className={cn(
        "flex items-center gap-3 cursor-pointer transition-all duration-200 max-w-full",
        variant === 'default' && "rounded-lg p-4 bg-surface border border-surface-border hover:border-primary hover:bg-surface-hover hover:shadow-surface-md",
        variant === 'brand' && "rounded-lg p-4 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground border border-primary/30 hover:shadow-surface-md",
        variant === 'compact' && "rounded-md p-2 bg-surface border border-surface-border hover:border-primary/50 hover:bg-surface-hover",
        className
      )}
      onClick={onClick}
    >
      {!hideIcon && iconPosition === 'left' && renderIconContainer()}
      
      <div className="flex-1 min-w-0 w-full overflow-hidden">
        {title && <h4 className={cn("font-medium mb-1 truncate", variant === 'compact' ? "text-xs" : "text-sm")}>{title}</h4>}
        <p className={cn("truncate text-ellipsis", variant === 'compact' ? "text-xs" : "text-sm")}>{text}</p>
      </div>
      
      {!hideIcon && iconPosition === 'right' && renderIconContainer()}
    </div>
  );
};
