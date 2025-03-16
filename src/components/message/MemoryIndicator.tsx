
import React from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

type MemoryType = 'retrieve' | 'store';

interface MemoryIndicatorProps {
  type: MemoryType;
  content: string;
  className?: string;
}

export const MemoryIndicator: React.FC<MemoryIndicatorProps> = ({ 
  type, 
  content,
  className 
}) => {
  return (
    <div className={cn(
      "p-2 rounded-lg mb-1 text-xs max-w-lg animate-fade-in",
      type === 'retrieve' ? "bg-blue-50 border border-blue-200" : "bg-green-50 border border-green-200",
      className
    )}>
      <div className="flex items-start gap-1.5">
        <div className={cn(
          "p-1 rounded-full flex-shrink-0",
          type === 'retrieve' ? "bg-blue-100" : "bg-green-100"
        )}>
          {type === 'retrieve' ? (
            <Brain className="h-3 w-3 text-blue-500" /> 
          ) : (
            <Sparkles className="h-3 w-3 text-green-500" />
          )}
        </div>
        
        <div>
          <span className={cn(
            "font-medium mr-1",
            type === 'retrieve' ? "text-blue-600" : "text-green-600"
          )}>
            {type === 'retrieve' ? 'Husker:' : 'Lagrer:'}
          </span>
          <span className="text-gray-700">{content}</span>
        </div>
      </div>
    </div>
  );
};
