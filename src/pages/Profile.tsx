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
  return <DefaultLayout>
      <UserProfileLayout>
        <div className="space-y-6">
          <ProfileCover coverImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1500&auto=format&fit=crop" profileImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop" />
          
          <div className="flex items-center space-x-3 px-8">
            
            
            
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Fornavn</label>
              <Input placeholder="Ditt fornavn" defaultValue="Sofia" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Etternavn</label>
              <Input placeholder="Ditt etternavn" defaultValue="Bjørnstad" />
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Brukernavn</label>
            <Input placeholder="Ditt brukernavn" defaultValue="sofia.design" />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Lokasjon</label>
            <Input placeholder="Din lokasjon" defaultValue="Oslo, Norge" />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Nettside</label>
            <div className="flex">
              <div className="bg-muted flex items-center px-3 rounded-l-md border border-r-0 border-input">
                <span className="text-muted-foreground">https://</span>
              </div>
              <Input placeholder="www.dinside.no" className="rounded-l-none" defaultValue="www.sofiadesign.no" />
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Biografi</label>
            <Textarea placeholder="Skriv litt om deg selv..." rows={5} defaultValue="Hei! Jeg er Sofia, en UX-designer med fokus på brukervennlige og tilgjengelige digitale løsninger. Jeg har over 5 års erfaring med å skape intuitive brukeropplevelser for både store og små virksomheter. På fritiden liker jeg å utforske fjellene i Norge og drive med keramikk." />
            <p className="text-sm text-muted-foreground mt-1 text-right">
              24 tegn igjen
            </p>
          </div>
          
          <div className="pt-4 border-t">
            <h3 className="text-lg font-medium mb-4">Sosiale medier</h3>
            <div className="space-y-4">
              
              
              
              
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Avbryt</Button>
            <Button>Lagre endringer</Button>
          </div>
        </div>
      </UserProfileLayout>
    </DefaultLayout>;
};
export default Profile;