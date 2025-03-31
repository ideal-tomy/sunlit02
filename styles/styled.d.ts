import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      secondary: string;
      secondaryDark: string;
      secondaryLight: string;
      accent: string;
      text: string;
      textLight: string;
      border: string;
      background: string;
      white: string;
      error: string;
      success: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    maxWidth: string;
    fonts: {
      primary: string;
      secondary: string;
      accent: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
  }
}
