import { useState, useEffect, useMemo } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './header/header'
import { getStoredTheme, getThemeOptions, setStoredTheme } from '../utils/theme';
import { createTheme, PaletteMode, ThemeProvider, CssBaseline } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {

  const [mode, setMode] = useState<PaletteMode>('dark');

  useEffect(() => {
    // getStoredTheme가 존재하지 않으면 null
    const storedTheme = getStoredTheme();
    
    if (storedTheme) setMode(storedTheme);
  }, []);

  // 테마가 변경된 경우에 업데이트 시켜줌
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode])
  
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header mode={mode} onChange={() => {
      const newMode: PaletteMode = mode === "dark" ? "light" : "dark";

      setMode(newMode);
      setStoredTheme(newMode);
    }} />
    <Component {...pageProps} />
  </ThemeProvider>
}
