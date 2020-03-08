import { theme } from './Theme.style';

const { palette: { primary } } = theme;

export default {
    root: {
        backgroundColor: primary.main,
        '& a': {
            color: primary.contrastText,
            textDecoration: 'none',
            display: 'inline'
        },
        '& a:hover': {
            cursor: 'pointer'
        }
    }
};