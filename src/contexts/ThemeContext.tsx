
import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorVariable = {
  name: string;
  cssVar: string;
  value: string;
  displayName: string;
  category: 'primary' | 'surface' | 'sidebar' | 'text';
};

type ThemeContextType = {
  colors: ColorVariable[];
  updateColor: (cssVar: string, value: string) => void;
  resetColors: () => void;
};

const initialColors: ColorVariable[] = [
  // Primary colors
  { name: 'primary', cssVar: '--primary', value: 'hsl(263 70% 58%)', displayName: 'Primary', category: 'primary' },
  { name: 'primary-hover', cssVar: '--primary-hover', value: 'hsl(263 70% 50%)', displayName: 'Primary Hover', category: 'primary' },
  { name: 'primary-muted', cssVar: '--primary-muted', value: 'hsl(263 70% 90%)', displayName: 'Primary Muted', category: 'primary' },
  
  // Surface colors
  { name: 'surface', cssVar: '--surface-background', value: 'hsl(0 0% 100%)', displayName: 'Surface', category: 'surface' },
  { name: 'surface-hover', cssVar: '--surface-hover', value: 'hsl(0 0% 98%)', displayName: 'Surface Hover', category: 'surface' },
  { name: 'surface-border', cssVar: '--surface-border', value: 'hsl(214.3 31.8% 91.4%)', displayName: 'Surface Border', category: 'surface' },
  
  // Sidebar colors
  { name: 'sidebar', cssVar: '--sidebar-background', value: 'hsl(0 0% 98%)', displayName: 'Sidebar', category: 'sidebar' },
  { name: 'sidebar-accent', cssVar: '--sidebar-accent', value: 'hsl(240 4.8% 95.9%)', displayName: 'Sidebar Accent', category: 'sidebar' },
  { name: 'sidebar-border', cssVar: '--sidebar-border', value: 'hsl(220 13% 91%)', displayName: 'Sidebar Border', category: 'sidebar' },
  
  // Text colors
  { name: 'foreground', cssVar: '--foreground', value: 'hsl(222.2 84% 4.9%)', displayName: 'Text', category: 'text' },
  { name: 'muted-foreground', cssVar: '--muted-foreground', value: 'hsl(215.4 16.3% 46.9%)', displayName: 'Muted Text', category: 'text' },
  { name: 'sidebar-foreground', cssVar: '--sidebar-foreground', value: 'hsl(240 5.3% 26.1%)', displayName: 'Sidebar Text', category: 'text' },
];

const ThemeContext = createContext<ThemeContextType>({
  colors: initialColors,
  updateColor: () => {},
  resetColors: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<ColorVariable[]>(initialColors);

  // Apply colors to CSS variables
  useEffect(() => {
    colors.forEach(color => {
      document.documentElement.style.setProperty(color.cssVar, color.value);
    });
  }, [colors]);

  const updateColor = (cssVar: string, value: string) => {
    setColors(prev => 
      prev.map(color => 
        color.cssVar === cssVar ? { ...color, value } : color
      )
    );
  };

  const resetColors = () => {
    setColors(initialColors);
    initialColors.forEach(color => {
      document.documentElement.style.setProperty(color.cssVar, color.value);
    });
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColor, resetColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
