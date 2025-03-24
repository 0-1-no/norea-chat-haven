
# Norea Chat Application

## Project info

**URL**: https://lovable.dev/projects/f6979301-ada4-4942-9325-ae2a93cbefcd

## Technical Architecture

### File Structure Overview

The application's core files and components are organized as follows:

- **Layout System**: 
  - [`src/components/layout/PageContainer.tsx`](src/components/layout/PageContainer.tsx) - Main layout container
  - [`src/components/layout/LayoutContent.tsx`](src/components/layout/LayoutContent.tsx) - Content area layout
  - [`src/components/layout/LayoutArchitecture.tsx`](src/components/layout/LayoutArchitecture.tsx) - Layout architecture documentation
  - [`src/layouts/DefaultLayout.tsx`](src/layouts/DefaultLayout.tsx) - Default layout wrapper

- **Styling and Design System**:
  - [`src/index.css`](src/index.css) - CSS variables and base styling
  - [`tailwind.config.ts`](tailwind.config.ts) - Tailwind configuration
  - [`src/pages/DesignTokens.tsx`](src/pages/DesignTokens.tsx) - Design tokens visualization
  - [`src/pages/Typography.tsx`](src/pages/Typography.tsx) - Typography system
  - [`src/pages/ComponentLibrary.tsx`](src/pages/ComponentLibrary.tsx) - Component showcase

- **Chat Components**:
  - [`src/components/message/Message.tsx`](src/components/message/Message.tsx) - Message component
  - [`src/components/MessageInput.tsx`](src/components/MessageInput.tsx) - Input field component
  - [`src/components/ChatInputContainer.tsx`](src/components/ChatInputContainer.tsx) - Input container
  - [`src/pages/ChatDemo.tsx`](src/pages/ChatDemo.tsx) - Standard chat implementation
  - [`src/pages/MemoryChat.tsx`](src/pages/MemoryChat.tsx) - Memory demonstration chat
  - [`src/pages/WeatherChat.tsx`](src/pages/WeatherChat.tsx) - Weather integrated chat
  - [`src/pages/FollowUpChat.tsx`](src/pages/FollowUpChat.tsx) - Follow-up questions demo

## Layout Architecture

The Norea Chat application follows a well-defined layout architecture consisting of three main areas:

### 1. Backdrop (Root Layer)
- Implementation file: [`src/components/layout/PageContainer.tsx`](src/components/layout/PageContainer.tsx)
- CSS variables: `--backdrop-background`, `--backdrop-foreground` (in [`src/index.css`](src/index.css))
- Functions as the global background surface for the entire application
- Uses a subtle light gray background in light mode (dark mode available)
- Provides visual contrast for other layout elements

### 2. Sidebar (Navigation Layer)
- Implementation file: [`src/components/ui/sidebar.tsx`](src/components/ui/sidebar.tsx) and [`src/components/sidebar/SidebarContent.tsx`](src/components/sidebar/SidebarContent.tsx)
- CSS variables: `--sidebar-background`, `--sidebar-foreground`, `--sidebar-border` (in [`src/index.css`](src/index.css))
- Contains navigation, recent chats and user profile information
- Can be minimized to maximize screen space
- Adapts for mobile: overlay behavior instead of pushing content
- Automatically collapses on mobile by default
- Controlled by the SidebarProvider context

### 3. Canvas (Content Layer)
- Implementation file: [`src/components/layout/PageContainer.tsx`](src/components/layout/PageContainer.tsx) (inside the second layer div)
- CSS variables: `--canvas-background`, `--canvas-foreground`, `--canvas-border` (in [`src/index.css`](src/index.css))
- Main content area where chat interface is rendered
- Elevated above background with subtle shadows and borders on desktop
- Takes full width on mobile devices without borders or rounded corners
- Contains header, chat messages and input components

## Design System

The application uses a comprehensive design system built on tokens, implemented through CSS variables and Tailwind CSS:

### Color Tokens
- Implementation file: [`src/index.css`](src/index.css) (CSS variables) and [`tailwind.config.ts`](tailwind.config.ts) (Tailwind configuration)
- Primary colors: Purple theme with different shades (`--primary`, `--primary-foreground`, `--primary-muted`)
- Surface colors: For different UI elements (`--backdrop-background`, `--canvas-background`, `--sidebar-background`)
- Interactive colors: For buttons and interactive elements (`--interactive-background`, `--interactive-hover`)
- Semantic colors: For status indication (`--destructive`, `--muted`, etc.)

