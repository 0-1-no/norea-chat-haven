
import React, { useState } from 'react';
import { Copy, ThumbsUp, ThumbsDown, Pen } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export type MessageRole = 'user' | 'ai';

interface MessageProps {
  content: string;
  role: MessageRole;
  timestamp?: string;
  className?: string;
}

export const Message: React.FC<MessageProps> = ({
  content,
  role,
  timestamp,
  className,
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
        "px-4 py-5 rounded-lg mb-4 relative group",
        role === 'user' 
          ? "bg-primary/10 border border-primary/20" 
          : "bg-background border border-border",
        className
      )}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
          role === 'user' 
            ? "bg-primary text-primary-foreground" 
            : "bg-gray-100 text-gray-700"
        )}>
          {role === 'user' ? 'JD' : 'AI'}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-1">
            <p className="font-medium text-sm">
              {role === 'user' ? 'John Doe' : 'Norea AI'}
            </p>
            {timestamp && (
              <span className="text-xs text-muted-foreground">{timestamp}</span>
            )}
          </div>
          
          <div className="prose prose-sm max-w-none text-foreground">
            {role === 'ai' ? (
              <ReactMarkdown>{content}</ReactMarkdown>
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      </div>
      
      {showActions && (
        <div className="absolute -bottom-3 right-4 flex bg-background shadow-md rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity">
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
      )}
    </div>
  );
};
