
import React, { useEffect, useRef } from 'react';
import { Separator } from "@/components/ui/separator";
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

const Brand = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);
  const orbRef = useRef<HTMLDivElement>(null);

  // Update sidebar state when screen size changes
  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Animation for the orb
    const orb = orbRef.current;
    if (!orb) return;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      
      // Pulsating glow effect
      const glowIntensity = Math.sin(time) * 0.5 + 1.5;
      orb.style.boxShadow = `0 0 ${20 * glowIntensity}px ${10 * glowIntensity}px rgba(155, 135, 245, ${0.4 * glowIntensity})`;
      
      // Subtle size variation
      const sizeVariation = Math.sin(time * 0.8) * 0.03 + 1;
      orb.style.transform = `scale(${sizeVariation})`;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const brandContent = (
    <div className="container max-w-6xl py-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Brand</h1>
        <p className="text-muted-foreground">
          The Norea brand assets and elements that define our visual identity.
        </p>
      </div>

      <Separator />

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Logo</h2>
          <p className="text-muted-foreground">
            The Norea logo should be used consistently across all platforms and applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-white p-8 rounded-lg shadow flex items-center justify-center border">
              <div className="text-3xl font-bold text-gray-900">Norea</div>
            </div>
            
            <div className="bg-purple-700 p-8 rounded-lg shadow flex items-center justify-center">
              <div className="text-3xl font-bold text-white">Norea</div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-700 to-purple-400 p-8 rounded-lg shadow flex items-center justify-center">
              <div className="text-3xl font-bold text-white">Norea</div>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Norea AI Orb</h2>
          <p className="text-muted-foreground">
            The glowing orb represents Norea AI's living, dynamic presence and intelligence.
          </p>
          
          <div className="flex items-center justify-center py-16">
            <div 
              ref={orbRef}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 relative"
              style={{
                transition: "box-shadow 0.5s ease, transform 0.5s ease"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-70"></div>
              <div className="absolute top-1/4 left-1/4 w-1/6 h-1/6 rounded-full bg-white/80 blur-sm"></div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-medium">Implementation Notes:</h3>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
              <li>The orb uses a gradient background from light purple to primary purple</li>
              <li>Animation includes a pulsating glow effect and subtle size variations</li>
              <li>Light reflections are added with semi-transparent white overlays</li>
            </ul>
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
            title="Brand" 
            showBackButton={false}
          />
          
          <div className="flex-1 overflow-y-auto">
            {brandContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
