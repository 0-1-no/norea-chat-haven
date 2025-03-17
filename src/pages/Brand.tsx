
import React, { useRef, useEffect, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { PageContainer } from '@/components/layout/PageContainer';

const Brand = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const orbGradientRef = useRef<HTMLDivElement>(null);
  const orbOverlayRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Animation for the orb
    const orb = orbRef.current;
    const orbGradient = orbGradientRef.current;
    const orbOverlay = orbOverlayRef.current;
    const particles = particlesRef.current;
    
    if (!orb || !orbGradient || !orbOverlay || !particles) return;

    let animationFrameId: number;
    let time = 0;

    // Create particle elements
    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      
      // Random properties for each particle
      const size = Math.random() * 6 + 2;
      const startAngle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 30 + 5;
      const speed = Math.random() * 0.02 + 0.01;
      const hue = Math.floor(Math.random() * 60) + 240; // Purple-ish hues
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${Math.random() * 0.5 + 0.3})`;
      particle.style.boxShadow = `0 0 ${size * 1.5}px hsla(${hue}, 80%, 60%, 0.6)`;
      
      // Store properties on the element for animation
      particle.dataset.angle = startAngle.toString();
      particle.dataset.distance = distance.toString();
      particle.dataset.speed = speed.toString();
      
      particles.appendChild(particle);
    }

    const animate = () => {
      time += 0.01;
      
      // Enhanced gradient movement - more visible animation
      orbGradient.style.backgroundPosition = `${Math.sin(time * 0.8) * 200}% ${Math.cos(time * 0.5) * 200}%`;
      
      // Faster rotation for overlay
      orbOverlay.style.transform = `rotate(${time * 15}deg)`;
      orbOverlay.style.opacity = `${Math.sin(time * 0.5) * 0.3 + 0.7}`;
      
      // Subtle breathing effect
      const sizeVariation = Math.sin(time * 0.5) * 0.03 + 1;
      orb.style.transform = `scale(${sizeVariation})`;
      
      // Enhanced glow pulsation - more vibrant
      const glowIntensity = Math.sin(time) * 0.5 + 1.5;
      orb.style.boxShadow = `0 0 ${20 * glowIntensity}px ${15 * glowIntensity}px rgba(155, 135, 245, ${0.4 * glowIntensity})`;

      // Animate particles
      const particleElements = particles.children;
      for (let i = 0; i < particleElements.length; i++) {
        const particle = particleElements[i] as HTMLDivElement;
        const angle = parseFloat(particle.dataset.angle || "0") + parseFloat(particle.dataset.speed || "0.01");
        const distance = parseFloat(particle.dataset.distance || "10");
        
        // Update position
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.dataset.angle = angle.toString();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      // Clean up particles
      while (particles.firstChild) {
        particles.removeChild(particles.firstChild);
      }
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
              The ethereal orb represents Norea AI's intelligence, with dynamic internal movement that symbolizes flowing thoughts and ideas.
            </p>
            
            <div className="flex items-center justify-center py-16">
              <div 
                ref={orbRef}
                className="w-40 h-40 rounded-full relative overflow-hidden cursor-pointer"
                style={{
                  transition: "box-shadow 1.5s ease, transform 1.5s ease"
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Main orb with enhanced drifting gradient effect */}
                <div 
                  ref={orbGradientRef}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #e5deff 0%, #8B5CF6 25%, #D946EF 50%, #9b87f5 75%, #e5deff 100%)',
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
                    mixBlendMode: 'soft-light',
                    transition: 'transform 1s ease, opacity 1s ease'
                  }}
                ></div>
                
                {/* Animated wave pattern */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    backgroundImage: 'repeating-radial-gradient(circle at center, transparent 0, transparent 15px, rgba(255,255,255,0.15) 15px, rgba(255,255,255,0.15) 20px)',
                    animation: 'spin 8s linear infinite'
                  }}
                ></div>

                {/* Particles container */}
                <div 
                  ref={particlesRef}
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ 
                    transformOrigin: 'center',
                    transform: 'translateZ(0)'
                  }}
                ></div>

                {/* Additional reactive layer that only appears on hover */}
                <div 
                  className={`absolute inset-0 rounded-full ${isHovering ? 'opacity-70' : 'opacity-0'}`}
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                    mixBlendMode: 'overlay',
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                ></div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-medium">Implementation Notes:</h3>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                <li>Dynamic multi-toned gradient with enhanced movement for fluid animation</li>
                <li>Floating illuminated particles that orbit within the orb</li>
                <li>Reactive glow effects that respond to user interaction</li>
                <li>Multiple overlapping gradient layers creating depth and dimensional feel</li>
                <li>Gentle pulsation effect for an organic, living appearance</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Using standard style tag without jsx or global props */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </PageContainer>
  );
};

export default Brand;
