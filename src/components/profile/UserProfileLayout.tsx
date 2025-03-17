
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useLocation, useNavigate } from 'react-router-dom';

interface UserProfileLayoutProps {
  children: React.ReactNode;
}

export const UserProfileLayout: React.FC<UserProfileLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleTabChange = (value: string) => {
    navigate(value);
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Brukerkonto</h1>
      
      <Tabs 
        defaultValue={currentPath}
        value={currentPath}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="w-full mb-8">
          <TabsTrigger value="/profile" className="flex-1">Profil</TabsTrigger>
          <TabsTrigger value="/settings" className="flex-1">Innstillinger</TabsTrigger>
          <TabsTrigger value="/personalization" className="flex-1">Personalisering</TabsTrigger>
          <TabsTrigger value="/memory" className="flex-1">Hukommelse</TabsTrigger>
        </TabsList>
        <TabsContent value={currentPath}>
          {children}
        </TabsContent>
      </Tabs>
    </div>
  );
};
