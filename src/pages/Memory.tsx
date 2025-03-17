
import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { UserProfileLayout } from '@/components/profile/UserProfileLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'; 
import { Clock, Tag, MapPin, Star, Heart, AlertCircle, BookOpen, Bookmark } from 'lucide-react';

// Mock memory data
const memories = [
  {
    id: 1,
    type: "Preferanse",
    content: "Annikens adresse er Sikdalsveien 24B.",
    date: "17. mars 2025",
    icon: <MapPin className="h-4 w-4 text-red-500" />,
    tags: ["Adresse", "Kontaktinfo"]
  },
  {
    id: 2,
    type: "Preferanse",
    content: "Brukerens 'love languages' er physical touch, quality time og acts of service.",
    date: "4. mars 2025",
    icon: <Heart className="h-4 w-4 text-pink-500" />,
    tags: ["Relasjon", "Personlighet"]
  },
  {
    id: 3,
    type: "Preferanse",
    content: "Brukerens personlighetstype er ENTJ.",
    date: "4. mars 2025",
    icon: <BookOpen className="h-4 w-4 text-purple-500" />,
    tags: ["Personlighet", "MBTI"]
  },
  {
    id: 4,
    type: "Preferanse",
    content: "Deimante er 30 år gammel, hennes datter heter Vanessa (7 år). Personlighetstypen er ESFJ og 'Love language' er Physical touch.",
    date: "4. mars 2025",
    icon: <Star className="h-4 w-4 text-yellow-500" />,
    tags: ["Familie", "Personlighet"]
  },
  {
    id: 5,
    type: "Preferanse",
    content: "Brukeren liker pizza.",
    date: "28. februar 2025",
    icon: <Heart className="h-4 w-4 text-pink-500" />,
    tags: ["Mat", "Preferanser"]
  },
  {
    id: 6,
    type: "Preferanse",
    content: "Liker fransk mat veldig godt",
    date: "28. februar 2025",
    icon: <Heart className="h-4 w-4 text-pink-500" />,
    tags: ["Mat", "Preferanser"]
  },
  {
    id: 7,
    type: "Påminnelse",
    content: "Husk å sende bursdagshilsen til Anders på tirsdag.",
    date: "4. april 2025",
    icon: <Clock className="h-4 w-4 text-blue-500" />,
    tags: ["Bursdag", "Venner"]
  },
  {
    id: 8,
    type: "Fakta",
    content: "Bruker jobber som UX designer i et tech selskap i Oslo.",
    date: "10. mars 2025",
    icon: <Bookmark className="h-4 w-4 text-indigo-500" />,
    tags: ["Jobb", "Karriere"]
  },
  {
    id: 9,
    type: "Opplysning",
    content: "Brukeren er allergisk mot nøtter. Dette er viktig å huske ved matanbefalinger.",
    date: "20. mars 2025",
    icon: <AlertCircle className="h-4 w-4 text-red-500" />,
    tags: ["Helse", "Allergi"]
  }
];

// Filter categories
const filterCategories = [
  "Alle", "Preferanser", "Påminnelser", "Fakta", "Opplysninger"
];

const Memory: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState("Alle");
  
  const filteredMemories = activeFilter === "Alle" 
    ? memories 
    : memories.filter(memory => memory.type === activeFilter.slice(0, -1));
  
  return (
    <DefaultLayout>
      <UserProfileLayout>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Her lagres minner og fakta som Norea AI har lært om deg og dine omgivelser gjennom samtaler.
              Disse minnene hjelper AI-en å gi deg en mer personlig og relevant opplevelse.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {filterCategories.map((category) => (
              <Badge 
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="space-y-4">
            {filteredMemories.length === 0 ? (
              <div className="text-center p-10 border rounded-lg">
                <p className="text-muted-foreground">Ingen minner funnet med dette filteret.</p>
              </div>
            ) : (
              filteredMemories.map((memory) => (
                <Card key={memory.id} className="overflow-hidden">
                  <div className="flex">
                    <div className="p-4 flex items-center justify-center bg-muted/30 w-16">
                      {memory.icon}
                    </div>
                    <div className="flex-1">
                      <CardHeader className="pb-2 pt-4">
                        <div className="flex justify-between items-start">
                          <Badge variant="outline" className="text-xs">
                            {memory.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {memory.date}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">{memory.content}</p>
                        <div className="flex flex-wrap gap-1">
                          {memory.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
          
          <div className="mt-8 pt-4 border-t">
            <h3 className="text-lg font-medium mb-4">Hukommelsesinnstillinger</h3>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Administrer hukommelse</CardTitle>
                  <CardDescription>Kontroller hva Norea AI kan huske om deg</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">Deaktiver hukommelse</Button>
                    <Button variant="destructive" className="w-full">Slett alle minner</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </UserProfileLayout>
    </DefaultLayout>
  );
};

export default Memory;
