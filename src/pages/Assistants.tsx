
import React from 'react';
import { Header } from '@/components/Header';
import { PageContainer } from '@/components/layout/PageContainer';
import { ImageCard } from '@/components/ui/image-card';
import { StyledProfileCard } from '@/components/ui/styled-profile-card';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Bot, Calendar, CheckCircle, ListTodo, Plus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Assistants = () => {
  return (
    <PageContainer title="Assistenter">
      <Header title="Assistenter" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Norea Assistenter</h1>
          <p className="text-muted-foreground">
            Oppdag smarte AI-assistenter skreddersydd for dine behov. Hver assistent er designet for å hjelpe deg med spesifikke oppgaver.
          </p>
        </div>
        
        {/* Featured Assistant */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Anbefalt assistent</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch justify-center">
            <StyledProfileCard
              name="Todo Assistent"
              tagline="Din personlige produktivitets coach"
              description="Organiser oppgavene dine, følg opp fremgang, og få motivasjon for å fullføre oppgaver. Todo-assistenten hjelper deg med å holde styr på alt du skal gjøre."
              mainImageSrc="/lovable-uploads/48c70b68-80c9-4b0e-964a-126502b28085.png"
              backgroundColor="bg-gradient-to-br from-blue-600 to-purple-700"
              textColor="text-white"
              accentColor="text-blue-200"
              tags={["Produktivitet", "Oppgavestyring"]}
              glowEffect={true}
              onClick={() => window.location.href = "/assistant/todo"}
              className="w-full md:w-auto"
            />
            
            <Card className="flex-1 p-6 max-w-md">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center text-2xl">
                  <ListTodo className="mr-2 h-6 w-6 text-primary" />
                  Oppgavestyring med AI
                </CardTitle>
                <CardDescription>
                  Den smarte Todo-assistenten hjelper deg med å holde orden på oppgavene dine og øke produktiviteten.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <p>Oppretter, organiserer og prioriterer oppgaver basert på dine mål</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <p>Minner deg på frister og følger opp uferdige oppgaver</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <p>Tilpasser seg dine arbeidsvaner og produktivitetsmønstre</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <p>Gir motiverende tilbakemeldinger når du fullfører oppgaver</p>
                  </div>
                </div>
                
                <Button className="w-full mt-6" onClick={() => window.location.href = "/assistant/todo"}>
                  Prøv Todo-assistenten
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* All Assistants */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Alle assistenter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StyledProfileCard
              name="Concierge"
              tagline="Din personlige livsstils-assistent"
              description="Hjelper med å planlegge hverdagen, booke restaurantbord, bestille blomster og holder oversikt over viktige datoer og hendelser."
              mainImageSrc="/lovable-uploads/947acd65-7455-4f85-9e31-f9632eb17164.png"
              backgroundColor="bg-gradient-to-br from-emerald-500 to-teal-700"
              textColor="text-white"
              accentColor="text-emerald-200"
              tags={["Planlegging", "Booking", "Livsstil"]}
              glowEffect={true}
              onClick={() => {}}
              className="w-full"
              overlayEffect="gradient"
            />
            
            <StyledProfileCard
              name="Clay"
              tagline="Din personlige nettverks-coach"
              description="En personlig CRM assistent som hjelper deg med å holde oversikt over ditt nettverk, venner, familie, bursdager og gir råd om hvordan bli mer sosial."
              mainImageSrc="/placeholder.svg"
              backgroundColor="bg-gradient-to-br from-amber-500 to-orange-700"
              textColor="text-white"
              accentColor="text-amber-200"
              tags={["Nettverk", "CRM", "Relasjoner"]}
              glowEffect={true}
              onClick={() => {}}
              className="w-full"
              overlayEffect="gradient"
            />
            
            <StyledProfileCard
              name="Todo Assistent"
              tagline="Din personlige produktivitets coach"
              description="Organiser oppgavene dine, følg opp fremgang, og få motivasjon for å fullføre oppgaver."
              mainImageSrc="/lovable-uploads/48c70b68-80c9-4b0e-964a-126502b28085.png"
              backgroundColor="bg-gradient-to-br from-blue-600 to-purple-700"
              textColor="text-white"
              accentColor="text-blue-200"
              tags={["Produktivitet", "Oppgavestyring"]}
              glowEffect={true}
              onClick={() => window.location.href = "/assistant/todo"}
              className="w-full"
              overlayEffect="gradient"
            />
          </div>
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Kommer snart</h2>
          <p className="text-muted-foreground mb-6">
            Vi jobber kontinuerlig med å utvikle nye assistenter for forskjellige behov.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImageCard
              title="Helse Coach"
              description="En personlig assistent for trening, ernæring og velvære"
              imageSrc="/lovable-uploads/7e6f530a-deee-4947-9000-ac9dc9aad56c.png"
              imageAlt="Helse Coach"
              tags={["Helse", "Trening", "Ernæring"]}
              actionLabel="Kommer snart"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            
            <ImageCard
              title="Studie Hjelper"
              description="Din digitale studieveileder som hjelper deg med studier og lekser"
              imageSrc="/placeholder.svg"
              imageAlt="Studie Hjelper"
              tags={["Utdanning", "Læring"]}
              actionLabel="Kommer snart"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            
            <div className="border border-dashed border-muted-foreground/30 rounded-lg flex flex-col items-center justify-center p-8 text-center h-full">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Foreslå en assistent</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Har du forslag til en assistent du gjerne vil se i Norea?
              </p>
              <Button variant="outline">Send forslag</Button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Assistants;
