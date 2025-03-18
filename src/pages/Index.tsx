
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { ChatInterface } from '@/components/ChatInterface';
import { PromptCard } from '@/components/ui/prompt-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const [showMorePrompts, setShowMorePrompts] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Basic prompts that always show in a row
  const basicPrompts = [
    {
      id: '1',
      text: "Skriv en huskeliste",
      icon: "document"
    },
    {
      id: '2',
      text: "Fortell meg om kunstig intelligens",
      icon: "chat"
    },
    {
      id: '3',
      text: "Lag en treningsplan",
      icon: "settings"
    }
  ];

  // Categorized prompts that show when "Show more" is clicked
  const categorizedPrompts = {
    all: [
      { id: '4', text: "Hvordan virker maskinlæring?", icon: "chat" },
      { id: '5', text: "Skriv en søknad for meg", icon: "document" },
      { id: '6', text: "Hjelp meg med et jobbtilbud", icon: "email" },
      { id: '7', text: "Beskriv kvantedatamaskiner", icon: "settings" },
      { id: '8', text: "Gi meg oppskrift på pasta carbonara", icon: "document" }
    ],
    work: [
      { id: '9', text: "Lag en presentasjon om bærekraft", icon: "document" },
      { id: '10', text: "Skriv et utkast til en e-post", icon: "email" },
      { id: '11', text: "Hjelp meg med prosjektplanlegging", icon: "settings" }
    ],
    creativity: [
      { id: '12', text: "Skriv et dikt om havet", icon: "document" },
      { id: '13', text: "Gi meg en idé til en novelle", icon: "chat" },
      { id: '14', text: "Lag en matrebus", icon: "settings" }
    ],
    learning: [
      { id: '15', text: "Forklar kvantemekanikk enkelt", icon: "chat" },
      { id: '16', text: "Hjelp med matematikkoppgave", icon: "document" },
      { id: '17', text: "Fortell meg om norsk historie", icon: "chat" }
    ]
  };

  const toggleMorePrompts = () => {
    setShowMorePrompts(!showMorePrompts);
  };

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
  };

  const handlePromptSelect = (text: string) => {
    console.log("Selected prompt:", text);
    // The ChatInterface component will handle the message when it receives it
  };

  return (
    <PageContainer title="Hjem" showBackButton={false}>
      <div className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Hva kan jeg hjelpe med?</h1>
        
        {/* Chat interface - moved between title and prompts */}
        <div className="w-full mb-6">
          <ChatInterface 
            userName="John"
            className="flex-1"
          />
        </div>
        
        {/* Basic prompt cards in a row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {basicPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              text={prompt.text}
              icon={prompt.icon as any}
              onClick={() => handlePromptSelect(prompt.text)}
            />
          ))}
        </div>
        
        {/* Show more/less button */}
        <button 
          onClick={toggleMorePrompts}
          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm mb-6"
        >
          {showMorePrompts ? (
            <>
              <span>Vis færre forslag</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Vis flere forslag</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
        
        {/* Tabbed categorized prompts */}
        {showMorePrompts && (
          <div className="w-full mb-8 animate-fade-in">
            <Tabs defaultValue="all" className="w-full" onValueChange={handleSelectCategory}>
              <TabsList className="w-full justify-start mb-4 bg-transparent p-0 h-auto">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary/10">Alle</TabsTrigger>
                <TabsTrigger value="work" className="data-[state=active]:bg-primary/10">Jobb</TabsTrigger>
                <TabsTrigger value="creativity" className="data-[state=active]:bg-primary/10">Kreativitet</TabsTrigger>
                <TabsTrigger value="learning" className="data-[state=active]:bg-primary/10">Læring</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categorizedPrompts.all.map((prompt) => (
                    <PromptCard
                      key={prompt.id}
                      text={prompt.text}
                      icon={prompt.icon as any}
                      onClick={() => handlePromptSelect(prompt.text)}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="work" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categorizedPrompts.work.map((prompt) => (
                    <PromptCard
                      key={prompt.id}
                      text={prompt.text}
                      icon={prompt.icon as any}
                      onClick={() => handlePromptSelect(prompt.text)}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="creativity" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categorizedPrompts.creativity.map((prompt) => (
                    <PromptCard
                      key={prompt.id}
                      text={prompt.text}
                      icon={prompt.icon as any}
                      onClick={() => handlePromptSelect(prompt.text)}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="learning" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categorizedPrompts.learning.map((prompt) => (
                    <PromptCard
                      key={prompt.id}
                      text={prompt.text}
                      icon={prompt.icon as any}
                      onClick={() => handlePromptSelect(prompt.text)}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Index;
