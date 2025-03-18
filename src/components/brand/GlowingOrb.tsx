
import React from "react";

interface GlowingOrbProps {
  className?: string;
  size?: "small" | "medium" | "large";
  colors?: {
    base?: string;
    left?: string;
    right?: string;
    accent?: string;
  };
}

const GlowingOrb: React.FC<GlowingOrbProps> = ({ 
  className = "", 
  size = "medium",
  colors = {
    base: "#7E69AB",
    left: "#8B5CF6",
    right: "#0EA5E9",
    accent: "#D946EF"
  }
}) => {
  // Define size classes based on prop
  const sizeClasses = {
    small: "w-[60px] h-[60px]",
    medium: "w-[90px] h-[90px]",
    large: "w-[120px] h-[120px]"
  };

  // Generate the shadow string dynamically based on the color props
  const generateShadow = () => {
    return `inset 0 0 50px ${colors.base},
            inset 20px 0 60px ${colors.left},
            inset -20px 0 60px ${colors.right},
            inset 20px 0 300px ${colors.accent},
            inset -20px 0 300px ${colors.right},
            0 0 50px ${colors.base},
            -10px 0 60px ${colors.left},
            10px 0 60px ${colors.right}`;
  };

  // For light mode, we create a version with transparency
  const generateLightShadow = () => {
    // Convert hex colors to rgba with transparency
    const toRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return `inset 0 0 50px ${toRgba(colors.base, 0.8)},
            inset 20px 0 60px ${toRgba(colors.left, 0.8)},
            inset -20px 0 60px ${toRgba(colors.right, 0.8)},
            inset 20px 0 300px ${toRgba(colors.accent, 0.5)},
            inset -20px 0 300px ${toRgba(colors.right, 0.5)},
            0 0 50px ${toRgba(colors.base, 0.5)},
            -10px 0 60px ${toRgba(colors.left, 0.5)},
            10px 0 60px ${toRgba(colors.right, 0.5)}`;
  };

  // CSS for the spin animation
  const spinAnimation = `
    @keyframes spin-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{spinAnimation}</style>
      <div className={`flex justify-center items-center ${className}`}>
        <div className="relative flex items-center justify-center rounded-xl p-4 bg-transparent">
          <div 
            className={`
              ${sizeClasses[size]}
              rounded-full 
              animate-spin-slow 
              before:content-[''] 
              before:absolute 
              before:inset-0 
              before:rounded-full 
              before:bg-gradient-to-r 
              before:from-violet-600 
              before:via-transparent 
              before:to-cyan-500 
              before:opacity-20
            `}
            style={{
              animation: "spin-slow 4s linear infinite",
              boxShadow: generateShadow(),
              // Apply different shadow for light/dark mode using a data attribute
              // Users can add data-theme="light" to a parent element to trigger this
              ['--light-shadow' as any]: generateLightShadow()
            }}
          />
        </div>
      </div>
    </>
  );
};

export default GlowingOrb;
