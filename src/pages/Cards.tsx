
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { PromptCard } from '@/components/ui/prompt-card';
import { ImageCard } from '@/components/ui/image-card';
import { useIsMobile } from '@/hooks/use-mobile';
import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cards = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);

  // Update sidebar state when screen size changes
  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-backdrop">
      {/* Sidebar component */}
      <div className={`
        ${isMobile ? 'fixed z-50 transition-transform duration-300 ease-in-out' : ''}
        ${(isMobile && !isSidebarOpen) ? '-translate-x-full' : 'translate-x-0'}
      `}>
        {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      </div>
      
      {/* Canvas */}
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
            title="Kortkomponenter" 
            showBackButton={true}
          />
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* PromptCard Component */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">PromptCard</h2>
              
              <div className="space-y-6 max-w-md">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Normal</h3>
                  <PromptCard 
                    text="Skriv en to-do liste for et personlig prosjekt eller oppgave" 
                    icon="document"
                  />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Hover</h3>
                  <PromptCard 
                    className="border-primary bg-surface-hover shadow-surface-md pointer-events-none"
                    text="Generer et e-postsvar til et jobbtilbud" 
                    icon="email"
                  />
                </div>
                
                <h3 className="text-lg font-medium mt-6 mb-2">Varianter</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-2">Med ikon til venstre (standard)</h4>
                    <PromptCard 
                      text="Skriv en to-do liste for et personlig prosjekt eller oppgave" 
                      icon="document"
                      iconPosition="left"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-2">Med ikon til høyre</h4>
                    <PromptCard 
                      text="Oppsummer denne artikkelen eller teksten for meg i ett avsnitt" 
                      icon="document"
                      iconPosition="right"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-2">Med tittel og tekst over flere linjer</h4>
                    <PromptCard 
                      title="Artikkelsammendrag"
                      text="Ta en lang artikkel eller nyhetsartikkel og lag et konsist sammendrag som fremhever nøkkelpunktene og hovedkonklusjonene, samtidig som du bevarer den viktigste informasjonen." 
                      icon="document"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm text-muted-foreground mb-2">Uten ikon</h4>
                    <PromptCard 
                      text="Dette er et eksempel på et kort uten ikon, som kun viser tekst"
                      hideIcon={true}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ImageCard Component */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">ImageCard</h2>
              
              <div className="space-y-6 max-w-md">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Standard</h3>
                  <ImageCard 
                    title="Arbeide hjemmefra"
                    description="Hvordan du kan maksimere produktivitet når du jobber fra hjemmekontoret"
                    imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    imageAlt="Laptop på et skrivebord"
                  />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Hover</h3>
                  <ImageCard 
                    title="Digital sikkerhet"
                    description="Beste praksis for å holde dataene dine trygge i en stadig mer tilkoblet verden"
                    imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    imageAlt="Kretskort nærbilde"
                    className="border-primary bg-surface-hover shadow-surface-md pointer-events-none"
                  />
                </div>

                <h3 className="text-lg font-medium mt-6 mb-2">Varianter</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-2">Med tags</h4>
                    <ImageCard 
                      title="Arbeidsplass ergonomi"
                      description="Tips for å lage en mer komfortabel og helsevennlig arbeidsplass"
                      imageSrc="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      imageAlt="Person som jobber på laptop"
                      tags={["Helse", "Produktivitet", "Hjemmekontor"]}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-2">Med handling</h4>
                    <ImageCard 
                      title="Digitale verktøy"
                      description="Oversikt over de beste produktivitetsverktøyene for teamsamarbeid"
                      imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      imageAlt="Laptop med grafiske elementer"
                      actionLabel="Les mer"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
