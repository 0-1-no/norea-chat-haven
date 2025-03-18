
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import TodoLayout from '@/layouts/TodoLayout';
import { projectsData } from './TodoProjects';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, Search, CheckCircle, ArrowLeft, List, MoreHorizontal, Calendar, ArrowDown, ArrowUp, GripVertical } from 'lucide-react';

// Mock tasks data with the same structure as in list view
const initialColumns = [
  {
    id: 'todo',
    title: 'Å gjøre',
    tasks: [
      { id: 1, title: 'Handle mat', priority: 'high', dueDate: '15. April' },
      { id: 2, title: 'Vaske gulv', priority: 'medium', dueDate: '18. April' },
      { id: 3, title: 'Betale regninger', priority: 'low', dueDate: '25. April' },
    ]
  },
  {
    id: 'inProgress',
    title: 'Under arbeid',
    tasks: [
      { id: 4, title: 'Rydde garasje', priority: 'medium', dueDate: '20. April' },
      { id: 5, title: 'Fikse vaskemaskinen', priority: 'high', dueDate: '16. April' },
    ]
  },
  {
    id: 'completed',
    title: 'Fullført',
    tasks: [
      { id: 6, title: 'Bytte lyspære', priority: 'low', dueDate: '12. April' },
      { id: 7, title: 'Sette opp hyller', priority: 'medium', dueDate: '10. April' },
    ]
  }
];

// Priority colors
const priorityColors = {
  high: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  low: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
};

const ProjectKanbanView = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(p => p.id === Number(projectId));
  const [columns, setColumns] = useState(initialColumns);
  const [draggingTaskId, setDraggingTaskId] = useState<number | null>(null);
  const [draggingColumnId, setDraggingColumnId] = useState<string | null>(null);

  if (!project) {
    return (
      <TodoLayout>
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">Prosjekt ikke funnet</h2>
          <p className="mt-2">Prosjektet du leter etter eksisterer ikke.</p>
          <Button asChild className="mt-4">
            <Link to="/assistant/todo/projects">Tilbake til prosjekter</Link>
          </Button>
        </div>
      </TodoLayout>
    );
  }

  // Handlers for drag and drop functionality
  const handleDragStart = (taskId: number, columnId: string) => {
    setDraggingTaskId(taskId);
    setDraggingColumnId(columnId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetColumnId: string) => {
    if (draggingTaskId === null || draggingColumnId === null) return;

    const newColumns = [...columns];
    const sourceColumnIndex = newColumns.findIndex(col => col.id === draggingColumnId);
    const targetColumnIndex = newColumns.findIndex(col => col.id === targetColumnId);
    
    if (sourceColumnIndex === -1 || targetColumnIndex === -1) return;

    const taskIndex = newColumns[sourceColumnIndex].tasks.findIndex(task => task.id === draggingTaskId);
    if (taskIndex === -1) return;

    // Remove task from source column
    const [task] = newColumns[sourceColumnIndex].tasks.splice(taskIndex, 1);
    
    // Add task to target column
    newColumns[targetColumnIndex].tasks.push(task);
    
    setColumns(newColumns);
    setDraggingTaskId(null);
    setDraggingColumnId(null);
  };

  return (
    <TodoLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/assistant/todo/projects">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <div className={`${project.color} w-3 h-3 rounded-full`}></div>
              {project.title}
            </h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/assistant/todo/projects/${projectId}/list`}>
                <List className="h-4 w-4 mr-1" />
                Liste
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Søk i oppgaver..." className="pl-9" />
          </div>
          <Button className="flex gap-2">
            <Plus className="h-4 w-4" />
            Ny oppgave
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto pb-6">
          {columns.map(column => (
            <div 
              key={column.id} 
              className="min-w-[300px] bg-secondary/50 rounded-lg p-4"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(column.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium">{column.title}</h2>
                <span className="text-sm bg-secondary px-2 py-0.5 rounded-full">
                  {column.tasks.length}
                </span>
              </div>
              
              <ScrollArea className="h-[calc(100vh-300px)]">
                <div className="space-y-3 pr-2">
                  {column.tasks.map(task => (
                    <Card 
                      key={task.id}
                      draggable
                      onDragStart={() => handleDragStart(task.id, column.id)}
                      className="cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow border-l-4 border-l-primary"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
                          <GripVertical className="h-5 w-5 text-muted-foreground mt-1 -ml-1" />
                          <div className="flex-1">
                            <div className="font-medium mb-2">{task.title}</div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                                {task.priority === 'high' ? 'Høy' : task.priority === 'medium' ? 'Medium' : 'Lav'}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                {task.dueDate}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    <Plus className="h-4 w-4 mr-2" />
                    Legg til oppgave
                  </Button>
                </div>
              </ScrollArea>
            </div>
          ))}
          
          {/* Add new column */}
          <div className="min-w-[300px] border-2 border-dashed border-muted rounded-lg p-4 flex items-center justify-center">
            <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <span>Ny kolonne</span>
            </Button>
          </div>
        </div>
      </div>
    </TodoLayout>
  );
};

export default ProjectKanbanView;
