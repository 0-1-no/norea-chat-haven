import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PromptCard } from '@/components/ui/prompt-card';
import { MessageInput } from './MessageInput';
type ChatInterfaceProps = {
  userName?: string;
  className?: string;
};
export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  userName = "John",
  className
}) => {
  const [promptsVisible, setPromptsVisible] = useState(true);
  const suggestedPrompts = [{
    text: "Skriv en huskeliste for et personlig prosjekt",
    icon: "document"
  }, {
    text: "Lag et svar på et jobbtilbud",
    icon: "email"
  }, {
    text: "Oppsummer denne artikkelen i ett avsnitt",
    icon: "document"
  }, {
    text: "Hvordan fungerer AI teknisk sett",
    icon: "settings"
  }];
  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
    setPromptsVisible(false);
  };
  const handleRefreshPrompts = () => {
    // Here you would typically fetch new prompts
    console.log("Refreshing prompts");
  };
  return <div className={cn("flex flex-col h-full relative px-4 py-6", className)}>
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center">
        {promptsVisible}
      </div>
      
      <div className="mt-auto max-w-3xl mx-auto w-full">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>;
};