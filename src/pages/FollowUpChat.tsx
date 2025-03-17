
import React, { useState, useRef, useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Message } from '@/components/message/Message';
import { FollowUpPrompts } from '@/components/message/FollowUpPrompts';
import { MessageInput } from '@/components/MessageInput';

type MessageType = {
  id: string;
  content: string;
  role: 'user' | 'ai';
  followUpPrompts?: { id: string; text: string }[];
};

const initialMessages: MessageType[] = [
  {
    id: '1',
    role: 'user',
    content: 'Fortell meg om OpenAI sine språkmodeller'
  },
  {
    id: '2',
    role: 'ai',
    content: `OpenAI har utviklet flere generasjoner av språkmodeller som har revolusjonert hvordan vi interagerer med kunstig intelligens.

De mest kjente modellene deres inkluderer GPT-serien (Generative Pre-trained Transformer), som har gått gjennom flere iterasjoner, fra GPT-1 til de nyeste GPT-4o og o1 modellene.

Disse modellene er trent på enorme mengder tekst fra internett og bøker, og kan generere menneskelignende tekst, oversette språk, skrive ulike former for kreativt innhold, og svare på spørsmål på en informativ måte.

OpenAI har også utviklet spesialiserte varianter som DALL-E for bildegenerering, Whisper for talegjenkjenning, og Codex som er skreddersydd for kodeforståelse og -generering.

Med hver nye modell har det vært betydelige forbedringer i evnen til å forstå kontekst, generere mer presise svar, og håndtere mer komplekse oppgaver.`,
    followUpPrompts: [
      { id: 'fp1', text: 'Hva er hovedforskjellene mellom o1 og o3 modeller?' },
      { id: 'fp2', text: 'Hvordan forbedrer o1-modellen seg fra GPT-4o?' },
      { id: 'fp3', text: 'Hvilke spesifikke oppgaver er o1-modellen best egnet for?' },
      { id: 'fp4', text: 'Hvordan fungerer den simulerte resonneringsprosessen i o3?' },
      { id: 'fp5', text: 'Hva var kodenavnet for o1-modellen før den offisielle lanseringen?' }
    ]
  }
];

const FollowUpChat: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: MessageType = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response based on the question
    setTimeout(() => {
      let aiResponse: MessageType;
      
      // Custom responses for follow-up questions
      if (content.includes('o1 og o3')) {
        aiResponse = {
          id: `ai-${Date.now()}`,
          role: 'ai',
          content: `Hovedforskjellene mellom o1 og o3 modeller ligger i deres arkitektur, kapasitet, og anvendelsesområder:

1. **Arkitektur og størrelse**: o3 er betydelig større enn o1, med flere parametere som gir den mer kapasitet til å håndtere komplekse oppgaver.

2. **Resonneringsevne**: o3 har avanserte mekanismer for simulert resonnering som gjør den i stand til å utføre mer sofistikert problemløsning enn o1.

3. **Spesialisering**: Mens o1 er optimalisert for rask og effektiv behandling av vanlige oppgaver, er o3 designet for mer dyptgående analyser og kompleks tenkning.

4. **Responstid**: o1 er generelt raskere enn o3 på grunn av sin mindre størrelse, noe som gjør den bedre egnet for sanntidsapplikasjoner.

5. **Ressurskrav**: o3 krever betydelig mer beregningskraft for å kjøre enn o1, noe som påvirker både kostnad og tilgjengelighet.`,
          followUpPrompts: [
            { id: 'fp6', text: 'Hvordan påvirker størrelsen til o3 dens effektivitet?' },
            { id: 'fp7', text: 'Hvilke typer oppgaver er o3 best på sammenlignet med o1?' },
            { id: 'fp8', text: 'Hva er fordelene med å bruke o1 over o3?' }
          ]
        };
      } else if (content.includes('o1-modellen seg fra GPT-4o')) {
        aiResponse = {
          id: `ai-${Date.now()}`,
          role: 'ai',
          content: `o1-modellen representerer en betydelig forbedring fra GPT-4o på flere områder:

1. **Effektivitet**: o1 er optimalisert for å levere raske svar med mindre ressursbruk, noe som gjør den mer kostnadseffektiv.

2. **Multimodal forståelse**: Mens GPT-4o hadde noen multimodale evner, har o1 en mer sømløs integrering av tekst, bilde, og kontekstuell forståelse.

3. **Redusert hallusinasjon**: o1 viser betydelig reduksjon i tendensen til å generere feilinformasjon eller "hallusinere" fakta sammenlignet med GPT-4o.

4. **Instruksjonsfølging**: o1 er mer presis i å følge komplekse instruksjoner og forstå nyanser i brukerforespørsler.

5. **Kontekstuell hukommelse**: o1 har forbedret evne til å holde styr på og referere til tidligere deler av samtalen.`,
          followUpPrompts: [
            { id: 'fp9', text: 'Hvordan ble treningsprosessen forbedret fra GPT-4o til o1?' },
            { id: 'fp10', text: 'Hvilke reelle brukstilfeller viser størst forbedring med o1?' }
          ]
        };
      } else {
        // Default response for other questions
        aiResponse = {
          id: `ai-${Date.now()}`,
          role: 'ai',
          content: `Takk for spørsmålet ditt om "${content}". 

Dette er en demonstrasjon av oppfølgingsspørsmål-funksjonaliteten, så jeg gir deg et generelt svar her.

I en fullstendig implementasjon ville dette svaret vært generert av en AI-modell basert på ditt spesifikke spørsmål, og relevante oppfølgingsspørsmål ville blitt foreslått basert på konteksten i samtalen.

Prøv gjerne å trykke på noen av de foreslåtte oppfølgingsspørsmålene for å se hvordan denne funksjonen fungerer!`,
          followUpPrompts: [
            { id: `fp-new-1-${Date.now()}`, text: 'Hvordan kan oppfølgingsspørsmål forbedre brukeropplevelsen?' },
            { id: `fp-new-2-${Date.now()}`, text: 'Hvordan genereres relevante oppfølgingsspørsmål?' }
          ]
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleFollowUpClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <PageContainer title="Oppfølgingsforslag Chat" showBackButton={true}>
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto" ref={chatContainerRef}>
          <div className="max-w-3xl mx-auto p-4">
            {messages.map((message) => (
              <div key={message.id} className="mb-6 after:content-[''] after:clear-both after:table">
                <Message
                  role={message.role}
                  content={message.content}
                />
                
                {message.role === 'ai' && message.followUpPrompts && (
                  <div className="float-left clear-both max-w-[85%]">
                    <FollowUpPrompts 
                      prompts={message.followUpPrompts}
                      onPromptClick={handleFollowUpClick}
                    />
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
            placeholder="Still et spørsmål om språkmodeller..."
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default FollowUpChat;
