import { createTheme } from "@mui/material/styles";
import typography from "./Typography";

const customBreakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1400,
    xxl: 1600,
  },
};

const baselightTheme = createTheme({
  direction: 'ltr',
  palette: {
    primary: {
      main: '#285a9e',
      light: 'rgb(236, 242, 255)',
      extraLight: '#5c84c3',
      dark: '#1e3e67',
      contrastText: '#ffffff',
      contrast: '#5785D0'
    },
    secondary: {
      main: '#18244d',
      contrastText: '#ffffff',
      light: '#F4F5F9',
    },

    success: {
      main: '#09D880',
      light: '#c9f0da',
      dark: '#02b3a9',
      contrastText: '#ffffff',
      extraDark: '#00A15D'
    },
    info: {
      main: '#539BFF',
      light: '#EBF3FE',
      dark: '#1682d4',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF0000',
      light: '#FDEDE8',
      dark: '#f3704d',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFAE1F',
      light: '#ffeecc',
      dark: '#ae8e59',
      contrastText: '#ffffff',
    },
    grey: {
      main: '#DBDCDE',
      light: '#EAEFF4',
      300: '#DFE5EF',
      400: '#7C8FAC',
      500: '#5A6A85',
      600: '#2A3547'
    },
    bg: {
      main: ''
    },
    accent: {
      main:'#f48124',
      light: '#FDEDE8',
      dark: '#dd222b',
      extraDark: '#00A15D'
    },
    text: {
      main: '#3a3541',
      light:'#89868D',
      disabled: '#B4B2B7',
      white: '#fff'
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hoverOpacity: 0.02,
      hover: '#f6f9fc',
    },
    divider: '#e5eaef',
  },
  typography,
});

const basedarkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#2a2c42', 
    },
    primary: {
      main: '#ffffff1a',
      light: '#12152c',
      extraLight: '#5c84c3',
      dark: '#1e3e67',
      contrastText: '#ffffff',
      },
      secondary:{
        light: '#63636',
        main: '#12152c',
        dark: '#47b9d5',
      },
      info:{
        main: '#49b4d8',
        dark: '#182738',
      }

  },
  typography,
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXxl: {
          maxWidth: '100%',
          '@media (max-width: 1399.95px)': {
            maxWidth: '1400px',
          },
        },
      },
    },
  },
});

export { baselightTheme, basedarkTheme };
