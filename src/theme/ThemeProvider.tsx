import React, { useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';
import { lightStyledTheme, darkStyledTheme } from './styledTheme';
import { useAppSelector } from '../store/hooks';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const mode = useAppSelector((state) => state.theme.mode);

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
  const styledTheme = useMemo(() => (mode === 'light' ? lightStyledTheme : darkStyledTheme), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={styledTheme}>
        <CssBaseline />
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}; 