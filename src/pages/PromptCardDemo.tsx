
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { PromptCard } from '@/components/ui/prompt-card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PromptCardDemo = () => {
  return (
    <PageContainer title="Prompt Cards" showBackButton={true}>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Prompt Card</h1>
          <p className="text-muted-foreground">
            Prompt cards display suggested prompts or actions for users to interact with.
          </p>
        </div>

        <Separator />
        
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-8 mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Default Variant</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PromptCard 
                  text="Generate a short story about a space adventure" 
                  icon="chat"
                />
                <PromptCard 
                  text="Help me create a weekly meal plan" 
                  icon="document"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Brand Variant</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PromptCard 
                  text="Ask me anything about history" 
                  icon="chat"
                  variant="brand"
                />
                <PromptCard 
                  text="Create a professional email for me" 
                  icon="email"
                  variant="brand"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Compact Variant (Mobile)</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <PromptCard 
                  text="Weather forecast for today" 
                  icon="settings"
                  variant="compact"
                />
                <PromptCard 
                  text="Create a to-do list" 
                  icon="document"
                  variant="compact"
                />
                <PromptCard 
                  text="Summarize this article" 
                  icon="chat"
                  variant="compact"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">With Icon Position</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PromptCard 
                  text="Icon on the left (default)" 
                  icon="settings"
                  iconPosition="left"
                />
                <PromptCard 
                  text="Icon on the right" 
                  icon="settings"
                  iconPosition="right"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">With Title</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PromptCard 
                  title="Creative Writing"
                  text="Generate a poem about nature" 
                  icon="document"
                />
                <PromptCard 
                  title="Learning"
                  text="Explain quantum physics simply" 
                  icon="chat"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">With Image</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PromptCard 
                  text="Weather in Oslo" 
                  icon="image"
                  imageSrc="/lovable-uploads/e5d32966-b0c7-4046-bf77-b65eee3b0e31.png"
                />
                <PromptCard 
                  title="Music Analysis"
                  text="Beethoven's Hair Analysis Reveals Secrets" 
                  icon="image"
                  imageSrc="/lovable-uploads/69a861a2-82e5-4b28-ab8f-3c7c64e9d77b.png"
                  variant="compact"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-slate-950 p-6">
              <pre className="text-white text-sm">
{`// Basic usage
<PromptCard 
  text="Generate a short story about a space adventure" 
  icon="chat"
/>

// With variant
<PromptCard 
  text="Ask me anything about history" 
  icon="chat"
  variant="brand"
/>

// Compact variant (mobile)
<PromptCard 
  text="Weather forecast for today" 
  icon="settings"
  variant="compact"
/>

// With icon position
<PromptCard 
  text="Icon on the right" 
  icon="settings"
  iconPosition="right"
/>

// With title
<PromptCard 
  title="Creative Writing"
  text="Generate a poem about nature" 
  icon="document"
/>

// With image
<PromptCard 
  text="Weather in Oslo" 
  icon="image"
  imageSrc="/path/to/image.png"
/>`}
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="props" className="mt-6">
            <div className="rounded-md border p-6">
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-4 font-bold">
                <div>Prop</div>
                <div>Type</div>
                <div>Default</div>
                <div>Description</div>
              </div>
              <Separator className="mb-4" />
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>text</div>
                <div>string</div>
                <div>-</div>
                <div>The main text displayed in the card</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>title</div>
                <div>string?</div>
                <div>undefined</div>
                <div>Optional title displayed above the main text</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>icon</div>
                <div>&apos;chat&apos; | &apos;settings&apos; | &apos;document&apos; | &apos;email&apos; | &apos;image&apos;</div>
                <div>&apos;chat&apos;</div>
                <div>The icon to display</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>iconPosition</div>
                <div>&apos;left&apos; | &apos;right&apos;</div>
                <div>&apos;left&apos;</div>
                <div>Position of the icon in the card</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>hideIcon</div>
                <div>boolean</div>
                <div>false</div>
                <div>Whether to hide the icon</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>variant</div>
                <div>&apos;default&apos; | &apos;brand&apos; | &apos;compact&apos;</div>
                <div>&apos;default&apos;</div>
                <div>Visual style of the card</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>onClick</div>
                <div>() => void</div>
                <div>undefined</div>
                <div>Function called when the card is clicked</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>className</div>
                <div>string</div>
                <div>&apos;&apos;</div>
                <div>Additional CSS classes</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 font-mono text-sm mb-3">
                <div>imageSrc</div>
                <div>string?</div>
                <div>undefined</div>
                <div>Optional image to display instead of an icon</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator />
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Usage Guidelines</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use <strong>default variant</strong> for standard prompt suggestions in desktop layouts.</li>
            <li>Use <strong>compact variant</strong> for mobile layouts or when space is limited.</li>
            <li>Use <strong>brand variant</strong> for highlighting important or featured prompts.</li>
            <li>Keep prompt text concise and actionable, preferably under 10 words.</li>
            <li>Group related prompts together in categories for better user navigation.</li>
            <li>Use appropriate icons that match the prompt content.</li>
            <li>For image-based prompts, ensure images are relevant and high quality.</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};

export default PromptCardDemo;
