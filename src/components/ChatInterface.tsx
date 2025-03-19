
import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MessageInput } from './MessageInput';
import { PromptCard } from './PromptCard';

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
    <div className={cn("flex flex-col w-full max-w-full", className)}>
      <MessageInput 
        onSendMessage={handleSendMessage} 
        placeholder="Ask whatever you want..."
      />
    </div>
  );
};
