
import React, { useState } from 'react';
import TodoLayout from '@/layouts/TodoLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ListChecks, Calendar, ArrowRight, Check, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import TaskItem, { Task } from '@/components/todo/TaskItem';
import { Tag } from '@/components/ui/tag';

const TodoApp = () => {
  const navigate = useNavigate();
  const [selectedTaskGroup, setSelectedTaskGroup] = useState('today');

  // Sample data (would be fetched from state/context in a real app)
  const stats = {
    tasks: {
      total: 12,
      due: 3,
      completed: 7
    }
  };

  // Today's tasks - formatted consistently with other pages
  const todayTasks: Task[] = [
    {
      id: 1,
      title: "Skrive ukentlig rapport",
      description: "Inkluder status på alle pågående prosjekter",
      priority: "high",
      completed: false,
      project: "Jobb",
      dueDate: "I dag"
    },
    {
      id: 2,
      title: "Bestill takeaway",
      priority: "medium",
      completed: false,
      project: "Husholdning",
      dueDate: "I dag"
    },
    {
      id: 3,
      title: "Kjøpe melk",
      priority: "low",
      completed: false,
      project: "Ærender",
      dueDate: "I dag"
    }
  ];

  // Focus task - the most important task for today
  const focusTask = todayTasks[0]; // Using the first task as focus task

  // Productivity quotes and tips
  const productivityTips = [
    "«Den viktigste oppgaven er ikke alltid den som haster mest.» — Cal Newport",
    "Bruk 'to-minutters regelen': hvis en oppgave tar mindre enn to minutter, gjør den med en gang.",
    "«Hvis du ikke har satt opp dagen, vil dagen sette opp deg.» — Cal Newport",
    "Del store oppgaver inn i mindre, håndterbare deler for å redusere overveldelse."
  ];

  // Randomly select a tip to display
  const randomTip = productivityTips[Math.floor(Math.random() * productivityTips.length)];

  const getCompletionPercentage = () => {
    return Math.round(stats.tasks.completed / stats.tasks.total * 100);
  };

  const handleToggleComplete = (taskId: number) => {
    // In a real app, this would update state or call an API
    console.log('Toggle task completion:', taskId);
  };

  const handleOpenTaskDetail = (task: Task) => {
    // In a real app, this would open the task detail modal/view
    console.log('Open task detail:', task);
  };

  return (
    <TodoLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Productivity coach section */}
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-amber-100 text-amber-600">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-medium mb-1">Din Produktivitetscoach</h3>
                <p className="text-sm text-muted-foreground">{randomTip}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main focus section */}
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Dagens fokus</h1>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  {new Date().toLocaleDateString('no-NO', { weekday: 'long', day: 'numeric', month: 'long' })}
                </p>
                <div className="text-sm text-muted-foreground">
                  {stats.tasks.completed} av {stats.tasks.total} oppgaver fullført
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Din fremgang</span>
                <span className="text-sm font-medium">{getCompletionPercentage()}%</span>
              </div>
              <Progress value={getCompletionPercentage()} className="h-2" />
            </div>

            {/* Focus task (Cal Newport style - single most important task) */}
            <Card className="mb-8 bg-slate-50 border-none shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Viktigste oppgave nå</CardTitle>
                <CardDescription>Fokuser på denne oppgaven for å maksimere produktiviteten din</CardDescription>
              </CardHeader>
              <CardContent>
                <TaskItem 
                  task={focusTask}
                  onToggleComplete={handleToggleComplete}
                  onOpenDetail={handleOpenTaskDetail}
                />
              </CardContent>
            </Card>
            
            <Separator className="my-6" />
            
            {/* Today's tasks */}
            <div className="space-y-1 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Dagens plan</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => navigate('/assistant/todo/tasks')}
                >
                  <span>Alle oppgaver</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-0.5">
                {todayTasks.map(task => (
                  <TaskItem 
                    key={task.id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onOpenDetail={handleOpenTaskDetail}
                  />
                ))}
              </div>
            </div>
            
            <Button 
              onClick={() => navigate('/assistant/todo/tasks')} 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Plus size={16} className="mr-2" />
              <span>Legg til oppgave</span>
            </Button>
          </CardContent>
        </Card>
        
        {/* Weekly review button (Newport advocates for regular reviews) */}
        <div className="flex justify-center">
          <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
            <ListChecks className="h-4 w-4 mr-2" />
            Ukentlig gjennomgang
          </Button>
        </div>
      </div>
    </TodoLayout>
  );
};

export default TodoApp;
