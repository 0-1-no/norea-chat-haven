
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export type SidebarItemProps = {
  title: string;
  date?: string;
  isActive?: boolean;
  onClick?: () => void;
  to?: string;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({ 
  title, 
  date, 
  isActive, 
  onClick, 
  to 
}) => {
  const content = (
    <div
      className={cn(
        "px-3 py-2 rounded-lg text-sm flex justify-between items-center cursor-pointer transition-colors duration-200",
        isActive 
          ? "bg-norea-light-purple/10 text-norea-purple font-medium" 
          : "hover:bg-norea-hover-gray"
      )}
      onClick={onClick}
    >
      <span className="truncate pr-2">{title}</span>
      {date && <span className="text-xs text-gray-400 whitespace-nowrap">{date}</span>}
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
};
