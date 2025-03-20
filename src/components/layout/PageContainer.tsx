
import React, { useRef } from 'react';
import { Header } from '@/components/Header';
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarNewChat } from '@/components/sidebar/SidebarNewChat';
import { SidebarContent as SidebarMainContent } from '@/components/sidebar/SidebarContent';
import { SidebarTestFooter } from '@/components/sidebar/SidebarTestFooter';
import { Link } from 'react-router-dom';

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
  description?: string;
}

/**
 * PageContainer - The main layout container for the application
 * 
 * Architecture layers:
 * 1. Backdrop (Root) - The outermost background layer
 * 2. Sidebar - Navigation sidebar that can be toggled
 * 3. Canvas - The main content frame
 * 4. Content Area - The innermost container with proper padding and constraints
 */
export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  showBackButton = false,
  description
}) => {
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    // Layer 1: SidebarProvider (wraps everything for state management)
    <SidebarProvider defaultOpen={!isMobile}>
      {/* Global layout container - serves as backdrop */}
      <div className="h-screen w-full flex overflow-hidden backdrop-layer">
        {/* Layer 2: Sidebar - navigation container */}
        <Sidebar className="z-40 sidebar-layer">
          <SidebarHeader className="px-3 py-3">
            <Link to="/" className="block">
              <h1 className="text-xl font-semibold text-sidebar-foreground">Norea</h1>
            </Link>
          </SidebarHeader>
          
          <SidebarContent>
            <div className="flex-1 overflow-y-auto">
              <div className="px-2 mb-6 w-full">
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
        
        {/* Layer 3: Canvas - main content frame */}
        <div ref={contentRef} className="flex-1 p-0 sm:p-2 flex items-center justify-center overflow-hidden canvas-layer">
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
            <Header title={title} showBackButton={showBackButton} className="sticky top-0 z-20 bg-canvas">
              <SidebarTrigger />
            </Header>
            
            {/* Layer 4: Content Area - inner container with proper constraints */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col content-area-layer">
              <div className="w-full max-w-canvas mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-6 pb-12 md:py-12 flex-1 flex flex-col">
                {description && <div className="mb-4 w-full">
                    
                  </div>}
                {/* Layer 5: Page Content - where subpage content is rendered */}
                <div className="w-full flex-1 flex flex-col page-content-layer">
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
