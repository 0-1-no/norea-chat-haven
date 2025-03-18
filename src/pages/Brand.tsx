
import React, { useRef, useEffect, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { PageContainer } from '@/components/layout/PageContainer';
import { useTheme } from 'next-themes';
import GlowingOrb from '@/components/brand/GlowingOrb';

const Brand = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageContainer title="Brand" showBackButton={false}>
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Brand</h1>
          <p className="text-muted-foreground">
            The Norea brand assets and elements that define our visual identity.
          </p>
        </div>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Logo</h2>
          <p className="text-muted-foreground">
            The Norea logo should be used consistently across all platforms and applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-white p-8 rounded-lg shadow flex items-center justify-center border">
              <div className="text-3xl font-bold text-gray-900">Norea</div>
            </div>
            
            <div className="bg-purple-700 p-8 rounded-lg shadow flex items-center justify-center">
              <div className="text-3xl font-bold text-white">Norea</div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-700 to-purple-400 p-8 rounded-lg shadow flex items-center justify-center">
              <div className="text-3xl font-bold text-white">Norea</div>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Norea Orb</h2>
          <p className="text-muted-foreground">
            The Norea Orb represents our brand's essence - intelligent, elegant, and responsive. It combines depth, clarity, and subtle motion in a minimalist design.
          </p>
          
          <h3 className="text-xl font-medium mt-6">Size Variants</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-24 py-16">
            {/* Small */}
            <div className="flex flex-col items-center">
              <GlowingOrb size="small" />
              <span className="mt-4 text-sm text-muted-foreground">Small</span>
            </div>
            
            {/* Medium */}
            <div className="flex flex-col items-center">
              <GlowingOrb size="medium" />
              <span className="mt-4 text-sm text-muted-foreground">Medium</span>
            </div>
            
            {/* Large */}
            <div className="flex flex-col items-center">
              <GlowingOrb size="large" />
              <span className="mt-4 text-sm text-muted-foreground">Large</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
            <h3 className="font-medium">Design Principles:</h3>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>Minimalist design with sophisticated depth and translucency</li>
              <li>Subtle animation that responds to interaction</li>
              <li>Adaptive color scheme that works beautifully in both light and dark modes</li>
              <li>Precision-crafted reflections and shadows for a premium look</li>
              <li>Brand-aligned color palette with subtle gradients</li>
            </ul>
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default Brand;
