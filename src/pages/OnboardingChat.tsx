import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PageContainer } from '@/components/layout/PageContainer';

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  component?: JSX.Element;
}

interface UserPreferences {
  name?: string;
  interests?: string[];
  avatar?: string;
  step: number;
}

const OnboardingChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences>({
    step: 0,
    interests: []
  });
  const [progress, setProgress] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const interests = [
    { id: 'writing', label: 'Skriving' },
    { id: 'programming', label: 'Programmering' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Markedsføring' },
    { id: 'productivity', label: 'Produktivitet' },
    { id: 'research', label: 'Forskning' },
    { id: 'education', label: 'Utdanning' },
    { id: 'brainstorming', label: 'Idéutvikling' }
  ];

  const addMessage = (message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1500);
  };

  const updateProgress = (step: number) => {
    const totalSteps = 5;
    const newProgress = (step / totalSteps) * 100;
    setProgress(newProgress);
    setPreferences(prev => ({ ...prev, step }));
  };

  const handleNameSubmit = (name: string) => {
    addMessage({ 
      id: `user-${Date.now()}`, 
      content: `Mitt navn er ${name}`,
      role: 'user'
    });
    
    setPreferences(prev => ({ ...prev, name }));
    simulateTyping();
    
    setTimeout(() => {
      addMessage({
        id: `assistant-${Date.now()}`,
        content: `Takk, ${name}! Nå vil jeg gjerne vite litt om dine interesser.`,
        role: 'assistant',
        component: (
          <InterestSelector 
            interests={interests} 
            selectedInterests={[]}
            onSelect={(selected) => handleInterestSelection(selected)}
          />
        )
      });
      updateProgress(2);
    }, 2000);
  };

  const handleInterestSelection = (selected: string[]) => {
    const selectedLabels = interests
      .filter(interest => selected.includes(interest.id))
      .map(interest => interest.label);
    
    addMessage({
      id: `user-${Date.now()}`,
      content: `Mine interesser er: ${selectedLabels.join(', ')}`,
      role: 'user'
    });
    
    setPreferences(prev => ({ ...prev, interests: selected }));
    simulateTyping();
    
    setTimeout(() => {
      addMessage({
        id: `assistant-${Date.now()}`,
        content: `Flott! Nå som jeg vet mer om deg, la meg vise deg noen funksjoner som kan hjelpe deg med ${selectedLabels[0] || 'dine interesser'}.`,
        role: 'assistant',
        component: (
          <FeaturesCarousel />
        )
      });
      updateProgress(3);
    }, 2000);
    
    setTimeout(() => {
      addMessage({
        id: `assistant-${Date.now()}`,
        content: 'Her er en kort video som viser hvordan du kan bruke Norea:',
        role: 'assistant',
        component: (
          <VideoEmbed />
        )
      });
    }, 4000);
    
    setTimeout(() => {
      addMessage({
        id: `assistant-${Date.now()}`,
        content: 'Hvordan vil du bruke Norea?',
        role: 'assistant',
        component: (
          <UseCaseSelector onSelect={handleUseCaseSelection} />
        )
      });
    }, 6000);
  };

  const handleUseCaseSelection = (useCase: string) => {
    addMessage({
      id: `user-${Date.now()}`,
      content: `Jeg vil bruke Norea for ${useCase}`,
      role: 'user'
    });
    
    simulateTyping();
    
    setTimeout(() => {
      updateProgress(4);
      
      addMessage({
        id: `assistant-${Date.now()}`,
        content: `Perfekt! Jeg vil anbefale noen maler som passer til ${useCase}.`,
        role: 'assistant',
        component: (
          <TemplateGallery useCase={useCase} />
        )
      });
    }, 2000);
    
    setTimeout(() => {
      updateProgress(5);
      
      addMessage({
        id: `assistant-${Date.now()}`,
        content: 'Vi er ferdige med onboardingen! Hva synes du om opplevelsen?',
        role: 'assistant',
        component: (
          <FeedbackSelector onSelect={handleFeedback} />
        )
      });
    }, 4000);
  };

  const handleFeedback = (feedback: string) => {
    addMessage({
      id: `user-${Date.now()}`,
      content: `Min feedback: ${feedback}`,
      role: 'user'
    });
    
    simulateTyping();
    
    setTimeout(() => {
      addMessage({
        id: `assistant-${Date.now()}`,
        content: 'Takk for tilbakemeldingen! Du er nå klar til å bruke Norea. Lykke til!',
        role: 'assistant'
      });
    }, 2000);
  };

  useEffect(() => {
    if (messages.length === 0) {
      addMessage({
        id: 'initial',
        content: 'Hei! Velkommen til Norea. La meg hjelpe deg med å komme i gang. Hva heter du?',
        role: 'assistant',
        component: (
          <NameInput onSubmit={handleNameSubmit} />
        )
      });
      updateProgress(1);
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <PageContainer title="Oppstart av Norea" showBackButton={true}>
      <div className="flex flex-col h-full bg-background">
        <div className={cn(
          "sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border",
          isMobile ? "py-2" : "py-4"
        )}>
          <div className="container max-w-3xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-sm font-medium">Oppsett av Norea</h2>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto py-6 px-4 space-y-6"
        >
          <div className="container max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="space-y-4">
                <div className={cn(
                  "group rounded-lg mb-8 relative",
                  message.role === 'user' 
                    ? "bg-gray-100 text-foreground float-right clear-both max-w-[66%]"
                    : "bg-background text-foreground float-left clear-both max-w-[85%]"
                )}>
                  <div className={cn(
                    message.role === 'user' ? "px-5 py-4" : "px-6 py-5",
                  )}>
                    <div className={cn(
                      message.role === 'assistant' 
                        ? "prose prose-headings:mt-6 prose-headings:mb-3 prose-p:my-4 prose-p:leading-relaxed prose-ul:my-4 prose-ol:my-4 prose-li:my-2 prose-li:leading-relaxed prose-pre:bg-gray-50 prose-pre:p-3 prose-pre:rounded prose-strong:font-medium" 
                        : ""
                    )}>
                      <p>{message.content}</p>
                      {message.component && (
                        <div className="mt-4">
                          {message.component}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="animate-pulse flex items-center gap-2 text-sm text-muted-foreground">
                <span>Norea skriver</span>
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-75">.</span>
                <span className="animate-bounce delay-150">.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

const NameInput: React.FC<{ onSubmit: (name: string) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  
  return (
    <div className="flex flex-col gap-3 p-4 border rounded-lg bg-card">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Skriv navnet ditt her"
        className="px-3 py-2 border rounded-md"
      />
      <Button 
        onClick={() => onSubmit(name)} 
        disabled={!name.trim()} 
        className="flex items-center"
      >
        Neste <ChevronRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};

const InterestSelector: React.FC<{ 
  interests: Array<{ id: string, label: string }>,
  selectedInterests: string[],
  onSelect: (selected: string[]) => void
}> = ({ interests, selectedInterests, onSelect }) => {
  const [selected, setSelected] = useState<string[]>(selectedInterests);
  
  const toggleInterest = (id: string) => {
    const newSelected = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    
    setSelected(newSelected);
  };
  
  return (
    <div className="p-4 border rounded-lg bg-card">
      <h3 className="text-lg font-medium mb-3">Velg dine interesser</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
        {interests.map(interest => (
          <Button
            key={interest.id}
            type="button"
            variant={selected.includes(interest.id) ? "default" : "outline"}
            className={selected.includes(interest.id) ? "bg-primary" : ""}
            onClick={() => toggleInterest(interest.id)}
          >
            {selected.includes(interest.id) && <Check className="mr-1 h-4 w-4" />}
            {interest.label}
          </Button>
        ))}
      </div>
      <Button 
        onClick={() => onSelect(selected)} 
        disabled={selected.length === 0}
        className="w-full"
      >
        Fortsett
      </Button>
    </div>
  );
};

const FeaturesCarousel: React.FC = () => {
  const features = [
    { title: "Smart Skriving", description: "Få hjelp med å skrive, redigere og forbedre tekst." },
    { title: "Idegenererig", description: "Brainstorm ideer og konsepter for nye prosjekter." },
    { title: "Personlige Assistenter", description: "Tilpass Norea med spesialiserte assistenter." }
  ];
  
  return (
    <Card className="rounded-lg overflow-hidden">
      <Tabs defaultValue="0" className="w-full">
        <TabsList className="flex w-full justify-center gap-2 p-2">
          {features.map((_, i) => (
            <TabsTrigger key={i} value={i.toString()} className="rounded-full w-2 h-2 p-0 bg-muted" />
          ))}
        </TabsList>
        
        {features.map((feature, i) => (
          <TabsContent key={i} value={i.toString()} className="m-0">
            <CardContent className="p-6 flex flex-col gap-4 items-center text-center">
              <div className="w-full aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 rounded-lg flex items-center justify-center">
                <span className="text-xl">Feature {i+1} Demo</span>
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};

const VideoEmbed: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="aspect-video bg-muted flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-muted-foreground mb-2">Video demo ville vises her</p>
          <Button variant="outline" size="sm">Se demo</Button>
        </div>
      </div>
    </div>
  );
};

const UseCaseSelector: React.FC<{ onSelect: (useCase: string) => void }> = ({ onSelect }) => {
  const useCases = [
    "Skrivearbeid",
    "Idéutvikling",
    "Kunnskapsøk",
    "Personlig hjelp"
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {useCases.map(useCase => (
        <Button 
          key={useCase} 
          variant="outline"
          className="justify-start px-4 py-6 h-auto"
          onClick={() => onSelect(useCase)}
        >
          {useCase}
        </Button>
      ))}
    </div>
  );
};

const TemplateGallery: React.FC<{ useCase: string }> = ({ useCase }) => {
  const templates = [
    { title: "Oppgaveliste", description: "Hold oversikt over gjøremål" },
    { title: "Møtenotater", description: "Strukturer møtereferater" },
    { title: "Idéutvikling", description: "Brainstorming og konseptutvikling" },
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {templates.map((template, i) => (
        <Card key={i} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-900 flex items-center justify-center">
              <span>Mal {i+1}</span>
            </div>
            <div className="p-3">
              <h4 className="font-medium">{template.title}</h4>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const FeedbackSelector: React.FC<{ onSelect: (feedback: string) => void }> = ({ onSelect }) => {
  const feedbackOptions = [
    "Veldig bra! Alt var tydelig.",
    "Ganske bra, men noen ting var forvirrende.",
    "Det var greit.",
    "Ikke så bra, jeg trenger mer hjelp."
  ];
  
  return (
    <div className="flex flex-col gap-2">
      {feedbackOptions.map(feedback => (
        <Button 
          key={feedback} 
          variant="outline"
          className="justify-start"
          onClick={() => onSelect(feedback)}
        >
          {feedback}
        </Button>
      ))}
    </div>
  );
};

export default OnboardingChat;
