
import React from 'react';
import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarItem } from './sidebar/SidebarItem';
import { SidebarSection } from './sidebar/SidebarSection';
import { SidebarNewChat } from './sidebar/SidebarNewChat';
import { SidebarContent } from './sidebar/SidebarContent';
import { SidebarTestFooter } from './sidebar/SidebarTestFooter';
import { Link } from 'react-router-dom';

type SidebarProps = {
  onToggle?: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  return (
    <div className="h-screen w-60 bg-sidebar border-r border-sidebar-border flex flex-col pt-4 animate-fade-in">
      <div className="px-4 mb-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-semibold text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors">Norea</h1>
        </Link>
        {onToggle && (
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-sidebar-hover transition-colors"
            onClick={onToggle}
          >
            <PanelLeft className="w-5 h-5 text-sidebar-foreground" />
          </Button>
        )}
      </div>
      
      <SidebarNewChat />
      <div className="flex-1 overflow-y-auto">
        <SidebarContent />
      </div>
      <div className="mt-auto">
        <SidebarTestFooter />
      </div>
    </div>
  );
};
