
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ImageCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags?: string[];
  actionLabel?: string;
  onClick?: () => void;
  className?: string;
};

export const ImageCard: React.FC<ImageCardProps> = ({ 
  title, 
  description,
  imageSrc,
  imageAlt,
  tags,
  actionLabel,
  onClick, 
  className 
}) => {
  return (
    <div 
      className={cn(
        "bg-surface border border-surface-border rounded-lg overflow-hidden cursor-pointer",
        "hover:border-primary hover:bg-surface-hover hover:shadow-surface-md transition-all duration-200",
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      
      <div className="p-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-muted text-xs font-medium px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-surface-foreground mb-3">{description}</p>
        
        {actionLabel && (
          <div className="flex items-center text-sm font-medium text-primary">
            {actionLabel}
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </div>
        )}
      </div>
    </div>
  );
};
