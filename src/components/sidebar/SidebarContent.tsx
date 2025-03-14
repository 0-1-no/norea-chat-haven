
import React, { useState } from 'react';
import { Folders, Users, Layers, MessageCircle } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';

export const SidebarContent: React.FC = () => {
  const [activeChat, setActiveChat] = useState<string | null>("Forstå kvantedatabehandling");
  
  const recentChats = [
    { id: "1", title: "Forstå kvantedatabehandling", date: "10. mar", to: "/chat-demo" },
    { id: "2", title: "Analyser salgsdata", date: "9. mar" },
    { id: "3", title: "Planlegg europeisk ferie", date: "7. mar" },
    { id: "4", title: "Essay om klimaendringer", date: "5. mar" },
    { id: "5", title: "Kodeevaluering: React-komponenter", date: "3. mar" }
  ];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-hidden space-y-2 px-1">
      <SidebarSection title="Prosjekter" icon={<Folders className="w-4 h-4 text-gray-500" />}>
        {/* Projects content would go here */}
      </SidebarSection>
      
      <SidebarSection title="Karakterer" icon={<Users className="w-4 h-4 text-gray-500" />}>
        {/* Characters content would go here */}
      </SidebarSection>
      
      <SidebarSection title="Design System" icon={<Layers className="w-4 h-4 text-gray-500" />}>
        <SidebarItem 
          title="Komponentbibliotek"
          to="/components" 
        />
        <SidebarItem 
          title="Kortkomponenter"
          to="/cards" 
        />
        <SidebarItem 
          title="Design Tokens"
          to="/design-tokens" 
        />
        <SidebarItem 
          title="Input felter"
          to="/input-fields" 
        />
        <SidebarItem 
          title="Modaler"
          to="/modals" 
        />
        <SidebarItem 
          title="Navigasjon"
          to="/navigation" 
        />
        <SidebarItem 
          title="Brand"
          to="/brand" 
        />
        <SidebarItem 
          title="Chatbox"
          to="/chatbox" 
        />
        <SidebarItem 
          title="Layout"
          to="/layout" 
        />
      </SidebarSection>
      
      <SidebarSection 
        title="Nylige samtaler" 
        icon={<MessageCircle className="w-4 h-4 text-gray-500" />}
      >
        {recentChats.map((chat) => (
          <SidebarItem
            key={chat.id}
            title={chat.title}
            date={chat.date}
            isActive={activeChat === chat.title}
            onClick={() => setActiveChat(chat.title)}
            to={chat.to}
          />
        ))}
      </SidebarSection>
    </div>
  );
};
