
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { PromptCard } from '@/components/ui/prompt-card';
import { ImageCard } from '@/components/ui/image-card';
import { MoodCard } from '@/components/ui/mood-card';
import { Tag } from '@/components/ui/tag';
import { Sparkles, Star, Gem } from 'lucide-react';

const Cards = () => {
  return (
    <PageContainer title="Kortkomponenter" showBackButton={true}>
      <div className="space-y-8">
        {/* MoodCard Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">MoodCard</h2>
          
          <div className="space-y-6 max-w-3xl">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Standard</h3>
              <MoodCard 
                title="Mood Board" 
                subtitle="Visuell inspirasjon"
                icon={<Sparkles className="w-5 h-5 text-purple-600" />}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg bg-purple-200"></div>
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-amber-300 to-orange-400"></div>
                </div>
              </MoodCard>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-2">Varianter</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Alternative farger</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MoodCard 
                    title="Prosjekt Ideer" 
                    subtitle="Kreative tanker"
                    icon={<Star className="w-5 h-5 text-blue-600" />}
                    headerColor="bg-blue-50"
                  >
                    <p className="text-muted-foreground">Samle innovative ideer for kommende prosjekter her.</p>
                  </MoodCard>
                  
                  <MoodCard 
                    title="Designtemaer" 
                    subtitle="Farger og stiler"
                    icon={<Gem className="w-5 h-5 text-emerald-600" />}
                    headerColor="bg-emerald-50"
                  >
                    <p className="text-muted-foreground">Utforsk temaer og fargepaletter for din neste design.</p>
                  </MoodCard>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Med farge-gradert header</h4>
                <MoodCard 
                  title="Visuell Inspirasjon" 
                  subtitle="Kreative referanser"
                  headerColor="bg-gradient-to-r from-purple-50 to-pink-50"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="aspect-square rounded-lg bg-purple-200"></div>
                    <div className="aspect-square rounded-lg bg-pink-200"></div>
                    <div className="aspect-square rounded-lg bg-blue-200"></div>
                    <div className="aspect-square rounded-lg bg-amber-200"></div>
                  </div>
                </MoodCard>
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

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Brand Variant</h3>
              <PromptCard 
                text="Lag en markedsføringsplan for nye produkter" 
                icon="document"
                variant="brand"
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

        {/* Tag Component */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tags</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Varianter</h3>
              <div className="flex flex-wrap gap-3">
                <Tag text="Standard" />
                <Tag text="Outline" variant="outline" />
                <Tag text="Brand" variant="brand" />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Størrelser</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <Tag text="Small" size="sm" />
                <Tag text="Medium" size="md" />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Med remove knapp</h3>
              <div className="flex flex-wrap gap-3">
                <Tag text="Removable" onRemove={() => {}} />
                <Tag text="Brand removable" variant="brand" onRemove={() => {}} />
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
    </PageContainer>
  );
};

export default Cards;
