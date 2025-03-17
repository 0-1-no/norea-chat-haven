
import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FollowUpPrompt {
  id: string;
  text: string;
}

interface FollowUpPromptsProps {
  prompts: FollowUpPrompt[];
  onPromptClick: (prompt: string) => void;
  className?: string;
}

export const FollowUpPrompts: React.FC<FollowUpPromptsProps> = ({
  prompts,
  onPromptClick,
  className
}) => {
  if (!prompts.length) return null;
  
  return (
    <div className={cn("space-y-1.5 mt-3", className)}>
      <div className="flex items-center gap-2 text-muted-foreground mb-1">
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium">Relaterte spørsmål</span>
      </div>
      
      <div className="space-y-1.5">
        {prompts.map((prompt) => (
          <button
            key={prompt.id}
            className="w-full flex items-center justify-between px-4 py-3 text-left text-sm border border-border rounded-lg hover:bg-surface-hover transition-colors"
            onClick={() => onPromptClick(prompt.text)}
          >
            <span className="mr-2">{prompt.text}</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};
