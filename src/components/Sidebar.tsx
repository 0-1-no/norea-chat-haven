
import React from 'react';
import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarItem } from './sidebar/SidebarItem';
import { SidebarSection } from './sidebar/SidebarSection';
import { SidebarProfile } from './sidebar/SidebarProfile';
import { SidebarSearch } from './sidebar/SidebarSearch';
import { SidebarNewChat } from './sidebar/SidebarNewChat';
import { SidebarContent } from './sidebar/SidebarContent';

type SidebarProps = {
  onToggle?: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  return (
    <div className="h-screen w-60 bg-sidebar border-r border-gray-200 flex flex-col pt-4 animate-fade-in">
      <div className="px-4 mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-900">Norea</h1>
        <Button variant="ghost" size="icon" onClick={onToggle} className="h-8 w-8">
          <PanelLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <SidebarSearch />
      <SidebarNewChat />
      <SidebarContent />
      <SidebarProfile />
    </div>
  );
};
