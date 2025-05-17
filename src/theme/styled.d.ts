import 'styled-components';
import { styledTheme } from './styledTheme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof styledTheme.colors;
    spacing: typeof styledTheme.spacing;
    borderRadius: typeof styledTheme.borderRadius;
    shadows: typeof styledTheme.shadows;
    breakpoints: typeof styledTheme.breakpoints;
    typography: typeof styledTheme.typography;
  }
} 