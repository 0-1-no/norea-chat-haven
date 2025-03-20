
import React, { useState } from 'react';
import { Copy, ThumbsUp, ThumbsDown, Pen } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { MemoryIndicator } from './MemoryIndicator';

export type MessageRole = 'user' | 'ai';

interface MessageProps {
  content: string;
  role: MessageRole;
  className?: string;
  memories?: {
    type: 'retrieve' | 'store';
    content: string;
  }[];
}

export const Message: React.FC<MessageProps> = ({
  content,
  role,
  className,
  memories
}) => {
  const [showActions, setShowActions] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Kopiert til utklippstavle",
      description: "Meldingen er kopiert til utklippstavlen.",
      variant: "default",
    });
  };
  
  const handleThumbsUp = () => {
    toast({
      title: "Tilbakemelding sendt",
      description: "Takk for din positive tilbakemelding.",
      variant: "default",
    });
  };
  
  const handleThumbsDown = () => {
    toast({
      title: "Tilbakemelding sendt",
      description: "Takk for din tilbakemelding. Vi jobber med å forbedre svarene.",
      variant: "default",
    });
  };
  
  const handleEdit = () => {
    toast({
      title: "Redigering",
      description: "Redigering av melding er ikke implementert enda.",
      variant: "default",
    });
  };

  return (
    <div 
      className={cn(
        "group rounded-lg mb-4 relative", // Redusert mb-8 til mb-4 for mindre mellomrom mellom meldinger
        role === 'user' 
          ? "bg-[hsl(var(--user-message-bg))] text-[hsl(var(--user-message-text))] float-right clear-both sm:max-w-[66%] max-w-[80%]" // Økt bredde på mobil
          : "bg-[hsl(var(--ai-message-bg))] text-[hsl(var(--ai-message-text))] float-left clear-both sm:max-w-[85%] max-w-full", // Full bredde på mobil
        className
      )}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Memory indicators */}
      {memories && role === 'ai' && (
        <div className="mb-1">
          {memories.map((memory, index) => (
            <MemoryIndicator 
              key={index}
              type={memory.type}
              content={memory.content}
            />
          ))}
        </div>
      )}
      
      {/* Content wrapper with proper padding */}
      <div className={cn(
        role === 'user' ? "px-5 py-4" : "px-6 py-5", // Beholdt padding for innhold
      )}>
        <div className={cn(
          role === 'ai' 
            ? "prose dark:prose-invert prose-headings:mt-6 prose-headings:mb-3 prose-p:my-4 prose-p:leading-relaxed prose-ul:my-4 prose-ol:my-4 prose-li:my-2 prose-li:leading-relaxed prose-pre:bg-muted prose-pre:p-3 prose-pre:rounded prose-strong:font-medium max-w-none" 
            : ""
        )}>
          {role === 'ai' ? (
            <ReactMarkdown>{content}</ReactMarkdown>
          ) : (
            <p className="text-left leading-relaxed">{content}</p> // Endret fra text-right til text-left
          )}
        </div>
      </div>
      
      {/* Action buttons - Fixed positioning and visibility */}
      <div className={cn(
        "absolute -bottom-3 right-4 flex bg-background shadow-md rounded-full border border-border transition-opacity",
        showActions ? "opacity-100" : "opacity-0"
      )}>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={handleCopy}
          aria-label="Kopier"
        >
          <Copy className="h-4 w-4" />
        </Button>
        
        {role === 'ai' && (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={handleThumbsUp}
              aria-label="Nyttig"
            >
              <ThumbsUp className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={handleThumbsDown}
              aria-label="Ikke nyttig"
            >
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </>
        )}
        
        {role === 'user' && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleEdit}
            aria-label="Rediger"
          >
            <Pen className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
