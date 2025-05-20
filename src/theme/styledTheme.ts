interface BreakpointValues {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface Breakpoints {
  values: BreakpointValues;
  up: (key: keyof BreakpointValues) => string;
  down: (key: keyof BreakpointValues) => string;
  between: (start: keyof BreakpointValues, end: keyof BreakpointValues) => string;
  only: (key: keyof BreakpointValues) => string;
}

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: {
      primary: string;
      secondary: string;
    };
    error: string;
    success: string;
    warning: string;
    info: string;
    border: string;
    hover: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    round: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  breakpoints: Breakpoints;
  typography: {
    fontFamily: string;
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeights: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
}

const breakpointValues: BreakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const breakpoints: Breakpoints = {
  values: breakpointValues,
  up: (key) => `@media (min-width:${breakpointValues[key]}px)`,
  down: (key) => `@media (max-width:${breakpointValues[key] - 0.05}px)`,
  between: (start, end) => 
    `@media (min-width:${breakpointValues[start]}px) and (max-width:${breakpointValues[end] - 0.05}px)`,
  only: (key) => {
    const keys = Object.keys(breakpointValues) as Array<keyof BreakpointValues>;
    const index = keys.indexOf(key);
    if (index === 0) {
      return breakpoints.down(keys[1]);
    }
    if (index === keys.length - 1) {
      return breakpoints.up(key);
    }
    return breakpoints.between(key, keys[index + 1]);
  },
};

export const lightStyledTheme: Theme = {
  colors: {
    primary: '#263238',
    secondary: '#FFBB00',
    background: '#F9FAFF',
    text: {
      primary: '#263238',
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
  breakpoints,
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

export const darkStyledTheme: Theme = {
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