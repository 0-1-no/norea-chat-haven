
import React from 'react';

export const SidebarTestFooter: React.FC = () => {
  return (
    <div className="bg-sidebar border-t border-sidebar-border p-3 text-sidebar-foreground z-10">
      <div className="flex items-center justify-center bg-sidebar-accent rounded-lg p-2">
        <p className="text-sm font-medium">Test Footer Component</p>
      </div>
    </div>
  );
};
