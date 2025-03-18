import React, { useState } from 'react';
import TodoLayout from '@/layouts/TodoLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Clock, ListChecks, Calendar, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

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

  // Today's tasks only - keeping it minimal
  const todayTasks = [
    {
      id: 1,
      title: "Skrive rapport",
      priority: "high",
      completed: false,
      timeBlock: "09:00 - 11:00"
    },
    {
      id: 2,
      title: "Ringe tannlegen",
      priority: "medium",
      completed: false,
      timeBlock: "11:30 - 12:00"
    },
    {
      id: 3,
      title: "Kjøpe melk",
      priority: "low",
      completed: false,
      timeBlock: "17:00 - 17:30"
    }
  ];

  // Focus task - the most important task for today
  const focusTask = {
    id: 1,
    title: "Skrive rapport",
    description: "Ferdigstille kvartalsrapporten for prosjekt X",
    priority: "high",
    timeBlock: "09:00 - 11:00"
  };

  const getCompletionPercentage = () => {
    return Math.round(stats.tasks.completed / stats.tasks.total * 100);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-amber-500';
      case 'low':
        return 'bg-emerald-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <TodoLayout>
      <div className="max-w-2xl mx-auto space-y-8">
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

            {/* Focus task (Cal Newport style - single most important task) */}
            <Card className="mb-8 bg-slate-50 border-none shadow-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <div className="mr-3 p-1.5 rounded-full bg-indigo-100">
                    <Clock className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-lg font-medium">Viktigste oppgave nå</h2>
                </div>
                
                <div className="pl-11">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`h-3 w-3 rounded-full mt-1.5 ${getPriorityColor(focusTask.priority)}`} />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{focusTask.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{focusTask.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Timeblokk: {focusTask.timeBlock}</span>
                  </div>
                </div>
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
                  <div 
                    key={task.id} 
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => navigate('/assistant/todo/tasks')}
                  >
                    <div className={`h-3 w-3 rounded-full ${getPriorityColor(task.priority)}`} />
                    <div className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {task.title}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {task.timeBlock}
                    </div>
                  </div>
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
