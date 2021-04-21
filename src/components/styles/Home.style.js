import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default {
    link: {
        fontWeight: 800,
        textDecoration: 'none',
        color: custom.primary,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    highLight: {
        fontWeight: 'bolder'
    }
}