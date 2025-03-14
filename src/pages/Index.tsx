
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
    <div className="h-screen w-full flex overflow-hidden bg-gray-100">
      {/* Backdrop - the main background */}
      
      {/* Sidebar component */}
      {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      
      {/* Canvas - where main content is rendered */}
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="w-full h-full max-w-6xl bg-white rounded-xl shadow-sm flex flex-col overflow-hidden">
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
