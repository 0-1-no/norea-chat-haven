
import React, { useRef, useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { MessageInput } from "@/components/MessageInput";
import { Message } from '@/components/message/Message';

const ChatDemo = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Improved conversation data with better structure for readability
  const conversation = [
    {
      role: 'user' as const,
      content: 'Hei, kan du forklare meg hva kvantedatabehandling er?'
    },
    {
      role: 'ai' as const,
      content: 'Kvantedatabehandling er behandling av data som bruker kvantefysikkens prinsipper for å utføre beregninger. Dette involverer bruk av kvantebit (qubits) i stedet for vanlige binære bits.\n\nTil forskjell fra klassiske datamaskiner som bruker bits (0 eller 1), kan kvantedatamaskiner utnytte kvantemekaniske fenomener som superposisjon og sammenfiltring.'
    },
    {
      role: 'user' as const,
      content: 'Hvordan vil dette påvirke vanlige mennesker i fremtiden?'
    },
    {
      role: 'ai' as const,
      content: '# Hvordan kvantedatabehandling vil påvirke vanlige mennesker\n\nKvantedatabehandling vil sannsynligvis påvirke vanlige mennesker på flere områder, både direkte og indirekte:\n\n## Medisin og helse\n\n- **Persontilpasset medisin**: Mer nøyaktig simulering av hvordan legemidler virker i kroppen kan føre til bedre persontilpassede behandlinger\n- **Oppdagelse av nye medisiner**: Raskere utvikling av nye legemidler for sykdommer som i dag er vanskelige å behandle\n- **Diagnostisk presisjon**: Avanserte analyser av medisinske data kan gi tidligere og mer nøyaktige diagnoser\n\n## Dagligliv og teknologi\n\n- **Smartere AI-assistenter**: Mer sofistikerte og naturlige interaksjoner med digitale assistenter\n- **Trafikkoptimalisering**: Bedre trafikkstyring og ruteplanegging som reduserer reisetid\n- **Værprognoser**: Mer nøyaktige langtidsprognoser som kan varsle ekstremvær tidligere\n\n## Økonomiske innvirkninger\n\n- **Nye jobber og industrier**: Fremvekst av kvanteteknologirelaterte karrierer\n- **Finansielle tjenester**: Mer sofistikerte finansielle modeller som kan gi bedre investeringsråd\n- **Forbrukerteknologi**: På lang sikt vil kvanteteknologi sannsynligvis bli integrert i forbrukerelektronikk\n\n## Sikkerhet og personvern\n\n- **Nye krypteringsstandarder**: Overgang til kvantemotstandsdyktig kryptering for å beskytte sensitive data\n- **Bedre cybersikkerhet**: Mer robuste sikkerhetsløsninger for å beskytte mot avanserte trusler\n- **Personvern**: Potensielt både utfordringer og løsninger for digital personvern\n\n## Miljø og bærekraft\n\n- **Nye materialer**: Utvikling av mer energieffektive materialer for alt fra batterier til solceller\n- **Klimamodellering**: Bedre forståelse av komplekse klimasystemer og potensielle løsninger\n- **Ressursoptimalisering**: Mer effektiv bruk av ressurser i produksjon og distribusjon\n\nSelvom mange av disse fordelene ligger noen år frem i tid, vil overgangen til kvanteteknologi sannsynligvis skje gradvis, med stadig flere praktiske anvendelser som blir en del av hverdagen vår.'
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
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-6" ref={chatContainerRef}>
          <div className="max-w-3xl mx-auto">
            {conversation.map((message, index) => (
              <div key={index} className="mb-6 after:content-[''] after:clear-both after:table">
                <Message
                  role={message.role}
                  content={message.content}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-border">
          <MessageInput 
            onSendMessage={handleSendMessage}
            className="max-w-3xl mx-auto"
            placeholder="Send en melding..."
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default ChatDemo;
