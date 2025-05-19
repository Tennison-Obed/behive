import { createTheme, ThemeOptions } from '@mui/material/styles';
import styled from 'styled-components';

const commonThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          boxShadow: 'none',
          color: 'var(--text-primary)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          },
        },
        containedSecondary: {
          backgroundColor: 'var(--secondary-main)',
          color: 'var(--text-primary)',
          '&:hover': {
            backgroundColor: 'var(--secondary-dark)',
            boxShadow: '0 4px 8px rgba(255, 187, 0, 0.2)',
          },
          '&:active': {
            backgroundColor: 'var(--secondary-dark)',
            boxShadow: '0 2px 4px rgba(255, 187, 0, 0.15)',
          },
          '&:disabled': {
            backgroundColor: 'var(--grey-300)',
            color: 'var(--grey-500)',
          },
        },
        outlinedSecondary: {
          borderColor: 'var(--secondary-main)',
          color: 'var(--secondary-main)',
          '&:hover': {
            borderColor: 'var(--secondary-dark)',
            backgroundColor: 'rgba(255, 187, 0, 0.04)',
            borderWidth: '2px',
          },
          '&:active': {
            backgroundColor: 'rgba(255, 187, 0, 0.08)',
          },
          '&:disabled': {
            borderColor: 'var(--grey-300)',
            color: 'var(--grey-500)',
          },
        },
        textSecondary: {
          color: 'var(--secondary-main)',
          '&:hover': {
            backgroundColor: 'rgba(255, 187, 0, 0.04)',
          },
          '&:active': {
            backgroundColor: 'rgba(255, 187, 0, 0.08)',
          },
          '&:disabled': {
            color: 'var(--grey-500)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#263238',
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: '#FFBB00',
      light: '#FFD54F',
      dark: '#F57C00',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#263238',
      secondary: '#666666',
    },
    error: {
      main: '#FF4D4D',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FFA726',
    },
    info: {
      main: '#2196F3',
    },
  },
});

export const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
      light: '#F5F5F5',
      dark: '#E0E0E0',
    },
    secondary: {
      main: '#FFBB00',
      light: '#FFD54F',
      dark: '#F57C00',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#263238',
      secondary: '#65624C',
    },
    error: {
      main: '#FF4D4D',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FFA726',
    },
    info: {
      main: '#2196F3',
    },
  },
});

const StyledComponent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
`; 