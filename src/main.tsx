
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from "sonner"

// Create a meta viewport tag to disable zooming
const metaTag = document.createElement('meta');
metaTag.name = 'viewport';
metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
document.head.appendChild(metaTag);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
)
