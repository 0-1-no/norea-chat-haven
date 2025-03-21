import React, { useState } from 'react';
import { cn } from '@/lib/utils';
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
  return <div className={cn("flex flex-col w-full h-full", className)}>
      {/* Messages area */}
      
      
      {/* Input area */}
      <ChatInputContainer>
        <MessageInput onSendMessage={handleSendMessage} placeholder="Spør om hva som helst..." className="w-full" />
      </ChatInputContainer>
    </div>;
};