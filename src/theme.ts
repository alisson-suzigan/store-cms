import { deepOrange, cyan } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: cyan,
    // type: 'dark',
  },
});

export default theme;