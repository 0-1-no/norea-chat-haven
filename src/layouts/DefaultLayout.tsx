
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <PageContainer title="Kosmisk Hype" description="Trendy, energisk og alltid oppdatert på de nyeste kulturelle trendene">
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
        {children}
      </div>
    </PageContainer>
  );
};

export default DefaultLayout;
