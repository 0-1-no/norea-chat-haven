
import React from 'react';
import TodoLayout from '@/layouts/TodoLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Target, CalendarClock, ArrowUpRight, CheckCircle, Briefcase } from 'lucide-react';

const TodoGoals = () => {
  // Sample goals data
  const goals = [
    {
      id: 1,
      title: "Lær et nytt språk",
      description: "Få grunnleggende kunnskap i spansk innen 6 måneder",
      deadline: "Oktober 2023",
      progress: 35,
      projects: 2,
      tasks: 12,
      completedTasks: 4
    },
    {
      id: 2,
      title: "Oppgradere hjemmekontoret",
      description: "Få på plass nytt utstyr og en bedre arbeidsstasjon",
      deadline: "Desember 2023",
      progress: 60,
      projects: 1,
      tasks: 8,
      completedTasks: 5
    }
  ];

  return (
    <TodoLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Søk i mål..."
              className="pl-9"
            />
          </div>
          <Button className="flex gap-2">
            <Plus className="h-4 w-4" />
            Nytt mål
          </Button>
        </div>
        
        <div className="space-y-6">
          {goals.map(goal => (
            <Card key={goal.id}>
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Fremgang</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-muted-foreground" />
                      <span>Frist: {goal.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{goal.projects} prosjekter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span>{goal.completedTasks}/{goal.tasks} oppgaver fullført</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Se detaljer</Button>
                    <Button variant="outline" size="sm">
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      Legg til prosjekt
                    </Button>
                    <Button variant="outline" size="sm">
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      Legg til oppgave
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Empty state / Add new goal card */}
          {goals.length === 0 ? (
            <Card className="py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ingen mål ennå</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Mål hjelper deg med å holde fokus på de store tingene som er viktige for deg.
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Opprett ditt første mål
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-dashed border-2">
              <CardContent className="flex items-center justify-center py-8">
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Plus className="h-5 w-5 text-primary" />
                  </div>
                  <span>Legg til nytt mål</span>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </TodoLayout>
  );
};

export default TodoGoals;
