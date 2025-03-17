
import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { UserProfileLayout } from '@/components/profile/UserProfileLayout';
import { ProfileCover } from '@/components/profile/ProfileCover';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Globe, Twitter, Instagram, Linkedin, MapPin, Briefcase, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile: React.FC = () => {
  return (
    <DefaultLayout>
      <UserProfileLayout>
        <div className="space-y-6 max-w-4xl mx-auto">
          <ProfileCover 
            coverImage="https://images.unsplash.com/photo-1535356795199-3b6a7e419321?q=80&w=1500&auto=format&fit=crop" 
            profileImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
          />
          
          <div className="flex items-center space-x-3 px-8">
            <Badge variant="outline" className="bg-primary/5 text-primary gap-1.5 flex items-center px-3 py-1">
              <Briefcase className="w-3.5 h-3.5" /> Fotograf
            </Badge>
            <Badge variant="outline" className="bg-primary/5 text-primary gap-1.5 flex items-center px-3 py-1">
              <MapPin className="w-3.5 h-3.5" /> Oslo, Norge
            </Badge>
            <Badge variant="outline" className="bg-primary/5 text-primary gap-1.5 flex items-center px-3 py-1">
              <Calendar className="w-3.5 h-3.5" /> Medlem siden 2022
            </Badge>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Fornavn</label>
              <Input 
                placeholder="Ditt fornavn" 
                defaultValue="Emilie"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Etternavn</label>
              <Input 
                placeholder="Ditt etternavn" 
                defaultValue="Johansen"
              />
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Brukernavn</label>
            <Input 
              placeholder="Ditt brukernavn" 
              defaultValue="emilie.photo"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Lokasjon</label>
            <Input 
              placeholder="Din lokasjon"
              defaultValue="Oslo, Norge"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Nettside</label>
            <div className="flex">
              <div className="bg-muted flex items-center px-3 rounded-l-md border border-r-0 border-input">
                <span className="text-muted-foreground">https://</span>
              </div>
              <Input 
                placeholder="www.dinside.no" 
                className="rounded-l-none"
                defaultValue="www.emiliephotography.no"
              />
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Biografi</label>
            <Textarea 
              placeholder="Skriv litt om deg selv..."
              rows={5}
              defaultValue="Hei! Jeg er Emilie, en lidenskapelig fotograf med fokus på portrett- og reisefotografi. Med kamera i hånden har jeg utforsket over 20 land og fanget utallige øyeblikk. Jeg elsker å jobbe med naturlig lys og autentiske øyeblikk. Når jeg ikke fotograferer, nyter jeg lange fjellturer, god kaffe og live musikk. La oss skape noe vakkert sammen!"
            />
            <p className="text-sm text-muted-foreground mt-1 text-right">
              24 tegn igjen
            </p>
          </div>
          
          <div className="pt-4 border-t">
            <h3 className="text-lg font-medium mb-4">Sosiale medier</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-blue-400" />
                <Input placeholder="Twitter brukernavn" defaultValue="@emilie_photo" />
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-500" />
                <Input placeholder="Instagram brukernavn" defaultValue="emilie.photography" />
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-600" />
                <Input placeholder="LinkedIn brukernavn" defaultValue="emiliejohansen" />
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-500" />
                <Input placeholder="Blogg URL" defaultValue="travel.emiliephotography.no" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Avbryt</Button>
            <Button>Lagre endringer</Button>
          </div>
        </div>
      </UserProfileLayout>
    </DefaultLayout>
  );
};

export default Profile;
