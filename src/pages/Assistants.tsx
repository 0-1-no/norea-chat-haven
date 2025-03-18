
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { ImageCard } from '@/components/ui/image-card';
import { StyledProfileCard } from '@/components/ui/styled-profile-card';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, ListTodo } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Assistants = () => {
  return (
    <PageContainer title="Assistenter">
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
          <div className="max-w-md mx-auto">
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
              className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            
            <Card className="mt-6 p-6">
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
        
        {/* Coming Soon Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Kommer snart</h2>
          <p className="text-muted-foreground mb-6">
            Vi jobber kontinuerlig med å utvikle nye assistenter for forskjellige behov.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ImageCard
              title="Concierge"
              description="Hjelper med å planlegge hverdagen, booke restaurantbord, bestille blomster og holde oversikt over viktige datoer og hendelser"
              imageSrc="/lovable-uploads/947acd65-7455-4f85-9e31-f9632eb17164.png"
              imageAlt="Concierge"
              tags={["Planlegging", "Booking", "Livsstil"]}
              actionLabel="Kommer snart"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            
            <ImageCard
              title="Clay"
              description="En personlig CRM assistent som hjelper deg med å holde oversikt over ditt nettverk, venner, familie og bursdager"
              imageSrc="/placeholder.svg"
              imageAlt="Clay"
              tags={["Nettverk", "CRM", "Relasjoner"]}
              actionLabel="Kommer snart"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Assistants;
