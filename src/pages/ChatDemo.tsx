
import React, { useRef, useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { MessageInput } from "@/components/MessageInput";
import { Message } from '@/components/message/Message';
import { ChatInputContainer } from '@/components/ChatInputContainer';

const ChatDemo = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Forbedret samtaledata med rikere markdown-formatering
  const conversation = [
    {
      role: 'user' as const,
      content: 'Hei, kan du forklare meg hva kvantedatabehandling er?'
    },
    {
      role: 'ai' as const,
      content: '# Kvantedatabehandling\n\nKvantedatabehandling er behandling av data som bruker kvantefysikkens prinsipper for å utføre beregninger. Dette involverer bruk av **kvantebit** (qubits) i stedet for vanlige binære bits.\n\nTil forskjell fra klassiske datamaskiner som bruker bits (0 eller 1), kan kvantedatamaskiner utnytte kvantemekaniske fenomener som:\n\n- Superposisjon\n- Sammenfiltring\n- Interferens'
    },
    {
      role: 'user' as const,
      content: 'Hvordan vil dette påvirke vanlige mennesker i fremtiden?'
    },
    {
      role: 'ai' as const,
      content: '# Hvordan kvantedatabehandling vil påvirke vanlige mennesker\n\nKvantedatabehandling vil sannsynligvis påvirke vanlige mennesker på flere områder, både direkte og indirekte:\n\n## Medisin og helse\n\n- **Persontilpasset medisin**: Mer nøyaktig simulering av hvordan legemidler virker i kroppen kan føre til bedre persontilpassede behandlinger\n- **Oppdagelse av nye medisiner**: Raskere utvikling av nye legemidler for sykdommer som i dag er vanskelige å behandle\n- **Diagnostisk presisjon**: Avanserte analyser av medisinske data kan gi tidligere og mer nøyaktige diagnoser\n\n## Dagligliv og teknologi\n\n- **Smartere AI-assistenter**: Mer sofistikerte og naturlige interaksjoner med digitale assistenter\n- **Trafikkoptimalisering**: Bedre trafikkstyring og ruteplanegging som reduserer reisetid\n- **Værprognoser**: Mer nøyaktige langtidsprognoser som kan varsle ekstremvær tidligere\n\n## Økonomiske innvirkninger\n\n1. Nye jobber og industrier: Fremvekst av kvanteteknologirelaterte karrierer\n2. Finansielle tjenester: Mer sofistikerte finansielle modeller som kan gi bedre investeringsråd\n3. Forbrukerteknologi: På lang sikt vil kvanteteknologi sannsynligvis bli integrert i forbrukerelektronikk\n\n## Sikkerhet og personvern\n\n```\nNye krypteringsstandarder vil være nødvendige for å beskytte mot kvantecomputing-angrep\nKvanteresistente algoritmer utvikles allerede nå\n```\n\nDu kan lese mer om kvantekryptering [her](https://www.example.com/quantum-encryption).\n\n> Kvantedatabehandling representerer et paradigmeskifte i hvordan vi behandler informasjon, og vil endre mange industrier fundamentalt.'
    },
    {
      role: 'user' as const,
      content: 'Kan du gi meg noen konkrete eksempler på områder der kvantedatabehandling allerede er i bruk?'
    },
    {
      role: 'ai' as const,
      content: '## Konkrete eksempler på kvantedatabehandling i bruk i dag\n\nSelvom kvantedatabehandling fortsatt er i en tidlig fase, er det flere områder hvor teknologien allerede anvendes eller utforskes aktivt:\n\n### Forskningsområder med aktiv bruk\n\n- **Kryptografi**: Utvikling av kvanteresistente krypteringsalgoritmer og kvantekryptering\n- **Materialsimulering**: Simulering av molekylære strukturer for utvikling av nye materialer\n- **Optimalisering**: Løsning av komplekse optimaliseringsproblemer i logistikk og finans\n\n### Kommersielle anvendelser under utvikling\n\n| Selskap | Anvendelsesområde | Status |\n|---------|-------------------|--------|\n| IBM | Kvantekjemi | Tilgjengelig via cloud |\n| Google | Kvantemekaniske simuleringer | Forskningsstadiet |\n| D-Wave | Optimaliseringsproblemer | Kommersiell bruk |\n| Microsoft | Kvanteprogramvare | Utviklingsstadiet |\n\n### Praktiske eksempler\n\n1. **Farmakologisk forskning**: Selskaper som Biogen bruker kvantecomputing for å simulere proteinfolding, noe som kan akselerere legemiddelutviklingen\n\n2. **Finansiell modellering**: JPMorgan Chase og Goldman Sachs eksperimenterer med kvantealgorithmer for porteføljeoptimalisering og risikoanalyse\n\n3. **Trafikkoptimalisering**: Volkswagen har testet trafikkoptimalisering i byer som Beijing ved hjelp av kvantealgorithmer\n\nDette er bare begynnelsen. Ettersom kvantedatamaskiner blir mer kapable, vil antall praktiske anvendelser øke betydelig.'
    }
  ];

  // Scroll to bottom when messages are loaded
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  const handleSendMessage = (message: string) => {
    console.log("Message sent:", message);
    // In a real application, this would add the message to the conversation
  };

  return (
    <PageContainer title="Forstå kvantedatabehandling" showBackButton={true}>
      <div className="flex-1 overflow-hidden flex flex-col relative">
        <div className="flex-1 overflow-y-auto pb-24" ref={chatContainerRef}>
          <div className="max-w-3xl mx-auto">
            {conversation.map((message, index) => (
              <div key={index} className="mb-1 after:content-[''] after:clear-both after:table">
                <Message
                  role={message.role}
                  content={message.content}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Position the chat input at the bottom */}
        <ChatInputContainer position="relative" className="mt-auto">
          <MessageInput 
            onSendMessage={handleSendMessage}
            className="w-full"
            placeholder="Send en melding..."
          />
        </ChatInputContainer>
      </div>
    </PageContainer>
  );
};

export default ChatDemo;
