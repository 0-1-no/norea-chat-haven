
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { ChatInterface } from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-full flex overflow-hidden">
      {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      
      <div className="flex-1 flex flex-col h-full bg-gray-50/50">
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
  );
};

export default Index;
