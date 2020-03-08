import { theme } from './Theme.style';

const { custom } = theme;

export default {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: '2rem 1rem',
        '& a': {
            color: custom.colors.black,
            textDecoration: 'none',
            display: 'inline',
            transition: 'color 0.3s ease-in-out'
        },
        '& a:hover': {
            cursor: 'pointer',
            color: custom.primary
        }
    }
};