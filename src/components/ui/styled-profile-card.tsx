
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export type StyledProfileCardProps = {
  name: string;
  tagline?: string;
  description?: string;
  mainImageSrc: string;
  accentImageSrc?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  className?: string;
  onClick?: () => void;
  tags?: string[];
  creator?: {
    name: string;
    imageSrc?: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
  glowEffect?: boolean;
  overlayEffect?: 'none' | 'gradient' | 'duotone' | 'vignette';
};

export const StyledProfileCard: React.FC<StyledProfileCardProps> = ({
  name,
  tagline,
  description,
  mainImageSrc,
  accentImageSrc,
  backgroundColor = 'bg-gradient-to-tr from-rose-500 via-purple-500 to-violet-500',
  textColor = 'text-white',
  accentColor = 'text-pink-300',
  className,
  onClick,
  tags = [],
  creator,
  stats = [],
  glowEffect = false,
  overlayEffect = 'gradient',
}) => {
  const getOverlayClass = () => {
    switch (overlayEffect) {
      case 'gradient':
        return 'bg-gradient-to-t from-black/60 via-black/20 to-transparent';
      case 'duotone':
        return 'bg-gradient-to-tr from-purple-900/40 to-rose-900/30 mix-blend-color';
      case 'vignette':
        return 'bg-radial-gradient from-transparent to-black/70';
      case 'none':
      default:
        return '';
    }
  };

  return (
    <div 
      className={cn(
        "relative rounded-3xl overflow-hidden w-[320px] h-[450px] cursor-pointer group",
        className,
        backgroundColor,
        glowEffect && "shadow-xl shadow-purple-500/20"
      )}
      onClick={onClick}
    >
      {/* Main image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={mainImageSrc} 
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        
        {/* Overlay effect */}
        <div className={cn("absolute inset-0", getOverlayClass())} />
        
        {/* Accent image (positioned to the side) */}
        {accentImageSrc && (
          <div className="absolute -right-16 top-1/4 w-56 h-56 rounded-full overflow-hidden border-4 border-white/20 opacity-70 group-hover:opacity-90 transition-opacity duration-500">
            <img 
              src={accentImageSrc} 
              alt="Accent" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Top decoration with glow */}
      {glowEffect && (
        <div className="absolute top-6 left-6 z-10">
          <Sparkles className={cn("w-6 h-6", accentColor)} />
        </div>
      )}
      
      {/* Top-right arrow indicator */}
      <div className="absolute top-6 right-6 z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-70 group-hover:opacity-100">
        <ArrowUpRight className={cn("w-6 h-6", textColor)} />
      </div>
      
      {/* Content wrapper */}
      <div className={cn("absolute inset-0 flex flex-col justify-between p-8", textColor)}>
        {/* Top area - tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={cn("text-xs px-3 py-1 rounded-full backdrop-blur-sm bg-white/10", textColor)}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Bottom content area */}
        <div className="space-y-4">
          {/* Title and tagline */}
          <div>
            <h2 className="text-3xl font-bold drop-shadow-md">{name}</h2>
            {tagline && (
              <p className={cn("text-lg mt-1 font-medium", accentColor)}>{tagline}</p>
            )}
            {description && (
              <p className="text-sm mt-2 opacity-90 line-clamp-3">{description}</p>
            )}
          </div>
          
          {/* Stats row */}
          {stats.length > 0 && (
            <div className="flex gap-4 pt-2">
              {stats.map((stat, index) => (
                <div key={index} className="backdrop-blur-sm bg-black/20 rounded-lg px-3 py-2">
                  <p className="text-sm opacity-80">{stat.label}</p>
                  <p className="text-lg font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Creator info */}
          {creator && (
            <div className="flex items-center pt-2">
              {creator.imageSrc ? (
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/30 mr-2">
                  <img 
                    src={creator.imageSrc} 
                    alt={creator.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-white/20 mr-2 flex items-center justify-center">
                  <span className="text-xs">{creator.name.charAt(0)}</span>
                </div>
              )}
              <p className="text-sm opacity-80">By {creator.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
