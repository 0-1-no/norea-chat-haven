
import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MoodCardProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  headerColor?: string;
  className?: string;
};

export const MoodCard: React.FC<MoodCardProps> = ({ 
  title, 
  subtitle,
  icon = <Sparkles className="w-5 h-5" />,
  children,
  headerColor = 'bg-purple-50',
  className 
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden border border-surface-border shadow-surface-sm",
        className
      )}
    >
      <div className={cn("p-4", headerColor)}>
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
        </div>
        {subtitle && (
          <p className="text-purple-500 text-sm">{subtitle}</p>
        )}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};
