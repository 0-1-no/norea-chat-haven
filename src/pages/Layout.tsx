
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { LayoutContent } from '@/components/layout/LayoutContent';

const Layout = () => {
  return (
    <PageContainer title="Layout" showBackButton={false}>
      <LayoutContent />
    </PageContainer>
  );
};

export default Layout;
