
import React, { useRef, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { PageContainer } from '@/components/layout/PageContainer';

const Brand = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const orbGradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the orb
    const orb = orbRef.current;
    const orbGradient = orbGradientRef.current;
    if (!orb || !orbGradient) return;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.003;
      
      // Subtle glow pulsation
      const glowIntensity = Math.sin(time) * 0.3 + 1.2;
      orb.style.boxShadow = `0 0 ${25 * glowIntensity}px ${15 * glowIntensity}px rgba(155, 135, 245, ${0.3 * glowIntensity})`;
      
      // Animate the gradient movement
      orbGradient.style.backgroundPosition = `${Math.sin(time * 0.5) * 100}% ${Math.cos(time * 0.7) * 100}%`;
      
      // Subtle size breathing effect
      const sizeVariation = Math.sin(time * 0.6) * 0.02 + 1;
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
                  transition: "box-shadow 2s ease, transform 2s ease"
                }}
              >
                {/* Main orb with drifting gradient effect */}
                <div 
                  ref={orbGradientRef}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #e5deff 0%, #9b87f5 35%, #d946ef 70%, #e5deff 100%)',
                    backgroundSize: '300% 300%',
                    transition: 'background-position 0.5s ease-in-out'
                  }}
                ></div>
                
                {/* Soft overlay gradient to add dimension */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
                    mixBlendMode: 'overlay'
                  }}
                ></div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-medium">Implementation Notes:</h3>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                <li>Multi-toned gradient background that drifts to create a cloud-like effect</li>
                <li>Soft radial overlay for subtle dimension without heavy 3D effects</li>
                <li>Gentle pulsating glow that mimics an ethereal presence</li>
                <li>Subtle breathing animation for organic feel</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  );
};

export default Brand;
