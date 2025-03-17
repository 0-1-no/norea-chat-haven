
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MessageCircle, Calendar, Trash2, Book, BookOpen } from 'lucide-react';

const ArchivePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for archived conversations
  const archivedConversations = [
    {
      id: 1,
      title: 'Forskjellen mellom kunstig intelligens og maskinlæring',
      date: '10. mars 2023',
      preview: 'Vi diskuterte forskjeller mellom AI og ML, inkludert teknikker og anvendelser...',
    },
    {
      id: 2,
      title: 'Hvordan lage den perfekte pastarett',
      date: '2. februar 2023',
      preview: 'Italienske pastatradisjoner, tips for al dente pasta, og hemmeligheten bak den perfekte saus...',
    },
    {
      id: 3,
      title: 'Grunnleggende fotografi for nybegynnere',
      date: '15. januar 2023',
      preview: 'Gjennomgang av kamerainnstillinger, komposisjon og bruk av naturlig lys for bedre bilder...',
    },
    {
      id: 4,
      title: 'Beste reisemål i Europa for sommer 2023',
      date: '30. desember 2022',
      preview: 'Anbefalinger for populære og mindre kjente reisemål, beste tidspunkt for besøk og budsjettips...',
    },
    {
      id: 5,
      title: 'Grunnleggende økonomistyring for unge voksne',
      date: '5. november 2022',
      preview: 'Strategier for sparing, investering og gjeldsreduksjon for de i 20-årene...',
    },
    {
      id: 6,
      title: 'Hvordan starte med yoga hjemme',
      date: '20. oktober 2022',
      preview: 'Enkle yogastillinger for nybegynnere, pusteøvelser og tips for å etablere en daglig rutine...',
    }
  ];

  // Filter conversations based on search query
  const filteredConversations = searchQuery 
    ? archivedConversations.filter(convo => 
        convo.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        convo.preview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : archivedConversations;

  const handleDelete = (id: number) => {
    console.log('Deleting conversation with ID:', id);
    // Here you would typically implement the actual deletion logic
  };

  return (
    <div className="flex-1 overflow-auto p-4 sm:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Hero section for archive */}
        <div className="relative bg-gradient-to-r from-amber-50 to-yellow-100 rounded-xl p-6 overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <BookOpen className="w-48 h-48 text-amber-800" />
          </div>
          <div className="max-w-3xl relative z-10">
            <h1 className="text-2xl font-bold text-amber-900 mb-1">Samtalearkiv</h1>
            <p className="text-amber-800 text-sm">
              Utforsk tidligere samtaler og gjenopplev kunnskap og ideer. 
              Dette er ditt personlige bibliotek av dialoger.
            </p>
          </div>
        </div>

        {/* Search section */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Søk etter samtaler eller emner..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 py-2 text-sm bg-white border-secondary-100"
          />
        </div>

        {/* Archive list - compressed */}
        <div className="space-y-2">
          {filteredConversations.map((conversation) => (
            <Card 
              key={conversation.id} 
              className="bg-white border-secondary-100 hover:border-primary/20 transition-colors cursor-pointer"
            >
              <div className="p-2.5">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-primary-900 line-clamp-1">{conversation.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>{conversation.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 -mt-1 -mr-1 h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(conversation.id);
                    }}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredConversations.length === 0 && (
          <div className="text-center py-8">
            <Book className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-1">Ingen samtaler funnet</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Vi kunne ikke finne noen samtaler som matcher søkekriteriene dine. Prøv å justere søket.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchivePage;
