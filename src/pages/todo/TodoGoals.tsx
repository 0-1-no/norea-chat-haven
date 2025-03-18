
import React from 'react';
import TodoLayout from '@/layouts/TodoLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Plus, Search, ArrowUpRight, CalendarClock } from 'lucide-react';

const TodoGoals = () => {
  // Sample goals data
  const goals = [
    {
      id: 1,
      title: "Lær et nytt språk",
      description: "Få grunnleggende kunnskap i spansk innen 6 måneder",
      deadline: "Oktober 2023",
      daysRemaining: 45,
      progress: 35,
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500"
    },
    {
      id: 2,
      title: "Oppgradere hjemmekontoret",
      description: "Få på plass nytt utstyr og en bedre arbeidsstasjon",
      deadline: "Desember 2023",
      daysRemaining: 75,
      progress: 60,
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-400"
    },
    {
      id: 3,
      title: "Bedre fysisk form",
      description: "Løpe 5 kilometer under 25 minutter",
      deadline: "Januar 2024",
      daysRemaining: 102,
      progress: 25,
      gradient: "bg-gradient-to-r from-green-500 to-emerald-400"
    }
  ];

  return (
    <TodoLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Søk i mål..."
              className="pl-9"
            />
          </div>
          <Button className="flex gap-2 bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4" />
            Nytt mål
          </Button>
        </div>
        
        <div className="space-y-5">
          {goals.map(goal => (
            <Card key={goal.id} className="overflow-hidden rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">{goal.title}</h2>
                    <p className="text-gray-500 text-sm">{goal.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full -mt-1 -mr-1">
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="mt-5">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Fremgang</span>
                    <span className="font-medium">{goal.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div 
                      className={`h-full ${goal.gradient}`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mt-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarClock className="h-4 w-4" />
                    <span>Frist: {goal.deadline}</span>
                  </div>
                  <div className="text-sm font-medium">
                    {goal.daysRemaining} dager igjen
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          {/* Add new goal card */}
          <Card className="border-dashed border-2 p-6 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
            <Button variant="ghost" className="flex flex-col items-center gap-3 h-auto py-8 px-8">
              <div className="rounded-full bg-purple-100 p-4">
                <Plus className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-base">Legg til nytt mål</span>
            </Button>
          </Card>
        </div>
      </div>
    </TodoLayout>
  );
};

export default TodoGoals;
