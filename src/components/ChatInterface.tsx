
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
    <div className={cn("flex flex-col relative w-full h-full overflow-hidden", className)}>
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Chat messages would go here */}
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-3 z-10 flex justify-center w-full" style={{ maxWidth: "inherit" }}>
        <MessageInput 
          onSendMessage={handleSendMessage} 
          placeholder="Spør om hva som helst..."
          className="w-full max-w-3xl mx-auto"
        />
      </div>
    </div>
  );
};
