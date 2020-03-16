import { theme } from './Theme.style';

const { custom } = theme;

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
        }
    }
}