
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Brain, Users, Book, Code, Microscope, Globe, Briefcase, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Rooms = () => {
  const navigate = useNavigate();
  
  const rooms = [
    {
      id: '1',
      name: 'AI Research Project',
      description: 'Personal research on LLM capabilities',
      icon: <Brain className="w-10 h-10 text-purple-500" />
    },
    {
      id: '2',
      name: 'Team Alpha',
      description: 'Marketing strategy development',
      icon: <Users className="w-10 h-10 text-blue-500" />
    },
    {
      id: '3',
      name: 'Personal Journal',
      description: 'Daily thoughts and reflections',
      icon: <Book className="w-10 h-10 text-emerald-500" />
    },
    {
      id: '4',
      name: 'Product Development',
      description: 'New product features and roadmap',
      icon: <Code className="w-10 h-10 text-amber-500" />
    },
    {
      id: '5',
      name: 'Biology Study',
      description: 'Research notes on cellular biology',
      icon: <Microscope className="w-10 h-10 text-green-500" />
    },
    {
      id: '6',
      name: 'Global Initiatives',
      description: 'Cross-functional international projects',
      icon: <Globe className="w-10 h-10 text-indigo-500" />
    },
    {
      id: '7',
      name: 'Executive Board',
      description: 'Strategic planning and governance',
      icon: <Briefcase className="w-10 h-10 text-red-500" />
    },
    {
      id: '8',
      name: 'Self Development',
      description: 'Personal growth and learning goals',
      icon: <UserCircle className="w-10 h-10 text-teal-500" />
    }
  ];

  const handleRoomClick = (roomId: string) => {
    navigate(`/room-view/${roomId}`);
  };

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
          <Card 
            key={room.id} 
            className="overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onClick={() => handleRoomClick(room.id)}
          >
            <div className="p-5">
              <div className="flex mb-4">
                <div className="bg-muted rounded-md p-2">{room.icon}</div>
              </div>
              <h3 className="font-semibold text-lg mb-1">{room.name}</h3>
              <p className="text-muted-foreground text-sm">{room.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default Rooms;
