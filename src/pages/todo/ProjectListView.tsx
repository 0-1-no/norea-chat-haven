
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TodoLayout from '@/layouts/TodoLayout';
import { projectsData } from './TodoProjects';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Plus, Search, CheckCircle, ArrowLeft, LayoutGrid, MoreHorizontal, Calendar } from 'lucide-react';

// Mock tasks data
const tasksSections = [
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
  high: 'text-red-500',
  medium: 'text-amber-500',
  low: 'text-green-500'
};

const ProjectListView = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(p => p.id === Number(projectId));

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

  return (
    <TodoLayout>
      <div className="max-w-4xl mx-auto space-y-6">
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
              <Link to={`/assistant/todo/projects/${projectId}/kanban`}>
                <LayoutGrid className="h-4 w-4 mr-1" />
                Kanban
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

        <div className="space-y-6">
          {tasksSections.map(section => (
            <div key={section.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-lg">{section.title}</h2>
                <span className="text-sm text-muted-foreground">{section.tasks.length} oppgaver</span>
              </div>
              <Separator />
              <div className="space-y-2 pt-2">
                {section.tasks.map(task => (
                  <Card key={task.id} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <CheckCircle className="h-5 w-5 text-muted-foreground" />
                        </Button>
                        <div>
                          <CardTitle className="text-base">{task.title}</CardTitle>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-1 ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                          <span className="text-xs font-medium">
                            {task.priority === 'high' ? 'Høy' : task.priority === 'medium' ? 'Medium' : 'Lav'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{task.dueDate}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Legg til oppgave i {section.title.toLowerCase()}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TodoLayout>
  );
};

export default ProjectListView;
