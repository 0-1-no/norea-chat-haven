
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type FormFieldProps = {
  label: string;
  type?: 'text' | 'email' | 'password' | 'textarea';
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  error?: string;
  className?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  required = false,
  placeholder,
  helperText,
  error,
  className
}) => {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={cn("space-y-2", className)}>
      <Label 
        htmlFor={id}
        className="text-sm font-medium"
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      
      {type === 'textarea' ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          className={cn(
            error && "border-destructive focus-visible:ring-destructive"
          )}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(
            error && "border-destructive focus-visible:ring-destructive"
          )}
        />
      )}
      
      {helperText && !error && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
      
      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  );
};
