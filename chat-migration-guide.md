# Norea AI Chat Migration Guide - UI2 Implementation

## Table of Contents
1. [Message Components](#message-components)
   - [UserMessage Component](#usermessage-component)
   - [AssistantMessage Component](#assistantmessage-component)
   - [MessageList Component](#messagelist-component)
   - [Special Message Types](#special-message-types)
2. [Vercel AI SDK Integration](#vercel-ai-sdk-integration)
   - [useChat Hook Integration](#usechat-hook-integration)
   - [Streaming Implementation](#streaming-implementation)
   - [Response Formats and Error Handling](#response-formats-and-error-handling)
3. [File Attachments and Multimedia](#file-attachments-and-multimedia)
   - [File Upload Implementation](#file-upload-implementation)
   - [Image and Media Handling](#image-and-media-handling)
4. [Tool Integration](#tool-integration)
   - [Memory Tool Integration](#memory-tool-integration)
   - [Weather Component Integration](#weather-component-integration)
   - [Tool Results Display](#tool-results-display)
5. [Visual Styling](#visual-styling)
   - [CSS Classes and Component Styling](#css-classes-and-component-styling)
   - [Animations and Transitions](#animations-and-transitions)

## Message Components

### UserMessage Component

The `UserMessage` component should be directly adapted from the existing `Message` component with role="user":

```tsx
// app/components/chat/UserMessage.tsx
'use client';

import React, { useState } from 'react';
import { Copy, Pen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface UserMessageProps {
  content: string;
  className?: string;
  timestamp?: string;
  onEdit?: (content: string) => void;
}

export const UserMessage: React.FC<UserMessageProps> = ({
  content,
  className,
  timestamp,
  onEdit
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
  
  const handleEdit = () => {
    if (onEdit) {
      onEdit(content);
    } else {
      toast({
        title: "Redigering",
        description: "Redigering av melding er ikke implementert enda.",
        variant: "default",
      });
    }
  };

  return (
    <div 
      className={cn(
        "group relative rounded-lg mb-1 bg-[hsl(var(--user-message-bg))] float-right clear-both sm:max-w-[66%] max-w-[80%]",
        className
      )}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Content wrapper */}
      <div className="px-4 py-2 sm:py-2.5">
        <p className="text-left leading-relaxed font-normal text-foreground dark:text-foreground">{content}</p>
        
        {timestamp && (
          <div className="mt-1 text-xs text-muted-foreground text-right">
            {timestamp}
          </div>
        )}
      </div>
      
      {/* Action buttons */}
      {showActions && (
        <div className="absolute flex bg-background shadow-md rounded-full border border-border z-10 transform bottom-0 right-3 translate-y-1/2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7" 
            onClick={handleCopy}
            aria-label="Kopier"
          >
            <Copy className="h-3.5 w-3.5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7" 
            onClick={handleEdit}
            aria-label="Rediger"
          >
            <Pen className="h-3.5 w-3.5" />
          </Button>
        </div>
      )}
    </div>
  );
};
```

### AssistantMessage Component

The `AssistantMessage` component is more complex as it handles markdown, code blocks, and other content types:

```tsx
// app/components/chat/AssistantMessage.tsx
'use client';

import React, { useState } from 'react';
import { Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import remarkGfm from 'remark-gfm';
import { MemoryIndicator } from '@/components/message/MemoryIndicator';

interface MemoryItem {
  type: 'retrieve' | 'store';
  content: string;
}

interface AssistantMessageProps {
  content: string;
  className?: string;
  timestamp?: string;
  isLoading?: boolean;
  memories?: MemoryItem[];
  weatherCard?: React.ReactNode;
  onFeedback?: (type: 'thumbsUp' | 'thumbsDown') => void;
}

export const AssistantMessage: React.FC<AssistantMessageProps> = ({
  content,
  className,
  timestamp,
  isLoading = false,
  memories,
  weatherCard,
  onFeedback
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
    if (onFeedback) {
      onFeedback('thumbsUp');
    } else {
      toast({
        title: "Tilbakemelding sendt",
        description: "Takk for din positive tilbakemelding.",
        variant: "default",
      });
    }
  };
  
  const handleThumbsDown = () => {
    if (onFeedback) {
      onFeedback('thumbsDown');
    } else {
      toast({
        title: "Tilbakemelding sendt",
        description: "Takk for din tilbakemelding. Vi jobber med å forbedre svarene.",
        variant: "default",
      });
    }
  };

  return (
    <div 
      className={cn(
        "group relative rounded-lg mb-1 bg-[hsl(var(--ai-message-bg))] float-left clear-both sm:max-w-[85%] max-w-full",
        isLoading && "opacity-70",
        className
      )}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Memory indicators */}
      {memories && (
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
      
      {/* Content wrapper */}
      <div className="px-4 py-3 sm:px-5 sm:py-3.5">
        <div className="prose dark:prose-invert prose-headings:mt-6 prose-headings:mb-3 prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-xl prose-h2:font-medium prose-h3:text-lg prose-h3:font-medium prose-p:my-3 prose-p:leading-relaxed prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-li:leading-relaxed prose-table:my-5 prose-pre:bg-muted prose-pre:p-3 prose-pre:rounded max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            components={{
              h1: ({node, ...props}) => <h1 className="text-2xl font-semibold mt-6 mb-3 text-foreground dark:text-foreground" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-xl font-medium mt-5 mb-3 text-foreground dark:text-foreground" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-lg font-medium mt-4 mb-2 text-foreground dark:text-foreground" {...props} />,
              p: ({node, ...props}) => <p className="my-3 leading-relaxed text-foreground dark:text-foreground" {...props} />,
              ul: ({node, ...props}) => <ul className="my-3 ml-6 list-disc space-y-1 text-foreground dark:text-foreground" {...props} />,
              ol: ({node, ...props}) => <ol className="my-3 ml-6 list-decimal space-y-1 text-foreground dark:text-foreground" {...props} />,
              li: ({node, ...props}) => <li className="my-1 pl-1 text-foreground dark:text-foreground" {...props} />,
              table: ({node, ...props}) => <div className="overflow-x-auto my-4"><table className="border-collapse w-full text-foreground dark:text-foreground" {...props} /></div>,
              th: ({node, ...props}) => <th className="border border-border px-4 py-2 bg-muted font-medium text-foreground dark:text-foreground" {...props} />,
              td: ({node, ...props}) => <td className="border border-border px-4 py-2 text-foreground dark:text-foreground" {...props} />,
              code: ({children, className, ...props}) => {
                const match = /language-(\w+)/.exec(className || '');
                const isInline = !className;
                
                if (isInline) {
                  return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-normal text-foreground dark:text-foreground" {...props}>{children}</code>;
                }
                
                return (
                  <code className={`block bg-muted p-3 rounded text-sm overflow-x-auto font-normal text-foreground dark:text-foreground ${className || ''}`} {...props}>
                    {children}
                  </code>
                );
              },
              pre: ({node, ...props}) => <pre className="bg-muted p-3 rounded overflow-x-auto my-4 text-foreground dark:text-foreground" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground dark:text-muted-foreground" {...props} />, 
              a: ({node, ...props}) => <a className="text-primary font-normal underline underline-offset-2" {...props} />,
              strong: ({node, ...props}) => <strong className="font-medium text-foreground dark:text-foreground" {...props} />,
              em: ({node, ...props}) => <em className="italic" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
        
        {/* Display weather card if provided */}
        {weatherCard && (
          <div className="mt-3 mb-2">
            {weatherCard}
          </div>
        )}

        {timestamp && (
          <div className="mt-1 text-xs text-muted-foreground">
            {timestamp}
          </div>
        )}
      </div>
      
      {/* Action buttons */}
      {showActions && (
        <div className="absolute flex bg-background shadow-md rounded-full border border-border z-10 transform bottom-0 left-3 translate-y-1/2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7" 
            onClick={handleCopy}
            aria-label="Kopier"
          >
            <Copy className="h-3.5 w-3.5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7" 
            onClick={handleThumbsUp}
            aria-label="Nyttig"
          >
            <ThumbsUp className="h-3.5 w-3.5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7" 
            onClick={handleThumbsDown}
            aria-label="Ikke nyttig"
          >
            <ThumbsDown className="h-3.5 w-3.5" />
          </Button>
        </div>
      )}
    </div>
  );
};
```

### MessageList Component

The `MessageList` component manages the display of all messages and handles automatic scrolling:

```tsx
// app/components/chat/MessageList.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { UserMessage } from './UserMessage';
import { AssistantMessage } from './AssistantMessage';
import { cn } from '@/lib/utils';
import { Message } from 'ai';

interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
  className?: string;
  onEditMessage?: (messageId: string, content: string) => void;
  pendingMessage?: string;
  weatherCardData?: Record<string, React.ReactNode>;
  memories?: Record<string, { type: 'retrieve' | 'store', content: string }[]>;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isLoading = false,
  className,
  onEditMessage,
  pendingMessage,
  weatherCardData = {},
  memories = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      // Smooth scroll to bottom
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, pendingMessage]);

  const formatTimestamp = (timestamp: number) => {
    return new Intl.DateTimeFormat('no-NO', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(timestamp));
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex-1 overflow-y-auto pb-4 px-4",
        className
      )}
    >
      <div className="max-w-3xl mx-auto">
        {messages.map((message) => {
          const timestamp = message.createdAt ? formatTimestamp(message.createdAt) : undefined;
          const messageMemories = message.id ? memories[message.id] : undefined;
          const weatherCard = message.id ? weatherCardData[message.id] : undefined;
          
          return (
            <div key={message.id} className="mb-1 after:content-[''] after:clear-both after:table">
              {message.role === 'user' ? (
                <UserMessage
                  content={message.content}
                  timestamp={timestamp}
                  onEdit={onEditMessage ? (content) => onEditMessage(message.id, content) : undefined}
                />
              ) : (
                <AssistantMessage
                  content={message.content}
                  timestamp={timestamp}
                  memories={messageMemories}
                  weatherCard={weatherCard}
                />
              )}
            </div>
          );
        })}
        
        {/* Pending message (streaming response) */}
        {pendingMessage && (
          <div className="mb-1 after:content-[''] after:clear-both after:table">
            <AssistantMessage
              content={pendingMessage}
              isLoading={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};
```

### Special Message Types

For special message types like code blocks, images, and tables, they are handled within the markdown parser of the AssistantMessage component. However, for more complex types, you should create dedicated components:

```tsx
// app/components/chat/CodeBlock.tsx
'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  className,
  showLineNumbers = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    toast({
      title: "Kode kopiert",
      description: "Koden er kopiert til utklippstavlen.",
      variant: "default",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "relative my-4 rounded-md overflow-hidden bg-muted",
      className
    )}>
      {language && (
        <div className="flex items-center justify-between px-4 py-1.5 bg-muted border-b border-border">
          <span className="text-xs font-mono text-muted-foreground">{language}</span>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 hover:bg-white/10" 
            onClick={handleCopy}
            aria-label="Kopier kode"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        </div>
      )}
      
      <pre className={cn(
        "p-4 overflow-x-auto text-sm font-mono",
        !language && "relative"
      )}>
        {!language && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 h-7 w-7 hover:bg-white/10" 
            onClick={handleCopy}
            aria-label="Kopier kode"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        )}
        
        {showLineNumbers ? (
          <div className="grid">
            {code.split('\n').map((line, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="text-muted-foreground select-none">{i + 1}</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        ) : (
          <code>{code}</code>
        )}
      </pre>
    </div>
  );
};
```

For images in chat:

```tsx
// app/components/chat/ImageDisplay.tsx
'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ImageDisplayProps {
  src: string;
  alt?: string;
  className?: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src,
  alt = "Bildebeskrivelse",
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={cn(
          "relative my-3 overflow-hidden rounded-md cursor-pointer hover:opacity-95 transition-opacity",
          className
        )}>
          <div className="relative max-h-96 overflow-hidden">
            <Image 
              src={src}
              alt={alt}
              width={600}
              height={400}
              className="object-contain w-full h-full"
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors" />
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/80">
        <div className="relative w-full max-h-[80vh] overflow-auto">
          <Image 
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="object-contain w-full h-full"
            unoptimized
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
```

For tables in chat, they are already handled by the ReactMarkdown component, but for more complex tables:

```tsx
// app/components/chat/TableDisplay.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TableDisplayProps {
  headers: string[];
  rows: string[][];
  className?: string;
}

export const TableDisplay: React.FC<TableDisplayProps> = ({
  headers,
  rows,
  className
}) => {
  return (
    <div className={cn(
      "overflow-x-auto my-4",
      className
    )}>
      <table className="border-collapse w-full text-foreground dark:text-foreground">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={`header-${index}`}
                className="border border-border px-4 py-2 bg-muted font-medium text-foreground dark:text-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td 
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className="border border-border px-4 py-2 text-foreground dark:text-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
```

## Vercel AI SDK Integration

### useChat Hook Integration

To integrate the UI2 components with Vercel AI SDK's useChat hook, create a chat container component:

```tsx
// app/components/chat/ChatContainer.tsx
'use client';

import React, { useState, useRef, useCallback } from 'react';
import { useChat } from 'ai/react';
import { MessageList } from './MessageList';
import { MessageInput } from '@/components/MessageInput';
import { ChatInputContainer } from '@/components/ChatInputContainer';
import { PageContainer } from '@/components/layout/PageContainer';

interface ChatContainerProps {
  chatId?: string;
  initialMessages?: any[];
  title?: string;
  showBackButton?: boolean;
  api?: string;
  weatherCardData?: Record<string, React.ReactNode>;
  memories?: Record<string, { type: 'retrieve' | 'store', content: string }[]>;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({
  chatId,
  initialMessages = [],
  title = 'Chat',
  showBackButton = true,
  api = '/api/chat',
  weatherCardData = {},
  memories = {}
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
    reload,
    stop,
    setMessages
  } = useChat({
    id: chatId,
    initialMessages,
    api,
    onResponse: (response) => {
      // Handle any response-specific logic here
      if (response.status !== 200) {
        console.error('Error in AI response:', response.statusText);
      }
    }
  });
  
  const handleSendMessage = (message: string) => {
    setInput(message);
    const formEvent = new Event('submit', { bubbles: true, cancelable: true }) as unknown as React.FormEvent<HTMLFormElement>;
    handleSubmit(formEvent);
  };
  
  const handleEditMessage = useCallback((messageId: string, content: string) => {
    // Find the message index
    const messageIndex = messages.findIndex(m => m.id === messageId);
    if (messageIndex === -1) return;
    
    // Create new messages array with the edited message
    const newMessages = [...messages.slice(0, messageIndex)];
    
    // Add the edited message
    newMessages.push({
      ...messages[messageIndex],
      content
    });
    
    // Update messages and regenerate response
    setMessages(newMessages);
    reload();
  }, [messages, reload, setMessages]);
  
  const handleFileUpload = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    setIsUploading(true);
    try {
      // Here you would implement your file upload logic
      // This is a placeholder for the file upload functionality
      const uploadedUrls = []; // Would be populated with URLs of uploaded files
      
      // Add the uploaded file references to the chat
      const fileMessage = `[Uploaded ${files.length} file(s): ${Array.from(files).map(f => f.name).join(', ')}]`;
      setInput(fileMessage);
      const formEvent = new Event('submit', { bubbles: true, cancelable: true }) as unknown as React.FormEvent<HTMLFormElement>;
      handleSubmit(formEvent);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setIsUploading(false);
    }
  }, [handleSubmit, setInput]);
  
  return (
    <PageContainer title={title} showBackButton={showBackButton}>
      {/* Main content area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Message list */}
        <MessageList
          messages={messages}
          isLoading={isLoading}
          onEditMessage={handleEditMessage}
          weatherCardData={weatherCardData}
          memories={memories}
        />
      </div>
      
      {/* File input (hidden) */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        multiple
        onChange={(e) => handleFileUpload(e.target.files)}
      />
      
      {/* Chat input */}
      <ChatInputContainer className="sticky bottom-0 z-20">
        <MessageInput 
          onSendMessage={handleSendMessage}
          className="w-full"
          placeholder="Send en melding..."
          isLoading={isLoading || isUploading}
          onStop={stop}
          onAttachment={() => fileInputRef.current?.click()}
        />
      </ChatInputContainer>
    </PageContainer>
  );
};
```

You'll need to update the MessageInput component to support file attachments and the stop generation functionality:

```tsx
// app/components/chat/MessageInput.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Paperclip, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModelSelector } from '@/components/ModelSelector';

interface MessageInputProps {
  onSendMessage?: (message: string) => void;
  onStop?: () => void;
  onAttachment?: () => void;
  className?: string;
  placeholder?: string;
  isLoading?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ 
  onSendMessage, 
  onStop,
  onAttachment,
  className,
  placeholder = "Spør om hva som helst...",
  isLoading = false
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
    if (message.trim() && onSendMessage && !isLoading) {
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
          disabled={isLoading}
          className="flex-1 px-3 py-2 resize-none outline-none text-sm placeholder:text-muted-foreground bg-transparent w-full disabled:opacity-70"
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
          {onAttachment && (
            <button 
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
              title="Legg til vedlegg"
              onClick={onAttachment}
              disabled={isLoading}
            >
              <Paperclip className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
          
          {isLoading && onStop ? (
            <button 
              className="w-8 h-8 rounded-full flex items-center justify-center bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
              onClick={onStop}
              title="Stopp generering"
            >
              <Square className="w-4 h-4" />
            </button>
          ) : (
            <button 
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                message.trim() && !isLoading
                  ? "bg-primary text-primary-foreground hover:bg-primary-hover" 
                  : "bg-muted text-muted-foreground"
              )}
              onClick={handleSendMessage}
              disabled={!message.trim() || isLoading}
              title="Send melding"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
```

### Streaming Implementation

The Vercel AI SDK already handles streaming responses well, but you should ensure proper handling of the pending state. The `MessageList` component should accommodate this as already shown above.

### Response Formats and Error Handling

For standardized error handling with the Vercel AI SDK, implement a custom error component:

```tsx
// app/components/chat/ErrorMessage.tsx
'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  className
}) => {
  return (
    <div className={cn(
      "bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 my-2 flex flex-col",
      className
    )}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-medium mb-1">Det oppstod en feil</p>
          <p className="text-sm opacity-90">{message}</p>
