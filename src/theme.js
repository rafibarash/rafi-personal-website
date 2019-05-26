import { cyan, green, red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[600],
      contrastText: '#fff',
    },
    secondary: {
      main: green[600],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      primary: cyan[600],
      secondary: green[600],
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    htmlFontSize: 10,
    fontSize: 10,
  },
  overrides: {
    MuiContainer: {
      maxWidthMd: {
        maxWidth: '800px !important',
      },
      maxWidthLg: {
        maxWidth: '1100px !important',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
    MuiTypography: {
      body1: {
        fontSize: '1.14rem !important',
      },
    },
  },
});

export default responsiveFontSizes(theme);
