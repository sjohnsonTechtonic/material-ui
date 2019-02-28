import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blue, blueGrey, red } from '@material-ui/core/colors';

const style = {
    palette: {
        primary: {
            main: grey[400],
            text: red[600]
        },
        secondary: blue,
        accent: blueGrey,
        textPrimary: red
    },
};

export default createMuiTheme(style);