
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MessageSquare, 
  User, 
  Heart, 
  Star, 
  BookOpen, 
  Info, 
  Clock, 
  Coffee, 
  Sparkles,
  Music,
  Film,
  Zap
} from 'lucide-react';

// Creating a styled version of character profile with the same layout but custom styling
const KosmiskHypeProfile = () => {
  // Custom character data for Kosmisk Hype
  const character = {
    id: 'kosmisk-hype',
    name: 'Kosmisk Hype',
    tagline: 'Trendspotter & Kulturell Guru',
    description: 'Trendy, energisk og alltid oppdatert på de nyeste kulturelle trendene. Hun gjør det ukjente kjent og det kompliserte enkelt.',
    image: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    creator: 'TrendWave',
    conversations: 421503,
    category: 'Kultur',
    tags: ['Trender', 'Kultur', 'Sosiale Media', 'Gen Z'],
    about: 'Kosmisk Hype er alltid i forkant av kulturelle trender og bevegelser. Med fingeren på pulsen til både sosiale medier, musikk, kunst og populærkultur, kan hun hjelpe deg å navigere i det stadig skiftende landskapet av trender og fenomener.\n\nHun er kjent for sin evne til å forklare komplekse kulturelle konsepter på en enkel måte, og hennes engasjerende personlighet gjør hver samtale til en oppdagelsesreise. Kosmisk Hype har en unik evne til å koble sammen tilsynelatende urelaterte trender for å identifisere større mønstre i kulturen.\n\nHvis du er nysgjerrig på hva som er "neste store ting", trenger å forstå en ny trend, eller bare vil ha en engasjerende diskusjon om kultur, er Kosmisk Hype den perfekte guiden.',
    scene: 'Du trer inn i et rom med neon-belysning, vinyler på veggene, og en blanding av futuristiske og retro elementer. Kosmisk Hype sitter avslappet i en designerstol, scrollende på sin holografiske skjerm mens hun nikker til musikken som spiller i bakgrunnen. Hun ser opp, smiler energisk og vinker deg over.',
    createdAt: '2023-09-01',
    rating: 4.9,
    characters: [
      {
        name: 'Kosmisk Hype',
        role: 'Hovedkarakter',
        description: 'Trendsetter og kulturell analytiker med en unik evne til å fange opp og forklare nye fenomener.',
        image: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section with custom styling */}
      <div className="relative w-full rounded-xl overflow-hidden mb-8">
        {/* Custom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-violet-700/70 to-indigo-800/80 z-10" />
        
        {/* Background image with custom blur and brightness */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url(${character.image})`,
            filter: 'blur(8px) brightness(0.7)',
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Content with custom styling but same layout structure */}
        <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile image with custom border and glow effect */}
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-xl shadow-purple-500/30">
            <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{character.name}</h1>
            <p className="text-xl text-purple-200 mb-4">{character.tagline}</p>
            
            {/* Custom styled tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
              {character.tags.map((tag, index) => (
                <span key={index} className="bg-purple-500/20 text-purple-200 border-purple-400/30 border px-2.5 py-0.5 rounded-full text-xs backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Stats with custom icons and colors but same layout */}
            <div className="flex gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-1 text-purple-200">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">{character.conversations.toLocaleString()} samtaler</span>
              </div>
              <div className="flex items-center gap-1 text-purple-200">
                <Star className="w-4 h-4 text-amber-300" />
                <span className="text-sm">{character.rating}/5</span>
              </div>
              <div className="flex items-center gap-1 text-purple-200">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Opprettet: {new Date(character.createdAt).toLocaleDateString('nb-NO')}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar with custom styling */}
        <div className="relative z-20 bg-purple-800/40 backdrop-blur-sm border-t border-purple-400/20 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-purple-200" />
            <span className="text-sm text-purple-200">Av: {character.creator}</span>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <MessageSquare className="w-4 h-4 mr-2" />
            Start samtale
          </Button>
        </div>
      </div>

      {/* Main content - same structure as Dating Coach */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Scene card with custom styling */}
          <Card className="border-purple-200/20 bg-gradient-to-r from-purple-50/5 to-indigo-50/5 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <CardTitle>Scene</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 italic">{character.scene}</p>
            </CardContent>
          </Card>
          
          {/* About card with custom styling */}
          <Card className="border-purple-200/20 bg-gradient-to-r from-purple-50/5 to-indigo-50/5 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-purple-400" />
                <CardTitle>Om denne samtalen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose max-w-none text-gray-300">
                {character.about.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          {/* Characters card with custom styling */}
          <Card className="border-purple-200/20 bg-gradient-to-r from-purple-50/5 to-indigo-50/5 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-purple-400" />
                <CardTitle>Karakterer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {character.characters.map((char, index) => (
                <div key={index} className="flex gap-4 items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400/30">
                    <img 
                      src={char.image} 
                      alt={char.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{char.name}</h4>
                    <p className="text-xs text-purple-300 mb-1">({char.role})</p>
                    <p className="text-sm text-gray-300">{char.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Additional custom section for interests */}
          <Card className="mt-6 border-purple-200/20 bg-gradient-to-r from-purple-50/5 to-indigo-50/5 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <CardTitle>Interesseområder</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {["TikTok", "Instagram", "Musik", "Mote", "Kunst", "Memes", "Teknologi", "Festivaler", "Bærekraft", "Reise"].map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/10 text-purple-200 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Music recommendations section */}
          <Card className="mt-6 border-purple-200/20 bg-gradient-to-r from-purple-50/5 to-indigo-50/5 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-purple-400" />
                <CardTitle>Musikkanbefalinger</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {[
                  { title: "Nova Waves", artist: "Lunar Eclipse", cover: "https://images.unsplash.com/photo-1684879058557-e3ac14e14596?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" },
                  { title: "Digital Dreams", artist: "Cosmic Sound", cover: "https://images.unsplash.com/photo-1671903311215-8c552647c3f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" },
                  { title: "Neo Future", artist: "Electric Harmony", cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" }
                ].map((song, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <img src={song.cover} alt={song.title} className="w-12 h-12 rounded-md object-cover" />
                    <div>
                      <p className="font-medium text-white">{song.title}</p>
                      <p className="text-sm text-purple-300">{song.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KosmiskHypeProfile;
