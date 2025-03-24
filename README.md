
# Norea Chat Application - Next.js Implementeringsveiledning

Dette dokumentet beskriver hvordan designsystemet og komponenter fra vår React/Vite-implementasjon skal migreres til en Next.js App Router-basert applikasjon.

## Mappestruktur og Konvertering

### React/Vite → Next.js App Router

| Nåværende (React/Vite) | Next.js App Router | Kommentarer |
|------------------------|-------------------|-------------|
| `/src/pages/Index.tsx` | `/app/page.tsx` | Hovedside |
| `/src/pages/ChatDemo.tsx` | `/app/(chat)/chat-demo/page.tsx` | Chat-side |
| `/src/pages/MemoryChat.tsx` | `/app/(chat)/memory-chat/page.tsx` | Minne-funksjonalitet |
| `/src/pages/WeatherChat.tsx` | `/app/(chat)/weather-chat/page.tsx` | Vær-implementasjon |
| `/src/components/` | `/components/` | Gjenbrukbare komponenter |
| `/src/layouts/` | `/app/layout.tsx` og grupperinger | Root layout og gruppelayouts |

## Server vs. Client Komponenter

### Server Komponenter (default i Next.js)

```tsx
// app/layout.tsx - Server Component
import { SidebarProvider } from '@/components/ui/sidebar';

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <html lang="no">
        <body>
          {children}
        </body>
      </html>
    </SidebarProvider>
  );
}
```

**Server-komponenter:**
- [`src/components/layout/PageContainer.tsx`](src/components/layout/PageContainer.tsx) → `/app/layout.tsx`
- [`src/components/sidebar/SidebarContent.tsx`](src/components/sidebar/SidebarContent.tsx) → `/components/sidebar/SidebarContent.tsx`
- [`src/components/Header.tsx`](src/components/Header.tsx) → `/components/Header.tsx`
- [`src/components/ui/tag.tsx`](src/components/ui/tag.tsx) → `/components/ui/tag.tsx`
- Statiske UI-elementer som ikke krever client-side interaktivitet

### Client Komponenter (må merkes med 'use client')

```tsx
// components/MessageInput.tsx - Client Component
'use client';

import React, { useState } from 'react';
// ... resten av komponenten
```

**Client-komponenter:**
- [`src/components/MessageInput.tsx`](src/components/MessageInput.tsx) → `/components/MessageInput.tsx`
- [`src/components/ChatInterface.tsx`](src/components/ChatInterface.tsx) → `/components/ChatInterface.tsx`
- [`src/components/message/Message.tsx`](src/components/message/Message.tsx) → `/components/message/Message.tsx`
- [`src/components/brand/NoreaOrb.tsx`](src/components/brand/NoreaOrb.tsx) → `/components/brand/NoreaOrb.tsx`
- Alle komponenter som bruker `useState`, `useEffect` eller andre React hooks
- Komponenter som håndterer brukerinput eller animasjoner

## Avhengighetskart for Komponenter

```
PageContainer (Server)
├── Header (Server)
│   └── SidebarTrigger (Client)
├── Sidebar (Client)
│   ├── SidebarHeader (Server)
│   ├── SidebarContent (Server)
│   │   └── SidebarMainContent (Server)
│   └── SidebarFooter (Server)
│       └── SidebarTestFooter (Server)
└── Content Area (Server)
    ├── ChatInterface (Client)
    │   ├── Message (Client)
    │   │   └── MemoryIndicator (Client)
    │   └── ChatInputContainer (Server)
    │       └── MessageInput (Client)
    └── NoreaOrb (Client)
```

### UI vs. Stateful Komponenter

**Rene UI-komponenter (tilstandsløse):**
- [`src/components/ui/button.tsx`](src/components/ui/button.tsx)
- [`src/components/ui/tag.tsx`](src/components/ui/tag.tsx)
- [`src/components/ui/separator.tsx`](src/components/ui/separator.tsx)
- [`src/components/ui/skeleton.tsx`](src/components/ui/skeleton.tsx)
- [`src/components/ui/carousel.tsx`](src/components/ui/carousel.tsx)

