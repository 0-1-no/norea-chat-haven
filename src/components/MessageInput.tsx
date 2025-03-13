
import React, { useState } from 'react';
import { Paperclip, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type MessageInputProps = {
  onSendMessage?: (message: string) => void;
  className?: string;
  placeholder?: string;
};

export const MessageInput: React.FC<MessageInputProps> = ({ 
  onSendMessage, 
  className,
  placeholder = "Ask whatever you want..."
}) => {
  const [message, setMessage] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacterCount = 1000;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxCharacterCount) {
      setMessage(text);
      setCharacterCount(text.length);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message);
      setMessage("");
      setCharacterCount(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={cn(
      "border border-gray-200 rounded-xl p-2 bg-white animate-slide-up",
      className
    )}>
      <div className="flex items-start">
        <textarea
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
          className="flex-1 px-3 py-2 resize-none outline-none text-sm placeholder:text-gray-400"
          style={{ minHeight: '44px', maxHeight: '120px' }}
        />
      </div>
      
      <div className="flex items-center justify-between mt-1 px-2">
        <button 
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <Paperclip className="w-4 h-4 text-gray-500" />
        </button>
        
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">{characterCount}/{maxCharacterCount}</span>
          
          <button 
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
              message.trim() 
                ? "bg-norea-purple text-white hover:bg-norea-dark-purple" 
                : "bg-gray-100 text-gray-400"
            )}
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
