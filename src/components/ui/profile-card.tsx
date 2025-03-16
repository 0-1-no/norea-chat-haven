
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ProfileCardProps = {
  name: string;
  tagline?: string;
  imageSrc: string;
  creatorName?: string;
  creatorUsername?: string;
  creatorImageSrc?: string;
  backgroundColor?: string;
  className?: string;
  onClick?: () => void;
  stackPosition?: 'front' | 'middle' | 'back';
  rotation?: number;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  tagline,
  imageSrc,
  creatorName,
  creatorUsername,
  creatorImageSrc,
  backgroundColor = 'bg-gradient-to-r from-red-500 to-red-700',
  className,
  onClick,
  stackPosition = 'front',
  rotation = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getStackStyles = () => {
    switch (stackPosition) {
      case 'back':
        return 'z-0 -rotate-6 scale-95 opacity-70';
      case 'middle':
        return 'z-10 -rotate-2 scale-98 opacity-90';
      case 'front':
      default:
        return 'z-20 rotate-0 scale-100 opacity-100';
    }
  };

  const customRotation = rotation !== 0 ? `rotate-[${rotation}deg]` : '';

  return (
    <div 
      className={cn(
        "relative shadow-lg rounded-3xl overflow-hidden w-64 h-96 cursor-pointer transform transition-all duration-300 ease-in-out group",
        getStackStyles(),
        customRotation,
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("w-full h-full", backgroundColor)}>
        {/* Top-right arrow indicator */}
        <div className="absolute top-4 right-4 z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight className="w-6 h-6 text-white/80 group-hover:text-white" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={name}
            className="w-full h-full object-cover object-center opacity-80 transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        {/* Gradient overlay at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="z-10">
            <h2 className="text-2xl font-bold drop-shadow-md">{name}</h2>
            {tagline && (
              <p className="text-sm opacity-90 mt-1 line-clamp-2">{tagline}</p>
            )}
            
            {creatorImageSrc && (
              <div className="flex items-center mt-3">
                <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white/30 mr-2">
                  <img 
                    src={creatorImageSrc} 
                    alt={creatorName || "Creator"} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs opacity-80">
                  {creatorName}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
