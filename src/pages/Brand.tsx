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
              <li>Additive blending for light effects using Norea's color palette</li>
              <li>Trail effect with fade giving a sense of motion and flow</li>
              <li>Optimized for performance with hardware acceleration</li>
              <li>Adaptive colors that respond to light/dark theme</li>
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

// Neural Orb Component with improved neuron visibility
const NeuralOrb = ({ size = 'medium' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Reduced size dimensions
  const sizeClasses = {
    small: "w-10 h-10",
    medium: "w-32 h-32",
    large: "w-60 h-60"
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set the canvas size based on the container size
    const setCanvasSize = () => {
      const containerWidth = canvas.parentElement?.clientWidth || (
        size === 'small' ? 40 : size === 'medium' ? 128 : 240
      );
      const containerHeight = canvas.parentElement?.clientHeight || (
        size === 'small' ? 40 : size === 'medium' ? 128 : 240
      );
      
      canvas.width = containerWidth;
      canvas.height = containerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Determine complexity based on size
    const complexityFactor = size === 'small' ? 20 : size === 'medium' ? 30 : 45;
    const particleDensity = size === 'small' ? 60 : size === 'medium' ? 90 : 120;
    
    const max = complexityFactor;
    let count = 0;
    const p: number[][] = [];
    let r = 0;

    for (let a = 0; a < max; a++) {
      p.push([Math.cos(r), Math.sin(r), 0]);
      r += Math.PI * 2 / max;
    }
    for (let a = 0; a < max; a++) p.push([0, p[a][0], p[a][1]]);
    for (let a = 0; a < max; a++) p.push([p[a][1], 0, p[a][0]]);

    // Enhanced colors for light and dark themes with higher opacity for better visibility
    const getLightModeColors = () => [
      "rgba(139, 92, 246, 0.5)",    // Primary purple (higher opacity)
      "rgba(155, 135, 245, 0.6)",   // Medium purple (higher opacity)
      "rgba(170, 155, 245, 0.65)",  // Lighter purple (higher opacity)
      "rgba(192, 175, 255, 0.55)",  // Very light purple (higher opacity)
      "rgba(209, 198, 255, 0.5)",   // Softest purple (higher opacity)
      "rgba(217, 70, 239, 0.45)"    // Pink accent (higher opacity)
    ];

    const getDarkModeColors = () => [
      "rgba(229, 222, 255, 0.6)",  // Lightest purple (higher opacity)
      "rgba(214, 188, 250, 0.55)",  // Light purple (higher opacity)
      "rgba(155, 135, 245, 0.5)",  // Medium purple (higher opacity)
      "rgba(139, 92, 246, 0.55)",  // Primary purple (higher opacity)
      "rgba(126, 105, 171, 0.5)",  // Muted purple (higher opacity)
      "rgba(110, 89, 165, 0.45)"   // Dark purple (higher opacity)
    ];

    const animate = () => {
      // Clear with a semi-transparent background based on theme
      ctx.globalCompositeOperation = "source-over";
      
      if (isDarkMode) {
        ctx.fillStyle = "rgba(26, 31, 44, 0.15)"; // Dark mode background with less fade
      } else {
        ctx.fillStyle = "rgba(250, 250, 255, 0.15)"; // Light mode background with less fade
      }
      
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      
      const tim = count / 5;
      const colors = isDarkMode ? getDarkModeColors() : getLightModeColors();
      
      for (let e = 0; e < 3; e++) {
        const scaledTime = tim * 1.5; // Slightly slower rotation
        const s = 1 - e / 3;
        
        const a1 = scaledTime / 59;
        const yp = Math.cos(a1);
        const yp2 = Math.sin(a1);
        
        const a2 = scaledTime / 23;
        const xp = Math.cos(a2);
        const xp2 = Math.sin(a2);
        
        const p2: number[][] = [];
        for (let a = 0; a < p.length; a++) {
          const x = p[a][0];
          const y = p[a][1];
          const z = p[a][2];
          
          const y1 = y * yp + z * yp2;
          const z1 = y * yp2 - z * yp;
          const x1 = x * xp + z1 * xp2;
          const z2 = x * xp2 - z1 * xp;
          
          const z3 = Math.pow(2.2, z2 * s); // Increased depth effect
          const projectedX = x1 * z3;
          const projectedY = y1 * z3;
          
          p2.push([projectedX, projectedY, z2]);
        }
        
        // Adjusted scale factor for new sizes
        const scaleFactor = size === 'small' ? 0.25 : size === 'medium' ? 0.5 : 0.8;
        const scale = s * 120 * scaleFactor;
        
        for (let d = 0; d < 3; d++) {
          for (let a = 0; a < max; a++) {
            const b = p2[d * max + a];
            const c = p2[((a + 1) % max) + d * max];
            
            ctx.beginPath();
            
            const colorIndex = Math.floor((a / max) * colors.length);
            ctx.strokeStyle = colors[colorIndex];
            
            // Increased line width for better visibility
            const lineWidthBase = size === 'small' ? 4 : size === 'medium' ? 6 : 8;
            ctx.lineWidth = Math.pow(lineWidthBase, b[2]) * scaleFactor;
            
            ctx.lineTo(b[0] * scale + canvas.width / 2, b[1] * scale + canvas.height / 2);
            ctx.lineTo(c[0] * scale + canvas.width / 2, c[1] * scale + canvas.height / 2);
            ctx.stroke();
          }
        }
      }
      
      count++;
      return requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [size, isDarkMode, theme]);

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden border ${isDarkMode ? 'border-gray-700 bg-[#1A1F2C]' : 'border-gray-200 bg-[#F8F8FC]'} shadow-surface-md flex items-center justify-center`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
};

export default Brand;
