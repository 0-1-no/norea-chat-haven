
import React from 'react';
import { Link } from 'react-router-dom';
import TodoLayout from '@/layouts/TodoLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, CheckCircle, Clock, List, LayoutGrid } from 'lucide-react';

// Mock project data that will be reused across project views
export const projectsData = [
  { 
    id: 1, 
    title: "Husholdning", 
    description: "Oppgaver relatert til hus og hjem", 
    tasks: 5, 
    completedTasks: 2, 
    color: "bg-blue-500"
  },
  { 
    id: 2, 
    title: "Jobb", 
    description: "Arbeidsrelaterte oppgaver og prosjekter", 
    tasks: 8, 
    completedTasks: 3, 
    color: "bg-purple-500"
  },
  { 
    id: 3, 
    title: "Økonomi", 
    description: "Økonomisk planlegging og oppgaver", 
    tasks: 3, 
    completedTasks: 1, 
    color: "bg-green-500"
  },
  { 
    id: 4, 
    title: "Helse", 
    description: "Treningsplan og helserelaterte oppgaver", 
    tasks: 4, 
    completedTasks: 2, 
    color: "bg-red-500"
  }
];

const TodoProjects = () => {
  return (
    <TodoLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Søk i prosjekter..."
              className="pl-9"
            />
          </div>
          <Button className="flex gap-2">
            <Plus className="h-4 w-4" />
            Nytt prosjekt
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map(project => (
            <Card key={project.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`${project.color} w-3 h-3 rounded-full`}></div>
                  <CardTitle>{project.title}</CardTitle>
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>{project.completedTasks}/{project.tasks} oppgaver</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>2 snart forfaller</span>
                  </div>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div 
                    className={`${project.color} h-2 rounded-full`} 
                    style={{ width: `${(project.completedTasks / project.tasks) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-4">
                  <Link to={`/assistant/todo/projects/${project.id}/list`} className="w-1/2 pr-1">
                    <Button variant="outline" size="sm" className="flex gap-1.5 w-full">
                      <List className="h-3.5 w-3.5" />
                      Liste
                    </Button>
                  </Link>
                  <Link to={`/assistant/todo/projects/${project.id}/kanban`} className="w-1/2 pl-1">
                    <Button variant="outline" size="sm" className="flex gap-1.5 w-full">
                      <LayoutGrid className="h-3.5 w-3.5" />
                      Kanban
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Add new project card */}
          <Card className="border-dashed border-2 flex items-center justify-center h-full min-h-[220px]">
            <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-8">
              <div className="rounded-full bg-primary/10 p-4">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <span>Nytt prosjekt</span>
            </Button>
          </Card>
        </div>
      </div>
    </TodoLayout>
  );
};

export default TodoProjects;
