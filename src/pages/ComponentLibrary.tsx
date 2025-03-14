
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { PromptCard } from '@/components/ui/prompt-card';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  AlertCircle, ArrowLeft, ArrowRight, Check, ChevronDown, ChevronRight, 
  FileText, Folders, Mail, MessageCircle, MessageSquare, Moon, PanelLeft, 
  Plus, Search, Settings, Sun, Users, Layers, User, LogOut, Filter
} from 'lucide-react';

const ComponentLibrary = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);

  // Update sidebar state when screen size changes
  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const icons = [
    { name: 'AlertCircle', component: AlertCircle },
    { name: 'ArrowLeft', component: ArrowLeft },
    { name: 'ArrowRight', component: ArrowRight },
    { name: 'Check', component: Check },
    { name: 'ChevronDown', component: ChevronDown },
    { name: 'ChevronRight', component: ChevronRight },
    { name: 'FileText', component: FileText },
    { name: 'Filter', component: Filter },
    { name: 'Folders', component: Folders },
    { name: 'Layers', component: Layers },
    { name: 'LogOut', component: LogOut },
    { name: 'Mail', component: Mail },
    { name: 'MessageCircle', component: MessageCircle },
    { name: 'MessageSquare', component: MessageSquare },
    { name: 'Moon', component: Moon },
    { name: 'PanelLeft', component: PanelLeft },
    { name: 'Plus', component: Plus },
    { name: 'Search', component: Search },
    { name: 'Settings', component: Settings },
    { name: 'Sun', component: Sun },
    { name: 'User', component: User },
    { name: 'Users', component: Users }
  ];

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
            title="Komponentbibliotek" 
            showBackButton={true}
          />
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Button Component */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Knapp</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Normal</h3>
                  <Button variant="outline" className="w-full">
                    <Filter className="mr-2 h-4 w-4" /> Filters
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Hover</h3>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary bg-primary/5 pointer-events-none"
                  >
                    <Filter className="mr-2 h-4 w-4 text-primary" /> Filters
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Active</h3>
                  <Button 
                    variant="default" 
                    className="w-full bg-primary text-primary-foreground pointer-events-none transform scale-[0.98]"
                  >
                    <Filter className="mr-2 h-4 w-4" /> Filters
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-medium">Knapp-varianter</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-2">Med ikon til venstre</h4>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" /> Filters
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-2">Med ikon til høyre</h4>
                    <Button variant="outline">
                      Filters <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            
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
                </div>
              </div>
            </section>
            
            {/* Icons */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Ikoner</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Ikonstatuser</h3>
                <div className="flex gap-8">
                  <div className="text-center">
                    <Settings className="h-6 w-6 text-foreground mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">Normal</span>
                  </div>
                  
                  <div className="text-center">
                    <Settings className="h-6 w-6 text-primary mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">Hover</span>
                  </div>
                  
                  <div className="text-center">
                    <Settings className="h-6 w-6 text-primary/80 mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">Active</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Ikonoversikt</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {icons.map((icon) => (
                    <div key={icon.name} className="flex flex-col items-center p-3 border rounded-md">
                      <icon.component className="h-5 w-5 mb-2" />
                      <span className="text-xs">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
