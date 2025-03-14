
import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PromptCard } from './PromptCard';
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

  const suggestedPrompts = [
    {
      text: "Write a to-do list for a personal project or task",
      icon: "document"
    },
    {
      text: "Generate an email reply to a job offer",
      icon: "email"
    },
    {
      text: "Summarise this article or text for me in one paragraph",
      icon: "document"
    },
    {
      text: "How does AI work in a technical capacity",
      icon: "settings"
    }
  ];
  
  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
    setPromptsVisible(false);
  };
  
  const handleRefreshPrompts = () => {
    // Here you would typically fetch new prompts
    console.log("Refreshing prompts");
  };

  return (
    <div className={cn(
      "flex flex-col h-full relative px-4 py-6",
      className
    )}>
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center">
        {promptsVisible && (
          <div className="max-w-xl w-full space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-semibold">
                Hi there, <span className="text-norea-purple">{userName}</span>
              </h1>
              <p className="text-3xl font-semibold">What would you like to know?</p>
              <p className="text-gray-500 mt-2">
                Use one of the most common prompts below or use your own to begin
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 mt-8">
              {suggestedPrompts.map((prompt, index) => (
                <PromptCard
                  key={index}
                  text={prompt.text}
                  icon={prompt.icon as any}
                  onClick={() => handleSendMessage(prompt.text)}
                  className={`animate-slide-up delay-${index * 50}`}
                />
              ))}
            </div>
            
            <button 
              className="flex items-center gap-2 mx-auto mt-6 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={handleRefreshPrompts}
            >
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Refresh Prompts</span>
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-auto max-w-3xl mx-auto w-full">
        <MessageInput 
          onSendMessage={handleSendMessage} 
        />
      </div>
    </div>
  );
};
