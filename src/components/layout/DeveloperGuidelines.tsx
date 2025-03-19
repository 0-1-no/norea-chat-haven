
import React from 'react';

export const DeveloperGuidelines: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Developer Guidelines</h2>
      <div className="bg-muted p-6 rounded-lg space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Layout Architecture</h3>
          <p className="text-sm">
            Always respect the layout architecture. New pages should be implemented within the <code>PageContainer</code> component
            which provides the correct layout structure. Don't modify the layout layers (backdrop, sidebar, canvas, content area)
            directly - only add content within the content area.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Component Structure</h3>
          <p className="text-sm">
            Keep components small and focused, ideally under 150 lines of code. Use composition to build complex UIs.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Design Token Usage</h3>
          <p className="text-sm">
            Always use design tokens instead of hardcoded values for colors, spacing, shadows, etc.
            This ensures consistency and makes theme changes easier.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Responsive Design</h3>
          <p className="text-sm">
            Design for mobile first, then expand to larger screens. Use Tailwind's responsive prefixes (sm:, md:, lg:, etc.)
            to adjust layouts based on screen size. The layout system automatically handles responsive behavior for the outer layers.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Accessibility</h3>
          <p className="text-sm">
            Ensure all components are accessible. Use proper semantic HTML, provide adequate color contrast,
            support keyboard navigation, and include ARIA attributes where needed.
          </p>
        </div>
      </div>
    </section>
  );
};
