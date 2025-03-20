
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
  
  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
    setPromptsVisible(false);
  };
  
  return (
    <div className={cn("flex flex-col relative w-full max-w-full overflow-hidden flex-grow justify-center items-center", className)}>
      <MessageInput 
        onSendMessage={handleSendMessage} 
        placeholder="Spør om hva som helst..."
        className="mb-1"
      />
    </div>
  );
};
