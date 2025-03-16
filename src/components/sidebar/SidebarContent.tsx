
import React, { useState } from 'react';
import { Folders, Users, Layers, MessageCircle, LayoutDashboard, Sparkles, UserCircle } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';

export const SidebarContent: React.FC = () => {
  const [activeChat, setActiveChat] = useState<string | null>("Forstå kvantedatabehandling");
  
  const recentChats = [
    { id: "1", title: "Forstå kvantedatabehandling", date: "10. mar", to: "/chat-demo" },
    { id: "2", title: "Minne-demonstrasjon", date: "11. mar", to: "/memory-chat" },
    { id: "3", title: "Analyser salgsdata", date: "9. mar" },
    { id: "4", title: "Planlegg europeisk ferie", date: "7. mar" },
    { id: "5", title: "Essay om klimaendringer", date: "5. mar" },
    { id: "6", title: "Kodeevaluering: React-komponenter", date: "3. mar" }
  ];

  const charactersWithContent = [
    { id: "dating-coach", title: "Dating Coach", to: "/character/dating-coach" },
  ];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-hidden space-y-2 px-1">
      <SidebarSection title="Rom" icon={<LayoutDashboard className="w-4 h-4 text-gray-500" />}>
        <SidebarItem 
          title="Alle rom" 
          to="/rooms"
        />
        <SidebarItem 
          title="Tom tilstand" 
          to="/empty-rooms"
        />
        <SidebarItem 
          title="Romvisning" 
          to="/room-view/1"
        />
        <SidebarItem 
          title="Tilpasset rom" 
          to="/custom-room-view/1"
        />
      </SidebarSection>
      
      <SidebarSection title="Karakterer" icon={<UserCircle className="w-4 h-4 text-gray-500" />}>
        <SidebarItem 
          title="Alle karakterer" 
          to="/characters"
        />
        {charactersWithContent.map((character) => (
          <SidebarItem 
            key={character.id}
            title={character.title} 
            to={character.to}
          />
        ))}
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
          title="Typography"
          to="/typography" 
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
