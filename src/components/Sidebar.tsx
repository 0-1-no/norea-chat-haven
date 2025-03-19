
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
import {
  Sidebar as ShadcnSidebar,
  SidebarHeader,
  SidebarContent as ShadcnSidebarContent,
  SidebarFooter
} from '@/components/ui/sidebar';

type SidebarProps = {
  onToggle?: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const isMobile = useIsMobile();

  return (
    <ShadcnSidebar className="h-screen w-60 bg-sidebar border-r border-sidebar-border animate-fade-in">
      <SidebarHeader className="px-3 py-3">
        <div className="flex justify-between items-center">
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
      </SidebarHeader>
      
      <ShadcnSidebarContent className="flex-1 overflow-y-auto px-1">
        <SidebarContent />
      </ShadcnSidebarContent>
      
      <SidebarFooter className="mt-auto pointer-events-auto relative">
        <SidebarTestFooter />
      </SidebarFooter>
    </ShadcnSidebar>
  );
};
