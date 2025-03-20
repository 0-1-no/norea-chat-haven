
import React, { useState } from 'react';
import { Copy, ThumbsUp, ThumbsDown, Pen } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { MemoryIndicator } from './MemoryIndicator';
import remarkGfm from 'remark-gfm';

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
        "group rounded-lg mb-2",
        role === 'user' 
          ? "bg-[hsl(var(--user-message-bg))] text-[#222222] float-right clear-both sm:max-w-[66%] max-w-[80%]" 
          : "bg-[hsl(var(--ai-message-bg))] text-[#222222] float-left clear-both sm:max-w-[85%] max-w-full", 
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
      
      {/* Content wrapper med redusert padding */}
      <div className={cn(
        role === 'user' ? "px-4 py-3" : "px-5 py-4", 
      )}>
        <div className={cn(
          role === 'ai' 
            ? "prose dark:prose-invert prose-headings:mt-6 prose-headings:mb-3 prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-xl prose-h2:font-medium prose-h3:text-lg prose-h3:font-medium prose-p:my-3 prose-p:leading-relaxed prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-li:leading-relaxed prose-table:my-5 prose-pre:bg-muted prose-pre:p-3 prose-pre:rounded max-w-none" 
            : "font-normal"
        )}>
          {role === 'ai' ? (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              components={{
                h1: ({node, ...props}) => <h1 className="text-2xl font-semibold mt-6 mb-3 text-[#222222]" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-xl font-medium mt-5 mb-3 text-[#222222]" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-lg font-medium mt-4 mb-2 text-[#222222]" {...props} />,
                p: ({node, ...props}) => <p className="my-3 leading-relaxed text-[#222222]" {...props} />,
                ul: ({node, ...props}) => <ul className="my-3 ml-6 list-disc space-y-1 text-[#222222]" {...props} />,
                ol: ({node, ...props}) => <ol className="my-3 ml-6 list-decimal space-y-1 text-[#222222]" {...props} />,
                li: ({node, ...props}) => <li className="my-1 pl-1 text-[#222222]" {...props} />,
                table: ({node, ...props}) => <div className="overflow-x-auto my-4"><table className="border-collapse w-full text-[#222222]" {...props} /></div>,
                th: ({node, ...props}) => <th className="border border-border px-4 py-2 bg-muted font-medium text-[#222222]" {...props} />,
                td: ({node, ...props}) => <td className="border border-border px-4 py-2 text-[#222222]" {...props} />,
                code: ({children, className, ...props}) => {
                  const match = /language-(\w+)/.exec(className || '');
                  const isInline = !className;
                  
                  if (isInline) {
                    return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-normal" {...props}>{children}</code>;
                  }
                  
                  return (
                    <code className={`block bg-muted p-3 rounded text-sm overflow-x-auto font-normal ${className || ''}`} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({node, ...props}) => <pre className="bg-muted p-3 rounded overflow-x-auto my-4" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-[#444444]" {...props} />, 
                a: ({node, ...props}) => <a className="text-primary font-normal underline underline-offset-2" {...props} />,
                strong: ({node, ...props}) => <strong className="font-medium text-[#222222]" {...props} />, /* Changed from font-bold to font-medium */
                em: ({node, ...props}) => <em className="italic" {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
          ) : (
            <p className="text-left leading-relaxed font-normal">{content}</p>
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
