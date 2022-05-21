import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#703f37',
    },
    primary: {
      main: '#703f37',
      light: '#6746c3',
      dark: '#000063',
    },
    secondary: {
      main: '#e1bee7',
      light: '#fff1ff',
      dark: '#af8eb5',
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderColor: '#703f37',
        },
        elevation1: {
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderColor: '#703f37',
          color: 'white',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'white',
          padding: 0,
          margin: 2,
        },
      },
    },
  },
});
