
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SidebarNewChat: React.FC = () => {
  return (
    <div className="px-3 mb-3 w-full">
      <Button 
        className="w-full justify-start text-sm"
        variant="outline"
      >
        <Plus className="w-4 h-4 mr-2" />
        <span>Ny samtale</span>
      </Button>
    </div>
  );
};
