
import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { UserProfileLayout } from '@/components/profile/UserProfileLayout';
import { ProfileCover } from '@/components/profile/ProfileCover';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Globe, Twitter, Instagram, Linkedin } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <DefaultLayout>
      <UserProfileLayout>
        <div className="space-y-6 max-w-4xl mx-auto">
          <ProfileCover />
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Fornavn</label>
              <Input 
                placeholder="Ditt fornavn" 
                defaultValue="Margaret"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Etternavn</label>
              <Input 
                placeholder="Ditt etternavn" 
                defaultValue="Villard"
              />
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Brukernavn</label>
            <Input 
              placeholder="Ditt brukernavn" 
              defaultValue="margaret-villard-69"
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
                defaultValue="www.margaret.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Biografi</label>
            <Textarea 
              placeholder="Skriv litt om deg selv..."
              rows={5}
              defaultValue="Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!"
            />
            <p className="text-sm text-muted-foreground mt-1 text-right">
              98 tegn igjen
            </p>
          </div>
          
          <div className="pt-4 border-t">
            <h3 className="text-lg font-medium mb-4">Sosiale medier</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-blue-400" />
                <Input placeholder="Twitter brukernavn" defaultValue="@margaretv" />
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-500" />
                <Input placeholder="Instagram brukernavn" defaultValue="margaret.villard" />
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-600" />
                <Input placeholder="LinkedIn brukernavn" defaultValue="margaretvillard" />
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-500" />
                <Input placeholder="Blogg URL" defaultValue="blog.margaret.com" />
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
