
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { MessageInput } from "@/components/MessageInput";
import { ChatInterface } from "@/components/ChatInterface";
import { PageContainer } from '@/components/layout/PageContainer';

const Chatbox = () => {
  return (
    <PageContainer title="Chatbox" showBackButton={false}>
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
    </PageContainer>
  );
};

export default Chatbox;
