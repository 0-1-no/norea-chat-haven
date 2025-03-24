
# Norea Chat Application

## Project info

**URL**: https://lovable.dev/projects/f6979301-ada4-4942-9325-ae2a93cbefcd

## Layout Architecture

Norea Chat-applikasjonen følger en veldefinert layout-arkitektur bestående av tre hovedområder:

### 1. Backdrop
- Fungerer som den globale bakgrunnsoverflaten for hele applikasjonen
- Bruker en subtil lysegrå bakgrunn i lys modus (mørk modus tilgjengelig)
- Gir visuell kontrast for de andre layout-elementene

### 2. Sidebar
- Inneholder navigasjon, nylige chatter og brukerprofilinformasjon
- Kan minimeres for å maksimere skjermplassen
- Tilpasser seg for mobil: overlay-oppførsel i stedet for å skyve innhold
- Kollapser automatisk på mobil som standard

### 3. Canvas
- Hovedinnholdsområdet hvor chat-grensesnittet rendres
- Hevet over bakgrunnen med subtile skygger og kantlinjer på desktop
- Tar full bredde på mobile enheter uten kantlinjer eller avrundede kanter
- Inneholder header, chat-meldinger og input-komponenter

## Design System

Applikasjonen bruker et omfattende designsystem bygget på tokens, implementert gjennom CSS-variabler og Tailwind CSS:

### Color Tokens
- Primærfarger: Lilla tema med forskjellige nyanser
- Overflatefarger: For forskjellige UI-elementer (backdrop, canvas, sidebar)
- Interaktive farger: For knapper og interaktive elementer
- Semantiske farger: For statusindikasjon (destructive, muted, osv.)

### Spacing Tokens
- Innholdsavstand: Liten (0.75rem), Medium (1.25rem), Stor (2rem)
- Komponentspesifikk avstand ved hjelp av Tailwinds innebygde skala

### Typography
- Fontstørrelser kontrollert via Tailwinds innebygde skala
- Konsistente tekststiler på tvers av komponenter

### Shadows and Effects
- Flere nivåer av skygger for å skape dybde
- Overflateskygger: Liten, Medium, Stor

### Animations
- Fade-in, Slide-up, Pulse-effekter
- Konsistent timing for overganger

## Responsive Design

Applikasjonen er fullt responsiv på tvers av alle enhetsstørrelser:

### Breakpoints
- Mobil: < 768px
- Nettbrett: 768px - 1024px
- Desktop: > 1024px
- Maks innholdsbredde: 1400px

### Mobile Adaptations
- Sidebar blir en overlay som kan veksles
- Canvas tar full bredde uten kantlinjer/avrundede hjørner
- Sidebar er skjult som standard
- Berøringsvennlige trykkeområder

### Tablet Adaptations
- Ligner på desktop, men med justert avstand
- Beholder sidebar med mulighet for minimering

### Desktop Experience
- Full layout med synlig sidebar som standard
- Canvas med konsistent padding og avrundede hjørner
- Maksimal bredderestriksjoner for optimal lesbarhet

## Chat-komponenter

Applikasjonen inneholder en rekke spesialiserte chat-visninger:

### Implementerte Chat-typer
- Standard chat (/chat-demo)
- Minne-demonstrasjon (/memory-chat) - Viser hvordan AI husker kontekst
- Vær-demonstrasjon (/weather-chat) - Integrerer værmeldinger
- Oppfølgings-chat (/followup-chat) - Viser oppfølgingsspørsmål

### Chat-komponenter
- `Message` - Viser chat-meldinger med støtte for ulike innholdstyper
- `MessageInput` - Inputfelt for nye meldinger
- `ChatInputContainer` - Container for input-komponenter

## How to use this project

Det er flere måter å redigere applikasjonen på.

**Bruk Lovable**

Besøk [Lovable Project](https://lovable.dev/projects/f6979301-ada4-4942-9325-ae2a93cbefcd) og start å skrive instruksjoner.

Endringer gjort via Lovable vil automatisk bli commitet til dette repository.

**Bruk din foretrukne IDE**

Hvis du vil jobbe lokalt med din egen IDE, kan du klone dette repositoryet og pushe endringer. Endringer som pushes vil også reflekteres i Lovable.

Det eneste kravet er å ha Node.js & npm installert - [installer med nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Følg disse trinnene:

```sh
# Trinn 1: Klon repositoryet med prosjektets Git URL.
git clone <YOUR_GIT_URL>

# Trinn 2: Naviger til prosjektmappen.
cd <YOUR_PROJECT_NAME>

# Trinn 3: Installer de nødvendige avhengighetene.
npm i

# Trinn 4: Start utviklingsserveren med auto-opplasting og øyeblikkelig forhåndsvisning.
npm run dev
```

## Technologies Used

Dette prosjektet er bygget med:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router DOM
