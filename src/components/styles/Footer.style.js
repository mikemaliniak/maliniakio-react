import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default {

    root: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: 'center',
        color: custom.white,
        '& svg': {
            color: custom.white,
            marginRight: '1rem'
        },
        '& svg:hover': {
            color: custom.primary,
            cursor: "pointer"
        },
        [breakpoints.up('md')]: {
            padding: '3rem 1.5rem',
        }
    }
}