
import React from 'react';
import { cn } from '@/lib/utils';

type ChatInputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A container component that handles positioning for chat inputs
 */
export const ChatInputContainer: React.FC<ChatInputContainerProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="w-full max-w-full mx-auto">
        {children}
      </div>
    </div>
  );
};
