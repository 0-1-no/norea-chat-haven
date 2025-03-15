
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Tag } from '@/components/ui/tag';
import { 
  AlertCircle, ArrowLeft, ArrowRight, Check, ChevronDown, ChevronRight, 
  FileText, Folders, Mail, MessageCircle, MessageSquare, Moon, PanelLeft, 
  Plus, Search, Settings, Sun, Users, Layers, User, LogOut, Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComponentLibrary = () => {
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
    <PageContainer title="Komponentbibliotek" showBackButton={true}>
      <div className="p-6 space-y-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Default Primary</h4>
                <Button variant="default">
                  Primary Button
                </Button>
              </div>
              
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Brand Gradient</h4>
                <Button variant="brand">
                  Brand Button <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tags Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tags</h2>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Varianter</h3>
            <div className="flex flex-wrap gap-3">
              <Tag text="Default" />
              <Tag text="Outline" variant="outline" />
              <Tag text="Brand" variant="brand" />
            </div>

            <h3 className="text-lg font-medium mt-4">Størrelser</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Tag text="Small" size="sm" />
              <Tag text="Medium" size="md" />
            </div>

            <h3 className="text-lg font-medium mt-4">Med remove knapp</h3>
            <div className="flex flex-wrap gap-3">
              <Tag text="Removable" onRemove={() => {}} />
              <Tag text="Brand removable" variant="brand" onRemove={() => {}} />
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
    </PageContainer>
  );
};

export default ComponentLibrary;
