
import React from 'react';
import { MessageSquare, Settings, FileText, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

type PromptCardProps = {
  text: string;
  icon?: 'chat' | 'settings' | 'document' | 'email';
  onClick?: () => void;
  className?: string;
};

export const PromptCard: React.FC<PromptCardProps> = ({ 
  text, 
  icon = 'chat',
  onClick, 
  className 
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'settings':
        return <Settings className="w-4 h-4 text-gray-500" />;
      case 'document':
        return <FileText className="w-4 h-4 text-gray-500" />;
      case 'email':
        return <Mail className="w-4 h-4 text-gray-500" />;
      case 'chat':
      default:
        return <MessageSquare className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div 
      className={cn(
        "bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 cursor-pointer",
        "hover:border-gray-300 hover:shadow-sm transition-all duration-200",
        "animate-slide-up",
        className
      )}
      onClick={onClick}
    >
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
        {getIcon()}
      </div>
      <p className="text-sm text-gray-700 flex-1">{text}</p>
    </div>
  );
};
