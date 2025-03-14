
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { ChatInterface } from '@/components/ChatInterface';
import { PanelLeft } from 'lucide-react';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar with conditional rendering */}
      {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      
      {/* Main content area - always full height and proper positioning */}
      <div className="flex-1 flex flex-col h-full bg-gray-50/50">
        <Header 
          title="Home" 
          showBackButton={false}
        />
        
        {/* Toggle button only shows when sidebar is closed */}
        {!isSidebarOpen && (
          <button 
            onClick={toggleSidebar}
            className="absolute left-4 top-4 p-2 rounded-md bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all z-10"
            aria-label="Open sidebar"
          >
            <PanelLeft className="w-4 h-4 text-gray-600" />
          </button>
        )}
        
        <ChatInterface 
          userName="John"
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default Index;
