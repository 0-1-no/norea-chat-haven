
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/contexts/ThemeContext';
import { ColorPicker } from '@/components/ui/color-picker';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PopoverContent } from '@/components/ui/popover';

interface ThemeSettingsProps {
  mode?: 'dialog' | 'popover';
}

export function ThemeSettings({ mode = 'dialog' }: ThemeSettingsProps) {
  const { colors, updateColor, resetColors } = useTheme();

  const primaryColors = colors.filter(c => c.category === 'primary');
  const surfaceColors = colors.filter(c => c.category === 'surface');
  const sidebarColors = colors.filter(c => c.category === 'sidebar');
  const textColors = colors.filter(c => c.category === 'text');

  const handleColorChange = (cssVar: string, value: string) => {
    updateColor(cssVar, value);
  };

  const Content = () => (
    <>
      <Tabs defaultValue="primary" className="w-full">
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="primary">Primary</TabsTrigger>
          <TabsTrigger value="surface">Surface</TabsTrigger>
          <TabsTrigger value="sidebar">Sidebar</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
        </TabsList>
        
        <TabsContent value="primary" className="space-y-4 pt-4">
          {primaryColors.map(color => (
            <ColorPicker
              key={color.cssVar}
              label={color.displayName}
              value={color.value}
              onChange={(value) => handleColorChange(color.cssVar, value)}
            />
          ))}
        </TabsContent>
        
        <TabsContent value="surface" className="space-y-4 pt-4">
          {surfaceColors.map(color => (
            <ColorPicker
              key={color.cssVar}
              label={color.displayName}
              value={color.value}
              onChange={(value) => handleColorChange(color.cssVar, value)}
            />
          ))}
        </TabsContent>
        
        <TabsContent value="sidebar" className="space-y-4 pt-4">
          {sidebarColors.map(color => (
            <ColorPicker
              key={color.cssVar}
              label={color.displayName}
              value={color.value}
              onChange={(value) => handleColorChange(color.cssVar, value)}
            />
          ))}
        </TabsContent>
        
        <TabsContent value="text" className="space-y-4 pt-4">
          {textColors.map(color => (
            <ColorPicker
              key={color.cssVar}
              label={color.displayName}
              value={color.value}
              onChange={(value) => handleColorChange(color.cssVar, value)}
            />
          ))}
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end mt-6">
        <Button variant="outline" onClick={resetColors}>
          Reset Colors
        </Button>
      </div>
    </>
  );

  if (mode === 'popover') {
    return (
      <PopoverContent className="w-80 p-4">
        <div className="mb-4">
          <h4 className="text-sm font-medium">Customize Theme</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Changes only apply to this session
          </p>
        </div>
        <Content />
      </PopoverContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Customize Theme</DialogTitle>
      </DialogHeader>
      <Content />
    </DialogContent>
  );
}
