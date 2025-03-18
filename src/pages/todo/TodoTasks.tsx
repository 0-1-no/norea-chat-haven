
import React, { useState } from 'react';
import TodoLayout from '@/layouts/TodoLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ChevronDown, 
  ChevronRight, 
  Plus, 
  Search, 
  Filter, 
  Calendar,
  Inbox,
  Clock,
  CheckCircle
} from 'lucide-react';
import TaskItem, { Task } from '@/components/todo/TaskItem';
import TaskDetailModal from '@/components/todo/TaskDetailModal';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const TodoTasks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['today', 'upcoming']);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Sample tasks data with subtasks
  const taskGroups = [
    {
      id: 'today',
      title: 'I dag',
      tasks: [
        { 
          id: 1, 
          title: "Skriv ukentlig rapport", 
          description: "Inkluder status på alle pågående prosjekter", 
          dueDate: "I dag", 
          priority: "high" as const, 
          completed: false, 
          project: "Jobb",
          subtasks: [
            { id: 101, title: "Samle data fra teamet", completed: true },
            { id: 102, title: "Analyser resultater", completed: false },
            { id: 103, title: "Skriv sammendrag", completed: false }
          ]
        },
        { 
          id: 2, 
          title: "Bestill takeaway", 
          dueDate: "I dag", 
          priority: "medium" as const, 
          completed: false, 
          project: "Husholdning" 
        },
      ]
    },
    {
      id: 'upcoming',
      title: 'Kommende',
      tasks: [
        { 
          id: 3, 
          title: "Forbered presentasjon", 
          description: "Lag slides for neste ukes møte",
          dueDate: "I morgen", 
          priority: "high" as const, 
          completed: false, 
          project: "Jobb",
          subtasks: [
            { id: 201, title: "Samle bilder og grafikk", completed: false },
            { id: 202, title: "Skriv manus", completed: false }
          ]
        },
        { 
          id: 4, 
          title: "Trening", 
          dueDate: "I morgen", 
          priority: "low" as const, 
          completed: false, 
          project: "Helse" 
        },
        { 
          id: 5, 
          title: "Planlegg helgen", 
          dueDate: "Fredag", 
          priority: "medium" as const, 
          completed: false 
        },
      ]
    },
    {
      id: 'completed',
      title: 'Fullført',
      tasks: [
        { 
          id: 6, 
          title: "Besvar e-poster", 
          dueDate: "I går", 
          priority: "medium" as const, 
          completed: true, 
          project: "Jobb" 
        },
        { 
          id: 7, 
          title: "Kjøp melk", 
          dueDate: "I går", 
          priority: "low" as const, 
          completed: true, 
          project: "Husholdning" 
        },
      ]
    }
  ];

  const toggleTaskCompletion = (taskId: number) => {
    // This would update your state in a real app
    console.log('Toggle completion for task:', taskId);
  };

  const openTaskDetail = (task: Task) => {
    setSelectedTask(task);
    setIsDetailOpen(true);
  };

  const saveTaskChanges = (updatedTask: Task) => {
    // This would update your state in a real app
    console.log('Save changes for task:', updatedTask);
  };

  const toggleSectionExpanded = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Filter tasks based on selected filter
  const getFilteredTaskGroups = () => {
    if (activeFilter === 'all') {
      return taskGroups;
    }
    
    if (activeFilter === 'inbox') {
      // Returns all non-completed tasks without specific projects
      const inboxTasks = taskGroups
        .filter(group => group.id !== 'completed')
        .map(group => ({
          ...group,
          tasks: group.tasks.filter(task => !task.project)
        }))
        .filter(group => group.tasks.length > 0);
      
      return inboxTasks;
    }
    
    if (activeFilter === 'today') {
      // Return just today's tasks
      return taskGroups.filter(group => group.id === 'today');
    }
    
    if (activeFilter === 'upcoming') {
      // Return just upcoming tasks
      return taskGroups.filter(group => group.id === 'upcoming');
    }
    
    if (activeFilter === 'completed') {
      // Return just completed tasks
      return taskGroups.filter(group => group.id === 'completed');
    }
    
    return taskGroups;
  };
  
  const filteredTaskGroups = getFilteredTaskGroups();

  return (
    <TodoLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
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
        
        {/* Quick Filter Buttons */}
        <div className="overflow-x-auto pb-2">
          <ToggleGroup type="single" value={activeFilter} onValueChange={(value) => value && setActiveFilter(value)}>
            <ToggleGroupItem value="all" aria-label="Vis alle oppgaver" className="px-4">
              Alle
            </ToggleGroupItem>
            <ToggleGroupItem value="inbox" aria-label="Vis innboks" className="flex items-center gap-2 px-4">
              <Inbox className="h-4 w-4" />
              Innboks
            </ToggleGroupItem>
            <ToggleGroupItem value="today" aria-label="Vis dagens oppgaver" className="flex items-center gap-2 px-4">
              <Calendar className="h-4 w-4" />
              I dag
            </ToggleGroupItem>
            <ToggleGroupItem value="upcoming" aria-label="Vis kommende oppgaver" className="flex items-center gap-2 px-4">
              <Clock className="h-4 w-4" />
              Kommende
            </ToggleGroupItem>
            <ToggleGroupItem value="completed" aria-label="Vis fullførte oppgaver" className="flex items-center gap-2 px-4">
              <CheckCircle className="h-4 w-4" />
              Fullført
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div className="space-y-4">
          {filteredTaskGroups.length > 0 ? (
            filteredTaskGroups.map(group => (
              <Card key={group.id} className="shadow-sm">
                <Collapsible
                  open={expandedSections.includes(group.id)}
                  onOpenChange={() => toggleSectionExpanded(group.id)}
                >
                  <div className="flex items-center py-3 px-4">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 mr-2">
                        {expandedSections.includes(group.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CardTitle className="text-base font-medium">{group.title}</CardTitle>
                    <div className="ml-auto text-sm text-muted-foreground">
                      {group.tasks.length} oppgaver
                    </div>
                  </div>
                  <Separator />
                  <CollapsibleContent>
                    <CardContent className="pt-3 pb-1">
                      <div className="space-y-0">
                        {group.tasks.map(task => (
                          <TaskItem
                            key={task.id}
                            task={task}
                            onToggleComplete={toggleTaskCompletion}
                            onOpenDetail={openTaskDetail}
                          />
                        ))}
                      </div>
                      <Button variant="ghost" className="text-muted-foreground text-sm mt-2 mb-1">
                        <Plus className="h-4 w-4 mr-2" />
                        Legg til oppgave
                      </Button>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Ingen oppgaver funnet</p>
            </div>
          )}
        </div>
      </div>

      <TaskDetailModal
        task={selectedTask}
        open={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onSave={saveTaskChanges}
      />
    </TodoLayout>
  );
};

export default TodoTasks;
