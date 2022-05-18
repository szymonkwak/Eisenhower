import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    // background: {
    //   default: '#222222',
    //   paper: '#222222',
    // },
    primary: {
      main: '#311b92',
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
    borderRadius: 10,
  },
});
