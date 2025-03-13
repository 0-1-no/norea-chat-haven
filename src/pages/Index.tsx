
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { ChatInterface } from '@/components/ChatInterface';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-full flex overflow-hidden">
      {isSidebarOpen && <Sidebar />}
      
      <div className="flex-1 flex flex-col h-full bg-gray-50/50">
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
