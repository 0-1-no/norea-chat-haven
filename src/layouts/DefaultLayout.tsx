
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <PageContainer title="Character Profile" description="View character details and start a conversation">
      {children}
    </PageContainer>
  );
};

export default DefaultLayout;
