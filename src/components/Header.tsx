
import React from 'react';
import { ArrowLeft, Settings, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  className?: string;
  sidebarOpen?: boolean;
  toggleSidebar?: () => void;
};

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = true, 
  onBackClick,
  className,
  sidebarOpen,
  toggleSidebar
}) => {
  return (
    <div className={cn(
      "h-14 border-b border-surface-border px-4 flex items-center justify-between animate-fade-in",
      className
    )}>
      <div className="w-8">
        {!sidebarOpen && toggleSidebar ? (
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors"
            onClick={toggleSidebar}
          >
            <PanelLeft className="w-5 h-5 text-surface-foreground" />
          </Button>
        ) : showBackButton ? (
          <button 
            onClick={onBackClick}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-surface-foreground" />
          </button>
        ) : (
          // Empty placeholder to maintain layout
          <div className="w-8" />
        )}
      </div>
      
      <h2 className="text-lg font-medium text-surface-foreground">{title}</h2>
      
      <div className="w-8">
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors">
          <Settings className="w-5 h-5 text-surface-foreground" />
        </button>
      </div>
    </div>
  );
};
