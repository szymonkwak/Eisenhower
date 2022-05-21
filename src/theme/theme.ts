import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#5c8d81',
    },
    primary: {
      main: '#703f37',
      light: '#6746c3',
      dark: '#334b45',
    },
    secondary: {
      main: '#c29591',
      light: '#fff1ff',
      dark: '#af8eb5',
    },
  },

  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderWidth: 3,
          borderColor: '#334b45',
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
