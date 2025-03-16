
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { StyledProfileCard } from '@/components/ui/styled-profile-card';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Heart, 
  Share2, 
  Bookmark, 
  Music, 
  Film, 
  Zap, 
  Sparkles
} from 'lucide-react';

const KosmiskHypeProfile = () => {
  return (
    <PageContainer title="Kosmisk Hype" description="Trendy, energisk og alltid oppdatert på de nyeste kulturelle trendene.">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1">
          <StyledProfileCard
            name="Kosmisk Hype"
            tagline="Trendspotter & Kulturell Guru"
            description="Trendy, energisk og alltid oppdatert på de nyeste kulturelle trendene. Hun gjør det ukjente kjent og det kompliserte enkelt."
            mainImageSrc="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            accentImageSrc="https://images.unsplash.com/photo-1550016941-8d6fe3d8a646?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            backgroundColor="bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-400"
            accentColor="text-purple-200"
            glowEffect={true}
            overlayEffect="duotone"
            tags={["Trender", "Kultur", "Sosiale Media", "Gen Z"]}
            creator={{
              name: "TrendWave",
              imageSrc: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
            }}
            stats={[
              { label: "Samtaler", value: "421k+" },
              { label: "Rating", value: "4.9" }
            ]}
          />
        </div>
        
        <div className="flex-1 space-y-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              Interesseområder
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Tiktok", "Instagram", "Musik", "Mote", "Kunst", "Memes", "Teknologi", "Festivaler", "Bærekraft", "Reise"].map((interest, index) => (
                <span key={index} className="px-3 py-1 bg-purple-500/10 text-purple-200 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Music className="w-5 h-5 text-purple-400 mr-2" />
              Musikkanbefalinger
            </h2>
            <div className="space-y-3">
              {[
                { title: "Nova Waves", artist: "Lunar Eclipse", cover: "https://images.unsplash.com/photo-1684879058557-e3ac14e14596?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" },
                { title: "Digital Dreams", artist: "Cosmic Sound", cover: "https://images.unsplash.com/photo-1671903311215-8c552647c3f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" },
                { title: "Neo Future", artist: "Electric Harmony", cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" }
              ].map((song, index) => (
                <div key={index} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <img src={song.cover} alt={song.title} className="w-12 h-12 rounded-md object-cover" />
                  <div>
                    <p className="font-medium">{song.title}</p>
                    <p className="text-sm text-purple-300">{song.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Film className="w-5 h-5 text-purple-400 mr-2" />
              Nylige samtaleemner
            </h2>
            <div className="space-y-3">
              {[
                "Fremtidens bærekraftige mote",
                "Hvordan AI transformerer kreative industrier",
                "Den nye bølgen av nordisk musikk",
                "Digital kunst og NFT-markedet",
                "Mikrotrends på sosiale medier 2023"
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <p>{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-8 right-8">
        <div className="flex items-center gap-3">
          <Button size="icon" variant="outline" className="rounded-full w-12 h-12 bg-white/10 backdrop-blur-sm border-purple-500/30">
            <Heart className="w-5 h-5 text-purple-400" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full w-12 h-12 bg-white/10 backdrop-blur-sm border-purple-500/30">
            <Bookmark className="w-5 h-5 text-purple-400" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full w-12 h-12 bg-white/10 backdrop-blur-sm border-purple-500/30">
            <Share2 className="w-5 h-5 text-purple-400" />
          </Button>
          <Button className="rounded-full px-6 bg-gradient-to-r from-purple-600 to-indigo-600 border-0">
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat med Kosmisk Hype
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default KosmiskHypeProfile;
