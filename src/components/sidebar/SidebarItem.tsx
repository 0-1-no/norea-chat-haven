
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  icon?: React.ReactNode;
  text: string;
  to: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  text, 
  to,
  isActive,
  onClick
}) => {
  const location = useLocation();
  const active = isActive || location.pathname === to;
  
  return (
    <Link to={to} onClick={onClick}>
      <div 
        className={cn(
          "group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium w-full transition-colors",
          active 
            ? "bg-sidebar-accent text-sidebar-accent-foreground" 
            : "text-sidebar-foreground hover:bg-sidebar-hover hover:text-sidebar-accent-foreground"
        )}
      >
        {icon && (
          <div className={cn(
            "w-5 h-5",
            active ? "text-sidebar-accent-foreground" : "text-sidebar-foreground group-hover:text-sidebar-accent-foreground"
          )}>
            {icon}
          </div>
        )}
        <span>{text}</span>
      </div>
    </Link>
  );
};
