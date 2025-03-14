
import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { ChatInterface } from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  // Update sidebar state when screen size changes
  useEffect(() => {
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
      
      {/* Canvas - where main content is rendered */}
      <div className="flex-1 md:p-content-md flex items-center justify-center">
        <div className={`
          w-full h-full 
          max-w-canvas 
          bg-canvas 
          md:rounded-lg 
          md:border md:border-canvas-border 
          md:shadow-surface-sm 
          flex flex-col 
          overflow-hidden
        `}>
          {!isSidebarOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 left-4 z-10"
              onClick={toggleSidebar}
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
          )}
          
          <Header 
            title="Home" 
            showBackButton={false}
          />
          
          <ChatInterface 
            userName="John"
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
