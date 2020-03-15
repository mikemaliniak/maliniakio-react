import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default {

    root: {
        display: "flex",
        justifyContent: "space-around",
        '& svg': {
            color: custom.white
        }
    }
}