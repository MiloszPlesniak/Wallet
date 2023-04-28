import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#24CCA7',
    },
    secondary: {
      main: '#4A56E2',
    },
    negative: {
      main: '#FF6596',
    },
    background: {
      main: '#E7EAF2',
      purple: '#C5BAFF',
      purpleDark: '#4A56E2',
      orange: '#FFD8D0',
    },
  },
  typography: {
    fontFamily: [
      'Circe',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '20px',
          opacity: '0.7',
          transition: 'opacity .3s ease-in-out',
          fontFamily: 'Circe',
          fontStyle: 'normal',
          fontWeight: 400,

          '&:hover': {
            opacity: '1',
          },
        },
      },

      defaultProps: {
        variant: 'standard',
        fullWidth: true,
        margin: 'normal',
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '18px',
          backgroundColor: '#24CCA7',
          color: '#FFFFFF',
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
