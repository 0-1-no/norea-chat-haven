
import React from 'react';
import { PromptCard } from '@/components/PromptCard';
import { FileText, Mail, MessageSquare, RefreshCcw } from 'lucide-react';

interface ChatInterfaceProps {
  userName: string;
  className?: string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ userName, className }) => {
  const prompts = [
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

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">
            Hi there, <span className="text-norea-purple">{userName}</span>
          </h1>
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            What would you like to know?
          </h2>
          <p className="text-gray-600 mb-8">
            Use one of the most common prompts below or use your own to begin
          </p>
        </div>

        <div className="w-full space-y-4">
          {prompts.map((prompt, index) => (
            <PromptCard 
              key={index} 
              text={prompt.text} 
              icon={prompt.icon as 'chat' | 'settings' | 'document' | 'email'}
            />
          ))}
        </div>

        <button className="mt-8 flex items-center gap-2 text-gray-500 hover:text-norea-purple transition-colors">
          <RefreshCcw className="w-4 h-4" />
          <span>Refresh Prompts</span>
        </button>
      </div>

      <div className="p-4 border-t">
        <textarea
          className="w-full h-24 p-3 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-norea-purple/40 transition-all resize-none"
          placeholder="Ask whatever you want..."
        />
        <div className="flex justify-between items-center mt-2">
          <div className="text-xs text-gray-400">0/1000</div>
          <button className="py-2 px-8 bg-norea-purple text-white rounded-lg hover:bg-norea-dark-purple transition-colors duration-200">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
