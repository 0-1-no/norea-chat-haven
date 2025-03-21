
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Paperclip } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModelSelector } from './ModelSelector';

type MessageInputProps = {
  onSendMessage?: (message: string) => void;
  className?: string;
  placeholder?: string;
};

export const MessageInput: React.FC<MessageInputProps> = ({ 
  onSendMessage, 
  className,
  placeholder = "Spør om hva som helst..."
}) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const maxHeight = 180; // Maximum height for the textarea in pixels

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setMessage(text);
    
    // Reset the height to auto to properly calculate the new height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      
      // Set the new height, but cap it at maxHeight
      const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message);
      setMessage("");
      // Reset the textarea height after sending the message
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Initialize textarea height on mount
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }, []);

  return (
    <div className={cn(
      "w-full rounded-lg border border-surface-border bg-background shadow-sm max-w-full overflow-hidden",
      className
    )}>
      <div className="flex items-start p-2 overflow-hidden">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
          className="flex-1 px-3 py-2 resize-none outline-none text-sm placeholder:text-muted-foreground bg-transparent w-full"
          style={{ 
            minHeight: '44px', 
            maxHeight: `${maxHeight}px`,
            overflow: 'auto'
          }}
        />
      </div>
      
      <div className="flex items-center justify-between px-4 pb-2 flex-wrap">
        <ModelSelector />
        
        <div className="flex items-center gap-3">
          <button 
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
            title="Legg til vedlegg"
          >
            <Paperclip className="w-4 h-4 text-muted-foreground" />
          </button>
          
          <button 
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
              message.trim() 
                ? "bg-primary text-primary-foreground hover:bg-primary-hover" 
                : "bg-muted text-muted-foreground"
            )}
            onClick={handleSendMessage}
            disabled={!message.trim()}
            title="Send melding"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
