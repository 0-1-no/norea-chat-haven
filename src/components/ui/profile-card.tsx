
import React from 'react';
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
  showChat?: boolean;
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
  showChat = true,
  stackPosition = 'front',
  rotation = 0,
}) => {
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
        "relative shadow-lg rounded-3xl overflow-hidden w-64 h-96 cursor-pointer transform transition-all duration-300 ease-in-out",
        getStackStyles(),
        customRotation,
        className
      )}
      onClick={onClick}
    >
      <div className={cn("w-full h-full", backgroundColor)}>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={name}
            className="w-full h-full object-cover object-center opacity-80" 
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <div>
            <h2 className="text-2xl font-bold drop-shadow-md">{name}</h2>
            {tagline && (
              <p className="text-sm opacity-90 mt-1">{tagline}</p>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            {creatorImageSrc && (
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/30 mr-2">
                  <img 
                    src={creatorImageSrc} 
                    alt={creatorName || "Creator"} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{creatorName}</p>
                  {creatorUsername && (
                    <p className="text-xs opacity-80">{creatorUsername}</p>
                  )}
                </div>
              </div>
            )}
            
            {showChat && (
              <button className="bg-white text-black font-medium text-sm py-1.5 px-3 rounded-full flex items-center">
                Chat <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
