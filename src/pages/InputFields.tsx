
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { SearchInput } from '@/components/SearchInput';
import { FormField } from '@/components/FormField';
import { useIsMobile } from '@/hooks/use-mobile';
import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageInput } from '@/components/MessageInput';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const InputFields = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);

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
            title="Input Felter" 
            showBackButton={true}
          />
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Search Input */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Søkefelt</h2>
              <div className="grid grid-cols-1 gap-6 max-w-xl">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Standard</h3>
                  <SearchInput placeholder="Søk etter noe..." />
                  <p className="text-sm text-muted-foreground mt-2">
                    Søkefeltet har normal, focus, og fyllt tilstand (med X for å tømme).
                  </p>
                </div>
              </div>
            </section>

            {/* Text Input */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Input felter</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Standard</h3>
                  <Input placeholder="Skriv noe her..." />
                  <p className="text-sm text-muted-foreground mt-2">
                    Standardfeltet har normal, hover, focus, og disabled tilstand.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Med label</h3>
                  <FormField 
                    label="Brukernavn" 
                    placeholder="john.doe" 
                    helperText="Brukernavnet må være unikt"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Med validering</h3>
                  <FormField 
                    label="E-post" 
                    type="email" 
                    placeholder="john@example.com" 
                    required
                    error="E-post adressen er ikke gyldig"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Tekstområde</h3>
                  <FormField 
                    label="Beskrivelse" 
                    type="textarea" 
                    placeholder="Skriv en beskrivelse her..."
                  />
                </div>
              </div>
            </section>

            {/* Message Input */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Meldingsinput</h2>
              <div className="grid grid-cols-1 gap-6 max-w-xl">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Chat input</h3>
                  <MessageInput placeholder="Spør om noe..." />
                  <p className="text-sm text-muted-foreground mt-2">
                    Meldingsinput er optimalisert for chatgrensesnitt med send-knapp og tellerfunksjonalitet.
                  </p>
                </div>
              </div>
            </section>

            {/* Toggle/Switch */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Toggle/Switch</h2>
              <div className="grid grid-cols-1 gap-6 max-w-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Flymodus</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Switch har av/på tilstand samt hover og disabled states.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
