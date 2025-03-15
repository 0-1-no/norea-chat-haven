
import React from 'react';
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

  // Update sidebar state when screen size changes
  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-backdrop">
      {/* Sidebar component - positioned as overlay on mobile */}
      <div className={`
        ${isMobile ? 'fixed z-50 transition-transform duration-300 ease-in-out' : ''}
        ${(isMobile && !isSidebarOpen) ? '-translate-x-full' : 'translate-x-0'}
      `}>
        {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      </div>
      
      {/* Canvas - where main content is rendered with padding on desktop */}
      <div className="flex-1 p-2 flex items-center justify-center">
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
          
          {/* Content Area - container to limit content width to 1400px with padding */}
          <div className="flex-1 overflow-y-auto flex justify-center">
            <div className="w-full max-w-canvas px-12 py-12 flex flex-col content-area">
              {description && (
                <div className="mb-4">
                  <p className="text-muted-foreground">{description}</p>
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
