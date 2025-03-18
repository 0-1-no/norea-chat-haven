
import React from 'react';
import TodoLayout from '@/layouts/TodoLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Briefcase, Target, Plus, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TodoApp = () => {
  const navigate = useNavigate();
  
  // Sample data (would be fetched from state/context in a real app)
  const stats = {
    tasks: {
      total: 12,
      due: 3,
      completed: 7
    },
    projects: {
      total: 4,
      active: 3
    },
    goals: {
      total: 2
    }
  };
  
  const recentTasks = [
    { id: 1, title: "Kjøpe melk", dueDate: "I dag", priority: "Høy", completed: false },
    { id: 2, title: "Skrive rapport", dueDate: "I morgen", priority: "Medium", completed: false },
    { id: 3, title: "Ringe tannlegen", dueDate: "Denne uken", priority: "Lav", completed: true }
  ];

  return (
    <TodoLayout>
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle>Velkommen til Todo</CardTitle>
            <CardDescription>
              Din personlige produktivitets-assistent som hjelper deg å holde styr på hverdagen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground mb-4">
              Todo hjelper deg med å organisere oppgaver, prosjekter og langsiktige mål, slik at du kan fokusere på det som er viktig.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2 pt-4">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">Oppgaver</CardTitle>
                    <CheckCircle className="text-primary h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-3xl font-bold">{stats.tasks.total}</div>
                      <div className="text-sm text-muted-foreground">totalt</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center text-sm gap-1">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        <span>{stats.tasks.due} forfaller snart</span>
                      </div>
                      <div className="flex items-center text-sm gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span>{stats.tasks.completed} fullført</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-500/5 border-purple-500/20">
                <CardHeader className="pb-2 pt-4">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">Prosjekter</CardTitle>
                    <Briefcase className="text-purple-500 h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-3xl font-bold">{stats.projects.total}</div>
                      <div className="text-sm text-muted-foreground">totalt</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center text-sm gap-1">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span>{stats.projects.active} aktive</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardHeader className="pb-2 pt-4">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">Mål</CardTitle>
                    <Target className="text-blue-500 h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-3xl font-bold">{stats.goals.total}</div>
                      <div className="text-sm text-muted-foreground">langsiktige mål</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate('/assistant/todo/tasks')} className="flex items-center gap-2">
                <Plus size={16} />
                Ny oppgave
              </Button>
              <Button onClick={() => navigate('/assistant/todo/projects')} variant="outline" className="flex items-center gap-2">
                <Plus size={16} />
                Nytt prosjekt
              </Button>
              <Button onClick={() => navigate('/assistant/todo/goals')} variant="outline" className="flex items-center gap-2">
                <Plus size={16} />
                Nytt mål
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Tasks Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Nylige oppgaver</h2>
            <Button variant="ghost" onClick={() => navigate('/assistant/todo/tasks')}>
              Se alle
            </Button>
          </div>
          
          <div className="space-y-2">
            {recentTasks.map(task => (
              <Card key={task.id} className={`${task.completed ? 'bg-muted' : ''}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full p-1 ${task.completed 
                      ? 'bg-green-100 text-green-500' 
                      : task.priority === 'Høy' 
                        ? 'bg-red-100 text-red-500' 
                        : 'bg-gray-100 text-gray-500'}`}
                    >
                      {task.completed 
                        ? <CheckCircle size={18} /> 
                        : task.priority === 'Høy' 
                          ? <AlertCircle size={18} /> 
                          : <Clock size={18} />
                      }
                    </div>
                    <div>
                      <div className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {task.title}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock size={14} />
                        {task.dueDate}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => {}}>
                    <CheckCircle size={16} className={task.completed ? 'text-green-500' : 'text-muted-foreground'} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </TodoLayout>
  );
};

export default TodoApp;
