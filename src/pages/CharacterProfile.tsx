
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, User, Heart, Star, BookOpen, Info, Clock, Coffee, Sparkles } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const getCharacterData = (id: string) => {
  const characters = {
    'dating-coach': {
      id: 'dating-coach',
      name: 'Ufiltert Dating Coach for Menn',
      tagline: 'Møt din dating-coach. Ingen "feel-good"-prat. Ingen politisk korrekthet. Bare realiteten om hva som faktisk fungerer i dating, relasjoner og valg – ikke en som håper på å bli valgt.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      creator: 'RelationshipGuru',
      conversations: 398265,
      category: 'Selvutvikling',
      tags: ['Dating', 'Rådgivning', 'Relasjoner', 'Personlig utvikling'],
      about: 'De fleste menn dater feil. De enten nøyer seg med det de får, jager desperat etter kvinner som ikke vil ha dem, eller feiltolker hva som faktisk skaper tiltrekning. Denne coachen gir deg sannheten om hvordan dating fungerer – basert på maskulinitet, sosial dynamikk og psykologiske prinsipper. Lær hvordan du:\n\n• Tiltrekker kvinner naturlig, uten desperate forsøk.\n• Skaper en uimotståelig tilstedeværelse som vekker interesse.\n• Styrer dating-dynamikken slik at du aldri trenger å nøye deg.\n• Utvikler mental og sosial styrke som gjør deg uforglemmelig.',
      scene: 'Du har akkurat satt deg ned foran din personlige dating-coach. Han lener seg tilbake, ser deg rett i øynene og nikker sakte.',
      createdAt: '2023-09-15',
      rating: 4.8,
      characters: [
        {
          name: 'Coach',
          role: 'Hovedkarakter',
          description: 'En ærlig coach som hjelper deg å forstå deg selv og hvordan du fremtrer.',
          image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    'nova': {
      id: 'nova',
      name: 'Nova',
      tagline: 'Kvantedatafysiker fra år 2183. Utforsker parallelle universer og hjelper med komplekse vitenskapelige spørsmål.',
      image: 'https://images.unsplash.com/photo-1639474576517-e0a165ae7551?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      creator: 'Quantum Labs',
      conversations: 245729,
      category: 'Vitenskap',
      tags: ['Fysikk', 'Kvantemekanikk', 'Futurisme', 'AI'],
      about: 'Nova er en toppforsker innen kvantefysikk og datavitenskap fra år 2183. Hun leder et forskningsteam som har utviklet teknologi for å observere og kommunisere på tvers av parallelle virkeligheter. \n\nMed en IQ som overgår dagens målestandarder og en unik tilgang til fremtidens vitenskapelige teorier, kan Nova forklare komplekse vitenskapelige konsepter og bidra med innsikt i alt fra partikkelfysikk til kosmologi, datavitenskap og teoretisk fysikk.\n\nNovas mål er å dele kunnskap og inspirere til nysgjerrighet og utforskning av vitenskapens yttergrenser.',
      scene: 'Du trer inn i et laboratorium med hologrammer og kvanteprojeksjoner som svever i luften. Nova sitter ved et kontrollpanel, omgitt av skjermer som viser forskjellige universers tilstander. Hun snur seg mot deg, med et smil som vitner om tusenvis av oppdagelser.',
      createdAt: '2023-06-23',
      rating: 4.9,
      characters: [
        {
          name: 'Nova',
          role: 'Hovedkarakter',
          description: 'Genial vitenskapskvinne fra fremtiden med spesialisering i kvanteteori og parallelle universer.',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    'eventyrfortelleren': {
      id: 'eventyrfortelleren',
      name: 'Eventyrfortelleren',
      tagline: 'Skaper unike historier basert på dine ideer. Perfekt for foreldre og lærere som trenger nye fortellinger.',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      creator: 'StoryWeaver',
      conversations: 35961,
      category: 'Kreativitet',
      tags: ['Eventyr', 'Fortellinger', 'Kreativ skriving', 'Barn'],
      about: 'Eventyrfortelleren bærer med seg alle historier som noen gang er fortalt – og mange som ennå ikke har funnet veien til ord. Med røtter i muntlig fortellerkultur fra hele verden kan han spinne historier fra alle tradisjoner, tidsaldre og stilarter.\n\nOm du trenger en kort godnattsaga, et morsomt eventyr for klasserommet, eller inspirasjon til din egen kreative skriving, vil Eventyrfortelleren skape noe unikt basert på dine ønsker og ideer.\n\nHver historie kan tilpasses alder, tema, lengde og innhold, og kan inkludere karakterer og elementer du selv ønsker.',
      scene: 'Du finner deg selv ved et gammelt knirkende bord i et rom fylt med bøker fra gulv til tak. I hjørnet knitrer en peis, og i en slitt lærlenestol sitter en mann med vennlige øyne og et ansikt preget av et liv fylt med historier. Han gestikulerer mot en stol ved siden av seg, inviterer deg inn i fortellingens verden.',
      createdAt: '2023-10-05',
      rating: 4.7,
      characters: [
        {
          name: 'Fortelleren',
          role: 'Hovedkarakter',
          description: 'En vis historieforteller med evnen til å bringe hvilken som helst historie til live gjennom ord.',
          image: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  };
  
  return characters[id as keyof typeof characters] || null;
};

const CharacterProfile = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const character = getCharacterData(characterId || '');
  
  if (!character) {
    return (
      <PageContainer title="Karakter ikke funnet" showBackButton>
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-2xl font-bold mb-4">Denne karakteren finnes ikke</h2>
          <p className="text-muted-foreground mb-8">Karakteren du leter etter kunne ikke finnes.</p>
          <Button asChild>
            <Link to="/characters">Tilbake til karakteroversikten</Link>
          </Button>
        </div>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer title={character?.name} showBackButton>
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${character?.image})`,
              filter: 'blur(8px) brightness(0.7)',
              transform: 'scale(1.1)'
            }}
          />
          
          <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-40 md:w-52 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <AspectRatio ratio={1 / 1} className="w-full h-full">
                <img 
                  src={character?.image} 
                  alt={character?.name} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{character?.name}</h1>
              <p className="text-xl text-white/90 mb-4">{character?.tagline}</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {character?.tags.map((tag, index) => (
                  <span key={index} className="bg-white/10 text-white border-white/20 border px-2.5 py-0.5 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-1 text-white/80">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">{character?.conversations.toLocaleString()} samtaler</span>
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <Star className="w-4 h-4 text-amber-300" />
                  <span className="text-sm">{character?.rating}/5</span>
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Opprettet: {character?.createdAt && new Date(character.createdAt).toLocaleDateString('nb-NO')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-20 bg-white/10 backdrop-blur-sm border-t border-white/10 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70">Av: {character?.creator}</span>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <MessageSquare className="w-4 h-4 mr-2" />
              Start samtale
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader className="bg-gradient-to-r from-primary-muted/10 to-primary-muted/20 dark:from-primary-muted/5 dark:to-primary-muted/10">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <CardTitle>Scene</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-card-foreground italic">{character?.scene}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-gradient-to-r from-primary-muted/10 to-primary-muted/20 dark:from-primary-muted/5 dark:to-primary-muted/10">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <CardTitle>Om denne samtalen</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose dark:prose-invert max-w-none">
                  {character?.about.split('\n\n').map((paragraph, index) => (
                    <div key={index}>
                      {paragraph.includes('•') ? (
                        <ul className="list-disc pl-5 space-y-1">
                          {paragraph.split('•').filter(item => item.trim()).map((item, i) => (
                            <li key={i}>{item.trim()}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mb-4">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader className="bg-gradient-to-r from-primary-muted/10 to-primary-muted/20 dark:from-primary-muted/5 dark:to-primary-muted/10">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <CardTitle>Karakterer</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {character?.characters.map((char, index) => (
                  <div key={index} className="flex gap-4 items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={char.image} 
                        alt={char.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{char.name}</h4>
                      <p className="text-xs text-muted-foreground mb-1">({char.role})</p>
                      <p className="text-sm">{char.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader className="bg-gradient-to-r from-primary-muted/10 to-primary-muted/20 dark:from-primary-muted/5 dark:to-primary-muted/10">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-primary" />
                  <CardTitle>Lignende karakterer</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="group flex gap-4 items-center cursor-pointer hover:bg-muted p-2 rounded-lg transition-colors">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                        alt="Karriereveilederen" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary">Karriereveilederen</h4>
                      <p className="text-sm text-muted-foreground">Hjelper deg med karrierevalg og jobbsøking</p>
                    </div>
                  </div>
                  
                  <div className="group flex gap-4 items-center cursor-pointer hover:bg-muted p-2 rounded-lg transition-colors">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                        alt="Livscoachen" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary">Livscoachen</h4>
                      <p className="text-sm text-muted-foreground">Hjelper deg med å finne balanse og mening</p>
                    </div>
                  </div>
                  
                  <div className="group flex gap-4 items-center cursor-pointer hover:bg-muted p-2 rounded-lg transition-colors">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                        alt="Psykologen" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary">Psykologen</h4>
                      <p className="text-sm text-muted-foreground">Støttende samtalepartner for personlig utvikling</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 dark:bg-muted/20">
                <Button variant="outline" className="w-full">
                  <Sparkles className="w-4 h-4 mr-2 text-primary" />
                  Utforsk flere karakterer
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CharacterProfile;
