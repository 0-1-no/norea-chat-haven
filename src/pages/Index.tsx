
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { ChatInterface } from '@/components/ChatInterface';
import { PromptCard } from '@/components/ui/prompt-card';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { NoreaOrb } from '@/components/brand/NoreaOrb';

const Index = () => {
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

  const handlePromptSelect = (text: string) => {
    console.log("Selected prompt:", text);
    // The ChatInterface component will handle the message when it receives it
  };

  // Render desktop grid or mobile carousel based on screen size
  const renderBasicPrompts = () => {
    if (isMobile) {
      return (
        <div className="w-full overflow-hidden">
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
        <div className="flex flex-wrap gap-3 w-full">
          {basicPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              text={prompt.text}
              icon={prompt.icon as any}
              onClick={() => handlePromptSelect(prompt.text)}
              className="w-auto"
            />
          ))}
        </div>
      );
    }
  };

  return (
    <PageContainer title="Hjem" showBackButton={false}>
      {/* Add min-h-full and flex classes to center content vertically */}
      <div className="flex flex-col items-center justify-center min-h-full w-full max-w-3xl mx-auto px-0">
        <div className="mb-6">
          <NoreaOrb size="medium" interactive={true} />
        </div>
        <h1 className="text-3xl font-bold text-center mb-6">Hva kan jeg hjelpe med?</h1>
        
        {/* Chat interface */}
        <div className="w-full mb-6">
          <ChatInterface 
            userName="John"
            className="flex-1"
          />
        </div>
        
        {/* Basic prompt cards in a row or carousel */}
        <div className="w-full mb-4">
          {renderBasicPrompts()}
        </div>
      </div>
    </PageContainer>
  );
};

export default Index;
