import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF7433',
      contrastText: '#fff'
    },
    secondary: {
      main: '#43a593',
      contrastText: '#fff'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});

theme.typography.h1 = {
  fontSize: '1.5rem',
  textTransform: 'capitalize',
  fontWeight: '500',
  '@media (min-width:600px)': {
    fontSize: '1.8rem',
    fontWeight: '500'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
    fontWeight: '400'
  }
};

export default theme;
