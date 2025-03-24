
# Norea Chat Application

## Migrering til Next.js App Router

Dette designsystemet er utviklet med React, Vite og Tailwind CSS, men kan migreres til Next.js App Router struktur. Her er viktige instruksjoner for migrering:

### Mappehierarki og Ruting

**Nåværende struktur (React/Vite):**
- `/src/pages/` - Inneholder sidekomponenter
- `/src/components/` - UI-komponenter
- `/src/layouts/` - Layout-komponenter
- React Router DOM for ruting

**Next.js App Router struktur:**
- `/app/` - Mappehierarkiet definerer rutene
- `/app/page.tsx` - Hovedsiden (tilsvarer vår `Index.tsx`)
- `/app/(chat)/chat-demo/page.tsx` - Chat-demo (tilsvarer vår `ChatDemo.tsx`)
- `/components/` - UI-komponenter (kan beholdes som er)

### Migreringssteg

1. **Layout-komponenter:**
   - Flytt `src/components/layout/PageContainer.tsx` til `/app/layout.tsx` for å definere root layout
   - Konverter til Server Component der det er hensiktsmessig

2. **Side-komponenter:**
   - For hver side i `/src/pages/`, opprett tilsvarende mappe i `/app/`
   - Konverter hver side-komponent til en `page.tsx` fil i den relevante mappen
   - F.eks. `/src/pages/ChatDemo.tsx` → `/app/chat-demo/page.tsx`

3. **Ruting:**
   - Fjern React Router DOM avhengigheter
   - Erstatt `<Link to="/chat-demo">` med Next.js `<Link href="/chat-demo">`
   - Dynamiske ruter som `/room/:id` blir `/app/room/[id]/page.tsx` i Next.js

4. **CSS og Styling:**
   - CSS-variabler i `src/index.css` kan flyttes til `/app/globals.css`
   - Tailwind-konfigurasjon kan stort sett forbli uendret
   - CSS-moduler kan brukes for komponentspesifikk styling

## Teknisk Arkitektur

### Layout-systemet

Layout-systemet i Norea er bygget opp av flere lag som gir en konsistent brukeropplevelse:

#### 1. Backdrop (Bakgrunnslag)
- **Implementasjonsfil:** [`src/components/layout/PageContainer.tsx`](src/components/layout/PageContainer.tsx)
- **CSS-variabler:** `--backdrop-background`, `--backdrop-foreground` (i [`src/index.css`](src/index.css))
- **Next.js-plassering:** `/app/layout.tsx` 
- Fungerer som global bakgrunnsflate for hele applikasjonen
- Bruker en subtil lysegrå bakgrunn i lys modus (mørk modus tilgjengelig)

#### 2. Sidebar (Navigasjonslag)
- **Implementasjonsfil:** [`src/components/ui/sidebar.tsx`](src/components/ui/sidebar.tsx) og [`src/components/sidebar/SidebarContent.tsx`](src/components/sidebar/SidebarContent.tsx)
- **CSS-variabler:** `--sidebar-background`, `--sidebar-foreground`, `--sidebar-border`
- **Next.js-plassering:** `/components/sidebar/` og integreres i `/app/layout.tsx`
- Kan minimeres for å maksimere skjermplassen
- Kontrolleres av SidebarProvider-konteksten
- For mobilvisning: overlay-oppførsel i stedet for å skyve innhold

#### 3. Canvas (Innholdslag)
- **Implementasjonsfil:** [`src/components/layout/PageContainer.tsx`](src/components/layout/PageContainer.tsx)
- **CSS-variabler:** `--canvas-background`, `--canvas-foreground`, `--canvas-border`
- **Next.js-plassering:** Som en del av layout-strukturen i `/app/layout.tsx`
- Hevet over bakgrunnen med subtile skygger og kanter på desktop
- Tar full bredde på mobile enheter uten kanter eller avrundede hjørner

### Chat-komponenter

Chat-komponentene kan migreres direkte med minimal endring:

#### Hovedkomponenter
- [`src/components/message/Message.tsx`](src/components/message/Message.tsx) - Viser chatmeldinger
  - Støtter ulike meldingstyper (bruker/AI)
  - Håndterer markdown-innhold
  - **Next.js-plassering:** `/components/message/Message.tsx` (samme struktur)

- [`src/components/MessageInput.tsx`](src/components/MessageInput.tsx) - Inntastingsfelt
  - **Next.js-plassering:** `/components/MessageInput.tsx`
  - Kan forbli som Client Component (krever interaktivitet)

- [`src/components/ChatInputContainer.tsx`](src/components/ChatInputContainer.tsx) - Kontainer for inntastingskomponenter
  - **Next.js-plassering:** `/components/ChatInputContainer.tsx`

### Design-system

Design-systemet bruker CSS-variabler og Tailwind CSS, og kan migreres direkte:

#### Fargetokener
- **Implementasjonsfil:** [`src/index.css`](src/index.css) og [`tailwind.config.ts`](tailwind.config.ts)
- **Next.js-plassering:** `/app/globals.css` og `/tailwind.config.ts`
- Primærfarger: Lilla tema med ulike nyanser (`--primary`, `--primary-foreground`, `--primary-muted`)
- Overflatefarger: For ulike UI-elementer (`--backdrop-background`, `--canvas-background`)

#### Typografi og Spacing
- Fontstørrelser via Tailwind's innebygde skala
- Spacing-variabler: `--content-spacing-sm`, `--content-spacing-md`, `--content-spacing-lg`
- **Next.js-plassering:** Beholdes i `/app/globals.css` og `/tailwind.config.ts`

## Responsiv Design

Applikasjonen er fullt responsiv på tvers av alle enhetsstørrelser:

### Breakpoints
- **Implementasjonsfil:** [`tailwind.config.ts`](tailwind.config.ts) (screens-seksjonen)
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile tilpasninger i Next.js
- Sidebar blir et overlay som kan vises/skjules
- Canvas tar full bredde uten kanter/avrundede hjørner
- Sidebar er skjult som standard

## Viktige implementasjonsdetaljer for Next.js

### Server vs. Client Components
- Chat-grensesnittet krever klientside-interaktivitet
- Merk komponenter som krever klientside-funksjonalitet med `"use client"`
- Statiske UI-elementer kan være Server Components for forbedret ytelse

### Dataflyt
- Erstatt eventuelle React Context-implementasjoner med Next.js sin innebygde state management
- Vurder å bruke Server Actions for formhåndtering der det er relevant

### Bildehåndtering
- Bruk Next.js `<Image>` komponent for optimalisert bildehåndtering
- Endre bildestier for å støtte Next.js bildeoptimeringsløsning

### API-integrasjon
- Bruk Next.js API-ruter (`/app/api/`) for backend-funksjonalitet
- Implementer Server Actions for formhåndtering og dataendringer

## Bruk av denne dokumentasjonen

Denne README.md er designet for å fungere som en migreringsguide for AI-assistenter eller utviklere som skal implementere dette designsystemet i en Next.js App Router-basert applikasjon. Den inneholder detaljerte instruksjoner om strukturelle endringer, komponentplasseringer og tilpasninger som er nødvendige for en vellykket migrering.

