
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { LayoutArchitecture } from './LayoutArchitecture';
import { ResponsiveBehavior } from './ResponsiveBehavior';
import { DeveloperGuidelines } from './DeveloperGuidelines';

export const LayoutContent: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Layout Structure</h1>
        <p className="text-muted-foreground">
          An overview of the layout architecture in the Norea design system.
        </p>
      </div>

      <Separator />
      
      <div className="space-y-8">
        <LayoutArchitecture />
        
        <Separator />
        
        <ResponsiveBehavior />
        
        <Separator />
        
        <DeveloperGuidelines />
      </div>
    </div>
  );
};