### Spacing Tokens
- Implementation file: [`tailwind.config.ts`](tailwind.config.ts) (extends the spacing section)
- Content spacing: Small (0.75rem), Medium (1.25rem), Large (2rem)
- Component-specific spacing using Tailwind's built-in scale
- Spacing variables: `--content-spacing-sm`, `--content-spacing-md`, `--content-spacing-lg`

### Typography
- Implementation file: [`src/pages/Typography.tsx`](src/pages/Typography.tsx) (documentation) and [`src/index.css`](src/index.css) (base implementation)
- Font sizes controlled via Tailwind's built-in scale
- Consistent text styles across components
- Text color variables: `--foreground`, `--muted-foreground`, etc.

### Shadows and Effects
- Implementation file: [`src/index.css`](src/index.css) (CSS variables) and [`tailwind.config.ts`](tailwind.config.ts) (extensions)
- Multiple levels of shadows to create depth
- Surface shadow variables: `--surface-shadow-sm`, `--surface-shadow-md`, `--surface-shadow-lg`

### Animations
- Implementation file: [`tailwind.config.ts`](tailwind.config.ts) (keyframes and animation extensions)
- Fade-in, Slide-up, Pulse effects
- Consistent timing for transitions
- Animation classes: `animate-fade-in`, `animate-slide-up`, etc.

## Responsive Design

The application is fully responsive across all device sizes:

### Breakpoints
- Implementation file: [`tailwind.config.ts`](tailwind.config.ts) (screens section)
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Max content width: 1400px

### Mobile Adaptations
- Sidebar becomes an overlay that can be toggled
- Canvas takes full width without borders/rounded corners
- Sidebar is hidden by default
- Touch-friendly tap areas

### Tablet Adaptations
- Similar to desktop, but with adjusted spacing
- Retains sidebar with option for minimization

### Desktop Experience
- Full layout with visible sidebar by default
- Canvas with consistent padding and rounded corners
- Maximum width restrictions for optimal readability

## Chat Components

The application contains a range of specialized chat views:

### Implemented Chat Types
- Standard chat ([`/chat-demo`](src/pages/ChatDemo.tsx))
- Memory demonstration ([`/memory-chat`](src/pages/MemoryChat.tsx)) - Shows how AI remembers context
- Weather demonstration ([`/weather-chat`](src/pages/WeatherChat.tsx)) - Integrates weather forecasts
- Follow-up chat ([`/followup-chat`](src/pages/FollowUpChat.tsx)) - Shows follow-up questions

### Chat Components Structure
- [`Message`](src/components/message/Message.tsx) - Displays chat messages with support for different content types
  - Supports user and AI message styles with different background colors
  - Handles markdown content rendering
  - Supports memory indicators for context tracking
- [`MessageInput`](src/components/MessageInput.tsx) - Input field for new messages
  - Handles text input and submission
  - Supports auto-resizing
- [`ChatInputContainer`](src/components/ChatInputContainer.tsx) - Container for input components
  - Creates a sticky footer for the chat interface
  - Handles spacing and layout for the input area

## Important Implementation Details

### Message Styling
- User messages: Background color `--user-message-bg`, text color `--user-message-text`
- AI messages: Background color `--ai-message-bg`, text color `--ai-message-text`
- Both message types should use `text-foreground dark:text-foreground` for proper dark mode visibility

### Theme Support
- Light and dark mode support through CSS variables in [`src/index.css`](src/index.css)
- Theme switching managed by the `next-themes` package
- Dark mode classes applied with `dark:` prefix in Tailwind

### Layout Responsiveness
- Mobile-first approach with progressive enhancement
- Media queries controlled primarily through Tailwind breakpoints
- Key breakpoint implementation: 
  - Mobile layout: Default styles (no prefix)
  - Tablet and up: `sm:` prefix (≥640px)
  - Desktop: `md:` prefix (≥768px) and `lg:` prefix (≥1024px)

## How to use this project

There are several ways to edit the application.

**Use Lovable**

Visit [Lovable Project](https://lovable.dev/projects/f6979301-ada4-4942-9325-ae2a93cbefcd) and start writing instructions.

Changes made via Lovable will automatically be committed to this repository.

**Use your preferred IDE**

If you want to work locally with your own IDE, you can clone this repository and push changes. Changes that are pushed will also be reflected in Lovable.

The only requirement is to have Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository with the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project folder.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-uploading and instant preview.
npm run dev
```

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS
- React Router DOM
