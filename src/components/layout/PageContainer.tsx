
import React, { useRef, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

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
    // We need to apply the background color to the html/body element to ensure it covers the status bar area
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar component - positioned as overlay on mobile */}
      <div className={`
        ${isMobile ? 'fixed z-50 transition-transform duration-300 ease-in-out sidebar-container h-full' : 'sidebar-container'}
        ${(isMobile && !isSidebarOpen) ? '-translate-x-full' : 'translate-x-0'}
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
        `}>
          <Header 
            title={title}
            showBackButton={showBackButton}
            sidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          
          {/* Content Area - Making sure this is properly set up for vertical centering */}
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
  );
};
