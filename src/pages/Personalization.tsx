import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { UserProfileLayout } from '@/components/profile/UserProfileLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Mock personalization data
const personalizations = [
  {
    category: "Preferanser",
    items: [
      {
        title: "Interesser",
        data: ["Reising", "Teknologi", "Matlaging", "Fotografi", "Bøker", "Filmer"],
        date: "15. mars 2025",
        source: "Onboarding"
      },
      {
        title: "Spisevaner",
        data: "Foretrekker vegetarisk og sjømat. Liker særlig italiensk og japansk mat.",
        date: "10. mars 2025",
        source: "Samtale"
      },
      {
        title: "Reisemål",
        data: "Har besøkt Japan, Italia og Frankrike. Ønsker å besøke New Zealand og Island.",
        date: "2. mars 2025",
        source: "Samtale"
      }
    ]
  },
  {
    category: "Personlighet",
    items: [
      {
        title: "MBTI-type",
        data: "ENTJ - 'Kommandøren'",
        date: "4. mars 2025",
        source: "Profilvurdering"
      },
      {
        title: "Kommunikasjonsstil",
        data: "Direkte og analytisk. Setter pris på effektivitet og strukturerte svar.",
        date: "28. februar 2025",
        source: "Interaksjonsmønster"
      },
      {
        title: "Læringsstil",
        data: "Visuell og praktisk. Foretrekker eksempler fremfor lange forklaringer.",
        date: "25. februar 2025",
        source: "Samtale"
      }
    ]
  },
  {
    category: "Demografi",
    items: [
      {
        title: "Alder",
        data: "34 år",
        date: "15. mars 2025",
        source: "Registrering"
      },
      {
        title: "Lokasjon",
        data: "Oslo, Norge",
        date: "15. mars 2025",
        source: "Registrering"
      },
      {
        title: "Yrke",
        data: "Produktdesigner",
        date: "4. mars 2025",
        source: "Samtale"
      }
    ]
  }
];

const Personalization: React.FC = () => {
  return (
    <DefaultLayout>
      <UserProfileLayout>
        <div>
          <div className="mb-6">
            <p className="text-muted-foreground">
              Her lagrer Norea AI personaliserte detaljer om deg for å gi en skreddersydd opplevelse. 
              Disse detaljene er utledet fra dine samtaler og preferanser.
            </p>
          </div>
          
          <div className="space-y-8">
            {personalizations.map((category, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <div className="grid gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Tag className="h-3 w-3" />
                            <span className="text-xs">{item.source}</span>
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {Array.isArray(item.data) ? (
                          <div className="flex flex-wrap gap-2">
                            {item.data.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline">{tag}</Badge>
                            ))}
                          </div>
                        ) : (
                          <p>{item.data}</p>
                        )}
                        
                        <div className="mt-3 pt-2 border-t flex justify-between items-center text-xs text-muted-foreground">
                          <span>Lagret: {item.date}</span>
                          <button className="text-primary hover:underline">Rediger</button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-4 border-t">
            <h3 className="text-lg font-medium mb-4">Databehandling</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">Last ned personlige data</Button>
              <Button variant="destructive" className="w-full">Slett alle personlige data</Button>
            </div>
          </div>
        </div>
      </UserProfileLayout>
    </DefaultLayout>
  );
};

export default Personalization;