**Stateful komponenter (med logikk/tilstand):**
- [`src/components/MessageInput.tsx`](src/components/MessageInput.tsx) - Håndterer meldingsinnhold
- [`src/components/brand/NoreaOrb.tsx`](src/components/brand/NoreaOrb.tsx) - Håndterer animasjoner og interaktivitet
- [`src/components/ChatInterface.tsx`](src/components/ChatInterface.tsx) - Håndterer chat-logikk
- [`src/components/ui/sidebar.tsx`](src/components/ui/sidebar.tsx) - Håndterer sidebar-tilstand

## CSS og Design Tokens

### CSS-variabler og Design Tokens

**Alle design tokens og CSS-variabler bør flyttes til:**
- `/app/globals.css` (for CSS-variabler og base-stiler)
- `/tailwind.config.ts` (for Tailwind-integrasjon)

Fra [`src/index.css`](src/index.css) bør alle CSS-variabler flyttes til `/app/globals.css`:

```css
:root {
  /* Core colors */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  
  /* Primary brand colors */
  --primary: 263 70% 58%;
  --primary-foreground: 210 40% 98%;
  --primary-muted: 263 70% 90%;
  --primary-hover: 263 70% 50%;
  
  /* ... flere variabler ... */
}

.dark {
  --background: 222.2 47% 5%;
  --foreground: 210 40% 98%;
  /* ... mørk-modus variabler ... */
}
```

### Tailwind Config Migrering

Fra [`tailwind.config.ts`](tailwind.config.ts) bør konfigurasjon migreres til Next.js-prosjektets tilsvarende fil:

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          muted: 'hsl(var(--primary-muted))',
          hover: 'hsl(var(--primary-hover))',
        },
        /* ... flere farger ... */
      },
      /* ... andre utvidelser ... */
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

## Datamodeller og Props

### Sentrale Datamodeller

**Message Interface:**
```tsx
// types/chat.ts
export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  memories?: {
    type: 'retrieve' | 'store';
    content: string;
  }[];
}
```

**Weather Card Data:**
```tsx
// types/weather.ts
export type WeatherType = 'sunny' | 'partly-cloudy' | 'cloudy' | 'rainy' | 'drizzle' | 'snow';

export interface ForecastItem {
  day?: string;
  date?: string;
  time?: string;
  weatherType: WeatherType;
  highTemp?: number;
  lowTemp?: number;
  precipitation?: number;
  uvIndex?: number;
  windSpeed?: number;
}
```

### Prop Interface for Komponenter

**Message Component Props:**
```tsx
// components/message/Message.tsx
export type MessageRole = 'user' | 'ai';

interface MessageProps {
  content: string;
  role: MessageRole;
  className?: string;
  memories?: {
    type: 'retrieve' | 'store';
    content: string;
  }[];
}
```

**MessageInput Component Props:**
```tsx
// components/MessageInput.tsx
type MessageInputProps = {
  onSendMessage?: (message: string) => void;
  className?: string;
  placeholder?: string;
};
```

## Eksempelimplementasjoner for Next.js App Router

### Root Layout (App Layout)

```tsx
// app/layout.tsx
import { SidebarProvider } from '@/components/ui/sidebar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        <SidebarProvider defaultOpen={true}>
          <div className="h-screen w-full flex overflow-hidden backdrop-layer">
            {/* Sidebar implementasjon */}
            <div className="flex-1 overflow-hidden">
              {children}
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
```

### Chat Demo Page

```tsx
// app/(chat)/chat-demo/page.tsx
import { ChatDemo } from '@/components/pages/ChatDemo';

export const metadata = {
  title: 'Forstå kvantedatabehandling',
};

export default function ChatDemoPage() {
  return <ChatDemo />;
}
```

Tilsvarende komponent (`use client`-merket):
```tsx
// components/pages/ChatDemo.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { MessageInput } from "@/components/MessageInput";
import { Message } from '@/components/message/Message';
import { ChatInputContainer } from '@/components/ChatInputContainer';

export function ChatDemo() {
  // ... Implementasjon fra original ChatDemo.tsx
}
```

