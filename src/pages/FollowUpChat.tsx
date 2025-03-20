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
    content: `# OpenAI språkmodeller

OpenAI har utviklet flere generasjoner av språkmodeller som har revolusjonert hvordan vi interagerer med kunstig intelligens.

## GPT-serien

De mest kjente modellene deres inkluderer GPT-serien (Generative Pre-trained Transformer), som har gått gjennom flere iterasjoner:

- GPT-1: Den første modellen lansert i 2018
- GPT-2: Lansert i 2019 med betydelig forbedret kapasitet
- GPT-3: En dramatisk oppskalering lansert i 2020
- GPT-4: Den nyeste hovedmodellen med multimodal kapasitet
- GPT-4o: Optimalisert for raskere respons og multimodale oppgaver
- o1: Den nyeste modellen med forbedrede resoneringsferdigheter

## Andre viktige modeller

OpenAI har også utviklet spesialiserte varianter som:

1. **DALL-E**: For bildegenerering basert på tekstbeskrivelser
2. **Whisper**: For talegjenkjenning og transkripsjon
3. **Codex**: Skreddersydd for kodeforståelse og -generering

Med hver nye modell har det vært betydelige forbedringer i evnen til å forstå kontekst, generere mer presise svar, og håndtere mer komplekse oppgaver.`,
    followUpPrompts: [
      { id: 'fp1', text: 'Hva er hovedforskjellene mellom o1 og GPT-4 modeller?' },
      { id: 'fp2', text: 'Hvordan forbedrer o1-modellen seg fra GPT-4o?' },
      { id: 'fp3', text: 'Hvilke spesifikke oppgaver er o1-modellen best egnet for?' },
      { id: 'fp4', text: 'Hvordan fungerer den simulerte resonneringsprosessen i o1?' },
      { id: 'fp5', text: 'Hva var kodenavnet for o1-modellen før den offisielle lanseringen?' }
    ]
  }
];

const FollowUpChat: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    const userMessage: MessageType = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      let aiResponse: MessageType;
      
      if (content.includes('o1 og GPT-4')) {
        aiResponse = {
          id: `ai-${Date.now()}`,
          role: 'ai',
          content: `## Hovedforskjeller mellom o1 og GPT-4 modeller

### Arkitektur og ytelse
- **o1**: Bruker en ny arkitektur optimalisert for resonneringsoppgaver
- **GPT-4**: Basert på den tradisjonelle Transformer-arkitekturen

### Kapasiteter
o1 utmerker seg spesielt på:
- Stegvis resonnering
- Matematisk problemløsning
- Kodeforståelse og -generering
- Konsekvent tankegang

### Feilreduksjon
o1 har betydelig lavere frekvens av:
- Hallusinasjoner
- Logiske feil
- Faktuelle unøyaktigheter

### Responsformat
- **o1**: Produserer mer strukturerte og velbegrunnede svar
- **GPT-4**: Mer generaliserende og mindre konsekvent i resoneringsmetoder

> "o1 representerer et kvalitativt skift i hvordan AI-modeller håndterer komplekse resonneringsoppgaver" - OpenAI

### Brukssituasjoner
| Modell | Best egnet for | Mindre egnet for |
|--------|----------------|------------------|
| o1     | Komplekse resonneringsoppgaver | Generative kreative oppgaver |
| GPT-4  | Generell bruk, kreativ skriving | Avansert matematikk, koding |`,
          followUpPrompts: [
            { id: 'fp6', text: 'Hvordan påvirker arkitekturen til o1 dens effektivitet?' },
            { id: 'fp7', text: 'Hvilke typer oppgaver er o1 best på sammenlignet med GPT-4?' },
            { id: 'fp8', text: 'Hva er fordelene med å bruke GPT-4 over o1?' }
          ]
        };
      } else if (content.includes('o1-modellen seg fra GPT-4o')) {
        aiResponse = {
          id: `ai-${Date.now()}`,
          role: 'ai',
          content: `# Forbedringer i o1-modellen sammenlignet med GPT-4o

o1-modellen representerer en betydelig forbedring fra GPT-4o på flere områder:

## 1. Resonneringsevne
- **Stegvis løsning**: o1 er designet for å bryte ned komplekse problemer i logiske steg
- **Konsistens**: Betydelig mer konsekvent i resonneringsmetoder over forskjellige oppgaver

## 2. Tekniske ferdigheter
o1 viser overlegne ferdigheter innen:
- Matematisk problemløsning
- Koding (mer presis og feilfri)
- Logiske analyser

## 3. Redusert hallusinasjon
o1 viser betydelig reduksjon i:
- Faktuell hallusinasjon
- Selvmotsigende innhold
- Udokumenterte påstander

## 4. Effektivitet
- Raskere på visse typer komplekse oppgaver
- Mer målrettet i problemløsningsprosessen

## 5. Kontekstuell forståelse
- Bedre til å fastholde viktig informasjon gjennom lange resonnementer
- Mer presis i å følge komplekse flertrinns instruksjoner`,
          followUpPrompts: [
            { id: 'fp9', text: 'Hvordan ble treningsprosessen forbedret fra GPT-4o til o1?' },
            { id: 'fp10', text: 'Hvilke reelle brukstilfeller viser størst forbedring med o1?' }
          ]
        };
      } else {
        aiResponse = {
          id: `ai-${Date.now()}`,
          role: 'ai',
          content: `# Svar på spørsmålet ditt

Takk for spørsmålet ditt om "${content}". 

Dette er en demonstrasjon av oppfølgingsspørsmål-funksjonaliteten, så jeg gir deg et generelt svar her.

## Om denne demonstrasjonen

I en fullstendig implementasjon ville dette svaret vært generert av en AI-modell basert på ditt spesifikke spørsmål, og relevante oppfølgingsspørsmål ville blitt foreslått basert på konteksten i samtalen.

### Hvordan oppfølgingsspørsmål fungerer

Oppfølgingsspørsmål kan:
- Hjelpe brukere med å utforske relaterte temaer
- Oppklare uklarheter fra forrige svar
- Guide samtalen i en mer produktiv retning

> Prøv gjerne å trykke på noen av de foreslåtte oppfølgingsspørsmålene for å se hvordan denne funksjonen fungerer!`,
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
          <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
              <div key={message.id} className="mb-2 after:content-[''] after:clear-both after:table">
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
