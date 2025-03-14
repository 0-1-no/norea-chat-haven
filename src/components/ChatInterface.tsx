import React from 'react';
import { PromptCard } from '@/components/PromptCard';

interface ChatInterfaceProps {
  userName: string;
  className?: string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ userName, className }) => {
  const prompts = [
    "Explain quantum computing to a 5 year old",
    "Write a poem about the stars",
    "Translate 'hello world' to Spanish",
    "Summarize the plot of Hamlet",
  ];

  return (
    <div className={`flex flex-col h-full p-4 ${className}`}>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Welcome, {userName}</h2>
        <p className="text-gray-600">How can I assist you today?</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {prompts.map((prompt, index) => (
          <PromptCard 
            key={index} 
            text={prompt} 
          />
        ))}
      </div>

      <div className="mt-4">
        <textarea
          className="w-full h-24 p-3 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-norea-purple/40 transition-all resize-none"
          placeholder="Type your message here..."
        />
        <button className="w-full mt-2 py-2 px-4 bg-norea-purple text-white rounded-lg hover:bg-norea-dark-purple transition-colors duration-200">
          Send
        </button>
      </div>
    </div>
  );
};
