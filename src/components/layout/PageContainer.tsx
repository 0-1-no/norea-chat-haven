
import React, { useRef } from 'react';
import { Header } from '@/components/Header';
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarNewChat } from '@/components/sidebar/SidebarNewChat';
import { SidebarContent as SidebarMainContent } from '@/components/sidebar/SidebarContent';
import { SidebarTestFooter } from '@/components/sidebar/SidebarTestFooter';

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
  description?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  title,
  showBackButton = false,
  description
}) => {
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="h-screen w-full flex overflow-hidden">
        {/* Sidebar using shadcn components */}
        <Sidebar className="z-40">
          <SidebarHeader className="px-2 py-2">
            <h1 className="text-xl font-semibold text-sidebar-foreground px-2">Norea</h1>
          </SidebarHeader>
          
          <SidebarContent>
            {/* Import your custom sidebar content */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-2 mb-4 w-full">
                {/* New Chat button */}
                <div className="px-1">
                  <SidebarNewChat />
                </div>
              </div>
              
              {/* Main sidebar content */}
              <SidebarMainContent />
            </div>
          </SidebarContent>
          
          <SidebarFooter>
            {/* Test footer at bottom of sidebar */}
            <SidebarTestFooter />
          </SidebarFooter>
        </Sidebar>
        
        {/* Canvas - where main content is rendered with padding on desktop */}
        <div 
          ref={contentRef}
          className="flex-1 p-0 sm:p-2 flex items-center justify-center overflow-hidden"
        >
          <div className={`
            w-full h-full 
            bg-canvas 
            md:rounded-lg 
            md:border md:border-canvas-border 
            md:shadow-surface-sm 
            flex flex-col 
            overflow-hidden
            z-10
          `}>
            <Header 
              title={title}
              showBackButton={showBackButton}
              className="sticky top-0 z-20 bg-canvas"
            >
              <SidebarTrigger />
            </Header>
            
            {/* Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
              <div className="w-full max-w-canvas mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-6 pb-12 md:py-12 flex-1 flex flex-col">
                {description && (
                  <div className="mb-4 w-full">
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                )}
                <div className="w-full flex-1 flex flex-col">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
