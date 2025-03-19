
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { ChatInterface } from '@/components/ChatInterface';
import { PromptCard } from '@/components/ui/prompt-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { NoreaOrb } from '@/components/brand/NoreaOrb';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const [showMorePrompts, setShowMorePrompts] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const isMobile = useIsMobile();

  // Basic prompts that always show in a row or carousel
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
    },
    {
      id: '4',
      text: "Hjelp meg å skrive en e-post",
      icon: "email"
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

  // Render desktop grid or mobile carousel based on screen size
  const renderBasicPrompts = () => {
    if (isMobile) {
      return (
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 flex-nowrap">
              {basicPrompts.map((prompt) => (
                <CarouselItem key={prompt.id} className="pl-2 basis-auto max-w-fit">
                  <PromptCard
                    text={prompt.text}
                    icon={prompt.icon as any}
                    variant="compact"
                    onClick={() => handlePromptSelect(prompt.text)}
                    className="w-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {basicPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              text={prompt.text}
              icon={prompt.icon as any}
              onClick={() => handlePromptSelect(prompt.text)}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <PageContainer title="Hjem" showBackButton={false}>
      <ScrollArea className="w-full h-full">
        <div className="flex flex-col w-full px-4 sm:px-6 md:px-8 pb-20">
          <div className="flex flex-col items-center max-w-2xl mx-auto w-full">
            <div className="mb-6 mt-8">
              <NoreaOrb size="medium" interactive={true} />
            </div>
            <h1 className="text-3xl font-bold mb-8">Hva kan jeg hjelpe med?</h1>
            
            {/* Chat interface */}
            <div className="w-full mb-8">
              <ChatInterface 
                userName="John"
                className="w-full"
              />
            </div>
          </div>
          
          {/* Basic prompt cards in a row or carousel */}
          <div className="max-w-2xl mx-auto w-full mb-4">
            {renderBasicPrompts()}
          </div>
          
          {/* Show more/less button */}
          <div className="max-w-2xl mx-auto w-full flex justify-center mb-6">
            <button 
              onClick={toggleMorePrompts}
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
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
          </div>
          
          {/* Tabbed categorized prompts */}
          {showMorePrompts && (
            <div className="w-full max-w-3xl mx-auto mb-8 animate-fade-in">
              <Tabs defaultValue="all" className="w-full" onValueChange={handleSelectCategory}>
                <TabsList className="w-full justify-start mb-4 bg-transparent p-0 h-auto overflow-x-auto scrollbar-hidden flex-nowrap">
                  <TabsTrigger value="all" className="data-[state=active]:bg-primary/10">Alle</TabsTrigger>
                  <TabsTrigger value="work" className="data-[state=active]:bg-primary/10">Jobb</TabsTrigger>
                  <TabsTrigger value="creativity" className="data-[state=active]:bg-primary/10">Kreativitet</TabsTrigger>
                  <TabsTrigger value="learning" className="data-[state=active]:bg-primary/10">Læring</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
                    {categorizedPrompts.all.map((prompt) => (
                      <PromptCard
                        key={prompt.id}
                        text={prompt.text}
                        icon={prompt.icon as any}
                        variant={isMobile ? "compact" : "default"}
                        onClick={() => handlePromptSelect(prompt.text)}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="work" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
                    {categorizedPrompts.work.map((prompt) => (
                      <PromptCard
                        key={prompt.id}
                        text={prompt.text}
                        icon={prompt.icon as any}
                        variant={isMobile ? "compact" : "default"}
                        onClick={() => handlePromptSelect(prompt.text)}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="creativity" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
                    {categorizedPrompts.creativity.map((prompt) => (
                      <PromptCard
                        key={prompt.id}
                        text={prompt.text}
                        icon={prompt.icon as any}
                        variant={isMobile ? "compact" : "default"}
                        onClick={() => handlePromptSelect(prompt.text)}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="learning" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
                    {categorizedPrompts.learning.map((prompt) => (
                      <PromptCard
                        key={prompt.id}
                        text={prompt.text}
                        icon={prompt.icon as any}
                        variant={isMobile ? "compact" : "default"}
                        onClick={() => handlePromptSelect(prompt.text)}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </ScrollArea>
    </PageContainer>
  );
};

export default Index;
