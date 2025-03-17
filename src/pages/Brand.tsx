
import React, { useRef, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { PageContainer } from '@/components/layout/PageContainer';

const Brand = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const orbGradientRef = useRef<HTMLDivElement>(null);
  const orbOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the orb
    const orb = orbRef.current;
    const orbGradient = orbGradientRef.current;
    const orbOverlay = orbOverlayRef.current;
    if (!orb || !orbGradient || !orbOverlay) return;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.004; // Slightly faster animation
      
      // Enhanced glow pulsation
      const glowIntensity = Math.sin(time) * 0.4 + 1.3;
      orb.style.boxShadow = `0 0 ${30 * glowIntensity}px ${20 * glowIntensity}px rgba(155, 135, 245, ${0.35 * glowIntensity})`;
      
      // More pronounced gradient movement
      orbGradient.style.backgroundPosition = `${Math.sin(time * 0.6) * 150}% ${Math.cos(time * 0.8) * 150}%`;
      
      // Additional overlay animation
      orbOverlay.style.transform = `rotate(${Math.sin(time * 0.3) * 10}deg)`;
      orbOverlay.style.opacity = `${Math.sin(time * 0.5) * 0.2 + 0.6}`;
      
      // Subtle size breathing effect
      const sizeVariation = Math.sin(time * 0.5) * 0.03 + 1;
      orb.style.transform = `scale(${sizeVariation})`;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <PageContainer title="Brand" showBackButton={false}>
      <div className="space-y-10">
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
              The glowing orb represents Norea AI's ethereal intelligence, with cloud-like movements that symbolize flowing thoughts and ideas.
            </p>
            
            <div className="flex items-center justify-center py-16">
              <div 
                ref={orbRef}
                className="w-32 h-32 rounded-full relative overflow-hidden"
                style={{
                  transition: "box-shadow 1.5s ease, transform 1.5s ease"
                }}
              >
                {/* Main orb with enhanced drifting gradient effect */}
                <div 
                  ref={orbGradientRef}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #e5deff 0%, #8B5CF6 30%, #D946EF 60%, #e5deff 100%)',
                    backgroundSize: '400% 400%',
                    transition: 'background-position 0.4s ease-in-out'
                  }}
                ></div>
                
                {/* Additional animated swirl overlay */}
                <div 
                  ref={orbOverlayRef}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0) 60%)',
                    mixBlendMode: 'overlay',
                    transition: 'transform 1s ease, opacity 1s ease'
                  }}
                ></div>
                
                {/* Subtle wave pattern */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    backgroundImage: 'repeating-radial-gradient(circle at center, transparent 0, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 20px)',
                    animation: 'pulse 6s infinite alternate'
                  }}
                ></div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-medium">Implementation Notes:</h3>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                <li>Multi-toned gradient background with enhanced contrast and vivid colors</li>
                <li>Multiple overlapping gradient layers creating depth and dynamic movement</li>
                <li>More pronounced and faster animation for improved visibility</li>
                <li>Additional animated elements including rotating overlay and wave pattern</li>
                <li>Gentle breathing animation for organic feel</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  );
};

export default Brand;
