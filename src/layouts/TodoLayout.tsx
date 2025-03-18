
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Briefcase, Target } from 'lucide-react';

interface TodoLayoutProps {
  children: React.ReactNode;
}

const TodoLayout: React.FC<TodoLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const getActiveTab = () => {
    if (currentPath.includes('/tasks')) return 'tasks';
    if (currentPath.includes('/projects')) return 'projects';
    if (currentPath.includes('/goals')) return 'goals';
    return 'overview';
  };

  const handleTabChange = (value: string) => {
    switch (value) {
      case 'tasks':
        navigate('/assistant/todo/tasks');
        break;
      case 'projects':
        navigate('/assistant/todo/projects');
        break;
      case 'goals':
        navigate('/assistant/todo/goals');
        break;
      default:
        navigate('/assistant/todo');
        break;
    }
  };

  return (
    <PageContainer title="Todo Assistent">
      <div className="container mx-auto px-4 py-4">
        <div className="mb-8">
          <Tabs value={getActiveTab()} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full grid grid-cols-4 h-12">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <span className="hidden md:inline">Oversikt</span>
                <span className="md:hidden">Hjem</span>
              </TabsTrigger>
              <TabsTrigger value="tasks" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="hidden md:inline">Oppgaver</span>
                <span className="md:hidden">Oppg.</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden md:inline">Prosjekter</span>
                <span className="md:hidden">Prosj.</span>
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span className="hidden md:inline">Mål</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {children}
      </div>
    </PageContainer>
  );
};

export default TodoLayout;
