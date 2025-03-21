
import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PromptCard } from '@/components/ui/prompt-card';
import { MessageInput } from './MessageInput';
import { ChatInputContainer } from './ChatInputContainer';

type ChatInterfaceProps = {
  userName?: string;
  className?: string;
  inputPosition?: 'fixed' | 'relative' | 'static';
};

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  userName = "John",
  className,
  inputPosition = 'relative'
}) => {
  const [promptsVisible, setPromptsVisible] = useState(true);
  
  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
    setPromptsVisible(false);
  };
  
  return (
    <div className={cn("flex flex-col relative w-full h-full overflow-hidden", className)}>
      <div className={cn("flex-1 overflow-y-auto", inputPosition === 'fixed' && "pb-24")}>
        {/* Chat messages would go here */}
      </div>
      
      <ChatInputContainer position={inputPosition} className="mt-auto">
        <MessageInput 
          onSendMessage={handleSendMessage} 
          placeholder="Spør om hva som helst..."
          className="w-full"
        />
      </ChatInputContainer>
    </div>
  );
};
