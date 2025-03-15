
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { ChatInterface } from '@/components/ChatInterface';

const Index = () => {
  return (
    <PageContainer title="Hjem" showBackButton={false}>
      <ChatInterface 
        userName="John"
        className="flex-1"
      />
    </PageContainer>
  );
};

export default Index;
