
import React, { useState } from 'react';
import { Search, Trash2, MessageCircle, Calendar, Clock } from 'lucide-react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface ConversationProps {
  title: string;
  date: string; 
  preview: string;
  onDelete: () => void;
}

const ConversationItem: React.FC<ConversationProps> = ({ 
  title, 
  date, 
  preview,
  onDelete 
}) => {
  return (
    <div className="p-3 border rounded-lg hover:bg-accent/50 transition-colors group">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-medium text-base truncate">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground hidden sm:inline-block">{date}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity" 
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
          </Button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-1">{preview}</p>
    </div>
  );
}

const Archive: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for conversations
  const mockConversations = [
    {
      id: '1',
      title: 'Diskusjon om kunstig intelligens',
      date: '15. mars 2023',
      preview: 'Vi diskuterte fremtiden for kunstig intelligens og hvordan den vil påvirke samfunnet...'
    },
    {
      id: '2',
      title: 'Planlegging av sommerferie',
      date: '3. februar 2023',
      preview: 'Utforsket forskjellige reisemål for sommeren, inkludert Spania, Italia og Hellas...'
    },
    {
      id: '3',
      title: 'Matoppskrifter og matlaging',
      date: '27. januar 2023',
      preview: 'Utvekslet noen gode oppskrifter på middag som kan lages på under 30 minutter...'
    },
    {
      id: '4',
      title: 'Boligmarkedet i Oslo',
      date: '14. desember 2022',
      preview: 'Analyserte trender i boligmarkedet i Oslo og diskuterte gode områder å kjøpe bolig...'
    },
    {
      id: '5',
      title: 'Karriererådgivning og CV-tips',
      date: '5. november 2022',
      preview: 'Gjennomgikk CV-en min og diskuterte hvordan jeg kan forbedre den for jobbsøking...'
    },
    {
      id: '6',
      title: 'Produktivitetsteknikker',
      date: '17. oktober 2022',
      preview: 'Vi diskuterte forskjellige produktivitetsteknikker, inkludert Pomodoro-metoden...'
    },
    {
      id: '7',
      title: 'Bokdiskusjon: Sapiens av Yuval Noah Harari',
      date: '29. september 2022',
      preview: 'Diskuterte hovedpoengene i Sapiens og hvordan den presenterer menneskehetens historie...'
    },
    {
      id: '8',
      title: 'Klimaendringer og bærekraft',
      date: '12. august 2022',
      preview: 'Utforsket måter å leve mer miljøvennlig og redusere vårt karbonavtrykk...'
    }
  ];
  
  const filteredConversations = searchQuery 
    ? mockConversations.filter(conv => 
        conv.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        conv.preview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockConversations;
    
  const handleDelete = (id: string) => {
    // In a real application, you would call an API to delete the conversation
    console.log(`Deleting conversation with id: ${id}`);
  };

  return (
    <DefaultLayout>
      <div className="container max-w-4xl mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Samtalearkiv</h1>
            <p className="text-muted-foreground mt-1">Bla gjennom tidligere samtaler</p>
          </div>
          <div className="flex items-center">
            <MessageCircle className="h-5 w-5 text-primary mr-2" />
            <span className="font-medium">{mockConversations.length} samtaler</span>
          </div>
        </div>

        {/* Search and filters */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Søk i arkivet..."
            className="pl-9 bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Library-like decorative header */}
        <div className="flex items-center mb-6 bg-muted/50 p-4 rounded-lg border">
          <div className="flex items-center mr-5">
            <Calendar className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium">Sortert etter dato</span>
          </div>
          <Separator orientation="vertical" className="h-6 mx-4" />
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium">Nyeste først</span>
          </div>
        </div>

        {/* Conversations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              title={conversation.title}
              date={conversation.date}
              preview={conversation.preview}
              onDelete={() => handleDelete(conversation.id)}
            />
          ))}
        </div>
        
        {filteredConversations.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">Ingen samtaler funnet</h3>
            <p className="text-muted-foreground mt-1">
              {searchQuery ? 'Prøv et annet søkeord' : 'Du har ingen arkiverte samtaler ennå'}
            </p>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Archive;
