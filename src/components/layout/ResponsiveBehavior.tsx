
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const ResponsiveBehavior: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Responsive Behavior</h2>
      <p className="text-muted-foreground">
        The layout adapts to different screen sizes with these key behaviors:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">Desktop</h3>
            <div className="relative h-64 border rounded-md p-4 mb-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-sidebar border-r"></div>
              <div className="absolute left-16 top-0 right-0 bottom-0 bg-canvas p-2">
                <div className="h-full bg-surface rounded-md flex items-center justify-center">
                  <span>Content Area</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              On desktop, the sidebar is visible by default and can be collapsed with the toggle button.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">Mobile</h3>
            <div className="relative h-64 border rounded-md p-4 mb-4">
              <div className="absolute inset-0 bg-canvas p-2">
                <div className="h-full bg-surface rounded-md flex items-center justify-center">
                  <span>Content Area</span>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-8 h-8 m-4 bg-surface rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-muted rounded-sm"></div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              On mobile, the sidebar is hidden by default and can be opened with the menu button.
              It appears as an overlay on the content.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
