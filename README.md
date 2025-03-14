
# Norea Chat Application

## Project info

**URL**: https://lovable.dev/projects/f6979301-ada4-4942-9325-ae2a93cbefcd

## Layout Architecture

The Norea Chat application follows a well-defined layout architecture consisting of three main areas:

### 1. Backdrop
- Serves as the global background surface for the entire application
- Uses a subtle light gray background in light mode (dark mode available)
- Provides visual contrast for the other layout elements

### 2. Sidebar
- Contains navigation, recent chats, and user profile information
- Collapsible for maximizing screen real estate
- Adapts for mobile: overlay behavior rather than pushing content
- Automatically collapses on mobile viewport by default

### 3. Canvas
- Main content area where the chat interface is rendered
- Elevated above the backdrop with subtle shadows and borders on desktop
- Takes full width on mobile devices without borders or rounded edges
- Contains the header, chat messages, and input components

## Design System

The application uses a comprehensive design system built on tokens, implemented through CSS variables and Tailwind CSS:

### Color Tokens
- Primary colors: Purple theme with various shades
- Surface colors: For different UI elements (backdrop, canvas, sidebar)
- Interactive colors: For buttons and interactive elements
- Semantic colors: For status indicators (destructive, muted, etc.)

### Spacing Tokens
- Content spacing: Small (0.75rem), Medium (1.25rem), Large (2rem)
- Component-specific spacing using Tailwind's built-in scale

### Typography
- Font sizes controlled via Tailwind's built-in scale
- Consistent text styles across components

### Shadows and Effects
- Multiple levels of shadows to create depth
- Surface shadows: Small, Medium, Large

### Animations
- Fade-in, Slide-up, Pulse effects
- Consistent timing for transitions

## Responsive Design

The application is fully responsive across all device sizes:

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Max content width: 1400px

### Mobile Adaptations
- Sidebar becomes an overlay that can be toggled
- Canvas takes full width without borders/rounded corners
- Sidebar is collapsed by default
- Touch-friendly tap targets

### Tablet Adaptations
- Similar to desktop but with adjusted spacing
- Maintains sidebar with toggle capability

### Desktop Experience
- Full layout with sidebar visible by default
- Canvas with consistent padding and rounded corners
- Maximum width constraint for optimal readability

## How to use this project

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f6979301-ada4-4942-9325-ae2a93cbefcd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
