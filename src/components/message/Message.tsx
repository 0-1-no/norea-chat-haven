
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
  className?: string;
}

export const Message: React.FC<MessageProps> = ({
  content,
  role,
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
        "rounded-lg mb-8 relative group", // Increased bottom margin for better spacing
        role === 'user' 
          ? "bg-gray-100 text-foreground ml-auto w-fit max-w-[66%] text-right" // Using ml-auto to push to right
          : "bg-background text-foreground mr-auto w-fit max-w-[85%]", // Using mr-auto to push to left
        className
      )}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Content wrapper with proper padding */}
      <div className={cn(
        role === 'user' ? "px-5 py-4" : "px-6 py-5", // More padding for AI messages
      )}>
        <div className={cn(
          role === 'ai' 
            ? "prose prose-headings:mt-6 prose-headings:mb-3 prose-p:my-4 prose-p:leading-relaxed prose-ul:my-4 prose-ol:my-4 prose-li:my-2 prose-li:leading-relaxed" 
            : ""
        )}>
          {role === 'ai' ? (
            <ReactMarkdown className="space-y-4">{content}</ReactMarkdown>
          ) : (
            <p className="text-right leading-relaxed">{content}</p>
          )}
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
