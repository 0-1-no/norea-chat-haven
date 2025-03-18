
import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type NoreaOrbSize = "small" | "medium" | "large";

interface NoreaOrbProps {
  size?: NoreaOrbSize;
  interactive?: boolean;
}

export const NoreaOrb: React.FC<NoreaOrbProps> = ({ 
  size = "medium",
  interactive = true
}) => {
  const orbRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  // Size dimensions
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-32 h-32",
    large: "w-60 h-60"
  };

  // Pixel dimensions for canvas
  const sizeDimensions = {
    small: 64,
    medium: 128,
    large: 240
  };

  // Handle hover states
  const handleMouseEnter = () => {
    if (interactive) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setIsHovering(false);
    }
  };

  // Initialize component
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Main animation effect
  useEffect(() => {
    if (!isMounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const orb = orbRef.current;
    if (!orb) return;
    
    // Set canvas dimensions with device pixel ratio for retina displays
    const pixelRatio = window.devicePixelRatio || 1;
    const pixelSize = sizeDimensions[size];
    canvas.width = pixelSize * pixelRatio;
    canvas.height = pixelSize * pixelRatio;
    
    // Scale all drawing operations
    ctx.scale(pixelRatio, pixelRatio);
    
    // Configure rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    let animationFrameId: number;
    let time = 0;
    
    // Function to update the gradient colors based on theme
    const getGradientColors = () => {
      // Primary brand colors
      const primaryColor = isDarkMode ? '#9b87f5' : '#8B5CF6';
      const secondaryColor = isDarkMode ? '#D946EF' : '#D946EF';
      const accentColor = isDarkMode ? '#e5deff' : '#e5deff';
      
      return {
        primaryColor,
        secondaryColor,
        accentColor
      };
    };
    
    const animate = () => {
      const { primaryColor, secondaryColor, accentColor } = getGradientColors();
      
      // Clear canvas with slight fade for trailing effect
      ctx.fillStyle = isDarkMode 
        ? 'rgba(20, 20, 30, 0.15)' 
        : 'rgba(255, 255, 255, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Get center coordinates
      const centerX = canvas.width / (2 * pixelRatio);
      const centerY = canvas.height / (2 * pixelRatio);
      const radius = (pixelSize / 2) * 0.85; // 85% of half the width
      
      // Increase animation speed when hovered
      const timeIncrement = isHovering ? 0.015 : 0.006;
      time += timeIncrement;
      
      // Create core orb gradient
      const orbGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );
      
      // Adjust gradient based on time
      const gradientOffset = (Math.sin(time * 0.8) * 0.2) + 0.5;
      
      orbGradient.addColorStop(0, accentColor);
      orbGradient.addColorStop(0.4, primaryColor);
      orbGradient.addColorStop(0.8, secondaryColor);
      orbGradient.addColorStop(1, 'rgba(20, 20, 30, 0.1)');
      
      // Draw main orb
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = orbGradient;
      ctx.fill();
      
      // Add highlight reflection
      const highlightSize = radius * 0.7;
      const highlightX = centerX - (radius * 0.3);
      const highlightY = centerY - (radius * 0.3);
      
      const highlightGradient = ctx.createRadialGradient(
        highlightX, highlightY, 0,
        highlightX, highlightY, highlightSize
      );
      
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
      highlightGradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(highlightX, highlightY, highlightSize, 0, Math.PI * 2);
      ctx.fillStyle = highlightGradient;
      ctx.fill();
      
      // Add subtle core glow
      const pulseIntensity = (Math.sin(time * 2) * 0.1) + 0.9;
      const glowSize = radius * 0.95;
      
      const glowGradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.5,
        centerX, centerY, glowSize
      );
      
      glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      glowGradient.addColorStop(0.8, `rgba(155, 135, 245, ${0.05 * pulseIntensity})`);
      glowGradient.addColorStop(1, `rgba(155, 135, 245, ${0.01 * pulseIntensity})`);
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();
      
      // Add floating particles
      const particleCount = size === 'small' ? 5 : size === 'medium' ? 10 : 15;
      
      for (let i = 0; i < particleCount; i++) {
        // Particle position based on time and index
        const angle = (Math.PI * 2 * i / particleCount) + (time * 0.5);
        const distance = radius * (0.4 + (Math.sin(time + i) * 0.2));
        
        const x = centerX + (Math.cos(angle) * distance);
        const y = centerY + (Math.sin(angle) * distance);
        
        // Particle size and opacity based on time
        const particleSize = (size === 'small' ? 1 : size === 'medium' ? 2 : 3) * 
                            (0.8 + (Math.sin(time * 2 + i) * 0.2));
        
        const particleOpacity = 0.5 + (Math.sin(time + i * 2) * 0.3);
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(x, y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particleOpacity})`;
        ctx.fill();
      }
      
      // Add interactive rings when hovered
      if (isHovering) {
        const ringCount = size === 'small' ? 1 : 2;
        
        for (let i = 0; i < ringCount; i++) {
          const ringRadius = radius * (1.1 + (i * 0.15));
          const ringWidth = radius * 0.01;
          const ringOpacity = 0.8 - (i * 0.2);
          
          ctx.beginPath();
          ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(155, 135, 245, ${ringOpacity * (0.8 + Math.sin(time * 3) * 0.2)})`;
          ctx.lineWidth = ringWidth;
          ctx.stroke();
        }
      }
      
      // Create outer glow effect
      const outerGlowSize = radius * (isHovering ? 1.25 : 1.15);
      const outerGlowGradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.9,
        centerX, centerY, outerGlowSize
      );
      
      const glowOpacity = isHovering ? 0.15 : 0.08;
      outerGlowGradient.addColorStop(0, `rgba(155, 135, 245, ${glowOpacity})`);
      outerGlowGradient.addColorStop(1, 'rgba(155, 135, 245, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerGlowSize, 0, Math.PI * 2);
      ctx.fillStyle = outerGlowGradient;
      ctx.fill();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, size, isDarkMode, isMounted]);

  if (!isMounted) {
    return <div className={`${sizeClasses[size]} rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse`}></div>;
  }

  return (
    <div 
      ref={orbRef}
      className={`${sizeClasses[size]} relative rounded-full overflow-hidden ${interactive ? 'cursor-pointer' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
};
