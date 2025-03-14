
import React from 'react';
import { Search } from 'lucide-react';

export const SidebarSearch: React.FC = () => {
  return (
    <div className="px-3 mb-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Søk"
          className="bg-gray-100 w-full rounded-md py-2 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-norea-purple/40 transition-all"
        />
      </div>
    </div>
  );
};
