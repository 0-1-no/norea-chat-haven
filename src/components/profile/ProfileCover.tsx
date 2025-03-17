
import React from 'react';
import { Camera, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileCoverProps {
  coverImage?: string;
  profileImage?: string;
}

export const ProfileCover: React.FC<ProfileCoverProps> = ({ 
  coverImage = '/lovable-uploads/c135cfac-c380-4ef6-a2df-8e8b5b9c9e84.png', 
  profileImage = '/placeholders/user.jpg' 
}) => {
  return (
    <div className="relative w-full mb-24">
      {/* Cover image */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Cover image buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full bg-black/50 hover:bg-black/70 border-none"
          >
            <Camera className="h-5 w-5 text-white" />
          </Button>
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full bg-black/50 hover:bg-black/70 border-none"
          >
            <X className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
      
      {/* Profile image */}
      <div className="absolute -bottom-20 left-8">
        <div className="relative w-36 h-36 rounded-full border-4 border-background bg-gray-100 overflow-hidden">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/200x200/cccccc/333333?text=JD';
            }}
          />
          <Button 
            size="icon" 
            variant="secondary" 
            className="absolute bottom-2 right-2 rounded-full bg-black/50 hover:bg-black/70 border-none h-8 w-8"
          >
            <Camera className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};
