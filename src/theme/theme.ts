import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#538075',
    },
    primary: {
      main: '#538075',
      light: '#6746c3',
      dark: '#334b45',
    },
    secondary: {
      main: '#d9d9d9',
      light: '#fff1ff',
      dark: '#af8eb5',
    },
  },

  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    h3: {
      fontSize: '2rem',
      fontWeight: '500',
    },
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
    MuiChip: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});
