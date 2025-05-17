export const lightStyledTheme = {
  colors: {
    primary: '#1A1A1A',
    secondary: '#FFBB00',
    background: '#FFFFFF',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
    error: '#FF4D4D',
    success: '#4CAF50',
    warning: '#FFA726',
    info: '#2196F3',
    border: '#E5E5E5',
    hover: '#F5F5F5',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.05)',
    large: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
      xxxl: '3rem',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
};

export const darkStyledTheme = {
  ...lightStyledTheme,
  colors: {
    primary: '#FFFFFF',
    secondary: '#FFBB00',
    background: '#121212',
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    error: '#FF4D4D',
    success: '#4CAF50',
    warning: '#FFA726',
    info: '#2196F3',
    border: '#2C2C2C',
    hover: '#1E1E1E',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.2)',
    large: '0 8px 24px rgba(0, 0, 0, 0.3)',
  },
}; 