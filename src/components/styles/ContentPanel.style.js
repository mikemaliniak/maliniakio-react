import { theme } from './Theme.style';

const { breakpoints } = theme;

export default {
    root: {
        display: 'flex',
        flexDirection: 'column',
        [breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    wrapper: {
        backgroundColor: theme.custom.white
    },
    col: {
        padding: '2rem 1rem'
    },
    textOuter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textInner: {
        width: '100%',
        textAlign: 'left',
        [breakpoints.up('sm')]: {
            width: '50%'
        }
    }
};