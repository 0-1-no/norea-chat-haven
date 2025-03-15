
import React from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function ColorPicker({ label, value, onChange, className }: ColorPickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // Convert HSL to hex for the color input (simplified approach)
  const displayValue = value.startsWith('hsl') ? value : value;

  return (
    <div className={cn("flex flex-col space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor={`color-${label}`} className="text-xs">{label}</Label>
        <div className="text-xs text-muted-foreground">{value}</div>
      </div>
      <div className="flex items-center gap-2">
        <div 
          className="w-8 h-8 rounded-md border border-border shadow-sm" 
          style={{ backgroundColor: value }}
        />
        <input
          id={`color-${label}`}
          type="color"
          value={displayValue}
          onChange={handleChange}
          className="w-full h-9 rounded-md border border-input bg-background px-3 py-1"
        />
      </div>
    </div>
  );
}
