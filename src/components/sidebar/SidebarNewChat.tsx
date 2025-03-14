
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SidebarNewChat: React.FC = () => {
  return (
    <div className="px-3 mb-4 w-full">
      <Button 
        className="w-full"
        variant="default"
        fullWidth
      >
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium">Ny samtale</span>
      </Button>
    </div>
  );
};
