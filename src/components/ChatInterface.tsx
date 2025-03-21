
import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PromptCard } from '@/components/ui/prompt-card';
import { MessageInput } from './MessageInput';
import { ChatInputContainer } from './ChatInputContainer';

type ChatInterfaceProps = {
  userName?: string;
  className?: string;
};

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  userName = "John",
  className
}) => {
  const [promptsVisible, setPromptsVisible] = useState(true);
  
  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
    setPromptsVisible(false);
  };
  
  return (
    <div className={cn("flex flex-col relative w-full h-full overflow-hidden", className)}>
      {/* Main content area with padding at the bottom to account for fixed input */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Chat messages would go here */}
      </div>
      
      {/* Fixed chat input container at bottom */}
      <ChatInputContainer>
        <MessageInput 
          onSendMessage={handleSendMessage} 
          placeholder="Spør om hva som helst..."
          className="w-full"
        />
      </ChatInputContainer>
    </div>
  );
};
