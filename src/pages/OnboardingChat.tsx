
import React, { useState, useRef, useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Message } from '@/components/message/Message';
import { MessageInput } from '@/components/MessageInput';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Check, ArrowRight, User, MessageCircle, Info, Settings, Video, Image, List, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define message types
type MessageRole = 'user' | 'ai';

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  component?: React.ReactNode;
}

interface OnboardingOption {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

// Progress bar component that stays at the top on mobile
const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="sticky top-0 z-10 w-full">
      <div className="max-w-3xl mx-auto px-4">
        <Progress value={value} className="h-2 mb-2 bg-secondary/30" />
        <div className="flex justify-between text-xs text-muted-foreground mb-4">
          <span>Onboarding</span>
          <span>{Math.round(value)}% fullført</span>
        </div>
      </div>
    </div>
  );
};

// Image carousel component
const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="border border-border rounded-lg overflow-hidden">
              <img src={src} alt={`Feature screenshot ${index + 1}`} className="w-full h-auto" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

// Video component
const VideoEmbed = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm">
      <div className="aspect-video w-full">
        <iframe 
          width="100%" 
          height="100%" 
          src={src} 
          title={title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-3 text-sm font-medium">{title}</div>
    </div>
  );
};

// Options component with buttons
const OptionButtons = ({ 
  options, 
  onSelect 
}: { 
  options: OnboardingOption[]; 
  onSelect: (option: string) => void 
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg mt-2">
      {options.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          className="justify-start gap-2 py-6 px-4 h-auto"
          onClick={() => onSelect(option.id)}
        >
          {option.icon}
          <span>{option.text}</span>
        </Button>
      ))}
    </div>
  );
};

// User preferences component
const UserPreferences = ({ 
  preferences,
  selectedPreferences,
  onToggle
}: { 
  preferences: { id: string; text: string }[];
  selectedPreferences: string[];
  onToggle: (id: string) => void;
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full max-w-lg mt-2">
      {preferences.map((pref) => {
        const isSelected = selectedPreferences.includes(pref.id);
        return (
          <Button
            key={pref.id}
            variant={isSelected ? "default" : "outline"}
            className={cn(
              "h-auto py-3 px-4",
              isSelected && "bg-primary text-primary-foreground"
            )}
            onClick={() => onToggle(pref.id)}
          >
            {isSelected && <Check className="mr-2 h-4 w-4" />}
            {pref.text}
          </Button>
        );
      })}
    </div>
  );
};

const OnboardingChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [userExperience, setUserExperience] = useState("");
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: "welcome",
      role: "ai",
      content: "Hei! Jeg er Norea AI, din personlige assistent. Jeg vil hjelpe deg med å sette opp din profil slik at vi kan skape en mer personlig opplevelse for deg.",
      component: (
        <OptionButtons
          options={[
            { id: "start", text: "La oss komme i gang", icon: <ArrowRight className="h-4 w-4" /> },
          ]}
          onSelect={handleStartOnboarding}
        />
      )
    };
    setMessages([welcomeMessage]);
  }, []);

  // Handle start onboarding
  const handleStartOnboarding = () => {
    addAIMessage({
      id: "name-prompt",
      role: "ai",
      content: "Flott! Hva heter du?",
    });
    setProgress(10);
    setStep(1);
  };

  // Handle name submission
  const handleNameSubmission = (name: string) => {
    setUserName(name);
    addUserMessage(name);
    
    setTimeout(() => {
      addAIMessage({
        id: "experience-prompt",
        role: "ai",
        content: `Takk, ${name}! Fortell meg litt om din erfaring med AI assistenter. Har du brukt lignende tjenester før?`,
        component: (
          <OptionButtons
            options={[
              { id: "beginner", text: "Jeg er nybegynner", icon: <User className="h-4 w-4" /> },
              { id: "intermediate", text: "Jeg har brukt AI litt", icon: <MessageCircle className="h-4 w-4" /> },
              { id: "expert", text: "Jeg er en erfaren bruker", icon: <Settings className="h-4 w-4" /> }
            ]}
            onSelect={handleExperienceSelection}
          />
        )
      });
      setProgress(25);
      setStep(2);
    }, 500);
  };

  // Handle experience selection
  const handleExperienceSelection = (experienceLevel: string) => {
    setUserExperience(experienceLevel);

    let experienceText = "";
    switch (experienceLevel) {
      case "beginner":
        experienceText = "Jeg er nybegynner";
        break;
      case "intermediate":
        experienceText = "Jeg har brukt AI litt";
        break;
      case "expert":
        experienceText = "Jeg er en erfaren bruker";
        break;
    }

    addUserMessage(experienceText);
    
    setTimeout(() => {
      addAIMessage({
        id: "tour-intro",
        role: "ai",
        content: `Takk for informasjonen, ${userName}! La meg vise deg noen av funksjonene Norea AI tilbyr:`,
        component: (
          <ImageCarousel 
            images={[
              "/placeholder.svg",
              "/placeholder.svg",
              "/placeholder.svg"
            ]} 
          />
        )
      });
      setProgress(40);
      setStep(3);
      
      setTimeout(() => {
        addAIMessage({
          id: "video-demo",
          role: "ai",
          content: "Her er en kort video som viser hvordan du kan bruke Norea AI i hverdagen:",
          component: (
            <VideoEmbed 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Hvordan bruke Norea AI" 
            />
          )
        });
        setProgress(55);
        setStep(4);
        
        setTimeout(() => {
          addAIMessage({
            id: "preferences-prompt",
            role: "ai",
            content: "Hvilke temaer er du mest interessert i? Velg så mange du vil:",
            component: (
              <UserPreferences
                preferences={[
                  { id: "news", text: "Nyheter" },
                  { id: "tech", text: "Teknologi" },
                  { id: "health", text: "Helse" },
                  { id: "finance", text: "Økonomi" },
                  { id: "culture", text: "Kultur" },
                  { id: "science", text: "Vitenskap" }
                ]}
                selectedPreferences={selectedPreferences}
                onToggle={handlePreferenceToggle}
              />
            )
          });
          setProgress(70);
          setStep(5);
        }, 1000);
      }, 1000);
    }, 500);
  };

  // Handle preference toggle
  const handlePreferenceToggle = (id: string) => {
    setSelectedPreferences(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Handle continue after preferences
  const handleContinueAfterPreferences = () => {
    const selectedText = selectedPreferences.length > 0
      ? `Valgte interesser: ${selectedPreferences.join(", ")}`
      : "Ingen spesifikke interesser valgt";
    
    addUserMessage(selectedText);
    
    setTimeout(() => {
      addAIMessage({
        id: "privacy-intro",
        role: "ai",
        content: "Takk for dine valg! Personvern er viktig for oss. Her er hvordan vi håndterer dataene dine:",
        component: (
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 space-y-3 max-w-lg">
            <div className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium mb-1">Kryptert data</h4>
                <p className="text-sm text-muted-foreground">All kommunikasjon mellom deg og Norea AI er kryptert</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium mb-1">Datakontroll</h4>
                <p className="text-sm text-muted-foreground">Du kan når som helst be om innsyn eller sletting av dine data</p>
              </div>
            </div>
            <Button 
              className="w-full mt-2" 
              onClick={handlePrivacyConfirmation}
            >
              Jeg forstår og godtar
            </Button>
          </div>
        )
      });
      setProgress(85);
      setStep(6);
    }, 500);
  };

  // Handle privacy confirmation
  const handlePrivacyConfirmation = () => {
    addUserMessage("Jeg forstår og godtar personvernbetingelsene");
    
    setTimeout(() => {
      addAIMessage({
        id: "completion",
        role: "ai",
        content: `Fantastisk, ${userName}! Din profil er nå satt opp og jeg er klar til å hjelpe deg. Du kan stille meg spørsmål, be om hjelp, eller utforske Norea AI videre.`,
        component: (
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 max-w-lg">
            <h3 className="font-medium text-lg mb-3">Din profil er klar!</h3>
            <div className="space-y-2 text-sm mb-4">
              <p><span className="font-medium">Navn:</span> {userName}</p>
              <p><span className="font-medium">Erfaringsnivå:</span> {userExperience === "beginner" ? "Nybegynner" : userExperience === "intermediate" ? "Middels" : "Erfaren"}</p>
              <p><span className="font-medium">Interesser:</span> {selectedPreferences.length > 0 ? selectedPreferences.join(", ") : "Ingen spesifikke interesser valgt"}</p>
            </div>
            <Button 
              className="w-full" 
              onClick={handleFinishOnboarding}
            >
              Start å bruke Norea AI
            </Button>
          </div>
        )
      });
      setProgress(100);
      setStep(7);
    }, 500);
  };

  // Handle finish onboarding
  const handleFinishOnboarding = () => {
    addUserMessage("Start å bruke Norea AI");
    
    setTimeout(() => {
      addAIMessage({
        id: "final",
        role: "ai",
        content: `Takk for at du fullførte onboarding-prosessen, ${userName}! Jeg er her for å hjelpe deg med det du trenger. Bare spør i vei!`
      });
    }, 500);
  };

  // Handle user message submission
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    
    setUserInput("");
    
    if (step === 1) {
      handleNameSubmission(message);
    } else if (step === 5 && selectedPreferences.length > 0) {
      handleContinueAfterPreferences();
    } else {
      addUserMessage(message);
      
      // Simple echo response for demo purposes
      setTimeout(() => {
        addAIMessage({
          id: `response-${Date.now()}`,
          role: "ai",
          content: `Takk for meldingen, ${userName}! Som en demo-chat kan jeg ikke svare på spesifikke spørsmål akkurat nå, men i en faktisk implementasjon ville jeg gitt et nyttig svar basert på din profil og dine preferanser.`
        });
      }, 500);
    }
  };

  // Add user message
  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Add AI message
  const addAIMessage = (message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
  };

  return (
    <PageContainer title="Onboarding-chat" showBackButton={true}>
      <div className="flex-1 overflow-hidden flex flex-col">
        <ProgressBar value={progress} />
        
        <div className="flex-1 overflow-y-auto" ref={chatContainerRef}>
          <div className="max-w-3xl mx-auto p-4">
            {messages.map((message) => (
              <div key={message.id} className="mb-6 after:content-[''] after:clear-both after:table">
                <Message
                  role={message.role}
                  content={message.content}
                />
                {message.component && (
                  <div className={cn(
                    "mt-3",
                    message.role === "user" ? "float-right clear-both" : "float-left clear-both"
                  )}>
                    {message.component}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-border">
          <MessageInput 
            onSendMessage={handleSendMessage}
            className="max-w-3xl mx-auto"
            placeholder={
              step === 1 ? "Skriv navnet ditt..." : 
              step === 5 && selectedPreferences.length > 0 ? "Klikk på interessene dine og trykk Enter når du er ferdig..." :
              "Skriv en melding..."
            }
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default OnboardingChat;
