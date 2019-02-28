import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blue, blueGrey, red } from '@material-ui/core/colors';

const primaryStyle = {
    palette: {
        primary: grey,
        secondary: blue,
        accent: blueGrey,
        text: {
            primary: red[100],
            secondary: blue[100],
            disabled: blueGrey,
        }
    },
};

const secondaryStyle = {
    palette: {
        primary: blue,
        secondary: grey,
        accent: blueGrey,
        text: {
            primary: blue[100],
            secondary: red[100],
            disabled: blueGrey,
        }
    },
}

export const PrimaryTheme = createMuiTheme(primaryStyle);

export const SecondaryTheme = createMuiTheme(secondaryStyle)