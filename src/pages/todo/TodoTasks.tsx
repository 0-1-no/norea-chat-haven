
import React, { useState } from 'react';
import TodoLayout from '@/layouts/TodoLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Plus, Search, Filter, Calendar, AlertCircle, Clock } from 'lucide-react';

const TodoTasks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample tasks data (would come from state management in a real app)
  const tasks = [
    { id: 1, title: "Kjøpe melk", dueDate: "I dag", priority: "Høy", completed: false, project: "Husholdning" },
    { id: 2, title: "Skrive rapport", dueDate: "I morgen", priority: "Medium", completed: false, project: "Jobb" },
    { id: 3, title: "Ringe tannlegen", dueDate: "Denne uken", priority: "Lav", completed: true, project: null },
    { id: 4, title: "Betale regninger", dueDate: "Neste uke", priority: "Medium", completed: false, project: "Økonomi" },
    { id: 5, title: "Vaske huset", dueDate: "Lørdag", priority: "Medium", completed: false, project: "Husholdning" },
    { id: 6, title: "Trening", dueDate: "I kveld", priority: "Lav", completed: false, project: "Helse" },
  ];

  return (
    <TodoLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Søk i oppgaver..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
            <Button className="flex gap-2">
              <Plus className="h-4 w-4" />
              Ny oppgave
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Dine oppgaver</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Ingen oppgaver funnet
                </div>
              ) : (
                tasks.map(task => (
                  <div 
                    key={task.id} 
                    className={`flex items-center justify-between p-3 border rounded-md ${
                      task.completed ? 'bg-muted border-muted-foreground/20' : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full p-1 ${
                        task.completed 
                          ? 'bg-green-100 text-green-500' 
                          : task.priority === 'Høy' 
                            ? 'bg-red-100 text-red-500' 
                            : task.priority === 'Medium'
                              ? 'bg-amber-100 text-amber-500'
                              : 'bg-gray-100 text-gray-500'
                      }`}>
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
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {task.dueDate}
                          </span>
                          {task.project && (
                            <span className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-0.5 rounded">
                              {task.project}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <CheckCircle size={16} className={task.completed ? 'text-green-500' : 'text-muted-foreground'} />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </TodoLayout>
  );
};

export default TodoTasks;
