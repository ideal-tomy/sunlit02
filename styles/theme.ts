import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#4A6572',
    primaryDark: '#334955',
    primaryLight: '#8FA3AD',
    secondary: '#F9AA33',
    secondaryDark: '#E09424',
    secondaryLight: '#FBCC85',
    accent: '#F9AA33',
    text: '#333333',
    textLight: '#666666',
    border: '#E5E5E5',
    background: '#F8F8F8',
    white: '#FFFFFF',
    error: '#DC3545',
    success: '#28A745',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: {
    mobile: '767px',
    tablet: '1023px',
    desktop: '1024px',
  },
  maxWidth: '1200px',
  fonts: {
    primary: '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
    secondary: '"Noto Sans JP", sans-serif',
    accent: '"Roboto", sans-serif',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '0.2s ease-in-out',
    medium: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
};

export default theme;
