
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarSectionProps = {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export const SidebarSection: React.FC<SidebarSectionProps> = ({ 
  title, 
  icon, 
  children, 
  defaultOpen = false,
  className
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("mb-2", className)}>
      <div 
        className="flex items-center gap-3 px-3 py-1.5 cursor-pointer text-sm font-medium text-sidebar-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <span>{title}</span>
        {isOpen ? (
          <ChevronDown className="ml-auto w-4 h-4 text-sidebar-foreground/70" />
        ) : (
          <ChevronRight className="ml-auto w-4 h-4 text-sidebar-foreground/70" />
        )}
      </div>
      {isOpen && (
        <div className="mt-1 ml-1 space-y-0.5 animate-slide-up">
          {children}
        </div>
      )}
    </div>
  );
};
