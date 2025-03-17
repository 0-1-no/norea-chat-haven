import React, { useRef, useEffect, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { PageContainer } from '@/components/layout/PageContainer';
import { useTheme } from 'next-themes';

const Brand = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setMounted(true);
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
          <h2 className="text-2xl font-semibold">Norea Luminous Orb</h2>
          <p className="text-muted-foreground">
            The ethereal Luminous Orb represents Norea AI's intelligence, with dynamic internal movement that symbolizes flowing thoughts and ideas.
          </p>
          
          <h3 className="text-xl font-medium mt-6">Size Variants</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
            {/* Small */}
            <div className="flex flex-col items-center">
              <LuminousOrb size="small" />
              <span className="mt-2 text-sm text-muted-foreground">Small</span>
            </div>
            
            {/* Medium */}
            <div className="flex flex-col items-center">
              <LuminousOrb size="medium" />
              <span className="mt-2 text-sm text-muted-foreground">Medium</span>
            </div>
            
            {/* Large */}
            <div className="flex flex-col items-center">
              <LuminousOrb size="large" />
              <span className="mt-2 text-sm text-muted-foreground">Large</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
            <h3 className="font-medium">Implementation Notes:</h3>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>Dynamic multi-toned gradient with enhanced movement for fluid animation</li>
              <li>Floating illuminated particles that orbit within the orb</li>
              <li>Reactive glow effects that respond to user interaction</li>
              <li>Multiple overlapping gradient layers creating depth and dimensional feel</li>
              <li>Gentle pulsation effect for an organic, living appearance</li>
            </ul>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Norea Neural Orb</h2>
          <p className="text-muted-foreground">
            The Neural Orb visualizes Norea's interconnecting intelligence patterns, representing neural networks and data flows with dynamic movement.
          </p>

          <h3 className="text-xl font-medium mt-6">Size Variants</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
            {/* Small */}
            <div className="flex flex-col items-center">
              <NeuralOrb size="small" />
              <span className="mt-2 text-sm text-muted-foreground">Small</span>
            </div>
            
            {/* Medium */}
            <div className="flex flex-col items-center">
              <NeuralOrb size="medium" />
              <span className="mt-2 text-sm text-muted-foreground">Medium</span>
            </div>
            
            {/* Large */}
            <div className="flex flex-col items-center">
              <NeuralOrb size="large" />
              <span className="mt-2 text-sm text-muted-foreground">Large</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
            <h3 className="font-medium">Implementation Notes:</h3>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>Canvas-based animation with 3D rotation and perspective</li>
              <li>Multiple interconnected circular patterns creating depth</li>
              <li>Additive blending for light effects using vibrant full spectrum colors</li>
              <li>High contrast lines with variable thickness creating a glowing effect</li>
              <li>Optimized for performance with hardware acceleration</li>
              <li>Maintains visual integrity in both light and dark themes</li>
            </ul>
          </div>
        </section>
      </div>

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

// Luminous Orb Component
const LuminousOrb = ({ size = 'medium' }) => {
  const orbRef = useRef<HTMLDivElement>(null);
  const orbGradientRef = useRef<HTMLDivElement>(null);
  const orbOverlayRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Reduced size dimensions
  const sizeClasses = {
    small: "w-10 h-10",
    medium: "w-32 h-32",
    large: "w-60 h-60"
  };

  // Adjust particle count and size based on orb size
  const particleCount = size === 'small' ? 8 : size === 'medium' ? 15 : 25;
  const particleSizeMultiplier = size === 'small' ? 0.5 : size === 'medium' ? 0.8 : 1;

  useEffect(() => {
    const orb = orbRef.current;
    const orbGradient = orbGradientRef.current;
    const orbOverlay = orbOverlayRef.current;
    const particles = particlesRef.current;
    
    if (!orb || !orbGradient || !orbOverlay || !particles) return;

    let animationFrameId: number;
    let time = 0;

    // Clear any existing particles
    while (particles.firstChild) {
      particles.removeChild(particles.firstChild);
    }

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      
      const baseSize = Math.random() * 6 + 2;
      const size = baseSize * particleSizeMultiplier;
      const startAngle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 30 + 5;
      const speed = Math.random() * 0.02 + 0.01;
      const hue = Math.floor(Math.random() * 60) + 240;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${Math.random() * 0.5 + 0.3})`;
      particle.style.boxShadow = `0 0 ${size * 1.5}px hsla(${hue}, 80%, 60%, 0.6)`;
      
      particle.dataset.angle = startAngle.toString();
      particle.dataset.distance = distance.toString();
      particle.dataset.speed = speed.toString();
      
      particles.appendChild(particle);
    }

    const animate = () => {
      time += 0.01;
      
      orbGradient.style.backgroundPosition = `${Math.sin(time * 0.8) * 200}% ${Math.cos(time * 0.5) * 200}%`;
      
      orbOverlay.style.transform = `rotate(${time * 15}deg)`;
      orbOverlay.style.opacity = `${Math.sin(time * 0.5) * 0.3 + 0.7}`;
      
      const sizeVariation = Math.sin(time * 0.5) * 0.03 + 1;
      orb.style.transform = `scale(${sizeVariation})`;
      
      const glowIntensity = Math.sin(time) * 0.5 + 1.5;
      // Scale glow size with orb size
      const glowSize = size === 'small' ? 5 : size === 'medium' ? 12 : 20;
      orb.style.boxShadow = `0 0 ${glowSize * glowIntensity}px ${(glowSize * 0.75) * glowIntensity}px rgba(155, 135, 245, ${0.4 * glowIntensity})`;

      const particleElements = particles.children;
      for (let i = 0; i < particleElements.length; i++) {
        const particle = particleElements[i] as HTMLDivElement;
        const angle = parseFloat(particle.dataset.angle || "0") + parseFloat(particle.dataset.speed || "0.01");
        const distance = parseFloat(particle.dataset.distance || "10");
        
        // Scale distance based on orb size
        const sizeMultiplier = size === 'small' ? 0.4 : size === 'medium' ? 0.7 : 1;
        const scaledDistance = distance * sizeMultiplier;
        
        const x = Math.cos(angle) * scaledDistance;
        const y = Math.sin(angle) * scaledDistance;
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.dataset.angle = angle.toString();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      while (particles.firstChild) {
        particles.removeChild(particles.firstChild);
      }
    };
  }, [size, particleCount, particleSizeMultiplier]);

  return (
    <div 
      ref={orbRef}
      className={`${sizeClasses[size]} rounded-full relative overflow-hidden cursor-pointer`}
      style={{
        transition: "box-shadow 1.5s ease, transform 1.5s ease"
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        ref={orbGradientRef}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #e5deff 0%, #8B5CF6 25%, #D946EF 50%, #9b87f5 75%, #e5deff 100%)',
          backgroundSize: '400% 400%',
          transition: 'background-position 0.4s ease-in-out'
        }}
      ></div>
      
      <div 
        ref={orbOverlayRef}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0) 60%)',
          mixBlendMode: 'soft-light',
          transition: 'transform 1s ease, opacity 1s ease'
        }}
      ></div>
      
      <div 
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          backgroundImage: 'repeating-radial-gradient(circle at center, transparent 0, transparent 15px, rgba(255,255,255,0.15) 15px, rgba(255,255,255,0.15) 20px)',
          animation: 'spin 8s linear infinite'
        }}
      ></div>

      <div 
        ref={particlesRef}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ 
          transformOrigin: 'center',
          transform: 'translateZ(0)'
        }}
      ></div>

      <div 
        className={`absolute inset-0 rounded-full ${isHovering ? 'opacity-70' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
          mixBlendMode: 'overlay',
          transition: 'opacity 0.5s ease-in-out'
        }}
      ></div>
    </div>
  );
};

