'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextValue {
  dark: boolean;
  toggleDark: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({ dark: false, toggleDark: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cs-theme');
      if (stored === 'dark') setDark(true);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    try { localStorage.setItem('cs-theme', dark ? 'dark' : 'light'); } catch {}
  }, [dark]);

  const toggleDark = () => setDark(d => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
