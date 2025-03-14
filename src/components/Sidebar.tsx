import React, { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronRight, Users, Folders, MessageCircle, ChevronLeftSquare, PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  title: string;
  date?: string;
  isActive?: boolean;
  onClick?: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ title, date, isActive, onClick }) => {
  return (
    <div
      className={cn(
        "px-3 py-2 rounded-lg text-sm flex justify-between items-center cursor-pointer transition-colors duration-200",
        isActive 
          ? "bg-norea-light-purple/10 text-norea-purple font-medium" 
          : "hover:bg-norea-hover-gray"
      )}
      onClick={onClick}
    >
      <span className="truncate pr-2">{title}</span>
      {date && <span className="text-xs text-gray-400 whitespace-nowrap">{date}</span>}
    </div>
  );
};

type SidebarSectionProps = {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

const SidebarSection: React.FC<SidebarSectionProps> = ({ 
  title, 
  icon, 
  children, 
  defaultOpen = true 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      <div 
        className="flex items-center gap-2 px-3 py-2 cursor-pointer text-sm font-medium text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <span>{title}</span>
        {isOpen ? (
          <ChevronDown className="ml-auto w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRight className="ml-auto w-4 h-4 text-gray-500" />
        )}
      </div>
      {isOpen && (
        <div className="mt-1 ml-1 space-y-1 animate-slide-up">
          {children}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [activeChat, setActiveChat] = useState<string | null>("Understanding quantum computing");

  const recentChats = [
    { id: "1", title: "Understanding quantum computing", date: "Mar 10" },
    { id: "2", title: "Analyze my sales data", date: "Mar 9" },
    { id: "3", title: "Planning European vacation", date: "Mar 7" },
    { id: "4", title: "Essay on climate change", date: "Mar 5" },
    { id: "5", title: "Code review: React components", date: "Mar 3" }
  ];

  return (
    <div className="h-screen w-60 bg-sidebar border-r border-gray-200 flex flex-col pt-4 animate-fade-in relative">
      <div className="absolute -right-10 top-4">
        <button 
          onClick={onToggle}
          className="p-2 rounded-md bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all"
          aria-label="Toggle sidebar"
        >
          <PanelLeft className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="px-4 mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Norea</h1>
      </div>
      
      <div className="px-3 mb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 w-full rounded-md py-2 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-norea-purple/40 transition-all"
          />
        </div>
      </div>
      
      <button className="mx-3 px-3 py-2 mb-4 bg-norea-purple text-white rounded-lg flex items-center justify-center gap-2 hover:bg-norea-dark-purple transition-colors duration-200 animate-fade-in">
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium">New Conversation</span>
      </button>
      
      <div className="flex-1 overflow-y-auto scrollbar-hidden space-y-2 px-1">
        <SidebarSection title="Projects" icon={<Folders className="w-4 h-4 text-gray-500" />}>
          {/* Projects content would go here */}
        </SidebarSection>
        
        <SidebarSection title="Characters" icon={<Users className="w-4 h-4 text-gray-500" />}>
          {/* Characters content would go here */}
        </SidebarSection>
        
        <SidebarSection 
          title="Recent Chats" 
          icon={<MessageCircle className="w-4 h-4 text-gray-500" />}
        >
          {recentChats.map((chat) => (
            <SidebarItem
              key={chat.id}
              title={chat.title}
              date={chat.date}
              isActive={activeChat === chat.title}
              onClick={() => setActiveChat(chat.title)}
            />
          ))}
        </SidebarSection>
      </div>
      
      <div className="mt-auto border-t border-gray-200 p-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12h.01M8 12h.01M16 12h.01"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
