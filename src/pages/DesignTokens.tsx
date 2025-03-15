import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Tag } from '@/components/ui/tag';

const DesignTokens = () => {
  // Color tokens from our design system
  const colorTokens = [
    { name: '--background', value: 'hsl(0 0% 100%)', dark: 'hsl(222.2 47% 5%)' },
    { name: '--foreground', value: 'hsl(222.2 84% 4.9%)', dark: 'hsl(210 40% 98%)' },
    { name: '--primary', value: 'hsl(263 70% 58%)', dark: 'hsl(263 70% 58%)' },
    { name: '--primary-foreground', value: 'hsl(210 40% 98%)', dark: 'hsl(210 40% 98%)' },
    { name: '--primary-muted', value: 'hsl(263 70% 90%)', dark: 'hsl(263 55% 25%)' },
    { name: '--primary-hover', value: 'hsl(263 70% 50%)', dark: 'hsl(263 70% 65%)' },
    { name: '--secondary', value: 'hsl(210 40% 96.1%)', dark: 'hsl(217.2 32.6% 12%)' },
    { name: '--secondary-foreground', value: 'hsl(222.2 47.4% 11.2%)', dark: 'hsl(210 40% 98%)' },
    { name: '--muted', value: 'hsl(210 40% 96.1%)', dark: 'hsl(217.2 32.6% 12%)' },
    { name: '--muted-foreground', value: 'hsl(215.4 16.3% 46.9%)', dark: 'hsl(215 20.2% 75%)' },
  ];

  // Border radius tokens
  const radiusTokens = [
    { name: '--radius-sm', value: '0.5rem' },
    { name: '--radius-md', value: '0.75rem' },
    { name: '--radius-lg', value: '1rem' },
  ];

  // Spacing tokens
  const spacingTokens = [
    { name: '--content-spacing-sm', value: '0.75rem' },
    { name: '--content-spacing-md', value: '1.25rem' },
    { name: '--content-spacing-lg', value: '2rem' },
  ];

  // Shadow tokens
  const shadowTokens = [
    { name: '--surface-shadow-sm', value: '0 1px 2px rgba(0, 0, 0, 0.05)' },
    { name: '--surface-shadow-md', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
    { name: '--surface-shadow-lg', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
  ];

  // Viewport breakpoints
  const breakpointTokens = [
    { name: 'sm', value: '640px' },
    { name: 'md', value: '768px' },
    { name: 'lg', value: '1024px' },
    { name: 'xl', value: '1280px' },
    { name: '2xl', value: '1400px' },
  ];

  return (
    <PageContainer title="Design Tokens" showBackButton={true}>
      <div className="space-y-8">
        {/* Colors */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Light Mode</h3>
              <div className="space-y-3">
                {colorTokens.map((token) => (
                  <div key={token.name} className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-md border border-border shadow-sm" 
                      style={{ backgroundColor: token.value }}
                    />
                    <div>
                      <p className="text-sm font-medium">{token.name}</p>
                      <p className="text-xs text-muted-foreground">{token.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Dark Mode</h3>
              <div className="space-y-3">
                {colorTokens.map((token) => (
                  <div key={token.name + '-dark'} className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-md border border-border shadow-sm" 
                      style={{ backgroundColor: token.dark }}
                    />
                    <div>
                      <p className="text-sm font-medium">{token.name}</p>
                      <p className="text-xs text-muted-foreground">{token.dark}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Border Radius</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {radiusTokens.map((token) => (
              <div key={token.name} className="border border-border p-4 rounded-lg">
                <div 
                  className="w-full h-20 bg-primary mb-3 border border-border" 
                  style={{ borderRadius: token.value }}
                />
                <p className="text-sm font-medium">{token.name}</p>
                <p className="text-xs text-muted-foreground">{token.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Content Spacing</h2>
          <div className="space-y-4">
            {spacingTokens.map((token) => (
              <div key={token.name} className="border border-border p-4 rounded-lg">
                <div className="flex gap-2 items-center mb-2">
                  <p className="text-sm font-medium">{token.name}</p>
                  <p className="text-xs text-muted-foreground">{token.value}</p>
                </div>
                <div className="bg-secondary p-2 rounded-md">
                  <div 
                    className="w-full h-8 bg-primary"
                    style={{ padding: token.value }}
                  >
                    <div className="w-full h-full bg-primary-muted rounded-md"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Shadows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {shadowTokens.map((token) => (
              <div key={token.name} className="p-4 rounded-lg">
                <div 
                  className="w-full h-24 bg-surface border border-surface-border rounded-lg mb-3" 
                  style={{ boxShadow: token.value }}
                />
                <p className="text-sm font-medium">{token.name}</p>
                <p className="text-xs text-muted-foreground truncate">{token.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Breakpoints */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Viewport Breakpoints</h2>
          <div className="space-y-2">
            {breakpointTokens.map((token) => (
              <div key={token.name} className="flex justify-between items-center p-3 border border-border rounded-lg">
                <div>
                  <span className="text-sm font-medium mr-2">{token.name}</span>
                  <span className="text-xs text-muted-foreground">({token.value})</span>
                </div>
                <Tag text={token.value} variant="outline" size="sm" />
              </div>
            ))}
          </div>
        </section>

        {/* Animation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Animation Tokens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-border p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">fade-in</p>
              <div className="h-16 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
                <div className="animate-fade-in w-16 h-16 bg-primary rounded-md"></div>
              </div>
            </div>
            
            <div className="border border-border p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">slide-up</p>
              <div className="h-16 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
                <div className="animate-slide-up w-16 h-16 bg-primary rounded-md"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default DesignTokens;
