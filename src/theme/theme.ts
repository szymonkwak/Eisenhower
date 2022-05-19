import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      //   default: '#222222',
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
  shape: {
    // borderRadius: 10,
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
          paddingLeft: 4,
          paddingRight: 0,
          paddingBottom: 0,
          paddingTop: 8,
        },
      },
    },
  },
});
