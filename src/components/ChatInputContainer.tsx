
import React from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from './ui/sidebar';

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
  // Get sidebar state to adjust positioning accordingly
  const { state } = useSidebar();
  
  return (
    <div 
      className={cn(
        "z-10 p-3 w-full",
        position === 'fixed' && "fixed bottom-0",
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
