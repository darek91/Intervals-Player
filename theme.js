import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {
  cyan500,
  blue500
} from 'material-ui/styles/colors';

const playerTheme = getMuiTheme({
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: blue500
  }
});

console.log(darkBaseTheme);

export default playerTheme;
