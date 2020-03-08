import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
    custom: {
      primary: red[500],
      colors: {
        white: '#fff',
        black: '#222'
      } 
    }
})