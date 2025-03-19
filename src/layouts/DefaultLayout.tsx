
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';

interface DefaultLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ 
  children, 
  title = "Norea", 
  description = "Din personlige AI-assistent"
}) => {
  return (
    <PageContainer title={title} description={description}>
      <div className="flex-1 h-full flex flex-col">
        {children}
      </div>
    </PageContainer>
  );
};

export default DefaultLayout;
