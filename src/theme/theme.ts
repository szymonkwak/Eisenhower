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
    h1: {
      fontSize: '3rem',
      fontWeight: '600',
      '@media (max-width:840px)': {
        fontSize: '2.2rem',
      },
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: '500',
      '@media (max-width:840px)': {
        fontSize: '1.6rem',
      },
    },
    h3: {
      fontSize: '1.3rem',
      fontWeight: '500',
      '@media (max-width:840px)': {
        fontSize: '1.1rem',
      },
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: '400',
      lineHeight: 1.4,
      '@media (max-width:840px)': {
        fontSize: '1.2rem',
      },
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
