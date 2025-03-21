
import React from 'react';
import { cn } from '@/lib/utils';
type ChatInputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A container component that handles positioning for chat inputs
 * Sticky to the bottom of the content area, similar to how the header is sticky to the top
 */
export const ChatInputContainer: React.FC<ChatInputContainerProps> = ({
  children,
  className
}) => {
  return <div className={cn("bg-white shadow-sm", className)}>
      <div className="w-full max-w-canvas mx-auto">
        <div className="max-w-3xl mx-auto p-3 px-0">
          {children}
        </div>
      </div>
    </div>;
};
