
import React from 'react';
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
    <div className="h-screen w-60 bg-sidebar border-r border-sidebar-border flex flex-col pt-4 animate-fade-in">
      <div className="px-4 mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-sidebar-foreground">Norea</h1>
      </div>
      
      <SidebarSearch />
      <SidebarNewChat />
      <SidebarContent />
      <SidebarProfile />
    </div>
  );
};
