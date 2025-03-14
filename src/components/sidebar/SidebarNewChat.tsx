
import React from 'react';
import { Plus } from 'lucide-react';

export const SidebarNewChat: React.FC = () => {
  return (
    <button className="mx-3 px-3 py-2 mb-4 bg-norea-purple text-white rounded-lg flex items-center justify-center gap-2 hover:bg-norea-dark-purple transition-colors duration-200 animate-fade-in">
      <Plus className="w-4 h-4" />
      <span className="text-sm font-medium">Ny samtale</span>
    </button>
  );
};
