
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
      "p-3 rounded-lg mb-2 max-w-lg animate-fade-in",
      type === 'retrieve' ? "bg-blue-50 border border-blue-200" : "bg-green-50 border border-green-200",
      className
    )}>
      <div className="flex items-start gap-2">
        <div className={cn(
          "p-1.5 rounded-full flex-shrink-0",
          type === 'retrieve' ? "bg-blue-100" : "bg-green-100"
        )}>
          {type === 'retrieve' ? (
            <Brain className="h-4 w-4 text-blue-500" /> 
          ) : (
            <Sparkles className="h-4 w-4 text-green-500" />
          )}
        </div>
        
        <div>
          <p className={cn(
            "text-xs font-medium mb-0.5",
            type === 'retrieve' ? "text-blue-600" : "text-green-600"
          )}>
            {type === 'retrieve' ? 'Husker dette:' : 'Lagrer nytt minne:'}
          </p>
          <p className="text-sm text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};