// Neural Orb Component - Updated to remove borders and adapt to light/dark backgrounds
const NeuralOrb = ({ size = 'medium' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Size dimensions
  const sizeClasses = {
    small: "w-10 h-10",
    medium: "w-32 h-32",
    large: "w-60 h-60"
  };

  // Size dimensions in pixels
  const sizeDimensions = {
    small: 40,
    medium: 128,
    large: 240
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const pixelSize = sizeDimensions[size];
    canvas.width = pixelSize;
    canvas.height = pixelSize;

    // Initialize variables
    const maxPoints = size === 'small' ? 40 : size === 'medium' ? 60 : 80;
    let count = 0;
    const points: number[][] = [];
    let rotation = 0;

    // Create the initial points in a circular pattern
    for (let a = 0; a < maxPoints; a++) {
      points.push([Math.cos(rotation), Math.sin(rotation), 0]);
      rotation += Math.PI * 2 / maxPoints;
    }
    
    // Create additional points by cycling the coordinates
    for (let a = 0; a < maxPoints; a++) points.push([0, points[a][0], points[a][1]]);
    for (let a = 0; a < maxPoints; a++) points.push([points[a][1], 0, points[a][0]]);

    // Animation function
    const animate = () => {
      // Adaptive background opacity for light/dark modes
      const bgOpacity = isDarkMode ? 0.03 : 0.03;
      const bgColor = isDarkMode ? "rgba(0,0,0," + bgOpacity + ")" : "rgba(255,255,255," + bgOpacity + ")";
      
      // Fill with transparent background for trails effect
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Use additive blending for light effects
      ctx.globalCompositeOperation = "lighter";
      
      const tim = count / 5;
      
      // Loop through layers to create depth
      for (let e = 0; e < 3; e++) {
        const scaledTime = tim * 1.7;
        const scale = 1 - e / 3;
        
        // Calculate rotation angles
        const angle1 = scaledTime / 59;
        const yp = Math.cos(angle1);
        const yp2 = Math.sin(angle1);
        
        const angle2 = scaledTime / 23;
        const xp = Math.cos(angle2);
        const xp2 = Math.sin(angle2);
        
        // Transform the points in 3D space
        const transformedPoints: number[][] = [];
        for (let a = 0; a < points.length; a++) {
          const x = points[a][0];
          const y = points[a][1];
          const z = points[a][2];
          
          // Apply 3D rotations
          const y1 = y * yp + z * yp2;
          const z1 = y * yp2 - z * yp;
          const x1 = x * xp + z1 * xp2;
          const z2 = x * xp2 - z1 * xp;
          
          // Apply perspective
          const perspective = Math.pow(2, z2 * scale);
          const projectedX = x1 * perspective;
          const projectedY = y1 * perspective;
          
          transformedPoints.push([projectedX, projectedY, z2]);
        }
        
        // Calculate the scale factor based on orb size
        const sizeScaleFactor = size === 'small' ? 0.3 : size === 'medium' ? 0.5 : 0.8;
        const viewportScale = scale * pixelSize * 0.6 * sizeScaleFactor;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Draw the lines connecting the points
        for (let d = 0; d < 3; d++) {
          for (let a = 0; a < maxPoints; a++) {
            const b = transformedPoints[d * maxPoints + a];
            const c = transformedPoints[((a + 1) % maxPoints) + d * maxPoints];
            
            ctx.beginPath();
            
            // Create a rainbow color effect with HSL
            // Adjust saturation and lightness for light/dark mode
            const hue = ((a / maxPoints * 360) | 0);
            const saturation = isDarkMode ? "70%" : "80%";
            const lightness = isDarkMode ? "60%" : "45%"; // Darker on light background
            const strokeOpacity = isDarkMode ? 0.15 : 0.35; // Higher opacity on light background
            
            ctx.strokeStyle = `hsla(${hue}, ${saturation}, ${lightness}, ${strokeOpacity})`;
            
            // Dynamic line width based on z-coordinate
            const baseLineWidth = size === 'small' ? 3 : size === 'medium' ? 4.5 : 6;
            ctx.lineWidth = Math.pow(baseLineWidth, b[2]);
            
            // Draw the line
            ctx.lineTo(b[0] * viewportScale + centerX, b[1] * viewportScale + centerY);
            ctx.lineTo(c[0] * viewportScale + centerX, c[1] * viewportScale + centerY);
            ctx.stroke();
          }
        }
      }
      
      count++;
      return requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size, isDarkMode]); // Added isDarkMode to dependencies

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden flex items-center justify-center`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
};

export default Brand;
