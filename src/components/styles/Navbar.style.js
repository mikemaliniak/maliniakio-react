import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: custom.white,
        padding: '2rem 1rem',
    },
    navContainer: {
        display: 'none',
        backgroundColor: custom.white,
        [breakpoints.up('md')]: {
            display: 'flex',
            opacity: 1
        }
    },

    navContainerOpen: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%'
    },

    link: {
        marginRight: '1rem',
        color: custom.black,
        textDecoration: 'none',
        transition: 'color 0.3s ease-in-out, font-weight 0.3s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            color: custom.primary,
            fontWeight: 'bolder'
        }
    },
    linkActive: {
        color: custom.primary
    },
    logo: {
        color: custom.black,
        textDecoration: 'none',
        fontWeight: 900,
        fontSmoothing: 'anit-aliased',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        transition: 'color 0.3s ease-in-out',
        '& svg': {
            color: custom.primary
        },
        '&:hover': {
            color: custom.primary
        }
    },
    logoTextIO: {
        color: custom.primary
    },
    menuController: {
        display: 'inline-block',
        [breakpoints.up('md')]: {
            display: 'none'
        }
    }
};