
import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

export type SidebarItemProps = {
  title: string;
  date?: string;
  isActive?: boolean;
  onClick?: () => void;
  to?: string;
  icon?: React.ReactNode;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({ 
  title, 
  date, 
  isActive, 
  onClick, 
  to,
  icon
}) => {
  const location = useLocation();
  // Check if this item is active based on current route
  const isRouteActive = to ? location.pathname === to : false;
  // Use either explicit isActive prop or determine from route
  const activeState = isActive !== undefined ? isActive : isRouteActive;
  
  const content = (
    <div
      className={cn(
        "px-3 py-2 rounded-md text-sm flex justify-between items-center cursor-pointer transition-colors duration-200",
        activeState 
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
          : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
      )}
      onClick={onClick}
    >
      <span className="truncate pr-2 flex items-center gap-2">
        {icon && icon}
        {title}
      </span>
      {date && <span className="text-xs text-sidebar-foreground/70 whitespace-nowrap">{date}</span>}
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
};
