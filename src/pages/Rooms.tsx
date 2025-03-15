
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users, UserCircle, Briefcase, Book, Globe, Code, Brain, Microscope } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: '1',
      name: 'AI Research Project',
      description: 'Personal research on LLM capabilities',
      members: 1,
      type: 'personal',
      icon: <Brain className="w-10 h-10 text-purple-500" />
    },
    {
      id: '2',
      name: 'Team Alpha',
      description: 'Marketing strategy development',
      members: 5,
      type: 'team',
      icon: <Users className="w-10 h-10 text-blue-500" />
    },
    {
      id: '3',
      name: 'Personal Journal',
      description: 'Daily thoughts and reflections',
      members: 1,
      type: 'personal',
      icon: <Book className="w-10 h-10 text-emerald-500" />
    },
    {
      id: '4',
      name: 'Product Development',
      description: 'New product features and roadmap',
      members: 8,
      type: 'team',
      icon: <Code className="w-10 h-10 text-amber-500" />
    },
    {
      id: '5',
      name: 'Biology Study',
      description: 'Research notes on cellular biology',
      members: 1,
      type: 'personal',
      icon: <Microscope className="w-10 h-10 text-green-500" />
    },
    {
      id: '6',
      name: 'Global Initiatives',
      description: 'Cross-functional international projects',
      members: 12,
      type: 'organization',
      icon: <Globe className="w-10 h-10 text-indigo-500" />
    },
    {
      id: '7',
      name: 'Executive Board',
      description: 'Strategic planning and governance',
      members: 7,
      type: 'team',
      icon: <Briefcase className="w-10 h-10 text-red-500" />
    },
    {
      id: '8',
      name: 'Self Development',
      description: 'Personal growth and learning goals',
      members: 1,
      type: 'personal',
      icon: <UserCircle className="w-10 h-10 text-teal-500" />
    }
  ];

  return (
    <PageContainer 
      title="Rom" 
      description="Arbeidsområder for prosjekter, team og personlige rom"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Dine rom</h1>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Nytt rom</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-muted rounded-md p-2">{room.icon}</div>
                <div className="flex items-center">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {room.type === 'personal' ? 'Personlig' : room.type === 'team' ? 'Team' : 'Organisasjon'}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1">{room.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{room.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{room.members} {room.members === 1 ? 'medlem' : 'medlemmer'}</span>
                </div>
                <Button variant="ghost" size="sm">Åpne</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default Rooms;
