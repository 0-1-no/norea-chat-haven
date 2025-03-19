
import React, { useRef, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarProvider } from '@/components/ui/sidebar';

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
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);
  const contentRef = useRef<HTMLDivElement>(null);

  // Update sidebar state when screen size changes
  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle clicks outside sidebar on mobile to close it
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      // Only run on mobile when sidebar is open
      if (!isMobile || !isSidebarOpen) return;
      
      // Check if the click was inside the sidebar
      const sidebarElement = document.querySelector('.sidebar-container');
      if (sidebarElement && !sidebarElement.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isSidebarOpen]);

  return (
    <SidebarProvider defaultOpen={isSidebarOpen}>
      <div className="h-screen w-full flex overflow-hidden">
        {/* Mobile overlay with z-index lower than sidebar but higher than content */}
        {isMobile && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/30 z-30"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
        
        {/* Sidebar container */}
        <div className={`
          sidebar-container
          ${isMobile ? 'fixed inset-0 z-40' : 'relative'}
          ${(isMobile && !isSidebarOpen) ? 'translate-x-[-100%]' : 'translate-x-0'}
          transition-transform duration-300 ease-in-out
          h-full
        `}>
          {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
        </div>
        
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
              sidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              className="sticky top-0 z-20 bg-canvas"
            />
            
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
