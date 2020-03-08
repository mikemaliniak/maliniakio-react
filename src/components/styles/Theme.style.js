import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[500],
        contrastText: '#222'
      },
      text: 'black'
    }
})