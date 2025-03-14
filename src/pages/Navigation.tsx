
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { PanelLeft, Home, User, Building2, Users, CreditCard } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);

  // Update sidebar state when screen size changes
  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigationContent = (
    <div className="container max-w-6xl py-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Navigasjon</h1>
        <p className="text-muted-foreground">
          Eksempler på forskjellige navigasjonselementer i Norea design system.
        </p>
      </div>

      <Separator />
      
      <div className="space-y-8">
        {/* Breadcrumbs Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Breadcrumbs</h2>
          <p className="text-muted-foreground">
            Breadcrumbs hjelper brukere å forstå hvor de er i applikasjonens hierarki og navigere tilbake til tidligere nivåer.
          </p>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Standard Breadcrumbs</h3>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                          <Home className="h-4 w-4 mr-1" />
                          Hjem
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Prosjekter</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Prosjekt Nero</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <Separator />
        
        {/* Tabs Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tabs</h2>
          <p className="text-muted-foreground">
            Tabs gir et enkelt og effektivt grensesnitt for å organisere og bytte mellom relatert innhold.
          </p>
          
          <Card className="border rounded-lg">
            <CardContent className="p-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-base font-medium">Full-bredde tabs med understrek</h3>
                <Tabs defaultValue="team" className="w-full">
                  <TabsList className="w-full grid grid-cols-4 h-12">
                    <TabsTrigger value="account">Min Konto</TabsTrigger>
                    <TabsTrigger value="company">Bedrift</TabsTrigger>
                    <TabsTrigger value="team">Teammedlemmer</TabsTrigger>
                    <TabsTrigger value="billing">Fakturering</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Min Konto innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="company" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Bedrift innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="team" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Teammedlemmer innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="billing" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Fakturering innhold
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base font-medium">Tabs med understrek</h3>
                <Tabs defaultValue="team">
                  <TabsList>
                    <TabsTrigger value="account">Min Konto</TabsTrigger>
                    <TabsTrigger value="company">Bedrift</TabsTrigger>
                    <TabsTrigger value="team">Teammedlemmer</TabsTrigger>
                    <TabsTrigger value="billing">Fakturering</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Min Konto innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="company" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Bedrift innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="team" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Teammedlemmer innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="billing" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Fakturering innhold
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base font-medium">Tabs med understrek og ikoner</h3>
                <Tabs defaultValue="team">
                  <TabsList>
                    <TabsTrigger value="account" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Min Konto</span>
                    </TabsTrigger>
                    <TabsTrigger value="company" className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span>Bedrift</span>
                    </TabsTrigger>
                    <TabsTrigger value="team" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Teammedlemmer</span>
                    </TabsTrigger>
                    <TabsTrigger value="billing" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Fakturering</span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Min Konto innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="company" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Bedrift innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="team" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Teammedlemmer innhold
                    </div>
                  </TabsContent>
                  <TabsContent value="billing" className="p-4">
                    <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                      Fakturering innhold
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <Separator />
        
        {/* Pagination Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Pagination</h2>
          <p className="text-muted-foreground">
            Pagination hjelper brukere å navigere gjennom større datasett fordelt over flere sider.
          </p>
          
          <Card>
            <CardContent className="p-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-base font-medium">Standard Pagination</h3>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" aria-label="Forrige">Forrige</PaginationPrevious>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="text-purple-600 font-medium">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">8</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">9</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">10</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" aria-label="Neste">Neste</PaginationNext>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base font-medium">Forenklet Pagination</h3>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" aria-label="Forrige">Forrige</PaginationPrevious>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" aria-label="Neste">Neste</PaginationNext>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
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
            title="Navigasjon" 
            showBackButton={false}
          />
          
          <div className="flex-1 overflow-y-auto">
            {navigationContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
