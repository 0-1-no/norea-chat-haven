
import React from 'react';
import { ArrowLeft, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = true, 
  onBackClick,
  className
}) => {
  const isMobile = useIsMobile();
  const formattedTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className={cn(
      "h-14 border-b border-surface-border px-4 flex items-center justify-between animate-fade-in",
      className
    )}>
      <div className="flex items-center gap-3">
        {showBackButton && (
          <button 
            onClick={onBackClick}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-surface-foreground" />
          </button>
        )}
        <h2 className="text-lg font-medium text-surface-foreground">{title}</h2>
      </div>
      
      <div className="flex items-center gap-4">
        {!isMobile && <span className="text-sm text-muted-foreground">{formattedTime}</span>}
        
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors">
          <Settings className="w-5 h-5 text-surface-foreground" />
        </button>
        
        {!isMobile && (
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors">
            <User className="w-5 h-5 text-surface-foreground" />
          </button>
        )}
      </div>
    </div>
  );
};
