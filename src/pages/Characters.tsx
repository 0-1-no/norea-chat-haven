
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent } from '@/components/ui/card';
import { MoodCard } from '@/components/ui/mood-card';
import { Separator } from '@/components/ui/separator';
import { SearchInput } from '@/components/SearchInput';
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
  Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Character card component
const CharacterCard = ({ 
  character, 
  className 
}: { 
  character: any, 
  className?: string 
}) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className={`overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={() => console.log(`Navigating to character: ${character.name}`)}
    >
      <div className="relative aspect-square overflow-hidden">
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

// Featured character banner
const FeaturedCharacterBanner = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] opacity-40 bg-cover bg-center" />
      
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        <div className="flex-1">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-2">Hva vil du oppdage i dag?</h2>
          <p className="text-white/90 text-sm md:text-base max-w-lg">
            Utforsk kreative universer, lær noe nytt eller bare slapp av med en fascinerende samtale.
          </p>
        </div>
        
        <div className="mt-auto flex gap-3">
          <div className="bg-white/10 backdrop-blur rounded-full px-3 py-1 flex items-center border border-white/20">
            <Sparkles className="h-4 w-4 text-amber-300 mr-1.5" />
            <span className="text-white text-sm">Utforsk personligheter</span>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-full px-3 py-1 flex items-center border border-white/20">
            <Bot className="h-4 w-4 text-cyan-300 mr-1.5" />
            <span className="text-white text-sm">Lag din egen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Character category section
const CharacterSection = ({ 
  title, 
  icon, 
  characters 
}: { 
  title: string, 
  icon: React.ReactNode, 
  characters: any[] 
}) => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-md bg-muted">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
    </section>
  );
};

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Trending characters
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
  
  // In focus characters
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
  
  // Featured characters
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
  
  // New characters
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
      <div className="mb-6">
        <SearchInput 
          placeholder="Søk etter karakterer..." 
          className="max-w-xl"
          onSearch={setSearchQuery}
        />
      </div>
      
      <FeaturedCharacterBanner />
      
      <div className="mt-8 space-y-12">
        <CharacterSection 
          title="I fokus" 
          icon={<Flame className="w-5 h-5 text-orange-500" />} 
          characters={focusCharacters} 
        />
        
        <CharacterSection 
          title="Trendende" 
          icon={<Sparkles className="w-5 h-5 text-purple-500" />} 
          characters={trendingCharacters} 
        />
        
        <CharacterSection 
          title="Utvalgte" 
          icon={<Star className="w-5 h-5 text-amber-500" />} 
          characters={featuredCharacters} 
        />
        
        <CharacterSection 
          title="Nye karakterer" 
          icon={<Rocket className="w-5 h-5 text-blue-500" />} 
          characters={newCharacters} 
        />
      </div>
      
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Populære kategorier</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <MoodCard 
            title="Kunnskap" 
            subtitle="Lær noe nytt"
            icon={<Brain className="w-5 h-5" />}
            headerColor="bg-blue-50"
          >
            <p className="text-muted-foreground text-sm">Utforsk vitenskapelige, filosofiske og utdanningsmessige karakterer.</p>
          </MoodCard>
          
          <MoodCard 
            title="Kreativitet" 
            subtitle="Få inspirasjon"
            icon={<Sparkles className="w-5 h-5" />}
            headerColor="bg-purple-50"
          >
            <p className="text-muted-foreground text-sm">Møt kreative karakterer som kan hjelpe med kunst, skriving og design.</p>
          </MoodCard>
          
          <MoodCard 
            title="Underholdning" 
            subtitle="Lek og moro"
            icon={<Gamepad2 className="w-5 h-5" />}
            headerColor="bg-pink-50"
          >
            <p className="text-muted-foreground text-sm">Spill, fiksjon, rollespill og karakterer skapt for underholdning.</p>
          </MoodCard>
          
          <MoodCard 
            title="Velvære" 
            subtitle="Personlig utvikling"
            icon={<Heart className="w-5 h-5" />}
            headerColor="bg-red-50"
          >
            <p className="text-muted-foreground text-sm">Karakterer fokusert på mental helse, meditasjon og selvhjelp.</p>
          </MoodCard>
        </div>
      </div>
    </PageContainer>
  );
};

export default Characters;
