import { theme } from './Theme.style';

const { palette: { primary } } = theme;

export default {
    root: {
        backgroundColor: 'white',
        '& a': {
            color: primary.contrastText,
            textDecoration: 'none',
            display: 'inline',
        },
        '& a:hover': {
            cursor: 'pointer'
        }
    }
};