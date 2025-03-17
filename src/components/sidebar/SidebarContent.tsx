
import React, { useState } from 'react';
import { Folders, Users, Layers, MessageCircle, LayoutDashboard, Sparkles, UserCircle, CloudRain, Archive } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const SidebarContent: React.FC = () => {
  const [activeChat, setActiveChat] = useState<string | null>("Enkel chat-demonstrasjon");
  
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
        <SidebarItem 
          title="Dating Coach" 
          to="/character/dating-coach"
        />
      </SidebarSection>
      
      <SidebarSection 
        title="Samtaler" 
        icon={<MessageCircle className="w-4 h-4 text-gray-500" />}
      >
        <SidebarItem 
          title="Enkel chat-demonstrasjon"
          to="/chat-demo" 
        />
        <SidebarItem 
          title="Minne-demonstrasjon"
          to="/memory-chat" 
        />
        <SidebarItem 
          title="Vær-demonstrasjon"
          to="/weather-chat" 
          icon={<CloudRain className="w-4 h-4" />}
        />
        <SidebarItem 
          title="Onboarding-demonstrasjon"
          to="/onboarding-chat"
        />
        <SidebarItem 
          title="Oppfølgingsforslag"
          to="/followup-chat"
        />
        
        <div className="mt-2 px-3">
          <Link to="/archive">
            <Button variant="outline" size="sm" className="w-full flex justify-start gap-2 text-sm bg-transparent">
              <Archive className="w-4 h-4" />
              Arkiv
            </Button>
          </Link>
        </div>
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
    </div>
  );
};
