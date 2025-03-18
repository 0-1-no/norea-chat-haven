
import React, { useState } from 'react';
import TodoLayout from '@/layouts/TodoLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ListTodo, Clock, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const TodoApp = () => {
  const navigate = useNavigate();
  
  // Sample data (would be fetched from state/context in a real app)
  const stats = {
    tasks: {
      total: 12,
      due: 3,
      completed: 7
    }
  };
  
  // Priority tasks for today
  const todayTasks = [
    { id: 1, title: "Kjøpe melk", priority: "high", completed: false },
    { id: 2, title: "Skrive rapport", priority: "high", completed: false },
    { id: 3, title: "Ringe tannlegen", priority: "medium", completed: false }
  ];

  // Tasks due soon
  const upcomingTasks = [
    { id: 4, title: "Møte med teamet", priority: "medium", completed: false },
    { id: 5, title: "Betale regninger", priority: "high", completed: false }
  ];

  // Recently completed tasks
  const completedTasks = [
    { id: 6, title: "Lage innkjøpsliste", priority: "low", completed: true },
    { id: 7, title: "Vaske klær", priority: "medium", completed: true }
  ];

  const [selectedTaskGroup, setSelectedTaskGroup] = useState('today');

  // Determine which tasks to show based on selection
  const getTasksToShow = () => {
    switch(selectedTaskGroup) {
      case 'today': return todayTasks;
      case 'upcoming': return upcomingTasks;
      case 'completed': return completedTasks;
      default: return todayTasks;
    }
  };

  const getCompletionPercentage = () => {
    return Math.round((stats.tasks.completed / stats.tasks.total) * 100);
  };

  return (
    <TodoLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Focus Card */}
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold mb-1">Fokus for i dag</h1>
              <p className="text-muted-foreground">Hva er viktig akkurat nå?</p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Oppgaver fullført</span>
                <span className="text-sm text-muted-foreground">{stats.tasks.completed} av {stats.tasks.total}</span>
              </div>
              <Progress value={getCompletionPercentage()} className="h-2" />
            </div>
            
            <div className="flex gap-2 mb-6">
              <Button
                variant={selectedTaskGroup === 'today' ? 'default' : 'outline'}
                size="sm"
                className="flex items-center gap-1"
                onClick={() => setSelectedTaskGroup('today')}
              >
                <Clock size={16} />
                <span>I dag</span>
              </Button>
              <Button
                variant={selectedTaskGroup === 'upcoming' ? 'default' : 'outline'}
                size="sm"
                className="flex items-center gap-1"
                onClick={() => setSelectedTaskGroup('upcoming')}
              >
                <ListTodo size={16} />
                <span>Snart</span>
              </Button>
              <Button
                variant={selectedTaskGroup === 'completed' ? 'default' : 'outline'}
                size="sm"
                className="flex items-center gap-1"
                onClick={() => setSelectedTaskGroup('completed')}
              >
                <Check size={16} />
                <span>Fullført</span>
              </Button>
            </div>
            
            <div className="space-y-2 mb-6">
              {getTasksToShow().map(task => (
                <div 
                  key={task.id} 
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                  onClick={() => navigate('/assistant/todo/tasks')}
                >
                  <div className={`h-2 w-2 rounded-full ${
                    task.completed ? 'bg-green-500' :
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-amber-500' : 'bg-blue-500'
                  }`} />
                  <div className={`${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {task.title}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={() => navigate('/assistant/todo/tasks')} 
                className="flex items-center gap-2"
              >
                <Plus size={16} />
                <span>Ny oppgave</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/assistant/todo/tasks')}
              >
                Alle oppgaver
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </TodoLayout>
  );
};

export default TodoApp;
