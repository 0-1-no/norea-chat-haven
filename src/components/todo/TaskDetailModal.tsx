
import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Plus, X, Calendar, Flag, Hash, Bell, MapPin, ChevronDown, CirclePlus } from "lucide-react";
import { Task, SubTask } from './TaskItem';
import { useMediaQuery } from '@/hooks/use-mobile';

interface TaskDetailModalProps {
  task: Task | null;
  open: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const TaskDetailModal = ({ task, open, onClose, onSave }: TaskDetailModalProps) => {
  const [editedTask, setEditedTask] = useState<Task | null>(null);
  const [newSubtask, setNewSubtask] = useState('');
  const isMobile = useMediaQuery('(max-width: 640px)');
  
  useEffect(() => {
    // Deep clone the task when it changes
    if (task) {
      setEditedTask(JSON.parse(JSON.stringify(task)));
    }
  }, [task]);
  
  const handleSave = () => {
    if (editedTask) {
      onSave(editedTask);
      onClose();
    }
  };
  
  const handleSubtaskToggle = (id: number) => {
    if (!editedTask) return;
    
    const updatedSubtasks = editedTask.subtasks?.map(subtask => 
      subtask.id === id ? { ...subtask, completed: !subtask.completed } : subtask
    );
    
    setEditedTask({
      ...editedTask,
      subtasks: updatedSubtasks
    });
  };
  
  const handleAddSubtask = () => {
    if (!editedTask || !newSubtask.trim()) return;
    
    const newId = Math.max(0, ...(editedTask.subtasks?.map(s => s.id) || [])) + 1;
    
    setEditedTask({
      ...editedTask,
      subtasks: [
        ...(editedTask.subtasks || []),
        { id: newId, title: newSubtask, completed: false }
      ]
    });
    
    setNewSubtask('');
  };
  
  const handleDeleteSubtask = (id: number) => {
    if (!editedTask) return;
    
    setEditedTask({
      ...editedTask,
      subtasks: editedTask.subtasks?.filter(subtask => subtask.id !== id)
    });
  };
  
  const ContentComponent = isMobile ? Sheet : Dialog;
  const SpecificContent = isMobile ? SheetContent : DialogContent;
  const HeaderComponent = isMobile ? SheetHeader : DialogHeader;
  const TitleComponent = isMobile ? SheetTitle : DialogTitle;
  const FooterComponent = isMobile ? SheetFooter : DialogFooter;
  const CloseComponent = isMobile ? SheetClose : DialogClose;
  
  if (!editedTask) return null;
  
  const modalContent = (
    <>
      <HeaderComponent className="pb-0">
        <div className="flex items-center">
          <Checkbox 
            checked={editedTask.completed} 
            onCheckedChange={() => setEditedTask({...editedTask, completed: !editedTask.completed})}
            className="mr-3"
          />
          <TitleComponent className="p-0">
            <Input
              className="border-none text-xl font-semibold px-0 focus-visible:ring-0 h-auto"
              value={editedTask.title}
              onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
              placeholder="Oppgavetittel"
            />
          </TitleComponent>
        </div>
      </HeaderComponent>
      
      <div className="py-4 space-y-6">
        <Textarea
          placeholder="Her er en beskrivelse"
          className="resize-none min-h-[80px] border-none focus-visible:ring-0 px-0"
          value={editedTask.description || ''}
          onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
        />
        
        <div>
          <h3 className="font-medium mb-2">Underoppgaver</h3>
          <div className="space-y-2 mb-3">
            {editedTask.subtasks && editedTask.subtasks.length > 0 ? (
              editedTask.subtasks.map((subtask) => (
                <div key={subtask.id} className="flex items-center group">
                  <Checkbox 
                    checked={subtask.completed}
                    onCheckedChange={() => handleSubtaskToggle(subtask.id)}
                    className="mr-2"
                  />
                  <Input 
                    className="flex-1 border-none focus-visible:ring-0 px-0 h-8"
                    value={subtask.title}
                    onChange={(e) => {
                      const updatedSubtasks = editedTask.subtasks?.map(st => 
                        st.id === subtask.id ? { ...st, title: e.target.value } : st
                      );
                      setEditedTask({...editedTask, subtasks: updatedSubtasks});
                    }}
                  />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleDeleteSubtask(subtask.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-sm text-muted-foreground">Ingen underoppgaver ennå</div>
            )}
          </div>
          
          <div className="flex items-center">
            <Input
              className="flex-1 border-x-0 border-t-0 rounded-none focus-visible:ring-0"
              placeholder="Legg til underoppgave"
              value={newSubtask}
              onChange={(e) => setNewSubtask(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddSubtask()}
            />
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-2"
              onClick={handleAddSubtask}
              disabled={!newSubtask.trim()}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-1.5 text-sm">
            <div className="flex items-center">
              <Hash className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Prosjekt</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              {editedTask.project || 'Ingen'}
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
          
          <div className="flex items-center justify-between py-1.5 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Dato</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              {editedTask.dueDate || 'Ingen'}
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
          
          <div className="flex items-center justify-between py-1.5 text-sm">
            <div className="flex items-center">
              <Flag className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Prioritet</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              {editedTask.priority === 'high' ? 'Høy' : 
               editedTask.priority === 'medium' ? 'Medium' : 'Lav'}
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
          
          <div className="flex items-center justify-between py-1.5 text-sm">
            <div className="flex items-center">
              <Bell className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Påminnelser</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              Ingen
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
          
          <div className="flex items-center justify-between py-1.5 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Sted</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              Ingen
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
      
      <FooterComponent>
        <div className="flex justify-between items-center w-full">
          <Button variant="outline" onClick={onClose}>Avbryt</Button>
          <Button onClick={handleSave}>Lagre endringer</Button>
        </div>
      </FooterComponent>
    </>
  );
  
  return isMobile ? (
    <Sheet open={open} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-lg" side="bottom" showX>
        {modalContent}
      </SheetContent>
    </Sheet>
  ) : (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[540px]">
        {modalContent}
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailModal;
