import { theme } from './Theme.style';

const { custom } = theme;

export default {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: '2rem 1rem',
    },
    linkContainer: {

    },
    link: {
        color: custom.colors.black,
        textDecoration: 'none',
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            color: custom.primary
        }
    },
    linkActive: {
        color: custom.primary
    },
    logo: {
        color: custom.colors.black,
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
    logoText: {}
};