
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

const Layout = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);

  // Update sidebar state when screen size changes
  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const layoutContent = (
    <div className="container max-w-6xl py-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Layout Structure</h1>
        <p className="text-muted-foreground">
          An overview of the layout architecture in the Norea design system.
        </p>
      </div>

      <Separator />
      
      <div className="space-y-8">
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
        
        <Separator />
        
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
        
        <Separator />
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Developer Guidelines</h2>
          <div className="bg-muted p-6 rounded-lg space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Component Structure</h3>
              <p className="text-sm">
                Keep components small and focused, ideally under 150 lines of code. Use composition to build complex UIs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Design Token Usage</h3>
              <p className="text-sm">
                Always use design tokens instead of hardcoded values for colors, spacing, shadows, etc.
                This ensures consistency and makes theme changes easier.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Responsive Design</h3>
              <p className="text-sm">
                Design for mobile first, then expand to larger screens. Use Tailwind's responsive prefixes (sm:, md:, lg:, etc.)
                to adjust layouts based on screen size.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Accessibility</h3>
              <p className="text-sm">
                Ensure all components are accessible. Use proper semantic HTML, provide adequate color contrast,
                support keyboard navigation, and include ARIA attributes where needed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-full flex overflow-hidden bg-backdrop">
      {/* Sidebar component - positioned as overlay on mobile */}
      <div className={`
        ${isMobile ? 'fixed z-50 transition-transform duration-300 ease-in-out' : ''}
        ${(isMobile && !isSidebarOpen) ? '-translate-x-full' : 'translate-x-0'}
      `}>
        {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      </div>
      
      {/* Canvas - where main content is rendered */}
      <div className="flex-1 md:p-content-md flex items-center justify-center">
        <div className={`
          w-full h-full 
          max-w-canvas 
          bg-canvas 
          md:rounded-lg 
          md:border md:border-canvas-border 
          md:shadow-surface-sm 
          flex flex-col 
          overflow-hidden
        `}>
          {!isSidebarOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 left-4 z-10"
              onClick={toggleSidebar}
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
          )}
          
          <Header 
            title="Layout" 
            showBackButton={false}
          />
          
          <div className="flex-1 overflow-y-auto">
            {layoutContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
