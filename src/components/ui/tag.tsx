
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type TagProps = {
  text: string;
  variant?: 'default' | 'outline' | 'brand';
  size?: 'sm' | 'md';
  onRemove?: () => void;
  className?: string;
};

export const Tag: React.FC<TagProps> = ({ 
  text, 
  variant = 'default',
  size = 'md',
  onRemove,
  className 
}) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1 font-medium rounded-md",
        size === 'sm' && "text-xs px-2 py-0.5",
        size === 'md' && "text-sm px-2.5 py-1",
        variant === 'default' && "bg-muted text-muted-foreground",
        variant === 'outline' && "bg-transparent border border-muted text-muted-foreground",
        variant === 'brand' && "bg-gradient-to-r from-primary to-primary-hover text-primary-foreground border border-primary/30",
        className
      )}
    >
      <span>{text}</span>
      {onRemove && (
        <button 
          onClick={onRemove}
          className="ml-1 rounded-full hover:bg-surface-hover p-0.5"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
};
