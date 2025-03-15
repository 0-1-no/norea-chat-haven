
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from 'next-themes';
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme={true} storageKey="ui-theme">
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