## Server vs. Client Funksjonalitet

### Server-side Funksjonalitet

**API Routes:**
```tsx
// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { message } = body;
  
  // Prosesser meldingen på serversiden
  const response = { message: `Svar på: ${message}` };
  
  return NextResponse.json(response);
}
```

**Data Fetching:**
```tsx
// app/(chat)/weather/page.tsx
import { WeatherChat } from '@/components/pages/WeatherChat';

// Server-side data fetching
async function getWeatherData() {
  // Hent værdata
  return { /* værdata */ };
}

export default async function WeatherPage() {
  const weatherData = await getWeatherData();
  
  return <WeatherChat initialData={weatherData} />;
}
```

### Client-side Funksjonalitet

**API Kall:**
```tsx
// hooks/use-chat.ts
'use client';

import { useState } from 'react';

export function useChat() {
  const [messages, setMessages] = useState([]);
  
  const sendMessage = async (content: string) => {
    // Legg til brukermelding
    setMessages(prev => [...prev, { role: 'user', content }]);
    
    // Kall API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: content }),
    });
    
    const data = await response.json();
    
    // Legg til AI-melding
    setMessages(prev => [...prev, { role: 'ai', content: data.message }]);
  };
  
  return { messages, sendMessage };
}
```

## Nøkkelkomponenter og Filreferanser

### Sentrale Komponenter i Designsystemet

1. **Layoutsystem:**
   - [`src/components/layout/PageContainer.tsx`](src/components/layout/PageContainer.tsx) - Hoverlayout-komponent
   - [`src/layouts/DefaultLayout.tsx`](src/layouts/DefaultLayout.tsx) - Standard sidelayout
   - [`src/layouts/TodoLayout.tsx`](src/layouts/TodoLayout.tsx) - Todo-spesifikk layout

2. **Chat-komponenter:**
   - [`src/components/message/Message.tsx`](src/components/message/Message.tsx) - Meldingsvisning med markdown-støtte
   - [`src/components/MessageInput.tsx`](src/components/MessageInput.tsx) - Inntastingsfelt for meldinger
   - [`src/components/ChatInputContainer.tsx`](src/components/ChatInputContainer.tsx) - Container for inputfelt

3. **UI-komponenter:**
   - [`src/components/ui/button.tsx`](src/components/ui/button.tsx) - Knappekomponent
   - [`src/components/ui/tag.tsx`](src/components/ui/tag.tsx) - Tag-komponent
   - [`src/components/ui/sidebar.tsx`](src/components/ui/sidebar.tsx) - Sidebar-implementasjon
   - [`src/components/ui/weather-card.tsx`](src/components/ui/weather-card.tsx) - Værkort-komponent

4. **Visuelle elementer:**
   - [`src/components/brand/GlowingOrb.tsx`](src/components/brand/GlowingOrb.tsx) - Glødende orb-effekt
   - [`src/components/brand/NoreaOrb.tsx`](src/components/brand/NoreaOrb.tsx) - Interaktiv Norea-orb

### CSS og Stiler

- [`src/index.css`](src/index.css) - CSS-variabler og globale stiler
- [`tailwind.config.ts`](tailwind.config.ts) - Tailwind-konfigurasjon

## Konklusjon

Ved å følge disse retningslinjene for migrering til Next.js App Router-struktur, vil Norea AI-designsystemet kunne implementeres effektivt i en Next.js-applikasjon, med riktig fordeling mellom server- og client-komponenter for optimal ytelse og brukeropplevelse.

De viktigste punktene å huske:
1. Server-komponenter brukes for statiske UI-elementer og datahenting
2. Client-komponenter merket med `'use client'` for interaktive elementer
3. CSS-variabler og design-tokens migreres til globals.css
4. API-ruter implementeres i `/app/api/`-strukturen
5. Komponenthierarkiet beholdes, men tilpasses App Router-strukturen

Denne migreringsstrukturen sikrer at designsystemet bevares akkurat som det er, samtidig som det drar nytte av Next.js-funksjonalitet for forbedret ytelse og brukeropplevelse.
