
import React, { useRef, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { MessageInput } from "@/components/MessageInput";
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Message } from '@/components/message/Message';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

const ChatDemo = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Update sidebar state when screen size changes
  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      content: 'Hvordan fungerer qubits?'
    },
    {
      role: 'ai' as const,
      content: '## Hvordan qubits fungerer\n\nQubits er grunnleggende enheter i kvantedatabehandling, og de fungerer fundamentalt annerledes enn klassiske bits.\n\n### Hovedegenskaper ved qubits\n\n1. **Superposisjon**: I motsetning til klassiske bits som kan være enten 0 eller 1, kan qubits eksistere i en "superposisjon" av begge tilstander samtidig. Dette betyr at en qubit kan representere både 0 og 1 på samme tid, med ulike sannsynligheter.\n\n2. **Sammenfiltring (Entanglement)**: Qubits kan være "sammenfiltret", noe som betyr at tilstanden til én qubit er direkte avhengig av tilstanden til en annen, uansett avstand mellom dem. Dette er en svært kraftig egenskap som ikke eksisterer i klassisk databehandling.\n\n3. **Målinger endrer tilstanden**: Når man måler en qubit, kollapser superposisjonen til én av de klassiske tilstandene (0 eller 1). Før måling eksisterer qubit i en probabilistisk tilstand.\n\nMatemematisk kan vi beskrive en qubit som:\n\n```\n|ψ⟩ = α|0⟩ + β|1⟩\n```\n\nDer |ψ⟩ representerer qubit-tilstanden, og α og β er komplekse tall som bestemmer sannsynligheten for å måle henholdsvis 0 eller 1.'
    },
    {
      role: 'user' as const,
      content: 'Hvilke praktiske anvendelser har kvantedatabehandling?'
    },
    {
      role: 'ai' as const,
      content: '# Praktiske anvendelser av kvantedatabehandling\n\nKvantedatabehandling har flere potensielle praktiske anvendelser, selv om mange fortsatt er under utvikling:\n\n## Kryptografi og sikkerhet\n\n- Kvantekryptografi tilbyr teoretisk ubrytelig kryptering\n- Shors algoritme kan potensielt knekke dagens vanlige krypteringssystemer\n- Post-kvantum kryptografi utvikles for å motstå kvanteangrep\n\n## Materialvitenskap og kjemi\n\n- Simulering av molekyler og materialer på kvantenivå\n- Utvikling av nye medisiner og materialer\n- Optimalisering av kjemiske reaksjoner\n\n## Maskinlæring og AI\n\n- Kvante-maskinlæring kan potensielt løse komplekse problemer raskere\n- Mønstergjenkjenning i enormt store datasett\n- Kvantenevralt nettverk for avansert klassifisering\n\n## Finansiell modellering\n\n- Porteføljeoptimalisering\n- Risikanalyse\n- Monte Carlo-simuleringer for markedsprediksjon\n\n## Logistikk og optimalisering\n\n- Løsning av komplekse ruteproblemer\n- Forsyningskjedeoptimalisering\n- Trafikkflytmodellering\n\nDet er viktig å merke seg at mange av disse anvendelsene fortsatt er i forsknings- eller tidlig utviklingsfase, men potensialet for transformativ innvirkning er betydelig.'
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
    <div className="h-screen w-full flex overflow-hidden bg-backdrop">
      {/* Sidebar component - positioned as overlay on mobile */}
      <div className={`
        ${isMobile ? 'fixed z-50 transition-transform duration-300 ease-in-out' : ''}
        ${(isMobile && !isSidebarOpen) ? '-translate-x-full' : 'translate-x-0'}
      `}>
        {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      </div>
      
      {/* Canvas - where main content is rendered */}
      <div className="flex-1 md:p-content-md flex items-center justify-center">
        <div className={`
          w-full h-full 
          max-w-canvas 
          bg-canvas 
          md:rounded-lg 
          md:border md:border-canvas-border 
          md:shadow-surface-sm 
          flex flex-col 
          overflow-hidden
        `}>
          {!isSidebarOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 left-4 z-10"
              onClick={toggleSidebar}
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
          )}
          
          <Header 
            title="Forstå kvantedatabehandling" 
            showBackButton={true}
          />
          
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
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;
