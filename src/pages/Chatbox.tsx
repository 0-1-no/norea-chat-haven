
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { MessageInput } from "@/components/MessageInput";
import { ChatInterface } from "@/components/ChatInterface";
import { PageContainer } from '@/components/layout/PageContainer';
import { ModelSelector } from '@/components/ModelSelector';

const Chatbox = () => {
  return (
    <PageContainer title="Chatbox" showBackButton={false}>
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Chatbox</h1>
          <p className="text-muted-foreground">
            Det primære chat-grensesnittet for brukere som skal interagere med Norea AI.
          </p>
        </div>

        <Separator />
        
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Meldingsinngang</h2>
            <p className="text-muted-foreground">
              Meldingsinngangkomponenten lar brukere skrive og sende meldinger til AI.
            </p>
            
            <div className="p-6 border rounded-lg bg-card">
              <MessageInput placeholder="Spør om hva som helst..." />
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-medium">Komponenttilstander:</h3>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                <li>Standard: Tomt inntastingsfelt med plassholdertekst</li>
                <li>Fokusert: Feltet har fokus med synlig ramme</li>
                <li>Med innhold: Send-knappen blir aktiv</li>
                <li>Hover-tilstander: Knapp og vedleggsikon har hover-effekter</li>
                <li>Tegnteller: Oppdateres når brukeren skriver</li>
              </ul>
            </div>
          </section>
          
          <Separator />
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Komplett Chat-grensesnitt</h2>
            <p className="text-muted-foreground">
              Det komplette chat-grensesnittet inkluderer AI-modellvelger, meldingsinngang og chat-historikk.
            </p>
            
            <div className="h-[500px] border rounded-lg bg-card overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                  <ModelSelector />
                </div>
                <div className="flex-1 overflow-auto p-4">
                  {/* Chat meldinger ville vises her */}
                </div>
                <div className="p-4 border-t">
                  <MessageInput placeholder="Spør om hva som helst..." />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  );
};

export default Chatbox;
