
import React from 'react';
import { cn } from '@/lib/utils';

type ChatInputContainerProps = {
  children: React.ReactNode;
  className?: string;
  position?: 'fixed' | 'sticky' | 'relative' | 'static';
};

/**
 * A container component that handles positioning for chat inputs
 * Can be configured to position the input differently depending on the context
 */
export const ChatInputContainer: React.FC<ChatInputContainerProps> = ({
  children,
  className,
  position = 'sticky'
}) => {
  return (
    <div 
      className={cn(
        "z-10 p-3 bg-canvas/80 backdrop-blur-sm",
        position === 'fixed' && "fixed bottom-0 left-0 right-0",
        position === 'sticky' && "sticky bottom-0 left-0 right-0",
        position === 'relative' && "relative",
        position === 'static' && "static",
        className
      )}
    >
      <div className="w-full max-w-canvas mx-auto">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
