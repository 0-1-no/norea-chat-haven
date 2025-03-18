
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Calendar, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SubTask {
  id: number;
  title: string;
  completed: boolean;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate?: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  project?: string | null;
  subtasks?: SubTask[];
}

interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: number) => void;
  onOpenDetail: (task: Task) => void;
  level?: number;
}

const TaskItem = ({ task, onToggleComplete, onOpenDetail, level = 0 }: TaskItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubtasks = task.subtasks && task.subtasks.length > 0;
  
  const priorityColors = {
    high: 'text-red-500',
    medium: 'text-amber-500',
    low: 'text-green-500'
  };

  return (
    <div className={cn("animate-in", level > 0 && "ml-6 mt-1.5")}>
      <div 
        className={cn(
          "group flex items-center py-2.5 px-2 rounded-md hover:bg-accent transition-colors",
          task.completed && "text-muted-foreground"
        )}
      >
        {hasSubtasks ? (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0 mr-1 text-muted-foreground hover:text-foreground"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        ) : (
          <div className="w-6 mr-1" />
        )}
        
        <Checkbox 
          checked={task.completed}
          onCheckedChange={() => onToggleComplete(task.id)}
          className="mr-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />
        
        <div 
          className="flex-1 min-w-0 cursor-pointer"
          onClick={() => onOpenDetail(task)}
        >
          <div className={cn("text-base font-normal", task.completed && "line-through")}>
            {task.title}
          </div>
          
          {task.description && (
            <div className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
              {task.description}
            </div>
          )}
          
          {(task.dueDate || task.project) && (
            <div className="flex items-center gap-2 mt-1 text-xs">
              {task.dueDate && (
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {task.dueDate}
                </span>
              )}
              
              {task.project && (
                <span className="bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded">
                  {task.project}
                </span>
              )}
              
              {task.priority && (
                <span className={`${priorityColors[task.priority]} text-xs font-medium`}>
                  {task.priority === 'high' ? 'Høy' : task.priority === 'medium' ? 'Medium' : 'Lav'}
                </span>
              )}
            </div>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => onOpenDetail(task)}
        >
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
      
      {expanded && hasSubtasks && (
        <div className="border-l border-border ml-3 pl-2">
          {task.subtasks?.map(subtask => (
            <div key={subtask.id} className="flex items-center py-2 px-2">
              <Checkbox 
                checked={subtask.completed}
                className="mr-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <span className={cn(subtask.completed && "line-through text-muted-foreground")}>
                {subtask.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskItem;
