
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent } from '@/components/ui/card';
import { MoodCard } from '@/components/ui/mood-card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Slider } from '@/components/ui/slider';
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/ui/button';
import { 
  Flame, 
  Star, 
  Sparkles, 
  Bot, 
  Book, 
  Brain, 
  Coffee, 
  Glasses, 
  GraduationCap, 
  Heart, 
  Gamepad2, 
  Rocket, 
  MessageSquare,
  Users,
  TrendingUp,
  Filter,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ 
  character, 
  className,
  size = 'default'
}: { 
  character: any, 
  className?: string,
  size?: 'small' | 'default' | 'large'
}) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className={`overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer ${className}`}
      onClick={() => console.log(`Navigating to character: ${character.name}`)}
    >
      <div className={`relative overflow-hidden ${
        size === 'small' ? 'aspect-[3/4]' : 
        size === 'large' ? 'aspect-[4/5]' : 'aspect-square'
      }`}>
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        {character.creator && (
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            Av {character.creator}
          </div>
        )}
      </div>
      <CardContent className="pt-3 px-4 pb-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{character.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{character.description}</p>
        
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <MessageSquare className="w-3.5 h-3.5 mr-1" />
          <span>{(character.conversations || Math.floor(Math.random() * 500)).toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div className="relative aspect-[21/9] w-full">
        {/* Background image with cosmic/space theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] 
            opacity-40 bg-cover bg-center mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>
        
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
          <div className="max-w-3xl">
            <div className="text-white/80 mb-2 text-sm md:text-base animate-fade-in">Hva vil du oppdage i dag?</div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Manifest greatness.<br/>Embrace the unknown.
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-lg mb-8 animate-fade-in">
              Utforsk kreative universer, lær noe nytt eller bare slapp av med en fascinerende samtale.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Button className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/20">
                <Sparkles className="h-4 w-4 text-amber-300 mr-2" />
                Utforsk personligheter
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 border-none">
                <Bot className="h-4 w-4 text-white mr-2" />
                Lag din egen
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 mt-auto scrollbar-hidden">
            <div className="flex-none bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 w-[200px]">
              <Users className="h-6 w-6 text-purple-300 mb-2" />
              <p className="text-white font-medium">500K+</p>
              <p className="text-white/70 text-sm">Aktive brukere</p>
            </div>
            <div className="flex-none bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 w-[200px]">
              <MessageSquare className="h-6 w-6 text-green-300 mb-2" />
              <p className="text-white font-medium">2M+</p>
              <p className="text-white/70 text-sm">Daglige samtaler</p>
            </div>
            <div className="flex-none bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 w-[200px]">
              <Star className="h-6 w-6 text-amber-300 mb-2" />
              <p className="text-white font-medium">4.8/5</p>
              <p className="text-white/70 text-sm">Gjennomsnittlig rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedCharacters = () => {
  // Side character cards showing popular characters
  const featuredChars = [
    {
      name: "Cosmic Hype Queen",
      description: "Trendy, energisk og alltid oppdatert på de nyeste kulturelle trendene. Hun gjør det ukjente kjent.",
      image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "TrendWave"
    },
    {
      name: "Your Spirit Oracle",
      description: "Veileder for indre reiser, meditasjon og spirituell utvikling. Skaper ro i kaotiske tider.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "InnerPath"
    }
  ];
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {featuredChars.map((char, index) => (
        <div key={index} className="flex-1 min-w-0">
          <Card className="overflow-hidden border-0 bg-gradient-to-b from-muted/50 to-muted/30 shadow-sm hover:shadow-md transition-all duration-300 h-full">
            <div className="p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/20">
                <img 
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-1">{char.name}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{char.description}</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Start samtale
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

const CharacterSection = ({ 
  title, 
  icon, 
  characters,
  variant = 'carousel'
}: { 
  title: string, 
  icon: React.ReactNode, 
  characters: any[],
  variant?: 'carousel' | 'grid'
}) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-muted">{icon}</div>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <Button variant="ghost" className="text-muted-foreground hover:text-primary">
          Se alle <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      {variant === 'carousel' ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {characters.map((character, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <CharacterCard character={character} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 lg:-left-6" />
            <CarouselNext className="-right-4 lg:-right-6" />
          </div>
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <div 
              key={index}
              className="group transition-all duration-300 hover:-translate-y-1"
            >
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "Kunnskap",
      subtitle: "Lær noe nytt",
      icon: <Brain className="w-5 h-5" />,
      headerColor: "bg-gradient-to-r from-blue-50 to-indigo-50",
      description: "Utforsk vitenskapelige, filosofiske og utdanningsmessige karakterer."
    },
    {
      title: "Kreativitet",
      subtitle: "Få inspirasjon",
      icon: <Sparkles className="w-5 h-5" />,
      headerColor: "bg-gradient-to-r from-purple-50 to-pink-50",
      description: "Møt kreative karakterer som kan hjelpe med kunst, skriving og design."
    },
    {
      title: "Underholdning",
      subtitle: "Lek og moro",
      icon: <Gamepad2 className="w-5 h-5" />,
      headerColor: "bg-gradient-to-r from-pink-50 to-rose-50",
      description: "Spill, fiksjon, rollespill og karakterer skapt for underholdning."
    },
    {
      title: "Velvære",
      subtitle: "Personlig utvikling",
      icon: <Heart className="w-5 h-5" />,
      headerColor: "bg-gradient-to-r from-red-50 to-orange-50",
      description: "Karakterer fokusert på mental helse, meditasjon og selvhjelp."
    }
  ];
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Populære kategorier</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <MoodCard 
            key={index}
            title={category.title} 
            subtitle={category.subtitle}
            icon={category.icon}
            headerColor={category.headerColor}
            className="hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <p className="text-muted-foreground text-sm">{category.description}</p>
          </MoodCard>
        ))}
      </div>
    </div>
  );
};

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const trendingCharacters = [
    {
      name: "Nova",
      description: "Kvantedatafysiker fra år 2183. Utforsker parallelle universer og hjelper med komplekse vitenskapelige spørsmål.",
      image: "https://images.unsplash.com/photo-1639474576517-e0a165ae7551?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "Quantum Labs",
      conversations: 245729
    },
    {
      name: "Elias Stemning",
      description: "Poetisk sjel og filosof som ser dybden i hverdagen. Spesialitet i eksistensielle samtaler.",
      image: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "Filosofen",
      conversations: 98421
    },
    {
      name: "Chef Milano",
      description: "Italiensk mesterkokk med 30 års erfaring. Perfekt for matinspirasjon, oppskrifter og matlagingstips.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "CulinaryAI",
      conversations: 183650
    },
    {
      name: "Luna Therapy",
      description: "Empatisk samtalepartner for refleksjon og personlig vekst. Ikke en erstatning for profesjonell terapi.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "MindfulTech",
      conversations: 359841
    },
    {
      name: "Professor Historikus",
      description: "Historieprofessor som kan gjøre enhver historisk periode levende gjennom fascinerende fortellinger.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "HistoryChannel",
      conversations: 127935
    }
  ];
  
  const focusCharacters = [
    {
      name: "Kosmisk Hype",
      description: "Trendy, energisk og alltid oppdatert på de nyeste kulturelle trendene. Hun gjør det ukjente kjent.",
      image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "TrendWave",
      conversations: 421503
    },
    {
      name: "Åndelig Oracle",
      description: "Veileder for indre reiser, meditasjon og spirituell utvikling. Skaper ro i kaotiske tider.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "InnerPath",
      conversations: 267381
    },
    {
      name: "Familiemiddagen fra helvete",
      description: "Opplev et dysfunksjonelt familiedrama der alle karakterene er på sitt verste. Mørk humor garantert!",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "DramaLama",
      conversations: 187436
    },
    {
      name: "Mannen i hjørnet",
      description: "Han står i hjørnet. Og ser på deg. Perfekt for de som liker en skummel opplevelse.",
      image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "HorrorMaster",
      conversations: 156289
    },
    {
      name: "Dating Coach",
      description: "Ærlig, ufiltrert dating-coach som gir råd basert på forskning fremfor floskler og 'feel-good' prat.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "RelationshipGuru",
      conversations: 398265
    }
  ];
  
  const featuredCharacters = [
    {
      name: "Sokrates",
      description: "Den klassiske filosofen bringer tidløs visdom til vår tid. Utfordrer antagelser med sin sokrtaiske metode.",
      image: "https://images.unsplash.com/photo-1623461487986-9400110de28e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "PhilosophyHub",
      conversations: 204837
    },
    {
      name: "GameGuide",
      description: "Din ultimate gaming-kompis som kan hjelpe deg gjennom vanskelige nivåer og diskutere spillnyheter.",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "GamerSquad",
      conversations: 312645
    },
    {
      name: "Tastaturkrigeren",
      description: "Kongen av kommentarfeltet har sterke meninger om alt. Perfekt for å øve på debattferdigheter.",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "DebateMaster",
      conversations: 142957
    },
    {
      name: "Dr. Hjernetrening",
      description: "Kognitiv trener som hjelper deg med å løse logiske gåter, matematiske problemer og logiske utfordringer.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "BrainBooster",
      conversations: 275391
    },
    {
      name: "Reiseguiden",
      description: "Virtuell reiseguide med kunnskap om hele verden. Planlegg din neste tur eller utforsk fra sofaen.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "TravelBuddy",
      conversations: 194628
    }
  ];
  
  const newCharacters = [
    {
      name: "Finansrådgiveren",
      description: "Praktiske råd om personlig økonomi, investeringer og økonomisk planlegging for hverdagsmennesker.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "MoneyMentor",
      conversations: 47382
    },
    {
      name: "Eventyrfortelleren",
      description: "Skaper unike historier basert på dine ideer. Perfekt for foreldre og lærere som trenger nye fortellinger.",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "StoryWeaver",
      conversations: 35961
    },
    {
      name: "Den Kreative Musa",
      description: "Inspirasjonskilde for kunstnere, forfattere og designere som står fast i kreative prosesser.",
      image: "https://images.unsplash.com/photo-1513708847817-bbb957be3b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "ArtisticSoul",
      conversations: 29547
    },
    {
      name: "Coach Motivator",
      description: "Personlig motivator som hjelper deg å oppnå dine mål med praktiske råd og oppmuntring.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "MotivationMasters",
      conversations: 52136
    },
    {
      name: "TV-Eksperten",
      description: "Filmkritiker og serie-entusiast som kan gi deg perfekte anbefalinger basert på din smak.",
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      creator: "ScreenTime",
      conversations: 41873
    }
  ];
  
  return (
    <PageContainer title="Karakterer" description="Utforsk og snakk med fascinerende digitale personligheter">
      <div className="mb-8 flex flex-col md:flex-row gap-4 md:items-center">
        <SearchInput 
          placeholder="Søk etter karakterer..." 
          className="max-w-xl flex-1"
          onSearch={setSearchQuery}
        />
        <div className="flex gap-2">
          <Button variant="outline" className="w-full md:w-auto">
            <Filter className="w-4 h-4 mr-2" />
            Filtrer
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Hero Section inspired by Character.ai */}
      <HeroSection />
      
      {/* Featured Characters Row */}
      <FeaturedCharacters />
      
      <div className="mt-12 space-y-16">
        <CharacterSection 
          title="I fokus" 
          icon={<Flame className="w-6 h-6 text-orange-500" />} 
          characters={focusCharacters} 
          variant="carousel"
        />
        
        <CharacterSection 
          title="Trendende" 
          icon={<TrendingUp className="w-6 h-6 text-purple-500" />} 
          characters={trendingCharacters} 
          variant="carousel"
        />
        
        <CharacterSection 
          title="Utvalgte" 
          icon={<Star className="w-6 h-6 text-amber-500" />} 
          characters={featuredCharacters} 
          variant="grid"
        />
        
        <CharacterSection 
          title="Nye karakterer" 
          icon={<Rocket className="w-6 h-6 text-blue-500" />} 
          characters={newCharacters} 
          variant="carousel"
        />
      </div>
      
      {/* Categories Section */}
      <CategorySection />
    </PageContainer>
  );
};

export default Characters;
