
import React from 'react';
import { Header } from '@/components/Header';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, ListTodo, MessageCircle, Sparkles, Star } from 'lucide-react';

const AssistantTodo = () => {
  return (
    <PageContainer title="Todo Assistent">
      <Header title="Todo Assistent" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: Assistant hero */}
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90"></div>
              <img 
                src="/lovable-uploads/48c70b68-80c9-4b0e-964a-126502b28085.png" 
                alt="Todo Assistant" 
                className="w-full h-[300px] object-cover object-center mix-blend-overlay"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    Produktivitet
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    <Star className="h-4 w-4 text-yellow-300 mr-1" fill="currentColor" />
                    4.8/5
                  </div>
                </div>
                <div className="text-white">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Todo Assistent</h1>
                  <p className="text-xl opacity-90">Din personlige produktivitets coach</p>
                </div>
              </div>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Om assistenten</CardTitle>
                <CardDescription>
                  Todo-assistenten hjelper deg med å øke produktiviteten og holde styr på oppgavene dine
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Todo-assistenten er utviklet for å hjelpe deg med å organisere dagen din, øke produktiviteten og 
                  nå målene dine. Ved å kombinere avansert AI med god forståelse av produktivitetsteknikker, 
                  gir denne assistenten deg personlig tilpassede råd og hjelp.
                </p>
                <p>
                  Uansett om du er student, profesjonell eller bare ønsker å få mer ut av dagen din, 
                  vil Todo-assistenten hjelpe deg med å planlegge, prioritere og fullføre oppgavene dine.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Funksjoner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <ListTodo className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Oppgavesystematisering</h3>
                      <p className="text-sm text-muted-foreground">Hjelper deg med å lage, organisere og prioritere oppgaver</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Progresjonssporing</h3>
                      <p className="text-sm text-muted-foreground">Holder oversikt over fullførte oppgaver og fremgang mot mål</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Tidsestimering</h3>
                      <p className="text-sm text-muted-foreground">Hjelper deg med å estimere og allokere tid til oppgaver</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                      <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Motivasjon</h3>
                      <p className="text-sm text-muted-foreground">Gir motiverende tilbakemeldinger og feiringer når du når mål</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column: Action card and testimonials */}
          <div className="lg:w-96 space-y-6">
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-center">Start med Todo-assistenten</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                  Begynn å øke produktiviteten din med personlig assistanse
                </p>
                <Button className="w-full mb-4" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start en samtale
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Tilgjengelig 24/7 • Umiddelbare svar
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonials */}
            <h3 className="text-lg font-medium mb-3">Hva brukerne sier</h3>
            
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="italic text-sm mb-4">
                  "Todo-assistenten har hjulpet meg å holde styr på alle prosjektene mine. Jeg er mer produktiv enn noen gang!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <span className="text-xs font-medium">MH</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Marte Hansen</p>
                    <p className="text-xs text-muted-foreground">Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="italic text-sm mb-4">
                  "Jeg har prøvd mange produktivitetsapper, men denne AI-assistenten tilpasser seg virkelig mine behov. Fantastisk!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <span className="text-xs font-medium">TB</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Thomas Berg</p>
                    <p className="text-xs text-muted-foreground">Prosjektleder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AssistantTodo;
