
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { PromptCard } from '@/components/ui/prompt-card';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  AlertCircle, ArrowLeft, ArrowRight, Check, ChevronDown, ChevronRight, 
  FileText, Folders, Mail, MessageCircle, MessageSquare, Moon, PanelLeft, 
  Plus, Search, Settings, Sun, Users, Layers, User, LogOut 
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

  const IconCard = ({ icon: Icon, name }: { icon: any, name: string }) => (
    <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
      <div className="flex gap-3">
        <Icon className="text-foreground transition-colors" />
        <Icon className="text-primary hover:text-primary/80 transition-colors" />
        <Icon className="text-primary/80 active:text-primary/60 transition-colors" />
      </div>
      <span className="text-xs">{name}</span>
    </div>
  );

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
            title="Komponentbibliotek" 
            showBackButton={true}
          />
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Knappekomponent</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Standard Knapp</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Normal</div>
                      <Button>Standard Knapp</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Hover</div>
                      <Button className="hover:bg-primary/90 pointer-events-none ring-2 ring-primary/30">Hover Knapp</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Active</div>
                      <Button className="active:bg-primary/80 pointer-events-none bg-primary/80 transform scale-[0.98]">Active Knapp</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Knapp med ikoner</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Med ikon til høyre</div>
                      <Button>
                        <ArrowRight className="mr-2 h-4 w-4" /> Høyre Ikon
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Med ikon til venstre</div>
                      <Button>
                        Venstre Ikon <ArrowLeft className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Knapp varianter</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Default</div>
                      <Button variant="default">Default</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Secondary</div>
                      <Button variant="secondary">Secondary</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Outline</div>
                      <Button variant="outline">Outline</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Ghost</div>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Link</div>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">PromptCard</h2>
              <div className="space-y-4 max-w-md">
                <div className="border p-4 rounded-lg space-y-4 bg-surface-hover/20">
                  <h3 className="text-lg font-medium">Normal Tilstand</h3>
                  <PromptCard 
                    text="Skriv en to-do liste for et personlig prosjekt eller oppgave" 
                    icon="document"
                  />
                </div>
                
                <div className="border p-4 rounded-lg space-y-4 bg-surface-hover/20">
                  <h3 className="text-lg font-medium">Hover Tilstand</h3>
                  <div className="pointer-events-none">
                    <PromptCard 
                      className="hover:border-primary hover:bg-surface-hover hover:shadow-surface-md"
                      text="Generer et e-postsvar til et jobbtilbud" 
                      icon="email"
                    />
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg space-y-4 bg-surface-hover/20">
                  <h3 className="text-lg font-medium">Active Tilstand</h3>
                  <div className="pointer-events-none">
                    <PromptCard 
                      className="border-primary bg-surface-hover/90 shadow-surface-sm transform scale-[0.99]"
                      text="Oppsummer denne artikkelen eller teksten for meg i ett avsnitt" 
                      icon="document"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Ikoner</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {icons.map((icon) => (
                  <IconCard key={icon.name} icon={icon.component} name={icon.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
