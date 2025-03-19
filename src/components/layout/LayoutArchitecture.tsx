
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export const LayoutArchitecture: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Layout Architecture</h2>
      <p className="text-muted-foreground">
        The Norea application follows a structured layout architecture with distinct layers that provide a consistent user experience across all screens.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">1. Backdrop Layer</h3>
            <div className="h-32 bg-backdrop rounded-md flex items-center justify-center mb-4">
              <span className="text-backdrop-foreground">Backdrop</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The backdrop is the outermost layer of the application, providing a consistent background for all pages.
              Gray on desktop, white on mobile. Uses <code className="bg-muted px-1 py-0.5 rounded text-xs">--backdrop-background</code> token.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">2. Sidebar Layer</h3>
            <div className="h-32 bg-sidebar rounded-md flex items-center justify-center mb-4">
              <span className="text-sidebar-foreground">Sidebar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The sidebar provides navigation through the application and uses <code className="bg-muted px-1 py-0.5 rounded text-xs">--sidebar-background</code> token.
              Managed by SidebarProvider, toggleable on desktop, overlay on mobile. Contains Header, Content, and Footer sections.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">3. Canvas Layer</h3>
            <div className="h-32 bg-canvas rounded-md flex items-center justify-center mb-4 border border-canvas-border">
              <span className="text-canvas-foreground">Canvas</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The canvas is the main content frame that creates visual elevation above the backdrop on desktop.
              Full-screen on mobile. Uses <code className="bg-muted px-1 py-0.5 rounded text-xs">--canvas-background</code> token and has shadow and border styling on desktop.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">4. Content Area</h3>
            <div className="h-32 bg-surface rounded-md flex items-center justify-center border border-surface-border mb-4">
              <span className="text-surface-foreground">Content Area</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The content area is the innermost container that holds the actual page content. Provides consistent padding and a max-width constraint for optimal readability.
              Subpages rendered inside this container don't need to define their own outer padding.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-medium mb-4">Layout Architecture Diagram</h3>
        <pre className="text-sm overflow-auto p-4 bg-canvas rounded border border-canvas-border">
{`<SidebarProvider> (manages sidebar state)
  <div> (backdrop layer - global container)
    <Sidebar> (sidebar layer - navigation)
      <SidebarHeader>
      <SidebarContent>
      <SidebarFooter>
    </Sidebar>
    <div> (canvas layer - main content frame)
      <Header>
        <SidebarTrigger>
      </Header>
      <div> (content area - inner container)
        <div> (page content)
          {children} (subpage content goes here)
        </div>
      </div>
    </div>
  </div>
</SidebarProvider>`}
        </pre>
      </div>
    </section>
  );
};
