
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const SidebarSearch: React.FC = () => {
  return (
    <div className="px-3 mb-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Søk"
          className="w-full pl-9 h-9 bg-background text-sm"
        />
      </div>
    </div>
  );
};
