
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { MessageInput } from "@/components/MessageInput";
import { ChatInterface } from "@/components/ChatInterface";
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

const Chatbox = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);

  // Update sidebar state when screen size changes
  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const chatboxContent = (
    <div className="container max-w-6xl py-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Chatbox</h1>
        <p className="text-muted-foreground">
          The primary chat interface for users to interact with Norea AI.
        </p>
      </div>

      <Separator />
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Message Input</h2>
          <p className="text-muted-foreground">
            The message input component allows users to type and send messages to the AI.
          </p>
          
          <div className="p-6 border rounded-lg bg-card">
            <MessageInput placeholder="Ask whatever you want..." />
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-medium">Component States:</h3>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
              <li>Default: Empty input field with placeholder text</li>
              <li>Focused: Field has focus with a visible outline</li>
              <li>With content: Send button becomes active</li>
              <li>Hover states: Button and attachment icon have hover effects</li>
              <li>Character counter: Updates as user types</li>
            </ul>
          </div>
        </section>
        
        <Separator />
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Full Chat Interface</h2>
          <p className="text-muted-foreground">
            The complete chat interface includes suggested prompts and message input.
          </p>
          
          <div className="h-[500px] border rounded-lg bg-card overflow-hidden">
            <ChatInterface />
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-medium">Implementation Notes:</h3>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
              <li>Displays welcome message and suggested prompts initially</li>
              <li>Prompts disappear after sending first message</li>
              <li>Message input stays fixed at the bottom</li>
              <li>Uses consistent styling with the rest of the design system</li>
              <li>Fully responsive across all device sizes</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-full flex overflow-hidden bg-backdrop">
      {/* Sidebar component - positioned as overlay on mobile */}
      <div className={`
        ${isMobile ? 'fixed z-50 transition-transform duration-300 ease-in-out' : ''}
        ${(isMobile && !isSidebarOpen) ? '-translate-x-full' : 'translate-x-0'}
      `}>
        {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      </div>
      
      {/* Canvas - where main content is rendered */}
      <div className="flex-1 md:p-content-md flex items-center justify-center">
        <div className={`
          w-full h-full 
          max-w-canvas 
          bg-canvas 
          md:rounded-lg 
          md:border md:border-canvas-border 
          md:shadow-surface-sm 
          flex flex-col 
          overflow-hidden
        `}>
          {!isSidebarOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 left-4 z-10"
              onClick={toggleSidebar}
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
          )}
          
          <Header 
            title="Chatbox" 
            showBackButton={false}
          />
          
          <div className="flex-1 overflow-y-auto">
            {chatboxContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
