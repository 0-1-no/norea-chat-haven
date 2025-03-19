import React, { useState } from 'react';
import { Folders, Users, Layers, MessageCircle, LayoutDashboard, Sparkles, UserCircle, CloudRain, Archive, Share, Edit, Trash, Bot } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

export const SidebarContent: React.FC = () => {
  const [activeChat, setActiveChat] = useState<string | null>("Enkel chat-demonstrasjon");
  
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hidden space-y-2 px-1">
      <SidebarSection title="Rom" icon={<LayoutDashboard className="w-4 h-4 text-sidebar-foreground/70" />}>
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
      
      <SidebarSection title="Karakterer" icon={<UserCircle className="w-4 h-4 text-sidebar-foreground/70" />}>
        <SidebarItem 
          title="Alle karakterer" 
          to="/characters"
        />
        <SidebarItem 
          title="Dating Coach" 
          to="/character/dating-coach"
        />
      </SidebarSection>
      
      <SidebarSection title="Assistenter" icon={<Bot className="w-4 h-4 text-sidebar-foreground/70" />}>
        <SidebarItem 
          title="Alle assistenter" 
          to="/assistants"
        />
        <SidebarItem 
          title="Todo Assistent" 
          to="/assistant/todo"
        />
      </SidebarSection>
      
      <SidebarSection 
        title="Samtaler" 
        icon={<MessageCircle className="w-4 h-4 text-sidebar-foreground/70" />}
        defaultOpen={true}
      >
        <div className="mt-2 px-3 mb-3">
          <Link to="/archive">
            <Button variant="outline" size="sm" className="w-full flex justify-start gap-2 text-sm bg-transparent">
              <Archive className="w-4 h-4" />
              Arkiv
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="px-3 py-1 text-xs font-medium text-sidebar-foreground/70">I dag</div>
            <ChatItem title="Enkel chat-demonstrasjon" to="/chat-demo" />
            <ChatItem title="Minne-demonstrasjon" to="/memory-chat" />
            <ChatItem title="Vær-demonstrasjon" to="/weather-chat" />
            <ChatItem title="Oppfølgingsforslag" to="/followup-chat" />
          </div>
          
          <div className="space-y-1">
            <div className="px-3 py-1 text-xs font-medium text-sidebar-foreground/70">Siste 7 dager</div>
            <ChatItem title="Hva er linting" to="/chat-demo" />
            <ChatItem title="AI Design System" to="/chat-demo" />
            <ChatItem title="Skismøring og vannkvalitet" to="/chat-demo" />
          </div>
          
          <div className="space-y-1">
            <div className="px-3 py-1 text-xs font-medium text-sidebar-foreground/70">Eldre</div>
            <ChatItem title="Hva er GraphQL" to="/chat-demo" />
            <ChatItem title="Face ID iOS API" to="/chat-demo" />
          </div>
        </div>
      </SidebarSection>
      
      <SidebarSection title="Design System" icon={<Layers className="w-4 h-4 text-sidebar-foreground/70" />}>
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

interface ChatItemProps {
  title: string;
  to: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ title, to }) => {
  return (
    <div className="group relative">
      <Link to={to}>
        <div className="px-3 py-2 rounded-md text-sm flex justify-between items-center cursor-pointer transition-colors duration-200 hover:bg-sidebar-accent/50 text-sidebar-foreground group-hover:bg-sidebar-accent/30">
          <span className="truncate pr-2">{title}</span>
        </div>
      </Link>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <span className="sr-only">Åpne meny</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            <DropdownMenuItem className="flex items-center gap-2">
              <Share className="h-4 w-4" />
              <span>Del</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              <span>Endre tittel</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Archive className="h-4 w-4" />
              <span>Arkiver</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive">
              <Trash className="h-4 w-4" />
              <span>Slett</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
