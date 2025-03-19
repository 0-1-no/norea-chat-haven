import React from 'react';
import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

// This component is now deprecated in favor of using the shadcn Sidebar directly
// Keeping a minimal version for backward compatibility if needed
export const Sidebar: React.FC = () => {
  return (
    <div className="hidden">
      {/* This component has been replaced by shadcn sidebar implementation */}
    </div>
  );
};
