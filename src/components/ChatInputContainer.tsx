
import React from 'react';
import { cn } from '@/lib/utils';

type ChatInputContainerProps = {
  children: React.ReactNode;
  className?: string;
  position?: 'fixed' | 'relative' | 'static';
};

/**
 * A container component that handles positioning for chat inputs
 * Can be configured to position the input differently depending on the context
 */
export const ChatInputContainer: React.FC<ChatInputContainerProps> = ({
  children,
  className,
  position = 'fixed'
}) => {
  return (
    <div 
      className={cn(
        "z-10 p-3 w-full",
        position === 'fixed' && "fixed bottom-0 left-0 right-0",
        className
      )}
    >
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  );
};
