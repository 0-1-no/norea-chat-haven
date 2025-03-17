
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Archive, Search, MessageCircle, Calendar, Trash2, Book, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ArchivePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for archived conversations
  const archivedConversations = [
    {
      id: 1,
      title: 'Forskjellen mellom kunstig intelligens og maskinlæring',
      date: '10. mars 2023',
      preview: 'Vi diskuterte forskjeller mellom AI og ML, inkludert teknikker og anvendelser...',
      tags: ['Teknologi', 'AI', 'Maskinlæring']
    },
    {
      id: 2,
      title: 'Hvordan lage den perfekte pastarett',
      date: '2. februar 2023',
      preview: 'Italienske pastatradisjoner, tips for al dente pasta, og hemmeligheten bak den perfekte saus...',
      tags: ['Mat', 'Matlaging', 'Oppskrifter']
    },
    {
      id: 3,
      title: 'Grunnleggende fotografi for nybegynnere',
      date: '15. januar 2023',
      preview: 'Gjennomgang av kamerainnstillinger, komposisjon og bruk av naturlig lys for bedre bilder...',
      tags: ['Fotografi', 'Hobbyer', 'Kreativ']
    },
    {
      id: 4,
      title: 'Beste reisemål i Europa for sommer 2023',
      date: '30. desember 2022',
      preview: 'Anbefalinger for populære og mindre kjente reisemål, beste tidspunkt for besøk og budsjettips...',
      tags: ['Reise', 'Europa', 'Sommer']
    },
    {
      id: 5,
      title: 'Grunnleggende økonomistyring for unge voksne',
      date: '5. november 2022',
      preview: 'Strategier for sparing, investering og gjeldsreduksjon for de i 20-årene...',
      tags: ['Økonomi', 'Personlig finans', 'Sparing']
    },
    {
      id: 6,
      title: 'Hvordan starte med yoga hjemme',
      date: '20. oktober 2022',
      preview: 'Enkle yogastillinger for nybegynnere, pusteøvelser og tips for å etablere en daglig rutine...',
      tags: ['Helse', 'Trening', 'Yoga']
    }
  ];

  // Filter conversations based on search query
  const filteredConversations = searchQuery 
    ? archivedConversations.filter(convo => 
        convo.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        convo.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        convo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : archivedConversations;

  const handleDelete = (id: number) => {
    console.log('Deleting conversation with ID:', id);
    // Here you would typically implement the actual deletion logic
  };

  return (
    <PageContainer title="Samtalearkiv" showBackButton={true}>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero section for archive */}
        <div className="relative bg-gradient-to-r from-amber-50 to-yellow-100 rounded-xl p-8 overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <BookOpen className="w-64 h-64 text-amber-800" />
          </div>
          <div className="max-w-3xl relative z-10">
            <h1 className="text-3xl font-bold text-amber-900 mb-2">Samtalearkiv</h1>
            <p className="text-amber-800">
              Utforsk tidligere samtaler og gjenopplev kunnskap og ideer. 
              Dette er ditt personlige bibliotek av dialoger, alltid tilgjengelig for referanse.
            </p>
          </div>
        </div>

        {/* Search section */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Søk etter samtaler, emner eller nøkkelord..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-base bg-white border-secondary-100"
          />
        </div>

        {/* Archive list */}
        <div className="grid gap-4">
          {filteredConversations.map((conversation) => (
            <Card key={conversation.id} className="bg-white border-secondary-100 hover:border-primary/20 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-medium text-primary-900 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-amber-600" />
                      {conversation.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1.5 text-muted-foreground mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {conversation.date}
                    </CardDescription>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 -mt-1 -mr-2"
                    onClick={() => handleDelete(conversation.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">{conversation.preview}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {conversation.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-amber-50 text-amber-800 hover:bg-amber-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2 border-t">
                <Button variant="ghost" className="ml-auto text-primary">
                  Åpne samtale
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredConversations.length === 0 && (
          <div className="text-center py-12">
            <Book className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Ingen samtaler funnet</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Vi kunne ikke finne noen samtaler som matcher søkekriteriene dine. Prøv å justere søket eller utforsk andre emner.
            </p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default ArchivePage;
