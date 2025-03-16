
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Plus, Home } from 'lucide-react';

const EmptyRooms = () => {
  return (
    <PageContainer 
      title="Rom" 
      description="Arbeidsområder for prosjekter, team og personlige rom"
    >
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="bg-muted rounded-full p-6 mb-6">
          <Home className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-3">Ingen rom ennå</h1>
        <p className="text-muted-foreground max-w-md mb-8">
          Rom er arbeidsområder hvor du kan samarbeide med andre eller jobbe på personlige prosjekter. 
          Opprett ditt første rom for å komme i gang.
        </p>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Opprett ditt første rom</span>
        </Button>
      </div>
    </PageContainer>
  );
};

export default EmptyRooms;
