
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

type SidebarSectionProps = {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

export const SidebarSection: React.FC<SidebarSectionProps> = ({ 
  title, 
  icon, 
  children, 
  defaultOpen = true 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      <div 
        className="flex items-center gap-2 px-3 py-2 cursor-pointer text-sm font-medium text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <span>{title}</span>
        {isOpen ? (
          <ChevronDown className="ml-auto w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRight className="ml-auto w-4 h-4 text-gray-500" />
        )}
      </div>
      {isOpen && (
        <div className="mt-1 ml-1 space-y-1 animate-slide-up">
          {children}
        </div>
      )}
    </div>
  );
};
