
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { PageContainer } from '@/components/layout/PageContainer';

const Typography = () => {
  return (
    <PageContainer title="Typografi" showBackButton={true}>
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold break-words">Typografi for Norea AI</h1>
          <p className="text-muted-foreground">
            Typografiske regler for en lesbar og brukervennlig AI-samtaleopplevelse
          </p>
        </div>

        <Separator />

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Grunnprinsipper</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Lesbarhet og klarhet</h3>
                <p className="text-base leading-relaxed">
                  I AI-assisterte samtaler er det essensielt at informasjonen formidles klart og tydelig. 
                  Vi prioriterer lesbarhet over estetikk, med tilstrekkelig linjeavstand, gode kontraster og tydelig hierarki.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Luftig og rytmisk</h3>
                <p className="text-base leading-relaxed">
                  For å unngå "tekstvegger" og øke lesbarheten, bruker vi god linjeavstand og mellomrom mellom 
                  avsnitt. Dette gir øyet pauser og gjør det enklere å følge flyten i informasjonen.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Typeskala</h2>
            <p className="text-base leading-relaxed">
              Vår typografiske skala er optimalisert for digital lesing, med fokus på mobilenheter. 
              Vi bruker en moderat kontrast i skriftstørrelser for å skape et tydelig hierarki uten å virke påtrengende.
            </p>
            
            <div className="mt-6 space-y-8 bg-muted p-4 md:p-6 rounded-lg">
              <div>
                <h1 className="text-4xl font-bold mb-2">Overskrift nivå 1</h1>
                <p className="text-sm text-muted-foreground">32px / 40px linjehøyde / Semi-bold</p>
              </div>
              
              <div>
                <h2 className="text-3xl font-semibold mb-2">Overskrift nivå 2</h2>
                <p className="text-sm text-muted-foreground">24px / 32px linjehøyde / Semi-bold</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium mb-2">Overskrift nivå 3</h3>
                <p className="text-sm text-muted-foreground">20px / 28px linjehøyde / Medium</p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-2">Overskrift nivå 4</h4>
                <p className="text-sm text-muted-foreground">18px / 26px linjehøyde / Medium</p>
              </div>
              
              <div>
                <p className="text-base mb-2">Brødtekst (standard)</p>
                <p className="text-sm text-muted-foreground">16px / 24px linjehøyde / Regular</p>
              </div>
              
              <div>
                <p className="text-sm mb-2">Liten tekst</p>
                <p className="text-sm text-muted-foreground">14px / 20px linjehøyde / Regular</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Font-familier</h2>
            <p className="text-base leading-relaxed">
              Vi bruker en kombinasjon av sans-serif fonter for optimal lesbarhet på skjerm:
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Primær: Inter</h3>
                <p className="text-base font-sans mb-4">
                  Inter er vår primære font for all tekst. Den er optimalisert for skjermlesing med 
                  god lesbarhet selv i mindre størrelser og på mobile enheter.
                </p>
                <div className="space-y-2">
                  <p className="font-normal">Regular (400) - For brødtekst</p>
                  <p className="font-medium">Medium (500) - For undertitler</p>
                  <p className="font-semibold">Semi-bold (600) - For overskrifter</p>
                  <p className="font-bold">Bold (700) - For fremheving</p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Monospace: JetBrains Mono</h3>
                <p className="font-mono text-base mb-4">
                  For kodeblokker og teknisk innhold bruker vi JetBrains Mono, 
                  som er optimalisert for kode med god tegngjenkjenning.
                </p>
                <div className="space-y-2 font-mono">
                  <p className="font-normal">Regular (400)</p>
                  <p className="font-bold">Bold (700)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Tomrom og rytme</h2>
            <p className="text-base leading-relaxed">
              Riktig bruk av tomrom er avgjørende for lesbarhet, spesielt for AI-genererte samtaler 
              hvor store mengder informasjon kan være til stede.
            </p>
            
            <div className="mt-6 space-y-8">
              <div className="bg-muted p-4 md:p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Avsnitt og linjeavstand</h3>
                <div className="bg-background p-3 md:p-4 rounded-md">
                  <p className="mb-4 leading-relaxed">
                    Dette er et eksempel på god linjeavstand (1.5x) som gjør teksten lettere å følge. 
                    Øynene får pusterom mellom linjene, noe som reduserer tretthet ved lesing av lengre tekster.
                  </p>
                  <p className="leading-relaxed">
                    Mellom avsnitt bruker vi 1.5x marginen for å skape en tydelig separasjon, men uten 
                    å bryte flyten i innholdet. Dette er spesielt viktig for AI-genererte svar som ofte 
                    inneholder flere separate punkter eller konsepter.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted p-4 md:p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Strukturell rytme</h3>
                <div className="bg-background p-3 md:p-4 rounded-md">
                  <h4 className="text-xl font-medium mb-2">Praktiske anvendelser av kvantedatabehandling</h4>
                  <div className="pl-2 md:pl-4 space-y-3">
                    <div>
                      <p className="font-medium">Kryptografi og sikkerhet:</p>
                      <ul className="list-disc list-inside pl-2 md:pl-4 space-y-1">
                        <li>Kvantekryptografi tilbyr teoretisk ubrytelig kryptering</li>
                        <li>Shors algoritme kan potensielt knekke dagens vanlige krypteringssystemer</li>
                        <li>Post-kvantum kryptografi utvikles for å motstå kvanteangrep</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium">Materialvitenskap og kjemi:</p>
                      <ul className="list-disc list-inside pl-2 md:pl-4 space-y-1">
                        <li>Simulering av molekyler og materialer på kvantenivå</li>
                        <li>Utvikling av nye medisiner og materialer</li>
                        <li>Optimalisering av kjemiske reaksjoner</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Beste praksis for AI-svar</h2>
            
            <div className="mt-6 space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Hierarki i komplekse svar</h3>
                <p className="text-base leading-relaxed mb-4">
                  For detaljerte AI-svar, bruk en kombinasjon av følgende elementer for å skape tydelighet:
                </p>
                <div className="bg-background p-5 rounded-md space-y-4">
                  <p className="font-medium">1. Overskrifter og underoverskrifter</p>
                  <p className="pl-4">
                    Bruk overskrifter (h2, h3) for å dele opp store tekstblokker og emneskift.
                  </p>
                  
                  <p className="font-medium">2. Listeformater</p>
                  <p className="pl-4">
                    Bruk punktlister for parallelle konsepter og nummererte lister for sekvensielle steg.
                  </p>
                  
                  <p className="font-medium">3. Innrykk og gruppering</p>
                  <p className="pl-4">
                    Bruk innrykk for å vise relasjoner mellom konsepter og skape visuell organisering.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Kodeblokker og teknisk innhold</h3>
                <p className="text-base leading-relaxed mb-4">
                  For kode og teknisk innhold:
                </p>
                <div className="bg-background p-4 rounded-md">
                  <pre className="font-mono text-sm bg-gray-50 p-3 rounded border overflow-x-auto">
{`// Eksempel på kodeblokk
function calculateQuantumState(qubits) {
  return qubits.map(q => q.superposition ? 
    Math.sqrt(0.5) * "|0⟩" + Math.sqrt(0.5) * "|1⟩" : 
    "|0⟩"
  );
}`}
                  </pre>
                  <p className="mt-3 text-sm">
                    Kodeblokker bruker monospace font med litt mindre tekststørrelse (14px) og 
                    har tydelig visuell differensiering fra vanlig tekst.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Responsiv typografi</h2>
            <p className="text-base leading-relaxed">
              Vår typografi tilpasser seg ulike skjermstørrelser for å sikre optimal leseopplevelse på alle enheter:
            </p>
            
            <div className="mt-6 bg-muted p-6 rounded-lg space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Mobile enheter (&lt; 640px)</h3>
                <div className="bg-background p-4 rounded-md">
                  <p className="text-sm">
                    • Mindre skriftstørrelser: Overskrifter er 10-15% mindre
                  </p>
                  <p className="text-sm">
                    • Økt linjeavstand: 1.6x for bedre lesbarhet på små skjermer
                  </p>
                  <p className="text-sm">
                    • Redusert mellomrom: Mer kompakt layout men fortsatt luftig
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Tablets og desktop (≥ 640px)</h3>
                <div className="bg-background p-4 rounded-md">
                  <p>
                    • Full typeskala som spesifisert ovenfor
                  </p>
                  <p>
                    • Optimalisert linjelengde: Maks 75-80 tegn per linje
                  </p>
                  <p>
                    • Større mellomrom mellom seksjoner
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  );
};

export default Typography;
