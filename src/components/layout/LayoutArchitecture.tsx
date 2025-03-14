
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export const LayoutArchitecture: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Layout Architecture</h2>
      <p className="text-muted-foreground">
        The Norea application follows a three-layer layout structure that provides a consistent user experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">Backdrop</h3>
            <div className="h-32 bg-backdrop rounded-md flex items-center justify-center mb-4">
              <span className="text-backdrop-foreground">Backdrop Layer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The backdrop is the outermost layer of the application, providing a consistent background for all pages.
              It uses <code className="bg-muted px-1 py-0.5 rounded text-xs">--backdrop-background</code> and <code className="bg-muted px-1 py-0.5 rounded text-xs">--backdrop-foreground</code> tokens.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">Sidebar</h3>
            <div className="h-32 bg-sidebar rounded-md flex items-center justify-center mb-4">
              <span className="text-sidebar-foreground">Sidebar Layer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The sidebar provides navigation through the application and uses <code className="bg-muted px-1 py-0.5 rounded text-xs">--sidebar-background</code> and related tokens.
              It can be collapsed to provide more space for the main content.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">Canvas</h3>
            <div className="h-32 bg-canvas rounded-md flex items-center justify-center mb-4">
              <span className="text-canvas-foreground">Canvas Layer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The canvas is the main content area of the application. It uses <code className="bg-muted px-1 py-0.5 rounded text-xs">--canvas-background</code> and
              <code className="bg-muted px-1 py-0.5 rounded text-xs">--canvas-foreground</code> tokens.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
