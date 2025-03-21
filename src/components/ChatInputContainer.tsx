
import React from 'react';
import { cn } from '@/lib/utils';

type ChatInputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A container component that handles positioning for chat inputs
 * Always fixed to the bottom of the viewport
 */
export const ChatInputContainer: React.FC<ChatInputContainerProps> = ({
  children,
  className
}) => {
  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-sm border-t border-surface-border",
        className
      )}
    >
      <div className="w-full max-w-canvas mx-auto">
        <div className="max-w-3xl mx-auto p-3">
          {children}
        </div>
      </div>
    </div>
  );
};
